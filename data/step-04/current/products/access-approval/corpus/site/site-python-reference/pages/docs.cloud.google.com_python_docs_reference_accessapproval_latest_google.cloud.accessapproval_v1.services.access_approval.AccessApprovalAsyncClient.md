---
title: "Class AccessApprovalAsyncClient (1.19.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient
  title: "Class AccessApprovalAsyncClient (1.19.0) \_|\_ Python client libraries \_\
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
Class AccessApprovalAsyncClient (1.19.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.19.0 (latest)
1.18.0
1.17.0
1.16.2
1.15.0
1.14.1
1.13.5
1.12.0
1.11.3
1.10.1
1.9.1
1.8.0
1.7.5
1.6.1
1.5.1
1.4.1
1.3.5
1.2.0
1.1.1
1.0.0
0.2.2
0.1.0
AccessApprovalAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . accessapproval_v1 . services . access_approval . transports . base . AccessApprovalTransport ,
typing . Callable [
[ ... ],
google . cloud . accessapproval_v1 . services . access_approval . transports . base . AccessApprovalTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
This API allows a customer to manage accesses to cloud resources by
Google personnel. It defines the following resource model:
The API has a collection of
ApprovalRequest
resources, named approvalRequests/{approval_request}
The API has top-level settings per Project/Folder/Organization,
named accessApprovalSettings
The service also periodically emails a list of recipients, defined
at the Project/Folder/Organization level in the
accessApprovalSettings, when there is a pending ApprovalRequest for
them to act on. The ApprovalRequests can also optionally be
published to a Pub/Sub topic owned by the customer (contact support
if you would like to enable Pub/Sub notifications).
ApprovalRequests can be approved or dismissed. Google personnel can
only access the indicated resource or resources if the request is
approved (subject to some exclusions:
https://cloud.google.com/access-approval/docs/overview#exclusions ).
Note: Using Access Approval functionality will mean that Google may
not be able to meet the SLAs for your chosen products, as any
support response times may be dramatically increased. As such the
SLAs do not apply to any service disruption to the extent impacted
by Customer's use of Access Approval. Do not enable Access Approval
for projects where you may require high service availability and
rapid response by Google Cloud Support.
After a request is approved or dismissed, no further action may be
taken on it. Requests with the requested_expiration in the past or
with no activity for 14 days are considered dismissed. When an
approval expires, the request is considered dismissed.
If a request is not approved or dismissed, we call it pending.
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
AccessApprovalTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
AccessApprovalAsyncClient
AccessApprovalAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . accessapproval_v1 . services . access_approval . transports . base . AccessApprovalTransport ,
typing . Callable [
[ ... ],
google . cloud . accessapproval_v1 . services . access_approval . transports . base . AccessApprovalTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the access approval async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,AccessApprovalTransport,Callable[..., AccessApprovalTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the AccessApprovalTransport constructor. If set to None, a transport is chosen automatically.
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
access_approval_service_account_path
access_approval_service_account_path ( project : str ) - > str
Returns a fully-qualified access_approval_service_account string.
access_approval_settings_path
access_approval_settings_path ( project : str ) - > str
Returns a fully-qualified access_approval_settings string.
approval_request_path
approval_request_path ( project : str , approval_request : str ) - > str
Returns a fully-qualified approval_request string.
approve_approval_request
approve_approval_request (
request : typing . Optional [
typing . Union [
google . cloud . accessapproval_v1 . types . accessapproval . ApproveApprovalRequestMessage ,
dict ,
]
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
) - > google . cloud . accessapproval_v1 . types . accessapproval . ApprovalRequest
Approves a request and returns the updated ApprovalRequest.
Returns NOT_FOUND if the request does not exist. Returns
FAILED_PRECONDITION if the request exists but is not in a
pending state.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import accessapproval_v1
async def sample_approve_approval_request():
# Create a client
client = accessapproval_v1 . AccessApprovalAsyncClient ()
# Initialize request argument(s)
request = accessapproval_v1 . ApproveApprovalRequestMessage (
)
# Make the request
response = await client. approve_approval_request (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.accessapproval_v1.types.ApproveApprovalRequestMessage , dict]]
The request object. Request to approve an ApprovalRequest.
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
google.cloud.accessapproval_v1.types.ApprovalRequest
A request for the customer to approve access to a resource.
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
delete_access_approval_settings
delete_access_approval_settings (
request : typing . Optional [
typing . Union [
google . cloud . accessapproval_v1 . types . accessapproval . DeleteAccessApprovalSettingsMessage ,
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
Deletes the settings associated with a project,
folder, or organization. This will have the effect of
disabling Access Approval for the project, folder, or
organization, but only if all ancestors also have Access
Approval disabled. If Access Approval is enabled at a
higher level of the hierarchy, then Access Approval will
still be enabled at this level as the settings are
inherited.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import accessapproval_v1
async def sample_delete_access_approval_settings():
# Create a client
client = accessapproval_v1 . AccessApprovalAsyncClient ()
# Initialize request argument(s)
request = accessapproval_v1 . DeleteAccessApprovalSettingsMessage (
)
# Make the request
await client. delete_access_approval_settings (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage , dict]]
The request object. Request to delete access approval settings.
name
str
Name of the AccessApprovalSettings to delete. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
dismiss_approval_request
dismiss_approval_request (
request : typing . Optional [
typing . Union [
google . cloud . accessapproval_v1 . types . accessapproval . DismissApprovalRequestMessage ,
dict ,
]
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
) - > google . cloud . accessapproval_v1 . types . accessapproval . ApprovalRequest
Dismisses a request. Returns the updated ApprovalRequest.
NOTE: This does not deny access to the resource if another
request has been made and approved. It is equivalent in effect
to ignoring the request altogether.
Returns NOT_FOUND if the request does not exist.
Returns FAILED_PRECONDITION if the request exists but is not in
a pending state.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import accessapproval_v1
async def sample_dismiss_approval_request():
# Create a client
client = accessapproval_v1 . AccessApprovalAsyncClient ()
# Initialize request argument(s)
request = accessapproval_v1 . DismissApprovalRequestMessage (
)
# Make the request
response = await client. dismiss_approval_request (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.accessapproval_v1.types.DismissApprovalRequestMessage , dict]]
The request object. Request to dismiss an approval request.
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
google.cloud.accessapproval_v1.types.ApprovalRequest
A request for the customer to approve access to a resource.
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
AccessApprovalAsyncClient
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
AccessApprovalAsyncClient
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
AccessApprovalAsyncClient
The constructed client.
get_access_approval_service_account
get_access_approval_service_account (
request : typing . Optional [
typing . Union [
google . cloud . accessapproval_v1 . types . accessapproval . GetAccessApprovalServiceAccountMessage ,
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
) - > google . cloud . accessapproval_v1 . types . accessapproval . AccessApprovalServiceAccount
Retrieves the service account that is used by Access
Approval to access KMS keys for signing approved
approval requests.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import accessapproval_v1
async def sample_get_access_approval_service_account():
# Create a client
client = accessapproval_v1 . AccessApprovalAsyncClient ()
# Initialize request argument(s)
request = accessapproval_v1 . GetAccessApprovalServiceAccountMessage (
)
# Make the request
response = await client. get_access_approval_service_account (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.accessapproval_v1.types.GetAccessApprovalServiceAccountMessage , dict]]
The request object. Request to get an Access Approval service account.
name
str
Name of the AccessApprovalServiceAccount to retrieve. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.accessapproval_v1.types.AccessApprovalServiceAccount
Access Approval service account related to a project/folder/organization.
get_access_approval_settings
get_access_approval_settings (
request : typing . Optional [
typing . Union [
google . cloud . accessapproval_v1 . types . accessapproval . GetAccessApprovalSettingsMessage ,
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
) - > google . cloud . accessapproval_v1 . types . accessapproval . AccessApprovalSettings
Gets the settings associated with a project, folder,
or organization.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import accessapproval_v1
async def sample_get_access_approval_settings():
# Create a client
client = accessapproval_v1 . AccessApprovalAsyncClient ()
# Initialize request argument(s)
request = accessapproval_v1 . GetAccessApprovalSettingsMessage (
)
# Make the request
response = await client. get_access_approval_settings (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.accessapproval_v1.types.GetAccessApprovalSettingsMessage , dict]]
The request object. Request to get access approval settings.
name
str
The name of the AccessApprovalSettings to retrieve. Format: "{projects|folders|organizations}/{id}/accessApprovalSettings" This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.accessapproval_v1.types.AccessApprovalSettings
Settings on a Project/Folder/Organization related to Access Approval.
get_approval_request
get_approval_request (
request : typing . Optional [
typing . Union [
google . cloud . accessapproval_v1 . types . accessapproval . GetApprovalRequestMessage ,
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
) - > google . cloud . accessapproval_v1 . types . accessapproval . ApprovalRequest
Gets an approval request. Returns NOT_FOUND if the request does
not exist.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import accessapproval_v1
async def sample_get_approval_request():
# Create a client
client = accessapproval_v1 . AccessApprovalAsyncClient ()
# Initialize request argument(s)
request = accessapproval_v1 . GetApprovalRequestMessage (
)
# Make the request
response = await client. get_approval_request (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.accessapproval_v1.types.GetApprovalRequestMessage , dict]]
The request object. Request to get an approval request.
name
str
The name of the approval request to retrieve. Format: "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}" This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.accessapproval_v1.types.ApprovalRequest
A request for the customer to approve access to a resource.
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
get_transport_class
get_transport_class (
label : typing . Optional [ str ] = None ,
) - > typing . Type [
google . cloud . accessapproval_v1 . services . access_approval . transports . base . AccessApprovalTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
invalidate_approval_request
invalidate_approval_request (
request : typing . Optional [
typing . Union [
google . cloud . accessapproval_v1 . types . accessapproval . InvalidateApprovalRequestMessage ,
dict ,
]
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
) - > google . cloud . accessapproval_v1 . types . accessapproval . ApprovalRequest
Invalidates an existing ApprovalRequest. Returns the updated
ApprovalRequest.
NOTE: This does not deny access to the resource if another
request has been made and approved. It only invalidates a single
approval.
Returns FAILED_PRECONDITION if the request exists but is not in
an approved state.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import accessapproval_v1
async def sample_invalidate_approval_request():
# Create a client
client = accessapproval_v1 . AccessApprovalAsyncClient ()
# Initialize request argument(s)
request = accessapproval_v1 . InvalidateApprovalRequestMessage (
)
# Make the request
response = await client. invalidate_approval_request (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.accessapproval_v1.types.InvalidateApprovalRequestMessage , dict]]
The request object. Request to invalidate an existing approval.
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
google.cloud.accessapproval_v1.types.ApprovalRequest
A request for the customer to approve access to a resource.
list_approval_requests
list_approval_requests (
request : typing . Optional [
typing . Union [
google . cloud . accessapproval_v1 . types . accessapproval . ListApprovalRequestsMessage ,
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
) - > (
google . cloud . accessapproval_v1 . services . access_approval . pagers . ListApprovalRequestsAsyncPager
)
Lists approval requests associated with a project,
folder, or organization. Approval requests can be
filtered by state (pending, active, dismissed). The
order is reverse chronological.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import accessapproval_v1
async def sample_list_approval_requests():
# Create a client
client = accessapproval_v1 . AccessApprovalAsyncClient ()
# Initialize request argument(s)
request = accessapproval_v1 . ListApprovalRequestsMessage (
)
# Make the request
page_result = client. list_approval_requests (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.accessapproval_v1.types.ListApprovalRequestsMessage , dict]]
The request object. Request to list approval requests.
parent
str
The parent resource. This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}". This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.accessapproval_v1.services.access_approval.pagers.ListApprovalRequestsAsyncPager
Response to listing of ApprovalRequest objects. Iterating over this object will yield results and resolve additional pages automatically.
parse_access_approval_service_account_path
parse_access_approval_service_account_path ( path : str ) - > typing . Dict [ str , str ]
Parses a access_approval_service_account path into its component segments.
parse_access_approval_settings_path
parse_access_approval_settings_path ( path : str ) - > typing . Dict [ str , str ]
Parses a access_approval_settings path into its component segments.
parse_approval_request_path
parse_approval_request_path ( path : str ) - > typing . Dict [ str , str ]
Parses a approval_request path into its component segments.
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
update_access_approval_settings
update_access_approval_settings (
request : typing . Optional [
typing . Union [
google . cloud . accessapproval_v1 . types . accessapproval . UpdateAccessApprovalSettingsMessage ,
dict ,
]
] = None ,
* ,
settings : typing . Optional [
google . cloud . accessapproval_v1 . types . accessapproval . AccessApprovalSettings
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
) - > google . cloud . accessapproval_v1 . types . accessapproval . AccessApprovalSettings
Updates the settings associated with a project, folder, or
organization. Settings to update are determined by the value of
field_mask.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import accessapproval_v1
async def sample_update_access_approval_settings():
# Create a client
client = accessapproval_v1 . AccessApprovalAsyncClient ()
# Initialize request argument(s)
request = accessapproval_v1 . UpdateAccessApprovalSettingsMessage (
)
# Make the request
response = await client. update_access_approval_settings (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.accessapproval_v1.types.UpdateAccessApprovalSettingsMessage , dict]]
The request object. Request to update access approval settings.
settings
AccessApprovalSettings
The new AccessApprovalSettings. This corresponds to the settings field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.accessapproval_v1.types.AccessApprovalSettings
Settings on a Project/Folder/Organization related to Access Approval.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
