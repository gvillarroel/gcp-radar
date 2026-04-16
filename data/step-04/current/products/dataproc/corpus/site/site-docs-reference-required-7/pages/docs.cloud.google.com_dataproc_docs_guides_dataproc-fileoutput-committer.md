---
title: "Run Spark jobs with DataprocFileOutputCommitter \_|\_ Managed Service for\
  \ Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/guides/dataproc-fileoutput-committer
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/guides/dataproc-fileoutput-committer
  title: "Run Spark jobs with DataprocFileOutputCommitter \_|\_ Managed Service for\
    \ Apache Spark \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Guides
Send feedback
Run Spark jobs with DataprocFileOutputCommitter
Stay organized with collections
Save and categorize content based on your preferences.
The DataprocFileOutputCommitter feature is an enhanced
version of the open source FileOutputCommitter . It
enables concurrent writes by Apache Spark jobs to an output location.
Limitations
The DataprocFileOutputCommitter feature supports Spark jobs run on
Managed Service for Apache Spark Compute Engine clusters created with
the following image versions:
2.1 image versions 2.1.10 and higher
2.0 image versions 2.0.62 and higher
Use DataprocFileOutputCommitter
To use this feature:
Create a Managed Service for Apache Spark on Compute Engine cluster
using image versions 2.1.10 or 2.0.62 or higher.
Set spark.hadoop.mapreduce.outputcommitter.factory.class=org.apache.hadoop.mapreduce.lib.output.DataprocFileOutputCommitterFactory and spark.hadoop.mapreduce.fileoutputcommitter.marksuccessfuljobs=false
as a job property when you submit a Spark job
to the cluster.
Google Cloud CLI example:
gcloud dataproc jobs submit spark \
--properties=spark.hadoop.mapreduce.outputcommitter.factory.class=org.apache.hadoop.mapreduce.lib.output.DataprocFileOutputCommitterFactory,spark.hadoop.mapreduce.fileoutputcommitter.marksuccessfuljobs=false \
--region= REGION \
other args ...
Code example:
sc.hadoopConfiguration.set("spark.hadoop.mapreduce.outputcommitter.factory.class","org.apache.hadoop.mapreduce.lib.output.DataprocFileOutputCommitterFactory")
sc.hadoopConfiguration.set("spark.hadoop.mapreduce.fileoutputcommitter.marksuccessfuljobs","false")
The Managed Service for Apache Spark file output committer must set
spark.hadoop.mapreduce.fileoutputcommitter.marksuccessfuljobs=false
to avoid conflicts between success marker files created during concurrent writes.
You can also set this property in spark-defaults.conf .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
