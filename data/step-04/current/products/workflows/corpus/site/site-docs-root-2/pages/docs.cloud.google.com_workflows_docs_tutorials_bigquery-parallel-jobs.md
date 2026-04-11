---
title: "Run multiple BigQuery jobs in parallel \_|\_ Workflows \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/workflows/docs/tutorials/bigquery-parallel-jobs
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/tutorials/bigquery-parallel-jobs
  title: "Run multiple BigQuery jobs in parallel \_|\_ Workflows \_|\_ Google Cloud\
    \ Documentation"
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
Run multiple BigQuery jobs in parallel
Stay organized with collections
Save and categorize content based on your preferences.
BigQuery hosts a number of public datasets
that are available to the general public to query. In this tutorial, you create
a workflow that runs multiple BigQuery query jobs in parallel,
demonstrating an improvement in performance when compared to running the jobs
serially, one after the other.
Objectives
In this tutorial you will:
Run a query against a Wikipedia public dataset
to determine the most viewed titles in a specific month.
Deploy and execute a workflow that runs multiple BigQuery
query jobs serially, one after the other.
Deploy and execute a workflow that runs the BigQuery jobs
using parallel iteration ,
and where ordinary for loops are executed in parallel.
You can run the following commands in the Google Cloud console, or by using
the Google Cloud CLI in either your terminal or Cloud Shell.
Costs
In this document, you use the following billable components of Google Cloud:
BigQuery
Workflows
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
Security constraints defined by your organization might prevent you from completing the
following steps. For troubleshooting information, see
Develop applications in a constrained Google Cloud environment .
Console
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
Enable the Workflows API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Create a service account:
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
Grant the following roles to the service account:
BigQuery > BigQuery Job User, Logging > Logs Writer .
To grant a role, find the Select a role list, then select the role.
To grant additional roles, click add Add another
role and add each additional role.
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
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
Enable the Workflows API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Create a service account:
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
Grant the following roles to the service account:
BigQuery > BigQuery Job User, Logging > Logs Writer .
To grant a role, find the Select a role list, then select the role.
To grant additional roles, click add Add another
role and add each additional role.
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
gcloud
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
Grant roles to the service account. Run the following command once for each of the
following IAM roles: roles/bigquery.jobUser, roles/logging.logWriter :
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = ROLE
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
ROLE : the role to grant
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
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
Grant roles to the service account. Run the following command once for each of the
following IAM roles: roles/bigquery.jobUser, roles/logging.logWriter :
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = ROLE
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
ROLE : the role to grant
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Run a BigQuery query job
In BigQuery, you can run an interactive (on-demand) query job.
For more information, see
Running interactive and batch query jobs .
Console
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
Enter the following BigQuery SQL query in the
Query editor text area:
SELECT TITLE, SUM ( views )
FROM ` bigquery-samples.wikipedia_pageviews.201207h `
GROUP BY TITLE
ORDER BY SUM ( views ) DESC
LIMIT 100
Click Run .
bq
In your terminal, enter the following bq query command to run an
interactive query using standard SQL syntax:
bq query \
--use_legacy_sql=false \
'SELECT
TITLE, SUM(views)
FROM
`bigquery-samples.wikipedia_pageviews.201207h`
GROUP BY
TITLE
ORDER BY
SUM(views) DESC
LIMIT 100'
This runs a query that returns the top 100 Wikipedia titles with the most
views in a specific month and writes the output to a temporary table.
Note how long the query takes to run.
Deploy a workflow that runs multiple queries serially
A workflow definition is made up of a series of steps described using the
Workflows syntax . After creating a workflow,
you deploy it to make it available for execution. The deploy step also validates
that the source file can be executed.
The following workflow defines a list of five tables to run a query against
using the Workflows
BigQuery connector .
The queries are run serially, one after the other, and the most viewed titles
from each table are saved to a results map.
Console
In the Google Cloud console, go to the Workflows page:
Go to Workflows
Click Create .
Enter a name for the new workflow, such as workflow-serial-bqjobs .
Choose an appropriate region; for example, us-central1 .
Select the service account you previously created.
You should have already granted both the BigQuery
> BigQuery Job User and Logging
> Logs Writer IAM roles to the service
account.
Click Next .
In the workflow editor, enter the following definition for your workflow:
main :
steps :
- init :
assign :
- results : {} # result from each iteration keyed by table name
- tables :
- 201201h
- 201202h
- 201203h
- 201204h
- 201205h
- runQueries :
for :
value : table
in : ${tables}
steps :
- logTable :
call : sys.log
args :
text : ${"Running query for table " + table}
- runQuery :
call : googleapis.bigquery.v2.jobs.query
args :
projectId : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
body :
useLegacySql : false
useQueryCache : false
timeoutMs : 30000
# Find top 100 titles with most views on Wikipedia
query : ${
"SELECT TITLE, SUM(views)
FROM `bigquery-samples.wikipedia_pageviews." + table + "`
WHERE LENGTH(TITLE) > 10
GROUP BY TITLE
ORDER BY SUM(VIEWS) DESC
LIMIT 100"
}
result : queryResult
- returnResult :
assign :
# Return the top title from each table
- results[table] : {}
- results[table].title : ${queryResult.rows[0].f[0].v}
- results[table].views : ${queryResult.rows[0].f[1].v}
- returnResults :
return : ${results}
Click Deploy .
gcloud
Open a terminal and create a source code file for your workflow:
touch workflow-serial-bqjobs.yaml
Copy the following workflow to your source code file:
main :
steps :
- init :
assign :
- results : {} # result from each iteration keyed by table name
- tables :
- 201201h
- 201202h
- 201203h
- 201204h
- 201205h
- runQueries :
for :
value : table
in : ${tables}
steps :
- logTable :
call : sys.log
args :
text : ${"Running query for table " + table}
- runQuery :
call : googleapis.bigquery.v2.jobs.query
args :
projectId : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
body :
useLegacySql : false
useQueryCache : false
timeoutMs : 30000
# Find top 100 titles with most views on Wikipedia
query : ${
"SELECT TITLE, SUM(views)
FROM `bigquery-samples.wikipedia_pageviews." + table + "`
WHERE LENGTH(TITLE) > 10
GROUP BY TITLE
ORDER BY SUM(VIEWS) DESC
LIMIT 100"
}
result : queryResult
- returnResult :
assign :
# Return the top title from each table
- results[table] : {}
- results[table].title : ${queryResult.rows[0].f[0].v}
- results[table].views : ${queryResult.rows[0].f[1].v}
- returnResults :
return : ${results}
Deploy the workflow by entering the following command:
gcloud workflows deploy workflow-serial-bqjobs \
--source = workflow-serial-bqjobs.yaml \
--service-account = MY_SERVICE_ACCOUNT@MY_PROJECT.iam.gserviceaccount.com
Replace MY_SERVICE_ACCOUNT@MY_PROJECT.iam.gserviceaccount.com
with the email of the service account you previously created.
You should have already granted both the roles/bigquery.jobUser and
roles/logging.logWriter IAM roles to the service
account.
Execute the workflow and run multiple queries serially
Executing a workflow runs the current workflow definition associated with the
workflow.
Console
In the Google Cloud console, go to the Workflows page:
Go to Workflows
On the Workflows page, select the
workflow-serial-bqjobs workflow to go to its details page.
On the Workflow Details page, click
play_arrow Execute .
Click Execute again.
View the results of the workflow in the Output pane.
gcloud
Open a terminal.
Execute the workflow:
gcloud workflows run workflow-serial-bqjob
The workflow execution should take approximately a minute or five times the
previous running time. The result will include each table and look similar to
the following:
{
"201201h": {
"title": "Special:Search",
"views": "14591339"
},
"201202h": {
"title": "Special:Search",
"views": "132765420"
},
"201203h": {
"title": "Special:Search",
"views": "123316818"
},
"201204h": {
"title": "Special:Search",
"views": "116830614"
},
"201205h": {
"title": "Special:Search",
"views": "131357063"
}
}
Deploy and execute a workflow that runs multiple queries in parallel
Instead of running five queries sequentially, you can run the queries in
parallel by making a few changes:
- runQueries :
parallel :
shared : [ results ]
for :
value : table
in : ${ tables }
A parallel step allows each iteration of the for loop to run in parallel.
The results variable is declared as shared which allows it to
be writable by a branch, and the result of each branch can be appended to it.
Console
In the Google Cloud console, go to the Workflows page:
Go to Workflows
Click Create .
Enter a name for the new workflow, such as workflow-parallel-bqjobs .
Choose an appropriate region; for example, us-central1 .
Select the service account you previously created.
Click Next .
In the workflow editor, enter the following definition for your workflow:
main :
steps :
- init :
assign :
- results : {} # result from each iteration keyed by table name
- tables :
- 201201h
- 201202h
- 201203h
- 201204h
- 201205h
- runQueries :
parallel :
shared : [ results ]
for :
value : table
in : ${tables}
steps :
- logTable :
call : sys.log
args :
text : ${"Running query for table " + table}
- runQuery :
call : googleapis.bigquery.v2.jobs.query
args :
projectId : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
body :
useLegacySql : false
useQueryCache : false
timeoutMs : 30000
# Find top 100 titles with most views on Wikipedia
query : ${
"SELECT TITLE, SUM(views)
FROM `bigquery-samples.wikipedia_pageviews." + table + "`
WHERE LENGTH(TITLE) > 10
GROUP BY TITLE
ORDER BY SUM(VIEWS) DESC
LIMIT 100"
}
result : queryResult
- returnResult :
assign :
# Return the top title from each table
- results[table] : {}
- results[table].title : ${queryResult.rows[0].f[0].v}
- results[table].views : ${queryResult.rows[0].f[1].v}
- returnResults :
return : ${results}
Click Deploy .
On the Workflow Details page, click
play_arrow Execute .
Click Execute again.
View the results of the workflow in the Output pane.
gcloud
Open a terminal and create a source code file for your workflow:
touch workflow-parallel-bqjobs.yaml
Copy the following workflow to your source code file:
main :
steps :
- init :
assign :
- results : {} # result from each iteration keyed by table name
- tables :
- 201201h
- 201202h
- 201203h
- 201204h
- 201205h
- runQueries :
parallel :
shared : [ results ]
for :
value : table
in : ${tables}
steps :
- logTable :
call : sys.log
args :
text : ${"Running query for table " + table}
- runQuery :
call : googleapis.bigquery.v2.jobs.query
args :
projectId : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
body :
useLegacySql : false
useQueryCache : false
timeoutMs : 30000
# Find top 100 titles with most views on Wikipedia
query : ${
"SELECT TITLE, SUM(views)
FROM `bigquery-samples.wikipedia_pageviews." + table + "`
WHERE LENGTH(TITLE) > 10
GROUP BY TITLE
ORDER BY SUM(VIEWS) DESC
LIMIT 100"
}
result : queryResult
- returnResult :
assign :
# Return the top title from each table
- results[table] : {}
- results[table].title : ${queryResult.rows[0].f[0].v}
- results[table].views : ${queryResult.rows[0].f[1].v}
- returnResults :
return : ${results}
Deploy the workflow by entering the following command:
gcloud workflows deploy workflow-parallell-bqjobs \
--source = workflow-parallel-bqjobs.yaml \
--service-account = MY_SERVICE_ACCOUNT@MY_PROJECT.iam.gserviceaccount.com
Replace MY_SERVICE_ACCOUNT@MY_PROJECT.iam.gserviceaccount.com
with the email of the service account you previously created.
Execute the workflow:
gcloud workflows run workflow-parallel-bqjobs
The result will be similar to the previous output but the workflow execution
should take approximately twenty seconds or less!
Clean up
If you created a new project for this tutorial, delete the project .
If you used an existing project and wish to keep it without the changes added
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
Delete the workflows created in this tutorial:
gcloud workflows delete WORKFLOW_NAME
What's next
To learn more about parallel steps, see Execute parallel steps .
To learn more about Workflows connectors, see Understand connectors .
To learn more about Workflows, see the Workflows overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
