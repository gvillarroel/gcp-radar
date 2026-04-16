---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.799Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "decoderbufs extension"
feature_slug: "decoderbufs-extension"
latest_feature_date: "2022-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/features"
keywords:
  - "decoderbufs"
  - "output"
  - "protocol"
  - "buffers"
  - "decoding"
  - "logical"
  - "provides"
  - "extension"
---

# decoderbufs extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The decoderbufs extension provides logical decoding output in Protocol Buffers format for Debezium.

## Extended Definition

The decoderbufs extension provides logical decoding output in Protocol Buffers format for Debezium.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/features](https://docs.cloud.google.com/sql/docs/postgres/features)

## Supporting Pages

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- INSTANCE UNIX SOCKET , // e.g. '/cloudsql/project:region:instance' // Specify additional properties here. ... config , }); }; C# To see this snippet in the context of a web application, view the README on GitHub . using MySql.Data.MySqlClient ; using System ; namespace CloudSql { public class MySqlUnix { public static MySqlConnectionStringBuilder NewMysqlUnixSocketConnectionString () { // Equivalent connection string: // "Server=<INSTANCE UNIX SOCKET>;Uid=<DB USER>;Pwd=<DB PASS>;Database=<DB NAME>;Protocol=unix" var connectionString = new MySqlConnectionStringBuilder () { // The Cloud SQL proxy provides encryption between the proxy and instance.
- Some possible Cloud SQL Auth Proxy invocation strings: Using Google Cloud SDK authentication: ./cloud-sql-proxy --unix-socket /cloudsql INSTANCE CONNECTION NAME & Using a service account: ./cloud-sql-proxy --unix-socket /cloudsql --credentials-file PATH TO KEY FILE INSTANCE CONNECTION NAME & Start the Cloud SQL Auth Proxy in its own Cloud Shell terminal so you can monitor its output without it mixing with the output from other programs.
- Run the Cloud SQL Auth Proxy in a separate process Running the Cloud SQL Auth Proxy in a separate Cloud Shell terminal process can be useful, to avoid mixing its console output with output from other programs.
- The Cloud SQL Auth Proxy is a connector that provides secure access to this instance without a need for authorized networks or for configuring SSL.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": USER , "insertTime": "2025-05-13T20:44:23.064Z", "operationType": "UPDATE", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID "," } Test connectivity To test inbound connectivity to a Cloud SQL instance with Private Service Connect enabled, set the IP address of the Private Service Connect endpoint to be the destination IP address. gcloud To create a connectivity test for a Cloud SQL instance with Private Service Connect enabled, use the gcloud network-management connectivity-tests create command: gcloud network-management connectivity-tests create CONNECTIVITY TEST NAME \ --source-instance = SOURCE INSTANCE \ --destination-cloud-sql-instance = DESTINATION CLOUD SQL INSTANCE \ --destination-network = DESTINATION NETWORK \ --destination-port = DESTINATION PORT \ --protocol = tcp Make the following replacements: CONNECTIVITY TEST NAME : the name of the connectivity test.
- Make the following replacements: INSTANCE NAME : the name of the Cloud SQL instance to which Private Service Connect endpoints in VPC networks can connect PROJECT ID : the ID or project number of the Google Cloud project that contains the instance The following example shows a sample output for this command: gcloud sql instances describe myinstance \ --project = 12345 ... pscServiceAttachmentLink: projects/45678/regions/myregion/serviceAttachments/myserviceattachment REST Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the instance HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE NAME To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://networkmanagement.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/connectivityTests?testId= CONNECTIVITY TEST NAME Request JSON body: { "source": { "ipAddress": " SOURCE IP ADDRESS ", "instance": " SOURCE INSTANCE ", "network": " SOURCE NETWORK " }, "destination": { "ipAddress": " DESTINATION IP ADDRESS ", "port": DESTINATION PORT , "network": " DESTINATION NETWORK ", "projectId": " PROJECT ID " }, "protocol": "TCP" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- To connect to the Cloud SQL instance, use the internal IP address. psql "sslmode=disable dbname= DATABASE NAME user= USERNAME hostaddr= IP ADDRESS " Make the following replacements: DATABASE NAME : the name of the Cloud SQL for PostgreSQL database that's contained within the instance USERNAME : the name of the user that's connecting to the instance IP ADDRESS : the endpoint's IP address Connect using the Cloud SQL Auth Proxy The Cloud SQL Auth Proxy is a connector that provides secure access to an instance with Private Service Connect enabled without a need for authorized networks or for configuring SSL.

### Cloud SQL for PostgreSQL features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/features](https://docs.cloud.google.com/sql/docs/postgres/features)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported languages for Cloud SQL for PostgreSQL You can use Cloud SQL with App Engine applications running in the flexible environment that are written in: C# Go Java Node.js PHP Python Ruby You can also use Cloud SQL with external applications using the standard PostgreSQL client-server protocol.
- Unsupported features for Cloud SQL for PostgreSQL Any feature that requires SUPERUSER privileges with the following exceptions: You can use the CREATE EXTENSION statement only for supported extensions .
- Support for secure external connections with the Cloud SQL Auth Proxy or with the SSL/TLS protocol.
- Supported PostgreSQL extensions for Cloud SQL Cloud SQL supports many PostgreSQL extensions.

