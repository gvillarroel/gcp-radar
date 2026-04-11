---
title: "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient
  title: "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\
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
Class BigtableTableAdminClient (2.35.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.35.0 (latest)
2.34.0
2.33.0
2.32.0
2.31.0
2.30.1
2.29.0
2.28.1
2.26.0
2.25.0
2.24.0
2.23.1
2.22.0
2.21.0
2.20.0
2.19.0
2.18.1
2.17.0
2.16.0
2.15.0
2.14.1
2.13.2
2.12.0
2.11.3
2.10.1
2.9.0
2.8.1
2.7.1
2.6.0
2.5.2
2.4.0
2.3.3
2.2.0
2.1.0
2.0.0
1.7.3
1.6.1
1.5.1
1.4.0
1.3.0
1.2.1
1.1.0
1.0.0
0.34.0
BigtableTableAdminClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . bigtable_admin_v2 . services . bigtable_table_admin . transports . base . BigtableTableAdminTransport ,
typing . Callable [
[ ... ],
google . cloud . bigtable_admin_v2 . services . bigtable_table_admin . transports . base . BigtableTableAdminTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the Bigtable table admin client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,BigtableTableAdminTransport,Callable[..., BigtableTableAdminTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the BigtableTableAdminTransport constructor. If set to None, a transport is chosen automatically.
client_options
Optional[Union[google.api_core.client_options.ClientOptions, dict]]
Custom options for the client. 1. The api_endpoint property can be used to override the default endpoint provided by the client when transport is not explicitly provided. Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE_API_USE_MTLS_ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value). 2. If the GOOGLE_API_USE_CLIENT_CERTIFICATE environment variable is "true", then the client_cert_source property can be used to provide a client certificate for mTLS transport. If not provided, the default SSL client certificate will be used if present. If GOOGLE_API_USE_CLIENT_CERTIFICATE is "false" or not set, no client certificate will be used. 3. The universe_domain property can be used to override the default "googleapis.com" universe. Note that the api_endpoint property still takes precedence; and universe_domain is currently not supported for mTLS.
client_info
google.api_core.gapic_v1.client_info.ClientInfo
The client info used to send a user-agent string along with API requests. If None , then default info will be used. Generally, you only need to set this if you're developing your own client library.
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
BigtableTableAdminTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
__exit__
__exit__ ( type , value , traceback )
Releases underlying transport's resources.
Warning:
ONLY use as a context manager if the transport is NOT shared
with other clients! Exiting the with block will CLOSE the transport
and may cause errors in other clients!
authorized_view_path
authorized_view_path (
project : str , instance : str , table : str , authorized_view : str
) - > str
Returns a fully-qualified authorized_view string.
backup_path
backup_path ( project : str , instance : str , cluster : str , backup : str ) - > str
Returns a fully-qualified backup string.
check_consistency
check_consistency (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . CheckConsistencyRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
consistency_token : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . CheckConsistencyResponse
Checks replication consistency based on a consistency
token, that is, if replication has caught up based on
the conditions specified in the token and the check
request.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_check_consistency():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. CheckConsistencyRequest (
name="name_value",
consistency_token="consistency_token_value",
)
# Make the request
response = client. check_consistency (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.CheckConsistencyRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency][google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency]
name
str
Required. The unique name of the Table for which to check replication consistency. Values are of the form projects/{project}/instances/{instance}/tables/{table} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
consistency_token
str
Required. The token created using GenerateConsistencyToken for the Table. This corresponds to the consistency_token field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.types.CheckConsistencyResponse
Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency][google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency]
cluster_path
cluster_path ( project : str , instance : str , cluster : str ) - > str
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
copy_backup
copy_backup (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . CopyBackupRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
backup_id : typing . Optional [ str ] = None ,
source_backup : typing . Optional [ str ] = None ,
expire_time : typing . Optional [ google . protobuf . timestamp_pb2 . Timestamp ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Copy a Cloud Bigtable backup to a new backup in the
destination cluster located in the destination instance
and project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_copy_backup():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. CopyBackupRequest (
parent="parent_value",
backup_id="backup_id_value",
source_backup="source_backup_value",
)
# Make the request
operation = client. copy_backup (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.CopyBackupRequest , dict]
The request object. The request for CopyBackup][google.bigtable.admin.v2.BigtableTableAdmin.CopyBackup] .
parent
str
Required. The name of the destination cluster that will contain the backup copy. The cluster must already exist. Values are of the form: projects/{project}/instances/{instance}/clusters/{cluster} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
backup_id
str
Required. The id of the new backup. The backup_id along with parent are combined as {parent}/backups/{backup_id} to create the full backup name, of the form: projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup_id} . This string must be between 1 and 50 characters in length and match the regex [ a-zA-Z0-9][- .a-zA-Z0-9]*. This corresponds to the backup_id field on the request instance; if request is provided, this should not be set.
source_backup
str
Required. The source backup to be copied from. The source backup needs to be in READY state for it to be copied. Copying a copied backup is not allowed. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: projects/ . This corresponds to the source_backup field on the request instance; if request is provided, this should not be set.
expire_time
google.protobuf.timestamp_pb2.Timestamp
Required. Required. The expiration time of the copied backup with microsecond granularity that must be at least 6 hours and at most 30 days from the time the request is received. Once the expire_time has passed, Cloud Bigtable will delete the backup and free the resources used by the backup. This corresponds to the expire_time field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.api_core.operation.Operation
An object representing a long-running operation. The result type for the operation will be Backup A backup of a Cloud Bigtable table.
create_authorized_view
create_authorized_view (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . CreateAuthorizedViewRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
authorized_view : typing . Optional [
google . cloud . bigtable_admin_v2 . types . table . AuthorizedView
] = None ,
authorized_view_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Creates a new AuthorizedView in a table.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_create_authorized_view():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. CreateAuthorizedViewRequest (
parent="parent_value",
authorized_view_id="authorized_view_id_value",
)
# Make the request
operation = client. create_authorized_view (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.CreateAuthorizedViewRequest , dict]
The request object. The request for CreateAuthorizedView][google.bigtable.admin.v2.BigtableTableAdmin.CreateAuthorizedView]
parent
str
Required. This is the name of the table the AuthorizedView belongs to. Values are of the form projects/{project}/instances/{instance}/tables/{table} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
authorized_view
google.cloud.bigtable_admin_v2.types.AuthorizedView
Required. The AuthorizedView to create. This corresponds to the authorized_view field on the request instance; if request is provided, this should not be set.
authorized_view_id
str
Required. The id of the AuthorizedView to create. This AuthorizedView must not already exist. The authorized_view_id appended to parent forms the full AuthorizedView name of the form projects/{project}/instances/{instance}/tables/{table}/authorizedView/{authorized_view} . This corresponds to the authorized_view_id field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.api_core.operation.Operation
An object representing a long-running operation. The result type for the operation will be AuthorizedView AuthorizedViews represent subsets of a particular Cloud Bigtable table. Users can configure access to each Authorized View independently from the table and use the existing Data APIs to access the subset of data.
create_backup
create_backup (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . CreateBackupRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
backup_id : typing . Optional [ str ] = None ,
backup : typing . Optional [ google . cloud . bigtable_admin_v2 . types . table . Backup ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Starts creating a new Cloud Bigtable Backup. The returned backup
long-running operation][google.longrunning.Operation] can be
used to track creation of the backup. The
metadata][google.longrunning.Operation.metadata] field type is
CreateBackupMetadata][google.bigtable.admin.v2.CreateBackupMetadata] .
The response][google.longrunning.Operation.response] field type
is Backup][google.bigtable.admin.v2.Backup] , if successful.
Cancelling the returned operation will stop the creation and
delete the backup.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_create_backup():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
backup = bigtable_admin_v2. Backup ()
backup.source_table = "source_table_value"
request = bigtable_admin_v2. CreateBackupRequest (
parent="parent_value",
backup_id="backup_id_value",
backup=backup,
)
# Make the request
operation = client. create_backup (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.CreateBackupRequest , dict]
The request object. The request for CreateBackup][google.bigtable.admin.v2.BigtableTableAdmin.CreateBackup] .
parent
str
Required. This must be one of the clusters in the instance in which this table is located. The backup will be stored in this cluster. Values are of the form projects/{project}/instances/{instance}/clusters/{cluster} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
backup_id
str
Required. The id of the backup to be created. The backup_id along with the parent parent are combined as {parent}/backups/{backup_id} to create the full backup name, of the form: projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup_id} . This string must be between 1 and 50 characters in length and match the regex [ a-zA-Z0-9][- .a-zA-Z0-9]*. This corresponds to the backup_id field on the request instance; if request is provided, this should not be set.
backup
google.cloud.bigtable_admin_v2.types.Backup
Required. The backup to create. This corresponds to the backup field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.api_core.operation.Operation
An object representing a long-running operation. The result type for the operation will be Backup A backup of a Cloud Bigtable table.
create_schema_bundle
create_schema_bundle (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . CreateSchemaBundleRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
schema_bundle_id : typing . Optional [ str ] = None ,
schema_bundle : typing . Optional [
google . cloud . bigtable_admin_v2 . types . table . SchemaBundle
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Creates a new schema bundle in the specified table.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_create_schema_bundle():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
schema_bundle = bigtable_admin_v2. SchemaBundle ()
schema_bundle.proto_schema.proto_descriptors = b'proto_descriptors_blob'
request = bigtable_admin_v2. CreateSchemaBundleRequest (
parent="parent_value",
schema_bundle_id="schema_bundle_id_value",
schema_bundle=schema_bundle,
)
# Make the request
operation = client. create_schema_bundle (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.CreateSchemaBundleRequest , dict]
The request object. The request for CreateSchemaBundle][google.bigtable.admin.v2.BigtableTableAdmin.CreateSchemaBundle] .
parent
str
Required. The parent resource where this schema bundle will be created. Values are of the form projects/{project}/instances/{instance}/tables/{table} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
schema_bundle_id
str
Required. The unique ID to use for the schema bundle, which will become the final component of the schema bundle's resource name. This corresponds to the schema_bundle_id field on the request instance; if request is provided, this should not be set.
schema_bundle
google.cloud.bigtable_admin_v2.types.SchemaBundle
Required. The schema bundle to create. This corresponds to the schema_bundle field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.api_core.operation.Operation
An object representing a long-running operation. The result type for the operation will be SchemaBundle A named collection of related schemas.
create_table
create_table (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . CreateTableRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
table_id : typing . Optional [ str ] = None ,
table : typing . Optional [ google . cloud . bigtable_admin_v2 . types . table . Table ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . bigtable_admin_v2 . types . table . Table
Creates a new table in the specified instance.
The table can be created with a full set of initial
column families, specified in the request.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_create_table():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. CreateTableRequest (
parent="parent_value",
table_id="table_id_value",
)
# Make the request
response = client. create_table (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.CreateTableRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.CreateTable][google.bigtable.admin.v2.BigtableTableAdmin.CreateTable]
parent
str
Required. The unique name of the instance in which to create the table. Values are of the form projects/{project}/instances/{instance} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
table_id
str
Required. The name by which the new table should be referred to within the parent instance, e.g., foobar rather than {parent}/tables/foobar . Maximum 50 characters. This corresponds to the table_id field on the request instance; if request is provided, this should not be set.
table
google.cloud.bigtable_admin_v2.types.Table
Required. The Table to create. This corresponds to the table field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.types.Table
A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
create_table_from_snapshot
create_table_from_snapshot (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . CreateTableFromSnapshotRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
table_id : typing . Optional [ str ] = None ,
source_snapshot : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Creates a new table from the specified snapshot. The
target table must not exist. The snapshot and the table
must be in the same instance.
Note: This is a private alpha release of Cloud Bigtable
snapshots. This feature is not currently available to
most Cloud Bigtable customers. This feature might be
changed in backward-incompatible ways and is not
recommended for production use. It is not subject to any
SLA or deprecation policy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_create_table_from_snapshot():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. CreateTableFromSnapshotRequest (
parent="parent_value",
table_id="table_id_value",
source_snapshot="source_snapshot_value",
)
# Make the request
operation = client. create_table_from_snapshot (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.CreateTableFromSnapshotRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.CreateTableFromSnapshot][google.bigtable.admin.v2.BigtableTableAdmin.CreateTableFromSnapshot] Note: This is a private alpha release of Cloud Bigtable snapshots. This feature is not currently available to most Cloud Bigtable customers. This feature might be changed in backward-incompatible ways and is not recommended for production use. It is not subject to any SLA or deprecation policy.
parent
str
Required. The unique name of the instance in which to create the table. Values are of the form projects/{project}/instances/{instance} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
table_id
str
Required. The name by which the new table should be referred to within the parent instance, e.g., foobar rather than {parent}/tables/foobar . This corresponds to the table_id field on the request instance; if request is provided, this should not be set.
source_snapshot
str
Required. The unique name of the snapshot from which to restore the table. The snapshot and the table must be in the same instance. Values are of the form projects/{project}/instances/{instance}/clusters/{cluster}/snapshots/{snapshot} . This corresponds to the source_snapshot field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.api_core.operation.Operation
An object representing a long-running operation. The result type for the operation will be Table A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
crypto_key_version_path
crypto_key_version_path (
project : str , location : str , key_ring : str , crypto_key : str , crypto_key_version : str
) - > str
Returns a fully-qualified crypto_key_version string.
delete_authorized_view
delete_authorized_view (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . DeleteAuthorizedViewRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > None
Permanently deletes a specified AuthorizedView.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_delete_authorized_view():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. DeleteAuthorizedViewRequest (
name="name_value",
)
# Make the request
client. delete_authorized_view (request=request)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.DeleteAuthorizedViewRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.DeleteAuthorizedView][google.bigtable.admin.v2.BigtableTableAdmin.DeleteAuthorizedView]
name
str
Required. The unique name of the AuthorizedView to be deleted. Values are of the form projects/{project}/instances/{instance}/tables/{table}/authorizedViews/{authorized_view} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_backup
delete_backup (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . DeleteBackupRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > None
Deletes a pending or completed Cloud Bigtable backup.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_delete_backup():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. DeleteBackupRequest (
name="name_value",
)
# Make the request
client. delete_backup (request=request)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.DeleteBackupRequest , dict]
The request object. The request for DeleteBackup][google.bigtable.admin.v2.BigtableTableAdmin.DeleteBackup] .
name
str
Required. Name of the backup to delete. Values are of the form projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_schema_bundle
delete_schema_bundle (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . DeleteSchemaBundleRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > None
Deletes a schema bundle in the specified table.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_delete_schema_bundle():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. DeleteSchemaBundleRequest (
name="name_value",
)
# Make the request
client. delete_schema_bundle (request=request)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.DeleteSchemaBundleRequest , dict]
The request object. The request for DeleteSchemaBundle][google.bigtable.admin.v2.BigtableTableAdmin.DeleteSchemaBundle] .
name
str
Required. The unique name of the schema bundle to delete. Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema_bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . DeleteSnapshotRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > None
Permanently deletes the specified snapshot.
Note: This is a private alpha release of Cloud Bigtable
snapshots. This feature is not currently available to
most Cloud Bigtable customers. This feature might be
changed in backward-incompatible ways and is not
recommended for production use. It is not subject to any
SLA or deprecation policy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_delete_snapshot():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. DeleteSnapshotRequest (
name="name_value",
)
# Make the request
client. delete_snapshot (request=request)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.DeleteSnapshotRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.DeleteSnapshot][google.bigtable.admin.v2.BigtableTableAdmin.DeleteSnapshot] Note: This is a private alpha release of Cloud Bigtable snapshots. This feature is not currently available to most Cloud Bigtable customers. This feature might be changed in backward-incompatible ways and is not recommended for production use. It is not subject to any SLA or deprecation policy.
name
str
Required. The unique name of the snapshot to be deleted. Values are of the form projects/{project}/instances/{instance}/clusters/{cluster}/snapshots/{snapshot} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_table
delete_table (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . DeleteTableRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > None
Permanently deletes a specified table and all of its
data.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_delete_table():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. DeleteTableRequest (
name="name_value",
)
# Make the request
client. delete_table (request=request)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.DeleteTableRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.DeleteTable][google.bigtable.admin.v2.BigtableTableAdmin.DeleteTable]
name
str
Required. The unique name of the table to be deleted. Values are of the form projects/{project}/instances/{instance}/tables/{table} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
drop_row_range
drop_row_range (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . DropRowRangeRequest ,
dict ,
]
] = None ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > None
Permanently drop/delete a row range from a specified
table. The request can specify whether to delete all
rows in a table, or only those that match a particular
prefix.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_drop_row_range():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. DropRowRangeRequest (
row_key_prefix=b'row_key_prefix_blob',
name="name_value",
)
# Make the request
client. drop_row_range (request=request)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.DropRowRangeRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange][google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange]
retry
google.api_core.retry.Retry
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
BaseBigtableTableAdminClient
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
BaseBigtableTableAdminClient
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
BaseBigtableTableAdminClient
The constructed client.
generate_consistency_token
generate_consistency_token (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . GenerateConsistencyTokenRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . GenerateConsistencyTokenResponse
)
Generates a consistency token for a Table, which can
be used in CheckConsistency to check whether mutations
to the table that finished before this call started have
been replicated. The tokens will be available for 90
days.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_generate_consistency_token():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. GenerateConsistencyTokenRequest (
name="name_value",
)
# Make the request
response = client. generate_consistency_token (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.GenerateConsistencyTokenRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken][google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken]
name
str
Required. The unique name of the Table for which to create a consistency token. Values are of the form projects/{project}/instances/{instance}/tables/{table} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.types.GenerateConsistencyTokenResponse
Response message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken][google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken]
get_authorized_view
get_authorized_view (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . GetAuthorizedViewRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . bigtable_admin_v2 . types . table . AuthorizedView
Gets information from a specified AuthorizedView.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_get_authorized_view():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. GetAuthorizedViewRequest (
name="name_value",
)
# Make the request
response = client. get_authorized_view (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.GetAuthorizedViewRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.GetAuthorizedView][google.bigtable.admin.v2.BigtableTableAdmin.GetAuthorizedView]
name
str
Required. The unique name of the requested AuthorizedView. Values are of the form projects/{project}/instances/{instance}/tables/{table}/authorizedViews/{authorized_view} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.types.AuthorizedView
AuthorizedViews represent subsets of a particular Cloud Bigtable table. Users can configure access to each Authorized View independently from the table and use the existing Data APIs to access the subset of data.
get_backup
get_backup (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . GetBackupRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . bigtable_admin_v2 . types . table . Backup
Gets metadata on a pending or completed Cloud
Bigtable Backup.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_get_backup():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. GetBackupRequest (
name="name_value",
)
# Make the request
response = client. get_backup (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.GetBackupRequest , dict]
The request object. The request for GetBackup][google.bigtable.admin.v2.BigtableTableAdmin.GetBackup] .
name
str
Required. Name of the backup. Values are of the form projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.types.Backup
A backup of a Cloud Bigtable table.
get_iam_policy
get_iam_policy (
request : typing . Optional [
typing . Union [ google . iam . v1 . iam_policy_pb2 . GetIamPolicyRequest , dict ]
] = None ,
* ,
resource : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . iam . v1 . policy_pb2 . Policy
Gets the access control policy for a Bigtable
resource. Returns an empty policy if the resource exists
but does not have a policy set.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
from google.iam.v1 import iam_policy_pb2 # type: ignore
def sample_get_iam_policy():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = iam_policy_pb2.GetIamPolicyRequest(
resource="resource_value",
)
# Make the request
response = client. get_iam_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.iam.v1.iam_policy_pb2.GetIamPolicyRequest , dict]
The request object. Request message for GetIamPolicy method.
resource
str
REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field. This corresponds to the resource field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.iam.v1.policy_pb2.Policy
An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ **YAML example:** :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
get_mtls_endpoint_and_cert_source
get_mtls_endpoint_and_cert_source (
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
)
Deprecated. Return the API endpoint and client cert source for mutual TLS.
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
get_schema_bundle
get_schema_bundle (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . GetSchemaBundleRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . bigtable_admin_v2 . types . table . SchemaBundle
Gets metadata information about the specified schema
bundle.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_get_schema_bundle():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. GetSchemaBundleRequest (
name="name_value",
)
# Make the request
response = client. get_schema_bundle (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.GetSchemaBundleRequest , dict]
The request object. The request for GetSchemaBundle][google.bigtable.admin.v2.BigtableTableAdmin.GetSchemaBundle] .
name
str
Required. The unique name of the schema bundle to retrieve. Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema_bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.types.SchemaBundle
A named collection of related schemas.
get_snapshot
get_snapshot (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . GetSnapshotRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . bigtable_admin_v2 . types . table . Snapshot
Gets metadata information about the specified
snapshot.
Note: This is a private alpha release of Cloud Bigtable
snapshots. This feature is not currently available to
most Cloud Bigtable customers. This feature might be
changed in backward-incompatible ways and is not
recommended for production use. It is not subject to any
SLA or deprecation policy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_get_snapshot():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. GetSnapshotRequest (
name="name_value",
)
# Make the request
response = client. get_snapshot (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.GetSnapshotRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.GetSnapshot][google.bigtable.admin.v2.BigtableTableAdmin.GetSnapshot] Note: This is a private alpha release of Cloud Bigtable snapshots. This feature is not currently available to most Cloud Bigtable customers. This feature might be changed in backward-incompatible ways and is not recommended for production use. It is not subject to any SLA or deprecation policy.
name
str
Required. The unique name of the requested snapshot. Values are of the form projects/{project}/instances/{instance}/clusters/{cluster}/snapshots/{snapshot} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.types.Snapshot
A snapshot of a table at a particular time. A snapshot can be used as a checkpoint for data restoration or a data source for a new table. Note: This is a private alpha release of Cloud Bigtable snapshots. This feature is not currently available to most Cloud Bigtable customers. This feature might be changed in backward-incompatible ways and is not recommended for production use. It is not subject to any SLA or deprecation policy.
get_table
get_table (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . GetTableRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . bigtable_admin_v2 . types . table . Table
Gets metadata information about the specified table.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_get_table():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. GetTableRequest (
name="name_value",
)
# Make the request
response = client. get_table (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.GetTableRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.GetTable][google.bigtable.admin.v2.BigtableTableAdmin.GetTable]
name
str
Required. The unique name of the requested table. Values are of the form projects/{project}/instances/{instance}/tables/{table} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.types.Table
A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
instance_path
instance_path ( project : str , instance : str ) - > str
Returns a fully-qualified instance string.
list_authorized_views
list_authorized_views (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . ListAuthorizedViewsRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . bigtable_admin_v2 . services . bigtable_table_admin . pagers . ListAuthorizedViewsPager
)
Lists all AuthorizedViews from a specific table.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_list_authorized_views():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. ListAuthorizedViewsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_authorized_views (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.ListAuthorizedViewsRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews][google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews]
parent
str
Required. The unique name of the table for which AuthorizedViews should be listed. Values are of the form projects/{project}/instances/{instance}/tables/{table} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.services.bigtable_table_admin.pagers.ListAuthorizedViewsPager
Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews][google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews] Iterating over this object will yield results and resolve additional pages automatically.
list_backups
list_backups (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . ListBackupsRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . bigtable_admin_v2 . services . bigtable_table_admin . pagers . ListBackupsPager
)
Lists Cloud Bigtable backups. Returns both completed
and pending backups.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_list_backups():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. ListBackupsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_backups (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.ListBackupsRequest , dict]
The request object. The request for ListBackups][google.bigtable.admin.v2.BigtableTableAdmin.ListBackups] .
parent
str
Required. The cluster to list backups from. Values are of the form projects/{project}/instances/{instance}/clusters/{cluster} . Use {cluster} = '-' to list backups for all clusters in an instance, e.g., projects/{project}/instances/{instance}/clusters/- . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.services.bigtable_table_admin.pagers.ListBackupsPager
The response for ListBackups][google.bigtable.admin.v2.BigtableTableAdmin.ListBackups] . Iterating over this object will yield results and resolve additional pages automatically.
list_schema_bundles
list_schema_bundles (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . ListSchemaBundlesRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . bigtable_admin_v2 . services . bigtable_table_admin . pagers . ListSchemaBundlesPager
)
Lists all schema bundles associated with the
specified table.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_list_schema_bundles():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. ListSchemaBundlesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_schema_bundles (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.ListSchemaBundlesRequest , dict]
The request object. The request for ListSchemaBundles][google.bigtable.admin.v2.BigtableTableAdmin.ListSchemaBundles] .
parent
str
Required. The parent, which owns this collection of schema bundles. Values are of the form projects/{project}/instances/{instance}/tables/{table} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.services.bigtable_table_admin.pagers.ListSchemaBundlesPager
The response for ListSchemaBundles][google.bigtable.admin.v2.BigtableTableAdmin.ListSchemaBundles] . Iterating over this object will yield results and resolve additional pages automatically.
list_snapshots
list_snapshots (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . ListSnapshotsRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . bigtable_admin_v2 . services . bigtable_table_admin . pagers . ListSnapshotsPager
)
Lists all snapshots associated with the specified
cluster.
Note: This is a private alpha release of Cloud Bigtable
snapshots. This feature is not currently available to
most Cloud Bigtable customers. This feature might be
changed in backward-incompatible ways and is not
recommended for production use. It is not subject to any
SLA or deprecation policy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_list_snapshots():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. ListSnapshotsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_snapshots (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.ListSnapshotsRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.ListSnapshots][google.bigtable.admin.v2.BigtableTableAdmin.ListSnapshots] Note: This is a private alpha release of Cloud Bigtable snapshots. This feature is not currently available to most Cloud Bigtable customers. This feature might be changed in backward-incompatible ways and is not recommended for production use. It is not subject to any SLA or deprecation policy.
parent
str
Required. The unique name of the cluster for which snapshots should be listed. Values are of the form projects/{project}/instances/{instance}/clusters/{cluster} . Use {cluster} = '-' to list snapshots for all clusters in an instance, e.g., projects/{project}/instances/{instance}/clusters/- . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.services.bigtable_table_admin.pagers.ListSnapshotsPager
Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListSnapshots][google.bigtable.admin.v2.BigtableTableAdmin.ListSnapshots] Note: This is a private alpha release of Cloud Bigtable snapshots. This feature is not currently available to most Cloud Bigtable customers. This feature might be changed in backward-incompatible ways and is not recommended for production use. It is not subject to any SLA or deprecation policy. Iterating over this object will yield results and resolve additional pages automatically.
list_tables
list_tables (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . ListTablesRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . bigtable_admin_v2 . services . bigtable_table_admin . pagers . ListTablesPager
)
Lists all tables served from a specified instance.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_list_tables():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. ListTablesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_tables (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.ListTablesRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables][google.bigtable.admin.v2.BigtableTableAdmin.ListTables]
parent
str
Required. The unique name of the instance for which tables should be listed. Values are of the form projects/{project}/instances/{instance} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.services.bigtable_table_admin.pagers.ListTablesPager
Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables][google.bigtable.admin.v2.BigtableTableAdmin.ListTables] Iterating over this object will yield results and resolve additional pages automatically.
modify_column_families
modify_column_families (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . ModifyColumnFamiliesRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
modifications : typing . Optional [
typing . MutableSequence [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . ModifyColumnFamiliesRequest . Modification
]
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . bigtable_admin_v2 . types . table . Table
Performs a series of column family modifications on
the specified table. Either all or none of the
modifications will occur before this method returns, but
data requests received prior to that point may see a
table where only some modifications have taken effect.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_modify_column_families():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. ModifyColumnFamiliesRequest (
name="name_value",
)
# Make the request
response = client. modify_column_families (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.ModifyColumnFamiliesRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies][google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies]
name
str
Required. The unique name of the table whose families should be modified. Values are of the form projects/{project}/instances/{instance}/tables/{table} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
modifications
MutableSequence[ google.cloud.bigtable_admin_v2.types.ModifyColumnFamiliesRequest.Modification ]
Required. Modifications to be atomically applied to the specified table's families. Entries are applied in order, meaning that earlier modifications can be masked by later ones (in the case of repeated updates to the same family, for example). This corresponds to the modifications field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.types.Table
A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
parse_authorized_view_path
parse_authorized_view_path ( path : str ) - > typing . Dict [ str , str ]
Parses a authorized_view path into its component segments.
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
parse_crypto_key_version_path
parse_crypto_key_version_path ( path : str ) - > typing . Dict [ str , str ]
Parses a crypto_key_version path into its component segments.
parse_instance_path
parse_instance_path ( path : str ) - > typing . Dict [ str , str ]
Parses a instance path into its component segments.
parse_schema_bundle_path
parse_schema_bundle_path ( path : str ) - > typing . Dict [ str , str ]
Parses a schema_bundle path into its component segments.
parse_snapshot_path
parse_snapshot_path ( path : str ) - > typing . Dict [ str , str ]
Parses a snapshot path into its component segments.
parse_table_path
parse_table_path ( path : str ) - > typing . Dict [ str , str ]
Parses a table path into its component segments.
restore_table
restore_table (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . RestoreTableRequest ,
dict ,
]
] = None ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . bigtable_admin_v2 . overlay . types . restore_table . RestoreTableOperation
Create a new table by restoring from a completed backup. The
returned table :class: long-running operation
<<xref uid="google.cloud.bigtable_admin_v2.overlay.types">google.cloud.bigtable_admin_v2.overlay.types</xref>.restore_table.RestoreTableOperation>
can be used to track the progress of the operation, and to cancel it. The
metadata <google.api_core.operation.Operation.metadata> field type is
xref_RestoreTableMetadata.
The response <google.api_core.operation.Operation.result> type is
xref_Table, if successful.
Additionally, the returned :class: long-running-operation <<xref uid="google.cloud.bigtable_admin_v2.overlay.types">google.cloud.bigtable_admin_v2.overlay.types</xref>.restore_table.RestoreTableOperation>
provides a method, xref_optimize_restore_table_operation that
provides access to a google.api_core.operation.Operation object representing the OptimizeRestoreTable long-running-operation
after the current one has completed.
# This snippet should be regarded as a code template only.
#
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.bigtable import admin_v2
def sample_restore_table():
# Create a client
client = admin_v2.BigtableTableAdminClient()
# Initialize request argument(s)
request = admin_v2.RestoreTableRequest(
backup="backup_value",
parent="parent_value",
table_id="table_id_value",
)
# Make the request
operation = client.restore_table(request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
# Handle LRO2
optimize_operation = operation.optimize_restore_table_operation()
if optimize_operation:
print("Waiting for table optimization to complete...")
response = optimize_operation.result()
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.RestoreTableRequest , dict]
The request object. The request for RestoreTable][google.bigtable.admin.v2.BigtableTableAdmin.RestoreTable] .
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.overlay.types .restore_table.RestoreTableOperation
An object representing a long-running operation. The result type for the operation will be Table A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
schema_bundle_path
schema_bundle_path (
project : str , instance : str , table : str , schema_bundle : str
) - > str
Returns a fully-qualified schema_bundle string.
set_iam_policy
set_iam_policy (
request : typing . Optional [
typing . Union [ google . iam . v1 . iam_policy_pb2 . SetIamPolicyRequest , dict ]
] = None ,
* ,
resource : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . iam . v1 . policy_pb2 . Policy
Sets the access control policy on a Bigtable
resource. Replaces any existing policy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
from google.iam.v1 import iam_policy_pb2 # type: ignore
def sample_set_iam_policy():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = iam_policy_pb2.SetIamPolicyRequest(
resource="resource_value",
)
# Make the request
response = client. set_iam_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.iam.v1.iam_policy_pb2.SetIamPolicyRequest , dict]
The request object. Request message for SetIamPolicy method.
resource
str
REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field. This corresponds to the resource field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.iam.v1.policy_pb2.Policy
An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ **YAML example:** :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
snapshot_path
snapshot_path ( project : str , instance : str , cluster : str , snapshot : str ) - > str
Returns a fully-qualified snapshot string.
snapshot_table
snapshot_table (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . SnapshotTableRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
cluster : typing . Optional [ str ] = None ,
snapshot_id : typing . Optional [ str ] = None ,
description : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Creates a new snapshot in the specified cluster from
the specified source table. The cluster and the table
must be in the same instance.
Note: This is a private alpha release of Cloud Bigtable
snapshots. This feature is not currently available to
most Cloud Bigtable customers. This feature might be
changed in backward-incompatible ways and is not
recommended for production use. It is not subject to any
SLA or deprecation policy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_snapshot_table():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. SnapshotTableRequest (
name="name_value",
cluster="cluster_value",
snapshot_id="snapshot_id_value",
)
# Make the request
operation = client. snapshot_table (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.SnapshotTableRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.SnapshotTable][google.bigtable.admin.v2.BigtableTableAdmin.SnapshotTable] Note: This is a private alpha release of Cloud Bigtable snapshots. This feature is not currently available to most Cloud Bigtable customers. This feature might be changed in backward-incompatible ways and is not recommended for production use. It is not subject to any SLA or deprecation policy.
name
str
Required. The unique name of the table to have the snapshot taken. Values are of the form projects/{project}/instances/{instance}/tables/{table} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
cluster
str
Required. The name of the cluster where the snapshot will be created in. Values are of the form projects/{project}/instances/{instance}/clusters/{cluster} . This corresponds to the cluster field on the request instance; if request is provided, this should not be set.
snapshot_id
str
Required. The ID by which the new snapshot should be referred to within the parent cluster, e.g., mysnapshot of the form: `<code>_a-zA-Z0-9][-_.a-zA-Z0-9]</code>* rather than projects/{project}/instances/{instance}/clusters/{cluster}/snapshots/mysnapshot . This corresponds to the snapshot_id field on the request instance; if request` is provided, this should not be set.
description
str
Description of the snapshot. This corresponds to the description field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.api_core.operation.Operation
An object representing a long-running operation. The result type for the operation will be Snapshot A snapshot of a table at a particular time. A snapshot can be used as a checkpoint for data restoration or a data source for a new table. Note: This is a private alpha release of Cloud Bigtable snapshots. This feature is not currently available to most Cloud Bigtable customers. This feature might be changed in backward-incompatible ways and is not recommended for production use. It is not subject to any SLA or deprecation policy.
table_path
table_path ( project : str , instance : str , table : str ) - > str
Returns a fully-qualified table string.
test_iam_permissions
test_iam_permissions (
request : typing . Optional [
typing . Union [ google . iam . v1 . iam_policy_pb2 . TestIamPermissionsRequest , dict ]
] = None ,
* ,
resource : typing . Optional [ str ] = None ,
permissions : typing . Optional [ typing . MutableSequence [ str ]] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . iam . v1 . iam_policy_pb2 . TestIamPermissionsResponse
Returns permissions that the caller has on the
specified Bigtable resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
from google.iam.v1 import iam_policy_pb2 # type: ignore
def sample_test_iam_permissions():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = iam_policy_pb2.TestIamPermissionsRequest(
resource="resource_value",
permissions=['permissions_value1', 'permissions_value2'],
)
# Make the request
response = client. test_iam_permissions (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.iam.v1.iam_policy_pb2.TestIamPermissionsRequest , dict]
The request object. Request message for TestIamPermissions method.
resource
str
REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field. This corresponds to the resource field on the request instance; if request is provided, this should not be set.
permissions
MutableSequence[str]
The set of permissions to check for the resource . Permissions with wildcards (such as ' ' or 'storage. ') are not allowed. For more information see IAM Overview https://cloud.google.com/iam/docs/overview#permissions __. This corresponds to the permissions field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.iam.v1.iam_policy_pb2.TestIamPermissionsResponse
Response message for TestIamPermissions method.
undelete_table
undelete_table (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . UndeleteTableRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Restores a specified table which was accidentally
deleted.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_undelete_table():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. UndeleteTableRequest (
name="name_value",
)
# Make the request
operation = client. undelete_table (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.UndeleteTableRequest , dict]
The request object. Request message for google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable][google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable]
name
str
Required. The unique name of the table to be restored. Values are of the form projects/{project}/instances/{instance}/tables/{table} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.api_core.operation.Operation
An object representing a long-running operation. The result type for the operation will be Table A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
update_authorized_view
update_authorized_view (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . UpdateAuthorizedViewRequest ,
dict ,
]
] = None ,
* ,
authorized_view : typing . Optional [
google . cloud . bigtable_admin_v2 . types . table . AuthorizedView
] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Updates an AuthorizedView in a table.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_update_authorized_view():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. UpdateAuthorizedViewRequest (
)
# Make the request
operation = client. update_authorized_view (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.UpdateAuthorizedViewRequest , dict]
The request object. The request for UpdateAuthorizedView][google.bigtable.admin.v2.BigtableTableAdmin.UpdateAuthorizedView] .
authorized_view
google.cloud.bigtable_admin_v2.types.AuthorizedView
Required. The AuthorizedView to update. The name in authorized_view is used to identify the AuthorizedView. AuthorizedView name must in this format: projects/{project}/instances/{instance}/tables/{table}/authorizedViews/{authorized_view} . This corresponds to the authorized_view field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. The list of fields to update. A mask specifying which fields in the AuthorizedView resource should be updated. This mask is relative to the AuthorizedView resource, not to the request message. A field will be overwritten if it is in the mask. If empty, all fields set in the request will be overwritten. A special value * means to overwrite all fields (including fields not set in the request). This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.api_core.operation.Operation
An object representing a long-running operation. The result type for the operation will be AuthorizedView AuthorizedViews represent subsets of a particular Cloud Bigtable table. Users can configure access to each Authorized View independently from the table and use the existing Data APIs to access the subset of data.
update_backup
update_backup (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . UpdateBackupRequest ,
dict ,
]
] = None ,
* ,
backup : typing . Optional [ google . cloud . bigtable_admin_v2 . types . table . Backup ] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . bigtable_admin_v2 . types . table . Backup
Updates a pending or completed Cloud Bigtable Backup.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_update_backup():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
backup = bigtable_admin_v2. Backup ()
backup.source_table = "source_table_value"
request = bigtable_admin_v2. UpdateBackupRequest (
backup=backup,
)
# Make the request
response = client. update_backup (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.UpdateBackupRequest , dict]
The request object. The request for UpdateBackup][google.bigtable.admin.v2.BigtableTableAdmin.UpdateBackup] .
backup
google.cloud.bigtable_admin_v2.types.Backup
Required. The backup to update. backup.name , and the fields to be updated as specified by update_mask are required. Other fields are ignored. Update is only supported for the following fields: - backup.expire_time . This corresponds to the backup field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. A mask specifying which fields (e.g. expire_time ) in the Backup resource should be updated. This mask is relative to the Backup resource, not to the request message. The field mask must always be specified; this prevents any future fields from being erased accidentally by clients that do not know about them. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.cloud.bigtable_admin_v2.types.Backup
A backup of a Cloud Bigtable table.
update_schema_bundle
update_schema_bundle (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . UpdateSchemaBundleRequest ,
dict ,
]
] = None ,
* ,
schema_bundle : typing . Optional [
google . cloud . bigtable_admin_v2 . types . table . SchemaBundle
] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Updates a schema bundle in the specified table.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_update_schema_bundle():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
schema_bundle = bigtable_admin_v2. SchemaBundle ()
schema_bundle.proto_schema.proto_descriptors = b'proto_descriptors_blob'
request = bigtable_admin_v2. UpdateSchemaBundleRequest (
schema_bundle=schema_bundle,
)
# Make the request
operation = client. update_schema_bundle (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.UpdateSchemaBundleRequest , dict]
The request object. The request for UpdateSchemaBundle][google.bigtable.admin.v2.BigtableTableAdmin.UpdateSchemaBundle] .
schema_bundle
google.cloud.bigtable_admin_v2.types.SchemaBundle
Required. The schema bundle to update. The schema bundle's name field is used to identify the schema bundle to update. Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema_bundle} This corresponds to the schema_bundle field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. The list of fields to update. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.api_core.operation.Operation
An object representing a long-running operation. The result type for the operation will be SchemaBundle A named collection of related schemas.
update_table
update_table (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . types . bigtable_table_admin . UpdateTableRequest ,
dict ,
]
] = None ,
* ,
table : typing . Optional [ google . cloud . bigtable_admin_v2 . types . table . Table ] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Updates a specified table.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import bigtable_admin_v2
def sample_update_table():
# Create a client
client = bigtable_admin_v2. BigtableTableAdminClient ()
# Initialize request argument(s)
request = bigtable_admin_v2. UpdateTableRequest (
)
# Make the request
operation = client. update_table (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.types.UpdateTableRequest , dict]
The request object. The request for UpdateTable][google.bigtable.admin.v2.BigtableTableAdmin.UpdateTable] .
table
google.cloud.bigtable_admin_v2.types.Table
Required. The table to update. The table's name field is used to identify the table to update. This corresponds to the table field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. The list of fields to update. A mask specifying which fields (e.g. change_stream_config ) in the table field should be updated. This mask is relative to the table field, not to the request message. The wildcard (*) path is currently not supported. Currently UpdateTable is only supported for the following fields: - change_stream_config - change_stream_config.retention_period - deletion_protection - row_key_schema If column_families is set in update_mask , it will return an UNIMPLEMENTED error. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
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
google.api_core.operation.Operation
An object representing a long-running operation. The result type for the operation will be Table A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
wait_for_consistency
wait_for_consistency (
request : typing . Optional [
typing . Union [
google . cloud . bigtable_admin_v2 . overlay . types . wait_for_consistency_request . WaitForConsistencyRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > bool
Blocks until the mutations for the specified Table that have been
made before the call have been replicated or reads using an app profile with DataBoostIsolationReadOnly
can see all writes committed before the token was created. This is done by generating
a consistency token for the Table, then polling check_consistency
for the specified table until the call returns True.
# This snippet should be regarded as a code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.bigtable import admin_v2
def sample_wait_for_consistency():
# Create a client
client = admin_v2.BigtableTableAdminClient()
# Initialize request argument(s)
request = admin_v2.WaitForConsistencyRequest(
name="name_value",
)
# Make the request
print("Waiting for operation to complete...")
response = client.wait_for_replication(request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.bigtable_admin_v2.overlay.types.WaitForConsistencyRequest , dict]
The request object.
name
str
Required. The unique name of the Table for which to create a consistency token. Values are of the form projects/{project}/instances/{instance}/tables/{table} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Exceptions
Type
Description
google.api_core.GoogleAPICallError
If the operation errors or if the timeout is reached before the operation completes.
Returns
Type
Description
bool
If the standard_read_remote_writes mode is specified in the request object, returns True after the mutations of the specified table have been fully replicated. If the data_boost_read_local_writes mode is specified in the request object, returns True after reads using an app profile with DataBoostIsolationReadOnly can see all writes committed before the token was created.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
