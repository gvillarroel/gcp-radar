---
title: "Class EnterpriseKnowledgeGraphServiceAsyncClient (0.6.0) \_|\_ Python client\
  \ libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.services.enterprise_knowledge_graph_service.EnterpriseKnowledgeGraphServiceAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.services.enterprise_knowledge_graph_service.EnterpriseKnowledgeGraphServiceAsyncClient
  title: "Class EnterpriseKnowledgeGraphServiceAsyncClient (0.6.0) \_|\_ Python client\
    \ libraries \_|\_ Google Cloud Documentation"
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
Class EnterpriseKnowledgeGraphServiceAsyncClient (0.6.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.6.0 (latest)
0.5.0
0.4.0
0.3.17
0.2.1
0.1.0
EnterpriseKnowledgeGraphServiceAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . enterpriseknowledgegraph_v1 . services . enterprise_knowledge_graph_service . transports . base . EnterpriseKnowledgeGraphServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . enterpriseknowledgegraph_v1 . services . enterprise_knowledge_graph_service . transports . base . EnterpriseKnowledgeGraphServiceTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
APIs for enterprise knowledge graph product.
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
EnterpriseKnowledgeGraphServiceTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
EnterpriseKnowledgeGraphServiceAsyncClient
EnterpriseKnowledgeGraphServiceAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . enterpriseknowledgegraph_v1 . services . enterprise_knowledge_graph_service . transports . base . EnterpriseKnowledgeGraphServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . enterpriseknowledgegraph_v1 . services . enterprise_knowledge_graph_service . transports . base . EnterpriseKnowledgeGraphServiceTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the enterprise knowledge graph service async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,EnterpriseKnowledgeGraphServiceTransport,Callable[..., EnterpriseKnowledgeGraphServiceTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the EnterpriseKnowledgeGraphServiceTransport constructor. If set to None, a transport is chosen automatically.
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
cancel_entity_reconciliation_job
cancel_entity_reconciliation_job (
request : typing . Optional [
typing . Union [
google . cloud . enterpriseknowledgegraph_v1 . types . service . CancelEntityReconciliationJobRequest ,
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
Cancels a EntityReconciliationJob. Success of
cancellation is not guaranteed.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import enterpriseknowledgegraph_v1
async def sample_cancel_entity_reconciliation_job():
# Create a client
client = enterpriseknowledgegraph_v1 . EnterpriseKnowledgeGraphServiceAsyncClient ()
# Initialize request argument(s)
request = enterpriseknowledgegraph_v1 . CancelEntityReconciliationJobRequest (
name="name_value",
)
# Make the request
await client. cancel_entity_reconciliation_job (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.enterpriseknowledgegraph_v1.types.CancelEntityReconciliationJobRequest , dict]]
The request object. Request message for CancelEntityReconciliationJob.
name
str
Required. The name of the EntityReconciliationJob resource. Format: projects/{project}/locations/{location}/entityReconciliationJobs/{entity_reconciliation_job} This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
cloud_knowledge_graph_entity_path
cloud_knowledge_graph_entity_path (
project : str , location : str , cloud_knowledge_graph_entity : str
) - > str
Returns a fully-qualified cloud_knowledge_graph_entity string.
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
create_entity_reconciliation_job
create_entity_reconciliation_job (
request : typing . Optional [
typing . Union [
google . cloud . enterpriseknowledgegraph_v1 . types . service . CreateEntityReconciliationJobRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
entity_reconciliation_job : typing . Optional [
google . cloud . enterpriseknowledgegraph_v1 . types . service . EntityReconciliationJob
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . enterpriseknowledgegraph_v1 . types . service . EntityReconciliationJob
Creates a EntityReconciliationJob. A
EntityReconciliationJob once created will right away be
attempted to start.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import enterpriseknowledgegraph_v1
async def sample_create_entity_reconciliation_job():
# Create a client
client = enterpriseknowledgegraph_v1 . EnterpriseKnowledgeGraphServiceAsyncClient ()
# Initialize request argument(s)
request = enterpriseknowledgegraph_v1 . CreateEntityReconciliationJobRequest (
parent="parent_value",
)
# Make the request
response = await client. create_entity_reconciliation_job (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.enterpriseknowledgegraph_v1.types.CreateEntityReconciliationJobRequest , dict]]
The request object. Request message for CreateEntityReconciliationJob.
parent
str
Required. The resource name of the Location to create the EntityReconciliationJob in. Format: projects/{project}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
entity_reconciliation_job
EntityReconciliationJob
Required. The EntityReconciliationJob to create. This corresponds to the entity_reconciliation_job field on the request instance; if request is provided, this should not be set.
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
google.cloud.enterpriseknowledgegraph_v1.types.EntityReconciliationJob
Entity reconciliation job message.
dataset_path
dataset_path ( project : str , dataset : str ) - > str
Returns a fully-qualified dataset string.
delete_entity_reconciliation_job
delete_entity_reconciliation_job (
request : typing . Optional [
typing . Union [
google . cloud . enterpriseknowledgegraph_v1 . types . service . DeleteEntityReconciliationJobRequest ,
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
Deletes a EntityReconciliationJob.
It only deletes the job when the job state is in FAILED,
SUCCEEDED, and CANCELLED.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import enterpriseknowledgegraph_v1
async def sample_delete_entity_reconciliation_job():
# Create a client
client = enterpriseknowledgegraph_v1 . EnterpriseKnowledgeGraphServiceAsyncClient ()
# Initialize request argument(s)
request = enterpriseknowledgegraph_v1 . DeleteEntityReconciliationJobRequest (
name="name_value",
)
# Make the request
await client. delete_entity_reconciliation_job (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.enterpriseknowledgegraph_v1.types.DeleteEntityReconciliationJobRequest , dict]]
The request object. Request message for DeleteEntityReconciliationJob.
name
str
Required. The name of the EntityReconciliationJob resource. Format: projects/{project}/locations/{location}/entityReconciliationJobs/{entity_reconciliation_job} This corresponds to the name field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry_async.AsyncRetry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
entity_reconciliation_job_path
entity_reconciliation_job_path (
project : str , location : str , entity_reconciliation_job : str
) - > str
Returns a fully-qualified entity_reconciliation_job string.
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
EnterpriseKnowledgeGraphServiceAsyncClient
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
EnterpriseKnowledgeGraphServiceAsyncClient
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
EnterpriseKnowledgeGraphServiceAsyncClient
The constructed client.
get_entity_reconciliation_job
get_entity_reconciliation_job (
request : typing . Optional [
typing . Union [
google . cloud . enterpriseknowledgegraph_v1 . types . service . GetEntityReconciliationJobRequest ,
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
) - > google . cloud . enterpriseknowledgegraph_v1 . types . service . EntityReconciliationJob
Gets a EntityReconciliationJob.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import enterpriseknowledgegraph_v1
async def sample_get_entity_reconciliation_job():
# Create a client
client = enterpriseknowledgegraph_v1 . EnterpriseKnowledgeGraphServiceAsyncClient ()
# Initialize request argument(s)
request = enterpriseknowledgegraph_v1 . GetEntityReconciliationJobRequest (
name="name_value",
)
# Make the request
response = await client. get_entity_reconciliation_job (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.enterpriseknowledgegraph_v1.types.GetEntityReconciliationJobRequest , dict]]
The request object. Request message for GetEntityReconciliationJob.
name
str
Required. The name of the EntityReconciliationJob resource. Format: projects/{project}/locations/{location}/entityReconciliationJobs/{entity_reconciliation_job} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.enterpriseknowledgegraph_v1.types.EntityReconciliationJob
Entity reconciliation job message.
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
google . cloud . enterpriseknowledgegraph_v1 . services . enterprise_knowledge_graph_service . transports . base . EnterpriseKnowledgeGraphServiceTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
list_entity_reconciliation_jobs
list_entity_reconciliation_jobs (
request : typing . Optional [
typing . Union [
google . cloud . enterpriseknowledgegraph_v1 . types . service . ListEntityReconciliationJobsRequest ,
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
google . cloud . enterpriseknowledgegraph_v1 . services . enterprise_knowledge_graph_service . pagers . ListEntityReconciliationJobsAsyncPager
)
Lists Entity Reconciliation Jobs.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import enterpriseknowledgegraph_v1
async def sample_list_entity_reconciliation_jobs():
# Create a client
client = enterpriseknowledgegraph_v1 . EnterpriseKnowledgeGraphServiceAsyncClient ()
# Initialize request argument(s)
request = enterpriseknowledgegraph_v1 . ListEntityReconciliationJobsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_entity_reconciliation_jobs (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.enterpriseknowledgegraph_v1.types.ListEntityReconciliationJobsRequest , dict]]
The request object. Request message for EnterpriseKnowledgeGraphService.ListEntityReconciliationJobs .
parent
str
Required. The name of the EntityReconciliationJob's parent resource. Format: projects/{project}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.enterpriseknowledgegraph_v1.services.enterprise_knowledge_graph_service.pagers.ListEntityReconciliationJobsAsyncPager
Response message for EnterpriseKnowledgeGraphService.ListEntityReconciliationJobs . Iterating over this object will yield results and resolve additional pages automatically.
lookup
lookup (
request : typing . Optional [
typing . Union [
google . cloud . enterpriseknowledgegraph_v1 . types . service . LookupRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
ids : typing . Optional [ typing . MutableSequence [ str ]] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . enterpriseknowledgegraph_v1 . types . service . LookupResponse
Finds the Cloud KG entities with CKG ID(s).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import enterpriseknowledgegraph_v1
async def sample_lookup():
# Create a client
client = enterpriseknowledgegraph_v1 . EnterpriseKnowledgeGraphServiceAsyncClient ()
# Initialize request argument(s)
request = enterpriseknowledgegraph_v1 . LookupRequest (
parent="parent_value",
ids=['ids_value1', 'ids_value2'],
)
# Make the request
response = await client. lookup (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.enterpriseknowledgegraph_v1.types.LookupRequest , dict]]
The request object. Request message for EnterpriseKnowledgeGraphService.Lookup .
parent
str
Required. The name of the Entity's parent resource. Format: projects/{project}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
ids
:class: MutableSequence[str]
Required. The list of entity ids to be used for lookup. This corresponds to the ids field on the request instance; if request is provided, this should not be set.
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
google.cloud.enterpriseknowledgegraph_v1.types.LookupResponse
Response message for EnterpriseKnowledgeGraphService.Lookup .
lookup_public_kg
lookup_public_kg (
request : typing . Optional [
typing . Union [
google . cloud . enterpriseknowledgegraph_v1 . types . service . LookupPublicKgRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
ids : typing . Optional [ typing . MutableSequence [ str ]] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . enterpriseknowledgegraph_v1 . types . service . LookupPublicKgResponse
Finds the public KG entities with public KG ID(s).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import enterpriseknowledgegraph_v1
async def sample_lookup_public_kg():
# Create a client
client = enterpriseknowledgegraph_v1 . EnterpriseKnowledgeGraphServiceAsyncClient ()
# Initialize request argument(s)
request = enterpriseknowledgegraph_v1 . LookupPublicKgRequest (
parent="parent_value",
ids=['ids_value1', 'ids_value2'],
)
# Make the request
response = await client. lookup_public_kg (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.enterpriseknowledgegraph_v1.types.LookupPublicKgRequest , dict]]
The request object. Request message for EnterpriseKnowledgeGraphService.LookupPublicKg .
parent
str
Required. The name of the Entity's parent resource. Format: projects/{project}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
ids
:class: MutableSequence[str]
Required. The list of entity ids to be used for lookup. This corresponds to the ids field on the request instance; if request is provided, this should not be set.
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
google.cloud.enterpriseknowledgegraph_v1.types.LookupPublicKgResponse
Response message for EnterpriseKnowledgeGraphService.LookupPublicKg .
parse_cloud_knowledge_graph_entity_path
parse_cloud_knowledge_graph_entity_path ( path : str ) - > typing . Dict [ str , str ]
Parses a cloud_knowledge_graph_entity path into its component segments.
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
parse_dataset_path
parse_dataset_path ( path : str ) - > typing . Dict [ str , str ]
Parses a dataset path into its component segments.
parse_entity_reconciliation_job_path
parse_entity_reconciliation_job_path ( path : str ) - > typing . Dict [ str , str ]
Parses a entity_reconciliation_job path into its component segments.
parse_public_knowledge_graph_entity_path
parse_public_knowledge_graph_entity_path ( path : str ) - > typing . Dict [ str , str ]
Parses a public_knowledge_graph_entity path into its component segments.
parse_table_path
parse_table_path ( path : str ) - > typing . Dict [ str , str ]
Parses a table path into its component segments.
public_knowledge_graph_entity_path
public_knowledge_graph_entity_path (
project : str , location : str , public_knowledge_graph_entity : str
) - > str
Returns a fully-qualified public_knowledge_graph_entity string.
search
search (
request : typing . Optional [
typing . Union [
google . cloud . enterpriseknowledgegraph_v1 . types . service . SearchRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
query : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . enterpriseknowledgegraph_v1 . types . service . SearchResponse
Searches the Cloud KG entities with entity name.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import enterpriseknowledgegraph_v1
async def sample_search():
# Create a client
client = enterpriseknowledgegraph_v1 . EnterpriseKnowledgeGraphServiceAsyncClient ()
# Initialize request argument(s)
request = enterpriseknowledgegraph_v1 . SearchRequest (
parent="parent_value",
query="query_value",
)
# Make the request
response = await client. search (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.enterpriseknowledgegraph_v1.types.SearchRequest , dict]]
The request object. Request message for EnterpriseKnowledgeGraphService.Search .
parent
str
Required. The name of the Entity's parent resource. Format: projects/{project}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
query
str
Required. The literal query string for search. This corresponds to the query field on the request instance; if request is provided, this should not be set.
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
google.cloud.enterpriseknowledgegraph_v1.types.SearchResponse
Response message for EnterpriseKnowledgeGraphService.Search .
search_public_kg
search_public_kg (
request : typing . Optional [
typing . Union [
google . cloud . enterpriseknowledgegraph_v1 . types . service . SearchPublicKgRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
query : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . enterpriseknowledgegraph_v1 . types . service . SearchPublicKgResponse
Searches the public KG entities with entity name.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import enterpriseknowledgegraph_v1
async def sample_search_public_kg():
# Create a client
client = enterpriseknowledgegraph_v1 . EnterpriseKnowledgeGraphServiceAsyncClient ()
# Initialize request argument(s)
request = enterpriseknowledgegraph_v1 . SearchPublicKgRequest (
parent="parent_value",
query="query_value",
)
# Make the request
response = await client. search_public_kg (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.enterpriseknowledgegraph_v1.types.SearchPublicKgRequest , dict]]
The request object. Request message for EnterpriseKnowledgeGraphService.Search .
parent
str
Required. The name of the Entity's parent resource. Format: projects/{project}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set.
query
str
Required. The literal query string for search. This corresponds to the query field on the request instance; if request is provided, this should not be set.
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
google.cloud.enterpriseknowledgegraph_v1.types.SearchPublicKgResponse
Response message for EnterpriseKnowledgeGraphService.Search .
table_path
table_path ( project : str , dataset : str , table : str ) - > str
Returns a fully-qualified table string.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
