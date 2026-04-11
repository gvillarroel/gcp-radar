---
title: "Class CertificateManagerAsyncClient (1.12.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient
  title: "Class CertificateManagerAsyncClient (1.12.0) \_|\_ Python client libraries\
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
Class CertificateManagerAsyncClient (1.12.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.12.0 (latest)
1.11.0
1.10.2
1.9.0
1.8.1
1.7.2
1.6.3
1.5.0
1.4.3
1.3.1
1.2.0
1.1.1
1.0.1
0.2.1
0.1.3
CertificateManagerAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . certificate_manager_v1 . services . certificate_manager . transports . base . CertificateManagerTransport ,
typing . Callable [
[ ... ],
google . cloud . certificate_manager_v1 . services . certificate_manager . transports . base . CertificateManagerTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
API Overview
Certificates Manager API allows customers to see and manage all
their TLS certificates.
Certificates Manager API service provides methods to manage
certificates, group them into collections, and create serving
configuration that can be easily applied to other Cloud resources
e.g. Target Proxies.
Data Model
The Certificates Manager service exposes the following resources:
Certificate that describes a single TLS certificate.
CertificateMap that describes a collection of certificates
that can be attached to a target resource.
CertificateMapEntry that describes a single configuration
entry that consists of a SNI and a group of certificates. It's a
subresource of CertificateMap.
Certificate, CertificateMap and CertificateMapEntry IDs have to
fully match the regexp [a-z0-9-]{1,63} . In other words,
only lower case letters, digits, and hyphen are allowed
length of the resource ID has to be in [1,63] range.
Provides methods to manage Cloud Certificate Manager entities.
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
CertificateManagerTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
CertificateManagerAsyncClient
CertificateManagerAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . certificate_manager_v1 . services . certificate_manager . transports . base . CertificateManagerTransport ,
typing . Callable [
[ ... ],
google . cloud . certificate_manager_v1 . services . certificate_manager . transports . base . CertificateManagerTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the certificate manager async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,CertificateManagerTransport,Callable[..., CertificateManagerTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the CertificateManagerTransport constructor. If set to None, a transport is chosen automatically.
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
ca_pool_path
ca_pool_path ( project : str , location : str , ca_pool : str ) - > str
Returns a fully-qualified ca_pool string.
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
certificate_issuance_config_path
certificate_issuance_config_path (
project : str , location : str , certificate_issuance_config : str
) - > str
Returns a fully-qualified certificate_issuance_config string.
certificate_map_entry_path
certificate_map_entry_path (
project : str , location : str , certificate_map : str , certificate_map_entry : str
) - > str
Returns a fully-qualified certificate_map_entry string.
certificate_map_path
certificate_map_path ( project : str , location : str , certificate_map : str ) - > str
Returns a fully-qualified certificate_map string.
certificate_path
certificate_path ( project : str , location : str , certificate : str ) - > str
Returns a fully-qualified certificate string.
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
create_certificate
create_certificate (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . CreateCertificateRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
certificate : typing . Optional [
google . cloud . certificate_manager_v1 . types . certificate_manager . Certificate
] = None ,
certificate_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new Certificate in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_create_certificate():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . CreateCertificateRequest (
parent="parent_value",
certificate_id="certificate_id_value",
)
# Make the request
operation = client. create_certificate (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.CreateCertificateRequest , dict]]
The request object. Request for the CreateCertificate method.
parent
str
Required. The parent resource of the certificate. Must be in the format projects/ /locations/ . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
certificate
Certificate
Required. A definition of the certificate to create. This corresponds to the certificate field on the request instance; if request is provided, this should not be set.
certificate_id
str
Required. A user-provided name of the certificate. This corresponds to the certificate_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Certificate Defines TLS certificate.
create_certificate_issuance_config
create_certificate_issuance_config (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_issuance_config . CreateCertificateIssuanceConfigRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
certificate_issuance_config : typing . Optional [
google . cloud . certificate_manager_v1 . types . certificate_issuance_config . CertificateIssuanceConfig
] = None ,
certificate_issuance_config_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new CertificateIssuanceConfig in a given
project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_create_certificate_issuance_config():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
certificate_issuance_config = certificate_manager_v1 . CertificateIssuanceConfig ()
certificate_issuance_config.certificate_authority_config.certificate_authority_service_config.ca_pool = "ca_pool_value"
certificate_issuance_config.rotation_window_percentage = 2788
certificate_issuance_config.key_algorithm = "ECDSA_P256"
request = certificate_manager_v1 . CreateCertificateIssuanceConfigRequest (
parent="parent_value",
certificate_issuance_config_id="certificate_issuance_config_id_value",
certificate_issuance_config=certificate_issuance_config,
)
# Make the request
operation = client. create_certificate_issuance_config (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.CreateCertificateIssuanceConfigRequest , dict]]
The request object. Request for the CreateCertificateIssuanceConfig method.
parent
str
Required. The parent resource of the certificate issuance config. Must be in the format projects/ /locations/ . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
certificate_issuance_config
CertificateIssuanceConfig
Required. A definition of the certificate issuance config to create. This corresponds to the certificate_issuance_config field on the request instance; if request is provided, this should not be set.
certificate_issuance_config_id
str
Required. A user-provided name of the certificate config. This corresponds to the certificate_issuance_config_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be CertificateIssuanceConfig CertificateIssuanceConfig specifies how to issue and manage a certificate.
create_certificate_map
create_certificate_map (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . CreateCertificateMapRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
certificate_map : typing . Optional [
google . cloud . certificate_manager_v1 . types . certificate_manager . CertificateMap
] = None ,
certificate_map_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new CertificateMap in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_create_certificate_map():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . CreateCertificateMapRequest (
parent="parent_value",
certificate_map_id="certificate_map_id_value",
)
# Make the request
operation = client. create_certificate_map (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.CreateCertificateMapRequest , dict]]
The request object. Request for the CreateCertificateMap method.
parent
str
Required. The parent resource of the certificate map. Must be in the format projects/ /locations/ . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
certificate_map
CertificateMap
Required. A definition of the certificate map to create. This corresponds to the certificate_map field on the request instance; if request is provided, this should not be set.
certificate_map_id
str
Required. A user-provided name of the certificate map. This corresponds to the certificate_map_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be CertificateMap Defines a collection of certificate configurations.
create_certificate_map_entry
create_certificate_map_entry (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . CreateCertificateMapEntryRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
certificate_map_entry : typing . Optional [
google . cloud . certificate_manager_v1 . types . certificate_manager . CertificateMapEntry
] = None ,
certificate_map_entry_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new CertificateMapEntry in a given project
and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_create_certificate_map_entry():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
certificate_map_entry = certificate_manager_v1 . CertificateMapEntry ()
certificate_map_entry.hostname = "hostname_value"
request = certificate_manager_v1 . CreateCertificateMapEntryRequest (
parent="parent_value",
certificate_map_entry_id="certificate_map_entry_id_value",
certificate_map_entry=certificate_map_entry,
)
# Make the request
operation = client. create_certificate_map_entry (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.CreateCertificateMapEntryRequest , dict]]
The request object. Request for the CreateCertificateMapEntry method.
parent
str
Required. The parent resource of the certificate map entry. Must be in the format projects/ /locations/ /certificateMaps/* . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
certificate_map_entry
CertificateMapEntry
Required. A definition of the certificate map entry to create. This corresponds to the certificate_map_entry field on the request instance; if request is provided, this should not be set.
certificate_map_entry_id
str
Required. A user-provided name of the certificate map entry. This corresponds to the certificate_map_entry_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be CertificateMapEntry Defines a certificate map entry.
create_dns_authorization
create_dns_authorization (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . CreateDnsAuthorizationRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
dns_authorization : typing . Optional [
google . cloud . certificate_manager_v1 . types . certificate_manager . DnsAuthorization
] = None ,
dns_authorization_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new DnsAuthorization in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_create_dns_authorization():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
dns_authorization = certificate_manager_v1 . DnsAuthorization ()
dns_authorization.domain = "domain_value"
request = certificate_manager_v1 . CreateDnsAuthorizationRequest (
parent="parent_value",
dns_authorization_id="dns_authorization_id_value",
dns_authorization=dns_authorization,
)
# Make the request
operation = client. create_dns_authorization (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.CreateDnsAuthorizationRequest , dict]]
The request object. Request for the CreateDnsAuthorization method.
parent
str
Required. The parent resource of the dns authorization. Must be in the format projects/ /locations/ . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
dns_authorization
DnsAuthorization
Required. A definition of the dns authorization to create. This corresponds to the dns_authorization field on the request instance; if request is provided, this should not be set.
dns_authorization_id
str
Required. A user-provided name of the dns authorization. This corresponds to the dns_authorization_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be DnsAuthorization A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance.
create_trust_config
create_trust_config (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . trust_config . CreateTrustConfigRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
trust_config : typing . Optional [
google . cloud . certificate_manager_v1 . types . trust_config . TrustConfig
] = None ,
trust_config_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new TrustConfig in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_create_trust_config():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . CreateTrustConfigRequest (
parent="parent_value",
trust_config_id="trust_config_id_value",
)
# Make the request
operation = client. create_trust_config (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.CreateTrustConfigRequest , dict]]
The request object. Request for the CreateTrustConfig method.
parent
str
Required. The parent resource of the TrustConfig. Must be in the format projects/ /locations/ . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
trust_config
TrustConfig
Required. A definition of the TrustConfig to create. This corresponds to the trust_config field on the request instance; if request is provided, this should not be set.
trust_config_id
str
Required. A user-provided name of the TrustConfig. Must match the regexp [a-z0-9-]{1,63} . This corresponds to the trust_config_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be TrustConfig Defines a trust config.
delete_certificate
delete_certificate (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . DeleteCertificateRequest ,
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
Deletes a single Certificate.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_delete_certificate():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . DeleteCertificateRequest (
name="name_value",
)
# Make the request
operation = client. delete_certificate (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.DeleteCertificateRequest , dict]]
The request object. Request for the DeleteCertificate method.
name
str
Required. A name of the certificate to delete. Must be in the format projects/ /locations/ /certificates/* . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_certificate_issuance_config
delete_certificate_issuance_config (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_issuance_config . DeleteCertificateIssuanceConfigRequest ,
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
Deletes a single CertificateIssuanceConfig.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_delete_certificate_issuance_config():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . DeleteCertificateIssuanceConfigRequest (
name="name_value",
)
# Make the request
operation = client. delete_certificate_issuance_config (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.DeleteCertificateIssuanceConfigRequest , dict]]
The request object. Request for the DeleteCertificateIssuanceConfig method.
name
str
Required. A name of the certificate issuance config to delete. Must be in the format projects/ /locations/ /certificateIssuanceConfigs/* . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_certificate_map
delete_certificate_map (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . DeleteCertificateMapRequest ,
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
Deletes a single CertificateMap. A Certificate Map
can't be deleted if it contains Certificate Map Entries.
Remove all the entries from the map before calling this
method.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_delete_certificate_map():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . DeleteCertificateMapRequest (
name="name_value",
)
# Make the request
operation = client. delete_certificate_map (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.DeleteCertificateMapRequest , dict]]
The request object. Request for the DeleteCertificateMap method.
name
str
Required. A name of the certificate map to delete. Must be in the format projects/ /locations/ /certificateMaps/* . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_certificate_map_entry
delete_certificate_map_entry (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . DeleteCertificateMapEntryRequest ,
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
Deletes a single CertificateMapEntry.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_delete_certificate_map_entry():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . DeleteCertificateMapEntryRequest (
name="name_value",
)
# Make the request
operation = client. delete_certificate_map_entry (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.DeleteCertificateMapEntryRequest , dict]]
The request object. Request for the DeleteCertificateMapEntry method.
name
str
Required. A name of the certificate map entry to delete. Must be in the format projects/ /locations/ /certificateMaps/ /certificateMapEntries/ . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_dns_authorization
delete_dns_authorization (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . DeleteDnsAuthorizationRequest ,
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
Deletes a single DnsAuthorization.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_delete_dns_authorization():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . DeleteDnsAuthorizationRequest (
name="name_value",
)
# Make the request
operation = client. delete_dns_authorization (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.DeleteDnsAuthorizationRequest , dict]]
The request object. Request for the DeleteDnsAuthorization method.
name
str
Required. A name of the dns authorization to delete. Must be in the format projects/ /locations/ /dnsAuthorizations/* . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_trust_config
delete_trust_config (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . trust_config . DeleteTrustConfigRequest ,
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
Deletes a single TrustConfig.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_delete_trust_config():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . DeleteTrustConfigRequest (
name="name_value",
)
# Make the request
operation = client. delete_trust_config (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.DeleteTrustConfigRequest , dict]]
The request object. Request for the DeleteTrustConfig method.
name
str
Required. A name of the TrustConfig to delete. Must be in the format projects/ /locations/ /trustConfigs/* . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
dns_authorization_path
dns_authorization_path ( project : str , location : str , dns_authorization : str ) - > str
Returns a fully-qualified dns_authorization string.
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
CertificateManagerAsyncClient
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
CertificateManagerAsyncClient
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
CertificateManagerAsyncClient
The constructed client.
get_certificate
get_certificate (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . GetCertificateRequest ,
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
) - > google . cloud . certificate_manager_v1 . types . certificate_manager . Certificate
Gets details of a single Certificate.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_get_certificate():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . GetCertificateRequest (
name="name_value",
)
# Make the request
response = await client. get_certificate (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.GetCertificateRequest , dict]]
The request object. Request for the GetCertificate method.
name
str
Required. A name of the certificate to describe. Must be in the format projects/ /locations/ /certificates/* . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.certificate_manager_v1.types.Certificate
Defines TLS certificate.
get_certificate_issuance_config
get_certificate_issuance_config (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_issuance_config . GetCertificateIssuanceConfigRequest ,
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
) - > (
google . cloud . certificate_manager_v1 . types . certificate_issuance_config . CertificateIssuanceConfig
)
Gets details of a single CertificateIssuanceConfig.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_get_certificate_issuance_config():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . GetCertificateIssuanceConfigRequest (
name="name_value",
)
# Make the request
response = await client. get_certificate_issuance_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.GetCertificateIssuanceConfigRequest , dict]]
The request object. Request for the GetCertificateIssuanceConfig method.
name
str
Required. A name of the certificate issuance config to describe. Must be in the format projects/ /locations/ /certificateIssuanceConfigs/* . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.certificate_manager_v1.types.CertificateIssuanceConfig
CertificateIssuanceConfig specifies how to issue and manage a certificate.
get_certificate_map
get_certificate_map (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . GetCertificateMapRequest ,
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
) - > google . cloud . certificate_manager_v1 . types . certificate_manager . CertificateMap
Gets details of a single CertificateMap.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_get_certificate_map():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . GetCertificateMapRequest (
name="name_value",
)
# Make the request
response = await client. get_certificate_map (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.GetCertificateMapRequest , dict]]
The request object. Request for the GetCertificateMap method.
name
str
Required. A name of the certificate map to describe. Must be in the format projects/ /locations/ /certificateMaps/* . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.certificate_manager_v1.types.CertificateMap
Defines a collection of certificate configurations.
get_certificate_map_entry
get_certificate_map_entry (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . GetCertificateMapEntryRequest ,
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
) - > google . cloud . certificate_manager_v1 . types . certificate_manager . CertificateMapEntry
Gets details of a single CertificateMapEntry.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_get_certificate_map_entry():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . GetCertificateMapEntryRequest (
name="name_value",
)
# Make the request
response = await client. get_certificate_map_entry (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.GetCertificateMapEntryRequest , dict]]
The request object. Request for the GetCertificateMapEntry method.
name
str
Required. A name of the certificate map entry to describe. Must be in the format projects/ /locations/ /certificateMaps/ /certificateMapEntries/ . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.certificate_manager_v1.types.CertificateMapEntry
Defines a certificate map entry.
get_dns_authorization
get_dns_authorization (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . GetDnsAuthorizationRequest ,
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
) - > google . cloud . certificate_manager_v1 . types . certificate_manager . DnsAuthorization
Gets details of a single DnsAuthorization.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_get_dns_authorization():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . GetDnsAuthorizationRequest (
name="name_value",
)
# Make the request
response = await client. get_dns_authorization (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.GetDnsAuthorizationRequest , dict]]
The request object. Request for the GetDnsAuthorization method.
name
str
Required. A name of the dns authorization to describe. Must be in the format projects/ /locations/ /dnsAuthorizations/* . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.certificate_manager_v1.types.DnsAuthorization
A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance.
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
get_transport_class
get_transport_class (
label : typing . Optional [ str ] = None ,
) - > typing . Type [
google . cloud . certificate_manager_v1 . services . certificate_manager . transports . base . CertificateManagerTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
get_trust_config
get_trust_config (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . trust_config . GetTrustConfigRequest ,
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
) - > google . cloud . certificate_manager_v1 . types . trust_config . TrustConfig
Gets details of a single TrustConfig.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_get_trust_config():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . GetTrustConfigRequest (
name="name_value",
)
# Make the request
response = await client. get_trust_config (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.GetTrustConfigRequest , dict]]
The request object. Request for the GetTrustConfig method.
name
str
Required. A name of the TrustConfig to describe. Must be in the format projects/ /locations/ /trustConfigs/* . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.certificate_manager_v1.types.TrustConfig
Defines a trust config.
list_certificate_issuance_configs
list_certificate_issuance_configs (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_issuance_config . ListCertificateIssuanceConfigsRequest ,
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
google . cloud . certificate_manager_v1 . services . certificate_manager . pagers . ListCertificateIssuanceConfigsAsyncPager
)
Lists CertificateIssuanceConfigs in a given project
and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_list_certificate_issuance_configs():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . ListCertificateIssuanceConfigsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_certificate_issuance_configs (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.ListCertificateIssuanceConfigsRequest , dict]]
The request object. Request for the ListCertificateIssuanceConfigs method.
parent
str
Required. The project and location from which the certificate should be listed, specified in the format projects/ /locations/ . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager
Response for the ListCertificateIssuanceConfigs method. Iterating over this object will yield results and resolve additional pages automatically.
list_certificate_map_entries
list_certificate_map_entries (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificateMapEntriesRequest ,
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
google . cloud . certificate_manager_v1 . services . certificate_manager . pagers . ListCertificateMapEntriesAsyncPager
)
Lists CertificateMapEntries in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_list_certificate_map_entries():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . ListCertificateMapEntriesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_certificate_map_entries (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.ListCertificateMapEntriesRequest , dict]]
The request object. Request for the ListCertificateMapEntries method.
parent
str
Required. The project, location and certificate map from which the certificate map entries should be listed, specified in the format projects/ /locations/ /certificateMaps/* . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateMapEntriesAsyncPager
Response for the ListCertificateMapEntries method. Iterating over this object will yield results and resolve additional pages automatically.
list_certificate_maps
list_certificate_maps (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificateMapsRequest ,
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
google . cloud . certificate_manager_v1 . services . certificate_manager . pagers . ListCertificateMapsAsyncPager
)
Lists CertificateMaps in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_list_certificate_maps():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . ListCertificateMapsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_certificate_maps (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.ListCertificateMapsRequest , dict]]
The request object. Request for the ListCertificateMaps method.
parent
str
Required. The project and location from which the certificate maps should be listed, specified in the format projects/ /locations/ . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateMapsAsyncPager
Response for the ListCertificateMaps method. Iterating over this object will yield results and resolve additional pages automatically.
list_certificates
list_certificates (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificatesRequest ,
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
google . cloud . certificate_manager_v1 . services . certificate_manager . pagers . ListCertificatesAsyncPager
)
Lists Certificates in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_list_certificates():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . ListCertificatesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_certificates (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.ListCertificatesRequest , dict]]
The request object. Request for the ListCertificates method.
parent
str
Required. The project and location from which the certificate should be listed, specified in the format projects/ /locations/ . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificatesAsyncPager
Response for the ListCertificates method. Iterating over this object will yield results and resolve additional pages automatically.
list_dns_authorizations
list_dns_authorizations (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . ListDnsAuthorizationsRequest ,
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
google . cloud . certificate_manager_v1 . services . certificate_manager . pagers . ListDnsAuthorizationsAsyncPager
)
Lists DnsAuthorizations in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_list_dns_authorizations():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . ListDnsAuthorizationsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_dns_authorizations (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.ListDnsAuthorizationsRequest , dict]]
The request object. Request for the ListDnsAuthorizations method.
parent
str
Required. The project and location from which the dns authorizations should be listed, specified in the format projects/ /locations/ . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListDnsAuthorizationsAsyncPager
Response for the ListDnsAuthorizations method. Iterating over this object will yield results and resolve additional pages automatically.
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
list_trust_configs
list_trust_configs (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . trust_config . ListTrustConfigsRequest ,
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
google . cloud . certificate_manager_v1 . services . certificate_manager . pagers . ListTrustConfigsAsyncPager
)
Lists TrustConfigs in a given project and location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_list_trust_configs():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . ListTrustConfigsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_trust_configs (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.ListTrustConfigsRequest , dict]]
The request object. Request for the ListTrustConfigs method.
parent
str
Required. The project and location from which the TrustConfigs should be listed, specified in the format projects/ /locations/ . This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListTrustConfigsAsyncPager
Response for the ListTrustConfigs method. Iterating over this object will yield results and resolve additional pages automatically.
parse_ca_pool_path
parse_ca_pool_path ( path : str ) - > typing . Dict [ str , str ]
Parses a ca_pool path into its component segments.
parse_certificate_issuance_config_path
parse_certificate_issuance_config_path ( path : str ) - > typing . Dict [ str , str ]
Parses a certificate_issuance_config path into its component segments.
parse_certificate_map_entry_path
parse_certificate_map_entry_path ( path : str ) - > typing . Dict [ str , str ]
Parses a certificate_map_entry path into its component segments.
parse_certificate_map_path
parse_certificate_map_path ( path : str ) - > typing . Dict [ str , str ]
Parses a certificate_map path into its component segments.
parse_certificate_path
parse_certificate_path ( path : str ) - > typing . Dict [ str , str ]
Parses a certificate path into its component segments.
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
parse_dns_authorization_path
parse_dns_authorization_path ( path : str ) - > typing . Dict [ str , str ]
Parses a dns_authorization path into its component segments.
parse_trust_config_path
parse_trust_config_path ( path : str ) - > typing . Dict [ str , str ]
Parses a trust_config path into its component segments.
trust_config_path
trust_config_path ( project : str , location : str , trust_config : str ) - > str
Returns a fully-qualified trust_config string.
update_certificate
update_certificate (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . UpdateCertificateRequest ,
dict ,
]
] = None ,
* ,
certificate : typing . Optional [
google . cloud . certificate_manager_v1 . types . certificate_manager . Certificate
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
Updates a Certificate.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_update_certificate():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . UpdateCertificateRequest (
)
# Make the request
operation = client. update_certificate (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.UpdateCertificateRequest , dict]]
The request object. Request for the UpdateCertificate method.
certificate
Certificate
Required. A definition of the certificate to update. This corresponds to the certificate field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask . This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Certificate Defines TLS certificate.
update_certificate_map
update_certificate_map (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . UpdateCertificateMapRequest ,
dict ,
]
] = None ,
* ,
certificate_map : typing . Optional [
google . cloud . certificate_manager_v1 . types . certificate_manager . CertificateMap
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
Updates a CertificateMap.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_update_certificate_map():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . UpdateCertificateMapRequest (
)
# Make the request
operation = client. update_certificate_map (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.UpdateCertificateMapRequest , dict]]
The request object. Request for the UpdateCertificateMap method.
certificate_map
CertificateMap
Required. A definition of the certificate map to update. This corresponds to the certificate_map field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask . This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be CertificateMap Defines a collection of certificate configurations.
update_certificate_map_entry
update_certificate_map_entry (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . UpdateCertificateMapEntryRequest ,
dict ,
]
] = None ,
* ,
certificate_map_entry : typing . Optional [
google . cloud . certificate_manager_v1 . types . certificate_manager . CertificateMapEntry
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
Updates a CertificateMapEntry.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_update_certificate_map_entry():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
certificate_map_entry = certificate_manager_v1 . CertificateMapEntry ()
certificate_map_entry.hostname = "hostname_value"
request = certificate_manager_v1 . UpdateCertificateMapEntryRequest (
certificate_map_entry=certificate_map_entry,
)
# Make the request
operation = client. update_certificate_map_entry (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.UpdateCertificateMapEntryRequest , dict]]
The request object. Request for the UpdateCertificateMapEntry method.
certificate_map_entry
CertificateMapEntry
Required. A definition of the certificate map entry to create map entry. This corresponds to the certificate_map_entry field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask . This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be CertificateMapEntry Defines a certificate map entry.
update_dns_authorization
update_dns_authorization (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . certificate_manager . UpdateDnsAuthorizationRequest ,
dict ,
]
] = None ,
* ,
dns_authorization : typing . Optional [
google . cloud . certificate_manager_v1 . types . certificate_manager . DnsAuthorization
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
Updates a DnsAuthorization.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_update_dns_authorization():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
dns_authorization = certificate_manager_v1 . DnsAuthorization ()
dns_authorization.domain = "domain_value"
request = certificate_manager_v1 . UpdateDnsAuthorizationRequest (
dns_authorization=dns_authorization,
)
# Make the request
operation = client. update_dns_authorization (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.UpdateDnsAuthorizationRequest , dict]]
The request object. Request for the UpdateDnsAuthorization method.
dns_authorization
DnsAuthorization
Required. A definition of the dns authorization to update. This corresponds to the dns_authorization field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask . This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be DnsAuthorization A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance.
update_trust_config
update_trust_config (
request : typing . Optional [
typing . Union [
google . cloud . certificate_manager_v1 . types . trust_config . UpdateTrustConfigRequest ,
dict ,
]
] = None ,
* ,
trust_config : typing . Optional [
google . cloud . certificate_manager_v1 . types . trust_config . TrustConfig
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
Updates a TrustConfig.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import certificate_manager_v1
async def sample_update_trust_config():
# Create a client
client = certificate_manager_v1 . CertificateManagerAsyncClient ()
# Initialize request argument(s)
request = certificate_manager_v1 . UpdateTrustConfigRequest (
)
# Make the request
operation = client. update_trust_config (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.certificate_manager_v1.types.UpdateTrustConfigRequest , dict]]
The request object. Request for the UpdateTrustConfig method.
trust_config
TrustConfig
Required. A definition of the TrustConfig to update. This corresponds to the trust_config field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask . This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be TrustConfig Defines a trust config.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
