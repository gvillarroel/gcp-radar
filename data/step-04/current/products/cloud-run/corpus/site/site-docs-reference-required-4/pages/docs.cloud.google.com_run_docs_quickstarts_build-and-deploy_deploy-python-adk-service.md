---
title: "Quickstart: Build and deploy an AI agent to Cloud Run using the Agent Development\
  \ Kit (ADK) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/deploy-functions
source_metadata:
  url: https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service
  title: "Quickstart: Build and deploy an AI agent to Cloud Run using the Agent Development\
    \ Kit (ADK) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Quickstart: Build and deploy an AI agent to Cloud Run using the Agent Development Kit (ADK)
Learn how to use a single command to build and deploy
an AI agent to Cloud Run using the Agent Development Kit (ADK) for Python. The agent you deploy retrieves the weather report
for a city you specify.
By following the steps in this quickstart, Cloud Run automatically
builds a Dockerfile for you when you deploy from source code .
For more information on how the Python buildpack determines the default
entrypoint for Cloud Run source deployments, see
Build a Python application .
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
Enable the Cloud Run Admin API, Vertex AI API, and Cloud Build APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable run.googleapis.com aiplatform.googleapis.com cloudbuild.googleapis.com
Install ADK by following the instructions in the Agent Development Kit documentation .
If you are under a domain restriction organization policy restricting unauthenticated invocations for your project, you will need to access your deployed service as described under Testing private services .
Review Cloud Run pricing or estimate costs
with the pricing calculator .
Required roles
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
following IAM roles:
Cloud Run Source Developer ( roles/run.sourceDeveloper )
on the project
Vertex AI User ( roles/aiplatform.user )
on the project
Service Account User ( roles/iam.serviceAccountUser )
on the service identity
Logs Viewer ( roles/logging.viewer )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Grant the Cloud Build service account access to your project
Cloud Build automatically uses the Compute Engine default
service account as the default
Cloud Build service account to build your source code and
Cloud Run resource, unless you override this behavior.
For Cloud Build to build your sources, grant the Cloud Build service
account the Cloud Run
Builder
( roles/run.builder ) role on your project:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: SERVICE_ACCOUNT_EMAIL_ADDRESS \
--role = roles/run.builder
Replace PROJECT_ID with your Google Cloud
project ID and SERVICE_ACCOUNT_EMAIL_ADDRESS with the
email address of the Cloud Build service account. If you're using the
Compute Engine default service account as the Cloud Build service account, then
use the following format for the service account email address:
PROJECT_NUMBER -compute@developer.gserviceaccount.com
Replace PROJECT_NUMBER with your Google Cloud
project number.
For detailed instructions on how to find your project ID, and project number,
see Creating
and managing projects .
Granting the Cloud Run builder role takes a couple of minutes to propagate .
Write the sample application
To write an application in Python:
Create a new parent directory named parent_folder and change directory into it:
mkdir parent_folder
cd parent_folder
In the parent_folder directory, create a new subdirectory named multi_tool_agent
and change directory into it:
mkdir multi_tool_agent
cd multi_tool_agent
Create an __init__.py file to import the agent:
from . import agent
Create an agent.py file to define the agent for answering questions
about the time and weather in a specified city:
import datetime
from zoneinfo import ZoneInfo
from google.adk.agents import Agent
def get_weather ( city : str ) - > dict :
"""Retrieves the current weather report for a specified city.
Args:
city (str): The name of the city for which to retrieve the weather report.
Returns:
dict: status and result or error msg.
"""
if city . lower () == "new york" :
return {
"status" : "success" ,
"report" : (
"The weather in New York is sunny with a temperature of 25 degrees"
" Celsius (77 degrees Fahrenheit)."
),
}
else :
return {
"status" : "error" ,
"error_message" : f "Weather information for ' { city } ' is not available." ,
}
def get_current_time ( city : str ) - > dict :
"""Returns the current time in a specified city.
Args:
city (str): The name of the city for which to retrieve the current time.
Returns:
dict: status and result or error msg.
"""
if city . lower () == "new york" :
tz_identifier = "America/New_York"
else :
return {
"status" : "error" ,
"error_message" : (
f "Sorry, I don't have timezone information for { city } ."
),
}
tz = ZoneInfo ( tz_identifier )
now = datetime . datetime . now ( tz )
report = (
f 'The current time in { city } is { now . strftime ( "%Y-%m- %d %H:%M:%S %Z%z" ) } '
)
return { "status" : "success" , "report" : report }
root_agent = Agent (
name = "weather_time_agent" ,
model = "gemini-2.0-flash" ,
description = (
"Agent to answer questions about the time and weather in a city."
),
instruction = (
"You are a helpful agent who can answer user questions about the time and weather in a city."
),
tools = [ get_weather , get_current_time ],
)
Create a .env file and add the following variables:
GOOGLE_GENAI_USE_VERTEXAI=TRUE
GOOGLE_CLOUD_PROJECT= PROJECT_ID
GOOGLE_CLOUD_LOCATION= REGION
Replace the following:
PROJECT_ID : the Google Cloud project ID.
REGION : the region you plan to deploy your service in.
Navigate to the parent folder directory parent_folder , and create a requirements.txt file
to add the google-adk dependency:
google-adk
Your source project includes the following structure:
parent_folder/
├── requirements.txt
└── multi_tool_agent/
├── __init__.py
├── agent.py
└── .env
Your app is finished and ready to be deployed.
Deploy to Cloud Run from source
Deploy from source automatically builds a container image from source code
and deploys it.
In your source code directory ( parent_folder ), deploy to Cloud Run using the
following command:
gcloud run deploy --source .
When you are prompted for the service name, press Enter to accept the
default name, for example weather-agent .
If you are prompted to enable additional APIs on the project,
for example, the Artifact Registry API, respond by pressing
y .
When you are prompted for region: select the region
of your choice, for example europe-west1 .
If you are prompted to create a repository in the specified region, respond by pressing y .
If you are prompted to allow public access :
respond y . You might not see this prompt if there is a domain
restriction organization policy that prevents it; for more details see the
Before you begin section.
Then wait a few moments until the deployment is complete. On success, the
command line displays the service URL. Navigate to /list-apps from your service URL. For example,
https://weather-agent-123456789101.us-central1.run.app/list-apps .
Run your agent
To query the ADK agent, run the following curl commands:
To get the list of apps, run the following command:
curl -X GET SERVICE_URL /list-apps
Replace SERVICE_URL with the URL of your deployed service.
To start a session, run the following command:
curl -X POST SERVICE_URL /apps/multi_tool_agent/users/u_123/sessions/s_123 -H "Content-Type: application/json" -d '{"key1": "value1", "key2": 42}'
To query the agent, run the following command:
curl -X POST SERVICE_URL /run \
-H "Content-Type: application/json" \
-d "{\"appName\": \"multi_tool_agent\",\"userId\": \"u_123\",\"sessionId\": \"s_123\",\"newMessage\": { \"role\": \"user\", \"parts\": [{ \"text\": \"What's the weather in New York today?\" }]}}"
The agent returns the weather information in the results of your query.
For more information and examples about the supported curl commands, see Use the API Server in ADK documentation.
Success: You deployed an AI agent using the Agent Development Kit to Cloud Run.
Clean up
To avoid additional charges to your Google Cloud account, delete all the resources
you deployed with this quickstart.
Delete your repository
Cloud Run doesn't charge you when your deployed service isn't in use.
However, you might still be charged for storing the container image in
Artifact Registry . To delete Artifact Registry repositories,
follow the steps in Delete
repositories in the Artifact Registry
documentation.
Delete your service
Cloud Run services don't incur costs until they receive requests.
To delete your Cloud Run service, follow one of these steps:
Console
To delete a service:
In the Google Cloud console, go to the Cloud Run Services page:
Go to Cloud Run
Locate the service you want to delete in the services list, and click
its checkbox to select it.
Click Delete . This deletes all revisions of the service.
gcloud
To delete a service, run the following command:
gcloud run services delete SERVICE --region REGION
Replace the following:
SERVICE : name of your service.
REGION : Google Cloud region of the service.
Delete your test project
Deleting your Google Cloud project stops billing for all resources in that
project. To release all Google Cloud resources in your project, follow these steps:
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
What's next
For more information on building a container from code source and pushing to
a repository, see:
Developing Cloud Run services
Building Containers
Test a Cloud Run service locally
Deploying from source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
