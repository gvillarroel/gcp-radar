---
title: "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for SQL Server \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp
  title: "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for SQL Server \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
SQL Server
Guides
Send feedback
Use the Cloud SQL remote MCP server
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
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
This document shows you how to use the Cloud SQL for SQL Server remote Model Context
Protocol (MCP) server to connect with AI applications including Gemini
CLI, ChatGPT, Claude, and custom applications you are developing.
The Cloud SQL remote MCP server lets you
access and run Cloud SQL tools to create, manage, and query Cloud SQL
resources from your AI-enabled development environments and
AI agent platforms.
.
The Cloud SQL for SQL Server remote MCP server is enabled when you
enable the Cloud SQL for SQL Server API.
Model Context Protocol
(MCP) standardizes how large language models (LLMs) and AI applications or
agents connect to external data sources. MCP servers let you use their tools,
resources, and prompts to take actions and get updated data from their backend
service.
What's the difference between local and remote MCP servers?
Local MCP servers
Typically run on your local machine and use the standard input
and output streams (stdio) for communication between services on the same
device.
Remote MCP servers
Run on the service's infrastructure and offer an HTTP
endpoint to AI applications for communication between the AI MCP client and
the MCP server. For more information about MCP architecture, see
MCP architecture .
Google and Google Cloud remote MCP servers
Google and Google Cloud remote MCP servers have the following
features and benefits:
Simplified, centralized discovery.
Managed global or regional HTTP endpoints.
Fine-grained authorization.
Optional prompt and response security with
Model Armor protection.
Centralized audit logging.
For information about other MCP servers and information about security
and governance controls available for Google Cloud MCP servers,
see Google Cloud MCP servers overview .
Remote MCP Servers are managed by Google and offer additional security and
governance controls compared to local MCP Servers provided by
Cloud SQL for SQL Server MCP Toolbox for Databases . For more information about other remote
MCP servers and about the security and governance controls available
for MCP, see Google Cloud MCP servers overview .
The following sections only apply to the Cloud SQL for SQL Server
remote MCP server.
Before you begin
Required roles
To get the permissions that
you need to use the Cloud SQL remote MCP server,
ask your administrator to grant you the
following IAM roles on the project where you want to use the remote Cloud SQL MCP server:
Make MCP tool calls in a project:
MCP Tool User ( roles/mcp.toolUser )
Create an OAuth client ID:
OAuth Config Editor ( roles/oauthconfig.editor )
Create, clone, or update a Cloud SQL instance:
Cloud SQL Admin ( roles/cloudsql.admin )
Get a Cloud SQL instance or list all Cloud SQL instances in a project:
Cloud SQL Viewer ( roles/cloudsql.viewer )
Import data into a Cloud SQL instance:
Cloud SQL Admin ( roles/cloudsql.admin )
Storage Admin ( roles/storage.admin )
List Cloud SQL users:
Cloud SQL Viewer ( roles/cloudsql.viewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to use the Cloud SQL remote MCP server. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to use the Cloud SQL remote MCP server:
Make MCP tool calls:
mcp.tools.call
Clone a Cloud SQL instance:
cloudsql.instances.clone
Create a Cloud SQL instance:
cloudsql.instances.create
Get a Cloud SQL instance:
cloudsql.instances.get
Get a Cloud SQL instance operation:
cloudsql.instances.get
Import data to a Cloud SQL instance:
cloudsql.instances.import
List Cloud SQL instances in a project:
cloudsql.instances.list
List Cloud SQL users:
cloudsql.users.list
Update a Cloud SQL instance:
cloudsql.instances.update
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Configure an MCP client to use the Cloud SQL MCP server
Host programs, such as Claude or the Gemini CLI, can instantiate MCP
clients that connect to a single MCP server. A host program can have multiple
clients that connect to different MCP servers. To connect to a remote MCP server,
the MCP client must know at a minimum the URL of the remote MCP server.
Use the following instructions to configure MCP clients to connect to your remote
Cloud SQL MCP server.
Gemini CLI
To add a Cloud SQL remote MCP server to your Gemini CLI,
configure it as an extension.
Create an extension file in the following location:
~/.gemini/extensions/ EXT_NAME /gemini-extension.json where
~/ is your home directory and EXT_NAME is the name you want to
give the extension.
Save the following content in your extension file:
{
"name" : " EXT_NAME " ,
"version" : "1.0.0" ,
"mcpServers" : {
"Cloud SQL MCP Server" : {
"httpUrl" : "https://sqladmin.googleapis.com/mcp" ,
"authProviderType" : "google_credentials" ,
"oauth" : {
"scopes" : [ "https://www.googleapis.com/auth/cloud-platform" ]
},
"timeout" : 30000 ,
"headers" : {
"x-goog-user-project" : " PROJECT_ID "
}
}
}
}
Save the extensions file.
Start Gemini CLI:
gemini
Run /mcp to view your configured MCP server and its tools.
The response is similar to the following:
Configured MCP servers:
🟢 Cloud SQL MCP Server (from sqladmin )
- list_instances
- get_instance
- clone_instance
- create_instance
- update_instance
- execute_sql
- import_data
- create_user
- update_user
- list_users
- get_operation
The remote MCP server is ready to use in Gemini CLI.
Antigravity
To configure the Cloud SQL remote MCP server for use with
Antigravity ,
use Application Default Credentials (ADC) .
Authenticate to the Google Cloud project
Sign in to Google Cloud using ADC by running the following command.
gcloud auth application-default login
Copy the generated URL and token into a browser window.
A sign-in screen appears. Choose the account that has permissions to
call MCP tools and use the remote MCP server. After you sign in, your credentials are stored in the local credential file used by ADC.
Add the remote MCP server to Antigravity
Open Antigravity.
In the Agent pane, click
more_horiz to open the Additional options
menu, and select MCP servers .
In the MCP Store window, select Manage MCP Servers .
In the main editor window, the Manage MCP servers pane appears.
In the Manage MCP servers pane, click View raw config
to open a tab with the mcp_json.config file.
Add the following configuration to the mcp_config.json file:
{
"mcpServers" : {
"cloud-sql" : {
"serverUrl" : "https://sqladmin.googleapis.com/mcp" ,
"authProviderType" : "google_credentials" ,
"disabled" : false
}
}
}
Return to the Manage MCP servers pane, and click Refresh .
A list of available tools for the Cloud SQL remote MCP server
appears.
In the Agent pane, enter a prompt for the agent that uses the remote
Cloud SQL MCP server. For example:
List the Cloud SQL instances in the project.
Verify that the agent is using list_instances tool from
the Cloud SQL remote MCP server.
In the Agent pane, you can see the agent's work include the following:
MCP tool: cloud-sql/list_instance
Claude.ai
You must have the Claude Enterprise, Pro, Max, or Team plan to configure Google
and Google Cloud MCP servers in Claude.ai. For pricing information, see
Claude Pricing .
To add a Google or Google Cloud remote MCP server to Claude.ai, configure a
custom connector with a OAuth client ID and OAuth client secret:
Create an Oauth 2.0 client ID and secret
In the Google Cloud console, go to
Google Auth Platform > Clients > Create client .
Go to Create client
You are prompted to create a project if you don't have one selected.
In the Application type list, select Web application .
In the Name field, enter a name for your application.
In the Authorized redirect URIs section, click + Add URI , and then
add https://claude.ai/api/mcp/auth_callback in the URIs field.
Click Create . The client is created. To access the client ID,
in the Google Cloud console, go to Google Auth Platform > Clients .
In the OAuth 2.0 client IDs list, select the client name.
In the Client secrets section, copy the Client secret and save it
in a secure place. You can only copy it once. If you lose it, delete the
secret and create a new one.
Caution: Treat client secrets like passwords and store them in a secure
place.
Create a custom connector in Claude.ai
Follow the instructions for the Claude plan that you're using:
Enterprise and Team
In Claude.ai, navigate to Admin settings > Connectors .
Click Add custom connector .
In the Add custom connector dialog, enter the following:
Server name : a human readable name for the server.
Remote MCP server URL : https://sqladmin.googleapis.com/mcp
Expand the Advanced settings menu and then enter the following:
OAuth client ID : the OAuth 2.0 client ID you created.
OAuth client secret : the secret for your OAuth 2.0
client. To retrieve the secret, go to
Google Auth Platform > Clients and then select the OAuth client ID
you created. In the Client secrets section, click to copy the
Client secret .
Click Add .
The custom connector is created.
Open the Tools menu and enable the connector.
Claude.ai can use the MCP server.
Pro and Max
In Claude.ai, navigate to Settings > Connectors .
Click Add custom connector .
In the Add custom connector dialog, enter the following:
Server name : a human readable name for the server.
Remote MCP server URL : https://sqladmin.googleapis.com/mcp
Expand the Advanced settings menu and then enter the following:
OAuth client ID : the OAuth 2.0 client ID you created.
OAuth client secret : the secret for your OAuth 2.0
client. To retrieve the secret, go to
Google Auth Platform > Clients and then select the OAuth client ID
you created. In the Client secrets section, click to copy the
Client secret .
Click Add .
The custom connector is created.
Open the Tools menu and enable the connector.
Claude.ai can use the MCP server.
ChatGPT
You must have a ChatGPT Business subscription
to use Google and Cloud SQL MCP servers with ChatGPT.
To add a Google or Cloud SQL remote MCP server to ChatGPT, create a
Google OAuth 2.0 client ID and secret, and then add the MCP server as an
App in ChatGPT.
Create an Oauth 2.0 client ID and secret
In the Google Cloud console, go to
Google Auth Platform > Clients > Create client .
Go to Create client
You are prompted to create a project if you don't have one selected.
In the Application type list, select Web application .
In the Name field, enter a name for your application.
In the Authorized JavaScript origins section, click + Add URI , and then
add https://chatgpt.com in the URIs field.
In the Authorized redirect URIs section, click + Add URI , and then
add https://chatgpt.com/connector_platform_oauth_redirect in the URIs field.
Click Create . The client is created. To access the client ID,
in the Google Cloud console, go to Google Auth Platform > Clients .
In the OAuth 2.0 client IDs list, select the client name.
In the Client secrets section, copy the Client secret and
save it
in a secure place. You can only copy it once. If you lose it, delete the
secret and create a new one.
Caution: Treat client secrets like
passwords and store them in a secure
place.
Add the MCP server as an app in ChatGPT
Sign in to ChatGPT.
Turn on Developer mode:
In ChatGPT, click your username to open the Profile menu ,
and then select
Settings .
In the Settings menu, select Apps , and then click
Advanced settings .
In the Advanced settings , click the Developer mode
toggle to the on position.
In Settings > Apps , click the Create app button.
In the New app dialog, enter the following information:
Name : the name of the MCP server.
Description : an optional description of the MCP server.
MCP server URL : https://sqladmin.googleapis.com/mcp
Authentication :
In the Authentication menu, select OAuth .
In the OAuth client ID field, enter your Google OAuth
client ID.
In the OAuth secret field, enter your Google OAuth
client secret.
Confirm that you understand the risk associated with MCP server
use, and then click Create .
The MCP server is displayed in the Apps menu, and is ready for
use through chat prompts.
General guidance for MCP clients
If your MCP client isn't listed in
Configure an MCP client to use the Cloud SQL MCP server ,
then you use the following information to connect to a remote MCP
server in your host program or AI application. You are prompted
to enter details about the server, such as its name and URL.
For the Cloud SQL remote MCP server, enter the following as
required:
Server name : Cloud SQL MCP server
Server URL or Endpoint : https://sqladmin.googleapis.com/mcp
Transport : HTTP
Authentication details : Depending on how you want to authenticate, you can
enter your Google Cloud credentials, your OAuth Client ID
and secret, or an agent identity and credentials.
For more general guidance, see the following resources:
Authenticate to MCP servers .
Configure MCP in an AI application .
Authentication and authorization
Cloud SQL MCP servers use the
OAuth 2.0
protocol with
Identity and Access Management (IAM)
for authentication and authorization. All
Google Cloud identities
are supported for authentication to MCP servers.
The Cloud SQL remote MCP server doesn't accept API keys.
We recommend creating a separate identity for agents using MCP tools so that
access to resources can be controlled and monitored. For more information on
authentication, see Authenticate to MCP servers .
Cloud SQL MCP OAuth scopes
OAuth 2.0 uses scopes and credentials to determine if an authenticated
principal is authorized to take a specific action on a resource. For more
information about OAuth 2.0 scopes at Google, read
Using OAuth 2.0 to access Google APIs .
Cloud SQL has the following MCP tool OAuth scopes:
Scope URI for gcloud CLI
Description
https://www.googleapis.com/auth/cloud-platform
Create, update, and list Cloud SQL resources including
instances and database users. Import data and execute SQL queries on
Cloud SQL instances.
Additional scopes might be required on the resources accessed during a tool
call. To view a list of scopes required for
Cloud SQL, see
Cloud SQL Admin API .
Available tools
clone_instance : creates a Cloud SQL instance as a clone of source instance.
create_instance : initiates the creation of a Cloud SQL instance.
get_instance : gets the details of a Cloud SQL instance.
get_operation : gets the status of a long-running operation in Cloud SQL.
list_instances : lists all Cloud SQL instances in a project.
list_users : lists all database users for a Cloud SQL instance.
import_data : imports data into a Cloud SQL instance from Cloud Storage.
update_instance : updates supported settings of a Cloud SQL instance.
To view additional details of available MCP tools and their descriptions for the
Cloud SQL remote MCP server, see the
Cloud SQL MCP reference .
List tools
Use the MCP inspector to list tools, or send a
tools/list HTTP request directly to the Cloud SQL
remote MCP server. The tools/list method doesn't require authentication.
POST /mcp HTTP/1.1
Host: sqladmin.googleapis.com
Content-Type: application/json
{
"jsonrpc": "2.0",
"method": "tools/list",
}
Limitations
Cloud SQL for SQL Server doesn't support the create_user or
the execute_sql tool.
Optional security and safety configurations
Google Cloud offers an integration with Model Armor for remote
MCP Servers to help you use MCP tools securely.
For more information about MCP security and governance, see
AI security and safety .
Model Armor
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
Before you begin, follow these steps using the gcloud CLI with the
Model Armor API:
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the gcloud CLI
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
What's next
Read the
Cloud SQL MCP tools documentation .
Learn more about MCP .
Learn about other remote MCP servers .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
