---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:04:57.763Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Cloud Data Fusion 6.11.0 high availability upgrades"
feature_slug: "cloud-data-fusion-6-11-0-high-availability-upgrades"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/release-notes"
  - "https://docs.cloud.google.com/data-fusion/docs/concepts/available-upgrades"
  - "https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient"
keywords:
  - "fusion"
  - "11"
  - "high"
  - "availability"
  - "upgrades"
  - "version"
  - "introduces"
  - "with"
---

# Cloud Data Fusion 6.11.0 high availability upgrades

Product: Cloud Data Fusion
Coverage: LOW

## Step 02 Summary

Cloud Data Fusion version 6.11.0 introduces high availability with reduced downtime during upgrades.

## Extended Definition

Cloud Data Fusion version 6.11.0 introduces high availability with reduced downtime during upgrades.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- [https://docs.cloud.google.com/data-fusion/docs/concepts/available-upgrades](https://docs.cloud.google.com/data-fusion/docs/concepts/available-upgrades)
- [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient)

## Supporting Pages

### Cloud Data Fusion release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Feature Cloud Data Fusion 6.11.0 offers high availability with reduced upgrade downtime.
- October 24, 2024 Issue Using Dataproc version 2.2 in your Cloud Data Fusion pipeline can fail in some cases with the following error: ERROR [Driver:o.a.s.d.y.ApplicationMaster@97] - User class threw exception: java.lang.NoSuchMethodError: 'org.apache.spark.sql.catalyst.encoders.ExpressionEncoder org.apache.spark.sql.catalyst.encoders.RowEncoder.apply(org.apache.spark.sql.types.StructType)' at io.cdap.cdap.etl.spark.batch.OpaqueDatasetCollection.toDataframeCollection(OpaqueDatasetCollection.java:111) .
- This issue occurs when the SAP Ariba sandbox exists in the following locations: US EU UAE KSA July 13, 2023 Fixed The SAP OData plugin (version 0.9.1) is available in the Cloud Data Fusion SAP Hub (all versions) with the following changes: Fixed an issue in the SAP OData batch source causing you not to receive a valid error message if the base URL provided is invalid.
- March 20, 2023 Change Salesforce plugins version 1.4.4 is available in all supported Cloud Data Fusion versions with the following changes: In the Salesforce Sink , added the Concurrency Mode property to let you configure the plugin for parallel or serial concurrency.

### Available upgrades \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/concepts/available-upgrades](https://docs.cloud.google.com/data-fusion/docs/concepts/available-upgrades)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Data Fusion supports the following version upgrades: Your Cloud Data Fusion version Available upgrades 6.11.0 6.11.1 (latest) 6.10.1 6.11.1 6.10.0 6.10.1, 6.11.1 6.9.2 6.10.1, 6.11.1 6.9.1 6.9.2 6.8.3 6.9.2, 6.10.1, 6.11.1 6.8.2 6.8.3 6.8.1 6.8.3 6.8.0 6.8.3 6.7.3 6.9.2, 6.10.1, 6.11.1 6.7.2 6.7.3 6.7.1 6.7.3 6.7.0 6.7.3 6.6.0 6.9.2, 6.10.1, 6.11.1 6.5.1 6.9.2, 6.10.1, 6.11.1 6.5.0 6.5.1 6.4.1 6.9.2, 6.10.1, 6.11.1 6.4.0 6.4.1 6.3.1 6.9.2, 6.10.1, 6.11.1 6.3.0 6.3.1 6.2.3 6.9.2, 6.10.1, 6.11.1 6.2.2 6.2.3 6.2.1 6.2.3 6.2.0 6.2.3 6.1.4 6.9.2, 6.10.1, 6.11.1 6.1.3 6.1.4, 6.3.1 6.1.2 6.1.4 Available patch revisions When you upgrade an instance, use the latest revision of Cloud Data Fusion version, so that your instances have the necessary fixes.
- Cloud Data Fusion supports the following patch revisions: Your Cloud Data Fusion version Latest patch revision 6.11.1 6.11.1.2 6.10.1 6.10.1.2 6.9.2 6.9.2.4 6.8.3 6.8.3.1 6.7.3 6.7.3.1 What's next Manage patch revisions for Cloud Data Fusion instances.
- Available version upgrades for instances and pipelines When upgrading, use the latest version of Cloud Data Fusion so that your instances run in a supported environment as long as possible.
- Home Documentation Data analytics Cloud Data Fusion Guides Send feedback Available upgrades Stay organized with collections Save and categorize content based on your preferences.

### "Class DataFusionAsyncClient (1.16.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient)
- Source ID: `site-python-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 async def sample list available versions(): Create a client client = data fusion v1 .
- ListAvailableVersionsRequest ( parent="parent value", ) Make the request page result = client. list available versions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.data fusion v1.types.ListAvailableVersionsRequest , dict]] The request object.
- Request message for getting details about a Data Fusion instance. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Request message for restarting a Data Fusion instance. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

