---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.929Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "MySQL 8.0.35 support"
feature_slug: "mysql-8-0-35-support"
latest_feature_date: "2023-11-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption"
  - "https://docs.cloud.google.com/sql/docs/editions-intro"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups"
keywords:
  - "mysql"
  - "35"
  - "sql"
  - "supports"
  - "minor"
  - "version"
---

# MySQL 8.0.35 support

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports MySQL minor version 8.0.35.

## Extended Definition

Cloud SQL for MySQL supports MySQL minor version 8.0.35.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption](https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption)
- [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)

## Supporting Pages

### "About client-side encryption \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption](https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption)
- Source ID: `site-docs-reference-required-5`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a connection pool and create a new table in the database Java import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import java.sql.Connection ; import java.sql.PreparedStatement ; import java.sql.SQLException ; import javax.sql.DataSource ; public class CloudSqlConnectionPool { public static DataSource createConnectionPool ( String dbUser , String dbPass , String dbName , String instanceConnectionName ) { HikariConfig config = new HikariConfig (); config . setJdbcUrl ( String . format ( "jdbc:mysql:///%s" , dbName )); config . setUsername ( dbUser ); config . setPassword ( dbPass ); config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.mysql.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , instanceConnectionName ); DataSource pool = new HikariDataSource ( config ); return pool ; } public static void createTable ( DataSource pool , String tableName ) throws SQLException { // Safely attempt to create the table schema. try ( Connection conn = pool . getConnection ()) { String stmt = String . format ( "CREATE TABLE IF NOT EXISTS %s ( " + "vote id SERIAL NOT NULL, time cast timestamp NOT NULL, team CHAR(6) NOT NULL," + "voter email VARBINARY(255), PRIMARY KEY (vote id) );" , tableName ); try ( PreparedStatement createTableStatement = conn . prepareStatement ( stmt );) { createTableStatement . execute (); } } } } Python import sqlalchemy def init tcp connection engine ( db user : str , db pass : str , db name : str , db host : str ) - > sqlalchemy . engine . base .
- String email = new String ( envAead . decrypt ( voteResults . getBytes ( 3 ), team . getBytes ())); System . out . println ( String . format ( "%s\t%s\t%s" , team , timeCast , email )); } } } } } Python import os import sqlalchemy import tink from .cloud kms env aead import init tink env aead from .cloud sql connection pool import init db from .encrypt and insert data import encrypt and insert data def main () - > None : """ Connects to the database, inserts encrypted data and retrieves encrypted data. """ db user = os . environ [ "DB USER" ] # e.g. "root", "mysql" db pass = os . environ [ "DB PASS" ] # e.g. "mysupersecretpassword" db name = os . environ [ "DB NAME" ] # e.g. "votes db" Set if connecting using TCP: db host = os . environ [ "DB HOST" ] # e.g. "127.0.0.1" Set if connecting using Unix sockets: db socket dir = os . environ . get ( "DB SOCKET DIR" , "/cloudsql" ) instance connection name = os . environ [ "INSTANCE CONNECTION NAME" ] e.g. "project-name:region:instance-name" credentials = os . environ . get ( "GOOGLE APPLICATION CREDENTIALS" , "" ) key uri = "gcp-kms://" + os . environ [ "GCP KMS URI" ] e.g. "gcp-kms://projects/...path/to/key Tink uses the "gcp-kms://" prefix for paths to keys stored in Google Cloud KMS.
- If it fails, an error will be thrown. voteStmt . execute (); System . out . println ( String . format ( "Successfully inserted row into table %s" , tableName )); } } } } Python import datetime import logging import os import sqlalchemy import tink from .cloud kms env aead import init tink env aead from .cloud sql connection pool import init db logger = logging . getLogger ( name ) def main () - > None : """ Connects to the database, encrypts and inserts some data. """ db user = os . environ [ "DB USER" ] # e.g. "root", "mysql" db pass = os . environ [ "DB PASS" ] # e.g. "mysupersecretpassword" db name = os . environ [ "DB NAME" ] # e.g. "votes db" Set if connecting using TCP: db host = os . environ [ "DB HOST" ] # e.g. "127.0.0.1" Set if connecting using Unix sockets: db socket dir = os . environ . get ( "DB SOCKET DIR" , "/cloudsql" ) instance connection name = os . environ [ "INSTANCE CONNECTION NAME" ] e.g. "project-name:region:instance-name" credentials = os . environ . get ( "GOOGLE APPLICATION CREDENTIALS" , "" ) key uri = "gcp-kms://" + os . environ [ "GCP KMS URI" ] e.g. "gcp-kms://projects/...path/to/key Tink uses the "gcp-kms://" prefix for paths to keys stored in Google Cloud KMS.
- URL . create ( drivername = "mysql+pymysql" , username = db user , # e.g. "my-database-user" password = db pass , # e.g. "my-database-password" database = db name , # e.g. "my-database-name" query = { "unix socket" : f " { db socket dir } / { instance connection name } " }, ), ) print ( "Created Unix socket connection pool" ) return pool def init db ( db user : str , db pass : str , db name : str , table name : str , instance connection name : str = None , db socket dir : str = None , db host : str = None , ) - > sqlalchemy . engine . base .

### "Cloud SQL backups overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- Source ID: `site-docs-reference-3`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Relevant log files include: cloudsql.googlapis.com/mysql-general.log cloudsql.googleapis.com/mysql.err If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.
- To upgrade to a later version, perform an in-place major version upgrade , use the Database Migration Service , or export and then import your database to a new Cloud SQL instance.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL backups overview Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server Cloud SQL lets you back up your instances on-demand, or automatically using a backup schedule.

### "Cloud SQL editions overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- Source ID: `site-docs-reference-3`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL editions features The following table provides an overview of key features enhancements available for Cloud SQL Enterprise Plus edition when compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions MySQL 8.0, 8.4 Note: If the database version for your instance is MySQL 8.4, then the default Cloud SQL edition is Enterprise Plus.
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No Cloud SQL Enterprise Plus edition enhancements Cloud SQL Enterprise Plus edition is ideal for applications that require the best performance, availability, and observability.
- MySQL PostgreSQL SQL Server Cloud SQL for MySQL editions is a tier-based pricing model where each edition provides different performance, availability, observability, and data protection characteristics to support your various business and application needs.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL editions overview Stay organized with collections Save and categorize content based on your preferences.

