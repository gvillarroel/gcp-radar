---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.684Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "United States regional endpoint selection"
feature_slug: "united-states-regional-endpoint-selection"
latest_feature_date: "2024-09-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/locations"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client"
keywords:
  - "united"
  - "states"
  - "regional"
  - "endpoint"
  - "selection"
  - "endpoints"
  - "specifying"
  - "regions"
---

# United States regional endpoint selection

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Regional endpoints support specifying United States regions for Cloud Storage access.

## Extended Definition

Regional endpoints support specifying United States regions for Cloud Storage access.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client)

## Supporting Pages

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Node.js Changes for @google-cloud/storage 7.13.0 (2024-09-17) Features storage: Add support for 'fields' query parameter to getFiles ( #2521 ) ( f78fe92 ) Bug Fixes retry: Export RETRYABLE ERR FN DEFAULT ( #2517 ) ( db890fd ) Java Changes for google-cloud-storage 2.43.0 (2024-09-13) Features Allow specifying an expected object size for resumable operations. ( #2661 ) ( 3405611 ), closes #2511 Bug Fixes Close pending zero-copy responses when Storage#close is called ( #2696 ) ( 1855308 ) GitHub workflow vulnerable to script injection ( #2663 ) ( 9151ac2 ) Make ParallelCompositeUploadBlobWriteSessionConfig.ExecutorSupplier#cachedPool a singleton ( #2691 ) ( 1494809 ) Dependencies Promote storage-v2 artifacts to beta ( 9d22597 ) Update dependency com.google.apis:google-api-services-storage to v1-rev20240819-2.0.0 ( #2665 ) ( 3df1000 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.35.0 ( #2698 ) ( 1dd51c3 ) September 11, 2024 Feature You can now specify United States regions when using regional endpoints .
- Java Changes for google-cloud-storage 2.40.1 (2024-06-26) Bug Fixes Add a workaround to make sure grpc clients' hosts always match their universe domain ( #2588 ) ( 87bf737 ) Include x-goog-user-project on resumable upload puts for grpc transport ( #2586 ) ( 6f2f504 ) Update grpc bidi resumable uploads to validate ack'd object size ( #2570 ) ( 5c9cecf ) Update grpc finalize on close resumable uploads to validate ack'd object size ( #2572 ) ( 55a6d15 ) Update grpc single-shot uploads to validate ack'd object size ( #2567 ) ( 65c8808 ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20240524-2.0.0 ( #2565 ) ( d193243 ) Update dependency com.google.apis:google-api-services-storage to v1-rev20240621-2.0.0 ( #2596 ) ( 73b8753 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.32.0 ( #2597 ) ( 25940a4 ) Documentation Add Hierarchical Namespace Bucket and Folders samples ( #2583 ) ( 3030081 ), closes #2569 Remove allowlist note from Folders RPCs ( #2593 ) ( 82161de ) Update DeleteObject Sample to be clearer on object versioning behavior ( #2595 ) ( 79b7cf0 ) June 28, 2024 Feature You can now specify the Frankfurt, Germany ( europe-west3 ) and Paris, France ( europe-west9 ) regions when using regional endpoints .
- Regional endpoints let you run your workloads in a manner that complies with data residency and data sovereignty requirements, where your request traffic is routed directly to the region specified in the endpoint.
- November 20, 2023 Feature Regional endpoints are now available in Preview.

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Multi-regions Multi-Region Name Multi-Region Description ASIA Data centers in Asia, excluding Hong Kong and Indonesia EU Data centers within member states of the European Union US Data centers in the United States Object data added to a bucket in the EU multi-region is not stored in the EUROPE-WEST2 (London) or EUROPE-WEST6 (Zürich) regions.
- A multi-region is a large geographic area that contains two or more geographic regions, such as the United States ( US ).
- Zone Region Dual-region Multi-region Availability Data redundancy within one availability zone Zonal outages might affect availability Data redundancy across availability zones (synchronous) RTO(recovery time objective)=0: automated failover and failback on zonal failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) Turbo replication option for replication within 15 minutes RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Higher availability than regions for a given storage class Data redundancy across regions (asynchronous) RTO(recovery time objective)=0: automated failover and failback on regional failure (no need to change storage paths) Pricing Offers the highest performance in Cloud Storage for demanding workloads at the highest storage price, out of all location types Zonal bucket-specific data transfer charges apply.
- The following regions are available: Geographic Area Region Name Region Description North America NORTHAMERICA-NORTHEAST1 1 Montréal Low CO 2 NORTHAMERICA-NORTHEAST2 Toronto Low CO 2 NORTHAMERICA-SOUTH1 1 Querétaro US-CENTRAL1 Iowa Low CO 2 US-EAST1 South Carolina US-EAST4 Northern Virginia US-EAST5 Columbus US-SOUTH1 Dallas Low CO 2 US-WEST1 Oregon Low CO 2 US-WEST2 Los Angeles US-WEST3 Salt Lake City US-WEST4 Las Vegas South America SOUTHAMERICA-EAST1 São Paulo Low CO 2 SOUTHAMERICA-WEST1 Santiago Low CO 2 Europe EUROPE-CENTRAL2 Warsaw EUROPE-NORTH1 Finland Low CO 2 EUROPE-NORTH2 Stockholm Low CO 2 EUROPE-SOUTHWEST1 Madrid Low CO 2 EUROPE-WEST1 Belgium Low CO 2 EUROPE-WEST2 London Low CO 2 EUROPE-WEST3 Frankfurt EUROPE-WEST4 Netherlands Low CO 2 EUROPE-WEST6 Zürich Low CO 2 EUROPE-WEST8 Milan EUROPE-WEST9 Paris Low CO 2 EUROPE-WEST10 Berlin EUROPE-WEST12 Turin Asia ASIA-EAST1 Taiwan ASIA-EAST2 Hong Kong ASIA-NORTHEAST1 Tokyo ASIA-NORTHEAST2 1 Osaka ASIA-NORTHEAST3 Seoul ASIA-SOUTHEAST1 Singapore India ASIA-SOUTH1 Mumbai ASIA-SOUTH2 Delhi Indonesia ASIA-SOUTHEAST2 Jakarta Thailand ASIA-SOUTHEAST3 Bangkok Middle East ME-CENTRAL1 Doha ME-CENTRAL2 Dammam, Saudi Arabia ME-WEST1 Tel Aviv Australia AUSTRALIA-SOUTHEAST1 Sydney AUSTRALIA-SOUTHEAST2 Melbourne Africa AFRICA-SOUTH1 Johannesburg 1 Montréal, Osaka, and Querétaro each have three zones housed in one or two physical data centers.

### Class Client (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client)
- Source ID: `site-python-reference`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See: https://cloud.google.com/storage/docs/request-endpoints#cname scheme str (Optional) If bucket bound hostname is passed as a bare hostname, use this value as a scheme. https will work only when using a CDN.
- A non-default universe domain or api endpoint should be set through client options. use auth w custom endpoint bool (Optional) Whether authentication is required under custom endpoints.
- Dual-regions require exactly 2 regional locations.
- 3.10.0 (latest) 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.1 3.3.1 3.2.0 3.1.1 3.0.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.1 2.1.0 2.0.0 1.44.0 1.43.0 1.42.3 1.41.1 1.40.0 1.39.0 1.38.0 1.37.1 1.36.2 1.35.1 1.34.0 1.33.0 1.32.0 1.31.2 1.30.0 1.29.0 1.28.1 1.27.0 1.26.0 1.25.0 1.24.1 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 Client ( project = object , credentials = None , http = None , client info = None , client options = None , use auth w custom endpoint = True , extra headers = {}, , api key = None ) Client to bundle configuration needed for API requests.

