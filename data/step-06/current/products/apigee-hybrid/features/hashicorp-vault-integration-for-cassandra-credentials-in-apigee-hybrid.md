---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.251Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "HashiCorp Vault integration for Cassandra credentials in Apigee hybrid"
feature_slug: "hashicorp-vault-integration-for-cassandra-credentials-in-apigee-hybrid"
latest_feature_date: "2023-11-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
keywords:
  - "vault integration"
  - "credential storage"
  - "preview feature"
  - "Cassandra credentials"
  - "Vault for Cassandra"
  - "HashiCorp Vault"
  - "Cassandra vault"
  - "v1.11.0"
---

# HashiCorp Vault integration for Cassandra credentials in Apigee hybrid

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

As of v1.11.0, Apigee hybrid supports storing Cassandra credentials in HashiCorp Vault, with this integration available as a preview feature.

## Extended Definition

As of v1.11.0, Apigee hybrid supports storing Cassandra credentials in HashiCorp Vault, with this integration available as a preview feature.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)

## Supporting Pages

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The new HeaderName element allows you to specify the name of a different header to hold that bearer token. v1.11.0 Feature Vault integration for Cassandra credentials (preview) Starting in version v1.11.0, you can store Cassandra credentials in Hashicorp Vault.
- The default value is 75. (Fixed in Apigee hybrid v 1.12.1) 339849002 Hashicorp Vault integration issues fixed for Google Service Account for Cassandra Backup/Restore. (Fixed in Apigee hybrid v 1.12.0-hotfix.1) 324779388 Improved error handling for backup and restore. (Fixed in Apigee hybrid v 1.12.1) 311489774 Removed inclusion of Java in Cassandra client image.. (Fixed in Apigee hybrid v 1.12.1) 310338146 Fixed invalid download directory output from the create-service-account tool. (Fixed in Apigee hybrid v 1.12.1) 300135626 Removed inclusion of Java in Cassandra Backup Utility image. (Fixed in Apigee hybrid v 1.12.1) 297539870 HTTPTargetConnection property io.timeout.millis is now honored correctly when using websockets. (Fixed in 1.11.2-hotfix.2) 239523766 Remove "Unable to evaluate jsonVariable, returning null" logging string from ExtractVariables Policy (Fixed in Apigee hybrid v 1.12.1) 181569113 Fixed an issue in new debug session creation. (Fixed in Apigee hybrid v 1.11.2) v1.13.0 Security Bug ID Description N/A Security fixes for apigee-asm-istiod .
- See Rotating Cassandra credentials in Hashicorp Vault . v1.13.1 Feature New analytics and debug data pipeline for data residency-enabled orgs Starting in v1.13.1 hybrid organizations created with data residency enabled must use the new data pipeline to collect analytics and debug data and allow various runtime components to write data directly to our control plane.
- Vault integration is in preview as of the Apigee hybrid 1.11.0 release. v1.11.0 Fixed Bug ID Description 295929616 Installation of Hybrid 1.10.x would fail on OpenShift due to out of memory issues. (Fixed in Apigee hybrid v1.10.3) 294069799 Updated the security context settings for the Apigee Hybrid Backup and Restore pod.

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- When unset, Apigee hybrid uses either the usernames and passwords stored in: cassandra.auth.admin.password cassandra.auth.ddl.password cassandra.auth.default.password cassandra.auth.dml.password cassandra.auth.jmx.password cassandra.auth.jmx.username cassandra.auth.jolokia.password cassandra.auth.jolokia.username or the Kubernetes secret stored in: cassandra.auth.secret See Storing Cassandra secrets in Hashicorp Vault for instructions to create the policy. cassandra.backup.cloudProvider Advanced Introduced in version: 1.0.0 Default value: GCP Chart: apigee-datastore The name of a backup provider.
- See Storing service account keys in Hashicorp Vault . envs[].serviceAccountSecretRefs.runtime Basic Introduced in version: 1.4.0 Default value: None Chart: apigee-env The name of a Kubernetes secret .
- See Storing service account keys in Hashicorp Vault . ao Apigee Operators (AO) creates and updates low level Kubernetes and Istio resources that are required to deploy and maintain a component.
- When set, it must match the SecretProviderClass which references the external secret provider, like Hashicorp Vault.

