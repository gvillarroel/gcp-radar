---
title: "Manage MCP servers \_|\_ Google Cloud MCP servers \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mcp/manage-mcp-servers
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/mcp/control-mcp-use-organization
source_metadata:
  url: https://docs.cloud.google.com/mcp/manage-mcp-servers
  title: "Manage MCP servers \_|\_ Google Cloud MCP servers \_|\_ Google Cloud Documentation"
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
Manage MCP servers
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
Model Context Protocol (MCP) servers and their tools enable your AI
applications to connect with databases, calendars, productivity tools, APIs,
and other agents. This guide explains how to list MCP servers and tools,
authenticate your AI applications to MCP servers, and configure optional
security and safety settings for MCP usage.
Google and Google Cloud services are available as remote MCP servers that run on
our infrastructure, not your machine. For supported services, MCP endpoints are
available once you enable the API. For more information, see
Google Cloud MCP servers overview .
This guide is for developers who want to use Google and Google Cloud MCP server
tools in their AI applications, and for users of AI assistance applications
such as Claude Code, Gemini Code Assist, Gemini CLI, or
Google AI Studio who want to use Google and Google Cloud MCP server tools to
streamline their workflow.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Required roles
To get the permissions that
you need to enable and use MCP servers,
ask your administrator to grant you the
following IAM roles:
Enable MCP servers:
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
on the Google Cloud project
Make MCP tool calls to Google and Google Cloud MCP tools:
MCP Tool User ( roles/mcp.toolUser )
on the Google Cloud project
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to enable and use MCP servers. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to enable and use MCP servers:
Enable MCP servers:
serviceusage.mcppolicy.get
serviceusage.mcppolicy.update
Make MCP tool calls to Google and Google Cloud MCP tools:
mcp.tools.call
resourcemanager.projects.get
resourcemanager.projects.list
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Available MCP servers
Available Google and Google Cloud remote MCP servers are listed in
Supported products .
List enabled MCP servers
To list enabled MCP servers for your project, run the following command:
gcloud beta services mcp list --enabled
The response resembles the following:
NAME: services/bigquery.googleapis.com
MCP_ENDPOINT: bigquery.googleapis.com/mcp
NAME: services/mapstools.googleapis.com
MCP_ENDPOINT: mapstools.googleapis.com/mcp
List available tools
To get a list of available tools and their descriptions, MCP clients use the
MCP tools/list method in an HTTP request to the MCP server
endpoint. Authentication isn't required for the tools/list method.
POST /mcp HTTP/1.1
Host: SERVICE_NAME
Content-Type: application/json
{
"jsonrpc": "2.0",
"method": "tools/list",
}
Replace SERVICE_NAME with the service name—for
example, the BigQuery service name is bigquery.googleapis.com .
For information about listing service names for available MCP servers, see
List available MCP servers . To see a list of Google
and Google Cloud services that have remote MCP servers without running commands,
see Supported products .
You can send an HTTP request to list tools directly to a Google remote MCP
server with the following command:
curl -X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc": "2.0", "id":0, "method": "tools/list"}' \
"https:// SERVICE_NAME /mcp"
The response resembles the following:
{
"jsonrpc" : "2.0" ,
"id" : 1 ,
"result" : {
"tools" : [
{
"name" : "list_topics" ,
"title" : "List Topics" ,
"description" : "Get list of available topics." ,
"input_schema" : { ... }
"output_schema" : { ... }
},
{
"name" : "get_topic" ,
"title" : "Get Topic" ,
"description" : "Get messages in a Topic." ,
"input_schema" : { ... }
"output_schema" : { ... }
},
...
]
}
}
Authenticate your AI application
Once you have enabled an MCP server in your project, you can use
your Google credentials to authenticate and use its tools through your AI
application. For safety and observability, you might want to create a
separate identity with specific permissions for your application instead of
using your own permissions if you are working with production resources. For
more information, see Authenticate to MCP servers .
Optional security and safety configurations
MCP tools can take a wide variety of actions on behalf of AI applications,
introducing security risks and considerations. To help you minimize and manage
these risks, Google Cloud provides default and customizable policies
that control how MCP tools are used within your Google Cloud organization
or project. For more information about MCP security and governance, see
AI security and safety .
Enable Model Armor
Model Armor is a Google Cloud service
designed to enhance the security and safety of your AI applications. It works by
proactively screening LLM prompts and responses, protecting against various
risks and ensuring responsible AI practices. Whether you are deploying AI in
your Google Cloud environment, or even on external cloud providers,
Model Armor can help you prevent malicious input, verify content
safety, protect sensitive data, maintain compliance, and enforce your AI safety
and security policies consistently across your diverse AI landscape.
Model Armor is only available in specific regional locations. If
Model Armor is enabled for a project, and a call to that project comes
from an unsupported region, Model Armor makes a cross-regional call.
For more information, see Model Armor locations .
To enable Model Armor, complete the steps in
Configure Model Armor protection for Google and Google Cloud MCP servers .
Model Armor logging
For information about Model Armor audit and platform logs, see
Model Armor audit logging .
Use MCP servers
To use Google and Google Cloud remote MCP server tools, AI applications must
have the MCP Tool User role ( roles/mcp.toolUser ) and the necessary service
permissions for the tool's Google Cloud service.
To grant the MCP Tool User role, run the following command:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = " PRINCIPAL " \
--role = "roles/mcp.toolUser"
Replace the following:
PROJECT_ID : the Google Cloud project.
PRINCIPAL : the
principal identifier
for the identity you are granting the MCP Tool User role to. For
information about the types of principals available on Google Cloud, see
Identity and Access Management (IAM) Principals .
What's next
Learn about access control with IAM .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
