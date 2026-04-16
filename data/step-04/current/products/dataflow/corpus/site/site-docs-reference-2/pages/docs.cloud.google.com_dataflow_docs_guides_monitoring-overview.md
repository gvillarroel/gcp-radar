---
title: "Use the Dataflow job monitoring interface \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview
  title: "Use the Dataflow job monitoring interface \_|\_ Google Cloud Documentation"
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
Use the Dataflow job monitoring interface
Stay organized with collections
Save and categorize content based on your preferences.
When you run your pipeline by using Dataflow,
you can view that job and any others by using the Dataflow monitoring
interface. The monitoring interface lets you see and
interact with your Dataflow jobs.
You can access the Dataflow monitoring interface in the
Google Cloud console .
Tasks that you can perform by using the monitoring interface include the
following:
See a list of running, completed, and failed jobs.
View a graphical representation of a job's stages and the progress of each
stage
View graphs of job metrics, such as data freshness, resource utilization, and
I/O requests.
Monitor the estimated cost of a job.
View pipeline logs.
Identify which steps might cause pipeline lag.
Identify causes of latency in your sources and sinks.
Understand pipeline errors.
Note: Sometimes job data is intermittently unavailable. When data is missing, gaps appear in
the job monitoring charts.
Monitoring interface components
The monitoring interface contains the following visualizers and charts:
Project monitoring dashboard
A dashboard that monitors your Dataflow jobs at the project
level.
Jobs list
A list of all running Dataflow jobs and all jobs run within the
last 30 days, along with their status, region, elapsed time, and other
information.
Job graph
A graphical representation of a pipeline. The job graph also provides a job
summary, a job log, and information about each step in the pipeline.
Execution details
Shows the execution stages of a job, data freshness for streaming jobs, and
worker progress for batch jobs.
Job metrics
Charts that display metrics over the duration of a job.
Estimated cost
The estimated cost of your Dataflow job, based on resource
usage metrics.
Recommendations
Recommendations for improving job performance, reducing cost, and
troubleshooting errors.
Autoscaling
A set of charts that help you to understand the autoscaling behavior of
streaming jobs.
Pipeline logs
Logs emitted by your pipeline and by the Dataflow service.
Data sampling
A tool that lets you observe sampled data at each step of a pipeline.
What's next
Use Cloud Monitoring to create alerts and view Dataflow metrics, including custom metrics
Learn more about building production-ready data pipelines
Learn how to troubleshoot your pipeline
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
