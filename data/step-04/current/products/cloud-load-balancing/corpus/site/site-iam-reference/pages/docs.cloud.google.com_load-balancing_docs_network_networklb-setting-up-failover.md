---
title: "Configure failover for regional external passthrough Network Load Balancers\
  \ \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/network/networklb-setting-up-failover
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/network/networklb-setting-up-failover
  title: "Configure failover for regional external passthrough Network Load Balancers\
    \ \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure failover for regional external passthrough Network Load Balancers | Cloud Load Balancing | Google Cloud Documentation
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
Passthrough Network Load Balancer (TCP/ UDP)
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
Setup Creating backend VMs and instance groups
Configuring firewall rules
Configuring load balancer components
Testing Send traffic to the load balancer
Testing initial state
Testing failover
Testing failback
Adding more backend VMs Create additional VMs and instance groups
Adding a primary backend
Adding a failover backend
Converting a primary or failover backend
Configuring failover policies Defining a failover policy
Viewing a failover policy
What's next
Home
Documentation
Networking
Load Balancing
Guides
Was this helpful?
Send feedback
Configure failover for regional external passthrough Network Load Balancers
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Permissions
Setup Creating backend VMs and instance groups
Configuring firewall rules
Configuring load balancer components
Testing Send traffic to the load balancer
Testing initial state
Testing failover
Testing failback
Adding more backend VMs Create additional VMs and instance groups
Adding a primary backend
Adding a failover backend
Converting a primary or failover backend
Configuring failover policies Defining a failover policy
Viewing a failover policy
What's next
Note: This page describes how failover works for backend service-based
regional external passthrough Network Load Balancers. It does not apply to regional external passthrough Network Load Balancers with a target
pool backend.
This guide uses an example to teach you how to configure failover
for a regional external passthrough Network Load Balancer with a backend service. Before following
this guide, familiarize yourself with the following:
Regional external passthrough Network Load Balancer with a backend service overview
Traffic distribution for backend service-based regional external passthrough Network Load Balancers
Firewall rules overview
Health check concepts
Permissions
To follow this guide, you need to create instances and modify a
network in a project. You should be either a project
owner or editor , or you should
have all of the following
Compute Engine IAM roles :
Task
Required Role
Create load balancer components
Network Admin
Add and remove firewall rules
Security Admin
Create instances
Compute Instance Admin
For more information, see the following guides:
Access control
IAM Conditions
Setup
This guide shows you how to configure and test a regional external passthrough Network Load Balancer
that uses failover. The steps in this section describe how to configure
the following:
Backend VMs:
One primary backend in an unmanaged instance group in zone us-west1-a
One failover backend in an unmanaged instance group in zone us-west1-c
Firewall rules that allow incoming connections to backend VMs
One client VM to test connections and observe failover behavior
The following regional external passthrough Network Load Balancer components:
A health check for the backend service
A backend service in the us-west1 region to manage
connection distribution among the backend VMs
A forwarding rule and IP address for the
frontend of the load balancer
The architecture for this example looks like this:
Failover with a regional external passthrough Network Load Balancer (click to enlarge).
Note: Unmanaged instance groups are used for both the primary and failover
backends in this example.
Creating backend VMs and instance groups
In this step, you'll create the backend VMs and unmanaged instance groups:
The instance group ig-a in us-west1-a is a primary
backend with two VMs:
vm-a1
vm-a2
The instance group ig-c in us-west1-c is a failover
backend with two VMs:
vm-c1
vm-c2
The primary and failover backends are placed in separate zones for
instructional clarity and to handle failover in case one zone goes down.
Each primary and failover VM is configured to run an Apache web server on TCP
port 80. By default, Apache is configured to bind to any IP address. Network
load balancers deliver packets by preserving the destination IP.
Ensure that server software running on your primary and failover VMs listens
on the IP address of the load balancer's forwarding rule. The destination IP
address of a packet delivered to a backend VM by a
regional external passthrough Network Load Balancer is the IP address of the forwarding rule.
For instructional simplicity, all primary and failover VMs run Debian GNU/Linux 9.
Console gcloud
More
Create backend VMs
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Repeat the following steps to create four VMs, using the following name
and zone combinations.
Name: vm-a1 , zone: us-west1-a
Name: vm-a2 , zone: us-west1-a
Name: vm-c1 , zone: us-west1-c
Name: vm-c2 , zone: us-west1-c
Click Create instance .
Set the Name as indicated in step 2.
For the Region , choose us-west1 , and choose a Zone as
indicated in step 2.
In the Boot disk section, ensure that the selected image is
Debian GNU/Linux 12 (bookworm) . Click Choose to change the image if
necessary.
Click Advanced options .
Click Networking and configure the following field:
For Network tags , enter network-lb .
Click Management . Enter the following script into the
Startup script field. The script contents are identical for
all four VMs:
#! /bin/bash
apt-get update
apt-get install apache2 -y
a2ensite default-ssl
a2enmod ssl
vm_hostname="$(curl -H "Metadata-Flavor:Google" \
http://metadata.google.internal/computeMetadata/v1/instance/name)"
echo "Page served from: $vm_hostname" | \
tee /var/www/html/index.html
systemctl restart apache2
Click Create .
Create instance groups
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Repeat the following steps to create two unmanaged instance groups each
with two VMs in them, using these combinations.
Instance group: ig-a , zone: us-west1-a , VMs: vm-a1 and vm-a2
Instance group: ig-c , zone: us-west1-c , VMs: vm-c1 and vm-c2
Click Create instance group .
Click New unmanaged instance group .
Set Name as indicated in step 2.
In the Location section, choose us-west1 for the Region , and
then choose a Zone as indicated in step 2.
For Network , enter default .
In the VM instances section, add the VMs as indicated in step 2.
Click Create .
Create four VMs by running the following command four times, using
these four combinations for VM-NAME and ZONE . The script contents
are identical for all four VMs.
VM-NAME of vm-a1 and ZONE of us-west1-a
VM-NAME of vm-a2 and ZONE of us-west1-a
VM-NAME of vm-c1 and ZONE of us-west1-c
VM-NAME of vm-c2 and ZONE of us-west1-c
gcloud compute instances create VM-NAME \
--zone= ZONE \
--image-family=debian-12 \
--image-project=debian-cloud \
--tags=network-lb \
--metadata=startup-script='#! /bin/bash
apt-get update
apt-get install apache2 -y
a2ensite default-ssl
a2enmod ssl
vm_hostname="$(curl -H "Metadata-Flavor:Google" \
http://metadata.google.internal/computeMetadata/v1/instance/name)"
echo "Page served from: $vm_hostname" | \
tee /var/www/html/index.html
systemctl restart apache2'
Create the two unmanaged instance groups in each zone:
gcloud compute instance-groups unmanaged create ig-a \
--zone us-west1-a
gcloud compute instance-groups unmanaged create ig-c \
--zone us-west1-c
Add the VMs to the appropriate instance groups:
gcloud compute instance-groups unmanaged add-instances ig-a \
--zone us-west1-a \
--instances vm-a1,vm-a2
gcloud compute instance-groups unmanaged add-instances ig-c \
--zone us-west1-c \
--instances vm-c1,vm-c2
Configuring firewall rules
Create a firewall rule that allows external traffic to reach the backend
instances.
Console gcloud
More
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
Click Create firewall rule to create the rule to allow traffic
from any source. Use the following values:
Name : allow-network-lb .
Network : default
Priority : 1000
Direction of traffic : Ingress
Action on match : Allow.
Targets : Specified target tags
Target tags : network-lb
Source filter : IPv4 ranges
Source IPv4 ranges : 0.0.0.0/0 , which allows traffic from
any source. This allows both external traffic and health check
probes to reach the backend instances.
Protocols and ports : Choose Specified protocols and ports .
Select the TCP checkbox and enter 80 .
Click Create .
Click Create firewall rule again to create the rule to allow
incoming SSH connections to the instances. Use the following values:
Name : allow-ssh
Network : default
Priority : 1000
Direction of traffic : Ingress
Action on match : Allow
Targets : Specified target tags
Target tags : network-lb
Source filter : IPv4 ranges
Source IPv4 ranges : 0.0.0.0/0
Protocols and ports : Choose Specified protocols and ports .
Select the TCP checkbox and enter 22 .
Click Create .
gcloud compute firewall-rules create allow-network-lb \
--target-tags network-lb \
--allow tcp:80
gcloud compute firewall-rules create allow-ssh \
--target-tags network-lb \
--allow tcp:22
Configuring load balancer components
These steps configure the following regional external passthrough Network Load Balancer components:
Health check . This example uses an HTTP health check that checks for an
HTTP 200 OK status code.
Backend service . Because the example passes HTTP traffic through the
load balancer, the configuration specifies TCP, not UDP. To
illustrate failover, this backend service has a failover ratio of 0.75 .
Forwarding rule . This example creates a single forwarding rule.
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
For Public facing or internal , select Public facing
(external) and click Next .
Click Configure .
Backend configuration
On the Create external passthrough Network Load Balancer page, in
the Load Balancer name field, enter tcp-network-lb .
In the Region list, select us-west1 .
Click Backend configuration . The load balancer Name you entered
previously appears, but is not modifiable.
Click Backend configuration and do the following:
In the Health check list, click Create a health check , and
then enter the following information:
Name : hc-http-80
Protocol : TCP
Port : 80
Click Create .
In the Backends section, in the Instance group list,
select ig-a .
Click Add backend and repeat this step to add ig-c .
Select the Use this instance group as a failover group for backup
checkbox.
Click Save and continue .
Click Advanced configurations .
For Failover Ratio , enter 0.75 .
Verify that there is a blue check mark next to Backend
configuration before continuing.
Frontend configuration
Click Frontend configuration .
Enter a Name of network-lb-forwarding-rule .
Under IP , click the drop-down menu and select Create IP address .
On the Reserve a new static IP address screen, assign a
Name of network-lb-ip .
Click Reserve .
Choose Single , and enter 80 for the Port number .
Click the Done button.
A blue circle with a checkmark to the left of
Frontend configuration indicates a successful set-up.
Review the configuration
Click the Review and finalize button to check all of your configuration
settings for the load balancer.
If the settings are correct, click Create . It takes a few minutes for
the load balancer to be created.
On the load balancing screen, under the Backend column for your new
load balancer, you should see a green checkmark showing that the new
load balancer is healthy.
Create a static external IP address for your load balancer.
gcloud compute addresses create network-lb-ip \
--region us-west1
Create a new HTTP health check to test TCP connectivity to the VMs
on 80.
gcloud compute health-checks create http hc-http-80 \
--region us-west1 \
--port 80
Create the backend service for HTTP traffic:
gcloud compute backend-services create network-lb-backend-service \
--protocol tcp \
--region us-west1 \
--health-checks hc-http-80 \
--health-checks-region us-west1 \
--failover-ratio 0.75
Add the primary backend to the backend service:
gcloud compute backend-services add-backend network-lb-backend-service \
--region us-west1 \
--instance-group ig-a \
--instance-group-zone us-west1-a
Add the failover backend to the backend service:
gcloud compute backend-services add-backend network-lb-backend-service \
--region us-west1 \
--instance-group ig-c \
--instance-group-zone us-west1-c \
--failover
Create a forwarding rule for the backend service. Use the IP address
reserved in step 1 as the static external IP address of the load
balancer.
gcloud compute forwarding-rules create network-lb-forwarding-rule \
--region us-west1 \
--load-balancing-scheme external \
--address network-lb-ip\
--ports 80 \
--backend-service network-lb-backend-service
Testing
These tests show how to validate your load balancer configuration and learn
about its expected behavior.
Send traffic to the load balancer
This procedure sends external traffic to the load balancer. You'll use this
procedure to complete the other tests.
Connect to the client VM instance.
gcloud compute forwarding-rules describe network-lb-forwarding-rule \
--region us-west1
Make a web request to the load balancer using curl to contact its IP
address.
curl http:// IP_ADDRESS
Note the text returned by the curl command. The name of the backend VM
generating the response is displayed in that text; for example: Page served
from: vm-a1
Testing initial state
After you've configured the example load balancer, all four of the backend VMs
should be healthy:
the two primary VMs, vm-a1 and vm-a2
the two failover VMs, vm-c1 and vm-c2
Follow the test procedure to send traffic to the load balancer .
Repeat the second step a few times. The expected behavior is for traffic to be
served by the two primary VMs, vm-a1 and vm-a2 , because both of them are
healthy. You should see each primary VM serve a response approximately half of
the time because no session affinity has been
configured for this load balancer.
Testing failover
This test simulates the failure of vm-a1 so you can observe failover behavior.
Connect to the vm-a1 VM.
gcloud compute ssh vm-a1 --zone us-west1-a
Stop the Apache web server. After ten seconds, Google Cloud
considers this VM to be unhealthy. (The hc-http-80 health check that you
created in the setup uses the default check interval of five seconds and
unhealthy threshold of two consecutive failed probes.)
sudo apachectl stop
Follow the test procedure to send traffic to the
load balancer . Repeat the second step a few times. The
expected behavior is for new connections to be distributed between the two
healthy failover VMs, vm-c1 and vm-c2 . This happens because
only one primary VM, vm-a2 , is healthy,
and the ratio of healthy primary VMs to total primary
VMs is 0.5 —less than the failover threshold of 0.75 . Each failover
VM serves a response approximately half of the time
as long as the session affinity is set to NONE .
Testing failback
This test simulates failback by restarting the Apache server on vm-a1 .
Connect to the vm-a1 VM.
gcloud compute ssh vm-a1 --zone us-west1-a
Start the Apache web server and wait 10 seconds.
sudo apachectl start
Follow the client test procedure . Repeat the second step a
few times. The expected behavior is for traffic to be served by the two
primary VMs, vm-a1 and vm-a2 . With both primary VMs being healthy, the
ratio of healthy primary VMs to total primary VMs is 1.0 , greater than the
failover threshold of 0.75 , so the load balancer's eligible backends
consist of all healthy primary backend VMs.
Adding more backend VMs
This section extends the example configuration by adding more primary and
failover VMs to the load balancer. It does so by creating two more backend
instance groups to demonstrate that you can distribute primary and failover VMs
among multiple zones in the same region:
A third instance group, ig-d in us-west1-c , serves as a primary
backend with two VMs:
vm-d1
vm-d2
A fourth instance group, ig-b in us-west1-a , serves as a failover
backend with two VMs:
vm-b1
vm-b2
The modified architecture for this example looks like this:
Multi-zone regional external passthrough Network Load Balancer failover (click to enlarge).
Create additional VMs and instance groups
Follow these steps to create the additional primary and failover VMs and their
corresponding unmanaged instance groups.
Console gcloud
More
Create backend VMs
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Repeat the following steps to create four VMs, using the following name
and zone combinations.
Name: vm-b1 , zone: us-west1-a
Name: vm-b2 , zone: us-west1-a
Name: vm-d1 , zone: us-west1-c
Name: vm-d2 , zone: us-west1-c
Click Create instance .
Set the Name as indicated in step 2.
For the Region , choose us-west1 , and choose a Zone as
indicated in step 2.
In the Boot disk section, ensure that the selected image is
Debian GNU/Linux 9 Stretch . Click Choose to change the image if
necessary.
Click Advanced options .
Click Networking and configure the following field:
For Network tags , enter network-lb .
Click Management . Enter the following script into the
Startup script field. The script contents are identical for
all four VMs:
#! /bin/bash
apt-get update
apt-get install apache2 -y
a2ensite default-ssl
a2enmod ssl
vm_hostname="$(curl -H "Metadata-Flavor:Google" \
http://metadata.google.internal/computeMetadata/v1/instance/name)"
echo "Page served from: $vm_hostname" | \
tee /var/www/html/index.html
systemctl restart apache2
Click Create .
Create instance groups
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Repeat the following steps to create two unmanaged instance groups each
with two VMs in their one, using these combinations.
Instance group: ig-b , zone: us-west1-a , VMs: vm-b1 and vm-b2
Instance group: ig-d , zone: us-west1-c , VMs: vm-d1 and vm-d2
Click Create instance group .
Click New unmanaged instance group .
Set Name as indicated in step 2.
In the Location section, choose us-west1 for the Region , and
then choose a Zone as indicated in step 2.
For Network , enter default .
In the VM instances section, add the VMs as indicated in step 2.
Click Create .
Create four VMs by running the following command four times, using
these four combinations for VM-NAME and ZONE . The script contents
are identical for all four VMs.
VM-NAME of vm-b1 and ZONE of us-west1-a
VM-NAME of vm-b2 and ZONE of us-west1-a
VM-NAME of vm-d1 and ZONE of us-west1-c
VM-NAME of vm-d2 and ZONE of us-west1-c
gcloud compute instances create VM-NAME \
--zone= ZONE \
--image-family=debian-12 \
--image-project=debian-cloud \
--tags=network-lb \
--metadata=startup-script='#! /bin/bash
apt-get update
apt-get install apache2 -y
a2ensite default-ssl
a2enmod ssl
vm_hostname="$(curl -H "Metadata-Flavor:Google" \
http://metadata.google.internal/computeMetadata/v1/instance/name)"
echo "Page served from: $vm_hostname" | \
tee /var/www/html/index.html
systemctl restart apache2'
Create the two unmanaged instance groups in each zone:
gcloud compute instance-groups unmanaged create ig-b \
--zone us-west1-a
gcloud compute instance-groups unmanaged create ig-d \
--zone us-west1-c
Add the VMs to the appropriate instance groups:
gcloud compute instance-groups unmanaged add-instances ig-b \
--zone us-west1-a \
--instances vm-b1,vm-b2
gcloud compute instance-groups unmanaged add-instances ig-d \
--zone us-west1-c \
--instances vm-d1,vm-d2
Adding a primary backend
You can use this procedure as a template for how to add an unmanaged instance
group to an existing regional external passthrough Network Load Balancer's backend service as a
primary backend. For the example configuration, this procedure shows you how to
add instance group ig-d as a primary backend to the network-lb load balancer.
Console gcloud
More
Edit the load balancer configuration to add a primary backend.
In the Google Cloud console, go to the Load balancing page.
Go to Load balancing
Click on the load balancer you want to modify.
Click Edit .
Click Backend configuration and make the following changes:
Under Backends , click Add Backend .
From the dropdown, select the instance group to be added as a
primary backend. In this case, ig-d .
Click Done .
Verify that there is a blue check mark next to Backend
configuration before continuing.
Review the configuration
Click the Review and finalize button and confirm that the new
primary backend is visible under Backend .
If the settings are correct, click Create . It takes a few minutes for
the load balancer to be created.
On the load balancing screen, under the Backend column for your new
load balancer, you should see a green checkmark showing that the new
load balancer is healthy.
Use the following gcloud command to add a primary backend
to an existing regional external passthrough Network Load Balancer's backend service.
gcloud compute backend-services add-backend BACKEND_SERVICE_NAME \
--instance-group INSTANCE_GROUP_NAME \
--instance-group-zone INSTANCE_GROUP_ZONE \
--region REGION
where:
BACKEND_SERVICE_NAME is the name of the load balancer's backend
service. For the example, use network-lb-backend-service .
INSTANCE_GROUP_NAME is the name of the instance group to add as a
primary backend. For the example, use ig-d .
INSTANCE_GROUP_ZONE is the zone where the instance group is defined.
For the example, use us-west1-c .
REGION is the region of the load balancer. For the example, use
us-west1 .
Adding a failover backend
You can use this procedure as a template for how to add an unmanaged instance
group to an existing regional external passthrough Network Load Balancer's backend service as a
failover backend. For the example configuration, this procedure shows you how to
add instance group ig-b as a failover backend to the network-lb load balancer.
Console gcloud
More
Edit the load balancer configuration to add a primary backend.
In the Google Cloud console, go to the Load balancing page.
Go to Load balancing
Click on the load balancer you want to modify.
Click Edit .
Click Backend configuration and make the following changes:
Under Backends , click Add Backend .
From the dropdown, select the instance group to be added as a
failover backend. In this case, ig-b .
Select the Use this instance group as a failover group for backup
checkbox.
Click Done .
Verify that there is a blue check mark next to Backend
configuration before continuing.
Review the configuration
Click the Review and finalize button and confirm that the new
primary backend is visible under Backend .
If the settings are correct, click Create . It takes a few minutes for
the load balancer to be created.
On the load balancing screen, under the Backend column for your new
load balancer, you should see a green checkmark showing that the new
load balancer is healthy.
Use the following gcloud command to add a failover backend
to an existing regional external passthrough Network Load Balancer's backend service.
gcloud compute backend-services add-backend BACKEND_SERVICE_NAME \
--instance-group INSTANCE_GROUP_NAME \
--instance-group-zone INSTANCE_GROUP_ZONE \
--region REGION \
--failover
where:
BACKEND_SERVICE_NAME is the name of the load balancer's backend
service. For the example, use network-lb-backend-service .
INSTANCE_GROUP_NAME is the name of the instance group to add as a
failover backend. For the example, use ig-b .
INSTANCE_GROUP_ZONE is the zone where the instance group is defined.
For the example, use us-west1-a .
REGION is the region of the load balancer. For the example, use
us-west1 .
Converting a primary or failover backend
You can convert a primary backend to a failover backend,
or a failover backend to a primary backend,
without having to remove the instance group from the regional external passthrough Network Load Balancer's
backend service.
gcloud
More
Use the following gcloud command to convert an existing primary backend to
a failover backend:
gcloud compute backend-services update-backend BACKEND_SERVICE_NAME \
--instance-group INSTANCE_GROUP_NAME \
--instance-group-zone INSTANCE_GROUP_ZONE \
--region REGION \
--failover
Use the following gcloud command to convert an existing failover backend to
a primary backend:
gcloud compute backend-services update-backend BACKEND_SERVICE_NAME \
--instance-group INSTANCE_GROUP_NAME \
--instance-group-zone INSTANCE_GROUP_ZONE \
--region REGION \
--no-failover
where:
BACKEND_SERVICE_NAME is the name of the load balancer's backend
service.
INSTANCE_GROUP_NAME is the name of the instance group.
INSTANCE_GROUP_ZONE is the zone where the instance group is defined.
REGION is the region of the load balancer.
Configuring failover policies
This section describes how to configure a failover policy for a regional external passthrough Network Load Balancer
backend service. For more information on the parameters of a failover policy,
see
Failover .
Defining a failover policy
The following instructions describe how to define the failover policy for an
existing regional external passthrough Network Load Balancer.
gcloud
More
To define a failover policy using the gcloud CLI, update the
load balancer's backend service:
gcloud compute backend-services update BACKEND_SERVICE_NAME \
--region REGION \
--failover-ratio FAILOVER_RATIO \
--connection-drain-on-failover \
--drop-traffic-if-unhealthy
where:
BACKEND_SERVICE_NAME is the name of the load balancer's backend
service. For the example, use network-lb .
REGION is the region of the load balancer. For the example, use
us-west1 .
FAILOVER_RATIO is the failover ratio. Possible values are between
0.0 and 1.0 , inclusive. For the example, use 0.75 .
Viewing a failover policy
The following instructions describe how to view the existing failover policy for
a regional external passthrough Network Load Balancer.
gcloud
More
To list the failover policy settings using the gcloud CLI,
use the following command. Undefined settings in a failover policy use
default failover policy values .
gcloud compute backend-services describe BACKEND_SERVICE_NAME \
--region REGION \
--format="get(failoverPolicy)"
where:
BACKEND_SERVICE_NAME is the name of the load balancer's backend
service. For the example, use network-lb-backend-service .
REGION is the region of the load balancer. For the example, use
us-west1 .
What's next
See Regional external passthrough Network Load Balancer overview for important
fundamentals.
See Set up a regional external passthrough Network Load Balancer for an
example configuration.
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
