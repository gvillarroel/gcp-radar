---
title: "Cloud SQL for MySQL features \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/1st-2nd-gen-differences
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/mysql/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/1st-2nd-gen-differences
  title: "Cloud SQL for MySQL features \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
MySQL
Guides
Send feedback
Cloud SQL for MySQL features
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes the major features and capabilities of
Cloud SQL for MySQL. Cloud SQL is also available for
PostgreSQL and SQL Server .
Note: For information about the supported versions of database engines, see
Database versions and version policies .
MySQL features by Cloud SQL editions
For more information about the features for the Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition
of Cloud SQL for MySQL,
see Introduction to Cloud SQL editions .
General MySQL features supported for Cloud SQL
Fully managed MySQL Community Edition databases in the cloud.
Instances available in the Americas, EU, Asia, and Australia. See all
locations where you can create Cloud SQL
instances .
Supports migration from source databases to Cloud SQL destination databases
using Database Migration Service
(DMS) .
Customer data encrypted on Google's internal networks and in database
tables, temporary files, and backups.
Support for secure external connections with the Cloud SQL Auth Proxy or with the
SSL/TLS protocol.
Support for private IP (private services access).
Data replication between multiple zones with automatic failover.
Import and export databases using mysqldump , or import and export CSV
files.
Support for MySQL wire protocol and standard MySQL connectors.
Automated backups, on-demand backups, and point-in-time recovery.
Instance cloning.
Integration with Google Cloud Observability logging and monitoring.
ISO/IEC 27001
compliant.
Support for read pools and read pool autoscaling
Storage shrink. For more information, see About storage shrink .
Application languages supported for Cloud SQL for MySQL
You can use Cloud SQL with App Engine applications running in the
flexible environment that are written in:
C#
Go
Java
Node.js
PHP
Python
Ruby
You can also use Cloud SQL with external applications that use the standard
MySQL protocol.
How you can connect to Cloud SQL for MySQL instances
You can connect to a Cloud SQL instance from the following:
A mysql client
Third-party tools like SQL Workbench or Toad for
MySQL
External applications
App Engine applications
Applications running on
Compute Engine
Applications running on
Google Kubernetes Engine
Cloud Run functions
Cloud Run
Google Apps Script
scripts
Connecting to Cloud SQL with Private Google Access isn't supported. Private
services access is supported. For more information, see Private Access Options
for Services .
User management in Cloud SQL for MySQL 8.0
Due to changes in MySQL 8.0, you can't use CREATE or DELETE statements for
MySQL user management. You also can't modify user privileges using INSERT ,
UPDATE , or DELETE statements. Instead, use CREATE USER , DROP USER , GRANT ,
and REVOKE statements to modify user privileges. For more information, see
Account management
notes .
Note: Disregard information under Account management notes about running
mysql_upgrade to upgrade to version 8.0. Instead, upgrade using the procedure
in Upgrading MySQL on an
instance .
Differences between standard MySQL and Cloud SQL for MySQL
In general, the MySQL functionality provided by a Cloud SQL instance is the
same as the functionality provided by a locally-hosted MySQL instance. However,
there are a few differences between a standard MySQL instance and a Cloud SQL
instance.
MySQL features unsupported for Cloud SQL
Federated Engine
Memory Storage Engine
The following feature is unsupported for Cloud SQL for MySQL 5.6 and
5.7:
The SUPER privilege
Note: Because Cloud SQL is a managed
service, it restricts access to certain system procedures and tables that
require advanced privileges.
The following features are unsupported for Cloud SQL for MySQL 8.0:
FIPS mode
Resource groups
The following feature is unsupported for Cloud SQL for MySQL 8.4:
Tagged GTIDs . For more information about tagged GTIDs, see
"MySQL Replication: tagged GTIDs" in the
Features Added or Changed in MySQL 8.4
section of the MySQL 8.4 release notes.
In addition, Cloud SQL for MySQL doesn't grant the following privileges introduced in MySQL 8.4:
TRANSACTION_GTID_TAG
TELEMETRY_LOG_ADMIN
MySQL plugins unsupported for Cloud SQL
InnoDB memcached plugin
X plugin
Clone plugin
InnoDB data-at-rest encryption
validate_password component
MySQL statements unsupported for Cloud SQL
The following SQL statements generate an error with the Error 1290:
The MySQL server is running with the Google option so it cannot execute this
statement message:
LOAD DATA INFILE
Note: LOAD DATA LOCAL INFILE is supported.
SELECT ... INTO OUTFILE
SELECT ... INTO DUMPFILE
INSTALL PLUGIN ...
UNINSTALL PLUGIN
CREATE FUNCTION ... SONAME ...
The following statements aren't supported because MySQL instances use GTID
replication:
CREATE TABLE ... SELECT statements
Transactions or statements that update both transactional and
nontransactional tables
The following MySQL statement is unsupported for Cloud SQL for MySQL
5.6 and 5.7, but is supported for Cloud SQL for MySQL 8.0:
CREATE TEMPORARY TABLE statements inside transactions
For more information, see the MySQL
documentation .
MySQL functions unsupported for Cloud SQL
LOAD_FILE()
MySQL client program features unsupported for Cloud SQL
mysqldump using the
--tab option or options that are used with --tab . This is because the
FILE
privilege isn't granted for instance users. All other mysqldump options are
supported. For information on using mysqldump options that optimize your
file for importing into Cloud SQL, see Export from your local MySQL
server using
mysqldump .
mysqlimport
without using the --local option. This is because of the LOAD DATA
INFILE restriction. To import data into your Cloud SQL instance, see
importing using a dump
file or importing
using a CSV file .
If you want to import databases with binary data into your Cloud SQL
instance, you must use the --hex-blob option with mysqldump .
Although hex-blob isn't a required flag when you're using a local MySQL
server instance and the mysql client, it's required if you want to import
any databases with binary data into your Cloud SQL instance. To import
data into your Cloud SQL instance, see importing using a dump
file or importing
using a CSV file .
Not all MySQL options and parameters are enabled for editing as
Cloud SQL flags .
To request the addition of a configurable Cloud SQL flag, use the
Cloud SQL Discussion
group .
InnoDB is the only supported storage engine. For help with converting tables
from MyISAM to InnoDB, see Converting table to
InnoDB in the MySQL
documentation.
MySQL options preset for Cloud SQL
Cloud SQL runs MySQL with a specific set of options. If an option might
impact how your applications work, we note it here for your information.
skip-name-resolve
This flag impacts how hostnames are resolved for client connections. See
skip-name-resolve
in the MySQL documentation.
log_bin
This flag reports whether binary logging is enabled. If the --log-bin option
is used, then the value of this variable is ON ; otherwise it's OFF . See
log_bin
in the MySQL documentation.
MySQL authentication
This section describes the changes made to
MySQL built-in authentication .
MySQL 8.0 authentication plugin default
Cloud SQL for MySQL 8.0 uses mysql_native_password as the default
authentication plugin for new users instead of caching_sha2_password . The
mysql_native_password plugin is the default for MySQL 5.6 and 5.7 users.
If you want new users to use the
caching_sha2_password
plugin as the default authentication, you can configure your instance flag for
default_authentication_plugin to use caching_sha2_password .
To configure existing users to use caching_sha2_password , use the ALTER USER
command to change the authentication plugin.
Users that have caching_sha2_password authentication might need to use
the get-server-public-key
flag when connecting. For details, see
Caching SHA-2 Pluggable Authentication
in the MySQL documentation.
MySQL 8.4 authentication plugin default
Starting in Cloud SQL for MySQL 8.4, the
caching_sha2_password plugin is the default authentication plugin.
All internal users and new user accounts that you create use the
caching_sha2_password plugin for authentication. Cloud SQL for MySQL
8.4 continues to support existing Cloud SQL user accounts that
use the mysql_native_password
plugin. These existing accounts can continue to connect
to Cloud SQL for MySQL instances after
those instances have been upgraded MySQL 8.4.
Important: BigQuery federated queries don't support the
caching_sha2_password authentication plugin. If you want to use
BigQuery to query your MySQL 8.4 database, don't update the
authentication plugin from caching_sha2_password to
mysql_native_password . For more details, see
Troubleshooting .
In Cloud SQL for MySQL 8.4, the mysql_native_password
authentication plugin is deprecated.
Any attempt to create a new user account with the deprecated mysql_native_password
authentication plugin results in an error.
You can't set the
authentication_policy of an account in Cloud SQL for MySQL 8.4 to use
mysql_native_password .
To change your existing database user accounts to use the caching_sha2_password
authentication plugin, use the following command:
ALTER USER ' username ' @ '%'
IDENTIFIED WITH caching_sha2_password BY ' user_password ' ;
Replace username and user_password
with the values for the user account that you are updating.
For more information about the implications of this change on the compatibility
between servers, clients, and connectors, see
caching_sha2_password as the Preferred Authentication Plugin .
Changes to MySQL system flags in Cloud SQL
For some MySQL system flags, Cloud SQL uses values that differ from the
default values. You can't change the values for these flags. For a list of
flags, see
System flags changed in Cloud SQL .
Cloud SQL features unsupported in Cloud SQL for MySQL 8.0 and later versions
Cloud SQL for MySQL 8.0 and later versions don't support the legacy
Cloud SQL for MySQL high availability (HA) configuration that uses failover replicas.
Cloud SQL for MySQL 8.0 and later versions only support the regional
HA configuration .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
