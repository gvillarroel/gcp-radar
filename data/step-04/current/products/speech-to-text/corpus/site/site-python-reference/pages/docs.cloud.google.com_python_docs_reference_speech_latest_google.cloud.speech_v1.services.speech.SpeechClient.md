---
title: "Class SpeechClient (2.38.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.speech.SpeechClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/speech/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/speech/latest/google.cloud.speech_v1.services.speech.SpeechClient
  title: "Class SpeechClient (2.38.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class SpeechClient (2.38.0)
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
SpeechClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . speech_v1 . services . speech . transports . base . SpeechTransport ,
typing . Callable [
[ ... ],
google . cloud . speech_v1 . services . speech . transports . base . SpeechTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Service that implements Google Cloud Speech API.
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
SpeechTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
SpeechClient
SpeechClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . speech_v1 . services . speech . transports . base . SpeechTransport ,
typing . Callable [
[ ... ],
google . cloud . speech_v1 . services . speech . transports . base . SpeechTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the speech client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,SpeechTransport,Callable[..., SpeechTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the SpeechTransport constructor. If set to None, a transport is chosen automatically.
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
custom_class_path
custom_class_path ( project : str , location : str , custom_class : str ) - > str
Returns a fully-qualified custom_class string.
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
SpeechClient
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
SpeechClient
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
SpeechClient
The constructed client.
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
typing . Union [ google . longrunning . operations_pb2 . GetOperationRequest , dict ]
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
list_operations
list_operations (
request : typing . Optional [
typing . Union [ google . longrunning . operations_pb2 . ListOperationsRequest , dict ]
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
long_running_recognize
long_running_recognize (
request : typing . Optional [
typing . Union [
google . cloud . speech_v1 . types . cloud_speech . LongRunningRecognizeRequest , dict
]
] = None ,
* ,
config : typing . Optional [
google . cloud . speech_v1 . types . cloud_speech . RecognitionConfig
] = None ,
audio : typing . Optional [
google . cloud . speech_v1 . types . cloud_speech . RecognitionAudio
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
Performs asynchronous speech recognition: receive results via
the google.longrunning.Operations interface. Returns either an
Operation.error or an Operation.response which contains
a LongRunningRecognizeResponse message. For more information
on asynchronous speech recognition, see the
how-to <https://cloud.google.com/speech-to-text/docs/async-recognize> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import speech_v1
def sample_long_running_recognize():
# Create a client
client = speech_v1.SpeechClient()
# Initialize request argument(s)
config = speech_v1.RecognitionConfig()
config.language_code = "language_code_value"
audio = speech_v1. RecognitionAudio ()
audio.content = b'content_blob'
request = speech_v1. LongRunningRecognizeRequest (
config=config,
audio=audio,
)
# Make the request
operation = client. long_running_recognize (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.speech_v1.types.LongRunningRecognizeRequest , dict]
The request object. The top-level message sent by the client for the LongRunningRecognize method.
config
google.cloud.speech_v1.types.RecognitionConfig
Required. Provides information to the recognizer that specifies how to process the request. This corresponds to the config field on the request instance; if request is provided, this should not be set.
audio
google.cloud.speech_v1.types.RecognitionAudio
Required. The audio data to be recognized. This corresponds to the audio field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be LongRunningRecognizeResponse The only message returned to the client by the LongRunningRecognize method. It contains the result as zero or more sequential SpeechRecognitionResult messages. It is included in the result.response field of the Operation returned by the GetOperation call of the google::longrunning::Operations service.
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
recognize
recognize (
request : typing . Optional [
typing . Union [ google . cloud . speech_v1 . types . cloud_speech . RecognizeRequest , dict ]
] = None ,
* ,
config : typing . Optional [
google . cloud . speech_v1 . types . cloud_speech . RecognitionConfig
] = None ,
audio : typing . Optional [
google . cloud . speech_v1 . types . cloud_speech . RecognitionAudio
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . speech_v1 . types . cloud_speech . RecognizeResponse
Performs synchronous speech recognition: receive
results after all audio has been sent and processed.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import speech_v1
def sample_recognize():
# Create a client
client = speech_v1.SpeechClient()
# Initialize request argument(s)
config = speech_v1.RecognitionConfig()
config.language_code = "language_code_value"
audio = speech_v1. RecognitionAudio ()
audio.content = b'content_blob'
request = speech_v1.RecognizeRequest(
config=config,
audio=audio,
)
# Make the request
response = client. recognize (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.speech_v1.types.RecognizeRequest , dict]
The request object. The top-level message sent by the client for the Recognize method.
config
google.cloud.speech_v1.types.RecognitionConfig
Required. Provides information to the recognizer that specifies how to process the request. This corresponds to the config field on the request instance; if request is provided, this should not be set.
audio
google.cloud.speech_v1.types.RecognitionAudio
Required. The audio data to be recognized. This corresponds to the audio field on the request instance; if request is provided, this should not be set.
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
google.cloud.speech_v1.types.RecognizeResponse
The only message returned to the client by the Recognize method. It contains the result as zero or more sequential SpeechRecognitionResult messages.
streaming_recognize
streaming_recognize (
requests : typing . Optional [
typing . Iterator [
google . cloud . speech_v1 . types . cloud_speech . StreamingRecognizeRequest
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
) - > typing . Iterable [
google . cloud . speech_v1 . types . cloud_speech . StreamingRecognizeResponse
]
Performs bidirectional streaming speech recognition:
receive results while sending audio. This method is only
available via the gRPC API (not REST).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import speech_v1
def sample_streaming_recognize():
# Create a client
client = speech_v1.SpeechClient()
# Initialize request argument(s)
streaming_config = speech_v1.StreamingRecognitionConfig()
streaming_config.config.language_code = "language_code_value"
request = speech_v1.StreamingRecognizeRequest(
streaming_config=streaming_config,
)
# This method expects an iterator which contains
# 'speech_v1.StreamingRecognizeRequest' objects
# Here we create a generator that yields a single `request` for
# demonstrative purposes.
requests = [request]
def request_generator():
for request in requests:
yield request
# Make the request
stream = client. streaming_recognize (requests=request_generator())
# Handle the response
for response in stream:
print(response)
Parameters
Name
Description
requests
Iterator[ google.cloud.speech_v1.types.StreamingRecognizeRequest ]
The request object iterator. The top-level message sent by the client for the StreamingRecognize method. Multiple StreamingRecognizeRequest messages are sent. The first message must contain a streaming_config message and must not contain audio_content . All subsequent messages must contain audio_content and must not contain a streaming_config message.
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
Iterable[ google.cloud.speech_v1.types.StreamingRecognizeResponse ]
StreamingRecognizeResponse is the only message returned to the client by StreamingRecognize. A series of zero or more StreamingRecognizeResponse messages are streamed back to the client. If there is no recognizable audio, and single_utterance is set to false, then no messages are streamed back to the client. Here's an example of a series of \ StreamingRecognizeResponse s that might be returned while processing audio: 1. results { alternatives { transcript: "tube" } stability: 0.01 } 2. results { alternatives { transcript: "to be a" } stability: 0.01 } 3. results { alternatives { transcript: "to be" } stability: 0.9 } results { alternatives { transcript: " or not to be" } stability: 0.01 } 4. results { alternatives { transcript: "to be or not to be" confidence: 0.92 } alternatives { transcript: "to bee or not to bee" } is_final: true } 5. results { alternatives { transcript: " that's" } stability: 0.01 } 6. results { alternatives { transcript: " that is" } stability: 0.9 } results { alternatives { transcript: " the question" } stability: 0.01 } 7. results { alternatives { transcript: " that is the question" confidence: 0.98 } alternatives { transcript: " that was the question" } is_final: true } Notes: - Only two of the above responses #4 and #7 contain final results; they are indicated by is_final: true. Concatenating these together generates the full transcript: "to be or not to be that is the question". - The others contain interim results. #3 and #6 contain two interim \ results\ : the first portion has a high stability and is less likely to change; the second portion has a low stability and is very likely to change. A UI designer might choose to show only high stability results. - The specific stability and confidence values shown above are only for illustrative purposes. Actual values may vary. - In each response, only one of these fields will be set: error, speech_event_type, or one or more (repeated) results.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
