---
title: "Set up a managed instance group backend \_|\_ Cloud CDN \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/cdn/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-mig
  title: "Set up a managed instance group backend \_|\_ Cloud CDN \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud CDN
Guides
Send feedback
Set up a managed instance group backend
Stay organized with collections
Save and categorize content based on your preferences.
Cloud CDN leverages Google Cloud global external Application Load Balancers to provide routing,
health checking, and Anycast IP support. Global external Application Load Balancers can
have multiple backend instance types ,
and you can choose which backends (or origins ) to enable
Cloud CDN for.
This setup guide shows you how to create a global external Application Load Balancer with a
Compute Engine managed instance group
backend with Cloud CDN enabled.
For general concepts, see the
External Application Load Balancer overview .
If you are an existing user of the classic Application Load Balancer, make sure that you
review Migration
overview when you plan a new deployment with the global external Application Load Balancer.
Note: If you already have a global external Application Load Balancer with an instance group (or
groups), you can skip to the Enabling Cloud CDN section
of this guide.
Load balancer topologies
For an HTTPS load balancer, you create the configuration shown in
the following diagram.
Figure 1. External Application Load Balancer with a managed instance group (MIG) backend (click to enlarge).
For an HTTP load balancer, you create the configuration shown in
the following diagram.
Figure 2. External Application Load Balancer with a managed instance group (MIG) backend (click to enlarge).
The sequence of events in the diagrams are as follows:
A client sends a content request to the external IPv4 address defined in the
forwarding rule .
The load balancer checks whether the request can be served from cache. If so,
the load balancer serves the requested content out of cache.
If not, processing continues.
For an HTTPS load balancer, the forwarding rule directs the request to the
target HTTPS proxy .
For an HTTP load balancer, the forwarding rule directs the request to the
target HTTP proxy .
The target proxy uses the rule in the URL
map to determine that the
single backend service receives all requests.
The load balancer determines that the backend
service has only one instance
group and directs the request to a virtual machine (VM) instance in that
group.
The VM serves the content requested by the user.
External Application Load Balancer with a managed instance group (MIG) backend and Cloud CDN enabled (click to enlarge).
Before you begin
Complete the following steps before you create the load balancer.
Set up an SSL certificate resource
To create the load balancer, you must have an SSL certificate resource that can be attached to the target
proxy. The SSL certificate resource can be either a certificate map or a
Compute Engine SSL certificate (classic certificate).
Certificate map
You can create a certificate map as described in
one of the following documents:
Deploy a global Google-managed certificate with load balancer authorization
Deploy a global Google-managed certificate with DNS authorization
Deploy a global Google-managed certificate with Certificate Authority Service
Deploy a global self-managed certificate
Compute Engine SSL certificate
For an HTTPS load balancer, create a Compute Engine SSL certificate resource
as described in one of the following documents:
Use self-managed SSL
certificates
Use Google-managed SSL
certificates
We recommend using a Google-managed certificate.
Warning: Don't use a self-signed certificate for production purposes.
Set up permissions
To complete the steps in this guide, you must have permission to create
Compute Engine instances, firewall rules, and reserved IP addresses in a
project. You must have either a project owner or editor
role , or you must have the following
Compute Engine IAM roles .
Task
Required role
Create instances
Instance Admin
Add and remove firewall rules
Security Admin
Create load balancer components
Network Admin
Create a project (optional)
Project Creator
For more information, see the following guides:
Access control
IAM Conditions
Optional: Use BYOIP addresses
With bring your own IP (BYOIP), you can import your own public addresses to
Google Cloud to use the addresses with Google Cloud resources. For
example, if you import your own IPv4 addresses, you can assign one to the
forwarding rule when you configure your load balancer. When you follow the
instructions in this document to
set up the load balancer , provide the BYOIP address as the
IP address .
For more information about using BYOIP, see
Bring your own IP addresses .
Configure the network and subnets
To create the example network and subnet, follow these steps.
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click Create VPC network .
Enter a Name for the network.
For the Subnet creation mode , choose Custom .
In the New subnet section, configure the following fields:
Provide a Name for the subnet.
Select a Region .
For IP stack type , select IPv4 (single-stack) .
Enter an IP address range . This is the primary IPv4
range for the subnet.
Click Done .
To add a subnet in a different region, click Add subnet and repeat
the previous steps.
Click Create .
gcloud
Create the custom mode VPC network:
gcloud compute networks create NETWORK \
--subnet-mode=custom
Within the network, create a subnet for backends:
gcloud compute networks subnets create SUBNET \
--network= NETWORK \
--stack-type=IPV4_ONLY \
--range=10.1.2.0/24 \
--region= REGION
Replace the following:
NETWORK : a name for the VPC network.
SUBNET : a name for the subnet.
REGION : the name of the region.
Create a managed instance group
To set up a load balancer with a Compute Engine backend, your VMs need
to be in an instance group. This guide describes how to create a managed
instance group with Linux VMs that have Apache running, and then set up load
balancing. A managed instance group creates each of its managed instances based
on the instance templates that you specify.
The managed instance group provides VMs running the backend servers of
an external HTTP(S) load balancer. For demonstration purposes, backends
serve their own hostnames.
Before you create a managed instance group, create an instance template.
Console
To support IPv4 traffic , use the following steps:
In the Google Cloud console, go to the Instance templates page.
Go to Instance templates
Click Create instance template .
For Name , enter lb-backend-template .
Ensure that the Boot disk is set to a Debian image, such as
Debian GNU/Linux 10 (buster) . These instructions use commands that
are only available on Debian, such as apt-get .
Expand Advanced options .
Expand Networking and configure the following fields:
For Network tags , enter allow-health-check .
In the Network interfaces section, click
edit Edit and make the
following changes:
Network : NETWORK
Subnet : SUBNET
IPv4 traffic : IPv4 (single-stack)
Click Done .
Expand Management . In the Startup script field, enter the
following script:
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
gcloud
To support IPv4 traffic , run the following command:
gcloud compute instance-templates create TEMPLATE_NAME \
--region= REGION \
--network= NETWORK \
--subnet= SUBNET \
--stack-type=IPV4_ONLY \
--tags=allow-health-check \
--image-family=debian-10 \
--image-project=debian-cloud \
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
Terraform
To create the instance template, use the google_compute_instance_template
resource .
resource "google_compute_instance_template" "default" {
name = "lb-backend-template"
disk {
auto_delete = true
boot = true
device_name = "persistent-disk-0"
mode = "READ_WRITE"
source_image = "projects/debian-cloud/global/images/family/debian-11"
type = "PERSISTENT"
}
labels = {
managed-by-cnrm = "true"
}
machine_type = "n1-standard-1"
metadata = {
startup-script = "#! /bin/bash\n sudo apt-get update\n sudo apt-get install apache2 -y\n sudo a2ensite default-ssl\n sudo a2enmod ssl\n vm_hostname=\"$(curl -H \"Metadata-Flavor:Google\" \\\n http://169.254.169.254/computeMetadata/v1/instance/name)\"\n sudo echo \"Page served from: $vm_hostname\" | \\\n tee /var/www/html/index.html\n sudo systemctl restart apache2"
}
network_interface {
access_config {
network_tier = "PREMIUM"
}
network = "global/networks/default"
subnetwork = "regions/us-east1/subnetworks/default"
}
region = "us-east1"
scheduling {
automatic_restart = true
on_host_maintenance = "MIGRATE"
provisioning_model = "STANDARD"
}
service_account {
email = "default"
scopes = ["https://www.googleapis.com/auth/devstorage.read_only", "https://www.googleapis.com/auth/logging.write", "https://www.googleapis.com/auth/monitoring.write", "https://www.googleapis.com/auth/pubsub", "https://www.googleapis.com/auth/service.management.readonly", "https://www.googleapis.com/auth/servicecontrol", "https://www.googleapis.com/auth/trace.append"]
}
tags = ["allow-health-check"]
}
Create the managed instance group and select the instance template.
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click Create instance group .
On the left, choose New managed instance group (stateless) .
For Name , enter lb-backend-example .
Under Location , select Single zone .
For Region , select your preferred region.
For Zone , select a zone.
Under Instance template , select the instance template lb-backend-template .
For Autoscaling mode , select On: add and remove instances to the
group .
Set Minimum number of instances to 2 , and set Maximum number of
instances to 2 or more.
To create the new instance group, click Create .
gcloud
Create the managed instance group based on the template.
gcloud compute instance-groups managed create lb-backend-example \
--template= TEMPLATE_NAME --size=2 --zone= ZONE_A
Terraform
To create the managed instance group, use the google_compute_instance_group_manager
resource .
resource "google_compute_instance_group_manager" "default" {
name = "lb-backend-example"
zone = "us-east1-b"
named_port {
name = "http"
port = 80
}
version {
instance_template = google_compute_instance_template.default.id
name = "primary"
}
base_instance_name = "vm"
target_size = 2
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Add a named port to the instance group
For your instance group, define an HTTP service and map a port name
to the relevant port. The load balancing service forwards
traffic to the named port. For more information, see Named ports .
Console
In the Google Cloud console, go to the Instance groups page.
Go to Instance groups
Click lb-backend-example .
On the instance group's Overview page, click
edit Edit .
In the Port mapping section, click Add port .
For the port name, enter http . For the port number, enter 80 .
Click Save .
gcloud
Use the gcloud compute instance-groups
set-named-ports
command.
gcloud compute instance-groups set-named-ports lb-backend-example \
--named-ports http:80 \
--zone ZONE_A
Terraform
The named_port attribute is included in the
managed instance group sample .
Configure a firewall rule
In this example, you create the fw-allow-health-check firewall rule.
This is an ingress rule that allows traffic from the Google Cloud health
checking systems ( 130.211.0.0/22 and 35.191.0.0/16 ). This example uses the
target tag allow-health-check to identify the VMs.
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
Click Create firewall rule to create the firewall rule.
For Name , enter fw-allow-health-check .
Select a Network .
Under Targets , select Specified target tags .
Populate the Target tags field with allow-health-check .
Set Source filter to IPv4 ranges .
Set Source IPv4 ranges to 130.211.0.0/22 and 35.191.0.0/16 .
Under Protocols and ports , select Specified protocols and ports .
Select the TCP checkbox, and then type 80 for the port
numbers.
Click Create .
gcloud
gcloud compute firewall-rules create fw-allow-health-check \
--network= NETWORK \
--action=allow \
--direction=ingress \
--source-ranges=130.211.0.0/22,35.191.0.0/16 \
--target-tags=allow-health-check \
--rules=tcp:80
Terraform
To create the firewall rule, use the google_compute_firewall
resource .
resource "google_compute_firewall" "default" {
name = "fw-allow-health-check"
direction = "INGRESS"
network = "global/networks/default"
priority = 1000
source_ranges = ["130.211.0.0/22", "35.191.0.0/16"]
target_tags = ["allow-health-check"]
allow {
ports = ["80"]
protocol = "tcp"
}
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Reserve an external IP address
Now that your instances are up and running, set up a global static external IP
address that your customers use
to reach your load balancer.
Console
In the Google Cloud console, go to the External IP addresses page.
Go to External IP addresses
To reserve an IPv4 address, click Reserve external static IP address .
For Name , enter lb-ipv4-1 .
Set Network Service Tier to Premium .
Set IP version to IPv4 .
Set Type to Global .
Click Reserve .
gcloud
gcloud compute addresses create lb-ipv4-1 \
--ip-version=IPV4 \
--network-tier=PREMIUM \
--global
Note the IPv4 address that was reserved:
gcloud compute addresses describe lb-ipv4-1 \
--format="get(address)" \
--global
Terraform
To reserve the IP address, use the google_compute_global_address
resource .
resource "google_compute_global_address" "default" {
name = "lb-ipv4-1"
ip_version = "IPV4"
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Set up the load balancer
In this example, you are using HTTPS (frontend) between the client and the load
balancer. For HTTPS, you need one or more SSL certificate resources
to configure the proxy. We recommend using a Google-managed certificate.
Even if you're using HTTPS on the frontend, you can use HTTP on the backend.
Google automatically encrypts traffic between Google Front Ends (GFEs) and your
backends
that reside within Google Cloud VPC networks.
Console
Select the load balancer type
In the Google Cloud console, go to the Load balancing page.
Go to Load balancing
Click Create load balancer .
For Type of load balancer , select Application Load Balancer
(HTTP/HTTPS) and click Next .
For Public facing or internal , select Public facing
(external) and click Next .
For Global or single region deployment , select Best for global
workloads and click Next .
For Load balancer generation , select Classic
Application Load Balancer and click Next .
Click Configure .
Basic configuration
For the load balancer Name , enter something like
web-map-https or web-map-http .
Frontend configuration
Click Frontend configuration .
Set Protocol to HTTPS .
Select IPv4 for IPv4 traffic. Set IP address to
lb-ipv4-1 , which you created earlier.
Set Port to 443 .
For Choose certificate repository , select
Use certificate map or Use classic certificates .
Depending on your selection, select a certificate map or a classic certificate.
Optional: Create an SSL policy:
In the SSL policy list, select Create a
policy .
Set the name of the SSL policy to my-ssl-policy .
For Minimum TLS Version , select TLS 1.0 .
For Profile , select Modern . The Enabled features and Disabled features are displayed.
Click Save .
If you have not created any SSL policies, a default SSL policy
is applied.
Optional: Select the Enable HTTP to HTTPS Redirect
checkbox to enable redirects.
Enabling this checkbox creates an additional partial HTTP load
balancer that uses the same IP address as your HTTPS load
balancer and redirects incoming HTTP requests to your load
balancer's HTTPS frontend.
This checkbox can only be selected when the HTTPS protocol
is selected and a reserved IP address is used.
Click Done .
Backend configuration
Click Backend configuration .
Under Backend services & backend buckets , select Create a
backend service .
Add a name for your backend service, such as
web-backend-service .
Go to the Security section, and then select Enable
IAP to secure access to your applications .
Cloud CDN and IAP are not compatible. If you
have Cloud CDN enabled, and you select to enable
IAP, Cloud CDN is automatically disabled.
Optional: Configure a default backend security policy. The default security
policy throttles traffic over a user-configured threshold. For more
information about default security policies, see the
Rate limiting overview .
To opt out of the Cloud Armor default security policy, select
None in the Cloud Armor backend security policy list.
To configure the Cloud Armor default security policy, select
Default security policy in the Cloud Armor backend security policy list.
In the Policy name field, accept the automatically
generated name or enter a name for your security policy.
In the Request count field, accept the default request
count or enter an integer between 1 and 10,000 .
In the Interval field, select an interval.
In the Enforce on key field, choose one of the following
values: All , IP address , or
X-Forwarded-For IP address . For more information about
these options, see Identifying clients for rate limiting .
Select Enable Cloud CDN .
Optional: Modify the
cache mode and
TTL settings.
Retain the other default settings.
Click Create .
Host and path rules
For Host and path rules , retain the default settings.
Review and finalize
Click Review and finalize .
Review your load balancer configuration settings.
Optional: Click Equivalent code to view the REST API request
that will be used to create the load balancer.
Click Create .
Wait for the load balancer to be created.
If you created an HTTPS load balancer and selected the
Enable HTTP to HTTPS Redirect checkbox, you will also see
an HTTP load balancer created with a -redirect suffix.
Click the name of the load balancer.
On the Load balancer details screen, note the
IP:Port for your load balancer.
gcloud
Create a health check.
gcloud compute health-checks create http http-basic-check \
--port 80
Create a backend service.
gcloud compute backend-services create web-backend-service \
--load-balancing-scheme=EXTERNAL \
--protocol=HTTP \
--port-name=http \
--health-checks=http-basic-check \
--global
Add your instance group as the backend to the backend service.
gcloud beta compute backend-services add-backend web-backend-service \
--instance-group=lb-backend-example \
--instance-group-zone= ZONE_A \
--global
For HTTP, create a URL map to route the incoming requests to the default backend
service.
gcloud beta compute url-maps create web-map-http \
--default-service web-backend-service
For HTTPS, create a URL map to route the incoming requests to the
default backend service.
gcloud beta compute url-maps create web-map-https \
--default-service web-backend-service
Set up an HTTPS frontend
Skip this section for HTTP load balancers.
For HTTPS, if you haven't already done so, create the global SSL
certificate resource, as shown in the following sections. In this example,
the name of the SSL certificate resource is www-ssl-cert .
Creating
a Google-managed SSL certificate resource
Creating
a self-managed SSL certificate resource
For HTTPS, create a target HTTPS proxy to route requests to your URL
map. The proxy is the portion of the load balancer that holds the SSL certificate
for an HTTPS load balancer, so you also load your certificate in this step.
gcloud compute target-https-proxies create https-lb-proxy \
--url-map=web-map-https \
--ssl-certificates=www-ssl-cert
For HTTPS, create a global forwarding rule to route incoming requests to
the proxy.
gcloud compute forwarding-rules create https-content-rule \
--load-balancing-scheme=EXTERNAL \
--network-tier=PREMIUM \
--address=lb-ipv4-1 \
--global \
--target-https-proxy=https-lb-proxy \
--ports=443
Optional: For HTTPS, create a global SSL policy and attach it to the HTTPS proxy.
To create a global SSL policy:
gcloud compute ssl-policies create my-ssl-policy \
--profile MODERN \
--min-tls-version 1.0
To attach the SSL policy to the global target HTTPS proxy:
gcloud compute target-https-proxies update https-lb-proxy \
--ssl-policy my-ssl-policy
Set up an HTTP frontend
Skip this section for HTTPS load balancers.
For HTTP, create a target HTTP proxy to route requests to your URL map.
gcloud compute target-http-proxies create http-lb-proxy \
--url-map=web-map-http
For HTTP, create a global forwarding rule to route incoming requests to
the proxy.
gcloud compute forwarding-rules create http-content-rule \
--load-balancing-scheme=EXTERNAL \
--address=lb-ipv4-1 \
--global \
--target-http-proxy=http-lb-proxy \
--ports=80
Terraform
To create the health check, use the google_compute_health_check resource.
resource "google_compute_health_check" "default" {
name = "http-basic-check"
check_interval_sec = 5
healthy_threshold = 2
http_health_check {
port = 80
port_specification = "USE_FIXED_PORT"
proxy_header = "NONE"
request_path = "/"
}
timeout_sec = 5
unhealthy_threshold = 2
}
To create the backend service, use the google_compute_backend_service resource.
This example uses load_balancing_scheme="EXTERNAL_MANAGED" ,
which sets up a global external Application Load Balancer with
advanced
traffic management capability .
To create a classic Application Load Balancer, make sure you change the
load_balancing_scheme to EXTERNAL before
running the script.
resource "google_compute_backend_service" "default" {
name = "web-backend-service"
connection_draining_timeout_sec = 0
health_checks = [google_compute_health_check.default.id]
load_balancing_scheme = "EXTERNAL_MANAGED"
port_name = "http"
protocol = "HTTP"
session_affinity = "NONE"
timeout_sec = 30
backend {
group = google_compute_instance_group_manager.default.instance_group
balancing_mode = "UTILIZATION"
capacity_scaler = 1.0
}
}
To create the URL map, use the google_compute_url_map resource.
resource "google_compute_url_map" "default" {
name = "web-map-http"
default_service = google_compute_backend_service.default.id
}
To create the target HTTP proxy, use the google_compute_target_http_proxy resource.
resource "google_compute_target_http_proxy" "default" {
name = "http-lb-proxy"
url_map = google_compute_url_map.default.id
}
To create the forwarding rule, use the google_compute_global_forwarding_rule resource.
This example uses load_balancing_scheme="EXTERNAL_MANAGED" ,
which sets up a global external Application Load Balancer with
advanced
traffic management capability .
To create a classic Application Load Balancer, make sure you change the
load_balancing_scheme to EXTERNAL before
running the script.
resource "google_compute_global_forwarding_rule" "default" {
name = "http-content-rule"
ip_protocol = "TCP"
load_balancing_scheme = "EXTERNAL_MANAGED"
port_range = "80-80"
target = google_compute_target_http_proxy.default.id
ip_address = google_compute_global_address.default.id
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Enable Cloud CDN
If you didn't already enable Cloud CDN when you created your backend
service, you can do this now by updating the backend service.
gcloud compute backend-services update web-backend-service \
--enable-cdn \
--cache-mode= CACHE_MODE
Set the cache mode by replacing
CACHE_MODE with one of the following:
CACHE_All_STATIC : Automatically caches static
content .
USE_ORIGIN_HEADERS (default): Requires the origin to set valid caching
headers to
cache content.
FORCE_CACHE_ALL : Caches all content, ignoring any private , no-store ,
or no-cache directives in Cache-Control response headers.
Connect your domain to your load balancer
After the load balancer is created, note the IP address that is associated with
the load balancer—for example, 30.90.80.100 . To point your domain to your
load balancer, create an A record by using your domain registration service. If
you added multiple domains to your SSL certificate, you must add an A record
for each one, all pointing to the load balancer's IP address. For example, to
create A records for www.example.com and example.com , use the following:
NAME TYPE DATA
www A 30.90.80.100
@ A 30.90.80.100
If you use Cloud DNS as your DNS provider, see
Add, modify, and delete records .
Test traffic sent to your instances
Now that the load balancing service is running, you can send
traffic to the forwarding rule and watch the traffic be dispersed to different
instances.
Console
In the Google Cloud console, go to the Load balancing page.
Go to Load balancing
Click the load balancer that you just created.
In the Backend section, confirm that the VMs are healthy. The
Healthy column should be populated, indicating that both VMs
are healthy ( 2/2 ). If you see otherwise, first try reloading
the page. It can take a few moments for the Google Cloud console to
indicate that the VMs are healthy. If the backends do not appear healthy
after a few minutes, review the firewall configuration and the network tag
assigned to your backend VMs.
For HTTPS, if you are using a Google-managed certificate, confirm that your
certificate resource's status is ACTIVE. For more information, see
Google-managed SSL certificate resource status .
After the Google Cloud console shows that the backend instances are
healthy, you can test your load balancer using a web browser by going to
https:// IP_ADDRESS (or
http:// IP_ADDRESS ). Replace
IP_ADDRESS with the
load balancer's IP address .
If you used a self-signed certificate for testing HTTPS, your browser
displays a warning. You must explicitly instruct your browser to accept a
self-signed certificate.
Your browser should render a page with content showing the name of the
instance that served the page, along with its zone (for example, Page
served from: lb-backend-example-xxxx ). If your browser doesn't
render this page, review the configuration settings in this guide.
gcloud
gcloud compute addresses describe lb-ipv4-1 \
--format="get(address)" \
--global
After a few minutes have passed, you can test the setup by running the following
curl command.
curl http:// IP_ADDRESS
-OR-
curl https:// HOSTNAME
Disable Cloud CDN
Console
Disable Cloud CDN for a single backend service
In the Google Cloud console, go to the Cloud CDN page.
Go to Cloud CDN
On the right side of the origin row, click
Menu more_vert
and then select edit Edit .
Clear the checkboxes of any backend services that you
want to stop from using Cloud CDN.
Click Update .
Remove Cloud CDN for all backend services for an origin
In the Google Cloud console, go to the Cloud CDN page.
Go to Cloud CDN
On the right side of the origin row, click
Menu more_vert
and then select Remove .
To confirm, click Remove .
gcloud
gcloud compute backend-services update BACKEND_SERVICE_NAME \
--no-enable-cdn
Disabling Cloud CDN does not invalidate or purge caches. If you
disable and then re-enable Cloud CDN, most or all of your cached
content might still be cached. To prevent content from being served from cache,
you must invalidate that content .
What's next
To learn about what content is cached, see the
Caching overview .
To use Cloud CDN in GKE, see
Ingress features .
To check whether Cloud CDN is serving responses from cache, see
Viewing logs .
To find information about common problems and solutions, see
Troubleshooting .
To learn how Cloud CDN works, see the
Cloud CDN overview .
To set up cache policies in URL maps, see
Configure a Cloud CDN cache policy .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
