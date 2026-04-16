---
title: "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes
  title: "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE security
Send feedback
Encrypt workload data in-use with Confidential GKE Nodes
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This page shows you how to enforce encryption of data in-use
in your nodes and workloads by using Confidential Google Kubernetes Engine Nodes. Enforcing
encryption can help increase the security of your workloads.
This page is for Security specialists who implement security measures on
GKE. To learn more about
common roles and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Before reading this page, ensure that you're familiar with the concept of
data-in-use .
What is Confidential GKE Nodes?
You can encrypt your workloads with Confidential GKE Nodes or
Confidential mode for Hyperdisk Balanced.
Confidential GKE Nodes
Confidential GKE Nodes uses Compute Engine Confidential VM
to protect data in use with hardware-based memory encryption.
Confidential GKE Nodes supports the following Confidential Computing
technologies:
AMD Secure Encrypted Virtualization (SEV)
AMD Secure Encrypted Virtualization-Secure Nested Paging (SEV-SNP)
Intel Trust Domain Extensions (TDX)
For more information about these technologies and for help choosing the optimal
technology for your requirements, see the
Confidential VM overview .
Confidential GKE Nodes doesn't change the security measures that
GKE applies to cluster control planes. To learn about these
measures, see Control plane security .
For visibility over who accesses control planes in your Google Cloud
projects, use
Access Transparency .
You can enable Confidential GKE Nodes for entire clusters, for
specific node pools, or for specific workloads. The following table describes
these enablement methods:
Confidential GKE Nodes setting
Description
Behavior
Workload level
Configure Confidential GKE Nodes in a
ComputeClass ,
and then select that ComputeClass in a workload. GKE
creates nodes that use that configuration to run your Pods.
The workload setting supports any of the following
Confidential Computing technologies, regardless of the cluster mode or the
type of node pool:
AMD SEV
AMD SEV-SNP
Intel TDX
Cluster level
This setting is irreversible.
Enable Confidential GKE Nodes when you create a new
Autopilot or Standard cluster. All of the nodes in the
cluster use Confidential GKE Nodes. You can't override the
cluster setting for individual node pools or workloads.
The supported technologies at the cluster level depend on the cluster
mode of operation, as follows:
Autopilot clusters : AMD SEV
Standard clusters :
AMD SEV
AMD SEV-SNP
Intel TDX
Node pool level
Enable Confidential GKE Nodes when you create a new node
pool in a Standard cluster. You can use this method only if
Confidential GKE Nodes is disabled at the cluster level.
The supported technologies at the node pool level depend on
whether the node pool uses node auto-provisioning, as follows:
Manually created node pools :
AMD SEV
AMD SEV-SNP
Intel TDX
Auto-provisioned node pools :
AMD SEV
AMD SEV-SNP
Confidential mode for Hyperdisk Balanced
You can also enable Confidential mode for Hyperdisk Balanced
on your boot disk storage, which encrypts your data on additional
hardware-backed enclaves.
You can enable Confidential mode for Hyperdisk Balanced when doing one of the following:
Create a new cluster
Create a new node pool
You cannot update an existing cluster or a node pool to change the
Confidential mode for Hyperdisk Balanced setting.
The following table shows you the GKE behavior that applies when
you enable Confidential mode for Hyperdisk Balanced setting at the cluster level or at the node
pool level:
Confidential mode for Hyperdisk Balanced setting
How to configure
Behavior
Cluster-level
Create a new cluster
Only the default node pool in the cluster will use
Confidential mode for Hyperdisk Balanced setting. You cannot do the
following:
Disable Confidential mode for Hyperdisk Balanced setting for an existing node
pool in the cluster
Enable Confidential mode for Hyperdisk Balanced setting on existing clusters
Node pool level
Create a new node pool
You can configure Confidential mode for Hyperdisk Balanced setting for any new node pools at creation time. You can't update existing node pools to use Confidential mode for Hyperdisk Balanced setting.
Pricing
The following pricing applies, depending on how you configure
Confidential GKE Nodes:
Confidential GKE Nodes pricing
Workload-level
In Autopilot workloads, both of the following costs apply:
Autopilot node-based billing for the Compute Engine
machine series that the Pods run on. For more information, see the
"Pods that have specific hardware requirements" section in
Google Kubernetes Engine pricing .
Confidential GKE Nodes pricing. For more information, see
the "Confidential GKE Nodes on GKE
Autopilot pricing" section in
Confidential VM pricing .
In Standard workloads, both of the following costs apply:
Standard mode pricing. For more information, see the
"Standard mode" section in
Google Kubernetes Engine pricing .
Confidential GKE Nodes pricing. For more information, see
Confidential VM pricing .
Cluster-level
In Autopilot clusters, both of the following costs apply:
Balanced compute class pricing, because the default machine
series in the cluster changes to N2D. For more information, see the
"Balanced and Scale-Out compute class Pods" section in
Google Kubernetes Engine pricing .
Confidential GKE Nodes pricing. For more information, see
the "Confidential GKE Nodes on GKE
Autopilot pricing" section in
Confidential VM pricing .
In Standard clusters, both of the following costs apply:
Standard mode pricing. For more information, see the
"Standard mode" section in
Google Kubernetes Engine pricing .
Confidential GKE Nodes pricing. For more information, see
Confidential VM pricing .
Node pool level
In Standard node pools, the following costs apply:
Standard mode pricing. For more information, see the
"Standard mode" section in
Google Kubernetes Engine pricing .
Confidential GKE Nodes pricing. For more information, see
Confidential VM pricing .
Additionally, Confidential GKE Nodes might generate slightly more log
data on startup than nodes that aren't Confidential GKE Nodes. For
more information about logs pricing, see
Pricing for Google Cloud Observability .
Before you begin
Before you start, make sure that you have performed the following tasks:
Enable
the Google Kubernetes Engine API.
Enable Google Kubernetes Engine API
If you want to use the Google Cloud CLI for this task,
install and then
initialize the
gcloud CLI. If you previously installed the gcloud CLI, get the latest
version by running the gcloud components update command. Earlier gcloud CLI versions might not support running the commands in this document.
Note: For existing gcloud CLI
installations, make sure to set the compute/region property . If you use primarily zonal clusters, set the compute/zone instead. By setting a default location,
you can avoid errors in the gcloud CLI like the following:
One of [--zone, --region] must be supplied: Please specify location . You might need to specify the location in certain commands if the location of your cluster differs from the default that you set.
Requirements
Confidential GKE Nodes has the following requirements:
Autopilot clusters must run GKE version
1.30.2 or later.
Standard clusters must run one of the following GKE
versions, depending on the Confidential Computing technology and node operating
system that you choose:
Container-Optimized OS:
AMD SEV : any GKE version.
AMD SEV-SNP : 1.32.2-gke.1297000 or later.
Intel TDX : 1.32.2-gke.1297000 or later.
Ubuntu:
AMD SEV : 1.33.5-gke.1350000 or later and 1.34.1-gke.2037000 or
later.
AMD SEV-SNP : 1.33.5-gke.1350000 or later and 1.34.1-gke.2037000 or
later.
Intel TDX : 1.33.5-gke.1697000 or later and 1.34.1-gke.2909000 or
later.
To enable Confidential GKE Nodes at the workload level,
Autopilot and Standard clusters must run GKE
version 1.33.3-gke.1392000 or later.
Nodes must use a machine type that supports the Confidential Computing
technology that you choose. For more information, see
Machine types, CPUs, and zones .
Cluster control planes and nodes must be in a location that supports the
Confidential Computing technology that you choose. For more information, see
View supported zones .
Configure Confidential GKE Nodes at the workload level
To enable Confidential GKE Nodes in individual workloads, you use a
ComputeClass .
ComputeClasses are Kubernetes custom resources that let you define the
attributes of new nodes that GKE creates and let you control
fallback behavior if hardware isn't available. ComputeClasses support all of
the available Confidential Computing technologies for GKE, even if
a specific technology isn't supported at the cluster or node pool level.
To configure Confidential GKE Nodes at the workload level, follow
these steps:
Optional: For GKE Standard clusters,
enable node-autoprovisioning for the cluster .
For Autopilot clusters, skip this step.
If you choose to use ComputeClasses with only manually created node
pools, you must also
manually configure node taints and node labels
on those node pools. This additional manual configuration might result in
you noticing fewer benefits from using a ComputeClass to create
Confidential GKE Nodes.
Save the following ComputeClass manifest as a YAML file. For more
information about the supported fields and values for ComputeClasses, see
the ComputeClass CustomResourceDefinition .
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : COMPUTE_CLASS
spec :
nodePoolConfig :
confidentialNodeType : CONFIDENTIAL_COMPUTE_TECHNOLOGY
nodePoolAutoCreation :
enabled : true
activeMigration :
optimizeRulePriority : true
priorityDefaults :
location :
zones : [ ' ZONE1 ' , ' ZONE2 ' ]
priorities :
- machineFamily : MACHINE_SERIES
- machineType : MACHINE_TYPE
whenUnsatisfiable : DoNotScaleUp
Replace the following:
COMPUTE_CLASS : a name for your new compute
class.
CONFIDENTIAL_COMPUTE_TECHNOLOGY : the
Confidential Computing technology to use. The following values are
supported:
SEV for AMD SEV
SEV_SNP for AMD SEV-SNP
TDX for Intel TDX
ZONE1,ZONE2,... : the zones to create nodes in,
such as ['us-central1-a','us-central1-b'] . Specify zones that support
the Confidential Computing technology that you specified. For more
information, see
View supported zones . Optional: If you are provisioning TPU VMs, use an AI zone , like us-central1-ai1a . AI zones are specialized locations that are optimized for AI/ML workloads within Google Cloud regions.
MACHINE_SERIES : the machine series for the
nodes, such as n2d . Specify a machine series that supports the
Confidential Computing technology that you specified. For more information,
see Machine types, CPUs, and zones .
MACHINE_TYPE the machine type for the nodes,
such as n2d-standard-4 . Specify a machine type that supports the
Confidential Computing technology that you specified. For more information,
see Machine types, CPUs, and zones .
This manifest includes the spec.nodePoolAutoCreation field with a value of
enabled: true , which lets GKE create new node pools by
using node auto-provisioning.
Create the ComputeClass in your cluster:
kubectl apply -f PATH_TO_COMPUTE_CLASS_MANIFEST
Replace PATH_TO_COMPUTE_CLASS_MANIFEST with the path
to the ComputeClass manifest file.
Save the following Deployment manifest as a YAML file:
apiVersion : apps/v1
kind : Deployment
metadata :
name : helloweb
labels :
app : hello
spec :
selector :
matchLabels :
app : hello
template :
metadata :
labels :
app : hello
spec :
nodeSelector :
# Replace with the name of a compute class
cloud.google.com/compute-class : COMPUTE_CLASS
containers :
- name : hello-app
image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0
ports :
- containerPort : 8080
resources :
requests :
cpu : "250m"
memory : "1Gi"
Create the Deployment:
kubectl apply -f PATH_TO_DEPLOYMENT_MANIFEST
Replace PATH_TO_DEPLOYMENT_MANIFEST with the path to
the Deployment manifest file.
New nodes that GKE creates for this workload use the
Confidential Computing technology that you specified. These nodes run in one
of the zones that you selected, on a machine type that you defined in the
ComputeClass. GKE adds node taints and node labels so that
only Pods that select the same ComputeClass can run on the nodes.
Configure Confidential GKE Nodes at the cluster level
Caution: Enabling Confidential GKE Nodes at the cluster level is
irreversible.
You can enable Confidential GKE Nodes for an entire Autopilot
or Standard cluster, which means that every node in the clusters uses
Confidential GKE Nodes. As a result, all of the workloads that you
deploy in that cluster run on Confidential GKE Nodes. You can't
override the cluster setting in individual workloads or node pools.
Create a new Autopilot cluster
Autopilot clusters support only AMD SEV at the cluster level. When you
enable Confidential GKE Nodes, the default machine series in the
Autopilot cluster changes to N2D. All of your workloads run on these
confidential nodes without needing to change your workload manifests.
Run the following command:
gcloud container clusters create-auto CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION \
--enable-confidential-nodes
Replace the following:
CLUSTER_NAME : the name of the Autopilot
cluster.
CONTROL_PLANE_LOCATION : the Compute Engine
region for the cluster control plane, such as us-central1 .
The cluster must run version 1.30.2 or later.
For more information, see
Create an Autopilot cluster with a specific release channel and version .
Create a new Standard cluster
You can specify a Confidential Computing technology for your nodes when you
create a Standard cluster. Specifying the technology when you create a
cluster has the following effects:
You can create only node pools or workloads that use
Confidential GKE Nodes in that cluster.
You can't update the cluster to disable Confidential GKE Nodes.
You can't override the cluster-level Confidential Computing technology in
individual node pools or workloads.
Configuring a Confidential Computing setting at the cluster level is permanent.
As a result, consider the following use cases before you create your cluster:
To use node auto-provisioning in your cluster, you must configure specific
options in your cluster creation command. For more information, see the
Use Confidential GKE Nodes with node auto-provisioning
section.
To use different Confidential Computing technologies to encrypt specific
node pools in the cluster, skip this section and
configure Confidential GKE Nodes at the node pool level .
To create a Standard mode cluster that uses
Confidential GKE Nodes, select one of the following options:
gcloud
When creating a new cluster, specify the --confidential-node-type option
in the gcloud CLI:
gcloud container clusters create CLUSTER_NAME \
--location = LOCATION \
--machine-type = MACHINE_TYPE \
--node-locations = ZONE1,ZONE2,... \
--confidential-node-type = CONFIDENTIAL_COMPUTE_TECHNOLOGY
Replace the following:
CLUSTER_NAME : the name of your cluster.
LOCATION : the Compute Engine location for
the cluster control plane. The location must support the
Confidential Computing technology that you specify. For more information, see
the Availability section.
MACHINE_TYPE : a machine type that supports the
Confidential Computing technology that you specify. For more information, see
Availability section.
ZONE1,ZONE2,... : a comma-separated list of
zones in the control plane region that support the new Confidential Computing
technology. For more information, see
View supported zones .
CONFIDENTIAL_COMPUTE_TECHNOLOGY : the
Confidential Computing technology to use. The following values are supported:
sev : AMD SEV
sev_snp : AMD SEV-SNP
tdx : Intel TDX
You can also use the --enable-confidential-nodes flag in your cluster
creation command. If you specify only this flag in your command, the cluster
uses AMD SEV. The machine type that you specify in the command must
support AMD SEV. However, if you specify the --confidential-node-type flag
in the same command, GKE uses the value that you specify in the
--confidential-node-type flag.
Note: You can enable confidential mode on boot disk storage by passing the
--enable-confidential-storage flag and
--boot-disk-kms-key= KMS_KEY . For more information, see
the KMS key documentation .
Console
In the Google Cloud console, go to the Create a Kubernetes cluster page.
Go to Create a Kubernetes cluster
In the navigation menu, in the Cluster section, click Security .
Select the Enable Confidential GKE Nodes checkbox.
In the Changes needed dialog, click Make changes .
In the Type menu, select the Confidential Computing technology that you
want to use.
If the technology that you select requires a specific
Compute Engine machine series, a dialog appears. Click
Make changes to update the machine series for the node pool.
In the navigation menu, in the Node pools section, click
default-pool .
In the Node pool details pane, do the following:
Select the Specify node locations checkbox. A list of zones in
the cluster's region appears.
Select the checkboxes for zones that support the Confidential Computing
technology that you selected for the nodes. For more information, see
View supported zones .
Click Create .
For more information about creating clusters, see
Creating a regional cluster .
For any node pool created with the Confidential mode for Hyperdisk Balanced setting, only the nodes in the
node pool are restricted to the setup configuration. For any new node pools
created in the cluster, you must set up confidential mode at creation.
Configure node auto-provisioning
You can configure
node auto-provisioning
to use Confidential GKE Nodes in auto-provisioned node pools. Node
auto-provisioning supports the following Confidential Computing technologies:
AMD SEV
AMD SEV-SNP
To use Confidential GKE Nodes with node auto-provisioning, specify the
--enable-confidential-nodes gcloud CLI flag when you create a
cluster. The following additional considerations apply:
When you create the cluster, choose a Confidential Computing technology that
node auto-provisioning supports. This choice is irreversible at the
cluster level.
When you enable node auto-provisioning on an existing cluster, the cluster
must already use a Confidential GKE Nodes technology that node
auto-provisioning supports.
When you deploy workloads, verify that the workloads select the
Confidential Computing technology of the cluster and a compatible machine
series for that technology.
Configure Confidential GKE Nodes at the node pool level
You can enable Confidential GKE Nodes on specific node pools if
Confidential GKE Nodes is disabled at the cluster level.
Confidential mode for Hyperdisk Balanced setting must be specified during node pool creation request.
Create a new node pool
To create a new node pool with Confidential GKE Nodes enabled, select
one of the following options:
gcloud
Run the following command:
gcloud container node-pools create NODE_POOL_NAME \
--location = LOCATION \
--cluster = CLUSTER_NAME \
--machine-type = MACHINE_TYPE \
--node-locations = ZONE1,ZONE2,... \
--confidential-node-type = CONFIDENTIAL_COMPUTE_TECHNOLOGY
Note: You can enable confidential mode on boot disk storage by passing the
--enable-confidential-storage flag and
--boot-disk-kms-key= KMS_KEY . For more information, see
the KMS key documentation
Replace the following:
NODE_POOL_NAME : the name of your new node pool.
LOCATION : the location for your new node pool. The
location must support the Confidential Computing technology that you
specify. For details, see the Availability section.
CLUSTER_NAME : the name of your cluster.
MACHINE_TYPE : a machine type that supports the
Confidential Computing technology that you specify. For details, see the
Availability section.
ZONE1,ZONE2,... : a comma-separated list of
zones in the cluster region that support the new Confidential Computing
technology. For more information, see
View supported zones .
CONFIDENTIAL_COMPUTE_TECHNOLOGY : the
Confidential Computing technology to use. The following values are supported:
sev : AMD SEV
sev_snp : AMD SEV-SNP
tdx : Intel TDX
You can also use the --enable-confidential-nodes flag in your cluster
creation command. If you specify only this flag in your command, the cluster
uses AMD SEV. The machine type that you specify in the command must
support AMD SEV. However, if you specify the --confidential-node-type flag
in the same command, GKE uses the value that you specify in the
--confidential-node-type flag.
Console
In the Google Cloud console, go to the Kubernetes clusters page:
Go to Kubernetes clusters
Click the name of your Standard cluster.
Click add_box Add node pool .
In the navigation menu, click Security .
In the Node security pane, do the following:
Select the Enable Confidential GKE Nodes checkbox.
In the Changes needed dialog, click Make changes .
In the Type menu, select the Confidential Computing technology that you
want to use.
If the technology that you select requires a specific
Compute Engine machine series, a dialog appears. Click
Make changes to update the machine series for the node pool.
In the navigation menu, click Node pool details .
In the Node pool details pane, do the following:
Select the Specify node locations checkbox. A list of zones in
the cluster's region appears.
Select the checkboxes for zones that support the Confidential Computing
technology that you selected for the nodes. For more information, see
View supported zones .
Optional: Configure other settings for your node pool.
Click Create .
Update an existing node pool
This change requires recreating the nodes, which can cause disruption to your
running workloads. For details about this specific change, find the
corresponding row in the manual changes that recreate the nodes using a node
upgrade strategy without respecting maintenance
policies
table. To learn more about node updates, see Planning for node update
disruptions .
Caution: GKE immediately begins recreating the nodes for this
change using the node upgrade strategy, regardless of active maintenance
policies. GKE depends on resource
availability for the
change. Disabling node auto-upgrades doesn't prevent this
change .
Ensure that your workloads running on the nodes are prepared for disruption
before you initiate this change.
You can update existing node pools to use Confidential GKE Nodes or to
switch the Confidential Computing technology that the nodes use. The node pool
must meet all of the following requirements:
The nodes use a machine type that supports the chosen Confidential Computing
technology.
The nodes run in zones that support the chosen Confidential Computing
technology.
Because the machine type and location availability might vary between
Confidential Computing technologies, you might need to update these attributes
for your node pool before you enable a specific Confidential Computing
technology.
To update an existing node pool to use Confidential GKE Nodes, select
one of the following options:
gcloud
You can use the gcloud CLI to enable
Confidential GKE Nodes on a node pool or to change the
Confidential Computing technology of the nodes.
If the node pool already uses Confidential GKE Nodes,
disable Confidential GKE Nodes . Wait for the node
pool update operation to complete.
Change the node pool machine type and node locations to supported values
for the new Confidential Computing technology:
gcloud container node-pools update NODE_POOL_NAME \
--cluster = CLUSTER_NAME \
--location = CLUSTER_LOCATION \
--machine-type = MACHINE_TYPE \
--node-locations = ZONE1,ZONE2,...
Replace the following:
NODE_POOL_NAME : the name of the existing node
pool.
CLUSTER_NAME : the name of the cluster.
CLUSTER_LOCATION : the location of the cluster.
MACHINE_TYPE : a machine type that supports the
new Confidential Computing technology. For more information, see the
Availability section.
ZONE1,ZONE2,... : a comma-separated list of
zones in the cluster region that support the new Confidential Computing
technology. For more information, see
View supported zones .
Update the node pool with the Confidential Computing technology to use:
gcloud container node-pools update NODE_POOL_NAME \
--cluster = CLUSTER_NAME \
--location = CLUSTER_LOCATION \
--confidential-node-type = CONFIDENTIAL_COMPUTE_TECHNOLOGY
Replace CONFIDENTIAL_COMPUTE_TECHNOLOGY with the
Confidential Computing technology to use. The following values are
supported:
sev : AMD SEV
sev_snp : AMD SEV-SNP
tdx : Intel TDX
Console
You can update an existing node pool to use Confidential GKE Nodes
only if the machine type of the node pool is supported by your chosen
Confidential Computing technology. If the nodes don't use a supported machine
type, use the gcloud CLI instructions in this section instead.
In the Google Cloud console, go to the Kubernetes clusters page:
Go to Kubernetes clusters
Click the name of your Standard cluster.
Click the Nodes tab.
Click the name of the node pool that you want to modify.
On the Node pool details page, click
edit Edit . The Edit node pool
pane opens.
In the Zones section, verify that the selected zones support the
Confidential Computing technology. For more information, see
View supported zones .
If a selected zone doesn't support the technology, do the following:
Clear the checkbox for the unsupported zone.
Optional: Select the checkboxes for other supported zones.
Click Save . Wait for the node pool update operation to
complete.
Click edit Edit to reopen the
Edit node pool pane.
In the Security section, select the Enable Confidential GKE Nodes
checkbox.
In the Type menu, select the Confidential Computing technology for the
nodes.
Click Save .
Place workloads on only confidential node pools
If you enable Confidential GKE Nodes at the cluster level, all of your
workloads run on confidential nodes. You don't need to make changes to your
manifests. However, if you enable Confidential GKE Nodes only for
specific Standard mode node pools at the node pool level, you should
declaratively express that your workloads must run only on node pools with
Confidential GKE Nodes.
To require that a workload runs on a specific Confidential Computing technology,
use a
node selector
with the cloud.google.com/gke-confidential-nodes-instance-type label, like
in the following example:
apiVersion : v1
kind : Pod
spec :
# For readability, lines are omitted from this example manifest
nodeSelector :
cloud.google.com/gke-confidential-nodes-instance-type : " CONFIDENTIAL_COMPUTE_SELECTOR "
Replace CONFIDENTIAL_COMPUTE_SELECTOR with the name of
the technology that the node pool uses. This field supports the following
values, which you must specify in uppercase:
SEV : AMD SEV
SEV_SNP : AMD SEV-SNP
TDX : Intel TDX
To let a workload run on any confidential nodes, regardless of the
Confidential Computing technology, use a
node affinity rule ,
like in the following example:
apiVersion : v1
kind : Pod
spec :
containers :
- name : confidential-app
image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0
affinity :
nodeAffinity :
requiredDuringSchedulingIgnoredDuringExecution :
nodeSelectorTerms :
- matchExpressions :
- key : cloud.google.com/gke-confidential-nodes-instance-type
operator : Exists
To let a workload run on nodes that use only a subset of the available
Confidential Computing technologies, use a node affinity rule that's similar
to the following example:
apiVersion : v1
kind : Pod
spec :
containers :
- name : confidential-app
image : us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0
affinity :
nodeAffinity :
requiredDuringSchedulingIgnoredDuringExecution :
nodeSelectorTerms :
- matchExpressions :
- key : cloud.google.com/gke-confidential-nodes-instance-type
operator : In
values :
- SEV
- SEV_SNP
- TDX
In the values field, specify only the Confidential Computing technologies
that you want to run the workload on.
Verify that Confidential GKE Nodes is enabled
You can check whether your clusters or nodes use
Confidential GKE Nodes by inspecting the clusters, node pools, nodes,
or Compute Engine instances.
Verify for clusters
Select one of the following options:
gcloud
Describe the cluster:
gcloud container clusters describe CLUSTER_NAME \
--location = CONTROL_PLANE_LOCATION \
--format = 'yaml(confidentialNodes.confidentialInstanceType)'
If Confidential GKE Nodes is enabled, the output is similar to the
following:
confidentialNodes:
confidentialInstanceType: CONFIDENTIAL_COMPUTE_SELECTOR
Console
In the Google Cloud console, go to the Kubernetes clusters page.
Go to Kubernetes clusters
Click the name of the cluster you want to inspect.
In the Security section, verify that the
Confidential GKE Nodes field has a value of Enabled .
Verify for node pools
Select one of the following options:
gcloud
Describe the node pool:
gcloud container node-pools describe NODE_POOL_NAME \
--location = CONTROL_PLANE_LOCATION \
--format = 'yaml(confidentialNodes.confidentialInstanceType,enableConfidentialStorage)'
If Confidential GKE Nodes is enabled, the output is similar to the
following:
confidentialNodes:
confidentialInstanceType: CONFIDENTIAL_COMPUTE_SELECTOR
If Confidential mode for Hyperdisk Balanced is also enabled, the output is similar to the following:
confidentialNodes:
confidentialInstanceType: CONFIDENTIAL_COMPUTE_SELECTOR
enableConfidentialStorage: true
Console
In the Google Cloud console, go to the Kubernetes clusters page.
Go to Kubernetes clusters
Click the name of the cluster you want to inspect.
Click the name of a node pool.
In the Security section, verify that the Confidential GKE Nodes
field has a value of Enabled .
Verify for a specific node
Find the node name:
kubectl get nodes
Describe the node:
kubectl describe NODE_NAME
Replace NODE_NAME with the name of a node to
inspect.
The output is similar to the following:
Name: gke-cluster-1-default-pool-affsf335r-asdf
Roles: <none>
Labels: cloud.google.com/gke-boot-disk=pd-balanced
cloud.google.com/gke-container-runtime=containerd
cloud.google.com/gke-confidential-nodes-instance-type= CONFIDENTIAL_COMPUTE_SELECTOR
cloud.google.com/gke-nodepool=default-pool
cloud.google.com/gke-os-distribution=cos
cloud.google.com/machine-family=e2
# lines omitted for clarity
In this output, the cloud.google.com/gke-confidential-nodes-instance-type
node label indicates that the node is a confidential node.
Set organization policy constraints
You can define an organization policy constraint to ensure that all VM resources
created across your organization are Confidential VM instances.
For GKE, you can customize the Restrict Non-Confidential
Computing constraint to require that all new clusters are created with
one of the available Confidential Computing technologies enabled. Add the
container.googleapis.com API Service name to the deny list when
enforcing organization policy constraints ,
like in the following example:
gcloud resource-manager org-policies deny \
constraints/compute.restrictNonConfidentialComputing compute.googleapis.com container.googleapis.com \
--project = PROJECT_ID
Replace PROJECT_ID with your project ID.
Create a PersistentVolume for Confidential mode for Hyperdisk Balanced
For guidance on allowable values for throughput or IOPS, see Plan the performance level for your Hyperdisk volume .
The following examples show how you can create a Confidential mode for Hyperdisk Balanced StorageClass for each Hyperdisk type:
Hyperdisk Balanced
Save the following manifest in a file named confidential-hdb-example-class.yaml :
apiVersion : storage.k8s.io/v1
kind : StorageClass
metadata :
name : balanced-storage
provisioner : pd.csi.storage.gke.io
volumeBindingMode : WaitForFirstConsumer
allowVolumeExpansion : true
parameters :
type : hyperdisk-balanced
provisioned-throughput-on-create : "250Mi"
provisioned-iops-on-create : "7000"
enable-confidential-storage : true
disk-encryption-kms-key : "projects/ KMS_PROJECT_ID /locations/ REGION /keyRings/ KEY_RING /cryptoKeys/ HSM_KEY_NAME "
Replace the following:
KMS_PROJECT_ID : the project that owns the
Cloud KMS key
REGION : the region where the disk is located
KEY_RING : the name of the key ring that
includes the key
HSM_KEY_NAME : the name of the HSM key used to
encrypt the disk
Create the StorageClass:
kubectl create -f hdb-example-class.yaml
Create a Hyperdisk Persistent Volume Claim for GKE that uses your Confidential mode for Hyperdisk Balanced volume.
To find the name of the StorageClasses available in your cluster, run the
following command:
kubectl get sc
Limitations
Confidential GKE Nodes has the following limitations:
All of the
limitations of Compute Engine Confidential VM instances
also apply to Confidential GKE Nodes.
Confidential GKE Nodes isn't compatible with
sole tenant nodes .
Confidential GKE Nodes only supports
using ephemeral storage on local SSDs ,
but doesn't support using local SSDs in general.
Confidential GKE Nodes supports Container-Optimized OS and
Ubuntu node images. Windows nodes aren't supported.
Autopilot clusters support only AMD SEV at the cluster level. To use
a different Confidential Computing technology,
configure Confidential GKE Nodes at the workload level .
Node auto-provisioning supports only AMD SEV and AMD SEV-SNP at the node pool
level. To use a different Confidential Computing technology,
configure Confidential GKE Nodes at the workload level .
Confidential mode for Hyperdisk Balanced has the following limitations:
All of the
limitations of using customer-managed encryption keys (CMEK) to encrypt disks
apply to Confidential mode for Hyperdisk Balanced.
Confidential mode for Hyperdisk Balanced is supported only on Confidential GKE Nodes that use
AMD SEV as the Confidential Computing technology.
Live migration limitations
Compute Engine Confidential VM that use the N2D
machine type and use AMD SEV as the Confidential Computing technology
support live migration ,
which minimizes the potential workload disruption from a host maintenance
event. Live migration occurs in the following GKE versions:
1.27.10-gke.1218000 and later
1.28.6-gke.1393000 and later
1.29.1-gke.1621000 and later
If your node pools were already running a supported version when live migration
was added, manually upgrade the node pools
to the same or a different supported version. Upgrading the nodes triggers node
recreation, and the new nodes have live migration enabled.
For details about which Compute Engine machine types support live
migration, see
Supported configurations .
If a host maintenance event
occurs on a node that doesn't support live migration, the node enters a
NotReady state. Running Pods will experience disruptions until the node
becomes ready again. If the maintenance takes more than five minutes,
GKE might try to recreate the Pods on other nodes.
Disable Confidential GKE Nodes
This change requires recreating the nodes, which can cause disruption to your
running workloads. For details about this specific change, find the
corresponding row in the manual changes that recreate the nodes using a node
upgrade strategy without respecting maintenance
policies
table. To learn more about node updates, see Planning for node update
disruptions .
Caution: GKE immediately begins recreating the nodes for this
change using the node upgrade strategy, regardless of active maintenance
policies. GKE depends on resource
availability for the
change. Disabling node auto-upgrades doesn't prevent this
change .
Ensure that your workloads running on the nodes are prepared for disruption
before you initiate this change.
You can only disable Confidential GKE Nodes in Standard mode
node pools. If the node pool is in a cluster that uses Confidential GKE Nodes
at the cluster level, you can't disable the feature at the node pool level.
To disable Confidential GKE Nodes, select one of the following options:
gcloud
Run the following command:
gcloud container node-pools update NODE_POOL_NAME \
--cluster = CLUSTER_NAME \
--location = CLUSTER_LOCATION \
--no-enable-confidential-nodes
Console
In the Google Cloud console, go to the Kubernetes clusters page:
Go to Kubernetes clusters
Click the name of your Standard cluster.
Click the Nodes tab.
Click the name of the node pool that you want to modify.
On the Node pool details page, click
edit Edit . The Edit node pool
pane opens.
In the Security section, clear the Enable Confidential GKE Nodes
checkbox.
Click Save .
What's next
Learn more about Confidential VM
Learn more about Google Cloud encryption at rest
Learn more about Google Cloud encryption in transit
Learn more about customer-managed encryption keys (CMEK)
Learn how to remotely attest that workloads are running on Confidential VM
Learn how to run GPUs on Confidential GKE Nodes
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
