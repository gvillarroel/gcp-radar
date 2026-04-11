---
title: "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.services.migration_center.MigrationCenterAsyncClient
  title: "Class MigrationCenterAsyncClient (0.4.0) \_|\_ Python client libraries \_\
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
Class MigrationCenterAsyncClient (0.4.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.4.0 (latest)
0.3.0
0.2.0
0.1.15
MigrationCenterAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . migrationcenter_v1 . services . migration_center . transports . base . MigrationCenterTransport ,
typing . Callable [
[ ... ],
google . cloud . migrationcenter_v1 . services . migration_center . transports . base . MigrationCenterTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Service describing handlers for resources.
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
MigrationCenterTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
MigrationCenterAsyncClient
MigrationCenterAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . migrationcenter_v1 . services . migration_center . transports . base . MigrationCenterTransport ,
typing . Callable [
[ ... ],
google . cloud . migrationcenter_v1 . services . migration_center . transports . base . MigrationCenterTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the migration center async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,MigrationCenterTransport,Callable[..., MigrationCenterTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the MigrationCenterTransport constructor. If set to None, a transport is chosen automatically.
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
add_assets_to_group
add_assets_to_group (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . AddAssetsToGroupRequest ,
dict ,
]
] = None ,
* ,
group : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Adds assets to a group.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_add_assets_to_group():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
assets = migrationcenter_v1 . AssetList ()
assets.asset_ids = ['asset_ids_value1', 'asset_ids_value2']
request = migrationcenter_v1 . AddAssetsToGroupRequest (
group="group_value",
assets=assets,
)
# Make the request
operation = client. add_assets_to_group (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.AddAssetsToGroupRequest , dict]]
The request object. A request to add assets to a group.
group
str
Required. Group reference. This corresponds to the group field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Group A resource that represents an asset group. The purpose of an asset group is to bundle a set of assets that have something in common, while allowing users to add annotations to the group. An asset can belong to multiple groups.
aggregate_assets_values
aggregate_assets_values (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . AggregateAssetsValuesRequest ,
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
google . cloud . migrationcenter_v1 . types . migrationcenter . AggregateAssetsValuesResponse
)
Aggregates the requested fields based on provided
function.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_aggregate_assets_values():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . AggregateAssetsValuesRequest (
parent="parent_value",
)
# Make the request
response = await client. aggregate_assets_values (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.AggregateAssetsValuesRequest , dict]]
The request object. A request to aggregate one or more values.
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
google.cloud.migrationcenter_v1.types.AggregateAssetsValuesResponse
A response to a request to aggregated assets values.
asset_path
asset_path ( project : str , location : str , asset : str ) - > str
Returns a fully-qualified asset string.
batch_delete_assets
batch_delete_assets (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . BatchDeleteAssetsRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
names : typing . Optional [ typing . MutableSequence [ str ]] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > None
Deletes list of Assets.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_batch_delete_assets():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . BatchDeleteAssetsRequest (
parent="parent_value",
names=['names_value1', 'names_value2'],
)
# Make the request
await client. batch_delete_assets (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.BatchDeleteAssetsRequest , dict]]
The request object. A request to delete a list of asset.
parent
str
Required. Parent value for batch asset delete. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
names
:class: MutableSequence[str]
Required. The IDs of the assets to delete. A maximum of 1000 assets can be deleted in a batch. Format: projects/{project}/locations/{location}/assets/{name}. This corresponds to the names field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
batch_update_assets
batch_update_assets (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . BatchUpdateAssetsRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
requests : typing . Optional [
typing . MutableSequence [
google . cloud . migrationcenter_v1 . types . migrationcenter . UpdateAssetRequest
]
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . migrationcenter_v1 . types . migrationcenter . BatchUpdateAssetsResponse
Updates the parameters of a list of assets.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_batch_update_assets():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . BatchUpdateAssetsRequest (
parent="parent_value",
)
# Make the request
response = await client. batch_update_assets (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.BatchUpdateAssetsRequest , dict]]
The request object. A request to update a list of assets.
parent
str
Required. Parent value for batch asset update. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
requests
:class: MutableSequence[ google.cloud.migrationcenter_v1.types.UpdateAssetRequest ]
Required. The request message specifying the resources to update. A maximum of 1000 assets can be modified in a batch. This corresponds to the requests field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.types.BatchUpdateAssetsResponse
Response for updating a list of assets.
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
create_group
create_group (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . CreateGroupRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
group : typing . Optional [
google . cloud . migrationcenter_v1 . types . migrationcenter . Group
] = None ,
group_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new group in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_create_group():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . CreateGroupRequest (
parent="parent_value",
group_id="group_id_value",
)
# Make the request
operation = client. create_group (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.CreateGroupRequest , dict]]
The request object. A request to create a group.
parent
str
Required. Value for parent. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
group
Group
Required. The group resource being created. This corresponds to the group field on the request instance; if request is provided, this should not be set.
group_id
str
Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: a-z ? . This corresponds to the group_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Group A resource that represents an asset group. The purpose of an asset group is to bundle a set of assets that have something in common, while allowing users to add annotations to the group. An asset can belong to multiple groups.
create_import_data_file
create_import_data_file (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . CreateImportDataFileRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
import_data_file : typing . Optional [
google . cloud . migrationcenter_v1 . types . migrationcenter . ImportDataFile
] = None ,
import_data_file_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates an import data file.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_create_import_data_file():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
import_data_file = migrationcenter_v1 . ImportDataFile ()
import_data_file.format_ = "IMPORT_JOB_FORMAT_STRATOZONE_CSV"
request = migrationcenter_v1 . CreateImportDataFileRequest (
parent="parent_value",
import_data_file_id="import_data_file_id_value",
import_data_file=import_data_file,
)
# Make the request
operation = client. create_import_data_file (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.CreateImportDataFileRequest , dict]]
The request object. A request to create an ImportDataFile resource.
parent
str
Required. Name of the parent of the ImportDataFile. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
import_data_file
ImportDataFile
Required. The resource being created. This corresponds to the import_data_file field on the request instance; if request is provided, this should not be set.
import_data_file_id
str
Required. The ID of the new data file. This corresponds to the import_data_file_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be ImportDataFile A resource that represents a payload file in an import job.
create_import_job
create_import_job (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . CreateImportJobRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
import_job : typing . Optional [
google . cloud . migrationcenter_v1 . types . migrationcenter . ImportJob
] = None ,
import_job_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates an import job.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_create_import_job():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
import_job = migrationcenter_v1 . ImportJob ()
import_job.asset_source = "asset_source_value"
request = migrationcenter_v1 . CreateImportJobRequest (
parent="parent_value",
import_job_id="import_job_id_value",
import_job=import_job,
)
# Make the request
operation = client. create_import_job (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.CreateImportJobRequest , dict]]
The request object. A request to create an import job.
parent
str
Required. Value for parent. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
import_job
ImportJob
Required. The resource being created. This corresponds to the import_job field on the request instance; if request is provided, this should not be set.
import_job_id
str
Required. ID of the import job. This corresponds to the import_job_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be ImportJob A resource that represents the background job that imports asset frames.
create_preference_set
create_preference_set (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . CreatePreferenceSetRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
preference_set : typing . Optional [
google . cloud . migrationcenter_v1 . types . migrationcenter . PreferenceSet
] = None ,
preference_set_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new preference set in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_create_preference_set():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . CreatePreferenceSetRequest (
parent="parent_value",
preference_set_id="preference_set_id_value",
)
# Make the request
operation = client. create_preference_set (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.CreatePreferenceSetRequest , dict]]
The request object. A request to create a preference set.
parent
str
Required. Value for parent. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
preference_set
PreferenceSet
Required. The preference set resource being created. This corresponds to the preference_set field on the request instance; if request is provided, this should not be set.
preference_set_id
str
Required. User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression a-z ? . This corresponds to the preference_set_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be PreferenceSet The preferences that apply to all assets in a given context.
create_report
create_report (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . CreateReportRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
report : typing . Optional [
google . cloud . migrationcenter_v1 . types . migrationcenter . Report
] = None ,
report_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a report.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_create_report():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . CreateReportRequest (
parent="parent_value",
report_id="report_id_value",
)
# Make the request
operation = client. create_report (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.CreateReportRequest , dict]]
The request object. Message for creating a Report.
parent
str
Required. Value for parent. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
report
Report
Required. The report resource being created. This corresponds to the report field on the request instance; if request is provided, this should not be set.
report_id
str
Required. User specified id for the report. It will become the last component of the report name. The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The id must match the regular expression: a-z <[a-z0-9-]{0,61}[a-z0-9]> __?. This corresponds to the report_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Report Report represents a point-in-time rendering of the ReportConfig results.
create_report_config
create_report_config (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . CreateReportConfigRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
report_config : typing . Optional [
google . cloud . migrationcenter_v1 . types . migrationcenter . ReportConfig
] = None ,
report_config_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a report configuration.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_create_report_config():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
report_config = migrationcenter_v1 . ReportConfig ()
report_config.group_preferenceset_assignments.group = "group_value"
report_config.group_preferenceset_assignments.preference_set = "preference_set_value"
request = migrationcenter_v1 . CreateReportConfigRequest (
parent="parent_value",
report_config_id="report_config_id_value",
report_config=report_config,
)
# Make the request
operation = client. create_report_config (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.CreateReportConfigRequest , dict]]
The request object. A request to create a ReportConfig resource.
parent
str
Required. Value for parent. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
report_config
ReportConfig
Required. The report config set resource being created. This corresponds to the report_config field on the request instance; if request is provided, this should not be set.
report_config_id
str
Required. User specified ID for the report config. It will become the last component of the report config name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: a-z <[a-z0-9-]{0,61}[a-z0-9]> __?. This corresponds to the report_config_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be ReportConfig The groups and associated preference sets on which we can generate reports.
create_source
create_source (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . CreateSourceRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
source : typing . Optional [
google . cloud . migrationcenter_v1 . types . migrationcenter . Source
] = None ,
source_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new source in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_create_source():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . CreateSourceRequest (
parent="parent_value",
source_id="source_id_value",
)
# Make the request
operation = client. create_source (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.CreateSourceRequest , dict]]
The request object. A request to create a source.
parent
str
Required. Value for parent. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
source
Source
Required. The resource being created. This corresponds to the source field on the request instance; if request is provided, this should not be set.
source_id
str
Required. User specified ID for the source. It will become the last component of the source name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: a-z ? . This corresponds to the source_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Source Source represents an object from which asset information is streamed to Migration Center.
delete_asset
delete_asset (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . DeleteAssetRequest ,
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
Deletes an asset.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_delete_asset():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . DeleteAssetRequest (
name="name_value",
)
# Make the request
await client. delete_asset (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.DeleteAssetRequest , dict]]
The request object. A request to delete an asset.
name
str
Required. Name of the resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_group
delete_group (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . DeleteGroupRequest ,
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
Deletes a group.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_delete_group():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . DeleteGroupRequest (
name="name_value",
)
# Make the request
operation = client. delete_group (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.DeleteGroupRequest , dict]]
The request object. A request to delete a group.
name
str
Required. Name of the group resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_import_data_file
delete_import_data_file (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . DeleteImportDataFileRequest ,
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
Delete an import data file.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_delete_import_data_file():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . DeleteImportDataFileRequest (
name="name_value",
)
# Make the request
operation = client. delete_import_data_file (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.DeleteImportDataFileRequest , dict]]
The request object. A request to delete an ImportDataFile resource.
name
str
Required. Name of the ImportDataFile to delete. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_import_job
delete_import_job (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . DeleteImportJobRequest ,
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
Deletes an import job.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_delete_import_job():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . DeleteImportJobRequest (
name="name_value",
)
# Make the request
operation = client. delete_import_job (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.DeleteImportJobRequest , dict]]
The request object. A request to delete an import job.
name
str
Required. Name of the resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
typing . Union [ google . longrunning . operations_pb2 . DeleteOperationRequest , dict ]
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
delete_preference_set
delete_preference_set (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . DeletePreferenceSetRequest ,
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
Deletes a preference set.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_delete_preference_set():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . DeletePreferenceSetRequest (
name="name_value",
)
# Make the request
operation = client. delete_preference_set (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.DeletePreferenceSetRequest , dict]]
The request object. A request to delete a preference set.
name
str
Required. Name of the group resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_report
delete_report (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . DeleteReportRequest ,
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
Deletes a Report.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_delete_report():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . DeleteReportRequest (
name="name_value",
)
# Make the request
operation = client. delete_report (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.DeleteReportRequest , dict]]
The request object. A request to delete a Report.
name
str
Required. Name of the resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_report_config
delete_report_config (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . DeleteReportConfigRequest ,
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
Deletes a ReportConfig.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_delete_report_config():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . DeleteReportConfigRequest (
name="name_value",
)
# Make the request
operation = client. delete_report_config (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.DeleteReportConfigRequest , dict]]
The request object. A request to delete a ReportConfig.
name
str
Required. Name of the resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_source
delete_source (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . DeleteSourceRequest ,
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
Deletes a source.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_delete_source():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . DeleteSourceRequest (
name="name_value",
)
# Make the request
operation = client. delete_source (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.DeleteSourceRequest , dict]]
The request object. A request to delete a source.
name
str
Required. Name of the resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
error_frame_path
error_frame_path ( project : str , location : str , source : str , error_frame : str ) - > str
Returns a fully-qualified error_frame string.
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
MigrationCenterAsyncClient
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
MigrationCenterAsyncClient
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
MigrationCenterAsyncClient
The constructed client.
get_asset
get_asset (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . GetAssetRequest , dict
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
) - > google . cloud . migrationcenter_v1 . types . migrationcenter . Asset
Gets the details of an asset.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_get_asset():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . GetAssetRequest (
name="name_value",
)
# Make the request
response = await client. get_asset (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.GetAssetRequest , dict]]
The request object. Message for getting a Asset.
name
str
Required. Name of the resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.types.Asset
An asset represents a resource in your environment. Asset types include virtual machines and databases.
get_error_frame
get_error_frame (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . GetErrorFrameRequest ,
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
) - > google . cloud . migrationcenter_v1 . types . migrationcenter . ErrorFrame
Gets the details of an error frame.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_get_error_frame():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . GetErrorFrameRequest (
name="name_value",
)
# Make the request
response = await client. get_error_frame (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.GetErrorFrameRequest , dict]]
The request object.
name
str
Required. The name of the frame to retrieve. Format: projects/{project}/locations/{location}/sources/{source}/errorFrames/{error_frame} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.types.ErrorFrame
Message representing a frame which failed to be processed due to an error.
get_group
get_group (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . GetGroupRequest , dict
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
) - > google . cloud . migrationcenter_v1 . types . migrationcenter . Group
Gets the details of a group.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_get_group():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . GetGroupRequest (
name="name_value",
)
# Make the request
response = await client. get_group (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.GetGroupRequest , dict]]
The request object. A request to get a group.
name
str
Required. Name of the resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.types.Group
A resource that represents an asset group. The purpose of an asset group is to bundle a set of assets that have something in common, while allowing users to add annotations to the group. An asset can belong to multiple groups.
get_import_data_file
get_import_data_file (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . GetImportDataFileRequest ,
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
) - > google . cloud . migrationcenter_v1 . types . migrationcenter . ImportDataFile
Gets an import data file.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_get_import_data_file():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . GetImportDataFileRequest (
name="name_value",
)
# Make the request
response = await client. get_import_data_file (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.GetImportDataFileRequest , dict]]
The request object. A request to get an import data file.
name
str
Required. Name of the ImportDataFile. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.types.ImportDataFile
A resource that represents a payload file in an import job.
get_import_job
get_import_job (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . GetImportJobRequest ,
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
) - > google . cloud . migrationcenter_v1 . types . migrationcenter . ImportJob
Gets the details of an import job.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_get_import_job():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . GetImportJobRequest (
name="name_value",
)
# Make the request
response = await client. get_import_job (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.GetImportJobRequest , dict]]
The request object. A request to get an import job.
name
str
Required. Name of the resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.types.ImportJob
A resource that represents the background job that imports asset frames.
get_location
get_location (
request : typing . Optional [
typing . Union [ google . cloud . location . locations_pb2 . GetLocationRequest , dict ]
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
) - > google . cloud . location . locations_pb2 . Location
Gets information about a location.
Parameters
Name
Description
request
.location_pb2.GetLocationRequest
The request object. Request message for GetLocation method.
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
.location_pb2.Location
Location object.
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
get_preference_set
get_preference_set (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . GetPreferenceSetRequest ,
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
) - > google . cloud . migrationcenter_v1 . types . migrationcenter . PreferenceSet
Gets the details of a preference set.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_get_preference_set():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . GetPreferenceSetRequest (
name="name_value",
)
# Make the request
response = await client. get_preference_set (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.GetPreferenceSetRequest , dict]]
The request object. A request to get a preference set.
name
str
Required. Name of the resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.types.PreferenceSet
The preferences that apply to all assets in a given context.
get_report
get_report (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . GetReportRequest , dict
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
) - > google . cloud . migrationcenter_v1 . types . migrationcenter . Report
Gets details of a single Report.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_get_report():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . GetReportRequest (
name="name_value",
)
# Make the request
response = await client. get_report (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.GetReportRequest , dict]]
The request object. A request to get a Report.
name
str
Required. Name of the resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.types.Report
Report represents a point-in-time rendering of the ReportConfig results.
get_report_config
get_report_config (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . GetReportConfigRequest ,
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
) - > google . cloud . migrationcenter_v1 . types . migrationcenter . ReportConfig
Gets details of a single ReportConfig.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_get_report_config():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . GetReportConfigRequest (
name="name_value",
)
# Make the request
response = await client. get_report_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.GetReportConfigRequest , dict]]
The request object. A request to get a ReportConfig resource.
name
str
Required. Name of the resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.types.ReportConfig
The groups and associated preference sets on which we can generate reports.
get_settings
get_settings (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . GetSettingsRequest ,
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
) - > google . cloud . migrationcenter_v1 . types . migrationcenter . Settings
Gets the details of regional settings.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_get_settings():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . GetSettingsRequest (
name="name_value",
)
# Make the request
response = await client. get_settings (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.GetSettingsRequest , dict]]
The request object. A request to get the settings.
name
str
Required. Name of the resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.types.Settings
Describes the Migration Center settings related to the project.
get_source
get_source (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . GetSourceRequest , dict
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
) - > google . cloud . migrationcenter_v1 . types . migrationcenter . Source
Gets the details of a source.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_get_source():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . GetSourceRequest (
name="name_value",
)
# Make the request
response = await client. get_source (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.GetSourceRequest , dict]]
The request object. A request to get a source.
name
str
Required. Name of the resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.types.Source
Source represents an object from which asset information is streamed to Migration Center.
get_transport_class
get_transport_class (
label : typing . Optional [ str ] = None ,
) - > typing . Type [
google . cloud . migrationcenter_v1 . services . migration_center . transports . base . MigrationCenterTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
group_path
group_path ( project : str , location : str , group : str ) - > str
Returns a fully-qualified group string.
import_data_file_path
import_data_file_path (
project : str , location : str , import_job : str , import_data_file : str
) - > str
Returns a fully-qualified import_data_file string.
import_job_path
import_job_path ( project : str , location : str , import_job : str ) - > str
Returns a fully-qualified import_job string.
list_assets
list_assets (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . ListAssetsRequest ,
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
google . cloud . migrationcenter_v1 . services . migration_center . pagers . ListAssetsAsyncPager
)
Lists all the assets in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_list_assets():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . ListAssetsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_assets (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.ListAssetsRequest , dict]]
The request object. Message for requesting a list of assets.
parent
str
Required. Parent value for ListAssetsRequest . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.services.migration_center.pagers.ListAssetsAsyncPager
Response message for listing assets. Iterating over this object will yield results and resolve additional pages automatically.
list_error_frames
list_error_frames (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . ListErrorFramesRequest ,
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
google . cloud . migrationcenter_v1 . services . migration_center . pagers . ListErrorFramesAsyncPager
)
Lists all error frames in a given source and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_list_error_frames():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . ListErrorFramesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_error_frames (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.ListErrorFramesRequest , dict]]
The request object. A request to list error frames for a source.
parent
str
Required. Parent value (the source) for ListErrorFramesRequest . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.services.migration_center.pagers.ListErrorFramesAsyncPager
A response for listing error frames. Iterating over this object will yield results and resolve additional pages automatically.
list_groups
list_groups (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . ListGroupsRequest ,
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
google . cloud . migrationcenter_v1 . services . migration_center . pagers . ListGroupsAsyncPager
)
Lists all groups in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_list_groups():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . ListGroupsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_groups (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.ListGroupsRequest , dict]]
The request object. A request to list groups.
parent
str
Required. Parent value for ListGroupsRequest . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.services.migration_center.pagers.ListGroupsAsyncPager
A response for listing groups. Iterating over this object will yield results and resolve additional pages automatically.
list_import_data_files
list_import_data_files (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . ListImportDataFilesRequest ,
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
google . cloud . migrationcenter_v1 . services . migration_center . pagers . ListImportDataFilesAsyncPager
)
List import data files.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_list_import_data_files():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . ListImportDataFilesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_import_data_files (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.ListImportDataFilesRequest , dict]]
The request object. A request to list import data files of an import job.
parent
str
Required. Name of the parent of the ImportDataFiles resource. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.services.migration_center.pagers.ListImportDataFilesAsyncPager
Response for listing payload files of an import job. Iterating over this object will yield results and resolve additional pages automatically.
list_import_jobs
list_import_jobs (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . ListImportJobsRequest ,
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
google . cloud . migrationcenter_v1 . services . migration_center . pagers . ListImportJobsAsyncPager
)
Lists all import jobs.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_list_import_jobs():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . ListImportJobsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_import_jobs (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.ListImportJobsRequest , dict]]
The request object. A request to list import jobs.
parent
str
Required. Parent value for ListImportJobsRequest . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.services.migration_center.pagers.ListImportJobsAsyncPager
A response for listing import jobs. Iterating over this object will yield results and resolve additional pages automatically.
list_locations
list_locations (
request : typing . Optional [
typing . Union [ google . cloud . location . locations_pb2 . ListLocationsRequest , dict ]
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
) - > google . cloud . location . locations_pb2 . ListLocationsResponse
Lists information about the supported locations for this service.
Parameters
Name
Description
request
.location_pb2.ListLocationsRequest
The request object. Request message for ListLocations method.
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
.location_pb2.ListLocationsResponse
Response message for ListLocations method.
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
list_preference_sets
list_preference_sets (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . ListPreferenceSetsRequest ,
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
google . cloud . migrationcenter_v1 . services . migration_center . pagers . ListPreferenceSetsAsyncPager
)
Lists all the preference sets in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_list_preference_sets():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . ListPreferenceSetsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_preference_sets (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.ListPreferenceSetsRequest , dict]]
The request object. Request for listing preference sets.
parent
str
Required. Parent value for ListPreferenceSetsRequest . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.services.migration_center.pagers.ListPreferenceSetsAsyncPager
Response message for listing preference sets. Iterating over this object will yield results and resolve additional pages automatically.
list_report_configs
list_report_configs (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . ListReportConfigsRequest ,
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
google . cloud . migrationcenter_v1 . services . migration_center . pagers . ListReportConfigsAsyncPager
)
Lists ReportConfigs in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_list_report_configs():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . ListReportConfigsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_report_configs (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.ListReportConfigsRequest , dict]]
The request object. A request to get a list of ReportConfig resources.
parent
str
Required. Parent value for ListReportConfigsRequest . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportConfigsAsyncPager
Response message for listing report configs. Iterating over this object will yield results and resolve additional pages automatically.
list_reports
list_reports (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . ListReportsRequest ,
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
google . cloud . migrationcenter_v1 . services . migration_center . pagers . ListReportsAsyncPager
)
Lists Reports in a given ReportConfig.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_list_reports():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . ListReportsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_reports (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.ListReportsRequest , dict]]
The request object. A request for a list of Reports.
parent
str
Required. Parent value for ListReportsRequest . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.services.migration_center.pagers.ListReportsAsyncPager
Response message for listing Reports. Iterating over this object will yield results and resolve additional pages automatically.
list_sources
list_sources (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . ListSourcesRequest ,
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
google . cloud . migrationcenter_v1 . services . migration_center . pagers . ListSourcesAsyncPager
)
Lists all the sources in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_list_sources():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . ListSourcesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_sources (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.ListSourcesRequest , dict]]
The request object. A request for a list of sources.
parent
str
Required. Parent value for ListSourcesRequest . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.services.migration_center.pagers.ListSourcesAsyncPager
Response message for listing sources. Iterating over this object will yield results and resolve additional pages automatically.
parse_asset_path
parse_asset_path ( path : str ) - > typing . Dict [ str , str ]
Parses a asset path into its component segments.
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
parse_error_frame_path
parse_error_frame_path ( path : str ) - > typing . Dict [ str , str ]
Parses a error_frame path into its component segments.
parse_group_path
parse_group_path ( path : str ) - > typing . Dict [ str , str ]
Parses a group path into its component segments.
parse_import_data_file_path
parse_import_data_file_path ( path : str ) - > typing . Dict [ str , str ]
Parses a import_data_file path into its component segments.
parse_import_job_path
parse_import_job_path ( path : str ) - > typing . Dict [ str , str ]
Parses a import_job path into its component segments.
parse_preference_set_path
parse_preference_set_path ( path : str ) - > typing . Dict [ str , str ]
Parses a preference_set path into its component segments.
parse_report_config_path
parse_report_config_path ( path : str ) - > typing . Dict [ str , str ]
Parses a report_config path into its component segments.
parse_report_path
parse_report_path ( path : str ) - > typing . Dict [ str , str ]
Parses a report path into its component segments.
parse_settings_path
parse_settings_path ( path : str ) - > typing . Dict [ str , str ]
Parses a settings path into its component segments.
parse_source_path
parse_source_path ( path : str ) - > typing . Dict [ str , str ]
Parses a source path into its component segments.
preference_set_path
preference_set_path ( project : str , location : str , preference_set : str ) - > str
Returns a fully-qualified preference_set string.
remove_assets_from_group
remove_assets_from_group (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . RemoveAssetsFromGroupRequest ,
dict ,
]
] = None ,
* ,
group : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Removes assets from a group.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_remove_assets_from_group():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
assets = migrationcenter_v1 . AssetList ()
assets.asset_ids = ['asset_ids_value1', 'asset_ids_value2']
request = migrationcenter_v1 . RemoveAssetsFromGroupRequest (
group="group_value",
assets=assets,
)
# Make the request
operation = client. remove_assets_from_group (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.RemoveAssetsFromGroupRequest , dict]]
The request object. A request to remove assets from a group.
group
str
Required. Group reference. This corresponds to the group field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Group A resource that represents an asset group. The purpose of an asset group is to bundle a set of assets that have something in common, while allowing users to add annotations to the group. An asset can belong to multiple groups.
report_asset_frames
report_asset_frames (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . ReportAssetFramesRequest ,
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
) - > google . cloud . migrationcenter_v1 . types . migrationcenter . ReportAssetFramesResponse
Reports a set of frames.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_report_asset_frames():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . ReportAssetFramesRequest (
parent="parent_value",
source="source_value",
)
# Make the request
response = await client. report_asset_frames (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.ReportAssetFramesRequest , dict]]
The request object. A request to report a set of asset frames.
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
google.cloud.migrationcenter_v1.types.ReportAssetFramesResponse
A response to a call to ReportAssetFrame.
report_config_path
report_config_path ( project : str , location : str , report_config : str ) - > str
Returns a fully-qualified report_config string.
report_path
report_path ( project : str , location : str , report_config : str , report : str ) - > str
Returns a fully-qualified report string.
run_import_job
run_import_job (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . RunImportJobRequest ,
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
Runs an import job.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_run_import_job():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . RunImportJobRequest (
name="name_value",
)
# Make the request
operation = client. run_import_job (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.RunImportJobRequest , dict]]
The request object. A request to run an import job.
name
str
Required. The name of the import job to run. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
settings_path
settings_path ( project : str , location : str ) - > str
Returns a fully-qualified settings string.
source_path
source_path ( project : str , location : str , source : str ) - > str
Returns a fully-qualified source string.
update_asset
update_asset (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . UpdateAssetRequest ,
dict ,
]
] = None ,
* ,
asset : typing . Optional [
google . cloud . migrationcenter_v1 . types . migrationcenter . Asset
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
) - > google . cloud . migrationcenter_v1 . types . migrationcenter . Asset
Updates the parameters of an asset.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_update_asset():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . UpdateAssetRequest (
)
# Make the request
response = await client. update_asset (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.UpdateAssetRequest , dict]]
The request object. A request to update an asset.
asset
Asset
Required. The resource being updated. This corresponds to the asset field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the Asset resource by the update. The values specified in the update_mask field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.migrationcenter_v1.types.Asset
An asset represents a resource in your environment. Asset types include virtual machines and databases.
update_group
update_group (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . UpdateGroupRequest ,
dict ,
]
] = None ,
* ,
group : typing . Optional [
google . cloud . migrationcenter_v1 . types . migrationcenter . Group
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
Updates the parameters of a group.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_update_group():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . UpdateGroupRequest (
)
# Make the request
operation = client. update_group (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.UpdateGroupRequest , dict]]
The request object. A request to update a group.
group
Group
Required. The group resource being updated. This corresponds to the group field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the Group resource by the update. The values specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Group A resource that represents an asset group. The purpose of an asset group is to bundle a set of assets that have something in common, while allowing users to add annotations to the group. An asset can belong to multiple groups.
update_import_job
update_import_job (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . UpdateImportJobRequest ,
dict ,
]
] = None ,
* ,
import_job : typing . Optional [
google . cloud . migrationcenter_v1 . types . migrationcenter . ImportJob
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
Updates an import job.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_update_import_job():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
import_job = migrationcenter_v1 . ImportJob ()
import_job.asset_source = "asset_source_value"
request = migrationcenter_v1 . UpdateImportJobRequest (
import_job=import_job,
)
# Make the request
operation = client. update_import_job (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.UpdateImportJobRequest , dict]]
The request object. A request to update an import job.
import_job
ImportJob
Required. The resource being updated This corresponds to the import_job field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the Asset resource by the update. The values specified in the update_mask field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be ImportJob A resource that represents the background job that imports asset frames.
update_preference_set
update_preference_set (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . UpdatePreferenceSetRequest ,
dict ,
]
] = None ,
* ,
preference_set : typing . Optional [
google . cloud . migrationcenter_v1 . types . migrationcenter . PreferenceSet
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
Updates the parameters of a preference set.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_update_preference_set():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . UpdatePreferenceSetRequest (
)
# Make the request
operation = client. update_preference_set (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.UpdatePreferenceSetRequest , dict]]
The request object. A request to update a preference set.
preference_set
PreferenceSet
Required. The preference set resource being updated. This corresponds to the preference_set field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the PreferenceSet resource by the update. The values specified in the update_mask field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be PreferenceSet The preferences that apply to all assets in a given context.
update_settings
update_settings (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . UpdateSettingsRequest ,
dict ,
]
] = None ,
* ,
settings : typing . Optional [
google . cloud . migrationcenter_v1 . types . migrationcenter . Settings
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
Updates the regional-level project settings.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_update_settings():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . UpdateSettingsRequest (
)
# Make the request
operation = client. update_settings (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.UpdateSettingsRequest , dict]]
The request object. A request to update the settings.
settings
Settings
Required. The project settings resource being updated. This corresponds to the settings field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the Settings resource by the update. The values specified in the update_mask field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Settings Describes the Migration Center settings related to the project.
update_source
update_source (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . UpdateSourceRequest ,
dict ,
]
] = None ,
* ,
source : typing . Optional [
google . cloud . migrationcenter_v1 . types . migrationcenter . Source
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
Updates the parameters of a source.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_update_source():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . UpdateSourceRequest (
)
# Make the request
operation = client. update_source (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.UpdateSourceRequest , dict]]
The request object. A request to update a source.
source
Source
Required. The resource being updated This corresponds to the source field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the Source resource by the update. The values specified in the update_mask field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Source Source represents an object from which asset information is streamed to Migration Center.
validate_import_job
validate_import_job (
request : typing . Optional [
typing . Union [
google . cloud . migrationcenter_v1 . types . migrationcenter . ValidateImportJobRequest ,
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
Validates an import job.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import migrationcenter_v1
async def sample_validate_import_job():
# Create a client
client = migrationcenter_v1 . MigrationCenterAsyncClient ()
# Initialize request argument(s)
request = migrationcenter_v1 . ValidateImportJobRequest (
name="name_value",
)
# Make the request
operation = client. validate_import_job (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.migrationcenter_v1.types.ValidateImportJobRequest , dict]]
The request object. A request to validate an import job.
name
str
Required. The name of the import job to validate. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
