---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.810Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Gemini CLI extension for Cloud SQL for MySQL"
feature_slug: "gemini-cli-extension-for-cloud-sql-for-mysql"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption"
keywords:
  - "gemini"
  - "cli"
  - "extension"
  - "for"
  - "sql"
  - "mysql"
  - "this"
  - "provides"
---

# Gemini CLI extension for Cloud SQL for MySQL

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature provides a dedicated Gemini CLI extension for provisioning, managing, and querying Cloud SQL for MySQL databases.

## Extended Definition

This feature provides a dedicated Gemini CLI extension for provisioning, managing, and querying Cloud SQL for MySQL databases.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption](https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption)

## Supporting Pages

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 284
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To install the DB Context Enrichment extension, follow these steps: Install the DB Context Enrichment Gemini CLI extension: gemini extensions install https://github.com/GoogleCloudPlatform/db-context-enrichment Note: The extension requires a Gemini API key at installation to authenticate with the Gemini API and enable context generation.
- MySQL PostgreSQL SQL Server Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms , and the Additional Terms for Generative AI Preview Products .
- To prepare the environment, perform the following steps: Install Gemini CLI Install the DB Context Enrichment extension Setup database connection Install Gemini CLI To install Gemini CLI, see Get Started with Gemini CLI .
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Build context sets using Gemini CLI Stay organized with collections Save and categorize content based on your preferences.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- September 23, 2025 Feature You can now provision, manage and query your databases using the dedicated Gemini CLI extension for Cloud SQL for MySQL.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- For more information, see Use Cloud SQL for MySQL with MCP, Gemini CLI, and other agents .
- January 25, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: asia-northeast2 (Osaka) asia-south2 (Delhi) europe-north1 (Finland) europe-southwest1 (Madrid) us-east5 (Columbus) us-south1 (Dallas) January 12, 2024 Feature Cloud SQL for MySQL now supports setting microsecond time periods for the following flag on MySQL 5.7 and MySQL 8.0: innodb flush log at timeout For more information about this flag, see supported flags .

### "About client-side encryption \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption](https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MySQL PostgreSQL SQL Server This page describes how to implement client-side encryption on Cloud SQL.
- Engine : """Starts a connection to the database and creates voting table if it doesn't exist.""" if db host : db = init tcp connection engine ( db user , db pass , db name , db host ) else : db = init unix connection engine ( db user , db pass , db name , instance connection name , db socket dir ) Create tables (if they don't already exist) with db . connect () as conn : conn . execute ( f "CREATE TABLE IF NOT EXISTS { table name } " "( vote id SERIAL NOT NULL, time cast timestamp NOT NULL, " "team CHAR(6) NOT NULL, voter email VARBINARY(255), " "PRIMARY KEY (vote id) );" ) print ( f "Created table { table name } in db { db name } " ) return db Initialize an envelope AEAD primitive with Tink Java import com.google.crypto.tink.Aead ; import com.google.crypto.tink.KmsClient ; import com.google.crypto.tink.aead.AeadConfig ; import com.google.crypto.tink.aead.AeadKeyTemplates ; import com.google.crypto.tink.aead.KmsEnvelopeAead ; import com.google.crypto.tink.integration.gcpkms.GcpKmsClient ; import java.security.GeneralSecurityException ; public class CloudKmsEnvelopeAead { public static Aead get ( String kmsUri ) throws GeneralSecurityException { AeadConfig . register (); // Create a new KMS Client KmsClient client = new GcpKmsClient (). withDefaultCredentials (); // Create an AEAD primitive using the Cloud KMS key Aead gcpAead = client . getAead ( kmsUri ); // Create an envelope AEAD primitive. // This key should only be used for client-side encryption to ensure authenticity and integrity // of data. return new KmsEnvelopeAead ( AeadKeyTemplates .
- Create a connection pool and create a new table in the database Java import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import java.sql.Connection ; import java.sql.PreparedStatement ; import java.sql.SQLException ; import javax.sql.DataSource ; public class CloudSqlConnectionPool { public static DataSource createConnectionPool ( String dbUser , String dbPass , String dbName , String instanceConnectionName ) { HikariConfig config = new HikariConfig (); config . setJdbcUrl ( String . format ( "jdbc:mysql:///%s" , dbName )); config . setUsername ( dbUser ); config . setPassword ( dbPass ); config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.mysql.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , instanceConnectionName ); DataSource pool = new HikariDataSource ( config ); return pool ; } public static void createTable ( DataSource pool , String tableName ) throws SQLException { // Safely attempt to create the table schema. try ( Connection conn = pool . getConnection ()) { String stmt = String . format ( "CREATE TABLE IF NOT EXISTS %s ( " + "vote id SERIAL NOT NULL, time cast timestamp NOT NULL, team CHAR(6) NOT NULL," + "voter email VARBINARY(255), PRIMARY KEY (vote id) );" , tableName ); try ( PreparedStatement createTableStatement = conn . prepareStatement ( stmt );) { createTableStatement . execute (); } } } } Python import sqlalchemy def init tcp connection engine ( db user : str , db pass : str , db name : str , db host : str ) - > sqlalchemy . engine . base .
- String email = new String ( envAead . decrypt ( voteResults . getBytes ( 3 ), team . getBytes ())); System . out . println ( String . format ( "%s\t%s\t%s" , team , timeCast , email )); } } } } } Python import os import sqlalchemy import tink from .cloud kms env aead import init tink env aead from .cloud sql connection pool import init db from .encrypt and insert data import encrypt and insert data def main () - > None : """ Connects to the database, inserts encrypted data and retrieves encrypted data. """ db user = os . environ [ "DB USER" ] # e.g. "root", "mysql" db pass = os . environ [ "DB PASS" ] # e.g. "mysupersecretpassword" db name = os . environ [ "DB NAME" ] # e.g. "votes db" Set if connecting using TCP: db host = os . environ [ "DB HOST" ] # e.g. "127.0.0.1" Set if connecting using Unix sockets: db socket dir = os . environ . get ( "DB SOCKET DIR" , "/cloudsql" ) instance connection name = os . environ [ "INSTANCE CONNECTION NAME" ] e.g. "project-name:region:instance-name" credentials = os . environ . get ( "GOOGLE APPLICATION CREDENTIALS" , "" ) key uri = "gcp-kms://" + os . environ [ "GCP KMS URI" ] e.g. "gcp-kms://projects/...path/to/key Tink uses the "gcp-kms://" prefix for paths to keys stored in Google Cloud KMS.

