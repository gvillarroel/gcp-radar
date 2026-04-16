---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.955Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "MySQL 8.0.30 support"
feature_slug: "mysql-8-0-30-support"
latest_feature_date: "2022-09-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/authorize-networks"
  - "https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption"
  - "https://docs.cloud.google.com/sql/docs/mysql/cmek"
keywords:
  - "mysql"
  - "30"
  - "sql"
  - "supports"
  - "minor"
  - "version"
---

# MySQL 8.0.30 support

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports MySQL minor version 8.0.30.

## Extended Definition

Cloud SQL for MySQL supports MySQL minor version 8.0.30.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks)
- [https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption](https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption)
- [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)

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

### "About customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)
- Source ID: `site-docs-reference-3`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customer-managed encryption keys use the following format: projects / [ KMS PROJECT ID ] / locations / [ LOCATION ] / keyRings / [ KEY RING ] / cryptoKeys / [ KEY NAME ] If Cloud SQL is unable to access the key (such as if you disable the key version), Cloud SQL suspends the instance.
- You can't use customer-managed encryption keys to encrypt: External servers (external primary instances and external replicas) Instance metadata, such as the instance ID, database version, machine type, flags, backup schedule, etc.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback About customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- To use CMEKs created by Cloud KMS Autokey to protect your Cloud SQL for MySQL resources, use the steps provided for Secret Manager at Using Autokey with Secret Manager resources as an example.

### "Authorize with authorized networks \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks)
- Source ID: `site-docs-reference-required-5`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform To configure authorized networks, use a Terraform resource . resource "google sql database instance" "instance" { name = "mysql-instance-with-authorized-network" region = "us-central1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" ip configuration { authorized networks { name = "Network Name" value = "192.0.2.0/24" expiration time = "3021-11-15T16:19:00.094Z" } } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- You only need to do this once per directory. terraform init Optionally, to use the latest Google provider version, include the -upgrade option: terraform init -upgrade Apply the changes Review the configuration and verify that the resources that Terraform is going to create or update match your expectations: terraform plan Make corrections to the configuration as necessary.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Authorize with authorized networks Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This page describes how to use the authorized networks settings for connecting to Cloud SQL instances that use IP addresses.

