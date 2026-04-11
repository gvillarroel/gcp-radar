---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.600Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data lineage list view"
feature_slug: "data-lineage-list-view"
latest_feature_date: "2024-08-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
  - "https://docs.cloud.google.com/dataplex/docs/use-lineage"
keywords:
  - "lineage"
  - "list"
  - "view"
  - "dataplex"
  - "provides"
  - "table"
  - "based"
  - "that"
---

# Data lineage list view

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex provides a table-based lineage list view that shows full lineage information in one place.

## Extended Definition

Dataplex provides a table-based lineage list view that shows full lineage information in one place.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)

## Supporting Pages

### Knowledge Catalog release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- October 10, 2024 Feature In the data lineage list view, you can filter lineage information based on the time that lineage occurred.
- May 28, 2024 Feature Dataplex automatic data quality supports the following capabilities: Email notifications to alert people about the status and results of a data quality job Data quality scores that indicate the percentage of rules that passed API support for rule recommendations based on data profiling scans For more information, see Use auto data quality and Auto data quality overview .
- The lineage list view displays full lineage information in a single table.
- April 15, 2022 Feature Dataplex Data Quality tasks support running data quality validations on BigQuery tables that may not be part of a Dataplex lake, and on GCS data that's available as a BigQuery external table .

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cmek Service Client Service Description: Dataplex Universal Catalog Customer Managed Encryption Keys (CMEK) Service This class provides the ability to make remote calls to the backing service through method calls that map to API methods.
- Data Quality Dimension Result DataQualityDimensionResult provides a more detailed, per-dimension view of the results. com. google. cloud. dataplex. v1.
- Data Quality Column Result DataQualityColumnResult provides a more detailed, per-column view of the results. com. google. cloud. dataplex. v1.
- Data Quality Rule Result DataQualityRuleResult provides a more detailed, per-rule view of the results. com. google. cloud. dataplex. v1.

### "Use data lineage with Google Cloud systems \_|\_ Knowledge Catalog \_|\_\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To get the permissions that you need to view data lineage, ask your administrator to grant you the following IAM roles: Data Lineage Viewer ( roles/datalineage.viewer ) on the project where lineage is recorded, and the project where lineage is viewed View BigQuery table details: BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the table's storage project View BigQuery job details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) on the job's compute project View details for other cataloged assets: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) on the project where catalog entries are stored For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view data lineage: View BigQuery table details: bigquery.tables.get - the table's storage project View BigQuery job details: bigquery.jobs.get - the job's compute project You might also be able to get these permissions with custom roles or other predefined roles .
- The List view offers simplified and detailed tabular representations of lineage for both table-level and column-level lineage, synchronized with the Graph view.
- The List view offers simplified and detailed tabular representations of lineage for both table-level and column-level lineage, synchronized with the Graph view.

