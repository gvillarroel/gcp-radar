---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:04:57.773Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Cloud Data Fusion custom organization policy constraints"
feature_slug: "cloud-data-fusion-custom-organization-policy-constraints"
latest_feature_date: "2025-01-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient"
keywords:
  - "fusion"
  - "custom"
  - "organization"
  - "policy"
  - "constraints"
  - "now"
  - "supports"
  - "for"
---

# Cloud Data Fusion custom organization policy constraints

Product: Cloud Data Fusion
Coverage: LOW

## Step 02 Summary

Cloud Data Fusion now supports custom Organization Policy constraints for finer control over specific resource fields.

## Extended Definition

Cloud Data Fusion now supports custom Organization Policy constraints for finer control over specific resource fields.

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
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- January 21, 2025 Feature You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Cloud Data Fusion resources.
- For more information, see Create custom organization policy constraints .
- Feature GA : Cloud Data Fusion now supports Customer-Managed Encryption Keys (CMEK) , which provides user encryption control over the data written to Google internal resources in tenant projects, and data written by Cloud Data Fusion pipelines.
- Preview : Cloud Data Fusion now supports customer-managed encryption keys (CMEK) , which provide user encryption control over the data written to Google internal resources in tenant projects, and data written by Cloud Data Fusion pipelines.

### "Class DataFusionAsyncClient (1.16.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient)
- Source ID: `site-python-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Exceptions Type Description google.auth.exceptions.MutualTlsChannelError If mutual TLS transport creation failed for any reason. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create instance create instance ( request : typing .
- CreateInstanceRequest ( parent="parent value", instance id="instance id value", ) Make the request operation = client. create instance (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.data fusion v1.types.CreateInstanceRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 async def sample list available versions(): Create a client client = data fusion v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 async def sample restart instance(): Create a client client = data fusion v1 .

### "Class DataFusionClient (1.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient)
- Source ID: `site-python-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 def sample list available versions(): Create a client client = data fusion v1 .
- CreateInstanceRequest ( parent="parent value", instance id="instance id value", ) Make the request operation = client. create instance (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.data fusion v1.types.CreateInstanceRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 def sample restart instance(): Create a client client = data fusion v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 def sample create instance(): Create a client client = data fusion v1 .

