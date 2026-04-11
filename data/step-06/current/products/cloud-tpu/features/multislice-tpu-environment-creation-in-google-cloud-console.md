---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:07:58.610Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Multislice TPU environment creation in Google Cloud Console"
feature_slug: "multislice-tpu-environment-creation-in-google-cloud-console"
latest_feature_date: "2024-11-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/release-notes"
  - "https://docs.cloud.google.com/tpu/docs/quick-starts"
  - "https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient"
keywords:
  - "multislice"
  - "tpu"
  - "environment"
  - "creation"
  - "in"
  - "console"
  - "for"
  - "lets"
---

# Multislice TPU environment creation in Google Cloud Console

Product: Cloud TPU
Coverage: LOW

## Step 02 Summary

Google Cloud Console support for Multislice lets you create Cloud TPU training environments that use multiple TPU slices across one or more Pods.

## Extended Definition

Google Cloud Console support for Multislice lets you create Cloud TPU training environments that use multiple TPU slices across one or more Pods.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts)
- [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient)

## Supporting Pages

### Cloud TPU release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Feature Creating a Multislice TPU environment is now available in the Google Cloud Console.
- These enhancements enable Trillium to excel across a wide range of AI workloads, including: Scaling AI training workloads like LLMs including dense and Mixture of Experts (MoE) models Inference performance and collection scheduling Embedding-intensive models acceleration Delivering training and inference price-performance November 01, 2024 Feature You can now request Cloud TPUs as queued resources in the Google Cloud Console.
- For more information, see Cloud TPU Multislice overview .
- Dynamo bridge python binding ( #4119 ) Dynamo bridge backend implementation ( #4523 ) Training optimization: make execution async ( #4425 ) Training optimization: reduce graph execution per step ( #4523 ) PyTorch/XLA GSPMD on single host Preserve parameter sharding with sharded data placeholder ( #4721) Transfer shards from server to host ( #4508 ) Store the sharding annotation within XLATensor(# 4390 ) Use d2d replication for more efficient input sharding ( #4336 ) Mesh to support custom device order. ( #4162 ) Introduce virtual SPMD device to avoid unpartitioned data transfer ( #4091 ) Ongoing development Ongoing Dynamic Shape implementation Implement missing XLASymNodeImpl::Sub ( #4551 ) Make empty symint support dynamism. ( #4550 ) Add dynamic shape support to SigmoidBackward ( #4322 ) Add a forward pass NN model with dynamism test ( #4256 ) Ongoing SPMD multi host execution ( #4573 ) Bug fixes & improvements Support int as index type ( #4602 ) Only alias inputs and outputs when force ltc sync == True ( #4575 ) Fix race condition between execution and buffer tear down on GPU when using bfc allocator ( #4542 ) Release the GIL during TransferFromServer ( #4504 ) Fix type annotations in FSDP ( #4371 ) December 19, 2022 Change Cloud TPU now supports TensorFlow patches: 2.8.4 , 2.9.3 , and 2.10.1 .

### Set up a Google Cloud project for TPUs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Create a Cloud TPU service agent: A TPU service agent is a Google-managed service account that lets the Cloud TPU service create and manage resources in your Google Cloud project. gcloud beta services identity create --service tpu.googleapis.com \ --project $PROJECT ID Create a TPU service account: Service accounts provide credentials for your TPU VMs to access other Google Cloud resources.
- Set up a Google Cloud project for TPUs This topic describes how to set up your Google Cloud project to use Cloud TPU VMs: Create a Google Cloud project Configure your Google Cloud project for Cloud TPU Create a Google Cloud project In the Google Cloud console, sign in to your Google Account or sign up for a new account .
- Grant your service account the following roles so your TPU VM can access common Google Cloud services: TPU Admin : This role provides full access to TPU resources Storage Admin : This role provides access to Cloud Storage Logs Writer : This role lets you write logs with the Cloud Logging API Monitoring Metric Writer : This role lets you write metrics to Cloud Monitoring Note: If you don't specify a custom service account, your Cloud TPU uses the default Compute Engine service account .
- Configure the gcloud command to use your project. export PROJECT ID = your-project-id gcloud config set project $PROJECT ID Activate the Cloud TPU API using gcloud or the Google Cloud console: gcloud gcloud services enable tpu.googleapis.com Console In the Google Cloud console, go to the Cloud TPU API page.

### "Class TpuAsyncClient (1.26.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient)
- Source ID: `site-python-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample create node(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) node = tpu v1.Node() node.accelerator type = "accelerator type value" node.tensorflow version = "tensorflow version value" request = tpu v1.CreateNodeRequest( parent="parent value", node=node, ) Make the request operation = client. create node (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.CreateNodeRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample delete node(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) request = tpu v1.DeleteNodeRequest( name="name value", ) Make the request operation = client. delete node (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.DeleteNodeRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample list accelerator types(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) request = tpu v1.ListAcceleratorTypesRequest( parent="parent value", ) Make the request page result = client. list accelerator types (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.ListAcceleratorTypesRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample start node(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) request = tpu v1.StartNodeRequest( ) Make the request operation = client. start node (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.StartNodeRequest , dict]] The request object.

