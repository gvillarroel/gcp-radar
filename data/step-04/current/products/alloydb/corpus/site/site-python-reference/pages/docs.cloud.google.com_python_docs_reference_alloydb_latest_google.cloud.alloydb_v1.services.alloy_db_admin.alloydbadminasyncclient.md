---
title: "Class AlloyDBAdminAsyncClient (0.7.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/alloydb/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.AlloyDBAdminAsyncClient
  title: "Class AlloyDBAdminAsyncClient (0.7.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class AlloyDBAdminAsyncClient (0.7.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
0.7.0 (latest)
0.6.0
0.5.0
0.4.9
0.3.16
0.2.1
0.1.1
AlloyDBAdminAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . alloydb_v1 . services . alloy_db_admin . transports . base . AlloyDBAdminTransport ,
typing . Callable [
[ ... ],
google . cloud . alloydb_v1 . services . alloy_db_admin . transports . base . AlloyDBAdminTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Service describing handlers for resources
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
AlloyDBAdminTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
AlloyDBAdminAsyncClient
AlloyDBAdminAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . alloydb_v1 . services . alloy_db_admin . transports . base . AlloyDBAdminTransport ,
typing . Callable [
[ ... ],
google . cloud . alloydb_v1 . services . alloy_db_admin . transports . base . AlloyDBAdminTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the alloy db admin async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,AlloyDBAdminTransport,Callable[..., AlloyDBAdminTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the AlloyDBAdminTransport constructor. If set to None, a transport is chosen automatically.
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
batch_create_instances
batch_create_instances (
request : typing . Optional [
typing . Union [
google . cloud . alloydb_v1 . types . service . BatchCreateInstancesRequest , dict
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
Creates new instances under the given project,
location and cluster. There can be only one primary
instance in a cluster. If the primary instance exists in
the cluster as well as this request, then API will throw
an error.
The primary instance should exist before any read pool
instance is created. If the primary instance is a part
of the request payload, then the API will take care of
creating instances in the correct order. This method is
here to support Google-internal use cases, and is not
meant for external customers to consume. Please do not
start relying on it; its behavior is subject to change
without notice.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_batch_create_instances():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
requests = alloydb_v1 . CreateInstanceRequests ()
requests.create_instance_requests.parent = "parent_value"
requests.create_instance_requests.instance_id = "instance_id_value"
requests.create_instance_requests.instance.instance_type = "SECONDARY"
request = alloydb_v1 . BatchCreateInstancesRequest (
parent="parent_value",
requests=requests,
)
# Make the request
operation = client. batch_create_instances (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.BatchCreateInstancesRequest , dict]]
The request object. Message for creating a batch of instances under the specified cluster.
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
An object representing a long-running operation. The result type for the operation will be BatchCreateInstancesResponse Message for creating batches of instances in a cluster.
cancel_operation
cancel_operation (
request : typing . Optional [
google . longrunning . operations_pb2 . CancelOperationRequest
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
cluster_path
cluster_path ( project : str , location : str , cluster : str ) - > str
Returns a fully-qualified cluster string.
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
connection_info_path
connection_info_path (
project : str , location : str , cluster : str , instance : str
) - > str
Returns a fully-qualified connection_info string.
create_backup
create_backup (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . CreateBackupRequest , dict ]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
backup : typing . Optional [ google . cloud . alloydb_v1 . types . resources . Backup ] = None ,
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
Creates a new Backup in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_create_backup():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
backup = alloydb_v1 . Backup ()
backup.cluster_name = "cluster_name_value"
request = alloydb_v1 . CreateBackupRequest (
parent="parent_value",
backup_id="backup_id_value",
backup=backup,
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
Optional[Union[ google.cloud.alloydb_v1.types.CreateBackupRequest , dict]]
The request object. Message for creating a Backup
parent
str
Required. Value for parent. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
backup
Backup
Required. The resource being created This corresponds to the backup field on the request instance; if request is provided, this should not be set.
backup_id
str
Required. ID of the requesting object. This corresponds to the backup_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Backup Message describing Backup object
create_cluster
create_cluster (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . CreateClusterRequest , dict ]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
cluster : typing . Optional [ google . cloud . alloydb_v1 . types . resources . Cluster ] = None ,
cluster_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new Cluster in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_create_cluster():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
cluster = alloydb_v1 . Cluster ()
cluster.backup_source.backup_name = "backup_name_value"
cluster.network = "network_value"
request = alloydb_v1 . CreateClusterRequest (
parent="parent_value",
cluster_id="cluster_id_value",
cluster=cluster,
)
# Make the request
operation = client. create_cluster (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.CreateClusterRequest , dict]]
The request object. Message for creating a Cluster
parent
str
Required. The location of the new cluster. For the required format, see the comment on the Cluster.name field. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
cluster
Cluster
Required. The resource being created This corresponds to the cluster field on the request instance; if request is provided, this should not be set.
cluster_id
str
Required. ID of the requesting object. This corresponds to the cluster_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Cluster A cluster is a collection of regional AlloyDB resources. It can include a primary instance and one or more read pool instances. All cluster resources share a storage layer, which scales as needed.
create_instance
create_instance (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . CreateInstanceRequest , dict ]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
instance : typing . Optional [ google . cloud . alloydb_v1 . types . resources . Instance ] = None ,
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
Creates a new Instance in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_create_instance():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
instance = alloydb_v1 . Instance ()
instance.instance_type = "SECONDARY"
request = alloydb_v1 . CreateInstanceRequest (
parent="parent_value",
instance_id="instance_id_value",
instance=instance,
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
Optional[Union[ google.cloud.alloydb_v1.types.CreateInstanceRequest , dict]]
The request object. Message for creating a Instance
parent
str
Required. The name of the parent resource. For the required format, see the comment on the Instance.name field. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
instance
Instance
Required. The resource being created This corresponds to the instance field on the request instance; if request is provided, this should not be set.
instance_id
str
Required. ID of the requesting object. This corresponds to the instance_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Instance An Instance is a computing unit that an end customer can connect to. It's the main unit of computing resources in AlloyDB.
create_secondary_cluster
create_secondary_cluster (
request : typing . Optional [
typing . Union [
google . cloud . alloydb_v1 . types . service . CreateSecondaryClusterRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
cluster : typing . Optional [ google . cloud . alloydb_v1 . types . resources . Cluster ] = None ,
cluster_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a cluster of type SECONDARY in the given
location using the primary cluster as the source.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_create_secondary_cluster():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
cluster = alloydb_v1 . Cluster ()
cluster.backup_source.backup_name = "backup_name_value"
cluster.network = "network_value"
request = alloydb_v1 . CreateSecondaryClusterRequest (
parent="parent_value",
cluster_id="cluster_id_value",
cluster=cluster,
)
# Make the request
operation = client. create_secondary_cluster (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.CreateSecondaryClusterRequest , dict]]
The request object.
parent
str
Required. The location of the new cluster. For the required format, see the comment on the Cluster.name field. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
cluster
Cluster
Required. Configuration of the requesting object (the secondary cluster). This corresponds to the cluster field on the request instance; if request is provided, this should not be set.
cluster_id
str
Required. ID of the requesting object (the secondary cluster). This corresponds to the cluster_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Cluster A cluster is a collection of regional AlloyDB resources. It can include a primary instance and one or more read pool instances. All cluster resources share a storage layer, which scales as needed.
create_secondary_instance
create_secondary_instance (
request : typing . Optional [
typing . Union [
google . cloud . alloydb_v1 . types . service . CreateSecondaryInstanceRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
instance : typing . Optional [ google . cloud . alloydb_v1 . types . resources . Instance ] = None ,
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
Creates a new SECONDARY Instance in a given project
and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_create_secondary_instance():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
instance = alloydb_v1 . Instance ()
instance.instance_type = "SECONDARY"
request = alloydb_v1 . CreateSecondaryInstanceRequest (
parent="parent_value",
instance_id="instance_id_value",
instance=instance,
)
# Make the request
operation = client. create_secondary_instance (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.CreateSecondaryInstanceRequest , dict]]
The request object. Message for creating a Secondary Instance
parent
str
Required. The name of the parent resource. For the required format, see the comment on the Instance.name field. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
instance
Instance
Required. The resource being created This corresponds to the instance field on the request instance; if request is provided, this should not be set.
instance_id
str
Required. ID of the requesting object. This corresponds to the instance_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Instance An Instance is a computing unit that an end customer can connect to. It's the main unit of computing resources in AlloyDB.
create_user
create_user (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . CreateUserRequest , dict ]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
user : typing . Optional [ google . cloud . alloydb_v1 . types . resources . User ] = None ,
user_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . alloydb_v1 . types . resources . User
Creates a new User in a given project, location, and
cluster.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_create_user():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . CreateUserRequest (
parent="parent_value",
user_id="user_id_value",
)
# Make the request
response = await client. create_user (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.CreateUserRequest , dict]]
The request object. Message for creating a User
parent
str
Required. Value for parent. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
user
User
Required. The resource being created This corresponds to the user field on the request instance; if request is provided, this should not be set.
user_id
str
Required. ID of the requesting object. This corresponds to the user_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.alloydb_v1.types.User
Message describing User object.
crypto_key_path
crypto_key_path ( project : str , location : str , key_ring : str , crypto_key : str ) - > str
Returns a fully-qualified crypto_key string.
crypto_key_version_path
crypto_key_version_path (
project : str , location : str , key_ring : str , crypto_key : str , crypto_key_version : str
) - > str
Returns a fully-qualified crypto_key_version string.
database_path
database_path ( project : str , location : str , cluster : str , database : str ) - > str
Returns a fully-qualified database string.
delete_backup
delete_backup (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . DeleteBackupRequest , dict ]
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
Deletes a single Backup.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_delete_backup():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . DeleteBackupRequest (
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
Optional[Union[ google.cloud.alloydb_v1.types.DeleteBackupRequest , dict]]
The request object. Message for deleting a Backup
name
str
Required. Name of the resource. For the required format, see the comment on the Backup.name field. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_cluster
delete_cluster (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . DeleteClusterRequest , dict ]
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
Deletes a single Cluster.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_delete_cluster():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . DeleteClusterRequest (
name="name_value",
)
# Make the request
operation = client. delete_cluster (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.DeleteClusterRequest , dict]]
The request object. Message for deleting a Cluster
name
str
Required. The name of the resource. For the required format, see the comment on the Cluster.name field. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
typing . Union [ google . cloud . alloydb_v1 . types . service . DeleteInstanceRequest , dict ]
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
Deletes a single Instance.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_delete_instance():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . DeleteInstanceRequest (
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
Optional[Union[ google.cloud.alloydb_v1.types.DeleteInstanceRequest , dict]]
The request object. Message for deleting a Instance
name
str
Required. The name of the resource. For the required format, see the comment on the Instance.name field. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_user
delete_user (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . DeleteUserRequest , dict ]
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
Deletes a single User.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_delete_user():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . DeleteUserRequest (
name="name_value",
)
# Make the request
await client. delete_user (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.DeleteUserRequest , dict]]
The request object. Message for deleting a User
name
str
Required. The name of the resource. For the required format, see the comment on the User.name field. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
execute_sql
execute_sql (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . ExecuteSqlRequest , dict ]
] = None ,
* ,
instance : typing . Optional [ str ] = None ,
database : typing . Optional [ str ] = None ,
user : typing . Optional [ str ] = None ,
sql_statement : typing . Optional [ str ] = None ,
password : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . alloydb_v1 . types . service . ExecuteSqlResponse
Executes a SQL statement in a database inside an
AlloyDB instance.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_execute_sql():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . ExecuteSqlRequest (
password="password_value",
instance="instance_value",
database="database_value",
sql_statement="sql_statement_value",
)
# Make the request
response = await client. execute_sql (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.ExecuteSqlRequest , dict]]
The request object. Request for ExecuteSql rpc.
instance
str
Required. The instance where the SQL will be executed. For the required format, see the comment on the Instance.name field. This corresponds to the instance field on the request instance; if request is provided, this should not be set.
database
str
Required. Name of the database where the query will be executed. Note - Value provided should be the same as expected from SELECT current_database(); and NOT as a resource reference. This corresponds to the database field on the request instance; if request is provided, this should not be set.
user
str
Required. Database user to be used for executing the SQL. Note - Value provided should be the same as expected from SELECT current_user; and NOT as a resource reference. This corresponds to the user field on the request instance; if request is provided, this should not be set.
sql_statement
str
Required. SQL statement to execute on database. Any valid statement is permitted, including DDL, DML, DQL statements. This corresponds to the sql_statement field on the request instance; if request is provided, this should not be set.
password
str
Optional. The database native user’s password. This corresponds to the password field on the request instance; if request is provided, this should not be set.
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
google.cloud.alloydb_v1.types.ExecuteSqlResponse
Execute a SQL statement response.
export_cluster
export_cluster (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . ExportClusterRequest , dict ]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
gcs_destination : typing . Optional [
google . cloud . alloydb_v1 . types . service . GcsDestination
] = None ,
database : typing . Optional [ str ] = None ,
csv_export_options : typing . Optional [
google . cloud . alloydb_v1 . types . service . ExportClusterRequest . CsvExportOptions
] = None ,
sql_export_options : typing . Optional [
google . cloud . alloydb_v1 . types . service . ExportClusterRequest . SqlExportOptions
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
Exports data from the cluster.
Imperative only.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_export_cluster():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
gcs_destination = alloydb_v1 . GcsDestination ()
gcs_destination.uri = "uri_value"
csv_export_options = alloydb_v1 . CsvExportOptions ()
csv_export_options.select_query = "select_query_value"
request = alloydb_v1 . ExportClusterRequest (
gcs_destination=gcs_destination,
csv_export_options=csv_export_options,
name="name_value",
database="database_value",
)
# Make the request
operation = client. export_cluster (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.ExportClusterRequest , dict]]
The request object. Export cluster request.
name
str
Required. The resource name of the cluster. This corresponds to the name field on the request instance; if request is provided, this should not be set.
gcs_destination
GcsDestination
Required. Option to export data to cloud storage. This corresponds to the gcs_destination field on the request instance; if request is provided, this should not be set.
database
str
Required. Name of the database where the export command will be executed. Note - Value provided should be the same as expected from SELECT current_database(); and NOT as a resource reference. This corresponds to the database field on the request instance; if request is provided, this should not be set.
csv_export_options
CsvExportOptions
Options for exporting data in CSV format. Required field to be set for CSV file type. This corresponds to the csv_export_options field on the request instance; if request is provided, this should not be set.
sql_export_options
SqlExportOptions
Options for exporting data in SQL format. Required field to be set for SQL file type. This corresponds to the sql_export_options field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be ExportClusterResponse Response of export cluster rpc.
failover_instance
failover_instance (
request : typing . Optional [
typing . Union [
google . cloud . alloydb_v1 . types . service . FailoverInstanceRequest , dict
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
Forces a Failover for a highly available instance.
Failover promotes the HA standby instance as the new
primary. Imperative only.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_failover_instance():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . FailoverInstanceRequest (
name="name_value",
)
# Make the request
operation = client. failover_instance (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.FailoverInstanceRequest , dict]]
The request object. Message for triggering failover on an Instance
name
str
Required. The name of the resource. For the required format, see the comment on the Instance.name field. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Instance An Instance is a computing unit that an end customer can connect to. It's the main unit of computing resources in AlloyDB.
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
AlloyDBAdminAsyncClient
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
AlloyDBAdminAsyncClient
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
AlloyDBAdminAsyncClient
The constructed client.
generate_client_certificate
generate_client_certificate (
request : typing . Optional [
typing . Union [
google . cloud . alloydb_v1 . types . service . GenerateClientCertificateRequest , dict
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
) - > google . cloud . alloydb_v1 . types . service . GenerateClientCertificateResponse
Generate a client certificate signed by a Cluster CA.
The sole purpose of this endpoint is to support AlloyDB
connectors and the Auth Proxy client. The endpoint's
behavior is subject to change without notice, so do not
rely on its behavior remaining constant. Future changes
will not break AlloyDB connectors or the Auth Proxy
client.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_generate_client_certificate():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . GenerateClientCertificateRequest (
parent="parent_value",
)
# Make the request
response = await client.generate_client_certificate(request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.GenerateClientCertificateRequest , dict]]
The request object. Message for requests to generate a client certificate signed by the Cluster CA.
parent
str
Required. The name of the parent resource. The required format is: - projects/{project}/locations/{location}/clusters/{cluster} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.alloydb_v1.types.GenerateClientCertificateResponse
Message returned by a GenerateClientCertificate operation.
get_backup
get_backup (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . GetBackupRequest , dict ]
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
) - > google . cloud . alloydb_v1 . types . resources . Backup
Gets details of a single Backup.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_get_backup():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . GetBackupRequest (
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
Optional[Union[ google.cloud.alloydb_v1.types.GetBackupRequest , dict]]
The request object. Message for getting a Backup
name
str
Required. Name of the resource This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.alloydb_v1.types.Backup
Message describing Backup object
get_cluster
get_cluster (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . GetClusterRequest , dict ]
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
) - > google . cloud . alloydb_v1 . types . resources . Cluster
Gets details of a single Cluster.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_get_cluster():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . GetClusterRequest (
name="name_value",
)
# Make the request
response = await client. get_cluster (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.GetClusterRequest , dict]]
The request object. Message for getting a Cluster
name
str
Required. The name of the resource. For the required format, see the comment on the Cluster.name field. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.alloydb_v1.types.Cluster
A cluster is a collection of regional AlloyDB resources. It can include a primary instance and one or more read pool instances. All cluster resources share a storage layer, which scales as needed.
get_connection_info
get_connection_info (
request : typing . Optional [
typing . Union [
google . cloud . alloydb_v1 . types . service . GetConnectionInfoRequest , dict
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
) - > google . cloud . alloydb_v1 . types . resources . ConnectionInfo
Get instance metadata used for a connection.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_get_connection_info():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . GetConnectionInfoRequest (
parent="parent_value",
)
# Make the request
response = await client. get_connection_info (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.GetConnectionInfoRequest , dict]]
The request object. Request message for GetConnectionInfo.
parent
str
Required. The name of the parent resource. The required format is: projects/{project}/locations/{location}/clusters/{cluster}/instances/{instance} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.alloydb_v1.types.ConnectionInfo
ConnectionInfo singleton resource. https://google.aip.dev/156
get_instance
get_instance (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . GetInstanceRequest , dict ]
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
) - > google . cloud . alloydb_v1 . types . resources . Instance
Gets details of a single Instance.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_get_instance():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . GetInstanceRequest (
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
Optional[Union[ google.cloud.alloydb_v1.types.GetInstanceRequest , dict]]
The request object. Message for getting a Instance
name
str
Required. The name of the resource. For the required format, see the comment on the Instance.name field. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.alloydb_v1.types.Instance
An Instance is a computing unit that an end customer can connect to. It's the main unit of computing resources in AlloyDB.
get_location
get_location (
request : typing . Optional [
google . cloud . location . locations_pb2 . GetLocationRequest
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
google . cloud . alloydb_v1 . services . alloy_db_admin . transports . base . AlloyDBAdminTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
get_user
get_user (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . GetUserRequest , dict ]
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
) - > google . cloud . alloydb_v1 . types . resources . User
Gets details of a single User.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_get_user():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . GetUserRequest (
name="name_value",
)
# Make the request
response = await client. get_user (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.GetUserRequest , dict]]
The request object. Message for getting a User
name
str
Required. The name of the resource. For the required format, see the comment on the User.name field. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.alloydb_v1.types.User
Message describing User object.
import_cluster
import_cluster (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . ImportClusterRequest , dict ]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
gcs_uri : typing . Optional [ str ] = None ,
database : typing . Optional [ str ] = None ,
user : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Imports data to the cluster.
Imperative only.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_import_cluster():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . ImportClusterRequest (
name="name_value",
gcs_uri="gcs_uri_value",
)
# Make the request
operation = client. import_cluster (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.ImportClusterRequest , dict]]
The request object. Import cluster request.
name
str
Required. The resource name of the cluster. This corresponds to the name field on the request instance; if request is provided, this should not be set.
gcs_uri
str
Required. The path to the file in Google Cloud Storage where the source file for import will be stored. The URI is in the form gs://bucketName/fileName . This corresponds to the gcs_uri field on the request instance; if request is provided, this should not be set.
database
str
Optional. Name of the database to which the import will be done. For import from SQL file, this is required only if the file does not specify a database. Note - Value provided should be the same as expected from SELECT current_database(); and NOT as a resource reference. This corresponds to the database field on the request instance; if request is provided, this should not be set.
user
str
Optional. Database user to be used for importing the data. Note - Value provided should be the same as expected from SELECT current_user; and NOT as a resource reference. This corresponds to the user field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be ImportClusterResponse Response of import rpc.
inject_fault
inject_fault (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . InjectFaultRequest , dict ]
] = None ,
* ,
fault_type : typing . Optional [
google . cloud . alloydb_v1 . types . service . InjectFaultRequest . FaultType
] = None ,
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
Injects fault in an instance.
Imperative only.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_inject_fault():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . InjectFaultRequest (
fault_type="STOP_VM",
name="name_value",
)
# Make the request
operation = client. inject_fault (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.InjectFaultRequest , dict]]
The request object. Message for triggering fault injection on an instance
fault_type
FaultType
Required. The type of fault to be injected in an instance. This corresponds to the fault_type field on the request instance; if request is provided, this should not be set.
name
str
Required. The name of the resource. For the required format, see the comment on the Instance.name field. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Instance An Instance is a computing unit that an end customer can connect to. It's the main unit of computing resources in AlloyDB.
instance_path
instance_path ( project : str , location : str , cluster : str , instance : str ) - > str
Returns a fully-qualified instance string.
list_backups
list_backups (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . ListBackupsRequest , dict ]
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
) - > google . cloud . alloydb_v1 . services . alloy_db_admin . pagers . ListBackupsAsyncPager
Lists Backups in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_list_backups():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . ListBackupsRequest (
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
Optional[Union[ google.cloud.alloydb_v1.types.ListBackupsRequest , dict]]
The request object. Message for requesting list of Backups
parent
str
Required. Parent value for ListBackupsRequest This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListBackupsAsyncPager
Message for response to listing Backups Iterating over this object will yield results and resolve additional pages automatically.
list_clusters
list_clusters (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . ListClustersRequest , dict ]
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
) - > google . cloud . alloydb_v1 . services . alloy_db_admin . pagers . ListClustersAsyncPager
Lists Clusters in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_list_clusters():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . ListClustersRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_clusters (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.ListClustersRequest , dict]]
The request object. Message for requesting list of Clusters
parent
str
Required. The name of the parent resource. For the required format, see the comment on the Cluster.name field. Additionally, you can perform an aggregated list operation by specifying a value with the following format: - projects/{project}/locations/- This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListClustersAsyncPager
Message for response to listing Clusters Iterating over this object will yield results and resolve additional pages automatically.
list_databases
list_databases (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . ListDatabasesRequest , dict ]
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
) - > google . cloud . alloydb_v1 . services . alloy_db_admin . pagers . ListDatabasesAsyncPager
Lists Databases in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_list_databases():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . ListDatabasesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_databases (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.ListDatabasesRequest , dict]]
The request object. Message for ListDatabases request.
parent
str
Required. Parent value for ListDatabasesRequest. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListDatabasesAsyncPager
Message for ListDatabases response. Iterating over this object will yield results and resolve additional pages automatically.
list_instances
list_instances (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . ListInstancesRequest , dict ]
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
) - > google . cloud . alloydb_v1 . services . alloy_db_admin . pagers . ListInstancesAsyncPager
Lists Instances in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_list_instances():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . ListInstancesRequest (
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
Optional[Union[ google.cloud.alloydb_v1.types.ListInstancesRequest , dict]]
The request object. Message for requesting list of Instances
parent
str
Required. The name of the parent resource. For the required format, see the comment on the Instance.name field. Additionally, you can perform an aggregated list operation by specifying a value with one of the following formats: - projects/{project}/locations/-/clusters/- - projects/{project}/locations/{region}/clusters/- This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListInstancesAsyncPager
Message for response to listing Instances Iterating over this object will yield results and resolve additional pages automatically.
list_locations
list_locations (
request : typing . Optional [
google . cloud . location . locations_pb2 . ListLocationsRequest
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
list_supported_database_flags
list_supported_database_flags (
request : typing . Optional [
typing . Union [
google . cloud . alloydb_v1 . types . service . ListSupportedDatabaseFlagsRequest ,
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
google . cloud . alloydb_v1 . services . alloy_db_admin . pagers . ListSupportedDatabaseFlagsAsyncPager
)
Lists SupportedDatabaseFlags for a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_list_supported_database_flags():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . ListSupportedDatabaseFlagsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_supported_database_flags (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.ListSupportedDatabaseFlagsRequest , dict]]
The request object. Message for listing the information about the supported Database flags.
parent
str
Required. The name of the parent resource. The required format is: - projects/{project}/locations/{location} Regardless of the parent specified here, as long it is contains a valid project and location, the service will return a static list of supported flags resources. Note that we do not yet support region-specific flags. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListSupportedDatabaseFlagsAsyncPager
Message for response to listing SupportedDatabaseFlags. Iterating over this object will yield results and resolve additional pages automatically.
list_users
list_users (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . ListUsersRequest , dict ]
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
) - > google . cloud . alloydb_v1 . services . alloy_db_admin . pagers . ListUsersAsyncPager
Lists Users in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_list_users():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . ListUsersRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_users (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.ListUsersRequest , dict]]
The request object. Message for requesting list of Users
parent
str
Required. Parent value for ListUsersRequest This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListUsersAsyncPager
Message for response to listing Users Iterating over this object will yield results and resolve additional pages automatically.
network_path
network_path ( project : str , network : str ) - > str
Returns a fully-qualified network string.
parse_backup_path
parse_backup_path ( path : str ) - > typing . Dict [ str , str ]
Parses a backup path into its component segments.
parse_cluster_path
parse_cluster_path ( path : str ) - > typing . Dict [ str , str ]
Parses a cluster path into its component segments.
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
parse_connection_info_path
parse_connection_info_path ( path : str ) - > typing . Dict [ str , str ]
Parses a connection_info path into its component segments.
parse_crypto_key_path
parse_crypto_key_path ( path : str ) - > typing . Dict [ str , str ]
Parses a crypto_key path into its component segments.
parse_crypto_key_version_path
parse_crypto_key_version_path ( path : str ) - > typing . Dict [ str , str ]
Parses a crypto_key_version path into its component segments.
parse_database_path
parse_database_path ( path : str ) - > typing . Dict [ str , str ]
Parses a database path into its component segments.
parse_instance_path
parse_instance_path ( path : str ) - > typing . Dict [ str , str ]
Parses a instance path into its component segments.
parse_network_path
parse_network_path ( path : str ) - > typing . Dict [ str , str ]
Parses a network path into its component segments.
parse_service_attachment_path
parse_service_attachment_path ( path : str ) - > typing . Dict [ str , str ]
Parses a service_attachment path into its component segments.
parse_supported_database_flag_path
parse_supported_database_flag_path ( path : str ) - > typing . Dict [ str , str ]
Parses a supported_database_flag path into its component segments.
parse_user_path
parse_user_path ( path : str ) - > typing . Dict [ str , str ]
Parses a user path into its component segments.
promote_cluster
promote_cluster (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . PromoteClusterRequest , dict ]
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
Promotes a SECONDARY cluster. This turns down
replication from the PRIMARY cluster and promotes a
secondary cluster into its own standalone cluster.
Imperative only.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_promote_cluster():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . PromoteClusterRequest (
name="name_value",
)
# Make the request
operation = client. promote_cluster (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.PromoteClusterRequest , dict]]
The request object. Message for promoting a Cluster
name
str
Required. The name of the resource. For the required format, see the comment on the Cluster.name field This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Cluster A cluster is a collection of regional AlloyDB resources. It can include a primary instance and one or more read pool instances. All cluster resources share a storage layer, which scales as needed.
restart_instance
restart_instance (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . RestartInstanceRequest , dict ]
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
Restart an Instance in a cluster.
Imperative only.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_restart_instance():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . RestartInstanceRequest (
name="name_value",
)
# Make the request
operation = client. restart_instance (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.RestartInstanceRequest , dict]]
The request object.
name
str
Required. The name of the resource. For the required format, see the comment on the Instance.name field. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Instance An Instance is a computing unit that an end customer can connect to. It's the main unit of computing resources in AlloyDB.
restore_cluster
restore_cluster (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . RestoreClusterRequest , dict ]
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
Creates a new Cluster in a given project and
location, with a volume restored from the provided
source, either a backup ID or a point-in-time and a
source cluster.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_restore_cluster():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
backup_source = alloydb_v1 . BackupSource ()
backup_source.backup_name = "backup_name_value"
cluster = alloydb_v1 . Cluster ()
cluster.backup_source.backup_name = "backup_name_value"
cluster.network = "network_value"
request = alloydb_v1 . RestoreClusterRequest (
backup_source=backup_source,
parent="parent_value",
cluster_id="cluster_id_value",
cluster=cluster,
)
# Make the request
operation = client. restore_cluster (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.RestoreClusterRequest , dict]]
The request object. Message for restoring a Cluster from a backup or another cluster at a given point in time. NEXT_ID: 11
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
An object representing a long-running operation. The result type for the operation will be Cluster A cluster is a collection of regional AlloyDB resources. It can include a primary instance and one or more read pool instances. All cluster resources share a storage layer, which scales as needed.
service_attachment_path
service_attachment_path ( project : str , region : str , service_attachment : str ) - > str
Returns a fully-qualified service_attachment string.
supported_database_flag_path
supported_database_flag_path ( project : str , location : str , flag : str ) - > str
Returns a fully-qualified supported_database_flag string.
switchover_cluster
switchover_cluster (
request : typing . Optional [
typing . Union [
google . cloud . alloydb_v1 . types . service . SwitchoverClusterRequest , dict
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
Switches the roles of PRIMARY and SECONDARY clusters
without any data loss. This promotes the SECONDARY
cluster to PRIMARY and sets up the original PRIMARY
cluster to replicate from this newly promoted cluster.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_switchover_cluster():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . SwitchoverClusterRequest (
name="name_value",
)
# Make the request
operation = client. switchover_cluster (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.SwitchoverClusterRequest , dict]]
The request object. Message for switching over to a cluster
name
str
Required. The name of the resource. For the required format, see the comment on the Cluster.name field This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Cluster A cluster is a collection of regional AlloyDB resources. It can include a primary instance and one or more read pool instances. All cluster resources share a storage layer, which scales as needed.
update_backup
update_backup (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . UpdateBackupRequest , dict ]
] = None ,
* ,
backup : typing . Optional [ google . cloud . alloydb_v1 . types . resources . Backup ] = None ,
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
Updates the parameters of a single Backup.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_update_backup():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
backup = alloydb_v1 . Backup ()
backup.cluster_name = "cluster_name_value"
request = alloydb_v1 . UpdateBackupRequest (
backup=backup,
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
Optional[Union[ google.cloud.alloydb_v1.types.UpdateBackupRequest , dict]]
The request object. Message for updating a Backup
backup
Backup
Required. The resource being updated This corresponds to the backup field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. Field mask is used to specify the fields to be overwritten in the Backup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Backup Message describing Backup object
update_cluster
update_cluster (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . UpdateClusterRequest , dict ]
] = None ,
* ,
cluster : typing . Optional [ google . cloud . alloydb_v1 . types . resources . Cluster ] = None ,
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
Updates the parameters of a single Cluster.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_update_cluster():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
cluster = alloydb_v1 . Cluster ()
cluster.backup_source.backup_name = "backup_name_value"
cluster.network = "network_value"
request = alloydb_v1 . UpdateClusterRequest (
cluster=cluster,
)
# Make the request
operation = client. update_cluster (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.UpdateClusterRequest , dict]]
The request object. Message for updating a Cluster
cluster
Cluster
Required. The resource being updated This corresponds to the cluster field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. Field mask is used to specify the fields to be overwritten in the Cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Cluster A cluster is a collection of regional AlloyDB resources. It can include a primary instance and one or more read pool instances. All cluster resources share a storage layer, which scales as needed.
update_instance
update_instance (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . UpdateInstanceRequest , dict ]
] = None ,
* ,
instance : typing . Optional [ google . cloud . alloydb_v1 . types . resources . Instance ] = None ,
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
Updates the parameters of a single Instance.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_update_instance():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
instance = alloydb_v1 . Instance ()
instance.instance_type = "SECONDARY"
request = alloydb_v1 . UpdateInstanceRequest (
instance=instance,
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
Optional[Union[ google.cloud.alloydb_v1.types.UpdateInstanceRequest , dict]]
The request object. Message for updating a Instance
instance
Instance
Required. The resource being updated This corresponds to the instance field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. Field mask is used to specify the fields to be overwritten in the Instance resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Instance An Instance is a computing unit that an end customer can connect to. It's the main unit of computing resources in AlloyDB.
update_user
update_user (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . UpdateUserRequest , dict ]
] = None ,
* ,
user : typing . Optional [ google . cloud . alloydb_v1 . types . resources . User ] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . alloydb_v1 . types . resources . User
Updates the parameters of a single User.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_update_user():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . UpdateUserRequest (
)
# Make the request
response = await client. update_user (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.UpdateUserRequest , dict]]
The request object. Message for updating a User
user
User
Required. The resource being updated This corresponds to the user field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. Field mask is used to specify the fields to be overwritten in the User resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.alloydb_v1.types.User
Message describing User object.
upgrade_cluster
upgrade_cluster (
request : typing . Optional [
typing . Union [ google . cloud . alloydb_v1 . types . service . UpgradeClusterRequest , dict ]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
version : typing . Optional [
google . cloud . alloydb_v1 . types . resources . DatabaseVersion
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
Upgrades a single Cluster.
Imperative only.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import alloydb_v1
async def sample_upgrade_cluster():
# Create a client
client = alloydb_v1 . AlloyDBAdminAsyncClient ()
# Initialize request argument(s)
request = alloydb_v1 . UpgradeClusterRequest (
name="name_value",
version="POSTGRES_17",
)
# Make the request
operation = client. upgrade_cluster (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.alloydb_v1.types.UpgradeClusterRequest , dict]]
The request object. Upgrades a cluster.
name
str
Required. The resource name of the cluster. This corresponds to the name field on the request instance; if request is provided, this should not be set.
version
DatabaseVersion
Required. The version the cluster is going to be upgraded to. This corresponds to the version field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be UpgradeClusterResponse UpgradeClusterResponse contains the response for upgrade cluster operation.
user_path
user_path ( project : str , location : str , cluster : str , user : str ) - > str
Returns a fully-qualified user string.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
