---
title: "Delete and restore projects \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/delete-restore-projects
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs/access-control-folders
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/delete-restore-projects
  title: "Delete and restore projects \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Guides
Send feedback
Delete and restore projects
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to shut down and restore Google Cloud projects. Understand
the 30-day recovery window, resource deletion timelines, and how to prevent data loss.
Shut down (delete) a project
Shutting down a project stops all billing and resource usage. This action immediately
moves the project into a 30-day recovery period, after which the project and all
associated data are permanently deleted. Only projects with a lifecycle state of
ACTIVE can be shut down.
Deletion process and timeline
When you initiate a shutdown, the following events occur:
Immediate shutdown: The project is immediately marked for deletion and becomes unusable.
Notification: Google Cloud sends a notification email to the user who initiated
the deletion and to any contacts listed in the Technical category of Essential Contacts .
Note: Deletion proceeds even if notification emails can't be delivered. If no
Technical contact is specified, fallback contacts aren't notified.
Billing disconnection: Any associated Cloud Billing account is disconnected.
This association isn't automatically reinstated if the project is later restored.
30-day recovery window: The project remains in a DELETE_REQUESTED state for 30 days.
During this period, project owners can restore the project.
Permanent deletion: After 30 days, the project and all its resources are
permanently deleted and can't be recovered.
Critical considerations
Before shutting down a project, review the following risks:
Resource recovery: While most resources are recoverable within the 30-day window,
some services—such as Cloud Storage and Pub/Sub—delete resources much sooner.
These might not be fully recoverable even if the project is restored.
Restoration delays: If you restore a project, some services may take up to 36 hours
to fully resume operations.
Project IDs: Project IDs are unique and permanent. Once a project is fully deleted,
its ID can't be reused. If you want to preserve a custom project ID for future use,
delete the resources within the project instead of shutting down the project itself.
Project quota: Until a project is permanently deleted (after the 30-day window),
it continues to count toward your project quota.
Billing charges: Projects may continue to incur charges until the current billing
cycle ends. To avoid unexpected charges, disable billing
manually before initiating a shutdown.
Safeguards
To prevent accidental deletion of business-critical projects, you can enable
change risk recommendations . These
recommendations provide warnings when you attempt to delete projects that Google Cloud
has identified as important based on recent activity.
To learn more about data retention and safe deletion, see How Google retains data we collect .
You can shut down projects using the Google Cloud console, Google Cloud CLI, or
the API.
Console
In the Google Cloud console, go to the IAM & Admin Settings page.
Go to IAM & Admin Settings
The remaining steps appear in the Google Cloud console.
On the IAM & Admin Settings page, select the project you want to delete, and then
click Shut down .
Shut down only appears for users who have the resourcemanager.projects.delete
permission in the current project.
Click Shut down .
Enter the project ID, and then click Shut down anyway .
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
To delete a project, use the
gcloud projects delete command:
gcloud projects delete PROJECT_ID
Where PROJECT_ID is the ID of the project you want to delete.
REST
The following code snippet deletes the specified project:
Request:
DELETE https://cloudresourcemanager.googleapis.com/v3/projects/my-project-123
Troubleshoot project deletion
If you encounter issues while attempting to shut down or restore a project, it's
typically due to permission constraints or specific resource "liens." For information,
see Troubleshoot project deletion .
Restore a project
Project owners can restore a deleted project within the 30-day recovery period that
begins when the project is shut down.
Restoring a project returns it to its state prior to shutdown, with the following
exceptions:
Billing is disabled on the project when the project is shut down .
It isn't automatically re-enabled upon restoration. You must
manually link the project to a Cloud Billing account .
You might need to wait a few hours before you can successfully link a recently
restored project to a billing account.
You can recover most resources if you restore a project within the 30-day
period. Some services such as Cloud Storage or Pub/Sub may delete data
sooner than 30 days. These resources might not be fully recoverable.
It can take up to 36 hours for all services within a restored project to become
fully functional. If your resources aren't restored after this period, reach out to
Google support .
Some services might need to be restarted manually. For more information, see
Restarting Google Cloud Services .
To restore a project, you must have the resourcemanager.projects.undelete permission
on the project. To view projects pending deletion in the console, you also need
the following permissions:
resourcemanager.projects.list
resourcemanager.folders.list (if the project is in a folder)
resourcemanager.projects.get
To restore a project, use one of the following methods:
Console
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the Project picker at the top of the page, select your
organization resource.
Below the list of organization resources, folders, and projects, click
Resources pending deletion .
Select the checkbox for the project you want to restore, and then click
Restore . In the dialog that appears, confirm that you want to restore
the project.
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
To restore a project, use the
gcloud projects undelete
command:
gcloud projects undelete PROJECT_ID
PROJECT_ID is the project ID or project number of the
project you want to restore.
REST
The following code snippet restores the specified project:
Request:
POST https://cloudresourcemanager.googleapis.com/v3/projects/my-project-123:undelete
What's next
Learn how to move a project within your resource hierarchy .
Learn how to migrate a project from one organization resource to another .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
