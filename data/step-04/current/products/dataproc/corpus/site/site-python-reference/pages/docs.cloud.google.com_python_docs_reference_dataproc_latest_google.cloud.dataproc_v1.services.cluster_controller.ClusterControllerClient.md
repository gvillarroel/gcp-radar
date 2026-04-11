---
title: "Class ClusterControllerClient (5.26.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dataproc/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient
  title: "Class ClusterControllerClient (5.26.0) \_|\_ Python client libraries \_\
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
Class ClusterControllerClient (5.26.0)
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
ClusterControllerClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . dataproc_v1 . services . cluster_controller . transports . base . ClusterControllerTransport ,
typing . Callable [
[ ... ],
google . cloud . dataproc_v1 . services . cluster_controller . transports . base . ClusterControllerTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
The ClusterControllerService provides methods to manage
clusters of Compute Engine instances.
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
ClusterControllerTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
ClusterControllerClient
ClusterControllerClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . dataproc_v1 . services . cluster_controller . transports . base . ClusterControllerTransport ,
typing . Callable [
[ ... ],
google . cloud . dataproc_v1 . services . cluster_controller . transports . base . ClusterControllerTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the cluster controller client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,ClusterControllerTransport,Callable[..., ClusterControllerTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the ClusterControllerTransport constructor. If set to None, a transport is chosen automatically.
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
cluster_path
cluster_path ( project : str , location : str , cluster : str ) - > str
Returns a fully-qualified cluster string.
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
create_cluster
create_cluster (
request : typing . Optional [
typing . Union [ google . cloud . dataproc_v1 . types . clusters . CreateClusterRequest , dict ]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
region : typing . Optional [ str ] = None ,
cluster : typing . Optional [ google . cloud . dataproc_v1 . types . clusters . Cluster ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Creates a cluster in a project. The returned
Operation.metadata][google.longrunning.Operation.metadata] will
be
ClusterOperationMetadata <https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataproc_v1
def sample_create_cluster():
# Create a client
client = dataproc_v1 . ClusterControllerClient ()
# Initialize request argument(s)
cluster = dataproc_v1 . Cluster ()
cluster.project_id = "project_id_value"
cluster.cluster_name = "cluster_name_value"
request = dataproc_v1 . CreateClusterRequest (
project_id="project_id_value",
region="region_value",
cluster=cluster,
)
# Make the request
operation = client. create_cluster (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataproc_v1.types.CreateClusterRequest , dict]
The request object. A request to create a cluster.
project_id
str
Required. The ID of the Google Cloud Platform project that the cluster belongs to. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
region
str
Required. The Dataproc region in which to handle the request. This corresponds to the region field on the request instance; if request is provided, this should not be set.
cluster
google.cloud.dataproc_v1.types.Cluster
Required. The cluster to create. This corresponds to the cluster field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Cluster Describes the identifying information, config, and status of a Dataproc cluster
crypto_key_path
crypto_key_path ( project : str , location : str , key_ring : str , crypto_key : str ) - > str
Returns a fully-qualified crypto_key string.
delete_cluster
delete_cluster (
request : typing . Optional [
typing . Union [ google . cloud . dataproc_v1 . types . clusters . DeleteClusterRequest , dict ]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
region : typing . Optional [ str ] = None ,
cluster_name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Deletes a cluster in a project. The returned
Operation.metadata][google.longrunning.Operation.metadata] will
be
ClusterOperationMetadata <https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataproc_v1
def sample_delete_cluster():
# Create a client
client = dataproc_v1 . ClusterControllerClient ()
# Initialize request argument(s)
request = dataproc_v1 . DeleteClusterRequest (
project_id="project_id_value",
region="region_value",
cluster_name="cluster_name_value",
)
# Make the request
operation = client. delete_cluster (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataproc_v1.types.DeleteClusterRequest , dict]
The request object. A request to delete a cluster.
project_id
str
Required. The ID of the Google Cloud Platform project that the cluster belongs to. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
region
str
Required. The Dataproc region in which to handle the request. This corresponds to the region field on the request instance; if request is provided, this should not be set.
cluster_name
str
Required. The cluster name. This corresponds to the cluster_name field on the request instance; if request is provided, this should not be set.
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
diagnose_cluster
diagnose_cluster (
request : typing . Optional [
typing . Union [
google . cloud . dataproc_v1 . types . clusters . DiagnoseClusterRequest , dict
]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
region : typing . Optional [ str ] = None ,
cluster_name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Gets cluster diagnostic information. The returned
Operation.metadata][google.longrunning.Operation.metadata] will
be
ClusterOperationMetadata <https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata> .
After the operation completes,
Operation.response][google.longrunning.Operation.response]
contains
DiagnoseClusterResults <https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults> .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataproc_v1
def sample_diagnose_cluster():
# Create a client
client = dataproc_v1 . ClusterControllerClient ()
# Initialize request argument(s)
request = dataproc_v1 . DiagnoseClusterRequest (
project_id="project_id_value",
region="region_value",
cluster_name="cluster_name_value",
)
# Make the request
operation = client. diagnose_cluster (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataproc_v1.types.DiagnoseClusterRequest , dict]
The request object. A request to collect cluster diagnostic information.
project_id
str
Required. The ID of the Google Cloud Platform project that the cluster belongs to. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
region
str
Required. The Dataproc region in which to handle the request. This corresponds to the region field on the request instance; if request is provided, this should not be set.
cluster_name
str
Required. The cluster name. This corresponds to the cluster_name field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be DiagnoseClusterResults The location of diagnostic output.
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
ClusterControllerClient
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
ClusterControllerClient
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
ClusterControllerClient
The constructed client.
get_cluster
get_cluster (
request : typing . Optional [
typing . Union [ google . cloud . dataproc_v1 . types . clusters . GetClusterRequest , dict ]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
region : typing . Optional [ str ] = None ,
cluster_name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataproc_v1 . types . clusters . Cluster
Gets the resource representation for a cluster in a
project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataproc_v1
def sample_get_cluster():
# Create a client
client = dataproc_v1 . ClusterControllerClient ()
# Initialize request argument(s)
request = dataproc_v1 . GetClusterRequest (
project_id="project_id_value",
region="region_value",
cluster_name="cluster_name_value",
)
# Make the request
response = client. get_cluster (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataproc_v1.types.GetClusterRequest , dict]
The request object. Request to get the resource representation for a cluster in a project.
project_id
str
Required. The ID of the Google Cloud Platform project that the cluster belongs to. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
region
str
Required. The Dataproc region in which to handle the request. This corresponds to the region field on the request instance; if request is provided, this should not be set.
cluster_name
str
Required. The cluster name. This corresponds to the cluster_name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataproc_v1.types.Cluster
Describes the identifying information, config, and status of a Dataproc cluster
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
list_clusters
list_clusters (
request : typing . Optional [
typing . Union [ google . cloud . dataproc_v1 . types . clusters . ListClustersRequest , dict ]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
region : typing . Optional [ str ] = None ,
filter : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataproc_v1 . services . cluster_controller . pagers . ListClustersPager
Lists all regions/{region}/clusters in a project
alphabetically.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataproc_v1
def sample_list_clusters():
# Create a client
client = dataproc_v1 . ClusterControllerClient ()
# Initialize request argument(s)
request = dataproc_v1 . ListClustersRequest (
project_id="project_id_value",
region="region_value",
)
# Make the request
page_result = client. list_clusters (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataproc_v1.types.ListClustersRequest , dict]
The request object. A request to list the clusters in a project.
project_id
str
Required. The ID of the Google Cloud Platform project that the cluster belongs to. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
region
str
Required. The Dataproc region in which to handle the request. This corresponds to the region field on the request instance; if request is provided, this should not be set.
filter
str
Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax: field = value [AND [field = value]] ... where field is one of status.state , clusterName , or labels.[KEY] , and [KEY] is a label key. value can be * to match all values. status.state can be one of the following: ACTIVE , INACTIVE , CREATING , RUNNING , ERROR , DELETING , UPDATING , STOPPING , or STOPPED . ACTIVE contains the CREATING , UPDATING , and RUNNING states. INACTIVE contains the DELETING , ERROR , STOPPING , and STOPPED states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator. Example filter: status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = * This corresponds to the filter field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersPager
The list of all clusters in a project. Iterating over this object will yield results and resolve additional pages automatically.
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
node_group_path
node_group_path ( project : str , region : str , cluster : str , node_group : str ) - > str
Returns a fully-qualified node_group string.
parse_cluster_path
parse_cluster_path ( path : str ) - > typing . Dict [ str , str ]
Parses a cluster path into its component segments.
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
parse_crypto_key_path
parse_crypto_key_path ( path : str ) - > typing . Dict [ str , str ]
Parses a crypto_key path into its component segments.
parse_node_group_path
parse_node_group_path ( path : str ) - > typing . Dict [ str , str ]
Parses a node_group path into its component segments.
parse_service_path
parse_service_path ( path : str ) - > typing . Dict [ str , str ]
Parses a service path into its component segments.
service_path
service_path ( project : str , location : str , service : str ) - > str
Returns a fully-qualified service string.
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
start_cluster
start_cluster (
request : typing . Optional [
typing . Union [ google . cloud . dataproc_v1 . types . clusters . StartClusterRequest , dict ]
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
) - > google . api_core . operation . Operation
Starts a cluster in a project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataproc_v1
def sample_start_cluster():
# Create a client
client = dataproc_v1 . ClusterControllerClient ()
# Initialize request argument(s)
request = dataproc_v1 . StartClusterRequest (
project_id="project_id_value",
region="region_value",
cluster_name="cluster_name_value",
)
# Make the request
operation = client. start_cluster (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataproc_v1.types.StartClusterRequest , dict]
The request object. A request to start a cluster.
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
An object representing a long-running operation. The result type for the operation will be Cluster Describes the identifying information, config, and status of a Dataproc cluster
stop_cluster
stop_cluster (
request : typing . Optional [
typing . Union [ google . cloud . dataproc_v1 . types . clusters . StopClusterRequest , dict ]
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
) - > google . api_core . operation . Operation
Stops a cluster in a project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataproc_v1
def sample_stop_cluster():
# Create a client
client = dataproc_v1 . ClusterControllerClient ()
# Initialize request argument(s)
request = dataproc_v1 . StopClusterRequest (
project_id="project_id_value",
region="region_value",
cluster_name="cluster_name_value",
)
# Make the request
operation = client. stop_cluster (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataproc_v1.types.StopClusterRequest , dict]
The request object. A request to stop a cluster.
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
An object representing a long-running operation. The result type for the operation will be Cluster Describes the identifying information, config, and status of a Dataproc cluster
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
update_cluster
update_cluster (
request : typing . Optional [
typing . Union [ google . cloud . dataproc_v1 . types . clusters . UpdateClusterRequest , dict ]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
region : typing . Optional [ str ] = None ,
cluster_name : typing . Optional [ str ] = None ,
cluster : typing . Optional [ google . cloud . dataproc_v1 . types . clusters . Cluster ] = None ,
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
Updates a cluster in a project. The returned
Operation.metadata][google.longrunning.Operation.metadata] will
be
ClusterOperationMetadata <https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata> __.
The cluster must be in a
[ RUNNING ][google.cloud.dataproc.v1.ClusterStatus.State]
state or an error is returned.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataproc_v1
def sample_update_cluster():
# Create a client
client = dataproc_v1 . ClusterControllerClient ()
# Initialize request argument(s)
cluster = dataproc_v1 . Cluster ()
cluster.project_id = "project_id_value"
cluster.cluster_name = "cluster_name_value"
request = dataproc_v1 . UpdateClusterRequest (
project_id="project_id_value",
region="region_value",
cluster_name="cluster_name_value",
cluster=cluster,
)
# Make the request
operation = client. update_cluster (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataproc_v1.types.UpdateClusterRequest , dict]
The request object. A request to update a cluster.
project_id
str
Required. The ID of the Google Cloud Platform project the cluster belongs to. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
region
str
Required. The Dataproc region in which to handle the request. This corresponds to the region field on the request instance; if request is provided, this should not be set.
cluster_name
str
Required. The cluster name. This corresponds to the cluster_name field on the request instance; if request is provided, this should not be set.
cluster
google.cloud.dataproc_v1.types.Cluster
Required. The changes to the cluster. This corresponds to the cluster field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Specifies the path, relative to Cluster , of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances , and the PATCH request body would specify the new value, as follows: :: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances , and the PATCH request body would be set as follows: :: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } Note: Currently, only the following fields can be updated: .. raw:: html
Mask Purpose labels Update labels config.worker_config.num_instances Resize primary worker group config.secondary_worker_config.num_instances Resize secondary worker group config.autoscaling_config.policy_uri Use, stop using, or change autoscaling policies This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Cluster Describes the identifying information, config, and status of a Dataproc cluster
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
