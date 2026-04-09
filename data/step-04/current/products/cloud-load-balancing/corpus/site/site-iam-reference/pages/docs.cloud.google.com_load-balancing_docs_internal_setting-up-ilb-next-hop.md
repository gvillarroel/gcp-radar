---
title: "Set up internal passthrough Network Load Balancer for third-party appliances\
  \ \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-ilb-next-hop
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/internal/setting-up-ilb-next-hop
  title: "Set up internal passthrough Network Load Balancer for third-party appliances\
    \ \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Set up internal passthrough Network Load Balancer for third-party appliances | Cloud Load Balancing | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Load Balancing
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Discover
Cloud Load Balancing overview
Choose a load balancer
Cloud Load Balancing resource model
Load balancer feature comparison
Get started
Roles and permissions
IAM Conditions for forwarding rules
Organization policy constraints
Overview
Use custom constraints
Application Load Balancer (HTTP/HTTPS)
Overview
External load balancer
Architecture overview
Request distribution overview
Set up global load balancer
Managed VM instance group backend
Cloud Storage (backend buckets)
External backend (internet NEG)
Cloud Run, App Engine, or Cloud Run functions backends (serverless NEG)
On-premises or other cloud backends (zonal and hybrid NEG)
Add capabilities
Traffic management overview
Set up traffic management
Set up HTTP-to-HTTPS redirect
Set up a load balancer with Shared VPC
Set up load balancer with cross-project backend service and backend bucket
Create custom headers in backend services
Custom error response
Overview
Configure custom error responses
Set up global load balancer (classic)
Terraform examples
Managed VM instance group backend
Cloud Storage (backend buckets)
External backend (internet NEG)
Cloud Run, App Engine, or Cloud Functions backends (serverless NEG)
On-premises or other cloud backends (zonal and hybrid NEG)
Migrate resources
Overview
Migrate to global external Application Load Balancer
Roll back to classic Application Load Balancer
Add capabilities
Traffic management overview
Create custom headers in backend services
Set up custom header and query parameter-based routing
Set up URL redirect
Set up HTTP-to-HTTPS redirect
Set up URL rewrite
Set up regional load balancer
Managed VM instance group backend
Cloud Storage (backend buckets)
Cloud Run backends (serverless NEG)
On-premises or other cloud backends (zonal and hybrid NEG)
External backend (internet NEG)
Add capabilities
Traffic management overview
Set up traffic management
Set up high availability
Set up HTTP-to-HTTPS redirect
Set up a load balancer with backend service using Shared VPC
Set up a load balancer with backend buckets using Shared VPC
Create custom headers in URL maps
Fail over to regional load balancers
Monitor and troubleshoot
Overview
Global load balancers
Regional load balancers
Troubleshooting
Best practices
Explore tutorials
Request routing to a multi-region external HTTPS load balancer
Faster web performance and improved web protection for load balancing
Deliver HTTP and HTTPS content over the same published domain
Optimize application latency with load balancing
Application capacity optimizations with global load balancing
Capacity management with load balancing
Internal load balancer
Architecture overview
Set up cross-region load balancer
Managed VM instance group backend
Cloud Storage (backend buckets)
On-premises or other cloud backends (zonal and hybrid NEG)
Cloud Run backends (serverless NEG)
Set up regional load balancer
Terraform examples
VM instance group backends
Cloud Run backends (serverless NEG)
Cloud Storage (backend buckets)
On-premises or other cloud backends (zonal and hybrid NEG)
External backend (internet NEG)
Add capabilities
Traffic management
Overview
Set up traffic management
Set up HTTP-to-HTTPS redirect
Create custom headers in URL maps
Set up regional internal load balancer with backend service using Shared VPC
Set up cross-region load balancer with backend buckets using Shared VPC
Set up a regional internal Application Load Balancer with backend buckets using Shared VPC
Service Directory registration
Load balancing and connected networks
Monitor and troubleshoot
View logs and metrics
Troubleshooting
Convert load balancer to IPv6
Use custom metrics
Load testing backends
Proxy Network Load Balancer (TCP/SSL proxy)
Overview
External load balancer
Architecture overview
Set up global load balancer
Global SSL proxy with VM instance group backends
Global TCP proxy with VM instance group backends
Set up global load balancer (classic)
Terraform examples
Global SSL proxy with VM instance group backends
Global TCP proxy with VM instance group backends
Set up regional load balancer
VM instance group backends
Zonal NEG backends
Hybrid connectivity (hybrid NEGs)
External backend (internet NEG)
Internal load balancer
Architecture overview
Set up cross-region load balancer
Managed VM instance group backends
On-premises or other cloud backends (zonal and hybrid NEG)
Set up regional load balancer
Managed VM instance group backends
Zonal NEG backends
Hybrid connectivity (hybrid NEGs)
External backend (internet NEG)
Add capabilities
Load balancing and connected networks
Monitor and troubleshoot
View logs and metrics
Convert load balancer to IPv6
Passthrough Network Load Balancer (TCP/UDP)
Overview
External load balancer
Backend service-based architecture
Traffic distribution concepts
Target pool-based architecture
Set up load balancer
VM instance group backends (TCP/UDP only)
VM instance group backends (multiple protocols)
Zonal NEG backends
Target pool-based load balancer
Add capabilities
Configure failover
Configure weighted load balancing
Migrate from target pools to backend services
Service Directory registration
Explore tutorials
Use UDP with network load balancers
Monitor and troubleshoot
View logs and metrics
Troubleshooting
Internal load balancer
Architecture overview
Traffic distribution concepts
Set up load balancer
Terraform examples
VM instance group backends
VM instance group backend for multiple protocols
Zonal NEG backends
Add capabilities
Configure failover
Zonal affinity
Load balancers as next hops
Overview
Set up load balancing for third-party appliances
Forwarding rules that use a common IP address
Service Directory registration
Load balancing and connected networks
Explore tutorials
Set up load balancer as next hop (with tags)
Deploy a hub-and-spoke network
Set up a load balancer with internal IPv6-only backends
Monitor and troubleshoot
View logs and metrics
Troubleshooting
Protocol forwarding
Overview
Set up protocol forwarding
Switch between a target instance and a backend service
Secure
SSL certificates
Overview
Use self-managed SSL certificates
Use Google-managed SSL certificates
Encryption to the backends
Troubleshooting
SSL policies
Overview
Use SSL policies
Mutual TLS
Frontend mTLS
Overview
Set up frontend mTLS with user-provided certificates
Set up frontend mTLS with a private CA
Backend mTLS
Overview
Set up backend authenticated TLS
Set up backend mTLS
Backend mTLS with managed workload identity
Overview
Set up backend mTLS using managed workload identity
Authorization policies
Overview
Set up policies for Application Load Balancers
Customize load balancer
Advanced load balancing optimizations
Backend buckets
Backend services
Connection draining
Firewall rules
Forwarding rules
Health checks
Overview
Use health checks
Internal DNS names
IPv6
Network endpoint groups
Overview
Hybrid connectivity NEGs
Internet NEGs
Serverless NEGs
Zonal NEGs
Overview
Set up zonal NEGs
Proxy-only subnets
Tags
Target pools
Target proxies
URL maps
Overview
Use URL maps
Operate and maintain
Audit logging information
Health check logging information
Clean up a load balancer setup
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Permissions
Setting up internal passthrough Network Load Balancers as next hops with common backends Configuring the networks, region, and subnets
Configuring firewall rules
Creating the third-party virtual appliances
Creating the load balancing resources
Creating the static routes that define the load balancers as the next hops
Creating the testing VM instance
Creating the production VM instance
Testing load balancing to a multi-NIC deployment
Enabling symmetric hashing
Cleanup
What's next
Home
Documentation
Networking
Load Balancing
Guides
Was this helpful?
Send feedback
Set up internal passthrough Network Load Balancer for third-party appliances
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Permissions
Setting up internal passthrough Network Load Balancers as next hops with common backends Configuring the networks, region, and subnets
Configuring firewall rules
Creating the third-party virtual appliances
Creating the load balancing resources
Creating the static routes that define the load balancers as the next hops
Creating the testing VM instance
Creating the production VM instance
Testing load balancing to a multi-NIC deployment
Enabling symmetric hashing
Cleanup
What's next
In Google Cloud, you can integrate third-party appliances in a highly available,
scaled-out manner. To do this, you configure a static route and set its
next hop to the Google Cloud internal passthrough Network Load Balancer. This allows the load balancer
to load balance traffic for a destination prefix to a pool of health-checked
third-party VM appliances.
This guide uses an example to teach you how to configure an internal passthrough Network Load Balancer
to be a next hop. Before following this guide, familiarize yourself with the
following:
Internal passthrough Network Load Balancer concepts
Internal passthrough Network Load Balancers as next
hops
Note: These instructions are not valid for internal passthrough Network Load Balancers created by
GKE. To create an internal load balancer Service with
GKE, see Using an
internal passthrough Network Load Balancer .
Permissions
To follow this guide, you need to create instances and modify a
network in a project. You should be either a project
owner or editor , or you should
have all of the following
Compute Engine IAM roles :
Task
Required role
Create networks, subnets, and load balancer components
Network Admin
Add and remove firewall rules
Security Admin
Create instances
Compute Instance Admin
For more information, see the following guides:
Access control
IAM Conditions
Setting up internal passthrough Network Load Balancers as next hops with common backends
This guide shows you how to use an internal passthrough Network Load Balancer as the next
hop for a static route in order to integrate scaled-out virtual
appliances.
The solution discussed in this guide creates appliance VMs running Debian Linux.
The example VMs do not perform any packet filtering, but you can
add that functionality by modifying the network
configuration of this example or by using different packet filtering or routing
software.
The steps in this section describe how to configure the following resources:
Sample VPC networks and custom subnets
Google Cloud firewall rules that allow incoming connections to backend
appliance virtual machines (VMs)
Static routes
Two client VMs to test connections
The following internal passthrough Network Load Balancer components:
Backend VMs in a managed instance group (MIG)
A health check for the backend VMs
An internal backend service in the us-west1 region to manage
connection distribution among the backend VMs
An internal forwarding rule and internal IP address for the
frontend of the load balancer
This example shows load balancing to multiple backend NICs, as
described in Load balancing to multiple
NICs .
The topology looks like this:
Next-hop multi-NIC detailed example for internal passthrough Network Load Balancer (click to enlarge).
The diagram shows some of the resources that the example creates:
Application instances behind an internal passthrough Network Load Balancer ( fr-ilb1 , in this
example). The application instances only have internal IP addresses.
Each application instance has its
can-ip-forward flag enabled. Without
this flag, a Compute Engine VM can only transmit a packet if the
source IP address of the packet matches the VM's internal IP address, an IP
address from an alias IP range, or an IP address of a forwarding rule that
resolves to the VM. The can-ip-forward flag changes this behavior so that
the VM can transmit packets with any source IP address.
A static route with destination
10.50.1.0/24 and next hop set to the load balancer's forwarding rule,
fr-ilb1 .
The diagram also shows the traffic flow:
The testing VPC network has a static route for
traffic that is destined to 10.50.1.0/24 subnet. This route directs the
traffic to the load balancer.
The load balancer forwards traffic to one of the application instances
based on the configured session affinity. (Session affinity only affects TCP
traffic.)
For additional use cases, see Internal TCP/UDP load balancers as next
hops .
Configuring the networks, region, and subnets
This example uses the following VPC networks, region, and
subnets:
Networks: This example requires two networks, each with at least one
subnet. Each backend third-party appliance VM must have at least two network
interfaces, one in each VPC network. The networks in this
example are custom mode VPC
networks named testing and production . The
testing network in this example contains the client and the load balancer.
The production network contains the destination target VM.
Region: The subnets are located in the us-west1 region. The subnets must be
in the same region because VM instances are zonal resources.
Subnets: The subnets, testing-subnet and production-subnet , use the
10.30.1.0/24 and 10.50.1.0/24 primary IP address ranges, respectively.
Note: You can change the name of the networks, the region, and the parameters for
the subnets; however, subsequent steps in this guide use the networks, region, and
subnets parameters as outlined previously.
To create the example networks and subnets, follow these steps.
Console gcloud
More
Create the testing network and the testing-subnet :
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click Create VPC network .
Enter a Name of testing .
In the Subnets section:
Set the Subnet creation mode to Custom .
In the New subnet section, enter the following information:
Name : testing-subnet
Region : us-west1
IP address range : 10.30.1.0/24
Click Done .
Click Create .
Create the production network and the production-subnet :
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click Create VPC network .
Enter a Name of production .
In the Subnets section:
Set the Subnet creation mode to Custom .
In the New subnet section, enter the following information:
Name : production-subnet
Region : us-west1
IP address range : 10.50.1.0/24
Click Done .
Click Create .
Create the custom mode VPC networks:
gcloud compute networks create testing --subnet-mode=custom
gcloud compute networks create production --subnet-mode=custom
Create subnets in the testing and production networks in
the us-west1 region:
gcloud compute networks subnets create testing-subnet \
--network=testing \
--range=10.30.1.0/24 \
--region=us-west1
gcloud compute networks subnets create production-subnet \
--network=production \
--range=10.50.1.0/24 \
--region=us-west1
Configuring firewall rules
This example uses the following firewall rules:
fw-allow-testing-from-both : An ingress rule, applicable to all targets in
the testing network. This rule allows traffic from sources in both the
10.30.1.0/24 and 10.50.1.0/24 IP address ranges. These two ranges cover
the primary internal IP addresses of VMs in both networks.
fw-allow-production-from-both : An ingress rule, applicable to all targets in
the production network. This rule allows traffic from sources in both the
10.30.1.0/24 and 10.50.1.0/24 IP address ranges. These two ranges cover
the primary internal IP addresses of VMs in both networks.
fw-allow-testing-ssh : An ingress rule applied to the VM instances in the
testing VPC network. This rule allows incoming SSH
connectivity on TCP port 22 from any address. You can choose a more
restrictive source IP range for this rule; for example, you can specify the IP
ranges of the systems from which you plan to initiate SSH sessions. This
example uses the target tag allow-ssh to identify the VMs to which the
firewall rule applies.
fw-allow-production-ssh : An ingress rule applied to the VM instances in the
production VPC network. This rule allows incoming SSH
connectivity on TCP port 22 from any address. Like the fw-allow-testing-ssh
rule, you can choose a more restrictive source IP range for this rule.
fw-allow-health-check : An ingress rule for the third-party appliance VMs
that are being load balanced. This rule allows traffic from the
Google Cloud health checking systems ( 130.211.0.0/22 and
35.191.0.0/16 ). This example uses the target tag allow-health-check to
identify the instances to which it should apply.
fw-allow-production-health-check : An ingress rule for the third-party
appliance VMs that are being load balanced. This rule allows traffic from the
Google Cloud health checking systems ( 130.211.0.0/22 and
35.191.0.0/16 ). This example uses the target tag allow-health-check to
identify the instances to which it should apply.
Without these firewall rules, the default deny
ingress rule blocks incoming
traffic to the backend instances. You must create a firewall rule to allow
health checks from the IP ranges of Google Cloud probe systems. Refer to
probe IP ranges for more
information.
Console gcloud
More
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
Click Create firewall rule and enter the following
information to create the rule to allow testing VMs to receive packets
from the testing and the production subnets:
Name : fw-allow-testing-from-both
Network : testing
Priority : 1000
Direction of traffic : ingress
Action on match : allow
Targets : All instances in the network
Source filter : IPv4 ranges
Source IPv4 ranges : 10.30.1.0/24 , 10.50.1.0/24
Protocols and ports : Allow all
Click Create .
Click Create firewall rule and enter the following
information to create the rule to allow production VMs to receive packets
from the testing and the production subnets:
Name : fw-allow-production-from-both
Network : production
Priority : 1000
Direction of traffic : ingress
Action on match : allow
Targets : All instances in the network
Source filter : IPv4 ranges
Source IPv4 ranges : 10.30.1.0/24 , 10.50.1.0/24
Protocols and ports : Allow all
Click Create .
Click Create firewall rule to create the rule to allow incoming
SSH connections in the testing environment:
Name : fw-allow-testing-ssh
Network : testing
Priority : 1000
Direction of traffic : ingress
Action on match : allow
Targets : Specified target tags
Target tags : allow-ssh
Source filter : IPv4 ranges
Source IPv4 ranges : 0.0.0.0/0
Protocols and ports : Choose Specified protocols and ports and
type: tcp:22
Click Create .
Click Create firewall rule to create the rule to allow incoming
SSH connections in the production environment:
Name : fw-allow-production-ssh
Network : production
Priority : 1000
Direction of traffic : ingress
Action on match : allow
Targets : Specified target tags
Target tags : allow-ssh
Source filter : IPv4 ranges
Source IPv4 ranges : 0.0.0.0/0
Protocols and ports : Choose Specified protocols and ports and
type: tcp:22
Click Create .
Click Create firewall rule to create the rule to allow
Google Cloud health checks in the testing environment:
Name : fw-allow-health-check
Network : testing
Priority : 1000
Direction of traffic : ingress
Action on match : allow
Targets : Specified target tags
Target tags : allow-health-check
Source filter : IPv4 ranges
Source IPv4 ranges : 130.211.0.0/22 and 35.191.0.0/16
Protocols and ports : tcp
Click Create .
Click Create firewall rule to create the rule to allow
Google Cloud health checks in the production environment:
Name : fw-allow-production-health-check
Network : production
Priority : 1000
Direction of traffic : ingress
Action on match : allow
Targets : Specified target tags
Target tags : allow-health-check
Source filter : IPv4 ranges
Source IPv4 ranges : 130.211.0.0/22 and 35.191.0.0/16
Protocols and ports : tcp
Click Create .
Create the fw-allow-testing-subnet firewall rule to allow testing VMs
to receive packets from the testing and the production subnets:
gcloud compute firewall-rules create fw-allow-testing-from-both \
--network=testing \
--action=allow \
--direction=ingress \
--source-ranges=10.30.1.0/24,10.50.1.0/24 \
--rules=all
Create the fw-allow-production-subnet firewall rule to allow production
VMs to receive packets from the testing and the production subnets:
gcloud compute firewall-rules create fw-allow-production-from-both \
--network=production \
--action=allow \
--direction=ingress \
--source-ranges=10.30.1.0/24,10.50.1.0/24 \
--rules=all
Create the fw-allow-testing-ssh firewall rule to allow SSH connectivity
to VMs with the network tag allow-ssh . When you omit source-ranges ,
Google Cloud interprets the rule to mean any
source .
gcloud compute firewall-rules create fw-allow-testing-ssh \
--network=testing \
--action=allow \
--direction=ingress \
--target-tags=allow-ssh \
--rules=tcp:22
Create the fw-allow-production-ssh firewall rule to allow SSH
connectivity to VMs with the network tag allow-ssh .
gcloud compute firewall-rules create fw-allow-production-ssh \
--network=production \
--action=allow \
--direction=ingress \
--target-tags=allow-ssh \
--rules=tcp:22
Create the fw-allow-health-check rule to allow Google Cloud
health checks to the third-party appliance VMs in the testing network.
gcloud compute firewall-rules create fw-allow-testing-health-check \
--network=testing \
--action=allow \
--direction=ingress \
--target-tags=allow-health-check \
--source-ranges=130.211.0.0/22,35.191.0.0/16 \
--rules=tcp
Create the fw-allow-production-health-check firewall rule to allow
Google Cloud health checks to the third-party appliance VMs in the
production network.
gcloud compute firewall-rules create fw-allow-production-health-check \
--network=production \
--action=allow \
--direction=ingress \
--target-tags=allow-health-check \
--source-ranges=130.211.0.0/22,35.191.0.0/16 \
--rules=tcp
Creating the third-party virtual appliances
The following steps demonstrate how to create an instance template and a managed
regional instance group with more than one network interface. This instance
group is used as the third-party virtual appliance for this example.
Note: Alternatively, you can create an unmanaged instance group if, for example,
the third-party software that you're using requires individual configuration on
each member VM in the group.
Console gcloud
More
You must use gcloud for this step because you need to create an instance
template with more than one network interface. The Google Cloud console
does not currently support creating instance templates with more than one
network interface.
Create a local file called config.sh and insert the following content:
#!/bin/bash
# Enable IP forwarding:
echo 1 > /proc/sys/net/ipv4/ip_forward
echo "net.ipv4.ip_forward=1" > /etc/sysctl.d/20-example.conf
# Read VM network configuration:
md_vm = "http://metadata.google.internal/computeMetadata/v1/instance/"
md_net = " $md_vm /network-interfaces"
nic0_gw = " $( curl $md_net /0/gateway -H "Metadata-Flavor:Google" ) "
nic0_mask = " $( curl $md_net /0/subnetmask -H "Metadata-Flavor:Google" ) "
nic0_addr = " $( curl $md_net /0/ip -H "Metadata-Flavor:Google" ) "
nic0_id = " $( ip addr show | grep $nic0_addr | awk '{print $NF}' ) "
nic1_gw = " $( curl $md_net /1/gateway -H "Metadata-Flavor:Google" ) "
nic1_mask = " $( curl $md_net /1/subnetmask -H "Metadata-Flavor:Google" ) "
nic1_addr = " $( curl $md_net /1/ip -H "Metadata-Flavor:Google" ) "
nic1_id = " $( ip addr show | grep $nic1_addr | awk '{print $NF}' ) "
# Source based policy routing for nic1
echo "100 rt-nic1" >> /etc/iproute2/rt_tables
sudo ip rule add pri 32000 from $nic1_gw / $nic1_mask table rt-nic1
sleep 1
sudo ip route add 35 .191.0.0/16 via $nic1_gw dev $nic1_id table rt-nic1
sudo ip route add 130 .211.0.0/22 via $nic1_gw dev $nic1_id table rt-nic1
# Use a web server to pass the health check for this example.
# You should use a more complete test in production.
sudo apt-get update
sudo apt-get install apache2 -y
sudo a2ensite default-ssl
sudo a2enmod ssl
echo "Example web page to pass health check" | \
tee /var/www/html/index.html
sudo systemctl restart apache2
Create an instance template for your third-party virtual appliances. The
instance template must include the --can-ip-forward flag so that the
VM instances created from the template can forward packets from other
instances in the testing and production networks.
gcloud compute instance-templates create third-party-template-multinic \
--region=us-west1 \
--network-interface subnet=testing-subnet,address="" \
--network-interface subnet=production-subnet \
--tags=allow-ssh,allow-health-check,my-network-tag \
--image-family=debian-12 \
--image-project=debian-cloud \
--can-ip-forward \
--metadata-from-file=startup-script="config.sh"
Create a managed instance group for your third-party virtual appliances.
This command creates a regional managed instance group, which can then
be autoscaled, in us-west1 .
gcloud compute instance-groups managed create third-party-instance-group \
--region=us-west1 \
--template=third-party-template-multinic \
--size=3
Creating the load balancing resources
These steps configure all of the internal passthrough Network Load Balancer
components starting with the health
check and backend service, and then the frontend components:
Health check . In this example, the HTTP health check
checks for an HTTP 200 (OK) response. For more information, see the
Health check section .
Backend service . Even though this example's backend service specifies the
TCP protocol, when the load balancer is the next hop for a route,
Google Cloud forwards traffic for all protocols (TCP, UDP, and ICMP).
Forwarding rule . Even though this example forwarding rule specifies TCP
port 80, when the load balancer is the next hop for a route, traffic on any
TCP or UDP port is sent to the load balancer's backends.
Internal IP address . The example specifies an internal IP
address, 10.30.1.99 , for the forwarding rule.
Console gcloud
More
Start your configuration
In the Google Cloud console, go to the Load balancing page.
Go to Load
balancing
Click Create load balancer .
For Type of load balancer , select Network Load Balancer
(TCP/UDP/SSL) and click Next .
For Proxy or passthrough , select Passthrough load
balancer and click Next .
For Public facing or internal , select Internal and
click Next .
Click Configure .
Create the first load balancer
In the Load Balancer name field, enter ilb1 .
In the Region list, select us-west1 .
In the Network list, select testing .
Click Backend configuration and do the following:
In the Health check list, click Create a health check , and
then enter the following information:
Name : hc-http-80
Protocol : HTTP
Port : 80
Proxy protocol : NONE
Request : /
Note that when you use the Google Cloud console to create your
load balancer, the health check is global. If you want to create a
regional health check, use gcloud or the API.
Click Create .
In the New backend section, select the
third-party-instance-group instance group and click Done .
In the Session affinity list, select Client IP .
Verify that there is a blue check mark next to Backend
configuration before continuing. Review this step if not.
Click Frontend configuration . In the New Frontend IP and port
section, make the following changes:
Name : fr-ilb1
Subnetwork : testing-subnet
From Internal IP , choose Reserve a static internal IP address ,
enter the following information, and click Reserve :
Name : ip-ilb
Static IP address : Let me choose
Custom IP address : 10.30.1.99
Ports : Choose Single , and enter 80 for the Port
number . Remember that the choice of a protocol and port for the
load balancer does not limit the protocols and ports that are used
when the load balancer is the next hop of a route.
Verify that there is a blue check mark next to Frontend
configuration before continuing. Review this step if not.
Click Review and finalize . Double-check your settings.
Click Create .
Start your configuration
In the Google Cloud console, go to the Load balancing page.
Go to Load
balancing
Click Create load balancer .
For Type of load balancer , select Network Load Balancer
(TCP/UDP/SSL) and click Next .
For Proxy or passthrough , select Passthrough load
balancer and click Next .
For Public facing or internal , select Internal and
click Next .
Click Configure .
Create the second load balancer
Set the Name to ilb2 .
Set the Region to us-west1 .
Set the Network to production .
Click Backend configuration and make the following changes:
For Backends , in the New item section, select the third-party-instance-group
instance group and click Done .
For Health check , select hc-http-80 .
For Session affinity , select Client IP .
Verify that there is a blue check mark next to Backend
configuration before continuing. Review this step if not.
Click Frontend configuration . In the New Frontend IP and port
section, make the following changes:
Name : fr-ilb2
Subnetwork : production-subnet
From Internal IP , choose Reserve a static internal IP address ,
enter the following information, and then click Reserve :
Name : ip-ilb2
Static IP address : Let me choose
Custom IP address : 10.50.1.99
Ports : Choose Single , and enter 80 for the Port
number . Remember that the choice of a protocol and port for the
load balancer does not limit the protocols and ports that are used
when the load balancer is the next hop of a route.
Verify that there is a blue check mark next to Frontend
configuration before continuing. Review this step if not.
Click Review and finalize . Double-check your settings.
Click Create .
Create a new HTTP health check to test TCP connectivity to the VMs
on 80.
gcloud compute health-checks create http hc-http-80 \
--region=us-west1 \
--port=80
Create two internal backend services in the us-west1 region.
gcloud compute backend-services create ilb1 \
--load-balancing-scheme=internal \
--health-checks-region=us-west1 \
--health-checks=hc-http-80 \
--region=us-west1 \
--network=testing \
--session-affinity=CLIENT_IP
gcloud compute backend-services create ilb2 \
--load-balancing-scheme=internal \
--health-checks-region=us-west1 \
--health-checks=hc-http-80 \
--region=us-west1 \
--network=production \
--session-affinity=CLIENT_IP
Add the instance groups containing the third-party virtual appliances as
backends on the backend services.
gcloud compute backend-services add-backend ilb1 \
--instance-group=third-party-instance-group \
--instance-group-region=us-west1 \
--region=us-west1
gcloud compute backend-services add-backend ilb2 \
--instance-group=third-party-instance-group \
--instance-group-region=us-west1 \
--region=us-west1
Create the internal forwarding rules and connect them to the backend
services to complete the load balancer configuration. Remember that the
protocol (TCP) and port (80) of the load balancers do not limit
the ports and protocols that are forwarded to the backend instances
(the third-party virtual appliances) when the load balancers are used as
the next hops of routes.
gcloud compute forwarding-rules create fr-ilb1 \
--load-balancing-scheme=internal \
--ports=80 \
--network=testing \
--subnet=testing-subnet \
--region=us-west1 \
--backend-service=ilb1 \
--address=10.30.1.99
gcloud compute forwarding-rules create fr-ilb2 \
--load-balancing-scheme=internal \
--ports=80 \
--network=production \
--subnet=production-subnet \
--region=us-west1 \
--backend-service=ilb2 \
--address=10.50.1.99
Creating the static routes that define the load balancers as the next hops
Create two static routes that use a next hop load balancer.
Console gcloud
More
Create the first route
Note: When you define the load balancer as the next hop, using instance
tags on the route
isn't supported in the Google Cloud console. Use the gcloud CLI or
the API instead.
In the Google Cloud console, go to the Routes page.
Go to Routes
Click Create route .
For the route Name , enter ilb-nhop-dest-10-50-1 .
Select the testing network.
For the Destination IP range , enter 10.50.1.0/24 .
For Instance tags , enter my-network-tag .
For the route's Next hop , select Specify a forwarding rule of
internal TCP/UDP load balancer .
To specify the load balancer's IP address as the next hop, use the
gcloud CLI or the API.
Specify the forwarding rule name. For the forwarding rule
name, select fr-ilb1 .
Click Create .
Create the second route
Click Create route .
For the route Name , enter ilb-nhop-dest-10-30-1 .
Select the testing network.
For the Destination IP range , enter 10.30.1.0/24 .
For the route's Next hop , select Specify a forwarding rule of
internal TCP/UDP load balancer .
To specify the load balancer's IP address as the next hop, use the
gcloud CLI or the API.
For the forwarding rule name, select fr-ilb2 .
Click Create .
Create static routes with the next hop set to each load balancer's
forwarding rule, and each destination range set accordingly.
For the --next-hop-ilb flag, you can specify either a forwarding rule name or
forwarding rule IP address. A next hop forwarding rule IP address can be located
in either the same VPC network that contains the route or in a
peered VPC network. For more information, see
Next hop project and network .
In the example, the first route uses the IP address 10.30.1.99 , while the
second route uses the forwarding rule name fr-ilb12 .
Note: You cannot select the following in the --next-hop-ilb option:
Forwarding rule with L3_DEFAULT .
Static
internal IPv4 address with --purpose SHARED_LOADBALANCER_VIP .
You can optionally specify one or more instance tags on the
route .
The route can apply to specific VMs if you specify network tags on the
route. If you don't specify any network tag, the route applies to all VMs in
the VPC network. In this example, the route uses
my-network-tag for the route's network tag.
gcloud compute routes create ilb-nhop-dest-10-50-1 \
--network=testing \
--destination-range=10.50.1.0/24 \
--next-hop-ilb=10.30.1.99 \
--tags=my-network-tag
gcloud compute routes create ilb-nhop-dest-10-30-1 \
--network=production \
--destination-range=10.30.1.0/24 \
--next-hop-ilb=fr-ilb2 \
--next-hop-ilb-region=us-west1
Creating the testing VM instance
This example creates a VM instance with the IP address 10.30.1.100 in
the testing-subnet ( 10.30.1.0/24 ) in the testing VPC
network.
gcloud
More
Create the testing-vm by running the following command.
gcloud compute instances create testing-vm \
--zone=us-west1-a \
--image-family=debian-12 \
--image-project=debian-cloud \
--tags=allow-ssh,my-network-tag \
--subnet=testing-subnet \
--private-network-ip 10.30.1.100 \
--metadata=startup-script='#! /bin/bash
sudo apt-get update
sudo apt-get install apache2 -y
sudo a2ensite default-ssl
sudo a2enmod ssl
vm_hostname="$(curl -H "Metadata-Flavor:Google" \
http://metadata.google.internal/computeMetadata/v1/instance/name)"
echo "Page served from: $vm_hostname" | \
tee /var/www/html/index.html
sudo systemctl restart apache2'
Creating the production VM instance
This example creates a VM instance with the IP address 10.50.1.100 in
the production-subnet ( 10.50.1.0/24 ) in the production VPC
network.
gcloud
More
The production-vm can be in any zone in the same region as the load balancer,
and it can use any subnet in that region. In this example, the production-vm
is in the us-west1-a zone.
Create the production-vm by running the following command.
gcloud compute instances create production-vm \
--zone=us-west1-a \
--image-family=debian-12 \
--image-project=debian-cloud \
--tags=allow-ssh \
--subnet=production-subnet \
--private-network-ip 10.50.1.100 \
--metadata=startup-script='#! /bin/bash
sudo apt-get update
sudo apt-get install apache2 -y
sudo a2ensite default-ssl
sudo a2enmod ssl
vm_hostname="$(curl -H "Metadata-Flavor:Google" \
http://metadata.google.internal/computeMetadata/v1/instance/name)"
echo "Page served from: $vm_hostname" | \
tee /var/www/html/index.html
sudo systemctl restart apache2'
Testing load balancing to a multi-NIC deployment
Verify the health of the load balancer backends.
gcloud compute backend-services get-health ilb1 --region us-west1
gcloud compute backend-services get-health ilb2 --region us-west1
Test connectivity from the testing VM.
gcloud compute ssh testing-vm --zone=us-west1-a
curl http://10.50.1.99
exit
Test connectivity from the production VM.
gcloud compute ssh production-vm --zone=us-west1-a
curl http://10.30.1.99
exit
Enabling symmetric hashing
When computing the hash that is mapped to the backend instance,
Google Cloud ignores the direction of IP addresses and ports. The computed
consistent hash value of a TCP/UDP packet is the same regardless of the
direction that the packet originates from. This is called symmetric hashing .
Note: Symmetric hashing is enabled automatically on newly created
internal passthrough Network Load Balancers. You don't have to enable it.
To enable this hashing behavior on existing internal passthrough Network Load Balancers, you must
re-create the forwarding rule and the next-hop route.
For more information, see Symmetric
hashing .
Delete and re-create the forwarding rules
Console gcloud
More
Delete your forwarding rule and create a new one
In the Google Cloud console, go to the Load balancing page.
Go to Load balancing
Click your be-ilb load balancer and click Edit .
Click Frontend configuration .
Hold the pointer over your forwarding rule and then click
delete Delete to remove it.
Click Add frontend IP and port .
In the New Frontend IP and port
section, make the following changes:
Name : FORWARDING_RULE_NAME
Subnetwork : SUBNET_NAME
From Internal IP , select IP_ADDRESS
Ports : PORT_NUMBER or ALL .
Click Done .
Verify that there is a blue check mark next to Frontend
configuration before continuing. Review this step if not.
Click Review and finalize . Double-check your settings.
Click Create .
Delete your existing forwarding rules.
gcloud compute forwarding-rules delete FORWARDING_RULE_NAME \
--region= REGION
Create replacement forwarding rules with the same name.
gcloud compute forwarding-rules create FORWARDING_RULE_NAME \
--load-balancing-scheme=internal \
--ports= PORT_NUMBER or `ALL` \
--network= NETWORK_NAME \
--subnet= SUBNET_NAME \
--region= REGION \
--backend-service= BACKEND_SERVICE_NAME \
--address= IP_ADDRESS
When SNAT isn't required
As demonstrated in the previous example, source network address translation
(SNAT) is not required when all of the following are true:
The forwarding rule for the internal passthrough Network Load Balancer was created on or after June
22, 2021.
The static route referencing the forwarding rule was created on or
after June 22, 2021.
The internal passthrough Network Load Balancer's backend service doesn't use the NONE session
affinity setting.
You can convert an existing next hop internal passthrough Network Load Balancer route to use symmetric
hashing by following these steps:
Ensure that the internal passthrough Network Load Balancer's backend service doesn't use the NONE
session affinity setting
Create a replacement forwarding rule that references the same backend service.
The replacement forwarding rule uses a different IP address.
Create a replacement static route referencing the new forwarding rule.
Ensure that this replacement route has a higher priority than the existing
route.
Delete the lower-priority existing route (referencing the previous forwarding
rule) and then delete the previous forwarding rule.
Cleanup
In the load balancer configuration, remove the backend from the
backend services.
gcloud compute backend-services remove-backend ilb1 \
--instance-group=third-party-instance-group \
--instance-group-region=us-west1 \
--region=us-west1
gcloud compute backend-services remove-backend ilb2 \
--instance-group=third-party-instance-group \
--instance-group-region=us-west1 \
--region=us-west1
Delete the routes.
gcloud compute routes delete ilb-nhop-dest-10-50-1
gcloud compute routes delete ilb-nhop-dest-10-30-1
In the load balancer configurations, delete the forwarding rules.
gcloud compute forwarding-rules delete fr-ilb1 \
--region=us-west1
gcloud compute forwarding-rules delete fr-ilb2 \
--region=us-west1
In the load balancer configurations, delete the backend services.
gcloud compute backend-services delete ilb1 \
--region=us-west1
gcloud compute backend-services delete ilb2 \
--region=us-west1
In the load balancer configurations, delete the health check.
gcloud compute health-checks delete hc-http-80 \
--region=us-west1
If you used the Google Cloud console, the health check is global.
Therefore, the command is as follows:
gcloud compute health-checks delete hc-http-80 \
--global
Delete the managed instance group.
gcloud compute instance-groups managed delete third-party-instance-group \
--region=us-west1
Delete the instance templates.
gcloud compute instance-templates delete third-party-template
gcloud compute instance-templates delete third-party-template-multinic
Delete the testing and production instances.
gcloud compute instances delete testing-vm \
--zone=us-west1-a
gcloud compute instances delete production-vm \
--zone=us-west1-a
What's next
Internal passthrough Network Load Balancer overview
Failover for internal passthrough Network Load Balancers
Set up internal passthrough Network Load Balancers with VM instance group backends
Internal passthrough Network Load Balancer logging and monitoring
Internal passthrough Network Load Balancers and connected networks
Troubleshooting internal passthrough Network Load Balancers
Clean up the load balancer setup
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
