---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.558Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "gcloud beta alloydb connect command"
feature_slug: "gcloud-beta-alloydb-connect-command"
latest_feature_date: "2026-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha"
keywords:
  - "gcloud beta alloydb connect"
  - "psql connection"
  - "AlloyDB Auth Proxy"
  - "secure database connection"
  - "alloydb connect command"
  - "alloydb instances connect"
  - "alloydb connect"
  - "AlloyDB Connect"
---

# gcloud beta alloydb connect command

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The new gcloud beta AlloyDB connect command provides a simplified, secure way to connect to AlloyDB instances using the AlloyDB Auth Proxy and psql.

## Extended Definition

`gcloud beta alloydb connect` is a Beta preview command for AlloyDB for PostgreSQL, announced in the AlloyDB release notes on April 3, 2026. The command is tied to AlloyDB connector-based connectivity and is positioned to support more secure instance access by routing connections through AlloyDB connectors such as the AlloyDB Auth Proxy. The provided connector API references also indicate that AlloyDB connectors perform metadata exchange with the server after TLS handshake, which underpins the secure connection flow but do not describe the CLI command behavior in detail.

## Evidence Summary

The release notes confirm the feature’s preview launch date and its security rationale via AlloyDB connectors/Auth Proxy, while the Java connector references provide supporting details on connector protocol behavior.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- April 03, 2026 Feature The gcloud beta alloydb connect command is now available in Preview .
- Feature You can now improve connection security by enforcing applications to connect to AlloyDB instances through AlloyDB connectors , such as the Auth Proxy.
- January 21, 2026 Issue Automatic IAM authentication is unavailable when you use managed connection pooling with the AlloyDB Auth Proxy and Language Connectors.
- Version 1.5.0 of the AlloyDB Auth Proxy client might fail to connect to AlloyDB instances created before mid-November, 2023.

### "Package com.google.cloud.alloydb.connectors.v1 (0.66.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1)
- Source ID: `site-java-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Metadata Exchange Request Message used by AlloyDB connectors to exchange client and connection metadata with the server after a successful TLS handshake.
- Builder Message used by AlloyDB connectors to exchange client and connection metadata with the server after a successful TLS handshake.
- The sole purpose of this message is for the use of AlloyDB connectors.
- The sole purpose of this message is for the use of AlloyDB connectors.

### "Package com.google.cloud.alloydb.connectors.v1alpha (0.66.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha)
- Source ID: `site-java-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Metadata Exchange Request Message used by AlloyDB connectors to exchange client and connection metadata with the server after a successful TLS handshake.
- Builder Message used by AlloyDB connectors to exchange client and connection metadata with the server after a successful TLS handshake.
- The sole purpose of this message is for the use of AlloyDB connectors.
- The sole purpose of this message is for the use of AlloyDB connectors.

