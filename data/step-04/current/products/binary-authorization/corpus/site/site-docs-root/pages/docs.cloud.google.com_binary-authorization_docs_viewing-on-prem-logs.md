---
title: "View audit logs for Google Distributed Cloud \_|\_ Binary Authorization \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs
  title: "View audit logs for Google Distributed Cloud \_|\_ Binary Authorization\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Guides
Send feedback
View audit logs for Google Distributed Cloud
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to view log entries produced by Binary Authorization
for Google Distributed Cloud software. These entries can be used to
troubleshoot the system setup and use.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: To use this document, you must configure your
Distributed Cloud user cluster to forward log entries to
Cloud Audit Logs.
To enable Cloud Audit Logs, you must configure the cloudAuditLogging section
of your user cluster configuration file to properly forward log events. If your
GKE clusters on GDC are not configured to forward log entries, you
can view local audit logs
by using keyword searches. Entries in local logs are formatted as described in
this document.
This document describes how to use Cloud Audit Logs to query for log entries. You
can also query log entries through the Cloud Audit Logs API .
View Cloud Audit Logs entries
In the Google Cloud console, go to the Cloud Audit Logs page.
Go to Cloud Audit Logs
Select the Google Cloud project you configured in the cloudAuditLogging
section of your user cluster configuration file.
Enter a filter. You can find example filters for Binary Authorization for
Distributed Cloud log entries in the following sections.
Select the activity log:
Select the Log name combo box.
Enter externalaudit.googleapis.com in the text field.
Select the log named externalaudit.googleapis.com .
Click Add .
Make sure you select the time period when the events would have occurred.
Click Run Query .
View rejected Deployment log entries
To find Cloud Audit Logs entries for rejected Deployments, use the following
query:
resource.type="k8s_cluster"
(protoPayload.methodName="io.k8s.core.v1.pods.create" OR
protoPayload.methodName="io.k8s.core.v1.pods.update")
protoPayload.response.status="Failure"
View dry run log entries
To find Cloud Audit Logs entries related to Pod create or update with dry run
enabled, use the following query:
resource.type="k8s_cluster"
(protoPayload.methodName="io.k8s.core.v1.pods.create" OR
protoPayload.methodName="io.k8s.core.v1.pods.update")
labels."binaryauthorization.googleapis.com/dry-run"="true"
View breakglass log entries
To find Cloud Audit Logs entries related to Pod create or update with
breakglass enabled, use the following query:
resource.type="k8s_cluster"
(protoPayload.methodName="io.k8s.core.v1.pods.create" OR
protoPayload.methodName="io.k8s.core.v1.pods.update")
(labels."binaryauthorization.googleapis.com/break-glass"="true" OR
protoPayload.request.metadata.labels."image-policy.k8s.io/break-glass"="true")
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
