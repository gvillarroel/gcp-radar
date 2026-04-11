---
title: "Manage pipeline configurations \_|\_ Cloud Data Fusion \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/data-fusion/docs/concepts/manage-pipeline-configurations
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-fusion/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/data-fusion/docs/concepts/manage-pipeline-configurations
  title: "Manage pipeline configurations \_|\_ Cloud Data Fusion \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Data Fusion
Guides
Send feedback
Manage pipeline configurations
Stay organized with collections
Save and categorize content based on your preferences.
This page describes ways you can manage configurations for deployed
pipelines.
Before you begin
This page requires some background knowledge about Compute profiles and
pipeline performance .
Compute profile configuration
You can change the compute profile or customize the parameters of the default
compute profile that runs the pipeline. For more information, see
Manage compute profiles and Dataproc provisioner properties .
Pipeline configuration
For each pipeline, you can enable or disable instrumentation, such as timing
metrics. By default, instrumentation is on. If instrumentation is enabled, when
you run the pipeline, Cloud Data Fusion generates metrics for each pipeline
node. The following metrics display on the Metrics tab of each node. The
source, transformation, and sink metrics vary slightly.
Records out
Records in
Total number of errors
Records out per second
Min process time (one record)
Max process time (one record)
Standard deviation
Average processing time
We recommend you always turn on Instrumentation, unless the environment is short
on resources.
For streaming pipelines, you can also set the Batch interval
(seconds/minutes) for streaming data.
Engine configuration
Apache Spark is the default execution engine. You can pass custom parameters
for Spark. For more information, see Parallel processing .
Resources
You can specify the memory and number of CPUs for the Spark driver and
executor. The driver orchestrates the Spark job. The executor handles the data
processing in Spark. For more information, see Resource management .
Pipeline alert
You can configure the pipeline to send alerts and start post processing tasks
after the pipeline run finishes. You create pipeline alerts when you design the
pipeline. After you deploy the pipeline, you can view the alerts. You can edit
the pipeline to change alert settings. For more information, see
Create alerts .
Transformation pushdown
You can enable Transformation pushdown if you want a pipeline to execute
certain transformations in BigQuery. For more information,
see the Transformation Pushdown overview .
What's next
Learn more about viewing and downloading pipeline logs in Cloud Data Fusion .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
