---
title: "Class VideoStitcherServiceClient (0.11.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/videostitcher/latest/google.cloud.video.stitcher_v1.services.video_stitcher_service.VideoStitcherServiceClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/videostitcher/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/videostitcher/latest/google.cloud.video.stitcher_v1.services.video_stitcher_service.VideoStitcherServiceClient
  title: "Class VideoStitcherServiceClient (0.11.0) \_|\_ Python client libraries\
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
Class VideoStitcherServiceClient (0.11.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.11.0 (latest)
0.10.0
0.9.0
0.8.0
0.7.18
0.6.1
0.5.1
0.4.0
0.3.2
0.2.1
0.1.2
VideoStitcherServiceClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . video . stitcher_v1 . services . video_stitcher_service . transports . base . VideoStitcherServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . video . stitcher_v1 . services . video_stitcher_service . transports . base . VideoStitcherServiceTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Video-On-Demand content stitching API allows you to insert
ads into (VoD) video on demand files. You will be able to render
custom scrubber bars with highlighted ads, enforce ad policies,
allow seamless playback and tracking on native players and
monetize content with any standard VMAP compliant ad server.
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
VideoStitcherServiceTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
VideoStitcherServiceClient
VideoStitcherServiceClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . video . stitcher_v1 . services . video_stitcher_service . transports . base . VideoStitcherServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . video . stitcher_v1 . services . video_stitcher_service . transports . base . VideoStitcherServiceTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the video stitcher service client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,VideoStitcherServiceTransport,Callable[..., VideoStitcherServiceTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the VideoStitcherServiceTransport constructor. If set to None, a transport is chosen automatically.
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
typing . Union [ google . longrunning . operations_pb2 . CancelOperationRequest , dict ]
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
cdn_key_path
cdn_key_path ( project : str , location : str , cdn_key : str ) - > str
Returns a fully-qualified cdn_key string.
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
create_cdn_key
create_cdn_key (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . CreateCdnKeyRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
cdn_key : typing . Optional [
google . cloud . video . stitcher_v1 . types . cdn_keys . CdnKey
] = None ,
cdn_key_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Creates a new CDN key.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_create_cdn_key():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . CreateCdnKeyRequest (
parent="parent_value",
cdn_key_id="cdn_key_id_value",
)
# Make the request
operation = client. create_cdn_key (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.CreateCdnKeyRequest , dict]
The request object. Request message for VideoStitcherService.createCdnKey.
parent
str
Required. The project in which the CDN key should be created, in the form of projects/{project_number}/locations/{location} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
cdn_key
google.cloud.video.stitcher_v1.types.CdnKey
Required. The CDN key resource to create. This corresponds to the cdn_key field on the request instance; if request is provided, this should not be set.
cdn_key_id
str
Required. The ID to use for the CDN key, which will become the final component of the CDN key's resource name. This value should conform to RFC-1034, which restricts to lower-case letters, numbers, and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. This corresponds to the cdn_key_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be CdnKey Configuration for a CDN key. Used by the Video Stitcher to sign URIs for fetching video manifests and signing media segments for playback.
create_live_config
create_live_config (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . CreateLiveConfigRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
live_config : typing . Optional [
google . cloud . video . stitcher_v1 . types . live_configs . LiveConfig
] = None ,
live_config_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Registers the live config with the provided unique ID
in the specified region.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_create_live_config():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
live_config = stitcher_v1 . LiveConfig ()
live_config.source_uri = "source_uri_value"
live_config.ad_tracking = "SERVER"
request = stitcher_v1 . CreateLiveConfigRequest (
parent="parent_value",
live_config_id="live_config_id_value",
live_config=live_config,
)
# Make the request
operation = client. create_live_config (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.CreateLiveConfigRequest , dict]
The request object. Request message for VideoStitcherService.createLiveConfig
parent
str
Required. The project in which the live config should be created, in the form of projects/{project_number}/locations/{location} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
live_config
google.cloud.video.stitcher_v1.types.LiveConfig
Required. The live config resource to create. This corresponds to the live_config field on the request instance; if request is provided, this should not be set.
live_config_id
str
Required. The unique identifier ID to use for the live config. This corresponds to the live_config_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be LiveConfig Metadata for used to register live configs.
create_live_session
create_live_session (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . CreateLiveSessionRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
live_session : typing . Optional [
google . cloud . video . stitcher_v1 . types . sessions . LiveSession
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . video . stitcher_v1 . types . sessions . LiveSession
Creates a new live session.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_create_live_session():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
live_session = stitcher_v1 . LiveSession ()
live_session.live_config = "live_config_value"
request = stitcher_v1 . CreateLiveSessionRequest (
parent="parent_value",
live_session=live_session,
)
# Make the request
response = client. create_live_session (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.CreateLiveSessionRequest , dict]
The request object. Request message for VideoStitcherService.createLiveSession.
parent
str
Required. The project and location in which the live session should be created, in the form of projects/{project_number}/locations/{location} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
live_session
google.cloud.video.stitcher_v1.types.LiveSession
Required. Parameters for creating a live session. This corresponds to the live_session field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.types.LiveSession
Metadata for a live session. The session expires 5 minutes after the client stops fetching the session's playlists.
create_slate
create_slate (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . CreateSlateRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
slate : typing . Optional [ google . cloud . video . stitcher_v1 . types . slates . Slate ] = None ,
slate_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Creates a slate.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_create_slate():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . CreateSlateRequest (
parent="parent_value",
slate_id="slate_id_value",
)
# Make the request
operation = client. create_slate (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.CreateSlateRequest , dict]
The request object. Request message for VideoStitcherService.createSlate.
parent
str
Required. The project in which the slate should be created, in the form of projects/{project_number}/locations/{location} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
slate
google.cloud.video.stitcher_v1.types.Slate
Required. The slate to create. This corresponds to the slate field on the request instance; if request is provided, this should not be set.
slate_id
str
Required. The unique identifier for the slate. This value should conform to RFC-1034, which restricts to lower-case letters, numbers, and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. This corresponds to the slate_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Slate Slate object
create_vod_config
create_vod_config (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . CreateVodConfigRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
vod_config : typing . Optional [
google . cloud . video . stitcher_v1 . types . vod_configs . VodConfig
] = None ,
vod_config_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Registers the VOD config with the provided unique ID
in the specified region.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_create_vod_config():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
vod_config = stitcher_v1 . VodConfig ()
vod_config.source_uri = "source_uri_value"
vod_config.ad_tag_uri = "ad_tag_uri_value"
request = stitcher_v1 . CreateVodConfigRequest (
parent="parent_value",
vod_config_id="vod_config_id_value",
vod_config=vod_config,
)
# Make the request
operation = client. create_vod_config (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.CreateVodConfigRequest , dict]
The request object. Request message for VideoStitcherService.createVodConfig
parent
str
Required. The project in which the VOD config should be created, in the form of projects/{project_number}/locations/{location} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
vod_config
google.cloud.video.stitcher_v1.types.VodConfig
Required. The VOD config resource to create. This corresponds to the vod_config field on the request instance; if request is provided, this should not be set.
vod_config_id
str
Required. The unique identifier ID to use for the VOD config. This corresponds to the vod_config_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be VodConfig Metadata used to register VOD configs.
create_vod_session
create_vod_session (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . CreateVodSessionRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
vod_session : typing . Optional [
google . cloud . video . stitcher_v1 . types . sessions . VodSession
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . video . stitcher_v1 . types . sessions . VodSession
Creates a client side playback VOD session and
returns the full tracking and playback metadata of the
session.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_create_vod_session():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
vod_session = stitcher_v1 . VodSession ()
vod_session.ad_tracking = "SERVER"
request = stitcher_v1 . CreateVodSessionRequest (
parent="parent_value",
vod_session=vod_session,
)
# Make the request
response = client. create_vod_session (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.CreateVodSessionRequest , dict]
The request object. Request message for VideoStitcherService.createVodSession
parent
str
Required. The project and location in which the VOD session should be created, in the form of projects/{project_number}/locations/{location} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
vod_session
google.cloud.video.stitcher_v1.types.VodSession
Required. Parameters for creating a session. This corresponds to the vod_session field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.types.VodSession
Metadata for a VOD session. The session expires 4 hours after its creation.
delete_cdn_key
delete_cdn_key (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . DeleteCdnKeyRequest ,
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
Deletes the specified CDN key.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_delete_cdn_key():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . DeleteCdnKeyRequest (
name="name_value",
)
# Make the request
operation = client. delete_cdn_key (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.DeleteCdnKeyRequest , dict]
The request object. Request message for VideoStitcherService.deleteCdnKey.
name
str
Required. The name of the CDN key to be deleted, in the form of projects/{project_number}/locations/{location}/cdnKeys/{id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_live_config
delete_live_config (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . DeleteLiveConfigRequest ,
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
Deletes the specified live config.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_delete_live_config():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . DeleteLiveConfigRequest (
name="name_value",
)
# Make the request
operation = client. delete_live_config (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.DeleteLiveConfigRequest , dict]
The request object. Request message for VideoStitcherService.deleteLiveConfig.
name
str
Required. The name of the live config to be deleted, in the form of projects/{project_number}/locations/{location}/liveConfigs/{id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
typing . Union [ google . longrunning . operations_pb2 . DeleteOperationRequest , dict ]
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
delete_slate
delete_slate (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . DeleteSlateRequest ,
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
Deletes the specified slate.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_delete_slate():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . DeleteSlateRequest (
name="name_value",
)
# Make the request
operation = client. delete_slate (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.DeleteSlateRequest , dict]
The request object. Request message for VideoStitcherService.deleteSlate.
name
str
Required. The name of the slate to be deleted, in the form of projects/{project_number}/locations/{location}/slates/{id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_vod_config
delete_vod_config (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . DeleteVodConfigRequest ,
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
Deletes the specified VOD config.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_delete_vod_config():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . DeleteVodConfigRequest (
name="name_value",
)
# Make the request
operation = client. delete_vod_config (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.DeleteVodConfigRequest , dict]
The request object. Request message for VideoStitcherService.deleteVodConfig.
name
str
Required. The name of the VOD config to be deleted, in the form of projects/{project_number}/locations/{location}/vodConfigs/{id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
VideoStitcherServiceClient
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
VideoStitcherServiceClient
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
VideoStitcherServiceClient
The constructed client.
get_cdn_key
get_cdn_key (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . GetCdnKeyRequest ,
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
) - > google . cloud . video . stitcher_v1 . types . cdn_keys . CdnKey
Returns the specified CDN key.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_get_cdn_key():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . GetCdnKeyRequest (
name="name_value",
)
# Make the request
response = client. get_cdn_key (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.GetCdnKeyRequest , dict]
The request object. Request message for VideoStitcherService.getCdnKey.
name
str
Required. The name of the CDN key to be retrieved, in the form of projects/{project}/locations/{location}/cdnKeys/{id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.types.CdnKey
Configuration for a CDN key. Used by the Video Stitcher to sign URIs for fetching video manifests and signing media segments for playback.
get_live_ad_tag_detail
get_live_ad_tag_detail (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . GetLiveAdTagDetailRequest ,
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
) - > google . cloud . video . stitcher_v1 . types . ad_tag_details . LiveAdTagDetail
Returns the specified ad tag detail for the specified
live session.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_get_live_ad_tag_detail():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . GetLiveAdTagDetailRequest (
name="name_value",
)
# Make the request
response = client. get_live_ad_tag_detail (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.GetLiveAdTagDetailRequest , dict]
The request object. Request message for VideoStitcherService.getLiveAdTagDetail
name
str
Required. The resource name in the form of projects/{project}/locations/{location}/liveSessions/{live_session}/liveAdTagDetails/{live_ad_tag_detail} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.types.LiveAdTagDetail
Information related to the details for one ad tag. This resource is only available for live sessions that do not implement Google Ad Manager ad insertion.
get_live_config
get_live_config (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . GetLiveConfigRequest ,
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
) - > google . cloud . video . stitcher_v1 . types . live_configs . LiveConfig
Returns the specified live config managed by the
Video Stitcher service.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_get_live_config():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . GetLiveConfigRequest (
name="name_value",
)
# Make the request
response = client. get_live_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.GetLiveConfigRequest , dict]
The request object. Request message for VideoStitcherService.getLiveConfig.
name
str
Required. The name of the live config to be retrieved, in the form of projects/{project_number}/locations/{location}/liveConfigs/{id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.types.LiveConfig
Metadata for used to register live configs.
get_live_session
get_live_session (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . GetLiveSessionRequest ,
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
) - > google . cloud . video . stitcher_v1 . types . sessions . LiveSession
Returns the details for the specified live session.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_get_live_session():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . GetLiveSessionRequest (
name="name_value",
)
# Make the request
response = client. get_live_session (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.GetLiveSessionRequest , dict]
The request object. Request message for VideoStitcherService.getSession.
name
str
Required. The name of the live session, in the form of projects/{project_number}/locations/{location}/liveSessions/{id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.types.LiveSession
Metadata for a live session. The session expires 5 minutes after the client stops fetching the session's playlists.
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
get_slate
get_slate (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . GetSlateRequest ,
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
) - > google . cloud . video . stitcher_v1 . types . slates . Slate
Returns the specified slate.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_get_slate():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . GetSlateRequest (
name="name_value",
)
# Make the request
response = client. get_slate (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.GetSlateRequest , dict]
The request object. Request message for VideoStitcherService.getSlate.
name
str
Required. The name of the slate to be retrieved, of the slate, in the form of projects/{project_number}/locations/{location}/slates/{id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.types.Slate
Slate object
get_vod_ad_tag_detail
get_vod_ad_tag_detail (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . GetVodAdTagDetailRequest ,
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
) - > google . cloud . video . stitcher_v1 . types . ad_tag_details . VodAdTagDetail
Returns the specified ad tag detail for the specified
VOD session.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_get_vod_ad_tag_detail():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . GetVodAdTagDetailRequest (
name="name_value",
)
# Make the request
response = client. get_vod_ad_tag_detail (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.GetVodAdTagDetailRequest , dict]
The request object. Request message for VideoStitcherService.getVodAdTagDetail
name
str
Required. The name of the ad tag detail for the specified VOD session, in the form of projects/{project}/locations/{location}/vodSessions/{vod_session_id}/vodAdTagDetails/{vod_ad_tag_detail} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.types.VodAdTagDetail
Information related to the details for one ad tag. This resource is only available for VOD sessions that do not implement Google Ad Manager ad insertion.
get_vod_config
get_vod_config (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . GetVodConfigRequest ,
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
) - > google . cloud . video . stitcher_v1 . types . vod_configs . VodConfig
Returns the specified VOD config managed by the Video
Stitcher API service.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_get_vod_config():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . GetVodConfigRequest (
name="name_value",
)
# Make the request
response = client. get_vod_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.GetVodConfigRequest , dict]
The request object. Request message for VideoStitcherService.getVodConfig.
name
str
Required. The name of the VOD config to be retrieved, in the form of projects/{project_number}/locations/{location}/vodConfigs/{id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.types.VodConfig
Metadata used to register VOD configs.
get_vod_session
get_vod_session (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . GetVodSessionRequest ,
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
) - > google . cloud . video . stitcher_v1 . types . sessions . VodSession
Returns the full tracking, playback metadata, and
relevant ad-ops logs for the specified VOD session.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_get_vod_session():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . GetVodSessionRequest (
name="name_value",
)
# Make the request
response = client. get_vod_session (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.GetVodSessionRequest , dict]
The request object. Request message for VideoStitcherService.getVodSession
name
str
Required. The name of the VOD session to be retrieved, in the form of projects/{project_number}/locations/{location}/vodSessions/{id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.types.VodSession
Metadata for a VOD session. The session expires 4 hours after its creation.
get_vod_stitch_detail
get_vod_stitch_detail (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . GetVodStitchDetailRequest ,
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
) - > google . cloud . video . stitcher_v1 . types . stitch_details . VodStitchDetail
Returns the specified stitching information for the
specified VOD session.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_get_vod_stitch_detail():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . GetVodStitchDetailRequest (
name="name_value",
)
# Make the request
response = client. get_vod_stitch_detail (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.GetVodStitchDetailRequest , dict]
The request object. Request message for VideoStitcherService.getVodStitchDetail.
name
str
Required. The name of the stitch detail in the specified VOD session, in the form of projects/{project}/locations/{location}/vodSessions/{vod_session_id}/vodStitchDetails/{id} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.types.VodStitchDetail
Information related to the interstitial of a VOD session. This resource is only available for VOD sessions that do not implement Google Ad Manager ad insertion.
list_cdn_keys
list_cdn_keys (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListCdnKeysRequest ,
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
google . cloud . video . stitcher_v1 . services . video_stitcher_service . pagers . ListCdnKeysPager
)
Lists all CDN keys in the specified project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_list_cdn_keys():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . ListCdnKeysRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_cdn_keys (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.ListCdnKeysRequest , dict]
The request object. Request message for VideoStitcherService.listCdnKeys.
parent
str
Required. The project that contains the list of CDN keys, in the form of projects/{project_number}/locations/{location} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.services.video_stitcher_service.pagers.ListCdnKeysPager
Response message for VideoStitcher.ListCdnKeys. Iterating over this object will yield results and resolve additional pages automatically.
list_live_ad_tag_details
list_live_ad_tag_details (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListLiveAdTagDetailsRequest ,
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
google . cloud . video . stitcher_v1 . services . video_stitcher_service . pagers . ListLiveAdTagDetailsPager
)
Return the list of ad tag details for the specified
live session.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_list_live_ad_tag_details():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . ListLiveAdTagDetailsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_live_ad_tag_details (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.ListLiveAdTagDetailsRequest , dict]
The request object. Request message for VideoStitcherService.listLiveAdTagDetails.
parent
str
Required. The resource parent in the form of projects/{project}/locations/{location}/liveSessions/{live_session} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.services.video_stitcher_service.pagers.ListLiveAdTagDetailsPager
Response message for VideoStitcherService.listLiveAdTagDetails. Iterating over this object will yield results and resolve additional pages automatically.
list_live_configs
list_live_configs (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListLiveConfigsRequest ,
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
google . cloud . video . stitcher_v1 . services . video_stitcher_service . pagers . ListLiveConfigsPager
)
Lists all live configs managed by the Video Stitcher
that belong to the specified project and region.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_list_live_configs():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . ListLiveConfigsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_live_configs (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.ListLiveConfigsRequest , dict]
The request object. Request message for VideoStitcherService.listLiveConfig.
parent
str
Required. The project that contains the list of live configs, in the form of projects/{project_number}/locations/{location} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.services.video_stitcher_service.pagers.ListLiveConfigsPager
Response message for VideoStitcher.ListLiveConfig. Iterating over this object will yield results and resolve additional pages automatically.
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
list_slates
list_slates (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListSlatesRequest ,
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
google . cloud . video . stitcher_v1 . services . video_stitcher_service . pagers . ListSlatesPager
)
Lists all slates in the specified project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_list_slates():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . ListSlatesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_slates (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.ListSlatesRequest , dict]
The request object. Request message for VideoStitcherService.listSlates.
parent
str
Required. The project to list slates, in the form of projects/{project_number}/locations/{location} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.services.video_stitcher_service.pagers.ListSlatesPager
Response message for VideoStitcherService.listSlates. Iterating over this object will yield results and resolve additional pages automatically.
list_vod_ad_tag_details
list_vod_ad_tag_details (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodAdTagDetailsRequest ,
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
google . cloud . video . stitcher_v1 . services . video_stitcher_service . pagers . ListVodAdTagDetailsPager
)
Return the list of ad tag details for the specified
VOD session.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_list_vod_ad_tag_details():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . ListVodAdTagDetailsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_vod_ad_tag_details (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.ListVodAdTagDetailsRequest , dict]
The request object. Request message for VideoStitcherService.listVodAdTagDetails.
parent
str
Required. The VOD session which the ad tag details belong to, in the form of projects/{project}/locations/{location}/vodSessions/{vod_session_id} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.services.video_stitcher_service.pagers.ListVodAdTagDetailsPager
Response message for VideoStitcherService.listVodAdTagDetails. Iterating over this object will yield results and resolve additional pages automatically.
list_vod_configs
list_vod_configs (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodConfigsRequest ,
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
google . cloud . video . stitcher_v1 . services . video_stitcher_service . pagers . ListVodConfigsPager
)
Lists all VOD configs managed by the Video Stitcher
API that belong to the specified project and region.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_list_vod_configs():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . ListVodConfigsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_vod_configs (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.ListVodConfigsRequest , dict]
The request object. Request message for VideoStitcherService.listVodConfig.
parent
str
Required. The project that contains the list of VOD configs, in the form of projects/{project_number}/locations/{location} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.services.video_stitcher_service.pagers.ListVodConfigsPager
Response message for VideoStitcher.ListVodConfig. Iterating over this object will yield results and resolve additional pages automatically.
list_vod_stitch_details
list_vod_stitch_details (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . ListVodStitchDetailsRequest ,
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
google . cloud . video . stitcher_v1 . services . video_stitcher_service . pagers . ListVodStitchDetailsPager
)
Returns a list of detailed stitching information of
the specified VOD session.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_list_vod_stitch_details():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . ListVodStitchDetailsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_vod_stitch_details (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.ListVodStitchDetailsRequest , dict]
The request object. Request message for VideoStitcherService.listVodStitchDetails.
parent
str
Required. The VOD session where the stitch details belong to, in the form of projects/{project}/locations/{location}/vodSessions/{id} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.stitcher_v1.services.video_stitcher_service.pagers.ListVodStitchDetailsPager
Response message for VideoStitcherService.listVodStitchDetails. Iterating over this object will yield results and resolve additional pages automatically.
live_ad_tag_detail_path
live_ad_tag_detail_path (
project : str , location : str , live_session : str , live_ad_tag_detail : str
) - > str
Returns a fully-qualified live_ad_tag_detail string.
live_config_path
live_config_path ( project : str , location : str , live_config : str ) - > str
Returns a fully-qualified live_config string.
live_session_path
live_session_path ( project : str , location : str , live_session : str ) - > str
Returns a fully-qualified live_session string.
parse_cdn_key_path
parse_cdn_key_path ( path : str ) - > typing . Dict [ str , str ]
Parses a cdn_key path into its component segments.
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
parse_live_ad_tag_detail_path
parse_live_ad_tag_detail_path ( path : str ) - > typing . Dict [ str , str ]
Parses a live_ad_tag_detail path into its component segments.
parse_live_config_path
parse_live_config_path ( path : str ) - > typing . Dict [ str , str ]
Parses a live_config path into its component segments.
parse_live_session_path
parse_live_session_path ( path : str ) - > typing . Dict [ str , str ]
Parses a live_session path into its component segments.
parse_slate_path
parse_slate_path ( path : str ) - > typing . Dict [ str , str ]
Parses a slate path into its component segments.
parse_vod_ad_tag_detail_path
parse_vod_ad_tag_detail_path ( path : str ) - > typing . Dict [ str , str ]
Parses a vod_ad_tag_detail path into its component segments.
parse_vod_config_path
parse_vod_config_path ( path : str ) - > typing . Dict [ str , str ]
Parses a vod_config path into its component segments.
parse_vod_session_path
parse_vod_session_path ( path : str ) - > typing . Dict [ str , str ]
Parses a vod_session path into its component segments.
parse_vod_stitch_detail_path
parse_vod_stitch_detail_path ( path : str ) - > typing . Dict [ str , str ]
Parses a vod_stitch_detail path into its component segments.
slate_path
slate_path ( project : str , location : str , slate : str ) - > str
Returns a fully-qualified slate string.
update_cdn_key
update_cdn_key (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . UpdateCdnKeyRequest ,
dict ,
]
] = None ,
* ,
cdn_key : typing . Optional [
google . cloud . video . stitcher_v1 . types . cdn_keys . CdnKey
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
Updates the specified CDN key. Only update fields
specified in the call method body.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_update_cdn_key():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . UpdateCdnKeyRequest (
)
# Make the request
operation = client. update_cdn_key (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.UpdateCdnKeyRequest , dict]
The request object. Request message for VideoStitcherService.updateCdnKey.
cdn_key
google.cloud.video.stitcher_v1.types.CdnKey
Required. The CDN key resource which replaces the resource on the server. This corresponds to the cdn_key field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be CdnKey Configuration for a CDN key. Used by the Video Stitcher to sign URIs for fetching video manifests and signing media segments for playback.
update_live_config
update_live_config (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . UpdateLiveConfigRequest ,
dict ,
]
] = None ,
* ,
live_config : typing . Optional [
google . cloud . video . stitcher_v1 . types . live_configs . LiveConfig
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
Updates the specified LiveConfig. Only update fields
specified in the call method body.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_update_live_config():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
live_config = stitcher_v1 . LiveConfig ()
live_config.source_uri = "source_uri_value"
live_config.ad_tracking = "SERVER"
request = stitcher_v1 . UpdateLiveConfigRequest (
live_config=live_config,
)
# Make the request
operation = client. update_live_config (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.UpdateLiveConfigRequest , dict]
The request object. Request message for VideoStitcherService.updateLiveConfig.
live_config
google.cloud.video.stitcher_v1.types.LiveConfig
Required. The LiveConfig resource which replaces the resource on the server. This corresponds to the live_config field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be LiveConfig Metadata for used to register live configs.
update_slate
update_slate (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . UpdateSlateRequest ,
dict ,
]
] = None ,
* ,
slate : typing . Optional [ google . cloud . video . stitcher_v1 . types . slates . Slate ] = None ,
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
Updates the specified slate.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_update_slate():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
request = stitcher_v1 . UpdateSlateRequest (
)
# Make the request
operation = client. update_slate (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.UpdateSlateRequest , dict]
The request object. Request message for VideoStitcherService.updateSlate.
slate
google.cloud.video.stitcher_v1.types.Slate
Required. The resource with updated fields. This corresponds to the slate field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. The update mask which specifies fields which should be updated. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Slate Slate object
update_vod_config
update_vod_config (
request : typing . Optional [
typing . Union [
google . cloud . video . stitcher_v1 . types . video_stitcher_service . UpdateVodConfigRequest ,
dict ,
]
] = None ,
* ,
vod_config : typing . Optional [
google . cloud . video . stitcher_v1 . types . vod_configs . VodConfig
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
Updates the specified VOD config. Only update fields
specified in the call method body.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import stitcher_v1
def sample_update_vod_config():
# Create a client
client = stitcher_v1 . VideoStitcherServiceClient ()
# Initialize request argument(s)
vod_config = stitcher_v1 . VodConfig ()
vod_config.source_uri = "source_uri_value"
vod_config.ad_tag_uri = "ad_tag_uri_value"
request = stitcher_v1 . UpdateVodConfigRequest (
vod_config=vod_config,
)
# Make the request
operation = client. update_vod_config (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.video.stitcher_v1.types.UpdateVodConfigRequest , dict]
The request object. Request message for VideoStitcherService.updateVodConfig.
vod_config
google.cloud.video.stitcher_v1.types.VodConfig
Required. The VOD config resource which replaces the resource on the server. This corresponds to the vod_config field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be VodConfig Metadata used to register VOD configs.
vod_ad_tag_detail_path
vod_ad_tag_detail_path (
project : str , location : str , vod_session : str , vod_ad_tag_detail : str
) - > str
Returns a fully-qualified vod_ad_tag_detail string.
vod_config_path
vod_config_path ( project : str , location : str , vod_config : str ) - > str
Returns a fully-qualified vod_config string.
vod_session_path
vod_session_path ( project : str , location : str , vod_session : str ) - > str
Returns a fully-qualified vod_session string.
vod_stitch_detail_path
vod_stitch_detail_path (
project : str , location : str , vod_session : str , vod_stitch_detail : str
) - > str
Returns a fully-qualified vod_stitch_detail string.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
