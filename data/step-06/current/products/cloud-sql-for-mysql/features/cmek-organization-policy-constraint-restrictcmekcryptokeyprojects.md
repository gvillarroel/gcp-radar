---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.960Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "CMEK organization policy constraint: restrictCmekCryptoKeyProjects"
feature_slug: "cmek-organization-policy-constraint-restrictcmekcryptokeyprojects"
latest_feature_date: "2022-04-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy"
  - "https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "cmek"
  - "organization"
  - "policy"
  - "constraint"
  - "restrictcmekcryptokeyprojects"
  - "sql"
  - "supports"
  - "constraints"
---

# CMEK organization policy constraint: restrictCmekCryptoKeyProjects

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports the constraints/gcp.restrictCmekCryptoKeyProjects organization policy constraint to limit which projects can supply Cloud KMS keys in Preview.

## Extended Definition

Cloud SQL supports the constraints/gcp.restrictCmekCryptoKeyProjects organization policy constraint to limit which projects can supply Cloud KMS keys in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy)
- [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### "Cloud SQL organization policies \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customer-managed encryption keys (CMEK) organization policies Cloud SQL supports two organization policy constraints that help ensure CMEK protection across an organization: constraints/gcp.restrictNonCmekServices and constraints/gcp.restrictCmekCryptoKeyProjects .
- For information about CMEK organization policy constraints, see Organization policy constraints .
- By default, you can add Authorized Networks to Cloud SQL instances. constraints/sql.restrictAuthorizedNetworks Allowed Restrictions for connection organization policies When you set the organization policy for each project, you need to determine if any one of the following apply to your project: Read replicas public IP conflicts Incompatibility using gcloud CLI sql connect Google Cloud hosted services access MySQL failover replica public IP conflicts Non-RFC 1918 private IP addresses Read replicas public IP address conflicts Cloud SQL read replicas connect to the primary instance over the non-proxied database connection.
- The types of organization policies specific to Cloud SQL are as follows: Predefined organization policies Connection organization policies Customer-managed encryption keys (CMEK) organization policies Custom organization policies Predefined organization policies You can use the predefined constraints to control the public IP settings and Customer Managed Encryption Key (CMEK) settings of Cloud SQL instances.

### Data residency overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use organizational policy constraints to enforce data residency requirements at the organization, project, or folder level.
- CMEK are intended for organizations that have sensitive or regulated data that requires them to manage their own encryption keys.
- These constraints let you define the Google Cloud locations where users can create resources for supported services.
- You can enforce this constraint even if the user is authorized according to your Google Cloud IAM policy .

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Note: If there is a resource location constraint on your organization policy, you must select one of the regions that the organization policy allows.
- If this type of policy affects your project, you can only select regions the organization policy allows.
- Note: Some organizations use an organization policy to restrict resource locations.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.

