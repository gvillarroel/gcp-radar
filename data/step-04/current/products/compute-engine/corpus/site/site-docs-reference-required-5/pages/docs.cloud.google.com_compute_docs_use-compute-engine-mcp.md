---
title: "Use the Compute Engine remote MCP server \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/use-compute-engine-mcp
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/use-compute-engine-mcp
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/use-compute-engine-mcp
  title: "Use the Compute Engine remote MCP server \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
APIs & Reference
Send feedback
Use the Compute Engine remote MCP server
Stay organized with collections
Save and categorize content based on your preferences.
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
This document shows you how to use the Compute Engine remote Model Context
Protocol (MCP) server to connect with AI applications including Gemini
CLI, ChatGPT, Claude, and custom applications you are developing.
The Compute Engine remote MCP server provides a comprehensive set of capabilities that let LLM agents perform a range of infrastructure management tasks including the following:
Manage virtual machine (VM) instances.
Manage instance group managers and instance templates.
Manage disks and snapshots.
Retrieve information about reservations and commitments.
.
The Compute Engine remote MCP server is enabled when you
enable the Compute Engine API.
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
Verify that billing is enabled for your Google Cloud project .
Make sure that you have the following role or roles on the project:
Compute Instance Admin (v1), Compute Security
Admin, Service Account User, Service Usage Admin
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
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
Verify that billing is enabled for your Google Cloud project .
Make sure that you have the following role or roles on the project:
Compute Instance Admin (v1), Compute Security
Admin, Service Account User, Service Usage Admin
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Enable the Compute Engine API.
Enable the Compute Engine API
Required roles
To get the permissions that
you need to to use the Compute Engine remote MCP server,
ask your administrator to grant you the
following IAM roles on your Google Cloud project:
Make MCP tool calls:
MCP Tool User ( roles/mcp.toolUser )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to to use the Compute Engine remote MCP server. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to to use the Compute Engine remote MCP server:
Make MCP tool calls:
mcp.tools.call
You might also be able to get
these permissions
with custom roles or
other predefined roles .
You also need the roles and permissions required to perform the
Compute Engine operations. For more information, see
Compute Engine roles and permissions .
Authentication and authorization
Compute Engine MCP servers use the
OAuth 2.0
protocol with
Identity and Access Management (IAM)
for authentication and authorization. All
Google Cloud identities
are supported for authentication to MCP servers.
We recommend that you create a separate identity for agents that are using MCP
tools so that access to resources can be controlled and monitored. For more information about
authentication, see Authenticate to MCP servers .
Compute Engine MCP OAuth scopes
OAuth 2.0 uses scopes and credentials to determine if an authenticated
principal is authorized to take a specific action on a resource. For more
information about OAuth 2.0 scopes at Google, read
Using OAuth 2.0 to access Google APIs .
Compute Engine has the following MCP tool OAuth scopes:
Scope URI for gcloud CLI
Description
https://www.googleapis.com/auth/compute.read-only
Only allows access to read data.
https://www.googleapis.com/auth/compute.read-write
Allows access to read and modify data.
Additional scopes might be required on the resources accessed during a tool
call. To view a list of scopes required for
Compute Engine, see
Compute Engine API .
Configure an MCP client to use the Compute Engine MCP server
AI applications and agents, such as Claude or Gemini
CLI, can instantiate an MCP client that connects to a single MCP server. An AI
application can have multiple clients that connect to different MCP servers.
To connect to a remote MCP server, the MCP client must know the remote MCP server's URL.
In your AI application, look for a way to connect to a remote MCP server. You
are prompted to enter details about the server, such as its name and URL.
For the Compute Engine MCP server, enter the following as
required:
Server name : Compute Engine MCP server
Server URL or Endpoint : https://compute.googleapis.com/mcp
Transport : HTTP
Authentication details : Depending on how you want to authenticate, you can
enter your Google Cloud credentials, your OAuth Client ID
and secret, or an agent identity and credentials. For more information on
authentication, see Authenticate to MCP servers .
For host-specific guidance about setting up and connecting to MCP server,
see the following:
Claude.ai
Gemini CLI
For more general guidance, see the following resources:
Connect to remote MCP servers .
Configure MCP in an AI application .
Available tools
To view details of available MCP tools and their descriptions for the
Compute Engine MCP server, see the
Compute Engine MCP reference .
List tools
Use the MCP inspector to list tools, or send a
tools/list HTTP request directly to the Compute Engine
remote MCP server. The tools/list method doesn't require authentication.
POST /mcp HTTP/1.1
Host: compute.googleapis.com
Content-Type: application/json
{
"jsonrpc": "2.0",
"method": "tools/list",
}
Example use cases
The following sample use cases describe how you can use the
Compute Engine MCP server to manage Compute Engine resources:
Inspect and manage resources . For example, to understand resource allocation
and configuration in your project, you can list all compute instances. You can also find all running compute instances in a zone that have a specific accelerator attached, and show their location and name for resource management.
Clean up unused resources to reduce operational costs . For example,
identify and clean up disk snapshots in a zone that are no longer associated
with a source disk, or identify and delete stopped VM instances that have costly GPU resources attached.
Optimize instance performance . For example, resize an under-provisioned
VM instance to a larger machine type in the same family, and confirm the successful
update.
Provision specialized VMs for AI workloads with zone flexibility . For
example, create a VM instance with a specific GPU accelerator attached, in
any zone in a specified region where it is available.
Troubleshoot and validate instance configurations . For example, retrieve
configuration details for a specific VM instance where the job is frozen,
reboot it, and confirm the underlying accelerator and disk are attached.
Sample prompts
The following are sample prompts that you can use to perform tasks by using
the Compute Engine MCP server:
List all VMs in PROJECT_ID , including the VM name and zone.
Show the instance details for VM_NAME .
In REGION , find all disk snapshots for which the source disk
no longer exists.
Change the machine type of VM_NAME to the next largest machine type
in the same machine family, send notification when it's back online, and confirm the new machine type.
Find all running VMs in REGION with NVIDIA accelerators, and show the zone and name for these VMs.
Create a VM in ZONE with an NVIDIA T4 accelerator attached. Name the VM my-nvidiat4-vm .
Find all stopped VMs in REGION with NVIDIA Tesla T4 accelerators, and delete them.
Replace the following:
PROJECT_ID : the Google Cloud project ID.
REGION : the name of the region where your resources exist.
ZONE : the name of the zone where your VMs exist.
VM_NAME : the name of your VM instance.
Optional security and safety configurations
MCP introduces new security risks and considerations due to the wide variety of
actions that you can do with the MCP tools. To minimize and manage these risks,
Google Cloud offers default settings and customizable policies to
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
What's next
Read the
Compute Engine MCP reference documentation .
Learn more about Google Cloud MCP servers .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
