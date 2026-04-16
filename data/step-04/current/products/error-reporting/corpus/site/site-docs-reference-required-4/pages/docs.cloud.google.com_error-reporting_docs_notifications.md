---
title: "Configure and manage notifications \_|\_ Error Reporting \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/error-reporting/docs/notifications
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/docs/setup/ec2
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/docs/notifications
  title: "Configure and manage notifications \_|\_ Error Reporting \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Error Reporting
Guides
Send feedback
Configure and manage notifications
Stay organized with collections
Save and categorize content based on your preferences.
You can configure Error Reporting to send notifications to
selected Cloud Monitoring notification channels when error events occur.
Error Reporting sends notifications in the following cases:
When an error event occurs in a Google Cloud project and that event can't be
grouped with previous errors.
If an error event occurs in an error group that was marked as
Resolved .
Manage notification channels
You create, edit, and delete notification channels in Monitoring.
After you have created notification channels, you can configure
Error Reporting to use them.
Error Reporting lets you select from four types of notification
channels: email, mobile, Slack, and Webhooks.
Before you begin
To get the permissions that
you need to view and configure notification channels by using the Google Cloud console,
ask your administrator to grant you the
Monitoring Editor ( roles/monitoring.editor )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For more information about Cloud Monitoring roles,
see
Control access with Identity and Access Management .
Create notification channel
To create a notification channel by using the Google Cloud console,
follow the channel-specific instructions contained in the following table:
Email
To add an email notification channel, do the following:
In the Google Cloud console, go to the
notifications Alerting page:
Go to Alerting
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
In the toolbar of the Google Cloud console,
select your Google Cloud project. For App Hub
configurations, select the App Hub host project or management project.
Click Edit notification channels .
In the Email section, click Add new .
Enter a single email address and a description.
Click Save .
If you use a group email address as the notification channel for
an alerting policy, then configure the group to accept mail from
ErrorReportingNotifications-noreply@google.com .
Mobile App
Use the Google Cloud console Mobile App to monitor your
Google Cloud console resources and Monitoring
information from anywhere. Google Cloud console Mobile App notifications are either
sent to a specific device or to a specific user:
Device indicates that notifications are sent only to the
specific device that created the notification channel. For
device-scoped notification channels, the
Display name field includes device information.
User indicates that the notifications are sent to all of
your devices that have the Google Cloud console Mobile App installed.
Cloud Monitoring determines the notification scope when the channel
is created. You can't select or change the scope.
To configure a Google Cloud console Mobile App notification channel for a specific
Google Cloud project, do the following:
Install the Google Cloud console Mobile App from your mobile device's app store.
Select a project for viewing in the Google Cloud console Mobile App.
After you select a project, a data exchange between the app and
the selected Google Cloud project occurs.
A notification channel is created when one doesn't
exist, and after a few minutes, this channel is listed
under the Mobile Devices section of the
Notification channels page.
To add your mobile device as a notification channel for an alerting
policy, in the alerting Notifications section, select
Google Cloud console (mobile) and then choose
your mobile device from the list.
Slack
Note: To complete these steps, you must be a
Slack Workspace Owner or Admin. For more information, see
Managing invite requests .
To set up Slack notifications, do the following:
In Slack : Create a Slack workspace and channel at the
Slack site . Record
the channel URL.
In the Google Cloud console, go to the
notifications Alerting page:
Go to Alerting
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
In the toolbar of the Google Cloud console,
select your Google Cloud project. For App Hub
configurations, select the App Hub host project or management project.
Click Edit notification channels .
In the Slack section, click Add new to open the
Slack sign-in page:
Select your Slack workspace.
Click Allow to enable Cloud Monitoring
access to your Slack workspace. This action takes you back to the
Monitoring configuration page for your notification
channel.
In the Slack Channel Name field, enter the name of the
Slack channel you want to use for notifications.
In the Cloud Alerting Display Name field, enter a short
descriptive statement. Monitoring displays the value
of this field on the Notifications channel page.
(Optional) To test the connection between
Cloud Monitoring and your Slack workspace, click
Send test notification . If the connection is successful, then
you see a message This is a test alert notification... in the
Slack notification channel that you specified. Check the
notification channel to confirm receipt.
If the Slack channel you want to use for notifications is a
private channel, then you must manually invite the
Monitoring app to the channel:
Open Slack.
Go to the channel you specified as your
Monitoring notification channel.
Invite the Monitoring app to the channel by
entering and sending the following message in the channel:
/invite @Google Cloud Monitoring
Be sure you invite the Monitoring app to the private
channel you specified when creating the notification channel in
Monitoring. Inviting the Monitoring app
to public channels is optional.
Webhooks
Before you configure a Webhook notification channel, consider the
following:
Webhooks only support public endpoints. A public endpoint is fully
accessible from the public internet, such as by HTTP ( port:80 ) or
HTTPS ( port:443 ). The notification service must be able to establish
a connection to the endpoint and, in the case of HTTPS, verify the
server's security certificate.
If a Cloud Run function is
configured as webhook endpoint for a notification channel,
then make sure the user invoking the function has the required
authentication permission. For more information, see
Authenticate for invocation
and
Enabling access to a function .
To send notification data from Monitoring to Microsoft
Teams, you must use an intermediary service such as Power Automate or
Cloud Run functions .
Configure the service to receive the Monitoring
webhook notification, convert the data into a Teams-compatible format,
and forward the data to the appropriate Microsoft Teams channel.
Configure Webhook notification channels
To configure Webhooks notifications, do the following:
The webhook handler : Identify the public endpoint URL to receive
webhook data from Monitoring.
In the Google Cloud console, go to the
notifications Alerting page:
Go to Alerting
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
In the toolbar of the Google Cloud console,
select your Google Cloud project. For App Hub
configurations, select the App Hub host project or management project.
Click Edit notification channels .
In the Webhook section, click Add new .
Complete the dialog.
Click Test Connection to send a test payload to the Webhook
endpoint. You can go to the receiving endpoint to verify delivery.
Click Save .
Webhook schema
To view the Webhook schema structure for Error Reporting,
click the following:
Schema structure, version 1.0
{
"version" : "1.0",
"subject" :
string, description of the new or reopened error group.
"group_info" : {
"project_id" :
string, project that owns the error group.
"detail_link" :
string, link to the Error Reporting Details page for the error
group.
},
"exception_info" : {
"type" :
string, type of the exception logged in the event.
"message" :
string, exception message for the event.
},
"event_info" : {
"log_message" : string
"request_method" : string
"request_url" : string
"referrer" : string
"user_agent" : string
"service" : string
"version" : string
"response_status" : string
},
}
Basic authentication
In addition to the webhook request sent by Cloud Monitoring, basic
authentication utilizes the HTTP specification for the username and
password. Cloud Monitoring requires your server to return a 401
response with the proper WWW-Authenticate header. For more
information about basic authentication, see the following:
RFC Specification
Basic authentication
Token authentication
Token Authentication requires
a query string parameter in the endpoint URL and a key that the
server expects to be secret between itself and Monitoring.
The following is a sample URL that includes a token:
https://www.myserver.com/stackdriver-hook?auth_token=1234-abcd
If Monitoring posts an incident to the endpoint URL,
your server can validate the attached token. This method of
authentication is most effective when used with SSL/TLS
to encrypt the HTTP request preventing snoopers from learning the token.
For an example server in Python, see this
sample server .
Edit and delete notification channels
To edit or delete a notification channel by using the Google Cloud console,
do the following:
In the Google Cloud console, go to the
notifications Alerting page:
Go to Alerting
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
Click Edit notification channels .
The Notification channels dashboard contains a section for each
type of notification channel. Each section lists all configurations for
that type:
To modify an entry, click edit Edit . Click Save after
your changes are complete.
To delete an entry, click delete Delete . Click
Delete in the confirmation dialog.
Note: You can't delete a notification channel by using the Google Cloud console
when the channel is associated with an alerting policy.
However, you can delete the channel by using the Google Cloud CLI or the
Cloud Monitoring API. For more information, see
Create and manage notification channels by API .
Select notification channels through the Google Cloud console
To select an existing notification channel, you must have one of the following
roles:
Error Reporting User
Error Reporting Admin
Project Editor
Project Owner
To select where you want to send notifications when new error groups occur,
complete the following steps.
In the Google Cloud console, go to the Error Reporting page:
Go to Error Reporting
You can also find this page by using the search bar.
Click Configure notifications to open the Error notifications page.
In the Notification channels drop-down menu, select the channels that
you want to send the notifications to.
If you don't see the channel you need, click
Manage notification channels to create a new channel.
To create a notification channel, your role must be one those listed in
Creating channels .
After selecting the channels, click Save .
Additional information
Following is additional information that applies when creating and managing
notifications in Error Reporting.
Notification contents
Notifications for error groups contain information related to the log entries
in the group. The included information depends on the type of monitored
resource in which the error event occurred. For example, some notifications
might contain the name and version of the monitored resource.
A message that describes an error event is included in the notification only
when the error group is
identified by the log entries in a log bucket whose region is global .
When are notifications sent
Error Reporting sends a notification in two scenarios:
When an error event occurs and there isn't an existing error group.
When an error event occurs for an existing error group and the error group
status is set to Resolved .
To receive future notifications for the error group, you must set the
error group
status to Resolved . No other actions, like using the API to delete the
error group or waiting for the data to age out, result in a notification
if another error event occurs.
Notification rate limit
Error Reporting uses the following rules to limit the number
of notifications you might receive due to error events:
At most 5 notifications per error group can be sent in a 60-minute window.
If more than 5 error events in the same error group occur in a
60-minute window, then the following occurs:
You receive a notification that further
notifications are silenced for the next six hours.
A log entry with the severity level of the warning is written.
When you resolve an error group, notifications for that error group are
suspended for five minutes.
Resolution status
If an error event occurs in a error group that has a resolution status of
Resolved , even if previous error events have been
deleted , the status
of the error group is set to Open and Error Reporting
sends a notification.
However, Error Reporting doesn't send notifications when
error events occur and the corresponding error group is Muted .
To manage the resolution status of your error groups, go to
Manage error groups .
Mobile notifications
Error Reporting sends mobile notifications to the
Google Cloud app on Android and iOS. To opt into mobile notifications,
you must first install the app on your mobile device:
Download the Google Cloud app
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
