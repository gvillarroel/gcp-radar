---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.767Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Custom organization policies"
feature_slug: "custom-organization-policies"
latest_feature_date: "2024-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options"
keywords:
  - "governance"
  - "define"
  - "organization"
  - "policies"
  - "level"
  - "custom"
---

# Custom organization policies

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Custom organization policies let you define organization-level governance rules for Cloud SQL instances.

## Extended Definition

Custom organization policies let you define organization-level governance rules for Cloud SQL instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options)

## Supporting Pages

### "Cloud SQL backups overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Example custom organization policies for common use cases .
- You can also set an Cloud SQL custom organization policy to take a final back at instance deletion for all instances in your organization and set a standard retention period.
- For more information, see Cloud SQL organization policies .
- If you create a new instance with the final backup instance setting enabled, then you must update the final backup organization policy to apply the backup configurations to the primary instance only.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud SQL instance is located in the myproject project. gcloud network-connectivity service-connection-policies create cloud-sql-policy \ --network=default \ --project=my-project \ --region=us-central1 \ --service-class=google-cloud-sql \ --subnets=managed-service-subnet \ --psc-connection-limit=10 \ --producer-instance-location=custom-resource-hierarchy-levels \ --allowed-google-producers-resource-hierarchy-level=projects/myproject REST Before using any of the request data, make the following replacements: PROJECT ID : the ID of your project.
- You can set the value of PRODUCER INSTANCE LOCATION to only one of the following: custom-resource-hierarchy-levels : the instance must be located in one of the projects, folders, or organizations that you provide as a value for the allowed-google-producers-resource-hierarchy-level parameter. none : the instance is in the same project as the service connection policy.
- Click Create policy . gcloud To create a service connection policy, use the service-connection-policies create command . gcloud network-connectivity service-connection-policies create POLICY NAME \ --network= NETWORK \ --project= PROJECT ID \ --region= REGION \ --service-class= SERVICE CLASS \ --subnets=https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNETS \ --psc-connection-limit= LIMIT \ --description=" DESCRIPTION " \ --producer-instance-location= PRODUCER INSTANCE LOCATION \ --allowed-google-producers-resource-hierarchy-level= RESOURCE HIERARCHY LEVEL Replace the following: POLICY NAME : the name of your service connection policy.
- If you want to use a custom DNS name to connect to a Cloud SQL instance instead of using the predefined DNS name in this section, then configure the custom subject alternative name (SAN) setting while creating the instance.

### "Choose your backup option \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options)
- Source ID: `site-iam-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- In a multi-region configuration, it's recommended that backups be in the same region as the instance to minimize latency and avoid potential backup failures due to organization policies, or location-based limitations.
- Unlike enhanced backups, where backup settings are defined by a backup plan, backup configurations for standard backups are set at the instance level and defined in the instance's settings.
- Therefore, if you have multiple Cloud SQL instances, then you'll need to define the backup configurations for each instance separately in the instance's backup settings.
- This is useful if your organization needs to comply with data residency regulations that require you to keep your backups within a specific geographic boundary.

