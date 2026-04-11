---
title: "Manage deployed agents \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-builder/agent-engine/manage/overview
knowledge_key: corpus
source_id: site-iam-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/agent-builder/agent-engine/manage/access
source_metadata:
  url: https://docs.cloud.google.com/agent-builder/agent-engine/manage/overview
  title: "Manage deployed agents \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Agent Builder
Guides
Send feedback
Manage deployed agents
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to manage agents that have been deployed to the Vertex AI Agent Engine
managed runtime. Deployed agents are resources of type reasoningEngine in Vertex AI.
List deployed agents
List all deployed agents for a given project and location:
Console
In the Google Cloud console, go to the Vertex AI Agent Engine page.
Go to Agent Engine
Deployed agents that are part of the selected project appear in the list. You can use the Filter field to filter the list by your specified column.
Vertex AI SDK for Python
Note: See the Agent Engine migration guide for instructions to migrate to the client-based Vertex AI SDK for Python if you are still
on a version of google-cloud-aiplatform before 1.112.0 .
import vertexai
client = vertexai . Client ( # For service interactions via client.agent_engines
project = " PROJECT_ID " ,
location = " LOCATION " ,
)
for agent in client . agent_engines . list ():
print ( agent )
To filter the list of by display_name :
for agent in client . agent_engines . list (
config = {
"filter" : 'display_name=" DISPLAY_NAME "' ,
},
):
print ( agent )
REST
Call the reasoningEngines.list method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your GCP project ID
LOCATION : a supported region
HTTP method and URL:
GET https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /reasoningEngines
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /reasoningEngines"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /reasoningEngines" | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
Get a deployed agent
Each deployed agent has a unique RESOURCE_ID identifier.
To learn more, see Deploy an agent .
Console
In the Google Cloud console, go to the Vertex AI Agent Engine page.
Go to Agent Engine
Deployed agents that are part of the selected project appear in the list. You can use the Filter field to filter the list by your specified column.
Click the name of the specified agent. The Metrics page for the agent opens.
(Optional) To view deployment details for the agent, click Deployment details . The Deployment details pane opens. To close the pane, click Done .
(Optional) To view the query and streamQuery URLs for the agent, click API URLs . The API URLs pane opens. To close the pane, click Done .
Vertex AI SDK for Python
Note: See the Agent Engine migration guide for instructions to migrate to the client-based Vertex AI SDK for Python if you are still
on a version of google-cloud-aiplatform before 1.112.0 .
The following code lets you get a specific deployed agent:
import vertexai
client = vertexai . Client ( # For service interactions via client.agent_engines
project = " PROJECT_ID " ,
location = " LOCATION " ,
)
remote_agent = client . agent_engines . get (
name = "projects/ PROJECT_ID_OR_NUMBER /locations/ LOCATION /reasoningEngines/ RESOURCE_ID "
)
REST
Call the reasoningEngines.get method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your GCP project ID
LOCATION : a supported region
RESOURCE_ID : the resource ID of the deployed agent
HTTP method and URL:
GET https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /reasoningEngines/ RESOURCE_ID
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /reasoningEngines/ RESOURCE_ID "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /reasoningEngines/ RESOURCE_ID " | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
Update a deployed agent
You can update one or more fields of the deployed agent at the same time,
but you have to specify at least one of the fields to be updated. The amount
of time it takes to update the deployed agent depends on the update being
performed, but it generally takes between a few seconds to a few minutes.
Console
In the Google Cloud console, go to the Vertex AI Agent Engine page.
Go to Agent Engine
For your specified agent, click more actions menu ( more_vert ).
Click Edit . The Edit pane for the agent opens.
Edit the Display name or Description for the agent.
Click Save .
Vertex AI SDK for Python
Note: See the Agent Engine migration guide for instructions to migrate to the client-based Vertex AI SDK for Python if you are still
on a version of google-cloud-aiplatform before 1.112.0 .
To update a deployed agent (corresponding to RESOURCE_NAME )
to an updated agent (corresponding to UPDATED_AGENT ):
import vertexai
client = vertexai . Client ( # For service interactions via client.agent_engines
project = " PROJECT_ID " ,
location = " LOCATION " ,
)
client . agent_engines . update (
name = RESOURCE_NAME , # Required.
agent = UPDATED_AGENT , # Optional.
config = { # Optional.
"requirements" : REQUIREMENTS , # Optional.
"display_name" : " DISPLAY_NAME " , # Optional.
"description" : " DESCRIPTION " , # Optional.
"extra_packages" : EXTRA_PACKAGES , # Optional.
},
)
The arguments are the same as when you are deploying an agent .
REST
Call the reasoningEngines.patch method and provide an update_mask to specify which fields to update.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your GCP project ID
LOCATION : a supported region
RESOURCE_ID : the resource ID of the deployed agent
update_mask : a list of comma-separated fields to update
HTTP method and URL:
PATCH https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /reasoningEngines/ RESOURCE_ID ?update_mask="display_name,description"
Request JSON body:
{
"displayName": " DISPLAY_NAME ",
"description": " DESCRIPTION "
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /reasoningEngines/ RESOURCE_ID ?update_mask="display_name,description""
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /reasoningEngines/ RESOURCE_ID ?update_mask="display_name,description"" | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
Configure telemetry for your deployed agent
If you enabled traces
during agent development, you can use the Google Cloud console to configure
telemetry for your deployed agent.
Configure telemetry for deployed agents with telemetry enabled:
In the Google Cloud console, go to the Vertex AI Agent Engine page.
Go to Agent Engine
Agent Engine instances that are part of the selected project appear in the list. You can use the Filter field to filter the list by your specified column.
Find the row for your Agent Engine instance. Under the Telemetry configuration column,
click Configure . The Service configuration panel opens.
You can make the following configurations:
Observability : You can configure the following:
Enable instrumentation of OpenTelemetry traces and logs : To populate the agent
observability dashboard and traces pages, click the toggle to the on
position.
Enable logging of prompt inputs and response outputs : To collect and
store the full content of user prompts and responses, click the toggle to
the on position.
If telemetry collection is disabled for your agent, you need to redeploy
your agent and update your Vertex AI SDK version to >= 1.126.1 in
order to view configuration options for Observability .
Containers : Configure container settings for your deployed agent:
Scaling : Enter a Minimum number of instances and Maximum number
of instances .
Resources : Select limits for Memory and CPU for each container.
Container concurrency : Enter a Minimum number of instances to set
the concurrency for each container and agent server. The recommended value
is (2 * CPU + 1), and the default value is 9.
Access and Permissions : Click Manage Permissions in IAM to manage
agent permissions on the associated service account.
Deployment details : View deployment details for the agent, including
Resource name and Display name .
Memory Bank : View Memory Bank details for the agent, including Memory
Generation and Memory Search .
Click Update or Close .
View metrics for your deployed agent
For deployed agents, you can use the console to view metrics for your agent:
In the Google Cloud console, go to the Vertex AI Agent Engine page.
Go to Agent Engine
Deployed agents that are part of the selected project appear in the list. You can use the Filter field to filter the list by your specified column.
Click the name of your agent. The Dashboard displays for your selected agent.
Select one of the following Dashboard tabs:
Overview : View a summary dashboard of metrics for your agent, including
agent latency, agent request count, and agent error rate.
Models : View a dashboard of metrics for your agent's model, including
number of model calls, model error rate, and model token usage.
Tools : View a dashboard of metrics for your agent's tools, including
number of tool calls, tool error rate, and tool latency.
Usage : View a dashboard of metrics for your agent's usage, including
token usage by input and output, container CPU allocation, and container
memory allocation.
Logs : View your agent's logs, if you enabled
Cloud Logging for your
agent.
Delete a deployed agent
Delete a deployed agent from the Vertex AI Agent Engine managed runtime.
Console
In the Google Cloud console, go to the Vertex AI Agent Engine page.
Go to Agent Engine
For your specified agent, click more actions menu ( more_vert ).
Click Delete .
Click Delete agent .
Vertex AI SDK for Python
Note: See the Agent Engine migration guide for instructions to migrate to the client-based Vertex AI SDK for Python if you are still
on a version of google-cloud-aiplatform before 1.112.0 .
If you already have an existing instance of the deployed agent
(as remote_agent ), you can run the following command:
remote_agent . delete (
force = True , # Optional, if the agent has resources (e.g. sessions, memory)
)
Alternatively, you can call agent_engines.delete() to delete the deployed
agent corresponding to RESOURCE_NAME in the following way:
import vertexai
client = vertexai . Client ( # For service interactions via client.agent_engines
project = " PROJECT_ID " ,
location = " LOCATION " ,
)
client . agent_engines . delete (
name = RESOURCE_NAME ,
force = True , # Optional, if the agent has resources (e.g. sessions, memory)
)
REST
Call the reasoningEngines.delete method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your GCP project ID
LOCATION : a supported region
RESOURCE_ID : the resource ID of the deployed agent
HTTP method and URL:
DELETE https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /reasoningEngines/ RESOURCE_ID
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /reasoningEngines/ RESOURCE_ID "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /reasoningEngines/ RESOURCE_ID " | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
What's next
Use an agent .
Troubleshoot managing deployed agents .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
