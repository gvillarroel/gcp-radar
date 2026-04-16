---
title: "Use the BigQuery MCP server \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp
knowledge_key: corpus
source_id: site-docs-reference-required-12
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp
  title: "Use the BigQuery MCP server \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Use the BigQuery MCP server
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms , and the
Additional Terms for Generative AI
Preview Products .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document shows you how to use the BigQuery remote Model Context
Protocol (MCP) server to connect with AI applications including Gemini
CLI, ChatGPT, Claude, and custom applications you are developing.
You can use the BigQuery remote MCP
server to perform tasks such as running queries, getting metadata, and listing
resources..
The BigQuery remote MCP server is enabled when you
enable the BigQuery API.
Model Context Protocol
(MCP) standardizes how large language models (LLMs) and AI applications or
agents connect to outside data sources. MCP servers let you use their tools,
resources, and prompts to take actions and get updated data from their backend
service.
Local MCP servers typically run on your local machine and use the standard input
and output streams ( stdio ) for communication between services on the same
device. MCP servers run on the service's infrastructure and offer an
HTTPS endpoint to AI applications for communication between the AI MCP client
and the MCP server. For more information on MCP architecture, see
MCP architecture .
Google and Google Cloud MCP servers have the following features and
benefits:
Simplified, centralized discovery
Managed global or regional HTTPS endpoints
Fine-grained authorization
Optional prompt and response security with
Model Armor protection
Centralized audit logging
For information about other MCP servers and information about security and
governance controls available for Google Cloud MCP servers, see
Google Cloud MCP servers overview .
You might use the BigQuery local MCP server
for the following reasons:
You need to build a custom tool over a parameterized SQL query.
You don't have permissions to enable or use the MCP server in your
project.
For more information about how to use our local MCP server, see
Connect LLMs to BigQuery with MCP . The
following sections apply only to the BigQuery MCP server.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Enable the BigQuery API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
For new projects, the BigQuery API is
automatically enabled.
Optional:
Enable
billing for the project. If you don't want to enable billing or provide
a credit card, the steps in this document still work. BigQuery
provides you a sandbox to perform the steps. For more information, see
Enable the BigQuery sandbox .
Note: If your project has a billing account and you want to use the
BigQuery sandbox, then
disable billing for your project .
Required roles
To get the permissions that
you need to enable the BigQuery MCP server,
ask your administrator to grant you the
following IAM roles on the project where you want to enable the BigQuery MCP server:
Make MCP tool calls:
MCP Tool User ( roles/mcp.toolUser )
Run BigQuery jobs:
BigQuery Job User ( roles/bigquery.jobUser )
Query BigQuery data:
BigQuery Data Viewer ( roles/bigquery.dataViewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to enable the BigQuery MCP server. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to enable the BigQuery MCP server:
Make MCP tool calls:
mcp.tools.call
Run BigQuery jobs:
bigquery.jobs.create
Query BigQuery data:
bigquery.tables.getData
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Note: Additional BigQuery permissions might be required depending
on the task. For information about BigQuery permissions, see
BigQuery IAM roles and permissions .
Authentication and authorization
BigQuery MCP servers use the OAuth
2.0 protocol with
Identity and Access Management (IAM) for authentication and
authorization. All Google Cloud
identities are supported for
authentication to MCP servers.
The BigQuery MCP server doesn't accept API keys.
BigQuery MCP OAuth scopes
OAuth 2.0 uses scopes and credentials to determine if an authenticated
principal is authorized to take a specific action on a resource. For more
information about OAuth 2.0 scopes at Google, read
Using OAuth 2.0 to access Google APIs .
BigQuery has the following MCP tool OAuth scopes:
Scope URI for gcloud CLI
Description
https://www.googleapis.com/auth/bigquery
View and manage your data in BigQuery and see the email
address for your Google Account.
Additional scopes might be required on the resources accessed during a tool
call. To view a list of scopes required for BigQuery, see
OAuth 2.0 scopes for BigQuery API v2 .
Configure an MCP client to use the BigQuery MCP server
Host programs, such as Claude or Gemini CLI, can instantiate MCP
clients that connect to a single MCP server. A host program can have multiple
clients that connect to different MCP servers. To connect to an MCP
server, the MCP client must know at a minimum the URL of the MCP server.
In your host, look for a way to connect to a MCP server. You're prompted
to enter details about the server, such as its name and URL.
For the BigQuery MCP server, enter the following as
required:
Server name : BigQuery MCP server
Server URL or Endpoint : https://bigquery.googleapis.com/mcp
Transport : HTTP
Authentication details : your Google Cloud credentials, your
OAuth Client ID and secret, or an agent identity and credentials
Which authentication details you choose depend on how you want to
authenticate. For more information, see
Authenticate to MCP servers .
For host-specific guidance, see the following:
Gemini CLI MCP server setup
Claude support: Getting started with custom connectors using remote MCP
For more general guidance, see Connect to remote MCP servers .
Available tools
To view details of available MCP tools and their descriptions for the
BigQuery MCP server, see the BigQuery MCP
reference .
Limitations
The BigQuery MCP tools are subject to the following limitations:
The execute_sql tool doesn't
support querying Google Drive external tables.
By default, the execute_sql tool limits query processing time to three
minutes. Queries that run longer than three minutes are automatically
canceled.
Query results are limited to a maximum of 3,000 rows.
List tools
Use the MCP inspector to list tools, or send a
tools/list HTTP request directly to the BigQuery MCP server.
The tools/list method doesn't require authentication.
POST /mcp HTTP/1.1
Host: bigquery.googleapis.com
Content-Type: application/json
{
"jsonrpc": "2.0",
"method": "tools/list",
}
Sample use cases
The following are sample use cases for the BigQuery MCP server:
Build workflows that use insights from BigQuery data to
trigger certain actions such as creating issues and composing emails.
Use BigQuery's advanced capabilities like forecasting
for higher-order insights.
Build a conversational experience for your users with custom agent
instructions.
Sample prompts
You can use the following sample prompts to get information about
BigQuery resources, gain insights, and analyze
BigQuery data:
List the datasets in project PROJECT_ID .
Find all the queries that I ran in project PROJECT_ID
using the MCP server in the REGION region. Use the tag
goog-mcp-server:true to identify the query jobs that ran through the MCP
server.
Find the top orders by volume from DATASET_ID in project
PROJECT_ID . Identify the appropriate tables, find the correct
schema, and show the results.
Create a forecast on the table
PROJECT_ID . DATASET_ID . TABLE_ID
for future years. Use COLUMN_NAME as the data column and
COLUMN_NAME as the timestamp column. Show the top 10 forecasts.
In the prompts, replace the following:
PROJECT_ID : the Google Cloud project ID
REGION : the name of the region
DATASET_ID : the name of the dataset
TABLE_ID : the name of the table
COLUMN_NAME : the name of the column
Optional security and safety configurations
MCP introduces new security risks and considerations due to the wide variety of
actions that you can take with MCP tools. To minimize and manage these risks,
Google Cloud offers defaults and customizable policies to
control the use of MCP tools in your Google Cloud
organization or project.
For more information about MCP security and governance, see
AI security and safety .
Use Model Armor
Model Armor is a
Google Cloud service designed to enhance the security and
safety of your AI applications. It works by proactively screening LLM prompts
and responses, protecting against various risks and supporting responsible AI
practices. Whether you are deploying AI in your cloud environment, or on
external cloud providers, Model Armor can help
you prevent malicious input, verify content safety, protect sensitive data,
maintain compliance, and enforce your AI safety and security policies
consistently across your diverse AI landscape.
Model Armor is only available in specific regional locations. If
Model Armor is enabled for a project, and a call to that project comes
from an unsupported region, then Model Armor makes a cross-regional
call. For more information, see
Model Armor locations .
Caution: When Model Armor is enabled with
logging enabled , Model Armor logs the entire
payload. This might expose sensitive information in the logs.
Enable Model Armor
You must enable Model Armor APIs before you can use Model Armor.
Console
Enable the Model Armor API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Select the project where you want to activate Model Armor.
gcloud
Before you begin, follow these steps using the Google Cloud CLI with the
Model Armor API:
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Run the following command to set the API endpoint for the
Model Armor service.
gcloud config set api_endpoint_overrides/modelarmor "https://modelarmor. LOCATION .rep.googleapis.com/"
Replace LOCATION with the region where you want to use
Model Armor.
Configure protection for Google and Google Cloud remote MCP servers
To help protect your MCP tool calls and responses you can use
Model Armor floor settings. A floor setting defines the minimum
security filters that apply across the project. This configuration applies a
consistent set of filters to all MCP tool calls and responses within
the project.
Tip: Don't enable the prompt injection and jailbreak filter unless your MCP
traffic carries natural language data.
Set up a Model Armor floor setting with MCP sanitization
enabled. For more information, see Configure Model Armor floor
settings .
Note: If the agent and the MCP server are in different projects, you can create
floor settings in both projects (the client project and the resource project).
In this case, Model Armor is invoked twice, once for each project.
See the following example command:
gcloud model-armor floorsettings update \
--full-uri = 'projects/ PROJECT_ID /locations/global/floorSetting' \
--enable-floor-setting-enforcement = TRUE \
--add-integrated-services = GOOGLE_MCP_SERVER \
--google-mcp-server-enforcement-type = INSPECT_AND_BLOCK \
--enable-google-mcp-server-cloud-logging \
--malicious-uri-filter-settings-enforcement = ENABLED \
--add-rai-settings-filters = '[{"confidenceLevel": "MEDIUM_AND_ABOVE", "filterType": "DANGEROUS"}]'
Replace PROJECT_ID with your Google Cloud project ID.
Note the following settings:
INSPECT_AND_BLOCK : The enforcement type that
inspects content for the Google MCP server and blocks prompts and
responses that match the filters.
ENABLED : The setting that enables a filter or
enforcement.
MEDIUM_AND_ABOVE : The confidence level for the
Responsible AI - Dangerous filter settings. You can modify this setting,
though lower values might result in more false positives. For more
information, see
Model Armor confidence levels .
Disable scanning MCP traffic with Model Armor
If you want to stop scanning Google MCP traffic with Model Armor,
run the following command:
gcloud model-armor floorsettings update \
--full-uri = 'projects/ PROJECT_ID /locations/global/floorSetting' \
--remove-integrated-services = GOOGLE_MCP_SERVER
Replace PROJECT_ID with the Google Cloud project
ID.
Model Armor won't scan MCP traffic in the project.
Control MCP use with IAM deny policies
Identity and Access Management (IAM) deny policies help you
secure Google Cloud remote MCP servers. Configure these policies to block
unwanted MCP tool access.
For example, you can deny or allow access based on:
The principal
Tool properties like read-only
The application's OAuth client ID
For more information, see Control MCP use with Identity and Access Management .
Quotas and limits
The BigQuery MCP server doesn't have its own quotas. There
is no limit on the number of call that can be made to the MCP server.
You are still subject to the quotas enforced by the APIs called by the MCP
server tools. The following API methods are called by the MCP server tools:
Tool
API method
Quotas
list_dataset_ids
datasets.list
Dataset quotas and limits
list_table_ids
tables.list
Table quotas and limits
get_dataset_info
datasets.get
Dataset quotas and limits
get_table_info
tables.get
Table quotas and limits
execute_sql
jobs.Query
Query job quotas and limits
For more information on BigQuery quotas, see
Quotas and limits .
What's next
Read the
BigQuery MCP reference documentation .
Learn more about Google Cloud MCP servers .
See the MCP supported products .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
