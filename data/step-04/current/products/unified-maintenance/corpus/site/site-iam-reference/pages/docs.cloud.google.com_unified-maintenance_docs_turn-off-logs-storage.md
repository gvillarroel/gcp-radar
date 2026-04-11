---
title: "Turn off logs storage \_|\_ Unified Maintenance \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/unified-maintenance/docs/turn-off-logs-storage
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/unified-maintenance/docs/audit-logging
source_metadata:
  url: https://docs.cloud.google.com/unified-maintenance/docs/turn-off-logs-storage
  title: "Turn off logs storage \_|\_ Unified Maintenance \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Unified Maintenance
Guides
Send feedback
Turn off logs storage
Stay organized with collections
Save and categorize content based on your preferences.
You cannot deactivate Unified Maintenance, but you can opt out of storing these logs.
You can either disable the Default sink
in the Log Router, or you can configure an exclusion filter specific to Unified Maintenance logs.
Exclusion filters
Exclusion filters let you exclude log entries that match the inclusion filter from being routed to the sink's destination or from being stored in a log bucket.
Enforce exclusion filter
To enforce an exclusion filter for Unified Maintenance logs:
In the Google Cloud console, go to the Log Router page.
If you use the search bar to find this page, select the result whose subheading is Logging .
Go to Logs Router
Select the Google Cloud project from which the log entries that are being routed originate.
Click Create sink .
Provide a Sink name and Sink description and then click Next .
In the Select sink service list, select a sink service and then select a destination.
Select Choose logs to filter out of sink .
Click Add exclusion .
Provide an Exclusion filter name and an exclusion filter . To exclude all maintenance event logs, enter:
LOG_ID ( "maintenance.googleapis.com/maintenance_events" )
Click Create sink .
You should see a message indicating that your log sink was successfully created.
Remove exclusion filter
To remove an exclusion filter for Unified Maintenance logs:
In the Google Cloud console, go to the Log Router page.
If you use the search bar to find this page, select the result whose subheading is Logging .
Go to Logs Router
Select the Google Cloud project from which the log entries that are being routed originate.
Select the sink that controls your exclusion filter.
Click more_vert More actions and select one of the following:
Edit sink— lets you remove the exclusion query; delete the exclusion query and then click Update sink .
Disable sink— stops all logs from being exported by the sink. Note that any logs that arrive after the sink is disabled are not sent to this sink's destination and will be lost if they are not captured by another sink.
What's next
Product overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
