---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:07:58.632Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Native torch wheels on Colab and Kaggle"
feature_slug: "native-torch-wheels-on-colab-and-kaggle"
latest_feature_date: "2020-08-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/tutorials"
  - "https://docs.cloud.google.com/tpu/docs/release-notes"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
keywords:
  - "native"
  - "torch"
  - "wheels"
  - "on"
  - "colab"
  - "and"
  - "kaggle"
  - "pytorch"
---

# Native torch wheels on Colab and Kaggle

Product: Cloud TPU
Coverage: LOW

## Step 02 Summary

PyTorch/XLA 1.6 supports native torch wheels on Colab and Kaggle without requiring the env-setup.py script.

## Extended Definition

PyTorch/XLA 1.6 supports native torch wheels on Colab and Kaggle without requiring the env-setup.py script.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/tutorials](https://docs.cloud.google.com/tpu/docs/tutorials)
- [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)

## Supporting Pages

### Training Resnet50 on Cloud TPU with PyTorch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/tutorials](https://docs.cloud.google.com/tpu/docs/tutorials)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Connect to your TPU VM using SSH: gcloud compute tpus tpu-vm ssh your-tpu-name --zone = us-central1-a Install PyTorch/XLA on your TPU VM: ( vm ) $ pip install torch torch xla [ tpu ] torchvision -f https://storage.googleapis.com/libtpu-releases/index.html -f https://storage.googleapis.com/libtpu-wheels/index.html Clone the PyTorch/XLA GitHub repo ( vm ) $ git clone --depth = 1 https://github.com/pytorch/xla.git Run the training script with fake data ( vm ) $ PJRT DEVICE = TPU python3 xla/test/test train mp imagenet.py --fake data --batch size = 256 --num epochs = 1 Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Delete your TPU VM. $ gcloud compute tpus tpu-vm delete your-tpu-name \ --zone = us-central1-a What's next Training diffusion models with Pytorch Troubleshooting Pytorch on TPUs Pytorch/XLA documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Cloud TPU Guides Send feedback Training Resnet50 on Cloud TPU with PyTorch Stay organized with collections Save and categorize content based on your preferences.
- You can apply the same pattern to other TPU-optimised image classification models that use PyTorch and the ImageNet dataset.

### Cloud TPU release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- In addition, with our PyTorch/XLA 1.6 release, you no longer need to run the env-setup.py script on Colab/Kaggle as those are now compatible with native torch wheels.
- New Features XLA RNG state checkpointing/loading (https://github.com/pytorch/xla/pull/2096) Device Memory XRT API (https://github.com/pytorch/xla/pull/2295) [Kaggle/Colab] Small host VM memory environment utility (https://github.com/pytorch/xla/pull/2025) [Advanced User] XLA Builder Support (https://github.com/pytorch/xla/pull/2125) New op supported on PyTorch/XLA Hardsigmoid (https://github.com/pytorch/xla/pull/1940) true divide (https://github.com/pytorch/xla/pull/1782) max unpool2d (https://github.com/pytorch/xla/pull/2188) max unpool3d (https://github.com/pytorch/xla/pull/2188) Replication pad1d (https://github.com/pytorch/xla/pull/2188) Replication pad2d (https://github.com/pytorch/xla/pull/2188) Dynamic shape support on XLA:CPU and XLA:GPU (experimental) Bug Fixes RNG Fix (proper dropout) Manual all-reduce in backward pass (https://github.com/pytorch/xla/pull/2325) August 19, 2020 Feature Cloud TPU now supports Shared VPC in Beta.
- You can try out PyTorch on an 8-core Cloud TPU device for free via Google Colab, and you can use PyTorch on Cloud TPUs at a much larger scale on Google Cloud (all the way up to full Cloud TPU Pods).
- Dynamo bridge python binding ( #4119 ) Dynamo bridge backend implementation ( #4523 ) Training optimization: make execution async ( #4425 ) Training optimization: reduce graph execution per step ( #4523 ) PyTorch/XLA GSPMD on single host Preserve parameter sharding with sharded data placeholder ( #4721) Transfer shards from server to host ( #4508 ) Store the sharding annotation within XLATensor(# 4390 ) Use d2d replication for more efficient input sharding ( #4336 ) Mesh to support custom device order. ( #4162 ) Introduce virtual SPMD device to avoid unpartitioned data transfer ( #4091 ) Ongoing development Ongoing Dynamic Shape implementation Implement missing XLASymNodeImpl::Sub ( #4551 ) Make empty symint support dynamism. ( #4550 ) Add dynamic shape support to SigmoidBackward ( #4322 ) Add a forward pass NN model with dynamism test ( #4256 ) Ongoing SPMD multi host execution ( #4573 ) Bug fixes & improvements Support int as index type ( #4602 ) Only alias inputs and outputs when force ltc sync == True ( #4575 ) Fix race condition between execution and buffer tear down on GPU when using bfc allocator ( #4542 ) Release the GIL during TransferFromServer ( #4504 ) Fix type annotations in FSDP ( #4371 ) December 19, 2022 Change Cloud TPU now supports TensorFlow patches: 2.8.4 , 2.9.3 , and 2.10.1 .

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Other: No known limitations Cloud Build GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud CDN GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Code Unsupported Alternatives: No alternatives available Cloud Composer GA Console (federated): No known limitations Google Cloud API: No known limitations Other: Cloud Composer supports Workforce Identity Federation only for environments created in Composer version 2.1.11 or later and Airflow version 2.4.3 or later.
- Google Kubernetes Engine GA Console (federated): No known limitations Google Cloud API: If you use Workload Identity Federation for GKE to programmatically run kubectl commands against a different GKE cluster from a Pod, you must use service account impersonation, as described in Alternative: link Kubernetes ServiceAccounts to IAM .
- Columns that describe unsupported products: Alternatives: For products that don't support identity federation, this column describes alternative products that support identity federation and provide similar features.
- Other: No known limitations Cloud Domains GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Endpoints Unsupported Alternatives: No alternatives available Cloud Fleet Routing GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Healthcare API GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud HSM GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Intrusion Detection System GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Key Management Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Load Balancing GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Logging GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Mobile App Unsupported Alternatives: No alternatives available Cloud Monitoring GA Console (federated): No known limitations Google Cloud API: No known limitations Other: The legacy Cloud Monitoring agent doesn't support sending metrics with identity federation.

