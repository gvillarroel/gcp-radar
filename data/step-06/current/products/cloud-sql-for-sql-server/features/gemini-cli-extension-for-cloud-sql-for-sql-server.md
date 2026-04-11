---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.583Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Gemini CLI extension for Cloud SQL for SQL Server"
feature_slug: "gemini-cli-extension-for-cloud-sql-for-sql-server"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/libraries"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption"
keywords:
  - "gemini"
  - "cli"
  - "extension"
  - "for"
  - "sql"
  - "server"
  - "the"
  - "lets"
---

# Gemini CLI extension for Cloud SQL for SQL Server

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

The Gemini CLI extension lets you provision, manage, and query Cloud SQL for SQL Server databases from the command line.

## Extended Definition

The Gemini CLI extension lets you provision, manage, and query Cloud SQL for SQL Server databases from the command line.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/libraries](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/libraries)
- [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- September 23, 2025 Feature You can now provision, manage and query your databases using the dedicated Gemini CLI extension for Cloud SQL for SQL Server.
- For more information, see Use Cloud SQL for SQL Server with MCP, Gemini CLI, and other agents .
- For users of the Cloud SQL Auth Proxy : If the Cloud SQL instance to which you're connecting is using shared certificate authority (CA) for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.13.0 or later.
- If the Cloud SQL instance to which you're connecting is using customer-managed CA for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.14.3 or later.

### "Client libraries and sample code for Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/libraries](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/libraries)
- Source ID: `site-api-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Items , nil } Java For the Client Library for Java , you can optionally specify the service path directly. // Set up global SQLAdmin instance. client = new SQLAdmin.Builder(httpTransport, JSON FACTORY, credential) .setApplicationName(APPLICATION NAME).build(); InstancesListResponse resp = client.instances().list("PROJECT ID").execute(); List<DatabaseInstance> list = resp.getItems(); for (DatabaseInstance d : list) { System.out.println(d.getName()); } JavaScript For the Client Library for JavaScript , specify sqladmin to build a client. gapi.client.load(' sqladmin ', 'v1beta4', function() { console.log('loaded');}); gapi.client.sql.instances.list({'project': PROJECT ID}).execute(showResult); function showResult(result) { // Process the result. }; Python For the Client Library for Python , specify sqladmin to build a client. from googleapiclient import discovery Construct the service object for the interacting with the Cloud SQL Admin API. service = discovery.build(' sqladmin ', 'v1beta4', http=http) req = service.instances().list(project="PROJECT ID") resp = req.execute() print(json.dumps(resp, indent=2)) The service object queries the discovery document and uses the correct service path, in this case, "sql/v1beta4/projects/".
- List ( request )) { if ( ! database ) throw std :: move ( database ). status (); std :: cout << database - > DebugString () << " \n " ; } return 0 ; } catch ( google :: cloud :: Status const & status ) { std :: cerr << "google::cloud::Status thrown: " << status << " \n " ; return 1 ; } Java For the Client Library for Java , you can optionally specify the service path directly. // Set up global SQLAdmin instance. client = new SQLAdmin.Builder(httpTransport, JSON FACTORY, credential) .setServicePath(" sql/v1beta4/ ") .setApplicationName(APPLICATION NAME).build(); InstancesListResponse resp = client.instances().list("PROJECT ID").execute(); List<DatabaseInstance> list = resp.getItems(); for (DatabaseInstance d : list) { System.out.println(d.getName()); } Go For the Client Library for Go , import the sqladmin package. func ListInstances ( projectId string ) ([] sqladmin .
- Libraries and sample code Language Documentation C++ Google API Client Library Dart Google API Client Library Go Google API Client Library Sample code: Cloud SQL Auth Proxy Java Google API Client Library Google Client Developer's Guide Sample code: Cloud SQL Java Connector JavaScript Google API Client Library .NET Google API Client Library Google Client Developer's Guide Node.js Google API Client Library Objective-C Google API Client Library PHP Google API Client Library Python Google API Client Library Google Client Developer's Guide Cloud SQL Python Connector Sample code: MySQL, PostgreSQL, SQL Server Ruby Google API Client Library Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- C++ For the C++ Client Library , follow Setting up a C++ development environment to install the library. #include "google/cloud/sql/v1/sql instances client.h" #include "google/cloud/project.h" #include <iostream> int main ( int argc , char argv []) try { if ( argc != 2 ) { std :: cerr << "Usage: " << argv [ 0 ] << " project-id \n " ; return 1 ; } namespace sql = :: google :: cloud :: sql v1 ; auto client = sql :: SqlInstancesServiceClient ( sql :: MakeSqlInstancesServiceConnectionRest ()); google :: cloud :: sql :: v1 :: SqlInstancesListRequest request ; request . set project ( argv [ 1 ]); for ( auto database : client .

### "About client-side encryption \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption](https://docs.cloud.google.com/sql/docs/sqlserver/client-side-encryption)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a connection pool and create a new table in the database Java import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import java.sql.Connection ; import java.sql.PreparedStatement ; import java.sql.SQLException ; import javax.sql.DataSource ; public class CloudSqlConnectionPool { public static DataSource createConnectionPool ( String dbUser , String dbPass , String dbName , String instanceConnectionName ) { HikariConfig config = new HikariConfig (); config . setDataSourceClassName ( "com.microsoft.sqlserver.jdbc.SQLServerDataSource" ); config . setUsername ( dbUser ); // e.g. "root", "sqlserver" config . setPassword ( dbPass ); // e.g. "my-password" config . addDataSourceProperty ( "databaseName" , dbName ); // The Cloud SQL Java Connector provides SSL encryption so // it should be disabled at the driver level config . addDataSourceProperty ( "encrypt" , "false" ); config . addDataSourceProperty ( "socketFactoryClass" , "com.google.cloud.sql.sqlserver.SocketFactory" ); config . addDataSourceProperty ( "socketFactoryConstructorArg" , instanceConnectionName ); DataSource pool = new HikariDataSource ( config ); return pool ; } public static void createTable ( DataSource pool , String tableName ) throws SQLException { // Safely attempt to create the table schema. try ( Connection conn = pool . getConnection ()) { String stmt = String . format ( "IF NOT EXISTS(" + "SELECT FROM sysobjects WHERE name='%s' and xtype='U')" + "CREATE TABLE %s (" + "vote id INT NOT NULL IDENTITY," + "time cast DATETIME NOT NULL," + "team VARCHAR(6) NOT NULL," + "voter email VARBINARY(255)" + "PRIMARY KEY (vote id));" , tableName , tableName ); try ( PreparedStatement createTableStatement = conn . prepareStatement ( stmt );) { createTableStatement . execute (); } } } } Python import pytds import sqlalchemy from sqlalchemy import Column from sqlalchemy import DateTime from sqlalchemy import Integer from sqlalchemy import Table def init tcp connection engine ( db user : str , db pass : str , db name : str , db host : str ) - > sqlalchemy . engine . base .
- String email = new String ( envAead . decrypt ( voteResults . getBytes ( 3 ), team . getBytes ())); System . out . println ( String . format ( "%s\t%s\t%s" , team , timeCast , email )); } } } } } Python import os import sqlalchemy import tink from .cloud kms env aead import init tink env aead from .cloud sql connection pool import init db from .encrypt and insert data import encrypt and insert data def main () - > None : db user = os . environ [ "DB USER" ] # e.g. "root", "sqlserver" db pass = os . environ [ "DB PASS" ] # e.g. "mysupersecretpassword" db name = os . environ [ "DB NAME" ] # e.g. "votes db" Set if connecting using TCP: db host = os . environ [ "DB HOST" ] # e.g. "127.0.0.1" Set if connecting using Unix sockets: db socket dir = os . environ . get ( "DB SOCKET DIR" , "/cloudsql" ) instance connection name = os . environ [ "INSTANCE CONNECTION NAME" ] e.g. "project-name:region:instance-name" credentials = os . environ . get ( "GOOGLE APPLICATION CREDENTIALS" , "" ) key uri = "gcp-kms://" + os . environ [ "GCP KMS URI" ] e.g. "gcp-kms://projects/...path/to/key Tink uses the "gcp-kms://" prefix for paths to keys stored in Google Cloud KMS.
- If it fails, an error will be thrown. voteStmt . execute (); System . out . println ( String . format ( "Successfully inserted row into table %s" , tableName )); } } } } Python import datetime import logging import os import sqlalchemy import tink from .cloud kms env aead import init tink env aead from .cloud sql connection pool import init db logger = logging . getLogger ( name ) def main () - > None : db user = os . environ [ "DB USER" ] # e.g. "root", "sqlserver" db pass = os . environ [ "DB PASS" ] # e.g. "mysupersecretpassword" db name = os . environ [ "DB NAME" ] # e.g. "votes db" Set if connecting using TCP: db host = os . environ [ "DB HOST" ] # e.g. "127.0.0.1" Set if connecting using Unix sockets: db socket dir = os . environ . get ( "DB SOCKET DIR" , "/cloudsql" ) instance connection name = os . environ [ "INSTANCE CONNECTION NAME" ] e.g. "project-name:region:instance-name" credentials = os . environ . get ( "GOOGLE APPLICATION CREDENTIALS" , "" ) key uri = "gcp-kms://" + os . environ [ "GCP KMS URI" ] e.g. "gcp-kms://projects/...path/to/key Tink uses the "gcp-kms://" prefix for paths to keys stored in Google Cloud KMS.
- Overview Client-side encryption is the act of encrypting data before writing it to Cloud SQL.

