---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.731Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery reservation assignment job type"
feature_slug: "bigquery-reservation-assignment-job-type"
latest_feature_date: "2022-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "folder organization project assignment"
  - "assign to reservation"
  - "reservation assignment type"
  - "reservation assignment"
  - "assignment job_type"
  - "Cloud Console reservation"
  - "reservation job type"
  - "select job type"
---

# BigQuery reservation assignment job type

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Cloud console now allows selecting a job type when assigning folders, organizations, or projects to a reservation.

## Extended Definition

BigQuery reservation assignments use a job type dimension to classify how a reservation is applied to workloads, with categories such as QUERY and BACKGROUND. Reservation assignments are defined with an assignee and reservation scope, including folder, organization, and project targets, and recent release updates add new assignment types and per-job assignment behavior. Fine-grained DML offloaded deleted-data processing jobs are explicitly documented as requiring the BACKGROUND reservation assignment type rather than QUERY.

## Evidence Summary

These pages document reservation assignment mechanics (including assignee scope and assignment flags), the use of assignment types for specific BigQuery job behavior, and release-note additions of new BACKGROUND and per-job reservation assignment capabilities.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- The location flag is optional for the following commands: query cp load extract partition update wait mk when you use the --dataset , --reservation , --capacity commitment , or --reservation assignment flags ls when you use the --reservation , --capacity commitment , or --reservation assignment flags All other commands ignore the --location flag.
- Specify 0 to remove the existing expiration. --description= DESCRIPTION Updates the description of a dataset, table, table snapshot, model, or view. --destination reservation id= RESERVATION ID When used with the --reservation assignment flag, moves an existing reservation assignment to the specified reservation.
- Your selection specifies the type of resource to create. --capacity commitment : Purchase a capacity commitment. --connection : Create a connection. --dataset or -d : Create a dataset. --materialized view : Create a materialized view. --reservation : Create a reservation. --reservation assignment .
- Synopsis bq show [ FLAGS ] [ RESOURCE ] Flags and arguments The bq show command uses the following flags and arguments: --assignee id= ASSIGNEE When used with the --reservation assignment flag, specifies the ID of a folder, organization, or project.

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Fine-grained DML's offloaded deleted data processing jobs are considered background jobs and require the use of the BACKGROUND reservation assignment type , rather than the QUERY reservation assignment type .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- November 03, 2025 Libraries Go 1.72.0 (2025-10-28) Features bigquery/reservation: Add new BACKGROUND CHANGE DATA CAPTURE , BACKGROUND COLUMN METADATA INDEX , and BACKGROUND SEARCH INDEX REFRESH reservation assignment types ( 182df61 ) bigquery/reservation: Add new reservation IAM policy get/set/test methods ( 182df61 ) bigquery/reservation: Add support for creation and modification of new reservation groups ( 182df61 ) bigquery: Expose continuous query in config ( #13130 ) ( 2f0942b ) Bug Fixes bigquery/v2: Upgrade gRPC service registration func ( 8fffca2 ) bigquery: Upgrade gRPC service registration func ( 8fffca2 ) October 31, 2025 Feature We have increased the row capacity for pivot tables backed by BigQuery in Connected Sheets from 100,000 to 200,000 rows.
- June 02, 2025 Libraries Go 1.69.0 (2025-05-27) Features bigquery/analyticshub: Add support for Analytics Hub & Marketplace Integration ( 2aaada3 ) bigquery/analyticshub: Adding allow only metadata sharing to Listing resource ( 2aaada3 ) bigquery/analyticshub: Adding CommercialInfo message to the Listing and Subscription resources ( 2aaada3 ) bigquery/analyticshub: Adding delete commercial and revoke commercial to DeleteListingRequest and RevokeSubscriptionRequest ( 2aaada3 ) bigquery/analyticshub: Adding DestinationDataset to the Subscription resource ( 2aaada3 ) bigquery/analyticshub: Adding routine field to the SharedResource message ( 2aaada3 ) bigquery: Add support for dataset view and update modes ( #12290 ) ( 7c1f961 ) bigquery: Job creation mode GA ( #12225 ) ( 1d8990d ) Libraries Node.js 8.1.0 (2025-05-29) Features Job creation mode GA ( #1480 ) ( b51359a ) Support per-job reservation assignment ( #1477 ) ( 8151e72 ) Libraries Python 3.34.0 (2025-05-27) Features Job creation mode GA ( #2190 ) ( 64cd39f ) Bug Fixes deps: Update all dependencies ( #2184 ) ( 12490f2 ) Documentation Update query.py ( #2192 ) ( 9b5ee78 ) Use query and wait in the array parameters sample ( #2202 ) ( 28a9994 ) Feature BigQuery now supports using Spanner external datasets with authorized views , authorized routines , and Cloud resource connections .
- May 19, 2025 Libraries Go 1.68.0 (2025-05-12) Features bigquery/analyticshub: Support new feature Sharing Cloud Pubsub Streams via AH (GA) and Subscriber Email logging feature ( #11908 ) ( a21d596 ) bigquery/storage: Increased the number of partitions can be written in a single request ( 43bc515 ) bigquery: Add performance insights ( #12101 ) ( aef68ab ) bigquery: Add some missing fields to BQ stats ( #12212 ) ( 77b08e8 ) bigquery: Add WriteTruncateData write disposition ( #12013 ) ( b1126a3 ) bigquery: New client(s) ( #12228 ) ( f229bd9 ) bigquery: Support managed iceberg tables ( #11931 ) ( 35e0774 ) bigquery: Support per-job reservation assignment ( #12078 ) ( c9cebcc ) Bug Fixes bigquery: Cache total rows count ( #12230 ) ( 202dce0 ), refs #11874 #11873 bigquery: Parse timestamps with timezone info ( #11950 ) ( 530d522 ) bigquery: Update google.golang.org/api to 0.229.0 ( 3319672 ) bigquery: Upgrade gRPC service registration func ( 7c01015 ) Documentation bigquery/storage: Updated the number of partitions (from 100 to 900) can be inserted, updated and deleted in a single request ( 43bc515 ) Libraries Python 3.32.0 (2025-05-12) - YANKED Reason this release was yanked: PR #2154 caused a performance regression.

