---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.746Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Analytics Hub"
feature_slug: "analytics-hub"
latest_feature_date: "2022-04-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data"
keywords:
  - "BigQuery data exchange"
  - "data exchange"
  - "publisher"
  - "Analytics Hub listing"
  - "listing details"
  - "subscriptions"
  - "subscriber"
  - "Analytics Hub"
---

# Analytics Hub

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Analytics Hub enables secure data exchanges in BigQuery, letting providers publish shared dataset listings and subscribers discover and subscribe to them.

## Extended Definition

Analytics Hub enables secure data exchanges in BigQuery, letting providers publish shared dataset listings and subscribers discover and subscribe to them.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- March 10, 2025 Announcement Analytics Hub egress controls and data clean room subscriptions are now available in all BigQuery editions and on-demand pricing.
- February 17, 2025 Libraries Node.js 7.9.2 (2025-02-12) Bug Fixes Avoid schema field mutation when passing selectedFields opt ( #1437 ) ( 27044d5 ) Java 2.48.0 (2025-02-13) Features Implement wasNull for BigQueryResultSet ( #3650 ) ( c7ef94b ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.59.0 ( #3660 ) ( 3a6228b ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250128-2.0.0 ( #3667 ) ( 0b92af6 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.63.0 ( #3661 ) ( 9bc8c01 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #3669 ) ( 4d9e0ff ) Documentation Update CONTRIBUTING.md for users without branch permissions ( #3670 ) ( 009b9a2 ) Libraries Java 2.48.0 (2025-02-13) Features Implement wasNull for BigQueryResultSet ( #3650 ) ( c7ef94b ) Dependencies Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.59.0 ( #3660 ) ( 3a6228b ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250128-2.0.0 ( #3667 ) ( 0b92af6 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.63.0 ( #3661 ) ( 9bc8c01 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #3669 ) ( 4d9e0ff ) Documentation Update CONTRIBUTING.md for users without branch permissions ( #3670 ) ( 009b9a2 ) Feature Subscriber email logging lets you log the principal identifiers of users who execute jobs and queries against linked datasets.
- June 02, 2025 Libraries Go 1.69.0 (2025-05-27) Features bigquery/analyticshub: Add support for Analytics Hub & Marketplace Integration ( 2aaada3 ) bigquery/analyticshub: Adding allow only metadata sharing to Listing resource ( 2aaada3 ) bigquery/analyticshub: Adding CommercialInfo message to the Listing and Subscription resources ( 2aaada3 ) bigquery/analyticshub: Adding delete commercial and revoke commercial to DeleteListingRequest and RevokeSubscriptionRequest ( 2aaada3 ) bigquery/analyticshub: Adding DestinationDataset to the Subscription resource ( 2aaada3 ) bigquery/analyticshub: Adding routine field to the SharedResource message ( 2aaada3 ) bigquery: Add support for dataset view and update modes ( #12290 ) ( 7c1f961 ) bigquery: Job creation mode GA ( #12225 ) ( 1d8990d ) Libraries Node.js 8.1.0 (2025-05-29) Features Job creation mode GA ( #1480 ) ( b51359a ) Support per-job reservation assignment ( #1477 ) ( 8151e72 ) Libraries Python 3.34.0 (2025-05-27) Features Job creation mode GA ( #2190 ) ( 64cd39f ) Bug Fixes deps: Update all dependencies ( #2184 ) ( 12490f2 ) Documentation Update query.py ( #2192 ) ( 9b5ee78 ) Use query and wait in the array parameters sample ( #2202 ) ( 28a9994 ) Feature BigQuery now supports using Spanner external datasets with authorized views , authorized routines , and Cloud resource connections .
- May 19, 2025 Libraries Go 1.68.0 (2025-05-12) Features bigquery/analyticshub: Support new feature Sharing Cloud Pubsub Streams via AH (GA) and Subscriber Email logging feature ( #11908 ) ( a21d596 ) bigquery/storage: Increased the number of partitions can be written in a single request ( 43bc515 ) bigquery: Add performance insights ( #12101 ) ( aef68ab ) bigquery: Add some missing fields to BQ stats ( #12212 ) ( 77b08e8 ) bigquery: Add WriteTruncateData write disposition ( #12013 ) ( b1126a3 ) bigquery: New client(s) ( #12228 ) ( f229bd9 ) bigquery: Support managed iceberg tables ( #11931 ) ( 35e0774 ) bigquery: Support per-job reservation assignment ( #12078 ) ( c9cebcc ) Bug Fixes bigquery: Cache total rows count ( #12230 ) ( 202dce0 ), refs #11874 #11873 bigquery: Parse timestamps with timezone info ( #11950 ) ( 530d522 ) bigquery: Update google.golang.org/api to 0.229.0 ( 3319672 ) bigquery: Upgrade gRPC service registration func ( 7c01015 ) Documentation bigquery/storage: Updated the number of partitions (from 100 to 900) can be inserted, updated and deleted in a single request ( 43bc515 ) Libraries Python 3.32.0 (2025-05-12) - YANKED Reason this release was yanked: PR #2154 caused a performance regression.

### "Detect anomalies in multiple time series with the TimesFM model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- DETECT ANOMALIES ( ( SELECT FROM bike share trips WHERE trip hour >= TIMESTAMP ( '2017-07-01' ) AND trip hour TIMESTAMP ( '2017-08-01' ) ), ( SELECT FROM bike share trips WHERE trip hour >= TIMESTAMP ( '2017-08-01' ) AND trip hour TIMESTAMP ( '2017-09-01' ) ), anomaly prob threshold => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' , id cols => [ 'subscriber type' ] ); The results look similar to the following: +-----------------+-------------------------+------------------+------------+--------------------+---------------------+---------------------+---------------------------+ subscriber type time series timestamp time series data is anomaly lower bound upper bound anomaly probability ai detect anomalies status +-----------------+-------------------------+------------------+------------+--------------------+---------------------+---------------------+---------------------------+ Customer 2017-08-01 00:00:00 UTC 13.0 false -1.97939332204...
- 0.12345678901234... +-----------------+-------------------------+------------------+------------+--------------------+---------------------+---------------------+---------------------------+ ... ... ... ... ... ... ... ... +-----------------+-------------------------+------------------+------------+--------------------+---------------------+---------------------+---------------------------+ Subscriber 2017-08-01 00:00:00 UTC 13.0 false -1.97939332204...
- Go to BigQuery In the query editor, paste in the following query and click Run : WITH bike share trips AS ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) AS trip hour , COUNT ( ) AS num trips , subscriber type FROM bigquery-public-data.san francisco bikeshare.bikeshare trips GROUP BY TIMESTAMP TRUNC ( start date , HOUR ), subscriber type ) SELECT FROM AI .
- 0.38048622012138... +-----------------+-------------------------+------------------+------------+--------------------+---------------------+---------------------+---------------------------+ Subscriber 2017-08-01 01:00:00 UTC 3.0 false -5.12345678901...

### Introduction to loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Run queries on shared data To run queries on a BigQuery dataset that someone has shared with you, see Introduction to BigQuery sharing (formerly Analytics Hub) .
- Sharing is a data exchange platform that enables data sharing.
- For more information, see BigQuery subscriptions .

