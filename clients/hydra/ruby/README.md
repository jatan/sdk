# ory-hydra-client

OryHydraClient - the Ruby gem for the ORY Hydra

Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v0.0.0-alpha.40
- Package version: v0.0.0-alpha.40
- Build package: org.openapitools.codegen.languages.RubyClientCodegen

## Installation

### Build a gem

To build the Ruby code into a gem:

```shell
gem build ory-hydra-client.gemspec
```

Then either install the gem locally:

```shell
gem install ./ory-hydra-client-v0.0.0-alpha.40.gem
```

(for development, run `gem install --dev ./ory-hydra-client-v0.0.0-alpha.40.gem` to install the development dependencies)

or publish the gem to a gem hosting service, e.g. [RubyGems](https://rubygems.org/).

Finally add this to the Gemfile:

    gem 'ory-hydra-client', '~> v0.0.0-alpha.40'

### Install from Git

If the Ruby gem is hosted at a git repository: https://github.com/ory/sdk, then add the following in the Gemfile:

    gem 'ory-hydra-client', :git => 'https://github.com/ory/sdk.git'

### Include the Ruby code directly

Include the Ruby code directly using `-I` as follows:

```shell
ruby -Ilib script.rb
```

## Getting Started

Please follow the [installation](#installation) procedure and then run the following code:

```ruby
# Load the gem
require 'ory-hydra-client'

api_instance = OryHydraClient::AdminApi.new
consent_challenge = 'consent_challenge_example' # String | 
opts = {
  body: OryHydraClient::AcceptConsentRequest.new # AcceptConsentRequest | 
}

begin
  #Accept an consent request
  result = api_instance.accept_consent_request(consent_challenge, opts)
  p result
rescue OryHydraClient::ApiError => e
  puts "Exception when calling AdminApi->accept_consent_request: #{e}"
end

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OryHydraClient::AdminApi* | [**accept_consent_request**](docs/AdminApi.md#accept_consent_request) | **PUT** /oauth2/auth/requests/consent/accept | Accept an consent request
*OryHydraClient::AdminApi* | [**accept_login_request**](docs/AdminApi.md#accept_login_request) | **PUT** /oauth2/auth/requests/login/accept | Accept an login request
*OryHydraClient::AdminApi* | [**accept_logout_request**](docs/AdminApi.md#accept_logout_request) | **PUT** /oauth2/auth/requests/logout/accept | Accept a logout request
*OryHydraClient::AdminApi* | [**create_json_web_key_set**](docs/AdminApi.md#create_json_web_key_set) | **POST** /keys/{set} | Generate a new JSON Web Key
*OryHydraClient::AdminApi* | [**create_o_auth2_client**](docs/AdminApi.md#create_o_auth2_client) | **POST** /clients | Create an OAuth 2.0 client
*OryHydraClient::AdminApi* | [**delete_json_web_key**](docs/AdminApi.md#delete_json_web_key) | **DELETE** /keys/{set}/{kid} | Delete a JSON Web Key
*OryHydraClient::AdminApi* | [**delete_json_web_key_set**](docs/AdminApi.md#delete_json_web_key_set) | **DELETE** /keys/{set} | Delete a JSON Web Key Set
*OryHydraClient::AdminApi* | [**delete_o_auth2_client**](docs/AdminApi.md#delete_o_auth2_client) | **DELETE** /clients/{id} | Deletes an OAuth 2.0 Client
*OryHydraClient::AdminApi* | [**flush_inactive_o_auth2_tokens**](docs/AdminApi.md#flush_inactive_o_auth2_tokens) | **POST** /oauth2/flush | Flush Expired OAuth2 Access Tokens
*OryHydraClient::AdminApi* | [**get_consent_request**](docs/AdminApi.md#get_consent_request) | **GET** /oauth2/auth/requests/consent | Get consent request information
*OryHydraClient::AdminApi* | [**get_json_web_key**](docs/AdminApi.md#get_json_web_key) | **GET** /keys/{set}/{kid} | Fetch a JSON Web Key
*OryHydraClient::AdminApi* | [**get_json_web_key_set**](docs/AdminApi.md#get_json_web_key_set) | **GET** /keys/{set} | Retrieve a JSON Web Key Set
*OryHydraClient::AdminApi* | [**get_login_request**](docs/AdminApi.md#get_login_request) | **GET** /oauth2/auth/requests/login | Get an login request
*OryHydraClient::AdminApi* | [**get_logout_request**](docs/AdminApi.md#get_logout_request) | **GET** /oauth2/auth/requests/logout | Get a logout request
*OryHydraClient::AdminApi* | [**get_o_auth2_client**](docs/AdminApi.md#get_o_auth2_client) | **GET** /clients/{id} | Get an OAuth 2.0 Client.
*OryHydraClient::AdminApi* | [**get_version**](docs/AdminApi.md#get_version) | **GET** /version | Get service version
*OryHydraClient::AdminApi* | [**introspect_o_auth2_token**](docs/AdminApi.md#introspect_o_auth2_token) | **POST** /oauth2/introspect | Introspect OAuth2 tokens
*OryHydraClient::AdminApi* | [**is_instance_alive**](docs/AdminApi.md#is_instance_alive) | **GET** /health/alive | Check alive status
*OryHydraClient::AdminApi* | [**list_o_auth2_clients**](docs/AdminApi.md#list_o_auth2_clients) | **GET** /clients | List OAuth 2.0 Clients
*OryHydraClient::AdminApi* | [**list_subject_consent_sessions**](docs/AdminApi.md#list_subject_consent_sessions) | **GET** /oauth2/auth/sessions/consent | Lists all consent sessions of a subject
*OryHydraClient::AdminApi* | [**prometheus**](docs/AdminApi.md#prometheus) | **GET** /metrics/prometheus | Get snapshot metrics from the Hydra service. If you're using k8s, you can then add annotations to your deployment like so:
*OryHydraClient::AdminApi* | [**reject_consent_request**](docs/AdminApi.md#reject_consent_request) | **PUT** /oauth2/auth/requests/consent/reject | Reject an consent request
*OryHydraClient::AdminApi* | [**reject_login_request**](docs/AdminApi.md#reject_login_request) | **PUT** /oauth2/auth/requests/login/reject | Reject a login request
*OryHydraClient::AdminApi* | [**reject_logout_request**](docs/AdminApi.md#reject_logout_request) | **PUT** /oauth2/auth/requests/logout/reject | Reject a logout request
*OryHydraClient::AdminApi* | [**revoke_authentication_session**](docs/AdminApi.md#revoke_authentication_session) | **DELETE** /oauth2/auth/sessions/login | Invalidates all login sessions of a certain user Invalidates a subject's authentication session
*OryHydraClient::AdminApi* | [**revoke_consent_sessions**](docs/AdminApi.md#revoke_consent_sessions) | **DELETE** /oauth2/auth/sessions/consent | Revokes consent sessions of a subject for a specific OAuth 2.0 Client
*OryHydraClient::AdminApi* | [**update_json_web_key**](docs/AdminApi.md#update_json_web_key) | **PUT** /keys/{set}/{kid} | Update a JSON Web Key
*OryHydraClient::AdminApi* | [**update_json_web_key_set**](docs/AdminApi.md#update_json_web_key_set) | **PUT** /keys/{set} | Update a JSON Web Key Set
*OryHydraClient::AdminApi* | [**update_o_auth2_client**](docs/AdminApi.md#update_o_auth2_client) | **PUT** /clients/{id} | Update an OAuth 2.0 Client
*OryHydraClient::PublicApi* | [**disconnect_user**](docs/PublicApi.md#disconnect_user) | **GET** /oauth2/sessions/logout | OpenID Connect Front-Backchannel enabled Logout
*OryHydraClient::PublicApi* | [**discover_open_id_configuration**](docs/PublicApi.md#discover_open_id_configuration) | **GET** /.well-known/openid-configuration | OpenID Connect Discovery
*OryHydraClient::PublicApi* | [**is_instance_ready**](docs/PublicApi.md#is_instance_ready) | **GET** /health/ready | Check readiness status
*OryHydraClient::PublicApi* | [**oauth2_token**](docs/PublicApi.md#oauth2_token) | **POST** /oauth2/token | The OAuth 2.0 token endpoint
*OryHydraClient::PublicApi* | [**oauth_auth**](docs/PublicApi.md#oauth_auth) | **GET** /oauth2/auth | The OAuth 2.0 authorize endpoint
*OryHydraClient::PublicApi* | [**revoke_o_auth2_token**](docs/PublicApi.md#revoke_o_auth2_token) | **POST** /oauth2/revoke | Revoke OAuth2 tokens
*OryHydraClient::PublicApi* | [**userinfo**](docs/PublicApi.md#userinfo) | **GET** /userinfo | OpenID Connect Userinfo
*OryHydraClient::PublicApi* | [**well_known**](docs/PublicApi.md#well_known) | **GET** /.well-known/jwks.json | JSON Web Keys Discovery


## Documentation for Models

 - [OryHydraClient::AcceptConsentRequest](docs/AcceptConsentRequest.md)
 - [OryHydraClient::AcceptLoginRequest](docs/AcceptLoginRequest.md)
 - [OryHydraClient::CompletedRequest](docs/CompletedRequest.md)
 - [OryHydraClient::ConsentRequest](docs/ConsentRequest.md)
 - [OryHydraClient::ConsentRequestSession](docs/ConsentRequestSession.md)
 - [OryHydraClient::FlushInactiveOAuth2TokensRequest](docs/FlushInactiveOAuth2TokensRequest.md)
 - [OryHydraClient::GenericError](docs/GenericError.md)
 - [OryHydraClient::HealthNotReadyStatus](docs/HealthNotReadyStatus.md)
 - [OryHydraClient::HealthStatus](docs/HealthStatus.md)
 - [OryHydraClient::JSONWebKey](docs/JSONWebKey.md)
 - [OryHydraClient::JSONWebKeySet](docs/JSONWebKeySet.md)
 - [OryHydraClient::JsonWebKeySetGeneratorRequest](docs/JsonWebKeySetGeneratorRequest.md)
 - [OryHydraClient::LoginRequest](docs/LoginRequest.md)
 - [OryHydraClient::LogoutRequest](docs/LogoutRequest.md)
 - [OryHydraClient::OAuth2Client](docs/OAuth2Client.md)
 - [OryHydraClient::OAuth2TokenIntrospection](docs/OAuth2TokenIntrospection.md)
 - [OryHydraClient::Oauth2TokenResponse](docs/Oauth2TokenResponse.md)
 - [OryHydraClient::OauthTokenResponse](docs/OauthTokenResponse.md)
 - [OryHydraClient::OpenIDConnectContext](docs/OpenIDConnectContext.md)
 - [OryHydraClient::PreviousConsentSession](docs/PreviousConsentSession.md)
 - [OryHydraClient::RejectRequest](docs/RejectRequest.md)
 - [OryHydraClient::UserinfoResponse](docs/UserinfoResponse.md)
 - [OryHydraClient::Version](docs/Version.md)
 - [OryHydraClient::WellKnown](docs/WellKnown.md)


## Documentation for Authorization


### basic

- **Type**: HTTP basic authentication

### oauth2


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: /oauth2/auth
- **Scopes**: 
  - offline: A scope required when requesting refresh tokens (alias for &#x60;offline&#x60;)
  - offline_access: A scope required when requesting refresh tokens
  - openid: Request an OpenID Connect ID Token

