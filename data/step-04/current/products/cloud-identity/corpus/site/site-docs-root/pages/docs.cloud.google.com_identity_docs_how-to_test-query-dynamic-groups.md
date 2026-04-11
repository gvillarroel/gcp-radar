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
Formulating and testing a membership query
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
