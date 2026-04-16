---
title: "View DAGs, DAG runs, and tasks \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/latest/view-dags
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/latest/view-dags
  title: "View DAGs, DAG runs, and tasks \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 3 Guides
Send feedback
View DAGs, DAG runs, and tasks
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page explains how to get information about DAGs in your environment.
Ways to view information about DAGs
Cloud Composer provides several ways to get detailed information about DAGs in your environment:
DAG UI is a section of Google Cloud console interface for
Cloud Composer dedicated to viewing and monitoring DAGs, DAG runs,
and individual tasks.
Airflow UI is the built-in web interface of Airflow.
Airflow CLI is the command-line interface of Airflow. You
can get information about DAGs by running Airflow CLI commands with
gcloud .
About Cloud Composer DAG UI
DAG UI is a section of Google Cloud console interface for
Cloud Composer dedicated to viewing and monitoring DAGs, DAG runs,
and individual tasks.
In DAG UI, you can:
View a list of DAGs in your environment, including schedule intervals, DAG
states, and descriptions.
Pause, unpause, and trigger DAGs .
View DAG run details, including successful, active, and failed runs, time
since the last completed run. For each DAG, you can see the history of DAG
runs and task instances associated with this particular DAG, including logs
for executed tasks.
Filter DAG run details. For example, you can pick a time interval and
create queries to select the information that you need.
View detailed information about individual DAGs and tasks. This includes
visualized DAG diagrams, information about the tasks within a DAG, DAG
source code, and extra information about DAGs.
Before you begin
Make sure that your account has a role that can access DAG UI and view DAG
details. For more information, see Access control .
DAG UI requires enabled DAG serialization .
DAG UI is supported in Cloud Composer 1.17.8 and later
versions.
View the list of DAGs for your environment
Console
The DAGs tab of your environment shows the list of DAGs along with DAG
run details for each DAG.
To view the list of DAGs:
In the Google Cloud console, go to the Environments page.
Go to Environments
In the DAG list column, follow the DAGs link for your environment.
You can use filters to view the details only for certain DAGs or for
certain conditions. For example:
Select the Filters field.
From the drop-down list, select the DAG id property.
Specify the identifier of the DAG. The results show details only for
the selected DAG.
(Optional) To include more DAGs, add OR operators followed by DAG ids.
(Optional) To filter on other conditions, add other properties in
the Filters field. For example, you can filter for DAGs with failed
runs by specifying Failed runs:>0 .
Airflow UI
To view the list of DAGs in the Airflow UI:
In the Google Cloud console, go to the Environments page.
Go to Environments
In the Airflow webserver column, follow the Airflow link for your
environment.
Log in with the Google account that has the appropriate permissions.
In the Airflow UI, on the DAGs page, a list of DAGs for
your environment is displayed.
gcloud
Run the dags list Airflow CLI command:
gcloud composer environments run ENVIRONMENT_NAME \
--location LOCATION \
dags list -- -o plain
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
View the history of DAG runs and tasks
Console
The Runs tab on the DAG details page shows the history of DAG runs
for an individual DAG.
To view the history of DAG runs:
In the Google Cloud console, go to the Environments page.
Go to Environments
In the DAG list column, follow the DAGs link for your environment.
Select a DAG.
On the DAG details page, go to the Runs tab.
Select a DAG run from the list to view the DAG run details, such as the
state of task instances for this DAG run, the number of tries and the
execution duration. You can select individual tasks to view
task instance logs.
Airflow UI
To view the list of DAGs in the Airflow UI:
In the Google Cloud console, go to the Environments page.
Go to Environments
In the Airflow webserver column, follow the Airflow link for your
environment.
Log in with the Google account that has the appropriate permissions.
View DAG runs:
(Airflow 3) In the Airflow UI,
select Dags > Runs . The Runs tab
displays DAG runs for your environment. You can follow the link in the
Run after column to get additional information about tasks.
(Airflow 2) In the Airflow UI,
select Browse > DAG Runs . The DAG Runs page
displays DAG runs for your environment. You can follow the link in the
Run ID column to get additional information about tasks.
gcloud
Run the dags list-runs Airflow CLI command:
gcloud composer environments run ENVIRONMENT_NAME \
--location LOCATION \
dags list-runs -- -d DAG_ID
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
DAG_ID with the name of the DAG.
You can get additional information about task instances by running tasks state and tasks states-for-dag-run Airflow CLI commands.
For more information, see Access Airflow CLI and the
Airflow CLI reference .
View DAG diagrams
Console
The Diagram tab on the DAG details page show the visualisation of a
DAG with task dependencies.
To view the diagram of a DAG:
In the Google Cloud console, go to the Environments page.
Go to Environments
In the DAG list column, follow the DAGs link for your environment.
Select a DAG.
On the DAG details page, go to the Diagram tab.
(Optional) To see additional information about tasks, select individual tasks on the diagram.
Airflow UI
To view the diagram of a DAGs in the Airflow web interface:
In the Google Cloud console, go to the Environments page.
Go to Environments
In the Airflow webserver column, follow the Airflow link for your
environment.
Log in with the Google account that has the appropriate permissions.
In the Airflow UI, on the DAGs page, a list of DAGs for
your environment is displayed.
(Airflow 3) Click your DAG to go to the Dags page, then click
Show graph to switch to the Graph view.
(Airflow 2) For your DAG, in the Links column, follow the Graph
link.
View DAG source code and additional information about DAGs
Console
You can view the source code of your DAGs and additional information such as
DAG identifiers and links to DAG definition files in the environment's
bucket.
Note: It is not possible to edit the source code of your DAGs on this tab.
In the Google Cloud console, go to the Environments page.
Go to Environments
In the DAG list column, follow the DAGs link for your environment.
Select a DAG.
To view the DAG source code, go to the Diagram tab.
To view additional information about the DAG, go to the Source tab.
Airflow UI
To view the diagram of a DAGs in the Airflow web interface:
In the Google Cloud console, go to the Environments page.
Go to Environments
In the Airflow webserver column, follow the Airflow link for your
environment.
Log in with the Google account that has the appropriate permissions.
In the Airflow web interface, on the DAGs page, click on the name of
your DAG.
In the page with DAG details, navigate to available tabs to view
additional information about the DAG.
What's next
Add and update DAGs
Schedule and trigger DAGs
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
