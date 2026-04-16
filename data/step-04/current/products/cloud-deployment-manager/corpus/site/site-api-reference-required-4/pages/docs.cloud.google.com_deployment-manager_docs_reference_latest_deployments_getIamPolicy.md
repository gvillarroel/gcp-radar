---
title: "Deployments: getIamPolicy \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy
knowledge_key: corpus
source_id: site-api-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/reference/latest/libraries
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/getIamPolicy
  title: "Deployments: getIamPolicy \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Reference
Send feedback
Deployments: getIamPolicy
Stay organized with collections
Save and categorize content based on your preferences.
Requires authorization
Gets the access control policy for a resource. May be empty if no such
policy or resource exists.
Try it now .
Request
HTTP request
GET https://www.googleapis.com/deploymentmanager/v2/projects/ project /global/deployments/ resource /getIamPolicy
Parameters
Parameter name
Value
Description
Path parameters
project
string
Project ID for this request.
resource
string
Name or id of the resource for this request.
Authorization
This request requires authorization with at least one of the following scopes ( read more about authentication and authorization ).
Scope
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/ndev.cloudman
Request body
Do not supply a request body with this method.
Response
If successful, this method returns a response body with the following structure:
{
"version": integer ,
"bindings": [
{
"role": string ,
"members": [
string
],
"condition": {
"expression": string ,
"title": string ,
"description": string ,
"location": string
}
}
],
"auditConfigs": [
{
"service": string ,
"exemptedMembers": [
string
],
"auditLogConfigs": [
{
"logType": string ,
"exemptedMembers": [
string
]
}
]
}
],
"rules": [
{
"description": string ,
"permissions": [
string
],
"action": string ,
"ins": [
string
],
"notIns": [
string
],
"conditions": [
{
"iam": string ,
"sys": string ,
"svc": string ,
"op": string ,
"values": [
string
]
}
],
"logConfigs": [
{
"counter": {
"metric": string ,
"field": string
},
"dataAccess": {
"logMode": string
},
"cloudAudit": {
"logName": string ,
"authorizationLoggingOptions": {
"permissionType": string
}
}
}
]
}
],
"etag": bytes ,
"iamOwned": boolean
}
Property name
Value
Description
Notes
version
integer
Deprecated.
bindings[]
list
Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
bindings[]. role
string
Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
bindings[]. members[]
list
Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@gmail.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`.
auditConfigs[]
list
Specifies cloud audit logging configuration for this policy.
auditConfigs[]. service
string
Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
auditConfigs[]. exemptedMembers[]
list
auditConfigs[]. auditLogConfigs[]
list
The configuration for logging of each type of permission.
auditConfigs[].auditLogConfigs[]. logType
string
The log type that this config enables.
auditConfigs[].auditLogConfigs[]. exemptedMembers[]
list
Specifies the identities that do not cause logging for this type of permission. Follows the same format of [Binding.members][].
rules[]
list
If more than one rule is specified, the rules are applied in the following manner: - All matching LOG rules are always applied. - If any DENY/DENY_WITH_LOG rule matches, permission is denied. Logging will be applied if one or more matching rule requires logging. - Otherwise, if any ALLOW/ALLOW_WITH_LOG rule matches, permission is granted. Logging will be applied if one or more matching rule requires logging. - Otherwise, if no rule applies, permission is denied.
rules[]. description
string
Human-readable description of the rule.
rules[]. permissions[]
list
A permission is a string of form ' . . ' (e.g., 'storage.buckets.list'). A value of '*' matches all permissions, and a verb part of '*' (e.g., 'storage.buckets.*') matches all verbs.
rules[]. action
string
Required
rules[]. ins[]
list
If one or more 'in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
rules[]. notIns[]
list
If one or more 'not_in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries.
rules[]. conditions[]
list
Additional restrictions that must be met. All conditions must pass for the rule to match.
rules[].conditions[]. iam
string
Trusted attributes supplied by the IAM system.
rules[].conditions[]. sys
string
Trusted attributes supplied by any service that owns resources and uses the IAM system for access control.
rules[].conditions[]. svc
string
Trusted attributes discharged by the service.
rules[].conditions[]. op
string
An operator to apply the subject with.
rules[].conditions[]. values[]
list
The objects of the condition.
rules[]. logConfigs[]
list
The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action.
rules[].logConfigs[]. counter
nested object
Counter options.
rules[].logConfigs[].counter. metric
string
The metric to update.
rules[].logConfigs[].counter. field
string
The field value to attribute.
etag
bytes
`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
iamOwned
boolean
bindings[]. condition
nested object
The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
bindings[].condition. expression
string
Textual representation of an expression in Common Expression Language syntax. The application context of the containing message determines which well-known feature set of CEL is supported.
bindings[].condition. title
string
An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
bindings[].condition. description
string
An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
bindings[].condition. location
string
An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
rules[].logConfigs[]. dataAccess
nested object
Data access options.
rules[].logConfigs[].dataAccess. logMode
string
Whether Gin logging should happen in a fail-closed manner at the caller. This is relevant only in the LocalIAM implementation, for now. NOTE: Logging to Gin in a fail-closed manner is currently unsupported while work is being done to satisfy the requirements of go/345. Currently, setting LOG_FAIL_CLOSED mode will have no effect, but still exists because there is active work being done to support it (b/115874152).
rules[].logConfigs[]. cloudAudit
nested object
Cloud audit options.
rules[].logConfigs[].cloudAudit. logName
string
The log_name to populate in the Cloud Audit Record.
rules[].logConfigs[].cloudAudit. authorizationLoggingOptions
nested object
Information used by the Cloud Audit Logging pipeline.
rules[].logConfigs[].cloudAudit.authorizationLoggingOptions. permissionType
string
The type of the permission that was checked.
Try it!
Use the APIs Explorer below to call this method on live data and see the response.
Alternatively, try the
standalone
Explorer .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-30 UTC."],[],[]]
