---
title: "Quickstart: Create a workflow by using the Google Cloud console \_|\_ Workflows\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/create-workflow-console
knowledge_key: corpus
source_id: site-api-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/stdlib/map/merge_nested
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/create-workflow-console
  title: "Quickstart: Create a workflow by using the Google Cloud console \_|\_ Workflows\
    \ \_|\_ Google Cloud Documentation"
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
Create a workflow by using the Google Cloud console
This quickstart shows you how to create, deploy, and execute your first workflow
using the Google Cloud console. The sample workflow sends a request to a
public API and then returns the API's response.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
Security constraints defined by your organization might prevent you from completing the
following steps. For troubleshooting information, see
Develop applications in a constrained Google Cloud environment .
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
Verify that billing is enabled for your Google Cloud project .
Enable the Workflows API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Verify that billing is enabled for your Google Cloud project .
Enable the Workflows API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the Logging > Logs Writer role to the service account.
To grant the role, find the Select a role list, then select
Logging > Logs Writer .
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
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
Create and deploy a workflow
In the Google Cloud console, go to the Workflows page:
Go to Workflows
On the Workflows page, click add Create .
Enter a name for the new workflow, such as myFirstWorkflow .
Choose us-central1 for the region.
For service account , select the service account you created earlier.
Select Next .
In the workflow editor, copy and paste the following workflow:
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
Select Deploy .
Execute the workflow
Once your workflow has been successfully deployed, you can execute it for the
first time. After deploying the workflow, you'll be taken to its
Workflow details page.
On the Workflow details page, click play_arrow Execute .
On the Execute workflow page, click Execute .
In the Output pane, your workflow's results are displayed.
You've deployed and executed your first workflow!
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
In the Google Cloud console, go to the Workflows page:
Go to Workflows
From the list of workflows, click a workflow to go to its
Workflow details page.
Click delete Delete .
Type the name of the workflow and then click Confirm .
What's next
Update an existing workflow
Control the order of execution in a workflow
Sample workflows
Workflows syntax reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
