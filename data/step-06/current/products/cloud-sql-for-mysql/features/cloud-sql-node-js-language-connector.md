---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.936Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL Node.js Language Connector"
feature_slug: "cloud-sql-node-js-language-connector"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-connectors"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-overview"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint"
keywords:
  - "sql"
  - "node"
  - "js"
  - "language"
  - "connector"
  - "became"
  - "available"
  - "public"
---

# Cloud SQL Node.js Language Connector

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

The Cloud SQL Node.js Language Connector became available in public preview.

## Extended Definition

The Cloud SQL Node.js Language Connector became available in public preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint)

## Supporting Pages

### "Connect using Cloud SQL Language Connectors \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors)
- Source ID: `site-docs-reference-3`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PRIVATE IP === 'true' ? 'PRIVATE' : 'PUBLIC' ; // connectWithConnector initializes a connection pool for a Cloud SQL instance // of MySQL using the Cloud SQL Node.js Connector. const connectWithConnector = async config = > { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. const connector = new Connector (); const clientOpts = await connector . getOptions ({ instanceConnectionName : process . env .
- Errorf ( "sql.Open: %w" , err ) } return dbPool , nil } Node.js For detailed instructions on using the library, see Usage . const mysql = require ( 'mysql2/promise' ); const { Connector } = require ( '@google-cloud/cloud-sql-connector' ); // In case the PRIVATE IP environment variable is defined then we set // the ipType=PRIVATE for the new connector instance, otherwise defaults // to public ip type. const getIpType = () = > process . env .
- REST Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of your Cloud SQL instance Note: By setting the value of the connectorEnforcement parameter to REQUIRED , all connections must use the Cloud SQL Language Connectors, including the Cloud SQL Auth Proxy and the Java, Python, Go, and Node.js connectors.
- Install You can install the library with npm install : npm install @google-cloud/cloud-sql-connector Use Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuration options Cloud SQL Auth Proxy , or Cloud SQL Language Connectors, including Cloud SQL Java connector Cloud SQL Python connector Cloud SQL Go connector Cloud SQL Node.js connector The following Google Cloud services use an embedded Cloud SQL Auth Proxy when you connect to a Cloud SQL instance over public IP address: Cloud Run App Engine flexible environment App Engine standard environment To configure SSL/TLS certificates on the Cloud SQL instance and for your client, do the following: Choose a server CA mode for your instance .
- Cloud SQL connector Direct connection Description Cloud SQL Auth Proxy, a client-side proxy, and Cloud SQL Language Connectors, client-side libraries, provide simplified and secure access to your Cloud SQL instances, especially when you connect to an instance using a public IP address.
- Another more secure alternative for connecting to a Cloud SQL instance that uses public IP is to use a Cloud SQL connector (such as the Cloud SQL Auth Proxy or one of the Cloud SQL Language Connectors).
- If you're connecting to an instance by a public IP address , use a Cloud SQL connector (either the Cloud SQL Auth Proxy or one of the Cloud SQL Language Connectors).

### "Connect to an instance using a write endpoint \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint)
- Source ID: `site-docs-reference-3`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Node.js import mysql from 'mysql2/promise' ; import { Connector } from '@google-cloud/cloud-sql-connector' ; const connector = new Connector (); const clientOpts = await connector . getOptions ({ domainName : ' WRITE ENDPOINT ' , ipType : 'PUBLIC' , }); const pool = await mysql . createPool ({ ... clientOpts , user : ' USERNAME ' , password : ' PASSWORD ' , database : ' DATABASE NAME ' , }); Make the following replacements: WRITE ENDPOINT : The DNS name or write endpoint.
- Connect database clients to instances using the Cloud SQL Auth Proxy or Cloud SQL Language Connectors When you configure the Cloud SQL Auth Proxy or one of the Cloud SQL Language Connectors using a write endpoint DNS name, the Cloud SQL connector periodically check for a switchover or failover operation.
- Update the instance network configuration If your instance was created before August 8, 2025, you might need to update the instance's network configuration for Cloud SQL Language Connectors or the Cloud SQL Auth Proxy to be able to use the write endpoint.
- Connect using Cloud SQL Language Connectors To connect using one of the Cloud SQL Language Connectors, configure your application by following the instructions in the Connect using Cloud SQL Language Connectors documentation .

