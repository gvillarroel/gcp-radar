---
title: "Monitor metrics for Distributed Cloud \_|\_ Binary Authorization \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/on-prem-cloud-monitoring
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/on-prem-cloud-monitoring
  title: "Monitor metrics for Distributed Cloud \_|\_ Binary Authorization \_|\_ Google\
    \ Cloud Documentation"
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
Monitor metrics for Distributed Cloud
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to use Cloud Monitoring for
Binary Authorization for Google Distributed Cloud software. Learn more about
Distributed Cloud logging and monitoring .
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Before you begin
To view Binary Authorization for Distributed Cloud metrics, you
must use supported environments:
Distributed Cloud for bare metal 1.14 or
later
Distributed Cloud for VMware
1.4 or later
To use Cloud Monitoring, make sure the stackdriver
section of your User cluster configuration file is filled in.
Set up Cloud Monitoring queries for Binary Authorization
This section shows you how to access Cloud Monitoring and select the
Cloud Logging project that stores your GKE cluster logs.
In the Workspace combo box, select the project ID from the stackdriver
section of your User cluster configuration .
View Cloud Monitoring:
In the Google Cloud console, go to Monitoring >
Metrics Explorer or use the following button:
Go to Monitoring
Select the Google Cloud project that you use to store logs and metrics. You can
find the Google Cloud project in the stackdriver.projectID field of
your user cluster configuration file.
Click Query editor .
Enter a query into the query editor. You can find Binary Authorization for
Distributed Cloud queries in the following sections.
Example queries
This section provides example Prometheus Query Language (PromQL) queries you can
use to monitor Binary Authorization for Distributed Cloud metrics. To
learn more about PromQL, see
PromQL for Cloud Monitoring .
Query for rejected deployments
To view deployment requests that were rejected by the Binary Authorization
enforcer, use the following query:
{
"__name__"="kubernetes.io/anthos/apiserver_admission_webhook_rejection_count",
"monitored_resource"="k8s_container",
"error_type"="no_error",
"name"="binaryauthorization.googleapis.com"
}
Query for system failures
This section describes how to monitor for system failures that prevent
normal operation of Binary Authorization for Distributed Cloud.
To monitor for system failures, use the following query:
{
"__name__"="kubernetes.io/anthos/apiserver_admission_webhook_rejection_count",
"monitored_resource"="k8s_container",
"error_type"="calling_webhook_error",
"name"="binaryauthorization.googleapis.com"
}
Sum the number of webhook calls related to Binary Authorization
To view the total number of webhook calls relating to Binary Authorization, use
the following query:
count(
increase({
"__name__"="kubernetes.io/anthos/apiserver_admission_webhook_admission_duration_seconds",
"monitored_resource"="k8s_container",
"name"="binaryauthorization.googleapis.com"
}[${__interval}])
)
What's next
Introduction to Cloud Monitoring
PromQL for Cloud Monitoring
View Binary Authorization for Distributed Cloud audit log entries
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
