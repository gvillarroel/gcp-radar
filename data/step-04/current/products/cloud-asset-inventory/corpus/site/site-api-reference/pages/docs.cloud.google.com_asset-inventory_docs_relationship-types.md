---
title: "Relationship types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/relationship-types
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/relationship-types
  title: "Relationship types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud Asset Inventory
Reference
Send feedback
Relationship types
Stay organized with collections
Save and categorize content based on your preferences.
These relationship types are supported in the export, list, search, and monitor
APIs. The analysis APIs don't support relationship types.
Note: Relationship types require access to the
Security Command Center Premium or Enterprise tier .
You can use these relationship types with the following Cloud Asset Inventory
operations:
Export to BigQuery
Export to Cloud Storage
List assets
Get asset histories
Monitor asset changes with Pub/Sub
Asset type
Relationship types
anthos. googleapis. com/ ConnectedCluster
ANTHOS_ CONNECTED_ CLUSTER_ TO_ GKEHUB_ MEMBERSHIPS
Returns metadata about GKE Enterprise connected clusters and the GKE Hub that they are members of.
Not available in the analysis and search APIs.
appengine. googleapis. com/ Application
APP_ ENGINE_ APPLICATION_ TO_ SERVICE
Returns metadata about App Engine applications and their related App Engine services . See Components of an application for an App Engine relationship diagram.
Not available in the analysis and search APIs.
APP_ ENGINE_ APPLICATION_ TO_ VERSION
Returns metadata about App Engine applications and their related App Engine versions . See Components of an application for an App Engine relationship diagram.
Not available in the analysis and search APIs.
appengine. googleapis. com/ Service
APP_ENGINE_SERVICE_TO_VERSION
Returns metadata about App Engine services and their related App Engine versions . See Components of an application for an App Engine relationship diagram.
Not available in the analysis and search APIs.
SERVICE_TO_APPLICATION
Returns metadata about App Engine services and their related App Engine applications . See Components of an application for an App Engine relationship diagram.
appengine. googleapis. com/ Version
VERSION_TO_APPLICATION
Returns metadata about App Engine versions and their related App Engine applications . See Components of an application for an App Engine relationship diagram.
VERSION_TO_SERVICE
Returns metadata about App Engine versions and their related App Engine services . See Components of an application for an App Engine relationship diagram.
bigtableadmin. googleapis. com/ AppProfile
BIGTABLE_ APP_ PROFILE_ TO_ INSTANCE
Returns metadata about Bigtable app profiles and their related Bigtable instances .
Not available in the analysis and search APIs.
bigtableadmin. googleapis. com/ Cluster
BIGTABLE_CLUSTER_TO_INSTANCE
Returns metadata about Bigtable clusters and their related Bigtable instances .
Not available in the analysis and search APIs.
bigtableadmin. googleapis. com/ Instance
BIGTABLE_ INSTANCE_ TO_ APP_ PROFILE
Returns metadata about Bigtable instances and their related Bigtable app profiles .
Not available in the analysis and search APIs.
BIGTABLE_INSTANCE_TO_CLUSTER
Returns metadata about Bigtable instances and their related Bigtable clusters .
Not available in the analysis and search APIs.
BIGTABLE_INSTANCE_TO_TABLE
Returns metadata about Bigtable instances and their related Bigtable tables .
Not available in the analysis and search APIs.
bigtableadmin. googleapis. com/ Table
BIGTABLE_TABLE_TO_INSTANCE
Returns metadata about Bigtable tables and their related Bigtable instances .
Not available in the analysis and search APIs.
compute. googleapis. com/ BackendBucket
COMPUTE_ BACKEND_ BUCKET_ TO_ STORAGE_ BUCKET
Returns metadata about Compute Engine backend buckets and their mappings to Cloud Storage buckets .
Not available in the analysis and search APIs.
COMPUTE_ BACKEND_ BUCKET_ TO_ URLMAP
Returns metadata about Compute Engine backend bucket and their mappings to Compute Engine urlMaps .
Not available in the analysis and search APIs.
compute. googleapis. com/ BackendService
COMPUTE_ BACKEND_ SERVICE_ TO_ FORWARDING_ RULE
Returns metadata about Compute Engine backend services and the Compute Engine forwarding rules they use.
Not available in the analysis and search APIs.
COMPUTE_ BACKEND_ SERVICE_ TO_ INSTANCE_ GROUP
Returns metadata about Compute Engine backend services and the Compute Engine instance groups they support.
Not available in the analysis and search APIs.
COMPUTE_ BACKEND_ SERVICE_ TO_ NETWORK_ ENDPOINT_ GROUP
Returns metadata about Compute Engine backend services and the Compute Engine network endpoint groups they use.
Not available in the analysis and search APIs.
COMPUTE_ BACKEND_ SERVICE_ TO_ TARGET_ SSL_ PROXY
Returns metadata about Compute Engine backend services and the Compute Engine target SSL proxies they use.
Not available in the analysis and search APIs.
COMPUTE_ BACKEND_ SERVICE_ TO_ TARGET_ TCP_ PROXY
Returns metadata about Compute Engine backend services and the Compute Engine target TCP proxies they use.
Not available in the analysis and search APIs.
COMPUTE_ BACKEND_ SERVICE_ TO_ URLMAP
Returns metadata about Compute Engine backend services and the Compute Engine urlMaps they own.
Not available in the analysis and search APIs.
compute.googleapis.com/Disk
COMPUTE_DISK_BOOTED_FROM_IMAGE
Returns metadata about Compute Engine disks and the Compute Engine images that they are boot with.
Not available in the analysis and search APIs.
COMPUTE_ DISK_ BOOTED_ FROM_ SNAPSHOT
Returns metadata about Compute Engine disks and the Compute Engine snapshot they are created from.
Not available in the analysis and search APIs.
COMPUTE_DISK_USED_BY_INSTANCE
Returns metadata about Compute Engine disks and the Compute Engine instances they are attached to.
Not available in the analysis and search APIs.
compute. googleapis. com/ ForwardingRule
COMPUTE_ FORWARDING_ RULE_ TO_ BACKEND_ SERVICE
Returns metadata about Compute Engine forwarding rules and the Compute Engine backend services that use them.
Not available in the analysis and search APIs.
COMPUTE_ FORWARDING_ RULE_ TO_ TARGET_ HTTP_ PROXY
Returns metadata about Compute Engine forwarding rules and the Compute Engine target HTTP proxies they belong to.
Not available in the analysis and search APIs.
COMPUTE_ FORWARDING_ RULE_ TO_ TARGET_ HTTPS_ PROXY
Returns metadata about Compute Engine forwarding rules and the Compute Engine target HTTPS proxies they belong to.
Not available in the analysis and search APIs.
COMPUTE_ FORWARDING_ RULE_ TO_ TARGET_ INSTANCE
Returns metadata about Compute Engine forwarding rules and the Compute Engine target instances that use them.
Not available in the analysis and search APIs.
COMPUTE_ FORWARDING_ RULE_ TO_ TARGET_ POOL
Returns metadata about Compute Engine forwarding rules and the Compute Engine target pools that use them.
Not available in the analysis and search APIs.
COMPUTE_ FORWARDING_ RULE_ TO_ TARGET_ SSL_ PROXY
Returns metadata about Compute Engine forwarding rules and the Compute Engine target SSL proxies they belong to.
Not available in the analysis and search APIs.
COMPUTE_ FORWARDING_ RULE_ TO_ TARGET_ TCP_ PROXY
Returns metadata about Compute Engine forwarding rules and the Compute Engine target TCP proxies they belong to.
Not available in the analysis and search APIs.
COMPUTE_ FORWARDING_ RULE_ TO_ TARGET_ VPN_ GATEWAY
Returns metadata about Compute Engineforwarding rules and the Compute Engine target VPN gateways they belong to.
Not available in the analysis and search APIs.
compute.googleapis.com/Image
COMPUTE_IMAGE_BOOT_DISK
Returns Compute Engine images and the Compute Engine disks they boot on.
Not available in the analysis and search APIs.
compute. googleapis. com/ Instance
COMPUTE_ INSTANCE_ IS_ IN_ TARGET_ POOL
Returns metadata about Compute Engine instances and the Compute Engine target pools they belong to.
COMPUTE_INSTANCE_TO_K8S_NODE
Returns metadata about Compute Engine instances and the Kubernetes nodes they are providers for.
Not available in the analysis and search APIs.
COMPUTE_ INSTANCE_ TO_ TARGET_ INSTANCE
Returns metadata about Compute Engine instances and the Compute Engine target instances that they own.
Not available in the analysis and search APIs.
COMPUTE_INSTANCE_USE_DISK
Returns metadata about Compute Engine instances and the Compute Engine disks , that they use.
Not available in the analysis and search APIs.
INSTANCE_TO_INSTANCEGROUP
Returns metadata about Compute Engine instances and the Compute Engine instance groups they belong to.
INSTANCE_ TO_ INSTANCEGROUPMANAGER
Returns metadata about Compute Engine instances and the Compute Engine instance group managers that manage them.
compute. googleapis. com/ InstanceGroup
COMPUTE_ INSTANCE_ GROUP_ TO_ BACKEND_ SERVICE
Returns metadata about Compute Engine instance groups and the Compute Engine backend services that they own.
Not available in the analysis and search APIs.
COMPUTE_ INSTANCE_ GROUP_ TO_ INSTANCE
Returns metadata about Compute Engine instance groups and the Compute Engine instances that belong to them.
Not available in the analysis and search APIs.
INSTANCEGROUP_ TO_ INSTANCEGROUPMANAGER
Returns metadata about Compute Engine instance-groups and the Compute Engine instance group managers that manage them.
compute. googleapis. com/ InstanceGroupManager
COMPUTE_ INSTANCE_ GROUP_ MANAGER_ TO_ INSTANCE
Returns metadata about Compute Engine instance group managers and the Compute Engine instances they manage.
Not available in the analysis and search APIs.
COMPUTE_ INSTANCE_ GROUP_ MANAGER_ TO_ INSTANCE_ GROUP
Returns metadata about Compute Engine instance group managers and the Compute Engine instance groups that they manage.
Not available in the analysis and search APIs.
compute. googleapis. com/ NetworkEndpointGroup
COMPUTE_ NETWORK_ ENDPOINT_ GROUP_ TO_ BACKEND_ SERVICE
Returns metadata about Compute Engine network endpoint groups and the Compute Engine backend services they belong to.
Not available in the analysis and search APIs.
compute. googleapis. com/ Snapshot
COMPUTE_SNAPSHOT_BOOT_DISK
Returns metadata about Compute Engine snapshots and the Compute Engine disks that boot them.
Not available in the analysis and search APIs.
compute. googleapis. com/ SslCertificate
COMPUTE_ SSL_ CERTIFICATE_ TO_ TARGET_ HTTPS_ PROXY
Returns metadata about Compute Engine SSL certificates and the Compute Engine target HTTPS proxies that own them.
Not available in the analysis and search APIs.
COMPUTE_ SSL_ CERTIFICATE_ TO_ TARGET_ SSL_ PROXY
Returns metadata about Compute Engine SSL certificates and the Compute Engine target SSL proxies that own them.
Not available in the analysis and search APIs.
compute. googleapis. com/ TargetHttpProxy
COMPUTE_ TARGET_ HTTP_ PROXY_ TO_ FORWARDING_ RULE
Returns metadata about Compute Engine target HTTP proxies and the Compute Engine forwarding rules that use them.
Not available in the analysis and search APIs.
COMPUTE_ TARGET_ HTTP_ PROXY_ TO_ URLMAP
Returns metadata about Compute Engine target HTTP proxies and the Compute Engine urlMaps that use them.
Not available in the analysis and search APIs.
compute. googleapis. com/ TargetHttpsProxy
COMPUTE_ TARGET_ HTTPS_ PROXY_ TO_ FORWARDING_ RULE
Returns metadata about Compute Engine target HTTPS proxies and the Compute Engine forwarding rules that use them.
Not available in the analysis and search APIs.
COMPUTE_ TARGET_ HTTPS_ PROXY_ TO_ SSL_ CERTIFICATE
Returns metadata about Compute Engine target HTTPS proxies and the Compute Engine SSL certificates that use them.
Not available in the analysis and search APIs.
COMPUTE_ TARGET_ HTTPS_ PROXY_ TO_ URLMAP
Returns metadata about Compute Engine target HTTPS proxies and the Compute Engine urlMaps that use them.
Not available in the analysis and search APIs.
compute. googleapis. com/ TargetInstance
COMPUTE_ TARGET_ INSTANCE_ TO_ FORWARDING_ RULE
Returns metadata about Compute Engine target instances and the Compute Engine forwarding rules that use them.
Not available in the analysis and search APIs.
COMPUTE_ TARGET_ INSTANCE_ TO_ INSTANCE
Returns metadata about Compute Engine target instances and the Compute Engine instances that use them.
Not available in the analysis and search APIs.
compute. googleapis. com/ TargetPool
COMPUTE_ TARGET_ POOL_ BACKUP_ BY_ TARGET_ POOL
Returns metadata about Compute Engine target pools that are backed up by other Compute Engine target pools .
Not available in the analysis and search APIs.
COMPUTE_ TARGET_ POOL_ BACKUP_ TARGET_ POOL
Returns metadata about Compute Engine target pools that back up other Compute Engine target pools .
Not available in the analysis and search APIs.
COMPUTE_ TARGET_ POOL_ TO_ FORWARDING_ RULE
Returns metadata about Compute Engine target pools and the Compute Engine forwarding rules that use them.
Not available in the analysis and search APIs.
COMPUTE_ TARGET_ POOL_ USE_ INSTANCE
Returns metadata about Compute Engine target pools and the Compute Engine instances that use them.
Not available in the analysis and search APIs.
compute. googleapis. com/ TargetSslProxy
COMPUTE_ TARGET_ SSL_ PROXY_ TO_ BACKEND_ SERVICE
Returns metadata about Compute Engine target SSL proxies and the Compute Engine backend services they belong to.
Not available in the analysis and search APIs.
COMPUTE_ TARGET_ SSL_ PROXY_ TO_ FORWARDING_ RULE
Returns metadata about Compute Engine target SSL proxies and the Compute Engine forwarding rules that use them.
Not available in the analysis and search APIs.
COMPUTE_ TARGET_ SSL_ PROXY_ TO_ SSL_ CERTIFICATE
Returns metadata about Compute Engine target SSL proxies and the Compute Engine SSL certificates that use them.
Not available in the analysis and search APIs.
compute. googleapis. com/ TargetTcpProxy
COMPUTE_ TARGET_ TCP_ PROXY_ TO_ BACKEND_ SERVICE
Returns metadata about Compute Engine target TCP proxies and the Compute Engine backend services they belong to.
Not available in the analysis and search APIs.
COMPUTE_ TARGET_ TCP_ PROXY_ TO_ FORWARDING_ RULE
Returns metadata about Compute Engine target TCP proxies and the Compute Engine forwarding rules that use them.
Not available in the analysis and search APIs.
compute. googleapis. com/ TargetVpnGateway
COMPUTE_ TARGET_ VPN_ GATEWAY_ TO_ FORWARDING_ RULE
Returns metadata about Compute Engine target VPN gateways and the Compute Engine forwarding rules that use them.
Not available in the analysis and search APIs.
COMPUTE_ TARGET_ VPN_ GATEWAY_ TO_ VPN_ TUNNEL
Returns metadata about Compute Engine target VPN gateways and the Compute Engine VPN tunnels that use them.
Not available in the analysis and search APIs.
compute.googleapis.com/UrlMap
COMPUTE_ URLMAP_ TO_ BACKEND_ BUCKET
Returns metadata about Compute Engine urlMaps and the Compute Engine backend buckets that use them.
Not available in the analysis and search APIs.
COMPUTE_ URLMAP_ TO_ BACKEND_ SERVICE
Returns metadata about Compute Engine urlMaps and the Compute Engine backend services that use them.
Not available in the analysis and search APIs.
COMPUTE_ URLMAP_ TO_ TARGET_ HTTP_ PROXY
Returns metadata about Compute Engine urlMaps and the Compute Engine target HTTP proxies that use them.
Not available in the analysis and search APIs.
COMPUTE_ URLMAP_ TO_ TARGET_ HTTPS_ PROXY
Returns metadata about Compute Engine urlMaps and the Compute Engine target HTTPS proxies that use them.
Not available in the analysis and search APIs.
compute. googleapis. com/ VpnTunnel
COMPUTE_ VPN_ TUNNEL_ TO_ TARGET_ VPN_ GATEWAY
Returns metadata about Compute Engine VPN tunnels and the Compute Engine target VPN gateways they belong to.
Not available in the analysis and search APIs.
container. googleapis. com/ Cluster
GKE_ CLUSTER_ TO_ GKEHUB_ MEMBERSHIPS
Returns metadata about Google Kubernetes Engine clusters and the GKE Hub memberships they belong to.
Not available in the analysis and search APIs.
GKE_ CLUSTER_ TO_ K8S_ AUTHORIZATION_ RBAC_ CLUSTER_ ROLE
Returns metadata about Google Kubernetes Engine clusters and the cluster roles they use.
Not available in the analysis and search APIs.
GKE_ CLUSTER_ TO_ K8S_ AUTHORIZATION_ RBAC_ CLUSTER_ ROLE_ BINDING
Returns metadata about Google Kubernetes Engine clusters and the cluster role bindings they use.
Not available in the analysis and search APIs.
GKE_CLUSTER_TO_K8S_NAMESPACE
Returns metadata about Google Kubernetes Engine clusters and the Kubernetes namespaces they use.
Not available in the analysis and search APIs.
GKE_CLUSTER_TO_K8S_NODE
Returns metadata about Google Kubernetes Engine clusters and the nodes they are in.
Not available in the analysis and search APIs.
GKE_CLUSTER_TO_NODE_POOL
Returns metadata about Google Kubernetes Engine clusters and the Google Kubernetes Engine node pools they use.
Not available in the analysis and search APIs.
container. googleapis. com/ NodePool
GKE_NODE_POOL_TO_CLUSTER
Returns metadata about Google Kubernetes Engine node pools and the Google Kubernetes Engine clusters they point to.
Not available in the analysis and search APIs.
extensions.k8s.io/Ingress
K8S_ EXTENSIONS_ INGRESS_ TO_ NAMESPACE
Returns metadata about Kubernetes extensions ingresses and the Kubernetes namespaces they belong to.
Not available in the analysis and search APIs.
gkehub. googleapis. com/ Membership
GKEHUB_ MEMBERSHIPS_ TO_ ANTHOS_ CONNECTED_ CLUSTER
Returns metadata about GKE Hub memberships and the on-premises clusters they are members of.
Not available in the analysis and search APIs.
GKEHUB_ MEMBERSHIPS_ TO_ GKE_ CLUSTER
Returns metadata about GKE Hub memberships and the Google Kubernetes Engine (GKE) clusters they are members of.
Not available in the analysis and search APIs.
k8s.io/Namespace
K8S_ NAMESPACE_ TO_ AUTHORIZATION_ RBAC_ ROLE
Returns metadata about Kubernetes namespaces and the Kubernetes roles they use.
Not available in the analysis and search APIs.
K8S_ NAMESPACE_ TO_ AUTHORIZATION_ RBAC_ ROLE_ BINDING
Returns metadata about Kubernetes namespaces and the Kubernetes role bindings they use.
Not available in the analysis and search APIs.
K8S_ NAMESPACE_ TO_ EXTENSIONS_ INGRESS
Returns metadata about Kubernetes namespaces and the Kubernetes extension ingresses that belong to them.
Not available in the analysis and search APIs.
K8S_NAMESPACE_TO_SERVICE
Returns metadata about Kubernetes namespaces and the services that belong to them.
Not available in the analysis and search APIs.
NAMESPACE_TO_CLUSTER
Returns metadata about Kubernetes namespaces and the Google Kubernetes Engine(GKE) clusters they are in.
k8s.io/Node
NODE_TO_CLUSTER
Returns metadata about nodes and the GKE clusters they are in.
NODE_TO_COMPUTE_INSTANCE
Returns metadata about nodes and the Compute Engine instances they are in.
k8s.io/Service
K8S_SERVICE_TO_NAMESPACE
Returns metadata about Kubernetes services and the Kubernetes namespaces they belong to.
Not available in the analysis and search APIs.
pubsub. googleapis. com/ Subscription
PUBSUB_SUBSCRIPTION_TO_TOPIC
Returns metadata about Pub/Sub subscriptions and the Pub/Sub topics they are subscribed to.
Not available in the analysis and search APIs.
pubsub.googleapis.com/Topic
PUBSUB_TOPIC_TO_SUBSCRIPTION
Returns metadata about Pub/Sub topics and their Pub/Sub subscriptions .
Not available in the analysis and search APIs.
rbac. authorization. k8s. io/ ClusterRole
K8S_ AUTHORIZATION_ RBAC_ CLUSTER_ ROLE_ TO_ GKE_ CLUSTER
Returns metadata about cluster roles and the Google Kubernetes Engine clusters that own them.
Not available in the analysis and search APIs.
rbac. authorization. k8s. io/ ClusterRoleBinding
K8S_ AUTHORIZATION_ RBAC_ CLUSTER_ ROLE_ BINDING_ TO_ GKE_ CLUSTER
Returns metadata about cluster role bindings and the Google Kubernetes Engine clusters that own them.
Not available in the analysis and search APIs.
rbac.authorization.k8s.io/Role
K8S_ AUTHORIZATION_ RBAC_ ROLE_ TO_ NAMESPACE
Returns metadata about Kubernetes roles and the Kubernetes namespaces that own them.
Not available in the analysis and search APIs.
rbac. authorization. k8s. io/ RoleBinding
K8S_ AUTHORIZATION_ RBAC_ ROLE_ BINDING_ TO_ NAMESPACE
Returns metadata about Kubernetes role bindings and the Kubernetes namespaces that own them.
Not available in the analysis and search APIs.
storage.googleapis.com/Bucket
STORAGE_ BUCKET_ TO_ COMPUTE_ BACKEND_ BUCKET
Returns metadata about Cloud Storage buckets and the Compute Engine backend buckets they point to.
Not available in the analysis and search APIs.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
