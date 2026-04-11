---
title: "Export and import using pg_dump, pg_dumpall, and pg_restore \_|\_ Cloud SQL\
  \ for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp
  title: "Export and import using pg_dump, pg_dumpall, and pg_restore \_|\_ Cloud\
    \ SQL for PostgreSQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
PostgreSQL
Guides
Send feedback
Export and import using pg_dump, pg_dumpall, and pg_restore
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes exporting and importing data into Cloud SQL instances using
pg_dump, pg_dumpall, and pg_restore.
Note: If you're migrating an entire database from
a supported database server (on-premises, in AWS, or Cloud SQL) to a new
Cloud SQL instance, you can use the
Database Migration Service instead of exporting
and then importing files.
If you're exporting because you want to create a new instance from the exported
file, consider
restoring from a backup to a different instance
or cloning the instance .
Before you begin
Important: Before starting a large export, ensure that at least 25 percent
of the database size is free (on the instance). Doing so helps prevent
issues with aggressive autogrowth, which can affect the availability
of the instance.
Exports use database resources, but they do not interfere with normal database
operations unless the instance is under-provisioned.
For best practices, see
Best Practices for Importing and
Exporting Data .
After completing an import operation,
verify the
results.
Learn more about the pg_dump , pg_dumpall , and pg_restore
utilities.
Export data from Cloud SQL for PostgreSQL
You can use Cloud SQL to perform an export from the Google Cloud console,
the gcloud CLI , or the API.
To export a single PostgreSQL database, use the pg_dump utility.
To export all PostgreSQL databases of a cluster, use the pg_dumpall utility.
When using either utility, make sure that you also use the required options to
ensure that the resulting export file is valid for import back into Cloud SQL.
Export data from an on-premises PostgreSQL server using pg_dump
To export a database that is not managed by Cloud SQL, for later import
into Cloud SQL, use the pg_dump utility with the following
flags:
--no-owner
Ownership change commands must not be included in the dump file.
--format
The custom and directory formats are allowed if
the dump file is intended for use with pg_restore .
For plain-text format, export to a
SQL dump file
instead. This format is not compatible with pg_restore , and
must be imported using the Google Cloud console import command or
psql client.
--no-acl
This flag is required if your dump would otherwise contain statements
to grant or revoke membership in a SUPERUSER role.
--clean
This optional flag enables you to include the DROP <object> SQL statement that's required to drop (clean) database objects before you import them.
--if-exists
This optional flag enables you to include the IF EXISTS SQL statement with each DROP statement that's produced by the clean flag.
In addition, you must remove all of the following:
Extension-related statements, if Cloud SQL does not support that
extension.
See PostgreSQL Extensions
for the list of supported extensions.
CREATE EXTENSION or DROP EXTENSION statements
referencing plpgsql. This extension comes pre-installed on Cloud SQL
Postgres instances.
COMMENT ON EXTENSION statements.
Confirm that the default encoding, as determined by the database settings,
is correct for your data. If needed, you can override the default with the
--encoding flag.
Export data using the custom format from Cloud SQL for PostgreSQL
To use the custom format, from a command line, run pg_dump :
pg_dump \
-U USERNAME \
--format = custom \
--no-owner \
--no-acl \
DATABASE_NAME > DATABASE_NAME .dmp
Export data from multiple files in parallel from Cloud SQL for PostgreSQL
You can only use the directory output format to export data from multiple files in parallel .
To export in parallel, use the -j NUM_CORES flag.
NUM_CORES is the number of cores on the source instance.
Export all databases
pg_dumpall is
a utility that allows you to extract all PostgreSQL databases of a cluster into
a single script file. This file has SQL commands that you can use to restore the
databases.
To export all PostgreSQL databases in a Cloud SQL instance, use the
pg_dumpall utility with the following mandatory flags:
exclude-database=cloudsqladmin
exclude-database=template*
The pg_dumpall utility doesn't have access to the cloudsqladmin or
template databases.
If you're using the pg_dumpall utility to export all
PostgreSQL databases of a cluster that aren't managed by Cloud SQL, then
you don't have to use the exclude-database=cloudsqladmin flag.
If an instance has multiple databases and these databases have multiple
owners, then this command fails. If this occurs, then use the
pg_dump utility to export the databases individually.
To export all PostgreSQL databases, run the following command:
pg_dumpall \
-h HOST_NAME -l DATABASE_NAME --exclude-database = cloudsqladmin \
--exclude-database = template* > pg_dumpall.sql
To view role passwords when dumping roles with pg_dumpall , set the
cloudsql.pg_authid_select_role flag to a PostgreSQL role name. If the role exists,
then it has read-only ( SELECT ) access to the pg_authid table. This table
contains role passwords.
Import
Use the pg_restore utility to import an archive into a
Cloud SQL database. pg_restore works only with archives
created by pg_dump in either the
custom or directory formats.
Learn more about
pg_restore .
Import from a dump file created with the custom format to Cloud SQL for PostgreSQL
If the dump file was created with custom format, run the following command:
pg_restore \
--list DATABASE_NAME .dmp | sed -E 's/(.* EXTENSION )/; \1/g' > DATABASE_NAME .toc
Post-processing from sed comments out all extension statements
in the SQL dump file.
When importing using pg_restore , specify the processed table of contents with
the command-line argument "--use-list= DATABASE_NAME .toc".
Import data from multiple files in parallel to Cloud SQL for PostgreSQL
You can import data from multiple files in parallel only for archives created using the directory and
custom output formats.
To import in parallel, use the -j NUM_CORES flag.
NUM_CORES is the number of cores on the destination instance.
Import performance on Cloud SQL for PostgreSQL
pg_restore performance depends on the write
performance of the Cloud SQL instance.
Learn more
about performance in Cloud SQL.
What's next
Learn how to check the status of import and export operations .
Learn more about best practices for importing and exporting data .
Learn more about the PostgreSQL pg_dump utility .
Known issues for imports and exports .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
