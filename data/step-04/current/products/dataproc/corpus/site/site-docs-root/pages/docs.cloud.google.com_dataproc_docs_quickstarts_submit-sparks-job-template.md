---
title: "Quickstart: Submit a Spark job by using a template \_|\_ Managed Service for\
  \ Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/quickstarts/submit-sparks-job-template
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/quickstarts/submit-sparks-job-template
  title: "Quickstart: Submit a Spark job by using a template \_|\_ Managed Service\
    \ for Apache Spark \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Submit a Spark job by using a template
This page shows you how to use an Google APIs Explorer template to
run a simple Spark job on an existing Managed Service for Apache Spark cluster.
For other ways to submit a job to a Managed Service for Apache Spark cluster, see:
Create a cluster by using the Google Cloud console
Create a cluster by using the Google Cloud CLI
Create a cluster by using client libraries
Before you begin
Before you can run a Managed Service for Apache Spark job, you must create a cluster
of one or more virtual machines (VMs) to run it on. You can use the
APIs Explorer , the
Google Cloud console ,
the gcloud CLI
gcloud command-line tool,
or the Quickstarts using Cloud Client Libraries
to create a cluster.
Submit a job
To submit a sample Apache Spark
job that calculates a rough value for
pi , fill in and
execute the Google APIs Explorer Try this API template.
Note: The region , clusterName and job parameter values are filled in for you.
Confirm or replace the region and clusterName parameter values to match
your cluster's region and name. The job
parameter values are required to run the a Spark job that is pre-installed on the
Managed Service for Apache Spark cluster's master node.
Request parameters:
Insert your projectId .
Specify the region
where your cluster is located (confirm or replace "us-central1"). Your cluster's
region is listed on the Managed Service for Apache Spark
Clusters page in the
Google Cloud console.
Request body:
job.placement.clusterName :
The name of the cluster where the job will run (confirm or replace "example-cluster").
job.sparkJob.args :
"1000", the number of job tasks.
job.sparkJob.jarFileUris :
"file:///usr/lib/spark/examples/jars/spark-examples.jar". This is
the local file path on the Managed Service for Apache Spark cluster's master node
where the jar that contains the Spark Scala job code is installed.
job.sparkJob.mainClass :
"org.apache.spark.examples.SparkPi". The is the main method of
the job's pi calculation Scala application.
Click EXECUTE . The first time you
run the API template, you may be asked to choose and sign into
your Google account, then authorize the Google APIs Explorer to access your
account. If the request is successful, the JSON response
shows that job submission request is pending.
To view job output, open the
Managed Service for Apache Spark Jobs page
in the Google Cloud console, then click the top (most recent) Job ID.
Click "LINE WRAP" to ON to bring lines that exceed the right margin into view.
...
Pi is roughly 3.141804711418047
...
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
If you don't need the cluster to explore the other quickstarts or to run
other jobs, use the
APIs Explorer , the
Google Cloud console ,
the gcloud CLI
gcloud command-line tool,
or the Cloud Client Libraries
to delete the cluster.
What's next
Learn how to update a Managed Service for Apache Spark cluster by using a template .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
