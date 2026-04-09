---
title: "Rotate MACsec keys \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/macsec/rotate-macsec-keys
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/macsec/rotate-macsec-keys
  title: "Rotate MACsec keys \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Rotate MACsec keys | Cloud Interconnect | Google Cloud Documentation
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
Network Connectivity
Cloud Interconnect
Start free
Overview
Guides
Reference
Support
Resources
More
Technology areas
More
Overview
Guides
Reference
Support
Resources
Cross-product tools
More
Console
Cloud Interconnect
Network Connectivity home
Cloud Interconnect overview
Options for connecting to multiple VPC networks
Best practices
Key terms
Topology for production-level applications (recommended)
Topology for non-critical applications
Dedicated Interconnect
Overview
Colocation facilities
Create Dedicated Interconnect connections
Provisioning overview
Order a connection
Retrieve LOA-CFAs
Test connections
Create VLAN attachments
Configure on-premises routers
Manage Dedicated Interconnect connections
View VLAN attachments and groups
Modify VLAN attachments
Disable or enable VLAN attachments
Duplicate a connection for redundancy
Use connections in other projects
Configure traffic differentiation
List locations
View connection details
Get diagnostics
Modify connection groups
Modify connections
Delete VLAN attachments
Delete connections
Change reliability options
Establish 99.99% availability
Establish 99.9% availability
Partner Interconnect
Overview
Supported service providers
Create Partner Interconnect connections
Provisioning overview
Create VLAN attachments
Request connections
Activate connections
Configure on-premises routers
Manage Partner Interconnect connections
Duplicate a VLAN attachment for redundancy
View VLAN attachments
Modify VLAN attachments
Disable VLAN attachments
Delete VLAN attachments
Establish 99.99% availability
Establish 99.9% availability
Cross-Cloud Interconnect
Overview
Create Cross-Cloud Interconnect connections
Connect to AWS
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order AWS ports
Configure Google Cloud resources
Configure your AWS resources
Verify your connections
Connect to Azure
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order Azure ports
Configure your Google Cloud resources
Configure your Azure resources
Verify your connections
Connect to OCI
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order OCI ports
Configure your Google Cloud resources
Configure your OCI resources
Verify your connections
Connect to Alibaba Cloud
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order Alibaba Cloud ports
Configure your Google Cloud resources
Configure your Alibaba Cloud resources
Verify your connections
Manage Cross-Cloud Interconnect connections
View VLAN attachments
Modify VLAN attachments
Disable VLAN attachments
Use connections in other projects
Configure traffic differentiation
View connection details
Get diagnostics
Disconnect networks
Delete connections
Partner Cross-Cloud Interconnect for OCI
Overview
Create Partner Cross-Cloud Interconnect connections
Provisioning overview
Paired locations
Create VLAN attachments
Request OCI connections
Activate connections
Partner Cross-Cloud Interconnect for AWS
Overview
Create Partner Cross-Cloud Interconnect connections
Provisioning overview
Choose a paired location
Create a connection initiated from Google Cloud
Create a connection initiated from AWS
Manage connections
Cross-Site Interconnect
Overview
Colocation facilities
Create Cross-Site Interconnect Connections
Provisioning overview
Check bandwidth quotas and limits
Order connections
Retrieve LOA-CFAs
Test connections
Create a cross-site network
Configure on-premises routers
Manage Cross-Site Interconnect connections
View cross-site networks
Modify a cross-site network
Disable a wire group
Delete a cross-site network
List locations
View connection details
Get diagnostics
Delete connections
Deploy
HA VPN over Cloud Interconnect
Overview
Deployment process
Terraform examples
Assign internal IP address ranges to HA VPN gateways
Configure HA VPN over Cloud Interconnect
Delete HA VPN over Cloud Interconnect
MACsec for Cloud Interconnect
Overview
Set up MACsec
Enable MACsec
Disable MACsec
Modify fail-open behavior
Get MACsec keys
View MACsec status
Rotate MACsec keys
Troubleshoot MACsec
Manage
Restrict Cloud Interconnect usage
Manage resources by using custom constraints
Create and manage tags
Calculate network throughput over Cloud Interconnect
Monitor and troubleshoot
Fix SLA eligibility problems
Monitor connections
Troubleshooting
Infrastructure maintenance events
Failure scenarios and impacts
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
Required roles
Optional: Update existing key start time
Create a new key
Verify the active key
Remove the old key
What's next?
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Rotate MACsec keys
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Required roles
Optional: Update existing key start time
Create a new key
Verify the active key
Remove the old key
What's next?
This page describes how to rotate keys for MACsec for Cloud Interconnect.
To rotate keys, you complete the following:
Create a new key with a start date after existing keys.
Add the new key to your on-premises router.
Wait for the new key's start time.
Verify that the new key is active.
Delete the oldest key.
You can create up to five pre-shared keys with start times that you specify.
The keys' start times must be in increasing order, and not within six hours of
the previous key's start time. To rotate a key that you no longer want to use,
you remove the key.
Pre-shared keys don't expire. When you configure more than one key, then all
keys must have a start time configured.
Required roles
To get the permissions that
you need to retrieve MACsec keys,
ask your administrator to grant you the
Compute Network Admin ( roles/compute.networkAdmin )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
If you choose to use custom roles, ensure that your custom role for
administrating MACsec for Cloud Interconnect includes the
compute.interconnects.getMacsecConfig IAM permission.
Optional: Update existing key start time
If you have a key without a start time and attempt to create a new key,
Cloud Interconnect displays an error. To fix the start time, select one of
the following options to set a start time for the existing key:
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect
Physical connections tab.
Go to Physical connections
Select the connection that you want to modify.
On the MACsec tab, go to the Pre-shared keys section, and then
click Managed pre-shared keys .
In the Start time field, select or enter a new start time.
Click Submit
gcloud compute interconnects macsec update-key INTERCONNECT_CONNECTION_NAME \
--key-name= KEY_NAME \
--start-time= START_TIME
Replace the following:
INTERCONNECT_CONNECTION_NAME : the name of your
Cloud Interconnect connection
KEY_NAME : the name of the key to update
START_TIME : the time that this key is valid from in ISO
8601 format—for example, 2023-07-01T21:00:01.000Z
Create a new key
To add a new key, select one of the following options:
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect
Physical connections tab.
Go to Physical connections
Select the connection that you want to modify.
On the MACsec tab, go to the Pre-shared keys section, and then
click Managed pre-shared keys .
Click Add key .
Specify the details of the pre-shared key:
Key Name: a name for the key. This name is displayed in the
Google Cloud console and is used by the gcloud CLI to
reference the key, such as psk-2 .
Start time: the time that the key is valid from. Ensure that
the new pre-shared key's start time is at least six hours after
the start time of the previous key.
To add additional pre-shared keys, click Add key . Consecutive
pre-shared keys must have start times at least six hours apart.
Click Submit .
gcloud compute interconnects macsec add-key INTERCONNECT_CONNECTION_NAME \
--key-name= KEY_NAME \
--start-time=" START_TIME "
Replace the following:
INTERCONNECT_CONNECTION_NAME : the name of your
Cloud Interconnect connection
KEY_NAME : a name for the key
START_TIME : the time that this key is valid from in
ISO 8601 format—for example, 2023-07-01T21:00:01.000Z
As a best practice, we recommend that you set a start time for all keys
that you create for MACsec for Cloud Interconnect.
To list existing keys and note the new key's connectivity association key
(CAK) and the connectivity association key name (CKN), select one of the
following options:
Console gcloud
More
In the Pre-shared keys section, find the name of the pre-shared
key that you added, then click View . A window displays the
connectivity association key ( CAK ) and the connectivity
association key name ( CKN ). Click content_copy Copy next to either
value to copy the value to your computer's clipboard.
Click Close .
gcloud compute interconnects macsec get-config INTERCONNECT_CONNECTION_NAME
The output is similar to the following:
preSharedKeys :
- name : key1
ckn : 0101010189abcdef...0123456789abcdef
cak : 0123456789abcdef...0123456789abcdef
startTime : 2023-07-01T12:12:12Z
- name : key2
ckn : 0202020289abcdef...0123456789abcdef
cak : 0123456889abcdef...0123456789abcdef
startTime : 2023-08-01T12:12:12Z
In this example, key2 is the newly added key.
Add the new key's start time, CAK, and CKN values to your on-premises
router's configuration.
Google's edge routers use the key with the most recent start time and
automatically switch to the next key as time progresses. All configured keys
have infinite expiration times. This means that to complete a key rotation, you
must remove the old key that you don't want used.
Verify the active key
Complete the following steps:
To list existing keys, select one of the following options:
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect
Physical connections tab.
Go to Physical connections
Select the connection that you want to view.
On the MACsec tab, the Pre-shared keys section lists all
pre-shared keys for this connection.
gcloud compute interconnects macsec get-config INTERCONNECT_CONNECTION_NAME
The output is similar to the following:
preSharedKeys :
- name : key1
ckn : 0101010189abcdef...0123456789abcdef
cak : 0123456789abcdef...0123456789abcdef
startTime : 2023-07-01T12:12:12Z
- name : key2
ckn : 0202020289abcdef...0123456789abcdef
cak : 0123456889abcdef...0123456789abcdef
startTime : 2023-08-01T12:12:12Z
Note the CKN value for the key listed before the last key.
To verify that the active key is listed before removing the old key, select
one of the following options:
Console gcloud
More
In the Pre-shared keys section, verify that the new key displays a
Key status of Active, in use .
gcloud compute interconnects get-diagnostics INTERCONNECT_CONNECTION_NAME
The output is similar to the following; look for macsec :
bundleAggregationType : BUNDLE_AGGREGATION_TYPE_STATIC
bundleOperationalStatus : BUNDLE_OPERATIONAL_STATUS_UP
links :
- circuitId : LOOP-0
googleDemarc : fake-local-demarc-0
lacpStatus :
googleSystemId : '00:11:22:33:44:55'
neighborSystemId : '55:44:33:22:11:00'
state : ACTIVE
macsec :
ckn : 0202020289abcdef...0123456789abcdef
operational : true
operationalStatus : LINK_OPERATIONAL_STATUS_UP
receivingOpticalPower :
state : OK
value : -2.49
transmittingOpticalPower :
state : OK
value : -0.88
macAddress : 00:11:22:33:44:55
The gcloud compute interconnects get-diagnostics command displays
the active key's CKN value. If you have more than one key configured, then
the key with the latest start time is selected as the active key. Google's
edge routers reject any new MACsec sessions that attempt to use the older
keys.
Remove the old key
As a safety precaution, MACsec for Cloud Interconnect prevents you from
removing the last active key.
To remove the old key, complete the following steps:
Remove the old key from your on-premises router configuration. This
ensures that the old key isn't used by your on-premises router before you
delete the old key from Cloud Interconnect.
To remove the old key from your Cloud Interconnect connection
configuration, select one of the following options:
Console gcloud
More
In the Google Cloud console, go to the Cloud Interconnect
Physical connections tab.
Go to Physical connections
Select the connection that you want to view.
On the MACsec tab, go to Pre-shared keys , select the
key you want to delete, and then click Delete.
In the Pre-shared keys section, verify that the new key displays
a Key status of Active, in use and that the key you wanted to
delete is no longer listed.
Run the following command:
gcloud compute interconnects macsec remove-key INTERCONNECT_CONNECTION_NAME \
--key-name= KEY_NAME
Replace the following:
INTERCONNECT_CONNECTION_NAME : the name of your
Cloud Interconnect connection
KEY_NAME : the name of your key
To verify that you removed the correct key, run the following command:
gcloud compute interconnects macsec get-config INTERCONNECT_CONNECTION_NAME
The output is similar to the following:
preSharedKeys :
- name : key2
ckn : 0202020289abcdef...0123456789abcdef
cak : 0123456889abcdef...0123456789abcdef
startTime : 2023-08-01T12:12:12Z
What's next?
Troubleshoot
MACsec
View MACsec
status
Get MACsec
keys
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
