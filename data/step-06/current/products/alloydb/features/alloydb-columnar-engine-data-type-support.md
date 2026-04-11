---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.647Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB columnar engine data type support"
feature_slug: "alloydb-columnar-engine-data-type-support"
latest_feature_date: "2023-06-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1.MetadataExchangeResponse.ResponseCode"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType"
keywords:
  - "boolean data type"
  - "columnar supported data types"
  - "bytea"
  - "enum"
  - "uuid"
  - "alloydb columnar types"
  - "columnar data types"
  - "columnar engine"
---

# AlloyDB columnar engine data type support

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

The AlloyDB columnar engine added support for boolean, bytea, enum, and uuid column data types.

## Extended Definition

The AlloyDB columnar engine added support for boolean, bytea, enum, and uuid column data types.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1.MetadataExchangeResponse.ResponseCode](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1.MetadataExchangeResponse.ResponseCode)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType)

## Supporting Pages

### "Enum MetadataExchangeResponse.ResponseCode (0.66.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1.MetadataExchangeResponse.ResponseCode](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1.MetadataExchangeResponse.ResponseCode)
- Source ID: `site-java-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Protobuf enum google.cloud.alloydb.connectors.v1.MetadataExchangeResponse.ResponseCode Implements ProtocolMessageEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description ERROR Failure ERROR = 2; ERROR VALUE Failure ERROR = 2; OK Success OK = 1; OK VALUE Success OK = 1; RESPONSE CODE UNSPECIFIED Unknown response code RESPONSE CODE UNSPECIFIED = 0; RESPONSE CODE UNSPECIFIED VALUE Unknown response code RESPONSE CODE UNSPECIFIED = 0; UNRECOGNIZED Static Methods Name Description forNumber(int value) getDescriptor() internalGetValueMap() valueOf(Descriptors.EnumValueDescriptor desc) valueOf(int value) Deprecated.
- 0.66.0 (latest) 0.65.0 0.63.0 0.61.0 0.60.0 0.59.0 0.58.0 0.56.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.46.0 0.45.0 0.42.0 0.41.0 0.40.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.2.0 0.1.0 public enum MetadataExchangeResponse .
- Home Documentation Developer tools Java Client libraries Send feedback Enum MetadataExchangeResponse.ResponseCode (0.66.0) Stay organized with collections Save and categorize content based on your preferences.
- ResponseCode > implements ProtocolMessageEnum Response code.

### "Enum MetadataExchangeRequest.AuthType (0.66.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType](https://docs.cloud.google.com/java/docs/reference/google-cloud-alloydb-connectors/latest/com.google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType)
- Source ID: `site-java-reference`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Protobuf enum google.cloud.alloydb.connectors.v1beta.MetadataExchangeRequest.AuthType Implements ProtocolMessageEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description AUTH TYPE UNSPECIFIED Authentication type is unspecified and DB NATIVE is used by default AUTH TYPE UNSPECIFIED = 0; AUTH TYPE UNSPECIFIED VALUE Authentication type is unspecified and DB NATIVE is used by default AUTH TYPE UNSPECIFIED = 0; AUTO IAM Automatic IAM authentication AUTO IAM = 2; AUTO IAM VALUE Automatic IAM authentication AUTO IAM = 2; DB NATIVE Database native authentication (user/password) DB NATIVE = 1; DB NATIVE VALUE Database native authentication (user/password) DB NATIVE = 1; UNRECOGNIZED Static Methods Name Description forNumber(int value) getDescriptor() internalGetValueMap() valueOf(Descriptors.EnumValueDescriptor desc) valueOf(int value) Deprecated.
- 0.66.0 (latest) 0.65.0 0.63.0 0.61.0 0.60.0 0.59.0 0.58.0 0.56.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.46.0 0.45.0 0.42.0 0.41.0 0.40.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.2.0 0.1.0 public enum MetadataExchangeRequest .
- Home Documentation Developer tools Java Client libraries Send feedback Enum MetadataExchangeRequest.AuthType (0.66.0) Stay organized with collections Save and categorize content based on your preferences.
- AuthType > implements ProtocolMessageEnum AuthType contains all supported authentication types.

