---
title: "Class ServiceHealthClient (0.4.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-servicehealth/latest/google.cloud.servicehealth_v1.services.service_health.ServiceHealthClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-servicehealth/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-servicehealth/latest/google.cloud.servicehealth_v1.services.service_health.ServiceHealthClient
  title: "Class ServiceHealthClient (0.4.0) \_|\_ Python client libraries \_|\_ Google\
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
Class ServiceHealthClient (0.4.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.4.0 (latest)
0.3.0
0.2.0
0.1.11
ServiceHealthClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . servicehealth_v1 . services . service_health . transports . base . ServiceHealthTransport ,
typing . Callable [
[ ... ],
google . cloud . servicehealth_v1 . services . service_health . transports . base . ServiceHealthTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Request service health events relevant to your Google Cloud
project.
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
ServiceHealthTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
ServiceHealthClient
ServiceHealthClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . servicehealth_v1 . services . service_health . transports . base . ServiceHealthTransport ,
typing . Callable [
[ ... ],
google . cloud . servicehealth_v1 . services . service_health . transports . base . ServiceHealthTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the service health client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,ServiceHealthTransport,Callable[..., ServiceHealthTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the ServiceHealthTransport constructor. If set to None, a transport is chosen automatically.
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
event_path
event_path ( project : str , location : str , event : str ) - > str
Returns a fully-qualified event string.
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
ServiceHealthClient
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
ServiceHealthClient
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
ServiceHealthClient
The constructed client.
get_event
get_event (
request : typing . Optional [
typing . Union [
google . cloud . servicehealth_v1 . types . event_resources . GetEventRequest , dict
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
) - > google . cloud . servicehealth_v1 . types . event_resources . Event
Retrieves a resource containing information about an
event.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import servicehealth_v1
def sample_get_event():
# Create a client
client = servicehealth_v1 . ServiceHealthClient ()
# Initialize request argument(s)
request = servicehealth_v1 . GetEventRequest (
name="name_value",
)
# Make the request
response = client. get_event (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.servicehealth_v1.types.GetEventRequest , dict]
The request object. Gets information about a specific event.
name
str
Required. Unique name of the event in this scope including project and location using the form projects/{project_id}/locations/{location}/events/{event_id} . project_id - Project ID of the project that contains the event. location - The location to get the service health events from. event_id - Event ID to retrieve. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.servicehealth_v1.types.Event
Represents service health events that may affect Google Cloud products. Event resource is a read-only view and does not allow any modifications. All fields are output only.
get_location
get_location (
request : typing . Optional [
typing . Union [ google . cloud . location . locations_pb2 . GetLocationRequest , dict ]
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
get_organization_event
get_organization_event (
request : typing . Optional [
typing . Union [
google . cloud . servicehealth_v1 . types . event_resources . GetOrganizationEventRequest ,
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
) - > google . cloud . servicehealth_v1 . types . event_resources . OrganizationEvent
Retrieves a resource containing information about an
event affecting an organization .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import servicehealth_v1
def sample_get_organization_event():
# Create a client
client = servicehealth_v1 . ServiceHealthClient ()
# Initialize request argument(s)
request = servicehealth_v1 . GetOrganizationEventRequest (
name="name_value",
)
# Make the request
response = client. get_organization_event (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.servicehealth_v1.types.GetOrganizationEventRequest , dict]
The request object. Gets information about a specific event affecting an organization.
name
str
Required. Unique name of the event in this scope including organization and event ID using the form organizations/{organization_id}/locations/locations/global/organizationEvents/{event_id} . organization_id - ID (number) of the project that contains the event. To get your organization_id , see Getting your organization resource ID https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id __. event_id - Organization event ID to retrieve. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.servicehealth_v1.types.OrganizationEvent
Represents service health events that may affect Google Cloud products used across the organization. It is a read-only view and does not allow any modifications.
get_organization_impact
get_organization_impact (
request : typing . Optional [
typing . Union [
google . cloud . servicehealth_v1 . types . event_resources . GetOrganizationImpactRequest ,
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
) - > google . cloud . servicehealth_v1 . types . event_resources . OrganizationImpact
Retrieves a resource containing information about
impact to an asset under an organization affected by a
service health event.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import servicehealth_v1
def sample_get_organization_impact():
# Create a client
client = servicehealth_v1 . ServiceHealthClient ()
# Initialize request argument(s)
request = servicehealth_v1 . GetOrganizationImpactRequest (
name="name_value",
)
# Make the request
response = client. get_organization_impact (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.servicehealth_v1.types.GetOrganizationImpactRequest , dict]
The request object. Gets information about an event that affects a project under an organization.
name
str
Required. Name of the resource using the form organizations/{organization_id}/locations/global/organizationImpacts/{organization_impact_id} . organization_id - ID (number) of the organization that contains the event. To get your organization_id , see Getting your organization resource ID https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id . organization_impact_id - ID of the OrganizationImpact resource </service-health/docs/reference/rest/v1beta/organizations.locations.organizationImpacts#OrganizationImpact> . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.servicehealth_v1.types.OrganizationImpact
Represents impact to assets at organizational level. It is a read-only view and does not allow any modifications.
list_events
list_events (
request : typing . Optional [
typing . Union [
google . cloud . servicehealth_v1 . types . event_resources . ListEventsRequest , dict
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
) - > google . cloud . servicehealth_v1 . services . service_health . pagers . ListEventsPager
Lists events under a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import servicehealth_v1
def sample_list_events():
# Create a client
client = servicehealth_v1 . ServiceHealthClient ()
# Initialize request argument(s)
request = servicehealth_v1 . ListEventsRequest (
parent="parent_value",
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
Union[ google.cloud.servicehealth_v1.types.ListEventsRequest , dict]
The request object. Requests list of events.
parent
str
Required. Parent value using the form projects/{project_id}/locations/{location}/events . project_id - ID of the project for which to list service health events. location - The location to get the service health events from. To retrieve service health events of category = INCIDENT, use location = global . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.servicehealth_v1.services.service_health.pagers.ListEventsPager
Response to request for listing events. Iterating over this object will yield results and resolve additional pages automatically.
list_locations
list_locations (
request : typing . Optional [
typing . Union [ google . cloud . location . locations_pb2 . ListLocationsRequest , dict ]
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
list_organization_events
list_organization_events (
request : typing . Optional [
typing . Union [
google . cloud . servicehealth_v1 . types . event_resources . ListOrganizationEventsRequest ,
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
google . cloud . servicehealth_v1 . services . service_health . pagers . ListOrganizationEventsPager
)
Lists organization events under a given organization
and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import servicehealth_v1
def sample_list_organization_events():
# Create a client
client = servicehealth_v1 . ServiceHealthClient ()
# Initialize request argument(s)
request = servicehealth_v1 . ListOrganizationEventsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_organization_events (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.servicehealth_v1.types.ListOrganizationEventsRequest , dict]
The request object. Requests list of events that affect an organization.
parent
str
Required. Parent value using the form organizations/{organization_id}/locations/{location}/organizationEvents . organization_id - ID (number) of the project that contains the event. To get your organization_id , see Getting your organization resource ID https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id __. location - The location to get the service health events from. To retrieve service health events of category = INCIDENT, use location = global . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.servicehealth_v1.services.service_health.pagers.ListOrganizationEventsPager
Response to request for listing organization events. Iterating over this object will yield results and resolve additional pages automatically.
list_organization_impacts
list_organization_impacts (
request : typing . Optional [
typing . Union [
google . cloud . servicehealth_v1 . types . event_resources . ListOrganizationImpactsRequest ,
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
google . cloud . servicehealth_v1 . services . service_health . pagers . ListOrganizationImpactsPager
)
Lists assets impacted by organization events under a
given organization and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import servicehealth_v1
def sample_list_organization_impacts():
# Create a client
client = servicehealth_v1 . ServiceHealthClient ()
# Initialize request argument(s)
request = servicehealth_v1 . ListOrganizationImpactsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_organization_impacts (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.servicehealth_v1.types.ListOrganizationImpactsRequest , dict]
The request object. Requests list of projects under an organization affected by an event.
parent
str
Required. Parent value using the form organizations/{organization_id}/locations/{location}/organizationImpacts . organization_id - ID (number) of the project that contains the event. To get your organization_id , see Getting your organization resource ID https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id __. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.servicehealth_v1.services.service_health.pagers.ListOrganizationImpactsPager
Response to request for listing projects under an organization affected by an event. Iterating over this object will yield results and resolve additional pages automatically.
organization_event_path
organization_event_path ( organization : str , location : str , event : str ) - > str
Returns a fully-qualified organization_event string.
organization_impact_path
organization_impact_path (
organization : str , location : str , organization_impact : str
) - > str
Returns a fully-qualified organization_impact string.
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
parse_event_path
parse_event_path ( path : str ) - > typing . Dict [ str , str ]
Parses a event path into its component segments.
parse_organization_event_path
parse_organization_event_path ( path : str ) - > typing . Dict [ str , str ]
Parses a organization_event path into its component segments.
parse_organization_impact_path
parse_organization_impact_path ( path : str ) - > typing . Dict [ str , str ]
Parses a organization_impact path into its component segments.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
