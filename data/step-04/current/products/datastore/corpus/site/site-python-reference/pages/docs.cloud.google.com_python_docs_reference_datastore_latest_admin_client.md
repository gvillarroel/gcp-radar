---
title: "Datastore Admin Client \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client
  title: "Datastore Admin Client \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Datastore Admin Client
Stay organized with collections
Save and categorize content based on your preferences.
2.24.0 (latest)
2.23.0
2.22.0
2.21.0
2.20.2
2.19.0
2.18.0
2.17.0
2.16.1
2.15.2
2.14.0
2.13.2
2.12.0
2.11.1
2.10.0
2.9.0
2.8.3
2.7.2
2.6.2
2.5.1
2.4.0
2.3.0
2.2.0
2.1.6
2.0.1
1.15.5
1.14.0
1.13.2
1.12.0
1.11.0
1.10.0
1.9.0
class google.cloud.datastore_admin_v1.services.datastore_admin.client.DatastoreAdminClient(*, credentials: typing.Optional[google.auth.credentials.Credentials] = None, transport: typing.Optional[typing.Union[str, google.cloud.datastore_admin_v1.services.datastore_admin.transports.base.DatastoreAdminTransport, typing.Callable[[...], google.cloud.datastore_admin_v1.services.datastore_admin.transports.base.DatastoreAdminTransport]]] = None, client_options: typing.Optional[typing.Union[google.api_core.client_options.ClientOptions, dict]] = None, client_info: google.api_core.gapic_v1.client_info.ClientInfo = <google.api_core.gapic_v1.client_info.ClientInfo object>)
Bases: object
Google Cloud Datastore Admin API
The Datastore Admin API provides several admin services for
Cloud Datastore.
Concepts: Project, namespace, kind, and entity as defined in the
Google Cloud Datastore API.
Operation: An Operation represents work being performed in the
background.
EntityFilter: Allows specifying a subset of entities in a
project. This is specified as a combination of kinds and
namespaces (either or both of which may be all).
Export/Import Service:
The Export/Import service provides the ability to copy all or
a subset of entities to/from Google Cloud Storage.
Exported data may be imported into Cloud Datastore for any
Google Cloud Platform project. It is not restricted to the
export source project. It is possible to export from one
project and then import into another.
Exported data can also be loaded into Google BigQuery for
analysis.
Exports and imports are performed asynchronously. An Operation
resource is created for each export/import. The state
(including any errors encountered) of the export/import may be
queried via the Operation resource.
Index Service:
The index service manages Cloud Datastore composite indexes.
Index creation and deletion are performed asynchronously. An
Operation resource is created for each such asynchronous
operation. The state of the operation (including any errors
encountered) may be queried via the Operation resource.
Operation Service:
The Operations collection provides a record of actions
performed for the specified project (including any operations
in progress). Operations are not created directly but through
calls on other collections or resources.
An operation that is not yet done may be cancelled. The
request to cancel is asynchronous and the operation may
continue to run for some time after the request to cancel is
made.
An operation that is done may be deleted so that it is no
longer listed as part of the Operation collection.
ListOperations returns all pending operations, but not
completed operations.
Operations are created by service DatastoreAdmin, but are
accessed via service google.longrunning.Operations.
Instantiates the datastore admin client.
Parameters
credentials ( Optional [ google.auth.credentials.Credentials ] ) – The
authorization credentials to attach to requests. These
credentials identify the application to the service; if none
are specified, the client will attempt to ascertain the
credentials from the environment.
transport ( Optional [ Union [ str , DatastoreAdminTransport , Callable [ ... , **DatastoreAdminTransport ] ] ] ) – The transport to use, or a Callable that constructs and returns a new transport.
If a Callable is given, it will be called with the same set of initialization
arguments as used in the DatastoreAdminTransport constructor.
If set to None, a transport is chosen automatically.
client_options ( Optional [ Union [ google.api_core.client_options.ClientOptions , *[ dict ]( https://docs.python.org/3/library/stdtypes.html#dict ) ] *] ) – Custom options for the client.
The api_endpoint property can be used to override the
default endpoint provided by the client when transport is
not explicitly provided. Only if this property is not set and
transport was not explicitly provided, the endpoint is
determined by the GOOGLE_API_USE_MTLS_ENDPOINT environment
variable, which have one of the following values:
“always” (always use the default mTLS endpoint), “never” (always
use the default regular endpoint) and “auto” (auto-switch to the
default mTLS endpoint if client certificate is present; this is
the default value).
If the GOOGLE_API_USE_CLIENT_CERTIFICATE environment variable
is “true”, then the client_cert_source property can be used
to provide a client certificate for mTLS transport. If
not provided, the default SSL client certificate will be used if
present. If GOOGLE_API_USE_CLIENT_CERTIFICATE is “false” or not
set, no client certificate will be used.
The universe_domain property can be used to override the
default “googleapis.com” universe. Note that the api_endpoint
property still takes precedence; and universe_domain is
currently not supported for mTLS.
client_info ( google.api_core.gapic_v1.client_info.ClientInfo ) – The client info used to send a user-agent string along with
API requests. If None , then default info will be used.
Generally, you only need to set this if you’re developing
your own client library.
Raises
google.auth.exceptions.MutualTLSChannelError – If mutual TLS transport
creation failed for any reason.
_ exit_ (type, value, traceback)
Releases underlying transport’s resources.
WARNING : ONLY use as a context manager if the transport is NOT shared
with other clients! Exiting the with block will CLOSE the transport
and may cause errors in other clients!
property api_endpoint( : [str]( https://docs.python.org/3/library/stdtypes.html#str )
Return the API endpoint used by the client instance.
Returns
The API endpoint used by the client instance.
Return type
str
cancel_operation(request: Optional [ Union [google.longrunning.operations_pb2.CancelOperationRequest, dict ]] = None, *, retry: Optional [ Union [ google.api_core.retry.retry_unary.Retry , google.api_core.gapic_v1.method._MethodDefault]] = _MethodDefault._DEFAULT_VALUE, timeout: Union [ float , object ] = _MethodDefault._DEFAULT_VALUE, metadata: Sequence [ Tuple [ str , Union [ str , bytes ]]] = ())
Starts asynchronous cancellation on a long-running operation.
The server makes a best effort to cancel the operation, but success
is not guaranteed. If the server doesn’t support this method, it returns
google.rpc.Code.UNIMPLEMENTED.
Parameters
request ( CancelOperationRequest ) – The request object. Request message for
CancelOperation method.
retry ( google.api_core.retry.Retry ) – Designation of what errors,
if any, should be retried.
timeout ( float ) – The timeout for this request.
metadata ( Sequence [ Tuple [ str , **Union [ str , *[ bytes ]( https://docs.python.org/3/library/stdtypes.html#bytes ) ] ] ]*) – Key/value pairs which should be
sent along with the request as metadata. Normally, each value must be of type str,
but for metadata keys ending with the suffix -bin, the corresponding values must
be of type bytes.
Returns
None
static common_billing_account_path(billing_account: str )
Returns a fully-qualified billing_account string.
static common_folder_path(folder: str )
Returns a fully-qualified folder string.
static common_location_path(project: str , location: str )
Returns a fully-qualified location string.
static common_organization_path(organization: str )
Returns a fully-qualified organization string.
static common_project_path(project: str )
Returns a fully-qualified project string.
create_index(request: Optional [ Union [google.cloud.datastore_admin_v1.types.datastore_admin.CreateIndexRequest, dict ]] = None, *, retry: Optional [ Union [ google.api_core.retry.retry_unary.Retry , google.api_core.gapic_v1.method._MethodDefault]] = _MethodDefault._DEFAULT_VALUE, timeout: Union [ float , object ] = _MethodDefault._DEFAULT_VALUE, metadata: Sequence [ Tuple [ str , Union [ str , bytes ]]] = ())
Creates the specified index. A newly created index’s initial
state is CREATING . On completion of the returned
[google.longrunning.Operation][google.longrunning.Operation],
the state will be READY . If the index already exists, the
call will return an ALREADY_EXISTS status.
During index creation, the process could result in an error, in
which case the index will move to the ERROR state. The
process can be recovered by fixing the data that caused the
error, removing the index with
[delete][google.datastore.admin.v1.DatastoreAdmin.DeleteIndex],
then re-creating the index with [create]
[google.datastore.admin.v1.DatastoreAdmin.CreateIndex].
Indexes with a single property cannot be created.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datastore_admin_v1
def sample_create_index():
# Create a client
client = datastore_admin_v1. DatastoreAdminClient ()
# Initialize request argument(s)
request = datastore_admin_v1.CreateIndexRequest(
)
# Make the request
operation = client . create_index (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
request ( Union [ google.cloud.datastore_admin_v1.types.CreateIndexRequest , *[ dict ]( https://docs.python.org/3/library/stdtypes.html#dict ) ]*) – The request object. The request for
[google.datastore.admin.v1.DatastoreAdmin.CreateIndex][google.datastore.admin.v1.DatastoreAdmin.CreateIndex].
retry ( google.api_core.retry.Retry ) – Designation of what errors, if any,
should be retried.
timeout ( float ) – The timeout for this request.
metadata ( Sequence [ Tuple [ str , **Union [ str , *[ bytes ]( https://docs.python.org/3/library/stdtypes.html#bytes ) ] ] ]*) – Key/value pairs which should be
sent along with the request as metadata. Normally, each value must be of type str,
but for metadata keys ending with the suffix -bin, the corresponding values must
be of type bytes.
Returns
An object representing a long-running operation.
The result type for the operation will be
google.cloud.datastore_admin_v1.types.Index
Datastore composite index definition.
Return type
google.api_core.operation.Operation
delete_index(request: Optional [ Union [google.cloud.datastore_admin_v1.types.datastore_admin.DeleteIndexRequest, dict ]] = None, *, retry: Optional [ Union [ google.api_core.retry.retry_unary.Retry , google.api_core.gapic_v1.method._MethodDefault]] = _MethodDefault._DEFAULT_VALUE, timeout: Union [ float , object ] = _MethodDefault._DEFAULT_VALUE, metadata: Sequence [ Tuple [ str , Union [ str , bytes ]]] = ())
Deletes an existing index. An index can only be deleted if it is
in a READY or ERROR state. On successful execution of
the request, the index will be in a DELETING
[state][google.datastore.admin.v1.Index.State]. And on
completion of the returned
[google.longrunning.Operation][google.longrunning.Operation],
the index will be removed.
During index deletion, the process could result in an error, in
which case the index will move to the ERROR state. The
process can be recovered by fixing the data that caused the
error, followed by calling
[delete][google.datastore.admin.v1.DatastoreAdmin.DeleteIndex]
again.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datastore_admin_v1
def sample_delete_index():
# Create a client
client = datastore_admin_v1. DatastoreAdminClient ()
# Initialize request argument(s)
request = datastore_admin_v1.DeleteIndexRequest(
)
# Make the request
operation = client . delete_index (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
request ( Union [ google.cloud.datastore_admin_v1.types.DeleteIndexRequest , *[ dict ]( https://docs.python.org/3/library/stdtypes.html#dict ) ]*) – The request object. The request for
[google.datastore.admin.v1.DatastoreAdmin.DeleteIndex][google.datastore.admin.v1.DatastoreAdmin.DeleteIndex].
retry ( google.api_core.retry.Retry ) – Designation of what errors, if any,
should be retried.
timeout ( float ) – The timeout for this request.
metadata ( Sequence [ Tuple [ str , **Union [ str , *[ bytes ]( https://docs.python.org/3/library/stdtypes.html#bytes ) ] ] ]*) – Key/value pairs which should be
sent along with the request as metadata. Normally, each value must be of type str,
but for metadata keys ending with the suffix -bin, the corresponding values must
be of type bytes.
Returns
An object representing a long-running operation.
The result type for the operation will be
google.cloud.datastore_admin_v1.types.Index
Datastore composite index definition.
Return type
google.api_core.operation.Operation
delete_operation(request: Optional [ Union [google.longrunning.operations_pb2.DeleteOperationRequest, dict ]] = None, *, retry: Optional [ Union [ google.api_core.retry.retry_unary.Retry , google.api_core.gapic_v1.method._MethodDefault]] = _MethodDefault._DEFAULT_VALUE, timeout: Union [ float , object ] = _MethodDefault._DEFAULT_VALUE, metadata: Sequence [ Tuple [ str , Union [ str , bytes ]]] = ())
Deletes a long-running operation.
This method indicates that the client is no longer interested
in the operation result. It does not cancel the operation.
If the server doesn’t support this method, it returns
google.rpc.Code.UNIMPLEMENTED.
Parameters
request ( DeleteOperationRequest ) – The request object. Request message for
DeleteOperation method.
retry ( google.api_core.retry.Retry ) – Designation of what errors,
if any, should be retried.
timeout ( float ) – The timeout for this request.
metadata ( Sequence [ Tuple [ str , **Union [ str , *[ bytes ]( https://docs.python.org/3/library/stdtypes.html#bytes ) ] ] ]*) – Key/value pairs which should be
sent along with the request as metadata. Normally, each value must be of type str,
but for metadata keys ending with the suffix -bin, the corresponding values must
be of type bytes.
Returns
None
export_entities(request: Optional [ Union [google.cloud.datastore_admin_v1.types.datastore_admin.ExportEntitiesRequest, dict ]] = None, *, project_id: Optional [ str ] = None, labels: Optional [ MutableMapping [ str , str ]] = None, entity_filter: Optional [google.cloud.datastore_admin_v1.types.datastore_admin.EntityFilter] = None, output_url_prefix: Optional [ str ] = None, retry: Optional [ Union [ google.api_core.retry.retry_unary.Retry , google.api_core.gapic_v1.method._MethodDefault]] = _MethodDefault._DEFAULT_VALUE, timeout: Union [ float , object ] = _MethodDefault._DEFAULT_VALUE, metadata: Sequence [ Tuple [ str , Union [ str , bytes ]]] = ())
Exports a copy of all or a subset of entities from
Google Cloud Datastore to another storage system, such
as Google Cloud Storage. Recent updates to entities may
not be reflected in the export. The export occurs in the
background and its progress can be monitored and managed
via the Operation resource that is created. The output
of an export may only be used once the associated
operation is done. If an export operation is cancelled
before completion it may leave partial data behind in
Google Cloud Storage.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datastore_admin_v1
def sample_export_entities():
# Create a client
client = datastore_admin_v1. DatastoreAdminClient ()
# Initialize request argument(s)
request = datastore_admin_v1.ExportEntitiesRequest(
project_id="project_id_value",
output_url_prefix="output_url_prefix_value",
)
# Make the request
operation = client . export_entities (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
request ( Union [ google.cloud.datastore_admin_v1.types.ExportEntitiesRequest , *[ dict ]( https://docs.python.org/3/library/stdtypes.html#dict ) ]*) – The request object. The request for
[google.datastore.admin.v1.DatastoreAdmin.ExportEntities][google.datastore.admin.v1.DatastoreAdmin.ExportEntities].
project_id ( str ) – Required. Project ID against which to
make the request.
This corresponds to the project_id field
on the request instance; if request is provided, this
should not be set.
labels ( MutableMapping [ str , *[ str ]( https://docs.python.org/3/library/stdtypes.html#str ) ]*) – Client-assigned labels.
This corresponds to the labels field
on the request instance; if request is provided, this
should not be set.
entity_filter ( google.cloud.datastore_admin_v1.types.EntityFilter ) – Description of what data from the
project is included in the export.
This corresponds to the entity_filter field
on the request instance; if request is provided, this
should not be set.
output_url_prefix ( str ) – Required. Location for the export metadata and data
files.
The full resource URL of the external storage location.
Currently, only Google Cloud Storage is supported. So
output_url_prefix should be of the form:
gs://BUCKET_NAME[/NAMESPACE_PATH] , where
BUCKET_NAME is the name of the Cloud Storage bucket
and NAMESPACE_PATH is an optional Cloud Storage
namespace path (this is not a Cloud Datastore
namespace). For more information about Cloud Storage
namespace paths, see Object name
considerations .
The resulting files will be nested deeper than the
specified URL prefix. The final output URL will be
provided in the
[google.datastore.admin.v1.ExportEntitiesResponse.output_url][google.datastore.admin.v1.ExportEntitiesResponse.output_url]
field. That value should be used for subsequent
ImportEntities operations.
By nesting the data files deeper, the same Cloud Storage
bucket can be used in multiple ExportEntities operations
without conflict.
This corresponds to the output_url_prefix field
on the request instance; if request is provided, this
should not be set.
retry ( google.api_core.retry.Retry ) – Designation of what errors, if any,
should be retried.
timeout ( float ) – The timeout for this request.
metadata ( Sequence [ Tuple [ str , **Union [ str , *[ bytes ]( https://docs.python.org/3/library/stdtypes.html#bytes ) ] ] ]*) – Key/value pairs which should be
sent along with the request as metadata. Normally, each value must be of type str,
but for metadata keys ending with the suffix -bin, the corresponding values must
be of type bytes.
Returns
An object representing a long-running operation.
The result type for the operation will be google.cloud.datastore_admin_v1.types.ExportEntitiesResponse The response for
[google.datastore.admin.v1.DatastoreAdmin.ExportEntities][google.datastore.admin.v1.DatastoreAdmin.ExportEntities].
Return type
google.api_core.operation.Operation
classmethod from_service_account_file(filename: str , *args, **kwargs)
Creates an instance of this client using the provided credentials
file.
Parameters
filename ( str ) – The path to the service account private key json
file.
args – Additional arguments to pass to the constructor.
kwargs – Additional arguments to pass to the constructor.
Returns
The constructed client.
Return type
DatastoreAdminClient
classmethod from_service_account_info(info: dict , *args, **kwargs)
Creates an instance of this client using the provided credentials
info.
Parameters
info ( dict ) – The service account private key info.
args – Additional arguments to pass to the constructor.
kwargs – Additional arguments to pass to the constructor.
Returns
The constructed client.
Return type
DatastoreAdminClient
classmethod from_service_account_json(filename: str , *args, **kwargs)
Creates an instance of this client using the provided credentials
file.
Parameters
filename ( str ) – The path to the service account private key json
file.
args – Additional arguments to pass to the constructor.
kwargs – Additional arguments to pass to the constructor.
Returns
The constructed client.
Return type
DatastoreAdminClient
get_index(request: Optional [ Union [google.cloud.datastore_admin_v1.types.datastore_admin.GetIndexRequest, dict ]] = None, *, retry: Optional [ Union [ google.api_core.retry.retry_unary.Retry , google.api_core.gapic_v1.method._MethodDefault]] = _MethodDefault._DEFAULT_VALUE, timeout: Union [ float , object ] = _MethodDefault._DEFAULT_VALUE, metadata: Sequence [ Tuple [ str , Union [ str , bytes ]]] = ())
Gets an index.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datastore_admin_v1
def sample_get_index():
# Create a client
client = datastore_admin_v1. DatastoreAdminClient ()
# Initialize request argument(s)
request = datastore_admin_v1.GetIndexRequest(
)
# Make the request
response = client . get_index (request=request)
# Handle the response
print(response)
Parameters
request ( Union [ google.cloud.datastore_admin_v1.types.GetIndexRequest , *[ dict ]( https://docs.python.org/3/library/stdtypes.html#dict ) ]*) – The request object. The request for
[google.datastore.admin.v1.DatastoreAdmin.GetIndex][google.datastore.admin.v1.DatastoreAdmin.GetIndex].
retry ( google.api_core.retry.Retry ) – Designation of what errors, if any,
should be retried.
timeout ( float ) – The timeout for this request.
metadata ( Sequence [ Tuple [ str , **Union [ str , *[ bytes ]( https://docs.python.org/3/library/stdtypes.html#bytes ) ] ] ]*) – Key/value pairs which should be
sent along with the request as metadata. Normally, each value must be of type str,
but for metadata keys ending with the suffix -bin, the corresponding values must
be of type bytes.
Returns
Datastore composite index definition.
Return type
google.cloud.datastore_admin_v1.types.Index
classmethod get_mtls_endpoint_and_cert_source(client_options: Optional [ google.api_core.client_options.ClientOptions ] = None)
Deprecated. Return the API endpoint and client cert source for mutual TLS.
The client cert source is determined in the following order:
(1) if GOOGLE_API_USE_CLIENT_CERTIFICATE environment variable is not “true”, the
client cert source is None.
(2) if client_options.client_cert_source is provided, use the provided one; if the
default client cert source exists, use the default one; otherwise the client cert
source is None.
The API endpoint is determined in the following order:
(1) if client_options.api_endpoint if provided, use the provided one.
(2) if GOOGLE_API_USE_CLIENT_CERTIFICATE environment variable is “always”, use the
default mTLS endpoint; if the environment variable is “never”, use the default API
endpoint; otherwise if client cert source exists, use the default mTLS endpoint, otherwise
use the default API endpoint.
More details can be found at https://google.aip.dev/auth/4114 .
Parameters
client_options ( google.api_core.client_options.ClientOptions ) – Custom options for the
client. Only the api_endpoint and client_cert_source properties may be used
in this method.
Returns
returns the API endpoint and the
client cert source to use.
Return type
Tuple[ str , Callable[[], Tuple[ bytes , bytes ]]]
Raises
google.auth.exceptions.MutualTLSChannelError – If any errors happen.
get_operation(request: Optional [ Union [google.longrunning.operations_pb2.GetOperationRequest, dict ]] = None, *, retry: Optional [ Union [ google.api_core.retry.retry_unary.Retry , google.api_core.gapic_v1.method._MethodDefault]] = _MethodDefault._DEFAULT_VALUE, timeout: Union [ float , object ] = _MethodDefault._DEFAULT_VALUE, metadata: Sequence [ Tuple [ str , Union [ str , bytes ]]] = ())
Gets the latest state of a long-running operation.
Parameters
request ( GetOperationRequest ) – The request object. Request message for
GetOperation method.
retry ( google.api_core.retry.Retry ) – Designation of what errors,
if any, should be retried.
timeout ( float ) – The timeout for this request.
metadata ( Sequence [ Tuple [ str , **Union [ str , *[ bytes ]( https://docs.python.org/3/library/stdtypes.html#bytes ) ] ] ]*) – Key/value pairs which should be
sent along with the request as metadata. Normally, each value must be of type str,
but for metadata keys ending with the suffix -bin, the corresponding values must
be of type bytes.
Returns
An Operation object.
Return type
Operation
import_entities(request: Optional [ Union [google.cloud.datastore_admin_v1.types.datastore_admin.ImportEntitiesRequest, dict ]] = None, *, project_id: Optional [ str ] = None, labels: Optional [ MutableMapping [ str , str ]] = None, input_url: Optional [ str ] = None, entity_filter: Optional [google.cloud.datastore_admin_v1.types.datastore_admin.EntityFilter] = None, retry: Optional [ Union [ google.api_core.retry.retry_unary.Retry , google.api_core.gapic_v1.method._MethodDefault]] = _MethodDefault._DEFAULT_VALUE, timeout: Union [ float , object ] = _MethodDefault._DEFAULT_VALUE, metadata: Sequence [ Tuple [ str , Union [ str , bytes ]]] = ())
Imports entities into Google Cloud Datastore.
Existing entities with the same key are overwritten. The
import occurs in the background and its progress can be
monitored and managed via the Operation resource that is
created. If an ImportEntities operation is cancelled, it
is possible that a subset of the data has already been
imported to Cloud Datastore.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datastore_admin_v1
def sample_import_entities():
# Create a client
client = datastore_admin_v1. DatastoreAdminClient ()
# Initialize request argument(s)
request = datastore_admin_v1.ImportEntitiesRequest(
project_id="project_id_value",
input_url="input_url_value",
)
# Make the request
operation = client . import_entities (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
request ( Union [ google.cloud.datastore_admin_v1.types.ImportEntitiesRequest , *[ dict ]( https://docs.python.org/3/library/stdtypes.html#dict ) ]*) – The request object. The request for
[google.datastore.admin.v1.DatastoreAdmin.ImportEntities][google.datastore.admin.v1.DatastoreAdmin.ImportEntities].
project_id ( str ) – Required. Project ID against which to
make the request.
This corresponds to the project_id field
on the request instance; if request is provided, this
should not be set.
labels ( MutableMapping [ str , *[ str ]( https://docs.python.org/3/library/stdtypes.html#str ) ]*) – Client-assigned labels.
This corresponds to the labels field
on the request instance; if request is provided, this
should not be set.
input_url ( str ) – Required. The full resource URL of the external storage
location. Currently, only Google Cloud Storage is
supported. So input_url should be of the form:
gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE ,
where BUCKET_NAME is the name of the Cloud Storage
bucket, NAMESPACE_PATH is an optional Cloud Storage
namespace path (this is not a Cloud Datastore
namespace), and OVERALL_EXPORT_METADATA_FILE is the
metadata file written by the ExportEntities operation.
For more information about Cloud Storage namespace
paths, see Object name
considerations .
For more information, see
[google.datastore.admin.v1.ExportEntitiesResponse.output_url][google.datastore.admin.v1.ExportEntitiesResponse.output_url].
This corresponds to the input_url field
on the request instance; if request is provided, this
should not be set.
entity_filter ( google.cloud.datastore_admin_v1.types.EntityFilter ) – Optionally specify which kinds/namespaces are to be
imported. If provided, the list must be a subset of the
EntityFilter used in creating the export, otherwise a
FAILED_PRECONDITION error will be returned. If no filter
is specified then all entities from the export are
imported.
This corresponds to the entity_filter field
on the request instance; if request is provided, this
should not be set.
retry ( google.api_core.retry.Retry ) – Designation of what errors, if any,
should be retried.
timeout ( float ) – The timeout for this request.
metadata ( Sequence [ Tuple [ str , **Union [ str , *[ bytes ]( https://docs.python.org/3/library/stdtypes.html#bytes ) ] ] ]*) – Key/value pairs which should be
sent along with the request as metadata. Normally, each value must be of type str,
but for metadata keys ending with the suffix -bin, the corresponding values must
be of type bytes.
Returns
An object representing a long-running operation.
The result type for the operation will be google.protobuf.empty_pb2.Empty A generic empty message that you can re-use to avoid defining duplicated
empty messages in your APIs. A typical example is to
use it as the request or the response type of an API
method. For instance:
> service Foo {
> rpc Bar(google.protobuf.Empty) returns
> (google.protobuf.Empty);
> }
Return type
google.api_core.operation.Operation
list_indexes(request: Optional [ Union [google.cloud.datastore_admin_v1.types.datastore_admin.ListIndexesRequest, dict ]] = None, *, retry: Optional [ Union [ google.api_core.retry.retry_unary.Retry , google.api_core.gapic_v1.method._MethodDefault]] = _MethodDefault._DEFAULT_VALUE, timeout: Union [ float , object ] = _MethodDefault._DEFAULT_VALUE, metadata: Sequence [ Tuple [ str , Union [ str , bytes ]]] = ())
Lists the indexes that match the specified filters.
Datastore uses an eventually consistent query to fetch
the list of indexes and may occasionally return stale
results.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datastore_admin_v1
def sample_list_indexes():
# Create a client
client = datastore_admin_v1. DatastoreAdminClient ()
# Initialize request argument(s)
request = datastore_admin_v1.ListIndexesRequest(
)
# Make the request
page_result = client . list_indexes (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
request ( Union [ google.cloud.datastore_admin_v1.types.ListIndexesRequest , *[ dict ]( https://docs.python.org/3/library/stdtypes.html#dict ) ]*) – The request object. The request for
[google.datastore.admin.v1.DatastoreAdmin.ListIndexes][google.datastore.admin.v1.DatastoreAdmin.ListIndexes].
retry ( google.api_core.retry.Retry ) – Designation of what errors, if any,
should be retried.
timeout ( float ) – The timeout for this request.
metadata ( Sequence [ Tuple [ str , **Union [ str , *[ bytes ]( https://docs.python.org/3/library/stdtypes.html#bytes ) ] ] ]*) – Key/value pairs which should be
sent along with the request as metadata. Normally, each value must be of type str,
but for metadata keys ending with the suffix -bin, the corresponding values must
be of type bytes.
Returns
The response for
[google.datastore.admin.v1.DatastoreAdmin.ListIndexes][google.datastore.admin.v1.DatastoreAdmin.ListIndexes].
Iterating over this object will yield results and
resolve additional pages automatically.
Return type
google.cloud.datastore_admin_v1.services.datastore_admin.pagers.ListIndexesPager
list_operations(request: Optional [ Union [google.longrunning.operations_pb2.ListOperationsRequest, dict ]] = None, *, retry: Optional [ Union [ google.api_core.retry.retry_unary.Retry , google.api_core.gapic_v1.method._MethodDefault]] = _MethodDefault._DEFAULT_VALUE, timeout: Union [ float , object ] = _MethodDefault._DEFAULT_VALUE, metadata: Sequence [ Tuple [ str , Union [ str , bytes ]]] = ())
Lists operations that match the specified filter in the request.
Parameters
request ( ListOperationsRequest ) – The request object. Request message for
ListOperations method.
retry ( google.api_core.retry.Retry ) – Designation of what errors,
if any, should be retried.
timeout ( float ) – The timeout for this request.
metadata ( Sequence [ Tuple [ str , **Union [ str , *[ bytes ]( https://docs.python.org/3/library/stdtypes.html#bytes ) ] ] ]*) – Key/value pairs which should be
sent along with the request as metadata. Normally, each value must be of type str,
but for metadata keys ending with the suffix -bin, the corresponding values must
be of type bytes.
Returns
Response message for ListOperations method.
Return type
ListOperationsResponse
static parse_common_billing_account_path(path: str )
Parse a billing_account path into its component segments.
static parse_common_folder_path(path: str )
Parse a folder path into its component segments.
static parse_common_location_path(path: str )
Parse a location path into its component segments.
static parse_common_organization_path(path: str )
Parse a organization path into its component segments.
static parse_common_project_path(path: str )
Parse a project path into its component segments.
property transport( : google.cloud.datastore_admin_v1.services.datastore_admin.transports.base.DatastoreAdminTranspor )
Returns the transport used by the client instance.
Returns
The transport used by the client
instance.
Return type
DatastoreAdminTransport
property universe_domain( : [str]( https://docs.python.org/3/library/stdtypes.html#str )
Return the universe domain used by the client instance.
Returns
The universe domain used by the client instance.
Return type
str
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
