---
title: "Class BusinessGlossaryServiceClient (2.16.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service.BusinessGlossaryServiceClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dataplex/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dataplex/latest/google.cloud.dataplex_v1.services.business_glossary_service.BusinessGlossaryServiceClient
  title: "Class BusinessGlossaryServiceClient (2.16.0) \_|\_ Python client libraries\
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
Class BusinessGlossaryServiceClient (2.16.0)
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
BusinessGlossaryServiceClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . dataplex_v1 . services . business_glossary_service . transports . base . BusinessGlossaryServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . dataplex_v1 . services . business_glossary_service . transports . base . BusinessGlossaryServiceTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
BusinessGlossaryService provides APIs for managing business
glossary resources for enterprise customers.
The resources currently supported in Business Glossary are:
Glossary
GlossaryCategory
GlossaryTerm
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
BusinessGlossaryServiceTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
BusinessGlossaryServiceClient
BusinessGlossaryServiceClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . dataplex_v1 . services . business_glossary_service . transports . base . BusinessGlossaryServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . dataplex_v1 . services . business_glossary_service . transports . base . BusinessGlossaryServiceTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the business glossary service client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,BusinessGlossaryServiceTransport,Callable[..., BusinessGlossaryServiceTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the BusinessGlossaryServiceTransport constructor. If set to None, a transport is chosen automatically.
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
create_glossary
create_glossary (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . business_glossary . CreateGlossaryRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
glossary : typing . Optional [
google . cloud . dataplex_v1 . types . business_glossary . Glossary
] = None ,
glossary_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Creates a new Glossary resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_create_glossary():
# Create a client
client = dataplex_v1 . BusinessGlossaryServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . CreateGlossaryRequest (
parent="parent_value",
glossary_id="glossary_id_value",
)
# Make the request
operation = client. create_glossary (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.CreateGlossaryRequest , dict]
The request object. Create Glossary Request
parent
str
Required. The parent resource where this Glossary will be created. Format: projects/{project_id_or_number}/locations/{location_id} where location_id refers to a Google Cloud region. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
glossary
google.cloud.dataplex_v1.types.Glossary
Required. The Glossary to create. This corresponds to the glossary field on the request instance; if request is provided, this should not be set.
glossary_id
str
Required. Glossary ID: Glossary identifier. This corresponds to the glossary_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Glossary A Glossary represents a collection of GlossaryCategories and GlossaryTerms defined by the user. Glossary is a top level resource and is the Google Cloud parent resource of all the GlossaryCategories and GlossaryTerms within it.
create_glossary_category
create_glossary_category (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . business_glossary . CreateGlossaryCategoryRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
category : typing . Optional [
google . cloud . dataplex_v1 . types . business_glossary . GlossaryCategory
] = None ,
category_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataplex_v1 . types . business_glossary . GlossaryCategory
Creates a new GlossaryCategory resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_create_glossary_category():
# Create a client
client = dataplex_v1 . BusinessGlossaryServiceClient ()
# Initialize request argument(s)
category = dataplex_v1 . GlossaryCategory ()
category.parent = "parent_value"
request = dataplex_v1 . CreateGlossaryCategoryRequest (
parent="parent_value",
category_id="category_id_value",
category=category,
)
# Make the request
response = client. create_glossary_category (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.CreateGlossaryCategoryRequest , dict]
The request object. Creates a new GlossaryCategory under the specified Glossary.
parent
str
Required. The parent resource where this GlossaryCategory will be created. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} where locationId refers to a Google Cloud region. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
category
google.cloud.dataplex_v1.types.GlossaryCategory
Required. The GlossaryCategory to create. This corresponds to the category field on the request instance; if request is provided, this should not be set.
category_id
str
Required. GlossaryCategory identifier. This corresponds to the category_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.GlossaryCategory
A GlossaryCategory represents a collection of GlossaryCategories and GlossaryTerms within a Glossary that are related to each other.
create_glossary_term
create_glossary_term (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . business_glossary . CreateGlossaryTermRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
term : typing . Optional [
google . cloud . dataplex_v1 . types . business_glossary . GlossaryTerm
] = None ,
term_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataplex_v1 . types . business_glossary . GlossaryTerm
Creates a new GlossaryTerm resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_create_glossary_term():
# Create a client
client = dataplex_v1 . BusinessGlossaryServiceClient ()
# Initialize request argument(s)
term = dataplex_v1 . GlossaryTerm ()
term.parent = "parent_value"
request = dataplex_v1 . CreateGlossaryTermRequest (
parent="parent_value",
term_id="term_id_value",
term=term,
)
# Make the request
response = client. create_glossary_term (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.CreateGlossaryTermRequest , dict]
The request object. Creates a new GlossaryTerm under the specified Glossary.
parent
str
Required. The parent resource where the GlossaryTerm will be created. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} where location_id refers to a Google Cloud region. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
term
google.cloud.dataplex_v1.types.GlossaryTerm
Required. The GlossaryTerm to create. This corresponds to the term field on the request instance; if request is provided, this should not be set.
term_id
str
Required. GlossaryTerm identifier. This corresponds to the term_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.GlossaryTerm
GlossaryTerms are the core of Glossary. A GlossaryTerm holds a rich text description that can be attached to Entries or specific columns to enrich them.
delete_glossary
delete_glossary (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . business_glossary . DeleteGlossaryRequest , dict
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
Deletes a Glossary resource. All the categories and
terms within the Glossary must be deleted before the
Glossary can be deleted.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_delete_glossary():
# Create a client
client = dataplex_v1 . BusinessGlossaryServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . DeleteGlossaryRequest (
name="name_value",
)
# Make the request
operation = client. delete_glossary (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.DeleteGlossaryRequest , dict]
The request object. Delete Glossary Request
name
str
Required. The name of the Glossary to delete. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_glossary_category
delete_glossary_category (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . business_glossary . DeleteGlossaryCategoryRequest ,
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
Deletes a GlossaryCategory resource. All the
GlossaryCategories and GlossaryTerms nested directly
under the specified GlossaryCategory will be moved one
level up to the parent in the hierarchy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_delete_glossary_category():
# Create a client
client = dataplex_v1 . BusinessGlossaryServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . DeleteGlossaryCategoryRequest (
name="name_value",
)
# Make the request
client. delete_glossary_category (request=request)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.DeleteGlossaryCategoryRequest , dict]
The request object. Delete GlossaryCategory Request
name
str
Required. The name of the GlossaryCategory to delete. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id} This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_glossary_term
delete_glossary_term (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . business_glossary . DeleteGlossaryTermRequest ,
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
Deletes a GlossaryTerm resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_delete_glossary_term():
# Create a client
client = dataplex_v1 . BusinessGlossaryServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . DeleteGlossaryTermRequest (
name="name_value",
)
# Make the request
client. delete_glossary_term (request=request)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.DeleteGlossaryTermRequest , dict]
The request object. Delete GlossaryTerm Request
name
str
Required. The name of the GlossaryTerm to delete. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/terms/{term_id} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
BusinessGlossaryServiceClient
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
BusinessGlossaryServiceClient
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
BusinessGlossaryServiceClient
The constructed client.
get_glossary
get_glossary (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . business_glossary . GetGlossaryRequest , dict
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
) - > google . cloud . dataplex_v1 . types . business_glossary . Glossary
Gets a Glossary resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_get_glossary():
# Create a client
client = dataplex_v1 . BusinessGlossaryServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . GetGlossaryRequest (
name="name_value",
)
# Make the request
response = client. get_glossary (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.GetGlossaryRequest , dict]
The request object. Get Glossary Request
name
str
Required. The name of the Glossary to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.Glossary
A Glossary represents a collection of GlossaryCategories and GlossaryTerms defined by the user. Glossary is a top level resource and is the Google Cloud parent resource of all the GlossaryCategories and GlossaryTerms within it.
get_glossary_category
get_glossary_category (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . business_glossary . GetGlossaryCategoryRequest ,
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
) - > google . cloud . dataplex_v1 . types . business_glossary . GlossaryCategory
Gets a GlossaryCategory resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_get_glossary_category():
# Create a client
client = dataplex_v1 . BusinessGlossaryServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . GetGlossaryCategoryRequest (
name="name_value",
)
# Make the request
response = client. get_glossary_category (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.GetGlossaryCategoryRequest , dict]
The request object. Get GlossaryCategory Request
name
str
Required. The name of the GlossaryCategory to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.GlossaryCategory
A GlossaryCategory represents a collection of GlossaryCategories and GlossaryTerms within a Glossary that are related to each other.
get_glossary_term
get_glossary_term (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . business_glossary . GetGlossaryTermRequest ,
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
) - > google . cloud . dataplex_v1 . types . business_glossary . GlossaryTerm
Gets a GlossaryTerm resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_get_glossary_term():
# Create a client
client = dataplex_v1 . BusinessGlossaryServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . GetGlossaryTermRequest (
name="name_value",
)
# Make the request
response = client. get_glossary_term (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.GetGlossaryTermRequest , dict]
The request object. Get GlossaryTerm Request
name
str
Required. The name of the GlossaryTerm to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/terms/{term_id} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.GlossaryTerm
GlossaryTerms are the core of Glossary. A GlossaryTerm holds a rich text description that can be attached to Entries or specific columns to enrich them.
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
glossary_category_path
glossary_category_path (
project : str , location : str , glossary : str , glossary_category : str
) - > str
Returns a fully-qualified glossary_category string.
glossary_path
glossary_path ( project : str , location : str , glossary : str ) - > str
Returns a fully-qualified glossary string.
glossary_term_path
glossary_term_path (
project : str , location : str , glossary : str , glossary_term : str
) - > str
Returns a fully-qualified glossary_term string.
list_glossaries
list_glossaries (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . business_glossary . ListGlossariesRequest , dict
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
google . cloud . dataplex_v1 . services . business_glossary_service . pagers . ListGlossariesPager
)
Lists Glossary resources in a project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_list_glossaries():
# Create a client
client = dataplex_v1 . BusinessGlossaryServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . ListGlossariesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_glossaries (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.ListGlossariesRequest , dict]
The request object. List Glossaries Request
parent
str
Required. The parent, which has this collection of Glossaries. Format: projects/{project_id_or_number}/locations/{location_id} where location_id refers to a Google Cloud region. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.services.business_glossary_service.pagers.ListGlossariesPager
List Glossaries Response Iterating over this object will yield results and resolve additional pages automatically.
list_glossary_categories
list_glossary_categories (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . business_glossary . ListGlossaryCategoriesRequest ,
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
google . cloud . dataplex_v1 . services . business_glossary_service . pagers . ListGlossaryCategoriesPager
)
Lists GlossaryCategory resources in a Glossary.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_list_glossary_categories():
# Create a client
client = dataplex_v1 . BusinessGlossaryServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . ListGlossaryCategoriesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_glossary_categories (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.ListGlossaryCategoriesRequest , dict]
The request object. List GlossaryCategories Request
parent
str
Required. The parent, which has this collection of GlossaryCategories. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} Location is the Google Cloud region. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.services.business_glossary_service.pagers.ListGlossaryCategoriesPager
List GlossaryCategories Response Iterating over this object will yield results and resolve additional pages automatically.
list_glossary_terms
list_glossary_terms (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . business_glossary . ListGlossaryTermsRequest ,
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
google . cloud . dataplex_v1 . services . business_glossary_service . pagers . ListGlossaryTermsPager
)
Lists GlossaryTerm resources in a Glossary.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_list_glossary_terms():
# Create a client
client = dataplex_v1 . BusinessGlossaryServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . ListGlossaryTermsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_glossary_terms (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.ListGlossaryTermsRequest , dict]
The request object. List GlossaryTerms Request
parent
str
Required. The parent, which has this collection of GlossaryTerms. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} where location_id refers to a Google Cloud region. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.services.business_glossary_service.pagers.ListGlossaryTermsPager
List GlossaryTerms Response Iterating over this object will yield results and resolve additional pages automatically.
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
parse_glossary_category_path
parse_glossary_category_path ( path : str ) - > typing . Dict [ str , str ]
Parses a glossary_category path into its component segments.
parse_glossary_path
parse_glossary_path ( path : str ) - > typing . Dict [ str , str ]
Parses a glossary path into its component segments.
parse_glossary_term_path
parse_glossary_term_path ( path : str ) - > typing . Dict [ str , str ]
Parses a glossary_term path into its component segments.
update_glossary
update_glossary (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . business_glossary . UpdateGlossaryRequest , dict
]
] = None ,
* ,
glossary : typing . Optional [
google . cloud . dataplex_v1 . types . business_glossary . Glossary
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
Updates a Glossary resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_update_glossary():
# Create a client
client = dataplex_v1 . BusinessGlossaryServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . UpdateGlossaryRequest (
)
# Make the request
operation = client. update_glossary (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.UpdateGlossaryRequest , dict]
The request object. Update Glossary Request
glossary
google.cloud.dataplex_v1.types.Glossary
Required. The Glossary to update. The Glossary's name field is used to identify the Glossary to update. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} This corresponds to the glossary field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. The list of fields to update. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Glossary A Glossary represents a collection of GlossaryCategories and GlossaryTerms defined by the user. Glossary is a top level resource and is the Google Cloud parent resource of all the GlossaryCategories and GlossaryTerms within it.
update_glossary_category
update_glossary_category (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . business_glossary . UpdateGlossaryCategoryRequest ,
dict ,
]
] = None ,
* ,
category : typing . Optional [
google . cloud . dataplex_v1 . types . business_glossary . GlossaryCategory
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
) - > google . cloud . dataplex_v1 . types . business_glossary . GlossaryCategory
Updates a GlossaryCategory resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_update_glossary_category():
# Create a client
client = dataplex_v1 . BusinessGlossaryServiceClient ()
# Initialize request argument(s)
category = dataplex_v1 . GlossaryCategory ()
category.parent = "parent_value"
request = dataplex_v1 . UpdateGlossaryCategoryRequest (
category=category,
)
# Make the request
response = client. update_glossary_category (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.UpdateGlossaryCategoryRequest , dict]
The request object. Update GlossaryCategory Request
category
google.cloud.dataplex_v1.types.GlossaryCategory
Required. The GlossaryCategory to update. The GlossaryCategory's name field is used to identify the GlossaryCategory to update. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id} This corresponds to the category field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. The list of fields to update. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.GlossaryCategory
A GlossaryCategory represents a collection of GlossaryCategories and GlossaryTerms within a Glossary that are related to each other.
update_glossary_term
update_glossary_term (
request : typing . Optional [
typing . Union [
google . cloud . dataplex_v1 . types . business_glossary . UpdateGlossaryTermRequest ,
dict ,
]
] = None ,
* ,
term : typing . Optional [
google . cloud . dataplex_v1 . types . business_glossary . GlossaryTerm
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
) - > google . cloud . dataplex_v1 . types . business_glossary . GlossaryTerm
Updates a GlossaryTerm resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_update_glossary_term():
# Create a client
client = dataplex_v1 . BusinessGlossaryServiceClient ()
# Initialize request argument(s)
term = dataplex_v1 . GlossaryTerm ()
term.parent = "parent_value"
request = dataplex_v1 . UpdateGlossaryTermRequest (
term=term,
)
# Make the request
response = client. update_glossary_term (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataplex_v1.types.UpdateGlossaryTermRequest , dict]
The request object. Update GlossaryTerm Request
term
google.cloud.dataplex_v1.types.GlossaryTerm
Required. The GlossaryTerm to update. The GlossaryTerm's name field is used to identify the GlossaryTerm to update. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/terms/{term_id} This corresponds to the term field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. The list of fields to update. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataplex_v1.types.GlossaryTerm
GlossaryTerms are the core of Glossary. A GlossaryTerm holds a rich text description that can be attached to Entries or specific columns to enrich them.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
