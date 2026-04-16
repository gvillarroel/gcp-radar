---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.590Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Ranger Cloud Storage downscoping"
feature_slug: "ranger-cloud-storage-downscoping"
latest_feature_date: "2024-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
keywords:
  - "ranger"
  - "storage"
  - "downscoping"
  - "dataproc"
  - "compute"
  - "engine"
  - "integration"
  - "supports"
---

# Ranger Cloud Storage downscoping

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc on Compute Engine Ranger Cloud Storage integration supports downscoping.

## Extended Definition

Dataproc on Compute Engine Ranger Cloud Storage integration supports downscoping.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).
- If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.
- The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read write https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full control tags[] string The Compute Engine network tags to add to all instances (see Tagging instances ). metadata map (key: string, value: string) Optional.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Enable the Dataproc, Compute Engine, and Cloud Storage APIs.
- Enable the Dataproc, Compute Engine, and Cloud Storage APIs.
- Run the command, below, to create a single-node Managed Service for Apache Spark cluster in the specified Compute Engine zone . gcloud dataproc clusters create ${CLUSTER} \ --project=${PROJECT} \ --region=${REGION} \ --single-node The above command installs the default cluster image version .
- Costs In this document, you use the following billable components of Google Cloud: Compute Engine Managed Service for Apache Spark Cloud Storage To generate a cost estimate based on your projected usage, use the pricing calculator .

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Enable the Dataproc API, Compute Engine API, and Cloud Storage APIs.
- Enable the Dataproc API, Compute Engine API, and Cloud Storage APIs.
- You can avoid this issue by including the following command in your customization script to clear cached credentials. rm -r /root/.gsutil /root/.config/gcloud --zone : the Compute Engine zone where generate custom image.py will create a temporary VM to use to create your custom image. --gcs-bucket : a URI, in the format gs:// BUCKET NAME , that points to your Cloud Storage bucket . generate custom image.py writes log files to this bucket.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

