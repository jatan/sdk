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


export class LogoutRequest {
    /**
    * RequestURL is the original Logout URL requested.
    */
    'requestUrl'?: string;
    /**
    * RPInitiated is set to true if the request was initiated by a Relying Party (RP), also known as an OAuth 2.0 Client.
    */
    'rpInitiated'?: boolean;
    /**
    * SessionID is the login session ID that was requested to log out.
    */
    'sid'?: string;
    /**
    * Subject is the user for whom the logout was request.
    */
    'subject'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "requestUrl",
            "baseName": "request_url",
            "type": "string"
        },
        {
            "name": "rpInitiated",
            "baseName": "rp_initiated",
            "type": "boolean"
        },
        {
            "name": "sid",
            "baseName": "sid",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LogoutRequest.attributeTypeMap;
    }
}
