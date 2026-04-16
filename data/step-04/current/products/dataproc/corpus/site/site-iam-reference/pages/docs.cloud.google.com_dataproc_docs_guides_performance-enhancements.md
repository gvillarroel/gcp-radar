---
title: "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/concepts/iam/iam
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements
  title: "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\
    \ Cloud Documentation"
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
Managed Service for Apache Spark Spark performance enhancements
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to enable the Managed Service for Apache Spark
Spark performance enhancements to help your Managed Service for Apache Spark Spark jobs
process more data in less time with reduced costs.
Managed Service for Apache Spark Spark performance enhancements include:
Spark Optimizer enhancements:
Optimizer rules written for better Spark plans
Improved performance of the Managed Service for Apache Spark
BigQuery connector when used in Spark jobs
Spark Execution enhancements:
Spark execution engine improvements
Other Managed Service for Apache Spark performance improvements: See Managed Service for Apache Spark
cluster caching ,
which helps reduce the amount of time spent accessing data in Cloud Storage.
You can enable Spark performance enhancements on a cluster or on a Spark job:
Spark performance enhancements enabled on a cluster
apply, by default, to all Spark jobs run on the cluster, whether submitted to the
Managed Service for Apache Spark service or
submitted directly to the cluster .
Spark performance enhancements can also be
enabled or disabled on a job
that is submitted to Managed Service for Apache Spark. Spark performance
enhancements settings applied to a job override any conflicting settings set
at the cluster level for the specified job only.
Pricing
Spark performance enhancements don't incur additional charges. Standard
Managed Service for Apache Spark pricing applies.
Considerations
Spark performance enhancements adjusts Spark properties, including the following
properties:
spark.sql.shuffle.partitions :
Spark performance enhancements set this property to 1000 for 2.2 image version
clusters. This setting can slow small jobs.
spark.dataproc.sql.catalog.file.index.stats.enabled :
This setting can result in driver OOM (Out-Of-Memory) conditions if the
Hive partition count is high. Disabling this property can fix the OOM condition.
Enable enhancements at cluster creation
You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark
API to enable Managed Service for Apache Spark Spark performance enhancements
when you create a Managed Service for Apache Spark cluster with image versions
2.0.69+, 2.1.17+, 2.2.0+, and later image releases.
Console
In the Google Cloud console, open the Managed Service for Apache Spark
Create a cluster
page.
On the Create Managed Service for Apache Spark cluster form, click Create on the
Cluster line.
On the Create a Managed Service for Apache Spark cluster page,
click the Customize cluster panel, then scroll to the
Cluster properties section.
To enable Spark optimization enhancements:
Click + ADD PROPERTIES .
Select spark in the Prefix list, then add
"spark.dataproc.enhanced.optimizer.enabled" in the Key field and
"true" in Value field.
To enable Spark execution enhancements:
Click + ADD PROPERTIES .
Select spark in the Prefix list, then add
"spark.dataproc.enhanced.execution.enabled" in the Key field and
"true" in Value field.
Complete filling in or confirming the other cluster creation fields, then
click Create .
gcloud
Run the following
gcloud dataproc clusters create
command locally in a terminal window or in
Cloud Shell .
gcloud dataproc clusters create CLUSTER_NAME \
--project= PROJECT_ID \
--region= REGION \
--image-version= IMAGE \
--properties= PROPERTIES
Notes:
CLUSTER_NAME : The cluster name, which must be unique within a project.
The name must start with a lowercase letter, and can contain up to 51 lowercase
letters, numbers, and hyphens. It cannot end with a hyphen. The name of a
deleted cluster can be reused.
PROJECT_ID : The project to associate with the cluster.
REGION : The
Compute Engine region
where the cluster will be located, such as us-central1 .
You can add the optional --zone= ZONE flag
to specify a zone within the specified region,
such as us-central1-a . If you do not specify a zone, the
Managed Service for Apache Spark autozone placement
feature selects a zone with the specified region.
IMAGE : The Managed Service for Apache Spark Spark optimizer and execution performance
enhancements are available in Managed Service for Apache Spark image versions 2.0.69+ and 2.1.17+
and later releases. If you omit this flag, Managed Service for Apache Spark will select
the latest subminor version of the default Managed Service for Apache Spark
image for the cluster (see
Default Managed Service for Apache Spark image version ).
PROPERTIES :
To enable Spark optimization enhancements, specify:
spark:spark.dataproc.enhanced.optimizer.enabled = true
To enable Spark execution enhancements, specify:
spark:spark.dataproc.enhanced.execution.enabled = true
To enable Spark optimization and execution enhancements, specify:
spark:spark.dataproc.enhanced.optimizer.enabled = true,spark:spark.dataproc.enhanced.execution.enabled = true
API
Specify the following
SoftwareConfig.properties
as part of a clusters.create request:
To enable Spark optimization enhancements, specify:
"spark:spark.dataproc.enhanced.optimizer.enabled" : "true"
To enable Spark execution enhancements, specify:
"spark:spark.dataproc.enhanced.execution.enabled" : "true"
To enable Spark optimization and execution enhancements, specify:
"spark:spark.dataproc.enhanced.optimizer.enabled" : "true" , "spark:spark.dataproc.enhanced.execution.enabled" : "true"
Enable or disable enhancements at job submission
You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark
API to enable or disable Spark performance enhancements on a Spark job submitted
to Managed Service for Apache Spark.
Console
In the Google Cloud console, open the Managed Service for Apache Spark
Jobs
page.
On the Jobs page, click Submit job , then scroll to the job
Properties section.
To enable Spark optimization enhancements:
Click + ADD PROPERTIES .
Add "spark.dataproc.enhanced.optimizer.enabled" in the Key field and
"true" in Value field.
To enable Spark execution enhancements:
Click + ADD PROPERTIES .
Add "spark.dataproc.enhanced.execution.enabled" in the Key field
and "true" in Value field.
Complete filling in or confirming the other job submission fields, then
click Submit .
gcloud
Run the following
gcloud dataproc jobs submit
command locally in a terminal window or in
Cloud Shell .
gcloud dataproc jobs submit SPARK_JOB_TYPE \
--cluster= CLUSTER_NAME \
--region= REGION \
--properties= PROPERTIES
Notes:
SPARK_JOB_TYPE : Specify spark , pyspark , spark-sql or spark-r .
CLUSTER_NAME : The name of the job where the job will run.
REGION : The region where the cluster is located.
PROPERTIES :
To enable Spark optimization enhancements, specify:
spark.dataproc.enhanced.optimizer.enabled = true
To enable Spark execution enhancements, specify:
spark.dataproc.enhanced.execution.enabled = true
To enable Spark optimization and execution enhancements, specify:
spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true
API
Specify the following properties for a
SparkJob ,
PySparkJob ,
SparkSqlJob , or
SparkRJob
as part of a
jobs.submit
request:
To enable Spark optimization enhancements, specify:
"spark.dataproc.enhanced.optimizer.enabled=true"
To enable Spark execution enhancements, specify:
"spark.dataproc.enhanced.execution.enabled=true"
To enable Spark optimization and execution enhancements, specify:
"spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true"
Note: You can click Equivalent Command Line
or Equivalent REST at the bottom of the left panel of the
Create a Managed Service for Apache Spark cluster page
in the Google Cloud console to have
the console construct an equivalent gcloud tool
command or API REST request that you can use from the command line or in your code to
create a cluster.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
