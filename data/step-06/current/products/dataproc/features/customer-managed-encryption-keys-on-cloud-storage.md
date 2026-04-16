---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.671Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Customer-managed encryption keys on Cloud Storage"
feature_slug: "customer-managed-encryption-keys-on-cloud-storage"
latest_feature_date: "2018-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/cmek"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "storage"
  - "let"
  - "users"
  - "manage"
---

# Customer-managed encryption keys on Cloud Storage

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Customer-managed encryption keys on Cloud Storage let users manage the encryption key for the bucket used by Dataproc for cluster metadata and job driver output.

## Extended Definition

Customer-managed encryption keys on Cloud Storage let users manage the encryption key for the bucket used by Dataproc for cluster metadata and job driver output.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### "Encrypt data with customer-managed encryption keys \_|\_ Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Encrypt data with customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Dataproc Metastore.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- Import and export data from and to a CMEK-enabled service If you want your data to remain encrypted with a customer-managed key during an import, you must set CMEK on the Cloud Storage bucket before importing data from it.

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Costs In this document, you use the following billable components of Google Cloud: Compute Engine Managed Service for Apache Spark Cloud Storage To generate a cost estimate based on your projected usage, use the pricing calculator .
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Use the Cloud Storage connector with Apache Spark Stay organized with collections Save and categorize content based on your preferences.
- If necessary, set up a project with the Managed Service for Apache Spark, Compute Engine, and Cloud Storage APIs enabled and the Google Cloud CLI installed on your local machine.
- SparkContext () lines = sc . textFile ( sys . argv [ 1 ] ) words = lines . flatMap ( lambda line : line . split ()) wordCounts = words . map ( lambda word : ( word , 1 )). reduceByKey ( lambda count1 , count2 : count1 + count2 ) wordCounts . saveAsTextFile ( sys . argv [ 2 ] ) Submit the job Run the following gcloud command to submit the wordcount job to your Managed Service for Apache Spark cluster.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Cloud Storage URI of the keystore file used for SSL encryption.
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).
- If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

