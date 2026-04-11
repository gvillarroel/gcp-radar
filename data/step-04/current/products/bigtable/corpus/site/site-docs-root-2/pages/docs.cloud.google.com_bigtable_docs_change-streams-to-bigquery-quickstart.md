---
title: "Quickstart: Stream changes to BigQuery using a Dataflow template \_|\_ Bigtable\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/change-streams-to-bigquery-quickstart
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/change-streams-to-bigquery-quickstart
  title: "Quickstart: Stream changes to BigQuery using a Dataflow template \_|\_ Bigtable\
    \ \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Use the Bigtable change stream to BigQuery template
In this quickstart, you learn how to set up a Bigtable table with a change stream enabled, run a
change stream pipeline, make changes to your table, and then see the changes
streamed.
Before you begin
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Dataflow, Cloud Bigtable API, Cloud Bigtable Admin API, and BigQuery APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
Create a BigQuery dataset
Use the Google Cloud console to create a dataset that stores the data.
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the Explorer pane, click your project name.
Expand the more_vert Actions option and click Create dataset .
On the Create dataset page, do the following:
For Dataset ID , enter bigtable_bigquery_quickstart .
Leave the remaining default settings as they are, and click Create dataset .
Create a table with a change stream enabled
In the Google Cloud console, go to the Bigtable Instances page.
Go to Instances
Click the ID of the instance that you are using for this quickstart.
If you don't have an instance available, create an instance with the default
configurations in a region near you.
In the left navigation pane, click Tables .
Click Create a table .
Name the table bigquery-changestream-quickstart .
Add a column family named cf .
Select Enable change stream .
Click Create .
On the Bigtable Tables page, find your table
bigquery-changestream-quickstart .
In the Change stream column, click Connect .
In the dialog, select BigQuery .
Click Create Dataflow job .
In the provided parameter fields, enter your parameter values. You don't
need to provide any optional parameters.
Set the Bigtable application profile ID to default .
Set the BigQuery dataset to
bigtable_bigquery_quickstart .
Click Run job .
Wait until the job status is Starting or Running before proceeding.
It takes around 5 minutes once the job is queued.
Keep the job open in a tab, so you can stop the job when cleaning up
your resources.
Write some data to Bigtable
In the Cloud Shell, write a few rows to Bigtable so the
change log can write some data to BigQuery. As long as you write
the data after the job is created, the changes appear. You don't have to
wait for the job status to become running .
Note: To install cbt CLI if not already installed, see Install the cbt CLI .
cbt -instance = BIGTABLE_INSTANCE_ID -project = PROJECT_ID \
set bigquery-changestream-quickstart user123 cf:col1 = abc
cbt -instance = BIGTABLE_INSTANCE_ID -project = PROJECT_ID \
set bigquery-changestream-quickstart user546 cf:col1 = def
cbt -instance = BIGTABLE_INSTANCE_ID -project = PROJECT_ID \
set bigquery-changestream-quickstart user789 cf:col1 = ghi
Replace the following:
PROJECT_ID : the ID of the project that you are using
BIGTABLE_INSTANCE_ID : the ID of the instance that contains the bigquery-changestream-quickstart table
View the change logs in BigQuery
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the Explorer pane, expand your project and the dataset
bigtable_bigquery_quickstart .
Click the table bigquery-changestream-quickstart_changelog .
To see the change log, click Preview .
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Disable the change stream on the table:
gcloud bigtable instances tables update bigquery-changestream-quickstart \
--project = PROJECT_ID --instance = BIGTABLE_INSTANCE_ID \
--clear-change-stream-retention-period
Delete the table bigquery-changestream-quickstart :
cbt --instance = BIGTABLE_INSTANCE_ID --project = PROJECT_ID deletetable bigquery-changestream-quickstart
Stop the change stream pipeline:
In the Google Cloud console, go to the Dataflow Jobs
page.
Go to Jobs
Select your streaming job from the job list.
In the navigation, click Stop .
In the Stop job dialog, select Cancel , and then click Stop
job.
Delete the BigQuery dataset:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the Explorer panel, find the dataset bigtable_bigquery_quickstart and click it.
Click Delete , type delete , and then click Delete to confirm.
Optional: Delete the instance if you created a new one for this quickstart:
cbt deleteinstance BIGTABLE_INSTANCE_ID
What's next
Learn how to write queries for the change log.
Refer to the Bigtable change stream to
BigQuery template reference
page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
