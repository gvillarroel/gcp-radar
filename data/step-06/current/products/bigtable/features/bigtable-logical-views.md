---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.323Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable logical views"
feature_slug: "bigtable-logical-views"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/create-manage-logical-views"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
keywords:
  - "save"
  - "logical"
  - "let"
  - "users"
  - "views"
  - "query"
  - "sql"
  - "bigtable"
---

# Bigtable logical views

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Bigtable logical views let users save a SQL query as a shareable view with controlled access permissions; Logical views for Bigtable tables are now available in Preview.

## Extended Definition

Bigtable logical views let users save a SQL query as a shareable view with controlled access permissions; Logical views for Bigtable tables are now available in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/create-manage-logical-views](https://docs.cloud.google.com/bigtable/docs/create-manage-logical-views)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)

## Supporting Pages

### Create and manage logical views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/create-manage-logical-views](https://docs.cloud.google.com/bigtable/docs/create-manage-logical-views)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To update a logical view's query: gcloud bigtable logical-views update VIEW \ --instance = INSTANCE --query = QUERY To enable deletion protection for a logical view: gcloud bigtable logical-views update VIEW \ --instance = INSTANCE \ --deletion-protection = true To disable deletion protection for a logical view: gcloud bigtable logical-views update VIEW \ --instance = INSTANCE \ --deletion-protection = false Replace the following: VIEW : the ID of the logical view to update INSTANCE : the ID of instance that contains the logical view QUERY : a valid GoogleSQL query Delete a logical view This action is permanent.
- Describe a logical view To get details about a logical view, use the gcloud bigtable logical-views describe command. gcloud bigtable logical-views describe VIEW \ --instance = INSTANCE The terminal displays details similar to the following: createTime: '2025-03-07T19:49:56.316578Z' etag: W/ "/v1/17919275593532352351" name: projects/my-project/instances/my-instance/logicalViews/my-view query: SELECT street FROM addresses updateTime: '2025-03-07T19:49:56.316578Z' deletion protection: true Query a logical view After you create a logical view, you can query it using SQL, much like you query a regular table.
- Click Save . gcloud To update a logical view to run a different query or to modify deletion protection, use the gcloud bigtable logical-views update command.
- Alternatively, you can ask your administrator to grant you the following permissions at the instance level: Create: bigtable.logicalViews.create Update: bigtable.logicalViews.update Delete: bigtable.logicalViews.delete To view and query logical views: To list or describe logical views, you need the Bigtable Reader ( roles/bigtable.reader ) role on the instance.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When querying Bigtable using SQL, column families are treated like Cassandra's maps . map key : key that uniquely identifies a key-value entry in a Cassandra map column qualifier : a label for a value stored in a table that's indexed by the unique row key.
- When querying Bigtable using SQL, columns are treated like keys of a map . column : the label for a value stored in a table that's indexed by the unique primary key. column : the label for a value stored in a table that's indexed by the unique row key.
- Home Documentation Databases Bigtable Guides Send feedback Bigtable for Cassandra users Stay organized with collections Save and categorize content based on your preferences.
- The Bigtable SQL API is familiar to CQL users. materialized view : a SELECT statement that defines a set of rows that corresponds to rows in an underlying source table.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Logical views let you save a SQL query as a specific, shareable view of your data—even with a flexible schema—and then control who has permission to see the results.
- April 07, 2025 Libraries Java 2.57.2 (2025-03-31) Bug Fixes Library should released as 2.57.2 ( #2549 ) ( 58d0bbd ) Go 1.36.0 (2025-03-31) Features bigtable/admin: Add MaterializedViews and LogicalViews APIs ( b323f88 ) bigtable/admin: Add MaterializedViews and LogicalViews APIs ( dd0d1d7 ) bigtable/admin: Publish row key schema fields in table proto and relevant admin APIs to setup a table with a row key schema ( 3f23a91 ) bigtable: Add Bind function to bind query params ( #11862 ) ( 24c5ae0 ) bigtable: Add datatypes for GoogleSQL ( #11816 ) ( 5a9eb10 ) bigtable: Add Execute method to execute GoogleSQL queries ( #11883 ) ( 0e53dcd ) bigtable: Add MaterializedViewName to ReadRows and SampleRowKeys ( b323f88 ) bigtable: Add methods to read ResultRow ( #11924 ) ( 8b8ca9e ) bigtable: Add PrepareQuery api and update ExecuteQuery to support it ( dd0d1d7 ) bigtable: Add PrepareStatement to run GoogleSQL queries ( #11829 ) ( ea00b17 ) bigtable: Add support for data APIs for Materialized Views ( #11796 ) ( f5ae93b ) bigtable: Add support for logical views ( #11792 ) ( 630d751 ) bigtable: Add support for materialized views for admin client ( #11793 ) ( 640be05 ) bigtable: Adding node scaling factor ( b680164 ) bigtable: Disable MV and LV tests ( #11827 ) ( 42dca03 ) bigtable: Row key schema support in admin client ( #11777 ) ( 4158bac ) Bug Fixes bigtable: Allow GC updates on emulated aggregate column family ( #11499 ) ( 0682bfa ) bigtable: Update golang.org/x/net to 0.37.0 ( 1144978 ) Documentation bigtable/admin: Fixed formatting of resource path strings ( dd0d1d7 ) bigtable: Update ExecuteQuery API docs to reflect changes ( dd0d1d7 ) Java 2.57.3 (2025-04-01) Bug Fixes Remove debug messages ( #2552 ) ( 6359834 ) March 31, 2025 Libraries Java 2.57.0 (2025-03-24) Features Add PreparedStatement and update ExecuteQuery API to use it ( #2534 ) ( 49d4d09 ) Java 2.57.1 (2025-03-24) Bug Fixes Handling of totalTimeout on sql plan refresh ( #2541 ) ( bf49cf9 ) March 26, 2025 Change The Monitoring page in the Google Cloud console for Bigtable has been renamed to System insights.
- May 26, 2025 Libraries Python 2.31.0 (2025-05-22) Features Add deletion protection support for LVs ( #1108 ) ( c6d384d ) Support authorized views ( #1034 ) ( 97a0198 ) Throw better error on invalid metadata response ( #1107 ) ( 2642317 ) Bug Fixes Re-add py-typed file for bigtable package ( #1085 ) ( 0c322c7 ) May 19, 2025 Libraries Java 2.59.0 (2025-05-16) Features bigtable: Add DeletionProtection support for Logical Views ( #2539 ) ( d9ba32b ) Dependencies Update googleapis/sdk-platform-java action to v2.58.0 ( #2581 ) ( c9b0289 ) Update shared dependencies ( #2584 ) ( ba82675 ) May 13, 2025 Feature You can export query results from Bigtable Studio.
- You can query your protobuf data using GoogleSQL for Bigtable, continuous materialized views, logical views, or BigQuery external tables.

