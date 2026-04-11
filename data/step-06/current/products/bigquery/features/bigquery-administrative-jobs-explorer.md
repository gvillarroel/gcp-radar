---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.501Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery administrative jobs explorer"
feature_slug: "bigquery-administrative-jobs-explorer"
latest_feature_date: "2024-07-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
keywords:
  - "organizational jobs view"
  - "organization-wide job activity"
  - "BigQuery admin jobs explorer"
  - "administrative jobs explorer"
  - "admin job monitoring"
  - "Admin jobs explorer"
  - "jobs explorer in console"
  - "cross-project jobs view"
---

# BigQuery administrative jobs explorer

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery introduced an administrative jobs explorer for monitoring organization-wide job activity.

## Extended Definition

The BigQuery administrative jobs explorer is a BigQuery administrator capability for monitoring job activity across an organization. It supports viewing job activity at project level and organization-wide job activity, and can be filtered by reservations within the organization. Access requires `bigquery.jobs.listAll` on the relevant project or organization, and `bigquery.reservations.list` for reservation filtering; the `roles/bigquery.resourceViewer` role on the organization or project is documented as containing the required permissions.

## Evidence Summary

The cited BigQuery documentation page defines what the administrative jobs explorer does and explicitly lists its required permissions and recommended IAM role for use.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)

## Supporting Pages

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-root-2`
- Final score: 62
- Re-rank relevance: STRONG
- Re-rank rationale: The entire document is centered on the administrative jobs explorer and its role in monitoring jobs across BigQuery.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use administrative jobs explorer: To see data at project level: bigquery.jobs.listAll on the project To see data at organization level: bigquery.jobs.listAll on the organization To filter by reservations in your organization: bigquery.reservations.list on the organization You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to use administrative jobs explorer, ask your administrator to grant you the BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) IAM role on your organization or project.
- Use administrative jobs explorer As a BigQuery administrator, you can use the administrative jobs explorer to help you monitor jobs activity across your organization.
- This predefined role contains the permissions required to use administrative jobs explorer.

