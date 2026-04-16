---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.884Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB connector-based connection enforcement"
feature_slug: "alloydb-connector-based-connection-enforcement"
latest_feature_date: "2023-08-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1.MetadataExchangeRequest.AuthType"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeRequest.AuthType"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType"
keywords:
  - "database access through connector"
  - "connector enforcement"
  - "connector-based access"
  - "database connector"
  - "AlloyDB Auth Proxy"
  - "connection enforcement"
  - "Auth Proxy"
  - "AlloyDB connectors"
---

# AlloyDB connector-based connection enforcement

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB supports enforcing database access through AlloyDB connectors, such as the Auth Proxy, to improve connection security.

## Extended Definition

AlloyDB supports enforcing database access through AlloyDB connectors, such as the Auth Proxy, to improve connection security.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1.MetadataExchangeRequest.AuthType](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1.MetadataExchangeRequest.AuthType)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeRequest.AuthType](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeRequest.AuthType)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType)

## Supporting Pages

### "About the AlloyDB Auth Proxy \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview](https://docs.cloud.google.com/alloydb/docs/auth-proxy/overview)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How the AlloyDB Auth Proxy authorizes IAM principals To authorize a client's connection to an AlloyDB instance, the Auth Proxy client authenticates to Google Cloud using IAM principal credentials on the client, and then validates that the IAM principal has the Cloud AlloyDB Client ( roles/alloydb.client ) and Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) IAM roles.
- Benefits of using the AlloyDB Auth Proxy The Auth Proxy provides these advantages over connecting clients directly to AlloyDB databases: IAM-based connection authorization (AuthZ): The Auth Proxy uses the credentials and permissions of an Identity and Access Management (IAM) principal to authorize connections to AlloyDB instances.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback About the AlloyDB Auth Proxy Stay organized with collections Save and categorize content based on your preferences.
- When an application connects to the AlloyDB Auth Proxy, it checks whether an existing connection between it and the target AlloyDB instance is available.

### "Enum MetadataExchangeRequest.AuthType (0.66.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1.MetadataExchangeRequest.AuthType](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1.MetadataExchangeRequest.AuthType)
- Source ID: `site-java-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Enum MetadataExchangeRequest.AuthType (0.66.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeRequest.AuthType](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeRequest.AuthType)
- Source ID: `site-java-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Enum MetadataExchangeRequest.AuthType (0.66.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType)
- Source ID: `site-java-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

