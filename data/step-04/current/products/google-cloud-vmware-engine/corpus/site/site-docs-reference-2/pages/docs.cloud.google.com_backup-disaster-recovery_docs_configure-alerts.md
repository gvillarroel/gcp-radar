---
title: "Configure log-based alerts for a backup/recovery appliance \_|\_ Backup and\
  \ DR \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts
  title: "Configure log-based alerts for a backup/recovery appliance \_|\_ Backup\
    \ and DR \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Backup and DR
Guides
Send feedback
Configure log-based alerts for a backup/recovery appliance
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to configure a log-based alert for a Backup and DR Service
backup/recovery appliance using Logs Explorer in the Google Cloud console.
The Logs Explorer interface for creating and editing log-based alerts guides
you through the following steps:
Provide a name and description for the alert.
Choose the logs for which you want to receive a notification.
Set the time between notifications.
Set the time for automatic closure of incidents.
Specify whom to notify.
You can learn more about Logs Explorer in
View and analyze logs .
Permissions and roles
To create and manage log-based alerts in Logs Explorer, your
Identity and Access Management (IAM) role must include the set of permissions described in
Permissions for log-based alerts .
Create a log-based alert for a backup/recovery appliance
To trigger an alert, you need to have a
notification channel . You can create
the notification channel before creating an alert or while creating an alert.
To create a log-based alert, follow these steps:
In the Google Cloud console, select Logging and then Logs Explorer .
Use the Query pane to define the event on which you want to be notified.
You can use the query examples shown in
sample queries
in the query pane to configure alerts.
The following is the sample query to get notified on an event with a specific event ID.
logName = "projects/ PROJECT_ID /logs/backupdr.googleapis.com %2F backup_recovery_appliance_events"
jsonPayload . eventId = 10046
In the header of the Query results pane, click Create alert . If your
window is too narrow, the Create alert option appears on the Actions
menu instead.
In the Alert details pane, give the alert a name and description:
Enter a name for your alert in the Alert Policy Name field. This name
gets displayed in the notification header.
In the Documentation field, enter the description for the alert. For
information about how you can format and refine the content of this field, see
Using Markdown and variables in documentation templates .
Include the URL of the appliance management console in the documentation
field. You can also add the workaround to resolve the event.
Click Next .
In the Choose logs to include in the alert pane, do the following:
Check the query and results by clicking Preview logs . You can also
edit the query in this pane, if necessary.
You can add labels to customize notifications
and make them more informative. Click Add a label and do the following:
Entry a Display name for the label.
Select Log field name from the list. These fields are displayed
based on the selected query result.
Enter Regular expression to extract a value from the field that
must contain exactly one regular expression group.
Click Next .
Select the minimum time between notifications. This value lets you control
the number of notifications you get from this alert if it is triggered multiple
times. For example, you can select 5 min from the options to limit the
notifications to every five minutes. You can adjust the incident autoclose
duration by selecting an option on the menu if applicable.
Click Next .
Select one or more notification channels for your alert, for example, select
an email notification channel. If you already have an email notification channel
configured, then you can select it from the list. If not, click
Manage notification channels and add an email channel. For information about
creating notification channels, see
Create and manage notification channels .
Click Save .
It is a good practice to configure alerts for important
Event IDs .
Test the log-based alert
To test the log-based alert you created, you can manually write a log entry that matches
the query. To write the log entry, follow these steps:
Go to the logEntries.write
reference page, or click the following button:
Go to logEntries.write
Configure the following log entry by changing the PROJECT_ID
variable to your project ID. If your alert policy includes or excludes specific
event IDs then you need to modify the event ID as well:
"entries" : [
{
"jsonPayload" : {
"eventId" : 10046 ,
"errorMessage" : "this is a manually generated error message created for testing"
},
"resource" : {
"type" : "backupdr.googleapis.com/BackupRecoveryAppliance" ,
},
"severity" : "ERROR" ,
"logName" : "projects/ PROJECT_ID /logs/backupdr.googleapis.com %2F backup_recovery_appliance_events" ,
}
]
Copy the log entry you configured previously.
In the Try this API pane, follow these steps:
Replace the content in the Request body field in APIs Explorer with
the log entry you copied in the previous step.
Click Execute . If prompted, follow the authentication flow.
If the logEntries.write call is successful, then you get an HTTP 200 response
code and an empty response body, {}. For more information about APIs Explorer,
see Using the APIs Explorer . The APIs Explorer works
the same way with the Cloud Logging API.
The log entry matches the filter specified for the alert in the following ways:
The logName value specifies the backup/recovery appliance event sign in for
your Cloud project.
The severity value for this log entry is ERROR.
The jsonPayload contains a 10046 pool full event.
After you write the log entry, the following sequence occurs:
The new log entry appears in the "Logs Explorer and triggers the alert.
An incident is opened in Cloud Monitoring.
You receive a notification for the incident. If you configured an email
notification channel, then the notification displays.
You can click View incident in the email to see the incident in
Cloud Monitoring . For more information about incidents including how to
acknowledge and close them, see
Manage incidents for log-based alerts .
Create multiple alert policies
You may want to create alert policies based on the priority and urgency of events.
From alerting perspective, events can be broadly categorized into the following categories:
Events that are required to be attended urgently and hence require more
frequent notifications. For example, the event ID 43901 (failed snapshot job)
needs to be reported every 30 minutes. Use the following query to create the alert.
Policyname = 'Snapshot job has failed'
Notification rate limit = 30 min
logName = "projects/ PROJECT_ID /logs/backupdr.googleapis.com %2F backup_recovery_appliance_events" AND jsonPayload . eventId = 43901
Events that are less urgent and hence require less frequent notifications.
For example, the event ID 10085 (backup plan violations) need to only be
reported once per day. Use the following query to create the alert.
Policyname = 'Backup Plan Violation has occurred'
Notification rate limit = 1 day
logName = "projects/ PROJECT_ID /logs/backupdr.googleapis.com %2F backup_recovery_appliance_events" AND jsonPayload . eventId = 10085
Events that are non-impacting and can be ignored. For example, the event IDs
10229 (exceeded storage errors) and 42356 (file changes have been detected) can
be ignored, as they are false positives. Use the following query to create the alert.
Policyname = 'Backup/DR event has occurred'
Notification rate limit = 6 hr
logName = "projects/ PROJECT_ID /logs/backupdr.googleapis.com %2F backup_recovery_appliance_events" AND NOT jsonPayload . eventId = ( 10085 OR 10229 OR 42356 OR 43901 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
