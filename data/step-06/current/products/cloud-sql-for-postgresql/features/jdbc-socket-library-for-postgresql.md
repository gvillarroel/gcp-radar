---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.834Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "JDBC Socket Library for PostgreSQL"
feature_slug: "jdbc-socket-library-for-postgresql"
latest_feature_date: "2017-06-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
keywords:
  - "library"
  - "socket"
  - "jdbc"
  - "added"
---

# JDBC Socket Library for PostgreSQL

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for PostgreSQL added support for the JDBC Socket Library for PostgreSQL.

## Extended Definition

Cloud SQL for PostgreSQL added support for the JDBC Socket Library for PostgreSQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)

## Supporting Pages

### "About client-side encryption \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)
- Source ID: `site-iam-reference`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a connection pool and create a new table in the database Java import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import java.security.GeneralSecurityException ; import java.sql.Connection ; import java.sql.PreparedStatement ; import java.sql.SQLException ; import javax.sql.DataSource ; public class CloudSqlConnectionPool { public static DataSource createConnectionPool ( String dbUser , String dbPass , String dbName , String instanceConnectionName ) throws GeneralSecurityException { HikariConfig config = new HikariConfig (); config . setJdbcUrl ( String . format ( "jdbc:postgresql:///%s" , dbName )); config . setUsername ( dbUser ); // e.g. "root", "postgres" config . setPassword ( dbPass ); // e.g. "my-password" config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.postgres.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , instanceConnectionName ); DataSource pool = new HikariDataSource ( config ); return pool ; } public static void createTable ( DataSource pool , String tableName ) throws SQLException { // Safely attempt to create the table schema. try ( Connection conn = pool . getConnection ()) { String stmt = String . format ( "CREATE TABLE IF NOT EXISTS %s ( " + "vote id SERIAL NOT NULL, time cast timestamp NOT NULL, team CHAR(6) NOT NULL," + "voter email BYTEA, PRIMARY KEY (vote id) );" , tableName ); try ( PreparedStatement createTableStatement = conn . prepareStatement ( stmt );) { createTableStatement . execute (); } } } } Python import sqlalchemy def init tcp connection engine ( db user : str , db pass : str , db name : str , db host : str ) - > sqlalchemy . engine . base .
- Engine : """Starts a connection to the database and creates voting table if it doesn't exist.""" if db host : db = init tcp connection engine ( db user , db pass , db name , db host ) else : db = init unix connection engine ( db user , db pass , db name , instance connection name , db socket dir ) Create tables (if they don't already exist) with db . connect () as conn : conn . execute ( f "CREATE TABLE IF NOT EXISTS { table name } " "( vote id SERIAL NOT NULL, time cast timestamp NOT NULL, " "team VARCHAR(6) NOT NULL, voter email BYTEA, " "PRIMARY KEY (vote id) );" ) print ( f "Created table { table name } in db { db name } " ) return db Initialize an envelope AEAD primitive with Tink Java import com.google.crypto.tink.Aead ; import com.google.crypto.tink.KmsClient ; import com.google.crypto.tink.aead.AeadConfig ; import com.google.crypto.tink.aead.AeadKeyTemplates ; import com.google.crypto.tink.aead.KmsEnvelopeAead ; import com.google.crypto.tink.integration.gcpkms.GcpKmsClient ; import java.security.GeneralSecurityException ; public class CloudKmsEnvelopeAead { public static Aead get ( String kmsUri ) throws GeneralSecurityException { AeadConfig . register (); // Create a new KMS Client KmsClient client = new GcpKmsClient (). withDefaultCredentials (); // Create an AEAD primitive using the Cloud KMS key Aead gcpAead = client . getAead ( kmsUri ); // Create an envelope AEAD primitive. // This key should only be used for client-side encryption to ensure authenticity and integrity // of data. return new KmsEnvelopeAead ( AeadKeyTemplates .
- String email = new String ( envAead . decrypt ( voteResults . getBytes ( 3 ), aad . getBytes ())); System . out . println ( String . format ( "%s\t%s\t%s" , team , timeCast , email )); } } } } } Python import os import sqlalchemy import tink from .cloud kms env aead import init tink env aead from .cloud sql connection pool import init db from .encrypt and insert data import encrypt and insert data def main () - > None : """ Connects to the database, inserts encrypted data and retrieves encrypted data. """ db user = os . environ [ "DB USER" ] # e.g. "root", "postgres" db pass = os . environ [ "DB PASS" ] # e.g. "mysupersecretpassword" db name = os . environ [ "DB NAME" ] # e.g. "votes db" Set if connecting using TCP: db host = os . environ [ "DB HOST" ] # e.g. "127.0.0.1" Set if connecting using Unix sockets: db socket dir = os . environ . get ( "DB SOCKET DIR" , "/cloudsql" ) instance connection name = os . environ [ "INSTANCE CONNECTION NAME" ] e.g. "project-name:region:instance-name" credentials = os . environ . get ( "GOOGLE APPLICATION CREDENTIALS" , "" ) key uri = "gcp-kms://" + os . environ [ "GCP KMS URI" ] e.g. "gcp-kms://projects/...path/to/key Tink uses the "gcp-kms://" prefix for paths to keys stored in Google Cloud KMS.
- If it fails, an error will be thrown. voteStmt . execute (); System . out . println ( String . format ( "Successfully inserted row into table %s" , tableName )); } } } } Python import datetime import logging import os import sqlalchemy import tink from .cloud kms env aead import init tink env aead from .cloud sql connection pool import init db logger = logging . getLogger ( name ) def main () - > None : """ Connects to the database, encrypts and inserts some data. """ db user = os . environ [ "DB USER" ] # e.g. "root", "postgres" db pass = os . environ [ "DB PASS" ] # e.g. "mysupersecretpassword" db name = os . environ [ "DB NAME" ] # e.g. "votes db" Set if connecting using TCP: db host = os . environ [ "DB HOST" ] # e.g. "127.0.0.1" Set if connecting using Unix sockets: db socket dir = os . environ . get ( "DB SOCKET DIR" , "/cloudsql" ) instance connection name = os . environ [ "INSTANCE CONNECTION NAME" ] e.g. "project-name:region:instance-name" credentials = os . environ . get ( "GOOGLE APPLICATION CREDENTIALS" , "" ) key uri = "gcp-kms://" + os . environ [ "GCP KMS URI" ] e.g. "gcp-kms://projects/...path/to/key Tink uses the "gcp-kms://" prefix for paths to keys stored in Google Cloud KMS.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Note: INSTANCE CONNECTION NAME should be represented as <MY-PROJECT>:<INSTANCE-REGION>:<INSTANCE-NAME> Using the argument ipTypes=PRIVATE will force the SocketFactory to connect with an instance's associated private IP See the JDBC socket factory version requirements for the pom.xml file . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class TcpConnectionPoolFactory extends ConnectionPoolFactory { // Saving credentials in environment variables is convenient, but not secure - consider a more // secure solution such as https://cloud.google.com/secret-manager/ to help keep secrets safe. private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); private static final String INSTANCE HOST = System . getenv ( "INSTANCE HOST" ); private static final String DB PORT = System . getenv ( "DB PORT" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:mysql:///<DB NAME>?cloudSqlInstance=<INSTANCE CONNECTION NAME> & // socketFactory=com.google.cloud.sql.mysql.SocketFactory&user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:mysql:///%s" , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", "mysql" config . setPassword ( DB PASS ); // e.g. "my-password" config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.mysql.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , INSTANCE CONNECTION NAME ); // Unix sockets are not natively supported in Java, so it is necessary to use the Cloud SQL // Java Connector to connect.
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:mysql://<INSTANCE HOST>:<DB PORT>/<DB NAME>?user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:mysql://%s:%s/%s" , INSTANCE HOST , DB PORT , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", "mysql" config . setPassword ( DB PASS ); // e.g. "my-password" // ...

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Note: CLOUD SQL CONNECTION NAME should be represented as <MY-PROJECT>:<INSTANCE-REGION>:<INSTANCE-NAME> Using the argument ipTypes=PRIVATE will force the SocketFactory to connect with an instance's associated private IP See the JDBC socket factory version requirements for the pom.xml file . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class TcpConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); private static final String INSTANCE HOST = System . getenv ( "INSTANCE HOST" ); private static final String DB PORT = System . getenv ( "DB PORT" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:postgresql:///<DB NAME>?cloudSqlInstance=<INSTANCE CONNECTION NAME> & // socketFactory=com.google.cloud.sql.postgres.SocketFactory&user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:postgresql:///%s" , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", postgres" config . setPassword ( DB PASS ); // e.g. "my-password" config . addDataSourceProperty ( "socketFactory" , "com.google.cloud.sql.postgres.SocketFactory" ); config . addDataSourceProperty ( "cloudSqlInstance" , INSTANCE CONNECTION NAME ); // Unix sockets are not natively supported in Java, so it is necessary to use the Cloud SQL // Java Connector to connect.
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- HikariConfig config = new HikariConfig (); // The following URL is equivalent to setting the config options below: // jdbc:postgresql://<INSTANCE HOST>:<DB PORT>/<DB NAME>?user=<DB USER>&password=<DB PASS> // See the link below for more info on building a JDBC URL for the Cloud SQL JDBC Socket Factory // https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory#creating-the-jdbc-url // Configure which instance and what database user to connect with. config . setJdbcUrl ( String . format ( "jdbc:postgresql://%s:%s/%s" , INSTANCE HOST , DB PORT , DB NAME )); config . setUsername ( DB USER ); // e.g. "root", "postgres" config . setPassword ( DB PASS ); // e.g. "my-password" // ...

