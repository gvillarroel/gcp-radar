---
title: "Create standalone clusters \_|\_ Google Distributed Cloud (software only)\
  \ for bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/standalone-cluster-creation
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/standalone-cluster-creation
  title: "Create standalone clusters \_|\_ Google Distributed Cloud (software only)\
    \ for bare metal \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
GDC for bare metal
Guides
Send feedback
Create standalone clusters
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create a standalone cluster, which is a self-managing
cluster that runs workloads. Standalone clusters don't manage other clusters,
eliminating the need for running a separate admin cluster in resource-
constrained scenarios. Furthermore, standalone clusters offer two installation
profiles to choose from:
Default : The default profile has limited resource requirements.
Edge : The edge profile has significantly reduced system resource
requirements and is recommended for edge devices with high resource
constraints.
Before creating a standalone cluster, consider the tradeoff between reducing
resources and overall security. Since standalone clusters manage themselves,
running workloads on the same cluster increases the risk of exposing sensitive
administrative data, like SSH keys.
Prerequisites
Before you create a standalone cluster, ensure the following:
Latest bmctl is downloaded
( gs://anthos-baremetal-release/bmctl/1.34.200-gke.68/linux-amd64/bmctl )
from Cloud Storage.
Workstation running bmctl has network connectivity to all nodes in the
target standalone cluster.
Workstation running bmctl has network connectivity to the control plane VIP
of the target standalone cluster.
SSH key used to create the standalone cluster is available to root, or there
is SUDO user access on all nodes in the target standalone cluster.
Connect-register service account is configured for use with Connect.
Enable SELinux
If you want to enable SELinux to secure your containers, you must make sure that
SELinux is enabled in Enforced mode on all your host machines. Starting with
Google Distributed Cloud release 1.9.0 or later, you can enable or disable SELinux
before or after cluster creation or cluster upgrades. SELinux is enabled by
default on Red Hat Enterprise Linux (RHEL). If SELinux is disabled on
your host machines or you aren't sure, see
Securing your containers using SELinux
for instructions on how to enable it.
Google Distributed Cloud supports SELinux in only RHEL systems.
Create a standalone cluster
You can create a standalone cluster that has a single control node plane using
the bmctl command. This type of configuration reduces resource consumption but
does not provide high availability (HA), and the resulting cluster has a single
failure point.
You can also create an HA standalone cluster. In HA mode, if a node fails, then
others will take its place. To create an HA standalone cluster, you must specify
at least three nodes for the control plane.
The bmctl command can typically be run on a separate workstation or on one of
the standalone cluster nodes. However, if you are creating a standalone cluster
with the edge profile enabled and have the minimum required resources
configured, we recommend running bmctl on a separate workstation.
Log into gcloud
Login to gcloud as a user:
gcloud auth application-default login
You need to have a Project Owner or Editor role to use the automatic API
enablement and Service Account creation features described in the following
sections.
You can also add the following IAM roles to the user:
Service Account Admin
Service Account Key Admin
Project IAM Admin
Compute Viewer
Service Usage Admin
Alternatively, if you already have a service account with those roles, run:
export GOOGLE_APPLICATION_CREDENTIALS = JSON_KEY_FILE
Replace JSON_KEY_FILE with the path to your service account JSON
key file.
Get your Google Cloud project ID to use with cluster creation:
export CLOUD_PROJECT_ID = $( gcloud config get-value project )
Create a standalone cluster config file
After you've logged into the gcloud CLI and have your project set up, you can create the
cluster config file with the bmctl command. In this example, all service
accounts are automatically created by the bmctl create config command:
bmctl create config -c STANDALONE_CLUSTER_NAME --enable-apis \
--create-service-accounts --project-id = $CLOUD_PROJECT_ID
Replace the following:
STANDALONE_CLUSTER_NAME with the name of the standalone cluster
that you want to create.
Example
The following command creates a config file for a standalone cluster
called standalone1 associated with project ID my-gcp-project :
bmctl create config -c standalone1 --create-service-accounts --project-id = my-gcp-project
The file is written to bmctl-workspace/standalone1/standalone1.yaml .
As an alternative to automatically enabling APIs and creating service accounts,
you can also provide your existing service accounts if you have the
proper IAM permissions .
This way, you can skip the automatic service account creation in the previous
step in the bmctl command:
bmctl create config -c standalone1
Edit the cluster config file
Now that you have a cluster config file, make the following changes to it:
Add the SSH private key to access the standalone cluster nodes:
# bmctl configuration variables. Because this section is valid YAML but not a valid Kubernetes
# resource, this section can only be included when using bmctl to
# create the initial admin/hybrid cluster. Afterwards, when creating user clusters by directly
# applying the cluster and node pool resources to the existing cluster, you must remove this
# section.
gcrKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-gcr.json
sshPrivateKeyPath : /path/to/your/ssh_private_key
gkeConnectAgentServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-connect.json
gkeConnectRegisterServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-register.json
cloudOperationsServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-cloud-ops.json
Register your clusters to a
fleet . The project ID that you specified
in the bmctl create config command is automatically added to the
gkeConnect.projectID field in the cluster config file. This project is
referred to as the
fleet host project .
If you created your config file using automatic API enablement and
Service Account creation features, you can skip this step.
If you created the config file without using the automatic API enablement
and Service Account creation features, reference the downloaded service
account JSON keys in the corresponding
gkeConnectAgentServiceAccountKeyPath and
gkeConnectRegisterServiceAccountKeyPath fields of the cluster config
file.
Change the config to specify a cluster type of standalone instead of
admin . If you want to enable the edge profile to minimize resource
consumption, specify profile: edge :
spec :
# Cluster type. This can be:
# 1) admin: to create an admin cluster. This can later be used to create user clusters.
# 2) user: to create a user cluster. Requires an existing admin cluster.
# 3) hybrid: to create a hybrid cluster that runs admin cluster components and user workloads.
# 4) standalone: to create a cluster that manages itself, runs user workloads, but does not manage other clusters.
type : standalone
# Edge profile minimizes the resource consumption of Google Distributed Cloud. It is only available for standalone clusters.
profile : edge
(Optional) Change the config to specify a multi-node, high availability,
control plane. Specify an odd number of nodes to be able to have a majority
quorum for HA:
# Control plane configuration
controlPlane :
nodePoolSpec :
nodes :
# Control plane node pools. Typically, this is either a single machine
# or 3 machines if using a high availability deployment.
- address : 10.200.0.4
- address : 10.200.0.5
- address : 10.200.0.6
If you have an even number of nodes temporarily while adding or removing
nodes for maintenance or replacement, your deployment maintains HA as long as
you have quorum.
In the cluster configuration file, fill in or edit the cluster networking
details:
clusterNetwork.pods.cidrBlocks : range of IP addresses in CIDR block
notation for use by Pods. The recommended starting value, which is
pre-filled in the generated cluster configuration file, is
192.168.0.0/16 .
clusterNetwork.services.cidrBlocks : range of IP addresses in CIDR
block notation for use by Service. The recommended starting value, which
is pre-filled in the generated cluster configuration file, is
10.96.0.0/20 .
loadBalancer.vips.controlPlaneVIP : the virtual IP (VIP) address for
the Kubernetes API server of the cluster.
loadBalancer.vips.ingressVIP : the VIP address to use as the external
address for the ingress
proxy .
loadBalancer.addressPools.addresses: : range of ten IP addresses for
use as external IP addresses for Services of type LoadBalancer. Notice
that this range includes the ingress VIP, which is required by MetalLB.
No other IP addresses can overlap this range.
Specify the pod density of cluster nodes:
....
# NodeConfig specifies the configuration that applies to all nodes in the cluster.
nodeConfig :
# podDensity specifies the pod density configuration.
podDensity :
# maxPodsPerNode specifies at most how many pods can be run on a single node.
maxPodsPerNode : 250
....
For standalone clusters, allowable values for maxPodsPerNode are 32-250
for HA clusters and 64-250 for non-HA clusters. The default value if
unspecified is 110 . Once the cluster is created, this value cannot be
updated.
Pod density is also limited by your cluster's available IP resources. For details,
see
Pod networking .
Create the standalone cluster with the cluster config
Use the bmctl command to deploy the standalone cluster:
bmctl create cluster -c CLUSTER_NAME
Replace CLUSTER_NAME with the name of the cluster you created in the
previous section.
The following shows an example of the command to create a cluster
called standalone1 :
bmctl create cluster -c standalone1
Sample standalone cluster configurations
For example standalone cluster configurations, see
Standalone clusters in the
Cluster configuration samples.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
