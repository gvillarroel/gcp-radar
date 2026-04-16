---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.462Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data lineage for Dataflow"
feature_slug: "data-lineage-for-dataflow"
latest_feature_date: "2025-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/lineage-considerations"
  - "https://docs.cloud.google.com/dataplex/docs/use-lineage"
  - "https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
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
Coverage: MEDIUM

## Step 02 Summary

Dataplex provides data lineage capture for Dataflow pipelines.

## Extended Definition

Dataplex provides data lineage capture for Dataflow pipelines.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/lineage-considerations](https://docs.cloud.google.com/dataplex/docs/lineage-considerations)
- [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- [https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart](https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)

## Supporting Pages

### Data lineage considerations \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/lineage-considerations](https://docs.cloud.google.com/dataplex/docs/lineage-considerations)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managed Service for Apache Spark Managed Service for Apache Spark Spark jobs can capture lineage events and publish them to the Data Lineage API.
- See Data lineage with Knowledge Catalog (formerly Dataplex Universal Catalog) for more information.
- Dataflow Dataflow jobs can capture lineage events and publish them to the Data Lineage API.
- This document provides information on data lineage compliance and limitations.

### "Use data lineage with Google Cloud systems \_|\_ Knowledge Catalog \_|\_\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-lineage](https://docs.cloud.google.com/dataplex/docs/use-lineage)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- To get the permissions that you need to view data lineage, ask your administrator to grant you the following IAM roles: Data Lineage Viewer ( roles/datalineage.viewer ) on the project where lineage is recorded, and the project where lineage is viewed View BigQuery table details: BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the table's storage project View BigQuery job details: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) on the job's compute project View details for other cataloged assets: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) on the project where catalog entries are stored For more information about granting roles, see Manage access to projects, folders, and organizations .
- To capture lineage information, complete the following steps: In the Google Cloud console, on the Project selector page, select the project where you want to record lineage.
- This guide describes how to access lineage graphs in Knowledge Catalog (formerly Dataplex Universal Catalog), BigQuery, and Vertex AI.
- View lineage in Vertex AI Systems such as Vertex AI Pipelines generate lineage data for Vertex AI models and datasets.

### "Track data lineage for a BigQuery table \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart](https://docs.cloud.google.com/dataplex/docs/track-lineage-quickstart)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to view lineage visualization graphs, ask your administrator to grant you the following IAM roles: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) on the Knowledge Catalog (formerly Dataplex Universal Catalog) resource project Data Lineage Viewer ( roles/datalineage.viewer ) on the project where you use BigQuery BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the project where you use BigQuery For more information about granting roles, see Manage access to projects, folders, and organizations .
- After you enable the Data Lineage API, lineage information is automatically reported for multiple Google Cloud services in the project, depending on their product-level lineage control.
- Data lineage with process details Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.
- This quickstart shows you how to get started with data lineage for BigQuery tables: Copy two tables from a publicly available new york taxi trips dataset.

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Data Product Service Grpc DataProductService provides APIs for managing data products and the underlying data assets. com. google. cloud. dataplex. v1.
- Async Service DataProductService provides APIs for managing data products and the underlying data assets. com. google. cloud. dataplex. v1.
- Data Scan Represents a user-visible job which provides the insights for the related data source. com. google. cloud. dataplex. v1.
- Builder Represents a user-visible job which provides the insights for the related data source. com. google. cloud. dataplex. v1.

