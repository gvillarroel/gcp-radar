---
title: "Access control with Identity and Access Management \_|\_ Google Cloud MCP\
  \ servers \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mcp/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/mcp/access-control
source_metadata:
  url: https://docs.cloud.google.com/mcp/access-control
  title: "Access control with Identity and Access Management \_|\_ Google Cloud MCP\
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
Access control with Identity and Access Management
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
Google and Google Cloud remote MCP servers use Identity and Access Management (IAM) to
control access to resources at different levels of your resource hierarchy. This
document describes how to use IAM as a tool to manage
fine-grained authorization to control who can do what on
which resource.
With IAM, you grant specific roles to
principals. The roles give the principals the necessary permissions to perform
tasks on your resources. You can grant these roles using the Google Cloud console
or the Google Cloud CLI.
For Google and Google Cloud remote MCP servers, access control can be configured
at the project level and at the individual resource level. You can control MCP
use based on project resource tags, read-only, or read-write tool use.
For detailed information about IAM and its features, see
IAM overview .
Grant access
Grant a principal the Tool User role on a project.
In the Google Cloud console, go to the IAM page.
Go to IAM
Select your project.
Click person_add Grant access .
Enter an identifier for the principal. For example,
my-app@example.com .
From the Select a role drop-down menu, search for Tool User , and
then click Tool User .
Click Save .
Verify that the principal and the corresponding role are listed in the
IAM page.
You have successfully granted an IAM role to a principal.
To learn more about other management access tasks, such as revoking
IAM roles or granting multiple IAM roles, see
Manage access to projects, folders, and organizations
in the IAM documentation.
Identity and Access Management conditions
Google and Google Cloud remote MCP servers support
IAM Conditions . Identity and Access Management conditions let you
define and enforce conditional, attribute-based access control. This means you
can grant access to principals only if specified conditions are met, such as the
time of the request, the resource name, the resource type, or the tags attached
to the resource.
You can use IAM Conditions in the following places:
Allow policy role bindings, including role bindings managed by Privileged Access Manager
entitlements
Deny policy rules
Policy bindings for principal access boundary policies
For more information, see the
Attribute reference for Identity and Access Management Conditions .
Google Cloud MCP servers roles and permissions
The following sections describe the IAM roles required for
interacting with and controlling the use of Google and Google Cloud MCP servers.
Roles
In order to use MCP tools, the tool caller must be granted the Tool User
( roles/mcp.toolUser ) role on the Google Cloud project, as well as the required
roles for any Google or Google Cloud products or services that you access.
Permissions
The following permissions are required to access Google and Google Cloud
services through MCP:
mcp.tools.call
What's next
Prevent read-write MCP tool use
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
