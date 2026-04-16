---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.282Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Regional Spanner instances in Turin"
feature_slug: "regional-spanner-instances-in-turin"
latest_feature_date: "2023-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus"
keywords:
  - "italy"
  - "turin"
  - "instances"
  - "creating"
  - "regional"
  - "europe"
  - "supports"
---

# Regional Spanner instances in Turin

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports creating regional instances in the Turin, Italy (europe-west12) region.

## Extended Definition

Spanner supports creating regional instances in the Turin, Italy (europe-west12) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus)

## Supporting Pages

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- If not, enable it manually: Enable Spanner API To get the permissions that you need to create instances and databases, ask your administrator to grant you the Cloud Spanner Admin (roles/spanner.admin) IAM role on your project.
- Create a schema for your database Note: Spanner Studio (formerly labeled Query in the Google Cloud console) supports SQL, DML, and DDL operations in a single editor.
- Go to Spanner instances Click the name of the instance that has the database that you want to delete, for example, Test Instance .
- In the Configure your instance page, retain the default option Regional and select a configuration from the drop-down menu.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- The updated command for creating the table and index looks like this: CREATE TABLE Player ( PlayerID STRING ( 36 ) NOT NULL , IndexPartition INT64 NOT NULL Attribute INT64 NOT NULL ) PRIMARY KEY ( PlayerID ) CREATE INDEX idx attribute ON Player ( IndexPartition , Attribute ) The IndexPartition value needs to have a limited range for efficient querying, but it should also have range that is at least double the number of splits for efficient distribution.
- When removing data, delete rows instead of re-creating tables When you're working with Spanner, newly created tables haven't yet had an opportunity to undergo load-based or size-based splitting to improve performance.
- For the same reason, schema updates should use the provided Cloud Spanner API, and should avoid a manual strategy, such as creating a new table and copying the data from another table or a backup file.
- With the scalability of Spanner, it means that data doesn't need to be sharded into separate database instances when more performance or storage is needed; instead, you can add more nodes.

### "Capture custom client-side metrics using OpenCensus \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- You need to be familiar with custom metrics associated with OpenCensus and have the OpenCensus metrics libraries and the Google Cloud Observability exporter available to your application before capturing custom metrics.
- MustCompile ( "^projects/(?P<project>[^/]+)/instances/(?P<instance>[^/]+)/databases/(?P<database>[^/]+)$" ) func queryWithGRPCMetric ( w io .

