---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.148Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Restartable jobs maximum failure limit"
feature_slug: "restartable-jobs-maximum-failure-limit"
latest_feature_date: "2020-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
keywords:
  - "restartable"
  - "maximum"
  - "failure"
  - "limit"
  - "jobs"
  - "users"
---

# Restartable jobs maximum failure limit

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Restartable Dataproc jobs let users specify the maximum total number of job failures at submission time.

## Extended Definition

Restartable Dataproc jobs let users specify the maximum total number of job failures at submission time.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling)
- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)

## Supporting Pages

### "JobScheduling \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: This restartable job option is not supported in Dataproc workflow templates . maxFailuresTotal integer Optional.
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback JobScheduling Stay organized with collections Save and categorize content based on your preferences.
- Maximum number of times per hour a driver can be restarted as a result of driver exiting with non-zero code before job is reported failed.
- JSON representation { "maxFailuresPerHour" : integer , "maxFailuresTotal" : integer } Fields maxFailuresPerHour integer Optional.

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- In Cloud Shell, export the metadata from the DPMS instance: gcloud metastore services export gcs $ { DPMS PRIMARY INSTANCE } \ -- location =$ { DPMS PRIMARY REGION } \ -- destination - folder = gs : //$ { BACKUP BUCKET } Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the metadata into the standby DPMS instance in the original region (region A): gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select from completed orders limit 5;" The output includes the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The primary Managed Service for Apache Spark Metastore and standby Managed Service for Apache Spark Metastore have swapped roles again.
- Update the environment variables based on these new roles: export DPMS PRIMARY REGION = us - east1 export DPMS STANDBY REGION = us - central1 ] export DPMS PRIMARY INSTANCE = dpms2 export DPMS STANDBY INSTANCE = dpms1 export HADOOP PRIMARY = dataproc - cluster2 export HADOOP STANDBY = dataproc - cluster1 Verify that you can write to the new primary Managed Service for Apache Spark Metastore in region B: gcloud dataproc jobs submit hive \ --cluster ${ DPMS PRIMARY INSTANCE } \ --region ${ DPMS PRIMARY REGION } \ --execute "create view completed orders as select from orders where order status = 'COMPLETE';" gcloud dataproc jobs submit hive \ --cluster ${ HADOOP PRIMARY } \ --region ${ DPMS PRIMARY REGION } \ --execute "select from completed orders limit 5;" The output contains the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The failover is now complete.
- Handle Failovers Once you've failed over to region B, you must apply the following steps in order to preserve your disaster recovery requirements and protect your infrastructure against a potential failure in region B: Pause your existing Cloud Scheduler jobs.
- Populate the metastore In Cloud Shell, update the sample retail.hql provided in this tutorial's repository with the name of the Hive data bucket: sed -i -- 's/ ${ WAREHOUSE BUCKET } /'" $WAREHOUSE BUCKET "'/g' retail.hql Run the queries contained in the retail.hql file to create the table definitions in the metastore: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --file=retail.hql Verify that the table definitions were correctly created: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --execute=" desc departments; desc categories; desc products; desc order items; desc orders; desc customers; select count( ) as num departments from departments; select count( ) as num categories from categories; select count( ) as num products from products; select count( ) as num order items from order items; select count( ) as num orders from orders; select count( ) as num customers from customers; " The output resembles the following: +------------------+------------+----------+ col name data type comment +------------------+------------+----------+ department id int department name string +------------------+------------+----------+ The output also contains the number of elements in each table—for example: +----------------+ num customers +----------------+ 12435 +----------------+ Failing over to the standby region This section provides the steps to failover from the primary region (region A) to the standby region (region B).

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- However, the number of concurrent jobs running on the master is limited by the resources available on master node, and since Managed Service for Apache Spark master nodes can't be scaled, a job can fail or get throttled when master node resources are insufficient to run a job.
- Spark job to estimate value of pi : gcloud dataproc jobs submit spark \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ --class=org.apache.spark.examples.SparkPi \ --jars=file:///usr/lib/spark/examples/jars/spark-examples.jar \ -- 1000 Spark wordcount job: gcloud dataproc jobs submit spark \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ --class=org.apache.spark.examples.JavaWordCount \ --jars=file:///usr/lib/spark/examples/jars/spark-examples.jar \ -- 'gs://apache-beam-samples/shakespeare/macbeth.txt' PySpark job to estimate value of pi : gcloud dataproc jobs submit pyspark \ file:///usr/lib/spark/examples/src/main/python/pi.py \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ -- 1000 Hadoop TeraGen MapReduce job: gcloud dataproc jobs submit hadoop \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ --jar file:///usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar \ -- teragen 1000 \ hdfs:///gen1/test REST Before using any of the request data, make the following replacements: PROJECT ID : Required.
- Child queue metric Description yarn:ResourceManager:ChildQueueMetrics:AvailableMB The amount of the available memory in Mebibytes in this queue under the default partition. yarn:ResourceManager:ChildQueueMetrics:PendingContainers Number of pending (queued) containers in this queue under the default partition. yarn:ResourceManager:ChildQueueMetrics:running 0 The number of jobs with a runtime between 0 and 60 minutes in this queue under all partitions. yarn:ResourceManager:ChildQueueMetrics:running 60 The number of jobs with a runtime between 60 and 300 minutes in this queue under all partitions. yarn:ResourceManager:ChildQueueMetrics:running 300 The number of jobs with a runtime between 300 and 1440 minutes in this queue under all partitions. yarn:ResourceManager:ChildQueueMetrics:running 1440 The number of jobs with a runtime greater than 1440 minutes in this queue under all partitions. yarn:ResourceManager:ChildQueueMetrics:AppsSubmitted Number of applications submitted to this queue under all partitions.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit" Select-Object -Expand Content You should receive a JSON response similar to the following: { "reference": { "projectId": " PROJECT ID ", "jobId": "job-id" }, "placement": { "clusterName": " CLUSTER NAME ", "clusterUuid": "cluster-Uuid" }, "sparkJob": { "mainClass": "org.apache.spark.examples.SparkPi", "args": [ "1000" ], "jarFileUris": [ "file:///usr/lib/spark/examples/jars/spark-examples.jar" ] }, "status": { "state": "PENDING", "stateStartTime": "start-time" }, "jobUuid": "job-Uuid" } Python Install the client library Set up application default credentials Run the code See Setting Up a Python Development Environment .

