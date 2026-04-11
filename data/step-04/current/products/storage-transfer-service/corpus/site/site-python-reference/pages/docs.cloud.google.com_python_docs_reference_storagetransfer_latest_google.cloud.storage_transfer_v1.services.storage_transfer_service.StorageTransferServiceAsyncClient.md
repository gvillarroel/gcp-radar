---
title: "Class StorageTransferServiceAsyncClient (1.20.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient
  title: "Class StorageTransferServiceAsyncClient (1.20.0) \_|\_ Python client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Class StorageTransferServiceAsyncClient (1.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.20.0 (latest)
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.1
1.12.0
1.11.5
1.10.0
1.9.2
1.8.1
1.7.1
1.6.0
1.5.2
1.4.1
1.3.1
1.2.1
1.1.1
1.0.2
0.1.0
StorageTransferServiceAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . storage_transfer_v1 . services . storage_transfer_service . transports . base . StorageTransferServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . storage_transfer_v1 . services . storage_transfer_service . transports . base . StorageTransferServiceTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Storage Transfer Service and its protos.
Transfers data between between Google Cloud Storage buckets or
from a data source external to Google to a Cloud Storage bucket.
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
StorageTransferServiceTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
StorageTransferServiceAsyncClient
StorageTransferServiceAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . storage_transfer_v1 . services . storage_transfer_service . transports . base . StorageTransferServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . storage_transfer_v1 . services . storage_transfer_service . transports . base . StorageTransferServiceTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the storage transfer service async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,StorageTransferServiceTransport,Callable[..., StorageTransferServiceTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the StorageTransferServiceTransport constructor. If set to None, a transport is chosen automatically.
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
agent_pools_path
agent_pools_path ( project_id : str , agent_pool_id : str ) - > str
Returns a fully-qualified agent_pools string.
cancel_operation
cancel_operation (
request : typing . Optional [
typing . Union [ google . longrunning . operations_pb2 . CancelOperationRequest , dict ]
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
Starts asynchronous cancellation on a long-running operation.
The server makes a best effort to cancel the operation, but success
is not guaranteed. If the server doesn't support this method, it returns
google.rpc.Code.UNIMPLEMENTED .
Parameters
Name
Description
request
.operations_pb2.CancelOperationRequest
The request object. Request message for CancelOperation method.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
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
create_agent_pool
create_agent_pool (
request : typing . Optional [
typing . Union [
google . cloud . storage_transfer_v1 . types . transfer . CreateAgentPoolRequest , dict
]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
agent_pool : typing . Optional [
google . cloud . storage_transfer_v1 . types . transfer_types . AgentPool
] = None ,
agent_pool_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . storage_transfer_v1 . types . transfer_types . AgentPool
Creates an agent pool resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import storage_transfer_v1
async def sample_create_agent_pool():
# Create a client
client = storage_transfer_v1 . StorageTransferServiceAsyncClient ()
# Initialize request argument(s)
agent_pool = storage_transfer_v1 . AgentPool ()
agent_pool.name = "name_value"
request = storage_transfer_v1 . CreateAgentPoolRequest (
project_id="project_id_value",
agent_pool=agent_pool,
agent_pool_id="agent_pool_id_value",
)
# Make the request
response = await client. create_agent_pool (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.storage_transfer_v1.types.CreateAgentPoolRequest , dict]]
The request object. Specifies the request passed to CreateAgentPool.
project_id
str
Required. The ID of the Google Cloud project that owns the agent pool. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
agent_pool
AgentPool
Required. The agent pool to create. This corresponds to the agent_pool field on the request instance; if request is provided, this should not be set.
agent_pool_id
str
Required. The ID of the agent pool to create. The agent_pool_id must meet the following requirements: - Length of 128 characters or less. - Not start with the string goog . - Start with a lowercase ASCII character, followed by: - Zero or more: lowercase Latin alphabet characters, numerals, hyphens ( - ), periods ( . ), underscores (` ), or tildes (
). - One or more numerals or lowercase ASCII characters. As expressed by the regular expression: ^(?!goog)[a-z]([a-z0-9-. ]*[a-z0-9])?$ . This corresponds to the agent_pool_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.storage_transfer_v1.types.AgentPool
Represents an agent pool.
create_transfer_job
create_transfer_job (
request : typing . Optional [
typing . Union [
google . cloud . storage_transfer_v1 . types . transfer . CreateTransferJobRequest ,
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
) - > google . cloud . storage_transfer_v1 . types . transfer_types . TransferJob
Creates a transfer job that runs periodically.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import storage_transfer_v1
async def sample_create_transfer_job():
# Create a client
client = storage_transfer_v1 . StorageTransferServiceAsyncClient ()
# Initialize request argument(s)
request = storage_transfer_v1 . CreateTransferJobRequest (
)
# Make the request
response = await client. create_transfer_job (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.storage_transfer_v1.types.CreateTransferJobRequest , dict]]
The request object. Request passed to CreateTransferJob.
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
google.cloud.storage_transfer_v1.types.TransferJob
This resource represents the configuration of a transfer job that runs periodically.
delete_agent_pool
delete_agent_pool (
request : typing . Optional [
typing . Union [
google . cloud . storage_transfer_v1 . types . transfer . DeleteAgentPoolRequest , dict
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
Deletes an agent pool.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import storage_transfer_v1
async def sample_delete_agent_pool():
# Create a client
client = storage_transfer_v1 . StorageTransferServiceAsyncClient ()
# Initialize request argument(s)
request = storage_transfer_v1 . DeleteAgentPoolRequest (
name="name_value",
)
# Make the request
await client. delete_agent_pool (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.storage_transfer_v1.types.DeleteAgentPoolRequest , dict]]
The request object. Specifies the request passed to DeleteAgentPool.
name
str
Required. The name of the agent pool to delete. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_transfer_job
delete_transfer_job (
request : typing . Optional [
typing . Union [
google . cloud . storage_transfer_v1 . types . transfer . DeleteTransferJobRequest ,
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
) - > None
Deletes a transfer job. Deleting a transfer job sets its status
to
DELETED][google.storagetransfer.v1.TransferJob.Status.DELETED] .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import storage_transfer_v1
async def sample_delete_transfer_job():
# Create a client
client = storage_transfer_v1 . StorageTransferServiceAsyncClient ()
# Initialize request argument(s)
request = storage_transfer_v1 . DeleteTransferJobRequest (
job_name="job_name_value",
project_id="project_id_value",
)
# Make the request
await client. delete_transfer_job (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.storage_transfer_v1.types.DeleteTransferJobRequest , dict]]
The request object. Request passed to DeleteTransferJob.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
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
StorageTransferServiceAsyncClient
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
StorageTransferServiceAsyncClient
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
StorageTransferServiceAsyncClient
The constructed client.
get_agent_pool
get_agent_pool (
request : typing . Optional [
typing . Union [
google . cloud . storage_transfer_v1 . types . transfer . GetAgentPoolRequest , dict
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
) - > google . cloud . storage_transfer_v1 . types . transfer_types . AgentPool
Gets an agent pool.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import storage_transfer_v1
async def sample_get_agent_pool():
# Create a client
client = storage_transfer_v1 . StorageTransferServiceAsyncClient ()
# Initialize request argument(s)
request = storage_transfer_v1 . GetAgentPoolRequest (
name="name_value",
)
# Make the request
response = await client. get_agent_pool (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.storage_transfer_v1.types.GetAgentPoolRequest , dict]]
The request object. Specifies the request passed to GetAgentPool.
name
str
Required. The name of the agent pool to get. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.storage_transfer_v1.types.AgentPool
Represents an agent pool.
get_google_service_account
get_google_service_account (
request : typing . Optional [
typing . Union [
google . cloud . storage_transfer_v1 . types . transfer . GetGoogleServiceAccountRequest ,
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
) - > google . cloud . storage_transfer_v1 . types . transfer_types . GoogleServiceAccount
Returns the Google service account that is used by
Storage Transfer Service to access buckets in the
project where transfers run or in other projects. Each
Google service account is associated with one Google
Cloud project. Users
should add this service account to the Google Cloud
Storage bucket ACLs to grant access to Storage Transfer
Service. This service account is created and owned by
Storage Transfer Service and can only be used by Storage
Transfer Service.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import storage_transfer_v1
async def sample_get_google_service_account():
# Create a client
client = storage_transfer_v1 . StorageTransferServiceAsyncClient ()
# Initialize request argument(s)
request = storage_transfer_v1 . GetGoogleServiceAccountRequest (
project_id="project_id_value",
)
# Make the request
response = await client. get_google_service_account (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.storage_transfer_v1.types.GetGoogleServiceAccountRequest , dict]]
The request object. Request passed to GetGoogleServiceAccount.
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
google.cloud.storage_transfer_v1.types.GoogleServiceAccount
Google service account
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
typing . Union [ google . longrunning . operations_pb2 . GetOperationRequest , dict ]
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
get_transfer_job
get_transfer_job (
request : typing . Optional [
typing . Union [
google . cloud . storage_transfer_v1 . types . transfer . GetTransferJobRequest , dict
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
) - > google . cloud . storage_transfer_v1 . types . transfer_types . TransferJob
Gets a transfer job.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import storage_transfer_v1
async def sample_get_transfer_job():
# Create a client
client = storage_transfer_v1 . StorageTransferServiceAsyncClient ()
# Initialize request argument(s)
request = storage_transfer_v1 . GetTransferJobRequest (
job_name="job_name_value",
project_id="project_id_value",
)
# Make the request
response = await client. get_transfer_job (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.storage_transfer_v1.types.GetTransferJobRequest , dict]]
The request object. Request passed to GetTransferJob.
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
google.cloud.storage_transfer_v1.types.TransferJob
This resource represents the configuration of a transfer job that runs periodically.
get_transport_class
get_transport_class (
label : typing . Optional [ str ] = None ,
) - > typing . Type [
google . cloud . storage_transfer_v1 . services . storage_transfer_service . transports . base . StorageTransferServiceTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
list_agent_pools
list_agent_pools (
request : typing . Optional [
typing . Union [
google . cloud . storage_transfer_v1 . types . transfer . ListAgentPoolsRequest , dict
]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . storage_transfer_v1 . services . storage_transfer_service . pagers . ListAgentPoolsAsyncPager
)
Lists agent pools.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import storage_transfer_v1
async def sample_list_agent_pools():
# Create a client
client = storage_transfer_v1 . StorageTransferServiceAsyncClient ()
# Initialize request argument(s)
request = storage_transfer_v1 . ListAgentPoolsRequest (
project_id="project_id_value",
)
# Make the request
page_result = client. list_agent_pools (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.storage_transfer_v1.types.ListAgentPoolsRequest , dict]]
The request object. The request passed to ListAgentPools.
project_id
str
Required. The ID of the Google Cloud project that owns the job. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListAgentPoolsAsyncPager
Response from ListAgentPools. Iterating over this object will yield results and resolve additional pages automatically.
list_operations
list_operations (
request : typing . Optional [
typing . Union [ google . longrunning . operations_pb2 . ListOperationsRequest , dict ]
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
list_transfer_jobs
list_transfer_jobs (
request : typing . Optional [
typing . Union [
google . cloud . storage_transfer_v1 . types . transfer . ListTransferJobsRequest ,
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
google . cloud . storage_transfer_v1 . services . storage_transfer_service . pagers . ListTransferJobsAsyncPager
)
Lists transfer jobs.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import storage_transfer_v1
async def sample_list_transfer_jobs():
# Create a client
client = storage_transfer_v1 . StorageTransferServiceAsyncClient ()
# Initialize request argument(s)
request = storage_transfer_v1 . ListTransferJobsRequest (
filter="filter_value",
)
# Make the request
page_result = client. list_transfer_jobs (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.storage_transfer_v1.types.ListTransferJobsRequest , dict]]
The request object. projectId , jobNames , and jobStatuses are query parameters that can be specified when listing transfer jobs.
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
google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager
Response from ListTransferJobs. Iterating over this object will yield results and resolve additional pages automatically.
parse_agent_pools_path
parse_agent_pools_path ( path : str ) - > typing . Dict [ str , str ]
Parses a agent_pools path into its component segments.
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
pause_transfer_operation
pause_transfer_operation (
request : typing . Optional [
typing . Union [
google . cloud . storage_transfer_v1 . types . transfer . PauseTransferOperationRequest ,
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
) - > None
Pauses a transfer operation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import storage_transfer_v1
async def sample_pause_transfer_operation():
# Create a client
client = storage_transfer_v1 . StorageTransferServiceAsyncClient ()
# Initialize request argument(s)
request = storage_transfer_v1 . PauseTransferOperationRequest (
name="name_value",
)
# Make the request
await client. pause_transfer_operation (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.storage_transfer_v1.types.PauseTransferOperationRequest , dict]]
The request object. Request passed to PauseTransferOperation.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
resume_transfer_operation
resume_transfer_operation (
request : typing . Optional [
typing . Union [
google . cloud . storage_transfer_v1 . types . transfer . ResumeTransferOperationRequest ,
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
) - > None
Resumes a transfer operation that is paused.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import storage_transfer_v1
async def sample_resume_transfer_operation():
# Create a client
client = storage_transfer_v1 . StorageTransferServiceAsyncClient ()
# Initialize request argument(s)
request = storage_transfer_v1 . ResumeTransferOperationRequest (
name="name_value",
)
# Make the request
await client. resume_transfer_operation (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.storage_transfer_v1.types.ResumeTransferOperationRequest , dict]]
The request object. Request passed to ResumeTransferOperation.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
run_transfer_job
run_transfer_job (
request : typing . Optional [
typing . Union [
google . cloud . storage_transfer_v1 . types . transfer . RunTransferJobRequest , dict
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
Starts a new operation for the specified transfer job. A
TransferJob has a maximum of one active
TransferOperation . If this method is called while a
TransferOperation is active, an error is returned.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import storage_transfer_v1
async def sample_run_transfer_job():
# Create a client
client = storage_transfer_v1 . StorageTransferServiceAsyncClient ()
# Initialize request argument(s)
request = storage_transfer_v1 . RunTransferJobRequest (
job_name="job_name_value",
project_id="project_id_value",
)
# Make the request
operation = client. run_transfer_job (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.storage_transfer_v1.types.RunTransferJobRequest , dict]]
The request object. Request passed to RunTransferJob.
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
update_agent_pool
update_agent_pool (
request : typing . Optional [
typing . Union [
google . cloud . storage_transfer_v1 . types . transfer . UpdateAgentPoolRequest , dict
]
] = None ,
* ,
agent_pool : typing . Optional [
google . cloud . storage_transfer_v1 . types . transfer_types . AgentPool
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
) - > google . cloud . storage_transfer_v1 . types . transfer_types . AgentPool
Updates an existing agent pool resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import storage_transfer_v1
async def sample_update_agent_pool():
# Create a client
client = storage_transfer_v1 . StorageTransferServiceAsyncClient ()
# Initialize request argument(s)
agent_pool = storage_transfer_v1 . AgentPool ()
agent_pool.name = "name_value"
request = storage_transfer_v1 . UpdateAgentPoolRequest (
agent_pool=agent_pool,
)
# Make the request
response = await client. update_agent_pool (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.storage_transfer_v1.types.UpdateAgentPoolRequest , dict]]
The request object. Specifies the request passed to UpdateAgentPool.
agent_pool
AgentPool
Required. The agent pool to update. agent_pool is expected to specify following fields: - name][google.storagetransfer.v1.AgentPool.name] - display_name][google.storagetransfer.v1.AgentPool.display_name] - bandwidth_limit][google.storagetransfer.v1.AgentPool.bandwidth_limit] An UpdateAgentPoolRequest with any other fields is rejected with the error INVALID_ARGUMENT][google.rpc.Code.INVALID_ARGUMENT] . This corresponds to the agent_pool field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
The field mask of the fields in agentPool to update in this request. The following agentPool fields can be updated: - display_name][google.storagetransfer.v1.AgentPool.display_name] - bandwidth_limit][google.storagetransfer.v1.AgentPool.bandwidth_limit] This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.storage_transfer_v1.types.AgentPool
Represents an agent pool.
update_transfer_job
update_transfer_job (
request : typing . Optional [
typing . Union [
google . cloud . storage_transfer_v1 . types . transfer . UpdateTransferJobRequest ,
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
) - > google . cloud . storage_transfer_v1 . types . transfer_types . TransferJob
Updates a transfer job. Updating a job's transfer spec does not
affect transfer operations that are running already.
Note: The job's
status][google.storagetransfer.v1.TransferJob.status] field can
be modified using this RPC (for example, to set a job's status
to
DELETED][google.storagetransfer.v1.TransferJob.Status.DELETED] ,
DISABLED][google.storagetransfer.v1.TransferJob.Status.DISABLED] ,
or
ENABLED][google.storagetransfer.v1.TransferJob.Status.ENABLED] ).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import storage_transfer_v1
async def sample_update_transfer_job():
# Create a client
client = storage_transfer_v1 . StorageTransferServiceAsyncClient ()
# Initialize request argument(s)
request = storage_transfer_v1 . UpdateTransferJobRequest (
job_name="job_name_value",
project_id="project_id_value",
)
# Make the request
response = await client. update_transfer_job (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.storage_transfer_v1.types.UpdateTransferJobRequest , dict]]
The request object. Request passed to UpdateTransferJob.
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
google.cloud.storage_transfer_v1.types.TransferJob
This resource represents the configuration of a transfer job that runs periodically.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
