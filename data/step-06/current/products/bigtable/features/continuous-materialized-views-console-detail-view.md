---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.964Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Continuous materialized views console detail view"
feature_slug: "continuous-materialized-views-console-detail-view"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views"
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries"
  - "https://docs.cloud.google.com/bigtable/docs/create-manage-logical-views"
keywords:
  - "detail"
  - "materialized"
  - "continuous"
  - "view"
  - "views"
  - "console"
---

# Continuous materialized views console detail view

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable now supports viewing continuous materialized view details directly in the Google Cloud console.

## Extended Definition

Bigtable now supports viewing continuous materialized view details directly in the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries)
- [https://docs.cloud.google.com/bigtable/docs/create-manage-logical-views](https://docs.cloud.google.com/bigtable/docs/create-manage-logical-views)

## Supporting Pages

### Continuous materialized views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- Source ID: `site-docs-reference-2`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use counters instead of continuous materialized views for the following: Aggregations that don't require filters and don't need to be across rows If you need to immediately read your writes from the cluster they are written to Use continuous materialized views when you want to do the following: Generate a different key for queries against your aggregations See changes to the base table reflected in your aggregations Automatically combine data across multiple rows Use a combination of counters and continuous materialized views for use cases like when you want to do the following: Capture fresh metrics in an aggregate cell but keep historical rollups of those metrics Combine metrics in a continuous materialized view Resource provisioning and performance Ongoing processing for continuous materialized views occurs as a low-priority background job.
- Metric Description materialized view/max delay Upper bound of processing delay for the continuous materialized view materialized view/storage Amount of data used for the continuous materialized view storage in bytes materialized view/intermediate storage Amount of data used by intermediate processing for the continuous materialized view in bytes table/materialized view intermediate storage Amount of data used by intermediate processing for continuous materialized views defined on this table materialized view/user errors Number of errors from user data for the continuous materialized view.
- What's next Continuous materialized view query Create and manage continuous materialized views Create an asynchronous secondary index Schema design best practices Distributed counting in Bigtable Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Data in a continuous materialized view includes the following: Aggregated or transformed values that are derived from data in the source table Unaggregated values that define the grouping key Continuous materialized views let you pre-aggregate your data as you ingest it.

### Continuous materialized view queries \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-view-queries)
- Source ID: `site-docs-root-2`
- Final score: 203
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Create and manage continuous materialized views GoogleSQL for Bigtable reference documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Query details This section describes a continuous materialized view query and how the results might look when the view is queried.
- Before you read this document, you should be familiar with Continuous materialized views and GoogleSQL for Bigtable .
- For more information about metrics that can help you monitor your continuous materialized views, see Metrics .

### Create and manage logical views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/create-manage-logical-views](https://docs.cloud.google.com/bigtable/docs/create-manage-logical-views)
- Source ID: `site-docs-reference-2`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next GoogleSQL for Bigtable overview Continuous materialized views Overview of authorized views Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For a comparison with continuous materialized views and authorized views, see Tables and views .
- Describe a logical view To get details about a logical view, use the gcloud bigtable logical-views describe command. gcloud bigtable logical-views describe VIEW \ --instance = INSTANCE The terminal displays details similar to the following: createTime: '2025-03-07T19:49:56.316578Z' etag: W/ "/v1/17919275593532352351" name: projects/my-project/instances/my-instance/logicalViews/my-view query: SELECT street FROM addresses updateTime: '2025-03-07T19:49:56.316578Z' deletion protection: true Query a logical view After you create a logical view, you can query it using SQL, much like you query a regular table.
- To update a logical view's query: gcloud bigtable logical-views update VIEW \ --instance = INSTANCE --query = QUERY To enable deletion protection for a logical view: gcloud bigtable logical-views update VIEW \ --instance = INSTANCE \ --deletion-protection = true To disable deletion protection for a logical view: gcloud bigtable logical-views update VIEW \ --instance = INSTANCE \ --deletion-protection = false Replace the following: VIEW : the ID of the logical view to update INSTANCE : the ID of instance that contains the logical view QUERY : a valid GoogleSQL query Delete a logical view This action is permanent.

