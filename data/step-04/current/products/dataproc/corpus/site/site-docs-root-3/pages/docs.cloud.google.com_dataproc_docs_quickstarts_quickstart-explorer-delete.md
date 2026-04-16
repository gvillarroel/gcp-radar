---
title: "APIs Explorer Quickstart\u2014Delete a cluster \_|\_ Managed Service for Apache\
  \ Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/quickstarts/quickstart-explorer-delete
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/use-secure-tags
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/quickstarts/quickstart-explorer-delete
  title: "APIs Explorer Quickstart\u2014Delete a cluster \_|\_ Managed Service for\
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
APIs Explorer Quickstart—Delete a cluster
This page shows you how to use an Google APIs Explorer template to delete a Managed Service for Apache Spark cluster.
For other ways to submit a job to a Managed Service for Apache Spark cluster, see:
Quickstart Using the Console
Quickstart using the Google Cloud CLI
Quickstarts using Cloud Client Libraries
Before you begin
This quickstart assumes you have already created a Managed Service for Apache Spark cluster.
You can use the
APIs Explorer , the
Google Cloud console ,
the gcloud CLI
gcloud command-line tool,
or the Quickstarts using Cloud Client Libraries to
create a cluster.
Delete a cluster
To delete a cluster, fill in and execute the Google APIs Explorer Try this API
template.
Note: The region and clusterName parameter values are filled in for you.
Confirm or replace these parameter values to match your cluster's region and name.
Request parameters:
Insert your projectId .
Specify the region
where your cluster is located (confirm or replace "us-central1").
Your cluster's region is listed on the
Managed Service for Apache Spark Clusters
page in the Google Cloud console.
Specify the
clusterName
of the existing cluster that you are deleting (confirm or replace
"example-cluster").
Click EXECUTE . The first time you
run the API template, you may be asked to choose and sign into
your Google account, then authorize the Google APIs Explorer to access your
account. If the request is successful, the JSON response
shows that cluster update is pending.
To confirm that the cluster is being deleted, open the Managed Service for Apache Spark
Clusters page in the Google Cloud console.
What's next
Browse the Managed Service for Apache Spark tutorials .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
