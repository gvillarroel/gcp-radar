---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.371Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Subqueries in row-level access policies"
feature_slug: "subqueries-in-row-level-access-policies"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/conditions"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
keywords:
  - "subqueries"
  - "row"
  - "level"
  - "access"
  - "policies"
  - "bigquery"
  - "now"
  - "supports"
---

# Subqueries in row-level access policies

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery row-level access policies now support subqueries; BigQuery supports using subqueries in row-level access policies.

## Extended Definition

BigQuery row-level access policies now support subqueries; BigQuery supports using subqueries in row-level access policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/conditions](https://docs.cloud.google.com/bigquery/docs/conditions)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)

## Supporting Pages

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- This permission is required for creating replica materialized views. bigquery.tables.restoreSnapshot Table Restore a table snapshot. bigquery.tables.setCategory Table Set policy tags in the table's schema. bigquery.tables.setColumnDataPolicy Table Set column-level access policies on a table. bigquery.tables.setIamPolicy Table Set access controls on a table. bigquery.tables.update Table Update table. metadata. bigquery.tables.get is also required to update table metadata in the console. bigquery.tables.updateData Table Update table data. bigquery.tables.updateIndex Table Update a search index on the table.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to modify IAM policies for resources: To get a dataset's access policy: bigquery.datasets.get To set a dataset's access policy: bigquery.datasets.update To get a dataset's access policy (Google Cloud console only): bigquery.datasets.getIamPolicy To set a dataset's access policy (console only): bigquery.datasets.setIamPolicy To get a table or view's policy: bigquery.tables.getIamPolicy To set a table or view's policy: bigquery.tables.setIamPolicy To get a routine's access policy: bigquery.routines.getIamPolicy To set a routine's access policy: bigquery.routines.setIamPolicy To create bq tool or SQL BigQuery jobs (optional): bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- Then call the IAM().SetPolicy() function to save changes to the access policy for a table or view. import ( "context" "fmt" "io" "cloud.google.com/go/bigquery" "cloud.google.com/go/iam" ) // revokeTableOrViewAccessPolicies creates a new ACL removing the VIEWER role to group "example-analyst-group@google.com" // For more information on the types of ACLs available see: // https://cloud.google.com/storage/docs/access-control/lists func revokeTableOrViewAccessPolicies ( w io .
- Then call the Roles() function to get the access policy for a table or view. import ( "context" "fmt" "io" "cloud.google.com/go/bigquery" ) // viewTableOrViewAccessPolicies retrieves the ACL for the given resource // For more information on the types of ACLs available see: // https://cloud.google.com/storage/docs/access-control/lists func viewTableOrViewAccessPolicies ( w io .

### Control access with IAM Conditions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/conditions](https://docs.cloud.google.com/bigquery/docs/conditions)
- Source ID: `site-docs-reference-5`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to apply IAM Conditions to BigQuery resources: Set conditional IAM access at the project level: resourcemanager.projects.setIamPolicy Set conditional IAM access on datasets: bigquery.datasets.setIamPolicy bigquery.datasets.update You might also be able to get these permissions with custom roles or other predefined roles .
- However, a user with conditional access can grant themselves the BigQuery Admin role ( roles/bigquery.admin ) on the table, and then modify row and column access policies.
- Add conditions to an organization, folder, or project To add conditional access to an organization, folder, or project in BigQuery, see Allow policies with conditions .
- Don't use the condition resource.type == 'bigquery.googleapis.com/Dataset' for dataset-level policies, because it has no effect on authorization.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery Storage API enforces row- and column-level governance policies on all data access to BigLake tables, including through connectors.
- Consider the following query as an example: SELECT FROM bigquery dataset . bigquery table AS clients WHERE clients . sales rep IN ( SELECT id FROM aws dataset . aws table1 AS employees INNER JOIN aws dataset . aws table2 AS active employees ON employees . id = active employees . id WHERE employees . level > 3 ); This example has two transfers: one from an employees table (with a level filter) and one from an active employees table.
- Cross-cloud join required permissions To get the permissions that you need to run a cross-cloud join, ask your administrator to grant you the following IAM roles on the project where the join is executed: BigQuery Data Viewer ( roles/bigquery.dataViewer ) BigQuery Job User ( roles/bigquery.jobUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For example, the following diagram demonstrates how the BigQuery Storage API lets users access authorized data using open source query engines such as Apache Spark: For more information about connectors supported by BigQuery, see BigQuery connectors .

