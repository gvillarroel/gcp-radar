---
title: "Manually trigger runs \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/trigger-execution
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/trigger-execution
  title: "Manually trigger runs \_|\_ Dataform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataform
Guides
Send feedback
Manually trigger runs
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to manually trigger runs of your entire
workflow or only selected elements in your workflow.
You can trigger a run for the following elements of your workflow:
All actions in your workflow
Selected actions
Actions with selected tags
Before you begin
In the Google Cloud console, go to the Dataform page.
Go to the Dataform page
Select or create a repository .
Select or create a development workspace .
Develop your workflow.
Required roles
To get the permissions that
you need to manually trigger a run,
ask your administrator to grant you the
following IAM roles:
Dataform Editor ( roles/dataform.editor )
on the Dataform repository
BigQuery Job User ( roles/bigquery.jobUser )
on the project
To use a custom service account for execution:
Service Account User ( roles/iam.serviceAccountUser )
on the custom service account
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Manually run all the actions in your workflow
To manually trigger a run of all the actions in your workflow,
follow these steps:
Go to a development workspace.
Click Start execution .
Click Actions > Multiple actions .
In the Authentication section, authorize the
execution with your Google Account user credentials or a service
account.
To use your Google Account user credentials
( Preview ), select
Execute with user credentials .
To use a custom service account, select
Execute with selected service account , and then select a custom
service account.
Note: To see service accounts in the menu, you must have the
iam.serviceAccounts.list permission at the project level,
which is available in the
View Service Accounts role
( roles/iam.serviceAccountViewer ). If you don't have this permission,
you can select the service account by clicking Enter manually and
entering the service account ID.
Select All actions .
Optional: To rebuild all tables from scratch, select the
Run with full refresh option. Without this option, Dataform
updates incremental tables without rebuilding them from scratch.
Optional: Set the BigQuery query job priority with the
Execute as interactive job with high priority (default) option.
By default, BigQuery runs queries as
interactive query jobs ,
which are intended to start running as quickly as possible.
Clearing this option runs the queries as
batch query jobs ,
which have lower priority.
Click Start execution . If you selected Execute with user credentials
for your authentication method, you must
authorize your Google Account
( Preview ).
Manually run selected actions
To manually trigger a run of selected actions, follow these steps:
Go to your development workspace.
Click Start execution , then do either of the following:
Click Actions , then select an action that you want to run.
Click Actions > Multiple actions .
In the Authentication section, authorize the
execution with your Google Account user credentials or a service
account.
To use your Google Account user credentials
( Preview ), select
Execute with user credentials .
To use a custom service account, select
Execute with selected service account , and then select a custom
service account.
Note: To see service accounts in the menu, you must have the
iam.serviceAccounts.list permission at the project level,
which is available in the
View Service Accounts role
( roles/iam.serviceAccountViewer ). If you don't have this permission,
you can select the service account by clicking Enter manually and
entering the service account ID.
Verify that Selection of actions is selected.
In the Select actions to execute menu, select the actions
that you want to run.
Optional: To run the selected actions and their dependencies,
select the Include dependencies option.
Optional: To run the selected actions and the actions that
depend on them, select the Include dependents option.
Optional: To rebuild all tables from scratch, select
the Run with full refresh option.
Optional: Set the BigQuery query job priority with the
Execute as interactive job with high priority (default) option.
By default, BigQuery runs queries as
interactive query jobs ,
which are intended to start running as quickly as possible.
Clearing this option runs the queries as
batch query jobs ,
which have lower priority.
Click Start execution . If you selected Execute with my user
credentials for your authentication method, you must
authorize your Google Account
( Preview ).
Manually run actions with selected tags
To manually trigger a run of actions with selected tags, follow these
steps:
Go to your development workspace.
Click Start execution , then do either of the following:
Click Tags , then select a tag that you want to run.
Click Tags > Multiple tags .
In the Authentication section, authorize the
execution with your Google Account user credentials or a service
account.
To use your Google Account user credentials
( Preview ), select
Execute with user credentials .
To use a custom service account, select
Execute with selected service account , and then select a custom
service account.
Note: To see service accounts in the menu, you must have the
iam.serviceAccounts.list permission at the project level,
which is available in the
View Service Accounts role
( roles/iam.serviceAccountViewer ). If you don't have this permission,
you can select the service account by clicking Enter manually and
entering the service account ID.
Verify that Selection of tags is selected.
In the Select tags to execute menu, select the tags
that you want to run.
Optional: To run the actions with the selected tags and
their dependencies, select the Include dependencies option.
Optional: To run the actions with the selected tags and the actions
that depend on them, select the Include dependents option.
Optional: To rebuild all tables from scratch, select
the Run with full refresh option. Without this option, Dataform
updates incremental tables without rebuilding them from scratch.
Optional: Set the BigQuery query job priority with the
Execute as interactive job with high priority (default) option.
By default, BigQuery runs queries as
interactive query jobs ,
which are intended to start running as quickly as possible.
Clearing this option runs the queries as
batch query jobs ,
which have lower priority.
Click Start execution . If you selected Execute with my user
credentials for your authentication method, you must
authorize your Google Account
( Preview ).
Authorize your Google Account
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: To request support or provide feedback for this feature, contact
dataform-preview-support@google.com .
To authenticate the resource with your
Google Account
user credentials, you must manually grant permission for BigQuery
pipelines to get the access token for your Google Account and access the source
data on your behalf. You can grant manual approval with the OAuth dialog
interface.
You only need to give permission to BigQuery pipelines once.
To revoke the permission that you granted, follow these steps:
Go to your Google Account page .
Click BigQuery Pipelines .
Click Remove access .
Warning: Revoking access permissions prevents any future pipeline runs
that this Google Account owns across all regions.
What's next
To learn how Dataform runs incremental tables and how to
configure an incremental table, see
Configure an incremental table .
To learn how to view execution logs, see
Monitor execution logs .
To learn how to schedule runs with Workflows
and Cloud Scheduler, see
Schedule runs with Workflows and Cloud Scheduler .
To learn how to schedule runs with Cloud Composer, see
Schedule runs with Cloud Composer .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
