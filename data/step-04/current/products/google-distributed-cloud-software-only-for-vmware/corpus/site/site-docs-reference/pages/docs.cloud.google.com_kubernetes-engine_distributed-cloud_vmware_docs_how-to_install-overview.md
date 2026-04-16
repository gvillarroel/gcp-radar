---
title: "Google Distributed Cloud installation overview \_|\_ Google Distributed Cloud\
  \ (software only) for VMware \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/install-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/install-overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/install-overview
  title: "Google Distributed Cloud installation overview \_|\_ Google Distributed\
    \ Cloud (software only) for VMware \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
Google Distributed Cloud installation overview
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the planning process and the steps for a
software-only installation of Google Distributed Cloud for VMware. This is a multi-stage
process, during which you need to make decisions about the type of configuration
that will meet your organizational needs. You might need to get help from
others, such as your network administrator, to set up a vSphere infrastructure
and provide you with information you need to complete configuration files.
This page is for Admins, Architects, and Operators who set up,
monitor, and manage the tech infrastructure. To learn more about common roles
and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Before you begin
Before reading this page, ensure that you're familiar with the following:
Kubernetes
Kubernetes cluster
Cluster node
Google Kubernetes Engine
VMware
vCenter Server
vSphere
data center
host
vSphere Cluster
resource pool
datastore
Overview of installation steps
These are the primary steps involved in an installation of
Google Distributed Cloud:
Plan your installation.
Set up your vSphere environment.
Set up Cloud resources, including a Google Cloud project and service
accounts.
Create an admin workstation. The admin workstation is a machine that has the
tools you need to create clusters.
From your admin workstation, create an admin cluster. An admin cluster is a
point of management for a set of user clusters that run your workloads.
Create one or more user clusters.
Deploy a workload on a user cluster.
1. Plan your installation
Google Distributed Cloud provides a way for you to create
Google Kubernetes Engine (GKE)
clusters in a
vSphere environment
on your own premises.
Your workloads run on user clusters, and user clusters are managed by an
admin cluster. The following diagram shows an admin cluster that manages two
user clusters. User cluster 1 has eight nodes, and user cluster 2 has five
nodes. The user clusters shown in the diagram have Controlplane V2 enabled,
which means that the control plane for a user cluster runs in the user cluster
itself.
Architecture with two user clusters (Click to enlarge)
The preceding diagram illustrates these points:
A user cluster has control-plane nodes and worker nodes . The Kubernetes
control plane runs on the control-plane nodes, and your workloads run on the
worker nodes.
The Kubernetes control-plane components for a cluster run on one or more
nodes in the cluster itself.
The admin workstation is a machine that is separate from the clusters.
Plan your user clusters
Think ahead about how many user clusters you intend to create and how many nodes
you want each user cluster to have. For example, you might want to create
separate clusters for different departments in your organization. Certain
clusters might need to support heavy customer traffic, and other clusters might
need to support only light internal traffic.
Think about which of your workloads need to be highly available. Then decide
which of your user clusters need to have a high availability (HA) control plane
and which clusters would function adequately with a non-HA control plane. An HA
control plane requires three nodes, and a non-HA control plane requires only
one node.
Plan your network and load balancing
Read about the
load balancing options
for your installation and decide which kind of load balancer would work best
for you. Depending on which option you choose, you might have to set up your
load balancer before you create your clusters.
Read about the options for
connecting to Google ,
and decide which kind of connection is best for you.
2. Set up your vSphere environment
Obtain the
required vSphere licenses .
Set up a physical network that has a machine to run
vCenter
Server
and several machines to run the
ESXi hypervisor .
Install vCenter Server on a physical machine, and install ESXi on several
physical machines. These physical machines are called hosts .
Set up physical
storage
for your vSphere environment.
Plan your IP addresses
Decide how you want your cluster nodes to get their IP addresses. The options
are:
From a DHCP server that you provide.
From a list of static IP addresses that you provide.
In either case, ensure that enough IP addresses are available for your cluster
nodes and virtual IP addresses (VIPs) that need to be configured on your load
balancer. For more information, see
Plan your IP addresses .
Set up your vSphere object hierarchy
Use your instance of vCenter Server to create one or more
vSphere data centers .
Recall that a vSphere data center is not the same as a physical building.
Sometimes a vSphere data center is called a virtual data center .
Use your instance of vCenter Server to add vSphere inventory objects to your
data centers. These inventory objects include
cluster ,
resource pool ,
network ,
datastore ,
and
folder .
Note: that the word cluster has two meanings. In some contexts, it refers to a
vSphere cluster, which is a vSphere inventory object. In other contexts, it
refers to a GKE cluster.
Using separate vSphere clusters
Think about whether you want your GKE clusters to be in the same
vSphere cluster or in separate vSphere clusters. For example, you could have
your admin cluster in one vSphere cluster and your user clusters in a different
vSphere cluster. Or you could have each user cluster in its own vSphere
cluster.
The following diagram illustrates a vSphere setup you could use if you want
to put an admin cluster in one vSphere cluster and a user cluster in a different
vSphere cluster:
vSphere setup with one data center and two vSphere clusters (Click to enlarge)
Using separate data centers
Another option is to have your GKE clusters in separate data
centers.
The following diagram illustrates a vSphere setup you could use if you want to
put an admin cluster in one data center and a user cluster in a different data
center:
vSphere setup with two data centers (Click to enlarge)
For more information about setting up your vSphere environment, see:
vSphere requirements
CPU, RAM, and storage requirements
Proxy and firewall rules
3. Set up Google Cloud resources
Before you create your admin workstation, you need to install the
Google Cloud CLI, create a Google Cloud project, and create service accounts.
For instructions, see:
Install the Google Cloud CLI .
The Google Cloud CLI is a set of tools to create and manage Google Cloud
resources.
Create Google Cloud projects
A Google Cloud project provides a way of organizing your Google Cloud
resources. You must have at least one Google Cloud project. When you create
a user cluster, you must register the cluster to a
fleet ,
which requires that you specify a fleet host project.
Create service accounts .
Google Distributed Cloud uses Google Cloud
service accounts
with specific permissions to download cluster components from Google Cloud,
register clusters to a fleet, and perform other tasks.
4. Create an admin workstation
The admin workstation is a machine that you use to create and manage clusters.
The admin workstation can be a VM in your vSphere environment, or it can be a
machine that is separate from your vSphere environment.
For instructions on how to create an admin workstation, see
Create an admin workstation .
5. Create an admin cluster
The admin cluster manages one or more user clusters. You must create an admin
cluster before you create user clusters to run your workloads. For more
information, see
Create an admin cluster .
Enroll the cluster in the Anthos On-Prem API
Optionally, enroll your admin cluster in the GKE On-Prem API. Enrolling your
admin cluster in the GKE On-Prem API lets you use standard
tools—the Google Cloud console, Google Cloud CLI, or
Terraform —to upgrade user
clusters that the admin cluster manages. The GKE On-Prem API stores cluster
state metadata in Google Cloud. This metadata lets the API manage the user
cluster lifecycle and doesn't include workload-specific data. The standard
tools use the GKE On-Prem API to manage the user cluster lifecycle, and
collectively are referred to as the GKE On-Prem API clients . Enrolling your
admin cluster also lets you run gcloud commands to
get information about your admin cluster .
Google Distributed Cloud provides the following ways to enroll your admin
cluster in the GKE On-Prem API:
Before the cluster is created: Include the gkeOnPremAPI section in the
admin cluster configuration file .
After the cluster is created: Use the gcloud CLI to
enroll the cluster .
6. Create user clusters
After you create an admin cluster, you can create one or more user clusters.
You can create user clusters by using standard tools—the
console, gcloud CLI, or Terraform—or by running
gkectl on your admin workstation. For more information about using the
standard tools, see
Choose a tool to manage cluster lifecycle .
To create a user cluster using a standard tool, see
Create a user cluster ( Console | gcloud-cli | Terraform ).
When you create a user cluster using a standard tool, the cluster is
automatically enrolled in the GKE On-Prem API.
To create a user cluster using gkectl , follow the instructions in
Create a user cluster ( gkectl ).
Optionally, you can enroll your user cluster in the GKE On-Prem API.
Google Distributed Cloud provides the following ways to enroll your user
cluster in the GKE On-Prem API if you use gkectl to create the cluster:
Before the cluster is created: Include the gkeOnPremAPI section in the
user cluster configuration file .
After the cluster is created: Use the gcloud CLI to
enroll the cluster .
7. Deploy a workload on a user cluster
To learn how to create a Deployment, a Service and an Ingress on a user cluster,
see:
Deploy an application
Create a Service and an Ingress
What's next?
Start the installation process by
setting up your on-premises infrastructure .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
