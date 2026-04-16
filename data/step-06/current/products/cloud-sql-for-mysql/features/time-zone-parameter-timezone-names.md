---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.957Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "time_zone parameter timezone names"
feature_slug: "time-zone-parameter-timezone-names"
latest_feature_date: "2022-07-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore"
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
keywords:
  - "time"
  - "zone"
  - "parameter"
  - "timezone"
  - "names"
  - "sql"
  - "mysql"
  - "supports"
---

# time_zone parameter timezone names

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports setting timezone names as values for the time_zone parameter.

## Extended Definition

Cloud SQL for MySQL supports setting timezone names as values for the time_zone parameter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption](https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)

## Supporting Pages

### "About client-side encryption \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption](https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption)
- Source ID: `site-docs-reference-required-5`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- KmsEnvelopeAead , table name : str , team : str , email : str , ) - > None : """ Inserts a vote into the database with email address previously encrypted using a KmsEnvelopeAead object. """ time cast = datetime . datetime . now ( tz = datetime . timezone . utc ) Use the envelope AEAD primitive to encrypt the email, using the team name as associated data.
- Create a connection pool and create a new table in the database Java import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import java.sql.Connection ; import java.sql.PreparedStatement ; import java.sql.SQLException ; import javax.sql.DataSource ; public class CloudSqlConnectionPool { public static DataSource createConnectionPool ( String dbUser , String dbPass , String dbName , String instanceConnectionName ) { HikariConfig config = new HikariConfig (); config . setJdbcUrl ( String . format ( "jdbc:mysql:///%s" , dbName )); config . setUsername ( dbUser ); config . setPassword ( dbPass ); config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.mysql.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , instanceConnectionName ); DataSource pool = new HikariDataSource ( config ); return pool ; } public static void createTable ( DataSource pool , String tableName ) throws SQLException { // Safely attempt to create the table schema. try ( Connection conn = pool . getConnection ()) { String stmt = String . format ( "CREATE TABLE IF NOT EXISTS %s ( " + "vote id SERIAL NOT NULL, time cast timestamp NOT NULL, team CHAR(6) NOT NULL," + "voter email VARBINARY(255), PRIMARY KEY (vote id) );" , tableName ); try ( PreparedStatement createTableStatement = conn . prepareStatement ( stmt );) { createTableStatement . execute (); } } } } Python import sqlalchemy def init tcp connection engine ( db user : str , db pass : str , db name : str , db host : str ) - > sqlalchemy . engine . base .
- String email = new String ( envAead . decrypt ( voteResults . getBytes ( 3 ), team . getBytes ())); System . out . println ( String . format ( "%s\t%s\t%s" , team , timeCast , email )); } } } } } Python import os import sqlalchemy import tink from .cloud kms env aead import init tink env aead from .cloud sql connection pool import init db from .encrypt and insert data import encrypt and insert data def main () - > None : """ Connects to the database, inserts encrypted data and retrieves encrypted data. """ db user = os . environ [ "DB USER" ] # e.g. "root", "mysql" db pass = os . environ [ "DB PASS" ] # e.g. "mysupersecretpassword" db name = os . environ [ "DB NAME" ] # e.g. "votes db" Set if connecting using TCP: db host = os . environ [ "DB HOST" ] # e.g. "127.0.0.1" Set if connecting using Unix sockets: db socket dir = os . environ . get ( "DB SOCKET DIR" , "/cloudsql" ) instance connection name = os . environ [ "INSTANCE CONNECTION NAME" ] e.g. "project-name:region:instance-name" credentials = os . environ . get ( "GOOGLE APPLICATION CREDENTIALS" , "" ) key uri = "gcp-kms://" + os . environ [ "GCP KMS URI" ] e.g. "gcp-kms://projects/...path/to/key Tink uses the "gcp-kms://" prefix for paths to keys stored in Google Cloud KMS.
- If it fails, an error will be thrown. voteStmt . execute (); System . out . println ( String . format ( "Successfully inserted row into table %s" , tableName )); } } } } Python import datetime import logging import os import sqlalchemy import tink from .cloud kms env aead import init tink env aead from .cloud sql connection pool import init db logger = logging . getLogger ( name ) def main () - > None : """ Connects to the database, encrypts and inserts some data. """ db user = os . environ [ "DB USER" ] # e.g. "root", "mysql" db pass = os . environ [ "DB PASS" ] # e.g. "mysupersecretpassword" db name = os . environ [ "DB NAME" ] # e.g. "votes db" Set if connecting using TCP: db host = os . environ [ "DB HOST" ] # e.g. "127.0.0.1" Set if connecting using Unix sockets: db socket dir = os . environ . get ( "DB SOCKET DIR" , "/cloudsql" ) instance connection name = os . environ [ "INSTANCE CONNECTION NAME" ] e.g. "project-name:region:instance-name" credentials = os . environ . get ( "GOOGLE APPLICATION CREDENTIALS" , "" ) key uri = "gcp-kms://" + os . environ [ "GCP KMS URI" ] e.g. "gcp-kms://projects/...path/to/key Tink uses the "gcp-kms://" prefix for paths to keys stored in Google Cloud KMS.

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Limitations When using a Private Service Connect interface with a network attachment to create outbound connections to your network from your Cloud SQL instance, note the following limitations: Enabling or disabling Private Service Connect outbound connectivity requires downtime.
- DNS names and records For instances with Private Service Connect enabled, we recommend that you use the DNS name because different networks can connect to the same instance and Private Service Connect endpoints in each network might have different IP addresses.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Private Service Connect overview Stay organized with collections Save and categorize content based on your preferences.
- The supported serving ports for MySQL are as follows: TCP port 3306 for direct connections to MySQL database server (including when using Managed Connection Pooling ).

### "Restore an instance overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- Source ID: `site-docs-reference-3`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Since instance names can be reused after an instance is deleted in Cloud SQL, retained PITR logs can be identified in Google Cloud with the following fields: instance deletion time log retention days These fields allow you to identify if a PITR log belongs to a deleted instance.
- MySQL PostgreSQL SQL Server Cloud SQL lets you restore your instances from a backup, or by performing point-in-time recovery (PITR).
- What's next Perform a restore from a backup Use point-in-time recovery (PITR) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If a value for this parameter isn't set, then the default transaction log retention period is 14 days for Cloud SQL Enterprise Plus edition instances and 7 days for Cloud SQL Enterprise edition instances.

