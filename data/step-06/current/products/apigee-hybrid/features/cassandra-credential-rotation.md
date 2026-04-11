---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.244Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Cassandra credential rotation"
feature_slug: "cassandra-credential-rotation"
latest_feature_date: "2024-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
keywords:
  - "rollback during secret rotation"
  - "rotation rollback before cleanup job"
  - "K8s secret rotation"
  - "credential cleanup job"
  - "Kubernetes secret rotation"
  - "Cassandra creds rotation"
  - "Cassandra credential rotation"
  - "Vault credential rotation"
---

# Cassandra credential rotation

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Apigee Hybrid v1.14 introduces rotation of Cassandra credentials in Kubernetes secrets and supports rollback before cleanup job initiation for both Vault and Kubernetes secrets.

## Extended Definition

Apigee Hybrid v1.14 introduces rotation of Cassandra credentials in Kubernetes secrets and supports rollback before cleanup job initiation for both Vault and Kubernetes secrets.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)

## Supporting Pages

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- For information on new installations, see The big picture . v1.13.1 Feature Cassandra credential rotation in Vault Starting in version v1.3.1, You can set up automatic Cassandra credential rotation when your credentials are stored in Hashicorp Vault.
- See: Enable Control Plane access Configure hybrid to use the new data pipeline (v1.14.0 only) v1.14.0 Feature Cassandra credential rotation Starting in version v1.14, you can rotate Cassandra credentials in Kubernetes secrets.
- 397693324 ESS and non-ESS Multi-region Cassandra credential rotation could fail in every region except the first.

