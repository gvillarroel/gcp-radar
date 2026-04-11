---
title: "Class AdaptationAsyncClient (2.38.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/speech/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.adaptation.AdaptationAsyncClient
  title: "Class AdaptationAsyncClient (2.38.0) \_|\_ Python client libraries \_|\_\
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
Class AdaptationAsyncClient (2.38.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.38.0 (latest)
2.37.0
2.36.1
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.1
2.27.0
2.26.1
2.25.1
2.24.1
2.23.0
2.22.0
2.21.1
2.20.1
2.19.0
2.18.0
2.17.3
2.16.2
2.15.1
2.14.1
2.13.1
2.12.0
2.11.1
2.10.0
2.9.3
2.8.0
2.7.0
2.6.0
2.5.1
2.4.1
2.3.0
2.2.1
2.1.0
2.0.1
1.3.4
1.2.0
1.1.0
AdaptationAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . speech_v1 . services . adaptation . transports . base . AdaptationTransport ,
typing . Callable [
[ ... ],
google . cloud . speech_v1 . services . adaptation . transports . base . AdaptationTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Service that implements Google Cloud Speech Adaptation API.
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
AdaptationTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
AdaptationAsyncClient
AdaptationAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . speech_v1 . services . adaptation . transports . base . AdaptationTransport ,
typing . Callable [
[ ... ],
google . cloud . speech_v1 . services . adaptation . transports . base . AdaptationTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the adaptation async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,AdaptationTransport,Callable[..., AdaptationTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the AdaptationTransport constructor. If set to None, a transport is chosen automatically.
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
create_custom_class
create_custom_class (
request : typing . Optional [
typing . Union [
google . cloud . speech_v1 . types . cloud_speech_adaptation . CreateCustomClassRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
custom_class : typing . Optional [
google . cloud . speech_v1 . types . resource . CustomClass
] = None ,
custom_class_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . speech_v1 . types . resource . CustomClass
Create a custom class.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import speech_v1
async def sample_create_custom_class():
# Create a client
client = speech_v1. AdaptationAsyncClient ()
# Initialize request argument(s)
request = speech_v1.CreateCustomClassRequest(
parent="parent_value",
custom_class_id="custom_class_id_value",
)
# Make the request
response = await client. create_custom_class (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.speech_v1.types.CreateCustomClassRequest , dict]]
The request object. Message sent by the client for the CreateCustomClass method.
parent
str
Required. The parent resource where this custom class will be created. Format: projects/{project}/locations/{location}/customClasses Speech-to-Text supports three locations: global , us (US North America), and eu (Europe). If you are calling the speech.googleapis.com endpoint, use the global location. To specify a region, use a regional endpoint https://cloud.google.com/speech-to-text/docs/endpoints __ with matching us or eu location value. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
custom_class
CustomClass
Required. The custom class to create. This corresponds to the custom_class field on the request instance; if request is provided, this should not be set.
custom_class_id
str
Required. The ID to use for the custom class, which will become the final component of the custom class' resource name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters. This corresponds to the custom_class_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.speech_v1.types.CustomClass
A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases.
create_phrase_set
create_phrase_set (
request : typing . Optional [
typing . Union [
google . cloud . speech_v1 . types . cloud_speech_adaptation . CreatePhraseSetRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
phrase_set : typing . Optional [ google . cloud . speech_v1 . types . resource . PhraseSet ] = None ,
phrase_set_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . speech_v1 . types . resource . PhraseSet
Create a set of phrase hints. Each item in the set
can be a single word or a multi-word phrase. The items
in the PhraseSet are favored by the recognition model
when you send a call that includes the PhraseSet.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import speech_v1
async def sample_create_phrase_set():
# Create a client
client = speech_v1. AdaptationAsyncClient ()
# Initialize request argument(s)
request = speech_v1.CreatePhraseSetRequest(
parent="parent_value",
phrase_set_id="phrase_set_id_value",
)
# Make the request
response = await client. create_phrase_set (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.speech_v1.types.CreatePhraseSetRequest , dict]]
The request object. Message sent by the client for the CreatePhraseSet method.
parent
str
Required. The parent resource where this phrase set will be created. Format: projects/{project}/locations/{location} Speech-to-Text supports three locations: global , us (US North America), and eu (Europe). If you are calling the speech.googleapis.com endpoint, use the global location. To specify a region, use a regional endpoint https://cloud.google.com/speech-to-text/docs/endpoints __ with matching us or eu location value. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
phrase_set
PhraseSet
Required. The phrase set to create. This corresponds to the phrase_set field on the request instance; if request is provided, this should not be set.
phrase_set_id
str
Required. The ID to use for the phrase set, which will become the final component of the phrase set's resource name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters. This corresponds to the phrase_set_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.speech_v1.types.PhraseSet
Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
custom_class_path
custom_class_path ( project : str , location : str , custom_class : str ) - > str
Returns a fully-qualified custom_class string.
delete_custom_class
delete_custom_class (
request : typing . Optional [
typing . Union [
google . cloud . speech_v1 . types . cloud_speech_adaptation . DeleteCustomClassRequest ,
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
Delete a custom class.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import speech_v1
async def sample_delete_custom_class():
# Create a client
client = speech_v1. AdaptationAsyncClient ()
# Initialize request argument(s)
request = speech_v1.DeleteCustomClassRequest(
name="name_value",
)
# Make the request
await client. delete_custom_class (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.speech_v1.types.DeleteCustomClassRequest , dict]]
The request object. Message sent by the client for the DeleteCustomClass method.
name
str
Required. The name of the custom class to delete. Format: projects/{project}/locations/{location}/customClasses/{custom_class} Speech-to-Text supports three locations: global , us (US North America), and eu (Europe). If you are calling the speech.googleapis.com endpoint, use the global location. To specify a region, use a regional endpoint https://cloud.google.com/speech-to-text/docs/endpoints __ with matching us or eu location value. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_phrase_set
delete_phrase_set (
request : typing . Optional [
typing . Union [
google . cloud . speech_v1 . types . cloud_speech_adaptation . DeletePhraseSetRequest ,
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
Delete a phrase set.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import speech_v1
async def sample_delete_phrase_set():
# Create a client
client = speech_v1. AdaptationAsyncClient ()
# Initialize request argument(s)
request = speech_v1.DeletePhraseSetRequest(
name="name_value",
)
# Make the request
await client. delete_phrase_set (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.speech_v1.types.DeletePhraseSetRequest , dict]]
The request object. Message sent by the client for the DeletePhraseSet method.
name
str
Required. The name of the phrase set to delete. Format: projects/{project}/locations/{location}/phraseSets/{phrase_set} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
AdaptationAsyncClient
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
AdaptationAsyncClient
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
AdaptationAsyncClient
The constructed client.
get_custom_class
get_custom_class (
request : typing . Optional [
typing . Union [
google . cloud . speech_v1 . types . cloud_speech_adaptation . GetCustomClassRequest ,
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
) - > google . cloud . speech_v1 . types . resource . CustomClass
Get a custom class.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import speech_v1
async def sample_get_custom_class():
# Create a client
client = speech_v1. AdaptationAsyncClient ()
# Initialize request argument(s)
request = speech_v1.GetCustomClassRequest(
name="name_value",
)
# Make the request
response = await client. get_custom_class (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.speech_v1.types.GetCustomClassRequest , dict]]
The request object. Message sent by the client for the GetCustomClass method.
name
str
Required. The name of the custom class to retrieve. Format: projects/{project}/locations/{location}/customClasses/{custom_class} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.speech_v1.types.CustomClass
A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases.
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
get_phrase_set
get_phrase_set (
request : typing . Optional [
typing . Union [
google . cloud . speech_v1 . types . cloud_speech_adaptation . GetPhraseSetRequest ,
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
) - > google . cloud . speech_v1 . types . resource . PhraseSet
Get a phrase set.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import speech_v1
async def sample_get_phrase_set():
# Create a client
client = speech_v1. AdaptationAsyncClient ()
# Initialize request argument(s)
request = speech_v1.GetPhraseSetRequest(
name="name_value",
)
# Make the request
response = await client. get_phrase_set (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.speech_v1.types.GetPhraseSetRequest , dict]]
The request object. Message sent by the client for the GetPhraseSet method.
name
str
Required. The name of the phrase set to retrieve. Format: projects/{project}/locations/{location}/phraseSets/{phrase_set} Speech-to-Text supports three locations: global , us (US North America), and eu (Europe). If you are calling the speech.googleapis.com endpoint, use the global location. To specify a region, use a regional endpoint https://cloud.google.com/speech-to-text/docs/endpoints __ with matching us or eu location value. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.speech_v1.types.PhraseSet
Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
get_transport_class
get_transport_class (
label : typing . Optional [ str ] = None ,
) - > typing . Type [
google . cloud . speech_v1 . services . adaptation . transports . base . AdaptationTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
list_custom_classes
list_custom_classes (
request : typing . Optional [
typing . Union [
google . cloud . speech_v1 . types . cloud_speech_adaptation . ListCustomClassesRequest ,
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
) - > google . cloud . speech_v1 . services . adaptation . pagers . ListCustomClassesAsyncPager
List custom classes.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import speech_v1
async def sample_list_custom_classes():
# Create a client
client = speech_v1. AdaptationAsyncClient ()
# Initialize request argument(s)
request = speech_v1.ListCustomClassesRequest(
parent="parent_value",
)
# Make the request
page_result = client. list_custom_classes (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.speech_v1.types.ListCustomClassesRequest , dict]]
The request object. Message sent by the client for the ListCustomClasses method.
parent
str
Required. The parent, which owns this collection of custom classes. Format: projects/{project}/locations/{location}/customClasses Speech-to-Text supports three locations: global , us (US North America), and eu (Europe). If you are calling the speech.googleapis.com endpoint, use the global location. To specify a region, use a regional endpoint https://cloud.google.com/speech-to-text/docs/endpoints __ with matching us or eu location value. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.speech_v1.services.adaptation.pagers.ListCustomClassesAsyncPager
Message returned to the client by the ListCustomClasses method. Iterating over this object will yield results and resolve additional pages automatically.
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
list_phrase_set
list_phrase_set (
request : typing . Optional [
typing . Union [
google . cloud . speech_v1 . types . cloud_speech_adaptation . ListPhraseSetRequest ,
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
) - > google . cloud . speech_v1 . services . adaptation . pagers . ListPhraseSetAsyncPager
List phrase sets.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import speech_v1
async def sample_list_phrase_set():
# Create a client
client = speech_v1. AdaptationAsyncClient ()
# Initialize request argument(s)
request = speech_v1. ListPhraseSetRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_phrase_set (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.speech_v1.types.ListPhraseSetRequest , dict]]
The request object. Message sent by the client for the ListPhraseSet method.
parent
str
Required. The parent, which owns this collection of phrase set. Format: projects/{project}/locations/{location} Speech-to-Text supports three locations: global , us (US North America), and eu (Europe). If you are calling the speech.googleapis.com endpoint, use the global location. To specify a region, use a regional endpoint https://cloud.google.com/speech-to-text/docs/endpoints __ with matching us or eu location value. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.speech_v1.services.adaptation.pagers.ListPhraseSetAsyncPager
Message returned to the client by the ListPhraseSet method. Iterating over this object will yield results and resolve additional pages automatically.
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
parse_custom_class_path
parse_custom_class_path ( path : str ) - > typing . Dict [ str , str ]
Parses a custom_class path into its component segments.
parse_phrase_set_path
parse_phrase_set_path ( path : str ) - > typing . Dict [ str , str ]
Parses a phrase_set path into its component segments.
phrase_set_path
phrase_set_path ( project : str , location : str , phrase_set : str ) - > str
Returns a fully-qualified phrase_set string.
update_custom_class
update_custom_class (
request : typing . Optional [
typing . Union [
google . cloud . speech_v1 . types . cloud_speech_adaptation . UpdateCustomClassRequest ,
dict ,
]
] = None ,
* ,
custom_class : typing . Optional [
google . cloud . speech_v1 . types . resource . CustomClass
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
) - > google . cloud . speech_v1 . types . resource . CustomClass
Update a custom class.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import speech_v1
async def sample_update_custom_class():
# Create a client
client = speech_v1. AdaptationAsyncClient ()
# Initialize request argument(s)
request = speech_v1.UpdateCustomClassRequest(
)
# Make the request
response = await client. update_custom_class (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.speech_v1.types.UpdateCustomClassRequest , dict]]
The request object. Message sent by the client for the UpdateCustomClass method.
custom_class
CustomClass
Required. The custom class to update. The custom class's name field is used to identify the custom class to be updated. Format: projects/{project}/locations/{location}/customClasses/{custom_class} Speech-to-Text supports three locations: global , us (US North America), and eu (Europe). If you are calling the speech.googleapis.com endpoint, use the global location. To specify a region, use a regional endpoint https://cloud.google.com/speech-to-text/docs/endpoints __ with matching us or eu location value. This corresponds to the custom_class field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
The list of fields to be updated. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.speech_v1.types.CustomClass
A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases.
update_phrase_set
update_phrase_set (
request : typing . Optional [
typing . Union [
google . cloud . speech_v1 . types . cloud_speech_adaptation . UpdatePhraseSetRequest ,
dict ,
]
] = None ,
* ,
phrase_set : typing . Optional [ google . cloud . speech_v1 . types . resource . PhraseSet ] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . speech_v1 . types . resource . PhraseSet
Update a phrase set.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import speech_v1
async def sample_update_phrase_set():
# Create a client
client = speech_v1. AdaptationAsyncClient ()
# Initialize request argument(s)
request = speech_v1.UpdatePhraseSetRequest(
)
# Make the request
response = await client. update_phrase_set (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.speech_v1.types.UpdatePhraseSetRequest , dict]]
The request object. Message sent by the client for the UpdatePhraseSet method.
phrase_set
PhraseSet
Required. The phrase set to update. The phrase set's name field is used to identify the set to be updated. Format: projects/{project}/locations/{location}/phraseSets/{phrase_set} Speech-to-Text supports three locations: global , us (US North America), and eu (Europe). If you are calling the speech.googleapis.com endpoint, use the global location. To specify a region, use a regional endpoint https://cloud.google.com/speech-to-text/docs/endpoints __ with matching us or eu location value. This corresponds to the phrase_set field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
The list of fields to be updated. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.speech_v1.types.PhraseSet
Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
