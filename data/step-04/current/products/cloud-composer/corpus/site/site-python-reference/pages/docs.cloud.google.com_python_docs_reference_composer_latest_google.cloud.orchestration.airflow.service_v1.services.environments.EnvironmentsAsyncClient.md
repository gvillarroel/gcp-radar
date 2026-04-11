---
title: "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/composer/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient
  title: "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class EnvironmentsAsyncClient (1.19.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.19.0 (latest)
1.18.0
1.17.5
1.16.1
1.15.1
1.14.0
1.13.1
1.12.2
1.11.1
1.10.0
1.9.1
1.8.0
1.7.1
1.6.1
1.5.0
1.4.4
1.3.2
1.2.1
1.1.0
1.0.0
0.1.3
EnvironmentsAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . orchestration . airflow . service_v1 . services . environments . transports . base . EnvironmentsTransport ,
typing . Callable [
[ ... ],
google . cloud . orchestration . airflow . service_v1 . services . environments . transports . base . EnvironmentsTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Managed Apache Airflow Environments.
Properties
api_endpoint
Return the API endpoint used by the client instance.
Returns
Type
Description
str
The API endpoint used by the client instance.
transport
Returns the transport used by the client instance.
Returns
Type
Description
EnvironmentsTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
EnvironmentsAsyncClient
EnvironmentsAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . orchestration . airflow . service_v1 . services . environments . transports . base . EnvironmentsTransport ,
typing . Callable [
[ ... ],
google . cloud . orchestration . airflow . service_v1 . services . environments . transports . base . EnvironmentsTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the environments async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,EnvironmentsTransport,Callable[..., EnvironmentsTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the EnvironmentsTransport constructor. If set to None, a transport is chosen automatically.
client_options
Optional[Union[google.api_core.client_options.ClientOptions, dict]]
Custom options for the client. 1. The api_endpoint property can be used to override the default endpoint provided by the client when transport is not explicitly provided. Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE_API_USE_MTLS_ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value). 2. If the GOOGLE_API_USE_CLIENT_CERTIFICATE environment variable is "true", then the client_cert_source property can be used to provide a client certificate for mTLS transport. If not provided, the default SSL client certificate will be used if present. If GOOGLE_API_USE_CLIENT_CERTIFICATE is "false" or not set, no client certificate will be used. 3. The universe_domain property can be used to override the default "googleapis.com" universe. Note that api_endpoint property still takes precedence; and universe_domain is currently not supported for mTLS.
client_info
google.api_core.gapic_v1.client_info.ClientInfo
The client info used to send a user-agent string along with API requests. If None , then default info will be used. Generally, you only need to set this if you're developing your own client library.
Exceptions
Type
Description
google.auth.exceptions.MutualTlsChannelError
If mutual TLS transport creation failed for any reason.
check_upgrade
check_upgrade (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . CheckUpgradeRequest ,
dict ,
]
] = None ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Check if an upgrade operation on the environment will
succeed.
In case of problems detailed info can be found in the
returned Operation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_check_upgrade():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. CheckUpgradeRequest (
environment="environment_value",
)
# Make the request
operation = client. check_upgrade (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeRequest , dict]]
The request object. Request to check whether image upgrade will succeed.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.api_core.operation_async.AsyncOperation
An object representing a long-running operation. The result type for the operation will be CheckUpgradeResponse Message containing information about the result of an upgrade check operation.
common_billing_account_path
common_billing_account_path ( billing_account : str ) - > str
Returns a fully-qualified billing_account string.
common_folder_path
common_folder_path ( folder : str ) - > str
Returns a fully-qualified folder string.
common_location_path
common_location_path ( project : str , location : str ) - > str
Returns a fully-qualified location string.
common_organization_path
common_organization_path ( organization : str ) - > str
Returns a fully-qualified organization string.
common_project_path
common_project_path ( project : str ) - > str
Returns a fully-qualified project string.
create_environment
create_environment (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . CreateEnvironmentRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
environment : typing . Optional [
google . cloud . orchestration . airflow . service_v1 . types . environments . Environment
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Create a new environment.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_create_environment():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. CreateEnvironmentRequest (
)
# Make the request
operation = client. create_environment (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.CreateEnvironmentRequest , dict]]
The request object. Create a new environment.
parent
str
The parent must be of the form "projects/{projectId}/locations/{locationId}". This corresponds to the parent field on the request instance; if request is provided, this should not be set.
environment
Environment
The environment to create. This corresponds to the environment field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.api_core.operation_async.AsyncOperation
An object representing a long-running operation. The result type for the operation will be Environment An environment for running orchestration tasks.
create_user_workloads_config_map
create_user_workloads_config_map (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . CreateUserWorkloadsConfigMapRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
user_workloads_config_map : typing . Optional [
google . cloud . orchestration . airflow . service_v1 . types . environments . UserWorkloadsConfigMap
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . orchestration . airflow . service_v1 . types . environments . UserWorkloadsConfigMap
)
Creates a user workloads ConfigMap.
This method is supported for Cloud Composer environments in
versions composer-3-airflow- . .\ -build. and newer.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_create_user_workloads_config_map():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. CreateUserWorkloadsConfigMapRequest (
parent="parent_value",
)
# Make the request
response = await client. create_user_workloads_config_map (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.CreateUserWorkloadsConfigMapRequest , dict]]
The request object. Create user workloads ConfigMap request.
parent
str
Required. The environment name to create a ConfigMap for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set.
user_workloads_config_map
UserWorkloadsConfigMap
Required. User workloads ConfigMap to create. This corresponds to the user_workloads_config_map field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.cloud.orchestration.airflow.service_v1.types.UserWorkloadsConfigMap
User workloads ConfigMap used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator.
create_user_workloads_secret
create_user_workloads_secret (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . CreateUserWorkloadsSecretRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
user_workloads_secret : typing . Optional [
google . cloud . orchestration . airflow . service_v1 . types . environments . UserWorkloadsSecret
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . orchestration . airflow . service_v1 . types . environments . UserWorkloadsSecret
)
Creates a user workloads Secret.
This method is supported for Cloud Composer environments in
versions composer-3-airflow- . .\ -build. and newer.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_create_user_workloads_secret():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. CreateUserWorkloadsSecretRequest (
parent="parent_value",
)
# Make the request
response = await client. create_user_workloads_secret (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.CreateUserWorkloadsSecretRequest , dict]]
The request object. Create user workloads Secret request.
parent
str
Required. The environment name to create a Secret for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set.
user_workloads_secret
UserWorkloadsSecret
Required. User workloads Secret to create. This corresponds to the user_workloads_secret field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.cloud.orchestration.airflow.service_v1.types.UserWorkloadsSecret
User workloads Secret used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator.
database_failover
database_failover (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . DatabaseFailoverRequest ,
dict ,
]
] = None ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Triggers database failover (only for highly resilient
environments).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_database_failover():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. DatabaseFailoverRequest (
)
# Make the request
operation = client. database_failover (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.DatabaseFailoverRequest , dict]]
The request object. Request to trigger database failover (only for highly resilient environments).
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.api_core.operation_async.AsyncOperation
An object representing a long-running operation. The result type for the operation will be DatabaseFailoverResponse Response for DatabaseFailoverRequest.
delete_environment
delete_environment (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . DeleteEnvironmentRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Delete an environment.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_delete_environment():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. DeleteEnvironmentRequest (
)
# Make the request
operation = client. delete_environment (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.DeleteEnvironmentRequest , dict]]
The request object. Delete an environment.
name
str
The environment to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.api_core.operation_async.AsyncOperation
An object representing a long-running operation. The result type for the operation will be google.protobuf.empty_pb2.Empty A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
delete_operation
delete_operation (
request : typing . Optional [
google . longrunning . operations_pb2 . DeleteOperationRequest
] = None ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > None
Deletes a long-running operation.
This method indicates that the client is no longer interested
in the operation result. It does not cancel the operation.
If the server doesn't support this method, it returns
google.rpc.Code.UNIMPLEMENTED .
Parameters
Name
Description
request
.operations_pb2.DeleteOperationRequest
The request object. Request message for DeleteOperation method.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_user_workloads_config_map
delete_user_workloads_config_map (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . DeleteUserWorkloadsConfigMapRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > None
Deletes a user workloads ConfigMap.
This method is supported for Cloud Composer environments in
versions composer-3-airflow- . .\ -build. and newer.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_delete_user_workloads_config_map():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. DeleteUserWorkloadsConfigMapRequest (
name="name_value",
)
# Make the request
await client. delete_user_workloads_config_map (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.DeleteUserWorkloadsConfigMapRequest , dict]]
The request object. Delete user workloads ConfigMap request.
name
str
Required. The ConfigMap to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_user_workloads_secret
delete_user_workloads_secret (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . DeleteUserWorkloadsSecretRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > None
Deletes a user workloads Secret.
This method is supported for Cloud Composer environments in
versions composer-3-airflow- . .\ -build. and newer.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_delete_user_workloads_secret():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. DeleteUserWorkloadsSecretRequest (
name="name_value",
)
# Make the request
await client. delete_user_workloads_secret (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.DeleteUserWorkloadsSecretRequest , dict]]
The request object. Delete user workloads Secret request.
name
str
Required. The Secret to delete, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}" This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
environment_path
environment_path ( project : str , location : str , environment : str ) - > str
Returns a fully-qualified environment string.
execute_airflow_command
execute_airflow_command (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . ExecuteAirflowCommandRequest ,
dict ,
]
] = None ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . orchestration . airflow . service_v1 . types . environments . ExecuteAirflowCommandResponse
)
Executes Airflow CLI command.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_execute_airflow_command():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. ExecuteAirflowCommandRequest (
)
# Make the request
response = await client. execute_airflow_command (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.ExecuteAirflowCommandRequest , dict]]
The request object. Execute Airflow Command request.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.cloud.orchestration.airflow.service_v1.types.ExecuteAirflowCommandResponse
Response to ExecuteAirflowCommandRequest.
fetch_database_properties
fetch_database_properties (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . FetchDatabasePropertiesRequest ,
dict ,
]
] = None ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . orchestration . airflow . service_v1 . types . environments . FetchDatabasePropertiesResponse
)
Fetches database properties.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_fetch_database_properties():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. FetchDatabasePropertiesRequest (
environment="environment_value",
)
# Make the request
response = await client. fetch_database_properties (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.FetchDatabasePropertiesRequest , dict]]
The request object. Request to fetch properties of environment's database.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.cloud.orchestration.airflow.service_v1.types.FetchDatabasePropertiesResponse
Response for FetchDatabasePropertiesRequest.
from_service_account_file
from_service_account_file ( filename : str , * args , ** kwargs )
Creates an instance of this client using the provided credentials
file.
Parameter
Name
Description
filename
str
The path to the service account private key json file.
Returns
Type
Description
EnvironmentsAsyncClient
The constructed client.
from_service_account_info
from_service_account_info ( info : dict , * args , ** kwargs )
Creates an instance of this client using the provided credentials
info.
Parameter
Name
Description
info
dict
The service account private key info.
Returns
Type
Description
EnvironmentsAsyncClient
The constructed client.
from_service_account_json
from_service_account_json ( filename : str , * args , ** kwargs )
Creates an instance of this client using the provided credentials
file.
Parameter
Name
Description
filename
str
The path to the service account private key json file.
Returns
Type
Description
EnvironmentsAsyncClient
The constructed client.
get_environment
get_environment (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . GetEnvironmentRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . orchestration . airflow . service_v1 . types . environments . Environment
Get an existing environment.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_get_environment():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. GetEnvironmentRequest (
)
# Make the request
response = await client. get_environment (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.GetEnvironmentRequest , dict]]
The request object. Get an environment.
name
str
The resource name of the environment to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.cloud.orchestration.airflow.service_v1.types.Environment
An environment for running orchestration tasks.
get_mtls_endpoint_and_cert_source
get_mtls_endpoint_and_cert_source (
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
)
Return the API endpoint and client cert source for mutual TLS.
The client cert source is determined in the following order:
(1) if GOOGLE_API_USE_CLIENT_CERTIFICATE environment variable is not "true", the
client cert source is None.
(2) if client_options.client_cert_source is provided, use the provided one; if the
default client cert source exists, use the default one; otherwise the client cert
source is None.
The API endpoint is determined in the following order:
(1) if client_options.api_endpoint if provided, use the provided one.
(2) if GOOGLE_API_USE_CLIENT_CERTIFICATE environment variable is "always", use the
default mTLS endpoint; if the environment variable is "never", use the default API
endpoint; otherwise if client cert source exists, use the default mTLS endpoint, otherwise
use the default API endpoint.
More details can be found at https://google.aip.dev/auth/4114 .
Parameter
Name
Description
client_options
google.api_core.client_options.ClientOptions
Custom options for the client. Only the api_endpoint and client_cert_source properties may be used in this method.
Exceptions
Type
Description
google.auth.exceptions.MutualTLSChannelError
If any errors happen.
Returns
Type
Description
Tuple[str, Callable[[], Tuple[bytes, bytes]]]
returns the API endpoint and the client cert source to use.
get_operation
get_operation (
request : typing . Optional [
google . longrunning . operations_pb2 . GetOperationRequest
] = None ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . longrunning . operations_pb2 . Operation
Gets the latest state of a long-running operation.
Parameters
Name
Description
request
.operations_pb2.GetOperationRequest
The request object. Request message for GetOperation method.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
.operations_pb2.Operation
An Operation object.
get_transport_class
get_transport_class (
label : typing . Optional [ str ] = None ,
) - > typing . Type [
google . cloud . orchestration . airflow . service_v1 . services . environments . transports . base . EnvironmentsTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
get_user_workloads_config_map
get_user_workloads_config_map (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . GetUserWorkloadsConfigMapRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . orchestration . airflow . service_v1 . types . environments . UserWorkloadsConfigMap
)
Gets an existing user workloads ConfigMap.
This method is supported for Cloud Composer environments in
versions composer-3-airflow- . .\ -build. and newer.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_get_user_workloads_config_map():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. GetUserWorkloadsConfigMapRequest (
name="name_value",
)
# Make the request
response = await client. get_user_workloads_config_map (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.GetUserWorkloadsConfigMapRequest , dict]]
The request object. Get user workloads ConfigMap request.
name
str
Required. The resource name of the ConfigMap to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}" This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.cloud.orchestration.airflow.service_v1.types.UserWorkloadsConfigMap
User workloads ConfigMap used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator.
get_user_workloads_secret
get_user_workloads_secret (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . GetUserWorkloadsSecretRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . orchestration . airflow . service_v1 . types . environments . UserWorkloadsSecret
)
Gets an existing user workloads Secret. Values of the "data"
field in the response are cleared.
This method is supported for Cloud Composer environments in
versions composer-3-airflow- . .\ -build. and newer.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_get_user_workloads_secret():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. GetUserWorkloadsSecretRequest (
name="name_value",
)
# Make the request
response = await client. get_user_workloads_secret (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.GetUserWorkloadsSecretRequest , dict]]
The request object. Get user workloads Secret request.
name
str
Required. The resource name of the Secret to get, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}" This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.cloud.orchestration.airflow.service_v1.types.UserWorkloadsSecret
User workloads Secret used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator.
list_environments
list_environments (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . ListEnvironmentsRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . orchestration . airflow . service_v1 . services . environments . pagers . ListEnvironmentsAsyncPager
)
List environments.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_list_environments():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. ListEnvironmentsRequest (
)
# Make the request
page_result = client. list_environments (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.ListEnvironmentsRequest , dict]]
The request object. List environments in a project and location.
parent
str
List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListEnvironmentsAsyncPager
The environments in a project and location. Iterating over this object will yield results and resolve additional pages automatically.
list_operations
list_operations (
request : typing . Optional [
google . longrunning . operations_pb2 . ListOperationsRequest
] = None ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . longrunning . operations_pb2 . ListOperationsResponse
Lists operations that match the specified filter in the request.
Parameters
Name
Description
request
.operations_pb2.ListOperationsRequest
The request object. Request message for ListOperations method.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
.operations_pb2.ListOperationsResponse
Response message for ListOperations method.
list_user_workloads_config_maps
list_user_workloads_config_maps (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . ListUserWorkloadsConfigMapsRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . orchestration . airflow . service_v1 . services . environments . pagers . ListUserWorkloadsConfigMapsAsyncPager
)
Lists user workloads ConfigMaps.
This method is supported for Cloud Composer environments in
versions composer-3-airflow- . .\ -build. and newer.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_list_user_workloads_config_maps():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. ListUserWorkloadsConfigMapsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_user_workloads_config_maps (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.ListUserWorkloadsConfigMapsRequest , dict]]
The request object. List user workloads ConfigMaps request.
parent
str
Required. List ConfigMaps in the given environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListUserWorkloadsConfigMapsAsyncPager
The user workloads ConfigMaps for a given environment. Iterating over this object will yield results and resolve additional pages automatically.
list_user_workloads_secrets
list_user_workloads_secrets (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . ListUserWorkloadsSecretsRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . orchestration . airflow . service_v1 . services . environments . pagers . ListUserWorkloadsSecretsAsyncPager
)
Lists user workloads Secrets.
This method is supported for Cloud Composer environments in
versions composer-3-airflow- . .\ -build. and newer.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_list_user_workloads_secrets():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. ListUserWorkloadsSecretsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_user_workloads_secrets (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.ListUserWorkloadsSecretsRequest , dict]]
The request object. List user workloads Secrets request.
parent
str
Required. List Secrets in the given environment, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListUserWorkloadsSecretsAsyncPager
The user workloads Secrets for a given environment. Iterating over this object will yield results and resolve additional pages automatically.
list_workloads
list_workloads (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . ListWorkloadsRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . orchestration . airflow . service_v1 . services . environments . pagers . ListWorkloadsAsyncPager
)
Lists workloads in a Cloud Composer environment. Workload is a
unit that runs a single Composer component.
This method is supported for Cloud Composer environments in
versions composer-2.\ . -airflow- . .* and newer.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_list_workloads():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. ListWorkloadsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_workloads (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.ListWorkloadsRequest , dict]]
The request object. Request for listing workloads in a Cloud Composer environment.
parent
str
Required. The environment name to get workloads for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.cloud.orchestration.airflow.service_v1.services.environments.pagers.ListWorkloadsAsyncPager
Response to ListWorkloadsRequest. Iterating over this object will yield results and resolve additional pages automatically.
load_snapshot
load_snapshot (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . LoadSnapshotRequest ,
dict ,
]
] = None ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Loads a snapshot of a Cloud Composer environment.
As a result of this operation, a snapshot of
environment's specified in LoadSnapshotRequest is loaded
into the environment.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_load_snapshot():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. LoadSnapshotRequest (
)
# Make the request
operation = client. load_snapshot (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.LoadSnapshotRequest , dict]]
The request object. Request to load a snapshot into a Cloud Composer environment.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.api_core.operation_async.AsyncOperation
An object representing a long-running operation. The result type for the operation will be LoadSnapshotResponse Response to LoadSnapshotRequest.
parse_common_billing_account_path
parse_common_billing_account_path ( path : str ) - > typing . Dict [ str , str ]
Parse a billing_account path into its component segments.
parse_common_folder_path
parse_common_folder_path ( path : str ) - > typing . Dict [ str , str ]
Parse a folder path into its component segments.
parse_common_location_path
parse_common_location_path ( path : str ) - > typing . Dict [ str , str ]
Parse a location path into its component segments.
parse_common_organization_path
parse_common_organization_path ( path : str ) - > typing . Dict [ str , str ]
Parse a organization path into its component segments.
parse_common_project_path
parse_common_project_path ( path : str ) - > typing . Dict [ str , str ]
Parse a project path into its component segments.
parse_environment_path
parse_environment_path ( path : str ) - > typing . Dict [ str , str ]
Parses a environment path into its component segments.
parse_user_workloads_config_map_path
parse_user_workloads_config_map_path ( path : str ) - > typing . Dict [ str , str ]
Parses a user_workloads_config_map path into its component segments.
parse_user_workloads_secret_path
parse_user_workloads_secret_path ( path : str ) - > typing . Dict [ str , str ]
Parses a user_workloads_secret path into its component segments.
poll_airflow_command
poll_airflow_command (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . PollAirflowCommandRequest ,
dict ,
]
] = None ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . orchestration . airflow . service_v1 . types . environments . PollAirflowCommandResponse
)
Polls Airflow CLI command execution and fetches logs.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_poll_airflow_command():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. PollAirflowCommandRequest (
)
# Make the request
response = await client. poll_airflow_command (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.PollAirflowCommandRequest , dict]]
The request object. Poll Airflow Command request.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.cloud.orchestration.airflow.service_v1.types.PollAirflowCommandResponse
Response to PollAirflowCommandRequest.
save_snapshot
save_snapshot (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . SaveSnapshotRequest ,
dict ,
]
] = None ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a snapshots of a Cloud Composer environment.
As a result of this operation, snapshot of environment's
state is stored in a location specified in the
SaveSnapshotRequest.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_save_snapshot():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. SaveSnapshotRequest (
)
# Make the request
operation = client. save_snapshot (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.SaveSnapshotRequest , dict]]
The request object. Request to create a snapshot of a Cloud Composer environment.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.api_core.operation_async.AsyncOperation
An object representing a long-running operation. The result type for the operation will be SaveSnapshotResponse Response to SaveSnapshotRequest.
stop_airflow_command
stop_airflow_command (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . StopAirflowCommandRequest ,
dict ,
]
] = None ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . orchestration . airflow . service_v1 . types . environments . StopAirflowCommandResponse
)
Stops Airflow CLI command execution.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_stop_airflow_command():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. StopAirflowCommandRequest (
)
# Make the request
response = await client. stop_airflow_command (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.StopAirflowCommandRequest , dict]]
The request object. Stop Airflow Command request.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.cloud.orchestration.airflow.service_v1.types.StopAirflowCommandResponse
Response to StopAirflowCommandRequest.
update_environment
update_environment (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . UpdateEnvironmentRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
environment : typing . Optional [
google . cloud . orchestration . airflow . service_v1 . types . environments . Environment
] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Update an environment.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_update_environment():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. UpdateEnvironmentRequest (
)
# Make the request
operation = client. update_environment (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.UpdateEnvironmentRequest , dict]]
The request object. Update an environment.
name
str
The relative resource name of the environment to update, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" This corresponds to the name field on the request instance; if request is provided, this should not be set.
environment
Environment
A patch environment. Fields specified by the updateMask will be copied from the patch environment into the environment under update. This corresponds to the environment field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. A comma-separated list of paths, relative to Environment , of fields to update. For example, to set the version of scikit-learn to install in the environment to 0.19.0 and to remove an existing installation of numpy, the updateMask parameter would include the following two paths values: "config.softwareConfig.pypiPackages.scikit-learn" and "config.softwareConfig.pypiPackages.numpy". The included patch environment would specify the scikit-learn version as follows: :: { "config":{ "softwareConfig":{ "pypiPackages":{ "scikit-learn":"==0.19.0" } } } } Note that in the above example, any existing PyPI packages other than scikit-learn and numpy will be unaffected. Only one update type may be included in a single request's updateMask . For example, one cannot update both the PyPI packages and labels in the same request. However, it is possible to update multiple members of a map field simultaneously in the same request. For example, to set the labels "label1" and "label2" while clearing "label3" (assuming it already exists), one can provide the paths "labels.label1", "labels.label2", and "labels.label3" and populate the patch environment as follows: :: { "labels":{ "label1":"new-label1-value" "label2":"new-label2-value" } } Note that in the above example, any existing labels that are not included in the updateMask will be unaffected. It is also possible to replace an entire map field by providing the map field's path in the updateMask . The new value of the field will be that which is provided in the patch environment. For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the updateMask would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following: :: { "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" } } } } Note: Only the following fields can be updated: - config.softwareConfig.pypiPackages - Replace all custom custom PyPI packages. If a replacement package map is not included in environment , all custom PyPI packages are cleared. It is an error to provide both this mask and a mask specifying an individual package. - config.softwareConfig.pypiPackages. \ packagename - Update the custom PyPI package packagename , preserving other packages. To delete the package, include it in updateMask , and omit the mapping for it in environment.config.softwareConfig.pypiPackages . It is an error to provide both a mask of this form and the config.softwareConfig.pypiPackages mask. - labels - Replace all environment labels. If a replacement labels map is not included in environment , all labels are cleared. It is an error to provide both this mask and a mask specifying one or more individual labels. - labels. \ labelName - Set the label named labelName , while preserving other labels. To delete the label, include it in updateMask and omit its mapping in environment.labels . It is an error to provide both a mask of this form and the labels mask. - config.nodeCount - Horizontally scale the number of nodes in the environment. An integer greater than or equal to 3 must be provided in the config.nodeCount field. Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . .*. - config.webServerNetworkAccessControl - Replace the environment's current WebServerNetworkAccessControl . - config.softwareConfig.airflowConfigOverrides - Replace all Apache Airflow config overrides. If a replacement config overrides map is not included in environment , all config overrides are cleared. It is an error to provide both this mask and a mask specifying one or more individual config overrides. - config.softwareConfig.airflowConfigOverrides. \ section-name - Override the Apache Airflow config property name in the section named section , preserving other properties. To delete the property override, include it in updateMask and omit its mapping in environment.config.softwareConfig.airflowConfigOverrides . It is an error to provide both a mask of this form and the config.softwareConfig.airflowConfigOverrides mask. - config.softwareConfig.envVariables - Replace all environment variables. If a replacement environment variable map is not included in environment , all custom environment variables are cleared. - config.softwareConfig.schedulerCount - Horizontally scale the number of schedulers in Airflow. A positive integer not greater than the number of nodes must be provided in the config.softwareConfig.schedulerCount field. Supported for Cloud Composer environments in versions composer-1.\ . -airflow-2.\ . . - config.databaseConfig.machineType - Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . .*. - config.webServerConfig.machineType - Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. Supported for Cloud Composer environments in versions composer-1.\ . -airflow- . .*. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.api_core.operation_async.AsyncOperation
An object representing a long-running operation. The result type for the operation will be Environment An environment for running orchestration tasks.
update_user_workloads_config_map
update_user_workloads_config_map (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . UpdateUserWorkloadsConfigMapRequest ,
dict ,
]
] = None ,
* ,
user_workloads_config_map : typing . Optional [
google . cloud . orchestration . airflow . service_v1 . types . environments . UserWorkloadsConfigMap
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . orchestration . airflow . service_v1 . types . environments . UserWorkloadsConfigMap
)
Updates a user workloads ConfigMap.
This method is supported for Cloud Composer environments in
versions composer-3-airflow- . .\ -build. and newer.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_update_user_workloads_config_map():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. UpdateUserWorkloadsConfigMapRequest (
)
# Make the request
response = await client. update_user_workloads_config_map (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.UpdateUserWorkloadsConfigMapRequest , dict]]
The request object. Update user workloads ConfigMap request.
user_workloads_config_map
UserWorkloadsConfigMap
Optional. User workloads ConfigMap to override. This corresponds to the user_workloads_config_map field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.cloud.orchestration.airflow.service_v1.types.UserWorkloadsConfigMap
User workloads ConfigMap used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator.
update_user_workloads_secret
update_user_workloads_secret (
request : typing . Optional [
typing . Union [
google . cloud . orchestration . airflow . service_v1 . types . environments . UpdateUserWorkloadsSecretRequest ,
dict ,
]
] = None ,
* ,
user_workloads_secret : typing . Optional [
google . cloud . orchestration . airflow . service_v1 . types . environments . UserWorkloadsSecret
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . orchestration . airflow . service_v1 . types . environments . UserWorkloadsSecret
)
Updates a user workloads Secret.
This method is supported for Cloud Composer environments in
versions composer-3-airflow- . .\ -build. and newer.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.orchestration.airflow import service_v1
async def sample_update_user_workloads_secret():
# Create a client
client = service_v1. EnvironmentsAsyncClient ()
# Initialize request argument(s)
request = service_v1. UpdateUserWorkloadsSecretRequest (
)
# Make the request
response = await client. update_user_workloads_secret (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.orchestration.airflow.service_v1.types.UpdateUserWorkloadsSecretRequest , dict]]
The request object. Update user workloads Secret request.
user_workloads_secret
UserWorkloadsSecret
Optional. User workloads Secret to override. This corresponds to the user_workloads_secret field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Returns
Type
Description
google.cloud.orchestration.airflow.service_v1.types.UserWorkloadsSecret
User workloads Secret used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator.
user_workloads_config_map_path
user_workloads_config_map_path (
project : str , location : str , environment : str , user_workloads_config_map : str
) - > str
Returns a fully-qualified user_workloads_config_map string.
user_workloads_secret_path
user_workloads_secret_path (
project : str , location : str , environment : str , user_workloads_secret : str
) - > str
Returns a fully-qualified user_workloads_secret string.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
