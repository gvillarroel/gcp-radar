---
title: "Terraform examples for external proxy Network Load Balancers \_|\_ Cloud Load\
  \ Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/tcp/ext-tcp-proxy-lb-tf-examples
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/tcp/ext-tcp-proxy-lb-tf-examples
  title: "Terraform examples for external proxy Network Load Balancers \_|\_ Cloud\
    \ Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Terraform examples for external proxy Network Load Balancers | Cloud Load Balancing | Google Cloud Documentation
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
Create an external proxy Network Load Balancer with a TCP proxy
Create an external proxy Network Load Balancer with an SSL proxy
Home
Documentation
Networking
Load Balancing
Guides
Send feedback
Terraform examples for external proxy Network Load Balancers
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Create an external proxy Network Load Balancer with a TCP proxy
Create an external proxy Network Load Balancer with an SSL proxy
You can use the following examples to deploy external proxy Network Load Balancers.
If you are new to using Terraform for Google Cloud,
see Get started with Terraform .
Create an external proxy Network Load Balancer with a TCP proxy
You can use Terraform resources to bring up an external proxy Network Load Balancer with a
managed instance group backend.
For information about the load balancer setup, see the
primary setup guide .
# VPC
resource "google_compute_network" "default" {
name = "tcp-proxy-xlb-network"
provider = google-beta
auto_create_subnetworks = false
}
# backend subnet
resource "google_compute_subnetwork" "default" {
name = "tcp-proxy-xlb-subnet"
provider = google-beta
ip_cidr_range = "10.0.1.0/24"
region = "us-central1"
network = google_compute_network.default.id
}
# reserved IP address
resource "google_compute_global_address" "default" {
provider = google-beta
name = "tcp-proxy-xlb-ip"
}
# forwarding rule
resource "google_compute_global_forwarding_rule" "default" {
name = "tcp-proxy-xlb-forwarding-rule"
provider = google-beta
ip_protocol = "TCP"
load_balancing_scheme = "EXTERNAL"
port_range = "110"
target = google_compute_target_tcp_proxy.default.id
ip_address = google_compute_global_address.default.id
}
resource "google_compute_target_tcp_proxy" "default" {
provider = google-beta
name = "test-proxy-health-check"
backend_service = google_compute_backend_service.default.id
}
# backend service
resource "google_compute_backend_service" "default" {
provider = google-beta
name = "tcp-proxy-xlb-backend-service"
protocol = "TCP"
port_name = "tcp"
load_balancing_scheme = "EXTERNAL"
timeout_sec = 10
health_checks = [google_compute_health_check.default.id]
backend {
group = google_compute_instance_group_manager.default.instance_group
balancing_mode = "UTILIZATION"
max_utilization = 1.0
capacity_scaler = 1.0
}
}
resource "google_compute_health_check" "default" {
provider = google-beta
name = "tcp-proxy-health-check"
timeout_sec = 1
check_interval_sec = 1
tcp_health_check {
port = "80"
}
}
# instance template
resource "google_compute_instance_template" "default" {
name = "tcp-proxy-xlb-mig-template"
provider = google-beta
machine_type = "e2-small"
tags = ["allow-health-check"]
network_interface {
network = google_compute_network.default.id
subnetwork = google_compute_subnetwork.default.id
access_config {
# add external ip to fetch packages
}
}
disk {
source_image = "debian-cloud/debian-12"
auto_delete = true
boot = true
}
# install nginx and serve a simple web page
metadata = {
startup-script = <<-EOF1
#! /bin/bash
set -euo pipefail
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y nginx-light jq
NAME=$(curl -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/hostname")
IP=$(curl -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/ip")
METADATA=$(curl -f -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/attributes/?recursive=True" | jq 'del(.["startup-script"])')
cat <<EOF > /var/www/html/index.html
<pre>
Name: $NAME
IP: $IP
Metadata: $METADATA
</pre>
EOF
EOF1
}
lifecycle {
create_before_destroy = true
}
}
# MIG
resource "google_compute_instance_group_manager" "default" {
name = "tcp-proxy-xlb-mig1"
provider = google-beta
zone = "us-central1-c"
named_port {
name = "tcp"
port = 80
}
version {
instance_template = google_compute_instance_template.default.id
name = "primary"
}
base_instance_name = "vm"
target_size = 2
}
# allow access from health check ranges
resource "google_compute_firewall" "default" {
name = "tcp-proxy-xlb-fw-allow-hc"
provider = google-beta
direction = "INGRESS"
network = google_compute_network.default.id
source_ranges = ["130.211.0.0/22", "35.191.0.0/16"]
allow {
protocol = "tcp"
}
target_tags = ["allow-health-check"]
}
Create an external proxy Network Load Balancer with an SSL proxy
You can use Terraform resources to bring up an external proxy Network Load Balancer with a
managed instance group backend.
For information about the load balancer setup, see the
primary setup guide .
# VPC
resource "google_compute_network" "default" {
name = "ssl-proxy-xlb-network"
provider = google
auto_create_subnetworks = false
}
# backend subnet
resource "google_compute_subnetwork" "default" {
name = "ssl-proxy-xlb-subnet"
provider = google
ip_cidr_range = "10.0.1.0/24"
region = "us-central1"
network = google_compute_network.default.id
}
# reserved IP address
resource "google_compute_global_address" "default" {
name = "ssl-proxy-xlb-ip"
}
# Self-signed regional SSL certificate for testing
resource "tls_private_key" "default" {
algorithm = "RSA"
rsa_bits = 2048
}
resource "tls_self_signed_cert" "default" {
private_key_pem = tls_private_key.default.private_key_pem
# Certificate expires after 12 hours.
validity_period_hours = 12
# Generate a new certificate if Terraform is run within three
# hours of the certificate's expiration time.
early_renewal_hours = 3
# Reasonable set of uses for a server SSL certificate.
allowed_uses = [
"key_encipherment",
"digital_signature",
"server_auth",
]
dns_names = ["example.com"]
subject {
common_name = "example.com"
organization = "ACME Examples, Inc"
}
}
resource "google_compute_ssl_certificate" "default" {
name = "default-cert"
private_key = tls_private_key.default.private_key_pem
certificate = tls_self_signed_cert.default.cert_pem
}
resource "google_compute_target_ssl_proxy" "default" {
name = "test-proxy"
backend_service = google_compute_backend_service.default.id
ssl_certificates = [google_compute_ssl_certificate.default.id]
}
# forwarding rule
resource "google_compute_global_forwarding_rule" "default" {
name = "ssl-proxy-xlb-forwarding-rule"
provider = google
ip_protocol = "TCP"
load_balancing_scheme = "EXTERNAL"
port_range = "443"
target = google_compute_target_ssl_proxy.default.id
ip_address = google_compute_global_address.default.id
}
# backend service
resource "google_compute_backend_service" "default" {
name = "ssl-proxy-xlb-backend-service"
protocol = "SSL"
port_name = "tcp"
load_balancing_scheme = "EXTERNAL"
timeout_sec = 10
health_checks = [google_compute_health_check.default.id]
backend {
group = google_compute_instance_group_manager.default.instance_group
balancing_mode = "UTILIZATION"
max_utilization = 1.0
capacity_scaler = 1.0
}
}
resource "google_compute_health_check" "default" {
name = "ssl-proxy-health-check"
timeout_sec = 1
check_interval_sec = 1
tcp_health_check {
port = "443"
}
}
# instance template
resource "google_compute_instance_template" "default" {
name = "ssl-proxy-xlb-mig-template"
provider = google
machine_type = "e2-small"
tags = ["allow-health-check"]
network_interface {
network = google_compute_network.default.id
subnetwork = google_compute_subnetwork.default.id
access_config {
# add external ip to fetch packages
}
}
disk {
source_image = "debian-cloud/debian-12"
auto_delete = true
boot = true
}
# install nginx and serve a simple web page
metadata = {
startup-script = <<-EOF1
#! /bin/bash
set -euo pipefail
export DEBIAN_FRONTEND=noninteractive
sudo apt-get update
sudo apt-get install -y apache2 jq
sudo a2ensite default-ssl
sudo a2enmod ssl
sudo service apache2 restart
NAME=$(curl -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/hostname")
IP=$(curl -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/ip")
METADATA=$(curl -f -H "Metadata-Flavor: Google" "http://metadata.google.internal/computeMetadata/v1/instance/attributes/?recursive=True" | jq 'del(.["startup-script"])')
cat <<EOF > /var/www/html/index.html
<h1>SSL Load Balancer</h1>
<pre>
Name: $NAME
IP: $IP
Metadata: $METADATA
</pre>
EOF
EOF1
}
lifecycle {
create_before_destroy = true
}
}
# MIG
resource "google_compute_instance_group_manager" "default" {
name = "ssl-proxy-xlb-mig1"
provider = google
zone = "us-central1-c"
named_port {
name = "tcp"
port = 443
}
version {
instance_template = google_compute_instance_template.default.id
name = "primary"
}
base_instance_name = "vm"
target_size = 2
}
# allow access from health check ranges
resource "google_compute_firewall" "default" {
name = "ssl-proxy-xlb-fw-allow-hc"
provider = google
direction = "INGRESS"
network = google_compute_network.default.id
source_ranges = ["130.211.0.0/22", "35.191.0.0/16"]
allow {
protocol = "tcp"
}
target_tags = ["allow-health-check"]
}
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
