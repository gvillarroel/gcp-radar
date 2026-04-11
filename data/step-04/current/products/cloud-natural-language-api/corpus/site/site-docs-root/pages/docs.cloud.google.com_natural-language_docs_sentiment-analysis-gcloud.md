---
title: "Quickstart: Perform sentiment analysis by using the gcloud tool \_|\_ Cloud\
  \ Natural Language API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/natural-language/docs
source_metadata:
  url: https://docs.cloud.google.com/natural-language/docs/sentiment-analysis-gcloud
  title: "Quickstart: Perform sentiment analysis by using the gcloud tool \_|\_ Cloud\
    \ Natural Language API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Natural Language API
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Perform sentiment analysis by using the gcloud tool
This page shows you how to get started with the Cloud Natural Language API using the
Google Cloud SDK.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
Sign in to your Google Account. If you don't already have one,
sign up for a new account .
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
Enable the Cloud Natural Language API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable language.googleapis.com
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
Enable the Cloud Natural Language API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable language.googleapis.com
Make an entity analysis request
gcloud
Use the gcloud command line tool to call the analyze-entities command
and use the --content flag to
specify the text to analyze.
gcloud ml language analyze-entities --content = "Michelangelo Caravaggio, Italian painter, is known for 'The Calling of Saint Matthew'."
Command-line
Use curl to make a POST request to the documents:analyzeEntities
method and provide the appropriate request body as shown in the following
example.
The example uses the gcloud auth application-default print-access-token
command to obtain an access token for the service account that you created
when you set up the project.
curl -X POST \
-H "Authorization: Bearer " $( gcloud auth application-default print-access-token ) \
-H "Content-Type: application/json; charset=utf-8" \
"https://language.googleapis.com/v1/documents:analyzeEntities" \
--data "{
'document':{
'type':'PLAIN_TEXT',
'content':'Michelangelo Caravaggio, Italian painter, is known for
\'The Calling of Saint Matthew\'.'
},
'encodingType':'UTF8'
}"
You should see a response similar to the following:
{
"entities" : [
{
"name" : "Michelangelo Caravaggio" ,
"type" : "PERSON" ,
"metadata" : {
"wikipedia_url" : "http://en.wikipedia.org/wiki/Caravaggio" ,
"mid" : "/m/020bg"
},
"salience" : 0.83047235 ,
"mentions" : [
{
"text" : {
"content" : "Michelangelo Caravaggio" ,
"beginOffset" : 0
},
"type" : "PROPER"
},
{
"text" : {
"content" : "painter" ,
"beginOffset" : 33
},
"type" : "COMMON"
}
]
},
{
"name" : "Italian" ,
"type" : "LOCATION" ,
"metadata" : {
"mid" : "/m/03rjj" ,
"wikipedia_url" : "http://en.wikipedia.org/wiki/Italy"
},
"salience" : 0.13870546 ,
"mentions" : [
{
"text" : {
"content" : "Italian" ,
"beginOffset" : 25
},
"type" : "PROPER"
}
]
},
{
"name" : "The Calling of Saint Matthew" ,
"type" : "EVENT" ,
"metadata" : {
"mid" : "/m/085_p7" ,
"wikipedia_url" : "http://en.wikipedia.org/wiki/The_Calling_of_St_Matthew_(Caravaggio)"
},
"salience" : 0.030822212 ,
"mentions" : [
{
"text" : {
"content" : "The Calling of Saint Matthew" ,
"beginOffset" : 69
},
"type" : "PROPER"
}
]
}
],
"language" : "en"
}
You can also analyze document sentiment and extract syntax
annotations from text by making requests to different Cloud Natural Language API
endpoints. See the
Cloud Natural Language API
Basics for more details.
Clean up
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
What's next
Get started with the Natural Language API in your language of choice by using
a Cloud Natural Language Client Library .
Consult the Natural Language Basics for
conceptual information on forming Natural Language API requests and handling
responses.
Try the
Sentiment Analysis Tutorial and
browse the Sample Applications .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
