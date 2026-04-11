---
title: "Class DisksClient (1.41.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/compute/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient
  title: "Class DisksClient (1.41.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class DisksClient (1.41.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.41.0 (latest)
1.40.0
1.39.0
1.38.0
1.37.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.27.0
1.26.0
1.25.0
1.24.0
1.23.0
1.22.0
1.21.0
1.20.1
1.19.2
1.18.0
1.17.0
1.16.1
1.15.0
1.14.1
1.13.0
1.12.1
1.11.0
1.10.1
1.9.0
1.8.0
1.7.0
1.6.1
1.5.2
1.4.0
1.3.2
1.2.0
1.1.0
1.0.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.2
0.3.0
0.2.1
0.1.0
DisksClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . compute_v1 . services . disks . transports . base . DisksTransport ,
typing . Callable [
[ ... ],
google . cloud . compute_v1 . services . disks . transports . base . DisksTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
The Disks API.
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
DisksTransport
The transport used by the client instance.
universe_domain
Return the universe domain used by the client instance.
Returns
Type
Description
str
The universe domain used by the client instance.
Methods
DisksClient
DisksClient (
* ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [
typing . Union [
str ,
google . cloud . compute_v1 . services . disks . transports . base . DisksTransport ,
typing . Callable [
[ ... ],
google . cloud . compute_v1 . services . disks . transports . base . DisksTransport ,
],
]
] = None ,
client_options : typing . Optional [
typing . Union [ google . api_core . client_options . ClientOptions , dict ]
] = None ,
client_info : google . api_core . gapic_v1 . client_info . ClientInfo = google . api_core . gapic_v1 . client_info . ClientInfo
)
Instantiates the disks client.
Parameters
Name
Description
credentials
Optional[google.auth.credentials.Credentials]
The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.
transport
Optional[Union[str,DisksTransport,Callable[..., DisksTransport]]]
The transport to use, or a Callable that constructs and returns a new transport. If a Callable is given, it will be called with the same set of initialization arguments as used in the DisksTransport constructor. If set to None, a transport is chosen automatically. NOTE: "rest" transport functionality is currently in a beta state (preview). We welcome your feedback via an issue in this library's source repository.
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
add_resource_policies
add_resource_policies (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . AddResourcePoliciesDiskRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
disks_add_resource_policies_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . DisksAddResourcePoliciesRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Adds existing resource policies to a disk. You can
only add one policy which will be applied to this disk
for scheduling snapshot creation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_add_resource_policies():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . AddResourcePoliciesDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. add_resource_policies (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.AddResourcePoliciesDiskRequest , dict]
The request object. A request message for Disks.AddResourcePolicies. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
The disk name for this request. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
disks_add_resource_policies_request_resource
google.cloud.compute_v1.types.DisksAddResourcePoliciesRequest
The body resource for this request This corresponds to the disks_add_resource_policies_request_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
add_resource_policies_unary
add_resource_policies_unary (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . AddResourcePoliciesDiskRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
disks_add_resource_policies_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . DisksAddResourcePoliciesRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Adds existing resource policies to a disk. You can
only add one policy which will be applied to this disk
for scheduling snapshot creation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_add_resource_policies():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . AddResourcePoliciesDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. add_resource_policies (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.AddResourcePoliciesDiskRequest , dict]
The request object. A request message for Disks.AddResourcePolicies. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
The disk name for this request. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
disks_add_resource_policies_request_resource
google.cloud.compute_v1.types.DisksAddResourcePoliciesRequest
The body resource for this request This corresponds to the disks_add_resource_policies_request_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
aggregated_list
aggregated_list (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . AggregatedListDisksRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . services . disks . pagers . AggregatedListPager
Retrieves an aggregated list of persistent disks. To prevent
failure, Google recommends that you set the
returnPartialSuccess parameter to true .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_aggregated_list():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . AggregatedListDisksRequest (
project="project_value",
)
# Make the request
page_result = client. aggregated_list (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.AggregatedListDisksRequest , dict]
The request object. A request message for Disks.AggregatedList. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
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
google.cloud.compute_v1.services.disks.pagers.AggregatedListPager
Iterating over this object will yield results and resolve additional pages automatically.
bulk_insert
bulk_insert (
request : typing . Optional [
typing . Union [ google . cloud . compute_v1 . types . compute . BulkInsertDiskRequest , dict ]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
bulk_insert_disk_resource_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . BulkInsertDiskResource
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Bulk create a set of disks.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_bulk_insert():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . BulkInsertDiskRequest (
project="project_value",
zone="zone_value",
)
# Make the request
response = client. bulk_insert (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.BulkInsertDiskRequest , dict]
The request object. A request message for Disks.BulkInsert. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
bulk_insert_disk_resource_resource
google.cloud.compute_v1.types.BulkInsertDiskResource
The body resource for this request This corresponds to the bulk_insert_disk_resource_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
bulk_insert_unary
bulk_insert_unary (
request : typing . Optional [
typing . Union [ google . cloud . compute_v1 . types . compute . BulkInsertDiskRequest , dict ]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
bulk_insert_disk_resource_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . BulkInsertDiskResource
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Bulk create a set of disks.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_bulk_insert():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . BulkInsertDiskRequest (
project="project_value",
zone="zone_value",
)
# Make the request
response = client. bulk_insert (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.BulkInsertDiskRequest , dict]
The request object. A request message for Disks.BulkInsert. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
bulk_insert_disk_resource_resource
google.cloud.compute_v1.types.BulkInsertDiskResource
The body resource for this request This corresponds to the bulk_insert_disk_resource_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
bulk_set_labels
bulk_set_labels (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . BulkSetLabelsDiskRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
bulk_zone_set_labels_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . BulkZoneSetLabelsRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Sets the labels on many disks at once. To learn more
about labels, read the Labeling Resources documentation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_bulk_set_labels():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . BulkSetLabelsDiskRequest (
project="project_value",
zone="zone_value",
)
# Make the request
response = client. bulk_set_labels (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.BulkSetLabelsDiskRequest , dict]
The request object. A request message for Disks.BulkSetLabels. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
bulk_zone_set_labels_request_resource
google.cloud.compute_v1.types.BulkZoneSetLabelsRequest
The body resource for this request This corresponds to the bulk_zone_set_labels_request_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
bulk_set_labels_unary
bulk_set_labels_unary (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . BulkSetLabelsDiskRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
bulk_zone_set_labels_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . BulkZoneSetLabelsRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Sets the labels on many disks at once. To learn more
about labels, read the Labeling Resources documentation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_bulk_set_labels():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . BulkSetLabelsDiskRequest (
project="project_value",
zone="zone_value",
)
# Make the request
response = client. bulk_set_labels (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.BulkSetLabelsDiskRequest , dict]
The request object. A request message for Disks.BulkSetLabels. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
bulk_zone_set_labels_request_resource
google.cloud.compute_v1.types.BulkZoneSetLabelsRequest
The body resource for this request This corresponds to the bulk_zone_set_labels_request_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
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
create_snapshot
create_snapshot (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . CreateSnapshotDiskRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
snapshot_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . Snapshot
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Creates a snapshot of a specified persistent disk.
For regular snapshot creation, consider using
snapshots.insert instead, as that method supports more
features, such as creating snapshots in a project
different from the source disk project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_create_snapshot():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . CreateSnapshotDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. create_snapshot (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.CreateSnapshotDiskRequest , dict]
The request object. A request message for Disks.CreateSnapshot. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
Name of the persistent disk to snapshot. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
snapshot_resource
google.cloud.compute_v1.types.Snapshot
The body resource for this request This corresponds to the snapshot_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
create_snapshot_unary
create_snapshot_unary (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . CreateSnapshotDiskRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
snapshot_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . Snapshot
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Creates a snapshot of a specified persistent disk.
For regular snapshot creation, consider using
snapshots.insert instead, as that method supports more
features, such as creating snapshots in a project
different from the source disk project.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_create_snapshot():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . CreateSnapshotDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. create_snapshot (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.CreateSnapshotDiskRequest , dict]
The request object. A request message for Disks.CreateSnapshot. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
Name of the persistent disk to snapshot. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
snapshot_resource
google.cloud.compute_v1.types.Snapshot
The body resource for this request This corresponds to the snapshot_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
delete
delete (
request : typing . Optional [
typing . Union [ google . cloud . compute_v1 . types . compute . DeleteDiskRequest , dict ]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Deletes the specified persistent disk. Deleting a
disk removes its data permanently and is irreversible.
However, deleting a disk does not delete any snapshots
previously made from the disk. You must separately
delete snapshots.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_delete():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . DeleteDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. delete (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.DeleteDiskRequest , dict]
The request object. A request message for Disks.Delete. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
Name of the persistent disk to delete. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
delete_unary
delete_unary (
request : typing . Optional [
typing . Union [ google . cloud . compute_v1 . types . compute . DeleteDiskRequest , dict ]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Deletes the specified persistent disk. Deleting a
disk removes its data permanently and is irreversible.
However, deleting a disk does not delete any snapshots
previously made from the disk. You must separately
delete snapshots.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_delete():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . DeleteDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. delete (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.DeleteDiskRequest , dict]
The request object. A request message for Disks.Delete. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
Name of the persistent disk to delete. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
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
DisksClient
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
DisksClient
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
DisksClient
The constructed client.
get
get (
request : typing . Optional [
typing . Union [ google . cloud . compute_v1 . types . compute . GetDiskRequest , dict ]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Disk
Returns the specified persistent disk.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_get():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . GetDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. get (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.GetDiskRequest , dict]
The request object. A request message for Disks.Get. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
Name of the persistent disk to return. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
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
google.cloud.compute_v1.types.Disk
Represents a Persistent Disk resource. Google Compute Engine has two Disk resources: \* [Zonal](/compute/docs/reference/rest/v1/disks) \* [Regional](/compute/docs/reference/rest/v1/regionDisks) Persistent disks are required for running your VM instances. Create both boot and non-boot (data) persistent disks. For more information, read Persistent Disks. For more storage options, read Storage options. The disks resource represents a zonal persistent disk. For more information, read Zonal persistent disks. The regionDisks resource represents a regional persistent disk. For more information, read Regional resources.
get_iam_policy
get_iam_policy (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . GetIamPolicyDiskRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
resource : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Policy
Gets the access control policy for a resource. May be
empty if no such policy or resource exists.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_get_iam_policy():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . GetIamPolicyDiskRequest (
project="project_value",
resource="resource_value",
zone="zone_value",
)
# Make the request
response = client. get_iam_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.GetIamPolicyDiskRequest , dict]
The request object. A request message for Disks.GetIamPolicy. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
resource
str
Name or id of the resource for this request. This corresponds to the resource field on the request instance; if request is provided, this should not be set.
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
google.cloud.compute_v1.types.Policy
An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \**YAML example:\*\* \ bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
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
insert
insert (
request : typing . Optional [
typing . Union [ google . cloud . compute_v1 . types . compute . InsertDiskRequest , dict ]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk_resource : typing . Optional [ google . cloud . compute_v1 . types . compute . Disk ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Creates a persistent disk in the specified project
using the data in the request. You can create a disk
from a source (sourceImage, sourceSnapshot, or
sourceDisk) or create an empty 500 GB data disk by
omitting all properties. You can also create a disk that
is larger than the default size by specifying the sizeGb
property.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_insert():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . InsertDiskRequest (
project="project_value",
zone="zone_value",
)
# Make the request
response = client. insert (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.InsertDiskRequest , dict]
The request object. A request message for Disks.Insert. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk_resource
google.cloud.compute_v1.types.Disk
The body resource for this request This corresponds to the disk_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
insert_unary
insert_unary (
request : typing . Optional [
typing . Union [ google . cloud . compute_v1 . types . compute . InsertDiskRequest , dict ]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk_resource : typing . Optional [ google . cloud . compute_v1 . types . compute . Disk ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Creates a persistent disk in the specified project
using the data in the request. You can create a disk
from a source (sourceImage, sourceSnapshot, or
sourceDisk) or create an empty 500 GB data disk by
omitting all properties. You can also create a disk that
is larger than the default size by specifying the sizeGb
property.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_insert():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . InsertDiskRequest (
project="project_value",
zone="zone_value",
)
# Make the request
response = client. insert (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.InsertDiskRequest , dict]
The request object. A request message for Disks.Insert. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk_resource
google.cloud.compute_v1.types.Disk
The body resource for this request This corresponds to the disk_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
list
list (
request : typing . Optional [
typing . Union [ google . cloud . compute_v1 . types . compute . ListDisksRequest , dict ]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . services . disks . pagers . ListPager
Retrieves a list of persistent disks contained within
the specified zone.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_list():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . ListDisksRequest (
project="project_value",
zone="zone_value",
)
# Make the request
page_result = client. list (request=request)
# Handle the response
for response in page_result:
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.ListDisksRequest , dict]
The request object. A request message for Disks.List. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
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
google.cloud.compute_v1.services.disks.pagers.ListPager
A list of Disk resources. Iterating over this object will yield results and resolve additional pages automatically.
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
remove_resource_policies
remove_resource_policies (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . RemoveResourcePoliciesDiskRequest ,
dict ,
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
disks_remove_resource_policies_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . DisksRemoveResourcePoliciesRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Removes resource policies from a disk.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_remove_resource_policies():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . RemoveResourcePoliciesDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. remove_resource_policies (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.RemoveResourcePoliciesDiskRequest , dict]
The request object. A request message for Disks.RemoveResourcePolicies. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
The disk name for this request. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
disks_remove_resource_policies_request_resource
google.cloud.compute_v1.types.DisksRemoveResourcePoliciesRequest
The body resource for this request This corresponds to the disks_remove_resource_policies_request_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
remove_resource_policies_unary
remove_resource_policies_unary (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . RemoveResourcePoliciesDiskRequest ,
dict ,
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
disks_remove_resource_policies_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . DisksRemoveResourcePoliciesRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Removes resource policies from a disk.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_remove_resource_policies():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . RemoveResourcePoliciesDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. remove_resource_policies (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.RemoveResourcePoliciesDiskRequest , dict]
The request object. A request message for Disks.RemoveResourcePolicies. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
The disk name for this request. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
disks_remove_resource_policies_request_resource
google.cloud.compute_v1.types.DisksRemoveResourcePoliciesRequest
The body resource for this request This corresponds to the disks_remove_resource_policies_request_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
resize
resize (
request : typing . Optional [
typing . Union [ google . cloud . compute_v1 . types . compute . ResizeDiskRequest , dict ]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
disks_resize_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . DisksResizeRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Resizes the specified persistent disk. You can only
increase the size of the disk.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_resize():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . ResizeDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. resize (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.ResizeDiskRequest , dict]
The request object. A request message for Disks.Resize. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
The name of the persistent disk. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
disks_resize_request_resource
google.cloud.compute_v1.types.DisksResizeRequest
The body resource for this request This corresponds to the disks_resize_request_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
resize_unary
resize_unary (
request : typing . Optional [
typing . Union [ google . cloud . compute_v1 . types . compute . ResizeDiskRequest , dict ]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
disks_resize_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . DisksResizeRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Resizes the specified persistent disk. You can only
increase the size of the disk.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_resize():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . ResizeDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. resize (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.ResizeDiskRequest , dict]
The request object. A request message for Disks.Resize. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
The name of the persistent disk. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
disks_resize_request_resource
google.cloud.compute_v1.types.DisksResizeRequest
The body resource for this request This corresponds to the disks_resize_request_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
set_iam_policy
set_iam_policy (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . SetIamPolicyDiskRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
resource : typing . Optional [ str ] = None ,
zone_set_policy_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . ZoneSetPolicyRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Policy
Sets the access control policy on the specified
resource. Replaces any existing policy.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_set_iam_policy():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . SetIamPolicyDiskRequest (
project="project_value",
resource="resource_value",
zone="zone_value",
)
# Make the request
response = client. set_iam_policy (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.SetIamPolicyDiskRequest , dict]
The request object. A request message for Disks.SetIamPolicy. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
resource
str
Name or id of the resource for this request. This corresponds to the resource field on the request instance; if request is provided, this should not be set.
zone_set_policy_request_resource
google.cloud.compute_v1.types.ZoneSetPolicyRequest
The body resource for this request This corresponds to the zone_set_policy_request_resource field on the request instance; if request is provided, this should not be set.
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
google.cloud.compute_v1.types.Policy
An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \**YAML example:\*\* \ bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
set_labels
set_labels (
request : typing . Optional [
typing . Union [ google . cloud . compute_v1 . types . compute . SetLabelsDiskRequest , dict ]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
resource : typing . Optional [ str ] = None ,
zone_set_labels_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . ZoneSetLabelsRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Sets the labels on a disk. To learn more about
labels, read the Labeling Resources documentation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_set_labels():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . SetLabelsDiskRequest (
project="project_value",
resource="resource_value",
zone="zone_value",
)
# Make the request
response = client. set_labels (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.SetLabelsDiskRequest , dict]
The request object. A request message for Disks.SetLabels. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
resource
str
Name or id of the resource for this request. This corresponds to the resource field on the request instance; if request is provided, this should not be set.
zone_set_labels_request_resource
google.cloud.compute_v1.types.ZoneSetLabelsRequest
The body resource for this request This corresponds to the zone_set_labels_request_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
set_labels_unary
set_labels_unary (
request : typing . Optional [
typing . Union [ google . cloud . compute_v1 . types . compute . SetLabelsDiskRequest , dict ]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
resource : typing . Optional [ str ] = None ,
zone_set_labels_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . ZoneSetLabelsRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Sets the labels on a disk. To learn more about
labels, read the Labeling Resources documentation.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_set_labels():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . SetLabelsDiskRequest (
project="project_value",
resource="resource_value",
zone="zone_value",
)
# Make the request
response = client. set_labels (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.SetLabelsDiskRequest , dict]
The request object. A request message for Disks.SetLabels. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
resource
str
Name or id of the resource for this request. This corresponds to the resource field on the request instance; if request is provided, this should not be set.
zone_set_labels_request_resource
google.cloud.compute_v1.types.ZoneSetLabelsRequest
The body resource for this request This corresponds to the zone_set_labels_request_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
start_async_replication
start_async_replication (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . StartAsyncReplicationDiskRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
disks_start_async_replication_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . DisksStartAsyncReplicationRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Starts asynchronous replication. Must be invoked on
the primary disk.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_start_async_replication():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . StartAsyncReplicationDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. start_async_replication (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.StartAsyncReplicationDiskRequest , dict]
The request object. A request message for Disks.StartAsyncReplication. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
The name of the persistent disk. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
disks_start_async_replication_request_resource
google.cloud.compute_v1.types.DisksStartAsyncReplicationRequest
The body resource for this request This corresponds to the disks_start_async_replication_request_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
start_async_replication_unary
start_async_replication_unary (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . StartAsyncReplicationDiskRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
disks_start_async_replication_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . DisksStartAsyncReplicationRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Starts asynchronous replication. Must be invoked on
the primary disk.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_start_async_replication():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . StartAsyncReplicationDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. start_async_replication (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.StartAsyncReplicationDiskRequest , dict]
The request object. A request message for Disks.StartAsyncReplication. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
The name of the persistent disk. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
disks_start_async_replication_request_resource
google.cloud.compute_v1.types.DisksStartAsyncReplicationRequest
The body resource for this request This corresponds to the disks_start_async_replication_request_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
stop_async_replication
stop_async_replication (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . StopAsyncReplicationDiskRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Stops asynchronous replication. Can be invoked either
on the primary or on the secondary disk.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_stop_async_replication():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . StopAsyncReplicationDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. stop_async_replication (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.StopAsyncReplicationDiskRequest , dict]
The request object. A request message for Disks.StopAsyncReplication. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
The name of the persistent disk. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
stop_async_replication_unary
stop_async_replication_unary (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . StopAsyncReplicationDiskRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Stops asynchronous replication. Can be invoked either
on the primary or on the secondary disk.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_stop_async_replication():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . StopAsyncReplicationDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. stop_async_replication (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.StopAsyncReplicationDiskRequest , dict]
The request object. A request message for Disks.StopAsyncReplication. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
The name of the persistent disk. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
stop_group_async_replication
stop_group_async_replication (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . StopGroupAsyncReplicationDiskRequest ,
dict ,
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disks_stop_group_async_replication_resource_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . DisksStopGroupAsyncReplicationResource
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Stops asynchronous replication for a consistency
group of disks. Can be invoked either in the primary or
secondary scope.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_stop_group_async_replication():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . StopGroupAsyncReplicationDiskRequest (
project="project_value",
zone="zone_value",
)
# Make the request
response = client. stop_group_async_replication (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.StopGroupAsyncReplicationDiskRequest , dict]
The request object. A request message for Disks.StopGroupAsyncReplication. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This must be the zone of the primary or secondary disks in the consistency group. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disks_stop_group_async_replication_resource_resource
google.cloud.compute_v1.types.DisksStopGroupAsyncReplicationResource
The body resource for this request This corresponds to the disks_stop_group_async_replication_resource_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
stop_group_async_replication_unary
stop_group_async_replication_unary (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . StopGroupAsyncReplicationDiskRequest ,
dict ,
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disks_stop_group_async_replication_resource_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . DisksStopGroupAsyncReplicationResource
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Stops asynchronous replication for a consistency
group of disks. Can be invoked either in the primary or
secondary scope.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_stop_group_async_replication():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . StopGroupAsyncReplicationDiskRequest (
project="project_value",
zone="zone_value",
)
# Make the request
response = client. stop_group_async_replication (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.StopGroupAsyncReplicationDiskRequest , dict]
The request object. A request message for Disks.StopGroupAsyncReplication. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This must be the zone of the primary or secondary disks in the consistency group. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disks_stop_group_async_replication_resource_resource
google.cloud.compute_v1.types.DisksStopGroupAsyncReplicationResource
The body resource for this request This corresponds to the disks_stop_group_async_replication_resource_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
test_iam_permissions
test_iam_permissions (
request : typing . Optional [
typing . Union [
google . cloud . compute_v1 . types . compute . TestIamPermissionsDiskRequest , dict
]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
resource : typing . Optional [ str ] = None ,
test_permissions_request_resource : typing . Optional [
google . cloud . compute_v1 . types . compute . TestPermissionsRequest
] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . TestPermissionsResponse
Returns permissions that a caller has on the
specified resource.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_test_iam_permissions():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . TestIamPermissionsDiskRequest (
project="project_value",
resource="resource_value",
zone="zone_value",
)
# Make the request
response = client. test_iam_permissions (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.TestIamPermissionsDiskRequest , dict]
The request object. A request message for Disks.TestIamPermissions. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
resource
str
Name or id of the resource for this request. This corresponds to the resource field on the request instance; if request is provided, this should not be set.
test_permissions_request_resource
google.cloud.compute_v1.types.TestPermissionsRequest
The body resource for this request This corresponds to the test_permissions_request_resource field on the request instance; if request is provided, this should not be set.
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried.
timeout
float
The timeout for this request.
metadata
Sequence[Tuple[str, Union[str, bytes]]]
Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes .
update
update (
request : typing . Optional [
typing . Union [ google . cloud . compute_v1 . types . compute . UpdateDiskRequest , dict ]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
disk_resource : typing . Optional [ google . cloud . compute_v1 . types . compute . Disk ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . api_core . extended_operation . ExtendedOperation
Updates the specified disk with the data included in the
request. The update is performed only on selected fields
included as part of update-mask. Only the following fields can
be modified: user_license.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_update():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . UpdateDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. update (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.UpdateDiskRequest , dict]
The request object. A request message for Disks.Update. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
The disk name for this request. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
disk_resource
google.cloud.compute_v1.types.Disk
The body resource for this request This corresponds to the disk_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
update_unary
update_unary (
request : typing . Optional [
typing . Union [ google . cloud . compute_v1 . types . compute . UpdateDiskRequest , dict ]
] = None ,
* ,
project : typing . Optional [ str ] = None ,
zone : typing . Optional [ str ] = None ,
disk : typing . Optional [ str ] = None ,
disk_resource : typing . Optional [ google . cloud . compute_v1 . types . compute . Disk ] = None ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
) - > google . cloud . compute_v1 . types . compute . Operation
Updates the specified disk with the data included in the
request. The update is performed only on selected fields
included as part of update-mask. Only the following fields can
be modified: user_license.
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import compute_v1
def sample_update():
# Create a client
client = compute_v1 . DisksClient ()
# Initialize request argument(s)
request = compute_v1 . UpdateDiskRequest (
disk="disk_value",
project="project_value",
zone="zone_value",
)
# Make the request
response = client. update (request=request)
# Handle the response
print(response)
Parameters
Name
Description
request
Union[ google.cloud.compute_v1.types.UpdateDiskRequest , dict]
The request object. A request message for Disks.Update. See the method description for details.
project
str
Project ID for this request. This corresponds to the project field on the request instance; if request is provided, this should not be set.
zone
str
The name of the zone for this request. This corresponds to the zone field on the request instance; if request is provided, this should not be set.
disk
str
The disk name for this request. This corresponds to the disk field on the request instance; if request is provided, this should not be set.
disk_resource
google.cloud.compute_v1.types.Disk
The body resource for this request This corresponds to the disk_resource field on the request instance; if request is provided, this should not be set.
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
google.api_core.extended_operation.ExtendedOperation
An object representing a extended long-running operation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
