---
title: "Cluster configuration samples \_|\_ Google Distributed Cloud (software only)\
  \ for bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples
  title: "Cluster configuration samples \_|\_ Google Distributed Cloud (software only)\
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
Cluster configuration samples
Stay organized with collections
Save and categorize content based on your preferences.
This document provides YAML samples of the most common Google Distributed Cloud
cluster configurations. The sample cluster configuration files provide
permutations of the following features and capabilities:
Edge profile
High availability
Open ID Connect (OIDC)
Lightweight Directory Access Protocol (LDAP)
Load balancer options:
External, manually configured load balancing
Bundled Layer 2 load balancing
Bundled Layer 2 load balancing outside the Control Plane
Bundled load balancing with Border Gateway Protocol (BGP)
Multiple NodePools
SSH key overrides
Registry mirror
Behind a proxy
Private package repository
Note: You can manage identity outside of cluster configuration files with the
GKE Identity Service. For more information about using
GKE Identity Service to set up OIDC or LDAP, see
GKE Identity Service overview .
How to use the samples
This collection of YAML samples is intended primarily as an educational
reference that illustrates how various features look when properly configured.
If you want to use these samples to create your own clusters, you need to make
changes. Many of the values used, such as the values for the storage
section, are defaults and work for most clusters. However, other values, such as
spec.authentication.oidc.clientID and spec.gkeConnect.projectID , are
specific to your project and environment.
Familiarize yourself with the related feature documentation before attempting to
use any of the YAML content provided in this document.
Features in each sample
The following table list basic configuration information for each sample:
Samples
Standalone clusters
Basic edge profile
Single node
Edge profile
No node pools
High-availability edge profile
High availability with three nodes
Edge profile
Bundled Layer 2 load balancing
No node pools
Hybrid clusters
Basic hybrid cluster
Non-high availability
Bundled Layer 2 load balancing
High-availability hybrid cluster
High availability
OIDC
Behind a proxy
Registry mirror
Private package repository
Bundled Layer 2 load balancing
High-availability hybrid cluster with load balancing outside the Control Plane
High availability
OIDC
Behind a proxy
Registry mirror
Private package repository
Bundled Layer 2 load balancing outside the Control Plane
Admin clusters
Basic admin cluster
Non-high availability
Bundled Layer 2 load balancing
Admin cluster with manual load balancing
Non-high availability
External, manually configured load balancing
High-availability admin cluster
High availability
OIDC
Behind a proxy
Registry mirror
Private package repository
Bundled Layer 2 load balancing
User clusters
Basic user cluster
Non-high availability
Bundled Layer 2 load balancing
High-availability user cluster with multiple node pools
SSH key overrides
High availability
Behind a proxy
Registry mirror
Private package repository
Bundled Layer 2 load balancing
Multiple node pools
High-availability user cluster with OIDC
High availability
OIDC
Behind a proxy
Registry mirror
Private package repository
Bundled Layer 2 load balancing
High-availability user cluster with LDAP and BGP load balancing
High availability
LDAP
Bundled load balancing with BGP
Standalone clusters
Note the following capabilities of a standalone cluster:
It can administer itself
It can run workloads
It can't create or manage other/user clusters
Standalone clusters are suited for cluster installations that require a small
footprint or in situations where you want to run clusters in network-isolated
partitions.
For more information about standalone clusters, see
Standalone cluster deployment
and
Create standalone clusters .
Basic edge profile
Note the following features and options in this standalone cluster configuration:
Single node
Edge profile
No node pools
gcrKeyPath : baremetal/gcr.json
sshPrivateKeyPath : .ssh/id_rsa
gkeConnectAgentServiceAccountKeyPath : baremetal/connect-agent.json
gkeConnectRegisterServiceAccountKeyPath : baremetal/connect-register.json
cloudOperationsServiceAccountKeyPath : baremetal/cloud-ops.json
---
apiVersion : v1
kind : Namespace
metadata :
name : cluster-edge-basic
---
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : edge-basic
namespace : cluster-edge-basic
spec :
type : standalone
profile : edge
anthosBareMetalVersion : 1.34.200-gke.68
gkeConnect :
projectID : project-fleet
controlPlane :
nodePoolSpec :
nodes :
- address : 10.200.0.2
clusterNetwork :
pods :
cidrBlocks :
- 192.168.0.0/16
services :
cidrBlocks :
- 10.96.0.0/20
loadBalancer :
mode : bundled
ports :
controlPlaneLBPort : 443
vips :
controlPlaneVIP : 10.200.0.71
ingressVIP : 10.200.0.72
addressPools :
- name : pool1
addresses :
- 10.200.0.72-10.200.0.90
clusterOperations :
projectID : project-fleet
location : us-central1
storage :
lvpNodeMounts :
path : /mnt/localpv-disk
storageClassName : local-disks
lvpShare :
path : /mnt/localpv-share
storageClassName : local-shared
numPVUnderSharedPath : 5
nodeConfig :
podDensity :
maxPodsPerNode : 110
High-availability edge profile
Note the following features and options in this standalone cluster configuration:
High availability with three nodes
Edge profile
Bundled Layer 2 load balancing
No node pools
gcrKeyPath : baremetal/gcr.json
sshPrivateKeyPath : .ssh/id_rsa
gkeConnectAgentServiceAccountKeyPath : baremetal/connect-agent.json
gkeConnectRegisterServiceAccountKeyPath : baremetal/connect-register.json
cloudOperationsServiceAccountKeyPath : baremetal/cloud-ops.json
---
apiVersion : v1
kind : Namespace
metadata :
name : cluster-edge-ha
---
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : edge-ha
namespace : cluster-edge-ha
spec :
type : standalone
profile : edge
anthosBareMetalVersion : 1.34.200-gke.68
gkeConnect :
projectID : project-fleet
controlPlane :
nodePoolSpec :
nodes :
- address : 10.200.0.2
- address : 10.200.0.3
- address : 10.200.0.4
clusterNetwork :
pods :
cidrBlocks :
- 192.168.0.0/16
services :
cidrBlocks :
- 10.96.0.0/20
loadBalancer :
mode : bundled
ports :
controlPlaneLBPort : 443
vips :
controlPlaneVIP : 10.200.0.71
ingressVIP : 10.200.0.72
addressPools :
- name : pool1
addresses :
- 10.200.0.72-10.200.0.90
clusterOperations :
projectID : project-fleet
location : us-central1
storage :
lvpNodeMounts :
path : /mnt/localpv-disk
storageClassName : local-disks
lvpShare :
path : /mnt/localpv-share
storageClassName : local-shared
numPVUnderSharedPath : 5
nodeConfig :
podDensity :
maxPodsPerNode : 110
Hybrid clusters
Note the following capabilities of a hybrid cluster:
It can administer itself
It can run workloads
It can manage other user clusters
Hybrid clusters function like admin clusters that can run user workloads. Just
like admin clusters, hybrid clusters can manage other user clusters.
For more information about standalone clusters, see
Hybrid cluster deployment
and
Create hybrid clusters .
Basic hybrid cluster
Note the following features and options in this hybrid cluster configuration:
Non-high availability
Bundled Layer 2 load balancing
gcrKeyPath : baremetal/gcr.json
sshPrivateKeyPath : .ssh/id_rsa
gkeConnectAgentServiceAccountKeyPath : baremetal/connect-agent.json
gkeConnectRegisterServiceAccountKeyPath : baremetal/connect-register.json
cloudOperationsServiceAccountKeyPath : baremetal/cloud-ops.json
---
apiVersion : v1
kind : Namespace
metadata :
name : cluster-hybrid-basic
---
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : hybrid-basic
namespace : cluster-hybrid-basic
spec :
type : hybrid
profile : default
anthosBareMetalVersion : 1.34.200-gke.68
gkeConnect :
projectID : project-fleet
controlPlane :
nodePoolSpec :
nodes :
- address : 10.200.0.2
clusterNetwork :
pods :
cidrBlocks :
- 192.168.0.0/16
services :
cidrBlocks :
- 10.96.0.0/20
loadBalancer :
mode : bundled
ports :
controlPlaneLBPort : 443
vips :
controlPlaneVIP : 10.200.0.71
ingressVIP : 10.200.0.72
addressPools :
- name : pool1
addresses :
- 10.200.0.72-10.200.0.90
clusterOperations :
projectID : project-fleet
location : us-central1
storage :
lvpNodeMounts :
path : /mnt/localpv-disk
storageClassName : local-disks
lvpShare :
path : /mnt/localpv-share
storageClassName : local-shared
numPVUnderSharedPath : 5
nodeConfig :
podDensity :
maxPodsPerNode : 250
---
apiVersion : baremetal.cluster.gke.io/v1
kind : NodePool
metadata :
name : np1
namespace : cluster-hybrid-basic
spec :
clusterName : hybrid-basic
nodes :
- address : 10.200.0.10
- address : 10.200.0.11
- address : 10.200.0.12
High-availability hybrid cluster
Note the following features and options in this hybrid cluster configuration:
High availability
OIDC
Behind a proxy
Registry mirror
Private package repository
Bundled Layer 2 load balancing
registryMirrors :
- endpoint : https://10.194.2.13:5007/v2/test-namespace
caCertPath : /root/cert.pem
pullCredentialConfigPath : /root/dockerconfig.json
sshPrivateKeyPath : .ssh/id_rsa
gkeConnectAgentServiceAccountKeyPath : baremetal/connect-agent.json
gkeConnectRegisterServiceAccountKeyPath : baremetal/connect-register.json
cloudOperationsServiceAccountKeyPath : baremetal/cloud-ops.json
---
apiVersion : v1
kind : Namespace
metadata :
name : cluster-hybrid-ha
---
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : hybrid-ha
namespace : cluster-hybrid-ha
spec :
type : hybrid
profile : default
anthosBareMetalVersion : 1.34.200-gke.68
gkeConnect :
projectID : project-fleet
controlPlane :
nodePoolSpec :
nodes :
- address : 10.200.0.2
- address : 10.200.0.3
- address : 10.200.0.4
clusterNetwork :
pods :
cidrBlocks :
- 192.168.0.0/16
services :
cidrBlocks :
- 10.96.0.0/20
proxy :
url : http://10.194.2.140:3128
noProxy :
- 127.0.0.1
- localhost
osEnvironmentConfig :
addPackageRepo : false
loadBalancer :
mode : bundled
ports :
controlPlaneLBPort : 443
vips :
controlPlaneVIP : 10.200.0.71
ingressVIP : 10.200.0.72
addressPools :
- name : pool1
addresses :
- 10.200.0.72-10.200.0.90
clusterOperations :
projectID : project-fleet
location : us-central1
storage :
lvpNodeMounts :
path : /mnt/localpv-disk
storageClassName : local-disks
lvpShare :
path : /mnt/localpv-share
storageClassName : local-shared
numPVUnderSharedPath : 5
authentication :
oidc :
issuerURL : "https://infra.example.dev/adfs"
clientID : "be654652-2c45-49ff-9d7c-3663cee9ba51"
clientSecret : "clientSecret"
kubectlRedirectURL : "http://localhost:44320/callback"
username : "unique_name"
usernamePrefix : "oidc:"
group : "groups"
groupPrefix : "oidc:"
scopes : "allatclaims"
extraParams : "resource=token-groups-claim"
deployCloudConsoleProxy : true
certificateAuthorityData : base64EncodedCACertificate
proxy : http://10.194.2.140:3128
nodeConfig :
podDensity :
maxPodsPerNode : 250
---
apiVersion : baremetal.cluster.gke.io/v1
kind : NodePool
metadata :
name : np1
namespace : cluster-hybrid-ha
spec :
clusterName : hybrid-ha
nodes :
- address : 10.200.0.10
- address : 10.200.0.11
- address : 10.200.0.12
High-availability hybrid cluster with load balancing outside the Control Plane
Note the following features and options in this hybrid cluster configuration:
High availability
OIDC
Behind a proxy
Registry mirror
Private package repository
Bundled Layer 2 load balancing outside the Control Plane
registryMirrors :
- endpoint : https://10.194.2.13:5007/v2/test-namespace
caCertPath : /root/cert.pem
pullCredentialConfigPath : /root/dockerconfig.json
sshPrivateKeyPath : .ssh/id_rsa
gkeConnectAgentServiceAccountKeyPath : baremetal/connect-agent.json
gkeConnectRegisterServiceAccountKeyPath : baremetal/connect-register.json
cloudOperationsServiceAccountKeyPath : baremetal/cloud-ops.json
---
apiVersion : v1
kind : Namespace
metadata :
name : cluster-hybrid-ha-lb
---
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : hybrid-ha-lb
namespace : cluster-hybrid-ha-lb
spec :
type : hybrid
profile : default
anthosBareMetalVersion : 1.34.200-gke.68
gkeConnect :
projectID : project-fleet
controlPlane :
nodePoolSpec :
nodes :
- address : 10.200.0.2
- address : 10.200.0.3
- address : 10.200.0.4
clusterNetwork :
pods :
cidrBlocks :
- 192.168.0.0/16
services :
cidrBlocks :
- 10.96.0.0/20
proxy :
url : http://10.194.2.140:3128
noProxy :
- 127.0.0.1
- localhost
osEnvironmentConfig :
addPackageRepo : false
loadBalancer :
mode : bundled
ports :
controlPlaneLBPort : 443
vips :
controlPlaneVIP : 10.200.0.71
ingressVIP : 10.200.0.72
addressPools :
- name : pool1
addresses :
- 10.200.0.72-10.200.0.90
nodePoolSpec :
nodes :
- address : 10.200.0.5
- address : 10.200.0.6
- address : 10.200.0.7
clusterOperations :
projectID : project-fleet
location : us-central1
storage :
lvpNodeMounts :
path : /mnt/localpv-disk
storageClassName : local-disks
lvpShare :
path : /mnt/localpv-share
storageClassName : local-shared
numPVUnderSharedPath : 5
authentication :
oidc :
issuerURL : "https://infra.example.dev/adfs"
clientID : "be654652-2c45-49ff-9d7c-3663cee9ba51"
clientSecret : "clientSecret"
kubectlRedirectURL : "http://localhost:44320/callback"
username : "unique_name"
usernamePrefix : "oidc:"
group : "groups"
groupPrefix : "oidc:"
scopes : "allatclaims"
extraParams : "resource=token-groups-claim"
deployCloudConsoleProxy : true
certificateAuthorityData : base64EncodedCACertificate
proxy : http://10.194.2.140:3128
nodeConfig :
podDensity :
maxPodsPerNode : 250
---
apiVersion : baremetal.cluster.gke.io/v1
kind : NodePool
metadata :
name : np1
namespace : cluster-hybrid-ha-lb
spec :
clusterName : hybrid-ha-lb
nodes :
- address : 10.200.0.10
- address : 10.200.0.11
- address : 10.200.0.12
Admin clusters
An admin cluster is used to manage other user clusters. Use admin clusters if
you have a fleet of clusters in the same data center that you want to manage from
a centralized place, and for larger deployments that need isolation between
different teams or between development and production workloads.
For more information about admin clusters, see Multi-cluster
deployment and
Create admin clusters .
Basic admin cluster
Note the following features and options in this admin cluster configuration:
Non-high availability
Bundled Layer 2 load balancing
gcrKeyPath : baremetal/gcr.json
sshPrivateKeyPath : .ssh/id_rsa
gkeConnectAgentServiceAccountKeyPath : baremetal/connect-agent.json
gkeConnectRegisterServiceAccountKeyPath : baremetal/connect-register.json
cloudOperationsServiceAccountKeyPath : baremetal/cloud-ops.json
---
apiVersion : v1
kind : Namespace
metadata :
name : cluster-admin-basic
---
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : admin-basic
namespace : cluster-admin-basic
spec :
type : admin
profile : default
anthosBareMetalVersion : 1.34.200-gke.68
gkeConnect :
projectID : project-fleet
controlPlane :
nodePoolSpec :
nodes :
- address : 10.200.0.2
clusterNetwork :
pods :
cidrBlocks :
- 192.168.0.0/16
services :
cidrBlocks :
- 10.96.0.0/20
loadBalancer :
mode : bundled
ports :
controlPlaneLBPort : 443
vips :
controlPlaneVIP : 10.200.0.71
clusterOperations :
projectID : project-fleet
location : us-central1
storage :
lvpNodeMounts :
path : /mnt/localpv-disk
storageClassName : local-disks
lvpShare :
path : /mnt/localpv-share
storageClassName : local-shared
numPVUnderSharedPath : 5
nodeConfig :
podDensity :
maxPodsPerNode : 250
Admin cluster with manual load balancing
Note the following features and options in this admin cluster configuration:
Non-high availability
External, manually configured load balancing
gcrKeyPath : baremetal/gcr.json
sshPrivateKeyPath : .ssh/id_rsa
gkeConnectAgentServiceAccountKeyPath : baremetal/connect-agent.json
gkeConnectRegisterServiceAccountKeyPath : baremetal/connect-register.json
cloudOperationsServiceAccountKeyPath : baremetal/cloud-ops.json
---
apiVersion : v1
kind : Namespace
metadata :
name : cluster-admin-manlb
---
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : admin-manlb
namespace : cluster-admin-manlb
spec :
type : admin
profile : default
anthosBareMetalVersion : 1.34.200-gke.68
gkeConnect :
projectID : project-fleet
controlPlane :
nodePoolSpec :
nodes :
- address : 10.200.0.2
clusterNetwork :
pods :
cidrBlocks :
- 192.168.0.0/16
services :
cidrBlocks :
- 10.96.0.0/20
loadBalancer :
mode : manual
ports :
controlPlaneLBPort : 443
vips :
controlPlaneVIP : 10.200.0.71
clusterOperations :
projectID : project-fleet
location : us-central1
storage :
lvpNodeMounts :
path : /mnt/localpv-disk
storageClassName : local-disks
lvpShare :
path : /mnt/localpv-share
storageClassName : local-shared
numPVUnderSharedPath : 5
nodeConfig :
podDensity :
maxPodsPerNode : 250
High-availability admin cluster
Note the following features and options in this admin cluster configuration:
High availability
OIDC
Behind a proxy
Registry mirror
Private package repository
Bundled Layer 2 load balancing
registryMirrors :
- endpoint : https://10.194.2.13:5007/v2/test-namespace
caCertPath : /root/cert.pem
pullCredentialConfigPath : /root/dockerconfig.json
sshPrivateKeyPath : .ssh/id_rsa
gkeConnectAgentServiceAccountKeyPath : baremetal/connect-agent.json
gkeConnectRegisterServiceAccountKeyPath : baremetal/connect-register.json
cloudOperationsServiceAccountKeyPath : baremetal/cloud-ops.json
---
apiVersion : v1
kind : Namespace
metadata :
name : cluster-admin-ha
---
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : admin-ha
namespace : cluster-admin-ha
spec :
type : admin
profile : default
anthosBareMetalVersion : 1.34.200-gke.68
gkeConnect :
projectID : project-fleet
controlPlane :
nodePoolSpec :
nodes :
- address : 10.200.0.2
- address : 10.200.0.3
- address : 10.200.0.4
clusterNetwork :
pods :
cidrBlocks :
- 192.168.0.0/16
services :
cidrBlocks :
- 10.96.0.0/20
proxy :
url : http://10.194.2.140:3128
noProxy :
- 127.0.0.1
- localhost
osEnvironmentConfig :
addPackageRepo : false
loadBalancer :
mode : bundled
ports :
controlPlaneLBPort : 443
vips :
controlPlaneVIP : 10.200.0.71
clusterOperations :
projectID : project-fleet
location : us-central1
storage :
lvpNodeMounts :
path : /mnt/localpv-disk
storageClassName : local-disks
lvpShare :
path : /mnt/localpv-share
storageClassName : local-shared
numPVUnderSharedPath : 5
authentication :
oidc :
issuerURL : "https://infra.example.dev/adfs"
clientID : "be654652-2c45-49ff-9d7c-3663cee9ba51"
clientSecret : "clientSecret"
kubectlRedirectURL : "http://localhost:44320/callback"
username : "unique_name"
usernamePrefix : "oidc:"
group : "groups"
groupPrefix : "oidc:"
scopes : "allatclaims"
extraParams : "resource=token-groups-claim"
deployCloudConsoleProxy : true
certificateAuthorityData : base64EncodedCACertificate
proxy : http://10.194.2.140:3128
nodeConfig :
podDensity :
maxPodsPerNode : 250
User clusters
A user cluster runs your containerized workloads. User clusters must contain one
or more worker nodes that run user workloads. Use user clusters if you have a
fleet of clusters in the same data center that you want to manage from a
centralized place. User clusters are also recommended for larger deployments
that need isolation between different teams or between development and
production workloads.
For more information about admin clusters, see Multi-cluster
deployment and
Create user clusters .
Basic user cluster
Note the following features and options in this user cluster configuration:
Non-high availability
Bundled Layer 2 load balancing
apiVersion : v1
kind : Namespace
metadata :
name : cluster-user-basic
---
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : user-basic
namespace : cluster-user-basic
spec :
type : user
profile : default
anthosBareMetalVersion : 1.34.200-gke.68
gkeConnect :
projectID : project-fleet
controlPlane :
nodePoolSpec :
nodes :
- address : 10.200.0.20
clusterNetwork :
pods :
cidrBlocks :
- 192.168.0.0/16
services :
cidrBlocks :
- 10.96.0.0/20
loadBalancer :
mode : bundled
ports :
controlPlaneLBPort : 443
vips :
controlPlaneVIP : 10.200.0.91
ingressVIP : 10.200.0.92
addressPools :
- name : pool1
addresses :
- 10.200.0.92-10.200.0.100
clusterOperations :
projectID : project-fleet
location : us-central1
storage :
lvpNodeMounts :
path : /mnt/localpv-disk
storageClassName : local-disks
lvpShare :
path : /mnt/localpv-share
storageClassName : local-shared
numPVUnderSharedPath : 5
nodeConfig :
podDensity :
maxPodsPerNode : 250
---
apiVersion : baremetal.cluster.gke.io/v1
kind : NodePool
metadata :
name : np1
namespace : cluster-user-basic
spec :
clusterName : user-basic
nodes :
- address : 10.200.0.30
- address : 10.200.0.31
- address : 10.200.0.32
High-availability user cluster with multiple node pools
Note the following features and options in this user cluster configuration:
SSH key overrides
High availability
Behind a proxy
Registry mirror
Private package repository
Bundled Layer 2 load balancing
Multiple node pools
registryMirrors :
- endpoint : https://10.194.2.13:5007/v2/test-namespace
caCertPath : /root/cert.pem
pullCredentialConfigPath : /root/dockerconfig.json
---
apiVersion : v1
kind : Namespace
metadata :
name : cluster-user-ha-np
---
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : user-ha-np
namespace : cluster-user-ha-np
spec :
type : user
profile : default
anthosBareMetalVersion : 1.34.200-gke.68
gkeConnect :
projectID : project-fleet
controlPlane :
nodePoolSpec :
nodes :
- address : 10.200.0.20
- address : 10.200.0.21
- address : 10.200.0.22
clusterNetwork :
pods :
cidrBlocks :
- 192.168.0.0/16
services :
cidrBlocks :
- 10.96.0.0/20
proxy :
url : http://10.194.2.140:3128
noProxy :
- 127.0.0.1
- localhost
osEnvironmentConfig :
addPackageRepo : false
loadBalancer :
mode : bundled
ports :
controlPlaneLBPort : 443
vips :
controlPlaneVIP : 10.200.0.91
ingressVIP : 10.200.0.92
addressPools :
- name : pool1
addresses :
- 10.200.0.92-10.200.0.100
clusterOperations :
projectID : project-fleet
location : us-central1
storage :
lvpNodeMounts :
path : /mnt/localpv-disk
storageClassName : local-disks
lvpShare :
path : /mnt/localpv-share
storageClassName : local-shared
numPVUnderSharedPath : 5
nodeConfig :
podDensity :
maxPodsPerNode : 250
credential :
sshKeySecret :
name : ssh-key
namespace : cluster-user-ha-np
---
apiVersion : baremetal.cluster.gke.io/v1
kind : NodePool
metadata :
name : np1
namespace : cluster-user-ha-np
spec :
clusterName : user-ha-np
nodes :
- address : 10.200.0.30
- address : 10.200.0.31
- address : 10.200.0.32
---
apiVersion : baremetal.cluster.gke.io/v1
kind : NodePool
metadata :
name : np2
namespace : cluster-user-ha-np
spec :
clusterName : user-ha-np
nodes :
- address : 10.200.0.33
- address : 10.200.0.34
- address : 10.200.0.35
High-availability user cluster with OIDC
Note the following features and options in this user cluster configuration:
High availability
OIDC
Behind a proxy
Registry mirror
Private package repository
Bundled Layer 2 load balancing off the Control Plane
registryMirrors :
- endpoint : https://10.194.2.13:5007/v2/test-namespace
caCertPath : /root/cert.pem
pullCredentialConfigPath : /root/dockerconfig.json
---
apiVersion : v1
kind : Namespace
metadata :
name : cluster-user-ha-oidc
---
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : user-ha-oidc
namespace : cluster-user-ha-oidc
spec :
type : user
profile : default
anthosBareMetalVersion : 1.34.200-gke.68
gkeConnect :
projectID : project-fleet
controlPlane :
nodePoolSpec :
nodes :
- address : 10.200.0.20
- address : 10.200.0.21
- address : 10.200.0.22
clusterNetwork :
pods :
cidrBlocks :
- 192.168.0.0/16
services :
cidrBlocks :
- 10.96.0.0/20
proxy :
url : http://10.194.2.140:3128
noProxy :
- 127.0.0.1
- localhost
osEnvironmentConfig :
addPackageRepo : false
loadBalancer :
mode : bundled
ports :
controlPlaneLBPort : 443
vips :
controlPlaneVIP : 10.200.0.91
ingressVIP : 10.200.0.92
addressPools :
- name : pool1
addresses :
- 10.200.0.92-10.200.0.100
nodePoolSpec :
nodes :
- address : 10.200.0.25
- address : 10.200.0.26
- address : 10.200.0.27
clusterOperations :
projectID : project-fleet
location : us-central1
storage :
lvpNodeMounts :
path : /mnt/localpv-disk
storageClassName : local-disks
lvpShare :
path : /mnt/localpv-share
storageClassName : local-shared
numPVUnderSharedPath : 5
authentication :
oidc :
issuerURL : "https://infra.example.dev/adfs"
clientID : "be654652-2c45-49ff-9d7c-3663cee9ba51"
clientSecret : "clientSecret"
kubectlRedirectURL : "http://localhost:44320/callback"
username : "unique_name"
usernamePrefix : "oidc:"
group : "groups"
groupPrefix : "oidc:"
scopes : "allatclaims"
extraParams : "resource=token-groups-claim"
deployCloudConsoleProxy : true
certificateAuthorityData : base64EncodedCACertificate
proxy : http://10.194.2.140:3128
nodeConfig :
podDensity :
maxPodsPerNode : 250
---
apiVersion : baremetal.cluster.gke.io/v1
kind : NodePool
metadata :
name : np1
namespace : cluster-user-ha-oidc
spec :
clusterName : user-ha-oidc
nodes :
- address : 10.200.0.30
- address : 10.200.0.31
- address : 10.200.0.32
High-availability user cluster with LDAP and BGP load balancing
Note the following features and options in this user cluster configuration:
High availability
LDAP
Bundled load balancing with BGP
apiVersion : v1
kind : Namespace
metadata :
name : cluster-user-ha-ldap
---
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : user-ha-ldap
namespace : cluster-user-ha-ldap
spec :
type : user
profile : default
anthosBareMetalVersion : 1.34.200-gke.68
gkeConnect :
projectID : project-fleet
controlPlane :
nodePoolSpec :
nodes :
- address : 10.200.0.20
- address : 10.200.0.21
- address : 10.200.0.22
clusterNetwork :
advancedNetworking : true
pods :
cidrBlocks :
- 192.168.0.0/16
services :
cidrBlocks :
- 10.96.0.0/20
loadBalancer :
mode : bundled
type : bgp
localASN : 65001
bgpPeers :
- ip : 10.8.0.10
asn : 65002
- ip : 10.8.0.11
asn : 65002
ports :
controlPlaneLBPort : 443
vips :
controlPlaneVIP : 10.200.0.91
ingressVIP : 10.200.0.92
addressPools :
- name : pool1
addresses :
- 10.200.0.92-10.200.0.100
clusterOperations :
projectID : project-fleet
location : us-central1
storage :
lvpNodeMounts :
path : /mnt/localpv-disk
storageClassName : local-disks
lvpShare :
path : /mnt/localpv-share
storageClassName : local-shared
numPVUnderSharedPath : 5
nodeConfig :
podDensity :
maxPodsPerNode : 250
authentication :
- name : ldap
ldap :
connectionType : ldaps
group :
baseDN : ou=Groups,dc=onpremidp,dc=example,dc=net
filter : (objectClass=*)
identifierAttribute : dn
host : ldap.google.com:636
user :
baseDN : ou=Users,dc=onpremidp,dc=example,dc=net
filter : (objectClass=*)
identifierAttribute : uid
loginAttribute : uid
serviceAccountSecret :
name : google-ldap-client-secret
namespace : anthos-identity-service
type : tls
---
apiVersion : baremetal.cluster.gke.io/v1
kind : NodePool
metadata :
name : np1
namespace : cluster-user-ha-ldap
spec :
clusterName : user-ha-ldap
nodes :
- address : 10.200.0.30
- address : 10.200.0.31
- address : 10.200.0.32
---
apiVersion : networking.gke.io/v1
kind : NetworkGatewayGroup
metadata :
name : default
namespace : cluster-user-ha-ldap
spec :
floatingIPs :
- 10.0.1.100
- 10.0.2.100
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
