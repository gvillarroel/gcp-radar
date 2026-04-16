---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.280Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Multislice TPU environment creation in Google Cloud Console"
feature_slug: "multislice-tpu-environment-creation-in-google-cloud-console"
latest_feature_date: "2024-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/quick-starts"
  - "https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient"
keywords:
  - "multislice"
  - "tpu"
  - "environment"
  - "creation"
  - "console"
  - "lets"
  - "you"
  - "create"
---

# Multislice TPU environment creation in Google Cloud Console

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

Google Cloud Console support for Multislice lets you create Cloud TPU training environments that use multiple TPU slices across one or more Pods.

## Extended Definition

Google Cloud Console support for Multislice lets you create Cloud TPU training environments that use multiple TPU slices across one or more Pods.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts)
- [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient)

## Supporting Pages

### Set up a Google Cloud project for TPUs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Cloud TPU service agent: A TPU service agent is a Google-managed service account that lets the Cloud TPU service create and manage resources in your Google Cloud project. gcloud beta services identity create --service tpu.googleapis.com \ --project $PROJECT ID Create a TPU service account: Service accounts provide credentials for your TPU VMs to access other Google Cloud resources.
- Set up a Google Cloud project for TPUs This topic describes how to set up your Google Cloud project to use Cloud TPU VMs: Create a Google Cloud project Configure your Google Cloud project for Cloud TPU Create a Google Cloud project In the Google Cloud console, sign in to your Google Account or sign up for a new account .
- Make sure your Google Cloud account has the following roles in your project: Service Account Admin : This role lets you create a service account Project IAM Admin : This role lets you grant a role in a project TPU Admin : This role lets you create a TPU To view your current roles, see View current access .
- Grant your service account the following roles so your TPU VM can access common Google Cloud services: TPU Admin : This role provides full access to TPU resources Storage Admin : This role provides access to Cloud Storage Logs Writer : This role lets you write logs with the Cloud Logging API Monitoring Metric Writer : This role lets you write metrics to Cloud Monitoring Note: If you don't specify a custom service account, your Cloud TPU uses the default Compute Engine service account .

### "Class TpuAsyncClient (1.26.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient)
- Source ID: `site-python-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample create node(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) node = tpu v1.Node() node.accelerator type = "accelerator type value" node.tensorflow version = "tensorflow version value" request = tpu v1.CreateNodeRequest( parent="parent value", node=node, ) Make the request operation = client. create node (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.CreateNodeRequest , dict]] The request object.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create node create node ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample delete node(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) request = tpu v1.DeleteNodeRequest( name="name value", ) Make the request operation = client. delete node (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.DeleteNodeRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample list accelerator types(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) request = tpu v1.ListAcceleratorTypesRequest( parent="parent value", ) Make the request page result = client. list accelerator types (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.ListAcceleratorTypesRequest , dict]] The request object.

### "Class TpuClient (1.26.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient)
- Source ID: `site-python-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 def sample create node(): Create a client client = tpu v1.TpuClient() Initialize request argument(s) node = tpu v1.Node() node.accelerator type = "accelerator type value" node.tensorflow version = "tensorflow version value" request = tpu v1.CreateNodeRequest( parent="parent value", node=node, ) Make the request operation = client. create node (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.tpu v1.types.CreateNodeRequest , dict] The request object.
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create node create node ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 def sample list accelerator types(): Create a client client = tpu v1.TpuClient() Initialize request argument(s) request = tpu v1.ListAcceleratorTypesRequest( parent="parent value", ) Make the request page result = client. list accelerator types (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.tpu v1.types.ListAcceleratorTypesRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 def sample delete node(): Create a client client = tpu v1.TpuClient() Initialize request argument(s) request = tpu v1.DeleteNodeRequest( name="name value", ) Make the request operation = client. delete node (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.tpu v1.types.DeleteNodeRequest , dict] The request object.

