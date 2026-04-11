---
title: "Class ArtifactRegistryAsyncClient (1.20.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient
  title: "Class ArtifactRegistryAsyncClient (1.20.0) \_|\_ Python client libraries\
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
Class ArtifactRegistryAsyncClient (1.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.20.0 (latest)
1.19.0
1.18.0
1.17.0
1.16.1
1.15.2
1.14.0
1.13.1
1.12.0
1.11.5
1.10.0
1.9.0
1.8.4
1.7.0
1.6.1
1.5.0
1.4.1
1.3.3
1.2.1
1.1.2
1.0.2
0.5.0
0.4.1
0.3.3
0.2.2
0.1.0
ArtifactRegistryAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . artifactregistry_v1 . services . artifact_registry . transports . base . ArtifactRegistryTransport ,
typing . Callable [
[ ... ],
google . cloud . artifactregistry_v1 . services . artifact_registry . transports . base . ArtifactRegistryTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
The Artifact Registry API service.
Artifact Registry is an artifact management system for storing
artifacts from different package management systems.
The resources managed by this API are:
Repositories, which group packages and their data.
Packages, which group versions and their tags.
Versions, which are specific forms of a package.
Tags, which represent alternative names for versions.
Files, which contain content and are optionally associated with a
Package or Version.
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
ArtifactRegistryTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
ArtifactRegistryAsyncClient
ArtifactRegistryAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . artifactregistry_v1 . services . artifact_registry . transports . base . ArtifactRegistryTransport ,
typing . Callable [
[ ... ],
google . cloud . artifactregistry_v1 . services . artifact_registry . transports . base . ArtifactRegistryTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the artifact registry async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,ArtifactRegistryTransport,Callable[..., ArtifactRegistryTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the ArtifactRegistryTransport constructor. If set to None, a transport is chosen automatically.
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
apt_artifact_path
apt_artifact_path (
project : str , location : str , repository : str , apt_artifact : str
) - > str
Returns a fully-qualified apt_artifact string.
attachment_path
attachment_path (
project : str , location : str , repository : str , attachment : str
) - > str
Returns a fully-qualified attachment string.
batch_delete_versions
batch_delete_versions (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . version . BatchDeleteVersionsRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
names : typing . Optional [ typing . MutableSequence [ str ]] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Deletes multiple versions across a repository. The
returned operation will complete once the versions have
been deleted.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_batch_delete_versions():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . BatchDeleteVersionsRequest (
names=['names_value1', 'names_value2'],
)
# Make the request
operation = client. batch_delete_versions (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.BatchDeleteVersionsRequest , dict]]
The request object. The request to delete multiple versions across a repository.
parent
str
The name of the repository holding all requested versions. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
names
:class: MutableSequence[str]
Required. The names of the versions to delete. The maximum number of versions deleted per batch is determined by the service and is dependent on the available resources in the region. This corresponds to the names field on the request instance; if request is provided, this should not be set.
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
create_attachment
create_attachment (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . attachment . CreateAttachmentRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
attachment : typing . Optional [
google . cloud . artifactregistry_v1 . types . attachment . Attachment
] = None ,
attachment_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates an attachment. The returned Operation will
finish once the attachment has been created. Its
response will be the created attachment.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_create_attachment():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
attachment = artifactregistry_v1 . Attachment ()
attachment.target = "target_value"
attachment.files = ['files_value1', 'files_value2']
request = artifactregistry_v1 . CreateAttachmentRequest (
parent="parent_value",
attachment_id="attachment_id_value",
attachment=attachment,
)
# Make the request
operation = client. create_attachment (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.CreateAttachmentRequest , dict]]
The request object. The request to create a new attachment.
parent
str
Required. The name of the parent resource where the attachment will be created. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
attachment
Attachment
Required. The attachment to be created. This corresponds to the attachment field on the request instance; if request is provided, this should not be set.
attachment_id
str
Required. The attachment id to use for this attachment. This corresponds to the attachment_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Attachment An Attachment refers to additional metadata that can be attached to artifacts in Artifact Registry. An attachment consists of one or more files.
create_repository
create_repository (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . repository . CreateRepositoryRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
repository : typing . Optional [
google . cloud . artifactregistry_v1 . types . repository . Repository
] = None ,
repository_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a repository. The returned Operation will
finish once the repository has been created. Its
response will be the created Repository.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_create_repository():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . CreateRepositoryRequest (
parent="parent_value",
repository_id="repository_id_value",
)
# Make the request
operation = client. create_repository (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.CreateRepositoryRequest , dict]]
The request object. The request to create a new repository.
parent
str
Required. The name of the parent resource where the repository will be created. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
repository
Repository
Required. The repository to be created. This corresponds to the repository field on the request instance; if request is provided, this should not be set.
repository_id
str
Required. The repository id to use for this repository. This corresponds to the repository_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Repository A Repository for storing artifacts with a specific format.
create_rule
create_rule (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . rule . CreateRuleRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
rule : typing . Optional [ google . cloud . artifactregistry_v1 . types . rule . Rule ] = None ,
rule_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . artifactregistry_v1 . types . rule . Rule
Creates a rule.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_create_rule():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . CreateRuleRequest (
parent="parent_value",
)
# Make the request
response = await client. create_rule (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.CreateRuleRequest , dict]]
The request object. The request to create a new rule.
parent
str
Required. The name of the parent resource where the rule will be created. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
rule
Rule
The rule to be created. This corresponds to the rule field on the request instance; if request is provided, this should not be set.
rule_id
str
The rule id to use for this repository. This corresponds to the rule_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.Rule
A rule defines the deny or allow action of the operation it applies to and the conditions required for the rule to apply. You can set one rule for an entire repository and one rule for each package within.
create_tag
create_tag (
request : typing . Optional [
typing . Union [ google . cloud . artifactregistry_v1 . types . tag . CreateTagRequest , dict ]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
tag : typing . Optional [ google . cloud . artifactregistry_v1 . types . tag . Tag ] = None ,
tag_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . artifactregistry_v1 . types . tag . Tag
Creates a tag.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_create_tag():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . CreateTagRequest (
)
# Make the request
response = await client. create_tag (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.CreateTagRequest , dict]]
The request object. The request to create a new tag.
parent
str
The name of the parent resource where the tag will be created. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
tag
Tag
The tag to be created. This corresponds to the tag field on the request instance; if request is provided, this should not be set.
tag_id
str
The tag id to use for this repository. This corresponds to the tag_id field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.Tag
Tags point to a version and represent an alternative name that can be used to access the version.
delete_attachment
delete_attachment (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . attachment . DeleteAttachmentRequest ,
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
Deletes an attachment. The returned Operation will finish once
the attachments has been deleted. It will not have any Operation
metadata and will return a google.protobuf.Empty response.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_delete_attachment():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . DeleteAttachmentRequest (
name="name_value",
)
# Make the request
operation = client. delete_attachment (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.DeleteAttachmentRequest , dict]]
The request object. The request to delete an attachment.
name
str
Required. The name of the attachment to delete. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_file
delete_file (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . file . DeleteFileRequest , dict
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
Deletes a file and all of its content. It is only
allowed on generic repositories. The returned operation
will complete once the file has been deleted.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_delete_file():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . DeleteFileRequest (
name="name_value",
)
# Make the request
operation = client. delete_file (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.DeleteFileRequest , dict]]
The request object. The request to delete a file.
name
str
Required. The name of the file to delete. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_package
delete_package (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . package . DeletePackageRequest , dict
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
Deletes a package and all of its versions and tags.
The returned operation will complete once the package
has been deleted.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_delete_package():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . DeletePackageRequest (
name="name_value",
)
# Make the request
operation = client. delete_package (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.DeletePackageRequest , dict]]
The request object. The request to delete a package.
name
str
Required. The name of the package to delete. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_repository
delete_repository (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . repository . DeleteRepositoryRequest ,
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
Deletes a repository and all of its contents. The
returned Operation will finish once the repository has
been deleted. It will not have any Operation metadata
and will return a google.protobuf.Empty response.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_delete_repository():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . DeleteRepositoryRequest (
name="name_value",
)
# Make the request
operation = client. delete_repository (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.DeleteRepositoryRequest , dict]]
The request object. The request to delete a repository.
name
str
Required. The name of the repository to delete. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_rule
delete_rule (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . rule . DeleteRuleRequest , dict
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
Deletes a rule.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_delete_rule():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . DeleteRuleRequest (
name="name_value",
)
# Make the request
await client. delete_rule (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.DeleteRuleRequest , dict]]
The request object. The request to delete a rule.
name
str
Required. The name of the rule to delete. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_tag
delete_tag (
request : typing . Optional [
typing . Union [ google . cloud . artifactregistry_v1 . types . tag . DeleteTagRequest , dict ]
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
Deletes a tag.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_delete_tag():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . DeleteTagRequest (
)
# Make the request
await client. delete_tag (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.DeleteTagRequest , dict]]
The request object. The request to delete a tag.
name
str
The name of the tag to delete. This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_version
delete_version (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . version . DeleteVersionRequest , dict
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
Deletes a version and all of its content. The
returned operation will complete once the version has
been deleted.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_delete_version():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . DeleteVersionRequest (
)
# Make the request
operation = client. delete_version (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.DeleteVersionRequest , dict]]
The request object. The request to delete a version.
name
str
The name of the version to delete. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
docker_image_path
docker_image_path (
project : str , location : str , repository : str , docker_image : str
) - > str
Returns a fully-qualified docker_image string.
export_artifact
export_artifact (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . export . ExportArtifactRequest , dict
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
) - > google . api_core . operation_async . AsyncOperation
Exports an artifact to a Cloud Storage bucket.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_export_artifact():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . ExportArtifactRequest (
source_version="source_version_value",
gcs_path="gcs_path_value",
repository="repository_value",
)
# Make the request
operation = client. export_artifact (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.ExportArtifactRequest , dict]]
The request object. The request for exporting an artifact to a destination.
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
An object representing a long-running operation. The result type for the operation will be ExportArtifactResponse The response for exporting an artifact to a destination.
file_path
file_path ( project : str , location : str , repository : str , file : str ) - > str
Returns a fully-qualified file string.
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
ArtifactRegistryAsyncClient
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
ArtifactRegistryAsyncClient
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
ArtifactRegistryAsyncClient
The constructed client.
get_attachment
get_attachment (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . attachment . GetAttachmentRequest , dict
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
) - > google . cloud . artifactregistry_v1 . types . attachment . Attachment
Gets an attachment.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_get_attachment():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . GetAttachmentRequest (
name="name_value",
)
# Make the request
response = await client. get_attachment (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.GetAttachmentRequest , dict]]
The request object. The request to retrieve an attachment.
name
str
Required. The name of the attachment to retrieve. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.Attachment
An Attachment refers to additional metadata that can be attached to artifacts in Artifact Registry. An attachment consists of one or more files.
get_docker_image
get_docker_image (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . artifact . GetDockerImageRequest , dict
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
) - > google . cloud . artifactregistry_v1 . types . artifact . DockerImage
Gets a docker image.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_get_docker_image():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . GetDockerImageRequest (
name="name_value",
)
# Make the request
response = await client. get_docker_image (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.GetDockerImageRequest , dict]]
The request object. The request to get docker images.
name
str
Required. The name of the docker images. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.DockerImage
DockerImage represents a docker artifact. The following fields are returned as untyped metadata in the Version resource, using camelcase keys (i.e. metadata.imageSizeBytes): \* imageSizeBytes \* mediaType \* buildTime
get_file
get_file (
request : typing . Optional [
typing . Union [ google . cloud . artifactregistry_v1 . types . file . GetFileRequest , dict ]
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
) - > google . cloud . artifactregistry_v1 . types . file . File
Gets a file.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_get_file():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . GetFileRequest (
name="name_value",
)
# Make the request
response = await client. get_file (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.GetFileRequest , dict]]
The request object. The request to retrieve a file.
name
str
Required. The name of the file to retrieve. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.File
Files store content that is potentially associated with Packages or Versions.
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
Gets the IAM policy for a given resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
import google.iam.v1.iam_policy_pb2 as iam_policy_pb2 # type: ignore
async def sample_get_iam_policy():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
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
get_location
get_location (
request : typing . Optional [
google . cloud . location . locations_pb2 . GetLocationRequest
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
get_maven_artifact
get_maven_artifact (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . artifact . GetMavenArtifactRequest ,
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
) - > google . cloud . artifactregistry_v1 . types . artifact . MavenArtifact
Gets a maven artifact.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_get_maven_artifact():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . GetMavenArtifactRequest (
name="name_value",
)
# Make the request
response = await client. get_maven_artifact (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.GetMavenArtifactRequest , dict]]
The request object. The request to get maven artifacts.
name
str
Required. The name of the maven artifact. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.MavenArtifact
MavenArtifact represents a maven artifact.
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
get_npm_package
get_npm_package (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . artifact . GetNpmPackageRequest , dict
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
) - > google . cloud . artifactregistry_v1 . types . artifact . NpmPackage
Gets a npm package.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_get_npm_package():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . GetNpmPackageRequest (
name="name_value",
)
# Make the request
response = await client. get_npm_package (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.GetNpmPackageRequest , dict]]
The request object. The request to get npm packages.
name
str
Required. The name of the npm package. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.NpmPackage
NpmPackage represents an npm artifact.
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
get_package
get_package (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . package . GetPackageRequest , dict
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
) - > google . cloud . artifactregistry_v1 . types . package . Package
Gets a package.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_get_package():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . GetPackageRequest (
name="name_value",
)
# Make the request
response = await client. get_package (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.GetPackageRequest , dict]]
The request object. The request to retrieve a package.
name
str
Required. The name of the package to retrieve. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.Package
Packages are named collections of versions.
get_project_settings
get_project_settings (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . settings . GetProjectSettingsRequest ,
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
) - > google . cloud . artifactregistry_v1 . types . settings . ProjectSettings
Retrieves the Settings for the Project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_get_project_settings():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . GetProjectSettingsRequest (
name="name_value",
)
# Make the request
response = await client. get_project_settings (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.GetProjectSettingsRequest , dict]]
The request object. Gets the redirection status for a project.
name
str
Required. The name of the projectSettings resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.ProjectSettings
The Artifact Registry settings that apply to a Project.
get_python_package
get_python_package (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . artifact . GetPythonPackageRequest ,
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
) - > google . cloud . artifactregistry_v1 . types . artifact . PythonPackage
Gets a python package.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_get_python_package():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . GetPythonPackageRequest (
name="name_value",
)
# Make the request
response = await client. get_python_package (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.GetPythonPackageRequest , dict]]
The request object. The request to get python packages.
name
str
Required. The name of the python package. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.PythonPackage
PythonPackage represents a python artifact.
get_repository
get_repository (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . repository . GetRepositoryRequest , dict
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
) - > google . cloud . artifactregistry_v1 . types . repository . Repository
Gets a repository.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_get_repository():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . GetRepositoryRequest (
name="name_value",
)
# Make the request
response = await client. get_repository (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.GetRepositoryRequest , dict]]
The request object. The request to retrieve a repository.
name
str
Required. The name of the repository to retrieve. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.Repository
A Repository for storing artifacts with a specific format.
get_rule
get_rule (
request : typing . Optional [
typing . Union [ google . cloud . artifactregistry_v1 . types . rule . GetRuleRequest , dict ]
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
) - > google . cloud . artifactregistry_v1 . types . rule . Rule
Gets a rule.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_get_rule():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . GetRuleRequest (
name="name_value",
)
# Make the request
response = await client. get_rule (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.GetRuleRequest , dict]]
The request object. The request to retrieve a rule.
name
str
Required. The name of the rule to retrieve. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.Rule
A rule defines the deny or allow action of the operation it applies to and the conditions required for the rule to apply. You can set one rule for an entire repository and one rule for each package within.
get_tag
get_tag (
request : typing . Optional [
typing . Union [ google . cloud . artifactregistry_v1 . types . tag . GetTagRequest , dict ]
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
) - > google . cloud . artifactregistry_v1 . types . tag . Tag
Gets a tag.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_get_tag():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . GetTagRequest (
)
# Make the request
response = await client. get_tag (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.GetTagRequest , dict]]
The request object. The request to retrieve a tag.
name
str
The name of the tag to retrieve. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.Tag
Tags point to a version and represent an alternative name that can be used to access the version.
get_transport_class
get_transport_class (
label : typing . Optional [ str ] = None ,
) - > typing . Type [
google . cloud . artifactregistry_v1 . services . artifact_registry . transports . base . ArtifactRegistryTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
get_version
get_version (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . version . GetVersionRequest , dict
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
) - > google . cloud . artifactregistry_v1 . types . version . Version
Gets a version
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_get_version():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . GetVersionRequest (
)
# Make the request
response = await client. get_version (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.GetVersionRequest , dict]]
The request object. The request to retrieve a version.
name
str
The name of the version to retrieve. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.Version
The body of a version resource. A version resource represents a collection of components, such as files and other data. This may correspond to a version in many package management schemes.
get_vpcsc_config
get_vpcsc_config (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . vpcsc_config . GetVPCSCConfigRequest ,
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
) - > google . cloud . artifactregistry_v1 . types . vpcsc_config . VPCSCConfig
Retrieves the VPCSC Config for the Project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_get_vpcsc_config():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . GetVPCSCConfigRequest (
name="name_value",
)
# Make the request
response = await client. get_vpcsc_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.GetVPCSCConfigRequest , dict]]
The request object. Gets the VPC SC config for a project.
name
str
Required. The name of the VPCSCConfig resource. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.VPCSCConfig
The Artifact Registry VPC SC config that apply to a Project.
import_apt_artifacts
import_apt_artifacts (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . apt_artifact . ImportAptArtifactsRequest ,
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
) - > google . api_core . operation_async . AsyncOperation
Imports Apt artifacts. The returned Operation will
complete once the resources are imported. Package,
Version, and File resources are created based on the
imported artifacts. Imported artifacts that conflict
with existing resources are ignored.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_import_apt_artifacts():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . ImportAptArtifactsRequest (
)
# Make the request
operation = client. import_apt_artifacts (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.ImportAptArtifactsRequest , dict]]
The request object. The request to import new apt artifacts.
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
An object representing a long-running operation. The result type for the operation will be ImportAptArtifactsResponse The response message from importing APT artifacts.
import_yum_artifacts
import_yum_artifacts (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . yum_artifact . ImportYumArtifactsRequest ,
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
) - > google . api_core . operation_async . AsyncOperation
Imports Yum (RPM) artifacts. The returned Operation
will complete once the resources are imported. Package,
Version, and File resources are created based on the
imported artifacts. Imported artifacts that conflict
with existing resources are ignored.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_import_yum_artifacts():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . ImportYumArtifactsRequest (
)
# Make the request
operation = client. import_yum_artifacts (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.ImportYumArtifactsRequest , dict]]
The request object. The request to import new yum artifacts.
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
An object representing a long-running operation. The result type for the operation will be ImportYumArtifactsResponse The response message from importing YUM artifacts.
list_attachments
list_attachments (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . attachment . ListAttachmentsRequest ,
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
google . cloud . artifactregistry_v1 . services . artifact_registry . pagers . ListAttachmentsAsyncPager
)
Lists attachments.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_list_attachments():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . ListAttachmentsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_attachments (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.ListAttachmentsRequest , dict]]
The request object. The request to list attachments.
parent
str
Required. The name of the parent resource whose attachments will be listed. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListAttachmentsAsyncPager
The response from listing attachments. Iterating over this object will yield results and resolve additional pages automatically.
list_docker_images
list_docker_images (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . artifact . ListDockerImagesRequest ,
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
google . cloud . artifactregistry_v1 . services . artifact_registry . pagers . ListDockerImagesAsyncPager
)
Lists docker images.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_list_docker_images():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . ListDockerImagesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_docker_images (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.ListDockerImagesRequest , dict]]
The request object. The request to list docker images.
parent
str
Required. The name of the parent resource whose docker images will be listed. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListDockerImagesAsyncPager
The response from listing docker images. Iterating over this object will yield results and resolve additional pages automatically.
list_files
list_files (
request : typing . Optional [
typing . Union [ google . cloud . artifactregistry_v1 . types . file . ListFilesRequest , dict ]
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
google . cloud . artifactregistry_v1 . services . artifact_registry . pagers . ListFilesAsyncPager
)
Lists files.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_list_files():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . ListFilesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_files (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.ListFilesRequest , dict]]
The request object. The request to list files.
parent
str
Required. The name of the repository whose files will be listed. For example: "projects/p1/locations/us-central1/repositories/repo1 This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListFilesAsyncPager
The response from listing files. Iterating over this object will yield results and resolve additional pages automatically.
list_locations
list_locations (
request : typing . Optional [
google . cloud . location . locations_pb2 . ListLocationsRequest
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
list_maven_artifacts
list_maven_artifacts (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . artifact . ListMavenArtifactsRequest ,
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
google . cloud . artifactregistry_v1 . services . artifact_registry . pagers . ListMavenArtifactsAsyncPager
)
Lists maven artifacts.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_list_maven_artifacts():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . ListMavenArtifactsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_maven_artifacts (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.ListMavenArtifactsRequest , dict]]
The request object. The request to list maven artifacts.
parent
str
Required. The name of the parent resource whose maven artifacts will be listed. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListMavenArtifactsAsyncPager
The response from listing maven artifacts. Iterating over this object will yield results and resolve additional pages automatically.
list_npm_packages
list_npm_packages (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . artifact . ListNpmPackagesRequest , dict
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
google . cloud . artifactregistry_v1 . services . artifact_registry . pagers . ListNpmPackagesAsyncPager
)
Lists npm packages.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_list_npm_packages():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . ListNpmPackagesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_npm_packages (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.ListNpmPackagesRequest , dict]]
The request object. The request to list npm packages.
parent
str
Required. The name of the parent resource whose npm packages will be listed. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListNpmPackagesAsyncPager
The response from listing npm packages. Iterating over this object will yield results and resolve additional pages automatically.
list_packages
list_packages (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . package . ListPackagesRequest , dict
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
google . cloud . artifactregistry_v1 . services . artifact_registry . pagers . ListPackagesAsyncPager
)
Lists packages.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_list_packages():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . ListPackagesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_packages (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.ListPackagesRequest , dict]]
The request object. The request to list packages.
parent
str
Required. The name of the parent resource whose packages will be listed. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListPackagesAsyncPager
The response from listing packages. Iterating over this object will yield results and resolve additional pages automatically.
list_python_packages
list_python_packages (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . artifact . ListPythonPackagesRequest ,
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
google . cloud . artifactregistry_v1 . services . artifact_registry . pagers . ListPythonPackagesAsyncPager
)
Lists python packages.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_list_python_packages():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . ListPythonPackagesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_python_packages (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.ListPythonPackagesRequest , dict]]
The request object. The request to list python packages.
parent
str
Required. The name of the parent resource whose python packages will be listed. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListPythonPackagesAsyncPager
The response from listing python packages. Iterating over this object will yield results and resolve additional pages automatically.
list_repositories
list_repositories (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . repository . ListRepositoriesRequest ,
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
google . cloud . artifactregistry_v1 . services . artifact_registry . pagers . ListRepositoriesAsyncPager
)
Lists repositories.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_list_repositories():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . ListRepositoriesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_repositories (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.ListRepositoriesRequest , dict]]
The request object. The request to list repositories.
parent
str
Required. The name of the parent resource whose repositories will be listed. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRepositoriesAsyncPager
The response from listing repositories. Iterating over this object will yield results and resolve additional pages automatically.
list_rules
list_rules (
request : typing . Optional [
typing . Union [ google . cloud . artifactregistry_v1 . types . rule . ListRulesRequest , dict ]
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
google . cloud . artifactregistry_v1 . services . artifact_registry . pagers . ListRulesAsyncPager
)
Lists rules.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_list_rules():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . ListRulesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_rules (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.ListRulesRequest , dict]]
The request object. The request to list rules.
parent
str
Required. The name of the parent repository whose rules will be listed. For example: projects/p1/locations/us-central1/repositories/repo1 . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRulesAsyncPager
The response from listing rules. Iterating over this object will yield results and resolve additional pages automatically.
list_tags
list_tags (
request : typing . Optional [
typing . Union [ google . cloud . artifactregistry_v1 . types . tag . ListTagsRequest , dict ]
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
google . cloud . artifactregistry_v1 . services . artifact_registry . pagers . ListTagsAsyncPager
)
Lists tags.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_list_tags():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . ListTagsRequest (
)
# Make the request
page_result = client. list_tags (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.ListTagsRequest , dict]]
The request object. The request to list tags.
parent
str
The name of the parent package whose tags will be listed. For example: projects/p1/locations/us-central1/repositories/repo1/packages/pkg1 . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListTagsAsyncPager
The response from listing tags. Iterating over this object will yield results and resolve additional pages automatically.
list_versions
list_versions (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . version . ListVersionsRequest , dict
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
google . cloud . artifactregistry_v1 . services . artifact_registry . pagers . ListVersionsAsyncPager
)
Lists versions.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_list_versions():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . ListVersionsRequest (
)
# Make the request
page_result = client. list_versions (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.ListVersionsRequest , dict]]
The request object. The request to list versions.
parent
str
The name of the parent resource whose versions will be listed. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListVersionsAsyncPager
The response from listing versions. Iterating over this object will yield results and resolve additional pages automatically.
maven_artifact_path
maven_artifact_path (
project : str , location : str , repository : str , maven_artifact : str
) - > str
Returns a fully-qualified maven_artifact string.
npm_package_path
npm_package_path (
project : str , location : str , repository : str , npm_package : str
) - > str
Returns a fully-qualified npm_package string.
package_path
package_path ( project : str , location : str , repository : str , package : str ) - > str
Returns a fully-qualified package string.
parse_apt_artifact_path
parse_apt_artifact_path ( path : str ) - > typing . Dict [ str , str ]
Parses a apt_artifact path into its component segments.
parse_attachment_path
parse_attachment_path ( path : str ) - > typing . Dict [ str , str ]
Parses a attachment path into its component segments.
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
parse_docker_image_path
parse_docker_image_path ( path : str ) - > typing . Dict [ str , str ]
Parses a docker_image path into its component segments.
parse_file_path
parse_file_path ( path : str ) - > typing . Dict [ str , str ]
Parses a file path into its component segments.
parse_maven_artifact_path
parse_maven_artifact_path ( path : str ) - > typing . Dict [ str , str ]
Parses a maven_artifact path into its component segments.
parse_npm_package_path
parse_npm_package_path ( path : str ) - > typing . Dict [ str , str ]
Parses a npm_package path into its component segments.
parse_package_path
parse_package_path ( path : str ) - > typing . Dict [ str , str ]
Parses a package path into its component segments.
parse_project_settings_path
parse_project_settings_path ( path : str ) - > typing . Dict [ str , str ]
Parses a project_settings path into its component segments.
parse_python_package_path
parse_python_package_path ( path : str ) - > typing . Dict [ str , str ]
Parses a python_package path into its component segments.
parse_repository_path
parse_repository_path ( path : str ) - > typing . Dict [ str , str ]
Parses a repository path into its component segments.
parse_rule_path
parse_rule_path ( path : str ) - > typing . Dict [ str , str ]
Parses a rule path into its component segments.
parse_secret_version_path
parse_secret_version_path ( path : str ) - > typing . Dict [ str , str ]
Parses a secret_version path into its component segments.
parse_tag_path
parse_tag_path ( path : str ) - > typing . Dict [ str , str ]
Parses a tag path into its component segments.
parse_version_path
parse_version_path ( path : str ) - > typing . Dict [ str , str ]
Parses a version path into its component segments.
parse_vpcsc_config_path
parse_vpcsc_config_path ( path : str ) - > typing . Dict [ str , str ]
Parses a vpcsc_config path into its component segments.
parse_yum_artifact_path
parse_yum_artifact_path ( path : str ) - > typing . Dict [ str , str ]
Parses a yum_artifact path into its component segments.
project_settings_path
project_settings_path ( project : str ) - > str
Returns a fully-qualified project_settings string.
python_package_path
python_package_path (
project : str , location : str , repository : str , python_package : str
) - > str
Returns a fully-qualified python_package string.
repository_path
repository_path ( project : str , location : str , repository : str ) - > str
Returns a fully-qualified repository string.
rule_path
rule_path ( project : str , location : str , repository : str , rule : str ) - > str
Returns a fully-qualified rule string.
secret_version_path
secret_version_path ( project : str , secret : str , secret_version : str ) - > str
Returns a fully-qualified secret_version string.
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
Updates the IAM policy for a given resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
import google.iam.v1.iam_policy_pb2 as iam_policy_pb2 # type: ignore
async def sample_set_iam_policy():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
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
tag_path
tag_path (
project : str , location : str , repository : str , package : str , tag : str
) - > str
Returns a fully-qualified tag string.
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
Tests if the caller has a list of permissions on a
resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
import google.iam.v1.iam_policy_pb2 as iam_policy_pb2 # type: ignore
async def sample_test_iam_permissions():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
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
update_file
update_file (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . file . UpdateFileRequest , dict
]
] = None ,
* ,
file : typing . Optional [ google . cloud . artifactregistry_v1 . types . file . File ] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . artifactregistry_v1 . types . file . File
Updates a file.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_update_file():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . UpdateFileRequest (
)
# Make the request
response = await client. update_file (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.UpdateFileRequest , dict]]
The request object. The request to update a file.
file
File
Required. The File that replaces the resource on the server. This corresponds to the file field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.File
Files store content that is potentially associated with Packages or Versions.
update_package
update_package (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . package . UpdatePackageRequest , dict
]
] = None ,
* ,
package : typing . Optional [
google . cloud . artifactregistry_v1 . types . package . Package
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
) - > google . cloud . artifactregistry_v1 . types . package . Package
Updates a package.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_update_package():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . UpdatePackageRequest (
)
# Make the request
response = await client. update_package (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.UpdatePackageRequest , dict]]
The request object. The request to update a package.
package
Package
The package that replaces the resource on the server. This corresponds to the package field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.Package
Packages are named collections of versions.
update_project_settings
update_project_settings (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . settings . UpdateProjectSettingsRequest ,
dict ,
]
] = None ,
* ,
project_settings : typing . Optional [
google . cloud . artifactregistry_v1 . types . settings . ProjectSettings
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
) - > google . cloud . artifactregistry_v1 . types . settings . ProjectSettings
Updates the Settings for the Project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_update_project_settings():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . UpdateProjectSettingsRequest (
)
# Make the request
response = await client. update_project_settings (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.UpdateProjectSettingsRequest , dict]]
The request object. Sets the settings of the project.
project_settings
ProjectSettings
The project settings. This corresponds to the project_settings field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Field mask to support partial updates. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.ProjectSettings
The Artifact Registry settings that apply to a Project.
update_repository
update_repository (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . repository . UpdateRepositoryRequest ,
dict ,
]
] = None ,
* ,
repository : typing . Optional [
google . cloud . artifactregistry_v1 . types . repository . Repository
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
) - > google . cloud . artifactregistry_v1 . types . repository . Repository
Updates a repository.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_update_repository():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . UpdateRepositoryRequest (
)
# Make the request
response = await client. update_repository (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.UpdateRepositoryRequest , dict]]
The request object. The request to update a repository.
repository
Repository
The repository that replaces the resource on the server. This corresponds to the repository field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.Repository
A Repository for storing artifacts with a specific format.
update_rule
update_rule (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . rule . UpdateRuleRequest , dict
]
] = None ,
* ,
rule : typing . Optional [ google . cloud . artifactregistry_v1 . types . rule . Rule ] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . artifactregistry_v1 . types . rule . Rule
Updates a rule.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_update_rule():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . UpdateRuleRequest (
)
# Make the request
response = await client. update_rule (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.UpdateRuleRequest , dict]]
The request object. The request to update a rule.
rule
Rule
The rule that replaces the resource on the server. This corresponds to the rule field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.Rule
A rule defines the deny or allow action of the operation it applies to and the conditions required for the rule to apply. You can set one rule for an entire repository and one rule for each package within.
update_tag
update_tag (
request : typing . Optional [
typing . Union [ google . cloud . artifactregistry_v1 . types . tag . UpdateTagRequest , dict ]
] = None ,
* ,
tag : typing . Optional [ google . cloud . artifactregistry_v1 . types . tag . Tag ] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . artifactregistry_v1 . types . tag . Tag
Updates a tag.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_update_tag():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . UpdateTagRequest (
)
# Make the request
response = await client. update_tag (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.UpdateTagRequest , dict]]
The request object. The request to create or update a tag.
tag
Tag
The tag that replaces the resource on the server. This corresponds to the tag field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.Tag
Tags point to a version and represent an alternative name that can be used to access the version.
update_version
update_version (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . version . UpdateVersionRequest , dict
]
] = None ,
* ,
version : typing . Optional [
google . cloud . artifactregistry_v1 . types . version . Version
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
) - > google . cloud . artifactregistry_v1 . types . version . Version
Updates a version.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_update_version():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . UpdateVersionRequest (
)
# Make the request
response = await client. update_version (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.UpdateVersionRequest , dict]]
The request object. The request to update a version.
version
Version
Required. The Version that replaces the resource on the server. This corresponds to the version field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.Version
The body of a version resource. A version resource represents a collection of components, such as files and other data. This may correspond to a version in many package management schemes.
update_vpcsc_config
update_vpcsc_config (
request : typing . Optional [
typing . Union [
google . cloud . artifactregistry_v1 . types . vpcsc_config . UpdateVPCSCConfigRequest ,
dict ,
]
] = None ,
* ,
vpcsc_config : typing . Optional [
google . cloud . artifactregistry_v1 . types . vpcsc_config . VPCSCConfig
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
) - > google . cloud . artifactregistry_v1 . types . vpcsc_config . VPCSCConfig
Updates the VPCSC Config for the Project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import artifactregistry_v1
async def sample_update_vpcsc_config():
# Create a client
client = artifactregistry_v1 . ArtifactRegistryAsyncClient ()
# Initialize request argument(s)
request = artifactregistry_v1 . UpdateVPCSCConfigRequest (
)
# Make the request
response = await client. update_vpcsc_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.artifactregistry_v1.types.UpdateVPCSCConfigRequest , dict]]
The request object. Sets the VPCSC config of the project.
vpcsc_config
VPCSCConfig
The project config. This corresponds to the vpcsc_config field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Field mask to support partial updates. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.artifactregistry_v1.types.VPCSCConfig
The Artifact Registry VPC SC config that apply to a Project.
version_path
version_path (
project : str , location : str , repository : str , package : str , version : str
) - > str
Returns a fully-qualified version string.
vpcsc_config_path
vpcsc_config_path ( project : str , location : str ) - > str
Returns a fully-qualified vpcsc_config string.
yum_artifact_path
yum_artifact_path (
project : str , location : str , repository : str , yum_artifact : str
) - > str
Returns a fully-qualified yum_artifact string.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
