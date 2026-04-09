---
title: "Class ApiKeysClient (0.7.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/apikeys/latest/google.cloud.api_keys_v2.services.api_keys.ApiKeysClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/apikeys/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/apikeys/latest/google.cloud.api_keys_v2.services.api_keys.ApiKeysClient
  title: "Class ApiKeysClient (0.7.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class ApiKeysClient (0.7.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
0.7.0 (latest)
0.6.0
0.5.17
0.4.1
0.3.0
0.2.2
0.1.0
ApiKeysClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . api_keys_v2 . services . api_keys . transports . base . ApiKeysTransport ,
typing . Callable [
[ ... ],
google . cloud . api_keys_v2 . services . api_keys . transports . base . ApiKeysTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Manages the API keys associated with projects.
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
ApiKeysTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
ApiKeysClient
ApiKeysClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . api_keys_v2 . services . api_keys . transports . base . ApiKeysTransport ,
typing . Callable [
[ ... ],
google . cloud . api_keys_v2 . services . api_keys . transports . base . ApiKeysTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the api keys client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,ApiKeysTransport,Callable[..., ApiKeysTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the ApiKeysTransport constructor. If set to None, a transport is chosen automatically.
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
create_key
create_key (
request : typing . Optional [
typing . Union [ google . cloud . api_keys_v2 . types . apikeys . CreateKeyRequest , dict ]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
key : typing . Optional [ google . cloud . api_keys_v2 . types . resources . Key ] = None ,
key_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Creates a new API key.
NOTE: Key is a global resource; hence the only supported value
for location is global .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import api_keys_v2
def sample_create_key():
# Create a client
client = api_keys_v2 . ApiKeysClient ()
# Initialize request argument(s)
request = api_keys_v2 . CreateKeyRequest (
parent="parent_value",
)
# Make the request
operation = client. create_key (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.api_keys_v2.types.CreateKeyRequest , dict]
The request object. Request message for CreateKey method.
parent
str
Required. The project in which the API key is created. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
key
google.cloud.api_keys_v2.types.Key
Required. The API key fields to set at creation time. You can configure only the display_name , restrictions , and annotations fields. This corresponds to the key field on the request instance; if request is provided, this should not be set.
key_id
str
User specified key id (optional). If specified, it will become the final component of the key resource name. The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the id must match the regular expression: a-z ? . The id must NOT be a UUID-like string. This corresponds to the key_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Key The representation of a key managed by the API Keys API.
delete_key
delete_key (
request : typing . Optional [
typing . Union [ google . cloud . api_keys_v2 . types . apikeys . DeleteKeyRequest , dict ]
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
Deletes an API key. Deleted key can be retrieved within 30 days
of deletion. Afterward, key will be purged from the project.
NOTE: Key is a global resource; hence the only supported value
for location is global .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import api_keys_v2
def sample_delete_key():
# Create a client
client = api_keys_v2 . ApiKeysClient ()
# Initialize request argument(s)
request = api_keys_v2 . DeleteKeyRequest (
name="name_value",
)
# Make the request
operation = client. delete_key (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.api_keys_v2.types.DeleteKeyRequest , dict]
The request object. Request message for DeleteKey method.
name
str
Required. The resource name of the API key to be deleted. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Key The representation of a key managed by the API Keys API.
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
ApiKeysClient
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
ApiKeysClient
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
ApiKeysClient
The constructed client.
get_key
get_key (
request : typing . Optional [
typing . Union [ google . cloud . api_keys_v2 . types . apikeys . GetKeyRequest , dict ]
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
) - > google . cloud . api_keys_v2 . types . resources . Key
Gets the metadata for an API key. The key string of the API key
isn't included in the response.
NOTE: Key is a global resource; hence the only supported value
for location is global .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import api_keys_v2
def sample_get_key():
# Create a client
client = api_keys_v2 . ApiKeysClient ()
# Initialize request argument(s)
request = api_keys_v2 . GetKeyRequest (
name="name_value",
)
# Make the request
response = client. get_key (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.api_keys_v2.types.GetKeyRequest , dict]
The request object. Request message for GetKey method.
name
str
Required. The resource name of the API key to get. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.api_keys_v2.types.Key
The representation of a key managed by the API Keys API.
get_key_string
get_key_string (
request : typing . Optional [
typing . Union [ google . cloud . api_keys_v2 . types . apikeys . GetKeyStringRequest , dict ]
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
) - > google . cloud . api_keys_v2 . types . apikeys . GetKeyStringResponse
Get the key string for an API key.
NOTE: Key is a global resource; hence the only supported value
for location is global .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import api_keys_v2
def sample_get_key_string():
# Create a client
client = api_keys_v2 . ApiKeysClient ()
# Initialize request argument(s)
request = api_keys_v2 . GetKeyStringRequest (
name="name_value",
)
# Make the request
response = client. get_key_string (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.api_keys_v2.types.GetKeyStringRequest , dict]
The request object. Request message for GetKeyString method.
name
str
Required. The resource name of the API key to be retrieved. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.api_keys_v2.types.GetKeyStringResponse
Response message for GetKeyString method.
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
key_path
key_path ( project : str , location : str , key : str ) - > str
Returns a fully-qualified key string.
list_keys
list_keys (
request : typing . Optional [
typing . Union [ google . cloud . api_keys_v2 . types . apikeys . ListKeysRequest , dict ]
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
) - > google . cloud . api_keys_v2 . services . api_keys . pagers . ListKeysPager
Lists the API keys owned by a project. The key string of the API
key isn't included in the response.
NOTE: Key is a global resource; hence the only supported value
for location is global .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import api_keys_v2
def sample_list_keys():
# Create a client
client = api_keys_v2 . ApiKeysClient ()
# Initialize request argument(s)
request = api_keys_v2 . ListKeysRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_keys (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.api_keys_v2.types.ListKeysRequest , dict]
The request object. Request message for ListKeys method.
parent
str
Required. Lists all API keys associated with this project. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.api_keys_v2.services.api_keys.pagers.ListKeysPager
Response message for ListKeys method. Iterating over this object will yield results and resolve additional pages automatically.
lookup_key
lookup_key (
request : typing . Optional [
typing . Union [ google . cloud . api_keys_v2 . types . apikeys . LookupKeyRequest , dict ]
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
) - > google . cloud . api_keys_v2 . types . apikeys . LookupKeyResponse
Find the parent project and resource name of the API key that
matches the key string in the request. If the API key has been
purged, resource name will not be set. The service account must
have the apikeys.keys.lookup permission on the parent
project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import api_keys_v2
def sample_lookup_key():
# Create a client
client = api_keys_v2 . ApiKeysClient ()
# Initialize request argument(s)
request = api_keys_v2 . LookupKeyRequest (
key_string="key_string_value",
)
# Make the request
response = client. lookup_key (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.api_keys_v2.types.LookupKeyRequest , dict]
The request object. Request message for LookupKey method.
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
google.cloud.api_keys_v2.types.LookupKeyResponse
Response message for LookupKey method.
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
parse_key_path
parse_key_path ( path : str ) - > typing . Dict [ str , str ]
Parses a key path into its component segments.
undelete_key
undelete_key (
request : typing . Optional [
typing . Union [ google . cloud . api_keys_v2 . types . apikeys . UndeleteKeyRequest , dict ]
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
Undeletes an API key which was deleted within 30 days.
NOTE: Key is a global resource; hence the only supported value
for location is global .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import api_keys_v2
def sample_undelete_key():
# Create a client
client = api_keys_v2 . ApiKeysClient ()
# Initialize request argument(s)
request = api_keys_v2 . UndeleteKeyRequest (
name="name_value",
)
# Make the request
operation = client. undelete_key (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.api_keys_v2.types.UndeleteKeyRequest , dict]
The request object. Request message for UndeleteKey method.
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
An object representing a long-running operation. The result type for the operation will be Key The representation of a key managed by the API Keys API.
update_key
update_key (
request : typing . Optional [
typing . Union [ google . cloud . api_keys_v2 . types . apikeys . UpdateKeyRequest , dict ]
] = None ,
* ,
key : typing . Optional [ google . cloud . api_keys_v2 . types . resources . Key ] = None ,
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
Patches the modifiable fields of an API key. The key string of
the API key isn't included in the response.
NOTE: Key is a global resource; hence the only supported value
for location is global .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import api_keys_v2
def sample_update_key():
# Create a client
client = api_keys_v2 . ApiKeysClient ()
# Initialize request argument(s)
request = api_keys_v2 . UpdateKeyRequest (
)
# Make the request
operation = client. update_key (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.api_keys_v2.types.UpdateKeyRequest , dict]
The request object. Request message for UpdateKey method.
key
google.cloud.api_keys_v2.types.Key
Required. Set the name field to the resource name of the API key to be updated. You can update only the display_name , restrictions , and annotations fields. This corresponds to the key field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
The field mask specifies which fields to be updated as part of this request. All other fields are ignored. Mutable fields are: display_name , restrictions , and annotations . If an update mask is not provided, the service treats it as an implied mask equivalent to all allowed fields that are set on the wire. If the field mask has a special value "*", the service treats it equivalent to replace all allowed mutable fields. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Key The representation of a key managed by the API Keys API.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
