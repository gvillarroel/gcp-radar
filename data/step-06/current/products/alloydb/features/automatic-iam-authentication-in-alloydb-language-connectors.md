---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.628Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Automatic IAM Authentication in AlloyDB Language Connectors"
feature_slug: "automatic-iam-authentication-in-alloydb-language-connectors"
latest_feature_date: "2024-02-27"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1.MetadataExchangeRequest.AuthType"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeRequest.AuthType"
keywords:
  - "connector IAM auth"
  - "connector authentication"
  - "Automatic IAM Authentication"
  - "auto IAM authentication"
  - "automatic IAM auth"
  - "AlloyDB Language Connectors"
  - "IAM in connectors"
  - "IAM authentication"
---

# Automatic IAM Authentication in AlloyDB Language Connectors

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

AlloyDB now supports Automatic IAM Authentication with AlloyDB Language Connectors in preview.

## Extended Definition

Automatic IAM Authentication in AlloyDB Language Connectors is an authentication mode for AlloyDB language connector clients that enables IAM-based connectivity to AlloyDB clusters. In the connector metadata exchange API, this mode is represented by `AuthType.AUTO_IAM` (value 2), while the default/unspecified auth type maps to DB-native authentication and `DB_NATIVE` is explicitly described as user/password authentication. The feature was first announced as preview on February 27, 2024, and later release notes indicate support for it with the AlloyDB Auth Proxy and managed connection pooling by February 9, 2026.

## Evidence Summary

The release notes establish feature timeline and preview/support context, while the Java connector API enum references define the AUTO IAM authentication type and its contrast with DB-native authentication.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1.MetadataExchangeRequest.AuthType](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1.MetadataExchangeRequest.AuthType)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeRequest.AuthType](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeRequest.AuthType)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- February 27, 2024 Feature You can now use Automatic IAM Authentication with the AlloyDB Language Connectors ( Preview ) to connect to your cluster.
- February 09, 2026 Fixed We are announcing the release of support for the AlloyDB language connectors and Auth Proxy with Auto IAM Authentication and managed connection pooling.
- January 21, 2026 Issue Automatic IAM authentication is unavailable when you use managed connection pooling with the AlloyDB Auth Proxy and Language Connectors.
- These language connectors are libraries that provide automated mutual TLS connections, IAM-based authorization, and Automated IAM Authentication when connecting to an AlloyDB instance.

### "Enum MetadataExchangeRequest.AuthType (0.66.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1.MetadataExchangeRequest.AuthType](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1.MetadataExchangeRequest.AuthType)
- Source ID: `site-java-reference`
- Final score: 46
- Re-rank relevance: STRONG
- Re-rank rationale: The page directly lists an `AUTO_IAM` authentication type in `MetadataExchangeRequest.AuthType`, which materially defines IAM-based authentication for AlloyDB connectors.

Evidence snippets:
- Protobuf enum google.cloud.alloydb.connectors.v1.MetadataExchangeRequest.AuthType Implements ProtocolMessageEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description AUTH TYPE UNSPECIFIED Authentication type is unspecified and DB NATIVE is used by default AUTH TYPE UNSPECIFIED = 0; AUTH TYPE UNSPECIFIED VALUE Authentication type is unspecified and DB NATIVE is used by default AUTH TYPE UNSPECIFIED = 0; AUTO IAM Automatic IAM authentication AUTO IAM = 2; AUTO IAM VALUE Automatic IAM authentication AUTO IAM = 2; DB NATIVE Database native authentication (user/password) DB NATIVE = 1; DB NATIVE VALUE Database native authentication (user/password) DB NATIVE = 1; UNRECOGNIZED Static Methods Name Description forNumber(int value) getDescriptor() internalGetValueMap() valueOf(Descriptors.EnumValueDescriptor desc) valueOf(int value) Deprecated.

### "Enum MetadataExchangeRequest.AuthType (0.66.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeRequest.AuthType](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1alpha.MetadataExchangeRequest.AuthType)
- Source ID: `site-java-reference`
- Final score: 46
- Re-rank relevance: STRONG
- Re-rank rationale: It explicitly defines `AUTO_IAM` as an authentication type in `MetadataExchangeRequest.AuthType`, directly confirming IAM-based authentication support in AlloyDB language connectors.

Evidence snippets:
- Protobuf enum google.cloud.alloydb.connectors.v1alpha.MetadataExchangeRequest.AuthType Implements ProtocolMessageEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description AUTH TYPE UNSPECIFIED Authentication type is unspecified and DB NATIVE is used by default AUTH TYPE UNSPECIFIED = 0; AUTH TYPE UNSPECIFIED VALUE Authentication type is unspecified and DB NATIVE is used by default AUTH TYPE UNSPECIFIED = 0; AUTO IAM Automatic IAM authentication AUTO IAM = 2; AUTO IAM VALUE Automatic IAM authentication AUTO IAM = 2; DB NATIVE Database native authentication (user/password) DB NATIVE = 1; DB NATIVE VALUE Database native authentication (user/password) DB NATIVE = 1; UNRECOGNIZED Static Methods Name Description forNumber(int value) getDescriptor() internalGetValueMap() valueOf(Descriptors.EnumValueDescriptor desc) valueOf(int value) Deprecated.

