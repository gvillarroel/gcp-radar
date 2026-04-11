---
title: "Overview of drivers \_|\_ Spanner \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/drivers-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/drivers-overview
  title: "Overview of drivers \_|\_ Spanner \_|\_ Google Cloud Documentation"
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
Overview of drivers
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the drivers that are supported for Spanner for
GoogleSQL-dialect databases and PostgreSQL-dialect databases.
Google supports open-source Spanner drivers for several popular
object-relational mapping libraries (ORMs) and frameworks. These drivers allow
the use of Spanner databases through APIs defined by those
frameworks.
The following tables list all the open-source ORMs and drivers that are
supported for Spanner and the features that each one supports.
There is one table for each supported SQL dialect.
You can also use the Spanner client libraries to access the
Spanner API. For more information, see
Spanner client libraries .
GoogleSQL drivers and ORMs
Feature
database/sql
GORM
Spanner JDBC
Hibernate
Spring Data
R2DBC *
ADO.NET
Entity Framework
Active Record
SQLAlchemy
Django
Language
Go
Go
Java
Java
Java
Java
C#
C#
Ruby
Python
Python
Statement hints
†
Mutations
Batch DML
Batch DDL
Stale reads
Interleaved tables
Partitioned DML
Session labeling
Request priority
JSON type
Request tagging
Google SQL dialect
PostgreSQL dialect
Limitations
View
View
View
View
View
View
* This column describes R2DBC when used specifically with Spring Data.
† Available only when sending literal SQL queries, by using the Spring Data
@Query annotation.
PostgreSQL drivers and ORMs
All PostgreSQL drivers require the PGAdapter proxy to be
running. For more information, see About PGAdapter .
Feature
Spanner JDBC
PostgreSQL JDBC
Hibernate
pgx
GORM
psycopg2
psycopg3
SQLAlchemy 2
node-postgres
Language
Java
Java
Java
Go
Go
Python
Python
Python
Node.js
Statement hints
Mutations
Batch DML
Batch DDL
Stale reads
Interleaved tables
Partitioned DML
Session labeling
Request priority
Request tagging
Limitations
View
View
View
View
View
View
View
View
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
