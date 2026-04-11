---
title: "Class AlertPolicyServiceAsyncClient (2.30.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/monitoring/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient
  title: "Class AlertPolicyServiceAsyncClient (2.30.0) \_|\_ Python client libraries\
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
Class AlertPolicyServiceAsyncClient (2.30.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.30.0 (latest)
2.29.1
2.28.0
2.27.2
2.26.0
2.25.0
2.24.0
2.23.1
2.22.2
2.21.0
2.20.0
2.19.4
2.18.0
2.17.0
2.16.0
2.15.1
2.14.2
2.13.0
2.12.0
2.11.3
2.10.1
2.9.2
2.8.0
2.7.0
2.6.0
2.5.2
2.4.2
2.3.0
2.2.1
2.1.0
2.0.1
1.1.2
1.0.0
0.36.2
0.35.0
0.34.0
0.33.0
0.32.0
AlertPolicyServiceAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . monitoring_v3 . services . alert_policy_service . transports . base . AlertPolicyServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . monitoring_v3 . services . alert_policy_service . transports . base . AlertPolicyServiceTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
The AlertPolicyService API is used to manage (list, create, delete,
edit) alert policies in Cloud Monitoring. An alerting policy is a
description of the conditions under which some aspect of your system
is considered to be "unhealthy" and the ways to notify people or
services about this state. In addition to using this API, alert
policies can also be managed through Cloud
Monitoring <https://cloud.google.com/monitoring/docs/> , which can
be reached by clicking the "Monitoring" tab in Cloud
console <https://console.cloud.google.com/> .
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
AlertPolicyServiceTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
AlertPolicyServiceAsyncClient
AlertPolicyServiceAsyncClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . monitoring_v3 . services . alert_policy_service . transports . base . AlertPolicyServiceTransport ,
typing . Callable [
[ ... ],
google . cloud . monitoring_v3 . services . alert_policy_service . transports . base . AlertPolicyServiceTransport ,
],
]
] = "grpc_asyncio" ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the alert policy service async client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,AlertPolicyServiceTransport,Callable[..., AlertPolicyServiceTransport]]]
The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the AlertPolicyServiceTransport constructor. If set to None, a transport is chosen automatically.
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
alert_policy_condition_path
alert_policy_condition_path ( project : str , alert_policy : str , condition : str ) - > str
Returns a fully-qualified alert_policy_condition string.
alert_policy_path
alert_policy_path ( project : str , alert_policy : str ) - > str
Returns a fully-qualified alert_policy string.
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
create_alert_policy
create_alert_policy (
request : typing . Optional [
typing . Union [
google . cloud . monitoring_v3 . types . alert_service . CreateAlertPolicyRequest ,
dict ,
]
] = None ,
* ,
name : typing . Optional [ str ] = None ,
alert_policy : typing . Optional [
google . cloud . monitoring_v3 . types . alert . AlertPolicy
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . monitoring_v3 . types . alert . AlertPolicy
Creates a new alerting policy.
Design your application to single-thread API calls that
modify the state of alerting policies in a single
project. This includes calls to CreateAlertPolicy,
DeleteAlertPolicy and UpdateAlertPolicy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import monitoring_v3
async def sample_create_alert_policy():
# Create a client
client = monitoring_v3 . AlertPolicyServiceAsyncClient ()
# Initialize request argument(s)
request = monitoring_v3 . CreateAlertPolicyRequest (
name="name_value",
)
# Make the request
response = await client. create_alert_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.monitoring_v3.types.CreateAlertPolicyRequest , dict]]
The request object. The protocol for the CreateAlertPolicy request.
name
str
Required. The project https://cloud.google.com/monitoring/api/v3#project_name __ in which to create the alerting policy. The format is: :: projects/[PROJECT_ID_OR_NUMBER] Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name\ must be a host project of a Metrics Scope, otherwise INVALID_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form /alertPolicies/[ALERT_POLICY_ID] , identifying the policy in the container. This corresponds to the name field on the request instance; if request is provided, this should not be set.
alert_policy
AlertPolicy
Required. The requested alerting policy. You should omit the name field in this policy. The name will be returned in the new policy, including a new [ALERT_POLICY_ID] value. This corresponds to the alert_policy field on the request instance; if request is provided, this should not be set.
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
google.cloud.monitoring_v3.types.AlertPolicy
A description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state. For an overview of alerting policies, see [Introduction to Alerting](https://cloud.google.com/monitoring/alerts/).
delete_alert_policy
delete_alert_policy (
request : typing . Optional [
typing . Union [
google . cloud . monitoring_v3 . types . alert_service . DeleteAlertPolicyRequest ,
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
Deletes an alerting policy.
Design your application to single-thread API calls that
modify the state of alerting policies in a single
project. This includes calls to CreateAlertPolicy,
DeleteAlertPolicy and UpdateAlertPolicy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import monitoring_v3
async def sample_delete_alert_policy():
# Create a client
client = monitoring_v3 . AlertPolicyServiceAsyncClient ()
# Initialize request argument(s)
request = monitoring_v3 . DeleteAlertPolicyRequest (
name="name_value",
)
# Make the request
await client. delete_alert_policy (request=request)
Parameters
Name
Description
request
Optional[Union[ google.cloud.monitoring_v3.types.DeleteAlertPolicyRequest , dict]]
The request object. The protocol for the DeleteAlertPolicy request.
name
str
Required. The alerting policy to delete. The format is: :: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] For more information, see AlertPolicy][google.monitoring.v3.AlertPolicy] . This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
AlertPolicyServiceAsyncClient
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
AlertPolicyServiceAsyncClient
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
AlertPolicyServiceAsyncClient
The constructed client.
get_alert_policy
get_alert_policy (
request : typing . Optional [
typing . Union [
google . cloud . monitoring_v3 . types . alert_service . GetAlertPolicyRequest , dict
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
) - > google . cloud . monitoring_v3 . types . alert . AlertPolicy
Gets a single alerting policy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import monitoring_v3
async def sample_get_alert_policy():
# Create a client
client = monitoring_v3 . AlertPolicyServiceAsyncClient ()
# Initialize request argument(s)
request = monitoring_v3 . GetAlertPolicyRequest (
name="name_value",
)
# Make the request
response = await client. get_alert_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.monitoring_v3.types.GetAlertPolicyRequest , dict]]
The request object. The protocol for the GetAlertPolicy request.
name
str
Required. The alerting policy to retrieve. The format is: :: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.monitoring_v3.types.AlertPolicy
A description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state. For an overview of alerting policies, see [Introduction to Alerting](https://cloud.google.com/monitoring/alerts/).
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
google . cloud . monitoring_v3 . services . alert_policy_service . transports . base . AlertPolicyServiceTransport
]
Returns an appropriate transport class.
Parameter
Name
Description
label
typing.Optional[str]
The name of the desired transport. If none is provided, then the first transport in the registry is used.
list_alert_policies
list_alert_policies (
request : typing . Optional [
typing . Union [
google . cloud . monitoring_v3 . types . alert_service . ListAlertPoliciesRequest ,
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
google . cloud . monitoring_v3 . services . alert_policy_service . pagers . ListAlertPoliciesAsyncPager
)
Lists the existing alerting policies for the
workspace.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import monitoring_v3
async def sample_list_alert_policies():
# Create a client
client = monitoring_v3 . AlertPolicyServiceAsyncClient ()
# Initialize request argument(s)
request = monitoring_v3 . ListAlertPoliciesRequest (
name="name_value",
)
# Make the request
page_result = client. list_alert_policies (request=request)
# Handle the response
async for response in page_result:
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.monitoring_v3.types.ListAlertPoliciesRequest , dict]]
The request object. The protocol for the ListAlertPolicies request.
name
str
Required. The project https://cloud.google.com/monitoring/api/v3#project_name __ whose alert policies are to be listed. The format is: :: projects/[PROJECT_ID_OR_NUMBER] Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the GetAlertPolicy][google.monitoring.v3.AlertPolicyService.GetAlertPolicy] operation, instead. This corresponds to the name field on the request instance; if request is provided, this should not be set.
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
google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager
The protocol for the ListAlertPolicies response. Iterating over this object will yield results and resolve additional pages automatically.
parse_alert_policy_condition_path
parse_alert_policy_condition_path ( path : str ) - > typing . Dict [ str , str ]
Parses a alert_policy_condition path into its component segments.
parse_alert_policy_path
parse_alert_policy_path ( path : str ) - > typing . Dict [ str , str ]
Parses a alert_policy path into its component segments.
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
update_alert_policy
update_alert_policy (
request : typing . Optional [
typing . Union [
google . cloud . monitoring_v3 . types . alert_service . UpdateAlertPolicyRequest ,
dict ,
]
] = None ,
* ,
update_mask : typing . Optional [ google . protobuf . field_mask_pb2 . FieldMask ] = None ,
alert_policy : typing . Optional [
google . cloud . monitoring_v3 . types . alert . AlertPolicy
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . monitoring_v3 . types . alert . AlertPolicy
Updates an alerting policy. You can either replace the entire
policy with a new one or replace only certain fields in the
current alerting policy by specifying the fields to be updated
via updateMask . Returns the updated alerting policy.
Design your application to single-thread API calls that modify
the state of alerting policies in a single project. This
includes calls to CreateAlertPolicy, DeleteAlertPolicy and
UpdateAlertPolicy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import monitoring_v3
async def sample_update_alert_policy():
# Create a client
client = monitoring_v3 . AlertPolicyServiceAsyncClient ()
# Initialize request argument(s)
request = monitoring_v3 . UpdateAlertPolicyRequest (
)
# Make the request
response = await client. update_alert_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Optional[Union[ google.cloud.monitoring_v3.types.UpdateAlertPolicyRequest , dict]]
The request object. The protocol for the UpdateAlertPolicy request.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Optional. A list of alerting policy field names. If this field is not empty, each listed field in the existing alerting policy is set to the value of the corresponding field in the supplied policy ( alert_policy ), or to the field's default value if the field is not in the supplied alerting policy. Fields not listed retain their previous value. Examples of valid field masks include display_name , documentation , documentation.content , documentation.mime_type , user_labels , user_label.nameofkey , enabled , conditions , combiner , etc. If this field is empty, then the supplied alerting policy replaces the existing policy. It is the same as deleting the existing policy and adding the supplied policy, except for the following: - The new policy will have the same [ALERT_POLICY_ID] as the former policy. This gives you continuity with the former policy in your notifications and incidents. - Conditions in the new policy will keep their former [CONDITION_ID] if the supplied condition includes the name field with that [CONDITION_ID] . If the supplied condition omits the name field, then a new [CONDITION_ID] is created. This corresponds to the update_mask field on the request instance; if request is provided, this should not be set.
alert_policy
AlertPolicy
Required. The updated alerting policy or the updated values for the fields listed in update_mask . If update_mask is not empty, any fields in this policy that are not in update_mask are ignored. This corresponds to the alert_policy field on the request instance; if request is provided, this should not be set.
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
google.cloud.monitoring_v3.types.AlertPolicy
A description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state. For an overview of alerting policies, see [Introduction to Alerting](https://cloud.google.com/monitoring/alerts/).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
