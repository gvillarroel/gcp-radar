---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.189Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Customer-managed encryption keys on Compute Engine"
feature_slug: "customer-managed-encryption-keys-on-compute-engine"
latest_feature_date: "2018-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/cmek"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
keywords:
  - "customer"
  - "encryption"
  - "managed"
  - "keys"
  - "compute"
  - "engine"
  - "users"
---

# Customer-managed encryption keys on Compute Engine

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Customer-managed encryption keys on Compute Engine let users manage the encryption key for Persistent Disks attached to Dataproc cluster VMs.

## Extended Definition

Customer-managed encryption keys on Compute Engine let users manage the encryption key for Persistent Disks attached to Dataproc cluster VMs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)

## Supporting Pages

### "Encrypt data with customer-managed encryption keys \_|\_ Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Encrypt data with customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Dataproc Metastore.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- Under Encryption , click Customer-managed encryption key (CMEK) .

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read write https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full control tags[] string The Compute Engine network tags to add to all instances (see Tagging instances ). metadata map (key: string, value: string) Optional.
- You can test a node's role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget ): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ "${ROLE}" == 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi encryptionConfig object ( EncryptionConfig ) Optional.
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the command, below, to create a single-node Managed Service for Apache Spark cluster in the specified Compute Engine zone . gcloud dataproc clusters create ${CLUSTER} \ --project=${PROJECT} \ --region=${REGION} \ --single-node The above command installs the default cluster image version .
- Costs In this document, you use the following billable components of Google Cloud: Compute Engine Managed Service for Apache Spark Cloud Storage To generate a cost estimate based on your projected usage, use the pricing calculator .
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- If necessary, set up a project with the Managed Service for Apache Spark, Compute Engine, and Cloud Storage APIs enabled and the Google Cloud CLI installed on your local machine.

