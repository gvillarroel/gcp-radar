---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.297Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Go database/sql driver"
feature_slug: "spanner-go-database-sql-driver"
latest_feature_date: "2022-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/use-golang-database-sql"
  - "https://docs.cloud.google.com/spanner/docs/drivers-overview"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-drivers"
keywords:
  - "golang"
  - "driver"
  - "generally"
  - "database"
---

# Spanner Go database/sql driver

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Spanner Golang database/sql driver is now generally available, enabling use of Go's standard database/sql package with Spanner.

## Extended Definition

The Spanner Golang database/sql driver is now generally available, enabling use of Go's standard database/sql package with Spanner.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/use-golang-database-sql](https://docs.cloud.google.com/spanner/docs/use-golang-database-sql)
- [https://docs.cloud.google.com/spanner/docs/drivers-overview](https://docs.cloud.google.com/spanner/docs/drivers-overview)
- [https://docs.cloud.google.com/spanner/docs/jdbc-drivers](https://docs.cloud.google.com/spanner/docs/jdbc-drivers)

## Supporting Pages

### Use the Spanner database/sql driver \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/use-golang-database-sql](https://docs.cloud.google.com/spanner/docs/use-golang-database-sql)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Install the Spanner database/sql driver To use the Spanner database/sql driver in your application, add the following module to your go.mod file: github . com / googleapis / go - sql - spanner Use the Spanner database/sql driver To create a database/sql connection to a Spanner database, use spanner as the driver name and a fully qualified database name as the connection string: GoogleSQL import ( "context" "database/sql" "fmt" "github.com/googleapis/go-sql-spanner" ) func connect ( projectId , instanceId , databaseId string ) error { ctx := context .
- Printf ( "Connected to %s\n" , dsn ) // The Spanner database/sql driver supports both PostgreSQL-style query // parameters ($1, $2, ...) and positional query parameters (?, ?, ...). // This example uses PostgreSQL-style parameters. row := db .
- Performance tips To get the best possible performance when using the Spanner database/sql driver, follow these best practices: Query parameters: Use query parameters instead of inline values in SQL statements.
- Home Documentation Databases Spanner Reference Send feedback Use the Spanner database/sql driver Stay organized with collections Save and categorize content based on your preferences.

### Overview of drivers \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/drivers-overview](https://docs.cloud.google.com/spanner/docs/drivers-overview)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GoogleSQL drivers and ORMs Feature database/sql GORM Spanner JDBC Hibernate Spring Data R2DBC ADO.NET Entity Framework Active Record SQLAlchemy Django Language Go Go Java Java Java Java C# C# Ruby Python Python Statement hints † Mutations Batch DML Batch DDL Stale reads Interleaved tables Partitioned DML Session labeling Request priority JSON type Request tagging Google SQL dialect PostgreSQL dialect Limitations View View View View View View This column describes R2DBC when used specifically with Spring Data. † Available only when sending literal SQL queries, by using the Spring Data @Query annotation.
- Home Documentation Databases Spanner Reference Send feedback Overview of drivers Stay organized with collections Save and categorize content based on your preferences.
- This page describes the drivers that are supported for Spanner for GoogleSQL-dialect databases and PostgreSQL-dialect databases.
- These drivers allow the use of Spanner databases through APIs defined by those frameworks.

### JDBC drivers \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-drivers](https://docs.cloud.google.com/spanner/docs/jdbc-drivers)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases Spanner Reference Send feedback JDBC drivers Stay organized with collections Save and categorize content based on your preferences.
- This page describes the JDBC drivers that Spanner supports for GoogleSQL-dialect databases and PostgreSQL-dialect databases.
- For information about the PostgreSQL JDBC driver, see Connect JDBC to a PostgreSQL-dialect database .
- This driver only supports PostgreSQL-dialect databases.

