---
title: "Class ExternalVpnGatewaysClient (1.41.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.external_vpn_gateways.ExternalVpnGatewaysClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/compute/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.external_vpn_gateways.ExternalVpnGatewaysClient
  title: "Class ExternalVpnGatewaysClient (1.41.0) \_|\_ Python client libraries \_\
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
Class ExternalVpnGatewaysClient (1.41.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.41.0 (latest)
1.40.0
1.39.0
1.38.0
1.37.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.27.0
1.26.0
1.25.0
1.24.0
1.23.0
1.22.0
1.21.0
1.20.1
1.19.2
1.18.0
1.17.0
1.16.1
1.15.0
1.14.1
1.13.0
1.12.1
1.11.0
1.10.1
1.9.0
1.8.0
1.7.0
1.6.1
1.5.2
1.4.0
1.3.2
1.2.0
1.1.0
1.0.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.2
0.3.0
0.2.1
0.1.0
ExternalVpnGatewaysClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . compute_v1 . services . external_vpn_gateways . transports . base . ExternalVpnGatewaysTransport ,
typing . Callable [
[ ... ],
google . cloud . compute_v1 . services . external_vpn_gateways . transports . base . ExternalVpnGatewaysTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
The ExternalVpnGateways API.
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
ExternalVpnGatewaysTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
ExternalVpnGatewaysClient
ExternalVpnGatewaysClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . compute_v1 . services . external_vpn_gateways . transports . base . ExternalVpnGatewaysTransport ,
typing . Callable [
[ ... ],
google . cloud . compute_v1 . services . external_vpn_gateways . transports . base . ExternalVpnGatewaysTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the external vpn gateways client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,ExternalVpnGatewaysTransport,Callable[..., ExternalVpnGatewaysTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the ExternalVpnGatewaysTransport constructor. If set to None, a transport is chosen automatically. NOTE: "rest" transport functionality is currently in a beta state (preview). We welcome your feedback via an issue in this library's source repository.
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
delete
delete (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . DeleteExternalVpnGatewayRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
external_vpn_gateway : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Deletes the specified externalVpnGateway.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_delete():
# Create a client
client = compute_v1 . ExternalVpnGatewaysClient ()
# Initialize request argument(s)
request = compute_v1 . DeleteExternalVpnGatewayRequest (
external_vpn_gateway="external_vpn_gateway_value",
project="project_value",
)
# Make the request
response = client. delete (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.DeleteExternalVpnGatewayRequest , dict]
The request object. A request message for ExternalVpnGateways.Delete. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
external_vpn_gateway
str
Name of the externalVpnGateways to delete. This corresponds to the external_vpn_gateway field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
delete_unary
delete_unary (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . DeleteExternalVpnGatewayRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
external_vpn_gateway : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Deletes the specified externalVpnGateway.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_delete():
# Create a client
client = compute_v1 . ExternalVpnGatewaysClient ()
# Initialize request argument(s)
request = compute_v1 . DeleteExternalVpnGatewayRequest (
external_vpn_gateway="external_vpn_gateway_value",
project="project_value",
)
# Make the request
response = client. delete (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.DeleteExternalVpnGatewayRequest , dict]
The request object. A request message for ExternalVpnGateways.Delete. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
external_vpn_gateway
str
Name of the externalVpnGateways to delete. This corresponds to the external_vpn_gateway field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
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
ExternalVpnGatewaysClient
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
ExternalVpnGatewaysClient
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
ExternalVpnGatewaysClient
The constructed client.
get
get (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . GetExternalVpnGatewayRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
external_vpn_gateway : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . ExternalVpnGateway
Returns the specified externalVpnGateway. Get a list
of available externalVpnGateways by making a list()
request.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_get():
# Create a client
client = compute_v1 . ExternalVpnGatewaysClient ()
# Initialize request argument(s)
request = compute_v1 . GetExternalVpnGatewayRequest (
external_vpn_gateway="external_vpn_gateway_value",
project="project_value",
)
# Make the request
response = client. get (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.GetExternalVpnGatewayRequest , dict]
The request object. A request message for ExternalVpnGateways.Get. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
external_vpn_gateway
str
Name of the externalVpnGateway to return. This corresponds to the external_vpn_gateway field on the request instance; if request is provided, this should not be set.
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
google.cloud.compute_v1.types.ExternalVpnGateway
Represents an external VPN gateway. External VPN gateway is the on-premises VPN gateway(s) or another cloud provider's VPN gateway that connects to your Google Cloud VPN gateway. To create a highly available VPN from Google Cloud Platform to your VPN gateway or another cloud provider's VPN gateway, you must create a external VPN gateway resource with information about the other gateway. For more information about using external VPN gateways, see Creating an HA VPN gateway and tunnel pair to a peer VPN.
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
insert
insert (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . InsertExternalVpnGatewayRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
external_vpn_gateway_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . ExternalVpnGateway
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Creates a ExternalVpnGateway in the specified project
using the data included in the request.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_insert():
# Create a client
client = compute_v1 . ExternalVpnGatewaysClient ()
# Initialize request argument(s)
request = compute_v1 . InsertExternalVpnGatewayRequest (
project="project_value",
)
# Make the request
response = client. insert (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.InsertExternalVpnGatewayRequest , dict]
The request object. A request message for ExternalVpnGateways.Insert. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
external_vpn_gateway_resource
google.cloud.compute_v1.types.ExternalVpnGateway
The body resource for this request This corresponds to the external_vpn_gateway_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
insert_unary
insert_unary (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . InsertExternalVpnGatewayRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
external_vpn_gateway_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . ExternalVpnGateway
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Creates a ExternalVpnGateway in the specified project
using the data included in the request.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_insert():
# Create a client
client = compute_v1 . ExternalVpnGatewaysClient ()
# Initialize request argument(s)
request = compute_v1 . InsertExternalVpnGatewayRequest (
project="project_value",
)
# Make the request
response = client. insert (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.InsertExternalVpnGatewayRequest , dict]
The request object. A request message for ExternalVpnGateways.Insert. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
external_vpn_gateway_resource
google.cloud.compute_v1.types.ExternalVpnGateway
The body resource for this request This corresponds to the external_vpn_gateway_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
list
list (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . ListExternalVpnGatewaysRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . services . external_vpn_gateways . pagers . ListPager
Retrieves the list of ExternalVpnGateway available to
the specified project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_list():
# Create a client
client = compute_v1 . ExternalVpnGatewaysClient ()
# Initialize request argument(s)
request = compute_v1 . ListExternalVpnGatewaysRequest (
project="project_value",
)
# Make the request
page_result = client. list (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.ListExternalVpnGatewaysRequest , dict]
The request object. A request message for ExternalVpnGateways.List. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
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
google.cloud.compute_v1.services.external_vpn_gateways.pagers.ListPager
Response to the list request, and contains a list of externalVpnGateways. Iterating over this object will yield results and resolve additional pages automatically.
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
set_labels
set_labels (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . SetLabelsExternalVpnGatewayRequest ,
dict ,
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
resource : typing . Optional [ str ] = None ,
global_set_labels_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . GlobalSetLabelsRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Sets the labels on an ExternalVpnGateway. To learn
more about labels, read the Labeling Resources
documentation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_set_labels():
# Create a client
client = compute_v1 . ExternalVpnGatewaysClient ()
# Initialize request argument(s)
request = compute_v1 . SetLabelsExternalVpnGatewayRequest (
project="project_value",
resource="resource_value",
)
# Make the request
response = client. set_labels (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.SetLabelsExternalVpnGatewayRequest , dict]
The request object. A request message for ExternalVpnGateways.SetLabels. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
resource
str
Name or id of the resource for this request. This corresponds to the resource field on the request instance; if request is provided, this should not be set.
global_set_labels_request_resource
google.cloud.compute_v1.types.GlobalSetLabelsRequest
The body resource for this request This corresponds to the global_set_labels_request_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
set_labels_unary
set_labels_unary (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . SetLabelsExternalVpnGatewayRequest ,
dict ,
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
resource : typing . Optional [ str ] = None ,
global_set_labels_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . GlobalSetLabelsRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Sets the labels on an ExternalVpnGateway. To learn
more about labels, read the Labeling Resources
documentation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_set_labels():
# Create a client
client = compute_v1 . ExternalVpnGatewaysClient ()
# Initialize request argument(s)
request = compute_v1 . SetLabelsExternalVpnGatewayRequest (
project="project_value",
resource="resource_value",
)
# Make the request
response = client. set_labels (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.SetLabelsExternalVpnGatewayRequest , dict]
The request object. A request message for ExternalVpnGateways.SetLabels. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
resource
str
Name or id of the resource for this request. This corresponds to the resource field on the request instance; if request is provided, this should not be set.
global_set_labels_request_resource
google.cloud.compute_v1.types.GlobalSetLabelsRequest
The body resource for this request This corresponds to the global_set_labels_request_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
test_iam_permissions
test_iam_permissions (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . TestIamPermissionsExternalVpnGatewayRequest ,
dict ,
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
resource : typing . Optional [ str ] = None ,
test_permissions_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . TestPermissionsRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . TestPermissionsResponse
Returns permissions that a caller has on the
specified resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_test_iam_permissions():
# Create a client
client = compute_v1 . ExternalVpnGatewaysClient ()
# Initialize request argument(s)
request = compute_v1 . TestIamPermissionsExternalVpnGatewayRequest (
project="project_value",
resource="resource_value",
)
# Make the request
response = client. test_iam_permissions (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.TestIamPermissionsExternalVpnGatewayRequest , dict]
The request object. A request message for ExternalVpnGateways.TestIamPermissions. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
resource
str
Name or id of the resource for this request. This corresponds to the resource field on the request instance; if request is provided, this should not be set.
test_permissions_request_resource
google.cloud.compute_v1.types.TestPermissionsRequest
The body resource for this request This corresponds to the test_permissions_request_resource field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
