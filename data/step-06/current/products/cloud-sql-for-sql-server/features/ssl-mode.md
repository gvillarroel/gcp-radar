---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.553Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "SSL mode"
feature_slug: "ssl-mode"
latest_feature_date: "2024-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
keywords:
  - "ssl"
  - "mode"
  - "sql"
  - "supports"
  - "specifying"
  - "connection"
  - "encryption"
  - "requirements"
---

# SSL mode

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports SSL mode for specifying connection encryption requirements instead of the legacy require_ssl setting.

## Extended Definition

Cloud SQL supports SSL mode for specifying connection encryption requirements instead of the legacy require_ssl setting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)

## Supporting Pages

### "About client-side encryption \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption)
- Source ID: `site-docs-reference-required-4`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a connection pool and create a new table in the database Java import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import java.sql.Connection ; import java.sql.PreparedStatement ; import java.sql.SQLException ; import javax.sql.DataSource ; public class CloudSqlConnectionPool { public static DataSource createConnectionPool ( String dbUser , String dbPass , String dbName , String instanceConnectionName ) { HikariConfig config = new HikariConfig (); config . setDataSourceClassName ( "com.microsoft.sqlserver.jdbc.SQLServerDataSource" ); config . setUsername ( dbUser ); // e.g. "root", "sqlserver" config . setPassword ( dbPass ); // e.g. "my-password" config . addDataSourceProperty ( "databaseName" , dbName ); // The Cloud SQL Java Connector provides SSL encryption so // it should be disabled at the driver level config . addDataSourceProperty ( "encrypt" , "false" ); config . addDataSourceProperty ( "socketFactoryClass" , "com.google.cloud.sql.sqlserver.SocketFactory" ); config . addDataSourceProperty ( "socketFactoryConstructorArg" , instanceConnectionName ); DataSource pool = new HikariDataSource ( config ); return pool ; } public static void createTable ( DataSource pool , String tableName ) throws SQLException { // Safely attempt to create the table schema. try ( Connection conn = pool . getConnection ()) { String stmt = String . format ( "IF NOT EXISTS(" + "SELECT FROM sysobjects WHERE name='%s' and xtype='U')" + "CREATE TABLE %s (" + "vote id INT NOT NULL IDENTITY," + "time cast DATETIME NOT NULL," + "team VARCHAR(6) NOT NULL," + "voter email VARBINARY(255)" + "PRIMARY KEY (vote id));" , tableName , tableName ); try ( PreparedStatement createTableStatement = conn . prepareStatement ( stmt );) { createTableStatement . execute (); } } } } Python import pytds import sqlalchemy from sqlalchemy import Column from sqlalchemy import DateTime from sqlalchemy import Integer from sqlalchemy import Table def init tcp connection engine ( db user : str , db pass : str , db name : str , db host : str ) - > sqlalchemy . engine . base .
- Encryption with associated data ensures authenticity (who the sender is) and integrity (the data has not been tampered with) of that data, but not its secrecy. (see RFC 5116 for more info) encrypted email = env aead . encrypt ( email . encode (), team . encode ()) Verify that the team is one of the allowed options if team != "TABS" and team != "SPACES" : logger . error ( f "Invalid team specified: { team } " ) return Preparing a statement before hand can help protect against injections. stmt = sqlalchemy . text ( f "INSERT INTO { table name } (time cast, team, voter email)" " VALUES (:time cast, :team, CONVERT(varbinary(max), :voter email, 0))" ) Using a with statement ensures that the connection is always released back into the pool at the end of statement (even if an error occurs) with db . connect () as conn : conn . execute ( stmt , time cast = time cast , team = team , voter email = encrypted email ) print ( f "Vote successfully cast for ' { team } ' at time { time cast } !" ) Query the database and decrypt the stored data Java import com.google.crypto.tink.Aead ; import java.security.GeneralSecurityException ; import java.sql.Connection ; import java.sql.PreparedStatement ; import java.sql.ResultSet ; import java.sql.SQLException ; import java.sql.Timestamp ; import javax.sql.DataSource ; public class QueryAndDecryptData { public static void main ( String [] args ) throws GeneralSecurityException , SQLException { // Saving credentials in environment variables is convenient, but not secure - consider a more // secure solution such as Cloud Secret Manager to help keep secrets safe.
- Tink supports envelope encryption in C++, Java, Go, and Python using the AEAD API: public interface Aead { byte [] encrypt ( final byte [] plaintext, final byte [] associatedData ) throws… byte [] decrypt ( final byte [] ciphertext, final byte [] associatedData ) throws… } Besides the normal message/ciphertext argument, the encrypt and decrypt methods support optional associated data.
- The sample code shows how to: Create a database table and connection pool Set up Tink for envelope encryption Encrypt and decrypt data using Tink's envelope encryption with a KEK in Cloud KMS Before you begin Create a Cloud SQL Instance by following these instructions .

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
- Source ID: `site-docs-reference-required-4`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service connection limitations If your instance uses the shared CA ( GOOGLE MANAGED CAS CA ) or customer-managed CA ( CUSTOMER MANAGED CAS CA ) option for its serverCaMode configuration, then the instance can't support connections from the following Google Cloud services: App Engine standard environment App Engine flexible environment Cloud Run services that run in a first generation execution environment What's next Configure SSL/TLS on your Cloud SQL instance.
- Service connection limitations None Doesn't support connections from the following Google Cloud services: App Engine standard environment App Engine flexible environment Cloud Run services that run in a first generation execution environment Doesn't support connections from the following Google Cloud services: App Engine standard environment App Engine flexible environment Cloud Run services that run in a first generation execution environment For the customer-managed CA option, the default validity period of a CA certificate in CA Service is 10 years.
- To choose per-instance CA, select Google managed internal certificate authority (Google Cloud console) or specify GOOGLE MANAGED INTERNAL CA for the serverCaMode setting (Cloud SQL Admin API) or the --server-ca-mode flag ( gcloud CLI ) when you create the instance .
- Optionally, your SSL/TLS connection can perform server identity verification by validating the server certificate installed on the Cloud SQL instance and client identity verification by validating the client certificate installed on the client.

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- However, there are other factors that can impact memory requirements, such as number of active connections, and internal overhead processes.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } To see how the underlying REST API request is constructed for this task, see the APIs Explorer on the instances:insert page .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } REST v1beta4 1.
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

