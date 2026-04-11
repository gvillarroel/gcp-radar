---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.109Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Customer-managed encryption keys"
feature_slug: "customer-managed-encryption-keys"
latest_feature_date: "2018-06-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/cmek"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "let"
  - "users"
  - "manage"
  - "for"
---

# Customer-managed encryption keys

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Customer-managed encryption keys let users manage encryption keys for Dataproc Compute Engine VMs and the associated Cloud Storage bucket.

## Extended Definition

Customer-managed encryption keys let users manage encryption keys for Dataproc Compute Engine VMs and the associated Cloud Storage bucket.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)

## Supporting Pages

### "Encrypt data with customer-managed encryption keys \_|\_ Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Encrypt data with customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Dataproc Metastore.
- Import and export data from and to a CMEK-enabled service If you want your data to remain encrypted with a customer-managed key during an import, you must set CMEK on the Cloud Storage bucket before importing data from it.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- February 09, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.91 1.2.35 2.2.35 February 07, 2025 Change New Dataproc on Compute Engine subminor image versions: 2.0.131-debian10, 2.0.131-rocky8, 2.0.131-ubuntu18 2.1.79-debian11, 2.1.79-rocky8, 2.1.79-ubuntu20, 2.1.79-ubuntu20-arm 2.2.45-debian12, 2.2.45-rocky9, 2.2.45-ubuntu22 Announcement Spark UI for Dataproc Serverless Batches and Interactive sessions , which lets you to monitor and debug your serverless Spark workloads, is now available for CMEK (Customer-Managed Encryption Keys) and Assured Workloads .
- Cloud Dataproc users can now use Customer-Managed Encryption Keys (CMEK) to access protected BigQuery datasets and tables (see Writing a MapReduce Job with the BigQuery Connector for an example).
- June 27, 2018 Feature Announcing the Beta release of Cloud Dataproc Customer Managed Encryption Keys (CMEK) , a feature that allows you to create, use, and revoke the key encryption key (KEK) for Compute Engine VMs in your cluster and the Cloud Storage bucket used with Cloud Dataproc.
- October 09, 2018 Feature Announcing the General Availability (GA) release of Cloud Dataproc Customer Managed Encryption Keys on Compute Engine .

### "Create and manage Labels \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you scale up the cluster, all new primary and secondary workers will have the new labels. gcloud Command You can specify one or more labels to be applied to a Managed Service for Apache Spark cluster or job at creation or submit time using the Google Cloud CLI. gcloud dataproc clusters create args --labels environment=production,customer=acme gcloud dataproc jobs submit args --labels environment=production,customer=acme Once a Managed Service for Apache Spark cluster or job has been created, you can update the labels associated with that resource using the Google Cloud CLI. gcloud dataproc clusters update args --update-labels environment=production,customer=acme gcloud dataproc jobs update args --update-labels environment=production,customer=acme Similarly, you can use the Google Cloud CLI to filter Managed Service for Apache Spark resources by label using a filter expression of the following format: labels.<key=value> . gcloud dataproc clusters list \ --region= region \ --filter="status.state=ACTIVE AND labels.environment=production" gcloud dataproc jobs list \ --region= region \ --filter="status.state=ACTIVE AND labels.customer=acme" See the clusters.list and jobs.list Dataproc API documentation for more information on writing a filter expression.
- Label Description goog-dataproc-cluster-name User-specified cluster name goog-dataproc-cluster-uuid Unique cluster ID goog-dataproc-location Managed Service for Apache Spark regional cluster endpoint You can use these automatically applied labels in many ways, including: Searching and filtering for Managed Service for Apache Spark resources Filtering billing data to calculate Managed Service for Apache Spark costs What's next Learn how to create and update labels for projects using the Resource Manager.
- Common uses of labels Here are some common use cases for labels: Team or cost center labels : Add labels based on team or cost center to distinguish Managed Service for Apache Spark clusters and jobs owned by different teams (for example, team:research and team:analytics ).
- If you want to examine the JSON body of a Dataproc API cluster create or job submit request, you can construct the request on the appropriate Managed Service for Apache Spark page of the Google Cloud console, then click the Equivalent REST button at the bottom of the page.

