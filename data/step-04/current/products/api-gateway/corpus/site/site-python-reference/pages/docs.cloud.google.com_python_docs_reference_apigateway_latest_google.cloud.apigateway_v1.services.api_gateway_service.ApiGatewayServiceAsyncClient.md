---
title: "Class ApiGatewayServiceAsyncClient (1.14.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/apigateway/latest/google.cloud.apigateway_v1.services.api_gateway_service.ApiGatewayServiceAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/apigateway/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/apigateway/latest/google.cloud.apigateway_v1.services.api_gateway_service.ApiGatewayServiceAsyncClient
  title: "Class ApiGatewayServiceAsyncClient (1.14.0) \_|\_ Python client libraries\
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
Class ApiGatewayServiceAsyncClient (1.14.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.14.0 (latest)
1.13.0
1.12.2
1.11.0
1.10.1
1.9.5
1.8.0
1.7.3
1.6.1
1.5.1
1.4.0
1.3.3
1.2.2
1.1.1
1.0.4
0.2.0
0.1.0
ApiGatewayServiceAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . apigateway_v1 . services . api_gateway_service . transports . base . ApiGatewayServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . apigateway_v1 . services . api_gateway_service . transports . base . ApiGatewayServiceTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
The API Gateway Service is the interface for managing API
Gateways.
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
ApiGatewayServiceTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
ApiGatewayServiceAsyncClient
ApiGatewayServiceAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . apigateway_v1 . services . api_gateway_service . transports . base . ApiGatewayServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . apigateway_v1 . services . api_gateway_service . transports . base . ApiGatewayServiceTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the api gateway service async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,ApiGatewayServiceTransport,Callable[..., ApiGatewayServiceTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the ApiGatewayServiceTransport constructor. If set to None, a transport is chosen automatically.
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
api_config_path
api_config_path ( project : str , api : str , api_config : str ) - > str
Returns a fully-qualified api_config string.
api_path
api_path ( project : str , api : str ) - > str
Returns a fully-qualified api string.
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
create_api
create_api (
request : typing . Optional [
typing . Union [ google . cloud . apigateway_v1 . types . apigateway . CreateApiRequest , dict ]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
api : typing . Optional [ google . cloud . apigateway_v1 . types . apigateway . Api ] = None ,
api_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new Api in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import apigateway_v1
async def sample_create_api():
# Create a client
client = apigateway_v1 . ApiGatewayServiceAsyncClient ()
# Initialize request argument(s)
request = apigateway_v1 . CreateApiRequest (
parent="parent_value",
api_id="api_id_value",
)
# Make the request
operation = client. create_api (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.apigateway_v1.types.CreateApiRequest , dict]]
The request object. Request message for ApiGatewayService.CreateApi
parent
str
Required. Parent resource of the API, of the form: projects/*/locations/global This corresponds to the parent field on the request instance; if request is provided, this should not be set.
api
Api
Required. API resource. This corresponds to the api field on the request instance; if request is provided, this should not be set.
api_id
str
Required. Identifier to assign to the API. Must be unique within scope of the parent resource. This corresponds to the api_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Api An API that can be served by one or more Gateways.
create_api_config
create_api_config (
request : typing . Optional [
typing . Union [
google . cloud . apigateway_v1 . types . apigateway . CreateApiConfigRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
api_config : typing . Optional [
google . cloud . apigateway_v1 . types . apigateway . ApiConfig
] = None ,
api_config_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new ApiConfig in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import apigateway_v1
async def sample_create_api_config():
# Create a client
client = apigateway_v1 . ApiGatewayServiceAsyncClient ()
# Initialize request argument(s)
request = apigateway_v1 . CreateApiConfigRequest (
parent="parent_value",
api_config_id="api_config_id_value",
)
# Make the request
operation = client. create_api_config (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.apigateway_v1.types.CreateApiConfigRequest , dict]]
The request object. Request message for ApiGatewayService.CreateApiConfig
parent
str
Required. Parent resource of the API Config, of the form: projects/ /locations/global/apis/ This corresponds to the parent field on the request instance; if request is provided, this should not be set.
api_config
ApiConfig
Required. API resource. This corresponds to the api_config field on the request instance; if request is provided, this should not be set.
api_config_id
str
Required. Identifier to assign to the API Config. Must be unique within scope of the parent resource. This corresponds to the api_config_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be ApiConfig An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
create_gateway
create_gateway (
request : typing . Optional [
typing . Union [
google . cloud . apigateway_v1 . types . apigateway . CreateGatewayRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
gateway : typing . Optional [
google . cloud . apigateway_v1 . types . apigateway . Gateway
] = None ,
gateway_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new Gateway in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import apigateway_v1
async def sample_create_gateway():
# Create a client
client = apigateway_v1 . ApiGatewayServiceAsyncClient ()
# Initialize request argument(s)
gateway = apigateway_v1 . Gateway ()
gateway.api_config = "api_config_value"
request = apigateway_v1 . CreateGatewayRequest (
parent="parent_value",
gateway_id="gateway_id_value",
gateway=gateway,
)
# Make the request
operation = client. create_gateway (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.apigateway_v1.types.CreateGatewayRequest , dict]]
The request object. Request message for ApiGatewayService.CreateGateway
parent
str
Required. Parent resource of the Gateway, of the form: projects/ /locations/ This corresponds to the parent field on the request instance; if request is provided, this should not be set.
gateway
Gateway
Required. Gateway resource. This corresponds to the gateway field on the request instance; if request is provided, this should not be set.
gateway_id
str
Required. Identifier to assign to the Gateway. Must be unique within scope of the parent resource. This corresponds to the gateway_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Gateway A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
delete_api
delete_api (
request : typing . Optional [
typing . Union [ google . cloud . apigateway_v1 . types . apigateway . DeleteApiRequest , dict ]
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
Deletes a single Api.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import apigateway_v1
async def sample_delete_api():
# Create a client
client = apigateway_v1 . ApiGatewayServiceAsyncClient ()
# Initialize request argument(s)
request = apigateway_v1 . DeleteApiRequest (
name="name_value",
)
# Make the request
operation = client. delete_api (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.apigateway_v1.types.DeleteApiRequest , dict]]
The request object. Request message for ApiGatewayService.DeleteApi
name
str
Required. Resource name of the form: projects/ /locations/global/apis/ This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_api_config
delete_api_config (
request : typing . Optional [
typing . Union [
google . cloud . apigateway_v1 . types . apigateway . DeleteApiConfigRequest , dict
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
Deletes a single ApiConfig.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import apigateway_v1
async def sample_delete_api_config():
# Create a client
client = apigateway_v1 . ApiGatewayServiceAsyncClient ()
# Initialize request argument(s)
request = apigateway_v1 . DeleteApiConfigRequest (
name="name_value",
)
# Make the request
operation = client. delete_api_config (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.apigateway_v1.types.DeleteApiConfigRequest , dict]]
The request object. Request message for ApiGatewayService.DeleteApiConfig
name
str
Required. Resource name of the form: projects/ /locations/global/apis/ /configs/* This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_gateway
delete_gateway (
request : typing . Optional [
typing . Union [
google . cloud . apigateway_v1 . types . apigateway . DeleteGatewayRequest , dict
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
Deletes a single Gateway.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import apigateway_v1
async def sample_delete_gateway():
# Create a client
client = apigateway_v1 . ApiGatewayServiceAsyncClient ()
# Initialize request argument(s)
request = apigateway_v1 . DeleteGatewayRequest (
name="name_value",
)
# Make the request
operation = client. delete_gateway (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.apigateway_v1.types.DeleteGatewayRequest , dict]]
The request object. Request message for ApiGatewayService.DeleteGateway
name
str
Required. Resource name of the form: projects/ /locations/ /gateways/* This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
ApiGatewayServiceAsyncClient
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
ApiGatewayServiceAsyncClient
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
ApiGatewayServiceAsyncClient
The constructed client.
gateway_path
gateway_path ( project : str , location : str , gateway : str ) - > str
Returns a fully-qualified gateway string.
get_api
get_api (
request : typing . Optional [
typing . Union [ google . cloud . apigateway_v1 . types . apigateway . GetApiRequest , dict ]
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
) - > google . cloud . apigateway_v1 . types . apigateway . Api
Gets details of a single Api.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import apigateway_v1
async def sample_get_api():
# Create a client
client = apigateway_v1 . ApiGatewayServiceAsyncClient ()
# Initialize request argument(s)
request = apigateway_v1 . GetApiRequest (
name="name_value",
)
# Make the request
response = await client. get_api (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.apigateway_v1.types.GetApiRequest , dict]]
The request object. Request message for ApiGatewayService.GetApi
name
str
Required. Resource name of the form: projects/ /locations/global/apis/ This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.apigateway_v1.types.Api
An API that can be served by one or more Gateways.
get_api_config
get_api_config (
request : typing . Optional [
typing . Union [
google . cloud . apigateway_v1 . types . apigateway . GetApiConfigRequest , dict
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
) - > google . cloud . apigateway_v1 . types . apigateway . ApiConfig
Gets details of a single ApiConfig.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import apigateway_v1
async def sample_get_api_config():
# Create a client
client = apigateway_v1 . ApiGatewayServiceAsyncClient ()
# Initialize request argument(s)
request = apigateway_v1 . GetApiConfigRequest (
name="name_value",
)
# Make the request
response = await client. get_api_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.apigateway_v1.types.GetApiConfigRequest , dict]]
The request object. Request message for ApiGatewayService.GetApiConfig
name
str
Required. Resource name of the form: projects/ /locations/global/apis/ /configs/* This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.apigateway_v1.types.ApiConfig
An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
get_gateway
get_gateway (
request : typing . Optional [
typing . Union [
google . cloud . apigateway_v1 . types . apigateway . GetGatewayRequest , dict
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
) - > google . cloud . apigateway_v1 . types . apigateway . Gateway
Gets details of a single Gateway.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import apigateway_v1
async def sample_get_gateway():
# Create a client
client = apigateway_v1 . ApiGatewayServiceAsyncClient ()
# Initialize request argument(s)
request = apigateway_v1 . GetGatewayRequest (
name="name_value",
)
# Make the request
response = await client. get_gateway (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.apigateway_v1.types.GetGatewayRequest , dict]]
The request object. Request message for ApiGatewayService.GetGateway
name
str
Required. Resource name of the form: projects/ /locations/ /gateways/* This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.apigateway_v1.types.Gateway
A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
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
google . cloud . apigateway_v1 . services . api_gateway_service . transports . base . ApiGatewayServiceTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
list_api_configs
list_api_configs (
request : typing . Optional [
typing . Union [
google . cloud . apigateway_v1 . types . apigateway . ListApiConfigsRequest , dict
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
google . cloud . apigateway_v1 . services . api_gateway_service . pagers . ListApiConfigsAsyncPager
)
Lists ApiConfigs in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import apigateway_v1
async def sample_list_api_configs():
# Create a client
client = apigateway_v1 . ApiGatewayServiceAsyncClient ()
# Initialize request argument(s)
request = apigateway_v1 . ListApiConfigsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_api_configs (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.apigateway_v1.types.ListApiConfigsRequest , dict]]
The request object. Request message for ApiGatewayService.ListApiConfigs
parent
str
Required. Parent resource of the API Config, of the form: projects/ /locations/global/apis/ This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.apigateway_v1.services.api_gateway_service.pagers.ListApiConfigsAsyncPager
Response message for ApiGatewayService.ListApiConfigs Iterating over this object will yield results and resolve additional pages automatically.
list_apis
list_apis (
request : typing . Optional [
typing . Union [ google . cloud . apigateway_v1 . types . apigateway . ListApisRequest , dict ]
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
) - > google . cloud . apigateway_v1 . services . api_gateway_service . pagers . ListApisAsyncPager
Lists Apis in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import apigateway_v1
async def sample_list_apis():
# Create a client
client = apigateway_v1 . ApiGatewayServiceAsyncClient ()
# Initialize request argument(s)
request = apigateway_v1 . ListApisRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_apis (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.apigateway_v1.types.ListApisRequest , dict]]
The request object. Request message for ApiGatewayService.ListApis
parent
str
Required. Parent resource of the API, of the form: projects/*/locations/global This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.apigateway_v1.services.api_gateway_service.pagers.ListApisAsyncPager
Response message for ApiGatewayService.ListApis Iterating over this object will yield results and resolve additional pages automatically.
list_gateways
list_gateways (
request : typing . Optional [
typing . Union [
google . cloud . apigateway_v1 . types . apigateway . ListGatewaysRequest , dict
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
google . cloud . apigateway_v1 . services . api_gateway_service . pagers . ListGatewaysAsyncPager
)
Lists Gateways in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import apigateway_v1
async def sample_list_gateways():
# Create a client
client = apigateway_v1 . ApiGatewayServiceAsyncClient ()
# Initialize request argument(s)
request = apigateway_v1 . ListGatewaysRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_gateways (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.apigateway_v1.types.ListGatewaysRequest , dict]]
The request object. Request message for ApiGatewayService.ListGateways
parent
str
Required. Parent resource of the Gateway, of the form: projects/ /locations/ This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.apigateway_v1.services.api_gateway_service.pagers.ListGatewaysAsyncPager
Response message for ApiGatewayService.ListGateways Iterating over this object will yield results and resolve additional pages automatically.
managed_service_path
managed_service_path ( service : str ) - > str
Returns a fully-qualified managed_service string.
parse_api_config_path
parse_api_config_path ( path : str ) - > typing . Dict [ str , str ]
Parses a api_config path into its component segments.
parse_api_path
parse_api_path ( path : str ) - > typing . Dict [ str , str ]
Parses a api path into its component segments.
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
parse_gateway_path
parse_gateway_path ( path : str ) - > typing . Dict [ str , str ]
Parses a gateway path into its component segments.
parse_managed_service_path
parse_managed_service_path ( path : str ) - > typing . Dict [ str , str ]
Parses a managed_service path into its component segments.
parse_service_account_path
parse_service_account_path ( path : str ) - > typing . Dict [ str , str ]
Parses a service_account path into its component segments.
parse_service_path
parse_service_path ( path : str ) - > typing . Dict [ str , str ]
Parses a service path into its component segments.
service_account_path
service_account_path ( project : str , service_account : str ) - > str
Returns a fully-qualified service_account string.
service_path
service_path ( service : str , config : str ) - > str
Returns a fully-qualified service string.
update_api
update_api (
request : typing . Optional [
typing . Union [ google . cloud . apigateway_v1 . types . apigateway . UpdateApiRequest , dict ]
] = None ,
* ,
api : typing . Optional [ google . cloud . apigateway_v1 . types . apigateway . Api ] = None ,
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
Updates the parameters of a single Api.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import apigateway_v1
async def sample_update_api():
# Create a client
client = apigateway_v1 . ApiGatewayServiceAsyncClient ()
# Initialize request argument(s)
request = apigateway_v1 . UpdateApiRequest (
)
# Make the request
operation = client. update_api (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.apigateway_v1.types.UpdateApiRequest , dict]]
The request object. Request message for ApiGatewayService.UpdateApi
api
Api
Required. API resource. This corresponds to the api field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Field mask is used to specify the fields to be overwritten in the Api resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Api An API that can be served by one or more Gateways.
update_api_config
update_api_config (
request : typing . Optional [
typing . Union [
google . cloud . apigateway_v1 . types . apigateway . UpdateApiConfigRequest , dict
]
] = None ,
* ,
api_config : typing . Optional [
google . cloud . apigateway_v1 . types . apigateway . ApiConfig
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
Updates the parameters of a single ApiConfig.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import apigateway_v1
async def sample_update_api_config():
# Create a client
client = apigateway_v1 . ApiGatewayServiceAsyncClient ()
# Initialize request argument(s)
request = apigateway_v1 . UpdateApiConfigRequest (
)
# Make the request
operation = client. update_api_config (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.apigateway_v1.types.UpdateApiConfigRequest , dict]]
The request object. Request message for ApiGatewayService.UpdateApiConfig
api_config
ApiConfig
Required. API Config resource. This corresponds to the api_config field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Field mask is used to specify the fields to be overwritten in the ApiConfig resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be ApiConfig An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.
update_gateway
update_gateway (
request : typing . Optional [
typing . Union [
google . cloud . apigateway_v1 . types . apigateway . UpdateGatewayRequest , dict
]
] = None ,
* ,
gateway : typing . Optional [
google . cloud . apigateway_v1 . types . apigateway . Gateway
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
Updates the parameters of a single Gateway.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import apigateway_v1
async def sample_update_gateway():
# Create a client
client = apigateway_v1 . ApiGatewayServiceAsyncClient ()
# Initialize request argument(s)
gateway = apigateway_v1 . Gateway ()
gateway.api_config = "api_config_value"
request = apigateway_v1 . UpdateGatewayRequest (
gateway=gateway,
)
# Make the request
operation = client. update_gateway (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.apigateway_v1.types.UpdateGatewayRequest , dict]]
The request object. Request message for ApiGatewayService.UpdateGateway
gateway
Gateway
Required. Gateway resource. This corresponds to the gateway field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Field mask is used to specify the fields to be overwritten in the Gateway resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Gateway A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
