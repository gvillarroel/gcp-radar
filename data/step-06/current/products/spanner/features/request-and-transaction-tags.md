---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.314Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Request and transaction tags"
feature_slug: "request-and-transaction-tags"
latest_feature_date: "2021-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
  - "https://docs.cloud.google.com/spanner/docs/use-ado-net"
keywords:
  - "correlate"
  - "tags"
  - "code"
  - "application"
  - "request"
  - "introduces"
  - "transaction"
---

# Request and transaction tags

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner introduces request tags and transaction tags in application code to correlate introspection statistics with queries and troubleshooting data for latency, contention, and performance.

## Extended Definition

Spanner introduces request tags and transaction tags in application code to correlate introspection statistics with queries and troubleshooting data for latency, contention, and performance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- [https://docs.cloud.google.com/spanner/docs/use-ado-net](https://docs.cloud.google.com/spanner/docs/use-ado-net)

## Supporting Pages

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can also use a statement hint to add a statement tag: @ { STATEMENT TAG = 'my-tag' } SELECT FROM Albums For more information, see Troubleshoot with request tags and transaction tags .
- For more information, see Troubleshoot with request tags and transaction tags .
- Tags The following statements manage request and transaction tags .
- Example: Transaction tags (Click to expand) The following example shows how to set transaction tags with the Spanner JDBC driver.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can also use a statement hint to add a statement tag: / @STATEMENT TAG='my-tag' / SELECT FROM Albums For more information, see Troubleshoot with request tags and transaction tags .
- For more information, see Troubleshoot with request tags and transaction tags .
- Tags The following statements manage request and transaction tags .
- Example: Transaction tags (Click to expand) The following example shows how to set transaction tags with the Spanner JDBC driver.

### Use the Spanner ADO.NET driver \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/use-ado-net](https://docs.cloud.google.com/spanner/docs/use-ado-net)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Tags: Use request and transaction tags to troubleshoot .
- DataProvider Use the Spanner ADO.NET driver To create a ADO.NET connection to a Spanner database, create a SpannerConnectionStringBuilder with a fully qualified database name as the connection string: GoogleSQL /// <summary> /// Create an ADO.NET connection to a Spanner database. /// </summary> /// <param name="connectionString"> /// A connection string in the format /// 'Data Source=projects/my-project/instances/my-instance/databases/my-database'. /// </param> public static async Task CreateConnection ( string connectionString ) { // Use a SpannerConnectionStringBuilder to construct a connection string. // The SpannerConnectionStringBuilder contains properties for the most // used connection string variables. var builder = new SpannerConnectionStringBuilder ( connectionString ) { // Sets the default isolation level that should be used for all // read/write transactions on this connection.
- WriteLine ( $"Greeting from Spanner: {reader.GetString(0)}" ); } } PostgreSQL /// <summary> /// Create an ADO.NET connection to a Spanner PostgreSQL database. /// </summary> /// <param name="connectionString"> /// A connection string in the format /// 'Data Source=projects/my-project/instances/my-instance/databases/my-database'. /// </param> public static async Task CreateConnection ( string connectionString ) { // Use a SpannerConnectionStringBuilder to construct a connection string. // The SpannerConnectionStringBuilder contains properties for the most // used connection string variables. var builder = new SpannerConnectionStringBuilder ( connectionString ) { // Sets the default isolation level that should be used for all // read/write transactions on this connection.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

