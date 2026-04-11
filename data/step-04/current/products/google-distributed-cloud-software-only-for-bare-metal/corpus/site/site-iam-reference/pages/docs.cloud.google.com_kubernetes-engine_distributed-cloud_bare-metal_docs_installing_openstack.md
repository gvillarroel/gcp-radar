---
title: "Configure your clusters to use OpenStack \_|\_ Google Distributed Cloud (software\
  \ only) for bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack
  title: "Configure your clusters to use OpenStack \_|\_ Google Distributed Cloud\
    \ (software only) for bare metal \_|\_ Google Cloud Documentation"
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
Configure your clusters to use OpenStack
Stay organized with collections
Save and categorize content based on your preferences.
Google Distributed Cloud software-only supports using OpenStack as a private cloud
platform. This guide describes how to configure a cluster to work with an
external cloud provider. Running an installation of Google Distributed Cloud
software-only clusters on OpenStack lets you use the following OpenStack
services:
Infrastructure as a Service (IaaS)
Load balancing as a Service (LBaaS)
Storage
Configuring a cluster to work with OpenStack consists of the following:
When you create the cluster, you add a
baremetal.cluster.gke.io/external-cloud-provider annotation
This annotation causes Google Distributed Cloud to add a kubelet flag
cloud-provider=external
The kubelet then adds
node.cloudprovider.kubernetes.io/uninitialized:NoSchedule taints to the
cluster nodes
This configuration allows you and OpenStack to own the node init processes. For
example, you can deploy Google Distributed Cloud software on OpenStack to
automatically provision OpenStack Load Balancing as a Service (LBaaS) resources
or to make use of other OpenStack capabilities. The LBaaS resources can replace
the MetalLB resources to expose Services running on your clusters to other
OpenStack tenants or outside the OpenStack network. For more information about
OpenStack features and benefits, see the
OpenStack documentation .
Related examples
This document only covers how to configure your cluster for use with OpenStack.
The following guides walk you through an example deployment:
Deploy a cluster on OpenStack
walks you through a sample deployment of a hybrid cluster on OpenStack
virtual machines (VMs). The deployment uses a script to simplify the
installation. The guide also shows you one way to enable load balancing as a
Service (LBaaS).
Configure the OpenStack Cloud Provider for Kubernetes
shows you how to install the OpenStack Cloud Provider on a cluster that's
been deployed on OpenStack. The OpenStack Cloud Provider isn't required to
use Google Distributed Cloud software with OpenStack.
Before you begin
Decide which clusters need to use OpenStack LBaaS resources.
Once you've created a cluster configured to use OpenStack LBaaS resources,
you can't change the configuration to switch to MetalLB resources. Make sure
that you initialize your clusters with the correct cloud provider
configuration.
Ensure you have access to the machines you're trying to configure.
Learn more about running the cloud-controller-manager
in the Kubernetes documentation.
Change your cluster configuration file
The OpenStack Kubernetes Cloud Provider requires that kubelet runs on all the
nodes with the following argument:
Note: The OpenStack Cloud Provider is used as an example in
Configure the OpenStack Cloud Provider for Kubernetes ,
but it isn't required to integrate Google Distributed Cloud with OpenStack.
cloud-provider : "external"
To ensure that your cluster meets this requirement, add the
baremetal.cluster.gke.io/external-cloud-provider: "true" annotation to your
cluster configuration file under the metadata section before you create the
cluster.
The entry in your configuration file should look like the following example:
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : cluster1
namespace : cluster-cluster1
annotations :
baremetal.cluster.gke.io/external-cloud-provider : "true"
spec :
...
Some cloud providers on other cloud platforms require a special format for
providerID . Google Distributed Cloud generates a providerID with a format like
baremetal:// MACHINE_ADDRESS for each node machine. If you
want to have a different providerID , you can specify one for each node along
with the IP address.
The following sample cluster configuration file shows how you specify
providerID for your cluster nodes:
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : cluster1
namespace : cluster-cluster1
spec :
clusterNetwork :
pods :
cidrBlocks :
- 192.168.0.0/16
services :
cidrBlocks :
- 10.96.0.0/20
controlPlane :
nodePoolSpec :
nodes :
- address : 10.200.0.1
+ providerID : some-prefix://unique-string
- address : 10.200.0.2
+ providerID : some-prefix2://unique-string2
...
---
apiVersion : baremetal.cluster.gke.io/v1
kind : NodePool
metadata :
name : nodepool1
namespace : cluster-cluster1
spec :
clusterName : cluster1
nodes :
- address : 172.18.0.2
+ providerID : some-prefix3://unique-string3
Create your cluster
After you edit the configuration file, use the following command to initialize
your cluster:
bmctl create cluster -c cluster1
For more information about creating clusters, see Cluster creation overview .
Node configuration
When you create a cluster configured for OpenStack, the cluster nodes have the
following changes:
All nodes in cluster1 run with the required argument: cloud-provider:
"external" .
All nodes also have the following taint added to their configuration files:
taints :
- effect : NoSchedule
key : node.cloudprovider.kubernetes.io/uninitialized
value : "true"
These taints are removed after you initialize your cloud provider on this
cluster.
kubelet runs with the providerID you specified in the cluster
configuration file.
What's next
Deploy a cluster on OpenStack
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
