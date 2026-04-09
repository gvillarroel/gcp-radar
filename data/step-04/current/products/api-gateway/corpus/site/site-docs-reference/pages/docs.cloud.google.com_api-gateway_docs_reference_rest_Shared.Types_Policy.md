---
title: "Policy \_|\_ API Gateway \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/Policy
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/api-gateway/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/Policy
  title: "Policy \_|\_ API Gateway \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Gateway
Reference
Send feedback
Policy
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.
A Policy is a collection of bindings . A binding binds one or more members to a single role . Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.
For some types of Google Cloud resources, a binding can also specify a condition , which is a logical expression that allows access to a resource only if the expression evaluates to true . A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation .
JSON example:
{
"bindings": [
{
"role": "roles/resourcemanager.organizationAdmin",
"members": [
"user:mike@example.com",
"group:admins@example.com",
"domain:google.com",
"serviceAccount:my-project-id@appspot.gserviceaccount.com"
]
},
{
"role": "roles/resourcemanager.organizationViewer",
"members": [
"user:eve@example.com"
],
"condition": {
"title": "expirable access",
"description": "Does not grant access after Sep 2020",
"expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
}
}
],
"etag": "BwWWja0YfJA=",
"version": 3
}
YAML example:
bindings:
- members:
- user:mike@example.com
- group:admins@example.com
- domain:google.com
- serviceAccount:my-project-id@appspot.gserviceaccount.com
role: roles/resourcemanager.organizationAdmin
- members:
- user:eve@example.com
role: roles/resourcemanager.organizationViewer
condition:
title: expirable access
description: Does not grant access after Sep 2020
expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
- etag: BwWWja0YfJA=
- version: 3
For a description of IAM and its features, see the IAM documentation .
JSON representation
{
"version" : integer ,
"bindings" : [
{
object ( Binding )
}
] ,
"auditConfigs" : [
{
object ( AuditConfig )
}
] ,
"etag" : string
}
Fields
version
integer
Specifies the format of the policy.
Valid values are 0 , 1 , and 3 . Requests that specify an invalid value are rejected.
Any operation that affects conditional role bindings must specify version 3 . This requirement applies to the following operations:
Getting a policy that includes a conditional role binding
Adding a conditional role binding to a policy
Changing a conditional role binding in a policy
Removing any role binding, with or without a condition, from a policy that includes conditions
Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy . If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.
If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.
To learn which resources support conditions in their IAM policies, see the IAM documentation .
bindings[]
object ( Binding )
Associates a list of members to a role . Optionally, may specify a condition that determines how and when the bindings are applied. Each of the bindings must contain at least one member.
auditConfigs[]
object ( AuditConfig )
Specifies cloud audit logging configuration for this policy.
etag
string ( bytes format)
etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy , and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.
Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy . If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.
A base64-encoded string.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
