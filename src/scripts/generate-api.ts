import { startWithUpperCase } from "../utils";
import { writeFileSync } from "fs";
import { join } from "path";

const schema = require('../../schema.json');

export function generate() {

    save([generateTypes()], 'ournet-api-types');

    const queryMethods = generateQueryMethods();
    const queryApi = generateApi('query');

    save([queryApi, queryMethods], 'ournet-query-api');

    const mutationMethods = generateMutationMethods();
    const mutationApi = generateApi('mutation');

    save([mutationApi, mutationMethods], 'ournet-mutation-api');
}

function save(data: GeneratedInfo[], fileName: string) {
    const content = data.map(item => item.data).join('\n\n');
    writeFileSync(join(__dirname, '..', '..', 'src', fileName + '.ts'), content, 'utf8');
}

function generateApi(action: ActionType) {
    const typeName: string = schema.data.__schema[action + 'Type'].name;
    const type = getTypeByName(typeName);
    const upperAction = startWithUpperCase(action);

    const methods = type.fields.map(field => {
        const methodName = field.name.includes('_') ? (field.name.split('_')[0] + startWithUpperCase(field.name.split('_')[1])) : field.name;
        const methodArgs = [{ name: 'key', type: 'keyof T' }, { name: 'data', type: 'GraphQLQueryItemInput' }]
            .concat(field.args.map(arg => {
                const typeName = getJsTypeName(arg.type);
                return { name: arg.name, type: typeName };
            }))
            .map(item => `${item.name}:${item.type}`);

        const variables = field.args.map(arg => {
            let typeName = getTypeName(arg.type);
            // console.log(typeName, arg);
            if (arg.type.kind === 'NON_NULL') {
                typeName += '!';
            }
            return `{ name: '${arg.name}', value: ${arg.name}, type: '${typeName}' }`;
        });

        const methodBody = `return this.addQueryItem(key,
            {
                fields: data.fields, name: Ournet${upperAction}Methods.${field.name},
                variables: [${variables.join(',')}]
            })`;

        return `${methodName}(${methodArgs.join(', ')}) {
        ${methodBody}
    }`;
    });

    const data = `
import { GraphQlQuery, GraphQLQueryExecutor, GraphQLQueryItemInput } from "./graphql-query";
import { TimezoneGeoPoint } from '@ournet/weather-domain';

export class Ournet${upperAction}Api<T> extends GraphQlQuery<T, Ournet${upperAction}Methods> {
    constructor(executor: GraphQLQueryExecutor) {
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

function generateTypes(): GeneratedInfo {
    const names: string[] = schema.data.__schema.types.map((t: any) => t.name).filter((name: string) => name.indexOf('__') !== 0);
    const types = names.map(name => getTypeByName(name));

    const infoData = types.map(type => {
        let fields: string[] = [];
        let graphqlFields: string = '';
        if (type.fields && type.fields.length) {
            const fieldsData = type.fields.map(field => ({ name: field.name, typeName: getTypeName(field.type) }));

            fields = fieldsData.map(field => `{ name: '${field.name}', typeName: '${field.typeName}' }`);

            graphqlFields = fieldsData.map(field => {
                const fieldType = getTypeByName(field.typeName);
                if (fieldType && fieldType.fields && fieldType.fields.length) {
                    return `${field.name} { ${fieldType.fields.map(item => item.name)} }`;
                } else {
                    return field.name;
                }
            }).join(' ');
        }

        return { name: type.name, data: `{ kind: '${type.kind}',\n name: '${type.name}',\n fields: [${fields.join(',\n')}],\ngraphqlFields:'${graphqlFields}' }` };
    });

    const name = `TypesData`;
    const data = `export const OurnetApiTypes:${name} = {
    ${infoData.map(info => `${info.name}: ${info.data}`).join(',\n')}
}

export type ${name} = { [index: string]: ApiTypeInfo }

export type ApiTypeInfo = {
    kind: string
    name: string
    fields?: ApiTypeFieldInfo[]
    graphqlFields?: string
}

export type ApiTypeFieldInfo = {
    name: string
    typeName: string
}
`;

    return { name, data };
}

function generateMutationMethods(): GeneratedInfo {
    const typeName: string = schema.data.__schema['mutationType'].name;
    const type = getTypeByName(typeName);
    return generateMethods('mutation', type);
}
function generateQueryMethods(): GeneratedInfo {
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

function getJsTypeName(type: TypeData) {
    const name = getTypeName(type);
    let jsName: string = name;
    switch (name) {
        case 'String':
            jsName = 'string';
            break;
        case 'Int':
        case 'Float':
            jsName = 'number';
            break;
        case 'JSON':
            jsName = 'any';
            break;
    }

    if (jsName && jsName.startsWith('Input')) {
        jsName = jsName.substr(5);
    }

    if (type.kind === 'NON_NULL' && type.ofType.kind === 'LIST' || type.kind === 'LIST') {
        jsName += '[]';
    }

    return jsName;
}

function getTypeName(type: TypeData): string {
    if (type.kind === 'NON_NULL') {
        return getTypeName(type.ofType);
    }
    return type.name;
}

function getTypeByName(name: string): TypeData {
    return schema.data.__schema.types.find((type: TypeData) => type.name === name)
}

type GeneratedInfo = {
    name: string
    data: string
}

type TypeData = {
    kind: string
    name: string
    fields?: TypeFieldData[]
    ofType?: TypeData
}

type TypeFieldData = {
    name: string
    args: TypeArgData[]
    type: TypeData
}

type TypeArgData = {
    name: string
    type: TypeData
}

export type ActionType = 'query' | 'mutation';
