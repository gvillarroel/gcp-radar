---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.400Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable monitoring in GCP Console"
feature_slug: "cloud-bigtable-monitoring-in-gcp-console"
latest_feature_date: "2018-04-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings.Builder"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
keywords:
  - "gcp"
  - "improved"
  - "monitoring"
  - "added"
  - "console"
  - "bigtable"
  - "the"
  - "in"
---

# Cloud Bigtable monitoring in GCP Console

Product: Bigtable
Coverage: LOW

## Step 02 Summary

The GCP Console added improved Cloud Bigtable monitoring with new charts for cluster storage utilization, node count, and replication status.

## Extended Definition

The GCP Console added improved Cloud Bigtable monitoring with new charts for cluster storage utilization, node count, and replication status.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings.Builder)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)

## Supporting Pages

### "Class BigtableInstanceAdminSettings (2.74.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings)
- Source ID: `site-java-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description BigtableInstanceAdminSettings.Builder toString() public String toString () Returns Type Description String Overrides Object.toString() Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Parameters Name Description hostname String port int Returns Type Description BigtableInstanceAdminSettings.Builder Methods getCredentialsProvider() public CredentialsProvider getCredentialsProvider () Gets the credentials provider to use for getting the credentials to make calls with.
- Builder newBuilderForEmulator ( String hostname , int port ) Creates a new builder preconfigured to connect to the Bigtable emulator with host name and port number.
- Returns Type Description String getStubSettings() public BigtableInstanceAdminStubSettings getStubSettings () Gets the underlying RPC settings.

### "Class BigtableInstanceAdminSettings.Builder (2.74.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Inheritance java.lang.Object > BigtableInstanceAdminSettings.Builder Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods build() public BigtableInstanceAdminSettings build () Builds an instance of the settings.
- Returns Type Description BigtableInstanceAdminStubSettings.Builder Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Returns Type Description BigtableInstanceAdminSettings Exceptions Type Description IOException getCredentialsProvider() public CredentialsProvider getCredentialsProvider () Gets the CredentialsProvider to use for getting the credentials to make calls with.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Feature The GCP Console now provides improved monitoring for Cloud Bigtable , including new charts that show each cluster's storage utilization, node count, and replication status.
- April 07, 2025 Libraries Java 2.57.2 (2025-03-31) Bug Fixes Library should released as 2.57.2 ( #2549 ) ( 58d0bbd ) Go 1.36.0 (2025-03-31) Features bigtable/admin: Add MaterializedViews and LogicalViews APIs ( b323f88 ) bigtable/admin: Add MaterializedViews and LogicalViews APIs ( dd0d1d7 ) bigtable/admin: Publish row key schema fields in table proto and relevant admin APIs to setup a table with a row key schema ( 3f23a91 ) bigtable: Add Bind function to bind query params ( #11862 ) ( 24c5ae0 ) bigtable: Add datatypes for GoogleSQL ( #11816 ) ( 5a9eb10 ) bigtable: Add Execute method to execute GoogleSQL queries ( #11883 ) ( 0e53dcd ) bigtable: Add MaterializedViewName to ReadRows and SampleRowKeys ( b323f88 ) bigtable: Add methods to read ResultRow ( #11924 ) ( 8b8ca9e ) bigtable: Add PrepareQuery api and update ExecuteQuery to support it ( dd0d1d7 ) bigtable: Add PrepareStatement to run GoogleSQL queries ( #11829 ) ( ea00b17 ) bigtable: Add support for data APIs for Materialized Views ( #11796 ) ( f5ae93b ) bigtable: Add support for logical views ( #11792 ) ( 630d751 ) bigtable: Add support for materialized views for admin client ( #11793 ) ( 640be05 ) bigtable: Adding node scaling factor ( b680164 ) bigtable: Disable MV and LV tests ( #11827 ) ( 42dca03 ) bigtable: Row key schema support in admin client ( #11777 ) ( 4158bac ) Bug Fixes bigtable: Allow GC updates on emulated aggregate column family ( #11499 ) ( 0682bfa ) bigtable: Update golang.org/x/net to 0.37.0 ( 1144978 ) Documentation bigtable/admin: Fixed formatting of resource path strings ( dd0d1d7 ) bigtable: Update ExecuteQuery API docs to reflect changes ( dd0d1d7 ) Java 2.57.3 (2025-04-01) Bug Fixes Remove debug messages ( #2552 ) ( 6359834 ) March 31, 2025 Libraries Java 2.57.0 (2025-03-24) Features Add PreparedStatement and update ExecuteQuery API to use it ( #2534 ) ( 49d4d09 ) Java 2.57.1 (2025-03-24) Bug Fixes Handling of totalTimeout on sql plan refresh ( #2541 ) ( bf49cf9 ) March 26, 2025 Change The Monitoring page in the Google Cloud console for Bigtable has been renamed to System insights.
- July 21, 2025 Libraries Java 2.62.0 (2025-07-15) Features Add Idempotency to Cloud Bigtable MutateRowRequest API ( b5acca6 ) Add SchemaBundles API ( b5acca6 ) bigtable: Add schema bundle support ( #2619 ) ( 7d7b9a9 ) Next release from main branch is 2.62.0 ( #2621 ) ( 202b211 ) Dependencies Minor cleanup ( #2623 ) ( 7b230e8 ) Update shared dependencies ( #2616 ) ( eb7cfd5 ) July 07, 2025 Libraries Go 1.38.0 (2025-06-27) Features bigtable/admin: Add deletion protection support for LVs ( a95a0bf ) bigtable/admin: Add SchemaBundles API ( 116a33a ) bigtable: Add application blocking latencies ( #11349 ) ( 8f145ed ) bigtable: Add DeletionProtection support for Logical Views ( #11895 ) ( ed488b9 ) bigtable: Connectivity error count client side metric ( #12438 ) ( dd45fd7 ) bigtable: NewServerWithListener ( #12408 ) ( 59ea0de ) bigtable: Use delay from RetryInfo ( #11955 ) ( 0510711 ) Bug Fixes bigtable: Correct the Bigtable monitoring client options ( #12410 ) ( bd966bc ) bigtable: Fix: upgrade gRPC service registration func ( 6a871e0 ) bigtable: Retry RST stream errors ( #11477 ) ( df43b4a ) Performance Improvements bigtable: Refactor metric attributes for performance ( #12445 ) ( f734ec6 ) Documentation bigtable/admin: Improved comment formatting and product naming ( 116a33a ) Change When you undelete a table , Bigtable automatically enables deletion protection for that table.
- Node.js Changes for @google-cloud/bigtable 4.0.4 (2022-09-14) Bug Fixes Use grpc-gcp v1.0.0 ( #1156 ) ( 6196424 ) 4.0.3 (2022-09-09) Bug Fixes Update dependency uuid to v9 ( #1152 ) ( dea0425 ) Wait for instances to get created in all samples ( #1149 ) ( c9dd9c6 ) Java Changes for google-cloud-bigtable 2.12.0 (2022-09-15) Features generated: Publish CBT deletion protection field in Table, UpdateTableRequest, and UpdateTable API ( f1f3f05 ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.3 ( #1386 ) ( f460373 ) Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.3 ( #1387 ) ( e339cb1 ) Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.4 ( #1395 ) ( a2db183 ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.2 ( #1384 ) ( ee3b256 ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.3 ( #1393 ) ( df6c6c7 ) September 13, 2022 Feature Cloud Bigtable is available in the me-west1 (Tel Aviv) region.

