---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.321Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Custom organization policies"
feature_slug: "custom-organization-policies"
latest_feature_date: "2024-07-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
keywords:
  - "custom"
  - "organization"
  - "policies"
  - "let"
  - "you"
  - "define"
  - "level"
  - "governance"
---

# Custom organization policies

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Custom organization policies let you define organization-level governance rules for Cloud SQL instances.

## Extended Definition

Custom organization policies let you define organization-level governance rules for Cloud SQL instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- July 14, 2022 Cloud SQL for MySQL Feature For enhanced security with built-in authentication, Cloud SQL now lets you set password policies at the instance and user levels.
- June 14, 2022 Cloud SQL for PostgreSQL Feature For enhanced security with built-in authentication, Cloud SQL now lets you set password policies at the instance level.
- November 14, 2024 Cloud SQL for MySQL Feature You can now create custom organization policies for the BackupRun resource in Cloud SQL instances.
- Cloud SQL for PostgreSQL Feature You can now create custom organization policies for the BackupRun resource in Cloud SQL instances.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- June 14, 2022 Feature For enhanced security with built-in authentication, Cloud SQL now lets you set password policies at the instance level.
- November 14, 2024 Feature You can now create custom organization policies for the BackupRun resource in Cloud SQL instances.
- July 18, 2024 Feature You can now create custom organization policies for Cloud SQL instances.
- You can also create a custom organization policy to define final backup instance settings.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud SQL instance is located in the myproject project. gcloud network-connectivity service-connection-policies create cloud-sql-policy \ --network=default \ --project=my-project \ --region=us-central1 \ --service-class=google-cloud-sql \ --subnets=managed-service-subnet \ --psc-connection-limit=10 \ --producer-instance-location=custom-resource-hierarchy-levels \ --allowed-google-producers-resource-hierarchy-level=projects/myproject REST Before using any of the request data, make the following replacements: PROJECT ID : the ID of your project.
- You can set the value of PRODUCER INSTANCE LOCATION to only one of the following: custom-resource-hierarchy-levels : the instance must be located in one of the projects, folders, or organizations that you provide as a value for the allowed-google-producers-resource-hierarchy-level parameter. none : the instance is in the same project as the service connection policy.
- Click Create policy . gcloud To create a service connection policy, use the service-connection-policies create command . gcloud network-connectivity service-connection-policies create POLICY NAME \ --network= NETWORK \ --project= PROJECT ID \ --region= REGION \ --service-class= SERVICE CLASS \ --subnets=https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNETS \ --psc-connection-limit= LIMIT \ --description=" DESCRIPTION " \ --producer-instance-location= PRODUCER INSTANCE LOCATION \ --allowed-google-producers-resource-hierarchy-level= RESOURCE HIERARCHY LEVEL Replace the following: POLICY NAME : the name of your service connection policy.
- Terraform To create an instance with Private Service Connect enabled for the instance, use the google sql database instance Terraform resource . resource "google sql database instance" "default" { name = "postgres-instance" region = "us-central1" database version = "POSTGRES 14" settings { tier = "db-custom-2-7680" availability type = "REGIONAL" backup configuration { enabled = true } ip configuration { psc config { psc enabled = true allowed consumer projects = [] } ipv4 enabled = false } } } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

