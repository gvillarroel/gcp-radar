---
title: "Class ErrorStatsServiceClient (1.15.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.ErrorStatsServiceClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.ErrorStatsServiceClient
  title: "Class ErrorStatsServiceClient (1.15.0) \_|\_ Python client libraries \_\
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
Class ErrorStatsServiceClient (1.15.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.15.0 (latest)
1.14.0
1.13.0
1.12.0
1.11.1
1.10.0
1.9.2
1.8.2
1.7.0
1.6.3
1.5.3
1.4.1
1.3.0
1.2.3
1.1.2
1.0.0
0.34.0
0.33.0
0.32.1
ErrorStatsServiceClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . errorreporting_v1beta1 . services . error_stats_service . transports . base . ErrorStatsServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . errorreporting_v1beta1 . services . error_stats_service . transports . base . ErrorStatsServiceTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
An API for retrieving and managing error statistics as well
as data for individual events.
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
ErrorStatsServiceTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
ErrorStatsServiceClient
ErrorStatsServiceClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . errorreporting_v1beta1 . services . error_stats_service . transports . base . ErrorStatsServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . errorreporting_v1beta1 . services . error_stats_service . transports . base . ErrorStatsServiceTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the error stats service client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,ErrorStatsServiceTransport,Callable[..., ErrorStatsServiceTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the ErrorStatsServiceTransport constructor. If set to None, a transport is chosen automatically.
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
delete_events
delete_events (
request : typing . Optional [
typing . Union [
google . cloud . errorreporting_v1beta1 . types . error_stats_service . DeleteEventsRequest ,
dict ,
]
] = None ,
* ,
project_name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . errorreporting_v1beta1 . types . error_stats_service . DeleteEventsResponse
Deletes all error events of a given project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import errorreporting_v1beta1
def sample_delete_events():
# Create a client
client = errorreporting_v1beta1. ErrorStatsServiceClient ()
# Initialize request argument(s)
request = errorreporting_v1beta1. DeleteEventsRequest (
project_name="project_name_value",
)
# Make the request
response = client. delete_events (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.errorreporting_v1beta1.types.DeleteEventsRequest , dict]
The request object. Deletes all events in the project.
project_name
str
Required. The resource name of the Google Cloud Platform project. Written as projects/{projectID} or projects/{projectID}/locations/{location} , where {projectID} is the Google Cloud Platform project ID https://support.google.com/cloud/answer/6158840 and {location} is a Cloud region. Examples: projects/my-project-123 , projects/my-project-123/locations/global . For a list of supported locations, see Supported Regions https://cloud.google.com/logging/docs/region-support . global is the default when unspecified. This corresponds to the project_name field on the request instance; if request is provided, this should not be set.
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
google.cloud.errorreporting_v1beta1.types.DeleteEventsResponse
Response message for deleting error events.
error_group_path
error_group_path ( project : str , group : str ) - > str
Returns a fully-qualified error_group string.
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
ErrorStatsServiceClient
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
ErrorStatsServiceClient
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
ErrorStatsServiceClient
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
list_events
list_events (
request : typing . Optional [
typing . Union [
google . cloud . errorreporting_v1beta1 . types . error_stats_service . ListEventsRequest ,
dict ,
]
] = None ,
* ,
project_name : typing . Optional [ str ] = None ,
group_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . errorreporting_v1beta1 . services . error_stats_service . pagers . ListEventsPager
)
Lists the specified events.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import errorreporting_v1beta1
def sample_list_events():
# Create a client
client = errorreporting_v1beta1. ErrorStatsServiceClient ()
# Initialize request argument(s)
request = errorreporting_v1beta1. ListEventsRequest (
project_name="project_name_value",
group_id="group_id_value",
)
# Make the request
page_result = client. list_events (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.errorreporting_v1beta1.types.ListEventsRequest , dict]
The request object. Specifies a set of error events to return.
project_name
str
Required. The resource name of the Google Cloud Platform project. Written as projects/{projectID} or projects/{projectID}/locations/{location} , where {projectID} is the Google Cloud Platform project ID https://support.google.com/cloud/answer/6158840 and {location} is a Cloud region. Examples: projects/my-project-123 , projects/my-project-123/locations/global . For a list of supported locations, see Supported Regions https://cloud.google.com/logging/docs/region-support . global is the default when unspecified. This corresponds to the project_name field on the request instance; if request is provided, this should not be set.
group_id
str
Required. The group for which events shall be returned. The group_id is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see Google Cloud Privacy Notice https://cloud.google.com/terms/cloud-privacy-notice __. This corresponds to the group_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.errorreporting_v1beta1.services.error_stats_service.pagers.ListEventsPager
Contains a set of requested error events. Iterating over this object will yield results and resolve additional pages automatically.
list_group_stats
list_group_stats (
request : typing . Optional [
typing . Union [
google . cloud . errorreporting_v1beta1 . types . error_stats_service . ListGroupStatsRequest ,
dict ,
]
] = None ,
* ,
project_name : typing . Optional [ str ] = None ,
time_range : typing . Optional [
google . cloud . errorreporting_v1beta1 . types . error_stats_service . QueryTimeRange
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . errorreporting_v1beta1 . services . error_stats_service . pagers . ListGroupStatsPager
)
Lists the specified groups.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import errorreporting_v1beta1
def sample_list_group_stats():
# Create a client
client = errorreporting_v1beta1. ErrorStatsServiceClient ()
# Initialize request argument(s)
request = errorreporting_v1beta1. ListGroupStatsRequest (
project_name="project_name_value",
)
# Make the request
page_result = client. list_group_stats (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.errorreporting_v1beta1.types.ListGroupStatsRequest , dict]
The request object. Specifies a set of ErrorGroupStats to return.
project_name
str
Required. The resource name of the Google Cloud Platform project. Written as projects/{projectID} or projects/{projectNumber} , where {projectID} and {projectNumber} can be found in the Google Cloud console https://support.google.com/cloud/answer/6158840 . It may also include a location, such as projects/{projectID}/locations/{location} where {location} is a cloud region. Examples: projects/my-project-123 , projects/5551234 , projects/my-project-123/locations/us-central1 , projects/5551234/locations/us-central1 . For a list of supported locations, see Supported Regions https://cloud.google.com/logging/docs/region-support . global is the default when unspecified. Use - as a wildcard to request group stats from all regions. This corresponds to the project_name field on the request instance; if request is provided, this should not be set.
time_range
google.cloud.errorreporting_v1beta1.types.QueryTimeRange
Optional. List data for the given time range. If not set, a default time range is used. The field [time_range_begin] [google.devtools.clouderrorreporting.v1beta1.ListGroupStatsResponse.time_range_begin] in the response will specify the beginning of this time range. Only [ErrorGroupStats] [google.devtools.clouderrorreporting.v1beta1.ErrorGroupStats] with a non-zero count in the given time range are returned, unless the request contains an explicit [group_id] [google.devtools.clouderrorreporting.v1beta1.ListGroupStatsRequest.group_id] list. If a [group_id] [google.devtools.clouderrorreporting.v1beta1.ListGroupStatsRequest.group_id] list is given, also [ErrorGroupStats] [google.devtools.clouderrorreporting.v1beta1.ErrorGroupStats] with zero occurrences are returned. This corresponds to the time_range field on the request instance; if request is provided, this should not be set.
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
google.cloud.errorreporting_v1beta1.services.error_stats_service.pagers.ListGroupStatsPager
Contains a set of requested error group stats. Iterating over this object will yield results and resolve additional pages automatically.
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
parse_error_group_path
parse_error_group_path ( path : str ) - > typing . Dict [ str , str ]
Parses a error_group path into its component segments.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
