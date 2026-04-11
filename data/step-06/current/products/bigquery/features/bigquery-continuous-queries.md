---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.427Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery continuous queries"
feature_slug: "bigquery-continuous-queries"
latest_feature_date: "2025-05-19"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
keywords:
  - "replicate to Pub/Sub"
  - "replicate to Bigtable"
  - "long-running SQL query"
  - "continuous queries"
  - "continuous query"
  - "continuous SQL"
  - "real-time ML inference"
  - "persistent query"
---

# BigQuery continuous queries

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery continuous queries provide long-running SQL statements that continuously process streaming data, including real-time ML inference; BigQuery introduced continuous queries, enabling long-lived SQL processing pipelines for real-time analytics and replication to Pub/Sub, Bigtable, or BigQuery.

## Extended Definition

BigQuery continuous queries are long-lived continuous SQL jobs designed to continuously process incoming data in real time. BigQuery documentation describes them as running continuously for real-time analytics and machine-learning inference, including support for stateful processing via joins and windowing aggregations across rows or time intervals. Google also defines a dedicated IAM surface for this feature, including predefined roles for service agents and service accounts that grant access to continuous query resources.

## Evidence Summary

The release notes establish what continuous queries do, and the access-control page confirms the feature has its own predefined IAM roles.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- March 24, 2025 Libraries Node.js 7.9.3 (2025-03-17) Bug Fixes Make sure to pass selectedFields to tabledata.list method ( #1449 ) ( 206aff9 ) Libraries Java 2.49.0 (2025-03-20) Features bigquery: Implement getArray in BigQueryResultImpl ( #3693 ) ( e2a3f2c ) Next release from main branch is 2.49.0 ( #3706 ) ( b46a6cc ) Bug Fixes Retry ExceptionHandler not retrying on IOException ( #3668 ) ( 83245b9 ) Dependencies Exclude io.netty:netty-common from org.apache.arrow:arrow-memor… ( #3715 ) ( 11b5809 ) Update actions/upload-artifact action to v4.6.2 ( #3724 ) ( 426a59b ) Update actions/upload-artifact action to v4.6.2 ( #3724 ) ( 483f930 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.61.0 ( #3703 ) ( 53b07b0 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.62.0 ( #3726 ) ( 38e004b ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250302-2.0.0 ( #3720 ) ( c0b3902 ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250313-2.0.0 ( #3723 ) ( b8875a8 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.65.0 ( #3704 ) ( 53b68b1 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.66.0 ( #3727 ) ( 7339f94 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.45.1 ( #3714 ) ( e4512aa ) Update dependency com.google.oauth-client:google-oauth-client-java6 to v1.39.0 ( #3710 ) ( c0c6352 ) Update dependency com.google.oauth-client:google-oauth-client-jetty to v1.39.0 ( #3711 ) ( 43b86e9 ) Update dependency node to v22 ( #3713 ) ( 251def5 ) Update netty.version to v4.1.119.final ( #3717 ) ( 08a290a ) Documentation Update error handling comment to be more precise in samples ( #3712 ) ( 9eb555f ) Libraries Go 1.67.0 (2025-03-14) Features bigquery/reservation: Add a new field enable gemini in bigquery to .google.cloud.bigquery.reservation.v1.Assignment that indicates if "Gemini in Bigquery"(https ( 601e742 ) bigquery/reservation: Add a new field replication status to .google.cloud.bigquery.reservation.v1.Reservation to provide visibility into errors that could arise during Disaster Recovery(DR) replication ( #11666 ) ( 601e742 ) bigquery/reservation: Add the CONTINUOUS Job type to .google.cloud.bigquery.reservation.v1.Assignment.JobType for continuous SQL jobs ( 601e742 ) bigquery: Support MetadataCacheMode for ExternalDataConfig ( #11803 ) ( af5174d ), refs #11802 Bug Fixes bigquery: Increase timeout for storage api test and remove usage of deprecated pkg ( #11810 ) ( f47e038 ), refs #11801 bigquery: Update golang.org/x/net to 0.37.0 ( 1144978 ) Documentation bigquery/reservation: Remove the section about EDITION UNSPECIFIED in the comment for slot capacity in .google.cloud.bigquery.reservation.v1.Reservation to clarify that ( 601e742 ) bigquery/reservation: Update the google.api.field behavior for the .google.cloud.bigquery.reservation.v1.Reservation.primary location and .google.cloud.bigquery.reservation.v1.Reservation.original primary location fields to clarify that they are OUTPUT ONLY ( 601e742 ) Feature We have redesigned the Add Data dialog to guide you through loading data into BigQuery with a source-first experience and enhanced search and filtering capabilities.
- Features Add dataset access policy version attribute ( #2169 ) ( b7656b9 ) Add preview support for incremental results ( #2145 ) ( 22b80bb ) Add WRITE TRUNCATE DATA enum ( #2166 ) ( 4692747 ) Adds condition class and assoc. unit tests ( #2159 ) ( a69d6b7 ) Support BigLakeConfiguration (managed Iceberg tables) ( #2162 ) ( a1c8e9a ) Update the AccessEntry class with a new condition attribute and unit tests ( #2163 ) ( 7301667 ) Bug Fixes query() now warns when job id is set and the default job retry is ignored ( #2167 ) ( ca1798a ) Empty record dtypes ( #2147 ) ( 77d7173 ) Table iterator should not use bqstorage when page size is not None ( #2154 ) ( e89a707 ) Feature Continuous queries let you build long-lived, continuously processing SQL statements that can analyze, process, and perform machine learning (ML) inference on incoming data in BigQuery in real time.
- November 03, 2025 Libraries Go 1.72.0 (2025-10-28) Features bigquery/reservation: Add new BACKGROUND CHANGE DATA CAPTURE , BACKGROUND COLUMN METADATA INDEX , and BACKGROUND SEARCH INDEX REFRESH reservation assignment types ( 182df61 ) bigquery/reservation: Add new reservation IAM policy get/set/test methods ( 182df61 ) bigquery/reservation: Add support for creation and modification of new reservation groups ( 182df61 ) bigquery: Expose continuous query in config ( #13130 ) ( 2f0942b ) Bug Fixes bigquery/v2: Upgrade gRPC service registration func ( 8fffca2 ) bigquery: Upgrade gRPC service registration func ( 8fffca2 ) October 31, 2025 Feature We have increased the row capacity for pivot tables backed by BigQuery in Connected Sheets from 100,000 to 200,000 rows.
- Feature You can now use stateful operations in continuous queries , which let you perform complex analysis by retaining information across multiple rows or time intervals using JOIN s and windowing aggregations.

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Warning: Do not grant service agent roles to any principals except service agents . cloudsql.instances.connect cloudsql.instances.get logging.logEntries.create logging.logEntries.route monitoring. metricDescriptors. create monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring.timeSeries.create telemetry.metrics.write BigQuery Continuous Query roles This table lists the predefined IAM roles and permissions for BigQuery Continuous Query.
- Role Permissions BigQuery Continuous Query Service Agent ( roles/ bigquerycontinuousquery.serviceAgent ) Gives BigQuery Continuous Query access to the service accounts in the user project.
- BigQuery Continuous Query: Role that grants a service account access to a continuous query.
- BigQuery Continuous Query permissions There are no IAM permissions for this service.

