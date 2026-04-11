---
title: "Class BinauthzManagementServiceV1AsyncClient (1.15.0) \_|\_ Python client\
  \ libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.services.binauthz_management_service_v1.BinauthzManagementServiceV1AsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.services.binauthz_management_service_v1.BinauthzManagementServiceV1AsyncClient
  title: "Class BinauthzManagementServiceV1AsyncClient (1.15.0) \_|\_ Python client\
    \ libraries \_|\_ Google Cloud Documentation"
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
Class BinauthzManagementServiceV1AsyncClient (1.15.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.15.0 (latest)
1.14.0
1.13.2
1.12.0
1.11.1
1.10.5
1.9.0
1.8.0
1.7.0
1.6.2
1.5.1
1.4.0
1.3.3
1.2.3
1.1.0
1.0.1
0.6.0
0.5.0
0.4.1
0.3.1
0.2.2
0.1.1
BinauthzManagementServiceV1AsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . binaryauthorization_v1 . services . binauthz_management_service_v1 . transports . base . BinauthzManagementServiceV1Transport ,
typing . Callable [
[ ... ],
google . cloud . binaryauthorization_v1 . services . binauthz_management_service_v1 . transports . base . BinauthzManagementServiceV1Transport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Google Cloud Management Service for Binary Authorization admission
policies and attestation authorities.
This API implements a REST model with the following objects:
Policy
Attestor
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
BinauthzManagementServiceV1Transport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
BinauthzManagementServiceV1AsyncClient
BinauthzManagementServiceV1AsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . binaryauthorization_v1 . services . binauthz_management_service_v1 . transports . base . BinauthzManagementServiceV1Transport ,
typing . Callable [
[ ... ],
google . cloud . binaryauthorization_v1 . services . binauthz_management_service_v1 . transports . base . BinauthzManagementServiceV1Transport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the binauthz management service v1 async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,BinauthzManagementServiceV1Transport,Callable[..., BinauthzManagementServiceV1Transport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the BinauthzManagementServiceV1Transport constructor. If set to None, a transport is chosen automatically.
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
attestor_path
attestor_path ( project : str , attestor : str ) - > str
Returns a fully-qualified attestor string.
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
create_attestor
create_attestor (
request : typing . Optional [
typing . Union [
google . cloud . binaryauthorization_v1 . types . service . CreateAttestorRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
attestor_id : typing . Optional [ str ] = None ,
attestor : typing . Optional [
google . cloud . binaryauthorization_v1 . types . resources . Attestor
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . binaryauthorization_v1 . types . resources . Attestor
Creates an
xref_attestor, and
returns a copy of the new
xref_attestor.
Returns NOT_FOUND if the project does not exist,
INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if
the xref_attestor
already exists.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import binaryauthorization_v1
async def sample_create_attestor():
# Create a client
client = binaryauthorization_v1 . BinauthzManagementServiceV1AsyncClient ()
# Initialize request argument(s)
attestor = binaryauthorization_v1 . Attestor ()
attestor.user_owned_grafeas_note.note_reference = "note_reference_value"
attestor.name = "name_value"
request = binaryauthorization_v1 . CreateAttestorRequest (
parent="parent_value",
attestor_id="attestor_id_value",
attestor=attestor,
)
# Make the request
response = await client. create_attestor (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.binaryauthorization_v1.types.CreateAttestorRequest , dict]]
The request object. Request message for [BinauthzManagementService.CreateAttestor][].
parent
str
Required. The parent of this attestor . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
attestor_id
str
Required. The attestor s ID. This corresponds to the attestor_id field on the request instance; if request is provided, this should not be set.
attestor
Attestor
Required. The initial attestor value. The service will overwrite the [attestor name][google.cloud.binaryauthorization.v1.Attestor.name] field with the resource name, in the format projects/ /attestors/ . This corresponds to the attestor field on the request instance; if request is provided, this should not be set.
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
google.cloud.binaryauthorization_v1.types.Attestor
An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
delete_attestor
delete_attestor (
request : typing . Optional [
typing . Union [
google . cloud . binaryauthorization_v1 . types . service . DeleteAttestorRequest ,
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
Deletes an
xref_attestor.
Returns NOT_FOUND if the
xref_attestor does
not exist.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import binaryauthorization_v1
async def sample_delete_attestor():
# Create a client
client = binaryauthorization_v1 . BinauthzManagementServiceV1AsyncClient ()
# Initialize request argument(s)
request = binaryauthorization_v1 . DeleteAttestorRequest (
name="name_value",
)
# Make the request
await client. delete_attestor (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.binaryauthorization_v1.types.DeleteAttestorRequest , dict]]
The request object. Request message for [BinauthzManagementService.DeleteAttestor][].
name
str
Required. The name of the attestor s to delete, in the format projects/ /attestors/ . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
BinauthzManagementServiceV1AsyncClient
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
BinauthzManagementServiceV1AsyncClient
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
BinauthzManagementServiceV1AsyncClient
The constructed client.
get_attestor
get_attestor (
request : typing . Optional [
typing . Union [
google . cloud . binaryauthorization_v1 . types . service . GetAttestorRequest , dict
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
) - > google . cloud . binaryauthorization_v1 . types . resources . Attestor
Gets an
xref_attestor.
Returns NOT_FOUND if the
xref_attestor does
not exist.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import binaryauthorization_v1
async def sample_get_attestor():
# Create a client
client = binaryauthorization_v1 . BinauthzManagementServiceV1AsyncClient ()
# Initialize request argument(s)
request = binaryauthorization_v1 . GetAttestorRequest (
name="name_value",
)
# Make the request
response = await client. get_attestor (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.binaryauthorization_v1.types.GetAttestorRequest , dict]]
The request object. Request message for [BinauthzManagementService.GetAttestor][].
name
str
Required. The name of the attestor to retrieve, in the format projects/ /attestors/ . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.binaryauthorization_v1.types.Attestor
An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
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
get_policy
get_policy (
request : typing . Optional [
typing . Union [
google . cloud . binaryauthorization_v1 . types . service . GetPolicyRequest , dict
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
) - > google . cloud . binaryauthorization_v1 . types . resources . Policy
A xref_policy specifies
the xref_attestors
that must attest to a container image, before the project is
allowed to deploy that image. There is at most one policy per
project. All image admission requests are permitted if a project
has no policy.
Gets the xref_policy
for this project. Returns a default
xref_policy if the
project does not have one.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import binaryauthorization_v1
async def sample_get_policy():
# Create a client
client = binaryauthorization_v1 . BinauthzManagementServiceV1AsyncClient ()
# Initialize request argument(s)
request = binaryauthorization_v1 . GetPolicyRequest (
name="name_value",
)
# Make the request
response = await client. get_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.binaryauthorization_v1.types.GetPolicyRequest , dict]]
The request object. Request message for [BinauthzManagementService.GetPolicy][].
name
str
Required. The resource name of the policy to retrieve, in the format projects/*/policy . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.binaryauthorization_v1.types.Policy
A policy for container image binary authorization.
get_transport_class
get_transport_class (
label : typing . Optional [ str ] = None ,
) - > typing . Type [
google . cloud . binaryauthorization_v1 . services . binauthz_management_service_v1 . transports . base . BinauthzManagementServiceV1Transport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
list_attestors
list_attestors (
request : typing . Optional [
typing . Union [
google . cloud . binaryauthorization_v1 . types . service . ListAttestorsRequest , dict
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
google . cloud . binaryauthorization_v1 . services . binauthz_management_service_v1 . pagers . ListAttestorsAsyncPager
)
Lists xref_attestors.
Returns INVALID_ARGUMENT if the project does not exist.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import binaryauthorization_v1
async def sample_list_attestors():
# Create a client
client = binaryauthorization_v1 . BinauthzManagementServiceV1AsyncClient ()
# Initialize request argument(s)
request = binaryauthorization_v1 . ListAttestorsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_attestors (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.binaryauthorization_v1.types.ListAttestorsRequest , dict]]
The request object. Request message for [BinauthzManagementService.ListAttestors][].
parent
str
Required. The resource name of the project associated with the attestors , in the format projects/* . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.binaryauthorization_v1.services.binauthz_management_service_v1.pagers.ListAttestorsAsyncPager
Response message for [BinauthzManagementService.ListAttestors][]. Iterating over this object will yield results and resolve additional pages automatically.
parse_attestor_path
parse_attestor_path ( path : str ) - > typing . Dict [ str , str ]
Parses a attestor path into its component segments.
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
parse_policy_path
parse_policy_path ( path : str ) - > typing . Dict [ str , str ]
Parses a policy path into its component segments.
policy_path
policy_path ( project : str ) - > str
Returns a fully-qualified policy string.
update_attestor
update_attestor (
request : typing . Optional [
typing . Union [
google . cloud . binaryauthorization_v1 . types . service . UpdateAttestorRequest ,
dict ,
]
] = None ,
* ,
attestor : typing . Optional [
google . cloud . binaryauthorization_v1 . types . resources . Attestor
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . binaryauthorization_v1 . types . resources . Attestor
Updates an
xref_attestor.
Returns NOT_FOUND if the
xref_attestor does
not exist.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import binaryauthorization_v1
async def sample_update_attestor():
# Create a client
client = binaryauthorization_v1 . BinauthzManagementServiceV1AsyncClient ()
# Initialize request argument(s)
attestor = binaryauthorization_v1 . Attestor ()
attestor.user_owned_grafeas_note.note_reference = "note_reference_value"
attestor.name = "name_value"
request = binaryauthorization_v1 . UpdateAttestorRequest (
attestor=attestor,
)
# Make the request
response = await client. update_attestor (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.binaryauthorization_v1.types.UpdateAttestorRequest , dict]]
The request object. Request message for [BinauthzManagementService.UpdateAttestor][].
attestor
Attestor
Required. The updated attestor value. The service will overwrite the [attestor name][google.cloud.binaryauthorization.v1.Attestor.name] field with the resource name in the request URL, in the format projects/ /attestors/ . This corresponds to the attestor field on the request instance; if request is provided, this should not be set.
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
google.cloud.binaryauthorization_v1.types.Attestor
An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
update_policy
update_policy (
request : typing . Optional [
typing . Union [
google . cloud . binaryauthorization_v1 . types . service . UpdatePolicyRequest , dict
]
] = None ,
* ,
policy : typing . Optional [
google . cloud . binaryauthorization_v1 . types . resources . Policy
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . binaryauthorization_v1 . types . resources . Policy
Creates or updates a project's
xref_policy, and
returns a copy of the new
xref_policy. A policy
is always updated as a whole, to avoid race conditions with
concurrent policy enforcement (or management!) requests. Returns
NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the
request is malformed.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import binaryauthorization_v1
async def sample_update_policy():
# Create a client
client = binaryauthorization_v1 . BinauthzManagementServiceV1AsyncClient ()
# Initialize request argument(s)
policy = binaryauthorization_v1 . Policy ()
policy.default_admission_rule.evaluation_mode = "ALWAYS_DENY"
policy.default_admission_rule.enforcement_mode = "DRYRUN_AUDIT_LOG_ONLY"
request = binaryauthorization_v1 . UpdatePolicyRequest (
policy=policy,
)
# Make the request
response = await client. update_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.binaryauthorization_v1.types.UpdatePolicyRequest , dict]]
The request object. Request message for [BinauthzManagementService.UpdatePolicy][].
policy
Policy
Required. A new or updated policy value. The service will overwrite the [policy name][google.cloud.binaryauthorization.v1.Policy.name] field with the resource name in the request URL, in the format projects/*/policy . This corresponds to the policy field on the request instance; if request is provided, this should not be set.
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
google.cloud.binaryauthorization_v1.types.Policy
A policy for container image binary authorization.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
