---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.406Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery vector index drift monitoring and rebuild"
feature_slug: "bigquery-vector-index-drift-monitoring-and-rebuild"
latest_feature_date: "2025-07-22"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "ALTER VECTOR INDEX REBUILD"
  - "vector index rebuild"
  - "rebuild vector index"
  - "vector index stats"
  - "changed vector index"
  - "vector index drift"
  - "VECTOR_INDEX.STATISTICS"
  - "vector index monitoring"
---

# BigQuery vector index drift monitoring and rebuild

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports vector index drift measurement with VECTOR_INDEX.STATISTICS and rebuilding changed vector indexes with ALTER VECTOR INDEX REBUILD.

## Extended Definition

BigQuery vector index drift monitoring and rebuild is a DDL feature that lets users check how much indexed table data has drifted since a vector index was created via the VECTOR_INDEX.STATISTICS function, and then rebuild a changed active vector index using ALTER VECTOR INDEX REBUILD. The rebuild operation regenerates the index via an asynchronous shadow-index training and cutover process and is documented as not requiring index downtime. Running ALTER VECTOR INDEX REBUILD requires a BACKGROUND reservation assignment for the project containing the table, and the feature is labeled as Preview.

## Evidence Summary

The DDL reference provides the operational behavior and requirements of ALTER VECTOR INDEX REBUILD, while the BigQuery release notes confirm the availability of VECTOR_INDEX.STATISTICS for drift and the use of rebuild when table changes warrant it.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- These slots are located in the region-us region and managed by a project admin project : ALTER RESERVATION admin project.region-us.my-reservation SET OPTIONS ( slot capacity = 300 , autoscale max slots = 400 ); ALTER VECTOR INDEX REBUILD statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Details Use the ALTER VECTOR INDEX REBUILD statement to rebuild an active vector index on a table without having to drop the vector index, and without any index downtime.
- The ALTER VECTOR INDEX REBUILD statement completes before the shadow index replaces the active index, because the shadow index training and cutover happen asynchronously.
- To run the ALTER VECTOR INDEX REBUILD statement, you must create a reservation assignment with a job type of BACKGROUND for the project that contains the table.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- If table data has changed enough to require a vector index rebuild , you can use the ALTER VECTOR INDEX REBUILD statement to rebuild the vector index.
- Feature You can now use the VECTOR INDEX.STATISTICS function to calculate how much an indexed table's data has drifted between when a vector index was created and the present.

