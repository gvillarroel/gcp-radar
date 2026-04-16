---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.811Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "IAM Conditions"
feature_slug: "iam-conditions"
latest_feature_date: "2021-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/project-access-control"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "conditional"
  - "conditions"
  - "attribute"
  - "enables"
  - "control"
  - "based"
  - "access"
---

# IAM Conditions

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

IAM Conditions enables conditional, attribute-based access control for Cloud SQL resources.

## Extended Definition

IAM Conditions enables conditional, attribute-based access control for Cloud SQL resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### IAM authentication \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About IAM Conditions IAM Conditions lets you grant roles based on a variety of attributes.
- Use groups to configure role-based access control in your database.
- Manual IAM database authentication Manual IAM database authentication requires the IAM principal to explicitly pass the access token for the password attribute in the client connection request.
- Administrators who have users log in through IAM database authentication can use IAM authentication to centrally manage access control to their instances using IAM policies.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- If you use Private Service Connect to connect to a Cloud SQL instance from multiple VPC networks, then each network has its own administrator. dns.admin Grants full control over Cloud DNS resources, including DNS zones and records. cloudsql.admin Provides full control of a Cloud SQL instance and controls the instance over its lifecycle. cloudsql.instanceUser Provides access to the Cloud SQL instance.
- After you meet these conditions, use the endpoint's IP address to access the instance from any VPC network where you created the endpoint.
- Client IP-based control, logging, and metrics aren't supported for Query and System insights.
- IP-based allowlisting enforced by Context-Aware Access isn't supported.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Data API Access --data-api-access Controls connectivity to the instance using Data API .
- Secure and control access to the instance .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.

