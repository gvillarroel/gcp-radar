---
title: "CustomConstraint \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/policy-intelligence/docs/reference/policysimulator/rest/Shared.Types/CustomConstraint
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/policy-intelligence/docs/reference/policyanalyzer/rest
source_metadata:
  url: https://docs.cloud.google.com/policy-intelligence/docs/reference/policysimulator/rest/Shared.Types/CustomConstraint
  title: "CustomConstraint \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Policy Intelligence
Reference
Send feedback
CustomConstraint
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A custom constraint defined by customers which can only be applied to the given resource types and organization.
By creating a custom constraint, customers can apply policies of this custom constraint. Creating a custom constraint itself does NOT apply any policy enforcement .
JSON representation
{
"name" : string ,
"resourceTypes" : [
string
] ,
"methodTypes" : [
enum ( MethodType )
] ,
"condition" : string ,
"actionType" : enum ( ActionType ) ,
"displayName" : string ,
"description" : string ,
"updateTime" : string
}
Fields
name
string
Immutable. Name of the constraint. This is unique within the organization. Format of the name should be
organizations/{organizationId}/customConstraints/{custom_constraint_id}
Example: organizations/123/customConstraints/custom.createOnlyE2TypeVms
The max length is 70 characters and the minimum length is 1. Note that the prefix organizations/{organizationId}/customConstraints/ is not counted.
resourceTypes[]
string
Immutable. The resource instance type on which this policy applies. Format will be of the form : <service name>/<type> Example:
compute.googleapis.com/Instance .
methodTypes[]
enum ( MethodType )
All the operations being applied for this constraint.
condition
string
A Common Expression Language (CEL) condition which is used in the evaluation of the constraint. For example: resource.instanceName.matches("(production|test)_(.+_)?[\d]+") or, resource.management.auto_upgrade == true
The max length of the condition is 1000 characters.
actionType
enum ( ActionType )
Allow or deny type.
displayName
string
One line display name for the UI. The max length of the displayName is 200 characters.
description
string
Detailed information about this custom policy constraint. The max length of the description is 2000 characters.
updateTime
string ( Timestamp format)
Output only. The last time this custom constraint was updated. This represents the last time that the customConstraints.create or customConstraints.patch methods were called.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-16 UTC."],[],[]]
