---
title: "Class CloudBuildAsyncClient (3.35.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient
  title: "Class CloudBuildAsyncClient (3.35.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class CloudBuildAsyncClient (3.35.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
3.35.0 (latest)
3.34.0
3.33.0
3.32.0
3.31.3
3.30.0
3.29.0
3.28.0
3.27.1
3.26.0
3.25.0
3.24.2
3.23.3
3.22.0
3.21.0
3.20.1
3.19.0
3.18.0
3.17.1
3.16.0
3.15.0
3.14.0
3.13.0
3.12.0
3.11.1
3.10.0
3.9.3
3.8.3
3.7.1
3.6.0
3.5.2
3.4.0
3.3.2
3.2.1
3.1.1
3.0.2
2.0.2
1.1.2
1.0.0
0.1.0
CloudBuildAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . devtools . cloudbuild_v1 . services . cloud_build . transports . base . CloudBuildTransport ,
typing . Callable [
[ ... ],
google . cloud . devtools . cloudbuild_v1 . services . cloud_build . transports . base . CloudBuildTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Creates and manages builds on Google Cloud Platform.
The main concept used by this API is a Build , which describes
the location of the source to build, how to build the source, and
where to store the built artifacts, if any.
A user can list previously-requested builds or get builds by their
ID to determine the status of the build.
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
CloudBuildTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
CloudBuildAsyncClient
CloudBuildAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . devtools . cloudbuild_v1 . services . cloud_build . transports . base . CloudBuildTransport ,
typing . Callable [
[ ... ],
google . cloud . devtools . cloudbuild_v1 . services . cloud_build . transports . base . CloudBuildTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the cloud build async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,CloudBuildTransport,Callable[..., CloudBuildTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the CloudBuildTransport constructor. If set to None, a transport is chosen automatically.
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
approve_build
approve_build (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . ApproveBuildRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
approval_result : typing . Optional [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . ApprovalResult
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Approves or rejects a pending build.
If approved, the returned long-running operation (LRO)
will be analogous to the LRO returned from a CreateBuild
call.
If rejected, the returned LRO will be immediately done.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_approve_build():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. ApproveBuildRequest (
name="name_value",
)
# Make the request
operation = client. approve_build (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.ApproveBuildRequest , dict]]
The request object. Request to approve or reject a pending build.
name
str
Required. Name of the target build. For example: "projects/{$project_id}/builds/{$build_id}" This corresponds to the name field on the request instance; if request is provided, this should not be set.
approval_result
ApprovalResult
Approval decision and metadata. This corresponds to the approval_result field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Build A build resource in the Cloud Build API. At a high level, a Build describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
build_path
build_path ( project : str , build : str ) - > str
Returns a fully-qualified build string.
build_trigger_path
build_trigger_path ( project : str , trigger : str ) - > str
Returns a fully-qualified build_trigger string.
cancel_build
cancel_build (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . CancelBuildRequest ,
dict ,
]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
id : typing . Optional [ str ] = None ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . Build
Cancels a build in progress.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_cancel_build():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. CancelBuildRequest (
project_id="project_id_value",
id="id_value",
)
# Make the request
response = await client. cancel_build (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.CancelBuildRequest , dict]]
The request object. Request to cancel an ongoing build.
project_id
str
Required. ID of the project. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
id
str
Required. ID of the build. This corresponds to the id field on the request instance; if request is provided, this should not be set.
name
str
The name of the Build to cancel. Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.devtools.cloudbuild_v1.types.Build
A build resource in the Cloud Build API. At a high level, a Build describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
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
create_build
create_build (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . CreateBuildRequest ,
dict ,
]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
build : typing . Optional [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . Build
] = None ,
parent : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Starts a build with the specified configuration.
This method returns a long-running Operation , which includes
the build ID. Pass the build ID to GetBuild to determine the
build status (such as SUCCESS or FAILURE ).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_create_build():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. CreateBuildRequest (
project_id="project_id_value",
)
# Make the request
operation = client. create_build (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.CreateBuildRequest , dict]]
The request object. Request to create a new build.
project_id
str
Required. ID of the project. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
build
Build
Required. Build resource to create. This corresponds to the build field on the request instance; if request is provided, this should not be set.
parent
str
The parent resource where this build will be created. Format: projects/{project}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Build A build resource in the Cloud Build API. At a high level, a Build describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
create_build_trigger
create_build_trigger (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . CreateBuildTriggerRequest ,
dict ,
]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
trigger : typing . Optional [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . BuildTrigger
] = None ,
parent : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . BuildTrigger
Creates a new BuildTrigger .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_create_build_trigger():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
trigger = cloudbuild_v1. BuildTrigger ()
trigger.autodetect = True
request = cloudbuild_v1. CreateBuildTriggerRequest (
project_id="project_id_value",
trigger=trigger,
)
# Make the request
response = await client. create_build_trigger (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.CreateBuildTriggerRequest , dict]]
The request object. Request to create a new BuildTrigger .
project_id
str
Required. ID of the project for which to configure automatic builds. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
trigger
BuildTrigger
Required. BuildTrigger to create. This corresponds to the trigger field on the request instance; if request is provided, this should not be set.
parent
str
The parent resource where this trigger will be created. Format: projects/{project}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.devtools.cloudbuild_v1.types.BuildTrigger
Configuration for an automated build in response to source repository changes.
create_worker_pool
create_worker_pool (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . CreateWorkerPoolRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
worker_pool : typing . Optional [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . WorkerPool
] = None ,
worker_pool_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a WorkerPool .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_create_worker_pool():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. CreateWorkerPoolRequest (
parent="parent_value",
worker_pool_id="worker_pool_id_value",
)
# Make the request
operation = client. create_worker_pool (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.CreateWorkerPoolRequest , dict]]
The request object. Request to create a new WorkerPool .
parent
str
Required. The parent resource where this worker pool will be created. Format: projects/{project}/locations/{location} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
worker_pool
WorkerPool
Required. WorkerPool resource to create. This corresponds to the worker_pool field on the request instance; if request is provided, this should not be set.
worker_pool_id
str
Required. Immutable. The ID to use for the WorkerPool , which will become the final component of the resource name. This value should be 1-63 characters, and valid characters are / a-z][0-9] -/. This corresponds to the worker_pool_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be WorkerPool Configuration for a WorkerPool. Cloud Build owns and maintains a pool of workers for general use and have no access to a project's private network. By default, builds submitted to Cloud Build will use a worker from this pool. If your build needs access to resources on a private network, create and use a WorkerPool to run your builds. Private \ WorkerPool s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of private pools, see [Private pools overview](https://cloud.google.com/build/docs/private-pools/private-pools-overview).
crypto_key_path
crypto_key_path ( project : str , location : str , keyring : str , key : str ) - > str
Returns a fully-qualified crypto_key string.
default_service_account_path
default_service_account_path ( project : str , location : str ) - > str
Returns a fully-qualified default_service_account string.
delete_build_trigger
delete_build_trigger (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . DeleteBuildTriggerRequest ,
dict ,
]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
trigger_id : typing . Optional [ str ] = None ,
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
Deletes a BuildTrigger by its project ID and trigger ID.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_delete_build_trigger():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. DeleteBuildTriggerRequest (
project_id="project_id_value",
trigger_id="trigger_id_value",
)
# Make the request
await client. delete_build_trigger (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.DeleteBuildTriggerRequest , dict]]
The request object. Request to delete a BuildTrigger .
project_id
str
Required. ID of the project that owns the trigger. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
trigger_id
str
Required. ID of the BuildTrigger to delete. This corresponds to the trigger_id field on the request instance; if request is provided, this should not be set.
name
str
The name of the Trigger to delete. Format: projects/{project}/locations/{location}/triggers/{trigger} This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_worker_pool
delete_worker_pool (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . DeleteWorkerPoolRequest ,
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
Deletes a WorkerPool .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_delete_worker_pool():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. DeleteWorkerPoolRequest (
name="name_value",
)
# Make the request
operation = client. delete_worker_pool (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.DeleteWorkerPoolRequest , dict]]
The request object. Request to delete a WorkerPool .
name
str
Required. The name of the WorkerPool to delete. Format: projects/{project}/locations/{location}/workerPools/{workerPool} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
CloudBuildAsyncClient
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
CloudBuildAsyncClient
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
CloudBuildAsyncClient
The constructed client.
get_build
get_build (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . GetBuildRequest , dict
]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
id : typing . Optional [ str ] = None ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . Build
Returns information about a previously requested build.
The Build that is returned includes its status (such as
SUCCESS , FAILURE , or WORKING ), and timing
information.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_get_build():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. GetBuildRequest (
project_id="project_id_value",
id="id_value",
)
# Make the request
response = await client. get_build (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.GetBuildRequest , dict]]
The request object. Request to get a build.
project_id
str
Required. ID of the project. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
id
str
Required. ID of the build. This corresponds to the id field on the request instance; if request is provided, this should not be set.
name
str
The name of the Build to retrieve. Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.devtools.cloudbuild_v1.types.Build
A build resource in the Cloud Build API. At a high level, a Build describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
get_build_trigger
get_build_trigger (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . GetBuildTriggerRequest ,
dict ,
]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
trigger_id : typing . Optional [ str ] = None ,
name : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . BuildTrigger
Returns information about a BuildTrigger .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_get_build_trigger():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. GetBuildTriggerRequest (
project_id="project_id_value",
trigger_id="trigger_id_value",
)
# Make the request
response = await client. get_build_trigger (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.GetBuildTriggerRequest , dict]]
The request object. Returns the BuildTrigger with the specified ID.
project_id
str
Required. ID of the project that owns the trigger. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
trigger_id
str
Required. Identifier ( id or name ) of the BuildTrigger to get. This corresponds to the trigger_id field on the request instance; if request is provided, this should not be set.
name
str
The name of the Trigger to retrieve. Format: projects/{project}/locations/{location}/triggers/{trigger} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.devtools.cloudbuild_v1.types.BuildTrigger
Configuration for an automated build in response to source repository changes.
get_default_service_account
get_default_service_account (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . GetDefaultServiceAccountRequest ,
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
) - > google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . DefaultServiceAccount
Returns the DefaultServiceAccount used by the project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_get_default_service_account():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. GetDefaultServiceAccountRequest (
name="name_value",
)
# Make the request
response = await client. get_default_service_account (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.GetDefaultServiceAccountRequest , dict]]
The request object. Returns the default service account that will be used for Builds .
name
str
Required. The name of the DefaultServiceAccount to retrieve. Format: projects/{project}/locations/{location}/defaultServiceAccount This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.devtools.cloudbuild_v1.types.DefaultServiceAccount
The default service account used for Builds.
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
google . cloud . devtools . cloudbuild_v1 . services . cloud_build . transports . base . CloudBuildTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
get_worker_pool
get_worker_pool (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . GetWorkerPoolRequest ,
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
) - > google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . WorkerPool
Returns details of a WorkerPool .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_get_worker_pool():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. GetWorkerPoolRequest (
name="name_value",
)
# Make the request
response = await client. get_worker_pool (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.GetWorkerPoolRequest , dict]]
The request object. Request to get a WorkerPool with the specified name.
name
str
Required. The name of the WorkerPool to retrieve. Format: projects/{project}/locations/{location}/workerPools/{workerPool} . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.devtools.cloudbuild_v1.types.WorkerPool
Configuration for a WorkerPool. Cloud Build owns and maintains a pool of workers for general use and have no access to a project's private network. By default, builds submitted to Cloud Build will use a worker from this pool. If your build needs access to resources on a private network, create and use a WorkerPool to run your builds. Private \ WorkerPool s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of private pools, see [Private pools overview](https://cloud.google.com/build/docs/private-pools/private-pools-overview).
git_repository_link_path
git_repository_link_path (
project : str , location : str , connection : str , git_repository_link : str
) - > str
Returns a fully-qualified git_repository_link string.
github_enterprise_config_path
github_enterprise_config_path ( project : str , config : str ) - > str
Returns a fully-qualified github_enterprise_config string.
list_build_triggers
list_build_triggers (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . ListBuildTriggersRequest ,
dict ,
]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . devtools . cloudbuild_v1 . services . cloud_build . pagers . ListBuildTriggersAsyncPager
)
Lists existing BuildTrigger \ s.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_list_build_triggers():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. ListBuildTriggersRequest (
project_id="project_id_value",
)
# Make the request
page_result = client. list_build_triggers (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.ListBuildTriggersRequest , dict]]
The request object. Request to list existing BuildTriggers .
project_id
str
Required. ID of the project for which to list BuildTriggers. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.devtools.cloudbuild_v1.services.cloud_build.pagers.ListBuildTriggersAsyncPager
Response containing existing BuildTriggers. Iterating over this object will yield results and resolve additional pages automatically.
list_builds
list_builds (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . ListBuildsRequest , dict
]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
filter : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . devtools . cloudbuild_v1 . services . cloud_build . pagers . ListBuildsAsyncPager
)
Lists previously requested builds.
Previously requested builds may still be in-progress, or
may have finished successfully or unsuccessfully.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_list_builds():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. ListBuildsRequest (
project_id="project_id_value",
)
# Make the request
page_result = client. list_builds (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.ListBuildsRequest , dict]]
The request object. Request to list builds.
project_id
str
Required. ID of the project. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
filter
str
The raw filter text to constrain the results. This corresponds to the filter field on the request instance; if request is provided, this should not be set.
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
google.cloud.devtools.cloudbuild_v1.services.cloud_build.pagers.ListBuildsAsyncPager
Response including listed builds. Iterating over this object will yield results and resolve additional pages automatically.
list_worker_pools
list_worker_pools (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . ListWorkerPoolsRequest ,
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
google . cloud . devtools . cloudbuild_v1 . services . cloud_build . pagers . ListWorkerPoolsAsyncPager
)
Lists WorkerPool \ s.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_list_worker_pools():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. ListWorkerPoolsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_worker_pools (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.ListWorkerPoolsRequest , dict]]
The request object. Request to list WorkerPool \ s.
parent
str
Required. The parent of the collection of WorkerPools . Format: projects/{project}/locations/{location} . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.devtools.cloudbuild_v1.services.cloud_build.pagers.ListWorkerPoolsAsyncPager
Response containing existing WorkerPools. Iterating over this object will yield results and resolve additional pages automatically.
network_attachment_path
network_attachment_path ( project : str , region : str , networkattachment : str ) - > str
Returns a fully-qualified network_attachment string.
network_path
network_path ( project : str , network : str ) - > str
Returns a fully-qualified network string.
parse_build_path
parse_build_path ( path : str ) - > typing . Dict [ str , str ]
Parses a build path into its component segments.
parse_build_trigger_path
parse_build_trigger_path ( path : str ) - > typing . Dict [ str , str ]
Parses a build_trigger path into its component segments.
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
parse_default_service_account_path
parse_default_service_account_path ( path : str ) - > typing . Dict [ str , str ]
Parses a default_service_account path into its component segments.
parse_git_repository_link_path
parse_git_repository_link_path ( path : str ) - > typing . Dict [ str , str ]
Parses a git_repository_link path into its component segments.
parse_github_enterprise_config_path
parse_github_enterprise_config_path ( path : str ) - > typing . Dict [ str , str ]
Parses a github_enterprise_config path into its component segments.
parse_network_attachment_path
parse_network_attachment_path ( path : str ) - > typing . Dict [ str , str ]
Parses a network_attachment path into its component segments.
parse_network_path
parse_network_path ( path : str ) - > typing . Dict [ str , str ]
Parses a network path into its component segments.
parse_repository_path
parse_repository_path ( path : str ) - > typing . Dict [ str , str ]
Parses a repository path into its component segments.
parse_secret_version_path
parse_secret_version_path ( path : str ) - > typing . Dict [ str , str ]
Parses a secret_version path into its component segments.
parse_service_account_path
parse_service_account_path ( path : str ) - > typing . Dict [ str , str ]
Parses a service_account path into its component segments.
parse_subscription_path
parse_subscription_path ( path : str ) - > typing . Dict [ str , str ]
Parses a subscription path into its component segments.
parse_topic_path
parse_topic_path ( path : str ) - > typing . Dict [ str , str ]
Parses a topic path into its component segments.
parse_worker_pool_path
parse_worker_pool_path ( path : str ) - > typing . Dict [ str , str ]
Parses a worker_pool path into its component segments.
receive_trigger_webhook
receive_trigger_webhook (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . ReceiveTriggerWebhookRequest ,
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
) - > google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . ReceiveTriggerWebhookResponse
ReceiveTriggerWebhook [Experimental] is called when the API
receives a webhook request targeted at a specific trigger.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_receive_trigger_webhook():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. ReceiveTriggerWebhookRequest (
)
# Make the request
response = await client. receive_trigger_webhook (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.ReceiveTriggerWebhookRequest , dict]]
The request object. ReceiveTriggerWebhookRequest [Experimental] is the request object accepted by the ReceiveTriggerWebhook method.
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
google.cloud.devtools.cloudbuild_v1.types.ReceiveTriggerWebhookResponse
ReceiveTriggerWebhookResponse [Experimental] is the response object for the ReceiveTriggerWebhook method.
repository_path
repository_path (
project : str , location : str , connection : str , repository : str
) - > str
Returns a fully-qualified repository string.
retry_build
retry_build (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . RetryBuildRequest , dict
]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
id : typing . Optional [ str ] = None ,
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
Creates a new build based on the specified build.
This method creates a new build using the original build
request, which may or may not result in an identical build.
For triggered builds:
Triggered builds resolve to a precise revision; therefore a
retry of a triggered build will result in a build that uses
the same revision.
For non-triggered builds that specify RepoSource :
If the original build built from the tip of a branch, the
retried build will build from the tip of that branch, which
may not be the same revision as the original build.
If the original build specified a commit sha or revision ID,
the retried build will use the identical source.
For builds that specify StorageSource :
If the original build pulled source from Cloud Storage without
specifying the generation of the object, the new build will
use the current object, which may be different from the
original build source.
If the original build pulled source from Cloud Storage and
specified the generation of the object, the new build will
attempt to use the same object, which may or may not be
available depending on the bucket's lifecycle management
settings.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_retry_build():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. RetryBuildRequest (
project_id="project_id_value",
id="id_value",
)
# Make the request
operation = client. retry_build (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.RetryBuildRequest , dict]]
The request object. Specifies a build to retry.
project_id
str
Required. ID of the project. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
id
str
Required. Build ID of the original build. This corresponds to the id field on the request instance; if request is provided, this should not be set.
name
str
The name of the Build to retry. Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Build A build resource in the Cloud Build API. At a high level, a Build describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
run_build_trigger
run_build_trigger (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . RunBuildTriggerRequest ,
dict ,
]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
trigger_id : typing . Optional [ str ] = None ,
source : typing . Optional [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . RepoSource
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Runs a BuildTrigger at a particular source revision.
To run a regional or global trigger, use the POST request that
includes the location endpoint in the path (ex.
v1/projects/{projectId}/locations/{region}/triggers/{triggerId}:run).
The POST request that does not include the location endpoint in
the path can only be used when running global triggers.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_run_build_trigger():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. RunBuildTriggerRequest (
project_id="project_id_value",
trigger_id="trigger_id_value",
)
# Make the request
operation = client. run_build_trigger (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.RunBuildTriggerRequest , dict]]
The request object. Specifies a build trigger to run and the source to use.
project_id
str
Required. ID of the project. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
trigger_id
str
Required. ID of the trigger. This corresponds to the trigger_id field on the request instance; if request is provided, this should not be set.
source
RepoSource
Source to build against this trigger. Branch and tag names cannot consist of regular expressions. This corresponds to the source field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Build A build resource in the Cloud Build API. At a high level, a Build describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
secret_version_path
secret_version_path ( project : str , secret : str , version : str ) - > str
Returns a fully-qualified secret_version string.
service_account_path
service_account_path ( project : str , service_account : str ) - > str
Returns a fully-qualified service_account string.
subscription_path
subscription_path ( project : str , subscription : str ) - > str
Returns a fully-qualified subscription string.
topic_path
topic_path ( project : str , topic : str ) - > str
Returns a fully-qualified topic string.
update_build_trigger
update_build_trigger (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . UpdateBuildTriggerRequest ,
dict ,
]
] = None ,
* ,
project_id : typing . Optional [ str ] = None ,
trigger_id : typing . Optional [ str ] = None ,
trigger : typing . Optional [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . BuildTrigger
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . BuildTrigger
Updates a BuildTrigger by its project ID and trigger ID.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_update_build_trigger():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
trigger = cloudbuild_v1. BuildTrigger ()
trigger.autodetect = True
request = cloudbuild_v1. UpdateBuildTriggerRequest (
project_id="project_id_value",
trigger_id="trigger_id_value",
trigger=trigger,
)
# Make the request
response = await client. update_build_trigger (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.UpdateBuildTriggerRequest , dict]]
The request object. Request to update an existing BuildTrigger .
project_id
str
Required. ID of the project that owns the trigger. This corresponds to the project_id field on the request instance; if request is provided, this should not be set.
trigger_id
str
Required. ID of the BuildTrigger to update. This corresponds to the trigger_id field on the request instance; if request is provided, this should not be set.
trigger
BuildTrigger
Required. BuildTrigger to update. This corresponds to the trigger field on the request instance; if request is provided, this should not be set.
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
google.cloud.devtools.cloudbuild_v1.types.BuildTrigger
Configuration for an automated build in response to source repository changes.
update_worker_pool
update_worker_pool (
request : typing . Optional [
typing . Union [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . UpdateWorkerPoolRequest ,
dict ,
]
] = None ,
* ,
worker_pool : typing . Optional [
google . cloud . devtools . cloudbuild_v1 . types . cloudbuild . WorkerPool
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
Updates a WorkerPool .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.devtools import cloudbuild_v1
async def sample_update_worker_pool():
# Create a client
client = cloudbuild_v1. CloudBuildAsyncClient ()
# Initialize request argument(s)
request = cloudbuild_v1. UpdateWorkerPoolRequest (
)
# Make the request
operation = client. update_worker_pool (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.devtools.cloudbuild_v1.types.UpdateWorkerPoolRequest , dict]]
The request object. Request to update a WorkerPool .
worker_pool
WorkerPool
Required. The WorkerPool to update. The name field is used to identify the WorkerPool to update. Format: projects/{project}/locations/{location}/workerPools/{workerPool} . This corresponds to the worker_pool field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. A mask specifying which fields in worker_pool to update. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be WorkerPool Configuration for a WorkerPool. Cloud Build owns and maintains a pool of workers for general use and have no access to a project's private network. By default, builds submitted to Cloud Build will use a worker from this pool. If your build needs access to resources on a private network, create and use a WorkerPool to run your builds. Private \ WorkerPool s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of private pools, see [Private pools overview](https://cloud.google.com/build/docs/private-pools/private-pools-overview).
worker_pool_path
worker_pool_path ( project : str , location : str , worker_pool : str ) - > str
Returns a fully-qualified worker_pool string.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
