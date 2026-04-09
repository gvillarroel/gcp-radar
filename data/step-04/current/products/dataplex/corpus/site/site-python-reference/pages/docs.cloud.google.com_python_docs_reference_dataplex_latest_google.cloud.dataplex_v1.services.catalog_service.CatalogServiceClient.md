---
title: "Class CatalogServiceClient (2.16.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.catalog_service.CatalogServiceClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dataplex/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.catalog_service.CatalogServiceClient
  title: "Class CatalogServiceClient (2.16.0) \_|\_ Python client libraries \_|\_\
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
Class CatalogServiceClient (2.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.16.0 (latest)
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.2
2.9.0
2.8.0
2.7.1
2.6.0
2.5.0
2.4.0
2.3.1
2.2.2
2.1.0
2.0.1
1.13.0
1.12.3
1.11.0
1.10.0
1.9.0
1.8.1
1.7.0
1.6.2
1.5.1
1.4.3
1.3.0
1.2.0
1.1.3
1.0.1
0.2.1
0.1.0
CatalogServiceClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . dataplex_v1 . services . catalog_service . transports . base . CatalogServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . dataplex_v1 . services . catalog_service . transports . base . CatalogServiceTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
The primary resources offered by this service are
EntryGroups, EntryTypes, AspectTypes, Entries and EntryLinks.
They collectively let data administrators organize, manage,
secure, and catalog data located across cloud projects in their
organization in a variety of storage systems, including Cloud
Storage and BigQuery.
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
CatalogServiceTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
CatalogServiceClient
CatalogServiceClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . dataplex_v1 . services . catalog_service . transports . base . CatalogServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . dataplex_v1 . services . catalog_service . transports . base . CatalogServiceTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the catalog service client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,CatalogServiceTransport,Callable[..., CatalogServiceTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the CatalogServiceTransport constructor. If set to None, a transport is chosen automatically.
client_options
Optional[Union[google.api_core.client_options.ClientOptions, dict]]
Custom options for the client. 1. The api_endpoint property can be used to override the default endpoint provided by the client when transport is not explicitly provided. Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE_API_USE_MTLS_ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value). 2. If the GOOGLE_API_USE_CLIENT_CERTIFICATE environment variable is "true", then the client_cert_source property can be used to provide a client certificate for mTLS transport. If not provided, the default SSL client certificate will be used if present. If GOOGLE_API_USE_CLIENT_CERTIFICATE is "false" or not set, no client certificate will be used. 3. The universe_domain property can be used to override the default "googleapis.com" universe. Note that the api_endpoint property still takes precedence; and universe_domain is currently not supported for mTLS.
client_info
google.api_core.gapic_v1.client_info.ClientInfo
The client info used to send a user-agent string along with API requests. If None , then default info will be used. Generally, you only need to set this if you're developing your own client library.
Exceptions
Type
Description
google.auth.exceptions.MutualTLSChannelError
If mutual TLS transport creation failed for any reason.
__exit__
__exit__ ( type , value , traceback )
Releases underlying transport's resources.
Warning:
ONLY use as a context manager if the transport is NOT shared
with other clients! Exiting the with block will CLOSE the transport
and may cause errors in other clients!
aspect_type_path
aspect_type_path ( project : str , location : str , aspect_type : str ) - > str
Returns a fully-qualified aspect_type string.
cancel_metadata_job
cancel_metadata_job (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . CancelMetadataJobRequest , dict
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
Cancels a metadata job.
If you cancel a metadata import job that is in progress,
the changes in the job might be partially applied. We
recommend that you reset the state of the entry groups
in your project by running another metadata job that
reverts the changes from the canceled job.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_cancel_metadata_job():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . CancelMetadataJobRequest (
name="name_value",
)
# Make the request
client. cancel_metadata_job (request=request)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.CancelMetadataJobRequest , dict]
The request object. Cancel metadata job request.
name
str
Required. The resource name of the job, in the format projects/{project_id_or_number}/locations/{location_id}/metadataJobs/{metadata_job_id} This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
cancel_operation
cancel_operation (
request : typing . Optional [
google . longrunning . operations_pb2 . CancelOperationRequest
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
google.api_core.retry.Retry
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
create_aspect_type
create_aspect_type (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . CreateAspectTypeRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
aspect_type : typing . Optional [
google . cloud . dataplex_v1 . types . catalog . AspectType
] = None ,
aspect_type_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Creates an AspectType.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_create_aspect_type():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
aspect_type = dataplex_v1 . AspectType ()
aspect_type.metadata_template.name = "name_value"
aspect_type.metadata_template.type_ = "type__value"
request = dataplex_v1 . CreateAspectTypeRequest (
parent="parent_value",
aspect_type_id="aspect_type_id_value",
aspect_type=aspect_type,
)
# Make the request
operation = client. create_aspect_type (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.CreateAspectTypeRequest , dict]
The request object. Create AspectType Request.
parent
str
Required. The resource name of the AspectType, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
aspect_type
google.cloud.dataplex_v1.types.AspectType
Required. AspectType Resource. This corresponds to the aspect_type field on the request instance; if request is provided, this should not be set.
aspect_type_id
str
Required. AspectType identifier. This corresponds to the aspect_type_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be AspectType AspectType is a template for creating Aspects, and represents the JSON-schema for a given Entry, for example, BigQuery Table Schema.
create_entry
create_entry (
request : typing . Optional [
typing . Union [ google . cloud . dataplex_v1 . types . catalog . CreateEntryRequest , dict ]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
entry : typing . Optional [ google . cloud . dataplex_v1 . types . catalog . Entry ] = None ,
entry_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataplex_v1 . types . catalog . Entry
Creates an Entry.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_create_entry():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
entry = dataplex_v1 . Entry ()
entry.entry_type = "entry_type_value"
request = dataplex_v1 . CreateEntryRequest (
parent="parent_value",
entry_id="entry_id_value",
entry=entry,
)
# Make the request
response = client. create_entry (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.CreateEntryRequest , dict]
The request object. Create Entry request.
parent
str
Required. The resource name of the parent Entry Group: projects/{project}/locations/{location}/entryGroups/{entry_group} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
entry
google.cloud.dataplex_v1.types.Entry
Required. Entry resource. This corresponds to the entry field on the request instance; if request is provided, this should not be set.
entry_id
str
Required. Entry identifier. It has to be unique within an Entry Group. Entries corresponding to Google Cloud resources use an Entry ID format based on full resource names https://cloud.google.com/apis/design/resource_names#full_resource_name __. The format is a full resource name of the resource without the prefix double slashes in the API service name part of the full resource name. This allows retrieval of entries using their associated resource name. For example, if the full resource name of a resource is //library.googleapis.com/shelves/shelf1/books/book2 , then the suggested entry_id is library.googleapis.com/shelves/shelf1/books/book2 . It is also suggested to follow the same convention for entries corresponding to resources from providers or systems other than Google Cloud. The maximum size of the field is 4000 characters. This corresponds to the entry_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.Entry
An entry is a representation of a data resource that can be described by various metadata.
create_entry_group
create_entry_group (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . CreateEntryGroupRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
entry_group : typing . Optional [
google . cloud . dataplex_v1 . types . catalog . EntryGroup
] = None ,
entry_group_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Creates an EntryGroup.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_create_entry_group():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . CreateEntryGroupRequest (
parent="parent_value",
entry_group_id="entry_group_id_value",
)
# Make the request
operation = client. create_entry_group (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.CreateEntryGroupRequest , dict]
The request object. Create EntryGroup Request.
parent
str
Required. The resource name of the entryGroup, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
entry_group
google.cloud.dataplex_v1.types.EntryGroup
Required. EntryGroup Resource. This corresponds to the entry_group field on the request instance; if request is provided, this should not be set.
entry_group_id
str
Required. EntryGroup identifier. This corresponds to the entry_group_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be EntryGroup An Entry Group represents a logical grouping of one or more Entries.
create_entry_link
create_entry_link (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . CreateEntryLinkRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
entry_link : typing . Optional [
google . cloud . dataplex_v1 . types . catalog . EntryLink
] = None ,
entry_link_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataplex_v1 . types . catalog . EntryLink
Creates an Entry Link.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_create_entry_link():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
entry_link = dataplex_v1 . EntryLink ()
entry_link.entry_link_type = "entry_link_type_value"
entry_link.entry_references.name = "name_value"
entry_link.entry_references.type_ = "TARGET"
request = dataplex_v1 . CreateEntryLinkRequest (
parent="parent_value",
entry_link_id="entry_link_id_value",
entry_link=entry_link,
)
# Make the request
response = client. create_entry_link (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.CreateEntryLinkRequest , dict]
The request object. Request message for CreateEntryLink.
parent
str
Required. The resource name of the parent Entry Group: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
entry_link
google.cloud.dataplex_v1.types.EntryLink
Required. Entry Link resource. This corresponds to the entry_link field on the request instance; if request is provided, this should not be set.
entry_link_id
str
Required. Entry Link identifier - Must contain only lowercase letters, numbers and hyphens. - Must start with a letter. - Must be between 1-63 characters. - Must end with a number or a letter. - Must be unique within the EntryGroup. This corresponds to the entry_link_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.EntryLink
EntryLink represents a link between two Entries.
create_entry_type
create_entry_type (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . CreateEntryTypeRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
entry_type : typing . Optional [
google . cloud . dataplex_v1 . types . catalog . EntryType
] = None ,
entry_type_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Creates an EntryType.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_create_entry_type():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . CreateEntryTypeRequest (
parent="parent_value",
entry_type_id="entry_type_id_value",
)
# Make the request
operation = client. create_entry_type (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.CreateEntryTypeRequest , dict]
The request object. Create EntryType Request.
parent
str
Required. The resource name of the EntryType, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
entry_type
google.cloud.dataplex_v1.types.EntryType
Required. EntryType Resource. This corresponds to the entry_type field on the request instance; if request is provided, this should not be set.
entry_type_id
str
Required. EntryType identifier. This corresponds to the entry_type_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be EntryType Entry Type is a template for creating Entries.
create_metadata_job
create_metadata_job (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . CreateMetadataJobRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
metadata_job : typing . Optional [
google . cloud . dataplex_v1 . types . catalog . MetadataJob
] = None ,
metadata_job_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Creates a metadata job. For example, use a metadata
job to import metadata from a third-party system into
Dataplex Universal Catalog.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_create_metadata_job():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
metadata_job = dataplex_v1 . MetadataJob ()
metadata_job.import_spec.scope.entry_groups = ['entry_groups_value1', 'entry_groups_value2']
metadata_job.import_spec.scope.entry_types = ['entry_types_value1', 'entry_types_value2']
metadata_job.import_spec.entry_sync_mode = "NONE"
metadata_job.import_spec.aspect_sync_mode = "NONE"
metadata_job.type_ = "EXPORT"
request = dataplex_v1 . CreateMetadataJobRequest (
parent="parent_value",
metadata_job=metadata_job,
)
# Make the request
operation = client. create_metadata_job (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.CreateMetadataJobRequest , dict]
The request object. Create metadata job request.
parent
str
Required. The resource name of the parent location, in the format projects/{project_id_or_number}/locations/{location_id} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
metadata_job
google.cloud.dataplex_v1.types.MetadataJob
Required. The metadata job resource. This corresponds to the metadata_job field on the request instance; if request is provided, this should not be set.
metadata_job_id
str
Optional. The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job- . This corresponds to the metadata_job_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be MetadataJob A metadata job resource.
delete_aspect_type
delete_aspect_type (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . DeleteAspectTypeRequest , dict
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
Deletes an AspectType.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_delete_aspect_type():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . DeleteAspectTypeRequest (
name="name_value",
)
# Make the request
operation = client. delete_aspect_type (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.DeleteAspectTypeRequest , dict]
The request object. Delete AspectType Request.
name
str
Required. The resource name of the AspectType: projects/{project_number}/locations/{location_id}/aspectTypes/{aspect_type_id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be google.protobuf.empty_pb2.Empty A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
delete_entry
delete_entry (
request : typing . Optional [
typing . Union [ google . cloud . dataplex_v1 . types . catalog . DeleteEntryRequest , dict ]
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
) - > google . cloud . dataplex_v1 . types . catalog . Entry
Deletes an Entry.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_delete_entry():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . DeleteEntryRequest (
name="name_value",
)
# Make the request
response = client. delete_entry (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.DeleteEntryRequest , dict]
The request object. Delete Entry request.
name
str
Required. The resource name of the Entry: projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.Entry
An entry is a representation of a data resource that can be described by various metadata.
delete_entry_group
delete_entry_group (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . DeleteEntryGroupRequest , dict
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
Deletes an EntryGroup.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_delete_entry_group():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . DeleteEntryGroupRequest (
name="name_value",
)
# Make the request
operation = client. delete_entry_group (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.DeleteEntryGroupRequest , dict]
The request object. Delete EntryGroup Request.
name
str
Required. The resource name of the EntryGroup: projects/{project_number}/locations/{location_id}/entryGroups/{entry_group_id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be google.protobuf.empty_pb2.Empty A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
delete_entry_link
delete_entry_link (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . DeleteEntryLinkRequest , dict
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
) - > google . cloud . dataplex_v1 . types . catalog . EntryLink
Deletes an Entry Link.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_delete_entry_link():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . DeleteEntryLinkRequest (
name="name_value",
)
# Make the request
response = client. delete_entry_link (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.DeleteEntryLinkRequest , dict]
The request object. Request message for DeleteEntryLink.
name
str
Required. The resource name of the Entry Link: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entryLinks/{entry_link_id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.EntryLink
EntryLink represents a link between two Entries.
delete_entry_type
delete_entry_type (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . DeleteEntryTypeRequest , dict
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
Deletes an EntryType.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_delete_entry_type():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . DeleteEntryTypeRequest (
name="name_value",
)
# Make the request
operation = client. delete_entry_type (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.DeleteEntryTypeRequest , dict]
The request object. Delete EntryType Request.
name
str
Required. The resource name of the EntryType: projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be google.protobuf.empty_pb2.Empty A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
delete_operation
delete_operation (
request : typing . Optional [
google . longrunning . operations_pb2 . DeleteOperationRequest
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
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
entry_group_path
entry_group_path ( project : str , location : str , entry_group : str ) - > str
Returns a fully-qualified entry_group string.
entry_link_path
entry_link_path (
project : str , location : str , entry_group : str , entry_link : str
) - > str
Returns a fully-qualified entry_link string.
entry_path
entry_path ( project : str , location : str , entry_group : str , entry : str ) - > str
Returns a fully-qualified entry string.
entry_type_path
entry_type_path ( project : str , location : str , entry_type : str ) - > str
Returns a fully-qualified entry_type string.
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
CatalogServiceClient
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
CatalogServiceClient
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
CatalogServiceClient
The constructed client.
get_aspect_type
get_aspect_type (
request : typing . Optional [
typing . Union [ google . cloud . dataplex_v1 . types . catalog . GetAspectTypeRequest , dict ]
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
) - > google . cloud . dataplex_v1 . types . catalog . AspectType
Gets an AspectType.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_get_aspect_type():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . GetAspectTypeRequest (
name="name_value",
)
# Make the request
response = client. get_aspect_type (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.GetAspectTypeRequest , dict]
The request object. Get AspectType request.
name
str
Required. The resource name of the AspectType: projects/{project_number}/locations/{location_id}/aspectTypes/{aspect_type_id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.AspectType
AspectType is a template for creating Aspects, and represents the JSON-schema for a given Entry, for example, BigQuery Table Schema.
get_entry
get_entry (
request : typing . Optional [
typing . Union [ google . cloud . dataplex_v1 . types . catalog . GetEntryRequest , dict ]
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
) - > google . cloud . dataplex_v1 . types . catalog . Entry
Gets an Entry. Caution: The Vertex AI, Bigtable, Spanner,
Pub/Sub, Dataform, and Dataproc Metastore metadata that is
stored in Dataplex Universal Catalog is changing. For more
information, see Changes to metadata stored in Dataplex
Universal
Catalog <https://cloud.google.com/dataplex/docs/metadata-changes> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_get_entry():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . GetEntryRequest (
name="name_value",
)
# Make the request
response = client. get_entry (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.GetEntryRequest , dict]
The request object. Get Entry request.
name
str
Required. The resource name of the Entry: projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.Entry
An entry is a representation of a data resource that can be described by various metadata.
get_entry_group
get_entry_group (
request : typing . Optional [
typing . Union [ google . cloud . dataplex_v1 . types . catalog . GetEntryGroupRequest , dict ]
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
) - > google . cloud . dataplex_v1 . types . catalog . EntryGroup
Gets an EntryGroup.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_get_entry_group():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . GetEntryGroupRequest (
name="name_value",
)
# Make the request
response = client. get_entry_group (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.GetEntryGroupRequest , dict]
The request object. Get EntryGroup request.
name
str
Required. The resource name of the EntryGroup: projects/{project_number}/locations/{location_id}/entryGroups/{entry_group_id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.EntryGroup
An Entry Group represents a logical grouping of one or more Entries.
get_entry_link
get_entry_link (
request : typing . Optional [
typing . Union [ google . cloud . dataplex_v1 . types . catalog . GetEntryLinkRequest , dict ]
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
) - > google . cloud . dataplex_v1 . types . catalog . EntryLink
Gets an Entry Link.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_get_entry_link():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . GetEntryLinkRequest (
name="name_value",
)
# Make the request
response = client. get_entry_link (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.GetEntryLinkRequest , dict]
The request object. Request message for GetEntryLink.
name
str
Required. The resource name of the Entry Link: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entryLinks/{entry_link_id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.EntryLink
EntryLink represents a link between two Entries.
get_entry_type
get_entry_type (
request : typing . Optional [
typing . Union [ google . cloud . dataplex_v1 . types . catalog . GetEntryTypeRequest , dict ]
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
) - > google . cloud . dataplex_v1 . types . catalog . EntryType
Gets an EntryType.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_get_entry_type():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . GetEntryTypeRequest (
name="name_value",
)
# Make the request
response = client. get_entry_type (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.GetEntryTypeRequest , dict]
The request object. Get EntryType request.
name
str
Required. The resource name of the EntryType: projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.EntryType
Entry Type is a template for creating Entries.
get_location
get_location (
request : typing . Optional [
google . cloud . location . locations_pb2 . GetLocationRequest
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
) - > google . cloud . location . locations_pb2 . Location
Gets information about a location.
Parameters
Name
Description
request
.location_pb2.GetLocationRequest
The request object. Request message for GetLocation method.
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
.location_pb2.Location
Location object.
get_metadata_job
get_metadata_job (
request : typing . Optional [
typing . Union [ google . cloud . dataplex_v1 . types . catalog . GetMetadataJobRequest , dict ]
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
) - > google . cloud . dataplex_v1 . types . catalog . MetadataJob
Gets a metadata job.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_get_metadata_job():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . GetMetadataJobRequest (
name="name_value",
)
# Make the request
response = client. get_metadata_job (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.GetMetadataJobRequest , dict]
The request object. Get metadata job request.
name
str
Required. The resource name of the metadata job, in the format projects/{project_id_or_number}/locations/{location_id}/metadataJobs/{metadata_job_id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.MetadataJob
A metadata job resource.
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
get_operation
get_operation (
request : typing . Optional [
google . longrunning . operations_pb2 . GetOperationRequest
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
) - > google . longrunning . operations_pb2 . Operation
Gets the latest state of a long-running operation.
Parameters
Name
Description
request
.operations_pb2.GetOperationRequest
The request object. Request message for GetOperation method.
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
.operations_pb2.Operation
An Operation object.
glossary_path
glossary_path ( project : str , location : str , glossary : str ) - > str
Returns a fully-qualified glossary string.
list_aspect_types
list_aspect_types (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . ListAspectTypesRequest , dict
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
) - > google . cloud . dataplex_v1 . services . catalog_service . pagers . ListAspectTypesPager
Lists AspectType resources in a project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_list_aspect_types():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . ListAspectTypesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_aspect_types (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.ListAspectTypesRequest , dict]
The request object. List AspectTypes request.
parent
str
Required. The resource name of the AspectType location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.services.catalog_service.pagers.ListAspectTypesPager
List AspectTypes response. Iterating over this object will yield results and resolve additional pages automatically.
list_entries
list_entries (
request : typing . Optional [
typing . Union [ google . cloud . dataplex_v1 . types . catalog . ListEntriesRequest , dict ]
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
) - > google . cloud . dataplex_v1 . services . catalog_service . pagers . ListEntriesPager
Lists Entries within an EntryGroup. Caution: The Vertex AI,
Bigtable, Spanner, Pub/Sub, Dataform, and Dataproc Metastore
metadata that is stored in Dataplex Universal Catalog is
changing. For more information, see Changes to metadata stored
in Dataplex Universal
Catalog <https://cloud.google.com/dataplex/docs/metadata-changes> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_list_entries():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . ListEntriesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_entries (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.ListEntriesRequest , dict]
The request object. List Entries request.
parent
str
Required. The resource name of the parent Entry Group: projects/{project}/locations/{location}/entryGroups/{entry_group} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.services.catalog_service.pagers.ListEntriesPager
List Entries response. Iterating over this object will yield results and resolve additional pages automatically.
list_entry_groups
list_entry_groups (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . ListEntryGroupsRequest , dict
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
) - > google . cloud . dataplex_v1 . services . catalog_service . pagers . ListEntryGroupsPager
Lists EntryGroup resources in a project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_list_entry_groups():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . ListEntryGroupsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_entry_groups (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.ListEntryGroupsRequest , dict]
The request object. List entryGroups request.
parent
str
Required. The resource name of the entryGroup location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.services.catalog_service.pagers.ListEntryGroupsPager
List entry groups response. Iterating over this object will yield results and resolve additional pages automatically.
list_entry_types
list_entry_types (
request : typing . Optional [
typing . Union [ google . cloud . dataplex_v1 . types . catalog . ListEntryTypesRequest , dict ]
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
) - > google . cloud . dataplex_v1 . services . catalog_service . pagers . ListEntryTypesPager
Lists EntryType resources in a project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_list_entry_types():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . ListEntryTypesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_entry_types (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.ListEntryTypesRequest , dict]
The request object. List EntryTypes request
parent
str
Required. The resource name of the EntryType location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.services.catalog_service.pagers.ListEntryTypesPager
List EntryTypes response. Iterating over this object will yield results and resolve additional pages automatically.
list_locations
list_locations (
request : typing . Optional [
google . cloud . location . locations_pb2 . ListLocationsRequest
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
) - > google . cloud . location . locations_pb2 . ListLocationsResponse
Lists information about the supported locations for this service.
Parameters
Name
Description
request
.location_pb2.ListLocationsRequest
The request object. Request message for ListLocations method.
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
.location_pb2.ListLocationsResponse
Response message for ListLocations method.
list_metadata_jobs
list_metadata_jobs (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . ListMetadataJobsRequest , dict
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
) - > google . cloud . dataplex_v1 . services . catalog_service . pagers . ListMetadataJobsPager
Lists metadata jobs.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_list_metadata_jobs():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . ListMetadataJobsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_metadata_jobs (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.ListMetadataJobsRequest , dict]
The request object. List metadata jobs request.
parent
str
Required. The resource name of the parent location, in the format projects/{project_id_or_number}/locations/{location_id} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.services.catalog_service.pagers.ListMetadataJobsPager
List metadata jobs response. Iterating over this object will yield results and resolve additional pages automatically.
list_operations
list_operations (
request : typing . Optional [
google . longrunning . operations_pb2 . ListOperationsRequest
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
) - > google . longrunning . operations_pb2 . ListOperationsResponse
Lists operations that match the specified filter in the request.
Parameters
Name
Description
request
.operations_pb2.ListOperationsRequest
The request object. Request message for ListOperations method.
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
.operations_pb2.ListOperationsResponse
Response message for ListOperations method.
lookup_entry
lookup_entry (
request : typing . Optional [
typing . Union [ google . cloud . dataplex_v1 . types . catalog . LookupEntryRequest , dict ]
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
) - > google . cloud . dataplex_v1 . types . catalog . Entry
Looks up an entry by name using the permission on the source
system. Caution: The Vertex AI, Bigtable, Spanner, Pub/Sub,
Dataform, and Dataproc Metastore metadata that is stored in
Dataplex Universal Catalog is changing. For more information,
see Changes to metadata stored in Dataplex Universal
Catalog <https://cloud.google.com/dataplex/docs/metadata-changes> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_lookup_entry():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . LookupEntryRequest (
name="name_value",
entry="entry_value",
)
# Make the request
response = client. lookup_entry (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.LookupEntryRequest , dict]
The request object. Lookup Entry request using permissions in the source system.
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
google.cloud.dataplex_v1.types.Entry
An entry is a representation of a data resource that can be described by various metadata.
metadata_job_path
metadata_job_path ( project : str , location : str , metadataJob : str ) - > str
Returns a fully-qualified metadata_job string.
parse_aspect_type_path
parse_aspect_type_path ( path : str ) - > typing . Dict [ str , str ]
Parses a aspect_type path into its component segments.
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
parse_entry_group_path
parse_entry_group_path ( path : str ) - > typing . Dict [ str , str ]
Parses a entry_group path into its component segments.
parse_entry_link_path
parse_entry_link_path ( path : str ) - > typing . Dict [ str , str ]
Parses a entry_link path into its component segments.
parse_entry_path
parse_entry_path ( path : str ) - > typing . Dict [ str , str ]
Parses a entry path into its component segments.
parse_entry_type_path
parse_entry_type_path ( path : str ) - > typing . Dict [ str , str ]
Parses a entry_type path into its component segments.
parse_glossary_path
parse_glossary_path ( path : str ) - > typing . Dict [ str , str ]
Parses a glossary path into its component segments.
parse_metadata_job_path
parse_metadata_job_path ( path : str ) - > typing . Dict [ str , str ]
Parses a metadata_job path into its component segments.
search_entries
search_entries (
request : typing . Optional [
typing . Union [ google . cloud . dataplex_v1 . types . catalog . SearchEntriesRequest , dict ]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
query : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataplex_v1 . services . catalog_service . pagers . SearchEntriesPager
Searches for Entries matching the given query and
scope.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_search_entries():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . SearchEntriesRequest (
name="name_value",
query="query_value",
)
# Make the request
page_result = client. search_entries (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.SearchEntriesRequest , dict]
The request object.
name
str
Required. The project to which the request should be attributed in the following form: projects/{project}/locations/global . This corresponds to the name field on the request instance; if request is provided, this should not be set.
query
str
Required. The query against which entries in scope should be matched. The query syntax is defined in Search syntax for Dataplex Universal Catalog https://cloud.google.com/dataplex/docs/search-syntax __. This corresponds to the query field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.services.catalog_service.pagers.SearchEntriesPager
Iterating over this object will yield results and resolve additional pages automatically.
update_aspect_type
update_aspect_type (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . UpdateAspectTypeRequest , dict
]
] = None ,
* ,
aspect_type : typing . Optional [
google . cloud . dataplex_v1 . types . catalog . AspectType
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
Updates an AspectType.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_update_aspect_type():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
aspect_type = dataplex_v1 . AspectType ()
aspect_type.metadata_template.name = "name_value"
aspect_type.metadata_template.type_ = "type__value"
request = dataplex_v1 . UpdateAspectTypeRequest (
aspect_type=aspect_type,
)
# Make the request
operation = client. update_aspect_type (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.UpdateAspectTypeRequest , dict]
The request object. Update AspectType Request
aspect_type
google.cloud.dataplex_v1.types.AspectType
Required. AspectType Resource This corresponds to the aspect_type field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Mask of fields to update. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be AspectType AspectType is a template for creating Aspects, and represents the JSON-schema for a given Entry, for example, BigQuery Table Schema.
update_entry
update_entry (
request : typing . Optional [
typing . Union [ google . cloud . dataplex_v1 . types . catalog . UpdateEntryRequest , dict ]
] = None ,
* ,
entry : typing . Optional [ google . cloud . dataplex_v1 . types . catalog . Entry ] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataplex_v1 . types . catalog . Entry
Updates an Entry.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_update_entry():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
entry = dataplex_v1 . Entry ()
entry.entry_type = "entry_type_value"
request = dataplex_v1 . UpdateEntryRequest (
entry=entry,
)
# Make the request
response = client. update_entry (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.UpdateEntryRequest , dict]
The request object. Update Entry request.
entry
google.cloud.dataplex_v1.types.Entry
Required. Entry resource. This corresponds to the entry field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. Mask of fields to update. To update Aspects, the update_mask must contain the value "aspects". If the update_mask is empty, the service will update all modifiable fields present in the request. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.Entry
An entry is a representation of a data resource that can be described by various metadata.
update_entry_group
update_entry_group (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . UpdateEntryGroupRequest , dict
]
] = None ,
* ,
entry_group : typing . Optional [
google . cloud . dataplex_v1 . types . catalog . EntryGroup
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
Updates an EntryGroup.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_update_entry_group():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . UpdateEntryGroupRequest (
)
# Make the request
operation = client. update_entry_group (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.UpdateEntryGroupRequest , dict]
The request object. Update EntryGroup Request.
entry_group
google.cloud.dataplex_v1.types.EntryGroup
Required. EntryGroup Resource. This corresponds to the entry_group field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Mask of fields to update. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be EntryGroup An Entry Group represents a logical grouping of one or more Entries.
update_entry_type
update_entry_type (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . catalog . UpdateEntryTypeRequest , dict
]
] = None ,
* ,
entry_type : typing . Optional [
google . cloud . dataplex_v1 . types . catalog . EntryType
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
Updates an EntryType.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_update_entry_type():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . UpdateEntryTypeRequest (
)
# Make the request
operation = client. update_entry_type (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.UpdateEntryTypeRequest , dict]
The request object. Update EntryType Request.
entry_type
google.cloud.dataplex_v1.types.EntryType
Required. EntryType Resource. This corresponds to the entry_type field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Mask of fields to update. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be EntryType Entry Type is a template for creating Entries.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
