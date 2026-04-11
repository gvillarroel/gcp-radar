---
title: "Class NotificationChannelServiceClient (2.30.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/monitoring/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient
  title: "Class NotificationChannelServiceClient (2.30.0) \_|\_ Python client libraries\
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
Class NotificationChannelServiceClient (2.30.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.30.0 (latest)
2.29.1
2.28.0
2.27.2
2.26.0
2.25.0
2.24.0
2.23.1
2.22.2
2.21.0
2.20.0
2.19.4
2.18.0
2.17.0
2.16.0
2.15.1
2.14.2
2.13.0
2.12.0
2.11.3
2.10.1
2.9.2
2.8.0
2.7.0
2.6.0
2.5.2
2.4.2
2.3.0
2.2.1
2.1.0
2.0.1
1.1.2
1.0.0
0.36.2
0.35.0
0.34.0
0.33.0
0.32.0
NotificationChannelServiceClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . monitoring_v3 . services . notification_channel_service . transports . base . NotificationChannelServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . monitoring_v3 . services . notification_channel_service . transports . base . NotificationChannelServiceTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
The Notification Channel API provides access to configuration
that controls how messages related to incidents are sent.
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
NotificationChannelServiceTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
NotificationChannelServiceClient
NotificationChannelServiceClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . monitoring_v3 . services . notification_channel_service . transports . base . NotificationChannelServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . monitoring_v3 . services . notification_channel_service . transports . base . NotificationChannelServiceTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the notification channel service client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,NotificationChannelServiceTransport,Callable[..., NotificationChannelServiceTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the NotificationChannelServiceTransport constructor. If set to None, a transport is chosen automatically.
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
create_notification_channel
create_notification_channel (
request : typing . Optional [
typing . Union [
google . cloud . monitoring_v3 . types . notification_service . CreateNotificationChannelRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
notification_channel : typing . Optional [
google . cloud . monitoring_v3 . types . notification . NotificationChannel
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . monitoring_v3 . types . notification . NotificationChannel
Creates a new notification channel, representing a
single notification endpoint such as an email address,
SMS number, or PagerDuty service.
Design your application to single-thread API calls that
modify the state of notification channels in a single
project. This includes calls to
CreateNotificationChannel, DeleteNotificationChannel and
UpdateNotificationChannel.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import monitoring_v3
def sample_create_notification_channel():
# Create a client
client = monitoring_v3 . NotificationChannelServiceClient ()
# Initialize request argument(s)
request = monitoring_v3 . CreateNotificationChannelRequest (
name="name_value",
)
# Make the request
response = client. create_notification_channel (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.monitoring_v3.types.CreateNotificationChannelRequest , dict]
The request object. The CreateNotificationChannel request.
name
str
Required. The project https://cloud.google.com/monitoring/api/v3#project_name __ on which to execute the request. The format is: :: projects/[PROJECT_ID_OR_NUMBER] This names the container into which the channel will be written, this does not name the newly created channel. The resulting channel's name will have a normalized version of this field as a prefix, but will add /notificationChannels/[CHANNEL_ID] to identify the channel. This corresponds to the name field on the request instance; if request is provided, this should not be set.
notification_channel
google.cloud.monitoring_v3.types.NotificationChannel
Required. The definition of the NotificationChannel to create. This corresponds to the notification_channel field on the request instance; if request is provided, this should not be set.
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
google.cloud.monitoring_v3.types.NotificationChannel
A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval.
delete_notification_channel
delete_notification_channel (
request : typing . Optional [
typing . Union [
google . cloud . monitoring_v3 . types . notification_service . DeleteNotificationChannelRequest ,
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
Deletes a notification channel.
Design your application to single-thread API calls that
modify the state of notification channels in a single
project. This includes calls to
CreateNotificationChannel, DeleteNotificationChannel and
UpdateNotificationChannel.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import monitoring_v3
def sample_delete_notification_channel():
# Create a client
client = monitoring_v3 . NotificationChannelServiceClient ()
# Initialize request argument(s)
request = monitoring_v3 . DeleteNotificationChannelRequest (
name="name_value",
)
# Make the request
client. delete_notification_channel (request=request)
Parameters
Name
Description
request
Union[ google.cloud.monitoring_v3.types.DeleteNotificationChannelRequest , dict]
The request object. The DeleteNotificationChannel request.
name
str
Required. The channel for which to execute the request. The format is: :: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] This corresponds to the name field on the request instance; if request is provided, this should not be set.
force
bool
If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel). If false, this operation will fail if the notification channel is referenced by existing alerting policies. This corresponds to the force field on the request instance; if request is provided, this should not be set.
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
NotificationChannelServiceClient
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
NotificationChannelServiceClient
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
NotificationChannelServiceClient
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
get_notification_channel
get_notification_channel (
request : typing . Optional [
typing . Union [
google . cloud . monitoring_v3 . types . notification_service . GetNotificationChannelRequest ,
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
) - > google . cloud . monitoring_v3 . types . notification . NotificationChannel
Gets a single notification channel. The channel
includes the relevant configuration details with which
the channel was created. However, the response may
truncate or omit passwords, API keys, or other private
key matter and thus the response may not be 100%
identical to the information that was supplied in the
call to the create method.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import monitoring_v3
def sample_get_notification_channel():
# Create a client
client = monitoring_v3 . NotificationChannelServiceClient ()
# Initialize request argument(s)
request = monitoring_v3 . GetNotificationChannelRequest (
name="name_value",
)
# Make the request
response = client. get_notification_channel (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.monitoring_v3.types.GetNotificationChannelRequest , dict]
The request object. The GetNotificationChannel request.
name
str
Required. The channel for which to execute the request. The format is: :: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.monitoring_v3.types.NotificationChannel
A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval.
get_notification_channel_descriptor
get_notification_channel_descriptor (
request : typing . Optional [
typing . Union [
google . cloud . monitoring_v3 . types . notification_service . GetNotificationChannelDescriptorRequest ,
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
) - > google . cloud . monitoring_v3 . types . notification . NotificationChannelDescriptor
Gets a single channel descriptor. The descriptor
indicates which fields are expected / permitted for a
notification channel of the given type.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import monitoring_v3
def sample_get_notification_channel_descriptor():
# Create a client
client = monitoring_v3 . NotificationChannelServiceClient ()
# Initialize request argument(s)
request = monitoring_v3 . GetNotificationChannelDescriptorRequest (
name="name_value",
)
# Make the request
response = client. get_notification_channel_descriptor (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.monitoring_v3.types.GetNotificationChannelDescriptorRequest , dict]
The request object. The GetNotificationChannelDescriptor response.
name
str
Required. The channel type for which to execute the request. The format is: :: projects/[PROJECT_ID_OR_NUMBER]/notificationChannelDescriptors/[CHANNEL_TYPE] This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.monitoring_v3.types.NotificationChannelDescriptor
A description of a notification channel. The descriptor includes the properties of the channel and the set of labels or fields that must be specified to configure channels of a given type.
get_notification_channel_verification_code
get_notification_channel_verification_code (
request : typing . Optional [
typing . Union [
google . cloud . monitoring_v3 . types . notification_service . GetNotificationChannelVerificationCodeRequest ,
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
google . cloud . monitoring_v3 . types . notification_service . GetNotificationChannelVerificationCodeResponse
)
Requests a verification code for an already verified
channel that can then be used in a call to
VerifyNotificationChannel() on a different channel with
an equivalent identity in the same or in a different
project. This makes it possible to copy a channel
between projects without requiring manual reverification
of the channel. If the channel is not in the verified
state, this method will fail (in other words, this may
only be used if the
SendNotificationChannelVerificationCode and
VerifyNotificationChannel paths have already been used
to put the given channel into the verified state).
There is no guarantee that the verification codes
returned by this method will be of a similar structure
or form as the ones that are delivered to the channel
via SendNotificationChannelVerificationCode; while
VerifyNotificationChannel() will recognize both the
codes delivered via
SendNotificationChannelVerificationCode() and returned
from GetNotificationChannelVerificationCode(), it is
typically the case that the verification codes delivered
via
SendNotificationChannelVerificationCode() will be
shorter and also have a shorter expiration (e.g. codes
such as "G-123456") whereas GetVerificationCode() will
typically return a much longer, websafe base 64 encoded
string that has a longer expiration time.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import monitoring_v3
def sample_get_notification_channel_verification_code():
# Create a client
client = monitoring_v3 . NotificationChannelServiceClient ()
# Initialize request argument(s)
request = monitoring_v3 . GetNotificationChannelVerificationCodeRequest (
name="name_value",
)
# Make the request
response = client. get_notification_channel_verification_code (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.monitoring_v3.types.GetNotificationChannelVerificationCodeRequest , dict]
The request object. The GetNotificationChannelVerificationCode request.
name
str
Required. The notification channel for which a verification code is to be generated and retrieved. This must name a channel that is already verified; if the specified channel is not verified, the request will fail. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.monitoring_v3.types.GetNotificationChannelVerificationCodeResponse
The GetNotificationChannelVerificationCode request.
list_notification_channel_descriptors
list_notification_channel_descriptors (
request : typing . Optional [
typing . Union [
google . cloud . monitoring_v3 . types . notification_service . ListNotificationChannelDescriptorsRequest ,
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
google . cloud . monitoring_v3 . services . notification_channel_service . pagers . ListNotificationChannelDescriptorsPager
)
Lists the descriptors for supported channel types.
The use of descriptors makes it possible for new channel
types to be dynamically added.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import monitoring_v3
def sample_list_notification_channel_descriptors():
# Create a client
client = monitoring_v3 . NotificationChannelServiceClient ()
# Initialize request argument(s)
request = monitoring_v3 . ListNotificationChannelDescriptorsRequest (
name="name_value",
)
# Make the request
page_result = client. list_notification_channel_descriptors (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.monitoring_v3.types.ListNotificationChannelDescriptorsRequest , dict]
The request object. The ListNotificationChannelDescriptors request.
name
str
Required. The REST resource name of the parent from which to retrieve the notification channel descriptors. The expected syntax is: :: projects/[PROJECT_ID_OR_NUMBER] Note that this names https://cloud.google.com/monitoring/api/v3#project_name __ the parent container in which to look for the descriptors; to retrieve a single descriptor by name, use the GetNotificationChannelDescriptor][google.monitoring.v3.NotificationChannelService.GetNotificationChannelDescriptor] operation, instead. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelDescriptorsPager
The ListNotificationChannelDescriptors response. Iterating over this object will yield results and resolve additional pages automatically.
list_notification_channels
list_notification_channels (
request : typing . Optional [
typing . Union [
google . cloud . monitoring_v3 . types . notification_service . ListNotificationChannelsRequest ,
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
google . cloud . monitoring_v3 . services . notification_channel_service . pagers . ListNotificationChannelsPager
)
Lists the notification channels that have been created for the
project. To list the types of notification channels that are
supported, use the ListNotificationChannelDescriptors
method.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import monitoring_v3
def sample_list_notification_channels():
# Create a client
client = monitoring_v3 . NotificationChannelServiceClient ()
# Initialize request argument(s)
request = monitoring_v3 . ListNotificationChannelsRequest (
name="name_value",
)
# Make the request
page_result = client. list_notification_channels (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.monitoring_v3.types.ListNotificationChannelsRequest , dict]
The request object. The ListNotificationChannels request.
name
str
Required. The project https://cloud.google.com/monitoring/api/v3#project_name __ on which to execute the request. The format is: :: projects/[PROJECT_ID_OR_NUMBER] This names the container in which to look for the notification channels; it does not name a specific channel. To query a specific channel by REST resource name, use the [ GetNotificationChannel ][google.monitoring.v3.NotificationChannelService.GetNotificationChannel] operation. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsPager
The ListNotificationChannels response. Iterating over this object will yield results and resolve additional pages automatically.
notification_channel_descriptor_path
notification_channel_descriptor_path ( project : str , channel_descriptor : str ) - > str
Returns a fully-qualified notification_channel_descriptor string.
notification_channel_path
notification_channel_path ( project : str , notification_channel : str ) - > str
Returns a fully-qualified notification_channel string.
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
parse_notification_channel_descriptor_path
parse_notification_channel_descriptor_path ( path : str ) - > typing . Dict [ str , str ]
Parses a notification_channel_descriptor path into its component segments.
parse_notification_channel_path
parse_notification_channel_path ( path : str ) - > typing . Dict [ str , str ]
Parses a notification_channel path into its component segments.
send_notification_channel_verification_code
send_notification_channel_verification_code (
request : typing . Optional [
typing . Union [
google . cloud . monitoring_v3 . types . notification_service . SendNotificationChannelVerificationCodeRequest ,
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
Causes a verification code to be delivered to the channel. The
code can then be supplied in VerifyNotificationChannel to
verify the channel.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import monitoring_v3
def sample_send_notification_channel_verification_code():
# Create a client
client = monitoring_v3 . NotificationChannelServiceClient ()
# Initialize request argument(s)
request = monitoring_v3 . SendNotificationChannelVerificationCodeRequest (
name="name_value",
)
# Make the request
client. send_notification_channel_verification_code (request=request)
Parameters
Name
Description
request
Union[ google.cloud.monitoring_v3.types.SendNotificationChannelVerificationCodeRequest , dict]
The request object. The SendNotificationChannelVerificationCode request.
name
str
Required. The notification channel to which to send a verification code. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
update_notification_channel
update_notification_channel (
request : typing . Optional [
typing . Union [
google . cloud . monitoring_v3 . types . notification_service . UpdateNotificationChannelRequest ,
dict ,
]
] = None ,
* ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
notification_channel : typing . Optional [
google . cloud . monitoring_v3 . types . notification . NotificationChannel
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . monitoring_v3 . types . notification . NotificationChannel
Updates a notification channel. Fields not specified
in the field mask remain unchanged.
Design your application to single-thread API calls that
modify the state of notification channels in a single
project. This includes calls to
CreateNotificationChannel, DeleteNotificationChannel and
UpdateNotificationChannel.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import monitoring_v3
def sample_update_notification_channel():
# Create a client
client = monitoring_v3 . NotificationChannelServiceClient ()
# Initialize request argument(s)
request = monitoring_v3 . UpdateNotificationChannelRequest (
)
# Make the request
response = client. update_notification_channel (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.monitoring_v3.types.UpdateNotificationChannelRequest , dict]
The request object. The UpdateNotificationChannel request.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. The fields to update. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
notification_channel
google.cloud.monitoring_v3.types.NotificationChannel
Required. A description of the changes to be applied to the specified notification channel. The description must provide a definition for fields to be updated; the names of these fields should also be included in the update_mask . This corresponds to the notification_channel field on the request instance; if request is provided, this should not be set.
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
google.cloud.monitoring_v3.types.NotificationChannel
A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval.
verify_notification_channel
verify_notification_channel (
request : typing . Optional [
typing . Union [
google . cloud . monitoring_v3 . types . notification_service . VerifyNotificationChannelRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
code : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . monitoring_v3 . types . notification . NotificationChannel
Verifies a NotificationChannel by proving receipt of the
code delivered to the channel as a result of calling
SendNotificationChannelVerificationCode .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import monitoring_v3
def sample_verify_notification_channel():
# Create a client
client = monitoring_v3 . NotificationChannelServiceClient ()
# Initialize request argument(s)
request = monitoring_v3 . VerifyNotificationChannelRequest (
name="name_value",
code="code_value",
)
# Make the request
response = client. verify_notification_channel (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.monitoring_v3.types.VerifyNotificationChannelRequest , dict]
The request object. The VerifyNotificationChannel request.
name
str
Required. The notification channel to verify. This corresponds to the name field on the request instance; if request is provided, this should not be set.
code
str
Required. The verification code that was delivered to the channel as a result of invoking the SendNotificationChannelVerificationCode API method or that was retrieved from a verified channel via GetNotificationChannelVerificationCode . For example, one might have "G-123456" or "TKNZGhhd2EyN3I1MnRnMjRv" (in general, one is only guaranteed that the code is valid UTF-8; one should not make any assumptions regarding the structure or format of the code). This corresponds to the code field on the request instance; if request is provided, this should not be set.
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
google.cloud.monitoring_v3.types.NotificationChannel
A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
