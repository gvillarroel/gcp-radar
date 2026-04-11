---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:04:57.764Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Cloud Data Fusion failed pipeline error diagnostics"
feature_slug: "cloud-data-fusion-failed-pipeline-error-diagnostics"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/tutorials/reusable-pipeline"
  - "https://docs.cloud.google.com/data-fusion/docs/release-notes"
  - "https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline"
keywords:
  - "fusion"
  - "failed"
  - "pipeline"
  - "error"
  - "diagnostics"
  - "the"
  - "web"
  - "interface"
---

# Cloud Data Fusion failed pipeline error diagnostics

Product: Cloud Data Fusion
Coverage: LOW

## Step 02 Summary

The Cloud Data Fusion web interface now provides detailed error information for failed pipeline runs with classification by category, reason, and message.

## Extended Definition

The Cloud Data Fusion web interface now provides detailed error information for failed pipeline runs with classification by category, reason, and message.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/tutorials/reusable-pipeline](https://docs.cloud.google.com/data-fusion/docs/tutorials/reusable-pipeline)
- [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- [https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline](https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline)

## Supporting Pages

### "Design and create a reusable pipeline \_|\_ Cloud Data Fusion \_|\_ Google\

- URL: [https://docs.cloud.google.com/data-fusion/docs/tutorials/reusable-pipeline](https://docs.cloud.google.com/data-fusion/docs/tutorials/reusable-pipeline)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- In the Cloud Data Fusion web interface, you can use the various pages, such as Pipeline Studio or Wrangler , to use Cloud Data Fusion features.
- Set the macro arguments In the Cloud Data Fusion web interface, go to your data pipeline on the Studio page.
- Write to Cloud Storage In the Cloud Data Fusion web interface, go to your data pipeline on the Studio page.
- Transform your data In the Cloud Data Fusion web interface, go to your data pipeline on the Studio page.

### Cloud Data Fusion release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature When a pipeline run fails, you can retrieve detailed error information on the pipeline details page of the Cloud Data Fusion web interface.
- October 24, 2024 Issue Using Dataproc version 2.2 in your Cloud Data Fusion pipeline can fail in some cases with the following error: ERROR [Driver:o.a.s.d.y.ApplicationMaster@97] - User class threw exception: java.lang.NoSuchMethodError: 'org.apache.spark.sql.catalyst.encoders.ExpressionEncoder org.apache.spark.sql.catalyst.encoders.RowEncoder.apply(org.apache.spark.sql.types.StructType)' at io.cdap.cdap.etl.spark.batch.OpaqueDatasetCollection.toDataframeCollection(OpaqueDatasetCollection.java:111) .
- This release includes the following change: Fixed an issue causing pipeline deployments to fail due to SAP memory dumps when processing large datasets with macro filters: ERROR Stage 'SAP OData' encountered : CDF SAP ODATA 01534 - Service validation failed.
- Fixed In Cloud Data Fusion versions 6.7 and later, SAP Ariba plugin version 1.2.1 fixes the issue causing the following error after entering authentication credentials: CDF ARIBA 01501 - Failed to call given Ariba service .

### Create a data pipeline by using Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline](https://docs.cloud.google.com/data-fusion/docs/create-data-pipeline)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Google Cloud console, you can do the following: Create a Google Cloud console project Create and delete Cloud Data Fusion instances View the Cloud Data Fusion instance details In the Cloud Data Fusion web interface, you can use various pages, such as Studio or Wrangler , to use Cloud Data Fusion functionality.
- Navigate the Cloud Data Fusion web interface When using Cloud Data Fusion, you use both the Google Cloud console and the separate Cloud Data Fusion web interface.
- In the Cloud Data Fusion web interface, use the left navigation panel to navigate to the page you need.
- In the Cloud Data Fusion web interface, click Hub .

