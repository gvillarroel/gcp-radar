---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.354Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner Data Manipulation Language (DML)"
feature_slug: "cloud-spanner-data-manipulation-language-dml"
latest_feature_date: "2018-10-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/use-golang-database-sql"
  - "https://docs.cloud.google.com/spanner/docs/adding-spring"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "manipulation"
  - "executing"
  - "statements"
  - "language"
  - "supports"
---

# Cloud Spanner Data Manipulation Language (DML)

Product: Spanner
Coverage: LOW

## Step 02 Summary

Cloud Spanner supports executing Data Manipulation Language (DML) statements.

## Extended Definition

Cloud Spanner supports executing Data Manipulation Language (DML) statements.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/use-golang-database-sql](https://docs.cloud.google.com/spanner/docs/use-golang-database-sql)
- [https://docs.cloud.google.com/spanner/docs/adding-spring](https://docs.cloud.google.com/spanner/docs/adding-spring)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- JDBC drivers are also available, which support data manipulation language (DML) and data definition language (DDL) statements.
- Although typical game engine integrations don't have much flexibility in language selection, for platform services accessing Spanner, there are cases of gaming customers using Java or Go.
- Spanner offers built-in client libraries for many popular languages, which are typically feature-rich and performant.

### Integrate Spanner with Spring Data \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/adding-spring](https://docs.cloud.google.com/spanner/docs/adding-spring)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- SpannerTemplate provides methods for performing SQL queries and modifying data with Data Manipulation Language (DML) statements .
- It demonstrates how to use a SpannerRepository to execute read-write queries generated from interface definitions. / @Component public class SpannerRepositorySample { @Autowired SingerRepository singerRepository ; public void runRepositoryExample () { List<Singer> lastNameSingers = this . singerRepository . findByLastName ( "a last name" ); int fistNameCount = this . singerRepository . countByFirstName ( "a first name" ); int deletedLastNameCount = this . singerRepository . deleteByLastName ( "a last name" ); } } Manage Spanner To get information about your Spanner databases, update a schema with a Data Definition Language (DDL) statement, or complete other administrative tasks, you can acquire a SpannerDatabaseAdminTemplate bean.
- Example: @Table(name = "Singers") If you need to model more complex relationships, see the Spring Data Spanner reference for details about other annotations that the module supports.

### Use the Spanner database/sql driver \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/use-golang-database-sql](https://docs.cloud.google.com/spanner/docs/use-golang-database-sql)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Data Manipulation Language (DML): Group multiple DML statements into one batch instead of executing them one by one.
- Database Definition Language (DDL): Group multiple DDL statements into one batch instead of executing them one by one.
- Printf ( "Connected to %s\n" , dsn ) // The Spanner database/sql driver supports both PostgreSQL-style query // parameters ($1, $2, ...) and positional query parameters (?, ?, ...). // This example uses PostgreSQL-style parameters. row := db .
- Performance tips To get the best possible performance when using the Spanner database/sql driver, follow these best practices: Query parameters: Use query parameters instead of inline values in SQL statements.

