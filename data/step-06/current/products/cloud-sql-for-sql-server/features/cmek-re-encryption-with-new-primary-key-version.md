---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.559Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "CMEK re-encryption with new primary key version"
feature_slug: "cmek-re-encryption-with-new-primary-key-version"
latest_feature_date: "2023-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-tde"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption"
keywords:
  - "cmek"
  - "re"
  - "encryption"
  - "primary"
  - "key"
  - "version"
  - "sql"
  - "lets"
---

# CMEK re-encryption with new primary key version

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL lets you re-encrypt an existing CMEK-enabled primary instance or replica with a new primary key version.

## Extended Definition

Cloud SQL lets you re-encrypt an existing CMEK-enabled primary instance or replica with a new primary key version.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde)
- [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } To see how the underlying REST API request is constructed for this task, see the APIs Explorer on the instances:insert page .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } REST v1beta4 1.
- Customer key-managed encryption key (CMEK) Select to use your key with Google Cloud Key Management Service.
- Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 32 vCPUs, 3.75 GB to 208 GB SQL Server 2017 Standard, SQL Server 2019 Standard, SQL Server 2022 Standard, and SQL Server 2025 Standard Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 48 vCPUs, 3.75 GB to 312 GB SQL Server 2017 Enterprise, SQL Server 2019 Enterprise, SQL Server 2022 Enterprise, and SQL Server 2025 Enterprise Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 2 to 96 vCPUs, 3.75 GB to 624 GB Performance-optimized (Cloud SQL Enterprise Plus only) 2 vCPUs, 16 GB 4 vCPUs, 32 GB 8 vCPUs, 64 GB 16 vCPUs, 128 GB 32 vCPUs, 256 GB 48 vCPUs, 384 GB 64 vCPUs, 512 GB 80 vCPUs, 640 GB 96 vCPUs, 768 GB 128 vCPUs, 864 GB Memory-optimized (Cloud SQL Enterprise Plus only) 4 vCPUs, 128 GB 8 vCPUs, 256 GB 16 vCPUs, 512 GB Simultaneous multithreading Simultaneous multithreading (SMT) on Cloud SQL for SQL Server lets you run two virtual CPUs (vCPUs) as independent, separate threads on one physical core.

### "About transparent data encryption (TDE) \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde)
- Source ID: `site-docs-reference-required-4`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations Available only in Cloud SQL for SQL Server instances with the following database versions : SQL Server Enterprise SQL Server 2019 or later (Standard edition) If TDE is used for an instance with replicas and VPC Service Controls are enabled, then you must ensure the primary instance and all replicas are within the same service perimeter.
- TDE is used in scenarios where another layer of encryption is required in addition to Google's default offering of encryption for data at rest and Google's optional offering of Customer-managed encryption keys (CMEK) .
- A certificate, which is generated from the database primary key, is used to protect the data encryption keys.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback About transparent data encryption (TDE) Stay organized with collections Save and categorize content based on your preferences.

### "About client-side encryption \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption)
- Source ID: `site-docs-reference-required-4`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a connection pool and create a new table in the database Java import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import java.sql.Connection ; import java.sql.PreparedStatement ; import java.sql.SQLException ; import javax.sql.DataSource ; public class CloudSqlConnectionPool { public static DataSource createConnectionPool ( String dbUser , String dbPass , String dbName , String instanceConnectionName ) { HikariConfig config = new HikariConfig (); config . setDataSourceClassName ( "com.microsoft.sqlserver.jdbc.SQLServerDataSource" ); config . setUsername ( dbUser ); // e.g. "root", "sqlserver" config . setPassword ( dbPass ); // e.g. "my-password" config . addDataSourceProperty ( "databaseName" , dbName ); // The Cloud SQL Java Connector provides SSL encryption so // it should be disabled at the driver level config . addDataSourceProperty ( "encrypt" , "false" ); config . addDataSourceProperty ( "socketFactoryClass" , "com.google.cloud.sql.sqlserver.SocketFactory" ); config . addDataSourceProperty ( "socketFactoryConstructorArg" , instanceConnectionName ); DataSource pool = new HikariDataSource ( config ); return pool ; } public static void createTable ( DataSource pool , String tableName ) throws SQLException { // Safely attempt to create the table schema. try ( Connection conn = pool . getConnection ()) { String stmt = String . format ( "IF NOT EXISTS(" + "SELECT FROM sysobjects WHERE name='%s' and xtype='U')" + "CREATE TABLE %s (" + "vote id INT NOT NULL IDENTITY," + "time cast DATETIME NOT NULL," + "team VARCHAR(6) NOT NULL," + "voter email VARBINARY(255)" + "PRIMARY KEY (vote id));" , tableName , tableName ); try ( PreparedStatement createTableStatement = conn . prepareStatement ( stmt );) { createTableStatement . execute (); } } } } Python import pytds import sqlalchemy from sqlalchemy import Column from sqlalchemy import DateTime from sqlalchemy import Integer from sqlalchemy import Table def init tcp connection engine ( db user : str , db pass : str , db name : str , db host : str ) - > sqlalchemy . engine . base .
- Encryption with associated data ensures authenticity (who the sender is) and integrity (the data has not been tampered with) of that data, but not its secrecy. (see RFC 5116 for more info) encrypted email = env aead . encrypt ( email . encode (), team . encode ()) Verify that the team is one of the allowed options if team != "TABS" and team != "SPACES" : logger . error ( f "Invalid team specified: { team } " ) return Preparing a statement before hand can help protect against injections. stmt = sqlalchemy . text ( f "INSERT INTO { table name } (time cast, team, voter email)" " VALUES (:time cast, :team, CONVERT(varbinary(max), :voter email, 0))" ) Using a with statement ensures that the connection is always released back into the pool at the end of statement (even if an error occurs) with db . connect () as conn : conn . execute ( stmt , time cast = time cast , team = team , voter email = encrypted email ) print ( f "Vote successfully cast for ' { team } ' at time { time cast } !" ) Query the database and decrypt the stored data Java import com.google.crypto.tink.Aead ; import java.security.GeneralSecurityException ; import java.sql.Connection ; import java.sql.PreparedStatement ; import java.sql.ResultSet ; import java.sql.SQLException ; import java.sql.Timestamp ; import javax.sql.DataSource ; public class QueryAndDecryptData { public static void main ( String [] args ) throws GeneralSecurityException , SQLException { // Saving credentials in environment variables is convenient, but not secure - consider a more // secure solution such as Cloud Secret Manager to help keep secrets safe.
- VARCHAR ( 6 ), nullable = False ), ) metadata . create all () print ( f "Created table { table name } in db { db name } " ) return db Initialize an envelope AEAD primitive with Tink Java import com.google.crypto.tink.Aead ; import com.google.crypto.tink.KmsClient ; import com.google.crypto.tink.aead.AeadConfig ; import com.google.crypto.tink.aead.AeadKeyTemplates ; import com.google.crypto.tink.aead.KmsEnvelopeAead ; import com.google.crypto.tink.integration.gcpkms.GcpKmsClient ; import java.security.GeneralSecurityException ; public class CloudKmsEnvelopeAead { public static Aead get ( String kmsUri ) throws GeneralSecurityException { AeadConfig . register (); // Create a new KMS Client KmsClient client = new GcpKmsClient (). withDefaultCredentials (); // Create an AEAD primitive using the Cloud KMS key Aead gcpAead = client . getAead ( kmsUri ); // Create an envelope AEAD primitive. // This key should only be used for client-side encryption to ensure authenticity and integrity // of data. return new KmsEnvelopeAead ( AeadKeyTemplates .
- Encryption with associated data ensures authenticity (who the sender is) and integrity (the data has not been tampered with) of that data, but not its secrecy. (see RFC 5116 for more info) email = env aead . decrypt ( row [ 2 ], team ) . decode () time cast = row [ 1 ] Print recent votes print ( f " { team } \t { email } \t { time cast } " ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

