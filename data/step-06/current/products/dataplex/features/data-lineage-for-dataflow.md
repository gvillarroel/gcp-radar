---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.595Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data lineage for Dataflow"
feature_slug: "data-lineage-for-dataflow"
latest_feature_date: "2025-03-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/use-lineage"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
  - "https://docs.cloud.google.com/dataplex/docs/release-notes"
keywords:
  - "lineage"
  - "for"
  - "dataflow"
  - "dataplex"
  - "provides"
  - "capture"
  - "pipelines"
---

# Data lineage for Dataflow

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex provides data lineage capture for Dataflow pipelines.

## Extended Definition

Dataplex provides data lineage capture for Dataflow pipelines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)

## Supporting Pages

### "Use data lineage with Google Cloud systems \_|\_ Knowledge Catalog \_|\_\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- To get the permissions that you need to view data lineage, ask your administrator to grant you the following IAM roles: Data Lineage Viewer ( roles/datalineage.viewer ) on the project where lineage is recorded, and the project where lineage is viewed View BigQuery table details: BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the table's storage project View BigQuery job details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) on the job's compute project View details for other cataloged assets: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) on the project where catalog entries are stored For more information about granting roles, see Manage access to projects, folders, and organizations .
- To capture lineage information, complete the following steps: In the Google Cloud console, on the Project selector page, select the project where you want to record lineage.
- This guide describes how to access lineage graphs in Knowledge Catalog (formerly Dataplex Universal Catalog), BigQuery, and Vertex AI.
- View lineage in Vertex AI Systems such as Vertex AI Pipelines generate lineage data for Vertex AI models and datasets.

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Data Product Service Grpc DataProductService provides APIs for managing data products and the underlying data assets. com. google. cloud. dataplex. v1.
- Async Service DataProductService provides APIs for managing data products and the underlying data assets. com. google. cloud. dataplex. v1.
- Data Scan Represents a user-visible job which provides the insights for the related data source. com. google. cloud. dataplex. v1.
- Builder Represents a user-visible job which provides the insights for the related data source. com. google. cloud. dataplex. v1.

### Knowledge Catalog release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- May 05, 2025 Feature You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Dataplex and data lineage resources.
- May 02, 2022 Feature Added support for scheduling Google-provided and custom Dataflow templates from the Dataplex page in the Cloud Console.
- For more information, see Manage Dataplex resources using custom constraints and Manage data lineage resources using custom constraints .
- Dataplex Catalog provides a platform for storing, managing, and accessing your metadata.

