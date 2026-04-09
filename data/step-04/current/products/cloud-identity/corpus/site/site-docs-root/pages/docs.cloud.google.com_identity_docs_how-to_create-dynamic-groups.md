---
title: "Creating and updating a dynamic group \_|\_ Cloud Identity \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/identity/docs/how-to/create-dynamic-groups
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/how-to/create-dynamic-groups
  title: "Creating and updating a dynamic group \_|\_ Cloud Identity \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Creating and updating a dynamic group | Cloud Identity | Google Cloud Documentation
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
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud Identity
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
Cloud Identity
Product overview
How-to Guides
All How-to Guides
Getting started with Cloud Identity
Setting up Cloud Identity
Turning off automatic Google Workspace licensing
Signing up for Cloud Identity Premium
Understanding your Cloud Identity Premium trial
Upgrading and downgrading
Canceling Cloud Identity
Verifying your domain
Verifying your domain
Finding your domain host
Setting up email with your domain
Managing users and licenses
Understanding licensing
Adding users
Adding licenses
Changing a user's license
Managing billing and payments
Billing and payments overview
Setting up paid Cloud Identity service
Comparing Cloud Identity billing plans
Understanding your bill and charges
Updating your bank account details
Maintaining security
Managing file sharing and syncing for Cloud Identity
Monitoring usage and security with reports
Using the Devices API
Setting up the Devices API
Creating devices
Listing and retrieving device users
Updating the client state
Approving a device
Using the Groups API
Setting up the Groups API
Creating and managing Google Groups
Creating and searching for Google Groups
Managing Google Group memberships
Creating and managing security groups
Creating security groups
Searching for security groups
Creating and managing POSIX groups
Creating and updating POSIX groups
Retrieving and listing POSIX groups
Creating and managing dynamic groups
Formulating and testing a membership query
Creating and updating a dynamic group
Retrieving a dynamic group and listing members
Valid user fields for dynamic group queries
Creating and managing identity-mapped groups
Creating and searching for identity-mapped groups
Managing identity-mapped group memberships
Querying group memberships
Managing membership expirations
Using the User Invitation API
Setting up the User Invitation API
Creating and managing user invitations
Using the Policy API
Setting up the Policy API
Listing and getting policies
Contacting support
Concepts
All Concepts
Cloud Identity overview
Devices API overview
Devices overview
Groups API overview
Dynamic groups overview
User Invitation API overview
Policy API overview
Policy API supported settings
Policy API concepts
Editions
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
Before you begin
Creating a dynamic group
Updating a dynamic group
What's next
Home
Documentation
Access and resource management
Cloud Identity
Guides
Was this helpful?
Send feedback
On this page
Before you begin
Creating a dynamic group
Updating a dynamic group
What's next
Creating and updating a dynamic group
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to create and update a dynamic group.
Note: Dynamic groups are only available to Google Workspace Enterprise
Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity
premium accounts. You can create up to 500 dynamic groups per customer. This
limit can be increased on a case-by-case basis—contact
Google Workspace Support
with your specific use case to request an increase.wss
Before you begin
Note: Before you use any of the Cloud Identity APIs, you must set up
Cloud Identity. See Setting up Cloud Identity for
instructions.
Perform the following tasks before proceeding with the information on this page:
Read the Groups API overview .
Read the dynamic groups overview .
Set up the Groups API .
(Optional) Formulate and test a membership query .
Creating a dynamic group
The following is an example of creating a dynamic group:
REST Python
More
To create a dynamic group, call
groups.create()
with an instance of the group. The instance of the group must contain the
dynamicGroupMetadata with the query used to populate the group.
To create a dynamic group, call the service.groups().create method with
an instance of the group. The instance of the group must contain the
dynamicGroupMetadata with the query used to populate the group. The
following sample shows how to create a dynamic group containing all users
existing in the Engineering department:
def create_dynamic_group ( customer_id , email , query ):
service = build_service ()
groupDef = {
"parent" : "customerId/ {} " . format ( customer_id ),
"groupKey" : { "id" : email },
"labels" : { "cloudidentity.googleapis.com/groups.discussion_forum" : "" },
"dynamicGroupMetadata" : {
"queries" : [
{
"resourceType" : "USER" ,
"query" : "user.organizations.exists(org, org.department=='engineering')"
}
]
}
}
request = service . groups () . create ( body = groupDef )
request . uri += "&initialGroupConfig=EMPTY"
response = request . execute ()
return response
Updating a dynamic group
The following is an example of updating a dynamic group:
REST Python
More
To update a dynamic group, call
groups.patch()
with an instance of the group. The instance of the group must contain the
dynamicGroupMetadata with the new query used to populate the group.
To update a dynamic group, call the service.groups().patch method with
the name of the group to update and an instance of the group. The instance
of the group must contain the
dynamicGroupMetadata with the query used to populate the group. The
following sample shows how to update a dynamic group containing all users in
Engineering to a group containing all users in either Engineering or Finance
departments:
# name (i.e. groups/01234abcdeef) uniquely identifies the group
def update_dynamic_group ( name , query ):
service = build_service ()
groupDef = {
"dynamicGroupMetadata" : {
"queries" : [
{
"resourceType" : "USER" ,
"query" : "user.organizations.exists(org, org.department=='engineering' || org.department=='finance')"
}
]
}
}
request = service . groups () . patch ( name = name , body = groupDef )
request . uri += "&updateMask=dynamicGroupMetadata"
response = request . execute ()
return response
What's next
After the dynamic group exists, you can retrieve it and list its memberships.
For more information, refer to
Retrieving a dynamic group and listing members .
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
