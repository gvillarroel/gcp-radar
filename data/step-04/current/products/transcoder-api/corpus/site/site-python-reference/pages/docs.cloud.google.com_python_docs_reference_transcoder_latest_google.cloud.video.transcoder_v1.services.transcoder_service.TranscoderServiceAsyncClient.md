---
title: "Class TranscoderServiceAsyncClient (1.20.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/transcoder/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/transcoder/latest/google.cloud.video.transcoder_v1.services.transcoder_service.TranscoderServiceAsyncClient
  title: "Class TranscoderServiceAsyncClient (1.20.0) \_|\_ Python client libraries\
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
Class TranscoderServiceAsyncClient (1.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.20.0 (latest)
1.19.0
1.18.0
1.17.0
1.16.0
1.15.2
1.14.0
1.13.1
1.12.5
1.11.0
1.10.1
1.9.1
1.8.2
1.7.0
1.6.1
1.5.0
1.4.3
1.3.2
1.2.1
1.1.0
1.0.1
0.5.1
0.4.1
0.3.1
0.2.1
0.1.0
TranscoderServiceAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . video . transcoder_v1 . services . transcoder_service . transports . base . TranscoderServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . video . transcoder_v1 . services . transcoder_service . transports . base . TranscoderServiceTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Using the Transcoder API, you can queue asynchronous jobs for
transcoding media into various output formats. Output formats
may include different streaming standards such as HTTP Live
Streaming (HLS) and Dynamic Adaptive Streaming over HTTP (DASH).
You can also customize jobs using advanced features such as
Digital Rights Management (DRM), audio equalization, content
concatenation, and digital ad-stitch ready content generation.
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
TranscoderServiceTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
TranscoderServiceAsyncClient
TranscoderServiceAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . video . transcoder_v1 . services . transcoder_service . transports . base . TranscoderServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . video . transcoder_v1 . services . transcoder_service . transports . base . TranscoderServiceTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the transcoder service async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,TranscoderServiceTransport,Callable[..., TranscoderServiceTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the TranscoderServiceTransport constructor. If set to None, a transport is chosen automatically.
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
create_job
create_job (
request : typing . Optional [
typing . Union [
google . cloud . video . transcoder_v1 . types . services . CreateJobRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
job : typing . Optional [ google . cloud . video . transcoder_v1 . types . resources . Job ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . video . transcoder_v1 . types . resources . Job
Creates a job in the specified region.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import transcoder_v1
async def sample_create_job():
# Create a client
client = transcoder_v1 . TranscoderServiceAsyncClient ()
# Initialize request argument(s)
job = transcoder_v1 . Job ()
job.template_id = "template_id_value"
request = transcoder_v1 . CreateJobRequest (
parent="parent_value",
job=job,
)
# Make the request
response = await client. create_job (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.video.transcoder_v1.types.CreateJobRequest , dict]]
The request object. Request message for TranscoderService.CreateJob .
parent
str
Required. The parent location to create and process this job. Format: projects/{project}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
job
Job
Required. Parameters for creating transcoding job. This corresponds to the job field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.transcoder_v1.types.Job
Transcoding job resource.
create_job_template
create_job_template (
request : typing . Optional [
typing . Union [
google . cloud . video . transcoder_v1 . types . services . CreateJobTemplateRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
job_template : typing . Optional [
google . cloud . video . transcoder_v1 . types . resources . JobTemplate
] = None ,
job_template_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . video . transcoder_v1 . types . resources . JobTemplate
Creates a job template in the specified region.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import transcoder_v1
async def sample_create_job_template():
# Create a client
client = transcoder_v1 . TranscoderServiceAsyncClient ()
# Initialize request argument(s)
request = transcoder_v1 . CreateJobTemplateRequest (
parent="parent_value",
job_template_id="job_template_id_value",
)
# Make the request
response = await client. create_job_template (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.video.transcoder_v1.types.CreateJobTemplateRequest , dict]]
The request object. Request message for TranscoderService.CreateJobTemplate .
parent
str
Required. The parent location to create this job template. Format: projects/{project}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
job_template
JobTemplate
Required. Parameters for creating job template. This corresponds to the job_template field on the request instance; if request is provided, this should not be set.
job_template_id
str
Required. The ID to use for the job template, which will become the final component of the job template's resource name. This value should be 4-63 characters, and valid characters must match the regular expression `<code>a-zA-Z][a-zA-Z0-9_-]</code>* . This corresponds to the job_template_id field on the request instance; if request` is provided, this should not be set.
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
google.cloud.video.transcoder_v1.types.JobTemplate
Transcoding job template resource.
delete_job
delete_job (
request : typing . Optional [
typing . Union [
google . cloud . video . transcoder_v1 . types . services . DeleteJobRequest , dict
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
Deletes a job.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import transcoder_v1
async def sample_delete_job():
# Create a client
client = transcoder_v1 . TranscoderServiceAsyncClient ()
# Initialize request argument(s)
request = transcoder_v1 . DeleteJobRequest (
name="name_value",
)
# Make the request
await client. delete_job (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.video.transcoder_v1.types.DeleteJobRequest , dict]]
The request object. Request message for TranscoderService.DeleteJob .
name
str
Required. The name of the job to delete. Format: projects/{project}/locations/{location}/jobs/{job} This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
delete_job_template
delete_job_template (
request : typing . Optional [
typing . Union [
google . cloud . video . transcoder_v1 . types . services . DeleteJobTemplateRequest ,
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
Deletes a job template.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import transcoder_v1
async def sample_delete_job_template():
# Create a client
client = transcoder_v1 . TranscoderServiceAsyncClient ()
# Initialize request argument(s)
request = transcoder_v1 . DeleteJobTemplateRequest (
name="name_value",
)
# Make the request
await client. delete_job_template (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.video.transcoder_v1.types.DeleteJobTemplateRequest , dict]]
The request object. Request message for TranscoderService.DeleteJobTemplate .
name
str
Required. The name of the job template to delete. projects/{project}/locations/{location}/jobTemplates/{job_template} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
TranscoderServiceAsyncClient
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
TranscoderServiceAsyncClient
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
TranscoderServiceAsyncClient
The constructed client.
get_job
get_job (
request : typing . Optional [
typing . Union [
google . cloud . video . transcoder_v1 . types . services . GetJobRequest , dict
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
) - > google . cloud . video . transcoder_v1 . types . resources . Job
Returns the job data.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import transcoder_v1
async def sample_get_job():
# Create a client
client = transcoder_v1 . TranscoderServiceAsyncClient ()
# Initialize request argument(s)
request = transcoder_v1 . GetJobRequest (
name="name_value",
)
# Make the request
response = await client. get_job (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.video.transcoder_v1.types.GetJobRequest , dict]]
The request object. Request message for TranscoderService.GetJob .
name
str
Required. The name of the job to retrieve. Format: projects/{project}/locations/{location}/jobs/{job} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.transcoder_v1.types.Job
Transcoding job resource.
get_job_template
get_job_template (
request : typing . Optional [
typing . Union [
google . cloud . video . transcoder_v1 . types . services . GetJobTemplateRequest , dict
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
) - > google . cloud . video . transcoder_v1 . types . resources . JobTemplate
Returns the job template data.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import transcoder_v1
async def sample_get_job_template():
# Create a client
client = transcoder_v1 . TranscoderServiceAsyncClient ()
# Initialize request argument(s)
request = transcoder_v1 . GetJobTemplateRequest (
name="name_value",
)
# Make the request
response = await client. get_job_template (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.video.transcoder_v1.types.GetJobTemplateRequest , dict]]
The request object. Request message for TranscoderService.GetJobTemplate .
name
str
Required. The name of the job template to retrieve. Format: projects/{project}/locations/{location}/jobTemplates/{job_template} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.transcoder_v1.types.JobTemplate
Transcoding job template resource.
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
google . cloud . video . transcoder_v1 . services . transcoder_service . transports . base . TranscoderServiceTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
job_path
job_path ( project : str , location : str , job : str ) - > str
Returns a fully-qualified job string.
job_template_path
job_template_path ( project : str , location : str , job_template : str ) - > str
Returns a fully-qualified job_template string.
list_job_templates
list_job_templates (
request : typing . Optional [
typing . Union [
google . cloud . video . transcoder_v1 . types . services . ListJobTemplatesRequest ,
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
google . cloud . video . transcoder_v1 . services . transcoder_service . pagers . ListJobTemplatesAsyncPager
)
Lists job templates in the specified region.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import transcoder_v1
async def sample_list_job_templates():
# Create a client
client = transcoder_v1 . TranscoderServiceAsyncClient ()
# Initialize request argument(s)
request = transcoder_v1 . ListJobTemplatesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_job_templates (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.video.transcoder_v1.types.ListJobTemplatesRequest , dict]]
The request object. Request message for TranscoderService.ListJobTemplates .
parent
str
Required. The parent location from which to retrieve the collection of job templates. Format: projects/{project}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.transcoder_v1.services.transcoder_service.pagers.ListJobTemplatesAsyncPager
Response message for TranscoderService.ListJobTemplates. Iterating over this object will yield results and resolve additional pages automatically.
list_jobs
list_jobs (
request : typing . Optional [
typing . Union [
google . cloud . video . transcoder_v1 . types . services . ListJobsRequest , dict
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
google . cloud . video . transcoder_v1 . services . transcoder_service . pagers . ListJobsAsyncPager
)
Lists jobs in the specified region.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud.video import transcoder_v1
async def sample_list_jobs():
# Create a client
client = transcoder_v1 . TranscoderServiceAsyncClient ()
# Initialize request argument(s)
request = transcoder_v1 . ListJobsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_jobs (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.video.transcoder_v1.types.ListJobsRequest , dict]]
The request object. Request message for TranscoderService.ListJobs . The parent location from which to retrieve the collection of jobs.
parent
str
Required. Format: projects/{project}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.video.transcoder_v1.services.transcoder_service.pagers.ListJobsAsyncPager
Response message for TranscoderService.ListJobs. Iterating over this object will yield results and resolve additional pages automatically.
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
parse_job_path
parse_job_path ( path : str ) - > typing . Dict [ str , str ]
Parses a job path into its component segments.
parse_job_template_path
parse_job_template_path ( path : str ) - > typing . Dict [ str , str ]
Parses a job_template path into its component segments.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
