---
title: "Stream changes to Pub/Sub using optional Cloud Run function trigger \_|\_\
  \ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/change-streams-to-pubsub-tutorial
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/change-streams-to-pubsub-tutorial
  title: "Stream changes to Pub/Sub using optional Cloud Run function trigger \_|\_\
    \ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Stream changes to Pub/Sub using optional Cloud Run function trigger
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows how to use the Bigtable change streams to
Pub/Sub template, including how to set up a topic and configure the
template. You can optionally create a Cloud Run function, in the
programming language of your choice, that is triggered by the event stream.
This tutorial is intended for technical users who are familiar with
Bigtable, writing code, and event streaming services.
Objectives
This tutorial shows you how to do the following:
Create a Bigtable table with a change stream enabled.
Create a Pub/Sub topic with the Bigtable change stream
schema.
Deploy a Bigtable change stream to a Pub/Sub pipeline on
Dataflow using the template.
View the event stream in Pub/Sub directly or in the logs of a
Cloud Run function.
Costs
In this document, you use the following billable components of Google Cloud:
Bigtable
Compute Engine
Dataflow
Cloud Run functions
Pub/Sub
Cloud Storage
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
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
Enable the Dataflow, Cloud Bigtable API, Cloud Bigtable Admin API, Pub/Sub, Cloud Run functions, and Cloud Storage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
Enable the Dataflow, Cloud Bigtable API, Cloud Bigtable Admin API, Pub/Sub, Cloud Run functions, and Cloud Storage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Update and install the
cbt CLI
.
gcloud components update
gcloud components install cbt
Create a Pub/Sub topic
In the Google Cloud console, go to the Pub/Sub Topics
page.
Go to Topics
Click Create topic .
Set the ID to bigtable-change-stream-topic .
Select Use a schema .
In the Select a Pub/Sub schema drop-down, click Create
new schema . This opens a new tab where you define the schema.
Set the schema ID to bigtable-change-stream-schema .
Set the schema type to Avro .
Paste the following as the schema definition. More information about the
schema can be found on the template documentation
page .
{
"name" : "ChangelogEntryMessage" ,
"type" : "record" ,
"namespace" : "com.google.cloud.teleport.bigtable" ,
"fields" : [
{ "name" : "rowKey" , "type" : "bytes" },
{
"name" : "modType" ,
"type" : {
"name" : "ModType" ,
"type" : "enum" ,
"symbols" : [ "SET_CELL" , "DELETE_FAMILY" , "DELETE_CELLS" , "UNKNOWN" ]}
},
{ "name" : "isGC" , "type" : "boolean" },
{ "name" : "tieBreaker" , "type" : "int" },
{ "name" : "columnFamily" , "type" : "string" },
{ "name" : "commitTimestamp" , "type" : "long" },
{ "name" : "sourceInstance" , "type" : "string" },
{ "name" : "sourceCluster" , "type" : "string" },
{ "name" : "sourceTable" , "type" : "string" },
{ "name" : "column" , "type" : [ "null" , "bytes" ]},
{ "name" : "timestamp" , "type" : [ "null" , "long" ]},
{ "name" : "timestampFrom" , "type" : [ "null" , "long" ]},
{ "name" : "timestampTo" , "type" : [ "null" , "long" ]},
{ "name" : "value" , "type" : [ "null" , "bytes" ]}
]
}
Click Create to create the schema.
Close the Create schema tab, refresh the schema list, and select your
newly defined schema.
Click Create to create the topic.
Optional: Create a Cloud Run function
You might want to process the Pub/Sub stream with a
Cloud Run function.
On the Details page for the bigtable-change-stream-topic topic, click
Trigger Cloud Function .
In the Function name field, enter the name bt-ps-tutorial-function .
In the Source Code section, click the Runtime drop-down, and then
select the runtime and programming language of your choice. A hello world
is generated that prints out the change stream as it comes in. See the
documentation to learn more about writing Cloud Run functions .
Use the default values for all other fields.
Click Deploy function .
Create a table with a change stream enabled
In the Google Cloud console, go to the Bigtable
Instances page.
Go to Instances
Click the ID of the instance that you are using for this tutorial.
If you don't have an instance available, create an
instance with the default configurations
in a region near you.
In the left navigation pane, click Tables .
Click Create a table .
Name the table change-streams-pubsub-tutorial .
Add a column family named cf .
Select Enable change stream .
Click Create .
Initialize a data pipeline to capture the change stream
On the Bigtable Tables page, find your table
change-streams-pubsub-tutorial .
In the Change stream column, click Connect .
In the dialog, select Pub/Sub .
Click Create Dataflow job .
On the Dataflow Create job page, set the output
Pub/Sub topic name to: bigtable-change-stream-topic .
Set the Bigtable application profile ID to default .
Click Run job .
Wait until the job status is Starting or Running before proceeding.
It takes around 5 minutes once the job is queued.
Write some data to Bigtable
In the Cloud Shell, write a few rows to Bigtable so the
change log can write some data to the Pub/Sub stream. As long
as you write the data after the job is created, the changes appear. You
don't have to wait for the job status to become running .
cbt -instance = BIGTABLE_INSTANCE_ID -project = YOUR_PROJECT_ID \
set change-streams-pubsub-tutorial user123 cf:col1 = abc
cbt -instance = BIGTABLE_INSTANCE_ID -project = YOUR_PROJECT_ID \
set change-streams-pubsub-tutorial user546 cf:col1 = def
cbt -instance = BIGTABLE_INSTANCE_ID -project = YOUR_PROJECT_ID \
set change-streams-pubsub-tutorial user789 cf:col1 = ghi
View the change logs in Pub/Sub
In the Google Cloud console, go to the Pub/Sub
Subscriptions page.
Go to Subscriptions
Click the automatically created subscription for your topic
bigtable-change-stream-topic . It should be named
bigtable-change-stream-topic-sub .
Go to to the Messages tab.
Click Pull .
Explore the list of messages and view the data that you wrote.
Optional: View the changes in the Cloud Run functions logs
If you created a Cloud Run functions function, you can view the changes in
the logs.
In the Google Cloud console, go to Cloud Run functions .
Go to Cloud Run functions
Click your function bt-ps-tutorial-function .
Go to the Logs tab.
Ensure that Severity is set to at least Info so you can see the
logs.
Explore the logs and view the data that you wrote.
The output looks similar to the following:
Pub/Sub message: {"rowKey":"user789","modType":"SET_CELL","isGC":false,"tieBreaker":0,"columnFamily":"cf","commitTimestamp":1695653833064548,"sourceInstance":"YOUR-INSTANCE","sourceCluster":"YOUR-INSTANCE-c1","sourceTable":"change-streams-pubsub-tutorial","column":{"bytes":"col1"},"timestamp":{"long":1695653832278000},"timestampFrom":null,"timestampTo":null,"value":{"bytes":"ghi"}}
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the Bigtable table
In the Google Cloud console, go to the Bigtable
Instances page.
Go to Instances
Click the ID of the instance that you are using for this tutorial.
In the left navigation pane, click Tables .
Find the change-streams-pubsub-tutorial table.
Click Edit .
Clear Enable change stream .
Click Save .
Open the overflow menu for the table.
Click Delete and input the table name to confirm.
Stop the change stream pipeline
In the Google Cloud console, go to the Dataflow Jobs page.
Go to Jobs
Select your streaming job from the job list.
In the navigation, click Stop .
In the Stop job dialog, cancel your pipeline, and then click Stop
job .
Delete the Pub/Sub topic and subcription
In the Google Cloud console, go to the Pub/Sub Topics
page.
Go to Topics
Select the bigtable-change-stream-topic topic.
Click Delete and confirm.
Click Subscriptions in the sidebar.
Select the bigtable-change-stream-topic-sub subscription.
Click Delete and confirm.
Delete the Cloud Run function
In the Google Cloud console, go to Cloud Run functions .
Go to Cloud Run functions
Select the bt-ps-tutorial-function function.
Click Delete and confirm.
What's next
Read through the change streams
documentation.
Learn more about writing event driven functions with
Cloud Run functions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
