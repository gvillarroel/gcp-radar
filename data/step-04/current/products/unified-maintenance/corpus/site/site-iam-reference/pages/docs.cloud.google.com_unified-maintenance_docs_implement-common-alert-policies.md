---
title: "Implement common alert policies \_|\_ Unified Maintenance \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/unified-maintenance/docs/implement-common-alert-policies
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/unified-maintenance/docs/audit-logging
source_metadata:
  url: https://docs.cloud.google.com/unified-maintenance/docs/implement-common-alert-policies
  title: "Implement common alert policies \_|\_ Unified Maintenance \_|\_ Google Cloud\
    \ Documentation"
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
Implement common alert policies
Stay organized with collections
Save and categorize content based on your preferences.
This section provides examples of fine-grain alert queries
that you can use to filter Cloud Logging data. To learn more about query fields
specific to Unified Maintenance, see the log schema .
Alert on any new scheduled maintenance
To alert on any new scheduled maintenance, define the logName for maintenance
events in your project, and a SCHEDULED state. For example:
log_id ( "maintenance.googleapis.com/maintenance_events" ) AND jsonPayload . state = "SCHEDULED"
Alert when maintenance is scheduled for a specific resource type
To alert on any new scheduled maintenance for a specific resource type, define
the logName for maintenance events in your project, a SCHEDULED state, and define
the resource.type . For example, a Cloud SQL instance:
log_id ( "maintenance.googleapis.com/maintenance_events" ) AND jsonPayload . state = "SCHEDULED" AND jsonPayload . resource . type = "sqladmin.googleapis.com/Instance"
Alert when any maintenance starts in a specific location
To alert on any new maintenance starting in a specific location, define the
logName for maintenance events in your project, a STARTED state, and define
the location. For example, us-central1 :
log_id ( "maintenance.googleapis.com/maintenance_events" ) AND jsonPayload . state = "STARTED" AND jsonPayload . resource . labels . location = "us-central1"
Alert when maintenance is successful on a specific resource
To alert on any succeeded maintenance on a specific resource, define the logName
for maintenance events in your project, a SUCCEEDED state, and define the
resourceName . For example, prod-db :
log_id ( "maintenance.googleapis.com/maintenance_events" ) AND jsonPayload . state = "SUCCEEDED" AND jsonPayload . resource . resourceName = "//sqladmin.googleapis.com/projects/proj-1/instances/prod-db"
Alert when there is a change to the scheduled start time of the maintenance
To alert when there is change to the scheduled start time, define the logName
for maintenance events in your project, and check for recent updates to the
timeline.schedule.startTime field . For example:
log_id ( "maintenance.googleapis.com/maintenance_events" ) AND labels . "maintenance.googleapis.com/updated_fields" =~ "maintenanceScheduledStartTime"
What's next
Log schema overview
Configure alerts and notifications
Control maintenance
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
