---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.409Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery @@location system variable"
feature_slug: "bigquery-location-system-variable"
latest_feature_date: "2025-07-01"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/bigquery/docs/locations"
  - "https://cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "location system variable"
  - "query location variable"
  - "query execution location"
  - "SET @@location"
  - "@@location"
  - "@@LOCATION"
---

# BigQuery @@location system variable

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery adds the @@location system variable so a query can specify the location in which it runs; BigQuery now supports the @@location system variable to set the location in which a query is executed.

## Extended Definition

The `@@location` system variable in BigQuery SQL allows a query to specify the location in which the query is executed, and it is set in the first statement of the query. BigQuery release notes describe this as a feature that enables running a query in a user-specified location.

## Evidence Summary

The locations page documents how to set `@@location` in query execution, and the release notes page records the feature’s introduction with date context.

## Source Links

- [https://cloud.google.com/bigquery/docs/locations](https://cloud.google.com/bigquery/docs/locations)
- [https://cloud.google.com/bigquery/docs/release-notes](https://cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly explains setting the `@@location` system variable as a supported way to run queries in a specific location.

Evidence snippets:
- Multi-region bucket : Using multi-region dataset locations with multi-region Cloud Storage buckets is not recommended for external tables, because external query performance depends on minimal latency and optimal network bandwidth.
- Multi-region: Because external query performance depends on minimal latency and optimal network bandwidth, using multi-region dataset locations is not recommended for external tables on Bigtable.
- When you write a SQL query, set the @@location system variable in the first statement of your query.
- The BigQuery SQL translators are available in the following processing locations: Region description Region name Details Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 EU multi-region eu Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Americas Columbus, Ohio us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Québec northamerica-northeast1 Low CO 2 São Paulo southamerica-east1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 US multi-region us Africa Johannesburg africa-south1 MiddleEast Dammam me-central2 Doha me-central1 Israel me-west1 BigQuery continuous query locations The following table lists the regions where continuous queries are supported: Region description Region name Details Americas US multi-region us Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Montréal northamerica-northeast1 Low CO 2 Northern Virginia us-east4 Oklahoma us-central2 Low CO 2 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Asia Pacific Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe EU multi-region eu Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zurich europe-west6 Low CO 2 Middle East Doha me-central1 Dammam me-central2 Tel Aviv me-west1 Africa Johannesburg africa-south1 BigQuery partition and cluster recommender locations The BigQuery partitioning and clustering recommender generates partition or cluster recommendations to optimize your BigQuery tables.

### What is the BigQuery Data Transfer Service? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/dts-introduction](https://docs.cloud.google.com/bigquery/docs/dts-introduction)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- For detailed information about transfers and region compatibility for BigQuery Data Transfer Service, see Dataset locations and transfers .
- For supported regions for BigQuery, see Dataset locations .
- The BigQuery Data Transfer Service supports data transfers from any region where your data is stored to any location where your destination dataset is located.
- When you set up a transfer, the transfer configuration itself is set to the same location as the destination dataset.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- February 24, 2025 Feature You can now use the @@location system variable to set the location in which to run a query.
- Feature You can use the @@location system variable to set the location in which to run a query.
- March 24, 2025 Libraries Node.js 7.9.3 (2025-03-17) Bug Fixes Make sure to pass selectedFields to tabledata.list method ( #1449 ) ( 206aff9 ) Libraries Java 2.49.0 (2025-03-20) Features bigquery: Implement getArray in BigQueryResultImpl ( #3693 ) ( e2a3f2c ) Next release from main branch is 2.49.0 ( #3706 ) ( b46a6cc ) Bug Fixes Retry ExceptionHandler not retrying on IOException ( #3668 ) ( 83245b9 ) Dependencies Exclude io.netty:netty-common from org.apache.arrow:arrow-memor… ( #3715 ) ( 11b5809 ) Update actions/upload-artifact action to v4.6.2 ( #3724 ) ( 426a59b ) Update actions/upload-artifact action to v4.6.2 ( #3724 ) ( 483f930 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.61.0 ( #3703 ) ( 53b07b0 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.62.0 ( #3726 ) ( 38e004b ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250302-2.0.0 ( #3720 ) ( c0b3902 ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250313-2.0.0 ( #3723 ) ( b8875a8 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.65.0 ( #3704 ) ( 53b68b1 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.66.0 ( #3727 ) ( 7339f94 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.45.1 ( #3714 ) ( e4512aa ) Update dependency com.google.oauth-client:google-oauth-client-java6 to v1.39.0 ( #3710 ) ( c0c6352 ) Update dependency com.google.oauth-client:google-oauth-client-jetty to v1.39.0 ( #3711 ) ( 43b86e9 ) Update dependency node to v22 ( #3713 ) ( 251def5 ) Update netty.version to v4.1.119.final ( #3717 ) ( 08a290a ) Documentation Update error handling comment to be more precise in samples ( #3712 ) ( 9eb555f ) Libraries Go 1.67.0 (2025-03-14) Features bigquery/reservation: Add a new field enable gemini in bigquery to .google.cloud.bigquery.reservation.v1.Assignment that indicates if "Gemini in Bigquery"(https ( 601e742 ) bigquery/reservation: Add a new field replication status to .google.cloud.bigquery.reservation.v1.Reservation to provide visibility into errors that could arise during Disaster Recovery(DR) replication ( #11666 ) ( 601e742 ) bigquery/reservation: Add the CONTINUOUS Job type to .google.cloud.bigquery.reservation.v1.Assignment.JobType for continuous SQL jobs ( 601e742 ) bigquery: Support MetadataCacheMode for ExternalDataConfig ( #11803 ) ( af5174d ), refs #11802 Bug Fixes bigquery: Increase timeout for storage api test and remove usage of deprecated pkg ( #11810 ) ( f47e038 ), refs #11801 bigquery: Update golang.org/x/net to 0.37.0 ( 1144978 ) Documentation bigquery/reservation: Remove the section about EDITION UNSPECIFIED in the comment for slot capacity in .google.cloud.bigquery.reservation.v1.Reservation to clarify that ( 601e742 ) bigquery/reservation: Update the google.api.field behavior for the .google.cloud.bigquery.reservation.v1.Reservation.primary location and .google.cloud.bigquery.reservation.v1.Reservation.original primary location fields to clarify that they are OUTPUT ONLY ( 601e742 ) Feature We have redesigned the Add Data dialog to guide you through loading data into BigQuery with a source-first experience and enhanced search and filtering capabilities.
- Reservations within a reservation group share idle slots with each other before making them available to other reservations in the project, giving you more control over slot allocation for high-priority workloads.

