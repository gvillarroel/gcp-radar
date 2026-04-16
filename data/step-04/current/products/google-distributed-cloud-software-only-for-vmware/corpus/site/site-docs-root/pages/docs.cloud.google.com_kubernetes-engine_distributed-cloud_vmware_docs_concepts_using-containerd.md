---
title: "Using containerd for the container runtime \_|\_ Google Distributed Cloud\
  \ (software only) for VMware \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/using-containerd
  title: "Using containerd for the container runtime \_|\_ Google Distributed Cloud\
    \ (software only) for VMware \_|\_ Google Cloud Documentation"
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
Using containerd for the container runtime
Stay organized with collections
Save and categorize content based on your preferences.
The
container runtime
is software that is responsible for managing containers and container images on
a Kubernetes node. containerd is a
CNCF (Cloud Native Cloud Foundation) graduated
container runtime. It supports Kubernetes natively, and is considered more
resource efficient and secure than the Docker Engine for Kubernetes. Until
Kubernetes 1.20, Docker Engine was the
primary container runtime. However, Dockershim, the Docker Engine integration
code in Kubernetes, was deprecated in Kubernetes 1.20, and has been removed in
Kubernetes 1.24.
Going forward, you should use containerd in your clusters.
Support for containerd in an admin cluster
Google Distributed Cloud uses containerd for all admin cluster nodes.
Support for containerd in a user cluster
Google Distributed Cloud supports the following
OS image types
for user cluster nodes:
OS image type Container runtime
ubuntu_containerd containerd
cos containerd
windows containerd
Restrictions and recommendations
Starting in version 1.13.0, Google Distributed Cloud no longer supports
the ubuntu OS image type. All cluster nodes must use the containerd runtime.
You cannot upgrade a cluster that uses Docker Engine to version
1.13. You must update your cluster to use the containerd runtime before you
upgrade to 1.13.
Starting in version 1.12.0, you can no longer create new clusters that use the
ubuntu OS image type. That is, you can no longer create new clusters that use
the Docker Engine container runtime.
Determine which node pools are using Docker Engine
Ubuntu
List the Ubuntu node pools that use Docker Engine:
kubectl --kubeconfig USER_CLUSTER_KUBECONFIG get onpremnodepools \
-o json -A | jq -r '.items[] |select(.spec.osImageType == "ubuntu")|.metadata.name'
Replace USER_CLUSTER_KUBECONFIG with the path of the user cluster
kubeconfig file.
Example output:
ubuntu-node-pool-1
ubuntu-node-pool-3
Windows
All Windows node pools in a user cluster use the same container runtime. The
runtime for Windows nodes is determined by the value of
enableWindowsDataplaneV2 , which is a field in the user cluster
configuration'file.
If enableWindowsDataplaneV2 is true , all Windows nodes in the user cluster
use containerd. If it is false , all Windows nodes use Docker Engine.
Run the following command to determine which user clusters have
enableWindowsDataplaneV2 set to false . This tells you which user clusters
are configured to use Docker Engine for Windows nodes.
kubectl --kubeconfig ADMIN_CLUSTER_KUBECONFIG get onpremuserclusters \
-A -o json | jq -r '.items[] |select(.spec.enableWindowsDataplaneV2 == false)|.metadata.name'
The output lists all user clusters that are configured to use Docker Engine for
Windows nodes. For example:
user-cluster-1
Regardless of whether a user cluster has any Windows node pools, if the cluster
has enableWindowsDataplaneV2 set to false , you will not be able to upgrade
it to version 1.13.
Update Linux node pools to use containerd
For each node pool in the user cluster configuration file, set
osImageType
ubuntu_containerd or cos .
Example:
nodePools
- name: "my-node-pool"
osImageType: "ubuntu_containerd"
Update the user cluster:
gkectl update cluster --kubeconfig ADMIN_CLUSTER_KUBECONFIG --config USER_CLUSTER_CONFIG
Replace the following:
ADMIN_CLUSTER_KUBECONFIG : the path of the admin custer kubeconfig
file
USER_CLUSTER_CONFIG : the path of the user cluster configuration
file
Update Windows nodes to use containerd
In the user cluster configuration file, set
enableWindowsDataplaneV2
to true .
enableWindowsDataplaneV2: true
Update the user cluster:
gkectl update cluster --kubeconfig ADMIN_CLUSTER_KUBECONFIG --config USER_CLUSTER_CONFIG
The preceding command sets the container runtime to containerd for all Windows
nodes in the cluster.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
