---
title: "Enable certificate-based access for VMs \_|\_ Access Context Manager \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/enable-cba-vms
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/enable-cba-vms
  title: "Enable certificate-based access for VMs \_|\_ Access Context Manager \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Enable certificate-based access for VMs | Access Context Manager | Google Cloud Documentation
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
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Access Context Manager
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
How-to guides
All how-to guides
Access control with IAM
Create an access policy
Create a basic access level
Create a custom access level
Use mobile devices with access levels
Manage an access policy
Create custom constraints
Manage access levels
Make bulk changes to access levels
Audit logging
Use Context-Aware Access
Set up context-aware access
Define access policies using access levels
Apply policies to user groups with access bindings
Configure session controls for re-authentication
Configure a credential strength policy
Configure Chrome browser attributes
Configure enterprise certificate conditions
Configure time and date conditions
Manage access bindings
Context-aware access enforcement points
Use certificate-based access
Certificate-based access overview
Understand mutual TLS at Google Cloud
Set up certificate-based access
Create access levels for certificate-based access
Enforce certificate-based access for a user group
Enforce certificate-based access with VPC Service Controls
Enable certificate-based access in client applications
Enable certificate-based access for web applications
Enable certificate-based access for VMs
Setting up Endpoint Verification
Enable certificate-based access with your enterprise certificates
Enable certificate-based access with Endpoint Verification certificates
Configure certificate-based access for Workload Identity Federation
Concepts
All concepts
Overview
Scoped policies
Custom access levels
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
Overview
Before you begin
Grant roles for accessing VMs through IAP TCP forwarding
Configure certificate-based access to a VM
Access VMs using client certificates
Use client certificates on the Chrome browser to access VMs
Use client certificates on the gcloud CLI to access VMs
Home
Documentation
Security
Access Context Manager
Guides
Was this helpful?
Send feedback
Enable certificate-based access for VMs
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Overview
Before you begin
Grant roles for accessing VMs through IAP TCP forwarding
Configure certificate-based access to a VM
Access VMs using client certificates
Use client certificates on the Chrome browser to access VMs
Use client certificates on the gcloud CLI to access VMs
This page describes how to enable certificate-based access
(CBA)
for your Google Cloud VMs. You can use CBA to secure access from
trusted devices to Google Cloud VMs.
Overview
CBA for VMs uses the Google Cloud Context-Aware Access feature to secure
access using Mutual TLS (mTLS). Following are the main components that you work
with to enable and use CBA for VMs:
Access Context Manager: Lets you create access levels that require certificates when
determining access to web applications.
Identity-Aware Proxy (IAP): IAP TCP
forwarding lets you establish an encrypted
tunnel over which you can forward SSH, RDP, and other traffic to VM instances.
In addition, an IAP policy provides you with fine-grained
control over which users are allowed to establish tunnels to specific VM
instances and what access conditions the users must meet to use such
tunnels.
Chrome Enterprise Policy: Provides mutual authentication (mTLS) between users
and VMs when using the Chrome browser.
Google Cloud CLI: Provides mutual authentication (mTLS) between users and VMs
when using the gcloud CLI.
Before you begin
Ensure that you created CBA access levels
for your Google Cloud project.
Grant roles for accessing VMs through IAP TCP forwarding
You must grant the appropriate Identity and Access Management (IAM) roles on a project to
let users or user groups use IAP TCP forwarding to access VMs.
The following table shows the predefined roles that you need to grant to trusted
administrators for TCP forwarding and related tasks.
Task
Roles
More information
TCP forwarding
IAP-secured Tunnel User ( roles/ iap. tunnel Resource Accessor )
Grant access to all VM instances in a project
or Grant access to a specific VM
SSH access
Compute Instance Admin (v1) ( roles/ compute. instance Admin. v1 )
OS Login (Recommended)
Various
Configuring OS Login roles on user accounts
Use a service account
Service Account User ( roles/ iam. service Account User )
The serviceAccountUser role
For more information about granting roles for IAP TCP forwarding,
see Grant roles for IAP TCP forwarding .
Configure certificate-based access to a VM
Although IAP-TCP lets you grant access to all VM instances in a
project, you must configure certificate-based access for each individual VM instance.
To grant a user or user group certificate-based access to a VM, grant the
roles/iap.tunnelResourceAccessor role on the VM instance. The other roles
can be granted on the project.
Console API
More
Open the IAP Admin page, and then select the SSH and TCP
Resources tab.
Go to the IAP page
Select the VM instances that you want to configure. Click Show info
panel if the info panel is not visible.
Click Add principal and configure the following:
New principals : Specify the user or user group that you want to
grant access to.
Select a role : Select Cloud IAP > IAP-Secured Tunnel User .
Click Add IAM condition and configure a condition:
Title : Enter a name for the condition.
Condition Builder : Select Access level from the
Condition Type drop-down, and then select the certificate-based access
level created earlier .
Click Save .
To configure certificate-based access to a VM, modify your application's
policy.json file.
See Managing access to IAP-secured resources
for more information about using the IAM API to manage access policies.
Export the following variables.
export IAP_BASE_URL=https://iap.googleapis.com/v1/projects/PROJECT_NUMBER/iap_tunnel
# Replace POLICY_FILE.JSON with the name of JSON file to use for setIamPolicy
export JSON_NEW_POLICY=POLICY_FILE.JSON
Get the IAM policy for the Compute Engine instance using
the getIamPolicy method. The empty data bit at the end turns the curl
request into POST instead of GET .
curl -i -H "Authorization: Bearer $(gcloud auth print-access-token)" \
${IAP_BASE_URL}/zones/ZONE_NAME/instances/INSTANCE_ID or INSTANCE_NAME:getIamPolicy \
-d ''
Grant the iap.tunnelResourceAccessor role and certificate-based access to
your principals by modifying the
IAM policy JSON file .
Following is an example of a policy.json file that grants the
iap.tunnelResourceAccessor role to a group of VM instance admins, giving
them certificate-based access to IAP-secured tunnel resources.
Note that if a principal has the Owner role, they have permission to use
IAP for TCP forwarding.
{
"policy": {
"bindings": [
{
"role": "roles/iap.tunnelResourceAccessor",
"members": ["group:instance-admins@example.com"],
"condition": {
"expression": "\"accessPolicies/POLICY_NAME/accessLevels/CERTIFICATE_BASED_ACCESS_LEVEL_NAME\" in request.auth.access_levels,
"title": "CERTIFICATE_BASED_CONDITION_NAME"
}
}
]
}
}
To find a policy name ,
call the accessPolicies.list
method.
GET https://accesscontextmanager.googleapis.com/v1/accessPolicies
Set your new policy.json file using the setIamPolicy method.
curl -i -H "Content-Type:application/json" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
${IAP_BASE_URL}/zones/ZONE_NAME/instances/INSTANCE_ID or INSTANCE_NAME:setIamPolicy \
-d @${JSON_NEW_POLICY}
Access VMs using client certificates
To access VMs using client certificates, use one of the following methods.
Use enterprise certificates :
Use this method if you have a PKI infrastructure.
Use Endpoint Verification provisioned certificates :
Use this method if you don't have a PKI infrastructure. Endpoint Verification
automatically provisions and registers self-signed certificates with
Google Cloud for every device.
Use client certificates on the Chrome browser to access VMs
Configure the Chrome browser using one of the following options.
Configure the Chrome browser to use enterprise certificates .
Configure the Chrome browser to use Endpoint Verification provisioned certificates .
In the Chrome browser, enter the following domain to access the
Google Cloud console: console-secure.cloud.google.com .
Access Google Cloud VMs using
IAP tunneling .
Use client certificates on the gcloud CLI to access VMs
Configure the gcloud CLI using one of the following methods.
Configure the gcloud CLI to use enterprise certificates
Configure the gcloud CLI to use endpoint verification provisioned certificates
Access Google Cloud VMs using IAP tunneling .
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
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
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
