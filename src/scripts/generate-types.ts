
import { saveCodeFile, GeneratedInfo, getSchema, getTypeByName, getJsTypeName, generateTypeScriptType, typeIsRequired, TypeData, typeIsObject } from "./common";

export function generate() {

    saveCodeFile([generateTypes()], 'ournet-api-types');
}

function generateTypes(): GeneratedInfo {
    const schema = getSchema();
    const names = (<any[]>schema.data.__schema.types).map<TypeData>((t: any) => getTypeByName(t.name))
        .filter(type => typeIsObject(type));

    const types = names.map(name => getTypeByName(name.name))
        .map(item => ({
            name: item.name,
            fields: (item.fields || item.inputFields).map(field => ({ name: field.name, type: getJsTypeName(field.type), required: typeIsRequired(field.type) }))
        }))
        .map(item => `export type ${item.name} = ${generateTypeScriptType(item.fields)}`);

    return { data: types.join('\n\n'), name: null };
}


generate();
