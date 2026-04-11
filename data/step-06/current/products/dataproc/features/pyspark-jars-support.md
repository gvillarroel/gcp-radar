---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.133Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "PySpark --jars support"
feature_slug: "pyspark-jars-support"
latest_feature_date: "2016-02-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn"
keywords:
  - "pyspark"
  - "jars"
  - "lets"
  - "jobs"
  - "use"
  - "the"
  - "option"
---

# PySpark --jars support

Product: Dataproc
Coverage: LOW

## Step 02 Summary

PySpark --jars support lets PySpark jobs use the --jars option.

## Extended Definition

PySpark --jars support lets PySpark jobs use the --jars option.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Support for --jars for PySpark - Added support for using the --jars option for PySpark jobs.
- Fixed Fixed the ability to delete jobs that fast-failed before some cluster and staging directories were created Fixed some remaining errors with vmem settings when using the distcp command Fixed a rare bug in which underlying Compute Engine issues could lead to VM instances failing to be deleted after the Cloud Dataproc cluster had been successfully deleted Hive command has been fixed Fixed error reporting when updating the number of workers (standard and preemptible) in a cluster Fixed some cases when Rate Limit Exceeded errors occurred The maximum cluster name length is now correctly 55 instead of 56 characters GCP Console Cluster list now includes a Created column, and the cluster configuration tab now includes a Created field, telling the creation time of the cluster In the cluster-create screen, cluster memory sizes greater than 999 GB are now displayed in TB Fields that were missing from the PySpark and Hive job configuration tab ( Additional Python Files and Jar Files ) have been added The option to add preemptible nodes when creating a cluster is now in the "expander" at the bottom of the form Machine types with insufficient memory (less than 3.5 GB) are no longer displayed in the list of machine types (previously, selecting one of these small machine types would lead to an error from the backend The placeholder text in the Arguments field of the submit-job form has been corrected October 23, 2015 Feature GCP Console: Added support for adding, editing, and removing preemptible instances in clusters.
- January 27, 2016 Fixed Fixed two issues which would sometimes cause virtual machines to remain active after a cluster deletion request was submitted The Spark maxExecutors setting is now set to 10000 to avoid the AppMaster failing on jobs with many tasks Improved handling for aggressive job submission by making several changes to the Cloud Dataproc agent, including: Limiting the number of concurrent jobs so they are proportional to the memory of the master node Checking free memory before scheduling new jobs Rate limiting how many jobs can be scheduled per cycle Improved how HDFS capacity is calculated before commissioning or decommissioning nodes to prevent excessively long updates Feature Two new options have been added to the Cloud Dataproc gcloud command-line tool for adding tags and metadata to virtual machines used in Cloud Dataproc clusters.
- GCP Console The Output tab for a job now includes a Line wrapping option to make it easier to view job output containing very long lines January 21, 2016 Fixed SparkR jobs no longer immediately fail with a "permission denied" error ( Spark JIRA issue ) Configuring logging for Spark jobs with the --driver-logging-levels option no longer interferes with Java driver options GCP Console The error shown for improperly-formatted initialization actions now properly appears with information about the problem Very long error messages now include a scrollbar so the Close button remains on-screen re ## January 7, 2016 #### Bugfixes Fixed issue in Dataproc version 0.1 that caused zero-byte SUCCESS and FAILURE files for each job to be continually re-written to Cloud Storage.

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit Request JSON body: { "job": { "placement": { "clusterName": " CLUSTER NAME ", }, "driverSchedulingConfig": { " memoryMb ]": DRIVER MEMORY , " vcores ": DRIVER VCORES }, "sparkJob": { "jarFileUris": "file:///usr/lib/spark/examples/jars/spark-examples.jar", "args": [ "10000" ], "mainClass": "org.apache.spark.examples.SparkPi" } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Spark job to estimate value of pi : gcloud dataproc jobs submit spark \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ --class=org.apache.spark.examples.SparkPi \ --jars=file:///usr/lib/spark/examples/jars/spark-examples.jar \ -- 1000 Spark wordcount job: gcloud dataproc jobs submit spark \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ --class=org.apache.spark.examples.JavaWordCount \ --jars=file:///usr/lib/spark/examples/jars/spark-examples.jar \ -- 'gs://apache-beam-samples/shakespeare/macbeth.txt' PySpark job to estimate value of pi : gcloud dataproc jobs submit pyspark \ file:///usr/lib/spark/examples/src/main/python/pi.py \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ -- 1000 Hadoop TeraGen MapReduce job: gcloud dataproc jobs submit hadoop \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ --jar file:///usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar \ -- teragen 1000 \ hdfs:///gen1/test REST Before using any of the request data, make the following replacements: PROJECT ID : Required.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit" Select-Object -Expand Content You should receive a JSON response similar to the following: { "reference": { "projectId": " PROJECT ID ", "jobId": "job-id" }, "placement": { "clusterName": " CLUSTER NAME ", "clusterUuid": "cluster-Uuid" }, "sparkJob": { "mainClass": "org.apache.spark.examples.SparkPi", "args": [ "1000" ], "jarFileUris": [ "file:///usr/lib/spark/examples/jars/spark-examples.jar" ] }, "status": { "state": "PENDING", "stateStartTime": "start-time" }, "jobUuid": "job-Uuid" } Python Install the client library Set up application default credentials Run the code See Setting Up a Python Development Environment .
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters Request JSON body: { "clusterName":" CLUSTER NAME ", "config": { "softwareConfig": { "imageVersion":"" }, "endpointConfig": { "enableHttpPortAccess": true }, "auxiliaryNodeGroups": [{ "nodeGroup":{ "roles":["DRIVER"], "nodeGroupConfig": { "numInstances": SIZE } }, "nodeGroupId": " NODE GROUP ID " }] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Customize your Spark job runtime environment with Docker on YARN \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Download the Miniconda3 installer. wget https://repo.anaconda.com/miniconda/Miniconda3-py39 4.10.3-Linux-x86 64.sh Python module example: cat >test util.py <<EOF def hello ( name ) : print ( "hello {}" .format ( name )) def read lines ( path ) : with open ( path ) as f: return f.readlines () EOF Build and push the image. docker build -t " ${ IMAGE } " . docker push " ${ IMAGE } " Create a Managed Service for Apache Spark cluster After creating a Docker image that customizes your Spark environment, create a Managed Service for Apache Spark cluster that will use your Docker image when running Spark jobs. gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --image-version= DP IMAGE \ --optional-components=DOCKER \ --properties=dataproc:yarn.docker.enable=true,dataproc:yarn.docker.image= DOCKER IMAGE \ other flags Replace the following; CLUSTER NAME : The cluster name.
- JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.driver.extraClassPath=/opt/spark/jars/ " JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.executor.extraClassPath=/opt/spark/jars/ " Optional: Set custom PySpark Python path only if there are customizations.
- DP IMAGE : Managed Service for Apache Spark image version must be 2.0.49 or later ( --image-version=2.0 will use a qualified minor version later than 2.0.49 ). --optional-components=DOCKER : Enables the Docker component on the cluster. --properties flag: dataproc:yarn.docker.enable=true : Required property to enable the Managed Service for Apache Spark Docker on YARN feature. dataproc:yarn.docker.image : Optional property that you can add to specify your DOCKER IMAGE using the following Container Registry image naming format: {hostname}/{project-id}/{image}:{tag} .
- JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.yarn.appMasterEnv.PYTHONPATH=/opt/python/packages" JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.executorEnv.PYTHONPATH=/opt/python/packages" Notes: See Launching Applications Using Docker Containers information on related properties. gcloud Submit the job to the cluster. gcloud dataproc jobs submit pyspark PYFILE \ --cluster= CLUSTER NAME \ --region= REGION \ --properties=${JOB PROPERTIES} Replace the following; PYFILE : The file path to your PySpark job file.

