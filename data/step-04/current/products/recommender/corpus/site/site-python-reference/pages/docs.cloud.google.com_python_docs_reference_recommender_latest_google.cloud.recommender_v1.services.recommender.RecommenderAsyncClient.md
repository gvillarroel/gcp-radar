---
title: "Class RecommenderAsyncClient (2.21.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.services.recommender.RecommenderAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/recommender/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.services.recommender.RecommenderAsyncClient
  title: "Class RecommenderAsyncClient (2.21.0) \_|\_ Python client libraries \_|\_\
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
Class RecommenderAsyncClient (2.21.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.21.0 (latest)
2.20.0
2.19.0
2.18.2
2.17.0
2.16.1
2.15.5
2.14.0
2.13.0
2.12.0
2.11.2
2.10.1
2.9.0
2.8.3
2.7.4
2.6.0
2.5.1
2.4.0
2.3.4
2.2.0
2.1.0
2.0.0
1.1.3
1.0.0
0.3.0
0.2.0
0.1.0
RecommenderAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . recommender_v1 . services . recommender . transports . base . RecommenderTransport ,
typing . Callable [
[ ... ],
google . cloud . recommender_v1 . services . recommender . transports . base . RecommenderTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Provides insights and recommendations for cloud customers for
various categories like performance optimization, cost savings,
reliability, feature discovery, etc. Insights and
recommendations are generated automatically based on analysis of
user resources, configuration and monitoring metrics.
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
RecommenderTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
RecommenderAsyncClient
RecommenderAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . recommender_v1 . services . recommender . transports . base . RecommenderTransport ,
typing . Callable [
[ ... ],
google . cloud . recommender_v1 . services . recommender . transports . base . RecommenderTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the recommender async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,RecommenderTransport,Callable[..., RecommenderTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the RecommenderTransport constructor. If set to None, a transport is chosen automatically.
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
RecommenderAsyncClient
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
RecommenderAsyncClient
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
RecommenderAsyncClient
The constructed client.
get_insight
get_insight (
request : typing . Optional [
typing . Union [
google . cloud . recommender_v1 . types . recommender_service . GetInsightRequest ,
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
) - > google . cloud . recommender_v1 . types . insight . Insight
Gets the requested insight. Requires the recommender.*.get IAM
permission for the specified insight type.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import recommender_v1
async def sample_get_insight():
# Create a client
client = recommender_v1 . RecommenderAsyncClient ()
# Initialize request argument(s)
request = recommender_v1 . GetInsightRequest (
name="name_value",
)
# Make the request
response = await client. get_insight (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.recommender_v1.types.GetInsightRequest , dict]]
The request object. Request to the GetInsight method.
name
str
Required. Name of the insight. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.recommender_v1.types.Insight
An insight along with the information used to derive the insight. The insight may have associated recommendations as well.
get_insight_type_config
get_insight_type_config (
request : typing . Optional [
typing . Union [
google . cloud . recommender_v1 . types . recommender_service . GetInsightTypeConfigRequest ,
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
) - > google . cloud . recommender_v1 . types . insight_type_config . InsightTypeConfig
Gets the requested InsightTypeConfig. There is only
one instance of the config for each InsightType.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import recommender_v1
async def sample_get_insight_type_config():
# Create a client
client = recommender_v1 . RecommenderAsyncClient ()
# Initialize request argument(s)
request = recommender_v1 . GetInsightTypeConfigRequest (
name="name_value",
)
# Make the request
response = await client. get_insight_type_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.recommender_v1.types.GetInsightTypeConfigRequest , dict]]
The request object. Request for the GetInsightTypeConfig` method.
name
str
Required. Name of the InsightTypeConfig to get. Acceptable formats: - projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config - projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config - organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config - billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.recommender_v1.types.InsightTypeConfig
Configuration for an InsightType.
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
get_recommendation
get_recommendation (
request : typing . Optional [
typing . Union [
google . cloud . recommender_v1 . types . recommender_service . GetRecommendationRequest ,
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
) - > google . cloud . recommender_v1 . types . recommendation . Recommendation
Gets the requested recommendation. Requires the
recommender.*.get IAM permission for the specified recommender.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import recommender_v1
async def sample_get_recommendation():
# Create a client
client = recommender_v1 . RecommenderAsyncClient ()
# Initialize request argument(s)
request = recommender_v1 . GetRecommendationRequest (
name="name_value",
)
# Make the request
response = await client. get_recommendation (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.recommender_v1.types.GetRecommendationRequest , dict]]
The request object. Request to the GetRecommendation method.
name
str
Required. Name of the recommendation. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.recommender_v1.types.Recommendation
A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
get_recommender_config
get_recommender_config (
request : typing . Optional [
typing . Union [
google . cloud . recommender_v1 . types . recommender_service . GetRecommenderConfigRequest ,
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
) - > google . cloud . recommender_v1 . types . recommender_config . RecommenderConfig
Gets the requested Recommender Config. There is only
one instance of the config for each Recommender.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import recommender_v1
async def sample_get_recommender_config():
# Create a client
client = recommender_v1 . RecommenderAsyncClient ()
# Initialize request argument(s)
request = recommender_v1 . GetRecommenderConfigRequest (
name="name_value",
)
# Make the request
response = await client. get_recommender_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.recommender_v1.types.GetRecommenderConfigRequest , dict]]
The request object. Request for the GetRecommenderConfig` method.
name
str
Required. Name of the Recommendation Config to get. Acceptable formats: - projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config - projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config - organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config - billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.recommender_v1.types.RecommenderConfig
Configuration for a Recommender.
get_transport_class
get_transport_class (
label : typing . Optional [ str ] = None ,
) - > typing . Type [
google . cloud . recommender_v1 . services . recommender . transports . base . RecommenderTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
insight_path
insight_path ( project : str , location : str , insight_type : str , insight : str ) - > str
Returns a fully-qualified insight string.
insight_type_config_path
insight_type_config_path ( project : str , location : str , insight_type : str ) - > str
Returns a fully-qualified insight_type_config string.
insight_type_path
insight_type_path ( project : str , location : str , insight_type : str ) - > str
Returns a fully-qualified insight_type string.
list_insights
list_insights (
request : typing . Optional [
typing . Union [
google . cloud . recommender_v1 . types . recommender_service . ListInsightsRequest ,
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
) - > google . cloud . recommender_v1 . services . recommender . pagers . ListInsightsAsyncPager
Lists insights for the specified Cloud Resource. Requires the
recommender.*.list IAM permission for the specified insight
type.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import recommender_v1
async def sample_list_insights():
# Create a client
client = recommender_v1 . RecommenderAsyncClient ()
# Initialize request argument(s)
request = recommender_v1 . ListInsightsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_insights (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.recommender_v1.types.ListInsightsRequest , dict]]
The request object. Request for the ListInsights method.
parent
str
Required. The container resource on which to execute the request. Acceptable formats: - projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID] - projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID] - billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID] - folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID] - organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID] LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.recommender_v1.services.recommender.pagers.ListInsightsAsyncPager
Response to the ListInsights method. Iterating over this object will yield results and resolve additional pages automatically.
list_recommendations
list_recommendations (
request : typing . Optional [
typing . Union [
google . cloud . recommender_v1 . types . recommender_service . ListRecommendationsRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
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
google . cloud . recommender_v1 . services . recommender . pagers . ListRecommendationsAsyncPager
)
Lists recommendations for the specified Cloud Resource. Requires
the recommender.*.list IAM permission for the specified
recommender.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import recommender_v1
async def sample_list_recommendations():
# Create a client
client = recommender_v1 . RecommenderAsyncClient ()
# Initialize request argument(s)
request = recommender_v1 . ListRecommendationsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_recommendations (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.recommender_v1.types.ListRecommendationsRequest , dict]]
The request object. Request for the ListRecommendations method.
parent
str
Required. The container resource on which to execute the request. Acceptable formats: - projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID] - projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID] - billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID] - folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID] - organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID] LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
filter
str
Filter expression to restrict the recommendations returned. Supported filter fields: - state_info.state - recommenderSubtype - priority - targetResources Examples: - stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED - recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE - priority = P1 OR priority = P2 - targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1 - stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2) The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160 ) This corresponds to the filter field on the request instance; if request is provided, this should not be set.
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
google.cloud.recommender_v1.services.recommender.pagers.ListRecommendationsAsyncPager
Response to the ListRecommendations method. Iterating over this object will yield results and resolve additional pages automatically.
mark_insight_accepted
mark_insight_accepted (
request : typing . Optional [
typing . Union [
google . cloud . recommender_v1 . types . recommender_service . MarkInsightAcceptedRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
state_metadata : typing . Optional [ typing . MutableMapping [ str , str ]] = None ,
etag : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . recommender_v1 . types . insight . Insight
Marks the Insight State as Accepted. Users can use this method
to indicate to the Recommender API that they have applied some
action based on the insight. This stops the insight content from
being updated.
MarkInsightAccepted can be applied to insights in ACTIVE state.
Requires the recommender.*.update IAM permission for the
specified insight.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import recommender_v1
async def sample_mark_insight_accepted():
# Create a client
client = recommender_v1 . RecommenderAsyncClient ()
# Initialize request argument(s)
request = recommender_v1 . MarkInsightAcceptedRequest (
name="name_value",
etag="etag_value",
)
# Make the request
response = await client. mark_insight_accepted (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.recommender_v1.types.MarkInsightAcceptedRequest , dict]]
The request object. Request for the MarkInsightAccepted method.
name
str
Required. Name of the insight. This corresponds to the name field on the request instance; if request is provided, this should not be set.
state_metadata
:class: MutableMapping[str, str]
Optional. State properties user wish to include with this state. Full replace of the current state_metadata. This corresponds to the state_metadata field on the request instance; if request is provided, this should not be set.
etag
str
Required. Fingerprint of the Insight. Provides optimistic locking. This corresponds to the etag field on the request instance; if request is provided, this should not be set.
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
google.cloud.recommender_v1.types.Insight
An insight along with the information used to derive the insight. The insight may have associated recommendations as well.
mark_recommendation_claimed
mark_recommendation_claimed (
request : typing . Optional [
typing . Union [
google . cloud . recommender_v1 . types . recommender_service . MarkRecommendationClaimedRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
state_metadata : typing . Optional [ typing . MutableMapping [ str , str ]] = None ,
etag : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . recommender_v1 . types . recommendation . Recommendation
Marks the Recommendation State as Claimed. Users can use this
method to indicate to the Recommender API that they are starting
to apply the recommendation themselves. This stops the
recommendation content from being updated. Associated insights
are frozen and placed in the ACCEPTED state.
MarkRecommendationClaimed can be applied to recommendations in
CLAIMED, SUCCEEDED, FAILED, or ACTIVE state.
Requires the recommender.*.update IAM permission for the
specified recommender.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import recommender_v1
async def sample_mark_recommendation_claimed():
# Create a client
client = recommender_v1 . RecommenderAsyncClient ()
# Initialize request argument(s)
request = recommender_v1 . MarkRecommendationClaimedRequest (
name="name_value",
etag="etag_value",
)
# Make the request
response = await client. mark_recommendation_claimed (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.recommender_v1.types.MarkRecommendationClaimedRequest , dict]]
The request object. Request for the MarkRecommendationClaimed Method.
name
str
Required. Name of the recommendation. This corresponds to the name field on the request instance; if request is provided, this should not be set.
state_metadata
:class: MutableMapping[str, str]
State properties to include with this state. Overwrites any existing state_metadata . Keys must match the regex /^ a-z0-9][a-z0-9_.-] {0,62}$/ . Values must match the regex /^[a-zA-Z0-9_./-]{0,255}$/ . This corresponds to the state_metadata field on the request instance; if request is provided, this should not be set.
etag
str
Required. Fingerprint of the Recommendation. Provides optimistic locking. This corresponds to the etag field on the request instance; if request is provided, this should not be set.
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
google.cloud.recommender_v1.types.Recommendation
A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
mark_recommendation_dismissed
mark_recommendation_dismissed (
request : typing . Optional [
typing . Union [
google . cloud . recommender_v1 . types . recommender_service . MarkRecommendationDismissedRequest ,
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
) - > google . cloud . recommender_v1 . types . recommendation . Recommendation
Mark the Recommendation State as Dismissed. Users can use this
method to indicate to the Recommender API that an ACTIVE
recommendation has to be marked back as DISMISSED.
MarkRecommendationDismissed can be applied to recommendations in
ACTIVE state.
Requires the recommender.*.update IAM permission for the
specified recommender.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import recommender_v1
async def sample_mark_recommendation_dismissed():
# Create a client
client = recommender_v1 . RecommenderAsyncClient ()
# Initialize request argument(s)
request = recommender_v1 . MarkRecommendationDismissedRequest (
name="name_value",
)
# Make the request
response = await client. mark_recommendation_dismissed (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.recommender_v1.types.MarkRecommendationDismissedRequest , dict]]
The request object. Request for the MarkRecommendationDismissed Method.
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
google.cloud.recommender_v1.types.Recommendation
A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
mark_recommendation_failed
mark_recommendation_failed (
request : typing . Optional [
typing . Union [
google . cloud . recommender_v1 . types . recommender_service . MarkRecommendationFailedRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
state_metadata : typing . Optional [ typing . MutableMapping [ str , str ]] = None ,
etag : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . recommender_v1 . types . recommendation . Recommendation
Marks the Recommendation State as Failed. Users can use this
method to indicate to the Recommender API that they have applied
the recommendation themselves, and the operation failed. This
stops the recommendation content from being updated. Associated
insights are frozen and placed in the ACCEPTED state.
MarkRecommendationFailed can be applied to recommendations in
ACTIVE, CLAIMED, SUCCEEDED, or FAILED state.
Requires the recommender.*.update IAM permission for the
specified recommender.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import recommender_v1
async def sample_mark_recommendation_failed():
# Create a client
client = recommender_v1 . RecommenderAsyncClient ()
# Initialize request argument(s)
request = recommender_v1 . MarkRecommendationFailedRequest (
name="name_value",
etag="etag_value",
)
# Make the request
response = await client. mark_recommendation_failed (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.recommender_v1.types.MarkRecommendationFailedRequest , dict]]
The request object. Request for the MarkRecommendationFailed Method.
name
str
Required. Name of the recommendation. This corresponds to the name field on the request instance; if request is provided, this should not be set.
state_metadata
:class: MutableMapping[str, str]
State properties to include with this state. Overwrites any existing state_metadata . Keys must match the regex /^ a-z0-9][a-z0-9_.-] {0,62}$/ . Values must match the regex /^[a-zA-Z0-9_./-]{0,255}$/ . This corresponds to the state_metadata field on the request instance; if request is provided, this should not be set.
etag
str
Required. Fingerprint of the Recommendation. Provides optimistic locking. This corresponds to the etag field on the request instance; if request is provided, this should not be set.
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
google.cloud.recommender_v1.types.Recommendation
A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
mark_recommendation_succeeded
mark_recommendation_succeeded (
request : typing . Optional [
typing . Union [
google . cloud . recommender_v1 . types . recommender_service . MarkRecommendationSucceededRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
state_metadata : typing . Optional [ typing . MutableMapping [ str , str ]] = None ,
etag : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . recommender_v1 . types . recommendation . Recommendation
Marks the Recommendation State as Succeeded. Users can use this
method to indicate to the Recommender API that they have applied
the recommendation themselves, and the operation was successful.
This stops the recommendation content from being updated.
Associated insights are frozen and placed in the ACCEPTED state.
MarkRecommendationSucceeded can be applied to recommendations in
ACTIVE, CLAIMED, SUCCEEDED, or FAILED state.
Requires the recommender.*.update IAM permission for the
specified recommender.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import recommender_v1
async def sample_mark_recommendation_succeeded():
# Create a client
client = recommender_v1 . RecommenderAsyncClient ()
# Initialize request argument(s)
request = recommender_v1 . MarkRecommendationSucceededRequest (
name="name_value",
etag="etag_value",
)
# Make the request
response = await client. mark_recommendation_succeeded (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.recommender_v1.types.MarkRecommendationSucceededRequest , dict]]
The request object. Request for the MarkRecommendationSucceeded Method.
name
str
Required. Name of the recommendation. This corresponds to the name field on the request instance; if request is provided, this should not be set.
state_metadata
:class: MutableMapping[str, str]
State properties to include with this state. Overwrites any existing state_metadata . Keys must match the regex /^ a-z0-9][a-z0-9_.-] {0,62}$/ . Values must match the regex /^[a-zA-Z0-9_./-]{0,255}$/ . This corresponds to the state_metadata field on the request instance; if request is provided, this should not be set.
etag
str
Required. Fingerprint of the Recommendation. Provides optimistic locking. This corresponds to the etag field on the request instance; if request is provided, this should not be set.
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
google.cloud.recommender_v1.types.Recommendation
A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
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
parse_insight_path
parse_insight_path ( path : str ) - > typing . Dict [ str , str ]
Parses a insight path into its component segments.
parse_insight_type_config_path
parse_insight_type_config_path ( path : str ) - > typing . Dict [ str , str ]
Parses a insight_type_config path into its component segments.
parse_insight_type_path
parse_insight_type_path ( path : str ) - > typing . Dict [ str , str ]
Parses a insight_type path into its component segments.
parse_recommendation_path
parse_recommendation_path ( path : str ) - > typing . Dict [ str , str ]
Parses a recommendation path into its component segments.
parse_recommender_config_path
parse_recommender_config_path ( path : str ) - > typing . Dict [ str , str ]
Parses a recommender_config path into its component segments.
parse_recommender_path
parse_recommender_path ( path : str ) - > typing . Dict [ str , str ]
Parses a recommender path into its component segments.
recommendation_path
recommendation_path (
project : str , location : str , recommender : str , recommendation : str
) - > str
Returns a fully-qualified recommendation string.
recommender_config_path
recommender_config_path ( project : str , location : str , recommender : str ) - > str
Returns a fully-qualified recommender_config string.
recommender_path
recommender_path ( project : str , location : str , recommender : str ) - > str
Returns a fully-qualified recommender string.
update_insight_type_config
update_insight_type_config (
request : typing . Optional [
typing . Union [
google . cloud . recommender_v1 . types . recommender_service . UpdateInsightTypeConfigRequest ,
dict ,
]
] = None ,
* ,
insight_type_config : typing . Optional [
google . cloud . recommender_v1 . types . insight_type_config . InsightTypeConfig
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
) - > google . cloud . recommender_v1 . types . insight_type_config . InsightTypeConfig
Updates an InsightTypeConfig change. This will create
a new revision of the config.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import recommender_v1
async def sample_update_insight_type_config():
# Create a client
client = recommender_v1 . RecommenderAsyncClient ()
# Initialize request argument(s)
request = recommender_v1 . UpdateInsightTypeConfigRequest (
)
# Make the request
response = await client. update_insight_type_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.recommender_v1.types.UpdateInsightTypeConfigRequest , dict]]
The request object. Request for the UpdateInsightTypeConfig method.
insight_type_config
InsightTypeConfig
Required. The InsightTypeConfig to update. This corresponds to the insight_type_config field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
The list of fields to be updated. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.recommender_v1.types.InsightTypeConfig
Configuration for an InsightType.
update_recommender_config
update_recommender_config (
request : typing . Optional [
typing . Union [
google . cloud . recommender_v1 . types . recommender_service . UpdateRecommenderConfigRequest ,
dict ,
]
] = None ,
* ,
recommender_config : typing . Optional [
google . cloud . recommender_v1 . types . recommender_config . RecommenderConfig
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
) - > google . cloud . recommender_v1 . types . recommender_config . RecommenderConfig
Updates a Recommender Config. This will create a new
revision of the config.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import recommender_v1
async def sample_update_recommender_config():
# Create a client
client = recommender_v1 . RecommenderAsyncClient ()
# Initialize request argument(s)
request = recommender_v1 . UpdateRecommenderConfigRequest (
)
# Make the request
response = await client. update_recommender_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.recommender_v1.types.UpdateRecommenderConfigRequest , dict]]
The request object. Request for the UpdateRecommenderConfig method.
recommender_config
RecommenderConfig
Required. The RecommenderConfig to update. This corresponds to the recommender_config field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
The list of fields to be updated. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
google.cloud.recommender_v1.types.RecommenderConfig
Configuration for a Recommender.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
