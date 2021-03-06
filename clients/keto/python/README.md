# ory-keto-client
A cloud native access control server providing best-practice patterns (RBAC, ABAC, ACL, AWS IAM Policies, Kubernetes Roles, ...) via REST APIs.

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v0.0.0-alpha.37
- Package version: v0.0.0-alpha.37
- Build package: org.openapitools.codegen.languages.PythonClientCodegen
For more information, please visit [https://www.ory.sh](https://www.ory.sh)

## Requirements.

Python 2.7 and 3.4+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/ory/sdk.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/ory/sdk.git`)

Then import the package:
```python
import ory_keto_client 
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import ory_keto_client
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python
from __future__ import print_function
import time
import ory_keto_client
from ory_keto_client.rest import ApiException
from pprint import pprint


# Defining host is optional and default to http://localhost
configuration.host = "http://localhost"
# Create an instance of the API class
api_instance = ory_keto_client.EnginesApi(ory_keto_client.ApiClient(configuration))
flavor = 'flavor_example' # str | The ORY Access Control Policy flavor. Can be \"regex\", \"glob\", and \"exact\".
id = 'id_example' # str | The ID of the ORY Access Control Policy Role.
body = ory_keto_client.AddOryAccessControlPolicyRoleMembersBody() # AddOryAccessControlPolicyRoleMembersBody |  (optional)

try:
    # Add a member to an ORY Access Control Policy Role
    api_response = api_instance.add_ory_access_control_policy_role_members(flavor, id, body=body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling EnginesApi->add_ory_access_control_policy_role_members: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EnginesApi* | [**add_ory_access_control_policy_role_members**](docs/EnginesApi.md#add_ory_access_control_policy_role_members) | **PUT** /engines/acp/ory/{flavor}/roles/{id}/members | Add a member to an ORY Access Control Policy Role
*EnginesApi* | [**delete_ory_access_control_policy**](docs/EnginesApi.md#delete_ory_access_control_policy) | **DELETE** /engines/acp/ory/{flavor}/policies/{id} | 
*EnginesApi* | [**delete_ory_access_control_policy_role**](docs/EnginesApi.md#delete_ory_access_control_policy_role) | **DELETE** /engines/acp/ory/{flavor}/roles/{id} | Delete an ORY Access Control Policy Role
*EnginesApi* | [**do_ory_access_control_policies_allow**](docs/EnginesApi.md#do_ory_access_control_policies_allow) | **POST** /engines/acp/ory/{flavor}/allowed | Check if a request is allowed
*EnginesApi* | [**get_ory_access_control_policy**](docs/EnginesApi.md#get_ory_access_control_policy) | **GET** /engines/acp/ory/{flavor}/policies/{id} | 
*EnginesApi* | [**get_ory_access_control_policy_role**](docs/EnginesApi.md#get_ory_access_control_policy_role) | **GET** /engines/acp/ory/{flavor}/roles/{id} | Get an ORY Access Control Policy Role
*EnginesApi* | [**list_ory_access_control_policies**](docs/EnginesApi.md#list_ory_access_control_policies) | **GET** /engines/acp/ory/{flavor}/policies | 
*EnginesApi* | [**list_ory_access_control_policy_roles**](docs/EnginesApi.md#list_ory_access_control_policy_roles) | **GET** /engines/acp/ory/{flavor}/roles | List ORY Access Control Policy Roles
*EnginesApi* | [**remove_ory_access_control_policy_role_members**](docs/EnginesApi.md#remove_ory_access_control_policy_role_members) | **DELETE** /engines/acp/ory/{flavor}/roles/{id}/members/{member} | Remove a member from an ORY Access Control Policy Role
*EnginesApi* | [**upsert_ory_access_control_policy**](docs/EnginesApi.md#upsert_ory_access_control_policy) | **PUT** /engines/acp/ory/{flavor}/policies | 
*EnginesApi* | [**upsert_ory_access_control_policy_role**](docs/EnginesApi.md#upsert_ory_access_control_policy_role) | **PUT** /engines/acp/ory/{flavor}/roles | Upsert an ORY Access Control Policy Role
*HealthApi* | [**is_instance_alive**](docs/HealthApi.md#is_instance_alive) | **GET** /health/alive | Check alive status
*HealthApi* | [**is_instance_ready**](docs/HealthApi.md#is_instance_ready) | **GET** /health/ready | Check readiness status
*VersionApi* | [**get_version**](docs/VersionApi.md#get_version) | **GET** /version | Get service version


## Documentation For Models

 - [AddOryAccessControlPolicyRoleMembers](docs/AddOryAccessControlPolicyRoleMembers.md)
 - [AddOryAccessControlPolicyRoleMembersBody](docs/AddOryAccessControlPolicyRoleMembersBody.md)
 - [AddOryAccessControlPolicyRoleMembersInternalServerError](docs/AddOryAccessControlPolicyRoleMembersInternalServerError.md)
 - [AddOryAccessControlPolicyRoleMembersInternalServerErrorBody](docs/AddOryAccessControlPolicyRoleMembersInternalServerErrorBody.md)
 - [AddOryAccessControlPolicyRoleMembersOK](docs/AddOryAccessControlPolicyRoleMembersOK.md)
 - [AuthorizationResult](docs/AuthorizationResult.md)
 - [DeleteOryAccessControlPolicy](docs/DeleteOryAccessControlPolicy.md)
 - [DeleteOryAccessControlPolicyInternalServerError](docs/DeleteOryAccessControlPolicyInternalServerError.md)
 - [DeleteOryAccessControlPolicyInternalServerErrorBody](docs/DeleteOryAccessControlPolicyInternalServerErrorBody.md)
 - [DeleteOryAccessControlPolicyRole](docs/DeleteOryAccessControlPolicyRole.md)
 - [DeleteOryAccessControlPolicyRoleInternalServerError](docs/DeleteOryAccessControlPolicyRoleInternalServerError.md)
 - [DeleteOryAccessControlPolicyRoleInternalServerErrorBody](docs/DeleteOryAccessControlPolicyRoleInternalServerErrorBody.md)
 - [DoOryAccessControlPoliciesAllow](docs/DoOryAccessControlPoliciesAllow.md)
 - [DoOryAccessControlPoliciesAllowForbidden](docs/DoOryAccessControlPoliciesAllowForbidden.md)
 - [DoOryAccessControlPoliciesAllowInternalServerError](docs/DoOryAccessControlPoliciesAllowInternalServerError.md)
 - [DoOryAccessControlPoliciesAllowInternalServerErrorBody](docs/DoOryAccessControlPoliciesAllowInternalServerErrorBody.md)
 - [DoOryAccessControlPoliciesAllowOK](docs/DoOryAccessControlPoliciesAllowOK.md)
 - [GetOryAccessControlPolicy](docs/GetOryAccessControlPolicy.md)
 - [GetOryAccessControlPolicyInternalServerError](docs/GetOryAccessControlPolicyInternalServerError.md)
 - [GetOryAccessControlPolicyInternalServerErrorBody](docs/GetOryAccessControlPolicyInternalServerErrorBody.md)
 - [GetOryAccessControlPolicyNotFound](docs/GetOryAccessControlPolicyNotFound.md)
 - [GetOryAccessControlPolicyNotFoundBody](docs/GetOryAccessControlPolicyNotFoundBody.md)
 - [GetOryAccessControlPolicyOK](docs/GetOryAccessControlPolicyOK.md)
 - [GetOryAccessControlPolicyRole](docs/GetOryAccessControlPolicyRole.md)
 - [GetOryAccessControlPolicyRoleInternalServerError](docs/GetOryAccessControlPolicyRoleInternalServerError.md)
 - [GetOryAccessControlPolicyRoleInternalServerErrorBody](docs/GetOryAccessControlPolicyRoleInternalServerErrorBody.md)
 - [GetOryAccessControlPolicyRoleNotFound](docs/GetOryAccessControlPolicyRoleNotFound.md)
 - [GetOryAccessControlPolicyRoleNotFoundBody](docs/GetOryAccessControlPolicyRoleNotFoundBody.md)
 - [GetOryAccessControlPolicyRoleOK](docs/GetOryAccessControlPolicyRoleOK.md)
 - [HealthNotReadyStatus](docs/HealthNotReadyStatus.md)
 - [HealthStatus](docs/HealthStatus.md)
 - [InlineResponse500](docs/InlineResponse500.md)
 - [Input](docs/Input.md)
 - [IsInstanceAliveInternalServerError](docs/IsInstanceAliveInternalServerError.md)
 - [IsInstanceAliveInternalServerErrorBody](docs/IsInstanceAliveInternalServerErrorBody.md)
 - [IsInstanceAliveOK](docs/IsInstanceAliveOK.md)
 - [ListOryAccessControlPolicies](docs/ListOryAccessControlPolicies.md)
 - [ListOryAccessControlPoliciesInternalServerError](docs/ListOryAccessControlPoliciesInternalServerError.md)
 - [ListOryAccessControlPoliciesInternalServerErrorBody](docs/ListOryAccessControlPoliciesInternalServerErrorBody.md)
 - [ListOryAccessControlPoliciesOK](docs/ListOryAccessControlPoliciesOK.md)
 - [ListOryAccessControlPolicyRoles](docs/ListOryAccessControlPolicyRoles.md)
 - [ListOryAccessControlPolicyRolesInternalServerError](docs/ListOryAccessControlPolicyRolesInternalServerError.md)
 - [ListOryAccessControlPolicyRolesInternalServerErrorBody](docs/ListOryAccessControlPolicyRolesInternalServerErrorBody.md)
 - [ListOryAccessControlPolicyRolesOK](docs/ListOryAccessControlPolicyRolesOK.md)
 - [OryAccessControlPolicies](docs/OryAccessControlPolicies.md)
 - [OryAccessControlPolicy](docs/OryAccessControlPolicy.md)
 - [OryAccessControlPolicyAllowedInput](docs/OryAccessControlPolicyAllowedInput.md)
 - [OryAccessControlPolicyRole](docs/OryAccessControlPolicyRole.md)
 - [OryAccessControlPolicyRoles](docs/OryAccessControlPolicyRoles.md)
 - [Policy](docs/Policy.md)
 - [RemoveOryAccessControlPolicyRoleMembers](docs/RemoveOryAccessControlPolicyRoleMembers.md)
 - [RemoveOryAccessControlPolicyRoleMembersInternalServerError](docs/RemoveOryAccessControlPolicyRoleMembersInternalServerError.md)
 - [RemoveOryAccessControlPolicyRoleMembersInternalServerErrorBody](docs/RemoveOryAccessControlPolicyRoleMembersInternalServerErrorBody.md)
 - [Role](docs/Role.md)
 - [SwaggerHealthStatus](docs/SwaggerHealthStatus.md)
 - [SwaggerNotReadyStatus](docs/SwaggerNotReadyStatus.md)
 - [SwaggerVersion](docs/SwaggerVersion.md)
 - [UpsertOryAccessControlPolicy](docs/UpsertOryAccessControlPolicy.md)
 - [UpsertOryAccessControlPolicyInternalServerError](docs/UpsertOryAccessControlPolicyInternalServerError.md)
 - [UpsertOryAccessControlPolicyInternalServerErrorBody](docs/UpsertOryAccessControlPolicyInternalServerErrorBody.md)
 - [UpsertOryAccessControlPolicyOK](docs/UpsertOryAccessControlPolicyOK.md)
 - [UpsertOryAccessControlPolicyRole](docs/UpsertOryAccessControlPolicyRole.md)
 - [UpsertOryAccessControlPolicyRoleInternalServerError](docs/UpsertOryAccessControlPolicyRoleInternalServerError.md)
 - [UpsertOryAccessControlPolicyRoleInternalServerErrorBody](docs/UpsertOryAccessControlPolicyRoleInternalServerErrorBody.md)
 - [UpsertOryAccessControlPolicyRoleOK](docs/UpsertOryAccessControlPolicyRoleOK.md)
 - [Version](docs/Version.md)


## Documentation For Authorization

 All endpoints do not require authorization.

## Author

hi@ory.sh


