/**
 * Ory Kratos
 * Welcome to the ORY Kratos HTTP API documentation!
 *
 * The version of the OpenAPI document: v0.0.0-alpha.37
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class Identity {
    'id': string;
    'traits': object;
    /**
    * TraitsSchemaURL is the JSON Schema to be used for validating the identity\'s traits.  format: uri
    */
    'traitsSchemaUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "traits",
            "baseName": "traits",
            "type": "object"
        },
        {
            "name": "traitsSchemaUrl",
            "baseName": "traits_schema_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Identity.attributeTypeMap;
    }
}
