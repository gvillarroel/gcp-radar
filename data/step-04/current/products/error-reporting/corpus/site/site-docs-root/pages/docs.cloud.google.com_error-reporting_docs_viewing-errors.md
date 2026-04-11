---
title: "View and filter error groups \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/docs/viewing-errors
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/docs
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/docs/viewing-errors
  title: "View and filter error groups \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
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
View and filter error groups
Stay organized with collections
Save and categorize content based on your preferences.
This guide shows you how to view and filter error groups with the
Google Cloud console. You can filter, sort, and view additional details
about error groups, as well as restrict the display to a specific time range.
The Error Reporting page displays a list of
error groups that match the current filter. Each row shows
information such as the resolution status, response code, and error name for an
error group.
The Occurrences column shows a bar graph with blue bars that represent the
number of times an error event occurred within the selected
time range. When you filter error groups by text, the bar graphs show grey bars
to represent the number of error events that didn't match the text filter:
For information on how Error Reporting organizes
error events into error groups, see
How error events are grouped .
Note : If you see the message "Set up Error Reporting" on the Error Reporting page,
then your Google Cloud project has no error groups to display.
Before you begin
Make sure that you have least one error group. For more information, see
Collect error data by using Error Reporting .
To get the permissions that
you need to view and filter errors,
ask your administrator to grant you the
Error Reporting Viewer ( roles/errorreporting.viewer )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
View error details
The details of an error group include the history of error events, the
resolution status, the number of occurrences, and a timestamped list of
error events. Each entry in the list contains a link to relevant logs and
when available, a stacktrace.
To view the details of an error group, do the following:
In the Google Cloud console, go to the Error Reporting page:
Go to Error Reporting
You can also find this page by using the search bar.
Click the error name.
The Error Group Details page displays information about the error group,
including the history of error events and diagnostic
information from previous error events. If Gemini is
enabled in the project, then you can use Gemini to
get troubleshooting suggestions .
View associated log entries
To view the log entry associated with an error event,
in the Recent samples panel, click View Logs .
The Logs Explorer opens and displays the list of log entries that
contribute to the error group. The query-editor pane is pre-populated with
a filter that contains the error_groups ID field.
Note: You can filter by the error_groups ID field only when querying logs, for
example, when you are using the Logs Explorer and Observability Analytics
pages. You can't use this field in log sinks, log-based alerts, or log-based
metrics.
When you use the Logs Explorer, the
error group button ( ) indicates that the log entry
is associated with an error group. To view the error group, click the button.
For more information, see
Find log entries with error groups .
To learn how to filter log data, see
View logs by using the Logs Explorer .
Filter error groups
You can use the filters on the Error Reporting toolbar to filter
by the status, the affected resources, and the region of the log buckets
that store your log entries.
Filter error groups by resource
To filter error groups by resource, select the All Resources menu and then
select a resource. Some resources let you further filter by error group labels.
The type and number of available error group labels vary depending on the
resource. For example, if you have error groups for the
Kubernetes Container Services resource, then you can filter first by
service and then by version:
To save your selections, click Apply .
To clear your resource filters and reset the list of
filtered error groups, select Reset and then select Apply .
Filter error groups by text
To filter error groups by text, enter a value in the Filter errors text
field. The text filter can perform a text match on any of the following fields:
Error information
HTTP Response Code
Exception stack
Request URL
Report location
HTTP method
What's next
Manage error groups
Manage service error groups
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
