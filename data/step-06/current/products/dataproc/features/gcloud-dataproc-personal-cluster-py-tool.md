---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:07:05.553Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "gcloud_dataproc_personal_cluster.py tool"
feature_slug: "gcloud-dataproc-personal-cluster-py-tool"
latest_feature_date: "2021-01-15"
deprecation_date: "2021-01-15"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud"
  - "https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster"
keywords:
  - "gcloud"
  - "dataproc"
  - "personal"
  - "cluster"
  - "py"
  - "tool"
  - "auth"
  - "beta"
---

# gcloud_dataproc_personal_cluster.py tool

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The gcloud_dataproc_personal_cluster.py tool for personal auth beta is no longer supported for new images; deprecated on 2021-01-15.

## Extended Definition

The gcloud_dataproc_personal_cluster.py tool for personal auth beta is no longer supported for new images; deprecated on 2021-01-15.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc](https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud)
- [https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster](https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster)

## Supporting Pages

### "Attach a Managed Service for Apache Spark cluster or a self-managed cluster\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc](https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc)
- Source ID: `site-docs-root-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you're using Dataproc Personal Cluster Authentication , your Dataproc Metastore must use the gRPC endpoint protocol.
- There are two ways that you can attach a Managed Service for Apache Spark cluster using the ENDPOINT URI and WAREHOUSE DIR properties: Option 1: While creating a Managed Service for Apache Spark cluster When creating a Managed Service for Apache Spark cluster, use the properties flag with the following Hive configuration. gcloud dataproc clusters create CLUSTER NAME \ --properties="hive:hive.metastore.uris= ENDPOINT URI ,hive:hive.metastore.warehouse.dir= WAREHOUSE DIR /hive-warehouse" Replace the following: CLUSTER NAME : the name of your new Managed Service for Apache Spark cluster.
- When it's ready for use, the status changes to Running . gcloud CLI To create a cluster and attach a Dataproc Metastore, run the following gcloud dataproc clusters create command: gcloud dataproc clusters create CLUSTER NAME \ --dataproc-metastore=projects/ PROJECT ID /locations/ LOCATION /services/ SERVICE \ --region= LOCATION \ --scopes= SCOPES Replace the following: CLUSTER NAME : the name of your new Managed Service for Apache Spark cluster.
- Required Roles To get the permissions that you need to create a Dataproc Metastore and a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: To grant full control of Dataproc Metastore resources, either: Dataproc Metastore Editor ( roles/metastore.editor ) on the user account or service account Dataproc Metastore Admin ( roles/metastore.admin ) on the user account or service account To create a Managed Service for Apache Spark cluster: ( roles/dataproc.worker ) on the Managed Service for Apache Spark VM service account To grant read and write permissions to the Hive warehouse directory: ( roles/storage.objectAdmin ) on the Managed Service for Apache Spark VM service account For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Create a cluster by using the gcloud CLI \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update a cluster To change the number of workers in the cluster to five, run the following command: gcloud dataproc clusters update example-cluster \ --region= REGION \ --num-workers 5 The command output displays cluster details: workerConfig: ... instanceNames: - example-cluster-w-0 - example-cluster-w-1 - example-cluster-w-2 - example-cluster-w-3 - example-cluster-w-4 numInstances: 5 statusHistory: ... - detail: Add 3 workers.
- Submit a job To submit a sample Spark job that calculates a rough value for pi , run the following gcloud Managed Service for Apache Spark jobs submit spark command: gcloud dataproc jobs submit spark --cluster example-cluster \ --region= REGION \ --class org.apache.spark.examples.SparkPi \ --jars file:///usr/lib/spark/examples/jars/spark-examples.jar -- 1000 Notes: Replace the following: REGION : Specify the cluster region.
- To decrease the number of worker nodes to the original value of 2 , run the following command: gcloud dataproc clusters update example-cluster \ --region= REGION \ --num-workers 2 Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.
- This page shows you how to use the Google Cloud CLI gcloud command-line tool to create a Managed Service for Apache Spark cluster, run a Apache Spark job in the cluster, then modify the number of workers in the cluster.

### "Manage a cluster \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster](https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster)
- Source ID: `site-iam-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete a cluster You can delete a cluster via a Dataproc API clusters.delete HTTP or programmatic request, using the Google Cloud CLI gcloud command-line tool locally in a terminal window or in Cloud Shell , or from the Google Cloud console .
- Google Cloud CLI To delete a Managed Service for Apache Spark cluster, use the gcloud CLI gcloud dataproc clusters delete command locally in a terminal window or in Cloud Shell . gcloud dataproc clusters delete cluster-name \ --region= region REST API Use the Managed Service for Apache Spark clusters.delete API to delete a cluster.
- Update a cluster You can update a cluster by issuing a Dataproc API clusters.patch request, running a gcloud dataproc clusters update command in a local terminal window or in Cloud Shell , or by editing cluster parameters from the Configuration tab of the Cluster details page for the cluster in the Google Cloud console .
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

