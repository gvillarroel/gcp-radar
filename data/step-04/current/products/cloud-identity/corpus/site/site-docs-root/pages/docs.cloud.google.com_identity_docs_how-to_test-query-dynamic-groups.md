---
title: "Formulating and testing a membership query \_|\_ Cloud Identity \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/how-to/test-query-dynamic-groups
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/how-to/test-query-dynamic-groups
  title: "Formulating and testing a membership query \_|\_ Cloud Identity \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Formulating and testing a membership query | Cloud Identity | Google Cloud Documentation
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
Formulating and testing your query Sample queries
Negation in queries
Testing membership queries Custom user attributes
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
Formulating and testing your query Sample queries
Negation in queries
Testing membership queries Custom user attributes
What's next
Formulating and testing a membership query
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to formulate and test your membership queries to
ensure the correct users are returned.
Before you begin
Perform the following tasks before proceeding with the information on this page:
Read the Groups API overview .
Read the dynamic groups overview .
Set up the Groups API .
Formulating and testing your query
Membership queries take the form of target_field condition , and are
formatted as
Common Expression Language (CEL)
expressions. See
Valid user attributes for dynamic groups
for the list of User resource fields that can be used.
Sample queries
The following example shows how to check for a specific value in a
user.addresses field using the exists() CEL function:
user . addresses . exists ( ad , ad . locality == ' Sunnyvale ' )
The exists() macro is used to create membership queries for fields of type
list.
Here is an example of checking multiple values, (building) area and
building_id , in a single list entry:
user.locations.exists(loc, loc.area=='Sunnyvale' && loc.building_id=='Building 1')
The following example shows how to find users who are part of a given
organizational unit:
All direct users under a given org unit:
user.org_unit_id==orgUnitId('03ph8a2z1enx4lx')
All direct and indirect users under a given org unit:
user.org_units.exists(org_unit, org_unit.org_unit_id==orgUnitId('03ph8a2z1khexns'))
Note: You can make a query case-insensitive by adding equalsIgnoreCase() to
the value being queried. For example, a query on username would be written as:
user.name.value.equalsIgnoreCase('jOhn DoE')`
Negation in queries
You can use a NOT ! operator in membership queries to exclude users with
certain attributes. Here are some examples:
All users who do not belong to a given organizational unit:
!(user.org_unit_id==orgUnitId('03ph8a2z1enx4lx'))
All users who do not belong to the Marketing organization:
!user.organization.exists(org, org.title = "Marketing")
Some combinations of the NOT ! operator and the exists() macro are not supported:
Any NOT ! query using the exists() macro and using the AND && operator within it:
!user.organization.exists(org, (org.title == "Cloud" && org.department == "Sales"))
Any query using the exists() macro with the NOT ! operator inside it:
user.organization.exists(org, (org.title == "Cloud" || !(org.department == "Sales")))
Testing membership queries
To test your membership queries, you can use the
simple query builder . It allows you
to use drop-down menus and text fields to enter and test a query. After you
are sure the membership query returns the correct results, you can create the
corresponding CEL queries with the Groups API.
Custom user attributes
Note: Custom attribute support is currently in beta. The query will fail if
the schemaName or fieldName in the query contains a hyphen (-).
Custom user attributes
can used in dynamic group queries as long as the custom schema already exists in
user.custom_schemas , but they are not supported in the simple query builder
drop-downs. To test a query for a custom user attribute, enter it in CEL query
format directly into the Enter cel query text box. A sample custom schema
looks like this:
{
"schemaName" : "employmentData" ,
"fields" : [
{
"fieldName" : "EmployeeNumber" ,
"fieldType" : "STRING" ,
"multiValued" : "false"
},
{
"fieldName" : "JobFamily" ,
"fieldType" : "STRING" ,
"multiValued" : "true"
}
]
}
Single valued field
user.custom_schemas.employmentData.EmployeeNumber == 'value'
Multi-valued field
user.custom_schemas.employmentData.JobFamily.exists(fld, fld == 'value')
What's next
After you test your membership query, you can use it when creating a group. For
more information, refer to
Creating a dynamic group .
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
