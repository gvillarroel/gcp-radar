---
title: "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient
  title: "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\
    |\_ Google Cloud Documentation"
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
Class VmwareEngineAsyncClient (1.11.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.11.0 (latest)
1.10.0
1.9.0
1.8.3
1.7.0
1.6.1
1.5.0
1.4.4
1.3.0
1.2.0
1.1.1
1.0.1
0.2.2
0.1.1
VmwareEngineAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . vmwareengine_v1 . services . vmware_engine . transports . base . VmwareEngineTransport ,
typing . Callable [
[ ... ],
google . cloud . vmwareengine_v1 . services . vmware_engine . transports . base . VmwareEngineTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
VMwareEngine manages VMware's private clusters in the Cloud.
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
VmwareEngineTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
VmwareEngineAsyncClient
VmwareEngineAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . vmwareengine_v1 . services . vmware_engine . transports . base . VmwareEngineTransport ,
typing . Callable [
[ ... ],
google . cloud . vmwareengine_v1 . services . vmware_engine . transports . base . VmwareEngineTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the vmware engine async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,VmwareEngineTransport,Callable[..., VmwareEngineTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the VmwareEngineTransport constructor. If set to None, a transport is chosen automatically.
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
cluster_path
cluster_path ( project : str , location : str , private_cloud : str , cluster : str ) - > str
Returns a fully-qualified cluster string.
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
create_cluster
create_cluster (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . CreateClusterRequest , dict
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
cluster : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . Cluster
] = None ,
cluster_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new cluster in a given private cloud. Creating a new
cluster provides additional nodes for use in the parent private
cloud and requires sufficient node
quota <https://cloud.google.com/vmware-engine/quotas> __.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_create_cluster():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . CreateClusterRequest (
parent="parent_value",
cluster_id="cluster_id_value",
)
# Make the request
operation = client. create_cluster (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.CreateClusterRequest , dict]]
The request object. Request message for VmwareEngine.CreateCluster
parent
str
Required. The resource name of the private cloud to create a new cluster in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the parent field on the request instance; if request is provided, this should not be set.
cluster
Cluster
Required. The initial description of the new cluster. This corresponds to the cluster field on the request instance; if request is provided, this should not be set.
cluster_id
str
Required. The user-provided identifier of the new Cluster . This identifier must be unique among clusters within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: - Only contains 1-63 alphanumeric characters and hyphens - Begins with an alphabetical character - Ends with a non-hyphen character - Not formatted as a UUID - Complies with RFC 1034 https://datatracker.ietf.org/doc/html/rfc1034 __ (section 3.5) This corresponds to the cluster_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Cluster A cluster in a private cloud.
create_external_access_rule
create_external_access_rule (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . CreateExternalAccessRuleRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
external_access_rule : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . ExternalAccessRule
] = None ,
external_access_rule_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new external access rule in a given network
policy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_create_external_access_rule():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . CreateExternalAccessRuleRequest (
parent="parent_value",
external_access_rule_id="external_access_rule_id_value",
)
# Make the request
operation = client. create_external_access_rule (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.CreateExternalAccessRuleRequest , dict]]
The request object. Request message for VmwareEngine.CreateExternalAccessRule
parent
str
Required. The resource name of the network policy to create a new external access firewall rule in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1/networkPolicies/my-policy This corresponds to the parent field on the request instance; if request is provided, this should not be set.
external_access_rule
ExternalAccessRule
Required. The initial description of a new external access rule. This corresponds to the external_access_rule field on the request instance; if request is provided, this should not be set.
external_access_rule_id
str
Required. The user-provided identifier of the ExternalAccessRule to be created. This identifier must be unique among ExternalAccessRule resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: - Only contains 1-63 alphanumeric characters and hyphens - Begins with an alphabetical character - Ends with a non-hyphen character - Not formatted as a UUID - Complies with RFC 1034 https://datatracker.ietf.org/doc/html/rfc1034 __ (section 3.5) This corresponds to the external_access_rule_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be ExternalAccessRule External access firewall rules for filtering incoming traffic destined to ExternalAddress resources.
create_external_address
create_external_address (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . CreateExternalAddressRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
external_address : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . ExternalAddress
] = None ,
external_address_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new ExternalAddress resource in a given private
cloud. The network policy that corresponds to the private cloud
must have the external IP address network service enabled
( NetworkPolicy.external_ip ).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_create_external_address():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . CreateExternalAddressRequest (
parent="parent_value",
external_address_id="external_address_id_value",
)
# Make the request
operation = client. create_external_address (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.CreateExternalAddressRequest , dict]]
The request object. Request message for VmwareEngine.CreateExternalAddress
parent
str
Required. The resource name of the private cloud to create a new external IP address in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the parent field on the request instance; if request is provided, this should not be set.
external_address
ExternalAddress
Required. The initial description of a new external IP address. This corresponds to the external_address field on the request instance; if request is provided, this should not be set.
external_address_id
str
Required. The user-provided identifier of the ExternalAddress to be created. This identifier must be unique among ExternalAddress resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: - Only contains 1-63 alphanumeric characters and hyphens - Begins with an alphabetical character - Ends with a non-hyphen character - Not formatted as a UUID - Complies with RFC 1034 https://datatracker.ietf.org/doc/html/rfc1034 __ (section 3.5) This corresponds to the external_address_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be ExternalAddress Represents an allocated external IP address and its corresponding internal IP address in a private cloud.
create_hcx_activation_key
create_hcx_activation_key (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . CreateHcxActivationKeyRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
hcx_activation_key : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . HcxActivationKey
] = None ,
hcx_activation_key_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new HCX activation key in a given private
cloud.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_create_hcx_activation_key():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . CreateHcxActivationKeyRequest (
parent="parent_value",
hcx_activation_key_id="hcx_activation_key_id_value",
)
# Make the request
operation = client. create_hcx_activation_key (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.CreateHcxActivationKeyRequest , dict]]
The request object. Request message for VmwareEngine.CreateHcxActivationKey
parent
str
Required. The resource name of the private cloud to create the key for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1/privateClouds/my-cloud This corresponds to the parent field on the request instance; if request is provided, this should not be set.
hcx_activation_key
HcxActivationKey
Required. The initial description of a new HCX activation key. When creating a new key, this field must be an empty object. This corresponds to the hcx_activation_key field on the request instance; if request is provided, this should not be set.
hcx_activation_key_id
str
Required. The user-provided identifier of the HcxActivationKey to be created. This identifier must be unique among HcxActivationKey resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: - Only contains 1-63 alphanumeric characters and hyphens - Begins with an alphabetical character - Ends with a non-hyphen character - Not formatted as a UUID - Complies with RFC 1034 https://datatracker.ietf.org/doc/html/rfc1034 __ (section 3.5) This corresponds to the hcx_activation_key_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be HcxActivationKey HCX activation key. A default key is created during private cloud provisioning, but this behavior is subject to change and you should always verify active keys. Use VmwareEngine.ListHcxActivationKeys to retrieve existing keys and VmwareEngine.CreateHcxActivationKey to create new ones.
create_logging_server
create_logging_server (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . CreateLoggingServerRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
logging_server : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . LoggingServer
] = None ,
logging_server_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Create a new logging server for a given private
cloud.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_create_logging_server():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
logging_server = vmwareengine_v1 . LoggingServer ()
logging_server.hostname = "hostname_value"
logging_server.port = 453
logging_server.protocol = "RELP"
logging_server.source_type = "VCSA"
request = vmwareengine_v1 . CreateLoggingServerRequest (
parent="parent_value",
logging_server=logging_server,
logging_server_id="logging_server_id_value",
)
# Make the request
operation = client. create_logging_server (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.CreateLoggingServerRequest , dict]]
The request object. Request message for VmwareEngine.CreateLoggingServer
parent
str
Required. The resource name of the private cloud to create a new Logging Server in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the parent field on the request instance; if request is provided, this should not be set.
logging_server
LoggingServer
Required. The initial description of a new logging server. This corresponds to the logging_server field on the request instance; if request is provided, this should not be set.
logging_server_id
str
Required. The user-provided identifier of the LoggingServer to be created. This identifier must be unique among LoggingServer resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: - Only contains 1-63 alphanumeric characters and hyphens - Begins with an alphabetical character - Ends with a non-hyphen character - Not formatted as a UUID - Complies with RFC 1034 https://datatracker.ietf.org/doc/html/rfc1034 __ (section 3.5) This corresponds to the logging_server_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be LoggingServer Logging server to receive vCenter or ESXi logs.
create_management_dns_zone_binding
create_management_dns_zone_binding (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . CreateManagementDnsZoneBindingRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
management_dns_zone_binding : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . ManagementDnsZoneBinding
] = None ,
management_dns_zone_binding_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new ManagementDnsZoneBinding resource in a private
cloud. This RPC creates the DNS binding and the resource that
represents the DNS binding of the consumer VPC network to the
management DNS zone. A management DNS zone is the Cloud DNS
cross-project binding zone that VMware Engine creates for each
private cloud. It contains FQDNs and corresponding IP addresses
for the private cloud's ESXi hosts and management VM appliances
like vCenter and NSX Manager.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_create_management_dns_zone_binding():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
management_dns_zone_binding = vmwareengine_v1 . ManagementDnsZoneBinding ()
management_dns_zone_binding.vpc_network = "vpc_network_value"
request = vmwareengine_v1 . CreateManagementDnsZoneBindingRequest (
parent="parent_value",
management_dns_zone_binding=management_dns_zone_binding,
management_dns_zone_binding_id="management_dns_zone_binding_id_value",
)
# Make the request
operation = client. create_management_dns_zone_binding (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.CreateManagementDnsZoneBindingRequest , dict]]
The request object. Request message for [VmwareEngine.CreateManagementDnsZoneBindings][]
parent
str
Required. The resource name of the private cloud to create a new management DNS zone binding for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the parent field on the request instance; if request is provided, this should not be set.
management_dns_zone_binding
ManagementDnsZoneBinding
Required. The initial values for a new management DNS zone binding. This corresponds to the management_dns_zone_binding field on the request instance; if request is provided, this should not be set.
management_dns_zone_binding_id
str
Required. The user-provided identifier of the ManagementDnsZoneBinding resource to be created. This identifier must be unique among ManagementDnsZoneBinding resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: - Only contains 1-63 alphanumeric characters and hyphens - Begins with an alphabetical character - Ends with a non-hyphen character - Not formatted as a UUID - Complies with RFC 1034 https://datatracker.ietf.org/doc/html/rfc1034 __ (section 3.5) This corresponds to the management_dns_zone_binding_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be ManagementDnsZoneBinding Represents a binding between a network and the management DNS zone. A management DNS zone is the Cloud DNS cross-project binding zone that VMware Engine creates for each private cloud. It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager.
create_network_peering
create_network_peering (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . CreateNetworkPeeringRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
network_peering : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . NetworkPeering
] = None ,
network_peering_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new network peering between the peer network and
VMware Engine network provided in a NetworkPeering resource.
NetworkPeering is a global resource and location can only be
global.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_create_network_peering():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
network_peering = vmwareengine_v1 . NetworkPeering ()
network_peering.peer_network = "peer_network_value"
network_peering.peer_network_type = "GOOGLE_CLOUD_NETAPP_VOLUMES"
network_peering.vmware_engine_network = "vmware_engine_network_value"
request = vmwareengine_v1 . CreateNetworkPeeringRequest (
parent="parent_value",
network_peering_id="network_peering_id_value",
network_peering=network_peering,
)
# Make the request
operation = client. create_network_peering (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.CreateNetworkPeeringRequest , dict]]
The request object. Request message for VmwareEngine.CreateNetworkPeering
parent
str
Required. The resource name of the location to create the new network peering in. This value is always global , because NetworkPeering is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/global This corresponds to the parent field on the request instance; if request is provided, this should not be set.
network_peering
NetworkPeering
Required. The initial description of the new network peering. This corresponds to the network_peering field on the request instance; if request is provided, this should not be set.
network_peering_id
str
Required. The user-provided identifier of the new NetworkPeering . This identifier must be unique among NetworkPeering resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: - Only contains 1-63 alphanumeric characters and hyphens - Begins with an alphabetical character - Ends with a non-hyphen character - Not formatted as a UUID - Complies with RFC 1034 https://datatracker.ietf.org/doc/html/rfc1034 __ (section 3.5) This corresponds to the network_peering_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be NetworkPeering Details of a network peering.
create_network_policy
create_network_policy (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . CreateNetworkPolicyRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
network_policy : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . NetworkPolicy
] = None ,
network_policy_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new network policy in a given VMware Engine
network of a project and location (region). A new
network policy cannot be created if another network
policy already exists in the same scope.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_create_network_policy():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
network_policy = vmwareengine_v1 . NetworkPolicy ()
network_policy.edge_services_cidr = "edge_services_cidr_value"
request = vmwareengine_v1 . CreateNetworkPolicyRequest (
parent="parent_value",
network_policy_id="network_policy_id_value",
network_policy=network_policy,
)
# Make the request
operation = client. create_network_policy (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.CreateNetworkPolicyRequest , dict]]
The request object. Request message for VmwareEngine.CreateNetworkPolicy
parent
str
Required. The resource name of the location (region) to create the new network policy in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1 This corresponds to the parent field on the request instance; if request is provided, this should not be set.
network_policy
NetworkPolicy
Required. The network policy configuration to use in the request. This corresponds to the network_policy field on the request instance; if request is provided, this should not be set.
network_policy_id
str
Required. The user-provided identifier of the network policy to be created. This identifier must be unique within parent projects/{my-project}/locations/{us-central1}/networkPolicies and becomes the final token in the name URI. The identifier must meet the following requirements: - Only contains 1-63 alphanumeric characters and hyphens - Begins with an alphabetical character - Ends with a non-hyphen character - Not formatted as a UUID - Complies with RFC 1034 https://datatracker.ietf.org/doc/html/rfc1034 __ (section 3.5) This corresponds to the network_policy_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be NetworkPolicy Represents a network policy resource. Network policies are regional resources. You can use a network policy to enable or disable internet access and external IP access. Network policies are associated with a VMware Engine network, which might span across regions. For a given region, a network policy applies to all private clouds in the VMware Engine network associated with the policy.
create_private_cloud
create_private_cloud (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . CreatePrivateCloudRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
private_cloud : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . PrivateCloud
] = None ,
private_cloud_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new PrivateCloud resource in a given project and
location. Private clouds of type STANDARD and
TIME_LIMITED are zonal resources, STRETCHED private
clouds are regional. Creating a private cloud also creates a
management
cluster <https://cloud.google.com/vmware-engine/docs/concepts-vmware-components> __
for that private cloud.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_create_private_cloud():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
private_cloud = vmwareengine_v1 . PrivateCloud ()
private_cloud.network_config.management_cidr = "management_cidr_value"
private_cloud.management_cluster.cluster_id = "cluster_id_value"
request = vmwareengine_v1 . CreatePrivateCloudRequest (
parent="parent_value",
private_cloud_id="private_cloud_id_value",
private_cloud=private_cloud,
)
# Make the request
operation = client. create_private_cloud (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.CreatePrivateCloudRequest , dict]]
The request object. Request message for VmwareEngine.CreatePrivateCloud
parent
str
Required. The resource name of the location to create the new private cloud in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a This corresponds to the parent field on the request instance; if request is provided, this should not be set.
private_cloud
PrivateCloud
Required. The initial description of the new private cloud. This corresponds to the private_cloud field on the request instance; if request is provided, this should not be set.
private_cloud_id
str
Required. The user-provided identifier of the private cloud to be created. This identifier must be unique among each PrivateCloud within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: - Only contains 1-63 alphanumeric characters and hyphens - Begins with an alphabetical character - Ends with a non-hyphen character - Not formatted as a UUID - Complies with RFC 1034 https://datatracker.ietf.org/doc/html/rfc1034 __ (section 3.5) This corresponds to the private_cloud_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be PrivateCloud Represents a private cloud resource. Private clouds of type STANDARD and TIME_LIMITED are zonal resources, STRETCHED private clouds are regional.
create_private_connection
create_private_connection (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . CreatePrivateConnectionRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
private_connection : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . PrivateConnection
] = None ,
private_connection_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new private connection that can be used for
accessing private Clouds.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_create_private_connection():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
private_connection = vmwareengine_v1 . PrivateConnection ()
private_connection.vmware_engine_network = "vmware_engine_network_value"
private_connection.type_ = "THIRD_PARTY_SERVICE"
private_connection.service_network = "service_network_value"
request = vmwareengine_v1 . CreatePrivateConnectionRequest (
parent="parent_value",
private_connection_id="private_connection_id_value",
private_connection=private_connection,
)
# Make the request
operation = client. create_private_connection (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.CreatePrivateConnectionRequest , dict]]
The request object. Request message for VmwareEngine.CreatePrivateConnection
parent
str
Required. The resource name of the location to create the new private connection in. Private connection is a regional resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1 This corresponds to the parent field on the request instance; if request is provided, this should not be set.
private_connection
PrivateConnection
Required. The initial description of the new private connection. This corresponds to the private_connection field on the request instance; if request is provided, this should not be set.
private_connection_id
str
Required. The user-provided identifier of the new private connection. This identifier must be unique among private connection resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: - Only contains 1-63 alphanumeric characters and hyphens - Begins with an alphabetical character - Ends with a non-hyphen character - Not formatted as a UUID - Complies with RFC 1034 https://datatracker.ietf.org/doc/html/rfc1034 __ (section 3.5) This corresponds to the private_connection_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be PrivateConnection Private connection resource that provides connectivity for VMware Engine private clouds.
create_vmware_engine_network
create_vmware_engine_network (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . CreateVmwareEngineNetworkRequest ,
dict ,
]
] = None ,
* ,
parent : typing . Optional [ str ] = None ,
vmware_engine_network : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . VmwareEngineNetwork
] = None ,
vmware_engine_network_id : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Creates a new VMware Engine network that can be used
by a private cloud.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_create_vmware_engine_network():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
vmware_engine_network = vmwareengine_v1 . VmwareEngineNetwork ()
vmware_engine_network.type_ = "STANDARD"
request = vmwareengine_v1 . CreateVmwareEngineNetworkRequest (
parent="parent_value",
vmware_engine_network_id="vmware_engine_network_id_value",
vmware_engine_network=vmware_engine_network,
)
# Make the request
operation = client. create_vmware_engine_network (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.CreateVmwareEngineNetworkRequest , dict]]
The request object. Request message for VmwareEngine.CreateVmwareEngineNetwork
parent
str
Required. The resource name of the location to create the new VMware Engine network in. A VMware Engine network of type LEGACY is a regional resource, and a VMware Engine network of type STANDARD is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/global This corresponds to the parent field on the request instance; if request is provided, this should not be set.
vmware_engine_network
VmwareEngineNetwork
Required. The initial description of the new VMware Engine network. This corresponds to the vmware_engine_network field on the request instance; if request is provided, this should not be set.
vmware_engine_network_id
str
Required. The user-provided identifier of the new VMware Engine network. This identifier must be unique among VMware Engine network resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: - For networks of type LEGACY, adheres to the format: {region-id}-default . Replace {region-id} with the region where you want to create the VMware Engine network. For example, "us-central1-default". - Only contains 1-63 alphanumeric characters and hyphens - Begins with an alphabetical character - Ends with a non-hyphen character - Not formatted as a UUID - Complies with RFC 1034 https://datatracker.ietf.org/doc/html/rfc1034 __ (section 3.5) This corresponds to the vmware_engine_network_id field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be VmwareEngineNetwork VMware Engine network resource that provides connectivity for VMware Engine private clouds.
delete_cluster
delete_cluster (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . DeleteClusterRequest , dict
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
Deletes a Cluster resource. To avoid unintended data loss,
migrate or gracefully shut down any workloads running on the
cluster before deletion. You cannot delete the management
cluster of a private cloud using this method.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_delete_cluster():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . DeleteClusterRequest (
name="name_value",
)
# Make the request
operation = client. delete_cluster (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.DeleteClusterRequest , dict]]
The request object. Request message for VmwareEngine.DeleteCluster
name
str
Required. The resource name of the cluster to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_external_access_rule
delete_external_access_rule (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . DeleteExternalAccessRuleRequest ,
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
Deletes a single external access rule.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_delete_external_access_rule():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . DeleteExternalAccessRuleRequest (
name="name_value",
)
# Make the request
operation = client. delete_external_access_rule (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.DeleteExternalAccessRuleRequest , dict]]
The request object. Request message for VmwareEngine.DeleteExternalAccessRule
name
str
Required. The resource name of the external access firewall rule to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_external_address
delete_external_address (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . DeleteExternalAddressRequest ,
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
Deletes a single external IP address. When you delete
an external IP address, connectivity between the
external IP address and the corresponding internal IP
address is lost.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_delete_external_address():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . DeleteExternalAddressRequest (
name="name_value",
)
# Make the request
operation = client. delete_external_address (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.DeleteExternalAddressRequest , dict]]
The request object. Request message for VmwareEngine.DeleteExternalAddress
name
str
Required. The resource name of the external IP address to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-ip This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_logging_server
delete_logging_server (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . DeleteLoggingServerRequest ,
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
Deletes a single logging server.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_delete_logging_server():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . DeleteLoggingServerRequest (
name="name_value",
)
# Make the request
operation = client. delete_logging_server (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.DeleteLoggingServerRequest , dict]]
The request object. Request message for VmwareEngine.DeleteLoggingServer
name
str
Required. The resource name of the logging server to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/loggingServers/my-logging-server This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_management_dns_zone_binding
delete_management_dns_zone_binding (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . DeleteManagementDnsZoneBindingRequest ,
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
Deletes a ManagementDnsZoneBinding resource. When a
management DNS zone binding is deleted, the corresponding
consumer VPC network is no longer bound to the management DNS
zone.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_delete_management_dns_zone_binding():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . DeleteManagementDnsZoneBindingRequest (
name="name_value",
)
# Make the request
operation = client. delete_management_dns_zone_binding (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.DeleteManagementDnsZoneBindingRequest , dict]]
The request object. Request message for VmwareEngine.DeleteManagementDnsZoneBinding
name
str
Required. The resource name of the management DNS zone binding to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_network_peering
delete_network_peering (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . DeleteNetworkPeeringRequest ,
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
Deletes a NetworkPeering resource. When a network peering is
deleted for a VMware Engine network, the peer network becomes
inaccessible to that VMware Engine network. NetworkPeering is a
global resource and location can only be global.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_delete_network_peering():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . DeleteNetworkPeeringRequest (
name="name_value",
)
# Make the request
operation = client. delete_network_peering (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.DeleteNetworkPeeringRequest , dict]]
The request object. Request message for VmwareEngine.DeleteNetworkPeering
name
str
Required. The resource name of the network peering to be deleted. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/global/networkPeerings/my-peering This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_network_policy
delete_network_policy (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . DeleteNetworkPolicyRequest ,
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
Deletes a NetworkPolicy resource. A network policy cannot be
deleted when NetworkService.state is set to RECONCILING
for either its external IP or internet access service.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_delete_network_policy():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . DeleteNetworkPolicyRequest (
name="name_value",
)
# Make the request
operation = client. delete_network_policy (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.DeleteNetworkPolicyRequest , dict]]
The request object. Request message for VmwareEngine.DeleteNetworkPolicy
name
str
Required. The resource name of the network policy to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1/networkPolicies/my-network-policy This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
typing . Union [ google . longrunning . operations_pb2 . DeleteOperationRequest , dict ]
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
delete_private_cloud
delete_private_cloud (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . DeletePrivateCloudRequest ,
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
Schedules a PrivateCloud resource for deletion.
A PrivateCloud resource scheduled for deletion has
PrivateCloud.state set to DELETED and expireTime set
to the time when deletion is final and can no longer be
reversed. The delete operation is marked as done as soon as the
PrivateCloud is successfully scheduled for deletion (this
also applies when delayHours is set to zero), and the
operation is not kept in pending state until PrivateCloud is
purged. PrivateCloud can be restored using
UndeletePrivateCloud method before the expireTime
elapses. When expireTime is reached, deletion is final and
all private cloud resources are irreversibly removed and billing
stops. During the final removal process, PrivateCloud.state
is set to PURGING . PrivateCloud can be polled using
standard GET method for the whole period of deletion and
purging. It will not be returned only when it is completely
purged.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_delete_private_cloud():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . DeletePrivateCloudRequest (
name="name_value",
)
# Make the request
operation = client. delete_private_cloud (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.DeletePrivateCloudRequest , dict]]
The request object. Request message for VmwareEngine.DeletePrivateCloud
name
str
Required. The resource name of the private cloud to delete. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be PrivateCloud Represents a private cloud resource. Private clouds of type STANDARD and TIME_LIMITED are zonal resources, STRETCHED private clouds are regional.
delete_private_connection
delete_private_connection (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . DeletePrivateConnectionRequest ,
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
Deletes a PrivateConnection resource. When a private
connection is deleted for a VMware Engine network, the connected
network becomes inaccessible to that VMware Engine network.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_delete_private_connection():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . DeletePrivateConnectionRequest (
name="name_value",
)
# Make the request
operation = client. delete_private_connection (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.DeletePrivateConnectionRequest , dict]]
The request object. Request message for VmwareEngine.DeletePrivateConnection
name
str
Required. The resource name of the private connection to be deleted. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1/privateConnections/my-connection This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
delete_vmware_engine_network
delete_vmware_engine_network (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . DeleteVmwareEngineNetworkRequest ,
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
Deletes a VmwareEngineNetwork resource. You can only delete
a VMware Engine network after all resources that refer to it are
deleted. For example, a private cloud, a network peering, and a
network policy can all refer to the same VMware Engine network.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_delete_vmware_engine_network():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . DeleteVmwareEngineNetworkRequest (
name="name_value",
)
# Make the request
operation = client. delete_vmware_engine_network (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.DeleteVmwareEngineNetworkRequest , dict]]
The request object. Request message for VmwareEngine.DeleteVmwareEngineNetwork
name
str
Required. The resource name of the VMware Engine network to be deleted. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/global/vmwareEngineNetworks/my-network This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
dns_bind_permission_path
dns_bind_permission_path ( project : str , location : str ) - > str
Returns a fully-qualified dns_bind_permission string.
dns_forwarding_path
dns_forwarding_path ( project : str , location : str , private_cloud : str ) - > str
Returns a fully-qualified dns_forwarding string.
external_access_rule_path
external_access_rule_path (
project : str , location : str , network_policy : str , external_access_rule : str
) - > str
Returns a fully-qualified external_access_rule string.
external_address_path
external_address_path (
project : str , location : str , private_cloud : str , external_address : str
) - > str
Returns a fully-qualified external_address string.
fetch_network_policy_external_addresses
fetch_network_policy_external_addresses (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . FetchNetworkPolicyExternalAddressesRequest ,
dict ,
]
] = None ,
* ,
network_policy : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > (
google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . FetchNetworkPolicyExternalAddressesAsyncPager
)
Lists external IP addresses assigned to VMware
workload VMs within the scope of the given network
policy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_fetch_network_policy_external_addresses():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . FetchNetworkPolicyExternalAddressesRequest (
network_policy="network_policy_value",
)
# Make the request
page_result = client. fetch_network_policy_external_addresses (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.FetchNetworkPolicyExternalAddressesRequest , dict]]
The request object. Request message for VmwareEngine.FetchNetworkPolicyExternalAddresses
network_policy
str
Required. The resource name of the network policy to query for assigned external IP addresses. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1/networkPolicies/my-policy This corresponds to the network_policy field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.FetchNetworkPolicyExternalAddressesAsyncPager
Response message for VmwareEngine.FetchNetworkPolicyExternalAddresses Iterating over this object will yield results and resolve additional pages automatically.
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
VmwareEngineAsyncClient
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
VmwareEngineAsyncClient
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
VmwareEngineAsyncClient
The constructed client.
get_cluster
get_cluster (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetClusterRequest , dict
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . Cluster
Retrieves a Cluster resource by its resource name.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_cluster():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetClusterRequest (
name="name_value",
)
# Make the request
response = await client. get_cluster (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetClusterRequest , dict]]
The request object. Request message for VmwareEngine.GetCluster
name
str
Required. The cluster resource name to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.Cluster
A cluster in a private cloud.
get_dns_bind_permission
get_dns_bind_permission (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetDnsBindPermissionRequest ,
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . DnsBindPermission
Gets all the principals having bind permission on the
intranet VPC associated with the consumer project
granted by the Grant API. DnsBindPermission is a global
resource and location can only be global.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_dns_bind_permission():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetDnsBindPermissionRequest (
name="name_value",
)
# Make the request
response = await client. get_dns_bind_permission (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetDnsBindPermissionRequest , dict]]
The request object. Request message for VmwareEngine.GetDnsBindPermission
name
str
Required. The name of the resource which stores the users/service accounts having the permission to bind to the corresponding intranet VPC of the consumer project. DnsBindPermission is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/global/dnsBindPermission This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.DnsBindPermission
DnsBindPermission resource that contains the accounts having the consumer DNS bind permission on the corresponding intranet VPC of the consumer project.
get_dns_forwarding
get_dns_forwarding (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetDnsForwardingRequest ,
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . DnsForwarding
Gets details of the DnsForwarding config.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_dns_forwarding():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetDnsForwardingRequest (
name="name_value",
)
# Make the request
response = await client. get_dns_forwarding (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetDnsForwardingRequest , dict]]
The request object. Request message for VmwareEngine.GetDnsForwarding
name
str
Required. The resource name of a DnsForwarding to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/dnsForwarding This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.DnsForwarding
DNS forwarding config. This config defines a list of domain to name server mappings, and is attached to the private cloud for custom domain resolution.
get_external_access_rule
get_external_access_rule (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetExternalAccessRuleRequest ,
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . ExternalAccessRule
Gets details of a single external access rule.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_external_access_rule():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetExternalAccessRuleRequest (
name="name_value",
)
# Make the request
response = await client. get_external_access_rule (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetExternalAccessRuleRequest , dict]]
The request object. Request message for VmwareEngine.GetExternalAccessRule
name
str
Required. The resource name of the external access firewall rule to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.ExternalAccessRule
External access firewall rules for filtering incoming traffic destined to ExternalAddress resources.
get_external_address
get_external_address (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetExternalAddressRequest ,
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . ExternalAddress
Gets details of a single external IP address.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_external_address():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetExternalAddressRequest (
name="name_value",
)
# Make the request
response = await client. get_external_address (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetExternalAddressRequest , dict]]
The request object. Request message for VmwareEngine.GetExternalAddress
name
str
Required. The resource name of the external IP address to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-ip This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.ExternalAddress
Represents an allocated external IP address and its corresponding internal IP address in a private cloud.
get_hcx_activation_key
get_hcx_activation_key (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetHcxActivationKeyRequest ,
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . HcxActivationKey
Retrieves a HcxActivationKey resource by its resource name.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_hcx_activation_key():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetHcxActivationKeyRequest (
name="name_value",
)
# Make the request
response = await client. get_hcx_activation_key (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetHcxActivationKeyRequest , dict]]
The request object. Request message for [VmwareEngine.GetHcxActivationKeys][]
name
str
Required. The resource name of the HCX activation key to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1/privateClouds/my-cloud/hcxActivationKeys/my-key This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.HcxActivationKey
HCX activation key. A default key is created during private cloud provisioning, but this behavior is subject to change and you should always verify active keys. Use VmwareEngine.ListHcxActivationKeys to retrieve existing keys and VmwareEngine.CreateHcxActivationKey to create new ones.
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
Gets the IAM access control policy for a function.
Returns an empty policy if the function exists and does not have a
policy set.
Parameters
Name
Description
request
.iam_policy_pb2.GetIamPolicyRequest
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
.policy_pb2.Policy
Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources. A Policy is a collection of bindings . A binding binds one or more members to a single role . Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions (defined by IAM or configured by users). A binding can optionally specify a condition , which is a logic expression that further constrains the role binding based on attributes about the request and/or target resource. **JSON Example** :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" **yaml="" example**="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide __.
get_location
get_location (
request : typing . Optional [
typing . Union [ google . cloud . location . locations_pb2 . GetLocationRequest , dict ]
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
get_logging_server
get_logging_server (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetLoggingServerRequest ,
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . LoggingServer
Gets details of a logging server.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_logging_server():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetLoggingServerRequest (
name="name_value",
)
# Make the request
response = await client. get_logging_server (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetLoggingServerRequest , dict]]
The request object. Request message for VmwareEngine.GetLoggingServer
name
str
Required. The resource name of the Logging Server to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/loggingServers/my-logging-server This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.LoggingServer
Logging server to receive vCenter or ESXi logs.
get_management_dns_zone_binding
get_management_dns_zone_binding (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetManagementDnsZoneBindingRequest ,
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . ManagementDnsZoneBinding
Retrieves a 'ManagementDnsZoneBinding' resource by
its resource name.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_management_dns_zone_binding():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetManagementDnsZoneBindingRequest (
name="name_value",
)
# Make the request
response = await client. get_management_dns_zone_binding (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetManagementDnsZoneBindingRequest , dict]]
The request object. Request message for VmwareEngine.GetManagementDnsZoneBinding
name
str
Required. The resource name of the management DNS zone binding to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.ManagementDnsZoneBinding
Represents a binding between a network and the management DNS zone. A management DNS zone is the Cloud DNS cross-project binding zone that VMware Engine creates for each private cloud. It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager.
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
get_network_peering
get_network_peering (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetNetworkPeeringRequest ,
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . NetworkPeering
Retrieves a NetworkPeering resource by its resource name.
The resource contains details of the network peering, such as
peered networks, import and export custom route configurations,
and peering state. NetworkPeering is a global resource and
location can only be global.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_network_peering():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetNetworkPeeringRequest (
name="name_value",
)
# Make the request
response = await client. get_network_peering (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetNetworkPeeringRequest , dict]]
The request object. Request message for VmwareEngine.GetNetworkPeering
name
str
Required. The resource name of the network peering to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/global/networkPeerings/my-peering This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.NetworkPeering
Details of a network peering.
get_network_policy
get_network_policy (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetNetworkPolicyRequest ,
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . NetworkPolicy
Retrieves a NetworkPolicy resource by its resource name.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_network_policy():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetNetworkPolicyRequest (
name="name_value",
)
# Make the request
response = await client. get_network_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetNetworkPolicyRequest , dict]]
The request object. Request message for VmwareEngine.GetNetworkPolicy
name
str
Required. The resource name of the network policy to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1/networkPolicies/my-network-policy This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.NetworkPolicy
Represents a network policy resource. Network policies are regional resources. You can use a network policy to enable or disable internet access and external IP access. Network policies are associated with a VMware Engine network, which might span across regions. For a given region, a network policy applies to all private clouds in the VMware Engine network associated with the policy.
get_node
get_node (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetNodeRequest , dict
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . Node
Gets details of a single node.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_node():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetNodeRequest (
name="name_value",
)
# Make the request
response = await client. get_node (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetNodeRequest , dict]]
The request object. Request message for VmwareEngine.GetNode
name
str
Required. The resource name of the node to retrieve. For example: projects/{project}/locations/{location}/privateClouds/{private_cloud}/clusters/{cluster}/nodes/{node} This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.Node
Node in a cluster.
get_node_type
get_node_type (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetNodeTypeRequest , dict
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . NodeType
Gets details of a single NodeType .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_node_type():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetNodeTypeRequest (
name="name_value",
)
# Make the request
response = await client. get_node_type (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetNodeTypeRequest , dict]]
The request object. Request message for VmwareEngine.GetNodeType
name
str
Required. The resource name of the node type to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-proj/locations/us-central1-a/nodeTypes/standard-72 This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.NodeType
Describes node type.
get_operation
get_operation (
request : typing . Optional [
typing . Union [ google . longrunning . operations_pb2 . GetOperationRequest , dict ]
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
get_private_cloud
get_private_cloud (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetPrivateCloudRequest , dict
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . PrivateCloud
Retrieves a PrivateCloud resource by its resource name.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_private_cloud():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetPrivateCloudRequest (
name="name_value",
)
# Make the request
response = await client. get_private_cloud (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetPrivateCloudRequest , dict]]
The request object. Request message for VmwareEngine.GetPrivateCloud
name
str
Required. The resource name of the private cloud to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.PrivateCloud
Represents a private cloud resource. Private clouds of type STANDARD and TIME_LIMITED are zonal resources, STRETCHED private clouds are regional.
get_private_connection
get_private_connection (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetPrivateConnectionRequest ,
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . PrivateConnection
Retrieves a PrivateConnection resource by its resource name.
The resource contains details of the private connection, such as
connected network, routing mode and state.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_private_connection():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetPrivateConnectionRequest (
name="name_value",
)
# Make the request
response = await client. get_private_connection (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetPrivateConnectionRequest , dict]]
The request object. Request message for VmwareEngine.GetPrivateConnection
name
str
Required. The resource name of the private connection to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1/privateConnections/my-connection This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.PrivateConnection
Private connection resource that provides connectivity for VMware Engine private clouds.
get_subnet
get_subnet (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetSubnetRequest , dict
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . Subnet
Gets details of a single subnet.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_subnet():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetSubnetRequest (
name="name_value",
)
# Make the request
response = await client. get_subnet (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetSubnetRequest , dict]]
The request object. Request message for VmwareEngine.GetSubnet
name
str
Required. The resource name of the subnet to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/subnets/my-subnet This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.Subnet
Subnet in a private cloud. Either management subnets (such as vMotion) that are read-only, or userDefined, which can also be updated.
get_transport_class
get_transport_class (
label : typing . Optional [ str ] = None ,
) - > typing . Type [
google . cloud . vmwareengine_v1 . services . vmware_engine . transports . base . VmwareEngineTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
get_vmware_engine_network
get_vmware_engine_network (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GetVmwareEngineNetworkRequest ,
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
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . VmwareEngineNetwork
Retrieves a VmwareEngineNetwork resource by its resource
name. The resource contains details of the VMware Engine
network, such as its VMware Engine network type, peered networks
in a service project, and state (for example, CREATING ,
ACTIVE , DELETING ).
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_get_vmware_engine_network():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . GetVmwareEngineNetworkRequest (
name="name_value",
)
# Make the request
response = await client. get_vmware_engine_network (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GetVmwareEngineNetworkRequest , dict]]
The request object. Request message for VmwareEngine.GetVmwareEngineNetwork
name
str
Required. The resource name of the VMware Engine network to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/global/vmwareEngineNetworks/my-network This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.VmwareEngineNetwork
VMware Engine network resource that provides connectivity for VMware Engine private clouds.
grant_dns_bind_permission
grant_dns_bind_permission (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . GrantDnsBindPermissionRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
principal : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . Principal
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
Grants the bind permission to the customer provided
principal(user / service account) to bind their DNS zone
with the intranet VPC associated with the project.
DnsBindPermission is a global resource and location can
only be global.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_grant_dns_bind_permission():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
principal = vmwareengine_v1 . Principal ()
principal.user = "user_value"
request = vmwareengine_v1 . GrantDnsBindPermissionRequest (
name="name_value",
principal=principal,
)
# Make the request
operation = client. grant_dns_bind_permission (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.GrantDnsBindPermissionRequest , dict]]
The request object. Request message for VmwareEngine.GrantDnsBindPermission
name
str
Required. The name of the resource which stores the users/service accounts having the permission to bind to the corresponding intranet VPC of the consumer project. DnsBindPermission is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/global/dnsBindPermission This corresponds to the name field on the request instance; if request is provided, this should not be set.
principal
Principal
Required. The consumer provided user/service account which needs to be granted permission to bind with the intranet VPC corresponding to the consumer project. This corresponds to the principal field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be DnsBindPermission DnsBindPermission resource that contains the accounts having the consumer DNS bind permission on the corresponding intranet VPC of the consumer project.
hcx_activation_key_path
hcx_activation_key_path (
project : str , location : str , private_cloud : str , hcx_activation_key : str
) - > str
Returns a fully-qualified hcx_activation_key string.
list_clusters
list_clusters (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListClustersRequest , dict
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
) - > google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListClustersAsyncPager
Lists Cluster resources in a given private cloud.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_clusters():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListClustersRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_clusters (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListClustersRequest , dict]]
The request object. Request message for VmwareEngine.ListClusters
parent
str
Required. The resource name of the private cloud to query for clusters. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListClustersAsyncPager
Response message for VmwareEngine.ListClusters Iterating over this object will yield results and resolve additional pages automatically.
list_external_access_rules
list_external_access_rules (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListExternalAccessRulesRequest ,
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
google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListExternalAccessRulesAsyncPager
)
Lists ExternalAccessRule resources in the specified network
policy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_external_access_rules():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListExternalAccessRulesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_external_access_rules (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListExternalAccessRulesRequest , dict]]
The request object. Request message for VmwareEngine.ListExternalAccessRules
parent
str
Required. The resource name of the network policy to query for external access firewall rules. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1/networkPolicies/my-policy This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAccessRulesAsyncPager
Response message for VmwareEngine.ListExternalAccessRules Iterating over this object will yield results and resolve additional pages automatically.
list_external_addresses
list_external_addresses (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListExternalAddressesRequest ,
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
google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListExternalAddressesAsyncPager
)
Lists external IP addresses assigned to VMware
workload VMs in a given private cloud.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_external_addresses():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListExternalAddressesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_external_addresses (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListExternalAddressesRequest , dict]]
The request object. Request message for VmwareEngine.ListExternalAddresses
parent
str
Required. The resource name of the private cloud to be queried for external IP addresses. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListExternalAddressesAsyncPager
Response message for VmwareEngine.ListExternalAddresses Iterating over this object will yield results and resolve additional pages automatically.
list_hcx_activation_keys
list_hcx_activation_keys (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListHcxActivationKeysRequest ,
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
google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListHcxActivationKeysAsyncPager
)
Lists HcxActivationKey resources in a given private cloud.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_hcx_activation_keys():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListHcxActivationKeysRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_hcx_activation_keys (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListHcxActivationKeysRequest , dict]]
The request object. Request message for VmwareEngine.ListHcxActivationKeys
parent
str
Required. The resource name of the private cloud to be queried for HCX activation keys. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1/privateClouds/my-cloud This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListHcxActivationKeysAsyncPager
Response message for VmwareEngine.ListHcxActivationKeys Iterating over this object will yield results and resolve additional pages automatically.
list_locations
list_locations (
request : typing . Optional [
typing . Union [ google . cloud . location . locations_pb2 . ListLocationsRequest , dict ]
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
list_logging_servers
list_logging_servers (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListLoggingServersRequest ,
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
google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListLoggingServersAsyncPager
)
Lists logging servers configured for a given private
cloud.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_logging_servers():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListLoggingServersRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_logging_servers (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListLoggingServersRequest , dict]]
The request object. Request message for VmwareEngine.ListLoggingServers
parent
str
Required. The resource name of the private cloud to be queried for logging servers. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListLoggingServersAsyncPager
Response message for VmwareEngine.ListLoggingServers Iterating over this object will yield results and resolve additional pages automatically.
list_management_dns_zone_bindings
list_management_dns_zone_bindings (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListManagementDnsZoneBindingsRequest ,
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
google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListManagementDnsZoneBindingsAsyncPager
)
Lists Consumer VPCs bound to Management DNS Zone of a
given private cloud.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_management_dns_zone_bindings():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListManagementDnsZoneBindingsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_management_dns_zone_bindings (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListManagementDnsZoneBindingsRequest , dict]]
The request object. Request message for VmwareEngine.ListManagementDnsZoneBindings
parent
str
Required. The resource name of the private cloud to be queried for management DNS zone bindings. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListManagementDnsZoneBindingsAsyncPager
Response message for VmwareEngine.ListManagementDnsZoneBindings Iterating over this object will yield results and resolve additional pages automatically.
list_network_peerings
list_network_peerings (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListNetworkPeeringsRequest ,
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
google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListNetworkPeeringsAsyncPager
)
Lists NetworkPeering resources in a given project.
NetworkPeering is a global resource and location can only be
global.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_network_peerings():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListNetworkPeeringsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_network_peerings (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListNetworkPeeringsRequest , dict]]
The request object. Request message for VmwareEngine.ListNetworkPeerings
parent
str
Required. The resource name of the location (global) to query for network peerings. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/global This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListNetworkPeeringsAsyncPager
Response message for VmwareEngine.ListNetworkPeerings Iterating over this object will yield results and resolve additional pages automatically.
list_network_policies
list_network_policies (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListNetworkPoliciesRequest ,
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
google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListNetworkPoliciesAsyncPager
)
Lists NetworkPolicy resources in a specified project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_network_policies():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListNetworkPoliciesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_network_policies (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListNetworkPoliciesRequest , dict]]
The request object. Request message for VmwareEngine.ListNetworkPolicies
parent
str
Required. The resource name of the location (region) to query for network policies. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1 This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListNetworkPoliciesAsyncPager
Response message for VmwareEngine.ListNetworkPolicies Iterating over this object will yield results and resolve additional pages automatically.
list_node_types
list_node_types (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListNodeTypesRequest , dict
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
) - > google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListNodeTypesAsyncPager
Lists node types
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_node_types():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListNodeTypesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_node_types (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListNodeTypesRequest , dict]]
The request object. Request message for VmwareEngine.ListNodeTypes
parent
str
Required. The resource name of the location to be queried for node types. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListNodeTypesAsyncPager
Response message for VmwareEngine.ListNodeTypes Iterating over this object will yield results and resolve additional pages automatically.
list_nodes
list_nodes (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListNodesRequest , dict
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
) - > google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListNodesAsyncPager
Lists nodes in a given cluster.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_nodes():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListNodesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_nodes (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListNodesRequest , dict]]
The request object. Request message for VmwareEngine.ListNodes
parent
str
Required. The resource name of the cluster to be queried for nodes. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListNodesAsyncPager
Response message for VmwareEngine.ListNodes Iterating over this object will yield results and resolve additional pages automatically.
list_operations
list_operations (
request : typing . Optional [
typing . Union [ google . longrunning . operations_pb2 . ListOperationsRequest , dict ]
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
list_peering_routes
list_peering_routes (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListPeeringRoutesRequest ,
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
google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListPeeringRoutesAsyncPager
)
Lists the network peering routes exchanged over a
peering connection. NetworkPeering is a global resource
and location can only be global.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_peering_routes():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListPeeringRoutesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_peering_routes (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListPeeringRoutesRequest , dict]]
The request object. Request message for VmwareEngine.ListPeeringRoutes
parent
str
Required. The resource name of the network peering to retrieve peering routes from. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/global/networkPeerings/my-peering This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListPeeringRoutesAsyncPager
Response message for VmwareEngine.ListPeeringRoutes Iterating over this object will yield results and resolve additional pages automatically.
list_private_clouds
list_private_clouds (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateCloudsRequest ,
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
google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListPrivateCloudsAsyncPager
)
Lists PrivateCloud resources in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_private_clouds():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListPrivateCloudsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_private_clouds (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListPrivateCloudsRequest , dict]]
The request object. Request message for VmwareEngine.ListPrivateClouds
parent
str
Required. The resource name of the private cloud to be queried for clusters. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListPrivateCloudsAsyncPager
Response message for VmwareEngine.ListPrivateClouds Iterating over this object will yield results and resolve additional pages automatically.
list_private_connection_peering_routes
list_private_connection_peering_routes (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateConnectionPeeringRoutesRequest ,
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
google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListPrivateConnectionPeeringRoutesAsyncPager
)
Lists the private connection routes exchanged over a
peering connection.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_private_connection_peering_routes():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListPrivateConnectionPeeringRoutesRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_private_connection_peering_routes (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListPrivateConnectionPeeringRoutesRequest , dict]]
The request object. Request message for VmwareEngine.ListPrivateConnectionPeeringRoutes
parent
str
Required. The resource name of the private connection to retrieve peering routes from. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-west1/privateConnections/my-connection This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListPrivateConnectionPeeringRoutesAsyncPager
Response message for VmwareEngine.ListPrivateConnectionPeeringRoutes Iterating over this object will yield results and resolve additional pages automatically.
list_private_connections
list_private_connections (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateConnectionsRequest ,
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
google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListPrivateConnectionsAsyncPager
)
Lists PrivateConnection resources in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_private_connections():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListPrivateConnectionsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_private_connections (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListPrivateConnectionsRequest , dict]]
The request object. Request message for VmwareEngine.ListPrivateConnections
parent
str
Required. The resource name of the location to query for private connections. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1 This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListPrivateConnectionsAsyncPager
Response message for VmwareEngine.ListPrivateConnections Iterating over this object will yield results and resolve additional pages automatically.
list_subnets
list_subnets (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListSubnetsRequest , dict
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
) - > google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListSubnetsAsyncPager
Lists subnets in a given private cloud.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_subnets():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListSubnetsRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_subnets (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListSubnetsRequest , dict]]
The request object. Request message for VmwareEngine.ListSubnets
parent
str
Required. The resource name of the private cloud to be queried for subnets. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListSubnetsAsyncPager
Response message for VmwareEngine.ListSubnets Iterating over this object will yield results and resolve additional pages automatically.
list_vmware_engine_networks
list_vmware_engine_networks (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListVmwareEngineNetworksRequest ,
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
google . cloud . vmwareengine_v1 . services . vmware_engine . pagers . ListVmwareEngineNetworksAsyncPager
)
Lists VmwareEngineNetwork resources in a given project and
location.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_list_vmware_engine_networks():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ListVmwareEngineNetworksRequest (
parent="parent_value",
)
# Make the request
page_result = client. list_vmware_engine_networks (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ListVmwareEngineNetworksRequest , dict]]
The request object. Request message for VmwareEngine.ListVmwareEngineNetworks
parent
str
Required. The resource name of the location to query for VMware Engine networks. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/global This corresponds to the parent field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.services.vmware_engine.pagers.ListVmwareEngineNetworksAsyncPager
Response message for VmwareEngine.ListVmwareEngineNetworks Iterating over this object will yield results and resolve additional pages automatically.
logging_server_path
logging_server_path (
project : str , location : str , private_cloud : str , logging_server : str
) - > str
Returns a fully-qualified logging_server string.
management_dns_zone_binding_path
management_dns_zone_binding_path (
project : str , location : str , private_cloud : str , management_dns_zone_binding : str
) - > str
Returns a fully-qualified management_dns_zone_binding string.
network_path
network_path ( project : str , network : str ) - > str
Returns a fully-qualified network string.
network_peering_path
network_peering_path ( project : str , location : str , network_peering : str ) - > str
Returns a fully-qualified network_peering string.
network_policy_path
network_policy_path ( project : str , location : str , network_policy : str ) - > str
Returns a fully-qualified network_policy string.
node_path
node_path (
project : str , location : str , private_cloud : str , cluster : str , node : str
) - > str
Returns a fully-qualified node string.
node_type_path
node_type_path ( project : str , location : str , node_type : str ) - > str
Returns a fully-qualified node_type string.
parse_cluster_path
parse_cluster_path ( path : str ) - > typing . Dict [ str , str ]
Parses a cluster path into its component segments.
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
parse_dns_bind_permission_path
parse_dns_bind_permission_path ( path : str ) - > typing . Dict [ str , str ]
Parses a dns_bind_permission path into its component segments.
parse_dns_forwarding_path
parse_dns_forwarding_path ( path : str ) - > typing . Dict [ str , str ]
Parses a dns_forwarding path into its component segments.
parse_external_access_rule_path
parse_external_access_rule_path ( path : str ) - > typing . Dict [ str , str ]
Parses a external_access_rule path into its component segments.
parse_external_address_path
parse_external_address_path ( path : str ) - > typing . Dict [ str , str ]
Parses a external_address path into its component segments.
parse_hcx_activation_key_path
parse_hcx_activation_key_path ( path : str ) - > typing . Dict [ str , str ]
Parses a hcx_activation_key path into its component segments.
parse_logging_server_path
parse_logging_server_path ( path : str ) - > typing . Dict [ str , str ]
Parses a logging_server path into its component segments.
parse_management_dns_zone_binding_path
parse_management_dns_zone_binding_path ( path : str ) - > typing . Dict [ str , str ]
Parses a management_dns_zone_binding path into its component segments.
parse_network_path
parse_network_path ( path : str ) - > typing . Dict [ str , str ]
Parses a network path into its component segments.
parse_network_peering_path
parse_network_peering_path ( path : str ) - > typing . Dict [ str , str ]
Parses a network_peering path into its component segments.
parse_network_policy_path
parse_network_policy_path ( path : str ) - > typing . Dict [ str , str ]
Parses a network_policy path into its component segments.
parse_node_path
parse_node_path ( path : str ) - > typing . Dict [ str , str ]
Parses a node path into its component segments.
parse_node_type_path
parse_node_type_path ( path : str ) - > typing . Dict [ str , str ]
Parses a node_type path into its component segments.
parse_private_cloud_path
parse_private_cloud_path ( path : str ) - > typing . Dict [ str , str ]
Parses a private_cloud path into its component segments.
parse_private_connection_path
parse_private_connection_path ( path : str ) - > typing . Dict [ str , str ]
Parses a private_connection path into its component segments.
parse_subnet_path
parse_subnet_path ( path : str ) - > typing . Dict [ str , str ]
Parses a subnet path into its component segments.
parse_vmware_engine_network_path
parse_vmware_engine_network_path ( path : str ) - > typing . Dict [ str , str ]
Parses a vmware_engine_network path into its component segments.
private_cloud_path
private_cloud_path ( project : str , location : str , private_cloud : str ) - > str
Returns a fully-qualified private_cloud string.
private_connection_path
private_connection_path (
project : str , location : str , private_connection : str
) - > str
Returns a fully-qualified private_connection string.
repair_management_dns_zone_binding
repair_management_dns_zone_binding (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . RepairManagementDnsZoneBindingRequest ,
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
Retries to create a ManagementDnsZoneBinding resource that
is in failed state.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_repair_management_dns_zone_binding():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . RepairManagementDnsZoneBindingRequest (
name="name_value",
)
# Make the request
operation = client. repair_management_dns_zone_binding (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.RepairManagementDnsZoneBindingRequest , dict]]
The request object. Request message for [VmwareEngine.RepairManagementDnsZoneBindings][]
name
str
Required. The resource name of the management DNS zone binding to repair. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be ManagementDnsZoneBinding Represents a binding between a network and the management DNS zone. A management DNS zone is the Cloud DNS cross-project binding zone that VMware Engine creates for each private cloud. It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager.
reset_nsx_credentials
reset_nsx_credentials (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ResetNsxCredentialsRequest ,
dict ,
]
] = None ,
* ,
private_cloud : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Resets credentials of the NSX appliance.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_reset_nsx_credentials():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ResetNsxCredentialsRequest (
private_cloud="private_cloud_value",
)
# Make the request
operation = client. reset_nsx_credentials (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ResetNsxCredentialsRequest , dict]]
The request object. Request message for VmwareEngine.ResetNsxCredentials
private_cloud
str
Required. The resource name of the private cloud to reset credentials for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the private_cloud field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be PrivateCloud Represents a private cloud resource. Private clouds of type STANDARD and TIME_LIMITED are zonal resources, STRETCHED private clouds are regional.
reset_vcenter_credentials
reset_vcenter_credentials (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ResetVcenterCredentialsRequest ,
dict ,
]
] = None ,
* ,
private_cloud : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . operation_async . AsyncOperation
Resets credentials of the Vcenter appliance.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_reset_vcenter_credentials():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ResetVcenterCredentialsRequest (
private_cloud="private_cloud_value",
)
# Make the request
operation = client. reset_vcenter_credentials (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ResetVcenterCredentialsRequest , dict]]
The request object. Request message for VmwareEngine.ResetVcenterCredentials
private_cloud
str
Required. The resource name of the private cloud to reset credentials for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the private_cloud field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be PrivateCloud Represents a private cloud resource. Private clouds of type STANDARD and TIME_LIMITED are zonal resources, STRETCHED private clouds are regional.
revoke_dns_bind_permission
revoke_dns_bind_permission (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . RevokeDnsBindPermissionRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
principal : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . Principal
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
Revokes the bind permission from the customer
provided principal(user / service account) on the
intranet VPC associated with the consumer project.
DnsBindPermission is a global resource and location can
only be global.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_revoke_dns_bind_permission():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
principal = vmwareengine_v1 . Principal ()
principal.user = "user_value"
request = vmwareengine_v1 . RevokeDnsBindPermissionRequest (
name="name_value",
principal=principal,
)
# Make the request
operation = client. revoke_dns_bind_permission (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.RevokeDnsBindPermissionRequest , dict]]
The request object. Request message for VmwareEngine.RevokeDnsBindPermission
name
str
Required. The name of the resource which stores the users/service accounts having the permission to bind to the corresponding intranet VPC of the consumer project. DnsBindPermission is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/global/dnsBindPermission This corresponds to the name field on the request instance; if request is provided, this should not be set.
principal
Principal
Required. The consumer provided user/service account which needs to be granted permission to bind with the intranet VPC corresponding to the consumer project. This corresponds to the principal field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be DnsBindPermission DnsBindPermission resource that contains the accounts having the consumer DNS bind permission on the corresponding intranet VPC of the consumer project.
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
Sets the IAM access control policy on the specified function.
Replaces any existing policy.
Parameters
Name
Description
request
.iam_policy_pb2.SetIamPolicyRequest
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
.policy_pb2.Policy
Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources. A Policy is a collection of bindings . A binding binds one or more members to a single role . Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions (defined by IAM or configured by users). A binding can optionally specify a condition , which is a logic expression that further constrains the role binding based on attributes about the request and/or target resource. **JSON Example** :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" **yaml="" example**="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide __.
show_nsx_credentials
show_nsx_credentials (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ShowNsxCredentialsRequest ,
dict ,
]
] = None ,
* ,
private_cloud : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . Credentials
Gets details of credentials for NSX appliance.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_show_nsx_credentials():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ShowNsxCredentialsRequest (
private_cloud="private_cloud_value",
)
# Make the request
response = await client. show_nsx_credentials (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ShowNsxCredentialsRequest , dict]]
The request object. Request message for VmwareEngine.ShowNsxCredentials
private_cloud
str
Required. The resource name of the private cloud to be queried for credentials. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the private_cloud field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.Credentials
Credentials for a private cloud.
show_vcenter_credentials
show_vcenter_credentials (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . ShowVcenterCredentialsRequest ,
dict ,
]
] = None ,
* ,
private_cloud : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . vmwareengine_v1 . types . vmwareengine_resources . Credentials
Gets details of credentials for Vcenter appliance.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_show_vcenter_credentials():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . ShowVcenterCredentialsRequest (
private_cloud="private_cloud_value",
)
# Make the request
response = await client. show_vcenter_credentials (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.ShowVcenterCredentialsRequest , dict]]
The request object. Request message for VmwareEngine.ShowVcenterCredentials
private_cloud
str
Required. The resource name of the private cloud to be queried for credentials. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the private_cloud field on the request instance; if request is provided, this should not be set.
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
google.cloud.vmwareengine_v1.types.Credentials
Credentials for a private cloud.
subnet_path
subnet_path ( project : str , location : str , private_cloud : str , subnet : str ) - > str
Returns a fully-qualified subnet string.
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
Tests the specified IAM permissions against the IAM access control
policy for a function.
If the function does not exist, this will return an empty set
of permissions, not a NOT_FOUND error.
Parameters
Name
Description
request
.iam_policy_pb2.TestIamPermissionsRequest
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
.iam_policy_pb2.TestIamPermissionsResponse
Response message for TestIamPermissions method.
undelete_private_cloud
undelete_private_cloud (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . UndeletePrivateCloudRequest ,
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
Restores a private cloud that was previously scheduled for
deletion by DeletePrivateCloud . A PrivateCloud resource
scheduled for deletion has PrivateCloud.state set to
DELETED and PrivateCloud.expireTime set to the time when
deletion can no longer be reversed.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_undelete_private_cloud():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . UndeletePrivateCloudRequest (
name="name_value",
)
# Make the request
operation = client. undelete_private_cloud (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.UndeletePrivateCloudRequest , dict]]
The request object. Request message for VmwareEngine.UndeletePrivateCloud
name
str
Required. The resource name of the private cloud scheduled for deletion. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names . For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be PrivateCloud Represents a private cloud resource. Private clouds of type STANDARD and TIME_LIMITED are zonal resources, STRETCHED private clouds are regional.
update_cluster
update_cluster (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . UpdateClusterRequest , dict
]
] = None ,
* ,
cluster : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . Cluster
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
Modifies a Cluster resource. Only fields specified in
updateMask are applied.
During operation processing, the resource is temporarily in the
ACTIVE state before the operation fully completes. For that
period of time, you can't update the resource. Use the operation
status to determine when the processing fully completes.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_update_cluster():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . UpdateClusterRequest (
)
# Make the request
operation = client. update_cluster (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.UpdateClusterRequest , dict]]
The request object. Request message for VmwareEngine.UpdateCluster
cluster
Cluster
Required. The description of the cluster. This corresponds to the cluster field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the Cluster resource by the update. The fields specified in the updateMask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Cluster A cluster in a private cloud.
update_dns_forwarding
update_dns_forwarding (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . UpdateDnsForwardingRequest ,
dict ,
]
] = None ,
* ,
dns_forwarding : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . DnsForwarding
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
Updates the parameters of the DnsForwarding config, like
associated domains. Only fields specified in update_mask are
applied.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_update_dns_forwarding():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
dns_forwarding = vmwareengine_v1 . DnsForwarding ()
dns_forwarding.forwarding_rules.domain = "domain_value"
dns_forwarding.forwarding_rules.name_servers = ['name_servers_value1', 'name_servers_value2']
request = vmwareengine_v1 . UpdateDnsForwardingRequest (
dns_forwarding=dns_forwarding,
)
# Make the request
operation = client. update_dns_forwarding (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.UpdateDnsForwardingRequest , dict]]
The request object. Request message for VmwareEngine.UpdateDnsForwarding
dns_forwarding
DnsForwarding
Required. DnsForwarding config details. This corresponds to the dns_forwarding field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the DnsForwarding resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be DnsForwarding DNS forwarding config. This config defines a list of domain to name server mappings, and is attached to the private cloud for custom domain resolution.
update_external_access_rule
update_external_access_rule (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . UpdateExternalAccessRuleRequest ,
dict ,
]
] = None ,
* ,
external_access_rule : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . ExternalAccessRule
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
Updates the parameters of a single external access rule. Only
fields specified in update_mask are applied.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_update_external_access_rule():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . UpdateExternalAccessRuleRequest (
)
# Make the request
operation = client. update_external_access_rule (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.UpdateExternalAccessRuleRequest , dict]]
The request object. Request message for VmwareEngine.UpdateExternalAccessRule
external_access_rule
ExternalAccessRule
Required. Description of the external access rule. This corresponds to the external_access_rule field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the ExternalAccessRule resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be ExternalAccessRule External access firewall rules for filtering incoming traffic destined to ExternalAddress resources.
update_external_address
update_external_address (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . UpdateExternalAddressRequest ,
dict ,
]
] = None ,
* ,
external_address : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . ExternalAddress
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
Updates the parameters of a single external IP address. Only
fields specified in update_mask are applied.
During operation processing, the resource is temporarily in the
ACTIVE state before the operation fully completes. For that
period of time, you can't update the resource. Use the operation
status to determine when the processing fully completes.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_update_external_address():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . UpdateExternalAddressRequest (
)
# Make the request
operation = client. update_external_address (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.UpdateExternalAddressRequest , dict]]
The request object. Request message for VmwareEngine.UpdateExternalAddress
external_address
ExternalAddress
Required. External IP address description. This corresponds to the external_address field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the ExternalAddress resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be ExternalAddress Represents an allocated external IP address and its corresponding internal IP address in a private cloud.
update_logging_server
update_logging_server (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . UpdateLoggingServerRequest ,
dict ,
]
] = None ,
* ,
logging_server : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . LoggingServer
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
Updates the parameters of a single logging server. Only fields
specified in update_mask are applied.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_update_logging_server():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
logging_server = vmwareengine_v1 . LoggingServer ()
logging_server.hostname = "hostname_value"
logging_server.port = 453
logging_server.protocol = "RELP"
logging_server.source_type = "VCSA"
request = vmwareengine_v1 . UpdateLoggingServerRequest (
logging_server=logging_server,
)
# Make the request
operation = client. update_logging_server (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.UpdateLoggingServerRequest , dict]]
The request object. Request message for VmwareEngine.UpdateLoggingServer
logging_server
LoggingServer
Required. Logging server description. This corresponds to the logging_server field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the LoggingServer resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be LoggingServer Logging server to receive vCenter or ESXi logs.
update_management_dns_zone_binding
update_management_dns_zone_binding (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . UpdateManagementDnsZoneBindingRequest ,
dict ,
]
] = None ,
* ,
management_dns_zone_binding : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . ManagementDnsZoneBinding
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
Updates a ManagementDnsZoneBinding resource. Only fields
specified in update_mask are applied.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_update_management_dns_zone_binding():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
management_dns_zone_binding = vmwareengine_v1 . ManagementDnsZoneBinding ()
management_dns_zone_binding.vpc_network = "vpc_network_value"
request = vmwareengine_v1 . UpdateManagementDnsZoneBindingRequest (
management_dns_zone_binding=management_dns_zone_binding,
)
# Make the request
operation = client. update_management_dns_zone_binding (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.UpdateManagementDnsZoneBindingRequest , dict]]
The request object. Request message for VmwareEngine.UpdateManagementDnsZoneBinding
management_dns_zone_binding
ManagementDnsZoneBinding
Required. New values to update the management DNS zone binding with. This corresponds to the management_dns_zone_binding field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the ManagementDnsZoneBinding resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be ManagementDnsZoneBinding Represents a binding between a network and the management DNS zone. A management DNS zone is the Cloud DNS cross-project binding zone that VMware Engine creates for each private cloud. It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager.
update_network_peering
update_network_peering (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . UpdateNetworkPeeringRequest ,
dict ,
]
] = None ,
* ,
network_peering : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . NetworkPeering
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
Modifies a NetworkPeering resource. Only the description
field can be updated. Only fields specified in updateMask
are applied. NetworkPeering is a global resource and location
can only be global.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_update_network_peering():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
network_peering = vmwareengine_v1 . NetworkPeering ()
network_peering.peer_network = "peer_network_value"
network_peering.peer_network_type = "GOOGLE_CLOUD_NETAPP_VOLUMES"
network_peering.vmware_engine_network = "vmware_engine_network_value"
request = vmwareengine_v1 . UpdateNetworkPeeringRequest (
network_peering=network_peering,
)
# Make the request
operation = client. update_network_peering (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.UpdateNetworkPeeringRequest , dict]]
The request object. Request message for VmwareEngine.UpdateNetworkPeering
network_peering
NetworkPeering
Required. Network peering description. This corresponds to the network_peering field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the NetworkPeering resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be NetworkPeering Details of a network peering.
update_network_policy
update_network_policy (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . UpdateNetworkPolicyRequest ,
dict ,
]
] = None ,
* ,
network_policy : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . NetworkPolicy
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
Modifies a NetworkPolicy resource. Only the following fields
can be updated: internet_access , external_ip ,
edge_services_cidr . Only fields specified in updateMask
are applied. When updating a network policy, the external IP
network service can only be disabled if there are no external IP
addresses present in the scope of the policy. Also, a
NetworkService cannot be updated when
NetworkService.state is set to RECONCILING .
During operation processing, the resource is temporarily in the
ACTIVE state before the operation fully completes. For that
period of time, you can't update the resource. Use the operation
status to determine when the processing fully completes.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_update_network_policy():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
network_policy = vmwareengine_v1 . NetworkPolicy ()
network_policy.edge_services_cidr = "edge_services_cidr_value"
request = vmwareengine_v1 . UpdateNetworkPolicyRequest (
network_policy=network_policy,
)
# Make the request
operation = client. update_network_policy (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.UpdateNetworkPolicyRequest , dict]]
The request object. Request message for VmwareEngine.UpdateNetworkPolicy
network_policy
NetworkPolicy
Required. Network policy description. This corresponds to the network_policy field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the NetworkPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be NetworkPolicy Represents a network policy resource. Network policies are regional resources. You can use a network policy to enable or disable internet access and external IP access. Network policies are associated with a VMware Engine network, which might span across regions. For a given region, a network policy applies to all private clouds in the VMware Engine network associated with the policy.
update_private_cloud
update_private_cloud (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . UpdatePrivateCloudRequest ,
dict ,
]
] = None ,
* ,
private_cloud : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . PrivateCloud
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
Modifies a PrivateCloud resource. Only the following fields
can be updated: description . Only fields specified in
updateMask are applied.
During operation processing, the resource is temporarily in the
ACTIVE state before the operation fully completes. For that
period of time, you can't update the resource. Use the operation
status to determine when the processing fully completes.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_update_private_cloud():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
private_cloud = vmwareengine_v1 . PrivateCloud ()
private_cloud.network_config.management_cidr = "management_cidr_value"
private_cloud.management_cluster.cluster_id = "cluster_id_value"
request = vmwareengine_v1 . UpdatePrivateCloudRequest (
private_cloud=private_cloud,
)
# Make the request
operation = client. update_private_cloud (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.UpdatePrivateCloudRequest , dict]]
The request object. Request message for VmwareEngine.UpdatePrivateCloud
private_cloud
PrivateCloud
Required. Private cloud description. This corresponds to the private_cloud field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the PrivateCloud resource by the update. The fields specified in updateMask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be PrivateCloud Represents a private cloud resource. Private clouds of type STANDARD and TIME_LIMITED are zonal resources, STRETCHED private clouds are regional.
update_private_connection
update_private_connection (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . UpdatePrivateConnectionRequest ,
dict ,
]
] = None ,
* ,
private_connection : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . PrivateConnection
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
Modifies a PrivateConnection resource. Only description
and routing_mode fields can be updated. Only fields
specified in updateMask are applied.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_update_private_connection():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
private_connection = vmwareengine_v1 . PrivateConnection ()
private_connection.vmware_engine_network = "vmware_engine_network_value"
private_connection.type_ = "THIRD_PARTY_SERVICE"
private_connection.service_network = "service_network_value"
request = vmwareengine_v1 . UpdatePrivateConnectionRequest (
private_connection=private_connection,
)
# Make the request
operation = client. update_private_connection (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.UpdatePrivateConnectionRequest , dict]]
The request object. Request message for VmwareEngine.UpdatePrivateConnection
private_connection
PrivateConnection
Required. Private connection description. This corresponds to the private_connection field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the PrivateConnection resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be PrivateConnection Private connection resource that provides connectivity for VMware Engine private clouds.
update_subnet
update_subnet (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . UpdateSubnetRequest , dict
]
] = None ,
* ,
subnet : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . Subnet
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
Updates the parameters of a single subnet. Only fields specified
in update_mask are applied.
Note : This API is synchronous and always returns a successful
google.longrunning.Operation (LRO). The returned LRO will
only have done and response fields.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_update_subnet():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
request = vmwareengine_v1 . UpdateSubnetRequest (
)
# Make the request
operation = client. update_subnet (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.UpdateSubnetRequest , dict]]
The request object. Request message for VmwareEngine.UpdateSubnet
subnet
Subnet
Required. Subnet description. This corresponds to the subnet field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the Subnet resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be Subnet Subnet in a private cloud. Either management subnets (such as vMotion) that are read-only, or userDefined, which can also be updated.
update_vmware_engine_network
update_vmware_engine_network (
request : typing . Optional [
typing . Union [
google . cloud . vmwareengine_v1 . types . vmwareengine . UpdateVmwareEngineNetworkRequest ,
dict ,
]
] = None ,
* ,
vmware_engine_network : typing . Optional [
google . cloud . vmwareengine_v1 . types . vmwareengine_resources . VmwareEngineNetwork
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
Modifies a VMware Engine network resource. Only the following
fields can be updated: description . Only fields specified in
updateMask are applied.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import vmwareengine_v1
async def sample_update_vmware_engine_network():
# Create a client
client = vmwareengine_v1 . VmwareEngineAsyncClient ()
# Initialize request argument(s)
vmware_engine_network = vmwareengine_v1 . VmwareEngineNetwork ()
vmware_engine_network.type_ = "STANDARD"
request = vmwareengine_v1 . UpdateVmwareEngineNetworkRequest (
vmware_engine_network=vmware_engine_network,
)
# Make the request
operation = client. update_vmware_engine_network (request=request)
print("Waiting for operation to complete...")
response = (await operation).result()
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.vmwareengine_v1.types.UpdateVmwareEngineNetworkRequest , dict]]
The request object. Request message for VmwareEngine.UpdateVmwareEngineNetwork
vmware_engine_network
VmwareEngineNetwork
Required. VMware Engine network description. This corresponds to the vmware_engine_network field on the request instance; if request is provided, this should not be set.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. Field mask is used to specify the fields to be overwritten in the VMware Engine network resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. Only the following fields can be updated: description . This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
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
An object representing a long-running operation. The result type for the operation will be VmwareEngineNetwork VMware Engine network resource that provides connectivity for VMware Engine private clouds.
vmware_engine_network_path
vmware_engine_network_path (
project : str , location : str , vmware_engine_network : str
) - > str
Returns a fully-qualified vmware_engine_network string.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
