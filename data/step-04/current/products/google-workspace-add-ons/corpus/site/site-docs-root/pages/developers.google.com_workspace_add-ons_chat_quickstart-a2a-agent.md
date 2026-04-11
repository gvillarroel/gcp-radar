---
title: "Build a Google Chat app with an Agent2Agent agent \_|\_ Google Workspace add-ons\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/workspace/add-ons/chat/quickstart-a2a-agent
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/overview
source_metadata:
  url: https://developers.google.com/workspace/add-ons/chat/quickstart-a2a-agent
  title: "Build a Google Chat app with an Agent2Agent agent \_|\_ Google Workspace\
    \ add-ons \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Add-ons
Send feedback
Build a Google Chat app with an Agent2Agent agent
Stay organized with collections
Save and categorize content based on your preferences.
Vertex AI Agent Builder Preview: The
development and use of an Agent2Agent (A2A) agent is in Preview. See the
complete documentation .
This page explains how to build a Google Workspace add-on that works in
Google Chat and interfaces with an AI agent that uses the
Agent2Agent (A2A) protocol.
You develop the agent using the
Agent Development Kit (ADK) ,
and host it in
Vertex AI Agent Engine .
Note: In Google Chat, add-ons appear to users as
Google Chat apps. You can also build your Chat app using
Google Chat API interaction events . To learn more, see the
Extend Google Chat overview .
AI agents autonomously perceive their environment, reason, and execute complex,
multi-step actions to achieve a defined goal. In this tutorial, you deploy the
LLM Auditor multi-agent sample
that critiques and revises facts using Gemini and Google Search grounding.
The following diagram shows the architecture and messaging pattern:
In the diagram, a user interacting with a
Chat app implemented with an A2A agent has
the following flow of information:
A user sends a message to a Chat app, either in a
direct message or in a Chat space.
The Chat app logic that's implemented either in
Apps Script or as a web server with HTTP endpoints receives
and processes the message.
The A2A agent hosted with Vertex AI Agent Engine receives and processes
the interaction.
Optionally, the Chat app or AI agent can integrate
with Google Workspace services, such as Calendar or
Sheets, or other Google services, such as Google Maps
or YouTube.
The Chat app sends responses asynchronously,
using the Google Chat API to communicate the AI agent's progress.
The responses are delivered to the user.
Objectives
Set up your environment.
Deploy the A2A agent.
Deploy the Chat app.
Configure the Chat app.
Test the Chat app.
Prerequisites
A Business or Enterprise
Google Workspace account with access to
Google Chat .
A Google Cloud project with billing enabled. To check that an existing project has billing enabled,
see Verify the
billing status of your projects . To create a project and set up billing, see
Create a Google Cloud project .
Prerequisites of the LLM Auditor ADK agent
Python 3.11+: For installation, follow instructions on the official
Python website .
Python Poetry: For installation, follow instructions on the official
Poetry website .
Google Cloud CLI: For installation, follow instructions on the official
Google Cloud website .
Set up your environment
Enable the Google Cloud APIs
Before using Google APIs, you need to turn them on in a Google Cloud project.
You can turn on one or more APIs in a single Google Cloud project.
In the Google Cloud console, enable the Google Chat, Vertex AI, and Cloud Resource Manager APIs.
Enable the APIs
Configure the OAuth consent screen
All apps using OAuth 2.0 require a consent screen configuration. Configuring
your app's OAuth consent screen defines what is displayed to users and app
reviewers, and registers your app so you can publish it later.
In the Google API Console, go to Menu menu
> Google Auth platform
> Branding .
Go to Branding
If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in Branding , Audience , and Data Access . If you see a message that says Google Auth platform not configured yet , click Get Started :
Under App Information , in App name , enter a name for the app.
In User support email , choose a support email address where users can contact you if they have questions about their consent.
Click Next .
Under Audience , select Internal .
Click Next .
Under Contact Information , enter an Email address where you can be notified about any changes to your project.
Click Next .
Under Finish , review the Google API Services User Data Policy and if you agree, select I agree to the Google API Services: User Data Policy .
Click Continue .
Click Create .
For now, you can skip adding scopes.
In the future, when you create an app for use outside of your
Google Workspace organization, you must change the User type to External . Then
add the authorization scopes that your app requires. To learn more, see the full
Configure OAuth consent guide.
Create a service account in Google Cloud console
Create a new service account with the role Vertex AI User by following
these steps:
Google API Console
In the Google API Console, go to Menu menu
> IAM & Admin
> Service Accounts .
Go to Service Accounts
Click Create service account .
Fill in the service account details, then click Create and continue .
Note: By default, Google creates a unique service account ID. If you would like to
change the ID, modify the ID in the service account ID field.
Optional: Assign roles to your service account to grant access to your Google Cloud project's resources. For more details, refer to Granting, changing, and revoking access to resources .
Click Continue .
Optional: Enter users or groups that can manage and perform actions with this service account. For more details, refer to Managing service account impersonation .
Click Done . Make a note of the email address for the service account.
gcloud CLI
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME \
--display-name=" SERVICE_ACCOUNT_NAME "
Optional: Assign roles to your service account to grant access to your Google Cloud project's resources. For more details, refer to Granting, changing, and revoking access to resources .
The service account appears on the service account page.
Create a private key
Warning: This example uses an exported
service account key for simplicity's sake. Exporting a private key is not
recommended in production because it shouldn't be stored in an insecure
location, such as source control.
To learn more about secure service
account implementations and best practices, see
Choose
when to use service accounts .
To create and download a private key for the service account, follow these
steps:
In the Google Cloud console, go to Menu menu
> IAM & Admin
> Service Accounts .
Go to Service Accounts
Select your service account.
Click Keys > Add key > Create new key .
Select JSON , then click Create .
Your new public/private key pair is generated and downloaded to your
machine as a new file. Save the downloaded JSON file as credentials.json in your
working directory. This file is the only copy of this key. For information about how to store
your key securely, see
Managing service account keys .
Click Close .
For more information about service accounts, see
service accounts in the Google Cloud IAM documentation .
Deploy the A2A agent
If you haven't done so, authenticate with your Google Cloud account and
configure the Google Cloud CLI to use your Google Cloud project.
gcloud auth application-default login
gcloud config set project PROJECT_ID
gcloud auth application-default set-quota-project PROJECT_ID
Replace PROJECT_ID with the ID of your Cloud project.
Download the ADK samples GitHub repository using this button:
Download adk-samples
In your preferred local development environment, extract the downloaded
archive file and open the adk-samples/python/agents/llm-auditor directory.
unzip adk-samples-main.zip
cd adk-samples-main/python/agents/llm-auditor
Update the implementation to deploy the ADK agent as an A2A remote agent:
pyproject.toml : Add ADK and A2A SDK dependencies in deployment group.
apps-script/chat/a2a-ai-agent/llm-auditor/pyproject.toml
View on GitHub
[project]
name = "llm-auditor"
version = "0.1.0"
description = "The LLM Auditor evaluates LLM-generated answers, verifies actual accuracy using the web, and refines the response to ensure alignment with real-world knowledge."
authors = [
{ name = "Chun-Sung Ferng" , email = "csferng@google.com" },
{ name = "Cyrus Rashtchian" , email = "cyroid@google.com" },
{ name = "Da-Cheng Juan" , email = "dacheng@google.com" },
{ name = "Ivan Kuznetsov" , email = "ivanku@google.com" },
]
license = "Apache License 2.0"
readme = "README.md"
[tool.poetry.dependencies]
python = "^3.10"
google-adk = "^1.0.0"
google-cloud-aiplatform = { extras = [
"adk" ,
"agent-engines" ,
], version = "^1.93.0" }
google-genai = "^1.9.0"
pydantic = "^2.10.6"
python-dotenv = "^1.0.1"
[tool.poetry.group.dev]
optional = true
[tool.poetry.group.dev.dependencies]
google-adk = { version = "^1.0.0" , extras = [ "eval" ] }
pytest = "^8.3.5"
pytest-asyncio = "^0.26.0"
[tool.poetry.group.deployment]
optional = true
[tool.poetry.group.deployment.dependencies]
absl-py = "^2.2.1"
google-adk = "^1.0.0"
a2a-sdk = "^0.3.0"
[build-system]
requires = [ "poetry-core>=2.0.0,<3.0.0" ]
build-backend = "poetry.core.masonry.api"
deployment/deploy.py : Replace the ADK app deployment with an A2A
agent and card.
apps-script/chat/a2a-ai-agent/llm-auditor/deployment/deploy.py
View on GitHub
# Copyright 2025 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""Deployment script for LLM Auditor."""
import os
from absl import app
from absl import flags
from dotenv import load_dotenv
from llm_auditor.agent import root_agent
import vertexai
from vertexai import agent_engines
# A2A wrapping
from a2a.types import AgentSkill
from google.adk.a2a.executor.a2a_agent_executor import A2aAgentExecutor
from google.adk.runners import InMemoryRunner
from vertexai.preview.reasoning_engines.templates.a2a import create_agent_card
from vertexai.preview.reasoning_engines import A2aAgent
FLAGS = flags . FLAGS
flags . DEFINE_string ( "project_id" , None , "GCP project ID." )
flags . DEFINE_string ( "location" , None , "GCP location." )
flags . DEFINE_string ( "bucket" , None , "GCP bucket." )
flags . DEFINE_string ( "resource_id" , None , "ReasoningEngine resource ID." )
flags . DEFINE_bool ( "list" , False , "List all agents." )
flags . DEFINE_bool ( "create" , False , "Creates a new agent." )
flags . DEFINE_bool ( "delete" , False , "Deletes an existing agent." )
flags . mark_bool_flags_as_mutual_exclusive ([ "create" , "delete" ])
def create () - > None :
"""Creates an agent engine for LLM Auditor."""
agent_card = create_agent_card (
agent_name = root_agent . name ,
description = root_agent . description ,
skills = [ AgentSkill (
id = 'audit_llm_output' ,
name = 'Audit LLM Output' ,
description = 'Critiques and revises outputs from large language models.' ,
tags = [ 'LLM' , 'Audit' , 'Revision' ],
examples = [
'The earth is flat.' ,
'The capital of France is Berlin.' ,
'The last winner of the Super Bowl was the New England Patriots in 2020.' ,
],
)]
)
a2a_agent = A2aAgent (
agent_card = agent_card ,
agent_executor_builder = lambda : A2aAgentExecutor (
runner = InMemoryRunner (
app_name = root_agent . name ,
agent = root_agent ,
)
)
)
a2a_agent . set_up ()
remote_agent = agent_engines . create (
a2a_agent ,
display_name = root_agent . name ,
requirements = [
"google-adk (>=0.0.2)" ,
"google-cloud-aiplatform[agent_engines] (>=1.88.0,<2.0.0)" ,
"google-genai (>=1.5.0,<2.0.0)" ,
"pydantic (>=2.10.6,<3.0.0)" ,
"absl-py (>=2.2.1,<3.0.0)" ,
"a2a-sdk>=0.3.22" ,
"uvicorn" ,
],
# In-memory runner
max_instances = 1 ,
env_vars = {
"NUM_WORKERS" : "1"
},
extra_packages = [ "./llm_auditor" ],
)
print ( f "Created remote agent: { remote_agent . resource_name } " )
def delete ( resource_id : str ) - > None :
remote_agent = agent_engines . get ( resource_id )
remote_agent . delete ( force = True )
print ( f "Deleted remote agent: { resource_id } " )
def list_agents () - > None :
remote_agents = agent_engines . list ()
TEMPLATE = '''
{agent.name} (" {agent.display_name} ")
- Create time: {agent.create_time}
- Update time: {agent.update_time}
'''
remote_agents_string = ' \n ' . join ( TEMPLATE . format ( agent = agent ) for agent in remote_agents )
print ( f "All remote agents: \n { remote_agents_string } " )
def main ( argv : list [ str ]) - > None :
del argv # unused
load_dotenv ()
project_id = (
FLAGS . project_id
if FLAGS . project_id
else os . getenv ( "GOOGLE_CLOUD_PROJECT" )
)
location = (
FLAGS . location if FLAGS . location else os . getenv ( "GOOGLE_CLOUD_LOCATION" )
)
bucket = (
FLAGS . bucket if FLAGS . bucket
else os . getenv ( "GOOGLE_CLOUD_STORAGE_BUCKET" )
)
print ( f "PROJECT: { project_id } " )
print ( f "LOCATION: { location } " )
print ( f "BUCKET: { bucket } " )
if not project_id :
print ( "Missing required environment variable: GOOGLE_CLOUD_PROJECT" )
return
elif not location :
print ( "Missing required environment variable: GOOGLE_CLOUD_LOCATION" )
return
elif not bucket :
print (
"Missing required environment variable: GOOGLE_CLOUD_STORAGE_BUCKET"
)
return
vertexai . init (
project = project_id ,
location = location ,
staging_bucket = f "gs:// { bucket } " ,
)
if FLAGS . list :
list_agents ()
elif FLAGS . create :
create ()
elif FLAGS . delete :
if not FLAGS . resource_id :
print ( "resource_id is required for delete" )
return
delete ( FLAGS . resource_id )
else :
print ( "Unknown command" )
if __name__ == "__main__" :
app . run ( main )
Create a new Cloud Storage bucket dedicated to the ADK agent.
gcloud storage buckets create gs:// CLOUD_STORAGE_BUCKET_NAME --project = PROJECT_ID --location = PROJECT_LOCATION
Replace the following:
CLOUD_STORAGE_BUCKET_NAME with a unique bucket name you want
to use.
PROJECT_ID with the ID of your Cloud project.
PROJECT_LOCATION with the location of your
Cloud project.
Set the following environment variables:
export GOOGLE_GENAI_USE_VERTEXAI = true
export GOOGLE_CLOUD_PROJECT = PROJECT_ID
export GOOGLE_CLOUD_LOCATION = PROJECT_LOCATION
export GOOGLE_CLOUD_STORAGE_BUCKET = CLOUD_STORAGE_BUCKET_NAME
Replace the following:
CLOUD_STORAGE_BUCKET_NAME with the name of the bucket you
created.
PROJECT_ID with the ID of your Cloud project.
PROJECT_LOCATION with the location your
Cloud project.
Install and deploy ADK agent from virtual environment.
python3 -m venv myenv
source myenv/bin/activate
poetry install --with deployment
python3 deployment/deploy.py --create
Retrieve the agent ID. You need it later, when you configure the
Chat app.
python3 deployment/deploy.py --list
Create and configure the Chat app project
Click the following button to open the A2A AI Agent Quickstart
Apps Script project.
Open the project
Click info_outline Overview > Make a copy .
In your Apps Script project,
click Project Settings
> Edit script properties > Add script property
to add the following script properties:
REASONING_ENGINE_RESOURCE_NAME with the Vertex AI agent resource name
copied in previous steps.
SERVICE_ACCOUNT_KEY with the JSON key from the service account
downloaded in previous steps such as { ... } .
Click Save script properties .
In the Google API Console, go to Menu menu
> IAM & Admin
> Settings .
Go to IAM & Admin Settings
In the Project number field, copy the value.
In your Apps Script project,
click Project Settings .
Under Google Cloud Platform (GCP) Project , click Change project .
In GCP project number , paste the Google Cloud project number copied in
previous steps.
Click Set project . The Cloud project and
Apps Script project are now connected.
Create a test deployment
You need a deployment ID for this Apps Script project, so that
you can use it in the next step.
To get the head deployment ID, do the following:
In the Chat app Apps Script project,
click Deploy
> Test deployments .
Under Head deployment ID , click
Copy .
Click Done .
Configure the Chat app
Using your Apps Script deployment, follow these steps to deploy
the Google Chat app for testing:
In the API Console , search for Google Chat API ,
and click Google Chat API .
Click Manage .
Click Configuration and set up the Chat app:
In the App name field, enter A2A Quickstart .
In the Avatar URL field, enter
https://developers.google.com/workspace/add-ons/images/quickstart-app-avatar.png .
In the Description field, enter A2A Quickstart .
Under Functionality , select Join spaces and group conversations .
Under Connection settings, select Apps Script project .
In the Deployment ID field, paste the Head deployment ID that you
previously copied.
Under Visibility, select Specific people and groups in your
domain , and enter your email.
Click Save .
The Chat app is ready to respond to messages.
Test the Chat app
To test your Chat app, open a direct message space with
the Chat app and send a message:
Open Google Chat using the Google Workspace account that you
provided when you added yourself as a trusted tester.
Go to Google Chat
Click add New chat .
In the Add 1 or more people field, type the name of your
Chat app.
Select your Chat app from the results. A direct
message opens.
Note: If you don't see your Chat app in the list of
results, ensure that you've included your Google Workspace account in the
Visibility settings of the Chat API Configuration
page in the Google API Console.
In the new direct message with the app, type The Eiffel Tower was completed in 1900 and press enter .
The Chat app replies with Critic and Reviser sub-agent responses.
To add trusted testers and learn more about testing interactive features, see
Test interactive features for
Google Chat apps .
Troubleshoot
When a Google Chat app or
card returns an error, the
Chat interface surfaces a message saying "Something went wrong."
or "Unable to process your request." Sometimes the Chat UI
doesn't display any error message, but the Chat app or
card produces an unexpected result; for example, a card message might not
appear.
Although an error message might not display in the Chat UI,
descriptive error messages and log data are available to help you fix errors
when error logging for Chat apps is turned on. For help viewing,
debugging, and fixing errors, see
Troubleshoot and fix Google Chat errors .
Clean up
To avoid incurring charges to your Google Cloud account for the
resources used in this tutorial, we recommend that you delete the
Cloud project.
Caution: Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for this tutorial, when you delete it, you also delete any other work you've done in the project.
Custom project IDs are lost. When you created this project, you might have created a custom project ID that you want to use in the future. To preserve the URLs that use the project ID, such as a URL on appspot.com, delete the selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple tutorials and quickstarts, reusing projects can help you avoid exceeding project quota limits.
In the Google API Console, go to the Manage resources page. Click
Menu menu
> IAM & Admin
> Manage Resources .
Go to Resource Manager
In the project list, select the project you want to delete and then click
Delete delete .
In the dialog, type the project ID and then click Shut down to delete
the project.
Related topics
Build a Google Chat app with an ADK AI agent
Build a Google Chat app with a Gemini Enterprise AI agent
Build a Google Chat app with an Agent2UI agent
Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and Chat apps
Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and Chat apps
Fact-check statements with an ADK AI agent and Gemini model
Plan travels with an AI agent accessible across Google Workspace
Integrate fundamental AI concepts in Chat apps
Answer questions based on Chat conversations with a Gemini AI Chat app
Respond to incidents with Google Chat, Vertex AI, Apps Script, and user authentication
Manage projects with Google Chat, Vertex AI, and Firestore
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
