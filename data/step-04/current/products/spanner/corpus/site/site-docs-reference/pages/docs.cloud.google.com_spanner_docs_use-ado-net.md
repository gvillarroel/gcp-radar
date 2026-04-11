---
title: "Use the Spanner ADO.NET driver \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/use-ado-net
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/use-ado-net
  title: "Use the Spanner ADO.NET driver \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Reference
Send feedback
Use the Spanner ADO.NET driver
Stay organized with collections
Save and categorize content based on your preferences.
ADO.NET is a generic interface
for access to data sources for .NET. To use ADO.NET with your
application, use the Spanner
ADO.NET driver .
The SpannerADO.NET driver supports both
GoogleSQL-dialect databases and PostgreSQL-dialect databases.
Install the Spanner ADO.NET driver
To use the Spanner ADO.NET driver in your
application, add the following package to your .NET project:
Google . Cloud . Spanner . DataProvider
Use the Spanner ADO.NET driver
To create a ADO.NET connection to a Spanner
database, create a SpannerConnectionStringBuilder with a fully qualified
database name as the connection string:
GoogleSQL
/// <summary>
/// Create an ADO.NET connection to a Spanner database.
/// </summary>
/// <param name="connectionString">
/// A connection string in the format
/// 'Data Source=projects/my-project/instances/my-instance/databases/my-database'.
/// </param>
public static async Task CreateConnection ( string connectionString )
{
// Use a SpannerConnectionStringBuilder to construct a connection string.
// The SpannerConnectionStringBuilder contains properties for the most
// used connection string variables.
var builder = new SpannerConnectionStringBuilder ( connectionString )
{
// Sets the default isolation level that should be used for all
// read/write transactions on this connection.
DefaultIsolationLevel = IsolationLevel . RepeatableRead ,
// The Options property can be used to set any connection property
// as a key-value pair.
Options = "statement_cache_size=2000"
};
await using var connection = new SpannerConnection ( builder . ConnectionString );
await connection . OpenAsync ();
await using var command = connection . CreateCommand ();
command . CommandText = "SELECT 'Hello World' as Message" ;
await using var reader = await command . ExecuteReaderAsync ();
while ( await reader . ReadAsync ())
{
Console . WriteLine ( $"Greeting from Spanner: {reader.GetString(0)}" );
}
}
PostgreSQL
/// <summary>
/// Create an ADO.NET connection to a Spanner PostgreSQL database.
/// </summary>
/// <param name="connectionString">
/// A connection string in the format
/// 'Data Source=projects/my-project/instances/my-instance/databases/my-database'.
/// </param>
public static async Task CreateConnection ( string connectionString )
{
// Use a SpannerConnectionStringBuilder to construct a connection string.
// The SpannerConnectionStringBuilder contains properties for the most
// used connection string variables.
var builder = new SpannerConnectionStringBuilder ( connectionString )
{
// Sets the default isolation level that should be used for all
// read/write transactions on this connection.
DefaultIsolationLevel = IsolationLevel . RepeatableRead ,
// The Options property can be used to set any connection property
// as a key-value pair.
Options = "statement_cache_size=2000"
};
await using var connection = new SpannerConnection ( builder . ConnectionString );
await connection . OpenAsync ();
await using var command = connection . CreateCommand ();
command . CommandText = "SELECT 'Hello World' as Message" ;
await using var reader = await command . ExecuteReaderAsync ();
while ( await reader . ReadAsync ())
{
Console . WriteLine ( $"Greeting from Spanner: {reader.GetString(0)}" );
}
}
For more information, see the Spanner
ADO.NET driver GitHub repository .
Supported features
The Spanner ADO.NET driver examples code directory
contains ready-to-run examples for commonly used Spanner features.
Performance tips
To get the best possible performance when using the Spanner
ADO.NET driver, follow these best practices:
Query parameters: Use query parameters instead of
inline values in SQL statements. This lets Spanner cache and
reuse the execution plan for frequently used SQL statements.
Database Definition Language (DDL): Group multiple DDL statements into one
batch instead of executing them one by one.
Data Manipulation Language (DML): Group multiple DML statements into one
batch instead of executing them one by one.
Read-only transactions: Use read-only transactions
for workloads that only read data. Read-only transactions don't take locks.
Tags: Use request and transaction tags to
troubleshoot .
What's next
Learn more about using Spanner with the ADO.NET driver
code examples .
Learn more about ADO.NET .
File a GitHub issue
to report a feature request or bug, or to ask a question about
the Spanner ADO.NET driver.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
