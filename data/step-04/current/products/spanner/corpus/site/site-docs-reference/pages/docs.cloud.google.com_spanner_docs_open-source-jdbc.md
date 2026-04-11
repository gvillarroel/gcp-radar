---
title: "Spanner JDBC driver \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/open-source-jdbc
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/open-source-jdbc
  title: "Spanner JDBC driver \_|\_ Google Cloud Documentation"
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
Spanner JDBC driver
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the Spanner JDBC driver,
which is recommended and authored by Google.
Google offers an open-source JDBC driver for Spanner. The open-source
driver enables applications to access Spanner through the Java Database
Connectivity (JDBC) API.
This page answers frequently asked questions about the Spanner JDBC driver.
To learn how to use the driver, see
Connect JDBC to a GoogleSQL-dialect database .
Data Manipulation Language (DML) and Data Definition Language (DDL) support
The Spanner JDBC driver driver supports DML and DDL statements.
Parent-child and interleaved table relationships
Interleaved table relationships are mapped to foreign key relationships in JDBC.
In Spanner, a record in the child table interleaved with a parent has
its primary key dependent on the associated parent table record's primary key.
Spanner defines the child table's parent primary key portion of its
primary key as the foreign key, referencing the parent table's primary key. Thus
you can navigate the interleaved table relationships using the foreign key
metadata calls in DatabaseMetaData . You can read more details in
About schemas .
Data types support
The Spanner JDBC driver doesn't support Spanner's STRUCT
data type. All other types have appropriate mappings.
Index support
You can use indexes in SELECT queries using the appropriate
query syntax . The open-source driver can also
create and modify indexes as DDL statements. You can access information about
particular indexes using the DatabaseMetaData.getIndexInfo() method.
Parameterized query support
This driver supports positional parameterization.
Connection pools
The Spanner JDBC driver handles pooling internally by keeping track of
all connections that have been opened, as well as the connection properties that
were used to open those connections. These pool connections are re-used, for
example, when a new connection is required that has the same connection
properties as an existing connection. A connection is closed automatically if it
has not been used in the last 60 seconds.
If you want to provide your own pool, you can use any standard
JDBC connection pool. Configure the pool to use the driver class
com.google.cloud.spanner.jdbc.JdbcDriver and set a valid Spanner
JDBC connection URL.
Limitations
This driver's capabilities have limits defined by the underlying system. See the
quotas and limits for Spanner.
Support
Consult our support page for support options.
What's next
Learn how to Connect JDBC to a GoogleSQL-dialect database .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
