---
title: "About VPC Flow Logs records \_|\_ Virtual Private Cloud \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vpc/docs/about-flow-logs-records
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/about-flow-logs-records
  title: "About VPC Flow Logs records \_|\_ Virtual Private Cloud \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Virtual Private Cloud
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
About VPC Flow Logs records
This page describes the VPC Flow Logs record format, including
which base and metadata fields are available. It also explains how you can use
log filtering so that only logs that match certain criteria are generated.
Record format
Log records contain base fields, which are the core fields of every log record,
and metadata fields that add additional information. Metadata fields may be
omitted to save storage costs.
Some log fields are in a multi-field format, with more than one piece of data
in a given field. For example, the connection field is of the IpConnection
format, which contains the source and destination IP address and port, plus the
protocol, in a single field. These multi-field fields are described below the
record format table.
The values for metadata fields aren't based on the data plane path;
they are approximations and might be missing or incorrect. Unlike metadata
fields, the values for base fields are taken directly from packet headers.
Field
Field format
Field type: Base or optional metadata
connection
IpConnection
5-tuple describing the flow.
Base
reporter
string
The side that reported the flow.
For VMs and serverless endpoints, the reporter can be
SRC or DEST .
For gateways such as VLAN attachments for Cloud Interconnect
and Cloud VPN tunnels, the reporter can be
SRC_GATEWAY or DEST_GATEWAY .
Base
rtt_msec
int64
Round-trip time (RTT) in milliseconds as measured during the aggregation
interval. This field is populated
as follows:
Measured only for TCP traffic
Populated for VMs and serverless endpoints
Not populated for VLAN attachments and Cloud VPN tunnels
The measured RTT is the time elapsed between sending a SEQ and
receiving a corresponding ACK.
Base
round_trip_time
Latencies
RTT in milliseconds with sub-millisecond precision as measured
during the aggregation interval. This field is populated for TCP
(for VMs and serverless endpoints) and Falcon traffic.
For TCP traffic, the measured latency is the time elapsed between
sending a SEQ and receiving a corresponding ACK.
For Falcon traffic, the latency is the hardware-measured
RTT.
Base
bytes_sent
int64
Estimated number of user payload bytes sent from the source to the
destination. 1
For packets with no user payload, the value is zero. 2
Base
packets_sent
int64
Estimated number of packets sent from the source to the
destination. 1
Base
start_time
string
Timestamp (RFC 3339 date string format) of the first observed packet
during the aggregated time interval.
Base
end_time
string
Timestamp (RFC 3339 date string format) of the last observed packet
during the aggregated time interval.
Base
Source and destination metadata fields
src_gateway
GatewayDetails
If the source of the flow is an on-premises or other cloud endpoint
that is connected to Google Cloud through a gateway such as a
VLAN attachment for Cloud Interconnect or a Cloud VPN
tunnel and either of the following conditions is met,
this field is populated with gateway details:
The source gateway is the reporter of the flow.
The destination of the flow is the reporter, and either of the
following is true:
The source gateway is in the same project as the
destination of the flow.
VPC Flow Logs is configured at the organization
level, and cross-project annotations aren't disabled. 3
Metadata
dest_gateway
GatewayDetails
If the destination of the flow is an on-premises or other cloud endpoint
that is connected to Google Cloud through a gateway such as a
VLAN attachment for Cloud Interconnect or a Cloud VPN
tunnel and either of the following conditions is met, this field is
populated with gateway details:
The destination gateway is the reporter of the flow.
The source of the flow is the reporter, and either of the
following is true:
The destination gateway is in the same project as the source
of the flow.
VPC Flow Logs is configured at the organization
level, and cross-project annotations aren't disabled. 3
Metadata
src_gke_details
GkeDetails
If the source of the flow is a Google Kubernetes Engine (GKE) endpoint,
this field is populated with GKE endpoint details.
Metadata
dest_gke_details
GkeDetails
If the destination of the flow is a GKE
endpoint, this field is populated with GKE endpoint
details.
Metadata
src_google_service
GoogleServiceDetails
If the source of the flow is a Google service, this field
is populated with service details.
Metadata
dest_google_service
GoogleServiceDetails
If the destination of the flow is a Google service, this
field is populated with service details.
Metadata
src_instance
InstanceDetails
If the source of the flow is a VM located in a VPC
network and either of the following conditions is met, this field is
populated with VM instance details:
The source VM is the reporter of the flow.
The destination of the flow is the reporter, and either of the
following is true:
The source VM, or the VPC network that
the source VM is attached to, is in the same
project as the destination of the flow.
VPC Flow Logs is configured at the organization
level, and cross-project annotations aren't disabled. 3
Metadata
dest_instance
InstanceDetails
If the destination of the flow is a VM located in a VPC
network and either of the following conditions is met,
this field is populated with VM instance details.
The destination VM is the reporter of the flow.
The source of the flow is the reporter, and either of the
following is true:
The destination VM, or the VPC network that
the destination VM is attached to, is in the same
project as the source of the flow.
VPC Flow Logs is configured at the organization
level, and cross-project annotations aren't disabled. 3
Metadata
src_location
GeographicDetails
If the source of the flow is a public IP address outside of
the VPC network, this field is populated with
available location metadata.
Metadata
dest_location
GeographicDetails
If the destination of the flow is a public IP address outside of
the VPC network, this field is populated with
available location metadata.
Metadata
src_serverless_details
ServerlessDetails
If the source of the flow is a serverless endpoint such
as a Cloud Run resource configured with Direct VPC
egress, this field is populated with serverless metadata.
Metadata
dest_serverless_details
ServerlessDetails
If the destination of the flow is a serverless endpoint such
as a Cloud Run resource configured with Direct VPC
egress, this field is populated with serverless metadata.
Metadata
src_vpc
VpcDetails
If the source of the flow is a VM or serverless endpoint located in a
VPC network and either of the following conditions is
met, this field is populated with VPC network details:
The source resource is the reporter of the flow.
The destination of the flow is the reporter, and either of the
following is true:
The source resource, or the VPC network that
the source resource is attached to, is in the same
project as the destination of the flow.
VPC Flow Logs is configured at the organization
level, and cross-project annotations aren't disabled. 3
Metadata
dest_vpc
VpcDetails
If the destination of the flow is a VM or serverless endpoint located
in a VPC network and either of the following conditions
is met, this field is populated with VPC network details:
The destination resource is the reporter of the flow.
The source of the flow is the reporter, and either of the
following is true:
The destination resource, or the VPC network
that the destination resource is attached to, is in the same
project as the source of the flow.
VPC Flow Logs is configured at the organization
level, and cross-project annotations aren't disabled. 3
Metadata
Other metadata fields
internet_routing_details
InternetRoutingDetails
If the flow is between Google Cloud and the internet,
this field is populated with routing details. Available only for
egress flows.
Metadata
load_balancing
LoadBalancingDetails
If the flow passes through a load balancer in one of the following
configurations, this field is populated with Cloud Load Balancing
details:
The reporter of the flow is the client of the load balancer,
and the load balancer type is
APPLICATION_LOAD_BALANCER ,
PROXY_NETWORK_LOAD_BALANCER ,
PASSTHROUGH_NETWORK_LOAD_BALANCER , or
PROTOCOL_FORWARDING .
The reporter of the flow is the backend of the load balancer,
and the load balancer type is
PASSTHROUGH_NETWORK_LOAD_BALANCER or
PROTOCOL_FORWARDING .
Metadata
network_service
NetworkServiceDetails
If the Differentiated Services Code Point (DSCP) header is set,
this field is populated with network service details.
Metadata
psc
PrivateServiceConnectDetails
If the flow passes through Private Service Connect
in either of the following configurations, this
field is populated with Private Service Connect
details:
The reporter of the Private Service Connect traffic
is a consumer and is using a
Private Service Connect
endpoint that targets a published service or global Google APIs.
The reporter of the Private Service Connect traffic
is a producer and is using an internal passthrough Network Load Balancer or internal
protocol forwarding.
Metadata
rdma_traffic_type
string
Type of RDMA traffic. Populated for GPU-to-GPU traffic between VMs.
Can be GPUDirect-TCPXO , Falcon , or
RoCE .
Metadata
1
Estimated total based on sampled packets. For best accuracy, aggregate logs
across longer time periods or multiple resources. For
more information about accuracy and sampling, see
VPC Flow Logs: Understanding byte and packet counts
and Log sampling and processing .
2
For Falcon traffic, the bytes sent value is calculated differently for the
source and destination:
If the source VM is the reporter, the reported bytes value is the sum
of the user payload bytes and packet header bytes sent. This value is always
greater than zero, even for packets containing no user payload.
If the destination VM is the reporter, the reported bytes value is
the user payload bytes received and forwarded to the application layer.
For packets with no user payload, the bytes value is zero.
3
If VPC Flow Logs is configured at the organization level, by
default, log records for cross-project flows include details about both sides
of the flow. Cross-project annotations are available for flows through
Shared VPC, VPC Network Peering, and Network Connectivity Center. For more
information, see
Cross-project annotations .
IpConnection field format
Field
Type
Description
protocol
int32
The IANA protocol number:
Populated for TCP, UDP, ICMP, ESP, and GRE flows
Not populated for RDMA flows
src_ip
string
Source IP address. Populated for all flows.
dest_ip
string
Destination IP address. Populated for all flows.
src_port
int32
Source port:
Populated for TCP and UDP flows
Not populated for ICMP, ESP, GRE, and RDMA flows
dest_port
int32
Destination port:
Populated for TCP and UDP flows
Not populated for ICMP, ESP, GRE, and RDMA flows
GatewayDetails field format
Field
Type
Description
project_id
string
Google Cloud project ID of the gateway
location
string
Region of the gateway
name
string
Name of the gateway
type
string
Type of the gateway. Can be INTERCONNECT_ATTACHMENT or
VPN_TUNNEL .
vpc
VpcDetails
VPC network details of the gateway
interconnect_name
string
If the type of the gateway is INTERCONNECT_ATTACHMENT ,
this field is populated with the name of the Cloud Interconnect
connection on which the VLAN attachment is configured.
interconnect_project_number
int64
If the type of the gateway is INTERCONNECT_ATTACHMENT ,
this field is populated with the Google Cloud project number of the
Cloud Interconnect connection on which the VLAN attachment is
configured.
GkeDetails field format
Field
Type
Description
cluster
ClusterDetails
GKE cluster metadata
pod
PodDetails
GKE Pod metadata, populated when the source or
destination of the traffic is a Pod
service
ServiceDetails
GKE Service metadata, populated in Service endpoints
only. The record contains up to two Services. If there are more than two
relevant Services, this field contains a single Service with a special
MANY_SERVICES marker.
ClusterDetails field format
Field
Type
Description
cluster_location
string
Location of the cluster. This can be a zone or a region depending if the
cluster is zonal or regional.
cluster_name
string
GKE cluster name.
PodDetails field format
Field
Type
Description
pod_name
string
Name of the Pod
pod_namespace
string
Namespace of the Pod
workload
WorkloadDetails
Metadata about the top-level workload resource that controls the
Pod
WorkloadDetails field format
Field
Type
Description
workload_name
string
Name of the top-level workload controller
workload_type
string
Type of the top-level workload controller. Can be
DEPLOYMENT , REPLICA_SET ,
STATEFUL_SET , DAEMON_SET , JOB ,
CRON_JOB , or
REPLICATION_CONTROLLER .
ServiceDetails field format
Field
Type
Description
service_name
string
Name of the Service. If there are more than two relevant Services, the
field is set to a special MANY_SERVICES marker.
service_namespace
string
Namespace of the Service
Example:
If there are two services, the Service field looks like this:
service: [
0: {
service_name: "my-lb-service"
service_namespace: "default"
}
1: {
service_name: "my-lb-service2"
service_namespace: "default"
}
]
If there are more than two services, the Service field looks like this:
service: [
0: {
service_name: "MANY_SERVICES"
}
]
GoogleServiceDetails field format
Field
Type
Description
type
string
The type of service, either GOOGLE_API or
GOOGLE_VPC_HOSTED_SERVICE :
GOOGLE_API : this type is used for the following
Google APIs and services:
Google APIs that are accessed from VMs with external IP addresses
Google APIs that are accessed through Private Google Access or
Private Google Access for on-premises hosts
Global Google APIs that are accessed through Private Service Connect endpoints
GOOGLE_VPC_HOSTED_SERVICE : this type is used for
VPC-hosted services such as the following:
Google services that are accessed through public IP
connectivity—for example,
Cloud SQL
Google services that are published through Private Service Connect
Google services that are published through private services access
service_name
string
Name of the service. For example,
pubsub.googleapis.com .
Limitations:
The service name might be missing for requests to Google APIs
that take longer than 60 seconds to complete.
If a VM or gateway uses the same 5-tuple to connect to multiple
services, the log record contains the name of only one of the
services, selected randomly.
connectivity
string
Access method. For the GOOGLE_API type, the
connectivity field can be one of the following:
PUBLIC_IP , if the API is accessed from a VM with an
external IP address
PRIVATE_GOOGLE_ACCESS or
DIRECT_CONNECTIVITY , if the API is accessed through
Private Google Access
PRIVATE_SERVICE_CONNECT_FOR_GOOGLE_APIS ,
if the API is accessed through Private Service Connect
endpoints
For the GOOGLE_VPC_HOSTED_SERVICE type, the
connectivity field can be one of the following:
PUBLIC_IP , if the service is accessed through
public IP connectivity
PRIVATE_SERVICES_ACCESS , if the service is accessed
through private services access
PRIVATE_SERVICE_CONNECT_ENDPOINT or
PRIVATE_SERVICE_CONNECT_INTERFACE ,
if the service is accessed through
Private Service Connect
private_domain
string
Private domain or Private Service Connect API
bundle. The private_domain field can be one of the following:
For the PRIVATE_GOOGLE_ACCESS access method:
private.googleapis.com or
restricted.googleapis.com
For the DIRECT_CONNECTIVITY access method:
restricted.googleapis.com
For the PRIVATE_SERVICE_CONNECT_FOR_GOOGLE_APIS
access method:
all-apis or vpc-sc
InstanceDetails field format
Field
Type
Description
project_id
string
ID of the Google Cloud project that contains the VM resource
region
string
Region of the VM
vm_name
string
Instance name of the VM
zone
string
Zone of the VM
managed_instance_group
InstanceGroupDetails
If the VM is part of a managed instance group, this field is populated
with instance group details.
InstanceGroupDetails field format
Field
Type
Description
name
string
Name of the instance group
region
string
If the instance group is regional, this field is populated with the
region of the instance group.
zone
string
If the instance group is zonal, this field is populated with the
zone of the instance group.
GeographicDetails field format
Field
Type
Description
asn
int32
The ASN of the external network to which this
endpoint belongs.
city
string
City for external endpoints
continent
string
Continent for external endpoints
country
string
Country for external endpoints, represented as
ISO 3166-1 Alpha-3 country codes
region
string
Region for external endpoints
VpcDetails field format
Field
Type
Description
project_id
string
ID of the Google Cloud project that contains the VPC.
In a Shared VPC configuration, the project ID is the ID
of the host project.
subnetwork_name
string
Name of the subnet, if applicable
subnetwork_region
string
Region of the subnet, if applicable
vpc_name
string
Name of the network
InternetRoutingDetails field format
Field
Type
Description
egress_as_path
AsPath
List of relevant AS paths. If there
are multiple AS paths available to the flow, the field might contain
more than one AS path.
AsPath field format
Field
Type
Description
as_details
AsDetails
List of AS details for all systems in the AS path. The list starts
from the first AS that is external to Google Cloud's network and
ends with the AS to which the remote IP address belongs.
AsDetails field format
Field
Type
Description
asn
uint32
The autonomous system number (ASN) of the AS
Latencies
Field
Type
Description
median_msec
double
The median latency in milliseconds as measured during the aggregation
interval.
LoadBalancingDetails field format
Field
Type
Description
forwarding_rule_project_id
string
Google Cloud project ID of the forwarding rule
reporter
string
Cloud Load Balancing reporter. Can be either
CLIENT or BACKEND .
If the reporter of the flow is the client of the
load balancer, this field is set to
CLIENT .
If the reporter of the flow is the backend of the
load balancer, this field is set to BACKEND .
type
string
Load balancer type. Can be APPLICATION_LOAD_BALANCER ,
PROXY_NETWORK_LOAD_BALANCER ,
PASSTHROUGH_NETWORK_LOAD_BALANCER ,
or PROTOCOL_FORWARDING .
scheme
string
Load balancer scheme. Can be EXTERNAL_MANAGED ,
INTERNAL_MANAGED , EXTERNAL ,
INTERNAL , or INTERNAL_SELF_MANAGED .
url_map_name
string
Name of the URL map. Populated if the type of the
load balancer is APPLICATION_LOAD_BALANCER .
forwarding_rule_name
string
Name of the forwarding rule
backend_service_name
string
Name of the backend service. Populated if
the reporter is BACKEND and load balancer type is
PASSTHROUGH_NETWORK_LOAD_BALANCER . If the backend group type
is TARGET_POOL , this field isn't populated.
backend_group_name
string
Name of the backend group. Populated if
the reporter is BACKEND and load balancer type is
PASSTHROUGH_NETWORK_LOAD_BALANCER .
backend_group_type
string
Type of the backend group. Can be INSTANCE_GROUP ,
NETWORK_ENDPOINT_GROUP , or TARGET_POOL .
Populated if the reporter is BACKEND and the load balancer
type is PASSTHROUGH_NETWORK_LOAD_BALANCER .
backend_group_location
string
Location of the backend group. Can be a zone or a region
depending on whether the scope of the backend group is zonal or regional.
Populated if the reporter is BACKEND and the load balancer
type is PASSTHROUGH_NETWORK_LOAD_BALANCER . If the backend
group type is TARGET_POOL , this field isn't populated.
vpc
VpcDetails
VPC network details of the load balancer
NetworkServiceDetails field format
Field
Type
Description
dscp
int32
If the Differentiated Services field is present in packet headers,
this field is populated with the DSCP value.
PrivateServiceConnectDetails field format
Field
Type
Description
reporter
string
Private Service Connect reporter.
Can be either CONSUMER or
PRODUCER .
psc_endpoint
PrivateServiceConnectEndpointDetails
Endpoint details. Populated if the reporter is CONSUMER .
psc_attachment
PrivateServiceConnectAttachmentDetails
Service attachment details. Populated if the traffic
flow includes a Private Service Connect producer.
PrivateServiceConnectEndpointDetails field format
Field
Type
Description
project_id
string
Google Cloud project ID of the Private Service Connect
endpoint
region
string
Region of the endpoint. Not populated if the target
service type is GLOBAL_GOOGLE_APIS .
psc_connection_id
string
Private Service Connect connection ID
target_service_type
string
Target service type. Can be either GLOBAL_GOOGLE_APIS or
PUBLISHED_SERVICE .
vpc
VpcDetails
VPC network details of the
Private Service Connect endpoint
PrivateServiceConnectAttachmentDetails field format
Field
Type
Description
project_id
string
Google Cloud project ID of the service attachment
region
string
Region of the service attachment
vpc
VpcDetails
VPC network details of the
service attachment
ServerlessDetails field format
Field
Type
Description
project_id
string
ID of the Google Cloud project that contains the
Cloud Run resource. In a Shared VPC configuration,
the project ID is usually the ID of the service project.
region
string
Region of the Cloud Run resource
One of the following:
cloud_run_service_details
cloud_run_job_details
cloud_run_worker_pool_details
One of the following:
CloudRunServiceDetails
CloudRunJobDetails
CloudRunWorkerPoolDetails
Name of the Cloud Run resource
CloudRunServiceDetails field format
Field
Type
Description
service_name
string
Name of the Cloud Run service
CloudRunJobDetails field format
Field
Type
Description
job_name
string
Name of the Cloud Run job
CloudRunWorkerPoolDetails field format
Field
Type
Description
worker_pool_name
string
Name of the Cloud Run worker pool
Metadata annotations
Log records contain base fields and metadata fields. The Record
format
section lists which fields are type metadata and which are type base. All base
fields are always included. You can customize which metadata fields you keep.
If you select all metadata, all metadata fields in the VPC Flow Logs
record format are included in the flow logs. When new metadata fields are added
to the record format, the flow logs automatically include the new fields.
If you select no metadata, this omits all metadata fields.
If you select custom metadata, you can specify the metadata fields that you
want to include by the parent field, such as src_vpc , or by their full names,
such as src_vpc.project_id
When new metadata fields are added to the
record format, they're excluded from the flow logs unless they're
within a parent field that you have specified to include.
If you specify custom metadata using parent fields, when new metadata
fields are added to the record format within that parent field, the flow logs
will automatically include the new fields.
If you specify custom metadata using the full name of the field, new
metadata fields that are added to the parent field are excluded from the flow
logs.
For information about how to customize metadata fields, see
Enable VPC Flow Logs
or Update VPC Flow Logs configuration .
GKE metadata annotations
Flows that have an endpoint in a GKE Cluster can be annotated
with GKE metadata annotations , which can include
details of the Cluster, Pod, and Service of the endpoint.
GKE Service annotations
Traffic sent to a ClusterIP, NodePort, or LoadBalancer can receive
Service annotations. If sent to a NodePort or LoadBalancer, the flow receives
the Service annotation on both hops of the connection.
Traffic sent directly to a Pod's Service port is annotated with a Service
annotation on the destination endpoint.
Traffic sent to a Pod's Service port where the Pod is backing more
than one Service on the same Service port is annotated with multiple Services
on the destination endpoint. This is limited to two Services. If there are more
than that, the endpoint will be annotated with a special MANY_SERVICES
marker.
Pod annotations on internet traffic
Traffic between a Pod and the internet doesn't receive Pod annotations by
default. VPC Flow Logs can't add Pod annotations because,
for packets to the internet, the masquerade agent translates the
Pod IP address to the node IP address before VPC Flow Logs sees
the packet.
Because of the masquerade, Pod annotations are only visible if the destinations
are within either the default non-masquerade
destinations
or in a custom nonMasqueradeCIDRs
list .
If you include internet destinations in a custom nonMasqueradeCIDRs list, you
need to provide a way for the internal Pod IP addresses to be translated before
they are delivered to the internet. For both private and non-private clusters,
you can use Cloud NAT. See GKE
interaction for more details.
Cross-project annotations
If VPC Flow Logs is
enabled at the organization level ,
flows through Shared VPC, VPC Network Peering, and Network Connectivity Center
are annotated with cross-project annotations. Cross-project annotations are
enabled by default. You can optionally disable these annotations.
If cross-project annotations are enabled, log records for flows between
resources in different projects
include information about both sides of the flow .
If cross-project annotations are disabled, log records include information
only about the reporter of the flow.
If VPC Flow Logs is enabled at the project level,
flows between resources in different projects aren't annotated with
cross-project annotations.
Log filtering
When you enable VPC Flow Logs, you can set a filter based on both base and
metadata fields that only preserves logs that match the filter. All other logs
are discarded before being written to Logging.
You can filter on any subset of fields listed in
Record format ,
except for the following fields:
rtt_msec
bytes_sent
packets_sent
start_time
end_time
VPC Flow Logs filtering uses CEL, an embedded expression language for
attribute-based logic expressions. Filter expressions for VPC Flow Logs
have a limit of 2,048 characters. For more information, see
Supported CEL logic operators .
For more information about CEL, see the CEL
introduction
and the language
definition .
The generation filter feature supports a limited subset of CEL syntax.
To create a VPC Flow Logs configuration
that uses log filtering, see
Enable VPC Flow Logs .
To configure log filtering for an existing VPC Flow Logs
configuration, see
Update VPC Flow Logs configuration .
For examples of log filters, see
Examples of log filters .
Supported CEL logic operators
Expression
Supported types
Description
true, false
boolean
Boolean constants
x == y
x != y
boolean, int, string
Comparison operators
Example: connection.protocol == 6
x && y
x || y
boolean
Boolean logic operators
Example: connection.protocol == 6 &&
src_instance.vm_name == "vm_1"
!x
boolean
Negation
1, 2.0, 0, ...
int
Constant numeric literals
x + y
string
String concatenation
"foo", 'foo', ...
string
Constant string literal
x.lower()
string
Returns the lowercase value of the string
x.upper()
string
Returns the uppercase value of the string
x.contains(y)
string
Returns true if the string contains the specified substring
x.startsWith(y)
string
Returns true if the string begins with the specified substring
x.endsWith(y)
string
Returns true if the string ends with the specified substring
inIpRange(X, Y)
string
Returns true if X is an IP and Y is an IP range that contains X
Example: inIpRange("1.2.3.1", "1.2.3.0/24")
x.containsFieldValue(y)
x: list
y: map(string, string)
Returns true if the list contains an object with fields that match the
specified key-value pairs
Example: dest_gke_details.service.containsFieldValue({'service_name':
'service1', 'service_namespace': 'namespace1'})
has(x)
string
Returns true if the field is present.
What's next
Configure VPC Flow Logs
Access flow logs
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
