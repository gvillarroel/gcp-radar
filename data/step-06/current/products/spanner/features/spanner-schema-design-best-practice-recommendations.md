---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.167Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner schema design best practice recommendations"
feature_slug: "spanner-schema-design-best-practice-recommendations"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/bulk-loading"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
keywords:
  - "recommendations"
  - "practice"
  - "design"
  - "best"
  - "provides"
  - "schema"
---

# Spanner schema design best practice recommendations

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now provides automated schema design best-practice recommendations in Spanner Studio to help improve database schema quality.

## Extended Definition

Spanner now provides automated schema design best-practice recommendations in Spanner Studio to help improve database schema quality.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/bulk-loading](https://docs.cloud.google.com/spanner/docs/bulk-loading)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)

## Supporting Pages

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Spanner documentation has detailed schema design recommendations that you can review, but the following sections are some best practices for game DBs.
- Best practices This section provides recommendations for how to use Spanner in game design.
- CREATE TABLE Player ( PlayerID STRING ( 36 ) NOT NULL , Attribute INT64 NOT NULL ) PRIMARY KEY ( PlayerID ) CREATE INDEX idx attribute ON Player ( Attribute ) And the index was queried to find up to ten players with Attribute=23 , like this: SELECT PlayerID FROM Player @ { force index = idx attribute } WHERE Attribute = 23 LIMIT 10 According to the documentation on optimizing schema design , Spanner stores index data in the same way as tables, with one row per index entry.
- Home Documentation Databases Spanner Guides Send feedback Best practices for using Spanner as a gaming database Stay organized with collections Save and categorize content based on your preferences.

### Bulk loading best practices \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/bulk-loading](https://docs.cloud.google.com/spanner/docs/bulk-loading)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In general, if your data load is well-distributed and you follow best practices for schema design and bulk loading, your write throughput should double every few minutes until you saturate the available CPU resources in your instance.
- Best practices for periodic bulk loading to an existing database If you are updating an existing database that contains data but does not have any secondary indexes , then the recommendations in this document still apply.
- Home Documentation Databases Spanner Guides Send feedback Bulk loading best practices Stay organized with collections Save and categorize content based on your preferences.
- Measuring test runs will give you insight into which approach provides the best performance for your dataset.

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- WRITE APPEND ) . withSchema ( new TableSchema (). setFields ( Arrays . asList ( new TableFieldSchema () . setName ( "SingerId" ) . setType ( "INT64" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "FirstName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "LastName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ) ))) . withAutoSharding () . optimizedWrites () . withFormatFunction (( String element ) - > { ObjectMapper objectMapper = new ObjectMapper (); JsonNode jsonNode = null ; try { jsonNode = objectMapper . readTree ( element ); } catch ( IOException e ) { e . printStackTrace (); } return new TableRow () . set ( "SingerId" , jsonNode . get ( "SingerId" ). asInt ()) . set ( "FirstName" , jsonNode . get ( "FirstName" ). asText ()) . set ( "LastName" , jsonNode . get ( "LastName" ). asText ()); } ) ); Note that the BigQuery sink provides at-least-once semantics by default.
- NullPointerException : null value in entry : Cloud Storage PROJECT ID = null To address this issue, either use Apache Beam version 2.39.0 or later, or manually specify the version of beam-sdks-java-core as 2.37.0 : <dependency> <groupId>org.apache.beam</groupId> <artifactId>beam-sdks-java-core</artifactId> <version>2.37.0</version> </dependency> More information Change streams best practices Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- As described in Change streams best practices , we recommend creating a new database for this purpose, rather than allowing the connector to use your application's database to store its metadata table.
- Best practices for change streams and Dataflow The following are some best practices for building change streams connections by using Dataflow.

