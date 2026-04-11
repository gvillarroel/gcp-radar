---
title: "Class CloudSchedulerClient (2.19.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerClient
  title: "Class CloudSchedulerClient (2.19.0) \_|\_ Python client libraries \_|\_\
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
Class CloudSchedulerClient (2.19.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.19.0 (latest)
2.18.0
2.17.0
2.16.0
2.15.1
2.14.1
2.13.5
2.12.0
2.11.3
2.10.0
2.9.1
2.8.0
2.7.3
2.6.4
2.5.1
2.4.0
2.3.4
2.2.0
2.1.1
2.0.0
1.3.2
1.2.1
CloudSchedulerClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . scheduler_v1 . services . cloud_scheduler . transports . base . CloudSchedulerTransport ,
typing . Callable [
[ ... ],
google . cloud . scheduler_v1 . services . cloud_scheduler . transports . base . CloudSchedulerTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
The Cloud Scheduler API allows external entities to reliably
schedule asynchronous jobs.
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
CloudSchedulerTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
CloudSchedulerClient
CloudSchedulerClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . scheduler_v1 . services . cloud_scheduler . transports . base . CloudSchedulerTransport ,
typing . Callable [
[ ... ],
google . cloud . scheduler_v1 . services . cloud_scheduler . transports . base . CloudSchedulerTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the cloud scheduler client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,CloudSchedulerTransport,Callable[..., CloudSchedulerTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the CloudSchedulerTransport constructor. If set to None, a transport is chosen automatically.
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
google . cloud . scheduler_v1 . types . cloudscheduler . CreateJobRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
job : typing . Optional [ google . cloud . scheduler_v1 . types . job . Job ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . scheduler_v1 . types . job . Job
Creates a job.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import scheduler_v1
def sample_create_job():
# Create a client
client = scheduler_v1 . CloudSchedulerClient ()
# Initialize request argument(s)
request = scheduler_v1 . CreateJobRequest (
parent="parent_value",
)
# Make the request
response = client. create_job (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.scheduler_v1.types.CreateJobRequest , dict]
The request object. Request message for CreateJob .
parent
str
Required. The location name. For example: projects/PROJECT_ID/locations/LOCATION_ID . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
job
google.cloud.scheduler_v1.types.Job
Required. The job to add. The user can optionally specify a name for the job in name . name cannot be the same as an existing job. If a name is not specified then the system will generate a random unique name that will be returned ( name ) in the response. This corresponds to the job field on the request instance; if request is provided, this should not be set.
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
google.cloud.scheduler_v1.types.Job
Configuration for a job. The maximum allowed size for a job is 1MB.
delete_job
delete_job (
request : typing . Optional [
typing . Union [
google . cloud . scheduler_v1 . types . cloudscheduler . DeleteJobRequest , dict
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
Deletes a job.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import scheduler_v1
def sample_delete_job():
# Create a client
client = scheduler_v1 . CloudSchedulerClient ()
# Initialize request argument(s)
request = scheduler_v1 . DeleteJobRequest (
name="name_value",
)
# Make the request
client. delete_job (request=request)
Parameters
Name
Description
request
Union[ google.cloud.scheduler_v1.types.DeleteJobRequest , dict]
The request object. Request message for deleting a job using DeleteJob .
name
str
Required. The job name. For example: projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
CloudSchedulerClient
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
CloudSchedulerClient
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
CloudSchedulerClient
The constructed client.
get_job
get_job (
request : typing . Optional [
typing . Union [ google . cloud . scheduler_v1 . types . cloudscheduler . GetJobRequest , dict ]
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
) - > google . cloud . scheduler_v1 . types . job . Job
Gets a job.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import scheduler_v1
def sample_get_job():
# Create a client
client = scheduler_v1 . CloudSchedulerClient ()
# Initialize request argument(s)
request = scheduler_v1 . GetJobRequest (
name="name_value",
)
# Make the request
response = client. get_job (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.scheduler_v1.types.GetJobRequest , dict]
The request object. Request message for GetJob .
name
str
Required. The job name. For example: projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.scheduler_v1.types.Job
Configuration for a job. The maximum allowed size for a job is 1MB.
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
job_path
job_path ( project : str , location : str , job : str ) - > str
Returns a fully-qualified job string.
list_jobs
list_jobs (
request : typing . Optional [
typing . Union [
google . cloud . scheduler_v1 . types . cloudscheduler . ListJobsRequest , dict
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
) - > google . cloud . scheduler_v1 . services . cloud_scheduler . pagers . ListJobsPager
Lists jobs.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import scheduler_v1
def sample_list_jobs():
# Create a client
client = scheduler_v1 . CloudSchedulerClient ()
# Initialize request argument(s)
request = scheduler_v1 . ListJobsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_jobs (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.scheduler_v1.types.ListJobsRequest , dict]
The request object. Request message for listing jobs using ListJobs .
parent
str
Required. The location name. For example: projects/PROJECT_ID/locations/LOCATION_ID . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.scheduler_v1.services.cloud_scheduler.pagers.ListJobsPager
Response message for listing jobs using ListJobs . Iterating over this object will yield results and resolve additional pages automatically.
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
parse_topic_path
parse_topic_path ( path : str ) - > typing . Dict [ str , str ]
Parses a topic path into its component segments.
pause_job
pause_job (
request : typing . Optional [
typing . Union [
google . cloud . scheduler_v1 . types . cloudscheduler . PauseJobRequest , dict
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
) - > google . cloud . scheduler_v1 . types . job . Job
Pauses a job.
If a job is paused then the system will stop executing the job
until it is re-enabled via
xref_ResumeJob.
The state of the job is stored in
xref_state; if paused it will
be set to
xref_Job.State.PAUSED.
A job must be in
xref_Job.State.ENABLED
to be paused.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import scheduler_v1
def sample_pause_job():
# Create a client
client = scheduler_v1 . CloudSchedulerClient ()
# Initialize request argument(s)
request = scheduler_v1 . PauseJobRequest (
name="name_value",
)
# Make the request
response = client. pause_job (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.scheduler_v1.types.PauseJobRequest , dict]
The request object. Request message for PauseJob .
name
str
Required. The job name. For example: projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.scheduler_v1.types.Job
Configuration for a job. The maximum allowed size for a job is 1MB.
resume_job
resume_job (
request : typing . Optional [
typing . Union [
google . cloud . scheduler_v1 . types . cloudscheduler . ResumeJobRequest , dict
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
) - > google . cloud . scheduler_v1 . types . job . Job
Resume a job.
This method reenables a job after it has been
xref_Job.State.PAUSED.
The state of a job is stored in
xref_Job.state; after calling
this method it will be set to
xref_Job.State.ENABLED.
A job must be in
xref_Job.State.PAUSED
to be resumed.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import scheduler_v1
def sample_resume_job():
# Create a client
client = scheduler_v1 . CloudSchedulerClient ()
# Initialize request argument(s)
request = scheduler_v1 . ResumeJobRequest (
name="name_value",
)
# Make the request
response = client. resume_job (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.scheduler_v1.types.ResumeJobRequest , dict]
The request object. Request message for ResumeJob .
name
str
Required. The job name. For example: projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.scheduler_v1.types.Job
Configuration for a job. The maximum allowed size for a job is 1MB.
run_job
run_job (
request : typing . Optional [
typing . Union [ google . cloud . scheduler_v1 . types . cloudscheduler . RunJobRequest , dict ]
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
) - > google . cloud . scheduler_v1 . types . job . Job
Forces a job to run now.
When this method is called, Cloud Scheduler will
dispatch the job, even if the job is already running.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import scheduler_v1
def sample_run_job():
# Create a client
client = scheduler_v1 . CloudSchedulerClient ()
# Initialize request argument(s)
request = scheduler_v1 . RunJobRequest (
name="name_value",
)
# Make the request
response = client. run_job (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.scheduler_v1.types.RunJobRequest , dict]
The request object. Request message for forcing a job to run now using RunJob .
name
str
Required. The job name. For example: projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.scheduler_v1.types.Job
Configuration for a job. The maximum allowed size for a job is 1MB.
topic_path
topic_path ( project : str , topic : str ) - > str
Returns a fully-qualified topic string.
update_job
update_job (
request : typing . Optional [
typing . Union [
google . cloud . scheduler_v1 . types . cloudscheduler . UpdateJobRequest , dict
]
] = None ,
* ,
job : typing . Optional [ google . cloud . scheduler_v1 . types . job . Job ] = None ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . scheduler_v1 . types . job . Job
Updates a job.
If successful, the updated xref_Job
is returned. If the job does not exist, NOT_FOUND is
returned.
If UpdateJob does not successfully return, it is possible for
the job to be in an
xref_Job.State.UPDATE_FAILED
state. A job in this state may not be executed. If this happens,
retry the UpdateJob request until a successful response is
received.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import scheduler_v1
def sample_update_job():
# Create a client
client = scheduler_v1 . CloudSchedulerClient ()
# Initialize request argument(s)
request = scheduler_v1 . UpdateJobRequest (
)
# Make the request
response = client. update_job (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.scheduler_v1.types.UpdateJobRequest , dict]
The request object. Request message for UpdateJob .
job
google.cloud.scheduler_v1.types.Job
Required. The new job properties. name must be specified. Output only fields cannot be modified using UpdateJob. Any value specified for an output only field will be ignored. This corresponds to the job field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
A mask used to specify which fields of the job are being updated. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.scheduler_v1.types.Job
Configuration for a job. The maximum allowed size for a job is 1MB.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
