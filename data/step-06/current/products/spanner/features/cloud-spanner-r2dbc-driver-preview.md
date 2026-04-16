---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.316Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner R2DBC Driver (Preview)"
feature_slug: "cloud-spanner-r2dbc-driver-preview"
latest_feature_date: "2021-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/use-oss-r2dbc"
  - "https://docs.cloud.google.com/spanner/docs/drivers-overview"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-drivers"
keywords:
  - "reactive"
  - "r2dbc"
  - "fully"
  - "driver"
  - "introduced"
  - "enables"
  - "preview"
---

# Cloud Spanner R2DBC Driver (Preview)

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner introduced an R2DBC driver in Preview that enables fully reactive applications to connect to Spanner.

## Extended Definition

Cloud Spanner introduced an R2DBC driver in Preview that enables fully reactive applications to connect to Spanner.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/use-oss-r2dbc](https://docs.cloud.google.com/spanner/docs/use-oss-r2dbc)
- [https://docs.cloud.google.com/spanner/docs/drivers-overview](https://docs.cloud.google.com/spanner/docs/drivers-overview)
- [https://docs.cloud.google.com/spanner/docs/jdbc-drivers](https://docs.cloud.google.com/spanner/docs/jdbc-drivers)

## Supporting Pages

### Use the open-source R2DBC driver \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/use-oss-r2dbc](https://docs.cloud.google.com/spanner/docs/use-oss-r2dbc)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Your application can make use of the reactive database connectivity with Spanner by using the Spanner R2DBC driver.
- Use the Spanner R2DBC driver To add only the Spanner R2DBC driver to your application, add the following dependency: <dependency> <groupId>com.google.cloud</groupId> <artifactId>cloud-spanner-r2dbc</artifactId> <version>1.3.0</version> </dependency> For more information, see the Spanner R2DBC driver GitHub repository and the sample code .
- The driver is a transitive dependency of the dialect. <dependency> <groupId>com.google.cloud</groupId> <artifactId>cloud-spanner-spring-data-r2dbc</artifactId> <version>1.2.2</version> </dependency> To learn how to use its template and repositories, see the Spring Data R2DBC reference .
- Home Documentation Databases Spanner Reference Send feedback Use the open-source R2DBC driver Stay organized with collections Save and categorize content based on your preferences.

### Overview of drivers \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/drivers-overview](https://docs.cloud.google.com/spanner/docs/drivers-overview)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GoogleSQL drivers and ORMs Feature database/sql GORM Spanner JDBC Hibernate Spring Data R2DBC ADO.NET Entity Framework Active Record SQLAlchemy Django Language Go Go Java Java Java Java C# C# Ruby Python Python Statement hints † Mutations Batch DML Batch DDL Stale reads Interleaved tables Partitioned DML Session labeling Request priority JSON type Request tagging Google SQL dialect PostgreSQL dialect Limitations View View View View View View This column describes R2DBC when used specifically with Spring Data. † Available only when sending literal SQL queries, by using the Spring Data @Query annotation.
- Home Documentation Databases Spanner Reference Send feedback Overview of drivers Stay organized with collections Save and categorize content based on your preferences.
- The following tables list all the open-source ORMs and drivers that are supported for Spanner and the features that each one supports.
- This page describes the drivers that are supported for Spanner for GoogleSQL-dialect databases and PostgreSQL-dialect databases.

### JDBC drivers \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-drivers](https://docs.cloud.google.com/spanner/docs/jdbc-drivers)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spanner JDBC driver PostgreSQL JDBC driver Download Maven Central Maven Central Written by Google PostgreSQL Support Google Google Open source Yes; Apache license Yes; BSD 2-Clause Note: Spanner previously supported the Simba JDBC driver.
- Spanner supports the following JDBC drivers: The Spanner JDBC driver, which is an open-source JDBC driver that is written, provided, and supported by Google, similar to the Cloud Client Libraries .
- Home Documentation Databases Spanner Reference Send feedback JDBC drivers Stay organized with collections Save and categorize content based on your preferences.
- This page describes the JDBC drivers that Spanner supports for GoogleSQL-dialect databases and PostgreSQL-dialect databases.

