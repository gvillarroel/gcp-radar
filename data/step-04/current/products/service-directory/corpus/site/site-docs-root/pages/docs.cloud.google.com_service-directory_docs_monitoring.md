---
title: "View logs and metrics \_|\_ Service Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-directory/docs/monitoring
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-directory/docs
source_metadata:
  url: https://docs.cloud.google.com/service-directory/docs/monitoring
  title: "View logs and metrics \_|\_ Service Directory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Distributed, hybrid, and multicloud
Service Directory
Guides
Send feedback
View logs and metrics
Stay organized with collections
Save and categorize content based on your preferences.
You can use
Cloud Monitoring
and
Cloud Logging
with Service Directory.
Monitor
Monitoring lets you create dashboards or set up
alerts. You can access it by visiting
Monitoring
in Google Cloud console. To view basic monitoring metrics (request
count, size, and latency), go to the Metrics Explorer and filter by
resource_type:consumed_api and service:servicedirectory.googleapis.com .
View logs
Service Directory produces audit logs that you can view through
Logging.
Audit logs
Audit logs
can help you answer the questions "Who did what, where, and when?".
Service Directory writes two types of audit logs: admin activity and
data access . Admin activity logs are always enabled and apply to the
following Service Directory operations:
CreateNamespace
UpdateNamespace
DeleteNamespace
SetIamPolicy
All other Service Directory operations are considered data access logs and are
not enabled by default. Data access logs are also subject to
Logging pricing and quota, whereas neither applies to admin
activity logs. To enable data access logging, see
Configuring Data Access logs .
To see these logs in
Logging ,
select Service Directory Namespace from the Resource drop-down menu and
cloudaudit.googleapis.com/activity or cloudaudit.googleapis.com/data_access ,
as appropriate, from the Logs drop-down.
What's next
To get a thorough understanding of Monitoring, see the
Monitoring documentation .
To find solutions for common issues that you might encounter when using
Service Directory, see Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
