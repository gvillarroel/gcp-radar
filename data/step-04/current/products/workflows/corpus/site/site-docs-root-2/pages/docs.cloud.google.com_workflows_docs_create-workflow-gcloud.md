---
title: "Quickstart: Create a workflow by using the gcloud CLI \_|\_ Workflows \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/create-workflow-gcloud
  title: "Quickstart: Create a workflow by using the gcloud CLI \_|\_ Workflows \_\
    |\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Create a workflow by using the gcloud CLI
This quickstart shows you how to create, deploy, and execute your first workflow
using the Google Cloud CLI. The sample workflow sends a request to a public API
and then returns the API's response.
For a list of all Workflows gcloud CLI commands,
see the Workflows gcloud CLI
reference page .
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
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Workflows API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable workflows.googleapis.com
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
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Workflows API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable workflows.googleapis.com
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Grant the roles/logging.logWriter IAM
role to the service account:
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = roles/logging.logWriter
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
To learn more about service account roles and permissions, see
Grant a workflow permission to access
Google Cloud resources .
Required roles
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
following IAM roles on your project:
Service Account User ( roles/iam.serviceAccountUser )
Workflows Admin ( roles/workflows.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create, deploy, and execute a workflow
In your home directory, create a new file called myFirstWorkflow.yaml
or myFirstWorkflow.json .
Copy and paste the following workflow into the new file, then save it:
YAML
main :
params : [ input ]
steps :
- checkSearchTermInInput :
switch :
- condition : '${"searchTerm" in input}'
assign :
- searchTerm : '${input.searchTerm}'
next : readWikipedia
- getLocation :
call : sys.get_env
args :
name : GOOGLE_CLOUD_LOCATION
result : location
- setFromCallResult :
assign :
- searchTerm : '${text.split(location, "-")[0]}'
- readWikipedia :
call : http.get
args :
url : 'https://en.wikipedia.org/w/api.php'
query :
action : opensearch
search : '${searchTerm}'
result : wikiResult
- returnOutput :
return : '${wikiResult.body[1]}'
JSON
{
"main" : {
"params" : [
"input"
],
"steps" : [
{
"checkSearchTermInInput" : {
"switch" : [
{
"condition" : "${\"searchTerm\" in input}" ,
"assign" : [
{
"searchTerm" : "${input.searchTerm}"
}
],
"next" : "readWikipedia"
}
]
}
},
{
"getLocation" : {
"call" : "sys.get_env" ,
"args" : {
"name" : "GOOGLE_CLOUD_LOCATION"
},
"result" : "location"
}
},
{
"setFromCallResult" : {
"assign" : [
{
"searchTerm" : "${text.split(location, \"-\")[0]}"
}
]
}
},
{
"readWikipedia" : {
"call" : "http.get" ,
"args" : {
"url" : "https://en.wikipedia.org/w/api.php" ,
"query" : {
"action" : "opensearch" ,
"search" : "${searchTerm}"
}
},
"result" : "wikiResult"
}
},
{
"returnOutput" : {
"return" : "${wikiResult.body[1]}"
}
}
]
}
}
Unless you input your own search term, this workflow uses your
Google Cloud location to construct a search term, which it passes to
the Wikipedia API . A list of
related Wikipedia articles is returned.
Deploy the workflow and associate it with the specified service account:
gcloud workflows deploy myFirstWorkflow --source = myFirstWorkflow. EXTENSION \
--service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace the following:
EXTENSION : the file extension for your workflow;
use yaml for the YAML version or use json for the JSON version
PROJECT_ID : your project ID
Note: In production environments, we strongly recommend creating a new service
account, then granting it the least permissive roles that allow the service
account to access the required resources. To learn more, see
Service accounts . For a list of
Workflows roles, see
Workflows roles and permissions .
Execute the workflow:
gcloud workflows run myFirstWorkflow \
--data = ' SEARCH_TERM '
Replace SEARCH_TERM with your search term; for example,
{"searchTerm":"North"} . If you enter {} , your Google Cloud
location is used to construct a search term.
This returns the results of the execution attempt. The output is similar to
the following:
argument: '{"searchTerm":"North"}'
duration: 0.210616856s
endTime: '2023-05-10T21:56:39.465899376Z'
name: projects/734581694262/locations/us-central1/workflows/workflow-1/executions/eae31f11-a5c3-47e2-8014-05b400820a79
result: '["North","North America","Northern Ireland","North Korea","North Macedonia","North
Carolina","Northrop Grumman B-2 Spirit","Northrop F-5","Northern Cyprus","North
Dakota"]'
startTime: '2023-05-10T21:56:39.255282520Z'
state: SUCCEEDED
status:
currentSteps:
- routine: main
step: returnOutput
workflowRevisionId: 000001-ac2
You've deployed and executed your first workflow!
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
Delete the workflow you created:
gcloud workflows delete myFirstWorkflow
When asked if you want to continue, enter y .
The workflow is deleted.
What's next
Update an existing workflow
Control the order of execution in a workflow
Sample workflows
Workflows syntax reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
