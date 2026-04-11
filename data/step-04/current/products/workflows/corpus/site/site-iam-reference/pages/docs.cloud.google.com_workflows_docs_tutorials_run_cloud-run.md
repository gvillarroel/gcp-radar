---
title: "Use Workflows with Cloud Run and Cloud Run functions tutorial \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/tutorials/run/cloud-run
  title: "Use Workflows with Cloud Run and Cloud Run functions tutorial \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Guides
Send feedback
Use Workflows with Cloud Run and Cloud Run functions tutorial
Stay organized with collections
Save and categorize content based on your preferences.
Note:
This content applies only to Cloud Run functions—formerly Cloud Functions (2nd gen).
For the 1st gen version of this document, see the
Workflows tutorial (1st gen) .
This tutorial shows you how to use Workflows to link a series of
services together. By connecting two public HTTP services using
Cloud Run functions, an external REST API, and a private
Cloud Run service, you can create a flexible, serverless application.
Objectives
In this tutorial, you use the Google Cloud CLI to create a single workflow,
connecting one service at a time:
Deploy two Cloud Run functions: the first function
generates a random number, and then passes that number to the second function
which multiplies it.
Using Workflows, connect the two HTTP functions together.
Execute the workflow and return a result that is then passed to an external
API.
Using Workflows, connect an external HTTP API
that returns the log for a given number. Execute the workflow
and return a result that is then passed to a Cloud Run
service.
Deploy a Cloud Run service that allows authenticated
access only. The service returns the math.floor for a given
number.
Using Workflows, connect the Cloud Run
service, execute the entire workflow, and return a final result.
The following diagram shows both an overview of the process as well as a
visualization of the final workflow:
Costs
In this document, you use the following billable components of Google Cloud:
Artifact Registry
Cloud Build
Cloud Run functions
Cloud Run
Cloud Storage
Workflows
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
Security constraints defined by your organization might prevent you from completing the
following steps. For troubleshooting information, see
Develop applications in a constrained Google Cloud environment .
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
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
Verify that billing is enabled for your Google Cloud project .
Enable the Artifact Registry, Cloud Build, Cloud Run, Cloud Run functions, Cloud Storage, and Workflows APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable artifactregistry.googleapis.com cloudbuild.googleapis.com run.googleapis.com cloudfunctions.googleapis.com storage.googleapis.com workflows.googleapis.com
Install the Google Cloud CLI.
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
Verify that billing is enabled for your Google Cloud project .
Enable the Artifact Registry, Cloud Build, Cloud Run, Cloud Run functions, Cloud Storage, and Workflows APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable artifactregistry.googleapis.com cloudbuild.googleapis.com run.googleapis.com cloudfunctions.googleapis.com storage.googleapis.com workflows.googleapis.com
Update the Google Cloud CLI components:
gcloud components update
If you are running commands inside Cloud Shell, you are already
authenticated with the gcloud CLI; otherwise, sign in using your
account:
gcloud auth login
Set the default location used in this tutorial:
gcloud config set project PROJECT_ID
export REGION = REGION
gcloud config set functions/region ${ REGION }
gcloud config set run/region ${ REGION }
gcloud config set workflows/location ${ REGION }
Replace REGION with the supported Workflows
location of your choice.
If you are the project creator, you are granted the
basic Owner role
( roles/owner ). By default, this Identity and Access Management (IAM) role
includes the permissions necessary for full access to most Google Cloud
resources and you can skip this step.
If you are not the project creator, required permissions must be granted on
the project to the appropriate principal . For example, a principal can be
a Google Account (for end users) or a service account (for applications and
compute workloads). For more information, see the
Roles and permissions page
for your event destination.
Required permissions
To get the permissions that
you need to complete the tutorial,
ask your administrator to grant you the
following IAM roles on your project:
Cloud Build Editor ( roles/cloudbuild.builds.editor )
Cloud Functions Developer ( roles/cloudfunctions.developer )
Cloud Run Admin ( roles/run.admin )
Create Service Accounts ( roles/iam.serviceAccountCreator )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Service Account User ( roles/iam.serviceAccountUser )
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
Storage Admin ( roles/storage.admin )
Workflows Editor ( roles/workflows.editor )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Note: IAM basic
roles might also contain permissions to complete the tutorial. You shouldn't grant basic roles in a
production environment, but you can grant them in a development or test environment.
When you deploy your workflow, you associate it with a specified service
account. Create a service account for Workflows to use:
export SERVICE_ACCOUNT = workflows-sa
gcloud iam service-accounts create ${ SERVICE_ACCOUNT }
All Cloud Run services are deployed privately by default
and are only callable by Project Owners, Project Editors, Cloud Run
Admins, and Cloud Run Invokers. To allow the service account to
call an authenticated Cloud Run service, grant the
run.invoker role to the Workflows service account:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member "serviceAccount: ${ SERVICE_ACCOUNT } @ PROJECT_ID .iam.gserviceaccount.com" \
--role "roles/run.invoker"
Deploy the first Cloud Run functions
After receiving an HTTP request, this HTTP function generates a random number
between 1 and 100, and then returns the number in JSON format.
Create a directory called randomgen and change to it:
mkdir ~/randomgen
cd ~/randomgen
Create a text file with the filename main.py that contains the following
Python code:
import functions_framework
import random
from flask import jsonify
@functions_framework . http
def randomgen ( request ):
randomNum = random . randint ( 1 , 100 )
output = { "random" : randomNum }
return jsonify ( output )
To support a dependency on Flask for HTTP processing, create a text file for
the pip package manager. Give it the filename requirements.txt and add the
following:
flask>=1.0.2
functions-framework==3.0.0
Deploy the function with an HTTP trigger, and allow unauthenticated access:
gcloud functions deploy randomgen-function \
--gen2 \
--runtime python310 \
--entry-point = randomgen \
--trigger-http \
--allow-unauthenticated
The function might take a few minutes to deploy. Alternatively, you can
use the Cloud Run functions interface
in the Google Cloud console to deploy the function.
Once the randomgen function is deployed, you can confirm the
httpsTrigger.url property:
gcloud functions describe randomgen-function \
--gen2 \
--format = "value(serviceConfig.uri)"
Save the URL. You will need to add it to your Workflow source file in
later exercises.
You can try out the function with the following curl command:
curl $( gcloud functions describe randomgen-function \
--gen2 \
--format = "value(serviceConfig.uri)" )
A number is randomly generated and returned.
Deploy the second Cloud Run functions
After receiving an HTTP request, this HTTP function extracts the input from
the JSON body, multiplies it by 2, and returns the result in JSON format.
Navigate back to your home directory:
cd ~
Create a directory called multiply and change to it:
mkdir ~/multiply
cd ~/multiply
Create a text file with the filename main.py that contains the following
Python code:
import functions_framework
from flask import jsonify
@functions_framework . http
def multiply ( request ):
request_json = request . get_json ()
output = { "multiplied" : 2 * request_json [ 'input' ]}
return jsonify ( output )
To support a dependency on Flask for HTTP processing, create a text file for
the pip package manager. Give it the filename requirements.txt and add the
following:
flask>=1.0.2
functions-framework==3.0.0
Deploy the function with an HTTP trigger, and allow unauthenticated access:
gcloud functions deploy multiply-function \
--gen2 \
--runtime python310 \
--entry-point = multiply \
--trigger-http \
--allow-unauthenticated
The function might take a few minutes to deploy. Alternatively, you can
use the Cloud Run functions interface
in the Google Cloud console to deploy the function.
Once the multiply function is deployed, you can confirm the
httpsTrigger.url property:
gcloud functions describe multiply-function \
--gen2 \
--format = "value(serviceConfig.uri)"
Save the URL. You will need to add it to your Workflow source file in
later exercises.
You can try out the function with the following curl command:
curl -X POST MULTIPLY_FUNCTION_URL \
-H "Authorization: Bearer $( gcloud auth print-identity-token ) " \
-H "Content-Type: application/json" \
-d '{"input": 5}'
The number 10 should be returned.
Connect the two Cloud Run functions in a workflow
A workflow is made up of a series of steps described using the
Workflows syntax, which can be written in either YAML or JSON
format. This is the workflow's definition. For a detailed explanation, see the
Syntax reference page.
Navigate back to your home directory:
cd ~
Create a text file with the filename workflow.yaml that contains the following
content:
- randomgen_function :
call : http.get
args :
url : RANDOMGEN_FUNCTION_URL
result : randomgen_result
- multiply_function :
call : http.post
args :
url : MULTIPLY_FUNCTION_URL
body :
input : ${randomgen_result.body.random}
result : multiply_result
- return_result :
return : ${multiply_result}
Replace RANDOMGEN_FUNCTION_URL with the URL of your
randomgen function .
Replace MULTIPLY_FUNCTION_URL with the URL of your
multiply function .
This source file links the two HTTP functions together and returns a final result.
Note: To make a request to a Cloud Run function that accepts only
authenticated calls, use OIDC to authenticate. For more information, see
Make authenticated requests from a workflow .
After creating the workflow, you can deploy it, which makes it ready for
execution.
gcloud workflows deploy WORKFLOW_NAME \
--source = workflow.yaml \
--service-account = ${ SERVICE_ACCOUNT } @ PROJECT_ID .iam.gserviceaccount.com
Replace WORKFLOW_NAME with a name for your workflow.
Execute the workflow:
gcloud workflows run WORKFLOW_NAME
An execution is a single run of the logic contained in a workflow's definition.
All workflow executions are independent, and the rapid scaling of
Workflows allows for a high number of concurrent executions.
After the workflow is executed, the output should resemble the following:
result: '{"body":{"multiplied":120},"code":200,"headers":{"Alt-Svc":"h3-29=\":443\";
...
startTime: '2021-05-05T14:17:39.135251700Z'
state: SUCCEEDED
...
Connect a public REST service in the workflow
Update your existing workflow and connect a public REST API
( math.js )
that can evaluate mathematical expressions. For example,
curl https://api.mathjs.org/v4/?'expr=log(56)' .
Note that since you have deployed your workflow, you can also edit it through
the
Workflows page in the Google Cloud console .
Edit the source file for your workflow and replace it with the following
content:
- randomgen_function :
call : http.get
args :
url : RANDOMGEN_FUNCTION_URL
result : randomgen_result
- multiply_function :
call : http.post
args :
url : MULTIPLY_FUNCTION_URL
body :
input : ${randomgen_result.body.random}
result : multiply_result
- log_function :
call : http.get
args :
url : https://api.mathjs.org/v4/
query :
expr : ${"log(" + string(multiply_result.body.multiplied) + ")"}
result : log_result
- return_result :
return : ${log_result}
Replace RANDOMGEN_FUNCTION_URL with the URL of your
randomgen function .
Replace MULTIPLY_FUNCTION_URL with the URL of your
multiply function .
This links the external REST service to the Cloud Run functions,
and returns a final result.
Deploy the modified workflow:
gcloud workflows deploy WORKFLOW_NAME \
--source = workflow.yaml \
--service-account = ${ SERVICE_ACCOUNT } @ PROJECT_ID .iam.gserviceaccount.com
Deploy a Cloud Run service
Deploy a Cloud Run service that, after receiving an HTTP
request, extracts input from the JSON body, calculates its math.floor , and
returns the result.
Create a directory called floor and change to it:
mkdir ~/floor
cd ~/floor
Create a text file with the filename app.py that contains the following
Python code:
import json
import logging
import os
import math
from flask import Flask , request
app = Flask ( __name__ )
@app . route ( '/' , methods = [ 'POST' ])
def handle_post ():
content = json . loads ( request . data )
input = float ( content [ 'input' ])
return f " { math . floor ( input ) } " , 200
if __name__ != '__main__' :
# Redirect Flask logs to Gunicorn logs
gunicorn_logger = logging . getLogger ( 'gunicorn.error' )
app . logger . handlers = gunicorn_logger . handlers
app . logger . setLevel ( gunicorn_logger . level )
app . logger . info ( 'Service started...' )
else :
app . run ( debug = True , host = '0.0.0.0' , port = int ( os . environ . get ( 'PORT' , 8080 )))
In the same directory, create a Dockerfile with the following content:
# Use an official lightweight Python image.
# https://hub.docker.com/_/python
FROM python:3.7-slim
# Install production dependencies.
RUN pip install Flask gunicorn
# Copy local code to the container image.
WORKDIR /app
COPY . .
# Run the web service on container startup. Here we use the gunicorn
# webserver, with one worker process and 8 threads.
# For environments with multiple CPU cores, increase the number of workers
# to be equal to the cores available.
CMD exec gunicorn --bind 0 .0.0.0:8080 --workers 1 --threads 8 app:app
Create an Artifact Registry standard repository where you can store your
Docker container image:
gcloud artifacts repositories create REPOSITORY \
--repository-format = docker \
--location = ${ REGION }
Replace REPOSITORY with a unique name for the
repository.
Build the container image:
export SERVICE_NAME = floor
gcloud builds submit --tag ${ REGION } -docker.pkg.dev/ PROJECT_ID / REPOSITORY / ${ SERVICE_NAME }
Deploy the container image to Cloud Run, ensuring that it only
accepts authenticated calls:
gcloud run deploy ${ SERVICE_NAME } \
--image ${ REGION } -docker.pkg.dev/ PROJECT_ID / REPOSITORY / ${ SERVICE_NAME } :latest \
--no-allow-unauthenticated
When you see the service URL, the deployment is complete. You will need to
specify that URL when updating the workflow definition.
Connect the Cloud Run service in the workflow
Update your existing workflow and specify the URL for the Cloud Run
service.
Navigate back to your home directory:
cd ~
Edit the source file for your workflow and replace it with the following
content:
- randomgen_function :
call : http.get
args :
url : RANDOMGEN_FUNCTION_URL
result : randomgen_result
- multiply_function :
call : http.post
args :
url : MULTIPLY_FUNCTION_URL
body :
input : ${randomgen_result.body.random}
result : multiply_result
- log_function :
call : http.get
args :
url : https://api.mathjs.org/v4/
query :
expr : ${"log(" + string(multiply_result.body.multiplied) + ")"}
result : log_result
- floor_function :
call : http.post
args :
url : CLOUD_RUN_SERVICE_URL
auth :
type : OIDC
body :
input : ${log_result.body}
result : floor_result
- create_output_map :
assign :
- outputMap :
randomResult : ${randomgen_result}
multiplyResult : ${multiply_result}
logResult : ${log_result}
floorResult : ${floor_result}
- return_output :
return : ${outputMap}
Replace RANDOMGEN_FUNCTION_URL with the URL of your
randomgen function .
Replace MULTIPLY_FUNCTION_URL with the URL of your
multiply function .
Replace CLOUD_RUN_SERVICE_URL with your
Cloud Run service URL.
This connects the Cloud Run service in the workflow. Note
that the auth key ensures that an authentication token is being passed in
the call to the Cloud Run service. For more information,
see Make authenticated requests from a workflow .
Deploy the modified workflow:
gcloud workflows deploy WORKFLOW_NAME \
--source = workflow.yaml \
--service-account = ${ SERVICE_ACCOUNT } @ PROJECT_ID .iam.gserviceaccount.com
Execute the final workflow:
gcloud workflows run WORKFLOW_NAME
The output should resemble the following:
result: '{"floorResult":{"body":"4","code":200
...
"logResult":{"body":"4.02535169073515","code":200
...
"multiplyResult":{"body":{"multiplied":56},"code":200
...
"randomResult":{"body":{"random":28},"code":200
...
startTime: '2023-11-13T21:22:56.782669001Z'
state: SUCCEEDED
Congratulations! You have deployed and executed a workflow that connects a
series of services together.
To create more complex workflows using expressions, conditional jumps,
Base64 encoding or decoding, subworkflows, and more, refer to the
Workflows syntax reference
and the Standard library overview .
Clean up
If you created a new project for this tutorial, delete the project .
If you used an existing project and want to keep it without the changes added
in this tutorial, delete resources created for the tutorial .
Delete the project
The easiest way to eliminate billing is to delete the project that you
created for the tutorial.
To delete the project:
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Delete tutorial resources
Delete the Cloud Run service
you deployed in this tutorial.
Delete the workflow
you created in this tutorial.
Delete the container image
from Artifact Registry.
Delete the Artifact Registry repository .
Remove the Google Cloud CLI default configurations you added during the
tutorial setup:
gcloud config unset functions/region
gcloud config unset run/region
gcloud config unset workflows/location
gcloud config unset project
What's next
Learn more about Workflows
Workflows syntax reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
