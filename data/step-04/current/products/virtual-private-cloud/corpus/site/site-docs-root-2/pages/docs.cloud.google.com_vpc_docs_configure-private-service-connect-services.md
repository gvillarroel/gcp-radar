---
title: "Access published services through endpoints \_|\_ Virtual Private Cloud \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services
  title: "Access published services through endpoints \_|\_ Virtual Private Cloud\
    \ \_|\_ Google Cloud Documentation"
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
Access published services through endpoints
This document explains how to access
services in another
VPC network by using Private Service Connect
endpoints. You can connect to your own services, or those provided by other
service producers, including by Google.
For more information about services, see publish managed
services .
Before you begin
Read About connecting to services by using
endpoints ,
including limitations.
You must
enable
the Compute Engine API in your
project.
You must
enable
the Service Directory API
in your project.
You must
enable
the Cloud DNS API in your project.
Identify or create a regular subnet to use to
assign an IP address for the endpoint.
The subnet must be in the same region as the service that you want to
connect to.
You can use an IPv4 address from an IPv4-only subnet or a dual-stack
subnet.
You can use an IPv6 address from an IPv6-only
or dual-stack subnet if the subnet has
an internal IPv6 address range .
The IP version of the IP address affects which published services the
endpoint can connect to. For more information, see IP version
translation .
Egress firewall rules must permit traffic to the internal IP address
of the endpoint. The implied allow
egress firewall rule
permits egress to any destination IP address. If you've created any
egress deny firewall rules in your VPC network, or if
you've created hierarchical firewall policies which modify the
implied allowed egress behavior, access to the endpoint might be
affected. Create a specific egress allow firewall rule or policy to
permit traffic to the service endpoint's internal IP address
destination.
You must have the URI of the service attachment for the service. For
example,
projects/ SERVICE_PROJECT /regions/ REGION /serviceAttachments/ SERVICE_NAME
Required roles
To get the permissions that
you need to access published services through endpoints,
ask your administrator to grant you the
following IAM roles:
Create, view, and delete endpoints in your project:
Compute Network Admin ( roles/compute.networkAdmin )
on your project
Create, view, and delete endpoints in a Shared VPC service project:
Compute Network Admin ( roles/compute.networkAdmin )
on the service project
Compute Network User ( roles/compute.networkUser )
on the host project
Automatically or manually configure DNS entries for an endpoint in your project:
DNS Administrator ( roles/dns.admin )
on your project
Service Directory Editor ( roles/servicedirectory.editor )
on your project
Automatically or manually configure DNS entries for an endpoint in a Shared VPC service project:
DNS Administrator ( roles/dns.admin )
on the service project
Service Directory Editor ( roles/servicedirectory.editor )
on the service project
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to access published services through endpoints. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to access published services through endpoints:
To create, view, and delete endpoints in your project:
compute.networks.use
on your project
compute.subnetworks.use
on your project
compute.addresses.createInternal
on your project
compute.addresses.deleteInternal
on your project
compute.addresses.get
on your project
compute.addresses.list
on your project
compute.addresses.use
on your project
compute.forwardingRules.create
on your project
compute.forwardingRules.delete
on your project
compute.forwardingRules.get
on your project
compute.forwardingRules.list
on your project
compute.forwardingRules.pscCreate
on your project
compute.forwardingRules.pscDelete
on your project
compute.regionOperations.get
on your project
servicedirectory.namespaces.create
on your project
servicedirectory.namespaces.delete
on your project
servicedirectory.services.create
on your project
servicedirectory.services.delete
on your project
To create, view, and delete endpoints in a service project that is attached to a Shared VPC network:
compute.addresses.createInternal
on the service project
compute.addresses.deleteInternal
on the service project
compute.addresses.get
on the service project
compute.addresses.list
on the service project
compute.addresses.use
on the service project
compute.forwardingRules.create
on the service project
compute.forwardingRules.delete
on the service project
compute.forwardingRules.get
on the service project
compute.forwardingRules.list
on the service project
compute.forwardingRules.pscCreate
on the service project
compute.forwardingRules.pscDelete
on the service project
compute.regionOperations.get
on the service project
servicedirectory.namespaces.create
on the service project
servicedirectory.namespaces.delete
on the service project
servicedirectory.services.create
on the service project
servicedirectory.services.delete
on the service project
compute.networks.use
on the host project
compute.subnetworks.use
on the host project
To automatically or manually configure DNS entries for an endpoint in your project:
dns.managedZones.create
on your project
dns.managedZones.delete
on your project
dns.networks.bindPrivateDNSZone
on your project
servicedirectory.namespaces.associatePrivateZone
on your project
To automatically or manually configure DNS entries for an endpoint in a Shared VPC network:
dns.managedZones.create
on the service project
dns.managedZones.delete
on the service project
dns.networks.bindPrivateDNSZone
on the service project
servicedirectory.namespaces.associatePrivateZone
on the service project
To access the Private Service Connect page in the Google Cloud console:
compute.forwardingRules.list
on your project
compute.globalForwardingRules.list
on your project
compute.networkEndpointGroups.list
on your project
compute.regionNetworkEndpointGroups.list
on your project
compute.urlMaps.list
on your project
compute.backendService.list
on your project
compute.regionBackendService.list
on your project
compute.backendBucket.list
on your project
compute.targetHttpProxy.list
on your project
compute.targetHttpsProxy.list
on your project
compute.regionTargetTcpProxy.list
on your project
compute.targetTcpProxy.list
on your project
compute.targetSslProxy.list
on your project
compute.sslCertificate.list
on your project
compute.sslPolicy.list
on your project
compute.regionHealthCheck.list
on your project
compute.healthCheck.list
on your project
compute.httpHealthCheck.list
on your project
compute.httpsHealthCheck.list
on your project
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Create an endpoint
An endpoint connects to services in
another VPC network using a
Private Service Connect forwarding rule. Each forwarding rule
counts toward the per project quota for
Private Service Connect forwarding rules to access services in
another VPC network.
When you create an endpoint, it is
automatically registered with
Service Directory , using
a namespace that you choose, or the default namespace, goog-psc-default .
If you want to make the endpoint available from more than one region, turn on
global access .
You can only update the global access field of endpoints for published services.
If you want to update other fields, delete the endpoint, and then create a new
one.
Console
In the Google Cloud console, go to the Private Service Connect page.
Go to Private Service Connect
Click the Connected endpoints tab.
Click Connect endpoint .
For Target , select Published service .
For Target service , enter the service attachment URI that you want to connect to.
The service attachment URI is in this format:
projects/ SERVICE_PROJECT /regions/ REGION /serviceAttachments/ SERVICE_NAME
For Endpoint name , enter a name to use for the endpoint.
Select a Network for the endpoint.
Select a Subnetwork for the endpoint.
Select an IP address for the endpoint.
If you need a new IP address, you can create one:
Click the IP address drop-down menu and select Create IP address .
Enter a Name and optional Description for the IP address.
Select an IP version .
If you're creating an IPv4 address, select Assign automatically or
Let me choose .
If you selected Let me choose , enter the Custom IP address
you want to use.
Click Reserve .
To make the endpoint available from any region, select Enable global
access .
Select a Namespace from the drop-down list or create a new namespace.
The Region is populated based on the selected
subnetwork.
Click Add endpoint .
gcloud
Reserve an internal IP address to assign to the endpoint.
gcloud compute addresses create ADDRESS_NAME \
--region= REGION \
--subnet= SUBNET \
--ip-version= IP_VERSION
Replace the following:
ADDRESS_NAME : the name to assign to the
reserved IP address.
REGION : the region for the endpoint IP address.
This must be the same region that contains the service producer's
service attachment.
SUBNET : the name of the subnet for the endpoint
IP address.
IP_VERSION : the IP version of the IP address, which
can be either IPV4 or IPV6 . IPV4 is the default. To specify
IPV6 , the IP address must be connected to a
subnet with an internal IPv6 address range .
Find the reserved IP address.
gcloud compute addresses list --filter="name= ADDRESS_NAME "
Create a forwarding rule to connect the endpoint to the service
producer's service attachment. By default, endpoints are available
only from their own region. To make an endpoint available from any
region, use the --allow-psc-global-access flag.
Create an endpoint that can be accessed only from its own region.
gcloud compute forwarding-rules create ENDPOINT_NAME \
--region= REGION \
--network= NETWORK_NAME \
--address= ADDRESS_NAME \
--target-service-attachment= SERVICE_ATTACHMENT \
[ --service-directory-registration=projects/ PROJECT_ID /locations/ REGION /namespaces/ NAMESPACE ]
Create an endpoint that can be accessed from any region.
gcloud compute forwarding-rules create ENDPOINT_NAME \
--region= REGION \
--network= NETWORK_NAME \
--address= ADDRESS_NAME \
--target-service-attachment= SERVICE_ATTACHMENT \
--allow-psc-global-access \
[ --service-directory-registration=projects/ PROJECT_ID /locations/ REGION /namespaces/ NAMESPACE ]
Replace the following:
ENDPOINT_NAME : the name to assign to the endpoint.
REGION : the region for the endpoint. This must be
the same region that contains the service producer's service attachment.
NETWORK_NAME : the name of the VPC
network for the endpoint.
ADDRESS_NAME : the name of the reserved address.
SERVICE_ATTACHMENT : the URI of the service
producer's service attachment. For example:
projects/ SERVICE_PROJECT /regions/ REGION /serviceAttachments/ SERVICE_NAME
PROJECT_ID : your project ID.
NAMESPACE : the Service Directory
namespace that you want to use. If you specify a namespace that doesn't
exist, the namespace is created.
If you omit the --service-directory-registration flag, the default
namespace of goog-psc-default is used.
API
Reserve an internal IP address to assign to the endpoint.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /addresses
{
"name": " ADDRESS_NAME ",
"addressType": "INTERNAL",
"subnetwork": " SUBNET_URI ",
"ipVersion": " IP_VERSION "
}
Replace the following:
PROJECT_ID : your project ID.
REGION : the region for the endpoint. This must be
the same region that contains the service producer's service attachment.
ADDRESS_NAME : the name to assign to the
reserved IP address.
SUBNET_URI : the subnet for the
IP address. Use the subnetworks.list
method or gcloud
compute networks subnets list --uri to find the URLs of your networks.
IP_VERSION : the IP version of the IP address, which
can be either IPV4 or IPV6 . IPV4 is the default. To specify
IPV6 , the IP address must be connected to a
subnet with an internal IPv6 address range .
Create a forwarding rule to connect the endpoint to the service
producer's service attachment. By default, endpoints are available
only from their own region. To make an endpoint available from any
region, set allowPscGlobalAccess to true .
Create an endpoint that can be accessed only from its own region.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /forwardingRules
{
"name": " ENDPOINT_NAME ",
"IPAddress": " ADDRESS_URI ",
"target": " SERVICE_ATTACHMENT ",
"network": " NETWORK_URI ",
"serviceDirectoryRegistrations": [
{
"namespace": " NAMESPACE "
}
]
}
Create an endpoint that can be accessed from any region.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /forwardingRules
{
"name": " ENDPOINT_NAME ",
"IPAddress": " ADDRESS_URI ",
"target": " SERVICE_ATTACHMENT ",
"network": " NETWORK_URI ",
"allowPscGlobalAccess": true,
"serviceDirectoryRegistrations": [
{
"namespace": " NAMESPACE "
}
]
}
Replace the following:
PROJECT_ID : your project ID.
REGION : the region for the endpoint.
ENDPOINT_NAME : the name to assign to the endpoint.
ADDRESS_URI : the URI of the reserved address on the
associated network. Use the addresses.list
method or gcloud
compute addresses list --uri to find the URL of your reserved
address.
SERVICE_ATTACHMENT : the URI of the service producer's
service attachment. For example:
projects/ SERVICE_PROJECT /regions/ REGION /serviceAttachments/ SERVICE_NAME
NETWORK_URI : the VPC network for the
endpoint. Use the network.list
method or gcloud
compute networks list --uri to find the URI of your network.
NAMESPACE : the namespace for the endpoint. If you
specify a namespace that doesn't exist, the namespace is created. If you
omit the namespace field, the default namespace of goog-psc-default is
assigned.
Create an endpoint with an IP address from a Shared VPC network
Service Project Admins can create
endpoints in Shared VPC service
projects that use IP addresses from connected
Shared VPC networks .
Creating endpoints of this type is not available in the Google Cloud console. You
must use the Google Cloud CLI or send an API request. For more information, see
Shared VPC .
This example shows how to create an endpoint with an IP address from a
Shared VPC network that can be accessed from a single region. To enable
global access, or to choose a namespace for Service Directory, see
Create an endpoint .
gcloud
To reserve an internal IP address to assign to the endpoint, do one of
the following:
In the service project, reserve a static internal IPv4 or IPv6
address from
a shared subnet of the Shared VPC network.
In the host project, ask a
Shared VPC Admin to
reserve a static internal IPv4 or IPv6 address
from a shared subnet of the Shared VPC network.
The IP address must be in the same region as the service producer's
service attachment.
To create the endpoint in the service project, do one of the following.
If you have permission to use all subnets in the host project, use
the following command:
gcloud compute forwarding-rules create ENDPOINT_NAME \
--region= REGION \
--network=projects/ HOST_PROJECT /global/networks/ HOST_NETWORK \
--address=projects/ ADDRESS_PROJECT /regions/ REGION /addresses/ ADDRESS_NAME \
--target-service-attachment= SERVICE_ATTACHMENT
Replace the following:
ENDPOINT_NAME : the name to assign to the
endpoint.
REGION : the region for the endpoint. This must be
the same region that contains the service producer's service
attachment.
HOST_PROJECT : the project ID of the
Shared VPC network's project.
HOST_NETWORK : the name of the
Shared VPC
network that contains the endpoint's IP address.
ADDRESS_PROJECT : the ID of the project that you
reserved the IP address in. This can be either the service project
or the host project.
ADDRESS_NAME : the name of the reserved IP
address.
SERVICE_ATTACHMENT : the URI of the service
producer's service attachment. For example:
projects/ SERVICE_PROJECT /regions/ REGION /serviceAttachments/ SERVICE_NAME
If you have permission to use only some subnets in the host project,
specify a shared subnet by using the following command:
gcloud compute forwarding-rules create ENDPOINT_NAME \
--region= REGION \
--subnet=projects/ HOST_PROJECT /regions/ REGION /subnetworks/ HOST_SUBNET \
--address=projects/ ADDRESS_PROJECT /regions/ REGION /addresses/ ADDRESS_NAME \
--target-service-attachment= SERVICE_ATTACHMENT
Replace HOST_SUBNET with the name of the subnet that
contains the endpoint's IP address.
API
To reserve an internal IP address to assign to the endpoint, do one of
the following:
In the service project, reserve a static internal IPv4 or IPv6
address from
a shared subnet of the Shared VPC network.
In the host project, ask a host project admin to reserve a static
internal IPv4 or IPv6
address
from a shared subnet of the Shared VPC network.
The IP address must be in the same region as the service producer's service
attachment.
To create the endpoint in the service project, do one of the following.
If you have permission to use all subnets in the host project, make
the following request:
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT /regions/ REGION /forwardingRules
{
"name": " ENDPOINT_NAME ",
"IPAddress": "projects/ ADDRESS_PROJECT /regions/ REGION /addresses/ ADDRESS_NAME ",
"target": " SERVICE_ATTACHMENT ",
"network": "projects/ HOST_PROJECT /global/networks/ HOST_NETWORK "
}
Replace the following:
PROJECT : the service project ID.
REGION : the region for the endpoint. This
must be the same region that contains the service producer's
service attachment.
ENDPOINT_NAME : the name to assign to the
endpoint.
ADDRESS_PROJECT : the ID of the project
that you reserved the IP address in. This can be either the
service project or the host project.
ADDRESS_NAME : the name of the reserved IP
address.
SERVICE_ATTACHMENT : the URI of the
service producer's service attachment. For example:
projects/ SERVICE_PROJECT /regions/ REGION /serviceAttachments/ SERVICE_NAME
HOST_PROJECT : the project ID of the
Shared VPC network's project.
HOST_NETWORK : the name of the
Shared VPC network that contains the endpoint's IP
address.
If you have permission to use only some subnets in the host project,
specify a shared subnet by making the following request:
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT /regions/ REGION /forwardingRules
{
"name": " ENDPOINT_NAME ",
"IPAddress": "projects/ ADDRESS_PROJECT /regions/ REGION /addresses/ ADDRESS_NAME ",
"target": " SERVICE_ATTACHMENT ",
"subnetwork": "projects/ HOST_PROJECT /regions/ REGION /subnetworks/ HOST_SUBNET "
}
Replace HOST_SUBNET with the name of the subnet
that contains the endpoint's IP address.
List endpoints
You can list all configured endpoints.
Console
In the Google Cloud console, go to the Private Service Connect page.
Go to Private Service Connect
Click the Connected endpoints tab.
The endpoints are
displayed.
gcloud
gcloud compute forwarding-rules list \
--filter 'target~serviceAttachments'
The output is similar to the following:
NAME REGION IP_ADDRESS IP_PROTOCOL TARGET
RULE IP TCP REGION /serviceAttachments/ SERVICE_NAME
API
This API call returns all forwarding rules, not only
endpoints used to access services.
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /forwardingRules
Replace the following:
PROJECT_ID : the project that contains the endpoint.
REGION : the region for the endpoint.
View endpoint details
You can view all the configuration details of an
endpoint, including the endpoint's connection status
and URI.
To find a Private Service Connect endpoint's ID-based URI, use the
Google Cloud CLI or send an API request.
The ID-based URI is displayed in the selfLinkWithId field. The service
producer might need this URI if the service attachment's consumer accept list is
configured to accept consumers based on individual
Private Service Connect endpoints.
Console
In the Google Cloud console, go to the Private Service Connect page.
Go to Private Service Connect
Click the Connected endpoints tab.
Click the endpoint that you want to view.
gcloud
gcloud compute forwarding-rules describe \
ENDPOINT_NAME --region= REGION
Replace the following:
ENDPOINT_NAME : the name of the endpoint.
REGION : the region for the endpoint.
API
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /forwardingRules/ ENDPOINT_NAME
Replace the following:
PROJECT_ID : the project that contains the endpoint.
REGION : the region for the endpoint.
ENDPOINT_NAME : the name of the endpoint.
Label an endpoint
You can manage labels for endpoints. For detailed instructions, see
labeling resources .
Delete an endpoint
You can delete an endpoint.
However, the following Service Directory configurations are not
deleted when you delete the endpoint:
Service Directory namespace
Service Directory DNS zone
The Service Directory namespace and
Service Directory DNS zone can be used by other services. Check that
the namespace is empty before you delete the Service Directory
namespace
or delete the Service Directory DNS
zone .
Note: When you delete a project, all resources in the project, including
endpoints, are marked for deletion.
However, the resources are not immediately deleted. For more information about
project deletion, see Shutting down
projects .
Console
In the Google Cloud console, go to the Private Service Connect page.
Go to Private Service Connect
Click the Connected endpoints tab.
Select the endpoint that you want to
delete, and then click Delete .
gcloud
gcloud compute forwarding-rules delete ENDPOINT_NAME \
--region= REGION
Replace the following:
ENDPOINT_NAME : the name of the endpoint.
REGION : the region for the endpoint.
API
DELETE https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /forwardingRules/ ENDPOINT_NAME
Replace the following:
PROJECT_ID : the project that contains the endpoint.
REGION : the region for the endpoint.
ENDPOINT_NAME : the name of the endpoint.
Access endpoints from hybrid networks
Clients in networks that are connected to Google Cloud with VLAN
attachments for Cloud Interconnect or Cloud VPN tunnels can reach
Private Service Connect endpoints.
The VLAN attachment or Cloud VPN tunnel must terminate in the same
VPC network (or Shared VPC network) as the endpoint.
Clients in peered VPC networks cannot reach endpoints.
Client traffic from VLAN attachments or Cloud VPN tunnels can reach
endpoints in another region if global access is configured.
Both Dataplane v1 and Dataplane v2 are supported for the VLAN attachments.
For more information about Dataplane versions, see
Dataplane v2 .
If you want to access the endpoint
by using its DNS name, you must configure systems in the other network so that
they can make queries to your private DNS zones.
If you implemented the private DNS zones by using Cloud DNS, complete
the following steps:
Create an inbound server policy in the
VPC network to which your other network connects.
Identify the inbound forwarder entry points
in the region where your VLAN attachment or Cloud VPN tunnel is
located, in the VPC network to which your other network
connects.
Configure systems and DNS name servers in the other network to forward the
DNS names for the endpoint to an inbound forwarder entry
point in the same region as the VLAN attachment or Cloud VPN tunnel
that connects to the VPC network.
View Service Directory DNS zones
If the prerequisites for
automatic DNS configuration
are met, a
DNS zone is created with a name in the format
NAMESPACE -- REGION .
Console
In the Google Cloud console, go to the Cloud DNS zones page.
Go to Cloud DNS zones
Look for a private zone with the name
NAMESPACE -- REGION .
gcloud
Run the following command to list all private DNS zones:
gcloud dns managed-zones list \
--filter="visibility=private"
Run the following command to get details for a zone with the name
NAMESPACE -- REGION .
gcloud dns managed-zones describe NAMESPACE -- REGION
If the zone is not present, view the details for the
endpoint and check if the endpoint
configuration includes a value for the namespace.
If the endpoint has a namespace configuration, see Configure a
Service Directory DNS zone .
If the endpoint does not have a namespace configuration, see Register an
endpoint with
Service Directory .
Other ways to configure DNS
If the prerequisites for
automatic DNS configuration
are not met, you can create DNS entries in other ways:
If the endpoint has a namespace configured, see Configure a
Service Directory DNS zone .
If the endpoint does not have a namespace configured, see Register an
endpoint with
Service Directory .
If you prefer to manually configure DNS, see Configure DNS
manually .
Configure a Service Directory DNS zone
If an endpoint is registered with
Service Directory, but the published service that
it connects to does not have a domain name configured, no DNS changes are made.
If you want to replicate the
automatic DNS configuration ,
you can manually configure a Service Directory DNS zone that is
backed by the Service Directory namespace. After the zone is
created, DNS entries for the endpoint are
automatically created.
Create a Service Directory DNS
zone with the
following configuration:
Zone name: Specify NAMESPACE -- REGION ,
where NAMESPACE is the namespace that the
endpoint is registered to, and
REGION is the region where the endpoint is created.
DNS name: The DNS domain that the service producer is using for their
published services. Check with the service producer for this
information.
The DNS name might have the format
REGION .p. DOMAIN . For example, if the
service producer's public domain is example.com , and their
published
service is in us-west1 , then we recommend that they make their service
available using us-west1.p.example.com domain names. Include a trailing
dot—for example, us-west1.p.example.com.
Service Directory namespace: The namespace that you
configured for this endpoint.
View the endpoint details
to find the Service Directory namespace and region.
With this configuration, if you have configured a
Service Directory DNS zone with the us-west1.p.example.com DNS
name, and you create an endpoint with the
name analytics , a DNS record for analytics.us-west1.p.example.com is
automatically created.
Register an endpoint with Service Directory
New endpoints are automatically
registered with Service Directory. However, if a
endpoint was created before automatic
registration with Service Directory was enabled, this
configuration might be missing.
You can delete the
endpoint
and create a new one , which is registered with
Service Directory automatically.
Or you can follow these steps to register an existing
endpoint with a
Service Directory namespace.
Create a Service Directory
namespace
for the endpoint, NAMESPACE .
Create a Service Directory
service
for the endpoint, SERVICE_NAME .
For the service, use the same name as the name of the forwarding rule used
for the endpoint,
ENDPOINT_NAME .
Create a Service Directory
endpoint ,
using the name default and use the IP address and port ( 443 ) of the
endpoint.
After you have registered the endpoint
with Service Directory, follow the instructions to Configure a
Service Directory DNS zone .
Configure DNS manually
If you've prevented automatic DNS configuration, or if it is not enabled in your
configuration, you can use Cloud DNS to manually
create DNS records
For more information, see the following pages:
Access Control : the DNS Administrator
role ( roles/dns.admin ) provides the
permissions needed to create DNS zones and records.
Create a private zone .
When you configure a private zone, you provide a DNS name. Use the DNS
domain that the service producer is using for their published
services. Check with the service producer for this information.
It might have this format:
REGION .p. DOMAIN . For example, if the
service producer's public domain is example.com , and their published
service is in us-west1 , then we recommend that they make their service
available using us-west1.p.example.com domain names.
Add a record .
Known issues
Unhealthy backends receive traffic with global access endpoints
It's possible to connect a global access
endpoint to a published service that's
not configured for global access. However, health checks don't work correctly
in this configuration. As a result, traffic might be sent to unhealthy
backends and dropped.
Only enable global access for an endpoint if you know that the service
attachment's load balancer is configured for global access.
If your endpoint is affected by this issue, do one of the following:
If you don't want to use global access,
disable global access for your endpoint .
If you want to use global access, ask the service producer to
enable global access for the load balancer's forwarding rule .
Turning off global access for an endpoint doesn't interrupt network traffic for
workloads in the same region as the endpoint. However, after global access is
disabled, clients from other regions can't access the endpoint.
Troubleshooting
Private DNS zone creation fails
When you create an endpoint, a
Service Directory DNS zone is created. Zone creation can fail for
these reasons:
You haven't enabled the Cloud DNS API in your project.
You don't have the required permissions to create a
Service Directory DNS zone.
A DNS zone with the same zone name exists in this VPC network.
A DNS zone for the same domain name already exists in this VPC
network.
To manually create the Service Directory DNS zone, do the
following:
Verify that the Cloud DNS API is
enabled in your project.
Verify that you have the required permissions to create the
Service Directory DNS zone:
dns.managedZones.create
dns.networks.bindPrivateDNSZone
servicedirectory.namespaces.associatePrivateZone
If there is a conflicting zone, but it is no longer needed, delete the DNS
zone .
Create a Service Directory DNS zone that
is backed by the Service Directory namespace associated with your
endpoint.
Endpoint creation fails when global access is configured
Not all Private Service Connect published services support
endpoints with global access. If you create an endpoint with global access and
the published service doesn't support it, you see this error message:
Private Service Connect global access is not supported for the given forwarding
rule, since its producer service does not support consumer global access.
Create the endpoint without the global access option.
Endpoint creation succeeds, but connectivity is not established
If you successfully create an endpoint for published services but connectivity
is not established, check the endpoint's
connection status .
The connection status might indicate steps that you can take to resolve the
issue.
Endpoint connection status is accepted, but traffic doesn't flow
If an endpoint has an ACCEPTED connection status, but traffic can't
reach the published service, the service producer might have recently
updated the target service of the service attachment. During a target service
update, traffic is briefly interrupted. For information
about recent or ongoing target service updates, or to verify the state of the
service, contact the service producer.
Propagated connection errors
For information about troubleshooting propagated connections, see
Troubleshoot Private Service Connect connection propagation
errors .
Endpoint has performance issues or connection timeouts
If your endpoint has performance issues or intermittent connection timeouts,
it might be due to dropped packets. You can investigate dropped packets by
checking the metrics that are described in the following sections.
Dropped packets to published service
The private_service_connect/consumer/dropped_sent_packets_count
metric
tracks packets from a Private Service Connect consumer such as
an endpoint to a published service that are dropped because the endpoint
exceeded its maximum connections
to the service.
If an endpoint reports values for this metric, consider the following solutions:
Create additional endpoints that connect to the published service.
Reduce the number of connections through this endpoint.
Ask the service producer to increase the capacity of their published
service—for example, by adding more virtual machine (VM) instances or
network endpoints.
Dropped packets from published services
The
private_service_connect/consumer/dropped_received_packets_count
metric
tracks packets sent from a published service to a
Private Service Connect consumer such as an endpoint that are
dropped because Private Service Connect can't find a matching
connection for response packets.
Private Service Connect only allows connections that are
initiated from the consumer VPC network. When a consumer
initiates a connection, the connection is tracked in order to match
response packets from the published service with an existing connection. If
Private Service Connect can't find a match for a response packet,
the packet is dropped.
Private Service Connect might not find a match for a response
packet if a published service sends response packets after a connection has
timed out. If you see values for this metric, contact the service producer.
They might be able to
configure their service to avoid this issue .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
