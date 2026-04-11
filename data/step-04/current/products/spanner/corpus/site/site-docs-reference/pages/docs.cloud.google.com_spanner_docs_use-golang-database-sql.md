---
title: "Use the Spanner database/sql driver \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/use-golang-database-sql
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/use-golang-database-sql
  title: "Use the Spanner database/sql driver \_|\_ Google Cloud Documentation"
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
Use the Spanner database/sql driver
Stay organized with collections
Save and categorize content based on your preferences.
Go database/sql is a generic interface
around SQL (or SQL-like) databases for the Go programming language. To use
database/sql with your application, use the Spanner
database/sql driver .
The Spannerdatabase/sql driver supports both
GoogleSQL-dialect databases and PostgreSQL-dialect databases.
Install the Spanner database/sql driver
To use the Spanner database/sql driver in your
application, add the following module to your go.mod file:
github . com / googleapis / go - sql - spanner
Use the Spanner database/sql driver
To create a database/sql connection to a Spanner
database, use spanner as the driver name and a fully qualified database name
as the connection string:
GoogleSQL
import (
"context"
"database/sql"
"fmt"
_ "github.com/googleapis/go-sql-spanner"
)
func connect ( projectId , instanceId , databaseId string ) error {
ctx := context . Background ()
dsn := fmt . Sprintf ( "projects/%s/instances/%s/databases/%s" ,
projectId , instanceId , databaseId )
db , err := sql . Open ( "spanner" , dsn )
if err != nil {
return fmt . Errorf ( "failed to open database connection: %v" , err )
}
defer func () { _ = db . Close () }()
fmt . Printf ( "Connected to %s\n" , dsn )
row := db . QueryRowContext ( ctx , "select cast(@greeting as string)" , "Hello from Spanner" )
var greeting string
if err := row . Scan ( & greeting ); err != nil {
return fmt . Errorf ( "failed to get greeting: %v" , err )
}
fmt . Printf ( "Greeting: %s\n" , greeting )
return nil
}
PostgreSQL
import (
"context"
"database/sql"
"fmt"
_ "github.com/googleapis/go-sql-spanner"
)
func connect ( projectId , instanceId , databaseId string ) error {
ctx := context . Background ()
dsn := fmt . Sprintf ( "projects/%s/instances/%s/databases/%s" ,
projectId , instanceId , databaseId )
db , err := sql . Open ( "spanner" , dsn )
if err != nil {
return fmt . Errorf ( "failed to open database connection: %v" , err )
}
defer func () { _ = db . Close () }()
fmt . Printf ( "Connected to %s\n" , dsn )
// The Spanner database/sql driver supports both PostgreSQL-style query
// parameters ($1, $2, ...) and positional query parameters (?, ?, ...).
// This example uses PostgreSQL-style parameters.
row := db . QueryRowContext ( ctx , "select $1" , "Hello from Spanner PostgreSQL" )
var greeting string
if err := row . Scan ( & greeting ); err != nil {
return fmt . Errorf ( "failed to get greeting: %v" , err )
}
fmt . Printf ( "Greeting: %s\n" , greeting )
return nil
}
For more information, see the Spanner
database/sql driver GitHub repository .
Supported features
The Spanner Go database/sql examples code directory
contains ready-to-run examples for commonly used Spanner features.
Performance tips
To get the best possible performance when using the Spanner
database/sql driver, follow these best practices:
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
Learn more about using Spanner with the database/sql driver
code examples .
Learn more about database/sql .
Use GORM with Spanner .
File a GitHub issue
to report a feature request or bug, or to ask a question about
the Spanner database/sql driver.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
