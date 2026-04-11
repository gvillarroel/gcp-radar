---
title: "Configure scheduling \_|\_ Google Distributed Cloud (software only) for bare\
  \ metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/cluster-scheduling
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/cluster-scheduling
  title: "Configure scheduling \_|\_ Google Distributed Cloud (software only) for\
    \ bare metal \_|\_ Google Cloud Documentation"
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
Configure scheduling
Stay organized with collections
Save and categorize content based on your preferences.
This page describes scheduler options and how to configure default pod
scheduling constraints in your Google Distributed Cloud software-only for bare metal
clusters.
Google Distributed Cloud provides a number of standard Kubernetes features that you can
use to control scheduling pods, such as:
kube-scheduler
Topology spread constraints
Default custom scheduler
For information on pod topology spread constraints in Kubernetes, see Kubernetes
Scheduler
in the Kubernetes documentation.
Before you begin
Before configuring default pod spread, make sure each node in your cluster has the
correct topology labels. You can use the Nodepool.Spec.TaintsAndLabels API
to apply labels. Manually labeling nodes with kubectl label offers more
flexibility, but requires manual labeling when you add a new node to the
cluster.
Configure default custom scheduler {#:config-default}
Label nodes
Add topology labels to your cluster and nodepool YAML files. The following
example assumes two worker nodepools are in different racks, and control
plane nodes are in rack1 .
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : abm-cluster
namespace : cluster-abm-cluster
spec :
controlPlane :
nodePoolSpec :
labels :
topology.k8s.io/rack : rack1
---
apiVersion : baremetal.cluster.gke.io/v1
kind : NodePool
metadata :
name : nodepool-rack1
namespace : cluster-abm-cluster
spec :
labels :
topology.k8s.io/rack : rack1
---
apiVersion : baremetal.cluster.gke.io/v1
kind : NodePool
metadata :
name : nodepool-rack2
namespace : cluster-abm-cluster
spec :
labels :
topology.k8s.io/rack : rack2
Apply the updated cluster configuration.
bmctl update cluster -c CLUSTER_NAME
Replace CLUSTER_NAME with the name of your
cluster.
Wait for the topology.k8s.io/rack label to propagate to all nodes in the
cluster.
Enable default pod spread constraints
Add the
preview.baremetal.cluster.gke.io/custom-scheduler-configuration:enable
annotation to your cluster YAML file.
Add the schedulerConfiguration section under cluster.spec.controlPlane
in your cluster YAML file.
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : abm-cluster
namespace : cluster-abm-cluster
annotations :
preview.baremetal.cluster.gke.io/custom-scheduler-configuration : enable
spec :
controlPlane :
schedulerConfiguration :
defaultTopologySpreadConstraint :
defaultConstraints :
- topologyKey : topology.k8s.io/rack
whenUnsatisfiable : DoNotSchedule
maxSkew : 1
defaultingType : List
Apply the updated cluster configuration.
bmctl update cluster -c CLUSTER_NAME
Replace CLUSTER_NAME with the name of your
cluster.
Wait for the cluster reconciliation to complete. Monitor
cluster.status.clusterState until it shows Running . A
control-plane-update job runs for each control plane node during this
process.
Verify pod spread configuration
Create a test deployment with five replicas.
Observe the pod distribution. The difference in the number of pods on
nodepool-rack1 and nodepool-rack2 should be exactly one.
Verify the kube-scheduler-profile.config file on each Control Plane node.
The file, located at /etc/kubernetes/kube-scheduler-profile.config , must
contain the topology spread configuration from cluster.spec .
Troubleshoot
To diagnose and resolve issues with default pod spread, check the following:
Review the BareMetalMachine.Status.ControlPlaneComponents for the
feature's status.
Examine logs from the cluster-operator and cap-controller-manager for
relevant events.
If kube-scheduler static pods crash, check that the scheduler
configuration is correct in the cluster YAML file.
What's next
Learn more about pod topology spread constraints
in the Kubernetes documentation.
See Troubleshoot the Kubernetes scheduler
if you run into issues.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
