---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.448Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Cloud KMS Autokey"
feature_slug: "cloud-kms-autokey"
latest_feature_date: "2025-04-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest"
  - "https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run"
keywords:
  - "autokey"
  - "encryption"
  - "management"
  - "supports"
---

# Cloud KMS Autokey

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports Cloud KMS Autokey for encryption key management.

## Extended Definition

Cloud Run supports Cloud KMS Autokey for encryption key management.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview)
- [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)
- [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)

## Supporting Pages

### "google-cloud-run overview (0.88.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview)
- Source ID: `site-java-reference`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The example below demonstrates how you would import the BOM and include the google-cloud-run artifact. <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.79.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-run</artifactId> </dependency> </dependencies> Gradle BOMs are supported by default in Gradle 5.x or later.
- Managing Library Versions We recommend using the com.google.cloud:libraries-bom installation method detailed above to streamline dependency management across multiple Cloud Java client libraries.
- Maven Import the BOM in the dependencyManagement section of your pom.xml file.

### "Python Client for Cloud Run \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)
- Source ID: `site-python-reference`
- Final score: 22
- Re-rank relevance: N/A

### Configure IAP for Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

