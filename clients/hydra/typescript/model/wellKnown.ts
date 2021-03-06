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


/**
* It includes links to several endpoints (e.g. /oauth2/token) and exposes information on supported signature algorithms among others.
*/
export class WellKnown {
    /**
    * URL of the OP\'s OAuth 2.0 Authorization Endpoint.
    */
    'authorizationEndpoint': string;
    /**
    * Boolean value specifying whether the OP can pass a sid (session ID) Claim in the Logout Token to identify the RP session with the OP. If supported, the sid Claim is also included in ID Tokens issued by the OP
    */
    'backchannelLogoutSessionSupported'?: boolean;
    /**
    * Boolean value specifying whether the OP supports back-channel logout, with true indicating support.
    */
    'backchannelLogoutSupported'?: boolean;
    /**
    * Boolean value specifying whether the OP supports use of the claims parameter, with true indicating support.
    */
    'claimsParameterSupported'?: boolean;
    /**
    * JSON array containing a list of the Claim Names of the Claims that the OpenID Provider MAY be able to supply values for. Note that for privacy or other reasons, this might not be an exhaustive list.
    */
    'claimsSupported'?: Array<string>;
    /**
    * URL at the OP to which an RP can perform a redirect to request that the End-User be logged out at the OP.
    */
    'endSessionEndpoint'?: string;
    /**
    * Boolean value specifying whether the OP can pass iss (issuer) and sid (session ID) query parameters to identify the RP session with the OP when the frontchannel_logout_uri is used. If supported, the sid Claim is also included in ID Tokens issued by the OP.
    */
    'frontchannelLogoutSessionSupported'?: boolean;
    /**
    * Boolean value specifying whether the OP supports HTTP-based logout, with true indicating support.
    */
    'frontchannelLogoutSupported'?: boolean;
    /**
    * JSON array containing a list of the OAuth 2.0 Grant Type values that this OP supports.
    */
    'grantTypesSupported'?: Array<string>;
    /**
    * JSON array containing a list of the JWS signing algorithms (alg values) supported by the OP for the ID Token to encode the Claims in a JWT.
    */
    'idTokenSigningAlgValuesSupported': Array<string>;
    /**
    * URL using the https scheme with no query or fragment component that the OP asserts as its IssuerURL Identifier. If IssuerURL discovery is supported , this value MUST be identical to the issuer value returned by WebFinger. This also MUST be identical to the iss Claim value in ID Tokens issued from this IssuerURL.
    */
    'issuer': string;
    /**
    * URL of the OP\'s JSON Web Key Set [JWK] document. This contains the signing key(s) the RP uses to validate signatures from the OP. The JWK Set MAY also contain the Server\'s encryption key(s), which are used by RPs to encrypt requests to the Server. When both signing and encryption keys are made available, a use (Key Use) parameter value is REQUIRED for all keys in the referenced JWK Set to indicate each key\'s intended usage. Although some algorithms allow the same key to be used for both signatures and encryption, doing so is NOT RECOMMENDED, as it is less secure. The JWK x5c parameter MAY be used to provide X.509 representations of keys provided. When used, the bare key values MUST still be present and MUST match those in the certificate.
    */
    'jwksUri': string;
    /**
    * URL of the OP\'s Dynamic Client Registration Endpoint.
    */
    'registrationEndpoint'?: string;
    /**
    * Boolean value specifying whether the OP supports use of the request parameter, with true indicating support.
    */
    'requestParameterSupported'?: boolean;
    /**
    * Boolean value specifying whether the OP supports use of the request_uri parameter, with true indicating support.
    */
    'requestUriParameterSupported'?: boolean;
    /**
    * Boolean value specifying whether the OP requires any request_uri values used to be pre-registered using the request_uris registration parameter.
    */
    'requireRequestUriRegistration'?: boolean;
    /**
    * JSON array containing a list of the OAuth 2.0 response_mode values that this OP supports.
    */
    'responseModesSupported'?: Array<string>;
    /**
    * JSON array containing a list of the OAuth 2.0 response_type values that this OP supports. Dynamic OpenID Providers MUST support the code, id_token, and the token id_token Response Type values.
    */
    'responseTypesSupported': Array<string>;
    /**
    * URL of the authorization server\'s OAuth 2.0 revocation endpoint.
    */
    'revocationEndpoint'?: string;
    /**
    * SON array containing a list of the OAuth 2.0 [RFC6749] scope values that this server supports. The server MUST support the openid scope value. Servers MAY choose not to advertise some supported scope values even when this parameter is used
    */
    'scopesSupported'?: Array<string>;
    /**
    * JSON array containing a list of the Subject Identifier types that this OP supports. Valid types include pairwise and public.
    */
    'subjectTypesSupported': Array<string>;
    /**
    * URL of the OP\'s OAuth 2.0 Token Endpoint
    */
    'tokenEndpoint': string;
    /**
    * JSON array containing a list of Client Authentication methods supported by this Token Endpoint. The options are client_secret_post, client_secret_basic, client_secret_jwt, and private_key_jwt, as described in Section 9 of OpenID Connect Core 1.0
    */
    'tokenEndpointAuthMethodsSupported'?: Array<string>;
    /**
    * URL of the OP\'s UserInfo Endpoint.
    */
    'userinfoEndpoint'?: string;
    /**
    * JSON array containing a list of the JWS [JWS] signing algorithms (alg values) [JWA] supported by the UserInfo Endpoint to encode the Claims in a JWT [JWT].
    */
    'userinfoSigningAlgValuesSupported'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authorizationEndpoint",
            "baseName": "authorization_endpoint",
            "type": "string"
        },
        {
            "name": "backchannelLogoutSessionSupported",
            "baseName": "backchannel_logout_session_supported",
            "type": "boolean"
        },
        {
            "name": "backchannelLogoutSupported",
            "baseName": "backchannel_logout_supported",
            "type": "boolean"
        },
        {
            "name": "claimsParameterSupported",
            "baseName": "claims_parameter_supported",
            "type": "boolean"
        },
        {
            "name": "claimsSupported",
            "baseName": "claims_supported",
            "type": "Array<string>"
        },
        {
            "name": "endSessionEndpoint",
            "baseName": "end_session_endpoint",
            "type": "string"
        },
        {
            "name": "frontchannelLogoutSessionSupported",
            "baseName": "frontchannel_logout_session_supported",
            "type": "boolean"
        },
        {
            "name": "frontchannelLogoutSupported",
            "baseName": "frontchannel_logout_supported",
            "type": "boolean"
        },
        {
            "name": "grantTypesSupported",
            "baseName": "grant_types_supported",
            "type": "Array<string>"
        },
        {
            "name": "idTokenSigningAlgValuesSupported",
            "baseName": "id_token_signing_alg_values_supported",
            "type": "Array<string>"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "jwksUri",
            "baseName": "jwks_uri",
            "type": "string"
        },
        {
            "name": "registrationEndpoint",
            "baseName": "registration_endpoint",
            "type": "string"
        },
        {
            "name": "requestParameterSupported",
            "baseName": "request_parameter_supported",
            "type": "boolean"
        },
        {
            "name": "requestUriParameterSupported",
            "baseName": "request_uri_parameter_supported",
            "type": "boolean"
        },
        {
            "name": "requireRequestUriRegistration",
            "baseName": "require_request_uri_registration",
            "type": "boolean"
        },
        {
            "name": "responseModesSupported",
            "baseName": "response_modes_supported",
            "type": "Array<string>"
        },
        {
            "name": "responseTypesSupported",
            "baseName": "response_types_supported",
            "type": "Array<string>"
        },
        {
            "name": "revocationEndpoint",
            "baseName": "revocation_endpoint",
            "type": "string"
        },
        {
            "name": "scopesSupported",
            "baseName": "scopes_supported",
            "type": "Array<string>"
        },
        {
            "name": "subjectTypesSupported",
            "baseName": "subject_types_supported",
            "type": "Array<string>"
        },
        {
            "name": "tokenEndpoint",
            "baseName": "token_endpoint",
            "type": "string"
        },
        {
            "name": "tokenEndpointAuthMethodsSupported",
            "baseName": "token_endpoint_auth_methods_supported",
            "type": "Array<string>"
        },
        {
            "name": "userinfoEndpoint",
            "baseName": "userinfo_endpoint",
            "type": "string"
        },
        {
            "name": "userinfoSigningAlgValuesSupported",
            "baseName": "userinfo_signing_alg_values_supported",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return WellKnown.attributeTypeMap;
    }
}

