---
title: "Class AuditManagerAsyncClient (0.1.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerAsyncClient
  title: "Class AuditManagerAsyncClient (0.1.0) \_|\_ Python client libraries \_|\_\
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
Class AuditManagerAsyncClient (0.1.0)
Stay organized with collections
Save and categorize content based on your preferences.
AuditManagerAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . auditmanager_v1 . services . audit_manager . transports . base . AuditManagerTransport ,
typing . Callable [
[ ... ],
google . cloud . auditmanager_v1 . services . audit_manager . transports . base . AuditManagerTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Service describing handlers for resources
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
AuditManagerTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
AuditManagerAsyncClient
AuditManagerAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . auditmanager_v1 . services . audit_manager . transports . base . AuditManagerTransport ,
typing . Callable [
[ ... ],
google . cloud . auditmanager_v1 . services . audit_manager . transports . base . AuditManagerTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the audit manager async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,AuditManagerTransport,Callable[..., AuditManagerTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the AuditManagerTransport constructor. If set to None, a transport is chosen automatically.
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
audit_report_path
audit_report_path ( project : str , location : str , audit_report : str ) - > str
Returns a fully-qualified audit_report string.
audit_scope_report_path
audit_scope_report_path (
project : str , location : str , audit_scope_report : str
) - > str
Returns a fully-qualified audit_scope_report string.
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
enroll_resource
enroll_resource (
request : typing . Optional [
typing . Union [
google . cloud . auditmanager_v1 . types . auditmanager . EnrollResourceRequest , dict
]
] = None ,
* ,
scope : typing . Optional [ str ] = None ,
destinations : typing . Optional [
typing . MutableSequence [
google . cloud . auditmanager_v1 . types . auditmanager . EnrollResourceRequest . EligibleDestination
]
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . auditmanager_v1 . types . auditmanager . Enrollment
Enrolls the customer
resource(folder/project/organization) to the audit
manager service by creating the audit managers Service
Agent in customers workload and granting required
permissions to the Service Agent. Please note that if
enrollment request is made on the already enrolled
workload then enrollment is executed overriding the
existing set of destinations.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import auditmanager_v1
async def sample_enroll_resource():
# Create a client
client = auditmanager_v1 . AuditManagerAsyncClient ()
# Initialize request argument(s)
destinations = auditmanager_v1 . EligibleDestination ()
destinations.eligible_gcs_bucket = "eligible_gcs_bucket_value"
request = auditmanager_v1 . EnrollResourceRequest (
scope="scope_value",
destinations=destinations,
)
# Make the request
response = await client. enroll_resource (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.auditmanager_v1.types.EnrollResourceRequest , dict]]
The request object. Request message to subscribe the Audit Manager service for given resource.
scope
str
Required. The resource to be enrolled to the audit manager. Scope format should be resource_type/resource_identifier Eg: projects/{project}/locations/{location}, folders/{folder}/locations/{location} organizations/{organization}/locations/{location} This corresponds to the scope field on the request instance; if request is provided, this should not be set.
destinations
:class: MutableSequence[ google.cloud.auditmanager_v1.types.EnrollResourceRequest.EligibleDestination ]
Required. List of destination among which customer can choose to upload their reports during the audit process. While enrolling at a organization/folder level, customer can choose Cloud storage bucket in any project. If the audit is triggered at project level using the service agent at organization/folder level, all the destination options associated with respective organization/folder level service agent will be available to auditing projects. This corresponds to the destinations field on the request instance; if request is provided, this should not be set.
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
google.cloud.auditmanager_v1.types.Enrollment
The enrollment resource.
enrollment_path
enrollment_path ( project : str , location : str , enrollment : str ) - > str
Returns a fully-qualified enrollment string.
enrollment_status_scope_path
enrollment_status_scope_path ( folder : str , location : str ) - > str
Returns a fully-qualified enrollment_status_scope string.
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
AuditManagerAsyncClient
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
AuditManagerAsyncClient
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
AuditManagerAsyncClient
The constructed client.
generate_audit_report
generate_audit_report (
request : typing . Optional [
typing . Union [
google . cloud . auditmanager_v1 . types . auditmanager . GenerateAuditReportRequest ,
dict ,
]
] = None ,
* ,
scope : typing . Optional [ str ] = None ,
gcs_uri : typing . Optional [ str ] = None ,
compliance_standard : typing . Optional [ str ] = None ,
report_format : typing . Optional [
google . cloud . auditmanager_v1 . types . auditmanager . GenerateAuditReportRequest . AuditReportFormat
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
Register the Audit Report generation requests and
returns the OperationId using which the customer can
track the report generation progress.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import auditmanager_v1
async def sample_generate_audit_report():
# Create a client
client = auditmanager_v1 . AuditManagerAsyncClient ()
# Initialize request argument(s)
request = auditmanager_v1 . GenerateAuditReportRequest (
gcs_uri="gcs_uri_value",
scope="scope_value",
compliance_standard="compliance_standard_value",
report_format="AUDIT_REPORT_FORMAT_ODF",
compliance_framework="compliance_framework_value",
)
# Make the request
operation = client. generate_audit_report (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.auditmanager_v1.types.GenerateAuditReportRequest , dict]]
The request object. Message for requesting the Audit Report.
scope
str
Required. Scope for which the AuditScopeReport is required. Must be of format resource_type/resource_identifier Eg: projects/{project}/locations/{location}, folders/{folder}/locations/{location} This corresponds to the scope field on the request instance; if request is provided, this should not be set.
gcs_uri
str
Destination Cloud storage bucket where report and evidence must be uploaded. The Cloud storage bucket provided here must be selected among the buckets entered during the enrollment process. This corresponds to the gcs_uri field on the request instance; if request is provided, this should not be set.
compliance_standard
str
Required. Compliance Standard against which the Scope Report must be generated. Eg: FEDRAMP_MODERATE This corresponds to the compliance_standard field on the request instance; if request is provided, this should not be set.
report_format
AuditReportFormat
Required. The format in which the audit report should be created. This corresponds to the report_format field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be AuditReport An audit report.
generate_audit_scope_report
generate_audit_scope_report (
request : typing . Optional [
typing . Union [
google . cloud . auditmanager_v1 . types . auditmanager . GenerateAuditScopeReportRequest ,
dict ,
]
] = None ,
* ,
scope : typing . Optional [ str ] = None ,
compliance_standard : typing . Optional [ str ] = None ,
report_format : typing . Optional [
google . cloud . auditmanager_v1 . types . auditmanager . GenerateAuditScopeReportRequest . AuditScopeReportFormat
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . auditmanager_v1 . types . auditmanager . AuditScopeReport
Generates a demo report highlighting different
responsibilities (Google/Customer/ shared) required to
be fulfilled for the customer's workload to be compliant
with the given standard.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import auditmanager_v1
async def sample_generate_audit_scope_report():
# Create a client
client = auditmanager_v1 . AuditManagerAsyncClient ()
# Initialize request argument(s)
request = auditmanager_v1 . GenerateAuditScopeReportRequest (
scope="scope_value",
compliance_standard="compliance_standard_value",
report_format="AUDIT_SCOPE_REPORT_FORMAT_ODF",
compliance_framework="compliance_framework_value",
)
# Make the request
response = await client. generate_audit_scope_report (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.auditmanager_v1.types.GenerateAuditScopeReportRequest , dict]]
The request object. Message for requesting audit scope report.
scope
str
Required. Scope for which the AuditScopeReport is required. Must be of format resource_type/resource_identifier Eg: projects/{project}/locations/{location}, folders/{folder}/locations/{location} This corresponds to the scope field on the request instance; if request is provided, this should not be set.
compliance_standard
str
Required. Compliance Standard against which the Scope Report must be generated. Eg: FEDRAMP_MODERATE This corresponds to the compliance_standard field on the request instance; if request is provided, this should not be set.
report_format
AuditScopeReportFormat
Required. The format in which the Scope report bytes should be returned. This corresponds to the report_format field on the request instance; if request is provided, this should not be set.
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
google.cloud.auditmanager_v1.types.AuditScopeReport
The audit scope report.
get_audit_report
get_audit_report (
request : typing . Optional [
typing . Union [
google . cloud . auditmanager_v1 . types . auditmanager . GetAuditReportRequest , dict
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
) - > google . cloud . auditmanager_v1 . types . auditmanager . AuditReport
Get the overall audit report
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import auditmanager_v1
async def sample_get_audit_report():
# Create a client
client = auditmanager_v1 . AuditManagerAsyncClient ()
# Initialize request argument(s)
request = auditmanager_v1 . GetAuditReportRequest (
name="name_value",
)
# Make the request
response = await client. get_audit_report (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.auditmanager_v1.types.GetAuditReportRequest , dict]]
The request object. Message for requesting the overall audit report for an audit report name.
name
str
Required. Format projects/{project}/locations/{location}/auditReports/{audit_report}, folders/{folder}/locations/{location}/auditReports/{audit_report} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.auditmanager_v1.types.AuditReport
An audit report.
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
get_resource_enrollment_status
get_resource_enrollment_status (
request : typing . Optional [
typing . Union [
google . cloud . auditmanager_v1 . types . auditmanager . GetResourceEnrollmentStatusRequest ,
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
) - > google . cloud . auditmanager_v1 . types . auditmanager . ResourceEnrollmentStatus
Get a resource along with its enrollment status.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import auditmanager_v1
async def sample_get_resource_enrollment_status():
# Create a client
client = auditmanager_v1 . AuditManagerAsyncClient ()
# Initialize request argument(s)
request = auditmanager_v1 . GetResourceEnrollmentStatusRequest (
name="name_value",
)
# Make the request
response = await client. get_resource_enrollment_status (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.auditmanager_v1.types.GetResourceEnrollmentStatusRequest , dict]]
The request object. Message for getting the enrollment status of a resource.
name
str
Required. Format folders/{folder}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}, projects/{project}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status}, organizations/{organization}/locations/{location}/resourceEnrollmentStatuses/{resource_enrollment_status} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.auditmanager_v1.types.ResourceEnrollmentStatus
A resource with its enrollment status.
get_transport_class
get_transport_class (
label : typing . Optional [ str ] = None ,
) - > typing . Type [
google . cloud . auditmanager_v1 . services . audit_manager . transports . base . AuditManagerTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
list_audit_reports
list_audit_reports (
request : typing . Optional [
typing . Union [
google . cloud . auditmanager_v1 . types . auditmanager . ListAuditReportsRequest ,
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
google . cloud . auditmanager_v1 . services . audit_manager . pagers . ListAuditReportsAsyncPager
)
Lists audit reports in the selected parent scope
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import auditmanager_v1
async def sample_list_audit_reports():
# Create a client
client = auditmanager_v1 . AuditManagerAsyncClient ()
# Initialize request argument(s)
request = auditmanager_v1 . ListAuditReportsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_audit_reports (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.auditmanager_v1.types.ListAuditReportsRequest , dict]]
The request object. Message for requesting to list the audit reports.
parent
str
Required. The parent scope for which to list the reports. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.auditmanager_v1.services.audit_manager.pagers.ListAuditReportsAsyncPager
Response message with all the audit reports. Iterating over this object will yield results and resolve additional pages automatically.
list_controls
list_controls (
request : typing . Optional [
typing . Union [
google . cloud . auditmanager_v1 . types . auditmanager . ListControlsRequest , dict
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
) - > google . cloud . auditmanager_v1 . services . audit_manager . pagers . ListControlsAsyncPager
Gets controls needed to be implemented to be
compliant to a standard.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import auditmanager_v1
async def sample_list_controls():
# Create a client
client = auditmanager_v1 . AuditManagerAsyncClient ()
# Initialize request argument(s)
request = auditmanager_v1 . ListControlsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_controls (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.auditmanager_v1.types.ListControlsRequest , dict]]
The request object. Message for requesting all the controls for a compliance standard.
parent
str
Required. Format projects/{project}/locations/{location}/standards/{standard}, folders/{folder}/locations/{location}/standards/{standard} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.auditmanager_v1.services.audit_manager.pagers.ListControlsAsyncPager
Response message with all the controls for a compliance standard. Iterating over this object will yield results and resolve additional pages automatically.
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
list_resource_enrollment_statuses
list_resource_enrollment_statuses (
request : typing . Optional [
typing . Union [
google . cloud . auditmanager_v1 . types . auditmanager . ListResourceEnrollmentStatusesRequest ,
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
google . cloud . auditmanager_v1 . services . audit_manager . pagers . ListResourceEnrollmentStatusesAsyncPager
)
Fetches all resources under the parent along with
their enrollment.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import auditmanager_v1
async def sample_list_resource_enrollment_statuses():
# Create a client
client = auditmanager_v1 . AuditManagerAsyncClient ()
# Initialize request argument(s)
request = auditmanager_v1 . ListResourceEnrollmentStatusesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_resource_enrollment_statuses (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.auditmanager_v1.types.ListResourceEnrollmentStatusesRequest , dict]]
The request object. Message for listing all the descendent resources under parent with enrollment.
parent
str
Required. The parent scope for which the list of resources with enrollments are required. This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.auditmanager_v1.services.audit_manager.pagers.ListResourceEnrollmentStatusesAsyncPager
Response message with all the descendent resources with enrollment. Iterating over this object will yield results and resolve additional pages automatically.
parse_audit_report_path
parse_audit_report_path ( path : str ) - > typing . Dict [ str , str ]
Parses a audit_report path into its component segments.
parse_audit_scope_report_path
parse_audit_scope_report_path ( path : str ) - > typing . Dict [ str , str ]
Parses a audit_scope_report path into its component segments.
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
parse_enrollment_path
parse_enrollment_path ( path : str ) - > typing . Dict [ str , str ]
Parses a enrollment path into its component segments.
parse_enrollment_status_scope_path
parse_enrollment_status_scope_path ( path : str ) - > typing . Dict [ str , str ]
Parses a enrollment_status_scope path into its component segments.
parse_resource_enrollment_status_path
parse_resource_enrollment_status_path ( path : str ) - > typing . Dict [ str , str ]
Parses a resource_enrollment_status path into its component segments.
parse_standard_path
parse_standard_path ( path : str ) - > typing . Dict [ str , str ]
Parses a standard path into its component segments.
resource_enrollment_status_path
resource_enrollment_status_path (
folder : str , location : str , resource_enrollment_status : str
) - > str
Returns a fully-qualified resource_enrollment_status string.
standard_path
standard_path ( project : str , location : str , standard : str ) - > str
Returns a fully-qualified standard string.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
