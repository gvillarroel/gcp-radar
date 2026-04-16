---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.946Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL Go Connector"
feature_slug: "cloud-sql-go-connector"
latest_feature_date: "2023-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-connectors"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-overview"
keywords:
  - "sql"
  - "go"
  - "connector"
  - "provides"
  - "separate"
  - "dialer"
  - "functionality"
  - "introduced"
---

# Cloud SQL Go Connector

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

The Cloud SQL Go Connector provides separate Dialer functionality introduced with Cloud SQL Auth proxy v2.

## Extended Definition

The Cloud SQL Go Connector provides separate Dialer functionality introduced with Cloud SQL Auth proxy v2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)

## Supporting Pages

### "Connect using Cloud SQL Language Connectors \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-connectors](https://docs.cloud.google.com/sql/docs/mysql/connect-connectors)
- Source ID: `site-docs-reference-3`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- This page discusses the following Cloud SQL Connectors: The Cloud SQL Java Connector The Cloud SQL Python Connector (Open in Colab) The Cloud SQL Go Connector The Cloud SQL Node.js Connector Benefits Using a Cloud SQL connector provides the following benefits: IAM authorization: Uses IAM permissions to control who or what can connect to your Cloud SQL instances.
- Setup Java The Cloud SQL Java Connector is a library that provides IAM-based authorization and encryption when connecting to a Cloud SQL instance.
- Install You can install the library with npm install : npm install @google-cloud/cloud-sql-connector Use Java To see this snippet in the context of a web application, view the README on GitHub . import com.zaxxer.hikari.HikariConfig ; import com.zaxxer.hikari.HikariDataSource ; import javax.sql.DataSource ; public class ConnectorConnectionPoolFactory extends ConnectionPoolFactory { // Note: Saving credentials in environment variables is convenient, but not // secure - consider a more secure solution such as // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help // keep secrets safe. private static final String INSTANCE CONNECTION NAME = System . getenv ( "INSTANCE CONNECTION NAME" ); private static final String INSTANCE UNIX SOCKET = System . getenv ( "INSTANCE UNIX SOCKET" ); private static final String DB USER = System . getenv ( "DB USER" ); private static final String DB PASS = System . getenv ( "DB PASS" ); private static final String DB NAME = System . getenv ( "DB NAME" ); public static DataSource createConnectionPool () { // The configuration object specifies behaviors for the connection pool.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Troubleshoot Driver versions Make sure you are using the latest version of the Cloud SQL Connectors and your database driver to avoid incompatibilities.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- To connect to the Cloud SQL instance, use the internal IP address. mysql --host = IP ADDRESS --user = USERNAME -p Make the following replacements: IP ADDRESS : the endpoint's IP address USERNAME : the name of the user that's connecting to the instance Connect using the Cloud SQL Auth Proxy The Cloud SQL Auth Proxy is a connector that provides secure access to an instance with Private Service Connect enabled without a need for authorized networks or for configuring SSL.
- If you use Private Service Connect to connect to a Cloud SQL instance from multiple VPC networks, then each network has its own administrator. dns.admin Grants full control over Cloud DNS resources, including DNS zones and records. cloudsql.admin Provides full control of a Cloud SQL instance and controls the instance over its lifecycle. cloudsql.instanceUser Provides access to the Cloud SQL instance.
- Cloud SQL Python Connector (v1.3.0 or later) Cloud SQL Go Connector (v1.4.0 or later) Cloud SQL Java Connector (v1.13.0 or later) Cloud SQL Node.js Connector (v0.5.0 or later) Connect from App Engine Standard, Cloud Run, or Cloud Run functions To connect to Cloud SQL instances with Private Service Connect enabled, you can use App Engine Standard or Cloud Run .
- User roles The following table provides information about the roles required to use Private Service Connect with a Cloud SQL instance: Role Description compute.networkAdmin Grants full control over the VPC network that initiates a connection to a Cloud SQL instance.

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Using a direct connection provides the following benefits: Lower latency compared to connections using Cloud SQL connectors.
- Configuration options Cloud SQL Auth Proxy , or Cloud SQL Language Connectors, including Cloud SQL Java connector Cloud SQL Python connector Cloud SQL Go connector Cloud SQL Node.js connector The following Google Cloud services use an embedded Cloud SQL Auth Proxy when you connect to a Cloud SQL instance over public IP address: Cloud Run App Engine flexible environment App Engine standard environment To configure SSL/TLS certificates on the Cloud SQL instance and for your client, do the following: Choose a server CA mode for your instance .
- Tools for connecting to Cloud SQL The following table contains some options for connecting to Cloud SQL: Connection option More information Cloud SQL Auth Proxy About the Cloud SQL Auth Proxy Connecting using the Cloud SQL Auth Proxy Connecting using the Cloud SQL Auth Proxy Docker Image gcloud CLI gcloud sql connect Cloud SQL language connectors Connect using Cloud SQL Connectors for Java, Python and Go.
- Cloud SQL connector Direct connection Description Cloud SQL Auth Proxy, a client-side proxy, and Cloud SQL Language Connectors, client-side libraries, provide simplified and secure access to your Cloud SQL instances, especially when you connect to an instance using a public IP address.

