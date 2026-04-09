---
title: "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dataform/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient
  title: "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\
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
Class DataformClient (0.10.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.10.0 (latest)
0.9.0
0.8.0
0.7.0
0.6.2
0.5.16
0.4.1
0.3.0
0.2.3
0.1.0
DataformClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . dataform_v1 . services . dataform . transports . base . DataformTransport ,
typing . Callable [
[ ... ],
google . cloud . dataform_v1 . services . dataform . transports . base . DataformTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Dataform is a service to develop, create, document, test, and
update curated tables in BigQuery.
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
DataformTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
DataformClient
DataformClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . dataform_v1 . services . dataform . transports . base . DataformTransport ,
typing . Callable [
[ ... ],
google . cloud . dataform_v1 . services . dataform . transports . base . DataformTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the dataform client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,DataformTransport,Callable[..., DataformTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the DataformTransport constructor. If set to None, a transport is chosen automatically.
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
cancel_workflow_invocation
cancel_workflow_invocation (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . CancelWorkflowInvocationRequest ,
dict ,
]
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
) - > google . cloud . dataform_v1 . types . dataform . CancelWorkflowInvocationResponse
Requests cancellation of a running
WorkflowInvocation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_cancel_workflow_invocation():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . CancelWorkflowInvocationRequest (
name="name_value",
)
# Make the request
response = client. cancel_workflow_invocation (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.CancelWorkflowInvocationRequest , dict]
The request object. CancelWorkflowInvocation request message.
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
google.cloud.dataform_v1.types.CancelWorkflowInvocationResponse
CancelWorkflowInvocation response message.
commit_repository_changes
commit_repository_changes (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . CommitRepositoryChangesRequest , dict
]
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
) - > google . cloud . dataform_v1 . types . dataform . CommitRepositoryChangesResponse
Applies a Git commit to a Repository. The Repository must not
have a value for git_remote_settings.url .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_commit_repository_changes():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
commit_metadata = dataform_v1 . CommitMetadata ()
commit_metadata.author.name = "name_value"
commit_metadata.author.email_address = "email_address_value"
request = dataform_v1 . CommitRepositoryChangesRequest (
name="name_value",
commit_metadata=commit_metadata,
)
# Make the request
response = client. commit_repository_changes (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.CommitRepositoryChangesRequest , dict]
The request object. CommitRepositoryChanges request message.
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
google.cloud.dataform_v1.types.CommitRepositoryChangesResponse
CommitRepositoryChanges response message.
commit_workspace_changes
commit_workspace_changes (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . CommitWorkspaceChangesRequest , dict
]
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
) - > google . cloud . dataform_v1 . types . dataform . CommitWorkspaceChangesResponse
Applies a Git commit for uncommitted files in a
Workspace.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_commit_workspace_changes():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
author = dataform_v1 . CommitAuthor ()
author.name = "name_value"
author.email_address = "email_address_value"
request = dataform_v1 . CommitWorkspaceChangesRequest (
name="name_value",
author=author,
)
# Make the request
response = client. commit_workspace_changes (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.CommitWorkspaceChangesRequest , dict]
The request object. CommitWorkspaceChanges request message.
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
google.cloud.dataform_v1.types.CommitWorkspaceChangesResponse
CommitWorkspaceChanges response message.
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
compilation_result_path
compilation_result_path (
project : str , location : str , repository : str , compilation_result : str
) - > str
Returns a fully-qualified compilation_result string.
compute_repository_access_token_status
compute_repository_access_token_status (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . ComputeRepositoryAccessTokenStatusRequest ,
dict ,
]
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
) - > google . cloud . dataform_v1 . types . dataform . ComputeRepositoryAccessTokenStatusResponse
Computes a Repository's Git access token status.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_compute_repository_access_token_status():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . ComputeRepositoryAccessTokenStatusRequest (
name="name_value",
)
# Make the request
response = client. compute_repository_access_token_status (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.ComputeRepositoryAccessTokenStatusRequest , dict]
The request object. ComputeRepositoryAccessTokenStatus request message.
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
google.cloud.dataform_v1.types.ComputeRepositoryAccessTokenStatusResponse
ComputeRepositoryAccessTokenStatus response message.
config_path
config_path ( project : str , location : str ) - > str
Returns a fully-qualified config string.
create_compilation_result
create_compilation_result (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . CreateCompilationResultRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
compilation_result : typing . Optional [
google . cloud . dataform_v1 . types . dataform . CompilationResult
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . types . dataform . CompilationResult
Creates a new CompilationResult in a given project
and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_create_compilation_result():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
compilation_result = dataform_v1 . CompilationResult ()
compilation_result.git_commitish = "git_commitish_value"
request = dataform_v1 . CreateCompilationResultRequest (
parent="parent_value",
compilation_result=compilation_result,
)
# Make the request
response = client. create_compilation_result (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.CreateCompilationResultRequest , dict]
The request object. CreateCompilationResult request message.
parent
str
Required. The repository in which to create the compilation result. Must be in the format projects/ /locations/ /repositories/* . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
compilation_result
google.cloud.dataform_v1.types.CompilationResult
Required. The compilation result to create. This corresponds to the compilation_result field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.CompilationResult
Represents the result of compiling a Dataform project.
create_folder
create_folder (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . CreateFolderRequest , dict ]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
folder : typing . Optional [ google . cloud . dataform_v1 . types . dataform . Folder ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . types . dataform . Folder
Creates a new Folder in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_create_folder():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
folder = dataform_v1 . Folder ()
folder.display_name = "display_name_value"
request = dataform_v1 . CreateFolderRequest (
parent="parent_value",
folder=folder,
)
# Make the request
response = client. create_folder (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.CreateFolderRequest , dict]
The request object. CreateFolder request message.
parent
str
Required. The location in which to create the Folder. Must be in the format projects/ /locations/ . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
folder
google.cloud.dataform_v1.types.Folder
Required. The Folder to create. This corresponds to the folder field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.Folder
Represents a Dataform Folder. This is a resource that is used to organize Files and other Folders and provide hierarchical access controls.
create_release_config
create_release_config (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . CreateReleaseConfigRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
release_config : typing . Optional [
google . cloud . dataform_v1 . types . dataform . ReleaseConfig
] = None ,
release_config_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . types . dataform . ReleaseConfig
Creates a new ReleaseConfig in a given Repository.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_create_release_config():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
release_config = dataform_v1 . ReleaseConfig ()
release_config.git_commitish = "git_commitish_value"
request = dataform_v1 . CreateReleaseConfigRequest (
parent="parent_value",
release_config=release_config,
release_config_id="release_config_id_value",
)
# Make the request
response = client. create_release_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.CreateReleaseConfigRequest , dict]
The request object. CreateReleaseConfig request message.
parent
str
Required. The repository in which to create the release config. Must be in the format projects/ /locations/ /repositories/* . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
release_config
google.cloud.dataform_v1.types.ReleaseConfig
Required. The release config to create. This corresponds to the release_config field on the request instance; if request is provided, this should not be set.
release_config_id
str
Required. The ID to use for the release config, which will become the final component of the release config's resource name. This corresponds to the release_config_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.ReleaseConfig
Represents a Dataform release configuration.
create_repository
create_repository (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . CreateRepositoryRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
repository : typing . Optional [
google . cloud . dataform_v1 . types . dataform . Repository
] = None ,
repository_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . types . dataform . Repository
Creates a new Repository in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_create_repository():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . CreateRepositoryRequest (
parent="parent_value",
repository_id="repository_id_value",
)
# Make the request
response = client. create_repository (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.CreateRepositoryRequest , dict]
The request object. CreateRepository request message.
parent
str
Required. The location in which to create the repository. Must be in the format projects/ /locations/ . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
repository
google.cloud.dataform_v1.types.Repository
Required. The repository to create. This corresponds to the repository field on the request instance; if request is provided, this should not be set.
repository_id
str
Required. The ID to use for the repository, which will become the final component of the repository's resource name. This corresponds to the repository_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.Repository
Represents a Dataform Git repository.
create_team_folder
create_team_folder (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . CreateTeamFolderRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
team_folder : typing . Optional [
google . cloud . dataform_v1 . types . dataform . TeamFolder
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . types . dataform . TeamFolder
Creates a new TeamFolder in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_create_team_folder():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
team_folder = dataform_v1 . TeamFolder ()
team_folder.display_name = "display_name_value"
request = dataform_v1 . CreateTeamFolderRequest (
parent="parent_value",
team_folder=team_folder,
)
# Make the request
response = client. create_team_folder (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.CreateTeamFolderRequest , dict]
The request object. CreateTeamFolder request message.
parent
str
Required. The location in which to create the TeamFolder. Must be in the format projects/ /locations/ . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
team_folder
google.cloud.dataform_v1.types.TeamFolder
Required. The TeamFolder to create. This corresponds to the team_folder field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.TeamFolder
Represents a Dataform TeamFolder. This is a resource that sits at the project level and is used to organize Repositories and Folders with hierarchical access controls. They provide a team context and stricter access controls.
create_workflow_config
create_workflow_config (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . CreateWorkflowConfigRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
workflow_config : typing . Optional [
google . cloud . dataform_v1 . types . dataform . WorkflowConfig
] = None ,
workflow_config_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . types . dataform . WorkflowConfig
Creates a new WorkflowConfig in a given Repository.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_create_workflow_config():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
workflow_config = dataform_v1 . WorkflowConfig ()
workflow_config.release_config = "release_config_value"
request = dataform_v1 . CreateWorkflowConfigRequest (
parent="parent_value",
workflow_config=workflow_config,
workflow_config_id="workflow_config_id_value",
)
# Make the request
response = client. create_workflow_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.CreateWorkflowConfigRequest , dict]
The request object. CreateWorkflowConfig request message.
parent
str
Required. The repository in which to create the workflow config. Must be in the format projects/ /locations/ /repositories/* . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
workflow_config
google.cloud.dataform_v1.types.WorkflowConfig
Required. The workflow config to create. This corresponds to the workflow_config field on the request instance; if request is provided, this should not be set.
workflow_config_id
str
Required. The ID to use for the workflow config, which will become the final component of the workflow config's resource name. This corresponds to the workflow_config_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.WorkflowConfig
Represents a Dataform workflow configuration.
create_workflow_invocation
create_workflow_invocation (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . CreateWorkflowInvocationRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
workflow_invocation : typing . Optional [
google . cloud . dataform_v1 . types . dataform . WorkflowInvocation
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . types . dataform . WorkflowInvocation
Creates a new WorkflowInvocation in a given
Repository.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_create_workflow_invocation():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
workflow_invocation = dataform_v1 . WorkflowInvocation ()
workflow_invocation.compilation_result = "compilation_result_value"
request = dataform_v1 . CreateWorkflowInvocationRequest (
parent="parent_value",
workflow_invocation=workflow_invocation,
)
# Make the request
response = client. create_workflow_invocation (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.CreateWorkflowInvocationRequest , dict]
The request object. CreateWorkflowInvocation request message.
parent
str
Required. The repository in which to create the workflow invocation. Must be in the format projects/ /locations/ /repositories/* . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
workflow_invocation
google.cloud.dataform_v1.types.WorkflowInvocation
Required. The workflow invocation resource to create. This corresponds to the workflow_invocation field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.WorkflowInvocation
Represents a single invocation of a compilation result.
create_workspace
create_workspace (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . CreateWorkspaceRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
workspace : typing . Optional [
google . cloud . dataform_v1 . types . dataform . Workspace
] = None ,
workspace_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . types . dataform . Workspace
Creates a new Workspace in a given Repository.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_create_workspace():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . CreateWorkspaceRequest (
parent="parent_value",
workspace_id="workspace_id_value",
)
# Make the request
response = client. create_workspace (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.CreateWorkspaceRequest , dict]
The request object. CreateWorkspace request message.
parent
str
Required. The repository in which to create the workspace. Must be in the format projects/ /locations/ /repositories/* . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
workspace
google.cloud.dataform_v1.types.Workspace
Required. The workspace to create. This corresponds to the workspace field on the request instance; if request is provided, this should not be set.
workspace_id
str
Required. The ID to use for the workspace, which will become the final component of the workspace's resource name. This corresponds to the workspace_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.Workspace
Represents a Dataform Git workspace.
crypto_key_path
crypto_key_path ( project : str , location : str , key_ring : str , crypto_key : str ) - > str
Returns a fully-qualified crypto_key string.
crypto_key_version_path
crypto_key_version_path (
project : str , location : str , key_ring : str , crypto_key : str , crypto_key_version : str
) - > str
Returns a fully-qualified crypto_key_version string.
delete_folder
delete_folder (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . DeleteFolderRequest , dict ]
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
Deletes a single Folder.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_delete_folder():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . DeleteFolderRequest (
name="name_value",
)
# Make the request
client. delete_folder (request=request)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.DeleteFolderRequest , dict]
The request object. DeleteFolder request message.
name
str
Required. The Folder's name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_folder_tree
delete_folder_tree (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . DeleteFolderTreeRequest , dict
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
) - > google . api_core . operation . Operation
Deletes a Folder with its contents (Folders,
Repositories, Workspaces, ReleaseConfigs, and
WorkflowConfigs).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_delete_folder_tree():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . DeleteFolderTreeRequest (
name="name_value",
)
# Make the request
operation = client. delete_folder_tree (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.DeleteFolderTreeRequest , dict]
The request object. DeleteFolderTree request message.
name
str
Required. The Folder's name. Format: projects/{project}/locations/{location}/folders/{folder} This corresponds to the name field on the request instance; if request is provided, this should not be set.
force
bool
Optional. If false (default): The operation will fail if any Repository within the folder hierarchy has associated Release Configs or Workflow Configs. If true : The operation will attempt to delete everything, including any Release Configs and Workflow Configs linked to Repositories within the folder hierarchy. This permanently removes schedules and resources. This corresponds to the force field on the request instance; if request is provided, this should not be set.
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
delete_release_config
delete_release_config (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . DeleteReleaseConfigRequest , dict
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
Deletes a single ReleaseConfig.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_delete_release_config():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . DeleteReleaseConfigRequest (
name="name_value",
)
# Make the request
client. delete_release_config (request=request)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.DeleteReleaseConfigRequest , dict]
The request object. DeleteReleaseConfig request message.
name
str
Required. The release config's name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_repository
delete_repository (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . DeleteRepositoryRequest , dict
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
Deletes a single Repository.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_delete_repository():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . DeleteRepositoryRequest (
name="name_value",
)
# Make the request
client. delete_repository (request=request)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.DeleteRepositoryRequest , dict]
The request object. DeleteRepository request message.
name
str
Required. The repository's name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_team_folder
delete_team_folder (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . DeleteTeamFolderRequest , dict
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
Deletes a single TeamFolder.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_delete_team_folder():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . DeleteTeamFolderRequest (
name="name_value",
)
# Make the request
client. delete_team_folder (request=request)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.DeleteTeamFolderRequest , dict]
The request object. DeleteTeamFolder request message.
name
str
Required. The TeamFolder's name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_team_folder_tree
delete_team_folder_tree (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . DeleteTeamFolderTreeRequest , dict
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
) - > google . api_core . operation . Operation
Deletes a TeamFolder with its contents (Folders,
Repositories, Workspaces, ReleaseConfigs, and
WorkflowConfigs).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_delete_team_folder_tree():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . DeleteTeamFolderTreeRequest (
name="name_value",
)
# Make the request
operation = client. delete_team_folder_tree (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.DeleteTeamFolderTreeRequest , dict]
The request object. DeleteTeamFolderTree request message.
name
str
Required. The TeamFolder's name. Format: projects/{project}/locations/{location}/teamFolders/{team_folder} This corresponds to the name field on the request instance; if request is provided, this should not be set.
force
bool
Optional. If false (default): The operation will fail if any Repository within the folder hierarchy has associated Release Configs or Workflow Configs. If true : The operation will attempt to delete everything, including any Release Configs and Workflow Configs linked to Repositories within the folder hierarchy. This permanently removes schedules and resources. This corresponds to the force field on the request instance; if request is provided, this should not be set.
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
delete_workflow_config
delete_workflow_config (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . DeleteWorkflowConfigRequest , dict
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
Deletes a single WorkflowConfig.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_delete_workflow_config():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . DeleteWorkflowConfigRequest (
name="name_value",
)
# Make the request
client. delete_workflow_config (request=request)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.DeleteWorkflowConfigRequest , dict]
The request object. DeleteWorkflowConfig request message.
name
str
Required. The workflow config's name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_workflow_invocation
delete_workflow_invocation (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . DeleteWorkflowInvocationRequest ,
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
Deletes a single WorkflowInvocation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_delete_workflow_invocation():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . DeleteWorkflowInvocationRequest (
name="name_value",
)
# Make the request
client. delete_workflow_invocation (request=request)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.DeleteWorkflowInvocationRequest , dict]
The request object. DeleteWorkflowInvocation request message.
name
str
Required. The workflow invocation resource's name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_workspace
delete_workspace (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . DeleteWorkspaceRequest , dict
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
Deletes a single Workspace.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_delete_workspace():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . DeleteWorkspaceRequest (
name="name_value",
)
# Make the request
client. delete_workspace (request=request)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.DeleteWorkspaceRequest , dict]
The request object. DeleteWorkspace request message.
name
str
Required. The workspace resource's name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
fetch_file_diff
fetch_file_diff (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . FetchFileDiffRequest , dict ]
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
) - > google . cloud . dataform_v1 . types . dataform . FetchFileDiffResponse
Fetches Git diff for an uncommitted file in a
Workspace.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_fetch_file_diff():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . FetchFileDiffRequest (
workspace="workspace_value",
path="path_value",
)
# Make the request
response = client. fetch_file_diff (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.FetchFileDiffRequest , dict]
The request object. FetchFileDiff request message.
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
google.cloud.dataform_v1.types.FetchFileDiffResponse
FetchFileDiff response message.
fetch_file_git_statuses
fetch_file_git_statuses (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . FetchFileGitStatusesRequest , dict
]
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
) - > google . cloud . dataform_v1 . types . dataform . FetchFileGitStatusesResponse
Fetches Git statuses for the files in a Workspace.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_fetch_file_git_statuses():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . FetchFileGitStatusesRequest (
name="name_value",
)
# Make the request
response = client. fetch_file_git_statuses (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.FetchFileGitStatusesRequest , dict]
The request object. FetchFileGitStatuses request message.
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
google.cloud.dataform_v1.types.FetchFileGitStatusesResponse
FetchFileGitStatuses response message.
fetch_git_ahead_behind
fetch_git_ahead_behind (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . FetchGitAheadBehindRequest , dict
]
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
) - > google . cloud . dataform_v1 . types . dataform . FetchGitAheadBehindResponse
Fetches Git ahead/behind against a remote branch.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_fetch_git_ahead_behind():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . FetchGitAheadBehindRequest (
name="name_value",
)
# Make the request
response = client. fetch_git_ahead_behind (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.FetchGitAheadBehindRequest , dict]
The request object. FetchGitAheadBehind request message.
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
google.cloud.dataform_v1.types.FetchGitAheadBehindResponse
FetchGitAheadBehind response message.
fetch_remote_branches
fetch_remote_branches (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . FetchRemoteBranchesRequest , dict
]
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
) - > google . cloud . dataform_v1 . types . dataform . FetchRemoteBranchesResponse
Fetches a Repository's remote branches.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_fetch_remote_branches():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . FetchRemoteBranchesRequest (
name="name_value",
)
# Make the request
response = client. fetch_remote_branches (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.FetchRemoteBranchesRequest , dict]
The request object. FetchRemoteBranches request message.
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
google.cloud.dataform_v1.types.FetchRemoteBranchesResponse
FetchRemoteBranches response message.
fetch_repository_history
fetch_repository_history (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . FetchRepositoryHistoryRequest , dict
]
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
) - > google . cloud . dataform_v1 . services . dataform . pagers . FetchRepositoryHistoryPager
Fetches a Repository's history of commits. The Repository must
not have a value for git_remote_settings.url .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_fetch_repository_history():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . FetchRepositoryHistoryRequest (
name="name_value",
)
# Make the request
page_result = client. fetch_repository_history (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.FetchRepositoryHistoryRequest , dict]
The request object. FetchRepositoryHistory request message.
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
google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryPager
FetchRepositoryHistory response message. Iterating over this object will yield results and resolve additional pages automatically.
folder_path
folder_path ( project : str , location : str , folder : str ) - > str
Returns a fully-qualified folder string.
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
DataformClient
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
DataformClient
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
DataformClient
The constructed client.
get_compilation_result
get_compilation_result (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . GetCompilationResultRequest , dict
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
) - > google . cloud . dataform_v1 . types . dataform . CompilationResult
Fetches a single CompilationResult.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_get_compilation_result():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . GetCompilationResultRequest (
name="name_value",
)
# Make the request
response = client. get_compilation_result (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.GetCompilationResultRequest , dict]
The request object. GetCompilationResult request message.
name
str
Required. The compilation result's name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.CompilationResult
Represents the result of compiling a Dataform project.
get_config
get_config (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . GetConfigRequest , dict ]
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
) - > google . cloud . dataform_v1 . types . dataform . Config
Get default config for a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_get_config():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . GetConfigRequest (
name="name_value",
)
# Make the request
response = client. get_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.GetConfigRequest , dict]
The request object. GetConfig request message.
name
str
Required. The config name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.Config
Config for all repositories in a given project and location.
get_folder
get_folder (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . GetFolderRequest , dict ]
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
) - > google . cloud . dataform_v1 . types . dataform . Folder
Fetches a single Folder.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_get_folder():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . GetFolderRequest (
name="name_value",
)
# Make the request
response = client. get_folder (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.GetFolderRequest , dict]
The request object. GetFolder request message.
name
str
Required. The Folder's name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.Folder
Represents a Dataform Folder. This is a resource that is used to organize Files and other Folders and provide hierarchical access controls.
get_iam_policy
get_iam_policy (
request : typing . Optional [
typing . Union [ google . iam . v1 . iam_policy_pb2 . GetIamPolicyRequest , dict ]
] = None ,
* ,
resource : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . iam . v1 . policy_pb2 . Policy
Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does
not have a policy set.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
import google.iam.v1.iam_policy_pb2 as iam_policy_pb2 # type: ignore
def sample_get_iam_policy():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = iam_policy_pb2.GetIamPolicyRequest(
resource="resource_value",
)
# Make the request
response = client. get_iam_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.iam.v1.iam_policy_pb2.GetIamPolicyRequest , dict]
The request object. Request message for GetIamPolicy method.
resource
str
REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field. This corresponds to the resource field on the request instance; if request is provided, this should not be set.
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
google.iam.v1.policy_pb2.Policy
An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ **YAML example:** :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
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
get_release_config
get_release_config (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . GetReleaseConfigRequest , dict
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
) - > google . cloud . dataform_v1 . types . dataform . ReleaseConfig
Fetches a single ReleaseConfig.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_get_release_config():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . GetReleaseConfigRequest (
name="name_value",
)
# Make the request
response = client. get_release_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.GetReleaseConfigRequest , dict]
The request object. GetReleaseConfig request message.
name
str
Required. The release config's name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.ReleaseConfig
Represents a Dataform release configuration.
get_repository
get_repository (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . GetRepositoryRequest , dict ]
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
) - > google . cloud . dataform_v1 . types . dataform . Repository
Fetches a single Repository.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_get_repository():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . GetRepositoryRequest (
name="name_value",
)
# Make the request
response = client. get_repository (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.GetRepositoryRequest , dict]
The request object. GetRepository request message.
name
str
Required. The repository's name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.Repository
Represents a Dataform Git repository.
get_team_folder
get_team_folder (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . GetTeamFolderRequest , dict ]
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
) - > google . cloud . dataform_v1 . types . dataform . TeamFolder
Fetches a single TeamFolder.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_get_team_folder():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . GetTeamFolderRequest (
name="name_value",
)
# Make the request
response = client. get_team_folder (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.GetTeamFolderRequest , dict]
The request object. GetTeamFolder request message.
name
str
Required. The TeamFolder's name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.TeamFolder
Represents a Dataform TeamFolder. This is a resource that sits at the project level and is used to organize Repositories and Folders with hierarchical access controls. They provide a team context and stricter access controls.
get_workflow_config
get_workflow_config (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . GetWorkflowConfigRequest , dict
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
) - > google . cloud . dataform_v1 . types . dataform . WorkflowConfig
Fetches a single WorkflowConfig.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_get_workflow_config():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . GetWorkflowConfigRequest (
name="name_value",
)
# Make the request
response = client. get_workflow_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.GetWorkflowConfigRequest , dict]
The request object. GetWorkflowConfig request message.
name
str
Required. The workflow config's name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.WorkflowConfig
Represents a Dataform workflow configuration.
get_workflow_invocation
get_workflow_invocation (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . GetWorkflowInvocationRequest , dict
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
) - > google . cloud . dataform_v1 . types . dataform . WorkflowInvocation
Fetches a single WorkflowInvocation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_get_workflow_invocation():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . GetWorkflowInvocationRequest (
name="name_value",
)
# Make the request
response = client. get_workflow_invocation (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.GetWorkflowInvocationRequest , dict]
The request object. GetWorkflowInvocation request message.
name
str
Required. The workflow invocation resource's name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.WorkflowInvocation
Represents a single invocation of a compilation result.
get_workspace
get_workspace (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . GetWorkspaceRequest , dict ]
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
) - > google . cloud . dataform_v1 . types . dataform . Workspace
Fetches a single Workspace.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_get_workspace():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . GetWorkspaceRequest (
name="name_value",
)
# Make the request
response = client. get_workspace (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.GetWorkspaceRequest , dict]
The request object. GetWorkspace request message.
name
str
Required. The workspace's name. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.Workspace
Represents a Dataform Git workspace.
install_npm_packages
install_npm_packages (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . InstallNpmPackagesRequest , dict
]
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
) - > google . cloud . dataform_v1 . types . dataform . InstallNpmPackagesResponse
Installs dependency NPM packages (inside a
Workspace).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_install_npm_packages():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . InstallNpmPackagesRequest (
workspace="workspace_value",
)
# Make the request
response = client. install_npm_packages (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.InstallNpmPackagesRequest , dict]
The request object. InstallNpmPackages request message.
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
google.cloud.dataform_v1.types.InstallNpmPackagesResponse
InstallNpmPackages response message.
list_compilation_results
list_compilation_results (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . ListCompilationResultsRequest , dict
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
) - > google . cloud . dataform_v1 . services . dataform . pagers . ListCompilationResultsPager
Lists CompilationResults in a given Repository.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_list_compilation_results():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . ListCompilationResultsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_compilation_results (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.ListCompilationResultsRequest , dict]
The request object. ListCompilationResults request message.
parent
str
Required. The repository in which to list compilation results. Must be in the format projects/ /locations/ /repositories/* . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.services.dataform.pagers.ListCompilationResultsPager
ListCompilationResults response message. Iterating over this object will yield results and resolve additional pages automatically.
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
list_release_configs
list_release_configs (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . ListReleaseConfigsRequest , dict
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
) - > google . cloud . dataform_v1 . services . dataform . pagers . ListReleaseConfigsPager
Lists ReleaseConfigs in a given Repository.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_list_release_configs():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . ListReleaseConfigsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_release_configs (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.ListReleaseConfigsRequest , dict]
The request object. ListReleaseConfigs request message.
parent
str
Required. The repository in which to list release configs. Must be in the format projects/ /locations/ /repositories/* . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.services.dataform.pagers.ListReleaseConfigsPager
ListReleaseConfigs response message. Iterating over this object will yield results and resolve additional pages automatically.
list_repositories
list_repositories (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . ListRepositoriesRequest , dict
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
) - > google . cloud . dataform_v1 . services . dataform . pagers . ListRepositoriesPager
Lists Repositories in a given project and location.
Note: This method can return repositories not shown in the
Dataform
UI <https://console.cloud.google.com/bigquery/dataform> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_list_repositories():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . ListRepositoriesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_repositories (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.ListRepositoriesRequest , dict]
The request object. ListRepositories request message.
parent
str
Required. The location in which to list repositories. Must be in the format projects/ /locations/ . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.services.dataform.pagers.ListRepositoriesPager
ListRepositories response message. Iterating over this object will yield results and resolve additional pages automatically.
list_workflow_configs
list_workflow_configs (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . ListWorkflowConfigsRequest , dict
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
) - > google . cloud . dataform_v1 . services . dataform . pagers . ListWorkflowConfigsPager
Lists WorkflowConfigs in a given Repository.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_list_workflow_configs():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . ListWorkflowConfigsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_workflow_configs (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.ListWorkflowConfigsRequest , dict]
The request object. ListWorkflowConfigs request message.
parent
str
Required. The repository in which to list workflow configs. Must be in the format projects/ /locations/ /repositories/* . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.services.dataform.pagers.ListWorkflowConfigsPager
ListWorkflowConfigs response message. Iterating over this object will yield results and resolve additional pages automatically.
list_workflow_invocations
list_workflow_invocations (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . ListWorkflowInvocationsRequest , dict
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
) - > google . cloud . dataform_v1 . services . dataform . pagers . ListWorkflowInvocationsPager
Lists WorkflowInvocations in a given Repository.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_list_workflow_invocations():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . ListWorkflowInvocationsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_workflow_invocations (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.ListWorkflowInvocationsRequest , dict]
The request object. ListWorkflowInvocations request message.
parent
str
Required. The parent resource of the WorkflowInvocation type. Must be in the format projects/ /locations/ /repositories/* . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.services.dataform.pagers.ListWorkflowInvocationsPager
ListWorkflowInvocations response message. Iterating over this object will yield results and resolve additional pages automatically.
list_workspaces
list_workspaces (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . ListWorkspacesRequest , dict
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
) - > google . cloud . dataform_v1 . services . dataform . pagers . ListWorkspacesPager
Lists Workspaces in a given Repository.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_list_workspaces():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . ListWorkspacesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_workspaces (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.ListWorkspacesRequest , dict]
The request object. ListWorkspaces request message.
parent
str
Required. The repository in which to list workspaces. Must be in the format projects/ /locations/ /repositories/* . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.services.dataform.pagers.ListWorkspacesPager
ListWorkspaces response message. Iterating over this object will yield results and resolve additional pages automatically.
make_directory
make_directory (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . MakeDirectoryRequest , dict ]
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
) - > google . cloud . dataform_v1 . types . dataform . MakeDirectoryResponse
Creates a directory inside a Workspace.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_make_directory():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . MakeDirectoryRequest (
workspace="workspace_value",
path="path_value",
)
# Make the request
response = client. make_directory (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.MakeDirectoryRequest , dict]
The request object. MakeDirectory request message.
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
google.cloud.dataform_v1.types.MakeDirectoryResponse
MakeDirectory response message.
move_directory
move_directory (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . MoveDirectoryRequest , dict ]
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
) - > google . cloud . dataform_v1 . types . dataform . MoveDirectoryResponse
Moves a directory (inside a Workspace), and all of
its contents, to a new location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_move_directory():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . MoveDirectoryRequest (
workspace="workspace_value",
path="path_value",
new_path="new_path_value",
)
# Make the request
response = client. move_directory (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.MoveDirectoryRequest , dict]
The request object. MoveDirectory request message.
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
google.cloud.dataform_v1.types.MoveDirectoryResponse
MoveDirectory response message.
move_file
move_file (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . MoveFileRequest , dict ]
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
) - > google . cloud . dataform_v1 . types . dataform . MoveFileResponse
Moves a file (inside a Workspace) to a new location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_move_file():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . MoveFileRequest (
workspace="workspace_value",
path="path_value",
new_path="new_path_value",
)
# Make the request
response = client. move_file (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.MoveFileRequest , dict]
The request object. MoveFile request message.
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
google.cloud.dataform_v1.types.MoveFileResponse
MoveFile response message.
move_folder
move_folder (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . MoveFolderRequest , dict ]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
destination_containing_folder : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Moves a Folder to a new Folder, TeamFolder, or the
root location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_move_folder():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . MoveFolderRequest (
name="name_value",
)
# Make the request
operation = client. move_folder (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.MoveFolderRequest , dict]
The request object. MoveFolder request message.
name
str
Required. The full resource name of the Folder to move. This corresponds to the name field on the request instance; if request is provided, this should not be set.
destination_containing_folder
str
Optional. The name of the Folder, TeamFolder, or root location to move the Folder to. Can be in the format of: "" to move into the root User folder, projects/ /locations/ /folders/ , projects//locations/ /teamFolders/ This corresponds to the destination_containing_folder field on the request instance; if request is provided, this should not be set.
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
move_repository
move_repository (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . MoveRepositoryRequest , dict
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
destination_containing_folder : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation . Operation
Moves a Repository to a new location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_move_repository():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . MoveRepositoryRequest (
name="name_value",
)
# Make the request
operation = client. move_repository (request=request)
print("Waiting for operation to complete...")
response = operation.result()
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.MoveRepositoryRequest , dict]
The request object. MoveRepository request message.
name
str
Required. The full resource name of the repository to move. This corresponds to the name field on the request instance; if request is provided, this should not be set.
destination_containing_folder
str
Optional. The name of the Folder, TeamFolder, or root location to move the repository to. Can be in the format of: "" to move into the root User folder, projects/ /locations/ /folders/ , projects//locations/ /teamFolders/ This corresponds to the destination_containing_folder field on the request instance; if request is provided, this should not be set.
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
notebook_runtime_template_path
notebook_runtime_template_path (
project : str , location : str , notebook_runtime_template : str
) - > str
Returns a fully-qualified notebook_runtime_template string.
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
parse_compilation_result_path
parse_compilation_result_path ( path : str ) - > typing . Dict [ str , str ]
Parses a compilation_result path into its component segments.
parse_config_path
parse_config_path ( path : str ) - > typing . Dict [ str , str ]
Parses a config path into its component segments.
parse_crypto_key_path
parse_crypto_key_path ( path : str ) - > typing . Dict [ str , str ]
Parses a crypto_key path into its component segments.
parse_crypto_key_version_path
parse_crypto_key_version_path ( path : str ) - > typing . Dict [ str , str ]
Parses a crypto_key_version path into its component segments.
parse_folder_path
parse_folder_path ( path : str ) - > typing . Dict [ str , str ]
Parses a folder path into its component segments.
parse_notebook_runtime_template_path
parse_notebook_runtime_template_path ( path : str ) - > typing . Dict [ str , str ]
Parses a notebook_runtime_template path into its component segments.
parse_release_config_path
parse_release_config_path ( path : str ) - > typing . Dict [ str , str ]
Parses a release_config path into its component segments.
parse_repository_path
parse_repository_path ( path : str ) - > typing . Dict [ str , str ]
Parses a repository path into its component segments.
parse_secret_version_path
parse_secret_version_path ( path : str ) - > typing . Dict [ str , str ]
Parses a secret_version path into its component segments.
parse_team_folder_path
parse_team_folder_path ( path : str ) - > typing . Dict [ str , str ]
Parses a team_folder path into its component segments.
parse_workflow_config_path
parse_workflow_config_path ( path : str ) - > typing . Dict [ str , str ]
Parses a workflow_config path into its component segments.
parse_workflow_invocation_path
parse_workflow_invocation_path ( path : str ) - > typing . Dict [ str , str ]
Parses a workflow_invocation path into its component segments.
parse_workspace_path
parse_workspace_path ( path : str ) - > typing . Dict [ str , str ]
Parses a workspace path into its component segments.
pull_git_commits
pull_git_commits (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . PullGitCommitsRequest , dict
]
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
) - > google . cloud . dataform_v1 . types . dataform . PullGitCommitsResponse
Pulls Git commits from the Repository's remote into a
Workspace.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_pull_git_commits():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
author = dataform_v1 . CommitAuthor ()
author.name = "name_value"
author.email_address = "email_address_value"
request = dataform_v1 . PullGitCommitsRequest (
name="name_value",
author=author,
)
# Make the request
response = client. pull_git_commits (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.PullGitCommitsRequest , dict]
The request object. PullGitCommits request message.
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
google.cloud.dataform_v1.types.PullGitCommitsResponse
PullGitCommits response message.
push_git_commits
push_git_commits (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . PushGitCommitsRequest , dict
]
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
) - > google . cloud . dataform_v1 . types . dataform . PushGitCommitsResponse
Pushes Git commits from a Workspace to the
Repository's remote.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_push_git_commits():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . PushGitCommitsRequest (
name="name_value",
)
# Make the request
response = client. push_git_commits (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.PushGitCommitsRequest , dict]
The request object. PushGitCommits request message.
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
google.cloud.dataform_v1.types.PushGitCommitsResponse
PushGitCommits response message.
query_compilation_result_actions
query_compilation_result_actions (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . QueryCompilationResultActionsRequest ,
dict ,
]
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
) - > (
google . cloud . dataform_v1 . services . dataform . pagers . QueryCompilationResultActionsPager
)
Returns CompilationResultActions in a given
CompilationResult.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_query_compilation_result_actions():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . QueryCompilationResultActionsRequest (
name="name_value",
)
# Make the request
page_result = client. query_compilation_result_actions (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.QueryCompilationResultActionsRequest , dict]
The request object. QueryCompilationResultActions request message.
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
google.cloud.dataform_v1.services.dataform.pagers.QueryCompilationResultActionsPager
QueryCompilationResultActions response message. Iterating over this object will yield results and resolve additional pages automatically.
query_directory_contents
query_directory_contents (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . QueryDirectoryContentsRequest , dict
]
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
) - > google . cloud . dataform_v1 . services . dataform . pagers . QueryDirectoryContentsPager
Returns the contents of a given Workspace directory.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_query_directory_contents():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . QueryDirectoryContentsRequest (
workspace="workspace_value",
)
# Make the request
page_result = client. query_directory_contents (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.QueryDirectoryContentsRequest , dict]
The request object. QueryDirectoryContents request message.
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
google.cloud.dataform_v1.services.dataform.pagers.QueryDirectoryContentsPager
QueryDirectoryContents response message. Iterating over this object will yield results and resolve additional pages automatically.
query_folder_contents
query_folder_contents (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . QueryFolderContentsRequest , dict
]
] = None ,
* ,
folder : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . services . dataform . pagers . QueryFolderContentsPager
Returns the contents of a given Folder.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_query_folder_contents():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . QueryFolderContentsRequest (
folder="folder_value",
)
# Make the request
page_result = client. query_folder_contents (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.QueryFolderContentsRequest , dict]
The request object. QueryFolderContents request message.
folder
str
Required. Name of the folder whose contents to list. Format: projects/ /locations/ /folders/* This corresponds to the folder field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.services.dataform.pagers.QueryFolderContentsPager
QueryFolderContents response message. Iterating over this object will yield results and resolve additional pages automatically.
query_repository_directory_contents
query_repository_directory_contents (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . QueryRepositoryDirectoryContentsRequest ,
dict ,
]
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
) - > (
google . cloud . dataform_v1 . services . dataform . pagers . QueryRepositoryDirectoryContentsPager
)
Returns the contents of a given Repository directory. The
Repository must not have a value for
git_remote_settings.url .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_query_repository_directory_contents():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . QueryRepositoryDirectoryContentsRequest (
name="name_value",
)
# Make the request
page_result = client. query_repository_directory_contents (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.QueryRepositoryDirectoryContentsRequest , dict]
The request object. QueryRepositoryDirectoryContents request message.
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
google.cloud.dataform_v1.services.dataform.pagers.QueryRepositoryDirectoryContentsPager
QueryRepositoryDirectoryContents response message. Iterating over this object will yield results and resolve additional pages automatically.
query_team_folder_contents
query_team_folder_contents (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . QueryTeamFolderContentsRequest , dict
]
] = None ,
* ,
team_folder : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . services . dataform . pagers . QueryTeamFolderContentsPager
Returns the contents of a given TeamFolder.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_query_team_folder_contents():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . QueryTeamFolderContentsRequest (
team_folder="team_folder_value",
)
# Make the request
page_result = client. query_team_folder_contents (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.QueryTeamFolderContentsRequest , dict]
The request object. QueryTeamFolderContents request message.
team_folder
str
Required. Name of the team_folder whose contents to list. Format: projects/ /locations/ /teamFolders/* . This corresponds to the team_folder field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.services.dataform.pagers.QueryTeamFolderContentsPager
QueryTeamFolderContents response message. Iterating over this object will yield results and resolve additional pages automatically.
query_user_root_contents
query_user_root_contents (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . QueryUserRootContentsRequest , dict
]
] = None ,
* ,
location : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . services . dataform . pagers . QueryUserRootContentsPager
Returns the contents of a caller's root folder in a
given location. The root folder contains all resources
that are created by the user and not contained in any
other folder.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_query_user_root_contents():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . QueryUserRootContentsRequest (
location="location_value",
)
# Make the request
page_result = client. query_user_root_contents (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.QueryUserRootContentsRequest , dict]
The request object. QueryUserRootContents request message.
location
str
Required. Location of the user root folder whose contents to list. Format: projects/ /locations/ This corresponds to the location field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.services.dataform.pagers.QueryUserRootContentsPager
QueryUserRootContents response message. Iterating over this object will yield results and resolve additional pages automatically.
query_workflow_invocation_actions
query_workflow_invocation_actions (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . QueryWorkflowInvocationActionsRequest ,
dict ,
]
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
) - > (
google . cloud . dataform_v1 . services . dataform . pagers . QueryWorkflowInvocationActionsPager
)
Returns WorkflowInvocationActions in a given
WorkflowInvocation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_query_workflow_invocation_actions():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . QueryWorkflowInvocationActionsRequest (
name="name_value",
)
# Make the request
page_result = client. query_workflow_invocation_actions (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.QueryWorkflowInvocationActionsRequest , dict]
The request object. QueryWorkflowInvocationActions request message.
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
google.cloud.dataform_v1.services.dataform.pagers.QueryWorkflowInvocationActionsPager
QueryWorkflowInvocationActions response message. Iterating over this object will yield results and resolve additional pages automatically.
read_file
read_file (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . ReadFileRequest , dict ]
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
) - > google . cloud . dataform_v1 . types . dataform . ReadFileResponse
Returns the contents of a file (inside a Workspace).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_read_file():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . ReadFileRequest (
workspace="workspace_value",
path="path_value",
)
# Make the request
response = client. read_file (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.ReadFileRequest , dict]
The request object. ReadFile request message.
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
google.cloud.dataform_v1.types.ReadFileResponse
ReadFile response message.
read_repository_file
read_repository_file (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . ReadRepositoryFileRequest , dict
]
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
) - > google . cloud . dataform_v1 . types . dataform . ReadRepositoryFileResponse
Returns the contents of a file (inside a Repository). The
Repository must not have a value for
git_remote_settings.url .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_read_repository_file():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . ReadRepositoryFileRequest (
name="name_value",
path="path_value",
)
# Make the request
response = client. read_repository_file (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.ReadRepositoryFileRequest , dict]
The request object. ReadRepositoryFile request message.
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
google.cloud.dataform_v1.types.ReadRepositoryFileResponse
ReadRepositoryFile response message.
release_config_path
release_config_path (
project : str , location : str , repository : str , release_config : str
) - > str
Returns a fully-qualified release_config string.
remove_directory
remove_directory (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . RemoveDirectoryRequest , dict
]
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
) - > google . cloud . dataform_v1 . types . dataform . RemoveDirectoryResponse
Deletes a directory (inside a Workspace) and all of
its contents.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_remove_directory():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . RemoveDirectoryRequest (
workspace="workspace_value",
path="path_value",
)
# Make the request
response = client. remove_directory (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.RemoveDirectoryRequest , dict]
The request object. RemoveDirectory request message.
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
google.cloud.dataform_v1.types.RemoveDirectoryResponse
RemoveDirectory response message.
remove_file
remove_file (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . RemoveFileRequest , dict ]
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
) - > google . cloud . dataform_v1 . types . dataform . RemoveFileResponse
Deletes a file (inside a Workspace).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_remove_file():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . RemoveFileRequest (
workspace="workspace_value",
path="path_value",
)
# Make the request
response = client. remove_file (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.RemoveFileRequest , dict]
The request object. RemoveFile request message.
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
google.cloud.dataform_v1.types.RemoveFileResponse
RemoveFile response message.
repository_path
repository_path ( project : str , location : str , repository : str ) - > str
Returns a fully-qualified repository string.
reset_workspace_changes
reset_workspace_changes (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . ResetWorkspaceChangesRequest , dict
]
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
) - > google . cloud . dataform_v1 . types . dataform . ResetWorkspaceChangesResponse
Performs a Git reset for uncommitted files in a
Workspace.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_reset_workspace_changes():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . ResetWorkspaceChangesRequest (
name="name_value",
)
# Make the request
response = client. reset_workspace_changes (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.ResetWorkspaceChangesRequest , dict]
The request object. ResetWorkspaceChanges request message.
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
google.cloud.dataform_v1.types.ResetWorkspaceChangesResponse
ResetWorkspaceChanges response message.
search_files
search_files (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . SearchFilesRequest , dict ]
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
) - > google . cloud . dataform_v1 . services . dataform . pagers . SearchFilesPager
Finds the contents of a given Workspace directory by
filter.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_search_files():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . SearchFilesRequest (
workspace="workspace_value",
)
# Make the request
page_result = client. search_files (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.SearchFilesRequest , dict]
The request object. Configuration containing file search request parameters.
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
google.cloud.dataform_v1.services.dataform.pagers.SearchFilesPager
Client-facing representation of a file search response. Iterating over this object will yield results and resolve additional pages automatically.
search_team_folders
search_team_folders (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . SearchTeamFoldersRequest , dict
]
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
) - > google . cloud . dataform_v1 . services . dataform . pagers . SearchTeamFoldersPager
Returns all TeamFolders in a given location that the
caller has access to and match the provided filter.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_search_team_folders():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . SearchTeamFoldersRequest (
location="location_value",
)
# Make the request
page_result = client. search_team_folders (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.SearchTeamFoldersRequest , dict]
The request object. SearchTeamFolders request message.
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
google.cloud.dataform_v1.services.dataform.pagers.SearchTeamFoldersPager
SearchTeamFolders response message. Iterating over this object will yield results and resolve additional pages automatically.
secret_version_path
secret_version_path ( project : str , secret : str , version : str ) - > str
Returns a fully-qualified secret_version string.
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
Sets the access control policy on the specified resource.
Replaces any existing policy.
Can return NOT_FOUND , INVALID_ARGUMENT , and
PERMISSION_DENIED errors.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
import google.iam.v1.iam_policy_pb2 as iam_policy_pb2 # type: ignore
def sample_set_iam_policy():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = iam_policy_pb2.SetIamPolicyRequest(
resource="resource_value",
)
# Make the request
response = client. set_iam_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.iam.v1.iam_policy_pb2.SetIamPolicyRequest , dict]
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
google.iam.v1.policy_pb2.Policy
An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ **YAML example:** :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
team_folder_path
team_folder_path ( project : str , location : str , team_folder : str ) - > str
Returns a fully-qualified team_folder string.
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
Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.
Note: This operation is designed to be used for building
permission-aware UIs and command-line tools, not for
authorization checking. This operation may "fail open" without
warning.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
import google.iam.v1.iam_policy_pb2 as iam_policy_pb2 # type: ignore
def sample_test_iam_permissions():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = iam_policy_pb2.TestIamPermissionsRequest(
resource="resource_value",
permissions=['permissions_value1', 'permissions_value2'],
)
# Make the request
response = client. test_iam_permissions (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.iam.v1.iam_policy_pb2.TestIamPermissionsRequest , dict]
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
google.iam.v1.iam_policy_pb2.TestIamPermissionsResponse
Response message for TestIamPermissions method.
update_config
update_config (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . UpdateConfigRequest , dict ]
] = None ,
* ,
config : typing . Optional [ google . cloud . dataform_v1 . types . dataform . Config ] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . types . dataform . Config
Update default config for a given project and location.
Note: This method does not fully
implement \ AIP/134 <https://google.aip.dev/134> __\ . The
wildcard entry (*) is treated as a bad request, and when the
field_mask is omitted, the request is treated as a full
update on all modifiable fields.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_update_config():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . UpdateConfigRequest (
)
# Make the request
response = client. update_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.UpdateConfigRequest , dict]
The request object. UpdateConfig request message.
config
google.cloud.dataform_v1.types.Config
Required. The config to update. This corresponds to the config field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. Specifies the fields to be updated in the config. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.Config
Config for all repositories in a given project and location.
update_folder
update_folder (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . UpdateFolderRequest , dict ]
] = None ,
* ,
folder : typing . Optional [ google . cloud . dataform_v1 . types . dataform . Folder ] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . types . dataform . Folder
Updates a single Folder.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_update_folder():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
folder = dataform_v1 . Folder ()
folder.display_name = "display_name_value"
request = dataform_v1 . UpdateFolderRequest (
folder=folder,
)
# Make the request
response = client. update_folder (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.UpdateFolderRequest , dict]
The request object. UpdateFolder request message.
folder
google.cloud.dataform_v1.types.Folder
Required. The updated Folder. This corresponds to the folder field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. Specifies the fields to be updated in the Folder. If left unset, all fields that can be updated, will be updated. A few fields cannot be updated and will be ignored if specified in the update_mask (e.g. parent_name, team_folder_name). This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.Folder
Represents a Dataform Folder. This is a resource that is used to organize Files and other Folders and provide hierarchical access controls.
update_release_config
update_release_config (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . UpdateReleaseConfigRequest , dict
]
] = None ,
* ,
release_config : typing . Optional [
google . cloud . dataform_v1 . types . dataform . ReleaseConfig
] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . types . dataform . ReleaseConfig
Updates a single ReleaseConfig.
Note: This method does not fully
implement \ AIP/134 <https://google.aip.dev/134> __\ . The
wildcard entry (*) is treated as a bad request, and when the
field_mask is omitted, the request is treated as a full
update on all modifiable fields.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_update_release_config():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
release_config = dataform_v1 . ReleaseConfig ()
release_config.git_commitish = "git_commitish_value"
request = dataform_v1 . UpdateReleaseConfigRequest (
release_config=release_config,
)
# Make the request
response = client. update_release_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.UpdateReleaseConfigRequest , dict]
The request object. UpdateReleaseConfig request message.
release_config
google.cloud.dataform_v1.types.ReleaseConfig
Required. The release config to update. This corresponds to the release_config field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. Specifies the fields to be updated in the release config. If left unset, all fields will be updated. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.ReleaseConfig
Represents a Dataform release configuration.
update_repository
update_repository (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . UpdateRepositoryRequest , dict
]
] = None ,
* ,
repository : typing . Optional [
google . cloud . dataform_v1 . types . dataform . Repository
] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . types . dataform . Repository
Updates a single Repository.
Note: This method does not fully
implement \ AIP/134 <https://google.aip.dev/134> __\ . The
wildcard entry (*) is treated as a bad request, and when the
field_mask is omitted, the request is treated as a full
update on all modifiable fields.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_update_repository():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . UpdateRepositoryRequest (
)
# Make the request
response = client. update_repository (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.UpdateRepositoryRequest , dict]
The request object. UpdateRepository request message.
repository
google.cloud.dataform_v1.types.Repository
Required. The repository to update. This corresponds to the repository field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. Specifies the fields to be updated in the repository. If left unset, all fields will be updated. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.Repository
Represents a Dataform Git repository.
update_team_folder
update_team_folder (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . UpdateTeamFolderRequest , dict
]
] = None ,
* ,
team_folder : typing . Optional [
google . cloud . dataform_v1 . types . dataform . TeamFolder
] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . types . dataform . TeamFolder
Updates a single TeamFolder.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_update_team_folder():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
team_folder = dataform_v1 . TeamFolder ()
team_folder.display_name = "display_name_value"
request = dataform_v1 . UpdateTeamFolderRequest (
team_folder=team_folder,
)
# Make the request
response = client. update_team_folder (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.UpdateTeamFolderRequest , dict]
The request object. UpdateTeamFolder request message.
team_folder
google.cloud.dataform_v1.types.TeamFolder
Required. The updated TeamFolder. This corresponds to the team_folder field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. Specifies the fields to be updated in the Folder. If left unset, all fields will be updated. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.TeamFolder
Represents a Dataform TeamFolder. This is a resource that sits at the project level and is used to organize Repositories and Folders with hierarchical access controls. They provide a team context and stricter access controls.
update_workflow_config
update_workflow_config (
request : typing . Optional [
typing . Union [
google . cloud . dataform_v1 . types . dataform . UpdateWorkflowConfigRequest , dict
]
] = None ,
* ,
workflow_config : typing . Optional [
google . cloud . dataform_v1 . types . dataform . WorkflowConfig
] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . dataform_v1 . types . dataform . WorkflowConfig
Updates a single WorkflowConfig.
Note: This method does not fully
implement \ AIP/134 <https://google.aip.dev/134> __\ . The
wildcard entry (*) is treated as a bad request, and when the
field_mask is omitted, the request is treated as a full
update on all modifiable fields.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_update_workflow_config():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
workflow_config = dataform_v1 . WorkflowConfig ()
workflow_config.release_config = "release_config_value"
request = dataform_v1 . UpdateWorkflowConfigRequest (
workflow_config=workflow_config,
)
# Make the request
response = client. update_workflow_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.UpdateWorkflowConfigRequest , dict]
The request object. UpdateWorkflowConfig request message.
workflow_config
google.cloud.dataform_v1.types.WorkflowConfig
Required. The workflow config to update. This corresponds to the workflow_config field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. Specifies the fields to be updated in the workflow config. If left unset, all fields will be updated. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.dataform_v1.types.WorkflowConfig
Represents a Dataform workflow configuration.
workflow_config_path
workflow_config_path (
project : str , location : str , repository : str , workflow_config : str
) - > str
Returns a fully-qualified workflow_config string.
workflow_invocation_path
workflow_invocation_path (
project : str , location : str , repository : str , workflow_invocation : str
) - > str
Returns a fully-qualified workflow_invocation string.
workspace_path
workspace_path ( project : str , location : str , repository : str , workspace : str ) - > str
Returns a fully-qualified workspace string.
write_file
write_file (
request : typing . Optional [
typing . Union [ google . cloud . dataform_v1 . types . dataform . WriteFileRequest , dict ]
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
) - > google . cloud . dataform_v1 . types . dataform . WriteFileResponse
Writes to a file (inside a Workspace).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataform_v1
def sample_write_file():
# Create a client
client = dataform_v1 . DataformClient ()
# Initialize request argument(s)
request = dataform_v1 . WriteFileRequest (
workspace="workspace_value",
path="path_value",
contents=b'contents_blob',
)
# Make the request
response = client. write_file (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.dataform_v1.types.WriteFileRequest , dict]
The request object. WriteFile request message.
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
google.cloud.dataform_v1.types.WriteFileResponse
WriteFile response message.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
