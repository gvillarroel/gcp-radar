---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.599Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data insights"
feature_slug: "data-insights"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/data-insights"
  - "https://docs.cloud.google.com/dataplex/docs/release-notes"
  - "https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality"
keywords:
  - "insights"
  - "dataplex"
  - "uses"
  - "gemini"
  - "generated"
  - "queries"
  - "to"
  - "help"
---

# Data insights

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex uses Gemini-generated queries to help users explore table data, identify patterns, and assess quality; Dataplex uses Gemini-generated queries to help users explore table data, identify patterns, and assess quality.

## Extended Definition

Dataplex uses Gemini-generated queries to help users explore table data, identify patterns, and assess quality; Dataplex uses Gemini-generated queries to help users explore table data, identify patterns, and assess quality.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/data-insights](https://docs.cloud.google.com/dataplex/docs/data-insights)
- [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)

## Supporting Pages

### Access data insights in Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/data-insights](https://docs.cloud.google.com/dataplex/docs/data-insights)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see the exact permissions that are required generate insights, expand the Required permissions section: Required permissions dataplex.datascans.get dataplex.datascans.getData Enable APIs To use data insights, enable the following APIs in your project: Dataplex API, BigQuery API, and Gemini for Google Cloud API.
- Required roles To get read-only access to the generated insights, ask your administrator to grant you the following IAM role: Dataplex DataScan DataViewer ( roles/dataplex.dataScanDataViewer ) on the project containing the BigQuery tables for which you want to view insights.
- Knowledge Catalog (formerly Dataplex Universal Catalog) data insights automatically generates descriptions, relationship graphs, and SQL queries from your table and dataset metadata.
- Note: To provide feedback on this feature, email dataplex-data-insights-help@google.com .

### Knowledge Catalog release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- It uses Gemini to generate queries based on the metadata of a table, and helps you uncover patterns, assess data quality, and perform statistical analysis.
- Dataplex is an intelligent data fabric that helps organizations to centrally manage, monitor, and govern their data across data lakes, data warehouses, and data marts with consistent controls, providing access to trusted data and powering analytics at scale.
- It uses Gemini large language models to generate queries based on the metadata of a table, and lets you uncover patterns, assess data quality, and perform statistical analysis.
- April 28, 2025 Feature Dataplex automatic discovery scans your data in Cloud Storage buckets to extract and catalog metadata, creating BigLake, external, or object tables for analytics and AI for insights, security, and governance.

### Use auto data quality \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for UpdateDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void UpdateDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for DeleteDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void DeleteDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for CreateDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void CreateDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax ; using Google.Cloud.Dataplex.V1 ; using System ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for ListDataScanJobs</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void ListDataScanJobsRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .

