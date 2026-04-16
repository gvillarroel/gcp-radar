---
title: "Quickstart: Schedule a Sensitive Data Protection inspection scan \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/quickstart-create-job-trigger
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/quickstart-create-job-trigger
  title: "Quickstart: Schedule a Sensitive Data Protection inspection scan \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Schedule a Sensitive Data Protection inspection scan
Learn how to create a new job trigger using Sensitive Data Protection in the
Google Cloud console.
Job triggers are events that automate running Sensitive Data Protection jobs to
scan Google Cloud storage repositories (Cloud Storage, BigQuery, and
Firestore in Datastore mode (Datastore)).
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
Enable the Sensitive Data Protection API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Create a job trigger
In the following sections, you configure and create a job trigger for a
BigQuery public dataset that contains
the street addresses of bike share stations in a city.
When this job trigger runs, Sensitive Data Protection scans around 700 bytes of
data. You can inspect up to 1 GB of storage data per month free of charge. For
more information about pricing, see Storage inspection job
pricing .
Choose input data
In the Sensitive Data Protection section of the Google Cloud console, go
to the Create job or job trigger page.
Go to Create job or job trigger
To configure input data, do the following:
In the Name section, define the following options:
For Job ID , enter quickstart-job-trigger .
Keep Resource location set to Global (any region) .
In the Storage type list, select BigQuery , and then
define the following options:
For Project ID , enter bigquery-public-data .
For Dataset ID , enter austin_bikeshare .
For Table ID , enter bikeshare_stations .
In the Maximum number of rows field, enter 10 .
Click Continue .
Configure detection parameters
To configure detection, do the following:
In the InfoTypes section, click Manage infoTypes .
In the InfoTypes pane, select STREET_ADDRESS .
To close the infoTypes pane, click Done .
In the Confidence threshold section, select Possible from the
Likelihood list.
The value Possible is sufficient for most purposes. If you routinely
get matches that are too broad when you use this job trigger, select a
higher confidence threshold value. If you get too few matches, select a
lower confidence threshold value.
Click Continue .
Add post-scan actions
Click the Notify by email toggle.
Click Continue .
Set a schedule
In the Time span or schedule list, select Create a trigger to run the
job on a periodic schedule .
Important: Selecting Create a trigger to run the job on a periodic
schedule is what makes a job into a job trigger. If you don't specify a
schedule, you create a single job that runs only once.
In the Trigger scan repeats list, select Weekly .
Click Continue .
Review and create the job trigger
After you review the JSON-formatted summary of the job settings you just
specified, do the following:
Click Create .
In the Confirm job or job trigger create dialog, click
Confirm create .
Allow a minute for Sensitive Data Protection to create the job trigger.
Run the job trigger and view results
To trigger a job immediately, do the following:
On the Trigger details page, click Run now .
This operation might take some time to complete.
After the job that you created runs once, do the following:
In the Triggered jobs section, select the job ID of the triggered job
in the Job ID column.
On the Job details page, view the job results.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
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
Delete the job trigger
If you created the job trigger in an existing project and you no longer need
the job trigger, follow these steps:
In the Google Cloud console, go to the Sensitive Data Protection page.
Go to Sensitive Data Protection
If necessary, select the project in which you created a job trigger from the
Google Cloud console toolbar.
Click the Inspection tab, and then click the Job triggers tab. The
Google Cloud console displays a list of all the job triggers for the
current project.
In the Actions column for the job trigger you want to delete, click the
trigger actions menu ( more_vert ) ,
click Delete , and then click Confirm .
What's next
Learn more about creating and scheduling Sensitive Data Protection inspection
jobs .
Learn more about creating Sensitive Data Protection inspection
templates .
To add actions you want Sensitive Data Protection to take after a trigger job
completes, see Add actions .
To specify the types of sensitive data you want to scan for, see Configure
detection .
To create a BigQuery dataset in a project, see Creating
datasets .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
