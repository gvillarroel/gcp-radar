---
title: "Class FirewallActivationAsyncClient (0.13.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/networksecurity/latest/google.cloud.network_security_v1.services.firewall_activation.FirewallActivationAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/networksecurity/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/networksecurity/latest/google.cloud.network_security_v1.services.firewall_activation.FirewallActivationAsyncClient
  title: "Class FirewallActivationAsyncClient (0.13.0) \_|\_ Python client libraries\
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
Class FirewallActivationAsyncClient (0.13.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.13.0 (latest)
0.12.0
0.11.0
0.10.0
0.9.21
0.8.0
0.7.2
0.6.1
0.5.0
0.4.2
0.3.2
0.2.0
0.1.5
FirewallActivationAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . network_security_v1 . services . firewall_activation . transports . base . FirewallActivationTransport ,
typing . Callable [
[ ... ],
google . cloud . network_security_v1 . services . firewall_activation . transports . base . FirewallActivationTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Service for managing Firewall Endpoints and Associations.
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
FirewallActivationTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
FirewallActivationAsyncClient
FirewallActivationAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . network_security_v1 . services . firewall_activation . transports . base . FirewallActivationTransport ,
typing . Callable [
[ ... ],
google . cloud . network_security_v1 . services . firewall_activation . transports . base . FirewallActivationTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the firewall activation async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,FirewallActivationTransport,Callable[..., FirewallActivationTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the FirewallActivationTransport constructor. If set to None, a transport is chosen automatically.
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
cancel_operation
cancel_operation (
request : typing . Optional [
typing . Union [ google . longrunning . operations_pb2 . CancelOperationRequest , dict ]
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
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
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
create_firewall_endpoint
create_firewall_endpoint (
request : typing . Optional [
typing . Union [
google . cloud . network_security_v1 . types . firewall_activation . CreateFirewallEndpointRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
firewall_endpoint : typing . Optional [
google . cloud . network_security_v1 . types . firewall_activation . FirewallEndpoint
] = None ,
firewall_endpoint_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new FirewallEndpoint in a given
organization and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import network_security _v1
async def sample_create_firewall_endpoint():
# Create a client
client = network_security_v1. FirewallActivationAsyncClient ()
# Initialize request argument(s)
request = network_security_v1. CreateFirewallEndpointRequest (
parent="parent_value",
firewall_endpoint_id="firewall_endpoint_id_value",
)
# Make the request
operation = client. create_firewall_endpoint (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.network_security_v1.types.CreateFirewallEndpointRequest , dict]]
The request object. Message for creating a Endpoint
parent
str
Required. Value for parent. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
firewall_endpoint
FirewallEndpoint
Required. The resource being created This corresponds to the firewall_endpoint field on the request instance; if request is provided, this should not be set.
firewall_endpoint_id
str
Required. Id of the requesting object. If auto-generating Id server-side, remove this field and firewall_endpoint_id from the method_signature of Create RPC. This corresponds to the firewall_endpoint_id field on the request instance; if request is provided, this should not be set.
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
google.api_core.operation_async.AsyncOperation
An object representing a long-running operation. The result type for the operation will be FirewallEndpoint Message describing Endpoint object.
create_firewall_endpoint_association
create_firewall_endpoint_association (
request : typing . Optional [
typing . Union [
google . cloud . network_security_v1 . types . firewall_activation . CreateFirewallEndpointAssociationRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
firewall_endpoint_association : typing . Optional [
google . cloud . network_security_v1 . types . firewall_activation . FirewallEndpointAssociation
] = None ,
firewall_endpoint_association_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new FirewallEndpointAssociation in a given
project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import network_security _v1
async def sample_create_firewall_endpoint_association():
# Create a client
client = network_security_v1. FirewallActivationAsyncClient ()
# Initialize request argument(s)
firewall_endpoint_association = network_security_v1. FirewallEndpointAssociation ()
firewall_endpoint_association.network = "network_value"
firewall_endpoint_association.firewall_endpoint = "firewall_endpoint_value"
request = network_security_v1. CreateFirewallEndpointAssociationRequest (
parent="parent_value",
firewall_endpoint_association=firewall_endpoint_association,
)
# Make the request
operation = client. create_firewall_endpoint_association (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.network_security_v1.types.CreateFirewallEndpointAssociationRequest , dict]]
The request object. Message for creating a Association
parent
str
Required. Value for parent. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
firewall_endpoint_association
FirewallEndpointAssociation
Required. The resource being created This corresponds to the firewall_endpoint_association field on the request instance; if request is provided, this should not be set.
firewall_endpoint_association_id
str
Optional. Id of the requesting object. If auto-generating Id server-side, remove this field and firewall_endpoint_association_id from the method_signature of Create RPC. This corresponds to the firewall_endpoint_association_id field on the request instance; if request is provided, this should not be set.
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
google.api_core.operation_async.AsyncOperation
An object representing a long-running operation. The result type for the operation will be FirewallEndpointAssociation Message describing Association object
delete_firewall_endpoint
delete_firewall_endpoint (
request : typing . Optional [
typing . Union [
google . cloud . network_security_v1 . types . firewall_activation . DeleteFirewallEndpointRequest ,
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
) - > google . api_core . operation_async . AsyncOperation
Deletes a single org Endpoint.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import network_security _v1
async def sample_delete_firewall_endpoint():
# Create a client
client = network_security_v1. FirewallActivationAsyncClient ()
# Initialize request argument(s)
request = network_security_v1. DeleteFirewallEndpointRequest (
name="name_value",
)
# Make the request
operation = client. delete_firewall_endpoint (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.network_security_v1.types.DeleteFirewallEndpointRequest , dict]]
The request object. Message for deleting a Endpoint
name
str
Required. Name of the resource This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.api_core.operation_async.AsyncOperation
An object representing a long-running operation. The result type for the operation will be google.protobuf.empty_pb2.Empty A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
delete_firewall_endpoint_association
delete_firewall_endpoint_association (
request : typing . Optional [
typing . Union [
google . cloud . network_security_v1 . types . firewall_activation . DeleteFirewallEndpointAssociationRequest ,
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
) - > google . api_core . operation_async . AsyncOperation
Deletes a single FirewallEndpointAssociation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import network_security _v1
async def sample_delete_firewall_endpoint_association():
# Create a client
client = network_security_v1. FirewallActivationAsyncClient ()
# Initialize request argument(s)
request = network_security_v1. DeleteFirewallEndpointAssociationRequest (
name="name_value",
)
# Make the request
operation = client. delete_firewall_endpoint_association (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.network_security_v1.types.DeleteFirewallEndpointAssociationRequest , dict]]
The request object. Message for deleting a Association
name
str
Required. Name of the resource This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.api_core.operation_async.AsyncOperation
An object representing a long-running operation. The result type for the operation will be google.protobuf.empty_pb2.Empty A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
delete_operation
delete_operation (
request : typing . Optional [
typing . Union [ google . longrunning . operations_pb2 . DeleteOperationRequest , dict ]
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
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
firewall_endpoint_association_path
firewall_endpoint_association_path (
project : str , location : str , firewall_endpoint_association : str
) - > str
Returns a fully-qualified firewall_endpoint_association string.
firewall_endpoint_path
firewall_endpoint_path (
organization : str , location : str , firewall_endpoint : str
) - > str
Returns a fully-qualified firewall_endpoint string.
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
FirewallActivationAsyncClient
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
FirewallActivationAsyncClient
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
FirewallActivationAsyncClient
The constructed client.
get_firewall_endpoint
get_firewall_endpoint (
request : typing . Optional [
typing . Union [
google . cloud . network_security_v1 . types . firewall_activation . GetFirewallEndpointRequest ,
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
) - > google . cloud . network_security_v1 . types . firewall_activation . FirewallEndpoint
Gets details of a single org Endpoint.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import network_security _v1
async def sample_get_firewall_endpoint():
# Create a client
client = network_security_v1. FirewallActivationAsyncClient ()
# Initialize request argument(s)
request = network_security_v1. GetFirewallEndpointRequest (
name="name_value",
)
# Make the request
response = await client. get_firewall_endpoint (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.network_security_v1.types.GetFirewallEndpointRequest , dict]]
The request object. Message for getting a Endpoint
name
str
Required. Name of the resource This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.network_security_v1.types.FirewallEndpoint
Message describing Endpoint object.
get_firewall_endpoint_association
get_firewall_endpoint_association (
request : typing . Optional [
typing . Union [
google . cloud . network_security_v1 . types . firewall_activation . GetFirewallEndpointAssociationRequest ,
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
) - > (
google . cloud . network_security_v1 . types . firewall_activation . FirewallEndpointAssociation
)
Gets details of a single FirewallEndpointAssociation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import network_security _v1
async def sample_get_firewall_endpoint_association():
# Create a client
client = network_security_v1. FirewallActivationAsyncClient ()
# Initialize request argument(s)
request = network_security_v1. GetFirewallEndpointAssociationRequest (
name="name_value",
)
# Make the request
response = await client. get_firewall_endpoint_association (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.network_security_v1.types.GetFirewallEndpointAssociationRequest , dict]]
The request object. Message for getting a Association
name
str
Required. Name of the resource This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.network_security_v1.types.FirewallEndpointAssociation
Message describing Association object
get_iam_policy
get_iam_policy (
request : typing . Optional [
typing . Union [ google . iam . v1 . iam_policy_pb2 . GetIamPolicyRequest , dict ]
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
) - > google . iam . v1 . policy_pb2 . Policy
Gets the IAM access control policy for a function.
Returns an empty policy if the function exists and does not have a
policy set.
Parameters
Name
Description
request
.iam_policy_pb2.GetIamPolicyRequest
The request object. Request message for GetIamPolicy method.
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
.policy_pb2.Policy
Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources. A Policy is a collection of bindings . A binding binds one or more members to a single role . Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions (defined by IAM or configured by users). A binding can optionally specify a condition , which is a logic expression that further constrains the role binding based on attributes about the request and/or target resource. **JSON Example** :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" **yaml="" example**="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide __.
get_location
get_location (
request : typing . Optional [
typing . Union [ google . cloud . location . locations_pb2 . GetLocationRequest , dict ]
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
) - > google . cloud . location . locations_pb2 . Location
Gets information about a location.
Parameters
Name
Description
request
.location_pb2.GetLocationRequest
The request object. Request message for GetLocation method.
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
.location_pb2.Location
Location object.
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
get_transport_class
get_transport_class (
label : typing . Optional [ str ] = None ,
) - > typing . Type [
google . cloud . network_security_v1 . services . firewall_activation . transports . base . FirewallActivationTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
list_firewall_endpoint_associations
list_firewall_endpoint_associations (
request : typing . Optional [
typing . Union [
google . cloud . network_security_v1 . types . firewall_activation . ListFirewallEndpointAssociationsRequest ,
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
google . cloud . network_security_v1 . services . firewall_activation . pagers . ListFirewallEndpointAssociationsAsyncPager
)
Lists Associations in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import network_security _v1
async def sample_list_firewall_endpoint_associations():
# Create a client
client = network_security_v1. FirewallActivationAsyncClient ()
# Initialize request argument(s)
request = network_security_v1. ListFirewallEndpointAssociationsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_firewall_endpoint_associations (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.network_security_v1.types.ListFirewallEndpointAssociationsRequest , dict]]
The request object. Message for requesting list of Associations
parent
str
Required. Parent value for ListAssociationsRequest This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.network_security_v1.services.firewall_activation.pagers.ListFirewallEndpointAssociationsAsyncPager
Message for response to listing Associations Iterating over this object will yield results and resolve additional pages automatically.
list_firewall_endpoints
list_firewall_endpoints (
request : typing . Optional [
typing . Union [
google . cloud . network_security_v1 . types . firewall_activation . ListFirewallEndpointsRequest ,
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
google . cloud . network_security_v1 . services . firewall_activation . pagers . ListFirewallEndpointsAsyncPager
)
Lists FirewallEndpoints in a given organization and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import network_security _v1
async def sample_list_firewall_endpoints():
# Create a client
client = network_security_v1. FirewallActivationAsyncClient ()
# Initialize request argument(s)
request = network_security_v1. ListFirewallEndpointsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_firewall_endpoints (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.network_security_v1.types.ListFirewallEndpointsRequest , dict]]
The request object. Message for requesting list of Endpoints
parent
str
Required. Parent value for ListEndpointsRequest This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.network_security_v1.services.firewall_activation.pagers.ListFirewallEndpointsAsyncPager
Message for response to listing Endpoints Iterating over this object will yield results and resolve additional pages automatically.
list_locations
list_locations (
request : typing . Optional [
typing . Union [ google . cloud . location . locations_pb2 . ListLocationsRequest , dict ]
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
) - > google . cloud . location . locations_pb2 . ListLocationsResponse
Lists information about the supported locations for this service.
Parameters
Name
Description
request
.location_pb2.ListLocationsRequest
The request object. Request message for ListLocations method.
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
.location_pb2.ListLocationsResponse
Response message for ListLocations method.
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
network_path
network_path ( project : str , network : str ) - > str
Returns a fully-qualified network string.
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
parse_firewall_endpoint_association_path
parse_firewall_endpoint_association_path ( path : str ) - > typing . Dict [ str , str ]
Parses a firewall_endpoint_association path into its component segments.
parse_firewall_endpoint_path
parse_firewall_endpoint_path ( path : str ) - > typing . Dict [ str , str ]
Parses a firewall_endpoint path into its component segments.
parse_network_path
parse_network_path ( path : str ) - > typing . Dict [ str , str ]
Parses a network path into its component segments.
parse_tls_inspection_policy_path
parse_tls_inspection_policy_path ( path : str ) - > typing . Dict [ str , str ]
Parses a tls_inspection_policy path into its component segments.
set_iam_policy
set_iam_policy (
request : typing . Optional [
typing . Union [ google . iam . v1 . iam_policy_pb2 . SetIamPolicyRequest , dict ]
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
) - > google . iam . v1 . policy_pb2 . Policy
Sets the IAM access control policy on the specified function.
Replaces any existing policy.
Parameters
Name
Description
request
.iam_policy_pb2.SetIamPolicyRequest
The request object. Request message for SetIamPolicy method.
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
.policy_pb2.Policy
Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources. A Policy is a collection of bindings . A binding binds one or more members to a single role . Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions (defined by IAM or configured by users). A binding can optionally specify a condition , which is a logic expression that further constrains the role binding based on attributes about the request and/or target resource. **JSON Example** :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" **yaml="" example**="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide __.
test_iam_permissions
test_iam_permissions (
request : typing . Optional [
typing . Union [ google . iam . v1 . iam_policy_pb2 . TestIamPermissionsRequest , dict ]
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
) - > google . iam . v1 . iam_policy_pb2 . TestIamPermissionsResponse
Tests the specified IAM permissions against the IAM access control
policy for a function.
If the function does not exist, this will return an empty set
of permissions, not a NOT_FOUND error.
Parameters
Name
Description
request
.iam_policy_pb2.TestIamPermissionsRequest
The request object. Request message for TestIamPermissions method.
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
.iam_policy_pb2.TestIamPermissionsResponse
Response message for TestIamPermissions method.
tls_inspection_policy_path
tls_inspection_policy_path (
project : str , location : str , tls_inspection_policy : str
) - > str
Returns a fully-qualified tls_inspection_policy string.
update_firewall_endpoint
update_firewall_endpoint (
request : typing . Optional [
typing . Union [
google . cloud . network_security_v1 . types . firewall_activation . UpdateFirewallEndpointRequest ,
dict ,
]
] = None ,
* ,
firewall_endpoint : typing . Optional [
google . cloud . network_security_v1 . types . firewall_activation . FirewallEndpoint
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
) - > google . api_core . operation_async . AsyncOperation
Update a single org Endpoint.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import network_security _v1
async def sample_update_firewall_endpoint():
# Create a client
client = network_security_v1. FirewallActivationAsyncClient ()
# Initialize request argument(s)
request = network_security_v1. UpdateFirewallEndpointRequest (
)
# Make the request
operation = client. update_firewall_endpoint (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.network_security_v1.types.UpdateFirewallEndpointRequest , dict]]
The request object. Message for updating a Endpoint
firewall_endpoint
FirewallEndpoint
Required. The resource being updated This corresponds to the firewall_endpoint field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the Endpoint resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.api_core.operation_async.AsyncOperation
An object representing a long-running operation. The result type for the operation will be FirewallEndpoint Message describing Endpoint object.
update_firewall_endpoint_association
update_firewall_endpoint_association (
request : typing . Optional [
typing . Union [
google . cloud . network_security_v1 . types . firewall_activation . UpdateFirewallEndpointAssociationRequest ,
dict ,
]
] = None ,
* ,
firewall_endpoint_association : typing . Optional [
google . cloud . network_security_v1 . types . firewall_activation . FirewallEndpointAssociation
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
) - > google . api_core . operation_async . AsyncOperation
Update a single FirewallEndpointAssociation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import network_security _v1
async def sample_update_firewall_endpoint_association():
# Create a client
client = network_security_v1. FirewallActivationAsyncClient ()
# Initialize request argument(s)
firewall_endpoint_association = network_security_v1. FirewallEndpointAssociation ()
firewall_endpoint_association.network = "network_value"
firewall_endpoint_association.firewall_endpoint = "firewall_endpoint_value"
request = network_security_v1. UpdateFirewallEndpointAssociationRequest (
firewall_endpoint_association=firewall_endpoint_association,
)
# Make the request
operation = client. update_firewall_endpoint_association (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.network_security_v1.types.UpdateFirewallEndpointAssociationRequest , dict]]
The request object. Message for updating an Association
firewall_endpoint_association
FirewallEndpointAssociation
Required. The resource being updated This corresponds to the firewall_endpoint_association field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the Association resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.api_core.operation_async.AsyncOperation
An object representing a long-running operation. The result type for the operation will be FirewallEndpointAssociation Message describing Association object
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
