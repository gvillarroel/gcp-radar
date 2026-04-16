---
title: "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\
  \ servers \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mcp/control-mcp-use-iam
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/mcp/access-control
source_metadata:
  url: https://docs.cloud.google.com/mcp/control-mcp-use-iam
  title: "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\
    \ servers \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Google Cloud MCP servers
Guides
Send feedback
Control MCP use with Identity and Access Management
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Identity and Access Management (IAM) deny policies help you secure
Google Cloud Model Context Protocol (MCP) servers. Configure these policies to
block unwanted MCP tool access.
For example, you can deny or allow access based on:
The principal.
Tool properties like read-only.
The application's OAuth client ID.
Deny policy attributes
The following attributes can be used in your Identity and Access Management deny policies:
tool.isReadOnly : a resource attribute that indicates whether the
invoked tool only reads data.
request.auth.oauth.client_id : the OAuth client ID.
resource.service : the name of service—for example,
bigquery.googleapis.com .
You can configure authorization policies for agents and MCP servers using
existing security controls, such as IAM deny policies, and
layer these attributes to build your security and governance policies.
Limitations
Control of MCP use with IAM has the following limitations:
The resource.service , and request.auth.oauth.client_id
attributes are only supported for IAM deny policies.
IAM allow policies don't support these attributes.
IAM deny attributes are only checked and enforced for the
mcp.tools.call permission. These attributes cannot be combined with any other
permissions in IAM deny policies.
Tags can't be mixed with the resource.service attribute in
IAM deny conditions.
The resource.service attribute isn't available in the Google Cloud console.
IAM deny policies that use the resource.service attribute
must be managed with Google Cloud CLI.
Example IAM policies
The following sections give examples of Identity and Access Management deny policies that can be
used to control MCP use.
Deny all MCP tool use
The following IAM deny policy prevents use of Google and
Google Cloud MCP server tools by all users.
{
"displayName" : "Deny access to MCP tools for all users" ,
"rules" : [
{
"denyRule" : {
"deniedPrincipals" : [
"principalSet://goog/public:all"
],
"deniedPermissions" : [
"mcp.googleapis.com/tools.call"
]
}
}
]
}
After the policy is applied to a Google Cloud project, when a client calls
tools/call , the request fails and an HTTP client error is returned.
Note: When an MCP client calls tools/list , a list of all tools is returned.
Deny read-write MCP tool use
The following IAM deny policy prevents use of any tool that isn't
read-only. Tools that create, modify, or delete resources aren't permitted.
{
"rules" : [
{
"denyRule" : {
"deniedPrincipals" : [
"principalSet://goog/public:all"
],
"deniedPermissions" : [
"mcp.googleapis.com/tools.call"
],
"denialCondition" : {
"title" : "Deny read-write tools" ,
"expression" : "api.getAttribute('mcp.googleapis.com/tool.isReadOnly', false) == false" ,
}
}
}
]
}
After the policy is applied to a Google Cloud project, when an MCP client makes
a tool call to a tool that isn't annotated as read-only , the request fails and
an HTTP client error is returned.
Note: When an MCP client calls tools/list , a list of all tools is returned,
including read-write tools.
Deny MCP use by service
The following IAM deny policy prevents use of MCP tools from a
specific service for all users.
{
"rules" : [
{
"denyRule" : {
"deniedPrincipals" : [
"principalSet://goog/public:all"
],
"deniedPermissions" : [
"mcp.googleapis.com/tools.call"
],
"denialCondition" : {
"title" : "Deny all MCP tool use from this service" ,
"expression" : "resource.service == ' SERVICE_NAME '"
}
}
}
]
}
Replace SERVICE_NAME with the service name—for example,
bigquery.googleapis.com .
Allow MCP use by service
You can use a deny policy to deny MCP use for all services except ones that you
specify.
The following IAM deny policy prevents use of MCP tools from all
services except one service for all users.
{
"rules" : [
{
"denyRule" : {
"deniedPrincipals" : [
"principalSet://goog/public:all"
],
"deniedPermissions" : [
"mcp.googleapis.com/tools.call"
],
"denialCondition" : {
"title" : "Only Allow access to the following service's MCP tools" ,
"expression" : "resource.service != ' SERVICE_NAME '"
}
}
}
]
}
Replace SERVICE_NAME with the name of the service that you want to
allow—for example, compute.googleapis.com .
Allow MCP use by Client ID
The following IAM deny policy prevents use of MCP tools by all
principals except for a specific client ID.
{
"rules" : [
{
"denyRule" : {
"deniedPrincipals" : [
"principalSet://goog/public:all"
],
"deniedPermissions" : [
"mcp.googleapis.com/tools.call"
],
"denialCondition" : {
"title" : "Allow MCP tool use by the following client ID." ,
"expression" : "request.auth.oauth.client_id == ' CLIENT_ID '"
}
}
}
]
}
Replace CLIENT_ID with the client ID—for example,
my-client-id .
Apply a deny policy
To apply a deny policy to a Google Cloud project, add the policy to a file named
policy.json , and then run the following command:
gcloud iam policies create mcp-deny-policy \
--attachment-point = cloudresourcemanager.googleapis.com/projects/ PROJECT_ID \
--kind = denypolicies \
--policy-file = policy.json
For more information, see Deny policies . For information on how
to attach a deny policy to an organization or folder, see
Attachment point .
What's next
Configure MCP in an AI application
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
