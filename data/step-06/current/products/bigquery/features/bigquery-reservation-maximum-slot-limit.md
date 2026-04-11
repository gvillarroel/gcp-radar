---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.384Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery reservation maximum slot limit"
feature_slug: "bigquery-reservation-maximum-slot-limit"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "update reservation maxSlots"
  - "slot cap per reservation"
  - "reservation slot cap"
  - "slot cap"
  - "maxSlots"
  - "set reservation max slots"
  - "reservation capacity limit"
  - "maximum slot limit"
---

# BigQuery reservation maximum slot limit

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Allows configuring a maximum slot limit when creating or updating a BigQuery reservation.

## Extended Definition

The BigQuery reservation maximum slot limit is a reservation setting that caps how many BigQuery slots can be used by that reservation. BigQuery supports configuring this through reservation DDL: `CREATE RESERVATION ... OPTIONS ( slot capacity = ... )` and `ALTER RESERVATION ... SET OPTIONS ( ... , autoscale max slots = ... )`, and release notes state that users can set a maximum slot limit for a reservation. The admin/resource utilization model treats reservation capacity as capacity plus autoscaled max capacity, with monitoring docs describing how this capacity is represented.

## Evidence Summary

The DDL reference documents how to set reservation slot allocation and autoscaled maximum slots, while release notes confirm the feature was introduced, and the resource chart page explains reservation capacity behavior.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Note: If your project is assigned to a reservation owned by another project, the slot capacity overview chart displays 0 capacity.
- Best practice : Consider optimizing resource-intensive queries or your reservation's slot capacity.
- To view the total slot capacity, view the charts for the project that owns the reservation.
- The total slot capacity equals baseline capacity and autoscaled max capacity.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- These slots are located in the region-us region and managed by a project admin project : ALTER RESERVATION admin project.region-us.my-reservation SET OPTIONS ( slot capacity = 300 , autoscale max slots = 400 ); ALTER VECTOR INDEX REBUILD statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Example The following example creates a reservation of 100 slots in the project admin project : CREATE RESERVATION admin project.region-us.prod OPTIONS ( slot capacity = 100 ); CREATE ASSIGNMENT statement Assigns a project, folder, or organization to a reservation.
- For more information, see Idle slots . slot capacity INTEGER The number of slots to allocate to the reservation.
- For more information, see Idle slots . slot capacity INTEGER The number of slots to allocate to the reservation.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- March 24, 2025 Libraries Node.js 7.9.3 (2025-03-17) Bug Fixes Make sure to pass selectedFields to tabledata.list method ( #1449 ) ( 206aff9 ) Libraries Java 2.49.0 (2025-03-20) Features bigquery: Implement getArray in BigQueryResultImpl ( #3693 ) ( e2a3f2c ) Next release from main branch is 2.49.0 ( #3706 ) ( b46a6cc ) Bug Fixes Retry ExceptionHandler not retrying on IOException ( #3668 ) ( 83245b9 ) Dependencies Exclude io.netty:netty-common from org.apache.arrow:arrow-memor… ( #3715 ) ( 11b5809 ) Update actions/upload-artifact action to v4.6.2 ( #3724 ) ( 426a59b ) Update actions/upload-artifact action to v4.6.2 ( #3724 ) ( 483f930 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.61.0 ( #3703 ) ( 53b07b0 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.62.0 ( #3726 ) ( 38e004b ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250302-2.0.0 ( #3720 ) ( c0b3902 ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250313-2.0.0 ( #3723 ) ( b8875a8 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.65.0 ( #3704 ) ( 53b68b1 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.66.0 ( #3727 ) ( 7339f94 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.45.1 ( #3714 ) ( e4512aa ) Update dependency com.google.oauth-client:google-oauth-client-java6 to v1.39.0 ( #3710 ) ( c0c6352 ) Update dependency com.google.oauth-client:google-oauth-client-jetty to v1.39.0 ( #3711 ) ( 43b86e9 ) Update dependency node to v22 ( #3713 ) ( 251def5 ) Update netty.version to v4.1.119.final ( #3717 ) ( 08a290a ) Documentation Update error handling comment to be more precise in samples ( #3712 ) ( 9eb555f ) Libraries Go 1.67.0 (2025-03-14) Features bigquery/reservation: Add a new field enable gemini in bigquery to .google.cloud.bigquery.reservation.v1.Assignment that indicates if "Gemini in Bigquery"(https ( 601e742 ) bigquery/reservation: Add a new field replication status to .google.cloud.bigquery.reservation.v1.Reservation to provide visibility into errors that could arise during Disaster Recovery(DR) replication ( #11666 ) ( 601e742 ) bigquery/reservation: Add the CONTINUOUS Job type to .google.cloud.bigquery.reservation.v1.Assignment.JobType for continuous SQL jobs ( 601e742 ) bigquery: Support MetadataCacheMode for ExternalDataConfig ( #11803 ) ( af5174d ), refs #11802 Bug Fixes bigquery: Increase timeout for storage api test and remove usage of deprecated pkg ( #11810 ) ( f47e038 ), refs #11801 bigquery: Update golang.org/x/net to 0.37.0 ( 1144978 ) Documentation bigquery/reservation: Remove the section about EDITION UNSPECIFIED in the comment for slot capacity in .google.cloud.bigquery.reservation.v1.Reservation to clarify that ( 601e742 ) bigquery/reservation: Update the google.api.field behavior for the .google.cloud.bigquery.reservation.v1.Reservation.primary location and .google.cloud.bigquery.reservation.v1.Reservation.original primary location fields to clarify that they are OUTPUT ONLY ( 601e742 ) Feature We have redesigned the Add Data dialog to guide you through loading data into BigQuery with a source-first experience and enhanced search and filtering capabilities.
- Libraries Go 1.71.0 (2025-09-30) Features bigquery/analyticshub: You can now configure listings for multiple regions for shared datasets and linked dataset replicas in BigQuery sharing ( 10e67ef ) bigquery/reservation: Add a new field failover mode to .google.cloud.bigquery.reservation.v1.FailoverReservationRequest that allows users to choose between the HARD or SOFT failover modes when they initiate a failover operation on a reservation ( 10e67ef ) bigquery/reservation: Add a new field soft failover start time in the existing replication status in .google.cloud.bigquery.reservation.v1.Reservation to provide visibility into the state of ongoing soft failover operations on the reservation ( 10e67ef ) bigquery: Add support for MaxSlots ( #12958 ) ( a3c0aca ) Announcement Starting March 17, 2026, the BigQuery Data Transfer Service will require the bigquery.datasets.setIamPolicy and the bigquery.datasets.getIamPolicy permissions on the target dataset to create or update a transfer configuration.
- Feature You can now set a maximum slot limit for a reservation.
- Feature You can set a maximum slot limit for a reservation.

