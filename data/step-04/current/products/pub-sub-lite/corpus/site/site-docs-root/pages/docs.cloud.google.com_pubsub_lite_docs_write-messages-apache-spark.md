---
title: "Quickstart: Write Pub/Sub Lite messages by using Apache Spark \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/lite/docs/write-messages-apache-spark
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/docs/write-messages-apache-spark
  title: "Quickstart: Write Pub/Sub Lite messages by using Apache Spark \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Pub/Sub Lite
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Write Pub/Sub Lite messages by using Apache Spark
Note: Pub/Sub Lite is deprecated. Effective June 30, 2026,
Pub/Sub Lite will be turned down.
Current customers: Pub/Sub Lite remains functional until June 30, 2026.
If you have not used Pub/Sub Lite within the 90-day period preceding July 15, 2025
(April 15, 2025 - July 15, 2025), you won't be able to access Pub/Sub Lite starting on
July 15, 2025.
New customers: Pub/Sub Lite is no longer available for new customers after September 24, 2024.
You can migrate your Pub/Sub Lite service to
Google Cloud Managed Service for Apache Kafka
or Pub/Sub .
The
Pub/Sub Lite Spark Connector
is an open-source Java client library that supports the use of
Pub/Sub Lite as an input and output source for
Apache Spark Structured Streaming
. The connector works in all Apache Spark distributions, including
Managed Service for Apache Spark.
This quickstart shows you how to:
read messages from Pub/Sub Lite
write messages to Pub/Sub Lite
using
PySpark
from a Managed Service for Apache Spark Spark cluster.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the
Pub/Sub Lite, Managed Service for Apache Spark,
Cloud Storage, Logging
APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the
Pub/Sub Lite, Managed Service for Apache Spark,
Cloud Storage, Logging
APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Set up
Create variables for your project.
export PROJECT_ID = $( gcloud config get-value project )
export PROJECT_NUMBER = $( gcloud projects list \
--filter = "projectId: $PROJECT_ID " \
--format = "value(PROJECT_NUMBER)" )
Create a Cloud Storage bucket. Cloud Storage bucket
names must be globally unique.
export BUCKET= your-bucket-name
gcloud storage buckets create gs://$BUCKET
Create a Pub/Sub Lite topic and subscription in a supported
location . See Create a topic
if you use a Pub/Sub Lite reservation .
export TOPIC = your-lite-topic-id
export SUBSCRIPTION = your-lite-subscription-id
export PUBSUBLITE_LOCATION = your-lite-location
gcloud pubsub lite-topics create $TOPIC \
--location = $PUBSUBLITE_LOCATION \
--partitions = 2 \
--per-partition-bytes = 30GiB
gcloud pubsub lite-subscriptions create $SUBSCRIPTION \
--location = $PUBSUBLITE_LOCATION \
--topic = $TOPIC
Create a Managed Service for Apache Spark cluster.
export DATAPROC_REGION = your-dataproc-region
export CLUSTER_ID = your-dataproc-cluster-id
gcloud dataproc clusters create $CLUSTER_ID \
--region $DATAPROC_REGION \
--image-version 2 .1 \
--scopes 'https://www.googleapis.com/auth/cloud-platform' \
--enable-component-gateway \
--bucket $BUCKET
--region : a supported Managed Service for Apache Spark
region
where your Pub/Sub Lite topic and subscription reside.
--image-version : the
cluster's image version
, which determines the Apache Spark version installed on the cluster.
Choose
2.x.x image release versions
because the Pub/Sub Lite Spark Connector currently supports Apache Spark 3.x.x.
--scopes : enable API access to Google Cloud services in the same project.
--enable-component-gateway : enable access to the Apache Spark web UI.
--bucket : a staging Cloud Storage bucket used to store cluster
job dependencies, driver output, and cluster config files.
Clone the quickstart repository and navigate to the sample code directory:
git clone https://github.com/GoogleCloudPlatform/python-docs-samples.git
cd python-docs-samples/pubsublite/spark-connector/
Writing to Pub/Sub Lite
The following example will:
create a
rate source
that generates consecutive numbers and timestamps formatted as
spark.sql.Row
transform the data to match the required
table schema
by the Pub/Sub Lite Spark Connector's
writeStream
API
write the data to an existing Pub/Sub Lite topic
from pyspark.sql import SparkSession
from pyspark.sql.functions import array , create_map , col , lit , when
from pyspark.sql.types import BinaryType , StringType
import uuid
# TODO(developer):
# project_number = 11223344556677
# location = "us-central1-a"
# topic_id = "your-topic-id"
spark = SparkSession . builder . appName ( "write-app" ) . getOrCreate ()
# Create a RateStreamSource that generates consecutive numbers with timestamps:
# |-- timestamp: timestamp (nullable = true)
# |-- value: long (nullable = true)
sdf = spark . readStream . format ( "rate" ) . option ( "rowsPerSecond" , 1 ) . load ()
# Transform the dataframe to match the required data fields and data types:
# https://github.com/googleapis/java-pubsublite-spark#data-schema
sdf = (
sdf . withColumn ( "key" , lit ( "example" ) . cast ( BinaryType ()))
. withColumn ( "data" , col ( "value" ) . cast ( StringType ()) . cast ( BinaryType ()))
. withColumnRenamed ( "timestamp" , "event_timestamp" )
# Populate the attributes field. For example, an even value will
# have {"key1", [b"even"]}.
. withColumn (
"attributes" ,
create_map (
lit ( "key1" ),
array ( when ( col ( "value" ) % 2 == 0 , b "even" ) . otherwise ( b "odd" )),
),
)
. drop ( "value" )
)
# After the transformation, the schema of the dataframe should look like:
# |-- key: binary (nullable = false)
# |-- data: binary (nullable = true)
# |-- event_timestamp: timestamp (nullable = true)
# |-- attributes: map (nullable = false)
# | |-- key: string
# | |-- value: array (valueContainsNull = false)
# | | |-- element: binary (containsNull = false)
sdf . printSchema ()
query = (
sdf . writeStream . format ( "pubsublite" )
. option (
"pubsublite.topic" ,
f "projects/ { project_number } /locations/ { location } /topics/ { topic_id } " ,
)
# Required. Use a unique checkpoint location for each job.
. option ( "checkpointLocation" , "/tmp/app" + uuid . uuid4 () . hex )
. outputMode ( "append" )
. trigger ( processingTime = "1 second" )
. start ()
)
# Wait 60 seconds to terminate the query.
query . awaitTermination ( 60 )
query . stop ()
To submit the write job to Managed Service for Apache Spark:
Console
Upload the PySpark script to your Cloud Storage bucket.
Go to the Cloud Storage console .
Select your bucket.
Use Upload files to upload the PySpark script that you intend
to use.
Submit the job to your Managed Service for Apache Spark cluster:
Go to the Managed Service for Apache Spark console .
Navigate to jobs.
Click Submit job .
Fill in the job details.
Under Cluster , choose your cluster.
Under Job , give a name to the job ID.
For Job type , choose PySpark.
For Main python file , provide the gcloud storage URI of the
uploaded PySpark script that starts with gs:// .
For Jar files , choose the latest Spark connector version from
Maven
, look for the jar with dependencies in the download options, and
copy its link.
For Arguments , if you use the full PySpark script from
GitHub, enter --project_number= PROJECT_NUMBER ,
--location= PUBSUBLITE_LOCATION ,
--topic_id= TOPIC_ID
; if you copy the PySpark script above with the to-do's completed,
leave it blank.
Under Properties , enter key spark.master and value yarn .
Click Submit .
gcloud
Use the
gcloud dataproc jobs submit pyspark
command to submit the job to Managed Service for Apache Spark:
gcloud dataproc jobs submit pyspark spark_streaming_to_pubsublite_example.py \
--region=$DATAPROC_REGION \
--cluster=$CLUSTER_ID \
--jars=gs://spark-lib/pubsublite/pubsublite-spark-sql-streaming-LATEST-with-dependencies.jar \
--driver-log-levels=root=INFO \
--properties=spark.master=yarn \
-- --project_number=$PROJECT_NUMBER --location=$PUBSUBLITE_LOCATION --topic_id=$TOPIC
--region : the pre-selected Managed Service for Apache Spark
region .
--cluster : the Managed Service for Apache Spark cluster name.
--jars : the Pub/Sub Lite Spark Connector's uber jar with dependencies in
a public Cloud Storage bucket. You can also visit this
link
to download the uber jar with dependencies from Maven.
--driver-log-levels : set logging level to INFO at the root level.
--properties : use YARN resource manager for the Spark master.
-- : provide the arguments required by the script.
If the writeStream operation succeeds, you should see log messages
like the following locally as well as in the job details page in the
Google Cloud console:
INFO com.google.cloud.pubsublite.spark.PslStreamWriter: Committed 1 messages for epochId ..
Reading from Pub/Sub Lite
The following example will read messages from an existing
Pub/Sub Lite subscription using the
readStream
API. The connector will output messages that conforms to the fixed
table schema
formatted as
spark.sql.Row
.
from pyspark.sql import SparkSession
from pyspark.sql.types import StringType
# TODO(developer):
# project_number = 11223344556677
# location = "us-central1-a"
# subscription_id = "your-subscription-id"
spark = SparkSession . builder . appName ( "read-app" ) . master ( "yarn" ) . getOrCreate ()
sdf = (
spark . readStream . format ( "pubsublite" )
. option (
"pubsublite.subscription" ,
f "projects/ { project_number } /locations/ { location } /subscriptions/ { subscription_id } " ,
)
. load ()
)
sdf = sdf . withColumn ( "data" , sdf . data . cast ( StringType ()))
query = (
sdf . writeStream . format ( "console" )
. outputMode ( "append" )
. trigger ( processingTime = "1 second" )
. start ()
)
# Wait 120 seconds (must be >= 60 seconds) to start receiving messages.
query . awaitTermination ( 120 )
query . stop ()
To submit the read job to Managed Service for Apache Spark:
Console
Upload the PySpark script to your Cloud Storage bucket.
Go to the Cloud Storage console .
Select your bucket.
Use Upload files to upload the PySpark script that you intend
to use.
Submit the job to your Managed Service for Apache Spark cluster:
Go to the Managed Service for Apache Spark console .
Navigate to jobs.
Click Submit job .
Fill in the job details.
Under Cluster , choose your cluster.
Under Job , give a name to the job ID.
For Job type , choose PySpark.
For Main python file , provide the gcloud storage URI of the
uploaded PySpark script that starts with gs:// .
For Jar files , choose the latest Spark connector version from
Maven
, look for the jar with dependencies in the download options, and
copy its link.
For Arguments , if you use the full PySpark script from
GitHub, enter --project_number= PROJECT_NUMBER ,
--location= PUBSUBLITE_LOCATION ,
--subscription_id= SUBSCRIPTION_ID
; if you copy the PySpark script above with the to-do's completed,
leave it blank.
Under Properties , enter key spark.master and value yarn .
Click Submit .
gcloud
Use the
gcloud dataproc jobs submit pyspark
command again to submit the job to Managed Service for Apache Spark:
gcloud dataproc jobs submit pyspark spark_streaming_to_pubsublite_example.py \
--region=$DATAPROC_REGION \
--cluster=$CLUSTER_ID \
--jars=gs://spark-lib/pubsublite/pubsublite-spark-sql-streaming-LATEST-with-dependencies.jar \
--driver-log-levels=root=INFO \
--properties=spark.master=yarn \
-- --project_number=$PROJECT_NUMBER --location=$PUBSUBLITE_LOCATION --subscription_id=$SUBSCRIPTION
--region : the pre-selected Managed Service for Apache Spark
region .
--cluster : the Managed Service for Apache Spark cluster name.
--jars : the Pub/Sub Lite Spark Connector's uber jar with dependencies in
a public Cloud Storage bucket. You can also visit this
link
to download the uber jar with dependencies from Maven.
--driver-log-levels : set logging level to INFO at the root level.
--properties : use YARN resource manager for the Spark master.
-- : provide required arguments for the script.
If the readStream operation succeeds, you should see log messages
like the following locally as well as in the job details page in the
Google Cloud console:
+--------------------+---------+------+---+----+--------------------+--------------------+----------+
| subscription|partition|offset|key|data| publish_timestamp| event_timestamp|attributes|
+--------------------+---------+------+---+----+--------------------+--------------------+----------+
|projects/50200928...| 0| 89523| 0| .|2021-09-03 23:01:...|2021-09-03 22:56:...| []|
|projects/50200928...| 0| 89524| 1| .|2021-09-03 23:01:...|2021-09-03 22:56:...| []|
|projects/50200928...| 0| 89525| 2| .|2021-09-03 23:01:...|2021-09-03 22:56:...| []|
Replay and purge messages from Pub/Sub Lite
Seek operations don't work when reading from
Pub/Sub Lite using the Pub/Sub Lite Spark Connector because
Apache Spark systems perform
their own tracking of offsets within partitions. The workaround is to drain,
seek and restart the workflows.
Note: Due to
limitations
in Apache Spark 's processing
model, don't attempt to seek to or create a subscription at the beginning of
backlog if using the Pub/Sub Lite Spark Connector to read from
Pub/Sub Lite. Instead, seek to the publish timestamp of the unix
epoch to replay all messages from backlog.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the topic and subscription.
gcloud pubsub lite-topics delete $TOPIC
gcloud pubsub lite-subscriptions delete $SUBSCRIPTION
Delete the Managed Service for Apache Spark cluster.
gcloud dataproc clusters delete $CLUSTER_ID --region=$DATAPROC_REGION
Remove the Cloud Storage bucket.
gcloud storage rm gs://$BUCKET
What's next
Check out the
word count example in Java
for the Pub/Sub Lite Spark Connector.
Learn how to access the Managed Service for Apache Spark job driver output .
Other Spark connectors by Google Cloud products:
BigQuery connector ,
Bigtable connector ,
Cloud Storage connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
