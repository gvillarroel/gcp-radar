---
title: "Cloud Scheduler trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/configure-cloud-scheduler-trigger
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/configure-cloud-scheduler-trigger
  title: "Cloud Scheduler trigger \_|\_ Application Integration \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Scheduler trigger
The Cloud Scheduler trigger lets you schedule your integration executions for defined time periods or regular intervals across multiple regions.
Cloud Scheduler triggers leverage the Cloud Scheduler services to provide a fully managed enterprise-grade cron job scheduler within Application Integration. Using this trigger, you can now manage all your cron jobs created within your integration, both from the Application Integration UI, and the Cloud Scheduler dashboard. Additionally, the Cloud Scheduler trigger also lets you deploy cross-region cron jobs to schedule your integration executions.
For example, if you have provisioned your integration in us-central1 , you can use the Cloud Scheduler trigger to deploy a cron job in asia-east1 (or any of the supported Google Cloud regions for Cloud Scheduler ) to call your integration's endpoint at us-central1 .
Important: Separate charges will be applicable for use of the Cloud Scheduler services in your integration. You will incur charges based on the number of cron jobs created using the Cloud Scheduler trigger in Application Integration.
For more information about the Cloud Scheduler charges, see Cloud Scheduler pricing .
Before you begin
Ensure that you perform the following tasks in your Google Cloud project before configuring the Cloud Scheduler trigger :
Enable the Cloud Scheduler API ( cloudscheduler.googleapis.com ).
Enable Cloud Scheduler API
Confirm that you have a Google service account with the Application Integration Invoker role assigned. If you don't have a service account, you must create a new one, and assign the Application Integration Invoker role to it.
For information about creating and managing service accounts, see Creating and managing service accounts
For information about the predefined Application Integration roles, see Predefined IAM roles .
Add the Cloud Scheduler trigger
To add a Cloud Scheduler trigger to your integration, perform the following steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
In the navigation menu, click Integrations
The Integrations List page appears listing all the integrations available in the Google Cloud project.
Select an existing integration or click Create integration to create a new one.
If you are creating a new integration:
Enter a name and description in the Create Integration pane.
Select a region for the integration.
Note: The Regions dropdown only lists the regions provisioned in your Google Cloud project. To provision a new region, Click Enable Region . See Enable new region for more information.
Select a service account for the integration. You can change or update the service account details of an integration any time from the info Integration summary pane in the integration toolbar.
Note: The option to select a service account is displayed only if you have enabled integration governance for the selected region.
Click Create .
The newly created integration opens in the integration editor .
In the integration editor navigation bar, click Triggers to view the list of available triggers.
Click and place the Cloud Scheduler trigger element in the integration editor.
Configure the Cloud Scheduler trigger
To configure a Cloud Scheduler trigger , perform the following steps:
Click the Cloud Scheduler trigger element in the integration editor to open the trigger configuration pane.
Specify the schedule of the Cloud Scheduler trigger using either of the following options:
Basic : Use the user interface to configure the cron job schedule.
Advanced : Use a unix-cron expression to configure the cron job schedule.
(For Basic option) Select the Basic tab and do the following in the indicated fields:
Times: Select the time intervals at which the integration must run.
Run at a specific time: Select this option to run the integration at a specific time.
Repeat by the hour: Select this option to repeatedly run the integration on an hourly basis.
Repeat by the minute: Select this option to repeatedly run the integration as per the specified number of minutes
Days : Select the days on which the integration must run. You can choose to run the integration every day, or on specific days of the week, or on a specific day of the month.
Months : Select the month(s) in which the integration must run. You can choose to run the integration every month, or during specific months.
(For Advanced option) Select the Advanced tab and specify the schedule of the cron job using a cron expression.
The cron expression has five values that must be specified in the following order:
Minute (0-59)
Hour (0-23)
Day of the month (1-31)
Month, either of the following values:
A number 1-12
A three-letter month abbreviation (For example, Jan, Feb, Mar)
Day of week, either of the following values:
A number from 0 - 6 starting with Sunday as 0
A three-letter day abbreviation (For example, Mon, Tue, Wed)
For example, to run the integration on the first day of every month, use the * * 1 * * cron expression.
For more information, see Configure cron job schedules .
Region: Select the region where your Cloud Scheduler job will be deployed.
Service account email: Enter the created Google service account email address.
Trigger output
For each Cloud Scheduler trigger that is configured and published in your integration version, Application Integration creates a new Cloud Scheduler job in your Google Cloud project.
A Cloud Scheduler job is created using the following naming convention to avoid any job duplication errors:
INTEGRATION_NAME __V INTEGRATION_VERSION __ CLOUD_SCHEDULER_TRIGGER_NUMBER
Example : DemoIntegration__V1__1
Trigger logs
A Cloud Scheduler trigger generates logs at the start and end of each integration execution. You can view the Cloud Scheduler trigger logs in the Cloud Logging Logs Explorer page:
In the Google Cloud console, go to the Cloud Scheduler page.
Go to Cloud Scheduler
Locate your Cloud Scheduler job and click View in the Logs column.
The Cloud Logging Logs Explorer page appears displaying the logs generated by the Cloud Scheduler trigger .
Note: Application Integration doesn't store or collect any logs generated by the Cloud Scheduler trigger . These logs
are stored in your Google Cloud project and can only be viewed from the Cloud Logging Logs Explorer page.
Edit a Cloud Scheduler trigger
Application Integration
Warning: Editing a Cloud Scheduler trigger from Application Integration will overwrite your existing cron job with a new cron job in a new integration version.
To edit your Cloud Scheduler trigger from Application Integration, do the following steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
Click Integrations from the left navigation menu to open the Integrations page.
Select the integration that you want to edit.
In the integration editor , click the Version dropdown , and select the integration version containing the Cloud Scheduler trigger that you want to edit.
Unpublish and enable editing If the selected integration version is published (in active state).
Click the Cloud Scheduler trigger element in the integration editor to open the trigger configuration pane.
Modify the Cloud Scheduler job configurations as desired.
Cloud Scheduler
You can edit your Cloud Scheduler trigger by modifying the configuration of your Cloud Scheduler job from Cloud Scheduler:
In the Google Cloud console, go to Cloud Scheduler .
Go to Cloud Scheduler
Select the Cloud Scheduler job to edit.
Click Edit .
Modify the Cloud Scheduler job configurations as desired.
Note: Editing a Cloud Scheduler job from Cloud Scheduler does not change the state of the target integration version.
Pause, Resume, Copy a Cloud Scheduler job
Application Integration does not support pause, resume, and copy operations for a Cloud Scheduler job created using the Cloud Scheduler trigger .
The Cloud Scheduler trigger throws an error in the trigger configuration pane if you manually pause the execution of a Cloud Scheduler job from Cloud Scheduler .
For more information about the Cloud Scheduler trigger error messages, see Troubleshoot Cloud Scheduler trigger . For information about pausing and resuming a cron job using Cloud Scheduler, see Pause or resume a job
Delete a Cloud Scheduler job
You can delete a Cloud Scheduler job either from within your integration in Application Integration or from Cloud Scheduler .
Application Integration
To delete a Cloud Scheduler job from Application Integration, do the following steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
Click Integrations from the left navigation menu to open the Integrations page.
Select the integration that you want to edit.
In the integration editor , click the Version dropdown , and select the integration version containing the Cloud Scheduler trigger that you want to delete.
Unpublish the selected integration version.
The Cloud Scheduler job for the corresponding integration version is deleted.
Cloud Scheduler
To delete a Cloud Scheduler job from Cloud Scheduler, do the following steps:
In the Google Cloud console, go to Cloud Scheduler .
Go to Cloud Scheduler
Select the Cloud Scheduler job to delete.
Click Delete .
The Cloud Scheduler job for the corresponding integration version is deleted.
Note:
Deleting a Cloud Scheduler job from Cloud Scheduler does not delete the Cloud Scheduler trigger within your integration in Application Integration.
The Cloud Scheduler trigger in your integration throws an error in the trigger configuration pane if a Cloud Scheduler job is deleted using Cloud Scheduler . For more information about the Cloud Scheduler trigger error messages, see Troubleshoot Cloud Scheduler trigger .
Best practices
As a best practice, unpublish any Cloud Scheduler triggers when they are no longer needed. If you leave a redundant Cloud Scheduler trigger published, the trigger will continue to invoke the integration automatically, which might cause additional billing charges.
Troubleshoot Cloud Scheduler trigger
The following table describes the errors that you might encounter in Cloud Scheduler trigger, and the corresponding causes for the errors.
Error location
Occurrence of error
Error message
Possible causes
Resolution
Trigger configuration pane > Error Message
When the Cloud Scheduler job stops the execution of your integration
The configured Cloud Scheduler job CLOUD_SCHEDULER_JOB does not exist. It might be deleted from your Google Cloud project.
The Cloud Scheduler job is deleted using Cloud Scheduler .
Create a new integration version to overwrite your existing Cloud Scheduler job.
The configured Cloud Scheduler job CLOUD_SCHEDULER_JOB is PAUSED. You must RESUME the job from your Google Cloud project.
The Cloud Scheduler job is paused using Cloud Scheduler .
Resume the Cloud Scheduler job from Cloud Scheduler.
The configured Cloud Scheduler job CLOUD_SCHEDULER_JOB is DISABLED due to an internal system error.
Check the Trigger logs to identity the issue.
Create a new integration version to overwrite your existing Cloud Scheduler job.
The configured Cloud Scheduler job CLOUD_SCHEDULER_JOB is in an UPDATE_FAILED state due to a failed CloudScheduler.UpdateJob operation .
The provided service account does not have the required IAM permissions.
To recover a job from this state, retry CloudScheduler.UpdateJob operation until a successful response is received.
The last execution of the Cloud Scheduler job CLOUD_SCHEDULER_JOB failed due to CLOUD_SCHEDULER_JOB_ISSUE . Learn more.
CLOUD_SCHEDULER_JOB_ISSUE
NA
SLA exclusions
The Cloud Scheduler trigger is dependent on the Cloud Scheduler
product. As this dependency is external to the Application Integration, the Application Integration
Service Level Agreement (SLA) terms and conditions are applicable only when the
execution is successfully scheduled for an active integration.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
