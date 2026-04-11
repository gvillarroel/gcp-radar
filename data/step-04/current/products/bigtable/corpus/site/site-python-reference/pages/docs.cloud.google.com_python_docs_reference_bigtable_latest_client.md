---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/client
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/client
  title: "Python client libraries \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.35.0 (latest)
2.34.0
2.33.0
2.32.0
2.31.0
2.30.1
2.29.0
2.28.1
2.26.0
2.25.0
2.24.0
2.23.1
2.22.0
2.21.0
2.20.0
2.19.0
2.18.1
2.17.0
2.16.0
2.15.0
2.14.1
2.13.2
2.12.0
2.11.3
2.10.1
2.9.0
2.8.1
2.7.1
2.6.0
2.5.2
2.4.0
2.3.3
2.2.0
2.1.0
2.0.0
1.7.3
1.6.1
1.5.1
1.4.0
1.3.0
1.2.1
1.1.0
1.0.0
0.34.0
Client
Parent client for calling the Google Cloud Bigtable API.
This is the base from which all interactions with the API occur.
In the hierarchy of API concepts
a Client owns an
Instance
an Instance owns a
Table
a Table owns a
ColumnFamily
a Table owns a
Row (and all the cells in the row)
google.cloud.bigtable.client.ADMIN_SCOPE( = ' https://www.googleapis.com/auth/bigtable.admin )
Scope for interacting with the Cluster Admin and Table Admin APIs.
class google.cloud.bigtable.client.Client(project=None, credentials=None, read_only=False, admin=False, client_info=None, client_options=None, admin_client_options=None, channel=None)
Bases: google.cloud.client.ClientWithProject
Client for interacting with Google Cloud Bigtable API.
NOTE : Since the Cloud Bigtable API requires the gRPC transport, no
_http argument is accepted by this class.
Parameters
project ( str or unicode ) – (Optional) The ID of the project which owns the
instances, tables and data. If not provided, will
attempt to determine from the environment.
credentials ( Credentials ) – (Optional) The OAuth2 Credentials to use for this
client. If not passed, falls back to the default
inferred from the environment.
read_only ( bool ) – (Optional) Boolean indicating if the data scope should be
for reading only (or for writing as well). Defaults to
False .
admin ( bool ) – (Optional) Boolean indicating if the client will be used to
interact with the Instance Admin or Table Admin APIs. This
requires the ADMIN_SCOPE . Defaults to False .
client_info – The client info used to send a user-agent string along with API
requests. If None , then default info will be used. Generally,
you only need to set this if you’re developing your own library
or partner tool.
client_options ( ClientOptions
or dict ) – (Optional) Client options used to set user options
on the client. API Endpoint should be set through client_options.
admin_client_options ( ClientOptions or dict ) – (Optional) Client options used to set user
options on the client. API Endpoint for admin operations should be set
through admin_client_options.
( grpc.Channel ) ( channel ) – (Optional) DEPRECATED:
A Channel instance through which to make calls.
This argument is mutually exclusive with credentials ;
providing both will raise an exception. No longer used.
Type
client_info: google.api_core.gapic_v1.client_info.ClientInfo
Raises
ValueError if both read_only
and admin are True
instance(instance_id, display_name=None, instance_type=None, labels=None)
Factory to create a instance associated with this client.
For example:
from google.cloud.bigtable import Client
from google.cloud.bigtable import enums
my_instance_id = "inst-my-" + UNIQUE_SUFFIX
my_cluster_id = "clus-my-" + UNIQUE_SUFFIX
location_id = "us-central1-f"
serve_nodes = 1
storage_type = enums. StorageType .SSD
production = enums.Instance.Type.PRODUCTION
labels = {"prod-label": "prod-label"}
client = Client(admin=True)
instance = client . instance (my_instance_id, instance_type=production, labels=labels)
cluster = instance.cluster(
my_cluster_id,
location_id=location_id,
serve_nodes=serve_nodes,
default_storage_type=storage_type,
)
operation = instance.create(clusters=[cluster])
# We want to make sure the operation completes.
operation.result(timeout=100)
Parameters
instance_id ( str ) – The ID of the instance.
display_name ( str ) – (Optional) The display name for the instance in
the Cloud Console UI. (Must be between 4 and 30
characters.) If this value is not set in the
constructor, will fall back to the instance ID.
instance_type ( int ) – (Optional) The type of the instance.
Possible values are represented
by the following constants:
google.cloud.bigtable.instance.InstanceType.PRODUCTION .
google.cloud.bigtable.instance.InstanceType.DEVELOPMENT ,
Defaults to
google.cloud.bigtable.instance.InstanceType.UNSPECIFIED .
labels ( dict ) – (Optional) Labels are a flexible and lightweight
mechanism for organizing cloud resources into groups
that reflect a customer’s organizational needs and
deployment strategies. They can be used to filter
resources and aggregate metrics. Label keys must be
between 1 and 63 characters long. Maximum 64 labels can
be associated with a given resource. Label values must
be between 0 and 63 characters long. Keys and values
must both be under 128 bytes.
Return type
Instance
Returns
an instance owned by this client.
property instance_admin_client()
Getter for the gRPC stub used for the Table Admin API.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance_admin_client = client .instance_admin_client
Return type
bigtable_admin_pb2.BigtableInstanceAdmin
Returns
A BigtableInstanceAdmin instance.
Raises
ValueError if the current
client is not an admin client or if it has not been
start() -ed.
list_clusters()
List the clusters in the project.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
(clusters_list, failed_locations_list) = client . list_clusters ()
Return type
tuple
Returns
(clusters, failed_locations), where ‘clusters’ is list of
google.cloud.bigtable.instance.Cluster , and
‘failed_locations’ is a list of strings representing
locations which could not be resolved.
list_instances()
List instances owned by the project.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
(instances_list, failed_locations_list) = client . list_instances ()
Return type
tuple
Returns
(instances, failed_locations), where ‘instances’ is list of
google.cloud.bigtable.instance.Instance , and
‘failed_locations’ is a list of locations which could not
be resolved.
property project_path()
Project name to be used with Instance Admin API.
NOTE : This property will not change if project does not, but the
return value is not cached.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
project_path = client . project_path
The project name is of the form
"projects/{project}"
Return type
str
Returns
Return a fully-qualified project string.
property table_admin_client()
Getter for the gRPC stub used for the Table Admin API.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
table_admin_client = client . table_admin_client
Return type
bigtable_admin_pb2.BigtableTableAdmin
Returns
A BigtableTableAdmin instance.
Raises
ValueError if the current
client is not an admin client or if it has not been
start() -ed.
property table_data_client()
Getter for the gRPC stub used for the Table Admin API.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
table_data_client = client . table_data_client
Return type
bigtable_v2.BigtableClient
Returns
A BigtableClient object.
google.cloud.bigtable.client.DATA_SCOPE( = ' https://www.googleapis.com/auth/bigtable.data )
Scope for reading and writing table data.
google.cloud.bigtable.client.READ_ONLY_SCOPE( = ' https://www.googleapis.com/auth/bigtable.data.readonly )
Scope for reading table data.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
