---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.774Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "squeeze.worker_autostart flag"
feature_slug: "squeeze-worker-autostart-flag"
latest_feature_date: "2024-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/flags"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
keywords:
  - "autostart"
  - "starts"
  - "background"
  - "worker"
  - "automatically"
  - "squeeze"
  - "flag"
---

# squeeze.worker_autostart flag

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The squeeze.worker_autostart flag starts a pg_squeeze background worker automatically.

## Extended Definition

The squeeze.worker_autostart flag starts a pg_squeeze background worker automatically.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)

## Supporting Pages

### Configure database flags | Cloud SQL for PostgreSQL | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
- Source ID: `feature-recovery-direct-http`
- Final score: 300
- Re-rank relevance: N/A

Evidence snippets:
- 2147483647 No squeeze.worker_autostart string Yes squeeze.worker_role string Yes ssl_max_protocol_version enumeration Postgres 14: Sets the maximum SSL/TLS protocol version to use.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " | Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 To clear all flags for an existing instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "databaseFlags": [] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Delete the changes To delete your changes, do the following: To disable deletion protection, in your Terraform configuration file set the deletion_protection argument to false . deletion_protection = "false" Apply the updated Terraform configuration by running the following command and entering yes at the prompt: terraform apply Remove resources previously applied with your Terraform configuration by running the following command and entering yes at the prompt: terraform destroy REST v1 To set a flag for an existing database: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "databaseFlags": [ { "name": " flag_name ", "value": " flag_value " } ] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- REST v1beta4 To set a flag for an existing database: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "databaseFlags": [ { "name": " flag_name ", "value": " flag_value " } ] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can use NSSM to configure the Cloud SQL Auth Proxy as a Windows service, and NSSM monitors the Cloud SQL Auth Proxy and restarts it automatically if it stops responding.
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "connectorEnforcement": "REQUIRED" } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "connectorEnforcement": "REQUIRED" } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can use NSSM to configure the Cloud SQL Auth Proxy as a Windows service, and NSSM monitors the Cloud SQL Auth Proxy and restarts it automatically if it stops responding.
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "connectorEnforcement": "REQUIRED" } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "connectorEnforcement": "REQUIRED" } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

