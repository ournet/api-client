import { startWithUpperCase, uniq } from "../utils";
import { getSchema, saveCodeFile, ActionType, getTypeByName, generateTypeScriptType, typeIsRequired, getTypeName, typeIsList, GeneratedInfo, TypeData, getJsTypeName, typeIsObject } from "./common";

export function generate() {

    const queryMethods = generateQueryMethods();
    const queryApi = generateApi('query');

    saveCodeFile([queryApi, queryMethods], 'ournet-query-api');

    const mutationMethods = generateMutationMethods();
    const mutationApi = generateApi('mutation');

    saveCodeFile([mutationApi, mutationMethods], 'ournet-mutation-api');
}

function generateApi(action: ActionType) {
    const schema = getSchema();
    const typeName: string = schema.data.__schema[action + 'Type'].name;
    const type = getTypeByName(typeName);
    const upperAction = startWithUpperCase(action);

    const importedTypes: string[] = []
    let hasDataField = false;

    const methods = type.fields.map(field => {
        const methodName = field.name.includes('_') ? (field.name.split('_')[0] + startWithUpperCase(field.name.split('_')[1])) : field.name;
        const methodArgsData = [{ name: 'key', type: 'keyof T' }];

        const resultIsObject = typeIsObject(field.type) || typeIsList(field.type) && typeIsObject(field.type.ofType.ofType);

        if (resultIsObject) {
            methodArgsData.push({ name: 'data', type: 'GraphQlQueryItemInput' });
            hasDataField = true;
        }
        const argData = {
            name: 'args',
            type: generateTypeScriptType(field.args.map(arg => {
                const typeName = getJsTypeName(arg.type);
                if (typeIsObject(arg.type)) {
                    importedTypes.push(getTypeName(arg.type));
                }
                return { name: arg.name, type: typeName, required: typeIsRequired(arg.type) };
            }))
        }
        if (field.args && field.args.length) {
            methodArgsData.push(argData);
        }


        const resultJsType = getJsTypeName(field.type);
        if (typeIsObject(field.type)) {
            importedTypes.push(getTypeName(field.type));
        }

        methodArgsData.push({
            name: 'mapper?',
            type: `IDataMapper<MR, ${resultJsType}>`
        });

        const methodArgs = methodArgsData.map(item => `${item.name}:${item.type}`);

        const variables = field.args.map(arg => {
            let typeName = getTypeName(arg.type);
            if (typeIsList(arg.type)) {
                if (arg.type.ofType && arg.type.ofType.ofType && typeIsRequired(arg.type.ofType.ofType)) {
                    typeName += '!';
                }
                typeName = `[${typeName}]`;
            }
            if (typeIsRequired(arg.type)) {
                typeName += '!';
            }
            return `{ name: '${arg.name}', value: args.${arg.name}, type: '${typeName}' }`;
        });

        const methodBody = `return this.addQueryItem(key,
            {
                ${resultIsObject ? 'fields: data.fields,' : ''}
                name: Ournet${upperAction}Methods.${field.name},
                mapper: mapper,
                variables: [
                    ${variables.join(',\n')}
                ]
            })`;

        return `${methodName}<MR>(${methodArgs.join(',\n')}) {
        
        ${methodBody}
    }`;
    });

    const data = `
import { GraphQlQuery } from "./graphql-query";
import { ${uniq(importedTypes).join(', ')} } from './ournet-api-types';
import { IGraphQlQueryExecutor, ${hasDataField ? 'GraphQlQueryItemInput,' : ''} IDataMapper } from "./graphql";

export class Ournet${upperAction}Api<T> extends GraphQlQuery<T, Ournet${upperAction}Methods> {
    constructor(executor: IGraphQlQueryExecutor) {
        super(executor, '${action}');
    }
    ${methods.join('\n\n')}
}
    `;

    return {
        name: `Ournet${upperAction}Api`,
        data
    }
}

function generateMutationMethods(): GeneratedInfo {
    const schema = getSchema();
    const typeName: string = schema.data.__schema['mutationType'].name;
    const type = getTypeByName(typeName);
    return generateMethods('mutation', type);
}
function generateQueryMethods(): GeneratedInfo {
    const schema = getSchema();
    const typeName: string = schema.data.__schema['queryType'].name;
    const type = getTypeByName(typeName);
    return generateMethods('query', type);
}

function generateMethods(action: ActionType, type: TypeData): GeneratedInfo {
    const names = type.fields.map(field => `    ${field.name} = "${field.name}"`);
    const name = `Ournet${startWithUpperCase(action)}Methods`;
    const data = `export enum ${name} {
${names.join(',\n')}
}`;

    return { name, data };
}


generate();
