---
title: "Access control \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/access-control
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/access-control
  title: "Access control \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Send feedback
Access control
Stay organized with collections
Save and categorize content based on your preferences.
It is common for multiple team members to
collaborate on building an agent
and for services to access the agent.
Using roles , you can control access and permissions granted to
principals .
You can configure access using
the Conversational Agents console or by using the
Google Cloud console ( visit documentation , open console ) with Identity and Access Management (IAM) .
The Google Cloud console is used to grant IAM roles to principals,
while the Conversational Agents console is used to grant Dialogflow CX agent roles to principals.
Dialogflow CX agent roles are convenient
predefined roles
defined by Dialogflow CX that restrict access to one agent or the child resources
of a specific agent.
There are some situations in which you must use the Google Cloud console:
IAM Project Owner role is by default granted
to the user that created the project that owns the agent.
This owner has full access to all agents in the project.
If you want to change the project owner,
you need to use the Google Cloud console.
Only agent-level access can be configured through the Dialogflow CX console.
If you want to configure project-level access,
you need to use the Google Cloud console.
A subset of IAM roles
have corresponding Dialogflow CX agent roles.
If you want to grant a project-level or agent-level role
that does not exist on the Dialogflow CX console,
you need to use the Google Cloud console.
If you are creating a
data store agent
with the
Vertex AI Conversation user interface ,
you need to use the Google Cloud console.
If you are using the API,
you may also have one or more applications that send requests to an agent.
In this case, you can control access with
service accounts .
Control access with the Conversational Agents console
The Conversational Agents console allows you to apply convenient agent roles
configured for agent-level sharing.
These roles correlate to IAM roles with
IAM conditions
that limit access to the specific agent or a subset of child resources of the
agent.
To access agent roles configuration from the Conversational Agents console,
you must be granted the Project IAM Admin role for the associated
project. This role is granted from the Google Cloud console.
Note: The Conversational Agents console will only show principals
with these specific roles and agent-specific conditions.
If you have used the Google Cloud console
to add principals with any roles or conditions,
they will not appear in the Conversational Agents console.
Dialogflow CX agent role
Summary
IAM Role
Conversational Reader
Provides read access to query (not detect intent) the agent from the console or API.
Dialogflow > Dialogflow API Reader
Conversational Admin
Provides full access to create, update, query, detect intent, and delete the agent from the console or API.
Dialogflow > Dialogflow API Admin
Conversational Client
Provides access to detect intent from the console or API.
Dialogflow > Dialogflow API Client
Service Agent
See Service Agents
See Service Agents
Flow editor
Provides access to update, query a specific flow, and create, update, delete, or query the flow resources (pages, route groups and versions) from the console or API.
Dialogflow > Dialogflow Flow editor
Environment editor
Provides access to update, query a specific environment, and create, update, delete, or query the environment resources (experiments) from the console or API.
Dialogflow > Dialogflow Environment editor
Entity Type Admin
Provides access to create, update, delete, or query the entity types of an agent from the console or API.
Dialogflow > Dialogflow Entity Type Admin
Intent Admin
Provides access to create, update, delete, or query the intents of an agent from the console or API.
Dialogflow > Dialogflow Intent Admin
Test Case Admin
Provides access to create, update, delete, or query the test cases of an agent from the console or API.
Dialogflow > Dialogflow Test Case Admin
Webhook Admin
Provides access to create, update, delete, or query the webhooks of an agent from the console or API.
Dialogflow > Dialogflow Webhook Admin
Sharing options are found in the agent's settings.
To open the agent sharing settings:
Open the Dialogflow CX console .
Choose your Google Cloud project.
Select your agent.
Click Agent Settings .
Click the Share tab.
Add a principal
Click Add .
Enter the email address for the user, group or service account.
Select User , Group or Service Account for the email type.
The Dialogflow Reader role is added by default, which is required for the users to access the Conversational Agents console.
Click Add role under Assign roles .
Select a role type under Type .
For the Flow Editor and Environment Editor roles, select specific flows or environments or keep the default All option.
Optionally, set the expiration date for the role.
Click Save .
Change principal roles
Click the principal in the list.
Update roles for this principal in the pop-up.
Click Save .
Remove a principal
Find the principal in the list.
Click the delete delete button
for the principal.
Click Ok .
Note: After you apply principal role changes,
there may be a delay before the changes take effect.
Control access with the Google Cloud console
You can control access with IAM settings.
See the IAM quickstart
for detailed instructions on adding, editing, and removing permissions.
To access the settings below, open the
IAM
page in the Google Cloud console.
Add a user or service account to the project
You can provide permissions to either users or service accounts
by granting them roles on your Google Cloud project.
Users are added by providing their email address.
Service accounts are also added by providing their associated email address.
You need to add service accounts
when you want to use one service account for multiple projects.
To find the email address associated with your service account,
see the IAM
Service Accounts
page in the Google Cloud console.
To add a principal:
Click the add add button
at the top of the page.
Enter the principal's email address.
Select a role.
Click Save .
Change permissions
Click the edit edit button
for the principal.
Select a different role.
Click Save .
Remove a principal
Click the delete delete
button for the principal.
Add a condition to restrict access to one agent
When adding or editing a principal, you can create an
IAM condition
that restricts access to one agent.
Note: Please grant agent roles to user emails for CX console access directly in
the Conversational Agents console.
For example:
{
"expression": "resource.name.startsWith(\"projects/PROJECT_ID/locations/REGION_ID/agents/AGENT_ID\")",
"title": "For Dialogflow CX Agent AGENT_ID"
}
This condition gives you basic access to a specific agent.
For example, a service account with this condition can only call the Dialogflow CX
API to access the agent specified in the condition for the project, but not
other agents in the project.
To add this condition to a role granted to a principal:
Select a principal.
Click the edit edit button
for the principal.
Click Add condition .
In the Title field,
enter For Dialogflow CX Agent AGENT_ID
and replace AGENT_ID with your agent ID.
You may add any description.
Select the Condition editor to create your condition.
Add the expression
resource.name.startsWith("projects/PROJECT_ID/locations/REGION_ID/agents/AGENT_ID") ,
replacing AGENT_ID with your agent ID and PROJECT_ID with your project ID.
Click Save .
IAM roles
The following table lists common IAM roles relevant to Dialogflow CX.
Permission summaries in the table use the following terms:
Full access :
Permission to modify access, create, delete, edit, and read any resource.
Edit access :
Permission to create, delete, edit, and read any resource.
Session access :
Permission to call methods for runtime-only resources during a conversation like
detecting intent, updating context, updating session entities,
or Agent Assist conversation interactions.
Read access :
Permission to read any resource.
Note:
In order to modify access for an agent, you need a
role that provides full access to the agent.
In order to delete an agent, you need a
role that provides full access or edit access to the agent. Note:
The console simulator
calls the detectIntent API method during a conversation.
This method performs a write on the session state.
In order to use the console
or call the API's detectIntent/streamingDetectIntent methods,
you need a role that provides full access , edit access , or
session access .
IAM role
Permission Summary
Permission Detail
Project > Owner
Grant to project owners
that need full access to all Google Cloud and Dialogflow CX resources:
Full access to all Google Cloud project resources using Google Cloud console or APIs.
Full access to agents using the Conversational Agents console.
Can detect intent using API.
See
IAM basic role definitions.
Project > Editor
Grant to project editors
that need edit access to all Google Cloud and Dialogflow CX resources:
Edit access to all Google Cloud project resources using Google Cloud console or APIs.
Edit access to agents using the Conversational Agents console.
Can detect intent using API.
See
IAM basic role definitions.
Project > Viewer
Grant to project viewers
that need read access to all Google Cloud and Dialogflow CX resources:
Read access to all Google Cloud project resources using Google Cloud console or APIs.
Read access to agents using the Conversational Agents console or API, cannot use the simulator.
Cannot detect intent using API.
See
IAM basic role definitions.
Project > IAM Admin
Grant to project IAM admins
that need edit access to Dialogflow CX agent roles configuration.
See
IAM resource manager role definitions.
Project > Browser
Grant to project browsers
that need read access to browse the hierarchy for a project,
including the folder, organization, and IAM policy:
Read access to Google Cloud project hierarchy.
No access to agents using the Conversational Agents console.
Cannot detect intent using API.
See
IAM project role definitions .
Dialogflow > Dialogflow API Admin
Grant to Dialogflow CX API admins
that need full access to Dialogflow CX-specific resources:
Full access to all Dialogflow CX resources using Google Cloud console or APIs.
Full access to agents using the Conversational Agents console.
Can detect intent using API.
See
Dialogflow IAM role definitions.
Dialogflow > Dialogflow API Client
Grant to Dialogflow CX API clients
that perform detect intent calls using the API:
Session access to runtime Dialogflow CX resources using Dialogflow CX simulator or API.
Limited access to agents using the Conversational Agents console.
Can detect intent using API.
See
Dialogflow IAM role definitions.
Dialogflow > Conversational Agents console Agent Editor
Grant to Conversational Agents console editors
that edit existing agents:
Full access to all Dialogflow CX resources using Google Cloud console.
Edit access to most agent data using the Conversational Agents console.
Can detect intent using API.
See
Dialogflow IAM role definitions.
Dialogflow > Dialogflow API Reader
Grant to Dialogflow API clients
that perform Dialogflow CX-specific read-only calls
using the API:
Read access to all Dialogflow CX resources using Google Cloud console or APIs.
Read access to agents using the Conversational Agents console, cannot use the simulator.
Cannot detect intent using API.
See
Dialogflow IAM role definitions.
Discovery Engine Admin
Grant to users that create
data store agents with the
Vertex AI Agents user interface.
See
Discovery Engine IAM role definitions.
OAuth
If you are using Google client libraries to access Dialogflow CX,
you do not need to use
OAuth
directly, because these libraries handle the implementation for you.
However, if you are implementing your own client,
you may need to implement your own OAuth flow.
Access to the Dialogflow CX API requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
(access to all project resources)
https://www.googleapis.com/auth/dialogflow
(access to Dialogflow CX resources)
Requests that involve Cloud Storage access
Some Dialogflow CX requests access objects in
Cloud Storage
for reading or writing data.
When you call one of these requests,
Dialogflow CX accesses the Cloud Storage data on the caller's behalf.
This means that your request authentication must have permissions
to access Dialogflow CX as well as the Cloud Storage objects.
When using a Google client library and IAM roles,
see the
Cloud Storage access control guide
for information on Cloud Storage roles.
When implementing your own client and using OAuth ,
you must use the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
(access to all project resources)
Custom roles for playbook tool access
You can provide granular access control for playbook tools
by using permissions and custom roles.
You can list the available permissions by visiting
the permission search tool
and searching for dialogflow.tools .
Using those permissions,
you can create
custom roles .
Previous
arrow_back
Legacy Analytics
Next
Agent collaboration
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
