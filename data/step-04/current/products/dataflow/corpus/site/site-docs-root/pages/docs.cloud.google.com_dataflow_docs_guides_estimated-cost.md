---
title: "Dataflow estimated cost \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/estimated-cost
  title: "Dataflow estimated cost \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Dataflow estimated cost
Stay organized with collections
Save and categorize content based on your preferences.
The Estimated Cost page in the Google Cloud console shows the estimated cost of your current Dataflow
job. Estimated costs are calculated by multiplying the resource usage metrics
as shown in Cloud Monitoring by
the price of those resources in the job region .
To view the estimated cost for a job, perform the following steps:
In the Google Cloud console, go to the Dataflow >
Jobs page.
Go to Jobs
Select a job.
Click the Cost tab.
Warning: The estimated cost might not reflect the actual job cost for a variety
of reasons, such as contractual discounts or temporary billing adjustments.
To view the actual cost of your Dataflow jobs, view the
Cloud Billing reports for your Cloud Billing account
in the Google Cloud console.
Use cost monitoring
Job cost estimates are available for both batch and streaming jobs. The
Estimated Cost page in the Google Cloud console provides the following
information:
Details about which resources contribute to the job cost and by how much.
Resources include vCPUs, memory, Dataflow Shuffle data processed
or Streaming Engine data processed, and SSD and HDD disk usage.
Costs over specific time windows, such as: time since the job started, the previous
hour, the last 24 hours, the preceding seven days, and a user-specified time range.
You can use monitoring alerts to get notifications when your job costs cross a specified threshold.
You can also use alerts to make changes to your jobs, such as stopping or canceling jobs,
based on the thresholds that you set.
To create a Cloud Monitoring alert rule, click Create alert .
For instructions about how to configure these alerts, see
Use Cloud Monitoring for Dataflow pipelines .
Limitations
Dataflow cost monitoring does not support
Dataflow Prime jobs and does not reflect additional GPU accelerator cost.
Dataflow cost monitoring approximates the TPU accelerator costs
using the vCPU and memory costs, even though TPU workers don't incur vCPU and
memory charges.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
