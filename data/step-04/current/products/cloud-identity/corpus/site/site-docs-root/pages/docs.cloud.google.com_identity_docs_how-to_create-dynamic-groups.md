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
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Cloud Identity
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Creating and updating a dynamic group
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
REST
To create a dynamic group, call
groups.create()
with an instance of the group. The instance of the group must contain the
dynamicGroupMetadata with the query used to populate the group.
Python
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
REST
To update a dynamic group, call
groups.patch()
with an instance of the group. The instance of the group must contain the
dynamicGroupMetadata with the new query used to populate the group.
Python
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
