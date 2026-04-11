---
title: "Configure VM-Host Group affinity \_|\_ Google Distributed Cloud (software\
  \ only) for VMware \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-vm-host-affinity
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-vm-host-affinity
  title: "Configure VM-Host Group affinity \_|\_ Google Distributed Cloud (software\
    \ only) for VMware \_|\_ Google Cloud Documentation"
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
Configure VM-Host Group affinity
Stay organized with collections
Save and categorize content based on your preferences.
This document gives an example of how to configure a Google Distributed Cloud cluster to
use
VM-Host affinity .
VM-Host Group affinity is one of the mechanisms that Google Distributed Cloud provides
to ensure high availability. With VM-Host Group affinity, you create groups of
physical ESXi hosts. Then you configure your cluster to associate VM groups with
host groups.
For example, you could configure all VMs in one node pool to run on a particular
host group. And you could configure all VMs in a second node pool to run on a
different host group. You could then treat each node pool as a failure domain.
To differentiate the failure domains, you could add labels to the VMs in
the various node pools.
Using VM-Host Group affinity isn't supported on
advanced clusters .
Before you begin
For this exercise, you need to have at least six ESXi hosts in your vSphere
environment.
Create host groups
Create two or more host DRS groups in your vSphere environment. For this
exercise, two host groups with three hosts each would be appropriate. For
instructions, see
Create a Host DRS Group .
Create a user cluster
This section gives an example of how to create a user cluster that uses VM-Host
Group affinity. The cluster in this example uses
Controlplane V2 .
The cluster has a high-availability control plane, so there are three
control-plane nodes. In addition to the control-plane nodes, there are six
worker nodes: three in one node pool and three in a second node pool. All nodes
use static IP addresses.
Start by following the instructions in
Create a user cluster .
As you fill in your user cluster configuration file:
Specify two node pools for worker nodes. For each node pool, set replicas to
3 , and provide the name of an existing host group.
Example configuration file
Here is an example of an IP block file and a portion of a user cluster
configuration file.
user-ipblock.yaml
blocks:
- netmask: 255.255.255.0
gateway: 172.16.21.1
ips:
- ip: 172.16.21.2
- ip: 172.16.21.3
- ip: 172.16.21.4
- ip: 172.16.21.5
- ip: 172.16.21.6
- ip: 172.16.21.7
- ip: 172.16.21.8
user-cluster-yaml
apiVersion: v1
kind: UserCluster
...
network:
hostConfig:
dnsServers:
- "203.0.113.2"
- "198.51.100.2"
ntpServers:
- "216.239.35.4"
ipMode:
type: "static"
ipBlockFilePath: "user-ipblock.yaml"
controlPlaneIPBlock:
netmask: "255.255.255.0"
gateway: "172.16.21.1"
ips:
- ip: "172.16.21.9"
hostname: "cp-vm-1"
- ip: "172.16.21.10"
hostname: "cp-vm-2"
- ip: "172.16.21.11"
hostname: "cp-vm-3"
loadBalancer:
vips:
controlPlaneVIP: "172.16.21.40"
ingressVIP: "172.16.21.30"
kind: MetalLB
metalLB:
addressPools:
- name: "address-pool-1"
addresses:
- "172.16.21.30-172.16.21.39"
...
enableControlplaneV2: true
masterNode:
cpus: 4
memoryMB: 8192
replicas: 3
nodePools:
- name: "worker-pool-1"
enableLoadBalancer: true
replicas: 3
vsphere:
hostgroups:
- "hostgroup-1"
labels:
failuredomain: "failuredomain-1"
- name: "worker-pool-2"
replicas: 3
vsphere:
hostgroups:
- "hostgroup-2"
labels:
failuredomain: "failuredomain-2"
...
These are the important points to understand in the preceding example:
The static IP addresses for the worker nodes are specified in an IP block
file. The IP block file has seven addresses even though there are only six
worker nodes. The extra IP address is needed during cluster upgrade, update,
and auto repair.
The static IP addresses for the three control-plane nodes are specified in the
network.controlPlaneIPBlock section of the user cluster configuration file.
There is no need for an extra IP address in this block.
The masterNode.replicas field is set to 3 , so there will be three
control-plane nodes.
A cluster controller will create a VM DRS group that has the three nodes in
the worker-pool-1 node pool. A controller will also create a
VM-Host affinity rule
that ensures nodes in worker-pool-1 will run on hosts that are in
hostgroup-1 . The nodes in worker-pool-1 have the label
failuredomain: "failuredomain-1"
A cluster controller will create a VM DRS group that has the three nodes in
the worker-pool-2 node pool. A controller will also create a
VM-Host affinity rule that ensures nodes in worker-pool-2 will run on hosts
that are in hostgroup-2 . The nodes in worker-pool-2 have the label
failuredomain: "failuredomain-2"
Continue creating your user cluster as described in
Create a user cluster .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
