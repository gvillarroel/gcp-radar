---
title: "Cluster caching \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataproc/docs/concepts/cluster-caching
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/concepts/cluster-caching
  title: "Cluster caching \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
    \ Documentation"
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
Cluster caching
Stay organized with collections
Save and categorize content based on your preferences.
When you enable Managed Service for Apache Spark cluster caching, the cluster caches
Cloud Storage data frequently accessed by your Spark jobs.
Benefits
Improved performance: Caching can improve job performance by reducing the amount
of time spent retrieving data from storage.
Reduced storage costs: Since hot data is cached on local disk,
fewer API calls are made to storage to retrieve data.
Spark job applicability : When cluster caching is enabled on a cluster,
it applies to all Spark jobs run on the cluster, whether submitted to the
Managed Service for Apache Spark service or run independently on the cluster.
Limitations and requirements
Caching applies to Managed Service for Apache Spark Spark jobs only.
Only Cloud Storage data is cached.
Caching only applies to clusters that meet the following requirements:
The cluster has one master and n workers
( High Availability (HA) and single node clusters are not supported).
This feature is available in Managed Service for Apache Spark
image versions
2.0.72+ , 2.1.20+ , and 2.2.0+ .
Each cluster node must have
local SSDs
attached with the
NVME (Non-Volatile Memory Express)
interface (Persistent Disks (PDs) are not supported). Data is cached on NVME
local SSDs only.
The cluster uses the
default VM service account
for authentication. Custom VM service accounts
are not supported.
Enable cluster caching
You can enable cluster caching when you create a Managed Service for Apache Spark cluster
using the Google Cloud console, Google Cloud CLI, or the Dataproc API.
Google Cloud console
Open the Managed Service for Apache Spark
Create a cluster
page in the Google Cloud console.
The Set up cluster panel is selected. In the
Spark performance enhancements section, select
Enable Google Cloud Storage caching .
After confirming and specifying cluster details in the cluster create panels,
click Create .
gcloud CLI
Run the gcloud dataproc clusters create
command locally in a terminal window or in
Cloud Shell
using the dataproc:dataproc.cluster.caching.enabled=true
cluster property .
Example:
gcloud dataproc clusters create CLUSTER_NAME \
--region= REGION \
--properties dataproc:dataproc.cluster.caching.enabled=true \
--num-master-local-ssds=2 \
--master-local-ssd-interface=NVME \
--num-worker-local-ssds=2 \
--worker-local-ssd-interface=NVME \
other args ...
REST API
Set SoftwareConfig.properties
to include the "dataproc:dataproc.cluster.caching.enabled": "true"
cluster property
as part of a
clusters.create
request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
