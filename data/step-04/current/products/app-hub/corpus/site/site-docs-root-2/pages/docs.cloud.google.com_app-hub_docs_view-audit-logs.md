---
title: "View audit logs for App Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/view-audit-logs
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/view-audit-logs
  title: "View audit logs for App Hub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
App Hub
Guides
Send feedback
View audit logs for App Hub
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to use Cloud Logging to
view audit logs that your App Hub operations write.
App Hub generates audit logs for the following operations:
Admin activity : Operations that modify the configuration or metadata of a
resource.
Data access : Operations that read configuration, metadata, or
user-provided data.
For a complete list of all audited operations from App Hub and their
corresponding permissions, see
App Hub audit logs .
View App Hub audit logs
To view audit logs from App Hub, do the following:
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
In the Google Cloud console, use the project picker to select your
management project or
host project .
In the Query field, enter the following query to see all
App Hub audit logs:
protoPayload.serviceName = "apphub.googleapis.com"
Click Run query .
The Query results pane shows the latest audit logs for App Hub.
The next section of this page lists sample queries that you can use in the
Logs Explorer.
For more information about how to build queries, see
Build and save queries by using the Logging query language .
Sample queries for App Hub
Use the following queries to find specific audit log events for common
App Hub scenarios.
Query description
Expression
Find out who created or deleted an App Hub application
protoPayload . serviceName = "apphub.googleapis.com"
(
protoPayload . methodName = "google.cloud.apphub.v1.AppHub.CreateApplication" OR
protoPayload . methodName = "google.cloud.apphub.v1.AppHub.DeleteApplication"
)
Review the registration of services to an application
protoPayload . serviceName = "apphub.googleapis.com"
protoPayload . methodName = "google.cloud.apphub.v1.AppHub.CreateService"
resource . labels . application_id = " APPLICATION_ID "
Replace APPLICATION_ID with the ID of your application.
Monitor changes to service project attachments
protoPayload . serviceName = "apphub.googleapis.com"
(
protoPayload . methodName = "google.cloud.apphub.v1.AppHub.CreateServiceProjectAttachment" OR
protoPayload . methodName = "google.cloud.apphub.v1.AppHub.DeleteServiceProjectAttachment" OR
protoPayload . methodName = "google.cloud.apphub.v1.AppHub.DetachServiceProjectAttachment"
)
What's next
Learn more about enabling Data Access audit logs
Review App Hub audit logs
Build and save queries by using the Logging query language
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
