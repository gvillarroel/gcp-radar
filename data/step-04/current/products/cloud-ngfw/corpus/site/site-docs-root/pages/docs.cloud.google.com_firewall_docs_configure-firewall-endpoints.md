---
title: "Create and manage firewall endpoints \_|\_ Cloud Next Generation Firewall\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewalls
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints
  title: "Create and manage firewall endpoints \_|\_ Cloud Next Generation Firewall\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NGFW
Guides
Send feedback
Create and manage firewall endpoints
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to configure and manage a firewall endpoint and
associate it with a Virtual Private Cloud (VPC) network by using the
Google Cloud console and Google Cloud CLI.
You create a firewall endpoint at a
zonal level, and then associate it with one or more VPC
networks in the same zone. If you have enabled Layer 7 inspection in the firewall
policy associated with your VPC network, the matched traffic
is transparently intercepted and forwarded to the firewall endpoint.
You can create a firewall endpoint with or without jumbo frame support. For
information about the packet sizes supported by firewall endpoints, see
Supported packet size .
Note: To check the progress of the operations listed on this page,
make sure that your user role has the following
Compute Network User role ( roles/compute.networkUser )
permissions:
networksecurity.operations.get
networksecurity.operations.list
Before you begin
You need a
VPC network and
a subnet .
You must enable
the Compute Engine API in your Google Cloud project.
You must enable
the Network Security API
in the Google Cloud project that you want to use for billing.
You must enable
the Certificate Authority Service API
in your Google Cloud project.
Install the gcloud CLI if you want to run the gcloud
command-line examples in this guide.
Roles
To get the permissions that you need to create, view, update, or delete
firewall endpoints, ask your administrator to grant you the necessary
IAM roles on your
organization. For more information about granting roles, see
Manage access .
Quotas
To view quotas for firewall endpoints and associations, see Quotas and limits .
Create a firewall endpoint
Create a firewall endpoint in a specific zone.
Note: Cloud NGFW might take up to 20 minutes to create a firewall
endpoint and an additional 15 minutes to create firewall endpoint associations.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.firewallEndpoints.create
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
In the project selector menu, select your organization.
Click Create .
In the Region list, select the region where you want to create
the firewall endpoint.
In the Zone list, select the zone where you want to create
the firewall endpoint.
Enter a name in the Name field.
Don't include sensitive information such as
personally identifiable information or security data in the
firewall endpoint name.
In the Billing project list, select the Google Cloud project that you want to
use for billing the firewall endpoint.
Click Continue .
If you want the endpoint to support jumbo frames, select the
Enable jumbo frames support checkbox; otherwise, clear this checkbox.
Click Continue .
If you want to add a firewall endpoint association,
click Add endpoint association , else skip this step.
In the Project list, select the Google Cloud project where you want
to create the firewall endpoint association.
If the Compute Engine API or Network Security API are not enabled for
the Google Cloud project, click Enable .
In the Network list, select the network that you want to
associate to the firewall endpoint.
In the TLS inspection policy list, select the TLS inspection
policy that you want to add to this association.
To add another association, click Add endpoint association .
Click Create .
gcloud
To create a firewall endpoint, use the gcloud network-security
firewall-endpoints create
command :
gcloud network-security firewall-endpoints create NAME \
--organization ORGANIZATION_ID \
--zone ZONE \
--enable-jumbo-frames \
--billing-project BILLING_PROJECT_ID
Replace the following:
NAME : the name of the firewall endpoint.
Don't include sensitive information such as
personally identifiable information or security data in the
firewall endpoint name.
ORGANIZATION_ID : the organization where the endpoint
is activated.
ZONE : the zone where the endpoint is activated.
BILLING_PROJECT_ID : a Google Cloud project ID to be
used for billing of the firewall endpoint.
To create a firewall endpoint that supports jumbo frames up to 8,500 bytes
in size, use the optional --enable-jumbo-frames flag. Skip this
flag to create an endpoint without jumbo frame support. For
information about the packet sizes supported by firewall endpoints, see
Supported packet size .
To associate the firewall endpoint to a VPC network, see
Create firewall endpoint
associations .
Terraform
Use the google_network_security_firewall_endpoint Terraform resource .
resource "google_network_security_firewall_endpoint" "default" {
name = "my-firewall-endpoint"
parent = "organizations/123456789"
location = "us-central1-a"
billing_project_id = "my-project-name"
enable_jumbo_frames = true
}
To create a firewall endpoint that supports jumbo frames up to 8,500 bytes in
size, set the field enable_jumbo_frames to True . To create a firewall
endpoint that doesn't support jumbo frames, set this field to False . For
information about the packet sizes supported by firewall endpoints, see
Supported packet size .
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
View a firewall endpoint
You can view the details of a specific firewall endpoint.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.firewallEndpoints.get
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
In the project selector menu, select your organization.
The Firewall endpoints page lists all the configured firewall
endpoints in the organization.
Click the name of the firewall endpoint to view its details.
gcloud
To view details of a firewall endpoint, use the gcloud network-security
firewall-endpoints describe
command :
gcloud network-security firewall-endpoints \
describe NAME \
--organization ORGANIZATION_ID \
--zone ZONE
Replace the following:
NAME : the name of the firewall endpoint.
ORGANIZATION_ID : the organization where the endpoint
is activated.
ZONE : the zone where the endpoint is activated.
List firewall endpoints
You can list all the firewall endpoints in an organization.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.firewallEndpoints.list
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
The Firewall endpoints page lists all the configured firewall
endpoints in the organization.
gcloud
To list all firewall endpoints, use the gcloud network-security
firewall-endpoints list
command :
gcloud network-security firewall-endpoints list \
--organization ORGANIZATION_ID \
--zone ZONE \
--billing-project BILLING_PROJECT_ID
Replace the following:
ORGANIZATION_ID : the organization where the endpoint
is activated.
ZONE : the zone where the endpoint is activated. To
list endpoints in all zones, use - .
BILLING_PROJECT_ID : an optional
Google Cloud project ID that will be charged quota for the operation.
Update a firewall endpoint
You can update the billing project of a firewall endpoint in an organization.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.firewallEndpoints.get
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
In the project selector menu, select your organization.
The Firewall endpoints page lists all the configured firewall
endpoints in the organization.
Click the name of the firewall endpoint to view its details.
Click Edit .
In the Billing project list, select the Google Cloud project that you want to
use for billing the firewall endpoint.
Click Save .
gcloud
To edit a firewall endpoint, use the gcloud network-security
firewall-endpoints update
command :
gcloud network-security firewall-endpoints \
update NAME \
--organization ORGANIZATION_ID \
--zone ZONE \
--billing-project BILLING_PROJECT_ID
Replace the following:
NAME : the name of the firewall endpoint.
ORGANIZATION_ID : the organization where the endpoint
is activated.
ZONE : the zone where the endpoint is activated.
BILLING_PROJECT_ID : the Google Cloud project ID
that you want to associate with this firewall endpoint for billing.
Note: You cannot reconfigure an existing endpoint to add or remove support
for jumbo frames. To add or remove jumbo frame support, delete the endpoint
and recreate it. For more information, see Delete a firewall endpoint
and Create a firewall endpoint .
For information about the packet sizes supported by firewall endpoints, see
Supported packet size .
Delete a firewall endpoint
You can delete a firewall endpoint by specifying its name,
zone, and organization.
Note: You can delete a firewall endpoint only if it is not associated with any
VPC network.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.firewallEndpoints.delete
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
Select the firewall endpoint, and then click Delete .
Click Delete again to confirm.
gcloud
To delete a firewall endpoint, use the gcloud network-security
firewall-endpoints delete
command :
gcloud network-security firewall-endpoints delete NAME
--organization ORGANIZATION_ID \
--zone ZONE
Replace the following:
NAME : the name of the firewall endpoint.
ORGANIZATION_ID : the organization where the endpoint
is activated.
ZONE : the zone where the endpoint is activated.
What's next
Create and manage firewall endpoint associations
Use hierarchical firewall policies and rules
Use global network firewall policies and rules
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
