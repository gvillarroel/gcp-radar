---
title: "Manage error groups \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/docs/managing-errors
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/docs/setup/compute-engine
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/docs/managing-errors
  title: "Manage error groups \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
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
Manage error groups
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how you can manage your error groups in
Error Reporting.
Error events that are grouped together are usually very similar, so
Error Reporting keeps only 1,000 samples and
extrapolates the remaining information. To view all error events that are part
of an error group, view the related logs with the Logs Explorer.
For more information about error grouping, see
How error events are grouped .
Note : If you see the message "Set up Error Reporting" on the Error Reporting page,
then your Google Cloud project has no error groups to display.
Before you begin
Make sure that you have at least one error group. For more information, see
Collect error events by using Error Reporting .
To get the permissions that
you need to manage errors,
ask your administrator to grant you the
Error Reporting User ( roles/errorreporting.user )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Change resolution status
To record the status of your investigation into an error group, do the
following:
In the Google Cloud console, go to the Error Reporting page:
Go to Error Reporting
You can also find this page by using the search bar.
On the error group that you want to update, click Open , and then select
a resolution status. You can select any of the following values:
Open : The default initial state of all error groups. The other
states are set manually. You can revert an error group's status back to
Open at any time.
Acknowledged : A state for triaging error groups.
Resolved : A state for indicating that an error group is fixed and no
longer expected to occur. If an error group marked as Resolved
later reoccurs, then Error Reporting changes the
resolution status back to Open .
Muted : A state for hiding an error group from your list. If an
error event occurs in a muted error group, then the error event isn't
isn't recorded and you aren't notified.
Add links to error groups
You can link error groups to pages such as issue trackers
or documentation with resolution steps.
To add a link to an error group, click
add Set the link to an issue tracker for this error group ,
and then complete the dialog.
To edit the link on an error group, click
edit Set the link to an issue tracker for this error group ,
and then complete the dialog.
To open the link for an error group, click
link Link to the issue tracker for this error group .
Set notifications
Error Reporting can notify you when new error events occur. It
can also notify you when an error event occurs in an error group that has
been marked Resolved . To learn more, and for
instructions on setting notifications, see
Configure and manage notifications .
Delete errors
You can delete all error events which are stored for the given
Google Cloud project, and reset error-event counts to zero, using either the
gcloud tool or the REST API.
gcloud
To delete all error events, run this command:
gcloud beta error-reporting events delete
REST API
To delete all error events, use the
projects.deleteEvents
method of the REST API.
If you subscribe to
notifications for the
Google Cloud project and delete error events for an error group that
has a status of Resolved , then the error group resolution status changes
back to Open . If a new error event occurs, then
Error Reporting sends a notification.
If you delete error events when the status of the error group is
Open or Acknowledged , then Error Reporting doesn't send
a notification if new error events occur.
What's next
Learn more about notifications
Learn more about viewing and filtering errors
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
