---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.256Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner emulator PostgreSQL dialect support"
feature_slug: "cloud-spanner-emulator-postgresql-dialect-support"
latest_feature_date: "2023-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/pg-jdbc-connect"
keywords:
  - "emulator"
  - "postgresql"
  - "generally"
  - "available"
  - "dialect"
---

# Cloud Spanner emulator PostgreSQL dialect support

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner emulator support for the PostgreSQL dialect is generally available.

## Extended Definition

Spanner emulator support for the PostgreSQL dialect is generally available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/pg-jdbc-connect](https://docs.cloud.google.com/spanner/docs/pg-jdbc-connect)

## Supporting Pages

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- GoogleSQL dialect feature differences GoogleSQL feature PostgreSQL dialect recommendation Sample datasets No recommendation available.
- Home Documentation Databases Spanner Reference Send feedback Dialect parity between GoogleSQL and PostgreSQL Stay organized with collections Save and categorize content based on your preferences.
- This page describes the dialect differences between GoogleSQL and PostgreSQL and offers recommendations for using PostgreSQL approaches for specific GoogleSQL features.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- Other notable differences in the information schema for PostgreSQL-dialect databases are: Some of the table columns for open source PostgreSQL are available, but not populated in PostgreSQL-dialect databases.
- Tables related to open source PostgreSQL features that are not supported in PostgreSQL-dialect databases are not available.
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. option name character varying The name of the change stream option. option type character varying The data type of the change stream option. option value character varying The value of the change stream option. change stream privileges This row-filtered view lists all fine-grained access control privileges granted on all change streams to any database role, including public .

### "Connect JDBC to a PostgreSQL-dialect database \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/pg-jdbc-connect](https://docs.cloud.google.com/spanner/docs/pg-jdbc-connect)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add the Spanner JDBC driver as a dependency to your application. <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.76.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-spanner-jdbc</artifactId> <exclusions> <exclusion> <groupId>com.google.api.grpc</groupId> <artifactId>proto-google-cloud-spanner-executor-v1</artifactId> </exclusion> </exclusions> </dependency> Use a Spanner JDBC connection URL to connect to the PostgreSQL-dialect database. // Make sure the PostgreSQL JDBC driver is loaded.
- Class . forName ( "org.postgresql.Driver" ); try ( Connection connection = DriverManager . getConnection ( "jdbc:cloudspanner:/projects/ PROJECT NAME /instances/ INSTANCE NAME /databases/ DATABASE NAME " )) { try ( ResultSet resultSet = connection . createStatement (). executeQuery ( "select 'Hello world!' as hello" )) { while ( resultSet . next ()) { System . out . printf ( "Greetings from Cloud Spanner PostgreSQL: %s\n" , resultSet . getString ( 1 )); } } } The driver automatically detects the SQL dialect of the specified database.
- Home Documentation Databases Spanner Reference Send feedback Connect JDBC to a PostgreSQL-dialect database Stay organized with collections Save and categorize content based on your preferences.
- Unix domain sockets This section explains how to use Unix domain sockets to connect PostgreSQL JDBC driver to a PostgreSQL-dialect database.

