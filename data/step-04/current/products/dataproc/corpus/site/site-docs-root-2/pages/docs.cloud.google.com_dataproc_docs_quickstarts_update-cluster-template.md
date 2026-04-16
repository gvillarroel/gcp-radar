---
title: "Quickstart: Update a cluster by using a template \_|\_ Managed Service for\
  \ Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-template
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-template
  title: "Quickstart: Update a cluster by using a template \_|\_ Managed Service for\
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
Stay organized with collections
Save and categorize content based on your preferences.
Update a cluster by using a template
This page shows you how to use an Google APIs Explorer template to
update a Managed Service for Apache Spark cluster to change the number of workers in a
cluster. Scaling a cluster
up to include more workers is a common task when additional workers are needed
to process larger jobs.
For other ways to update a Managed Service for Apache Spark cluster, see:
Create a cluster by using the Google Cloud console
Create a cluster by using the Google Cloud CLI
Create a cluster by using client libraries
Before you begin
This quickstart assumes you have already created a Managed Service for Apache Spark cluster.
You can use the
APIs Explorer , the
Google Cloud console ,
the gcloud CLI
gcloud command-line tool,
or the Quickstarts using Cloud Client Libraries
to create a cluster.
Update a cluster
To update the number of workers in your cluster, fill in and execute the
Google APIs Explorer Try this API template.
Note: The region , clusterName and updateMask and
config.workerConfig.numInstances parameter values are filled in for you.
Confirm or replace the region and clusterName parameter values to match
your cluster's region and name. The updateMask parameter value is required to
update the number of workers in your cluster. You can accept or change
the config.workerConfig.numInstances parameter value.
Request parameters:
Insert your projectId .
Specify the region
where your cluster is located (confirm or replace "us-central1").
Your cluster's region is listed on the
Managed Service for Apache Spark Clusters
page in the Google Cloud console.
Specify the clusterName
of the existing cluster that you are updating (confirm or replace "example-cluster").
updateMask :
"config.worker_config.num_instances". This is the JSON PATH
relative to the Cluster
resource to the numInstances parameter to be updated (see the Request body instructions).
Request body:
config.workerConfig.numInstances :
("3": the new number of workers). You can change this value to add fewer
or more workers. For example, if your standard cluster has the default
number of 2 workers, specifying "3" will add 1 worker; specifying "4 will add 2).
A standard Managed Service for Apache Spark cluster must have at least 2 workers.
Click EXECUTE . The first time you
run the API template, you may be asked to choose and sign into
your Google account, then authorize the Google APIs Explorer to access your
account. If the request is successful, the JSON response
shows that cluster update is pending.
To confirm that the number of workers in the cluster has been updated,
open the Managed Service for Apache Spark
Clusters page in the Google Cloud console
and view the cluster's Total worker nodes column. You may need
to click REFRESH at the top of the page to view the updated value after the
cluster update completes.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
If you don't need the cluster to explore the other quickstarts or to run
other jobs, use the
APIs Explorer , the
Google Cloud console ,
the gcloud CLI
gcloud command-line tool,
or the Quickstarts using Cloud Client Libraries
to delete the cluster.
What's next
You can use this quickstart template to restore the cluster to its previous
workerConfig.numInstances value.
Learn how to write and run a Spark Scala job .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
