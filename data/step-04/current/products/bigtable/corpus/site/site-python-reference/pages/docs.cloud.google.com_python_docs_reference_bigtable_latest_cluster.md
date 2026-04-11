---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/cluster
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/bigtable/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/bigtable/latest/cluster
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
Cluster
User friendly container for Google Cloud Bigtable Cluster.
class google.cloud.bigtable.cluster.Cluster(cluster_id, instance, location_id=None, serve_nodes=None, default_storage_type=None, kms_key_name=None, _state=None, min_serve_nodes=None, max_serve_nodes=None, cpu_utilization_percent=None)
Bases: object
Representation of a Google Cloud Bigtable Cluster.
We can use a Cluster to:
reload() itself
create() itself
update() itself
delete() itself
disable_autoscaling() itself
Parameters
cluster_id ( str ) – The ID of the cluster.
instance ( Instance ) – The instance where the cluster resides.
location_id ( str ) – (Creation Only) The location where this cluster’s
nodes and storage reside . For best performance,
clients should be located as close as possible to
this cluster.
For list of supported locations refer to
https://cloud.google.com/bigtable/docs/locations
serve_nodes ( int ) – (Optional) The number of nodes in the cluster for manual scaling. If any of the
autoscaling configuration are specified, then the autoscaling
configuration will take precedent.
default_storage_type ( int ) – (Optional) The type of storage
Possible values are represented by the
following constants:
google.cloud.bigtable.enums.StorageType.SSD .
google.cloud.bigtable.enums.StorageType.HDD ,
Defaults to
google.cloud.bigtable.enums.StorageType.UNSPECIFIED .
kms_key_name ( str ) – (Optional, Creation Only) The name of the KMS customer managed
encryption key (CMEK) to use for at-rest encryption of data in
this cluster. If omitted, Google’s default encryption will be
used. If specified, the requirements for this key are:
1. The Cloud Bigtable service account associated with the
project that contains the cluster must be granted the
`cloudkms.cryptoKeyEncrypterDecrypter` role on the CMEK.
2. Only regional keys can be used and the region of the CMEK
key must match the region of the cluster.
3. All clusters within an instance must use the same CMEK key.
* **_state** ([*int*](https://docs.python.org/3/library/functions.html#int)) – (OutputOnly)
The current state of the cluster.
Possible values are represented by the following constants:
`google.cloud.bigtable.enums.Cluster.State.NOT_KNOWN`.
`google.cloud.bigtable.enums.Cluster.State.READY`.
`google.cloud.bigtable.enums.Cluster.State.CREATING`.
`google.cloud.bigtable.enums.Cluster.State.RESIZING`.
`google.cloud.bigtable.enums.Cluster.State.DISABLED`.
* **min_serve_nodes** ([*int*](https://docs.python.org/3/library/functions.html#int)) – (Optional) The minimum number of nodes to be set in the cluster for autoscaling.
Must be 1 or greater.
If specified, this configuration takes precedence over
`serve_nodes`.
If specified, then
`max_serve_nodes` and `cpu_utilization_percent` must be
specified too.
* **max_serve_nodes** ([*int*](https://docs.python.org/3/library/functions.html#int)) – (Optional) The maximum number of nodes to be set in the cluster for autoscaling.
If specified, this configuration
takes precedence over `serve_nodes`. If specified, then
`min_serve_nodes` and `cpu_utilization_percent` must be
specified too.
* **cpu_utilization_percent** – (Optional) The CPU utilization target for the cluster’s workload for autoscaling.
If specified, this configuration takes precedence over `serve_nodes`. If specified, then
`min_serve_nodes` and `max_serve_nodes` must be
specified too.
create()
Create this cluster.
For example:
from google.cloud.bigtable import Client
from google.cloud.bigtable import enums
# Assuming that there is an existing instance with `INSTANCE_ID`
# on the server already.
# to create an instance see
# 'https://cloud.google.com/bigtable/docs/creating-instance'
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
cluster_id = "clus-my-" + UNIQUE_SUFFIX
location_id = "us-central1-a"
serve_nodes = 1
storage_type = enums. StorageType .SSD
cluster = instance.cluster(
cluster_id,
location_id=location_id,
serve_nodes=serve_nodes,
default_storage_type=storage_type,
)
operation = cluster.create()
# We want to make sure the operation completes.
operation.result(timeout=100)
NOTE : Uses the project , instance and cluster_id on the
current Cluster in addition to the serve_nodes .
To change them before creating, reset the values via
cluster.serve_nodes = 8
cluster.cluster_id = 'i-changed-my-mind'
before calling create() .
Return type
Operation
Returns
The long-running operation corresponding to the
create operation.
Raises
ValueError if the both serve_nodes and autoscaling configurations
are set at the same time or if none of the serve_nodes or autoscaling configurations are set
or if the autoscaling configurations are only partially set.
delete()
Delete this cluster.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
cluster_to_delete = instance.cluster(cluster_id)
cluster_to_delete.delete()
Marks a cluster and all of its tables for permanent deletion in 7 days.
Immediately upon completion of the request:
Billing will cease for all of the cluster’s reserved resources.
The cluster’s delete_time field will be set 7 days in the future.
Soon afterward:
All tables within the cluster will become unavailable.
At the cluster’s delete_time :
The cluster and all of its tables will immediately and
irrevocably disappear from the API, and their data will be
permanently deleted.
disable_autoscaling(serve_nodes)
Disable autoscaling by specifying the number of nodes.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
# Create a cluster with autoscaling enabled
cluster = instance.cluster(
CLUSTER_ID, min_serve_nodes=1, max_serve_nodes=2, cpu_utilization_percent=10
)
instance.create(clusters=[cluster])
# Disable autoscaling
cluster. disable_autoscaling (serve_nodes=4)
Parameters
serve_nodes ( int ) – The number of nodes in the cluster.
exists()
Check whether the cluster already exists.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
cluster = instance.cluster(CLUSTER_ID)
cluster_exists = cluster.exists()
Return type
bool
Returns
True if the table exists, else False.
classmethod from_pb(cluster_pb, instance)
Creates a cluster instance from a protobuf.
For example:
from google.cloud.bigtable import Client
from google.cloud.bigtable_admin_v2.types import instance as data_v2_pb2
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
cluster = instance.cluster(CLUSTER_ID)
name = cluster.name
cluster_state = cluster.state
serve_nodes = 1
cluster_pb = data_v2_pb2.Cluster(
name=name,
location=LOCATION_ID,
state=cluster_state,
serve_nodes=serve_nodes,
default_storage_type=STORAGE_TYPE,
)
cluster2 = cluster.from_pb(cluster_pb, instance)
Parameters
cluster_pb ( instance.Cluster ) – An instance protobuf object.
instance ( google.cloud.bigtable.instance.Instance ) – The instance that owns the cluster.
Return type
Cluster
Returns
The Cluster parsed from the protobuf response.
Raises
ValueError if the cluster
name does not match
projects/{project}/instances/{instance_id}/clusters/{cluster_id}
or if the parsed instance ID does not match the istance ID
on the client.
or if the parsed project ID does not match the project ID
on the client.
property kms_key_name()
Customer managed encryption key for the cluster.
Type
str
property name()
Cluster name used in requests.
NOTE : This property will not change if _instance and cluster_id
do not, but the return value is not cached.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
cluster = instance.cluster(CLUSTER_ID)
cluster_name = cluster.name
The cluster name is of the form
"projects/{project}/instances/{instance}/clusters/{cluster_id}"
Return type
str
Returns
The cluster name.
reload()
Reload the metadata for this cluster.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
cluster = instance.cluster(CLUSTER_ID)
cluster.reload()
property state()
state of cluster.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
cluster = instance.cluster(CLUSTER_ID)
cluster_state = cluster.state
Type
google.cloud.bigtable.enums.Cluster.State
update()
Update this cluster.
For example:
from google.cloud.bigtable import Client
client = Client(admin=True)
instance = client . instance (INSTANCE_ID)
cluster = instance.cluster(CLUSTER_ID)
cluster.serve_nodes = 4
cluster.update()
NOTE : Updates the serve_nodes . If you’d like to
change them before updating, reset the values via
cluster.serve_nodes = 8
before calling update() .
If autoscaling is already enabled, manual scaling will be silently ignored.
To disable autoscaling and enable manual scaling, use the disable_autoscaling() instead.
Return type
Operation
Returns
The long-running operation corresponding to the
update operation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
