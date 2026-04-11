---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.877Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Cloud Datastore Administration API v1"
feature_slug: "cloud-datastore-administration-api-v1"
latest_feature_date: "2018-02-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/release-notes"
  - "https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore"
  - "https://docs.cloud.google.com/datastore/docs/reference/admin/rest"
keywords:
  - "datastore"
  - "administration"
  - "api"
  - "v1"
  - "provides"
  - "operations"
  - "such"
  - "as"
---

# Cloud Datastore Administration API v1

Product: Datastore
Coverage: LOW

## Step 02 Summary

Cloud Datastore Administration API v1 provides Datastore administration operations such as export and import; Cloud Datastore Administration API v1 provides export, import, and long-running operation management for Datastore.

## Extended Definition

Cloud Datastore Administration API v1 provides Datastore administration operations such as export and import; Cloud Datastore Administration API v1 provides export, import, and long-running operation management for Datastore.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/release-notes](https://docs.cloud.google.com/datastore/docs/release-notes)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/reference/admin/rest](https://docs.cloud.google.com/datastore/docs/reference/admin/rest)

## Supporting Pages

### Datastore release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/release-notes](https://docs.cloud.google.com/datastore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- July 21, 2025 Libraries Java 2.31.0 (2025-07-14) Features Next release from main branch is 2.31.0 ( #1912 ) ( a74c46b ) Dependencies Update dependency com.google.cloud:gapic-libraries-bom to v1.61.0 ( #1901 ) ( beeb125 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #1908 ) ( b10e0f0 ) June 30, 2025 Libraries Java 2.30.0 (2025-06-26) Features Enable grpc configurator for client-side tracing ( #1886 ) ( 97004c8 ) Dependencies Update dependency com.google.cloud:gapic-libraries-bom to v1.60.0 ( #1799 ) ( bf2a33c ) Update dependency com.google.cloud:sdk-platform-java-config to v3.50.0 ( #1897 ) ( a8d99cd ) Update googleapis/sdk-platform-java action to v2.59.1 ( #1880 ) ( 4fb9929 ) Update googleapis/sdk-platform-java action to v2.60.0 ( #1898 ) ( 0921f86 ) June 16, 2025 Libraries Java 2.29.2 (2025-06-13) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.59.0 ( 910a6c2 ) June 09, 2025 Libraries Java 2.29.0 (2025-06-06) Features Add getNumber to AggregationResult (https://github.com/googleapis/java-datastore/issues/1851) ( #1861 ) ( b9c2c3f ) Bug Fixes Remove 500 char path name limit ( #1865 ) ( 1097175 ) Dependencies Update dependency org.easymock:easymock to v5.6.0 ( #1858 ) ( acc1513 ) Java 2.29.1 (2025-06-07) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #1860 ) ( 0eff028 ) May 26, 2025 Libraries Java 2.28.2 (2025-05-16) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.48.0 ( #1847 ) ( 7ed3232 ) Update googleapis/sdk-platform-java action to v2.58.0 ( #1853 ) ( eef820d ) May 12, 2025 Libraries Java 2.28.1 (2025-05-06) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #1841 ) ( ac393e6 ) Update googleapis/sdk-platform-java action to v2.57.0 ( #1842 ) ( 0745906 ) May 05, 2025 Libraries Java 2.28.0 (2025-04-29) Features Java datastore gapic upgrade ( #1824 ) ( a296d43 ) April 28, 2025 Libraries Java 2.27.2 (2025-04-25) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 1210f32 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.46.2 ( #1823 ) ( 4d2026c ) April 22, 2025 Feature Committed use discounts are now generally available (GA) for Firestore in Datastore mode in exchange for a commitment to continuously spend a certain amount on read/write/delete operations for one year or three years.
- February 28, 2018 Feature General Availability release of the Cloud Datastore Administration API v1 , previously in Beta.
- August 30, 2017 Feature Initial Beta release of the Cloud Datastore Administration API v1.
- Deprecated The Cloud Datastore Administration API v1beta1 is now deprecated.

### "Balancing Strong and Eventual Consistency with Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Datastore API Read of entity value Read of index Global Query Eventual consistency Eventual consistency Keys-only Global Query N/A Eventual consistency Ancestor Query Strong consistency Strong consistency Lookup by key (get()) Strong consistency N/A Table 1: Datastore queries/get calls and possible consistency behaviors Datastore queries without an ancestor are known as global queries and are designed to work with an eventual consistency model.
- Strong Consistency on Reading Entity Values and Indexes In Datastore, there are only two APIs that provide a strongly consistent view for reading entity values and indexes: (1) the lookup by key method and (2) the ancestor query.
- Developers building new applications are strongly encouraged to use the NDB Client Library , which has several benefits compared to this client library, such as automatic entity caching via the Memcache API.
- Datastore also provides a number of features that relational databases are not optimally suited to provide, including high-performance at a very large scale and high-reliability.

### Cloud Datastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/reference/admin/rest](https://docs.cloud.google.com/datastore/docs/reference/admin/rest)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us https://datastore.googleapis.com REST Resource: v1beta1.projects Methods export POST /v1beta1/projects/{projectId}:export Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. import POST /v1beta1/projects/{projectId}:import Imports entities into Google Cloud Datastore.
- This service provides the following discovery documents: https://datastore.googleapis.com/$discovery/rest?version=v1 https://datastore.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1beta1.projects REST Resource: v1.projects REST Resource: v1.projects.indexes REST Resource: v1.projects.operations Service: datastore.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects Methods export POST /v1/projects/{projectId}:export Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. import POST /v1/projects/{projectId}:import Imports entities into Google Cloud Datastore.

