---
title: "Prevent read-write MCP tool use \_|\_ Google Cloud MCP servers \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/mcp/prevent-read-write-tool-use
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/mcp/control-mcp-use-iam
source_metadata:
  url: https://docs.cloud.google.com/mcp/prevent-read-write-tool-use
  title: "Prevent read-write MCP tool use \_|\_ Google Cloud MCP servers \_|\_ Google\
    \ Cloud Documentation"
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
Prevent read-write MCP tool use
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
Because LLMs and AI agents are by their nature dynamic, AI application responses
and actions for the same prompt can vary each time you send it. If you or an MCP
server provider add tools or functionality, the agent's behavior can change
significantly.
Model Context Protocol (MCP) tools can modify or delete resources that they
access on your behalf. When you're using MCP tools through your AI application,
protect important resources by preventing MCP tools from changing them.
To prevent unintended or unauthorized changes by MCP tools to production
resources, use a deny policy and Identity and Access Management (IAM) attributes. These
attributes control which agent identities and tool types can access a resource.
You can create deny policies at the Google Cloud organization, folder, or
project level. This document describes using IAM attributes to
control MCP tool use.
Control MCP use with IAM attributes
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
Prevent read-write tool use
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
Audit logging
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
