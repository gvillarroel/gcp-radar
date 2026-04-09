---
title: "Class PolicyTagManagerAsyncClient (3.29.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.policy_tag_manager.PolicyTagManagerAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datacatalog/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.policy_tag_manager.PolicyTagManagerAsyncClient
  title: "Class PolicyTagManagerAsyncClient (3.29.0) \_|\_ Python client libraries\
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
Class PolicyTagManagerAsyncClient (3.29.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
3.29.0 (latest)
3.28.0
3.27.1
3.26.1
3.25.1
3.24.1
3.23.0
3.22.0
3.21.1
3.20.1
3.19.1
3.18.3
3.17.2
3.16.0
3.15.1
3.14.0
3.13.1
3.12.0
3.11.1
3.10.0
3.9.3
3.8.1
3.7.1
3.6.2
3.5.0
3.4.3
3.3.2
3.2.1
3.1.1
3.0.0
2.0.2
1.0.2
0.8.2
0.7.0
0.6.0
0.5.0
0.4.0
0.3.0
PolicyTagManagerAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . datacatalog_v1 . services . policy_tag_manager . transports . base . PolicyTagManagerTransport ,
typing . Callable [
[ ... ],
google . cloud . datacatalog_v1 . services . policy_tag_manager . transports . base . PolicyTagManagerTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Policy Tag Manager API service allows you to manage your
policy tags and taxonomies.
Policy tags are used to tag BigQuery columns and apply
additional access control policies. A taxonomy is a hierarchical
grouping of policy tags that classify data along a common axis.
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
PolicyTagManagerTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
PolicyTagManagerAsyncClient
PolicyTagManagerAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . datacatalog_v1 . services . policy_tag_manager . transports . base . PolicyTagManagerTransport ,
typing . Callable [
[ ... ],
google . cloud . datacatalog_v1 . services . policy_tag_manager . transports . base . PolicyTagManagerTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the policy tag manager async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,PolicyTagManagerTransport,Callable[..., PolicyTagManagerTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the PolicyTagManagerTransport constructor. If set to None, a transport is chosen automatically.
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
google . longrunning . operations_pb2 . CancelOperationRequest
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
create_policy_tag
create_policy_tag (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . policytagmanager . CreatePolicyTagRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
policy_tag : typing . Optional [
google . cloud . datacatalog_v1 . types . policytagmanager . PolicyTag
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . datacatalog_v1 . types . policytagmanager . PolicyTag
Creates a policy tag in a taxonomy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
async def sample_create_policy_tag():
# Create a client
client = datacatalog_v1 . PolicyTagManagerAsyncClient ()
# Initialize request argument(s)
request = datacatalog_v1 . CreatePolicyTagRequest (
parent="parent_value",
)
# Make the request
response = await client. create_policy_tag (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.datacatalog_v1.types.CreatePolicyTagRequest , dict]]
The request object. Request message for CreatePolicyTag .
parent
str
Required. Resource name of the taxonomy that the policy tag will belong to. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
policy_tag
PolicyTag
The policy tag to create. This corresponds to the policy_tag field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.PolicyTag
Denotes one policy tag in a taxonomy, for example, SSN. Policy tags can be defined in a hierarchy. For example: :literal: + Geolocation + LatLong + City + ZipCode \ \` Where the "Geolocation" policy tag contains three children.
create_taxonomy
create_taxonomy (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . policytagmanager . CreateTaxonomyRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
taxonomy : typing . Optional [
google . cloud . datacatalog_v1 . types . policytagmanager . Taxonomy
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . datacatalog_v1 . types . policytagmanager . Taxonomy
Creates a taxonomy in a specified project.
The taxonomy is initially empty, that is, it doesn't
contain policy tags.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
async def sample_create_taxonomy():
# Create a client
client = datacatalog_v1 . PolicyTagManagerAsyncClient ()
# Initialize request argument(s)
request = datacatalog_v1 . CreateTaxonomyRequest (
parent="parent_value",
)
# Make the request
response = await client. create_taxonomy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.datacatalog_v1.types.CreateTaxonomyRequest , dict]]
The request object. Request message for CreateTaxonomy .
parent
str
Required. Resource name of the project that the taxonomy will belong to. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
taxonomy
Taxonomy
The taxonomy to create. This corresponds to the taxonomy field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.Taxonomy
A taxonomy is a collection of hierarchical policy tags that classify data along a common axis. For example, a "data sensitivity" taxonomy might contain the following policy tags: :literal: + PII + Account number + Age + SSN + Zipcode + Financials + Revenue \ \ A "data origin" taxonomy might contain the following policy tags: :literal: + User data + Employee data + Partner data + Public data \ \
delete_operation
delete_operation (
request : typing . Optional [
google . longrunning . operations_pb2 . DeleteOperationRequest
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
delete_policy_tag
delete_policy_tag (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . policytagmanager . DeletePolicyTagRequest ,
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
Deletes a policy tag together with the following:
All of its descendant policy tags, if any
Policies associated with the policy tag and its descendants
References from BigQuery table schema of the policy tag and
its descendants
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
async def sample_delete_policy_tag():
# Create a client
client = datacatalog_v1 . PolicyTagManagerAsyncClient ()
# Initialize request argument(s)
request = datacatalog_v1 . DeletePolicyTagRequest (
name="name_value",
)
# Make the request
await client. delete_policy_tag (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.datacatalog_v1.types.DeletePolicyTagRequest , dict]]
The request object. Request message for DeletePolicyTag .
name
str
Required. Resource name of the policy tag to delete. Note: All of its descendant policy tags are also deleted. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_taxonomy
delete_taxonomy (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . policytagmanager . DeleteTaxonomyRequest ,
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
Deletes a taxonomy, including all policy tags in this
taxonomy, their associated policies, and the policy tags
references from BigQuery columns.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
async def sample_delete_taxonomy():
# Create a client
client = datacatalog_v1 . PolicyTagManagerAsyncClient ()
# Initialize request argument(s)
request = datacatalog_v1 . DeleteTaxonomyRequest (
name="name_value",
)
# Make the request
await client. delete_taxonomy (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.datacatalog_v1.types.DeleteTaxonomyRequest , dict]]
The request object. Request message for DeleteTaxonomy .
name
str
Required. Resource name of the taxonomy to delete. Note: All policy tags in this taxonomy are also deleted. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
PolicyTagManagerAsyncClient
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
PolicyTagManagerAsyncClient
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
PolicyTagManagerAsyncClient
The constructed client.
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
Gets the IAM policy for a policy tag or a taxonomy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
from google.iam.v1 import iam_policy_pb2 # type: ignore
async def sample_get_iam_policy():
# Create a client
client = datacatalog_v1 . PolicyTagManagerAsyncClient ()
# Initialize request argument(s)
request = iam_policy_pb2.GetIamPolicyRequest(
resource="resource_value",
)
# Make the request
response = await client. get_iam_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.iam.v1.iam_policy_pb2.GetIamPolicyRequest , dict]]
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
google.iam.v1.policy_pb2.Policy
An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ **YAML example:** :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
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
google . longrunning . operations_pb2 . GetOperationRequest
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
get_policy_tag
get_policy_tag (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . policytagmanager . GetPolicyTagRequest , dict
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
) - > google . cloud . datacatalog_v1 . types . policytagmanager . PolicyTag
Gets a policy tag.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
async def sample_get_policy_tag():
# Create a client
client = datacatalog_v1 . PolicyTagManagerAsyncClient ()
# Initialize request argument(s)
request = datacatalog_v1 . GetPolicyTagRequest (
name="name_value",
)
# Make the request
response = await client. get_policy_tag (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.datacatalog_v1.types.GetPolicyTagRequest , dict]]
The request object. Request message for GetPolicyTag .
name
str
Required. Resource name of the policy tag. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.PolicyTag
Denotes one policy tag in a taxonomy, for example, SSN. Policy tags can be defined in a hierarchy. For example: :literal: + Geolocation + LatLong + City + ZipCode \ \` Where the "Geolocation" policy tag contains three children.
get_taxonomy
get_taxonomy (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . policytagmanager . GetTaxonomyRequest , dict
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
) - > google . cloud . datacatalog_v1 . types . policytagmanager . Taxonomy
Gets a taxonomy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
async def sample_get_taxonomy():
# Create a client
client = datacatalog_v1 . PolicyTagManagerAsyncClient ()
# Initialize request argument(s)
request = datacatalog_v1 . GetTaxonomyRequest (
name="name_value",
)
# Make the request
response = await client. get_taxonomy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.datacatalog_v1.types.GetTaxonomyRequest , dict]]
The request object. Request message for GetTaxonomy .
name
str
Required. Resource name of the taxonomy to get. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.Taxonomy
A taxonomy is a collection of hierarchical policy tags that classify data along a common axis. For example, a "data sensitivity" taxonomy might contain the following policy tags: :literal: + PII + Account number + Age + SSN + Zipcode + Financials + Revenue \ \ A "data origin" taxonomy might contain the following policy tags: :literal: + User data + Employee data + Partner data + Public data \ \
get_transport_class
get_transport_class (
label : typing . Optional [ str ] = None ,
) - > typing . Type [
google . cloud . datacatalog_v1 . services . policy_tag_manager . transports . base . PolicyTagManagerTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
list_operations
list_operations (
request : typing . Optional [
google . longrunning . operations_pb2 . ListOperationsRequest
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
list_policy_tags
list_policy_tags (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . policytagmanager . ListPolicyTagsRequest ,
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
google . cloud . datacatalog_v1 . services . policy_tag_manager . pagers . ListPolicyTagsAsyncPager
)
Lists all policy tags in a taxonomy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
async def sample_list_policy_tags():
# Create a client
client = datacatalog_v1 . PolicyTagManagerAsyncClient ()
# Initialize request argument(s)
request = datacatalog_v1 . ListPolicyTagsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_policy_tags (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.datacatalog_v1.types.ListPolicyTagsRequest , dict]]
The request object. Request message for ListPolicyTags .
parent
str
Required. Resource name of the taxonomy to list the policy tags of. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.services.policy_tag_manager.pagers.ListPolicyTagsAsyncPager
Response message for ListPolicyTags . Iterating over this object will yield results and resolve additional pages automatically.
list_taxonomies
list_taxonomies (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . policytagmanager . ListTaxonomiesRequest ,
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
google . cloud . datacatalog_v1 . services . policy_tag_manager . pagers . ListTaxonomiesAsyncPager
)
Lists all taxonomies in a project in a particular
location that you have a permission to view.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
async def sample_list_taxonomies():
# Create a client
client = datacatalog_v1 . PolicyTagManagerAsyncClient ()
# Initialize request argument(s)
request = datacatalog_v1 . ListTaxonomiesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_taxonomies (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.datacatalog_v1.types.ListTaxonomiesRequest , dict]]
The request object. Request message for ListTaxonomies .
parent
str
Required. Resource name of the project to list the taxonomies of. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.services.policy_tag_manager.pagers.ListTaxonomiesAsyncPager
Response message for ListTaxonomies . Iterating over this object will yield results and resolve additional pages automatically.
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
parse_policy_tag_path
parse_policy_tag_path ( path : str ) - > typing . Dict [ str , str ]
Parses a policy_tag path into its component segments.
parse_taxonomy_path
parse_taxonomy_path ( path : str ) - > typing . Dict [ str , str ]
Parses a taxonomy path into its component segments.
policy_tag_path
policy_tag_path ( project : str , location : str , taxonomy : str , policy_tag : str ) - > str
Returns a fully-qualified policy_tag string.
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
Sets the IAM policy for a policy tag or a taxonomy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
from google.iam.v1 import iam_policy_pb2 # type: ignore
async def sample_set_iam_policy():
# Create a client
client = datacatalog_v1 . PolicyTagManagerAsyncClient ()
# Initialize request argument(s)
request = iam_policy_pb2.SetIamPolicyRequest(
resource="resource_value",
)
# Make the request
response = await client. set_iam_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.iam.v1.iam_policy_pb2.SetIamPolicyRequest , dict]]
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
google.iam.v1.policy_pb2.Policy
An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ **YAML example:** :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
taxonomy_path
taxonomy_path ( project : str , location : str , taxonomy : str ) - > str
Returns a fully-qualified taxonomy string.
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
Returns your permissions on a specified policy tag or
taxonomy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
from google.iam.v1 import iam_policy_pb2 # type: ignore
async def sample_test_iam_permissions():
# Create a client
client = datacatalog_v1 . PolicyTagManagerAsyncClient ()
# Initialize request argument(s)
request = iam_policy_pb2.TestIamPermissionsRequest(
resource="resource_value",
permissions=['permissions_value1', 'permissions_value2'],
)
# Make the request
response = await client. test_iam_permissions (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.iam.v1.iam_policy_pb2.TestIamPermissionsRequest , dict]]
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
google.iam.v1.iam_policy_pb2.TestIamPermissionsResponse
Response message for TestIamPermissions method.
update_policy_tag
update_policy_tag (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . policytagmanager . UpdatePolicyTagRequest ,
dict ,
]
] = None ,
* ,
policy_tag : typing . Optional [
google . cloud . datacatalog_v1 . types . policytagmanager . PolicyTag
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . datacatalog_v1 . types . policytagmanager . PolicyTag
Updates a policy tag, including its display
name, description, and parent policy tag.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
async def sample_update_policy_tag():
# Create a client
client = datacatalog_v1 . PolicyTagManagerAsyncClient ()
# Initialize request argument(s)
request = datacatalog_v1 . UpdatePolicyTagRequest (
)
# Make the request
response = await client. update_policy_tag (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.datacatalog_v1.types.UpdatePolicyTagRequest , dict]]
The request object. Request message for UpdatePolicyTag .
policy_tag
PolicyTag
The policy tag to update. You can update only its description, display name, and parent policy tag fields. This corresponds to the policy_tag field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.PolicyTag
Denotes one policy tag in a taxonomy, for example, SSN. Policy tags can be defined in a hierarchy. For example: :literal: + Geolocation + LatLong + City + ZipCode \ \` Where the "Geolocation" policy tag contains three children.
update_taxonomy
update_taxonomy (
request : typing . Optional [
typing . Union [
google . cloud . datacatalog_v1 . types . policytagmanager . UpdateTaxonomyRequest ,
dict ,
]
] = None ,
* ,
taxonomy : typing . Optional [
google . cloud . datacatalog_v1 . types . policytagmanager . Taxonomy
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . datacatalog_v1 . types . policytagmanager . Taxonomy
Updates a taxonomy, including its display name,
description, and activated policy types.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import datacatalog_v1
async def sample_update_taxonomy():
# Create a client
client = datacatalog_v1 . PolicyTagManagerAsyncClient ()
# Initialize request argument(s)
request = datacatalog_v1 . UpdateTaxonomyRequest (
)
# Make the request
response = await client. update_taxonomy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.datacatalog_v1.types.UpdateTaxonomyRequest , dict]]
The request object. Request message for UpdateTaxonomy .
taxonomy
Taxonomy
The taxonomy to update. You can update only its description, display name, and activated policy types. This corresponds to the taxonomy field on the request instance; if request is provided, this should not be set.
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
google.cloud.datacatalog_v1.types.Taxonomy
A taxonomy is a collection of hierarchical policy tags that classify data along a common axis. For example, a "data sensitivity" taxonomy might contain the following policy tags: :literal: + PII + Account number + Age + SSN + Zipcode + Financials + Revenue \ \ A "data origin" taxonomy might contain the following policy tags: :literal: + User data + Employee data + Partner data + Public data \ \
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
