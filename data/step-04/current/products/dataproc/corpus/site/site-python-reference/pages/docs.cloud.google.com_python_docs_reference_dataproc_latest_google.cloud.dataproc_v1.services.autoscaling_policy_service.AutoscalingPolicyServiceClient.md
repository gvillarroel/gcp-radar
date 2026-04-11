---
title: "Class AutoscalingPolicyServiceClient (5.26.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dataproc/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient
  title: "Class AutoscalingPolicyServiceClient (5.26.0) \_|\_ Python client libraries\
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
Class AutoscalingPolicyServiceClient (5.26.0)
Stay organized with collections
Save and categorize content based on your preferences.
5.26.0 (latest)
5.25.0
5.24.0
5.23.0
5.22.0
5.21.0
5.20.0
5.18.1
5.17.1
5.16.0
5.15.1
5.14.0
5.13.0
5.12.0
5.10.2
5.9.3
5.8.0
5.7.0
5.6.0
5.5.1
5.4.3
5.3.0
5.2.0
5.1.0
5.0.3
4.0.3
3.3.2
3.2.0
3.1.1
3.0.0
2.6.2
2.5.0
2.4.0
2.3.1
2.2.0
2.0.2
1.1.3
1.0.1
0.8.2
0.7.0
0.6.1
0.5.0
AutoscalingPolicyServiceClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . dataproc_v1 . services . autoscaling_policy_service . transports . base . AutoscalingPolicyServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . dataproc_v1 . services . autoscaling_policy_service . transports . base . AutoscalingPolicyServiceTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
The API interface for managing autoscaling policies in the
Dataproc API.
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
AutoscalingPolicyServiceTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
AutoscalingPolicyServiceClient
AutoscalingPolicyServiceClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . dataproc_v1 . services . autoscaling_policy_service . transports . base . AutoscalingPolicyServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . dataproc_v1 . services . autoscaling_policy_service . transports . base . AutoscalingPolicyServiceTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the autoscaling policy service client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,AutoscalingPolicyServiceTransport,Callable[..., AutoscalingPolicyServiceTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the AutoscalingPolicyServiceTransport constructor. If set to None, a transport is chosen automatically.
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
autoscaling_policy_path
autoscaling_policy_path (
project : str , location : str , autoscaling_policy : str
) - > str
Returns a fully-qualified autoscaling_policy string.
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
create_autoscaling_policy
create_autoscaling_policy (
request : typing . Optional [
typing . Union [
google . cloud . dataproc_v1 . types . autoscaling_policies . CreateAutoscalingPolicyRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
policy : typing . Optional [
google . cloud . dataproc_v1 . types . autoscaling_policies . AutoscalingPolicy
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataproc_v1 . types . autoscaling_policies . AutoscalingPolicy
Creates new autoscaling policy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataproc_v1
def sample_create_autoscaling_policy():
# Create a client
client = dataproc_v1 . AutoscalingPolicyServiceClient ()
# Initialize request argument(s)
policy = dataproc_v1 . AutoscalingPolicy ()
policy.basic_algorithm.yarn_config.scale_up_factor = 0.1578
policy.basic_algorithm.yarn_config.scale_down_factor = 0.1789
policy.worker_config.max_instances = 1389
request = dataproc_v1 . CreateAutoscalingPolicyRequest (
parent="parent_value",
policy=policy,
)
# Make the request
response = client. create_autoscaling_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataproc_v1.types.CreateAutoscalingPolicyRequest , dict]
The request object. A request to create an autoscaling policy.
parent
str
Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names . - For projects.regions.autoscalingPolicies.create , the resource name of the region has the following format: projects/{project_id}/regions/{region} - For projects.locations.autoscalingPolicies.create , the resource name of the location has the following format: projects/{project_id}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
policy
google.cloud.dataproc_v1.types.AutoscalingPolicy
Required. The autoscaling policy to create. This corresponds to the policy field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataproc_v1.types.AutoscalingPolicy
Describes an autoscaling policy for Dataproc cluster autoscaler.
delete_autoscaling_policy
delete_autoscaling_policy (
request : typing . Optional [
typing . Union [
google . cloud . dataproc_v1 . types . autoscaling_policies . DeleteAutoscalingPolicyRequest ,
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
Deletes an autoscaling policy. It is an error to
delete an autoscaling policy that is in use by one or
more clusters.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataproc_v1
def sample_delete_autoscaling_policy():
# Create a client
client = dataproc_v1 . AutoscalingPolicyServiceClient ()
# Initialize request argument(s)
request = dataproc_v1 . DeleteAutoscalingPolicyRequest (
name="name_value",
)
# Make the request
client. delete_autoscaling_policy (request=request)
Parameters
Name
Description
request
Union[ google.cloud.dataproc_v1.types.DeleteAutoscalingPolicyRequest , dict]
The request object. A request to delete an autoscaling policy. Autoscaling policies in use by one or more clusters will not be deleted.
name
str
Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names . - For projects.regions.autoscalingPolicies.delete , the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} - For projects.locations.autoscalingPolicies.delete , the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
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
AutoscalingPolicyServiceClient
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
AutoscalingPolicyServiceClient
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
AutoscalingPolicyServiceClient
The constructed client.
get_autoscaling_policy
get_autoscaling_policy (
request : typing . Optional [
typing . Union [
google . cloud . dataproc_v1 . types . autoscaling_policies . GetAutoscalingPolicyRequest ,
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
) - > google . cloud . dataproc_v1 . types . autoscaling_policies . AutoscalingPolicy
Retrieves autoscaling policy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataproc_v1
def sample_get_autoscaling_policy():
# Create a client
client = dataproc_v1 . AutoscalingPolicyServiceClient ()
# Initialize request argument(s)
request = dataproc_v1 . GetAutoscalingPolicyRequest (
name="name_value",
)
# Make the request
response = client. get_autoscaling_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataproc_v1.types.GetAutoscalingPolicyRequest , dict]
The request object. A request to fetch an autoscaling policy.
name
str
Required. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names . - For projects.regions.autoscalingPolicies.get , the resource name of the policy has the following format: projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} - For projects.locations.autoscalingPolicies.get , the resource name of the policy has the following format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataproc_v1.types.AutoscalingPolicy
Describes an autoscaling policy for Dataproc cluster autoscaler.
get_iam_policy
get_iam_policy (
request : typing . Optional [
typing . Union [ google . iam . v1 . iam_policy_pb2 . GetIamPolicyRequest , dict ]
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
.policy_pb2.Policy
Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources. A Policy is a collection of bindings . A binding binds one or more members to a single role . Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions (defined by IAM or configured by users). A binding can optionally specify a condition , which is a logic expression that further constrains the role binding based on attributes about the request and/or target resource. **JSON Example** :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" **yaml="" example**="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide __.
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
list_autoscaling_policies
list_autoscaling_policies (
request : typing . Optional [
typing . Union [
google . cloud . dataproc_v1 . types . autoscaling_policies . ListAutoscalingPoliciesRequest ,
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
google . cloud . dataproc_v1 . services . autoscaling_policy_service . pagers . ListAutoscalingPoliciesPager
)
Lists autoscaling policies in the project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataproc_v1
def sample_list_autoscaling_policies():
# Create a client
client = dataproc_v1 . AutoscalingPolicyServiceClient ()
# Initialize request argument(s)
request = dataproc_v1 . ListAutoscalingPoliciesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_autoscaling_policies (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataproc_v1.types.ListAutoscalingPoliciesRequest , dict]
The request object. A request to list autoscaling policies in a project.
parent
str
Required. The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource_names . - For projects.regions.autoscalingPolicies.list , the resource name of the region has the following format: projects/{project_id}/regions/{region} - For projects.locations.autoscalingPolicies.list , the resource name of the location has the following format: projects/{project_id}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataproc_v1.services.autoscaling_policy_service.pagers.ListAutoscalingPoliciesPager
A response to a request to list autoscaling policies in a project. Iterating over this object will yield results and resolve additional pages automatically.
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
parse_autoscaling_policy_path
parse_autoscaling_policy_path ( path : str ) - > typing . Dict [ str , str ]
Parses a autoscaling_policy path into its component segments.
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
set_iam_policy
set_iam_policy (
request : typing . Optional [
typing . Union [ google . iam . v1 . iam_policy_pb2 . SetIamPolicyRequest , dict ]
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
google . api_core . retry . retry_unary . Retry ,
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
.iam_policy_pb2.TestIamPermissionsResponse
Response message for TestIamPermissions method.
update_autoscaling_policy
update_autoscaling_policy (
request : typing . Optional [
typing . Union [
google . cloud . dataproc_v1 . types . autoscaling_policies . UpdateAutoscalingPolicyRequest ,
dict ,
]
] = None ,
* ,
policy : typing . Optional [
google . cloud . dataproc_v1 . types . autoscaling_policies . AutoscalingPolicy
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataproc_v1 . types . autoscaling_policies . AutoscalingPolicy
Updates (replaces) autoscaling policy.
Disabled check for update_mask, because all updates will be full
replacements.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataproc_v1
def sample_update_autoscaling_policy():
# Create a client
client = dataproc_v1 . AutoscalingPolicyServiceClient ()
# Initialize request argument(s)
policy = dataproc_v1 . AutoscalingPolicy ()
policy.basic_algorithm.yarn_config.scale_up_factor = 0.1578
policy.basic_algorithm.yarn_config.scale_down_factor = 0.1789
policy.worker_config.max_instances = 1389
request = dataproc_v1 . UpdateAutoscalingPolicyRequest (
policy=policy,
)
# Make the request
response = client. update_autoscaling_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataproc_v1.types.UpdateAutoscalingPolicyRequest , dict]
The request object. A request to update an autoscaling policy.
policy
google.cloud.dataproc_v1.types.AutoscalingPolicy
Required. The updated autoscaling policy. This corresponds to the policy field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataproc_v1.types.AutoscalingPolicy
Describes an autoscaling policy for Dataproc cluster autoscaler.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
