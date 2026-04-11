---
title: "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-manage-private-cloud
  title: "Manage private cloud resources and activity \_|\_ Google Cloud VMware Engine\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Manage private cloud resources and activity
After you create a private cloud, you can view detailed information about it,
manage its resources and activity, and access its VMware management appliances.
Each private cloud contains one or more clusters, and each cluster contains
nodes that correspond to ESXi hosts.
Note: You can manage private clouds by using the Google Cloud console,
Google Cloud CLI, or the API. Google Cloud VMware Engine does not support Terraform for
provisioning or managing resources. Important: Adjustments to clusters assign VMware Engine node quota
corresponding to your Google Cloud project. To increase your quota, see
Quotas and limits .
To view a list of your private clouds, start by accessing its resource summary
page:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project where
you want to manage the private cloud.
Select the private cloud you want to manage from the list of private clouds.
gcloud and API requirements
To use the gcloud command line tool or the API to manage your VMware Engine
resources, we recommend configuring the tools as described below.
gcloud
Set your default project ID:
gcloud config set project PROJECT_ID
Set a default region and zone:
gcloud config set compute/region REGION
gcloud config set compute/zone ZONE
For more information on the gcloud vmware tool,
see the Cloud SDK reference docs .
API
API examples in this documentation set use the cURL command-line tool to
query the API. A valid access token is required as part of the cURL
request. There are many ways to get a valid access token; the following
steps use the gcloud tool to generate a access token:
Login to Google Cloud:
gcloud auth login
Generate access token and export to TOKEN:
export TOKEN=`gcloud auth print-access-token`
Verify that TOKEN is set properly:
echo $TOKEN
Now, use the authorization token in your requests to the API. For example:
curl -X GET -H "Authorization: Bearer \"$TOKEN\"" -H "Content-Type: application/json; charset=utf-8" https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations
Python
Python code samples in this documentation use the VMware Engine library to communicate with the API. To be able to use this approach, the library needs to be installed and the Application Default Credentials should be configured.
Download and install the Python library:
pip install google-cloud-vmwareengine
Configure the ADC information by executing those command in your shell:
gcloud auth application-default login
Or, use a Service Account key file:
export GOOGLE_APPLICATION_CREDENTIALS=" FILE_PATH "
For more information about the library, visit the reference page or view code samples on GitHub .
Verify IP address layout version
Private clouds created after November 2022 adhere to IP address layout (IP Plan)
version 2.0 subnet allocations. Almost all private clouds created before
November 2022 adhere to IP Plan version 1.0 subnet allocations.
To find out which version your private cloud adheres to, complete the following
steps:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project where
you want to manage the private cloud.
Select the name of the private cloud you
want to check. The version number is displayed with IP Plan version .
Viewing a private cloud summary
The summary provides information about your private cloud including its name,
number of vSphere clusters, number of nodes, location, operational state, and
more. The summary page also includes the DNS servers deployed on the private
cloud.
From the private cloud summary page, you can perform the following actions:
Launch vSphere Client. Access the vCenter
for this private cloud.
Add nodes. Add nodes to this private cloud.
Add cluster. Add a new cluster to this private cloud.
Create a cluster with custom core count configuration.
Create a new cluster with custom core count configuration.
Remove nodes. Remove nodes from this private cloud.
Delete the private cloud. Delete a private
cloud, including all of the VMs, vCenter configuration, and data. Before
deleting, back up all systems and data.
Change vSphere privileges. Elevate your
privileges to perform a particular task on this private cloud.
Copy IP addresses of DNS servers. Get a list of DNS servers on your
private cloud. You can set up DNS forwarding from on-premises DNS servers to
your private Cloud DNS servers. For more information about DNS forwarding, see
Configuring DNS for name resolution for private cloud vCenter access from
on-premises workstations .
Adding nodes to a private cloud
A private cloud consists of one or more vSphere clusters, each containing
multiple nodes. When adding nodes to a private cloud, you add nodes to the
existing cluster or create a new cluster. A private cloud can be expanded
multiple times, provided that you stay within the overall
node limits .
Each time you expand a private cloud, you add to the existing cluster or create
a new one.
As part of the new cluster configuration, Google configures the VMware
infrastructure. The settings include storage settings for vSAN disk groups,
VMware high availability, and Distributed Resource Scheduler (DRS).
Console
To add nodes to a private cloud with an existing cluster using the Google Cloud console, follow these steps:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project
that contains the private cloud.
Select the private cloud you want to manage from the list of private clouds.
On the private clouds summary page, click the Clusters tab.
Click the name of the existing cluster to open the cluster details page.
Click Edit .
Select the new node count to add HCI nodes, or select the Storage node type
and new node count to add Storage Only nodes, and then click Save .
gcloud
The update command lets you change the total node count for the cluster. This
command requires the name of the cluster and private cloud.
List the clusters by entering the
gcloud vmware private-clouds clusters list command :
gcloud vmware private-clouds clusters list \
--private-cloud= PRIVATE_CLOUD_ID \
--location= ZONE
Replace the following:
PRIVATE_CLOUD_ID : the name for the private cloud
ZONE : the zone for the private cloud
Update the cluster by running the
gcloud vmware private-clouds clusters update command :
gcloud vmware private-clouds clusters update CLUSTER_ID \
--location= ZONE \
--private-cloud= PRIVATE_CLOUD_ID \
--update-nodes-config=type= NODE_TYPE ,count= NODE_COUNT
Replace the following:
CLUSTER_ID : the cluster ID to update in this
private cloud.
ZONE : the zone for the private cloud.
PRIVATE_CLOUD_ID : the private cloud ID for
this request.
NODE_TYPE : the node type. For more
information, see Node types .
NODE_COUNT : the number of nodes to add.
API
The update API lets you change the total node count for the cluster. This
command requires the name of the cluster and private cloud.
List the clusters by making a GET request:
curl -L -X GET -H "Authorization: Bearer TOKEN " "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ ZONE /privateClouds/ PRIVATE_CLOUD_ID /clusters"
Replace the following:
PROJECT_ID : the project ID for this request
ZONE : the zone for the private cloud
PRIVATE_CLOUD_ID : the private cloud ID for
this request
Update the clusters by making a PATCH request. For example, the following
updates the cluster to standard-72 node type.
curl -L -X PATCH -H "Authorization: Bearer TOKEN " \
-H "Content-Type: application/json" \
"https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ ZONE /privateClouds/ PRIVATE_CLOUD_ID /clusters/ CLUSTER_ID ?updateMask=node_type_configs.*.node_count" \
-d '{
"nodeTypeConfigs": {
"standard-72" : {
"nodeCount": NODE_COUNT
}
}
}'
Replace the following:
PROJECT_ID : the project ID for this request
ZONE : the zone for the private cloud
PRIVATE_CLOUD_ID : the private cloud ID for
the private cloud
CLUSTER_ID : the cluster ID for the cluster
to update in this private cloud
NODE_COUNT : the number of nodes to add
Python
The cluster update method lets you change the total node count for the cluster.
This method requires the name of the cluster and private cloud.
List the clusters.
from typing import Iterable
from google.cloud import vmwareengine_v1
def list_clusters (
project_id : str , zone : str , private_cloud_name : str
) - > Iterable [ vmwareengine_v1 . Cluster ]:
"""
Retrieves a list of clusters in private cloud.
Args:
project_id: name of the project hosting the private cloud.
zone: zone in which the private cloud is located.
private_cloud_name: name of the cloud of which you want to list cluster.
Returns:
An iterable collection of Cluster objects.
"""
client = vmwareengine_v1 . VmwareEngineClient ()
return client . list_clusters (
parent = f "projects/ { project_id } /locations/ { zone } /privateClouds/ { private_cloud_name } "
)
Update the clusters. The following method lets you modify the number of
standard-72 nodes in the cluster.
from google.api_core import operation
from google.cloud import vmwareengine_v1
def update_cluster_node_count (
project_id : str ,
zone : str ,
private_cloud_name : str ,
cluster_name : str ,
node_count : int ,
) - > operation . Operation :
"""
Modify the number of nodes in a cluster in a private cloud.
Modifying a cluster is a long-running operation and it may take over an hour.
Args:
project_id: name of the project you want to use.
zone: zone in which your private cloud is located.
private_cloud_name: name of the private cloud hosting the cluster.
cluster_name: name of the cluster.
node_count: desired number of nodes in the cluster.
Returns:
An Operation object related to cluster modification operation.
"""
if node_count < 3 :
raise RuntimeError ( "Cluster needs to have at least 3 nodes" )
client = vmwareengine_v1 . VmwareEngineClient ()
request = vmwareengine_v1 . UpdateClusterRequest ()
request . cluster = vmwareengine_v1 . Cluster ()
request . cluster . name = (
f "projects/ { project_id } /locations/ { zone } /privateClouds/ { private_cloud_name } "
f "/clusters/ { cluster_name } "
)
request . cluster . node_type_configs = {
"standard-72" : vmwareengine_v1 . NodeTypeConfig ()
}
request . cluster . node_type_configs [ "standard-72" ] . node_count = node_count
request . update_mask = "nodeTypeConfigs.*.nodeCount"
return client . update_cluster ( request )
Add a new cluster to a private cloud
To add a new cluster to an existing private cloud, do the following:
Console
To add a new cluster using the Google Cloud console, follow these steps:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project
that contains the private cloud.
Select the private cloud you want to manage from the list of private clouds.
On the private clouds summary page, click the Clusters tab.
Click Add Cluster . Then, provide the following
details:
Enter a name for the cluster.
Select the node type for your new cluster.
Select the number of nodes. Each new cluster must have at least three
nodes.
Click Create .
gcloud
Add the new cluster and give it a name by running the
gcloud vmware private-clouds clusters create command :
For example:
gcloud vmware private-clouds clusters create CLUSTER_ID \
--location= ZONE \
--private-cloud= PRIVATE_CLOUD_ID \
--node-type-config=type= NODE_TYPE ,count= NODE_COUNT
Replace the following:
CLUSTER_ID : the cluster ID for the cluster
that you are adding to the private cloud.
ZONE : the zone for the private cloud.
PRIVATE_CLOUD_ID : the private cloud ID for
the private cloud.
NODE_TYPE : the node type. For more
information, see Node types .
NODE_COUNT : the number of nodes to add.
API
Add the new cluster and give it a name by making a POST request. For example:
curl -L -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json" \
"https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ ZONE /privateClouds/ PRIVATE_CLOUD_ID /clusters?clusterId= CLUSTER_ID " \
-d '{
"nodeTypeConfigs": {
"standard-72": {
"nodeCount": NODE_COUNT
}
}
}'
Replace the following:
CLUSTER_ID : the cluster ID for the cluster
that you are adding to the private cloud
ZONE : the zone for the private cloud
PRIVATE_CLOUD_ID : the private cloud ID
for the private cloud
NODE_COUNT : the number of nodes to add
Python
Add the new cluster and give it a name.
from google.api_core import operation
from google.cloud import vmwareengine_v1
def create_cluster (
project_id : str ,
zone : str ,
private_cloud_name : str ,
cluster_name : str ,
node_count : int = 4 ,
) - > operation . Operation :
"""
Create a new cluster in a private cloud.
Creation of a new cluster is a long-running operation and it may take over an hour.
Args:
project_id: name of the project you want to use.
zone: region in which your private cloud is located.
private_cloud_name: name of the private cloud hosting the new cluster.
cluster_name: name of the new cluster.
node_count: number of nodes in the new cluster. (Must be >= 3)
Returns:
An Operation object related to started cluster creation operation.
Raises:
ValueError in case an incorrect number of nodes is provided.
"""
if node_count < 3 :
raise ValueError ( "Cluster needs to have at least 3 nodes" )
request = vmwareengine_v1 . CreateClusterRequest ()
request . parent = (
f "projects/ { project_id } /locations/ { zone } /privateClouds/ { private_cloud_name } "
)
request . cluster = vmwareengine_v1 . Cluster ()
request . cluster . name = cluster_name
# Currently standard-72 is the only supported node type.
request . cluster . node_type_configs = {
"standard-72" : vmwareengine_v1 . NodeTypeConfig ()
}
request . cluster . node_type_configs [ "standard-72" ] . node_count = node_count
client = vmwareengine_v1 . VmwareEngineClient ()
return client . create_cluster ( request )
Create a new cluster with custom core count configuration
To create a new cluster with custom core count configuration, do the following:
Console
To add a new cluster using the Google Cloud console, follow these steps:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project
that contains the private cloud.
Select the private cloud you want to manage from the list of private clouds.
On the private clouds summary page, click the Clusters tab.
Click Add Cluster . Then, provide the following
details:
Enter a name for the cluster.
Select the number of nodes. Each new cluster must have at least three
nodes.
Select the node type for the cluster.
Check the Customize cores box to reduce the number of available cores for each node in the management cluster. For details, see Custom core counts .
Click Create .
gcloud
Add the new cluster and specify the core count configuration by running the
gcloud vmware private-clouds clusters create command :
The following example creates a new cluster with a standard-72 node type.
gcloud vmware private-clouds clusters create CLUSTER_ID \
--location= ZONE \
--private-cloud= PRIVATE_CLOUD_ID \
--node-type-config=type=standard-72,count= NODE_COUNT ,custom-core-count= CORE_COUNT
Replace the following:
CLUSTER_ID : the cluster ID for the cluster that
you are adding to the private cloud
ZONE : the zone for the private cloud
PRIVATE_CLOUD_ID : the private cloud ID for
the private cloud
NODE_COUNT : the number of nodes to add
CORES_COUNT : the number of custom cores to add
API
Add the new cluster and specify the core count configuration by making a
POST request. The following example creates a new cluster of standard-72
node type.
curl -L -X POST -H "Authorization: Bearer TOKEN " -H "Content-Type: application/json" \
"https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ ZONE /privateClouds/ PRIVATE_CLOUD_ID /clusters?clusterId= CLUSTER_ID " \
-d '{
"nodeTypeConfigs": {
"standard-72": {
"nodeCount": NODE_COUNT ,
"customCoreCount": CORE_COUNT
}
}
}'
Replace the following:
PROJECT_ID : the project ID for the private cloud
CLUSTER_ID : the cluster ID for the cluster that
you are adding to the private cloud
ZONE : the zone for the private cloud
PRIVATE_CLOUD_ID : the private cloud ID for the
private cloud
NODE_COUNT : the number of nodes to add
CORES_COUNT : the number of custom cores to add
Python
Add the new cluster and specify the core count configuration. For example,
the following creates a new cluster of standard-72 node type with configurable
amount of nodes and core count.
from google.api_core import operation
from google.cloud import vmwareengine_v1
def create_custom_cluster (
project_id : str ,
zone : str ,
private_cloud_name : str ,
cluster_name : str ,
node_count : int = 4 ,
core_count : int = 28 ,
) - > operation . Operation :
"""
Create a new cluster with custom number of cores in its nodes
in a private cloud.
Creation of a new cluster is a long-running operation and it may take over an hour.
Args:
project_id: name of the project you want to use.
zone: region in which your private cloud is located.
private_cloud_name: name of the private cloud hosting the new cluster.
cluster_name: name of the new cluster.
node_count: number of nodes in the new cluster.
core_count: number of CPU cores in the new cluster nodes.
Returns:
An Operation object related to started cluster creation operation.
Raises:
ValueError in case an incorrect number of nodes is provided.
"""
if node_count < 3 :
raise ValueError ( "Cluster needs to have at least 3 nodes" )
request = vmwareengine_v1 . CreateClusterRequest ()
request . parent = (
f "projects/ { project_id } /locations/ { zone } /privateClouds/ { private_cloud_name } "
)
request . cluster = vmwareengine_v1 . Cluster ()
request . cluster . name = cluster_name
# Currently standard-72 is the only supported node type.
request . cluster . node_type_configs = {
"standard-72" : vmwareengine_v1 . NodeTypeConfig ()
}
request . cluster . node_type_configs [ "standard-72" ] . node_count = node_count
request . cluster . node_type_configs [ "standard-72" ] . custom_core_count = core_count
client = vmwareengine_v1 . VmwareEngineClient ()
return client . create_cluster ( request )
Migrate Vmware management VMs to a different cluster
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can migrate VMware management VMs from the cluster where they are being hosted to a
different cluster within the same private cloud. To migrate management VMs, you must have at least two clusters in your private
cloud. The destination cluster must be a workload cluster. This operation transitions the
target workload cluster to a management cluster, and the source management
cluster becomes a workload cluster. This process takes approximately one hour to
complete.
Note: During the VM migration process, don't perform any operations on management appliances or
deploy new workload VMs. You have access to all management appliances during this time, but treat
them as read-only. You might also experience network downtime of a few seconds.
To avoid service disruptions, we recommend that you only perform a migration during a maintenance
window.
Console
To convert a workload cluster to a management cluster by using the
Google Cloud console, follow these steps:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project
that contains the private cloud.
Select the private cloud you want to manage from the list of private clouds.
On the private clouds summary page, click the Clusters tab.
For the workload cluster that you want to become the management cluster,
click More more_vert and select
Convert to management .
In the confirmation dialog, type the name of the cluster and click
Confirm .
Restrictions
When migrating management VMs, the following restrictions apply:
The migration destination must be a workload cluster in an ACTIVE
state, and the source management cluster must also be in an ACTIVE state.
You can't migrate management VMs from a cluster that uses ve2 nodes
(such as ve2-standard-128 ) to a cluster that uses ve1-standard-72 nodes.
Remove nodes from a cluster
When removing nodes from a private cloud, you remove nodes from the existing
cluster.
Console
To remove nodes from a private cloud using the Google Cloud console by updating
the cluster with fewer nodes, do the following:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project
that contains the private cloud.
Select the private cloud you want to manage from the list of private clouds.
Click the Clusters tab and select the cluster that you want to shrink.
Click Edit and reduce the node count by one. You can only remove one node at a time.
Click Save .
To monitor the progress, select Activity > Tasks .
This process requires resynchronization in vSAN and can take a few hours,
depending on the data.
gcloud
To remove a node from a private cloud using the Google Cloud CLI,
use the
gcloud vmware private-clouds clusters update command :
gcloud vmware private-clouds clusters update CLUSTER_ID \
--location= ZONE \
--private-cloud= PRIVATE_CLOUD_ID \
--update-nodes-config=type= NODE_TYPE ,count= NODE_COUNT
Replace the following:
CLUSTER_ID : the cluster ID for the cluster to
update in this private cloud.
ZONE : the zone for the private cloud.
PRIVATE_CLOUD_ID : the private cloud ID for
the private cloud.
NODE_TYPE : the node type. For more
information, see Node types .
NODE_COUNT : the new node count. This
new value must be one less than the current value.
API
To remove a node from a private cloud using the VMware Engine API,
make a PATCH request:
curl -L -X PATCH -H "Authorization: Bearer TOKEN " \
-H "Content-Type: application/json" \
"https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ ZONE /privateClouds/ PRIVATE_CLOUD_ID /clusters/ CLUSTER_ID ?update_mask=node_type_configs.*.node_count" \
-d '{
"nodeTypeConfigs": {
"standard-72" : {
"nodeCount": NODE_COUNT
}
}
}'
Replace the following:
CLUSTER_ID : the cluster ID for the cluster to
update in this private cloud
ZONE : the zone for the private cloud
PRIVATE_CLOUD_ID : the private cloud ID for
the private cloud
NODE_COUNT : the new node count. This
new value must be one less than the current value
Python
from google.api_core import operation
from google.cloud import vmwareengine_v1
def update_cluster_node_count (
project_id : str ,
zone : str ,
private_cloud_name : str ,
cluster_name : str ,
node_count : int ,
) - > operation . Operation :
"""
Modify the number of nodes in a cluster in a private cloud.
Modifying a cluster is a long-running operation and it may take over an hour.
Args:
project_id: name of the project you want to use.
zone: zone in which your private cloud is located.
private_cloud_name: name of the private cloud hosting the cluster.
cluster_name: name of the cluster.
node_count: desired number of nodes in the cluster.
Returns:
An Operation object related to cluster modification operation.
"""
if node_count < 3 :
raise RuntimeError ( "Cluster needs to have at least 3 nodes" )
client = vmwareengine_v1 . VmwareEngineClient ()
request = vmwareengine_v1 . UpdateClusterRequest ()
request . cluster = vmwareengine_v1 . Cluster ()
request . cluster . name = (
f "projects/ { project_id } /locations/ { zone } /privateClouds/ { private_cloud_name } "
f "/clusters/ { cluster_name } "
)
request . cluster . node_type_configs = {
"standard-72" : vmwareengine_v1 . NodeTypeConfig ()
}
request . cluster . node_type_configs [ "standard-72" ] . node_count = node_count
request . update_mask = "nodeTypeConfigs.*.nodeCount"
return client . update_cluster ( request )
Delete a cluster
To delete a whole cluster, do the following:
Console
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project
that contains the private cloud.
Select the private cloud you want to manage from the list of private clouds.
Click the Clusters tab and select the cluster that you want to delete.
Click Delete and verify the cluster capacity. Note that a management cluster can't be deleted.
Click Save .
gcloud
To delete a whole cluster using the Google Cloud CLI, use the
gcloud vmware private-clouds clusters delete command :
gcloud vmware private-clouds clusters delete CLUSTER_ID \
--location= ZONE \
--private-cloud= PRIVATE_CLOUD_ID
Replace the following:
CLUSTER_ID : the cluster ID for the cluster
to update in this private cloud
ZONE : the zone for the private cloud
PRIVATE_CLOUD_ID : the private cloud ID for
the private cloud
API
To delete a whole cluster using the VMware Engine API, make a DELETE
request:
curl -L -X DELETE -H "Authorization: Bearer TOKEN " \
-H "Content-Type: application/json" \
"https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ ZONE /privateClouds/ PRIVATE_CLOUD_ID /clusters/ CLUSTER_ID "
Replace the following:
PROJECT_ID : the project ID for the private
cloud
ZONE : the zone for the private cloud
PRIVATE_CLOUD_ID : the private cloud ID for
the private cloud
CLUSTER_ID : the cluster ID for the cluster
to update in this private cloud
Python
from google.api_core import operation
from google.cloud import vmwareengine_v1
def delete_cluster (
project_id : str , zone : str , private_cloud_name : str , cluster_name : str
) - > operation . Operation :
"""
Delete a cluster from private cloud.
Deleting a cluster is a long-running operation and it may take over an hour..
Args:
project_id: name of the project you want to use.
zone: region in which your private cloud is located.
private_cloud_name: name of the private cloud hosting the new cluster.
cluster_name: name of the new cluster.
Returns:
An Operation object related to started cluster deletion operation.
"""
client = vmwareengine_v1 . VmwareEngineClient ()
request = vmwareengine_v1 . DeleteClusterRequest ()
request . name = (
f "projects/ { project_id } /locations/ { zone } /privateClouds/ { private_cloud_name } "
f "/clusters/ { cluster_name } "
)
return client . delete_cluster ( request )
List nodes
To list the nodes of a particular private cloud's cluster and get information
about multiple nodes or a specific node using the Google Cloud console,
Google Cloud CLI or VMware Engine API, do the following.
Console
To list the nodes of one or multiple private clouds using the Google Cloud console, follow these steps:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
On the private clouds summary page, click the name of the private cloud.
Click the Clusters tab.
Click the name of the cluster. All nodes in the cluster are listed in the cluster nodes table.
gcloud
To list the nodes of one or multiple private clouds using the Google Cloud CLI,
do the following:
List all nodes that are bound to a particular private cloud's
PRIVATE_CLOUD_ID by running the
gcloud vmware private-clouds clusters node list command :
gcloud vmware private-clouds clusters node list \
--project= PROJECT_ID \
--location= ZONE \
--private-cloud= PRIVATE_CLOUD_ID \
--cluster= CLUSTER_ID
Replace the following:
PROJECT_ID : the project name for this request.
ZONE : the zone where this network is located.
PRIVATE_CLOUD_ID : the network ID for this request.
CLUSTER_ID : the cluster ID for this request.
API
To list the nodes of one or multiple private clouds using the
VMware Engine API, do the following:
List all nodes that are bound to a particular private cloud's
PRIVATE_CLOUD_ID by making a GET request:
GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ ZONE /privateClouds/ PRIVATE_CLOUD_ID /clusters/ CLUSTER_ID /nodes"
Replace the following:
PROJECT_ID : the project name for this request.
ZONE : the zone where this network is located.
PRIVATE_CLOUD_ID : the network ID for this request.
CLUSTER_ID : the cluster ID for this request.
Describe nodes
To get a description of a node or nodes using the Google Cloud console,
Google Cloud CLI or VMware Engine API, do the following:
Console
To list the nodes of one or multiple private clouds using the
Google Cloud console, follow these steps:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
On the private clouds summary page, click the name of the private cloud.
Click the Clusters tab.
Click the name of the cluster. Node details are listed in the cluster nodes table.
gcloud
If you want to get the description of a node or nodes using the
Google Cloud CLI.
Optional: Find the name of the node by running the
gcloud vmware private-clouds clusters node list command :
gcloud vmware private-clouds clusters node list \
--project= PROJECT_ID \
--location= ZONE \
--private-cloud= PRIVATE_CLOUD_ID \
--cluster= CLUSTER_ID
Replace the following:
PROJECT_ID : the project name for this request.
ZONE : the zone where this network is located.
PRIVATE_CLOUD_ID : the network ID for this request.
CLUSTER_ID : the cluster ID for this request.
Get the description of a specific node by running the
gcloud vmware private-clouds clusters nodes describe command :
gcloud vmware private-clouds clusters nodes describe NODE_NAME \
--project= PROJECT_ID \
--location= ZONE \
--private-cloud= PRIVATE_CLOUD_ID \
--cluster= CLUSTER_ID
Replace the following:
NODE_NAME : the node name returned from the
previous command. For example, esxi-1435-f4d250 .
PROJECT_ID : the project name for this request.
ZONE : the zone where this network is located.
PRIVATE_CLOUD_ID : the network ID for this
request.
CLUSTER_ID : the cluster ID for this request.
API
If you want to get the description of a node or nodes using the
VMware Engine API.
Optional: Find the name of the node by making a GET request:
GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ ZONE /privateClouds/ PRIVATE_CLOUD_ID /clusters/ CLUSTER_ID /nodes"
Replace the following:
PROJECT_ID : the project name for this request.
ZONE : the zone where this network is located.
PRIVATE_CLOUD_ID : the network ID for this
request.
CLUSTER_ID : the cluster ID for this request.
Get the description of a specific node by making a GET request:
GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ ZONE /privateClouds/ PRIVATE_CLOUD_ID /clusters/ CLUSTER_ID /nodes/ NODE_NAME "
Replace the following:
NODE_NAME : the node name returned from the
previous command. For example, esxi-1435-f4d250 .
PROJECT_ID : the project name for this request.
ZONE : the zone where this network is located.
PRIVATE_CLOUD_ID : the network ID for this
request.
CLUSTER_ID : the cluster ID for this request.
Restrictions
The process of removing nodes from your private cloud has the following
restrictions:
The vSphere cluster must have at least three nodes. You can't remove nodes
from a vSphere cluster with three nodes.
Whether you are using the Google Cloud console, the gcloud CLI, or
the VMware Engine API, you can only remove one node at a time with each remove
node request.
The total storage consumed can't exceed the total capacity after removing
nodes from a cluster.
You can't delete the first cluster that was created when the private cloud was
created.
If vSphere DRS rules (affinity and anti-affinity) are applied to all the nodes
of a cluster, nodes can't be removed from the cluster. You can delete the
rules and retry the node removal operation.
Viewing subnets
To view the list of defined management subnets for your private cloud, select
the Subnets tab. The list includes the HCX subnets created when the private
cloud was created.
Viewing activity information
To view the activity information for your private cloud, click Go to Logs Viewer .
For a full list of activities and associated actions, see
Monitoring VMware Engine activity .
Viewing vSphere management network
To view the list of VMware management resources and virtual machines that are
configured on your private cloud, select the
vSphere Management Network tab. Information includes the software version,
fully qualified domain name (FQDN), and IP address of the resources.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
