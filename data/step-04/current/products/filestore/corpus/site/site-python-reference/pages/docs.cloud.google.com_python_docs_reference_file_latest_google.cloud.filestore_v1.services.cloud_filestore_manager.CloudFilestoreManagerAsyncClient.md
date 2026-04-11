---
title: "Class CloudFilestoreManagerAsyncClient (1.16.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/file/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager.CloudFilestoreManagerAsyncClient
  title: "Class CloudFilestoreManagerAsyncClient (1.16.0) \_|\_ Python client libraries\
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
Class CloudFilestoreManagerAsyncClient (1.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.16.0 (latest)
1.15.0
1.14.0
1.13.2
1.12.0
1.11.0
1.10.1
1.9.5
1.8.0
1.7.0
1.6.2
1.5.1
1.4.1
1.3.0
1.2.3
1.1.3
1.0.0
0.2.3
0.1.0
CloudFilestoreManagerAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . filestore_v1 . services . cloud_filestore_manager . transports . base . CloudFilestoreManagerTransport ,
typing . Callable [
[ ... ],
google . cloud . filestore_v1 . services . cloud_filestore_manager . transports . base . CloudFilestoreManagerTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Configures and manages Filestore resources.
Filestore Manager v1.
The file.googleapis.com service implements the Filestore API and
defines the following resource model for managing instances:
The service works with a collection of cloud projects, named:
/projects/*
Each project has a collection of available locations, named:
/locations/*
Each location has a collection of instances and backups, named:
/instances/* and /backups/* respectively.
As such, Filestore instances are resources of the form:
/projects/{project_number}/locations/{location_id}/instances/{instance_id}
and backups are resources of the form:
/projects/{project_number}/locations/{location_id}/backup/{backup_id}
Note that location_id must be a Google Cloud zone for instances,
but a Google Cloud region for backups; for example:
projects/12345/locations/us-central1-c/instances/my-filestore
projects/12345/locations/us-central1/backups/my-backup
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
CloudFilestoreManagerTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
CloudFilestoreManagerAsyncClient
CloudFilestoreManagerAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . filestore_v1 . services . cloud_filestore_manager . transports . base . CloudFilestoreManagerTransport ,
typing . Callable [
[ ... ],
google . cloud . filestore_v1 . services . cloud_filestore_manager . transports . base . CloudFilestoreManagerTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the cloud filestore manager async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,CloudFilestoreManagerTransport,Callable[..., CloudFilestoreManagerTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the CloudFilestoreManagerTransport constructor. If set to None, a transport is chosen automatically.
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
backup_path
backup_path ( project : str , location : str , backup : str ) - > str
Returns a fully-qualified backup string.
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
create_backup
create_backup (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . CreateBackupRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
backup : typing . Optional [
google . cloud . filestore_v1 . types . cloud_filestore_service . Backup
] = None ,
backup_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a backup.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_create_backup():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . CreateBackupRequest (
parent="parent_value",
backup_id="backup_id_value",
)
# Make the request
operation = client. create_backup (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.CreateBackupRequest , dict]]
The request object. CreateBackupRequest creates a backup.
parent
str
Required. The backup's project and location, in the format projects/{project_number}/locations/{location} . In Filestore, backup locations map to Google Cloud regions, for example us-west1 . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
backup
Backup
Required. A [backup resource][google.cloud.filestore.v1.Backup] This corresponds to the backup field on the request instance; if request is provided, this should not be set.
backup_id
str
Required. The ID to use for the backup. The ID must be unique within the specified project and location. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. Values that do not match this pattern will trigger an INVALID_ARGUMENT error. This corresponds to the backup_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Backup A Filestore backup.
create_instance
create_instance (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . CreateInstanceRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
instance : typing . Optional [
google . cloud . filestore_v1 . types . cloud_filestore_service . Instance
] = None ,
instance_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates an instance.
When creating from a backup, the capacity of the new
instance needs to be equal to or larger than the
capacity of the backup (and also equal to or larger than
the minimum capacity of the tier).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_create_instance():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . CreateInstanceRequest (
parent="parent_value",
instance_id="instance_id_value",
)
# Make the request
operation = client. create_instance (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.CreateInstanceRequest , dict]]
The request object. CreateInstanceRequest creates an instance.
parent
str
Required. The instance's project and location, in the format projects/{project_id}/locations/{location} . In Filestore, locations map to Google Cloud zones, for example us-west1-b . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
instance
Instance
Required. An [instance resource][google.cloud.filestore.v1.Instance] This corresponds to the instance field on the request instance; if request is provided, this should not be set.
instance_id
str
Required. The name of the instance to create. The name must be unique for the specified project and location. This corresponds to the instance_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Instance A Filestore instance.
create_snapshot
create_snapshot (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . CreateSnapshotRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
snapshot : typing . Optional [
google . cloud . filestore_v1 . types . cloud_filestore_service . Snapshot
] = None ,
snapshot_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a snapshot.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_create_snapshot():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . CreateSnapshotRequest (
parent="parent_value",
snapshot_id="snapshot_id_value",
)
# Make the request
operation = client. create_snapshot (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.CreateSnapshotRequest , dict]]
The request object. CreateSnapshotRequest creates a snapshot.
parent
str
Required. The Filestore Instance to create the snapshots of, in the format projects/{project_id}/locations/{location}/instances/{instance_id} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
snapshot
Snapshot
Required. A snapshot resource. This corresponds to the snapshot field on the request instance; if request is provided, this should not be set.
snapshot_id
str
Required. The ID to use for the snapshot. The ID must be unique within the specified instance. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. This corresponds to the snapshot_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Snapshot A Filestore snapshot.
delete_backup
delete_backup (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . DeleteBackupRequest ,
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
Deletes a backup.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_delete_backup():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . DeleteBackupRequest (
name="name_value",
)
# Make the request
operation = client. delete_backup (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.DeleteBackupRequest , dict]]
The request object. DeleteBackupRequest deletes a backup.
name
str
Required. The backup resource name, in the format projects/{project_number}/locations/{location}/backups/{backup_id} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_instance
delete_instance (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . DeleteInstanceRequest ,
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
Deletes an instance.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_delete_instance():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . DeleteInstanceRequest (
name="name_value",
)
# Make the request
operation = client. delete_instance (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.DeleteInstanceRequest , dict]]
The request object. DeleteInstanceRequest deletes an instance.
name
str
Required. The instance resource name, in the format projects/{project_id}/locations/{location}/instances/{instance_id} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_snapshot
delete_snapshot (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . DeleteSnapshotRequest ,
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
Deletes a snapshot.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_delete_snapshot():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . DeleteSnapshotRequest (
name="name_value",
)
# Make the request
operation = client. delete_snapshot (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.DeleteSnapshotRequest , dict]]
The request object. DeleteSnapshotRequest deletes a snapshot.
name
str
Required. The snapshot resource name, in the format projects/{project_id}/locations/{location}/instances/{instance_id}/snapshots/{snapshot_id} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
CloudFilestoreManagerAsyncClient
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
CloudFilestoreManagerAsyncClient
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
CloudFilestoreManagerAsyncClient
The constructed client.
get_backup
get_backup (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . GetBackupRequest ,
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
) - > google . cloud . filestore_v1 . types . cloud_filestore_service . Backup
Gets the details of a specific backup.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_get_backup():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . GetBackupRequest (
name="name_value",
)
# Make the request
response = await client. get_backup (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.GetBackupRequest , dict]]
The request object. GetBackupRequest gets the state of a backup.
name
str
Required. The backup resource name, in the format projects/{project_number}/locations/{location}/backups/{backup_id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.filestore_v1.types.Backup
A Filestore backup.
get_instance
get_instance (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . GetInstanceRequest ,
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
) - > google . cloud . filestore_v1 . types . cloud_filestore_service . Instance
Gets the details of a specific instance.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_get_instance():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . GetInstanceRequest (
name="name_value",
)
# Make the request
response = await client. get_instance (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.GetInstanceRequest , dict]]
The request object. GetInstanceRequest gets the state of an instance.
name
str
Required. The instance resource name, in the format projects/{project_id}/locations/{location}/instances/{instance_id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.filestore_v1.types.Instance
A Filestore instance.
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
get_snapshot
get_snapshot (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . GetSnapshotRequest ,
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
) - > google . cloud . filestore_v1 . types . cloud_filestore_service . Snapshot
Gets the details of a specific snapshot.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_get_snapshot():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . GetSnapshotRequest (
name="name_value",
)
# Make the request
response = await client. get_snapshot (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.GetSnapshotRequest , dict]]
The request object. GetSnapshotRequest gets the state of a snapshot.
name
str
Required. The snapshot resource name, in the format projects/{project_id}/locations/{location}/instances/{instance_id}/snapshots/{snapshot_id} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.filestore_v1.types.Snapshot
A Filestore snapshot.
get_transport_class
get_transport_class (
label : typing . Optional [ str ] = None ,
) - > typing . Type [
google . cloud . filestore_v1 . services . cloud_filestore_manager . transports . base . CloudFilestoreManagerTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
instance_path
instance_path ( project : str , location : str , instance : str ) - > str
Returns a fully-qualified instance string.
list_backups
list_backups (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . ListBackupsRequest ,
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
google . cloud . filestore_v1 . services . cloud_filestore_manager . pagers . ListBackupsAsyncPager
)
Lists all backups in a project for either a specified
location or for all locations.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_list_backups():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . ListBackupsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_backups (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.ListBackupsRequest , dict]]
The request object. ListBackupsRequest lists backups.
parent
str
Required. The project and location for which to retrieve backup information, in the format projects/{project_number}/locations/{location} . In Filestore, backup locations map to Google Cloud regions, for example us-west1 . To retrieve backup information for all locations, use "-" for the {location} value. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.filestore_v1.services.cloud_filestore_manager.pagers.ListBackupsAsyncPager
ListBackupsResponse is the result of ListBackupsRequest. Iterating over this object will yield results and resolve additional pages automatically.
list_instances
list_instances (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . ListInstancesRequest ,
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
google . cloud . filestore_v1 . services . cloud_filestore_manager . pagers . ListInstancesAsyncPager
)
Lists all instances in a project for either a
specified location or for all locations.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_list_instances():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . ListInstancesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_instances (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.ListInstancesRequest , dict]]
The request object. ListInstancesRequest lists instances.
parent
str
Required. The project and location for which to retrieve instance information, in the format projects/{project_id}/locations/{location} . In Cloud Filestore, locations map to Google Cloud zones, for example us-west1-b . To retrieve instance information for all locations, use "-" for the {location} value. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.filestore_v1.services.cloud_filestore_manager.pagers.ListInstancesAsyncPager
ListInstancesResponse is the result of ListInstancesRequest. Iterating over this object will yield results and resolve additional pages automatically.
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
list_snapshots
list_snapshots (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . ListSnapshotsRequest ,
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
google . cloud . filestore_v1 . services . cloud_filestore_manager . pagers . ListSnapshotsAsyncPager
)
Lists all snapshots in a project for either a
specified location or for all locations.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_list_snapshots():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . ListSnapshotsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_snapshots (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.ListSnapshotsRequest , dict]]
The request object. ListSnapshotsRequest lists snapshots.
parent
str
Required. The instance for which to retrieve snapshot information, in the format projects/{project_id}/locations/{location}/instances/{instance_id} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.filestore_v1.services.cloud_filestore_manager.pagers.ListSnapshotsAsyncPager
ListSnapshotsResponse is the result of ListSnapshotsRequest. Iterating over this object will yield results and resolve additional pages automatically.
parse_backup_path
parse_backup_path ( path : str ) - > typing . Dict [ str , str ]
Parses a backup path into its component segments.
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
parse_instance_path
parse_instance_path ( path : str ) - > typing . Dict [ str , str ]
Parses a instance path into its component segments.
parse_snapshot_path
parse_snapshot_path ( path : str ) - > typing . Dict [ str , str ]
Parses a snapshot path into its component segments.
promote_replica
promote_replica (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . PromoteReplicaRequest ,
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
Promote the standby instance (replica).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_promote_replica():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . PromoteReplicaRequest (
name="name_value",
)
# Make the request
operation = client. promote_replica (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.PromoteReplicaRequest , dict]]
The request object. PromoteReplicaRequest promotes a Filestore standby instance (replica).
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
An object representing a long-running operation. The result type for the operation will be Instance A Filestore instance.
restore_instance
restore_instance (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . RestoreInstanceRequest ,
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
Restores an existing instance's file share from a
backup.
The capacity of the instance needs to be equal to or
larger than the capacity of the backup (and also equal
to or larger than the minimum capacity of the tier).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_restore_instance():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . RestoreInstanceRequest (
source_backup="source_backup_value",
name="name_value",
file_share="file_share_value",
)
# Make the request
operation = client. restore_instance (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.RestoreInstanceRequest , dict]]
The request object. RestoreInstanceRequest restores an existing instance's file share from a backup.
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
An object representing a long-running operation. The result type for the operation will be Instance A Filestore instance.
revert_instance
revert_instance (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . RevertInstanceRequest ,
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
Revert an existing instance's file system to a
specified snapshot.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_revert_instance():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . RevertInstanceRequest (
name="name_value",
target_snapshot_id="target_snapshot_id_value",
)
# Make the request
operation = client. revert_instance (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.RevertInstanceRequest , dict]]
The request object. RevertInstanceRequest reverts the given instance's file share to the specified snapshot.
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
An object representing a long-running operation. The result type for the operation will be Instance A Filestore instance.
snapshot_path
snapshot_path ( project : str , location : str , instance : str , snapshot : str ) - > str
Returns a fully-qualified snapshot string.
update_backup
update_backup (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . UpdateBackupRequest ,
dict ,
]
] = None ,
* ,
backup : typing . Optional [
google . cloud . filestore_v1 . types . cloud_filestore_service . Backup
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
Updates the settings of a specific backup.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_update_backup():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . UpdateBackupRequest (
)
# Make the request
operation = client. update_backup (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.UpdateBackupRequest , dict]]
The request object. UpdateBackupRequest updates description and/or labels for a backup.
backup
Backup
Required. A [backup resource][google.cloud.filestore.v1.Backup] This corresponds to the backup field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Mask of fields to update. At least one path must be supplied in this field. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Backup A Filestore backup.
update_instance
update_instance (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . UpdateInstanceRequest ,
dict ,
]
] = None ,
* ,
instance : typing . Optional [
google . cloud . filestore_v1 . types . cloud_filestore_service . Instance
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
Updates the settings of a specific instance.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_update_instance():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . UpdateInstanceRequest (
)
# Make the request
operation = client. update_instance (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.UpdateInstanceRequest , dict]]
The request object. UpdateInstanceRequest updates the settings of an instance.
instance
Instance
Only fields specified in update_mask are updated. This corresponds to the instance field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields: - "description" - "file_shares" - "labels" - "performance_config" - "deletion_protection_enabled" - "deletion_protection_reason" This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Instance A Filestore instance.
update_snapshot
update_snapshot (
request : typing . Optional [
typing . Union [
google . cloud . filestore_v1 . types . cloud_filestore_service . UpdateSnapshotRequest ,
dict ,
]
] = None ,
* ,
snapshot : typing . Optional [
google . cloud . filestore_v1 . types . cloud_filestore_service . Snapshot
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
Updates the settings of a specific snapshot.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import filestore_v1
async def sample_update_snapshot():
# Create a client
client = filestore_v1 . CloudFilestoreManagerAsyncClient ()
# Initialize request argument(s)
request = filestore_v1 . UpdateSnapshotRequest (
)
# Make the request
operation = client. update_snapshot (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.filestore_v1.types.UpdateSnapshotRequest , dict]]
The request object. UpdateSnapshotRequest updates description and/or labels for a snapshot.
snapshot
Snapshot
Required. A snapshot resource. This corresponds to the snapshot field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Mask of fields to update. At least one path must be supplied in this field. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Snapshot A Filestore snapshot.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
