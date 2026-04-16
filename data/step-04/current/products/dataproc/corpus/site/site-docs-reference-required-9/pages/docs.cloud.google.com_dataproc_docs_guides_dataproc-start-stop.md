---
title: "Stop and start clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop
  title: "Stop and start clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\
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
Stop and start clusters
Stay organized with collections
Save and categorize content based on your preferences.
After you create a cluster, you can stop it, then restart it when you need
it. Stopping an idle cluster avoids incurring charges
and avoids the need to delete an idle cluster, then create a cluster with the
same configuration later.
Notes:
The cluster start and stop feature is available on clusters created with
images released on or after the following image versions:
1.4.35-debian10/ubuntu18
1.5.10-debian10/ubuntu18
2.0.0-RC6-debian10/ubuntu18
Stopping individual cluster nodes is not recommended since the status of
a stopped VM may not be in sync with cluster status, which can result in
errors.
Clusters using flexible VMs
cannot use the start and stop feature.
Note: To schedule stopping a cluster, see
Cluster scheduled stop .
Stopping a cluster
Stopping a cluster stops all cluster Compute Engine VMs. You don't
pay for VMs while they are stopped. However, you continue to pay for
any associated cluster resources, such as
persistent disks .
Notes:
Running operations: If a cluster has running operations,
such as update or diagnose operations, the stop request will fail.
Running jobs: If a cluster has running jobs, the stop request will
succeed: the VMs will stop, and the running jobs will fail.
Stop Response: When the stop request returns a stop operation,
the cluster will be in a STOPPING state, and no further jobs will be allowed
to be submitted ( SubmitJob requests will fail).
Autoscaling: If you stop a cluster that has
autoscaling enabled,
the Managed Service for Apache Spark autoscaler will stop scaling the cluster. It will
resume scaling the cluster once the cluster is restarted. If you enable
autoscaling on a stopped cluster, the autoscaling policy will take effect
once the cluster has been restarted.
Monitoring the stop operation
You can run
gcloud dataproc operations describe operation-id
to monitor the long-running cluster stop operation. You can use the
gcloud dataproc clusters describe cluster-name
command to monitor the transitioning of the cluster's status from
RUNNING to STOPPING to STOPPED .
Limitations
You cannot stop:
clusters with secondary workers
clusters with local ssds
When a cluster is stopped, you cannot:
update the cluster
submit jobs to the cluster
access notebooks running on the cluster using the
Managed Service for Apache Spark component gateway
Starting a cluster
When you restart a stopped cluster, any initialization actions won't be re-run.
Initialization actions only run on cluster nodes when the cluster is
created or when nodes are added when the cluster is scaled up.
After the start operation completes, you can immediately submit jobs to the
cluster. However, execution of the jobs can be delayed—approximately
30 seconds—to allow HDFS and YARN to become operational.
Important: When a cluster restarts, its VMs and other resources are
reprovisioned. Resource provisioning is subject to availability,
and regional stockouts can cause a cluster restart to fail. To aid
restart provisioning, you can
reserve cluster resources .
How to stop and start a cluster
You can stop and start a cluster using the Google Cloud console,
gcloud CLI, or the Managed Service for Apache Spark API.
Google Cloud console
Click the cluster name from the Managed Service for Apache Spark
Clusters page in the
Google Cloud console, then click STOP to stop and START to start the cluster.
gcloud CLI
Stop a cluster
gcloud dataproc clusters stop CLUSTER_NAME \
--region= REGION
Start a cluster
gcloud dataproc clusters start CLUSTER_NAME \
--region= REGION
REST API
Stop a cluster
Submit a
clusters.stop
request.
Start a cluster
Submit a
clusters.start
request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
