---
title: "Tutorial: Set up a domain by using Cloud DNS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dns/docs/tutorials/create-domain-tutorial
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dns/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dns/docs/tutorials/create-domain-tutorial
  title: "Tutorial: Set up a domain by using Cloud DNS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud DNS
Guides
Send feedback
Tutorial: Set up a domain by using Cloud DNS
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial provides a walkthrough of the process for registering
a domain, setting up a sample web server, and using Cloud DNS to point
the domain URL to the server.
If you are new to using Terraform for Google Cloud, see Get started with Terraform .
Objectives
This tutorial demonstrates how to complete the following tasks:
Register a domain name by using Cloud Domains
Create a Compute Engine virtual machine (VM) instance
Run a basic Apache web server
Set up your domain using Cloud DNS
Update name servers
Verify your setup
Costs
There is a cost associated with registering a domain name.
For Cloud Domains pricing, see Cloud Domains
pricing .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine API.
Enable the API
Register a domain name
If you already have a registered domain, skip this section.
You can use Cloud Domains to register a domain.
Cloud Domains lets you use the same billing account
for your domain that you have created in the Before you
begin section.
For instructions about how to register a domain using Cloud Domains,
see Register a domain .
Important: If you use Cloud Domains to register a domain, you
cannot clean up the domain at the end of this tutorial and are billed for the
domain. For details, see the
Cloud Domains pricing page .
Create a virtual machine instance
Console
To create a Linux virtual machine (VM) instance in
Compute Engine, follow these instructions:
In the Google Cloud console, go to the
Create an instance page.
Go to Create an instance
In the OS and Storage section, click Change
to begin configuring your boot disk.
On the Public images tab, choose Debian GNU/Linux .
Click Select .
In the Firewall section, select
Allow HTTP traffic .
To create the VM, click Create .
Note: By default, the VM instance that you create receives an ephemeral
external IP address. The ephemeral IP address is released if you stop,
reset, or delete the instance. To preserve the IP address,
reserve a static external IP address .
Allow a short time for the instance to start. After the instance is ready, it
is listed on the VM instances page with a green status icon.
Connect to your instance
In the Google Cloud console, go to the
VM instances page.
Go to VM instances
In the list of virtual machine instances, click SSH in the row of
the instance that you want to connect to.
You now have a terminal window for interacting with your Linux instance.
For details, see the
Quickstart using a Linux VM .
Run a basic Apache web server
In this section, you run and test an Apache web server.
From the SSH window, use the Debian package manager to install the apache2
package.
sudo apt-get update && sudo apt-get install apache2 -y
After installing Apache, the operating system automatically starts the
Apache server.
Overwrite the default web page for the Apache web server by using the
following command:
echo "<!doctype html><html><body><h1>Hello World!</h1></body></html>"
| sudo tee /var/www/html/index.html
Test your server
Test that your instance is serving traffic on its external IP address.
Console
In the Google Cloud console, go to the VM instances page.
Go to VM instances
In the External IP column, copy the external IP address for your
instance.
In a browser, navigate to http://[EXTERNAL_IP] . Don't use https to
connect because the server will return a Connection Refused error.
You should now see the Hello World! page.
For further details, see Running a basic Apache web
server .
Set up your domain using Cloud DNS
If you are migrating from an existing provider, you can import your
existing zones to Cloud DNS. For instructions, see Export your DNS
configuration from your existing
provider .
Otherwise, follow these steps to create a new public zone.
Console
In the Google Cloud console, go to the Create a DNS zone page.
Go to Create a DNS zone
For the Zone type , select Public .
For the Zone name , enter my-new-zone .
For the DNS name , enter a DNS name suffix for the zone by using a domain
name that you registered (for example, example.com ).
For DNSSEC , ensure that the Off setting is selected.
Click Create to create a zone populated with the NS and SOA records.
To point your registered domain name to the IP address of the hosting server,
you must add an A record to your zone:
On the Zone details page, click Add Standard .
Select A from the Resource Record Type menu.
For IPv4 Address , enter the external IP address for your instance.
Click Create to create the A record for your zone.
Optional: Add a CNAME record to account for a prefix to your domain name
(for example, www. ):
Click Add Standard .
In the DNS Name field, add the prefix www for the domain.
For Resource Record Type , choose CNAME .
For Canonical name , enter the domain name, followed by a period (for
example, example.com. ).
Click Create .
Note: If you want to set up SMTP servers for delivering email to your domain,
you must add MX records to your zone. For instructions about setting up MX
records if you are using Google Workspace, see the
Set up MX records support page.
If you are using a different SMTP provider, use the MX record details from your
provider and follow the same instructions.
Update name servers
To update name servers in Cloud Domains, follow these steps:
In the Google Cloud console, go to the Cloud Domains page.
Go to Cloud Domains
Click the domain name that you want to edit. You can also click
more_vert More
next to the domain name to see the edit menu.
To edit the DNS details, click Edit DNS details .
Select Use Cloud DNS (Recommended) .
In the Cloud DNS zone list, select my-new-zone .
Click Save .
Terraform
You can use
Terraform resources to create a virtual machine (VM) instance, run an
Apache Web server, set up your domain using Cloud DNS, and update
name servers.
You can also use
Terraform module to set up Cloud DNS with public, private,
peering, or forwarding zones. For more information about zones, see the
DNS zones overview .
# to setup a web-server
resource "random_id" "rnd" {
byte_length = 4
}
resource "google_compute_instance" "default" {
name = "dns-compute-instance"
machine_type = "g1-small"
zone = "us-central1-b"
boot_disk {
initialize_params {
image = "debian-cloud/debian-11"
}
}
network_interface {
network = "default"
access_config {
// Ephemeral public IP
}
}
metadata_startup_script = <<-EOF
sudo apt-get update && \
sudo apt-get install apache2 -y && \
echo "<!doctype html><html><body><h1>Hello World!</h1></body></html>" > /var/www/html/index.html
EOF
}
# to allow http traffic
resource "google_compute_firewall" "default" {
name = "allow-http-traffic"
network = "default"
allow {
ports = ["80"]
protocol = "tcp"
}
source_ranges = ["0.0.0.0/0"]
}
# to create a DNS zone
resource "google_dns_managed_zone" "default" {
name = "example-zone-googlecloudexample"
dns_name = "example-${random_id.rnd.hex}.com."
description = "Example DNS zone"
force_destroy = "true"
}
# to register web-server's ip address in DNS
resource "google_dns_record_set" "default" {
name = google_dns_managed_zone.default.dns_name
managed_zone = google_dns_managed_zone.default.name
type = "A"
ttl = 300
rrdatas = [
google_compute_instance.default.network_interface[0].access_config[0].nat_ip
]
}
Verify your setup
To verify that your configuration is working, after the name servers are
updated, navigate to your domain name (for example, example.com ). The domain
should resolve to your IP address and should point to the Compute Engine
VM displaying the Hello World! page that you created in
Run a basic Apache Web server .
To verify that your setup is correct, you can also run the
dig +trace example.com command on your terminal window. Replace
example.com with your registered domain name.
dig +trace example.com
The end of the output should include the following.
IP_ADDRESS is your web server's IP address.
example.com. 300 IN A IP_ADDRESS
;; Received 62 bytes from 216.239.34.109#53(ns-cloud-d2.googledomains.com) in 62 ms
Note: If you're using Microsoft Windows and dig is not installed on your
system, you can run a dig -t NS query from the Google Workspace
web interface .
To verify that the changes are successful, run the following command:
example.com IN NS <your Cloud DNS name servers>
After waiting for DNS propagation to
complete ,
you can also run the nslookup command to verify your setup:
nslookup example.com
The output should include the following. IP_ADDRESS is your
web server's IP address.
Server: 127.0.0.1
Address: 127.0.0.1#53
Non-authoritative answer:
Name: example.com
Address: IP_ADDRESS
Clean up
Note: To avoid incurring charges for the resources that you created,
you can delete them by following the instructions in this section. However, if
you use Cloud Domains to register a domain, you might
continue to be billed for the domain. For details, see the
Cloud Domains pricing page .
Console
In the Google Cloud console, go to the Cloud DNS zones page.
Go to Cloud DNS zones
Click a zone name (for example, my-new-zone ) to get to the
Zone details page.
Select the A and CNAME records that you created.
Click Delete record sets .
To delete the zone, click
delete Delete zone for
the zone name my-new-zone .
Go to the VM instances page.
Go to VM instances
Select the instance that you want to delete.
On the more_vert More
menu in the row of the instance, click Delete .
What's next
To add, delete, or update records, see
Manage records .
To work with managed zones, see
Create, modify, and delete zones .
To find solutions for common issues that you might encounter when using
Cloud DNS, see Troubleshooting .
To reference the API, see
Cloud DNS REST API .
To determine costs, see Cloud DNS Pricing .
To get an overview of Cloud DNS, see
Cloud DNS overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
