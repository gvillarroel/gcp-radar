---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.149Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cooperative multi-tenancy user mapping"
feature_slug: "cooperative-multi-tenancy-user-mapping"
latest_feature_date: "2020-10-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
  - "https://docs.cloud.google.com/dataproc/docs/concepts/overview"
keywords:
  - "cooperative"
  - "tenancy"
  - "mapping"
  - "account"
  - "multi"
  - "supports"
  - "user"
---

# Cooperative multi-tenancy user mapping

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports user-to-service-account mappings for cooperative multi-tenancy when accessing Cloud Storage through the connector.

## Extended Definition

Dataproc supports user-to-service-account mappings for cooperative multi-tenancy when accessing Cloud Storage through the connector.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- [https://docs.cloud.google.com/dataproc/docs/concepts/overview](https://docs.cloud.google.com/dataproc/docs/concepts/overview)

## Supporting Pages

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### "Managed Service for Apache Spark cluster deployment overview \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/overview](https://docs.cloud.google.com/dataproc/docs/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- IdentityConfig Identity related configuration, including service account based secure multi-tenancy user mappings.
- Identity related configuration, including service account based secure multi-tenancy user mappings.
- JSON representation { "userServiceAccountMapping" : { string : string , ... } } Fields userServiceAccountMapping map (key: string, value: string) Required.
- The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read write https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full control tags[] string The Compute Engine network tags to add to all instances (see Tagging instances ). metadata map (key: string, value: string) Optional.

