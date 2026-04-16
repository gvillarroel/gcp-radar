---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.259Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner GORM integration"
feature_slug: "spanner-gorm-integration"
latest_feature_date: "2023-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres"
keywords:
  - "gorm"
  - "integration"
  - "googlesql"
  - "supports"
---

# Spanner GORM integration

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports the GORM ORM for Go with GoogleSQL-dialect databases.

## Extended Definition

Spanner now supports the GORM ORM for Go with GoogleSQL-dialect databases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)
- [https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres](https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres)

## Supporting Pages

### Generate ML predictions using SQL \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)
- Source ID: `site-docs-root`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Spanner Vertex AI integration gives you the ability to generate predictions using your SQL code by calling the ML.PREDICT function for GoogleSQL or the spanner.ML PREDICT ROW function for PostgreSQL.
- GoogleSQL Register the gemini-pro model CREATE MODEL GeminiPro INPUT ( prompt STRING ( MAX )) OUTPUT ( content STRING ( MAX )) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /publishers/google/models/gemini-pro' , default batch size = 1 ); Replace the following: PROJECT : the project ID LOCATION : the region where you are using Vertex AI Run the model SELECT content FROM ML .
- Configure access for Spanner Vertex AI integration to Vertex AI endpoints Spanner creates the service agent and grants the necessary permissions automatically when Spanner executes the first MODEL DDL statement.
- Select a model When you use the ML.PREDICT (for GoogleSQL) or the spanner.ML PREDICT ROW (for PostgreSQL) function, you must specify the location of the ML model.

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Example: Savepoint support (Click to expand) The following example shows how to enable and disable savepoints support in the Spanner JDBC driver. try ( Connection connection = DriverManager . getConnection ( String . format ( "jdbc:cloudspanner:/projects/%s/instances/%s/databases/%s" , "my-project" , "my-instance" , "my-database" ))) { // Savepoints can only be used when AutoCommit=false. connection . setAutoCommit ( false ); // Disables setting a savepoint. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='DISABLED'" ); // The following statement fails because savepoints have been disabled. connection . setSavepoint ( "my savepoint1" ); // Enables setting a savepoint and releasing a savepoint. // Rolling back to a savepoint is disabled. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='FAIL AFTER ROLLBACK'" ); Savepoint mySavepoint2 = connection . setSavepoint ( "my savepoint2" ); connection . createStatement (). execute ( "insert into my table (id, value) values (1, 'One')" ); connection . releaseSavepoint ( mySavepoint2 ); connection . commit (); // Enables setting, releasing and rolling back to a savepoint. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='ENABLED'" ); Savepoint mySavepoint3 = connection . setSavepoint ( "my savepoint3" ); connection . createStatement (). execute ( "insert into my table (id, value) values (2, 'Two')" ); connection . rollback ( mySavepoint3 ); } What's next Learn how to connect JDBC to a GoogleSQL-dialect database .
- The Spanner JDBC driver supports three alternatives for executing partitioned queries: SET AUTO PARTITION MODE = true RUN PARTITIONED QUERY sql PARTITION sql followed by multiple RUN PARTITION 'partition-token' Each of these methods are described in the following sections.
- The Spanner JDBC driver (Java Database Connectivity) supports session management statements, which let you modify the state of your connection, execute transactions, and efficiently execute batches of statements.
- Home Documentation Databases Spanner Reference Send feedback JDBC session management commands (GoogleSQL) Stay organized with collections Save and categorize content based on your preferences.

### "Choosing the Right Dialect for Your Spanner Database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres](https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres)
- Source ID: `site-docs-root`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- If you want the tightest integration with Google Cloud (for example, to use BigQuery), then choose GoogleSQL.
- Spanner implementation of GoogleSQL and the PostgreSQL interface: Feature parity: Both GoogleSQL and PostgreSQL dialects provide equivalent support for Spanner's unique features, such as interleaved tables and query hints.
- Familiarity: if your team is already familiar with either PostgreSQL or GoogleSQL syntax and tools, choosing that dialect can streamline development and reduce the learning curve.
- GoogleSQL is well-integrated with Google Cloud services, while PostgreSQL has a vast open-source ecosystem.

