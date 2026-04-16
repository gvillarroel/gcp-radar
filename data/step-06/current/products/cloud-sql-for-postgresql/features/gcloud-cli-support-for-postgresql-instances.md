---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.835Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "gcloud CLI support for PostgreSQL instances"
feature_slug: "gcloud-cli-support-for-postgresql-instances"
latest_feature_date: "2017-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "tool"
  - "command"
  - "line"
  - "gcloud"
  - "instances"
  - "added"
---

# gcloud CLI support for PostgreSQL instances

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The gcloud command-line tool added general availability support for managing Cloud SQL for PostgreSQL instances without requiring beta commands.

## Extended Definition

The gcloud command-line tool added general availability support for managing Cloud SQL for PostgreSQL instances without requiring beta commands.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You are also using the Cloud SQL Admin API, indirectly, when you use any of the following ways of administering instances: gcloud CLI , which contains a command-line interface you can use to work with your instances.
- At the command line, provide the path to the file, preceded by the @ character, as the --data parameter: --data @<path-to-file>/<filename> For example, to create a database user, you could create a file named data.json with the following content: {"host": "%", "name": "user1", "password": "abc123"} Then you would use the following cURL command at the command line: curl --header "Authorization: Bearer ${ ACCESS TOKEN } " \ --header 'Content-Type: application/json' \ --data @./data.json \ -X POST \ https://www.googleapis.com/sql/v1beta4/projects/myProject/instances/myInstance/users Work with long-running API calls Some API calls, such as object creation, can take some time to complete.
- For increased security, you can create a file containing the JSON data for the API call, and provide the path to the file on the command line.
- If you are working with sensitive values such as passwords or security keys, providing them on the command line poses a security risk.

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api)
- Source ID: `site-api-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You are also using the Cloud SQL Admin API, indirectly, when you use any of the following ways of administering instances: gcloud CLI , which contains a command-line interface you can use to work with your instances.
- At the command line, provide the path to the file, preceded by the @ character, as the --data parameter: --data @<path-to-file>/<filename> For example, to create a database user, you could create a file named data.json with the following content: {"host": "%", "name": "user1", "password": "abc123"} Then you would use the following cURL command at the command line: curl --header "Authorization: Bearer ${ ACCESS TOKEN } " \ --header 'Content-Type: application/json' \ --data @./data.json \ -X POST \ https://www.googleapis.com/sql/v1beta4/projects/myProject/instances/myInstance/users Work with long-running API calls Some API calls, such as object creation, can take some time to complete.
- For increased security, you can create a file containing the JSON data for the API call, and provide the path to the file on the command line.
- If you are working with sensitive values such as passwords or security keys, providing them on the command line poses a security risk.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "enableGoogleMlIntegration": " true " " false " "databaseFlags": [ { "name": "cloudsql.enable google ml integration", "value": " on " " off " } ] "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", "passwordChangeInterval": " PASSWORD CHANGE INTERVAL " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "enableGoogleMlIntegration": " true " " false " "databaseFlags": [ { "name": "cloudsql.enable google ml integration", "value": " on " " off " } ] "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", "passwordChangeInterval": " PASSWORD CHANGE INTERVAL " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

