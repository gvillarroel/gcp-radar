---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.214Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cluster VM tags"
feature_slug: "cluster-vm-tags"
latest_feature_date: "2016-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-template"
keywords:
  - "tags"
  - "applying"
  - "creation"
  - "compute"
  - "supports"
  - "engine"
  - "cluster"
---

# Cluster VM tags

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Cluster creation supports applying Google Compute Engine network tags to Dataproc virtual machine instances.

## Extended Definition

Cluster creation supports applying Google Compute Engine network tags to Dataproc virtual machine instances.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-template](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-template)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read write https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full control tags[] string The Compute Engine network tags to add to all instances (see Tagging instances ). metadata map (key: string, value: string) Optional.
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/nodeGroups/node-group-1 projects/[projectId]/zones/[zone]/nodeGroups/node-group-1 node-group-1 ShieldedInstanceConfig Shielded Instance Config for clusters using Compute Engine Shielded VMs .
- If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.

### "Create a cluster \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Console Open the Managed Service for Apache Spark Create a cluster page in the Google Cloud console in your browser, then click Create in the cluster on Compute engine row in the Create a Dataproc cluster on Compute Engine page.
- Cluster region: You must specify a Compute Engine region for the cluster, such as us-east1 or europe-west1 , to isolate cluster resources, such as VM instances and cluster metadata stored in Cloud Storage, within the region.
- Before using any of the request data, make the following replacements: CLUSTER NAME : cluster name PROJECT : Google Cloud project ID REGION : An available Compute Engine region where the cluster will be created.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "Quickstart: Create a Managed Service for Apache Spark cluster by using a\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-template](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-template)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- To confirm cluster creation, open the Managed Service for Apache Spark Clusters page in the Google Cloud console.
- Important: You must grant this role to the Compute Engine default service account, not to your user account.

