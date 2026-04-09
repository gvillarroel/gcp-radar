---
title: "Class DataCatalogClient (3.29.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datacatalog/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient
  title: "Class DataCatalogClient (3.29.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class DataCatalogClient (3.29.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
3.29.0 (latest)
3.28.0
3.27.1
3.26.1
3.25.1
3.24.1
3.23.0
3.22.0
3.21.1
3.20.1
3.19.1
3.18.3
3.17.2
3.16.0
3.15.1
3.14.0
3.13.1
3.12.0
3.11.1
3.10.0
3.9.3
3.8.1
3.7.1
3.6.2
3.5.0
3.4.3
3.3.2
3.2.1
3.1.1
3.0.0
2.0.2
1.0.2
0.8.2
0.7.0
0.6.0
0.5.0
0.4.0
0.3.0
DataCatalogClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . datacatalog_v1 . services . data_catalog . transports . base . DataCatalogTransport ,
typing . Callable [
[ ... ],
google . cloud . datacatalog_v1 . services . data_catalog . transports . base . DataCatalogTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Deprecated: Please use Dataplex Catalog instead.
Data Catalog API service allows you to discover, understand, and
manage your data.
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
DataCatalogTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
DataCatalogClient
DataCatalogClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . datacatalog_v1 . services . data_catalog . transports . base . DataCatalogTransport ,
typing . Callable [
[ ... ],
google . cloud . datacatalog_v1 . services . data_catalog . transports . base . DataCatalogTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the data catalog client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,DataCatalogTransport,Callable[..., DataCatalogTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the DataCatalogTransport constructor. If set to None, a transport is chosen automatically.
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
create_entry
create_entry (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . CreateEntryRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
entry_id : typing . Optional [ str ] = None ,
entry : typing . Optional [ google . cloud . datacatalog_v1 . types . datacatalog . Entry ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . datacatalog_v1 . types . datacatalog . Entry
Creates an entry.
You can create entries only with 'FILESET', 'CLUSTER',
'DATA_STREAM', or custom types. Data Catalog automatically
creates entries with other types during metadata ingestion from
integrated systems.
You must enable the Data Catalog API in the project identified
by the parent parameter. For more information, see Data
Catalog resource
project <https://cloud.google.com/data-catalog/docs/concepts/resource-project> __.
An entry group can have a maximum of 100,000 entries.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_create_entry():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
entry = datacatalog_v1 . Entry ()
entry.type_ = "FEATURE_GROUP"
entry.integrated_system = "VERTEX_AI"
entry.gcs_fileset_spec.file_patterns = ['file_patterns_value1', 'file_patterns_value2']
request = datacatalog_v1 . CreateEntryRequest (
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
Union[ google.cloud.datacatalog_v1.types.CreateEntryRequest , dict]
The request object. Request message for CreateEntry .
parent
str
Required. The name of the entry group this entry belongs to. Note: The entry itself and its child resources might not be stored in the location specified in its name. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
entry_id
str
Required. The ID of the entry to create. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores (_). The maximum size is 64 bytes when encoded in UTF-8. This corresponds to the entry_id field on the request instance; if request is provided, this should not be set.
entry
google.cloud.datacatalog_v1.types.Entry
Required. The entry to create. This corresponds to the entry field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.Entry
Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the linked_resource field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag .
create_entry_group
create_entry_group (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . CreateEntryGroupRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
entry_group_id : typing . Optional [ str ] = None ,
entry_group : typing . Optional [
google . cloud . datacatalog_v1 . types . datacatalog . EntryGroup
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . datacatalog_v1 . types . datacatalog . EntryGroup
Creates an entry group.
An entry group contains logically related entries together with
Cloud Identity and Access
Management </data-catalog/docs/concepts/iam> __ policies. These
policies specify users who can create, edit, and view entries
within entry groups.
Data Catalog automatically creates entry groups with names that
start with the @ symbol for the following resources:
BigQuery entries ( @bigquery )
Pub/Sub topics ( @pubsub )
Dataproc Metastore services
( @dataproc_metastore_{SERVICE_NAME_HASH} )
You can create your own entry groups for Cloud Storage fileset
entries and custom entries together with the corresponding IAM
policies. User-created entry groups can't contain the @
symbol, it is reserved for automatically created groups.
Entry groups, like entries, can be searched.
A maximum of 10,000 entry groups may be created per organization
across all locations.
You must enable the Data Catalog API in the project identified
by the parent parameter. For more information, see Data
Catalog resource
project <https://cloud.google.com/data-catalog/docs/concepts/resource-project> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_create_entry_group():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . CreateEntryGroupRequest (
parent="parent_value",
entry_group_id="entry_group_id_value",
)
# Make the request
response = client. create_entry_group (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.CreateEntryGroupRequest , dict]
The request object. Request message for CreateEntryGroup .
parent
str
Required. The names of the project and location that the new entry group belongs to. Note: The entry group itself and its child resources might not be stored in the location specified in its name. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
entry_group_id
str
Required. The ID of the entry group to create. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and must start with a letter or underscore. The maximum size is 64 bytes when encoded in UTF-8. This corresponds to the entry_group_id field on the request instance; if request is provided, this should not be set.
entry_group
google.cloud.datacatalog_v1.types.EntryGroup
The entry group to create. Defaults to empty. This corresponds to the entry_group field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.EntryGroup
Entry group metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
create_tag
create_tag (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . CreateTagRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
tag : typing . Optional [ google . cloud . datacatalog_v1 . types . tags . Tag ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . datacatalog_v1 . types . tags . Tag
Creates a tag and assigns it to:
An xref_Entry if the method
name is
projects.locations.entryGroups.entries.tags.create .
Or xref_EntryGroupif the
method name is projects.locations.entryGroups.tags.create .
Note: The project identified by the parent parameter for the
tag
and the tag template
used to create the tag must be in the same organization.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_create_tag():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
tag = datacatalog_v1 . Tag ()
tag.column = "column_value"
tag.template = "template_value"
request = datacatalog_v1 . CreateTagRequest (
parent="parent_value",
tag=tag,
)
# Make the request
response = client. create_tag (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.CreateTagRequest , dict]
The request object. Request message for CreateTag .
parent
str
Required. The name of the resource to attach this tag to. Tags can be attached to entries or entry groups. An entry can have up to 1000 attached tags. Note: The tag and its child resources might not be stored in the location specified in its name. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
tag
google.cloud.datacatalog_v1.types.Tag
Required. The tag to create. This corresponds to the tag field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.Tag
Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
create_tag_template
create_tag_template (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . CreateTagTemplateRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
tag_template_id : typing . Optional [ str ] = None ,
tag_template : typing . Optional [
google . cloud . datacatalog_v1 . types . tags . TagTemplate
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . datacatalog_v1 . types . tags . TagTemplate
Creates a tag template.
You must enable the Data Catalog API in the project identified
by the parent parameter. For more information, see Data
Catalog resource project .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_create_tag_template():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . CreateTagTemplateRequest (
parent="parent_value",
tag_template_id="tag_template_id_value",
)
# Make the request
response = client. create_tag_template (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.CreateTagTemplateRequest , dict]
The request object. Request message for CreateTagTemplate .
parent
str
Required. The name of the project and the template location region https://cloud.google.com/data-catalog/docs/concepts/regions __. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
tag_template_id
str
Required. The ID of the tag template to create. The ID must contain only lowercase letters (a-z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum size is 64 bytes when encoded in UTF-8. This corresponds to the tag_template_id field on the request instance; if request is provided, this should not be set.
tag_template
google.cloud.datacatalog_v1.types.TagTemplate
Required. The tag template to create. This corresponds to the tag_template field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.TagTemplate
A tag template defines a tag that can have one or more typed fields. The template is used to create tags that are attached to Google Cloud resources. [Tag template roles] (https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources.
create_tag_template_field
create_tag_template_field (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . CreateTagTemplateFieldRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
tag_template_field_id : typing . Optional [ str ] = None ,
tag_template_field : typing . Optional [
google . cloud . datacatalog_v1 . types . tags . TagTemplateField
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . datacatalog_v1 . types . tags . TagTemplateField
Creates a field in a tag template.
You must enable the Data Catalog API in the project identified
by the parent parameter. For more information, see Data
Catalog resource
project <https://cloud.google.com/data-catalog/docs/concepts/resource-project> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_create_tag_template_field():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
tag_template_field = datacatalog_v1 . TagTemplateField ()
tag_template_field.type_.primitive_type = "RICHTEXT"
request = datacatalog_v1 . CreateTagTemplateFieldRequest (
parent="parent_value",
tag_template_field_id="tag_template_field_id_value",
tag_template_field=tag_template_field,
)
# Make the request
response = client. create_tag_template_field (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.CreateTagTemplateFieldRequest , dict]
The request object. Request message for CreateTagTemplateField .
parent
str
Required. The name of the project and the template location region https://cloud.google.com/data-catalog/docs/concepts/regions __. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
tag_template_field_id
str
Required. The ID of the tag template field to create. Note: Adding a required field to an existing template is not allowed. Field IDs can contain letters (both uppercase and lowercase), numbers (0-9), underscores (_) and dashes (-). Field IDs must be at least 1 character long and at most 128 characters long. Field IDs must also be unique within their template. This corresponds to the tag_template_field_id field on the request instance; if request is provided, this should not be set.
tag_template_field
google.cloud.datacatalog_v1.types.TagTemplateField
Required. The tag template field to create. This corresponds to the tag_template_field field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.TagTemplateField
The template for an individual field within a tag template.
delete_entry
delete_entry (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . DeleteEntryRequest , dict
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
Deletes an existing entry.
You can delete only the entries created by the
xref_CreateEntry
method.
You must enable the Data Catalog API in the project identified
by the name parameter. For more information, see Data
Catalog resource
project <https://cloud.google.com/data-catalog/docs/concepts/resource-project> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_delete_entry():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . DeleteEntryRequest (
name="name_value",
)
# Make the request
client. delete_entry (request=request)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.DeleteEntryRequest , dict]
The request object. Request message for DeleteEntry .
name
str
Required. The name of the entry to delete. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_entry_group
delete_entry_group (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . DeleteEntryGroupRequest , dict
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
Deletes an entry group.
You must enable the Data Catalog API in the project identified
by the name parameter. For more information, see Data
Catalog resource
project <https://cloud.google.com/data-catalog/docs/concepts/resource-project> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_delete_entry_group():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . DeleteEntryGroupRequest (
name="name_value",
)
# Make the request
client. delete_entry_group (request=request)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.DeleteEntryGroupRequest , dict]
The request object. Request message for DeleteEntryGroup .
name
str
Required. The name of the entry group to delete. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
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
delete_tag
delete_tag (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . DeleteTagRequest , dict
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
Deletes a tag.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_delete_tag():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . DeleteTagRequest (
name="name_value",
)
# Make the request
client. delete_tag (request=request)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.DeleteTagRequest , dict]
The request object. Request message for DeleteTag .
name
str
Required. The name of the tag to delete. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_tag_template
delete_tag_template (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . DeleteTagTemplateRequest , dict
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
force : typing . Optional [ bool ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > None
Deletes a tag template and all tags that use it.
You must enable the Data Catalog API in the project identified
by the name parameter. For more information, see Data
Catalog resource
project <https://cloud.google.com/data-catalog/docs/concepts/resource-project> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_delete_tag_template():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . DeleteTagTemplateRequest (
name="name_value",
force=True,
)
# Make the request
client. delete_tag_template (request=request)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.DeleteTagTemplateRequest , dict]
The request object. Request message for DeleteTagTemplate .
name
str
Required. The name of the tag template to delete. This corresponds to the name field on the request instance; if request is provided, this should not be set.
force
bool
Required. If true, deletes all tags that use this template. Currently, true is the only supported value. This corresponds to the force field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_tag_template_field
delete_tag_template_field (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . DeleteTagTemplateFieldRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
force : typing . Optional [ bool ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > None
Deletes a field in a tag template and all uses of this field
from the tags based on this template.
You must enable the Data Catalog API in the project identified
by the name parameter. For more information, see Data
Catalog resource
project <https://cloud.google.com/data-catalog/docs/concepts/resource-project> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_delete_tag_template_field():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . DeleteTagTemplateFieldRequest (
name="name_value",
force=True,
)
# Make the request
client. delete_tag_template_field (request=request)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.DeleteTagTemplateFieldRequest , dict]
The request object. Request message for DeleteTagTemplateField .
name
str
Required. The name of the tag template field to delete. This corresponds to the name field on the request instance; if request is provided, this should not be set.
force
bool
Required. If true, deletes this field from any tags that use it. Currently, true is the only supported value. This corresponds to the force field on the request instance; if request is provided, this should not be set.
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
entry_path
entry_path ( project : str , location : str , entry_group : str , entry : str ) - > str
Returns a fully-qualified entry string.
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
DataCatalogClient
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
DataCatalogClient
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
DataCatalogClient
The constructed client.
get_entry
get_entry (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . GetEntryRequest , dict
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
) - > google . cloud . datacatalog_v1 . types . datacatalog . Entry
Gets an entry.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_get_entry():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . GetEntryRequest (
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
Union[ google.cloud.datacatalog_v1.types.GetEntryRequest , dict]
The request object. Request message for GetEntry .
name
str
Required. The name of the entry to get. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.Entry
Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the linked_resource field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag .
get_entry_group
get_entry_group (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . GetEntryGroupRequest , dict
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
read_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . datacatalog_v1 . types . datacatalog . EntryGroup
Gets an entry group.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_get_entry_group():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . GetEntryGroupRequest (
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
Union[ google.cloud.datacatalog_v1.types.GetEntryGroupRequest , dict]
The request object. Request message for GetEntryGroup .
name
str
Required. The name of the entry group to get. This corresponds to the name field on the request instance; if request is provided, this should not be set.
read_mask
google.protobuf.field_mask_pb2.FieldMask
The fields to return. If empty or omitted, all fields are returned. This corresponds to the read_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.EntryGroup
Entry group metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
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
Gets the access control policy for a resource.
May return:
A\ NOT_FOUND error if the resource doesn't exist or you
don't have the permission to view it.
An empty policy if the resource exists but doesn't have a set
policy.
Supported resources are:
Tag templates
Entry groups
Note: This method doesn't get policies from Google Cloud
Platform resources ingested into Data Catalog.
To call this method, you must have the following Google IAM
permissions:
datacatalog.tagTemplates.getIamPolicy to get policies on
tag templates.
datacatalog.entryGroups.getIamPolicy to get policies on
entry groups.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
from google.iam.v1 import iam_policy_pb2 # type: ignore
def sample_get_iam_policy():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
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
get_tag_template
get_tag_template (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . GetTagTemplateRequest , dict
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
) - > google . cloud . datacatalog_v1 . types . tags . TagTemplate
Gets a tag template.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_get_tag_template():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . GetTagTemplateRequest (
name="name_value",
)
# Make the request
response = client. get_tag_template (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.GetTagTemplateRequest , dict]
The request object. Request message for GetTagTemplate .
name
str
Required. The name of the tag template to get. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.TagTemplate
A tag template defines a tag that can have one or more typed fields. The template is used to create tags that are attached to Google Cloud resources. [Tag template roles] (https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources.
import_entries
import_entries (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . ImportEntriesRequest , dict
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
) - > google . api_core . operation . Operation
Imports entries from a source, such as data previously dumped
into a Cloud Storage bucket, into Data Catalog. Import of
entries is a sync operation that reconciles the state of the
third-party system with the Data Catalog.
ImportEntries accepts source data snapshots of a third-party
system. Snapshot should be delivered as a .wire or
base65-encoded .txt file containing a sequence of Protocol
Buffer messages of
xref_DumpItem type.
ImportEntries returns a [long-running operation]
[google.longrunning.Operation] resource that can be queried with
Operations.GetOperation][google.longrunning.Operations.GetOperation]
to return
xref_ImportEntriesMetadata
and an
xref_ImportEntriesResponse
message.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_import_entries():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . ImportEntriesRequest (
gcs_bucket_path="gcs_bucket_path_value",
parent="parent_value",
)
# Make the request
operation = client. import_entries (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.ImportEntriesRequest , dict]
The request object. Request message for ImportEntries method.
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
An object representing a long-running operation. The result type for the operation will be ImportEntriesResponse Response message for long-running operation][google.longrunning.Operation] returned by the ImportEntries .
list_entries
list_entries (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . ListEntriesRequest , dict
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
) - > google . cloud . datacatalog_v1 . services . data_catalog . pagers . ListEntriesPager
Lists entries.
Note: Currently, this method can list only custom entries. To
get a list of both custom and automatically created entries, use
xref_SearchCatalog.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_list_entries():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . ListEntriesRequest (
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
Union[ google.cloud.datacatalog_v1.types.ListEntriesRequest , dict]
The request object. Request message for ListEntries .
parent
str
Required. The name of the entry group that contains the entries to list. Can be provided in URL format. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.services.data_catalog.pagers.ListEntriesPager
Response message for ListEntries . Iterating over this object will yield results and resolve additional pages automatically.
list_entry_groups
list_entry_groups (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . ListEntryGroupsRequest , dict
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
) - > google . cloud . datacatalog_v1 . services . data_catalog . pagers . ListEntryGroupsPager
Lists entry groups.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_list_entry_groups():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . ListEntryGroupsRequest (
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
Union[ google.cloud.datacatalog_v1.types.ListEntryGroupsRequest , dict]
The request object. Request message for ListEntryGroups .
parent
str
Required. The name of the location that contains the entry groups to list. Can be provided as a URL. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.services.data_catalog.pagers.ListEntryGroupsPager
Response message for ListEntryGroups . Iterating over this object will yield results and resolve additional pages automatically.
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
list_tags
list_tags (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . ListTagsRequest , dict
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
) - > google . cloud . datacatalog_v1 . services . data_catalog . pagers . ListTagsPager
Lists tags assigned to an
xref_Entry. The
xref_columns in the
response are lowercased.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_list_tags():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . ListTagsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_tags (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.ListTagsRequest , dict]
The request object. Request message for ListTags .
parent
str
Required. The name of the Data Catalog resource to list the tags of. The resource can be an Entry or an Entry Group (without /entries/{entries} at the end). This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.services.data_catalog.pagers.ListTagsPager
Response message for ListTags . Iterating over this object will yield results and resolve additional pages automatically.
lookup_entry
lookup_entry (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . LookupEntryRequest , dict
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
) - > google . cloud . datacatalog_v1 . types . datacatalog . Entry
Gets an entry by its target resource name.
The resource name comes from the source Google Cloud
Platform service.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_lookup_entry():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . LookupEntryRequest (
linked_resource="linked_resource_value",
)
# Make the request
response = client. lookup_entry (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.LookupEntryRequest , dict]
The request object. Request message for LookupEntry .
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
google.cloud.datacatalog_v1.types.Entry
Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the linked_resource field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag .
modify_entry_contacts
modify_entry_contacts (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . ModifyEntryContactsRequest ,
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
) - > google . cloud . datacatalog_v1 . types . datacatalog . Contacts
Modifies contacts, part of the business context of an
xref_Entry.
To call this method, you must have the
datacatalog.entries.updateContacts IAM permission on the
corresponding project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_modify_entry_contacts():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . ModifyEntryContactsRequest (
name="name_value",
)
# Make the request
response = client. modify_entry_contacts (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.ModifyEntryContactsRequest , dict]
The request object. Request message for ModifyEntryContacts .
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
google.cloud.datacatalog_v1.types.Contacts
Contact people for the entry.
modify_entry_overview
modify_entry_overview (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . ModifyEntryOverviewRequest ,
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
) - > google . cloud . datacatalog_v1 . types . datacatalog . EntryOverview
Modifies entry overview, part of the business context of an
xref_Entry.
To call this method, you must have the
datacatalog.entries.updateOverview IAM permission on the
corresponding project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_modify_entry_overview():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . ModifyEntryOverviewRequest (
name="name_value",
)
# Make the request
response = client. modify_entry_overview (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.ModifyEntryOverviewRequest , dict]
The request object. Request message for ModifyEntryOverview .
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
google.cloud.datacatalog_v1.types.EntryOverview
Entry overview fields for rich text descriptions of entries.
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
parse_entry_path
parse_entry_path ( path : str ) - > typing . Dict [ str , str ]
Parses a entry path into its component segments.
parse_tag_path
parse_tag_path ( path : str ) - > typing . Dict [ str , str ]
Parses a tag path into its component segments.
parse_tag_template_field_enum_value_path
parse_tag_template_field_enum_value_path ( path : str ) - > typing . Dict [ str , str ]
Parses a tag_template_field_enum_value path into its component segments.
parse_tag_template_field_path
parse_tag_template_field_path ( path : str ) - > typing . Dict [ str , str ]
Parses a tag_template_field path into its component segments.
parse_tag_template_path
parse_tag_template_path ( path : str ) - > typing . Dict [ str , str ]
Parses a tag_template path into its component segments.
reconcile_tags
reconcile_tags (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . ReconcileTagsRequest , dict
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
) - > google . api_core . operation . Operation
ReconcileTags creates or updates a list of tags on the
entry. If the
xref_ReconcileTagsRequest.force_delete_missing
parameter is set, the operation deletes tags not included in the
input tag list.
ReconcileTags returns a [long-running operation]
[google.longrunning.Operation] resource that can be queried with
Operations.GetOperation][google.longrunning.Operations.GetOperation]
to return [ReconcileTagsMetadata]
[google.cloud.datacatalog.v1.ReconcileTagsMetadata] and a
[ReconcileTagsResponse]
[google.cloud.datacatalog.v1.ReconcileTagsResponse] message.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_reconcile_tags():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . ReconcileTagsRequest (
parent="parent_value",
tag_template="tag_template_value",
)
# Make the request
operation = client. reconcile_tags (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.ReconcileTagsRequest , dict]
The request object. Request message for ReconcileTags .
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
An object representing a long-running operation. The result type for the operation will be ReconcileTags Response Long-running operation][google.longrunning.Operation] response message returned by ReconcileTags .
rename_tag_template_field
rename_tag_template_field (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . RenameTagTemplateFieldRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
new_tag_template_field_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . datacatalog_v1 . types . tags . TagTemplateField
Renames a field in a tag template.
You must enable the Data Catalog API in the project identified
by the name parameter. For more information, see Data
Catalog resource project .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_rename_tag_template_field():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . RenameTagTemplateFieldRequest (
name="name_value",
new_tag_template_field_id="new_tag_template_field_id_value",
)
# Make the request
response = client. rename_tag_template_field (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.RenameTagTemplateFieldRequest , dict]
The request object. Request message for RenameTagTemplateField .
name
str
Required. The name of the tag template field. This corresponds to the name field on the request instance; if request is provided, this should not be set.
new_tag_template_field_id
str
Required. The new ID of this tag template field. For example, my_new_field . This corresponds to the new_tag_template_field_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.TagTemplateField
The template for an individual field within a tag template.
rename_tag_template_field_enum_value
rename_tag_template_field_enum_value (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . RenameTagTemplateFieldEnumValueRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
new_enum_value_display_name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . datacatalog_v1 . types . tags . TagTemplateField
Renames an enum value in a tag template.
Within a single enum field, enum values must be unique.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_rename_tag_template_field_enum_value():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . RenameTagTemplateFieldEnumValueRequest (
name="name_value",
new_enum_value_display_name="new_enum_value_display_name_value",
)
# Make the request
response = client. rename_tag_template_field_enum_value (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.RenameTagTemplateFieldEnumValueRequest , dict]
The request object. Request message for RenameTagTemplateFieldEnumValue .
name
str
Required. The name of the enum field value. This corresponds to the name field on the request instance; if request is provided, this should not be set.
new_enum_value_display_name
str
Required. The new display name of the enum value. For example, my_new_enum_value . This corresponds to the new_enum_value_display_name field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.TagTemplateField
The template for an individual field within a tag template.
retrieve_config
retrieve_config (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . RetrieveConfigRequest , dict
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
) - > google . cloud . datacatalog_v1 . types . datacatalog . OrganizationConfig
Retrieves the configuration related to the migration
from Data Catalog to Dataplex for a specific
organization, including all the projects under it which
have a separate configuration set.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_retrieve_config():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . RetrieveConfigRequest (
name="name_value",
)
# Make the request
response = client. retrieve_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.RetrieveConfigRequest , dict]
The request object. Request message for RetrieveConfig .
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
google.cloud.datacatalog_v1.types.OrganizationConfig
The configuration related to the migration from Data Catalog to Dataplex that has been applied to an organization and any projects under it. It is the response message for RetrieveConfig .
retrieve_effective_config
retrieve_effective_config (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . RetrieveEffectiveConfigRequest ,
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
) - > google . cloud . datacatalog_v1 . types . datacatalog . MigrationConfig
Retrieves the effective configuration related to the
migration from Data Catalog to Dataplex for a specific
organization or project. If there is no specific
configuration set for the resource, the setting is
checked hierarchicahlly through the ancestors of the
resource, starting from the resource itself.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_retrieve_effective_config():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . RetrieveEffectiveConfigRequest (
name="name_value",
)
# Make the request
response = client. retrieve_effective_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.RetrieveEffectiveConfigRequest , dict]
The request object. Request message for RetrieveEffectiveConfig .
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
google.cloud.datacatalog_v1.types.MigrationConfig
The configuration related to the migration to Dataplex applied to an organization or project. It is the response message for SetConfig and RetrieveEffectiveConfig .
search_catalog
search_catalog (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . SearchCatalogRequest , dict
]
] = None ,
* ,
scope : typing . Optional [
google . cloud . datacatalog_v1 . types . datacatalog . SearchCatalogRequest . Scope
] = None ,
query : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . datacatalog_v1 . services . data_catalog . pagers . SearchCatalogPager
Searches Data Catalog for multiple resources like entries and
tags that match a query.
This is a Custom Method that
doesn't return all information on a resource, only its ID and
high level fields. To get more information, you can subsequently
call specific get methods.
Note: Data Catalog search queries don't guarantee full recall.
Results that match your query might not be returned, even in
subsequent result pages. Additionally, returned (and not
returned) results can vary if you repeat search queries.
For more information, see Data Catalog search syntax .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_search_catalog():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . SearchCatalogRequest (
)
# Make the request
page_result = client. search_catalog (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.SearchCatalogRequest , dict]
The request object. Request message for SearchCatalog .
scope
google.cloud.datacatalog_v1.types.SearchCatalogRequest.Scope
Required. The scope of this search request. The scope is invalid if include_org_ids , include_project_ids are empty AND include_gcp_public_datasets is set to false . In this case, the request returns an error. This corresponds to the scope field on the request instance; if request is provided, this should not be set.
query
str
Optional. The query string with a minimum of 3 characters and specific syntax. For more information, see Data Catalog search syntax https://cloud.google.com/data-catalog/docs/how-to/search-reference __. An empty query string returns all data assets (in the specified scope) that you have access to. A query string can be a simple xyz or qualified by predicates: - name:x - column:y - description:z This corresponds to the query field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.services.data_catalog.pagers.SearchCatalogPager
Response message for SearchCatalog . Iterating over this object will yield results and resolve additional pages automatically.
set_config
set_config (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . SetConfigRequest , dict
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
) - > google . cloud . datacatalog_v1 . types . datacatalog . MigrationConfig
Sets the configuration related to the migration to
Dataplex for an organization or project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_set_config():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . SetConfigRequest (
tag_template_migration="TAG_TEMPLATE_MIGRATION_DISABLED",
name="name_value",
)
# Make the request
response = client. set_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.SetConfigRequest , dict]
The request object. Request message for SetConfig .
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
google.cloud.datacatalog_v1.types.MigrationConfig
The configuration related to the migration to Dataplex applied to an organization or project. It is the response message for SetConfig and RetrieveEffectiveConfig .
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
Sets an access control policy for a resource. Replaces any
existing policy.
Supported resources are:
Tag templates
Entry groups
Note: This method sets policies only within Data Catalog and
can't be used to manage policies in BigQuery, Pub/Sub, Dataproc
Metastore, and any external Google Cloud Platform resources
synced with the Data Catalog.
To call this method, you must have the following Google IAM
permissions:
datacatalog.tagTemplates.setIamPolicy to set policies on
tag templates.
datacatalog.entryGroups.setIamPolicy to set policies on
entry groups.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
from google.iam.v1 import iam_policy_pb2 # type: ignore
def sample_set_iam_policy():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
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
star_entry
star_entry (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . StarEntryRequest , dict
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
) - > google . cloud . datacatalog_v1 . types . datacatalog . StarEntryResponse
Marks an xref_Entry as starred
by the current user. Starring information is private to each
user.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_star_entry():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . StarEntryRequest (
name="name_value",
)
# Make the request
response = client. star_entry (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.StarEntryRequest , dict]
The request object. Request message for StarEntry .
name
str
Required. The name of the entry to mark as starred. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.StarEntryResponse
Response message for StarEntry . Empty for now
tag_path
tag_path (
project : str , location : str , entry_group : str , entry : str , tag : str
) - > str
Returns a fully-qualified tag string.
tag_template_field_enum_value_path
tag_template_field_enum_value_path (
project : str ,
location : str ,
tag_template : str ,
tag_template_field_id : str ,
enum_value_display_name : str ,
) - > str
Returns a fully-qualified tag_template_field_enum_value string.
tag_template_field_path
tag_template_field_path (
project : str , location : str , tag_template : str , field : str
) - > str
Returns a fully-qualified tag_template_field string.
tag_template_path
tag_template_path ( project : str , location : str , tag_template : str ) - > str
Returns a fully-qualified tag_template string.
test_iam_permissions
test_iam_permissions (
request : typing . Optional [
typing . Union [ google . iam . v1 . iam_policy_pb2 . TestIamPermissionsRequest , dict ]
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
) - > google . iam . v1 . iam_policy_pb2 . TestIamPermissionsResponse
Gets your permissions on a resource.
Returns an empty set of permissions if the resource
doesn't exist.
Supported resources are:
Tag templates
Entry groups
Note: This method gets policies only within Data Catalog
and can't be used to get policies from BigQuery,
Pub/Sub, Dataproc Metastore, and any external Google
Cloud Platform resources ingested into Data Catalog.
No Google IAM permissions are required to call this
method.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
from google.iam.v1 import iam_policy_pb2 # type: ignore
def sample_test_iam_permissions():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
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
unstar_entry
unstar_entry (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . UnstarEntryRequest , dict
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
) - > google . cloud . datacatalog_v1 . types . datacatalog . UnstarEntryResponse
Marks an xref_Entry as NOT
starred by the current user. Starring information is private to
each user.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_unstar_entry():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . UnstarEntryRequest (
name="name_value",
)
# Make the request
response = client. unstar_entry (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.UnstarEntryRequest , dict]
The request object. Request message for UnstarEntry .
name
str
Required. The name of the entry to mark as not starred. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.UnstarEntryResponse
Response message for UnstarEntry . Empty for now
update_entry
update_entry (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . UpdateEntryRequest , dict
]
] = None ,
* ,
entry : typing . Optional [ google . cloud . datacatalog_v1 . types . datacatalog . Entry ] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . datacatalog_v1 . types . datacatalog . Entry
Updates an existing entry.
You must enable the Data Catalog API in the project identified
by the entry.name parameter. For more information, see Data
Catalog resource
project <https://cloud.google.com/data-catalog/docs/concepts/resource-project> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_update_entry():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
entry = datacatalog_v1 . Entry ()
entry.type_ = "FEATURE_GROUP"
entry.integrated_system = "VERTEX_AI"
entry.gcs_fileset_spec.file_patterns = ['file_patterns_value1', 'file_patterns_value2']
request = datacatalog_v1 . UpdateEntryRequest (
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
Union[ google.cloud.datacatalog_v1.types.UpdateEntryRequest , dict]
The request object. Request message for UpdateEntry .
entry
google.cloud.datacatalog_v1.types.Entry
Required. Updates for the entry. The name field must be set. This corresponds to the entry field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Names of fields whose values to overwrite on an entry. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. You can modify only the fields listed below. For entries with type DATA_STREAM : - schema For entries with type FILESET : - schema - display_name - description - gcs_fileset_spec - gcs_fileset_spec.file_patterns For entries with user_specified_type : - schema - display_name - description - user_specified_type - user_specified_system - linked_resource - source_system_timestamps This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.Entry
Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the linked_resource field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag .
update_entry_group
update_entry_group (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . UpdateEntryGroupRequest , dict
]
] = None ,
* ,
entry_group : typing . Optional [
google . cloud . datacatalog_v1 . types . datacatalog . EntryGroup
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
) - > google . cloud . datacatalog_v1 . types . datacatalog . EntryGroup
Updates an entry group.
You must enable the Data Catalog API in the project identified
by the entry_group.name parameter. For more information, see
Data Catalog resource
project <https://cloud.google.com/data-catalog/docs/concepts/resource-project> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_update_entry_group():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . UpdateEntryGroupRequest (
)
# Make the request
response = client. update_entry_group (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.UpdateEntryGroupRequest , dict]
The request object. Request message for UpdateEntryGroup .
entry_group
google.cloud.datacatalog_v1.types.EntryGroup
Required. Updates for the entry group. The name field must be set. This corresponds to the entry_group field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Names of fields whose values to overwrite on an entry group. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.EntryGroup
Entry group metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
update_tag
update_tag (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . UpdateTagRequest , dict
]
] = None ,
* ,
tag : typing . Optional [ google . cloud . datacatalog_v1 . types . tags . Tag ] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . datacatalog_v1 . types . tags . Tag
Updates an existing tag.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_update_tag():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
tag = datacatalog_v1 . Tag ()
tag.column = "column_value"
tag.template = "template_value"
request = datacatalog_v1 . UpdateTagRequest (
tag=tag,
)
# Make the request
response = client. update_tag (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.UpdateTagRequest , dict]
The request object. Request message for UpdateTag .
tag
google.cloud.datacatalog_v1.types.Tag
Required. The updated tag. The "name" field must be set. This corresponds to the tag field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Names of fields whose values to overwrite on a tag. Currently, a tag has the only modifiable field with the name fields . In general, if this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.Tag
Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
update_tag_template
update_tag_template (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . UpdateTagTemplateRequest , dict
]
] = None ,
* ,
tag_template : typing . Optional [
google . cloud . datacatalog_v1 . types . tags . TagTemplate
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
) - > google . cloud . datacatalog_v1 . types . tags . TagTemplate
Updates a tag template.
You can't update template fields with this method. These fields
are separate resources with their own create, update, and delete
methods.
You must enable the Data Catalog API in the project identified
by the tag_template.name parameter. For more information,
see Data Catalog resource
project <https://cloud.google.com/data-catalog/docs/concepts/resource-project> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_update_tag_template():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
request = datacatalog_v1 . UpdateTagTemplateRequest (
)
# Make the request
response = client. update_tag_template (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.UpdateTagTemplateRequest , dict]
The request object. Request message for UpdateTagTemplate .
tag_template
google.cloud.datacatalog_v1.types.TagTemplate
Required. The template to update. The name field must be set. This corresponds to the tag_template field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Names of fields whose values to overwrite on a tag template. Currently, only display_name and is_publicly_readable can be overwritten. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. Note: Updating the is_publicly_readable field may require up to 12 hours to take effect in search results. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.TagTemplate
A tag template defines a tag that can have one or more typed fields. The template is used to create tags that are attached to Google Cloud resources. [Tag template roles] (https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources.
update_tag_template_field
update_tag_template_field (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . datacatalog . UpdateTagTemplateFieldRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
tag_template_field : typing . Optional [
google . cloud . datacatalog_v1 . types . tags . TagTemplateField
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
) - > google . cloud . datacatalog_v1 . types . tags . TagTemplateField
Updates a field in a tag template.
You can't update the field type with this method.
You must enable the Data Catalog API in the project identified
by the name parameter. For more information, see Data
Catalog resource
project <https://cloud.google.com/data-catalog/docs/concepts/resource-project> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
def sample_update_tag_template_field():
# Create a client
client = datacatalog_v1 . DataCatalogClient ()
# Initialize request argument(s)
tag_template_field = datacatalog_v1 . TagTemplateField ()
tag_template_field.type_.primitive_type = "RICHTEXT"
request = datacatalog_v1 . UpdateTagTemplateFieldRequest (
name="name_value",
tag_template_field=tag_template_field,
)
# Make the request
response = client. update_tag_template_field (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.datacatalog_v1.types.UpdateTagTemplateFieldRequest , dict]
The request object. Request message for UpdateTagTemplateField .
name
str
Required. The name of the tag template field. This corresponds to the name field on the request instance; if request is provided, this should not be set.
tag_template_field
google.cloud.datacatalog_v1.types.TagTemplateField
Required. The template to update. This corresponds to the tag_template_field field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. Names of fields whose values to overwrite on an individual field of a tag template. The following fields are modifiable: - display_name - type.enum_type - is_required If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied with one exception: when updating an enum type, the provided values are merged with the existing values. Therefore, enum values can only be added, existing enum values cannot be deleted or renamed. Additionally, updating a template field from optional to required is not allowed. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.TagTemplateField
The template for an individual field within a tag template.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
