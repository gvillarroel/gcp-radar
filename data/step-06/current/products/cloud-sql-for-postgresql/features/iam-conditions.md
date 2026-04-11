---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.413Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "IAM Conditions"
feature_slug: "iam-conditions"
latest_feature_date: "2021-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/project-access-control"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "iam"
  - "conditions"
  - "enables"
  - "conditional"
  - "attribute"
  - "based"
  - "access"
  - "control"
---

# IAM Conditions

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

IAM Conditions enables conditional, attribute-based access control for Cloud SQL resources.

## Extended Definition

IAM Conditions enables conditional, attribute-based access control for Cloud SQL resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### IAM authentication \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control)
- Source ID: `site-iam-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- About IAM Conditions IAM Conditions lets you grant roles based on a variety of attributes.
- Manual IAM database authentication Manual IAM database authentication requires the IAM principal to explicitly pass the access token for the password attribute in the client connection request.
- Administrators who have users log in through IAM database authentication can use IAM authentication to centrally manage access control to their instances using IAM policies.
- By group : IAM group authentication lets you control access to Cloud SQL instances at a group level.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- You can use IAM Conditions to define and enforce conditional, attribute-based access control for Google Cloud resources, including Cloud SQL instances.
- You can use IAM Conditions to define and enforce conditional, attribute-based access control for Google Cloud resources, including Cloud SQL instances.
- You can use IAM Conditions to define and enforce conditional, attribute-based access control for Google Cloud resources, including Cloud SQL instances.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Cloud SQL for MySQL Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- You can use IAM Conditions to define and enforce conditional, attribute-based access control for Google Cloud resources, including Cloud SQL instances.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 05, 2025 Feature The rollout of the following extension versions, plugin versions, and extension support is underway: Extensions and plugins plpgsql check is upgraded from 2.8.1 to 2.8.3 for PostgreSQL versions 14 and later. pg wait sampling is upgraded from 1.1.6 to 1.1.9 for PostgreSQL versions 13 and later. tds fdw is upgraded from 2.0.4 to 2.0.5.
- Access Approval enables you to require explicit approval before Google Support may access your database for support purposes.To learn about access approval, see Overview of Access Approval .
- Feature You can now provide access to Cloud SQL Studio by granting a new IAM role, Cloud SQL Studio User ( roles/cloudsql.studioUser ), instead of using the Cloud SQL Admin IAM role.

