---
title: "Create a pipeline monitoring dashboard using Cloud Monitoring \_|\_ Cloud\
  \ Data Fusion \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-fusion/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard
  title: "Create a pipeline monitoring dashboard using Cloud Monitoring \_|\_ Cloud\
    \ Data Fusion \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Data Fusion
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a pipeline monitoring dashboard using Cloud Monitoring
Learn how to use Cloud Monitoring to create a dashboard to monitor pipelines.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
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
Enable the Cloud Data Fusion, BigQuery, Cloud Storage, and Dataproc APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
To create custom dashboards, you must be granted the
Monitoring Editor
( roles/monitoring.editor ) IAM role on the service account.
For more information about granting roles, see
Manage access .
Create a Cloud Data Fusion instance with Cloud Logging enabled
To use Cloud Logging with your Cloud Data Fusion pipeline, create a
Cloud Data Fusion instance with Cloud Logging enabled:
Go to the Cloud Data Fusion Instances page and
click Create instance .
Create an instance
In the Instance name field, enter a name for your new instance.
From the Region drop-down, select the Google Cloud region in which you
want to create the instance.
From the Version drop-down, select a Cloud Data Fusion version.
Select an Edition .
Expand Advanced options .
In the Logging and monitoring section, select
Enable Stackdriver logging service .
Click Create .
After you create an instance, you can't enable Cloud Logging in the
Google Cloud console.
Create a log-based metric
Go to the Cloud Logging Log-based metrics page:
Go to Log-based metrics
Click Create metric .
On the Create a metric page, do the following:
For Metric type , select Counter .
In the Log-based metric name field, enter pipeline_logs .
In the Units field, enter 1 .
In the Build filter field, enter the following:
resource.type="cloud_dataproc_cluster"
log_name=~"projects/.*/logs/datafusion-pipeline-logs"
In the Labels section, click Add label and create the following
labels. After entering each label, click Done , and click
Add label again to create the next label.
Label name
Label type
Field name
Project
STRING
resource.labels.project_id
Message
STRING
jsonPayload.message
LoggerName
STRING
labels.loggerName
ClusterName
STRING
resource.labels.cluster_name
SparkPhase
STRING
labels.".workflowSparkId"
Region
STRING
resource.labels.region
Pipeline
STRING
labels.".applicationId"
RunId
STRING
labels.".runId"
Namespace
STRING
labels.".namespaceId"
LogLevel
STRING
labels.levelName
Click Create metric .
The newly created metric appears in the user-defined metrics table.
If the metric isn't immediately visible, refresh the page.
The dashboard contains the following charts:
All pipelines
Completed pipelines
Failed pipelines
All pipeline runs
Completed pipeline runs
Failed pipeline runs
Managed Service for Apache Spark clusters for runs
After a metric is created, it might take up to 24 hours to start
displaying the time series data.
Install the dashboard
Download the JSON file to your local machine.
Go to the Cloud Monitoring Dashboards page:
Go to Monitoring dashboards
Click Create dashboard .
Click settings Dashboard settings
> JSON > JSON editor .
In a text editor, open the JSON file that you downloaded.
Copy the content of the downloaded JSON file and paste it into the JSON
editor, replacing the content that the JSON editor contains by default.
Click Apply changes .
This refreshes the dashboard. The Cloud Data Fusion pipelines run
after the metric was created, appear in the dashboard. If no pipelines were
run after the metric was created, the dashboard will be empty.
Autosave is enabled by default. If autosave is disabled, click Save
to save the dashboard.
Click Close editor .
Your new dashboard appears in the list of dashboards on the
Monitoring overview page.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the Cloud Data Fusion instance
Follow these instructions to
delete your Cloud Data Fusion instance .
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
What's next
Learn more about Cloud Monitoring .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
