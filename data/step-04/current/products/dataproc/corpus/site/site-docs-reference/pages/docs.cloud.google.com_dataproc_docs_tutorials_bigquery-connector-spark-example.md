---
title: "Use the Spark BigQuery connector \_|\_ Managed Service for Apache Spark \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-spark-example
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-spark-example
  title: "Use the Spark BigQuery connector \_|\_ Managed Service for Apache Spark\
    \ \_|\_ Google Cloud Documentation"
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
Use the Spark BigQuery connector
Stay organized with collections
Save and categorize content based on your preferences.
The spark-bigquery-connector
is used with Apache Spark
to read and write data from and to BigQuery .
The connector takes advantage of the
BigQuery Storage API
when reading data from BigQuery.
This tutorial provides information on the availability of the pre-installed connector,
and shows you how make a specific connector version available to Spark
jobs. Example code shows you how to use the Spark BigQuery connector
within a Spark application.
Use the pre-installed connector
The Spark BigQuery connector is pre-installed on and is available to
Spark jobs run on Managed Service for Apache Spark clusters created with image versions
2.1 and later. The pre-installed connector version is listed on each image
version release page. For example, the BigQuery Connector row on the
2.2.x image release versions
page shows the connector version that is installed on the latest
2.2 image releases.
Make a specific connector version available to Spark jobs
If you want to use a connector version that is different from a pre-installed
version on a 2.1 or later image version cluster, or if you want to install
the connector on a pre- 2.1 image version cluster, follow the instructions in
this section.
Important: The spark-bigquery-connector version must be compatible with
the Managed Service for Apache Spark cluster image version. See the
Connector to Managed Service for Apache Spark Image Compatibility Matrix .
2.1 and later image version clusters
When you create a Managed Service for Apache Spark cluster
with a 2.1 or later image version, specify the
connector version as cluster metadata .
gcloud CLI example:
gcloud dataproc clusters create CLUSTER_NAME \
--region= REGION \
--image-version=2.2 \
--metadata= SPARK_BQ_CONNECTOR_VERSION or SPARK_BQ_CONNECTOR_URL \
other flags
Notes:
SPARK_BQ_CONNECTOR_VERSION : Specify a connector version.
Spark BigQuery connector versions are listed on the
spark-bigquery-connector/releases
page in GitHub.
Example:
--metadata=SPARK_BQ_CONNECTOR_VERSION=0.42.1
SPARK_BQ_CONNECTOR_URL : Specify a URL that points to the jar in Cloud Storage.
You can specify the URL of a connector listed in the link column in the
Downloading and Using the Connector
in GitHub or the path to a Cloud Storage location where you have
placed a custom connector jar.
Examples:
--metadata=SPARK_BQ_CONNECTOR_URL=gs://spark-lib/bigquery/spark-3.5-bigquery-0.42.1.jar
--metadata=SPARK_BQ_CONNECTOR_URL=gs:// PATH_TO_CUSTOM_JAR
2.0 and earlier image version clusters
You can make the Spark BigQuery connector available to your application
in one of the following ways:
Install the spark-bigquery-connector in the Spark jars directory of every
node by using the
Managed Service for Apache Spark connectors initialization action when you create your cluster.
Provide the connector jar URL when you submit your job to the cluster using
the Google Cloud console, gcloud CLI, or the Managed Service for Apache Spark
API.
Console
Use the Spark job Jars files item on the Managed Service for Apache Spark
Submit a job page.
gcloud
Use the gcloud dataproc jobs submit spark --jars flag .
API
Use the SparkJob.jarFileUris field .
How to specify the connector jar when running Spark jobs on pre-2.0 image version clusters
Spark-BigQuery connector versions are listed in the GitHub
GoogleCloudDataproc/spark-bigquery-connector repository .
Specify the connector jar by substituting the Scala and connector version
information in the following URI string:
gs://spark-lib/bigquery/spark-bigquery-with-dependencies_ SCALA_VERSION - CONNECTOR_VERSION .jar
Use Scala 2.12 with Managed Service for Apache Spark image versions 1.5+
gs://spark-lib/bigquery/spark-bigquery-with-dependencies_2.12- CONNECTOR_VERSION .jar
gcloud CLI example:
gcloud dataproc jobs submit spark \
--jars=gs://spark-lib/bigquery/spark-bigquery-with-dependencies_2.12-0.23.2.jar \
-- job args
Use Scala 2.11 with Managed Service for Apache Spark image versions 1.4 and earlier:
gs://spark-lib/bigquery/spark-bigquery-with-dependencies_2.11- CONNECTOR_VERSION .jar
gcloud CLI example:
gcloud dataproc jobs submit spark \
--jars=gs://spark-lib/bigquery/spark-bigquery-with-dependencies_2.11-0.23.2.jar \
-- job-args
For non-production use, you can also point to the latest jars, as follows:
Managed Service for Apache Spark image version 1.5+ :
--jars=gs://spark-lib/bigquery/spark-bigquery-latest_2.12.jar
Managed Service for Apache Spark image versions 1.4 and earlier:
--jars=gs://spark-lib/bigquery/spark-bigquery-latest.jar
Include the connector jar in your Scala or Java Spark application as a dependency
(see
Compiling against the connector ).
Note: If the connector is not available at runtime, a ClassNotFoundException is thrown.
Calculate costs
In this document, you use the following billable components of Google Cloud:
Managed Service for Apache Spark
BigQuery
Cloud Storage
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Read and write data from and to BigQuery
This example reads data from
BigQuery
into a Spark DataFrame to perform a word count using the standard data source
API .
The connector writes the data to BigQuery by
first buffering all the data into a Cloud Storage temporary table. Then it
copies all data from into BigQuery in one operation. The
connector attempts to delete the temporary files once the BigQuery
load operation has succeeded and once again when the Spark application terminates.
If the job fails, remove any remaining temporary
Cloud Storage files. Typically, temporary BigQuery
files are located in gs://[bucket]/.spark-bigquery-[jobid]-[UUID] .
Configure billing
By default, the project associated with the credentials or service account is
billed for API usage. To bill a different project, set the following
configuration: spark.conf.set("parentProject", "<BILLED-GCP-PROJECT>") .
It can also be added to a read or write operation, as follows:
.option("parentProject", "<BILLED-GCP-PROJECT>") .
Run the code
Before running this example, create a dataset named "wordcount_dataset" or
change the output dataset in the code to an existing BigQuery dataset in your
Google Cloud project.
Use the
bq command to create
the wordcount_dataset :
bq mk wordcount_dataset
Use the Google Cloud CLI command
to create a Cloud Storage bucket, which will be used to export to
BigQuery:
gcloud storage buckets create gs:// [ bucket ]
Scala
Examine the code and replace the [bucket] placeholder with
the Cloud Storage bucket you created earlier.
/*
* Remove comment if you are not running in spark-shell.
*
import org.apache.spark.sql.SparkSession
val spark = SparkSession.builder()
.appName("spark-bigquery-demo")
.getOrCreate()
*/
// Use the Cloud Storage bucket for temporary BigQuery export data used
// by the connector.
val bucket = "[bucket]"
spark . conf . set ( "temporaryGcsBucket" , bucket )
// Load data in from BigQuery. See
// https://github.com/GoogleCloudDataproc/spark-bigquery-connector/tree/0.17.3#properties
// for option information.
val wordsDF =
spark . read . bigquery ( "bigquery-public-data:samples.shakespeare" )
. cache ()
wordsDF . createOrReplaceTempView ( "words" )
// Perform word count.
val wordCountDF = spark . sql (
"SELECT word, SUM(word_count) AS word_count FROM words GROUP BY word" )
wordCountDF . show ()
wordCountDF . printSchema ()
// Saving the data to BigQuery.
( wordCountDF . write . format ( "bigquery" )
. save ( "wordcount_dataset.wordcount_output" ))
Run the code on your cluster
Use SSH to connect to the Managed Service for Apache Spark cluster
master node
Go to the
Managed Service for Apache Spark Clusters
page in the Google Cloud console, then click the name of your cluster
On the >Cluster details page, select the VM Instances tab. Then, click
SSH to the right of the name of the cluster master node>
A browser window opens at your home directory on the master node
Connected, host fingerprint: ssh-rsa 2048 ...
...
user@clusterName-m:~$
Create wordcount.scala with the pre-installed vi ,
vim , or nano text editor, then paste in the Scala
code from the
Scala code listing
nano wordcount.scala
Launch the spark-shell REPL.
$ spark-shell --jars=gs://spark-lib/bigquery/spark-bigquery-latest.jar
...
Using Scala version ...
Type in expressions to have them evaluated.
Type :help for more information.
...
Spark context available as sc.
...
SQL context available as sqlContext.
scala>
Run wordcount.scala with the :load wordcount.scala command
to create the BigQuery wordcount_output table. The output
listing displays 20 lines
from the wordcount output.
:load wordcount.scala
...
+---------+----------+
| word|word_count|
+---------+----------+
| XVII| 2|
| spoil| 28|
| Drink| 7|
|forgetful| 5|
| Cannot| 46|
| cures| 10|
| harder| 13|
| tresses| 3|
| few| 62|
| steel'd| 5|
| tripping| 7|
| travel| 35|
| ransom| 55|
| hope| 366|
| By| 816|
| some| 1169|
| those| 508|
| still| 567|
| art| 893|
| feign| 10|
+---------+----------+
only showing top 20 rows
root
|-- word: string (nullable = false)
|-- word_count: long (nullable = true)
To preview the output table, open the
BigQuery
page, select the wordcount_output table, and then click
Preview .
PySpark
Examine the code and replace the [bucket] placeholder with
the Cloud Storage bucket you created earlier.
#!/usr/bin/env python
"""BigQuery I/O PySpark example."""
from pyspark.sql import SparkSession
spark = SparkSession \
. builder \
. master ( 'yarn' ) \
. appName ( 'spark-bigquery-demo' ) \
. getOrCreate ()
# Use the Cloud Storage bucket for temporary BigQuery export data used
# by the connector.
bucket = "[bucket]"
spark . conf . set ( 'temporaryGcsBucket' , bucket )
# Load data from BigQuery.
words = spark . read . format ( 'bigquery' ) \
. load ( 'bigquery-public-data:samples.shakespeare' ) \
words . createOrReplaceTempView ( 'words' )
# Perform word count.
word_count = spark . sql (
'SELECT word, SUM(word_count) AS word_count FROM words GROUP BY word' )
word_count . show ()
word_count . printSchema ()
# Save the data to BigQuery
word_count . write . format ( 'bigquery' ) \
. save ( 'wordcount_dataset.wordcount_output' )
Run the code on your cluster
Use Managed Service for Apache Spark to submit the PySpark code :
Instead of running the PySpark code manually from the cluster master instance,
you can submit the PySpark file directly to your cluster (see the
Managed Service for Apache Spark Quickstarts ).
Here are the steps using the Google Cloud CLI:
Create wordcount.py locally in a text editor by copying
the PySpark code from the
PySpark code listing
Run the PySpark code by submitting the job to your cluster with the
gcloud dataproc jobs submit command:
gcloud dataproc jobs submit pyspark wordcount.py \
--cluster= cluster-name \
--region= region \
--jars=gs://spark-lib/bigquery/spark-bigquery-latest.jar
Use SSH to connect to the Managed Service for Apache Spark cluster master node
Go to the
Managed Service for Apache Spark Clusters
page in the Google Cloud console, then click the name of your cluster
On the Cluster details page, select the VM Instances tab. Then, click
SSH to the right of the name of the cluster master node
A browser window opens at your home directory on the master node
Connected, host fingerprint: ssh-rsa 2048 ...
...
user@clusterName-m:~$
Create wordcount.py with the pre-installed vi ,
vim , or nano text editor, then paste in the PySpark
code from the
PySpark code listing
nano wordcount.py
Run wordcount with spark-submit to create the BigQuery
wordcount_output table. The output listing displays 20 lines
from the wordcount output.
spark-submit --jars gs://spark-lib/bigquery/spark-bigquery-latest.jar wordcount.py
...
+---------+----------+
| word|word_count|
+---------+----------+
| XVII| 2|
| spoil| 28|
| Drink| 7|
|forgetful| 5|
| Cannot| 46|
| cures| 10|
| harder| 13|
| tresses| 3|
| few| 62|
| steel'd| 5|
| tripping| 7|
| travel| 35|
| ransom| 55|
| hope| 366|
| By| 816|
| some| 1169|
| those| 508|
| still| 567|
| art| 893|
| feign| 10|
+---------+----------+
only showing top 20 rows
root
|-- word: string (nullable = false)
|-- word_count: long (nullable = true)
To preview the output table, open the
BigQuery
page, select the wordcount_output table, and then click
Preview .
Troubleshooting tips
You can examine job logs in Cloud Logging and in the BigQuery
Jobs Explorer to troubleshoot Spark jobs that use the BigQuery
connector.
Managed Service for Apache Spark driver logs contain a BigQueryClient entry with
BigQuery metadata that includes the jobId :
ClassNotFoundException INFO BigQueryClient:.. jobId: JobId{project= PROJECT_ID , job= JOB_ID , location= LOCATION }
BigQuery jobs contain Managed Service for Apache Spark_job_id and
Managed Service for Apache Spark_job_uuid labels:
Logging:
protoPayload.serviceData.jobCompletedEvent.job.jobConfiguration.labels.dataproc_job_id=" JOB_ID "
protoPayload.serviceData.jobCompletedEvent.job.jobConfiguration.labels.dataproc_job_uuid=" JOB_UUID "
protoPayload.serviceData.jobCompletedEvent.job.jobName.jobId=" JOB_NAME "
BigQuery Jobs Explorer: Click a job ID to view job details
under Labels in Job information .
What's next
See BigQuery Storage & Spark SQL - Python .
Learn how to create a table definition file for an external data source .
Learn how to query externally partitioned data .
See Spark job tuning tips .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
