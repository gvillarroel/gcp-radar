---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:04:57.774Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Cloud Data Fusion CMEK organization policy support"
feature_slug: "cloud-data-fusion-cmek-organization-policy-support"
latest_feature_date: "2024-12-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient"
keywords:
  - "fusion"
  - "cmek"
  - "organization"
  - "policy"
  - "now"
  - "supports"
  - "the"
  - "customer"
---

# Cloud Data Fusion CMEK organization policy support

Product: Cloud Data Fusion
Coverage: LOW

## Step 02 Summary

Cloud Data Fusion now supports the Customer-Managed Encryption Keys (CMEK) organization policy.

## Extended Definition

Cloud Data Fusion now supports the Customer-Managed Encryption Keys (CMEK) organization policy.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient)

## Supporting Pages

### Cloud Data Fusion release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature GA : Cloud Data Fusion now supports Customer-Managed Encryption Keys (CMEK) , which provides user encryption control over the data written to Google internal resources in tenant projects, and data written by Cloud Data Fusion pipelines.
- Preview : Cloud Data Fusion now supports customer-managed encryption keys (CMEK) , which provide user encryption control over the data written to Google internal resources in tenant projects, and data written by Cloud Data Fusion pipelines.
- December 17, 2024 Feature Cloud Data Fusion supports the CMEK organization policy .
- The Customer-managed encryption key (CMEK) configuration property is now available for BigQuery targets in your Replication jobs .

### "Class DataFusionAsyncClient (1.16.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient)
- Source ID: `site-python-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CreateInstanceRequest ( parent="parent value", instance id="instance id value", ) Make the request operation = client. create instance (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.data fusion v1.types.CreateInstanceRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 async def sample list available versions(): Create a client client = data fusion v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 async def sample restart instance(): Create a client client = data fusion v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 async def sample create instance(): Create a client client = data fusion v1 .

### "Class DataFusionClient (1.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient)
- Source ID: `site-python-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Exiting the with block will CLOSE the transport and may cause errors in other clients! common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create instance create instance ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 def sample list available versions(): Create a client client = data fusion v1 .
- CreateInstanceRequest ( parent="parent value", instance id="instance id value", ) Make the request operation = client. create instance (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.data fusion v1.types.CreateInstanceRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 def sample restart instance(): Create a client client = data fusion v1 .

