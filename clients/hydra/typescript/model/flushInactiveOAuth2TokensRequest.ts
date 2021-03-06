/**
 * ORY Hydra
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here.
 *
 * The version of the OpenAPI document: v0.0.0-alpha.40
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class FlushInactiveOAuth2TokensRequest {
    /**
    * NotAfter sets after which point tokens should not be flushed. This is useful when you want to keep a history of recently issued tokens for auditing.
    */
    'notAfter'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "notAfter",
            "baseName": "notAfter",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return FlushInactiveOAuth2TokensRequest.attributeTypeMap;
    }
}

