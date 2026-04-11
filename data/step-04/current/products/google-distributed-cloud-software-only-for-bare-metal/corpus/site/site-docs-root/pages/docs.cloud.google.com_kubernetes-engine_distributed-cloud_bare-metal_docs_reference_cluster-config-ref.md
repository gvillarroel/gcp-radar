---
title: "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\
  \ only) for bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref
  title: "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\
    \ only) for bare metal \_|\_ Google Cloud Documentation"
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
Cluster configuration field reference
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the fields supported in the cluster configuration file for
Google Distributed Cloud (software only) on bare metal. For each field, the following
table identifies whether the field is required. The table also shows which
fields are mutable, meaning which fields can be changed after a cluster has been
created. As noted in the table, some mutable fields can only be changed during a
cluster upgrade.
Generating a template for your cluster configuration file
You can create a cluster configuration file with the bmctl create config
command. Although some fields have default values and others, such as
metadata.name can be auto-filled, this YAML format configuration file is a
template for specifying information about your cluster.
To create a new cluster configuration file, use the following command in the
/baremetal folder:
bmctl create config -c CLUSTER_NAME
Replace CLUSTER_NAME with the name for the cluster you want
to create. For more information about bmctl , see bmctl tool .
For an example of the generated cluster configuration file, see
Cluster configuration file sample .
Filling in your configuration file
In your configuration file, enter field values as described in the following
field reference table before you create or upgrade your cluster.
Cluster configuration fields
Select a configuration type
Cluster resource
Namespace resource
NodePool resource
Credentials
Registry mirror
ClusterCIDRConfig resource
Field name
Resource type
Required?
Mutable?
anthosBareMetalVersion
Required. String. The cluster version. This value is set for cluster
creation and cluster upgrades.
Mutability: This value can't be modified for existing clusters.
The version can be updated only through the
cluster upgrade process .
Cluster resource
Required
Mutable
authentication
This section contains settings needed to use OpenID Connect (OIDC).
OIDC lets you use your existing identity provider to manage user and
group authentication in your clusters.
Cluster resource
—
—
authentication.oidc.certificateAuthorityData
Optional. A base64 -encoded
PEM-encoded certificate for the OIDC provider. To create the
string, encode the certificate, including headers, into
base64 . Include the resulting string in
certificateAuthorityData as a single line.
For example (sample wrapped to fit table):
certificateAuthorityData :
LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tC
...k1JSUN2RENDQWFT==
Cluster resource
Optional
Immutable
authentication.oidc.clientID
Optional. String. The ID for the client application that makes
authentication requests to the OpenID provider.
Cluster resource
Optional
Immutable
authentication.oidc.clientSecret
Optional. String. Shared secret between OIDC client application and
OIDC provider.
Cluster resource
Optional
Immutable
authentication.oidc.deployCloudConsoleProxy
Optional. Boolean ( true | false ). Specifies whether a reverse proxy
is deployed in the cluster to connect Google Cloud console to an
on-premises identity provider that is not publicly accessible over the
internet. If your identity provider isn't reachable over the public
internet, set this field to true to authenticate with
Google Cloud console. By default, this value is set to false .
Cluster resource
Optional
Immutable
authentication.oidc.extraParams
Optional. Comma-delimited list. Additional key-value parameters to
send to the OpenID provider.
Cluster resource
Optional
Immutable
authentication.oidc.groupPrefix
Optional. String. Prefix prepended to group claims to prevent clashes
with existing names. For example, given a group dev and a prefix
oidc: , oidc:dev .
Cluster resource
Optional
Immutable
authentication.oidc.group
Optional. String.
JWT
claim that the provider uses to return your security groups.
Cluster resource
Optional
Immutable
authentication.oidc.issuerURL
Optional. URL string. URL where authorization requests are sent to
your OpenID, such as https://example.com/adfs . The Kubernetes API
server uses this URL to discover public keys for verifying tokens. The
URL must use HTTPS.
Cluster resource
Optional
Immutable
authentication.oidc.kubectlRedirectURL
Optional. URL string. The redirect URL that kubectl uses for
authorization. When you enable OIDC, you must specify a
kubectlRedirectURL value.
Cluster resource
Optional
Immutable
authentication.oidc.proxy
Optional. URL string. Proxy server to use for the cluster to connect
to your OIDC provider, if applicable. The value should include a
hostname/IP address and optionally a port, username, and password. For
example: http://user:password@10.10.10.10:8888 .
Cluster resource
Optional
Immutable
authentication.oidc.scopes
Optional. Comma-delimited list. Additional scopes to send to the
OpenID provider. Microsoft Azure and Okta require the offline_access
scope.
Cluster resource
Optional
Immutable
authentication.oidc.usernamePrefix
Optional. String. Prefix prepended to username claims.
Cluster resource
Optional
Immutable
authentication.oidc.username
Optional. String.
JWT
claim to use as the username. If not specified, defaults to sub .
Cluster resource
Optional
Immutable
bypassPreflightCheck
Optional. Boolean ( true | false ). When set to
true , the internal preflight checks are ignored when
applying resources to existing clusters. Defaults to false .
Mutability: This value can be modified for existing clusters
with the bmctl update command.
Cluster resource
Optional
Mutable
clusterNetwork
This section contains network settings for your cluster.
Cluster resource
Required
Mutable
clusterNetwork.advancedNetworking
Boolean. Set this field to true to enable advanced
networking features, such as Bundled Load Balancing with BGP or the
egress NAT gateway. Both of these features use the Network Gateway for GDC.
Network Gateway for GDC is the key component for enabling
advanced networking features in Google Distributed Cloud and
Google Kubernetes Engine (GKE). One of the main benefits of Network Gateway for GDC
is that it can dynamically allocate floating IP addresses from
a set of addresses that you specify in a
NetworkGatewayGroup custom resource.
For more information about Network Gateway for GDC and related advanced
networking features, see
Configure an egress NAT gateway and
Configure bundled load balancers with BGP .
Cluster resource
Optional
Immutable
clusterNetwork.bundledIngress
Boolean. Set this field to false to disable the Ingress
capabilities bundled with Google Distributed Cloud software. The bundled
Ingress capabilities for your cluster support ingress only. If you
integrate with Istio or Cloud Service Mesh for the additional benefits of a
fully functional service mesh, we recommend that you disable bundled
Ingress. This field is set to true by default. This field
is not present in the generated cluster configuration file. You can
disable bundled Ingress for version 1.13.0 clusters and later only.
For more information about the bundled Ingress capability, see
Create a Service and an Ingress .
Cluster resource
Optional
Mutable
clusterNetwork.flatIPv4
Boolean. Set this field to true to enable the flat mode
cluster networking model. In flat mode, each pod has its own, unique
IP address. Pods can communicate with each other directly without the
need for an intermediary gateway or network address translation (NAT).
flatIPv4 is false by default. You can
enable flat mode during cluster creation only. Once you enable flat
mode for your cluster, you can't disable it.
Cluster resource
Optional
Immutable
clusterNetwork.forwardMode
Optional. String. Specifies the networking mode for Dataplane V2 load
balancing. Source network address translation (SNAT) is the default
networking mode. Direct Server Return (DSR) mode overcomes issues with
SNAT load balancing. In DSR mode ( forwardMode: dsr ), the
load balancer node uses IP Options to save the client source address.
The networking mode for Dataplane V2 load balancing can be configured
at cluster creation time only.
Allowed values: dsr | snat
For more information, see
Configure load balancing networking mode .
Cluster resource
Optional
Immutable
clusterNetwork.multipleNetworkInterfaces
Optional. Boolean. Set this field to true to enable
multiple network interfaces for your pods.
For more information about the setting up and using multiple network
interfaces, see the
Configure multiple network
interfaces for Pods
documentation.
Cluster resource
Optional
Immutable
clusterNetwork.pods.cidrBlocks
Required. Range of IPv4 addresses in CIDR block format. Pods specify
the IP ranges from which pod networks are allocated.
Minimum Pod CIDR range: Mask value of
/18 , which corresponds to a size of 14 bits (16,384 IP
addresses).
Maximum Pod CIDR range: Mask value of
/8 , which corresponds to a size of 24 bits (16,777,216 IP
addresses).
For example:
pods :
cidrBlocks :
- 192.168.0.0/16
Cluster resource
Required
Immutable
clusterNetwork.sriovOperator
Optional. Boolean. Set this field to true to enable
SR-IOV networking for your cluster.
For more information about configuring and using SR-IOV networking,
see the
Set up SR-IOV networking
documentation.
Cluster resource
Optional
Mutable
clusterNetwork.services.cidrBlocks
Required. Range of IPv4 addresses in CIDR block format. Specify the
range of IP addresses from which service virtual IP (VIP) addresses
are allocated. The ranges must not overlap with any subnets reachable
from your network. For more information about address allocation for
private internets, see
RFC 1918 .
Starting with Google Distributed Cloud software release 1.15.0 for bare
metal, this field is mutable. If needed, you can increase the number
of IP addresses allocated for services after you have created a
cluster. For more information, see
Increase service network range .
You can only increase the range of the IPv4 service CIDR. The network
range can't be reduced, which means the mask (the value after "/")
can't be increased.
Minimum Service CIDR range: Mask value of
/24 , which corresponds to a size of 8 bits (256
addresses).
Maximum Service CIDR range: Mask value of
/12 , which corresponds to a size of 20 bits (1,048,576 IP
addresses).
For example:
services :
cidrBlocks :
- 10.96.0.0/12
Cluster resource
Required
Mutable
clusterOperations
This section contains information for Cloud Logging and
Cloud Monitoring.
Cluster resource
Required
Mutable
clusterOperations.enableApplication
This field is no longer used and has no effect. Application logging
and monitoring is enabled in the Google Cloud Observability custom resource. For
more information about enabling application logging and monitoring, see
Enable application logging and monitoring .
Cluster resource
No-op
Mutable
clusterOperations.disableCloudAuditLogging
Boolean. Cloud Audit Logs is useful for investigating suspicious API
requests and for collecting statistics. Cloud Audit Logs is enabled
( disableCloudAuditLogging: false ) by default. Set to
true to disable Cloud Audit Logs.
For more information, see
Use Audit Logging .
Cluster resource
Optional
Mutable
clusterOperations.location
String. A Google Cloud region where you want to route and store
Monitoring metrics. We recommend that you choose a
region that's near your on-premises data center. During cluster
creation, this value is used to set the clusterLocation
value in the stackdriver resource spec.
The value you specify is also used by Google Cloud Observability to label metrics
and logs. These labels can be used for filtering in Metrics Explorer
and Logs Explorer.
For more information about Google Cloud locations, see
Global Locations . For more information
about routing logs and metrics, see
Logs and metrics routing .
For example:
location : us-central1
Cluster resource
Required
Immutable
clusterOperations.projectID
String. The project ID of the Google Cloud project where you want to view
logs and metrics. During cluster creation, this value is used to set
the projectID value in the stackdriver
resource spec.
Cluster resource
Required
Immutable
controlPlane
This section contains information about the control plane and its
components.
Cluster resource
Required
Mutable
controlPlane.apiServerCertExtraSANs
Optional. An array of strings (domain names and IP addresses). A
subject alternative name (SAN) is a feature of SSL certificates that
lets you define the domain names and subdomains on which you want a
certificate to be valid. On a cluster for bare
metal, the SANs for the API server certificate include the IP and VIP
addresses of the control plane nodes and the Kubernetes DNS names by
default. Use this field to add extra SANs to the API server
certificate for the cluster. Domain names must comply with
RFC 1035 .
For more information, see Add domains to the API server certificate .
For example:
...
controlPlane :
apiServerCertExtraSANs :
- "demo-dns.example.com"
- "sample-dns.com"
nodePoolSpec :
...
This field can be added or changed at any time.
Cluster resource
Optional
Mutable
controlPlane.loadBalancer
This section contains settings for control plane load balancing. The
fields in this section are available for version 1.32 and higher
clusters only.
Cluster resource
Optional
Mutable
controlPlane.loadBalancer.keepalivedVRRPGARPMasterRepeat
Optional. Integer. Specifies the number of gratuitous ARP (GARP)
messages for Keepalived to send at a time after a control plane node
transitions to the role of the master server. This value maps to the
vrrp_garp_master_repeat setting for Keepalived. The
default value is 5 . For more information, see
Keepalived customization .
Cluster resource
Optional
Mutable
controlPlane.loadBalancer.mode
Optional. String. When set to bundled , this setting
specifies that the control plane load balancers run on control plane
nodes. If it's set and you configure a load balancer node pool with
loadBalancer.nodePoolSpec , the control plane load
balancers run on control plane nodes and the data plane load balancers
run on the load balancer node pool. For more information, see
Load
balancer separation .
If you set controlPlane.loadBalancer.mode to manual ,
loadBalancer.mode must also be set to manual . This
setting is used to enable manual load balancing. For more information, see
Configure manual load balancing .
You aren't required to set controlPlane.loadBalancer.mode
to manual to configure manual load balancing.
Allowed values: bundled | manual
Cluster resource
Optional
Immutable
controlPlane.nodePoolSpec
This section specifies the IP addresses for the node pool used by the
control plane and its components. The control plane node pool
specification (like the
load balancer node pool specification )
is special. This specification declares and controls critical cluster
resources. The canonical source for this resource is this section in
the cluster configuration file. Don't modify the top-level control
plane node pool resources directly. Modify the associated sections in
the cluster configuration file instead.
Cluster resource
Required
Mutable
controlPlane.nodePoolSpec.nodes
Required. An array of IP addresses. Typically, this array is either
an IP address for a single machine, or IP addresses for three machines
for a high-availability (HA) deployment.
For example:
controlPlane :
nodePoolSpec :
nodes :
- address : 192.168.1.212
- address : 192.168.1.213
- address : 192.168.1.214
This field can be changed whenever you update or upgrade a cluster.
Cluster resource
Required
Mutable
controlPlane.nodePoolSpec.nodes.address
Required. String (IPv4 address). When you specify a node pool, you
use the address field to specify the default IPv4 address
for SSH access for each node. SSH access is necessary for administrative
cluster operations, such as installations and upgrades. By default, this
IP address is also used for data and Kubernetes traffic. However, if you
specify the k8sIP address for a given node, traffic is split
between the two addresses for the node, with the k8sIP address
used exclusively for data and Kubernetes traffic.
For example:
controlPlane :
nodePoolSpec :
nodes :
- address : 192.168.1.212
- address : 192.168.1.213
- address : 192.168.1.214
This field can be changed whenever you update or upgrade a cluster.
Cluster resource
Required
Mutable
controlPlane.nodePoolSpec.nodes.k8sIP
Optional. String (IPv4 address). When you specify the optional
k8sIP address for a node, it's dedicated to handling data
and Kubernetes traffic for the node, such as requests and responses for
the Kubernetes API, the kubelet, and workloads. When you specify k8sIP ,
the standard node IP address nodePoolSpec.nodes.address is
used for SSH connections to the node exclusively. If you don't specify a
k8sIP address, the standard node IP address handles all
traffic for the node.
For example:
controlPlane :
nodePoolSpec :
nodes :
- address : 192.168.2.212
k8sIP : 192.168.1.212
- address : 192.168.1.213
- address : 192.168.1.214
This field can't be modified after cluster creation.
Cluster resource
Optional
Immutable
controlPlane.nodePoolSpec.kubeletConfig
Optional.
This section contains fields that configure kubelet on all nodes in the
control plane node pool.
For example:
controlPlane :
nodePoolSpec :
kubeletConfig :
registryBurst : 15
registryPullQPS : 10
serializeImagePulls : false
Cluster resource
Optional
Mutable
controlPlane.nodePoolSpec.kubeletConfig.registryBurst
Optional. Integer (non-negative). Specifies the maximum quantity of
image pull requests that can be added to the processing queue to handle
spikes in requests. As soon as a pull starts, a new request can be added
to the queue. The default value is 10. This field corresponds to the
registryBurst
kubelet configuration (v1beta1) option.
The value for registryPullQPS takes precedence over this
setting. For example, with the default settings, bursts of up to 10
simultaneous queries are permitted, but they must be processed at the
default rate of five queries per second. This burst behavior is used
only when registryPullQPS is greater than 0 .
This field can be set whenever you create, update, or upgrade a
cluster and the setting persists through cluster upgrades. For more
information, see
Configure kubelet image pull settings .
Cluster resource
Optional
Mutable
controlPlane.nodePoolSpec.kubeletConfig.registryPullQPS
Optional. Integer (non-negative). Specifies the processing rate for
queries for Artifact Registry image pulls in queries per second (QPS).
When registryPullQPS is set to value greater than 0, the
query rate is restricted to that number of queries per second. If
registryPullQPS is set to 0 , there's no
restriction on query rate. The default value is 5 .
This field corresponds to the
registryPullQPS
kubelet configuration (v1beta1) option.
This field can be set whenever you create, update, or upgrade a
cluster and the setting persists through cluster upgrades. For more
information, see
Configure kubelet image pull settings .
Cluster resource
Optional
Mutable
controlPlane.nodePoolSpec.kubeletConfig.serializeImagePulls
Optional. Boolean ( true | false ). This field
specifies whether Artifact Registry pulls are processed in parallel or
one at a time. The default is true , specifying that pulls
are processed one at a time. When set to false , kubelet
pulls images in parallel. This field corresponds to the
serializeImagePulls
kubelet configuration (v1beta1) option.
This field can be set whenever you create, update, or upgrade a
cluster and the setting persists through cluster upgrades. For more
information, see
Configure kubelet image pull settings .
Cluster resource
Optional
Mutable
controlPlane.schedulerConfiguration
Specifies extra arguments and configuration for the kube-scheduler .
This field allows for the definition of cluster-level default pod
topology spread constraints.
Cluster resource
Optional
Mutable
controlPlane.schedulerConfiguration.defaultTopologySpreadConstraint
Defines the default constraints applied to pods that do not have their
own topology spread constraints defined.
Cluster resource
Optional
Mutable
gkeConnect
This section contains information about the Google Cloud project you want to
use to connect your cluster to Google Cloud.
Cluster resource
Required
Immutable
gkeConnect.projectID
Required: String. The ID of the Google Cloud project that you want
to use for connecting your cluster to Google Cloud. This is
also referred to as the
fleet host project .
For example:
spec :
...
gkeConnect :
projectID : "my-connect-project-123"
This value can't be modified for existing clusters.
Cluster resource
Required
Immutable
gkeConnect.location
Optional. String. Default value: global .
The fleet membership for your clusters is managed by the Fleet service
( gkehub.googleapis.com ) and the Connect service
( gkeconnect.googleapis.com ). The fleet membership can be
global or regional. Optionally, you can use gkeConnect.location
to specify the Google Cloud region in which the Fleet and the Connect
services run, so that traffic is restricted to your region.
For a list of supported regions, see
Supported regions for the GKE On-Prem API .
If not specified, the global instances of the services are used.
Note the following:
Clusters created at versions lower than 1.28 are managed by the
global Fleet and Connect services.
New clusters created using the GKE On-Prem API clients, such as
the Google Cloud console, the Google Cloud CLI, or Terraform, use the same
region that you specify for the GKE On-Prem API.
For new clusters, if you include this field, the region that you
specify must be the same as the region configured in
gkeOnPremAPI.location . If the regions aren't the same,
cluster creation fails.
For example:
spec :
...
gkeConnect :
projectID : "my-connect-project-123"
location : "us-central1"
This value can't be modified for existing clusters.
Cluster resource
Optional
Immutable
gkeOnPremAPI
In 1.16 and later, if the GKE On-Prem API is enabled in your
Google Cloud project, all clusters in the project are
enrolled in the
GKE On-Prem API automatically in the region configured in
clusterOperations.location .
If you want to enroll all clusters in the project in the
GKE On-Prem API, be sure to do the steps in
Before
you begin to activate and use the GKE On-Prem API in the project.
If you don't want to enroll the cluster in the GKE On-Prem API,
include this section and set gkeOnPremAPI.enabled to
false .
If you don't want to enroll any clusters in the project, disable
gkeonprem.googleapis.com (the service name for the
GKE On-Prem API) in the project. For instructions, see
Disabling
services.
If you want to enroll all clusters in the project in the
GKE On-Prem API, be sure to do the steps in
Before
you begin to activate and use the GKE On-Prem API in the project.
If you don't want to enroll the cluster in the GKE On-Prem API,
include this section and set gkeOnPremAPI.enabled to
false .
If you don't want to enroll any clusters in the project, disable
gkeonprem.googleapis.com (the service name for the
GKE On-Prem API) in the project. For instructions, see
Disabling
services.
Enrolling your admin or user cluster in the GKE On-Prem API lets you
use standard tools—the Google Cloud console, Google Cloud CLI,
or
Terraform —to view cluster details and to manage the cluster
lifecycle. For example, you run can gcloud CLI commands to
get information about your cluster .
The GKE On-Prem API stores cluster state metadata in Google Cloud.
This metadata lets the API manage the cluster lifecycle. The standard
tools use the GKE On-Prem API, and collectively they are referred to
as the GKE On-Prem API clients .
If you set gkeOnPremAPI.enabled to true ,
before creating or updating the cluster using bmctl ,
be sure to do the steps in
Before
you begin to enable and initialize the GKE On-Prem API.
After you add this section and create or update the cluster, if
subsequently you remove the section and update the cluster, the update
will fail.
If you prefer to create the cluster using a standard tool
instead of bmctl , see the following:
Create an admin cluster using GKE On-Prem API clients
Create a cluster using GKE On-Prem API clients
When you create a cluster using a standard tool, the cluster is
automatically enrolled in the GKE On-Prem API.
Cluster resource
Optional
gkeOnPremAPI.enabled
By default, the cluster is enrolled in the GKE On-Prem API if the
GKE On-Prem API is enabled in your project. Set to false
if you don't want to enroll the cluster.
After the cluster is enrolled in the GKE On-Prem API, if you need
to unenroll the cluster, make the following change and then update
the cluster:
gkeOnPremAPI :
enabled : false
Cluster resource
Required
Mutable
gkeOnPremAPI.location
The Google Cloud region where the GKE On-Prem API runs and
stores cluster metadata. Choose one of the
supported regions . Must be a non-empty string if
gkeOnPremAPI.enabled is true . If
gkeOnPremAPI.enabled is false , don't
include this field.
If this section isn't included in your configuration file, this
field is set to clusterOperations.location .
Cluster resource
Optional
Immutable
kubevirt.useEmulation (deprecated)
Deprecated. As of release 1.11.2, you can enable or disable
VM Runtime on GDC by updating the VMRuntime custom resource
only.
Boolean. Determines whether or not software emulation is used to run
virtual machines. If the node supports hardware virtualization, set
useEmulation to false for better
performance. If hardware virtualization isn't supported or you aren't
sure, set it to true .
Note: This field is no longer used. The useEmulation
setting and other VM settings are configured in the VMRuntime
custom resource. For more information, see
Enable or disable VM Runtime on GDC .
Cluster resource
Optional
Mutable
loadBalancer
This section contains settings for cluster load balancing.
Cluster resource
Required
Mutable
loadBalancer.addressPools
Object. The name and an array of IP addresses for your cluster load
balancer pool. Address pool configuration is only valid for
bundled LB mode in non-admin clusters. You can add new
address pools at any time, but you can't remove existing address pools.
An existing address pool can be edited to change avoidBuggyIPs
and manualAssign fields only.
Cluster resource
Optional
Immutable
loadBalancer.addressPools.addresses
Array of IP address ranges. Specify a list of non-overlapping IP
ranges for the data plane load balancer. All addresses must be in the
same subnet as the load balancer nodes.
For example:
addressPools :
- name : pool1
addresses :
- 192.168.1.0-192.168.1.4
- 192.168.1.240/28
Cluster resource
Optional
Immutable
loadBalancer.addressPools.name
String. The name you choose for your cluster load balancer pool.
Cluster resource
Required
Immutable
loadBalancer.addressPools.avoidBuggyIPs
Optional. Boolean ( true | false ). If true ,
the pool omits IP addresses ending in .0 and .255 .
Some network hardware drops traffic to these special addresses. You
can omit this field, its default value is false .
Cluster resource
Optional
Mutable
loadBalancer.addressPools.manualAssign
Optional. Boolean ( true | false ). If true ,
addresses in this pool are not automatically assigned to Kubernetes
Services. If true , an IP address in this pool is used
only when it is specified explicitly by a service. You can omit this
field, its default value is false .
Cluster resource
Optional
Mutable
loadBalancer.mode
Required. String. Specifies the load-balancing mode. In
bundled mode, Google Distributed Cloud software installs a
load balancer on load balancer nodes during cluster creation. In
manual mode, the cluster relies on a manually configured
external load balancer. For more information, see
Overview of load balancers .
Allowed values: bundled | manual
Cluster resource
Required
Immutable
loadBalancer.type
Optional. String. Specifies the type of bundled load-balancing used,
Layer 2 or Border Gateway Protocol (BGP). If you are using the
standard, bundled load
balancing , set type to layer2 . If you
are using bundled load
balancing with BGP , set type to bgp . If
you don't set type , it defaults to layer2 .
Allowed values: layer2 | bgp
Cluster resource
Optional
Immutable
loadBalancer.nodePoolSpec
Optional. Use this section to configure a load balancer node pool. The
nodes you specify are part of the Kubernetes cluster and run regular
workloads and load balancers. If you don't specify a node pool, then
the control plane nodes are used for load balancing. This section
applies only when the load-balancing mode is set to bundled .
Important: If you create your cluster without specifying a
loadBalancer.nodePoolSpec , you can't add the
nodePoolSpec later. For clusters configured with a
loadBalancer.nodePoolSpec , you can update the
nodePoolSpec at any time.
If you want to prevent workloads from running on a node in the load
balancer node pool, add the following taint to the node:
node-role.kubernetes.io/load-balancer:NoSchedule
Google Distributed Cloud software adds tolerations for this taint to
the pods that are required for load balancing.
Cluster resource
Optional
Mutable
loadBalancer.nodePoolSpec.nodes
This section contains an array of IP addresses for the nodes in your
load-balancer node pool.
By default, all nodes in the load balancer node pool must be in the
same Layer 2 subnet as the load balancer VIPs configured in the
loadBalancer.addressPools
section of the configuration file. However, if you specify a Kubernetes
IP address k8sIP for a node, only that address needs to
be in the same Layer 2 subnet as the other load balancer VIPs.
Cluster resource
Optional
Mutable
loadBalancer.nodePoolSpec.nodes.address
Optional. String (IPv4 address). When you specify a node pool, you
use the address field to specify the default IPv4 address
for SSH access for each node. SSH access is necessary for administrative
cluster operations, such as installations and upgrades. By default, this
IP address is also used for data and Kubernetes traffic. However, if you
specify the k8sIP address for a given node, traffic is split
between the two addresses for the node, with the k8sIP address
used exclusively for data and Kubernetes traffic.
Although nodes in the load balancer node pool can run workloads,
they're separate from the nodes in the worker node pools. You can't
include a given cluster node in more than one node pool. Overlapping
node IP addresses block cluster creation and other cluster operations.
For example:
loadBalancer :
mode : bundled
...
nodePoolSpec :
nodes :
- address : 10.200.0.25
- address : 10.200.0.26
- address : 10.200.0.27
Cluster resource
Optional
Mutable
loadBalancer.nodePoolSpec.nodes.k8sIP
Optional. String (IPv4 address). When you specify the optional
k8sIP address for a node, it's dedicated to handling data
and Kubernetes traffic for the node, such as requests and responses for
the Kubernetes API, the kubelet, and workloads. When you specify k8sIP ,
the standard node IP address nodePoolSpec.nodes.address is
used for SSH connections to the node exclusively. If you don't specify a
k8sIP address, the standard node IP address handles all
traffic for the node.
Note: Google Distributed Cloud deploys a bootstrap cluster for
some cluster operations, such as admin cluster creation. If the
k8sIP address is specified, this transient bootstrap
cluster accesses both node addresses during the cluster operation.
For example:
loadBalancer :
mode : bundled
...
addressPools :
- name : pool1
addresses :
- 10.200.0.92-10.200.0.100
nodePoolSpec :
nodes :
- address : 10.200.1.25
k8sIP : 10.200.0.25
- address : 10.200.0.26
- address : 10.200.0.27
This field can't be modified after cluster creation.
Cluster resource
Optional
Immutable
loadBalancer.nodePoolSpec.kubeletConfig
Optional.
This section contains fields that configure kubelet on all nodes in the
control plane node pool.
For example:
loadBalancer :
nodePoolSpec :
kubeletConfig :
registryBurst : 15
registryPullQPS : 10
serializeImagePulls : false
Cluster resource
Optional
Mutable
loadBalancer.nodePoolSpec.kubeletConfig.registryBurst
Optional. Integer (non-negative). Specifies the maximum number of
image pull requests that can be added to the processing queue to handle
spikes in requests. As soon as a pull starts, a new request can be added
to the queue. The default value is 10. This field corresponds to the
registryBurst
kubelet configuration (v1beta1) option.
The value for registryPullQPS takes precedence over this
setting. For example, with the default settings, bursts of up to 10
simultaneous queries are permitted, but they must be processed at the
default rate of five queries per second. This burst behavior is used
only when registryPullQPS is greater than 0 .
This field can be set whenever you create, update, or upgrade a
cluster and the setting persists through cluster upgrades. For more
information, see
Configure kubelet image pull settings .
Cluster resource
Optional
Mutable
loadBalancer.nodePoolSpec.kubeletConfig.registryPullQPS
Optional. Integer (non-negative). Specifies the processing rate for
queries for Artifact Registry image pulls in queries per second (QPS).
When registryPullQPS is set to value greater than 0, the
query rate is restricted to that number of queries per second. If
registryPullQPS is set to 0 , there's no
restriction on query rate. The default value is 5 .
This field corresponds to the
registryPullQPS
kubelet configuration (v1beta1) option.
This field can be set whenever you create, update, or upgrade a
cluster and the setting persists through cluster upgrades. For more
information, see
Configure kubelet image pull settings .
Cluster resource
Optional
Mutable
loadBalancer.nodePoolSpec.kubeletConfig.serializeImagePulls
Optional. Boolean ( true | false ). This field
specifies whether Artifact Registry pulls are processed in parallel or
one at a time. The default is true , specifying that pulls
are processed one at a time. When set to false , kubelet
pulls images in parallel. This field corresponds to the
serializeImagePulls
kubelet configuration (v1beta1) option.
This field can be set whenever you create, update, or upgrade a
cluster and the setting persists through cluster upgrades. For more
information, see
Configure kubelet image pull settings .
Cluster resource
Optional
Mutable
loadBalancer.ports.controlPlaneLBPort
Number. The destination port used for traffic sent to the Kubernetes
control plane (the Kubernetes API servers).
Cluster resource
Required
Immutable
loadBalancer.vips.controlPlaneVIP
Required. Specifies the virtual IP address (VIP) to connect to the
Kubernetes API server. This address must not fall within the range of
any IP addresses used for load balancer address pools,
loadBalancer.addressPools.addresses .
Cluster resource
Required
Immutable
loadBalancer.vips.ingressVIP
Optional. String (IPv4 address). The IP address that you have chosen
to configure on the load balancer for ingress traffic.
Cluster resource
Optional
Immutable
loadBalancer.localASN
Optional. String. Specifies the autonomous system number (ASN) for the
cluster being created. This field is used when setting up the bundled
load-balancing solution that uses border gateway protocol (BGP).
For more information, see
Configure bundled load balancers with BGP .
Cluster resource
Optional
Mutable
loadBalancer.bgpPeers
Optional. Object (list of mappings). This section specifies one or
more border gateway protocol (BGP) peers from your (external to the
cluster) local network. You specify BGP peers when you set up control
plane load balancing part of the bundled load-balancing solution that
uses BGP. Each peer is specified with a mapping, consisting of an IP
address, an autonomous system number (ASN), and, optionally, a list of
one or more IP addresses for control plane nodes. The BGP-peering
configuration for control plane load balancing can't be updated after
the cluster has been created.
For example:
loadBalancer :
mode : bundled
type : bgp
localASN : 65001
bgpPeers :
- ip : 10.0.1.254
asn : 65002
controlPlaneNodes :
- 10.0.1.10
- 10.0.1.11
- ip : 10.0.2.254
asn : 65002
controlPlaneNodes :
- 10.0.2.10
For more information, see
Configure bundled load balancers with BGP .
Cluster resource
Optional
Mutable
loadBalancer.bgpPeers.ip
Optional. String (IPv4 address). The IP address of an external peering
device from your local network.
For more information, see
Configure bundled load balancers with BGP .
Cluster resource
Optional
Mutable
loadBalancer.bgpPeers.asn
Optional. String. The autonomous system number (ASN) for the network
that contains the external peer device. Specify an ASN for every BGP
peer you set up for control plane load balancing, when you set up the
bundled load-balancing solution that uses BGP.
For more information, see
Configure bundled load balancers with BGP .
Cluster resource
Optional
Mutable
loadBalancer.bgpPeers.controlPlaneNodes
Optional. Array of IP (IPv4) addresses. One or more IP addresses for
control plane nodes that connect to the external BGP peer, when you
set up the bundled load-balancing solution that uses BGP. If you
don't specify any control plane nodes, all control plane nodes will
connect to the external peer. If you specify one or more IP addresses,
only the nodes specified participate in peering sessions.
For more information, see
Configure bundled load balancers with BGP .
Cluster resource
Optional
Mutable
maintenanceBlocks.cidrBlocks
Optional. Single IPv4 address or a range of IPv4 addresses. Specify
the IP addresses for the node machines you want to put into
maintenance mode. For more information, see
Put nodes into
maintenance mode .
For example:
maintenanceBlocks :
cidrBlocks :
- 192.168.1.200 # Single machine
- 192.168.1.100-192.168.1.109 # Ten machines
Cluster resource
Optional
Mutable
metricsAdapter ( Preview )
Optional. Specifies the adapter configuration for horizontal Pod
autoscaling based on custom metrics. This capability is available for
Preview for version 1.34 clusters.
For example:
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : cluster1
namespace : cluster-cluster1
annotations :
preview.baremetal.cluster.gke.io/metrics-adapter : "true"
spec :
# ... other existing cluster configurations ...
metricsAdapter :
prometheus :
url : "http://prometheus-k8s.monitoring.svc.cluster.local:9090"
orgID : "production-environment"
auth :
configSecretRef :
name : prometheus-auth-secret
key : config
rules :
configMapKeyRefs :
- name : my-app-rules
key : config.yaml
Cluster resource
Optional
Mutable
metricsAdapter.prometheus
Optional. Specify the settings for connecting to a Prometheus server.
This enables the use of your own Prometheus instance as a custom
metrics provider for horizontal Pod autoscaling. When you specify the
metricsAdapter.prometheus field, you must also specify
the metricsAdapter.rules field.
Cluster resource
Optional
Mutable
metricsAdapter.prometheus.url
Required when specifying Prometheus settings. The URL of the
Prometheus endpoint. In this case, when using Prometheus as a
custom metrics provider for horizontal Pod autoscaling, use the
following fully qualified domain name (FQDN):
http://prometheus.k8s.svc.cluster.local:9090
The FQDN follows
standard
Kubernetes naming conventions for internal DNS names :
prometheus : The name of the Kubernetes Service (the
Prometheus application service itself).
k8s : The name of the Kubernetes Namespace
where the service is running.
svc : Indicates that this is a Service resource type
within the cluster.
cluster.local : The default domain suffix for the
Kubernetes cluster internal network.
Cluster resource
Required
Mutable
metricsAdapter.prometheus.orgID
Optional. String. Specify the organization ID to be included in the
`X-Scope-OrgID` header.
Cluster resource
Optional
Mutable
metricsAdapter.prometheus.auth
Optional. This section contains authentication settings required by
the recommender for connecting to Prometheus. Horizontal Pod autoscaling
supports basic authentication (username and password) and bearer token
authentication mechanisms. You must store all credentials in a Secret
using kubeconfig format. If your Prometheus instance doesn't require
authentication, remove this section.
Cluster resource
Optional
Mutable
metricsAdapter.prometheus.auth.configSecretRef
Optional. Specify the Secret and the key in the Secret for
authentication.
Cluster resource
Optional
Mutable
metricsAdapter.prometheus.auth.configSecretRef.name
Required when specifying basic authentication. String. The name of the
Secret that contains the credentials for authentication.
Cluster resource
Optional
Mutable
metricsAdapter.prometheus.auth.configSecretRef.key
Required when specifying basic authentication. String. The key within
the data field of the Secret to select from to retrieve
the credentials for authentication. Must be a valid Secret key.
Cluster resource
Optional
Mutable
metricsAdapter.prometheus.auth.configSecretRef.optional
Optional. Boolean ( true | false ). Defaults to
false, authentication fails if either the Secret or key isn't defined.
Cluster resource
Optional
Mutable
metricsAdapter.rules
Optional. Specify the metric discovery rules for the adapter. If
metricsAdapter.prometheus is provided, this field is
required.
Cluster resource
Optional
Mutable
metricsAdapter.rules.configMapKeyRefs
Required when specifying the metricsAdapter field. The
configMapKeyRefs contains a list of references to
ConfigMap keys that contain rules configurations. These rules are
merged in order by the controller.
Cluster resource
Optional
Mutable
metricsAdapter.rules.configMapKeyRefs.name
Required. String. The name of the ConfigMap that contains rules.
Cluster resource
Required
Mutable
metricsAdapter.rules.configMapKeyRefs.key
Required. String. The key within the data field of the
ConfigMap to select from to retrieve rules. Must be a valid ConfigMap
key.
Cluster resource
Required
Mutable
nodeAccess.loginUser
Optional. String. Specify the non-root username you want to use for
passwordless SUDO capability access to the node machines in your
cluster. Your SSH key,
sshPrivateKeyPath , must
work for the specified user. The cluster create and update operations
check that node machines can be accessed with the specified user and
SSH key.
Cluster resource
Optional
Mutable
osEnvironmentConfig.addPackageRepo
Optional. Boolean ( true | false ). Specifies
whether or not to use your own package repository server, instead of
the default Docker apt repository. To use your own
package repository, set addPackageRepo to
false . Use this feature to skip adding package
repositories to each bare metal machine in your deployment. For more
information, see
Use a private package repository server .
Cluster resource
Optional
Immutable
nodeConfig
This section contains settings for cluster node configuration.
Cluster resource
Optional
Mutable (upgrade only)
nodeConfig.containerRuntime (deprecated)
Deprecated. As of release 1.13.0, Google Distributed Cloud supports
containerd only as the container runtime. The
containerRuntime field is deprecated and has been removed
from the generated cluster configuration file. For
Google Distributed Cloud software versions 1.13.0 and higher, if your
cluster configuration file contains this field, the value must be
containerd .
Cluster resource
Optional
Mutable (upgrade only)
nodeConfig.podDensity
This section specifies the pod density configuration.
Cluster resource
Optional
Immutable
nodeConfig.podDensity.maxPodsPerNode
Optional. Integer. Specifies the maximum number of pods that can be
run on a single node. For self-managed clusters, allowable values for
maxPodsPerNode are 32 – 250 for
high-availability (HA) clusters and 64 – 250
for non-HA clusters. For user clusters, allowable values for
maxPodsPerNode are 32 – 250 .
The default value if unspecified is 110 . Once the cluster
is created, this value can't be updated.
Kubernetes assigns a
Classless Inter-Domain Routing (CIDR) block
to each node so that each pod can have a unique IP address. The size
of the CIDR block corresponds to the maximum number of pods per node.
For more information about setting the maximum number of pods per node,
see Pod networking .
Cluster resource
Optional
Immutable
nodeConfig.privateRegistries
This section specifies a node-level private registry configuration for
user clusters. Node-level private registries are intended for use with
your workloads to give you more control over image pulls and their
related security.
For example:
spec:
bypassPreflightCheck: false
...
nodeConfig:
containerRuntime: containerd
podDensity:
maxPodsPerNode: 250
privateRegistries:
- caCertSecretRef:
name: ca-9dd74fd308bac6df562c7a7b220590b5
namespace: some-namespace
host: 10 .200.0.2:5007
pullCredentialSecretRef:
name: pull-creds-9dd74fd308bac6df562c7a7b220590b5
namespace: some-namespace
...
For admin clusters, the node-level private registry is specified
in the Credentials section of the
admin cluster configuration file.
For more information about configuring node access to a private registry,
see Configure
nodes to authenticate to a private registry .
The following list shows the launch stage per version for configuring
a node-level private registry:
1.30 and later: GA
1.29: Preview
Cluster resource
Optional
Mutable
nodeConfig.privateRegistries.caCertSecretRef
When applicable, use this section to specify the name and namespace of
the Secret that was created to store the CA certificate (server root
CA) for the private registry. If your local registry doesn't require a
private TLS certificate, then you can omit this block.
The following list shows the launch stage per version for configuring
a node-level private registry:
1.30 and later: GA
1.29: Preview
Cluster resource
Optional
Mutable
nodeConfig.privateRegistries.caCertSecretRef.name
Optional. String. The name of the Secret that was created to store the
CA certificate for the private registry.
For more information about configuring node access to a private registry,
see Configure
nodes to authenticate to a private registry .
The following list shows the launch stage per version for configuring
a node-level private registry:
1.30 and later: GA
1.29: Preview
Cluster resource
Optional
Mutable
nodeConfig.privateRegistries.caCertSecretRef.namespace
Optional. String. The namespace of the Secret that was created to
store the CA certificate for the private registry.
For more information about configuring node access to a private registry,
see Configure
nodes to authenticate to a private registry .
The following list shows the launch stage per version for configuring
a node-level private registry:
1.30 and later: GA
1.29: Preview
Cluster resource
Optional
Mutable
nodeConfig.privateRegistries.host
String. This field specifies the host and port for a single private
registry. You can specify the host with either a domain name or IP
address. Don't include the http or https
prefix.
The host field is required when you specify a private
registry for a user cluster.
The following list shows the launch stage per version for configuring
a node-level private registry:
1.30 and later: GA
1.29: Preview
Cluster resource
Optional
Mutable
nodeConfig.privateRegistries.pullCredentialSecretRef
When applicable, use this section to specify the name and namespace of
the Secret that was created to store the private registry credentials.
Use the pullCredentialSecretRef block when you configure
a user cluster to give nodes access to a private registry that requires
authentication.
The following list shows the launch stage per version for configuring
a node-level private registry:
1.30 and later: GA
1.29: Preview
Cluster resource
Optional
Mutable
nodeConfig.privateRegistries.pullCredentialSecretRef.name
Optional. String. The name of the Secret that was created to store the
private registry credentials.
For more information about configuring node access to a private registry,
see Configure
nodes to authenticate to a private registry .
The following list shows the launch stage per version for configuring
a node-level private registry:
1.30 and later: GA
1.29: Preview
Cluster resource
Optional
Mutable
nodeConfig.privateRegistries.pullCredentialSecretRef.namespace
Optional. String. The namespace of the Secret that was created to
store the private registry credentials.
For more information about configuring node access to a private registry,
see Configure
nodes to authenticate to a private registry .
The following list shows the launch stage per version for configuring
a node-level private registry:
1.30 and later: GA
1.29: Preview
Cluster resource
Optional
Mutable
nodePoolUpgradeStrategy
Optional. This section contains settings for configuring the upgrade
strategy for the worker node pools in your cluster. For more information, see
Parallel upgrades .
Cluster resource
Optional
Mutable
nodePoolUpgradeStrategy.concurrentNodePools
Optional. Boolean ( 0 or 1 ). Default: 1 .
This field specifies whether or not to upgrade all worker node pools
for a cluster concurrently. By default ( 1 ), upgrade
sequentially, one after the other. When you set concurrentNodePools
to 0 , every worker node pool in the cluster upgrades
in parallel.
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : cluster1
namespace : cluster-cluster1
spec :
...
nodePoolUpgradeStrategy :
concurrentNodePools : 0
...
For more information, see
Node pool upgrade strategy .
The nodes in each worker node pool upgrade according to the
upgrade strategy in their corresponding
NodePool spec.
Cluster resource
Optional
Mutable
nodePoolUpgradeStrategy.pause
Optional. Boolean ( true or false ). Default:
false . This field specifies whether to pause or resume an
active cluster upgrade.
1.29 and higher
The upgrade pause and resume feature is GA for clusters with all
control plane nodes at minor version 1.29 or higher. For version
1.29 clusters, this feature is enabled by default.
1.28
The upgrade pause and resume feature is available in
Preview for
clusters with all control plane nodes at minor version 1.28 or
higher. For version 1.28 clusters, use the
preview.baremetal.cluster.gke.io/upgrade-pause-and-resume
annotation to enable the feature.
Update the nodePoolUpgradeStrategy.pause value to
true to pause an active cluster upgrade:
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : cluster1
namespace : cluster-cluster1
annotations : preview.baremetal.cluster.gke.io/upgrade-pause-and-resume
spec :
...
nodePoolUpgradeStrategy :
pause : true
...
For more information, see
Pause and resume upgrades .
Cluster resource
Optional
Mutable
periodicHealthCheck
This section holds configuration information for periodic health
checks. In the Cluster resource, the only setting available for
periodic health checks is the enable field. For more
information, see
Periodic health checks .
Cluster resource
Optional
Mutable
periodicHealthCheck.enable
Optional. Boolean ( true | false ). Enable or
disable periodic health checks for your cluster. Periodic health
checks are enabled by default on all clusters. You can disable
periodic health checks for a cluster by setting the
periodicHealthCheck.enable field to false .
For more information, see
Disable periodic health checks
Cluster resource
Optional
Mutable
profile
Optional. String. When profile is set to edge
for a standalone cluster, it minimizes the resource consumption of the
cluster. The edge profile is available for standalone clusters only.
The edge profile has reduced system resource requirements and is
recommended for edge devices with restrictive resource constraints.
For hardware requirements associated with the edge profile, see
Resource
requirements for standalone clusters using the edge profile .
Cluster resource
Optional
Immutable
proxy
If your network is behind a proxy server, fill in this section.
Otherwise, remove this section.
Cluster resource
Optional
Mutable
proxy.noProxy
String. A comma-separated list of IP addresses, IP address ranges,
host names, and domain names that shouldn't go through the proxy
server. When your cluster sends a request to one of these addresses,
hosts, or domains, the request is sent directly.
Cluster resource
Optional
Immutable
proxy.url
String. The HTTP address of your proxy server. Include the port number
even if it's the same as the scheme's default port.
For example:
proxy :
url : "http://my-proxy.example.local:80"
noProxy : "10.151.222.0/24, my-host.example.local,10.151.2.1"
Cluster resource
Optional
Mutable
clusterSecurity
This section specifies the cluster security-related settings.
Cluster resource
Optional
Mutable
clusterSecurity.enableSeccomp ( Preview )
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Optional. Boolean ( true | false ). Enable or disable
cluster-wide seccomp . When this field is disabled,
containers without a seccomp profile in the cluster
configuration file run unconfined. When this field is enabled, those
same containers are secured using the container runtime's default
seccomp profile. This feature is enabled by default.
After cluster creation, this field can be toggled only during upgrade.
For more information, see
Use seccomp to restrict containers .
Cluster resource
Optional
Mutable (upgrade only)
clusterSecurity.enableRootlessContainers
Optional. Boolean ( true | false ). Enable or disable rootless bare metal system containers. When this field is enabled, bare metal system containers run as a non-root user with a user ID in the range 2000-5000. When disabled, bare metal system containers run as a root user. By default, this feature is enabled. Turning off this feature is highly discouraged, because running containers as a root user poses a security risk. After cluster creation, this field can be toggled only during upgrade. For more information, see Don't run containers as root user .
Cluster resource
Optional
Mutable (upgrade only)
clusterSecurity.authorization
Optional. Authorization configures user access to the cluster.
Cluster resource
Optional
Mutable
clusterSecurity.authorization.clusterAdmin
Optional. Specifies cluster administrator for this cluster.
Cluster resource
Optional
Mutable
clusterSecurity.authorization.clusterAdmin.gcpAccounts
Optional. The gcpAccounts field specifies a list of
accounts that are granted the Kubernetes role-based access control
(RBAC) role clusterrole/cluster-admin . Accounts with this
role have full access to every resource in the cluster in all
namespaces. This field also configures the RBAC policies that let the
specified accounts use the
connect gateway
to run kubectl commands against the cluster. This is
convenient if you have multiple clusters to manage, particularly in
a hybrid environment with both GKE and on-premises
clusters.
These RBAC policies also let users sign in to the Google Cloud console
using their Google identity, if they have the required
Identity and Access Management
roles to access the console .
This field takes an array of account names. User accounts and
service accounts are supported. For users, you specify their
Google Cloud account email addresses. For service accounts, specify
the email addresses in the following format:
SERVICE_ACCOUNT @ PROJECT_ID .iam.gserviceaccount.com .
For example:
...
clusterSecurity:
authorization:
clusterAdmin:
gcpAccounts:
- alex@example.com
- hao@example.com
- my-sa@example-project-123.iam.gserviceaccount.com
...
When updating a cluster to add an account, be sure to include all
accounts in the list (both existing and new accounts) because the
update command overwrites the list with what you specify in the
update.
This field only applies to clusters that can run workloads. For
example, you can't specify gcpAccounts for admin
clusters.
Cluster resource
Optional
Mutable
clusterSecurity.startUIDRangeRootlessContainers
Optional. Integer. Default value: 2000 . System containers
in Google Distributed Cloud software help install and manage clusters.
The user IDs (UIDs) and group IDs (GIDs) used by these containers can
be controlled by the startUIDRangeRootlessContainers
field in the cluster specification. The system containers use the UIDs
and GIDs in the range startUIDRangeRootlessContainers to
startUIDRangeRootlessContainers + 2999, which gives a range
of 2000 - 4999 by default. When you update
startUIDRangeRootlessContainers , select a value that ensures
the UID and GID spaces used by the system containers don't overlap
with those assigned to user workloads. The
startUIDRangeRootlessContainers value can be changed
during upgrades only.
Allowed values: 1000 - 57000
For example:
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : name-of-cluster
spec :
clusterSecurity :
startUIDRangeRootlessContainers : 5000
...
For more information, see
Don't run containers as root user .
Cluster resource
Optional
Mutable (upgrade only)
storage.lvpNodeMounts.path
Required. String. Use the path field to specify the host
machine path where mounted disks can be discovered. A local
PersistentVolume (PV) is created for each mount. The default path is
/mnt/localpv-share . For instructions for configuring your node
mounts, see
Configure
LVP node mounts .
Cluster resource
Required
Immutable
storage
This section contains settings for cluster storage.
Cluster resource
Required
Immutable
storage.lvpNodeMounts
This section specifies the configuration (path) for local persistent
volumes backed by mounted disks. You must format and mount these disks
yourself. You can do this task before or after cluster creation. For
more information, see
LVP
node mounts .
Cluster resource
Required
Immutable
storage.lvpShare
This section specifies the configuration for local persistent volumes
backed by subdirectories in a shared file system. These subdirectories
are automatically created during cluster creation.
For more information, see
LVP
share .
Cluster resource
Required
Immutable
storage.lvpShare.path
Required. String. Use the path field to specify the host
machine path where subdirectories can be created. A local
PersistentVolume (PV) is created for each subdirectory. For
instructions to configure your LVP share, see
Configuring
an LVP share .
Cluster resource
Required
Immutable
storage.lvpShare.numPVUnderSharedPath
Required. String. Specify the number of subdirectories to create under
lvpShare.path . The default value is 5 . For
instructions to configure your LVP share, see
Configuring
an LVP share .
Cluster resource
Required
Immutable
storage.lvpShare.storageClassName
Required. String. Specify the StorageClass to use to create persistent
volumes. The StorageClass is created during cluster creation. The
default value is local-shared . For instructions to
configure your LVP share, see
Configuring
an LVP share .
Cluster resource
Optional
Immutable
type
Required. String. Specifies the type of cluster. The standard
deployment model consists of a single admin cluster and one or more
user clusters, which are managed by the admin cluster.
Google Distributed Cloud software supports the following types of
clusters:
Admin - cluster used to manage user clusters.
User - cluster used to run workloads.
Hybrid - single cluster for both admin and workloads, that can
also manage user clusters.
Standalone - single cluster that can administer itself, and that
can also run workloads, but can't create or manage other user
clusters.
Cluster type is specified at cluster creation and can't be changed for
updates or upgrades. For more information about how to create a
cluster, see
Creating clusters: overview .
Allowed values: admin | user | hybrid | standalone
This value can't be modified for existing clusters.
Cluster resource
Required
Immutable
verticalPodAutoscaling ( Preview )
Optional. Use this section for specifying the mode of operation for
vertical Pod autoscaling. This feature is available for
Preview for version 1.33
and later clusters.
For example:
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : cluster1
namespace : cluster-cluster1
annotations :
preview.baremetal.cluster.gke.io/vertical-pod-autoscaler : enable
spec :
# ... other cluster spec fields
verticalPodAutoscaling :
# Set to true for automated updates
enableUpdater : true
# Set to true to reduce recommender memory usage
enableMemorySaver : true
You can update your cluster at any time to enable, disable, or
configure vertical Pod autoscaling. For more information about
enabling and using vertical Pod autoscaling, see
Configure vertical
Pod autoscaling .
Cluster resource
Optional
Mutable
verticalPodAutoscaling.enableMemorySaver ( Preview )
Optional. Boolean ( true | false ). Enable or
disable memory saver mode for vertical Pod autoscaling. Memory saver
mode reduces the memory footprint of the vertical Pod autoscaling
recommender component. When you set enableMemorySaver to
true , the recommender only tracks and computes
aggregations for pods that have a matching
VerticalPodAutoscaler custom resource. Memory saver mode
is disabled ( false ) by default.
Vertical Pod autoscaling is available for
Preview for version 1.33
and later clusters. You can update your cluster at any time to enable,
disable memory saver mode. For more information, see
Understand
vertical Pod autoscaling modes .
Cluster resource
Optional
Mutable
verticalPodAutoscaling.enableUpdater ( Preview )
Optional. Boolean ( true | false ). Specify the
mode for applying the Pod resource recommendations:
In recommendation mode ( enableUpdater: false ),
vertical Pod autoscaling analyzes resource usage and publishes
recommended values for CPU and memory requests and limits in the
status section of the VerticalPodAutoscaler custom
resources you create. In recommendation mode, to implement the
recommended resource settings, you must edit your resources
manually.
In automated update mode ( enableUpdater: true ),
vertical Pod autoscaling analyzes resource usage and publishes
recommended values for CPU and memory requests and limits in the
status section of the VerticalPodAutoscaler custom
resources you create. Then, vertical Pod autoscaling automatically
applies the recommendations.
By default, the vertical Pod autoscaler runs in recommendation mode
( enableUpdater: false ).
Vertical Pod autoscaling is available for
Preview for version 1.33
and later clusters. You can update your cluster at any time to specify the
mode for applying Pod resource recommendations. For more information, see
Understand
vertical Pod autoscaling modes .
Cluster resource
Optional
Mutable
verticalPodAutoscaling.prometheus ( Preview )
Optional. Specify the settings for connecting to a Prometheus server.
This cluster configuration field enables the use of your own
Prometheus instance as a persistent history provider for vertical Pod
autoscaling. This capability is available for Preview for version 1.34
clusters. When enabled, the recommender component can query the
Prometheus server upon startup or restart to retrieve long-term
historical resource usage (CPU and memory usage metrics) data for all
managed Pods.
The following example shows a Prometheus configuration that uses basic
authentication:
apiVersion : baremetal.cluster.gke.io/v1
kind : Cluster
metadata :
name : cluster1
namespace : cluster-cluster1
annotations :
preview.baremetal.cluster.gke.io/vertical-pod-autoscaler : enable
spec :
# ... other cluster spec fields
verticalPodAutoscaling :
... # other vertical Pod autoscaling fields
prometheus :
url : "http://prometheus.prometheus.svc.cluster.local:9090"
auth :
basicAuth :
usernameRef :
name : prom-basic-creds
key : username
passwordRef :
name : prom-basic-creds
key : password
For more information, see
Use
Prometheus as a persistent history provider .
Cluster resource
Optional
Mutable
verticalPodAutoscaling.prometheus.url
Required when specifying Prometheus settings. The URL of the
Prometheus endpoint. When using Prometheus as a
persistent history provider for vertical Pod autoscaling, use the
following fully qualified domain name (FQDN):
http://prometheus.prometheus.svc.cluster.local:9090
The FQDN follows
standard
Kubernetes naming conventions for internal DNS names :
prometheus : the name of the Kubernetes Service (the
Prometheus application service itself).
prometheus : the name of the Kubernetes Namespace
where the service is running.
svc : Indicates that this is a Service resource type
within the cluster.
cluster.local : the default domain suffix for the
Kubernetes cluster internal network.
Cluster resource
Required
Mutable
verticalPodAutoscaling.prometheus.auth
Optional. This section contains authentication settings required by
the recommender for connecting to Prometheus. Vertical Pod autoscaling
supports basic authentication (username and password) and bearer token
authentication mechanisms. If your Prometheus instance doesn't require
authentication, remove this section.
If your Prometheus instance uses a different authentication method,
such as Transport Layer Security (TLS), it isn't supported for use
with the vertical Pod autoscaling feature. For more requirements, see
Use
Prometheus as a persistent history provider .
Cluster resource
Optional
Mutable
verticalPodAutoscaling.prometheus.auth.basicAuth
Optional. Specify the username and password for basic authentication.
Cluster resource
Optional
Mutable
verticalPodAutoscaling.prometheus.auth.basicAuth.usernameRef
Required when specifying basic authentication. The
usernameRef field points to a Secret containing the
username for authentication.
Cluster resource
Required
Mutable
verticalPodAutoscaling.prometheus.auth.basicAuth.usernameRef.name
Required when specifying basic authentication. String. The name of the
Secret that contains the username.
Cluster resource
Required
Mutable
verticalPodAutoscaling.prometheus.auth.basicAuth.usernameRef.key
Required when specifying basic authentication. String. The key within
the data field of the Secret to select from to retrieve
the username. Must be a valid Secret key.
Cluster resource
Required
Mutable
verticalPodAutoscaling.prometheus.auth.basicAuth.usernameRef.optional
Optional. Boolean ( true | false ). Defaults to
false, authentication fails if either the Secret or key isn't defined.
Cluster resource
Optional
Mutable
verticalPodAutoscaling.prometheus.auth.basicAuth.passwordRef
Required when specifying basic authentication. The
passwordRef field points to a Secret containing the
password for authentication.
Cluster resource
Required
Mutable
verticalPodAutoscaling.prometheus.auth.basicAuth.passwordRef.name
Required when specifying basic authentication. String. The name of the
Secret that contains the password. The referenced Secret must contain
both the password and the username.
Cluster resource
Required
Mutable
verticalPodAutoscaling.prometheus.auth.basicAuth.passwordRef.key
Required when specifying basic authentication. String. The key within
the data field of the Secret to select from to retrieve
the password. Must be a valid Secret key.
Cluster resource
Required
Mutable
verticalPodAutoscaling.prometheus.auth.basicAuth.passwordRef.optional
Optional. Boolean ( true | false ). Defaults to
false, authentication fails if either the Secret or key isn't defined.
Cluster resource
Optional
Mutable
verticalPodAutoscaling.prometheus.auth.bearerTokenAuth
Optional. Specify a Secret containing the bearer token to use for
authentication.
Cluster resource
Optional
Mutable
verticalPodAutoscaling.prometheus.auth.bearerTokenAuth.name
Required when specifying bearer token authentication. String. The name
of the Secret that contains the token.
Cluster resource
Required
Mutable
verticalPodAutoscaling.prometheus.auth.bearerTokenAuth.key
Required when specifying bearer token authentication. String. The key
within the data field of the Secret to select from to
retrieve the token. Must be a valid Secret key.
Cluster resource
Required
Mutable
verticalPodAutoscaling.prometheus.auth.bearerTokenAuth.optional
Optional. Boolean ( true | false ). Defaults to
false, authentication fails if either the Secret or key isn't defined.
Cluster resource
Optional
Mutable
name
Required. String. Typically, the namespace name uses a pattern of
cluster- CLUSTER_NAME , but the
cluster- prefix isn't strictly required since
Google Distributed Cloud software release 1.7.2.
This value can't be modified for existing clusters.
Namespace resource
Required
Immutable
clusterName
String. Required. The name of the cluster to which you are adding the
node pool. Create the node pool resource in the same namespace as the
associated cluster and reference the cluster name in this field. For
more information, see
Add and remove
node pools in a cluster .
For example:
apiVersion : baremetal.cluster.gke.io/v1
kind : NodePool
metadata :
name : node-pool-new
namespace : cluster-my-cluster
spec :
clusterName : my-cluster
nodes :
- address : 10.200.0.10
- address : 10.200.0.11
- address : 10.200.0.12
NodePool resource
Required
Immutable
nodes
Optional. Array of IP (IPv4) addresses. This defines the node pool for
your worker nodes.
NodePool resource
Optional
Mutable
nodes.address
Optional. String (IPv4 address). One or more IP addresses for the
nodes that make your pool for worker nodes.
NodePool resource
Optional
Mutable
kubeletConfig
Optional.
This section contains fields that configure kubelet on all nodes in the
control plane node pool.
For example:
apiVersion : baremetal.cluster.gke.io/v1
kind : NodePool
metadata :
name : node-pool-new
namespace : cluster-my-cluster
spec :
clusterName : my-cluster
...
kubeletConfig :
serializeImagePulls : true
registryBurst : 20
registryPullQPS : 10
NodePool resource
Optional
Mutable
kubeletConfig.registryBurst
Optional. Integer (non-negative). Specifies the maximum quantity of
image pull requests that can be added to the processing queue to handle
spikes in requests. As soon as a pull starts, a new request can be added
to the queue. The default value is 10. This field corresponds to the
registryBurst
kubelet configuration (v1beta1) option.
The value for registryPullQPS takes precedence over this
setting. For example, with the default settings, bursts of up to 10
simultaneous queries are permitted, but they must be processed at the
default rate of five queries per second. This burst behavior is used
only when registryPullQPS is greater than 0 .
This field can be set whenever you create, update, or upgrade a
cluster and the setting persists through cluster upgrades. For more
information, see
Configure kubelet image pull settings .
NodePool resource
Optional
Mutable
kubeletConfig.registryPullQPS
Optional. Integer (non-negative). Specifies the processing rate for
queries for Artifact Registry image pulls in queries per second (QPS).
When registryPullQPS is set to value greater than 0, the
query rate is restricted to that number of queries per second. If
registryPullQPS is set to 0 , there's no
restriction on query rate. The default value is 5 .
This field corresponds to the
registryPullQPS
kubelet configuration (v1beta1) option.
This field can be set whenever you create, update, or upgrade a
cluster and the setting persists through cluster upgrades. For more
information, see
Configure kubelet image pull settings .
NodePool resource
Optional
Mutable
kubeletConfig.serializeImagePulls
Optional. Boolean ( true | false ). This field
specifies whether Artifact Registry pulls are processed in parallel or
one at a time. The default is true , specifying that pulls
are processed one at a time. When set to false , kubelet
pulls images in parallel. This field corresponds to the
serializeImagePulls
kubelet configuration (v1beta1) option.
This field can be set whenever you create, update, or upgrade a
cluster and the setting persists through cluster upgrades. For more
information, see
Configure kubelet image pull settings .
NodePool resource
Optional
Mutable
taints
Optional. Object. A node taint lets you mark a node so that the
scheduler avoids or prevents using it for certain pods. A taint
consists of a key-value pair and an associated effect. The
key and value values are strings you use to
identify the taint and the effect value specifies how
pods are handled for the node. The taints object can have
multiple taints.
The effect field can take one of the following values:
NoSchedule - no pod is able to schedule onto the
node unless it has a matching toleration.
PreferNoSchedule - the system avoids placing a pod
that does not tolerate the taint on the node, but it is not
required.
NoExecute - pods that don't tolerate the taint
are evicted immediately, and pods that do tolerate the taint are
never evicted.
For Google Distributed Cloud software, taints are reconciled to the
nodes of the node pool unless the baremetal.cluster.gke.io/label-taint-no-sync
annotation is applied to the cluster. For more information about
taints, see
Taints and Tolerations .
For example:
taints :
- key : status
value : testpool
effect : NoSchedule
NodePool resource
Optional
Mutable
labels
Optional. Mapping (key-value pairs).
Labels are reconciled to the nodes of the node pool unless the
baremetal.cluster.gke.io/label-taint-no-sync annotation
is applied to the cluster. For more information about labels, see
Labels and Selectors .
NodePool resource
Optional
Mutable
upgradeStrategy
Optional. This section contains settings for configuring upgrade
strategy for the nodes in a worker node pool. For more information, see
Parallel upgrades .
Note: Don't add this section for control plane or load balancer node pools.
NodePool resource
Optional
Mutable
upgradeStrategy.parallelUpgrade
Optional. This section contains settings for configuring parallel node
upgrades for a worker node pool. In a typical, default cluster upgrade, each
cluster node is upgraded sequentially, one after the other. You can
configure worker node pools so that multiple nodes upgrade in parallel
when you upgrade your cluster. Upgrading nodes in parallel speeds up
cluster upgrades significantly, especially for clusters that have
hundreds of nodes.
For a worker node pool, you can specify the number of nodes to upgrade
concurrently and you can set a minimum threshold for the number of
nodes able to run workloads throughout the upgrade process.
For more information, see
Node upgrade strategy .
apiVersion : baremetal.cluster.gke.io/v1
kind : NodePool
metadata :
name : np1
namespace : cluster-cluster1
spec :
clusterName : cluster1
nodes :
- address : 10.200.0.1
...
upgradeStrategy :
parallelUpgrade :
concurrentNodes : 2
minimumAvailableNodes : 5
NodePool resource
Optional
Mutable
upgradeStrategy.parallelUpgrade.concurrentNodes
Optional. Integer (positive). Default: 1 . Max: 15 .
By default ( 1 ), nodes are upgraded sequentially,
one after the other. When you set concurrentNodes to a number greater than 1, this field
specifies the number of nodes to upgrade in parallel. Note the following
constraints for concurrentNodes :
The value can't exceed the smaller of either 50 percent of the number
of nodes in the node pool, or the fixed number 15 . For example, if your
node pool has 20 nodes, you can't specify a value greater than
10 . If your node pool has 100 nodes, 15 is
the maximum value you can specify.
When you use this field together with the minimumAvailableNodes
field, their combined values can't exceed the total number of nodes
in the node pool. For example, if your node pool has 20 nodes and
minimumAvailableNodes is set to 18 ,
concurrentNodes can't exceed 2 .
Parallel upgrades don't honor the
Pod Disruption Budget (PDB) .
If your workloads are sensitive to disruptions, we recommend that you
specify minimumAvailableNodes to ensure a certain amount
of nodes remain available to run workloads throughout the upgrade
process. For more information, see
Parallel upgrades .
NodePool resource
Optional
Mutable
upgradeStrategy.parallelUpgrade.minimumAvailableNodes
Optional. Integer (non-negative). Default: Depends on concurrentNodes . For more detail about the default values for minimumAvailableNodes , see
Parallel upgrade defaults . The minimumAvailableNodes lets you specify
the quantity of nodes in the node pool that must remain available
throughout the upgrade process. A node is considered to be unavailable
when it's actively being upgraded. A node is also considered to be
unavailable when any of the following conditions are true:
Node is in maintenance mode
Node is reconciling
Node is stalled in the middle of an upgrade
When you use this field together with the concurrentNodes
field, their combined values can't exceed the total number of nodes in
the node pool. For example, if your node pool has 20 nodes and
concurrentNodes is set to 10 ,
minimumAvailableNodes can't exceed 10 .
A high value for minimumAvailableNodes minimizes capacity
issues for scheduling pods and, therefore, helps protect workloads
during a cluster upgrade. However, a high value for minimumAvailableNodes
increases the risk for an upgrade to get stalled waiting for nodes to
become available. For more information, see
Parallel upgrades .
NodePool resource
Optional
Mutable
privateRegistries
Optional. Use this section to specify a private registry to use for
workload images. This method of configuring the private registry in
the credentials section of the cluster configuration file is for hybrid
or standalone clusters that have worker node pools only.
For more information about configuring node access to a private registry,
see Configure
nodes to authenticate to a private registry .
Note: As a convenience, bmctl accepts the
privateRegistries fields outside of the cluster spec,
like the credentials key-value pairs. For an example, see the
private
registry setup instructions .
For example:
---
gcrKeyPath : baremetal/gcr.json
sshPrivateKeyPath : .ssh/id_rsa
...
privateRegistries :
- host : 10.200.0.2:5007
caCertPath : /root/cert.pem
pullCredentialConfigPath : /root/dockerconfig.json
...
Credentials
Optional
Mutable
privateRegistries.host
String. This field specifies the host and port for a single private
registry. You can specify the host with either a domain name or IP
address. Don't include the http or https
prefix.
The host field is required when you specify a private
registry for a hybrid or standalone cluster.
For example:
- host : 10.200.0.2:5007
Credentials
Optional
Mutable
privateRegistries.caCertPath
Optional. String. Path of the CA cert file (server root CA) if your
registry server uses a private TLS certificate. If your local registry
doesn't require a private TLS certificate, then you can omit this field.
Credentials
Optional
Mutable
privateRegistries.pullCredentialConfigPath
Optional. String. Path of the
Docker
CLI configuration file , config.json . Docker saves
authentication settings in the configuration file. This field applies
to the use of node-level private registries only.
Use the pullCredentialConfigPath field when you
configure a hybrid or standalone cluster to give nodes access a private
registry that requires authentication.
Credentials
Optional
Mutable
registryMirrors
Optional. Use this section to specify a registry mirror to use for
installing clusters, instead of Artifact Registry
( gcr.io ). For more information about using a registry
mirror, see
Use a registry mirror for container images .
Note: As a convenience, bmctl accepts the
registryMirrors fields outside of the cluster spec,
like the credentials key-value pairs. For an example, see
Use a registry mirror for container images .
For example:
registryMirrors :
- endpoint : https://172.18.0.20:5000
caCertPath : /root/ca.crt
pullCredentialConfigPath : /root/.docker/config.json
hosts :
- somehost.io
- otherhost.io
Registry mirror
Optional
Mutable
registryMirrors.endpoint
String. The endpoint of the mirror, consisting of the registry server
IP address and port number. Optionally, you can use your own namespace
in your registry server instead of the root namespace. Without a
namespace, the endpoint format is
REGISTRY_IP : PORT . When you use a
namespace, the endpoint format is
REGISTRY_IP : PORT /v2/ NAMESPACE .
The /v2 is required when specifying a namespace.
The endpoint field is required when you specify a
registry mirror. You can specify multiple mirrors and endpoints.
For example:
- endpoint : https://172.18.0.20:5000/v2/test-namespace
Registry mirror
Optional
Mutable
registryMirrors.caCertPath
Optional. String. Path of the CA cert file (server root CA) if your
registry server uses a private TLS certificate. If your local registry
doesn't require a private TLS certificate, then you can omit this field.
Registry mirror
Optional
Mutable
registryMirrors.pullCredentialConfigPath
Optional. String. Path of the
Docker CLI configuration file , config.json . Docker saves authentication settings in the
configuration file. This field applies to the use of registry mirrors
only. If your registry server doesn't require a Docker configuration
file for authentication, then defaults to false .
For example:
registryMirrors :
- endpoint : https://172.18.0.20:5000
caCertPath : /root/ca.crt
pullCredentialConfigPath : /root/.docker/config.json
Registry mirror
Optional
Mutable
registryMirrors.hosts
Optional. An array of domain names for hosts that are mirrored locally
for the given registry mirror ( endpoint ). When the
container runtime encounters pull requests for images from a specified
host, it checks the local registry mirror first. For additional
information, see
Create clusters from the registry mirror .
For example:
registryMirrors :
- endpoint : https://172.18.0.20:5000
caCertPath : /root/ca.crt
pullCredentialConfigPath : /root/.docker/config.json
hosts :
- somehost.io
- otherhost.io
Registry mirror
Optional
Mutable
Credentials
The cluster configuration file generated by bmctl
includes fields for specifying paths to credentials and keys files in
the local file system. These credentials and keys are needed to connect
your clusters to each other and to your Google Cloud project.
Note: These key-value pair fields are not valid elements of a
Kubernetes cluster custom resource. This format is only understood
by bmctl and not by standard Kubernetes tools. If you
want to use kubectl to apply changes to your cluster,
remove the credentials and keys fields.
For example:
gcrKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-gcr.json
sshPrivateKeyPath : /home/root-user/.ssh/id_rsa
gkeConnectAgentServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-connect.json
gkeConnectRegisterServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-register.json
cloudOperationsServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-cloud-ops.json
Credentials
Optional
Mutable
gcrKeyPath
String. The path to a service account key that has the required IAM permissions to access Artifact Registry resources.
Credentials
Optional
Mutable
sshPrivateKeyPath
String. The path to the SSH private key. SSH is required for Node access.
Credentials
Optional
Mutable
gkeConnectAgentServiceAccountKeyPath
String. The path to the agent service account key.
Google Distributed Cloud uses this service account to maintain a
connection between your on-premises clusters and Google Cloud.
For instructions on configuring this service account, see
Configuring
service accounts for use with Connect .
Credentials
Optional
Mutable
gkeConnectRegisterServiceAccountKeyPath
String. The path to the registration service account key.
Google Distributed Cloud uses this service account to register your user
clusters with Google Cloud.
For instructions on configuring this service account, see
Configuring
service accounts for use with Connect .
Credentials
Optional
Mutable
cloudOperationsServiceAccountKeyPath
String. The path to the operations service account key.
Google Distributed Cloud uses the operations service account to
authenticate with Google Cloud Observability for access to the
Logging API and the Monitoring API. With the
exception of user clusters, the operations service account key is
required. User clusters use the credentials that were specified for the
managing cluster (admin or hybrid).
You can't disable Cloud Logging and Cloud Monitoring for your
clusters.
For instructions on configuring this service account, see
Configure service accounts .
Credentials
Required
Mutable
ipv4
Defines the configuration for the IPv4 CIDR range. At least one of the
ipv4 or ipv6 fields must be provided for the
ClusterCidrConfig resource.
ClusterCIDRConfig resource
Optional
Immutable
ipv4.cidr
String. Sets the IPv4 node CIDR block. Nodes can only have one range
from each family. This CIDR block must match the pod CIDR described in
the Cluster resource.
For example:
ipv4 :
cidr : "10.1.0.0/16"
ClusterCIDRConfig resource
Required
Immutable
ipv4.perNodeMaskSize
Integer. Defines the mask size for the node IPv4 CIDR block. For
example, the value 24 translates to netmask
/24 . Ensure that the node's CIDR block netmask is larger
than the maximum amount of pods the kubelet can schedule, which is
defined in the kubelet's --max-pods flag.
ClusterCIDRConfig resource
Required
Immutable
ipv6
Defines the configuration for the IPv6 CIDR range. At least one of the
ipv4 or ipv6 fields must be provided for the
ClusterCidrConfig resource.
ClusterCIDRConfig resource
Optional
Immutable
ipv6.cidr
String. Sets the IPv6 node CIDR block. Nodes can only have one range
from each family.
For example:
ipv6 :
cidr : "2620:0:1000:2631:3:10:3:0/112"
ClusterCIDRConfig resource
Required
Immutable
ipv6.perNodeMaskSize
Integer. Defines the mask size for the node IPv6 CIDR block. For
example, the value 120 translates to netmask
/120 . Ensure that the node's CIDR block netmask is larger
than the maximum amount of pods the kubelet can schedule, which is
defined in the kubelet's --max-pods flag.
ClusterCIDRConfig resource
Required
Immutable
nodeSelector.matchLabels
Defines which nodes the CIDR configuration is applicable to. An empty
node selector functions as a default that applies to all nodes.
For example:
nodeSelector :
matchLabels :
baremetal.cluster.gke.io/node-pool : "workers"
ClusterCIDRConfig resource
Optional
Mutable
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
