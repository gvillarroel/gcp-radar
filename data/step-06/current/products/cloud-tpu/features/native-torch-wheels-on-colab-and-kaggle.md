---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:47.696Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Native torch wheels on Colab and Kaggle"
feature_slug: "native-torch-wheels-on-colab-and-kaggle"
latest_feature_date: "2020-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/tutorials"
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
  - "https://docs.cloud.google.com/tpu/docs/colabs"
  - "https://docs.cloud.google.com/tpu/docs/supported-tpu-versions"
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
Coverage: MEDIUM

## Step 02 Summary

PyTorch/XLA 1.6 supports native torch wheels on Colab and Kaggle without requiring the env-setup.py script.

## Extended Definition

PyTorch/XLA 1.6 supports native torch wheels on Colab and Kaggle without requiring the env-setup.py script.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/tutorials](https://docs.cloud.google.com/tpu/docs/tutorials)
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [https://docs.cloud.google.com/tpu/docs/colabs](https://docs.cloud.google.com/tpu/docs/colabs)
- [https://docs.cloud.google.com/tpu/docs/supported-tpu-versions](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)

## Supporting Pages

### Training Resnet50 on Cloud TPU with PyTorch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/tutorials](https://docs.cloud.google.com/tpu/docs/tutorials)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connect to your TPU VM using SSH: gcloud compute tpus tpu-vm ssh your-tpu-name --zone = us-central1-a Install PyTorch/XLA on your TPU VM: ( vm ) $ pip install torch torch xla [ tpu ] torchvision -f https://storage.googleapis.com/libtpu-releases/index.html -f https://storage.googleapis.com/libtpu-wheels/index.html Clone the PyTorch/XLA GitHub repo ( vm ) $ git clone --depth = 1 https://github.com/pytorch/xla.git Run the training script with fake data ( vm ) $ PJRT DEVICE = TPU python3 xla/test/test train mp imagenet.py --fake data --batch size = 256 --num epochs = 1 Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Delete your TPU VM. $ gcloud compute tpus tpu-vm delete your-tpu-name \ --zone = us-central1-a What's next Training diffusion models with Pytorch Troubleshooting Pytorch on TPUs Pytorch/XLA documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Cloud TPU Guides Send feedback Training Resnet50 on Cloud TPU with PyTorch Stay organized with collections Save and categorize content based on your preferences.
- You can apply the same pattern to other TPU-optimised image classification models that use PyTorch and the ImageNet dataset.

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Other: No known limitations Cloud Build GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud CDN GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Code Unsupported Alternatives: No alternatives available Cloud Composer GA Console (federated): No known limitations Google Cloud API: No known limitations Other: Cloud Composer supports Workforce Identity Federation only for environments created in Composer version 2.1.11 or later and Airflow version 2.4.3 or later.
- Google Kubernetes Engine GA Console (federated): No known limitations Google Cloud API: If you use Workload Identity Federation for GKE to programmatically run kubectl commands against a different GKE cluster from a Pod, you must use service account impersonation, as described in Alternative: link Kubernetes ServiceAccounts to IAM .
- Columns that describe unsupported products: Alternatives: For products that don't support identity federation, this column describes alternative products that support identity federation and provide similar features.
- Other: No known limitations Cloud Domains GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Endpoints Unsupported Alternatives: No alternatives available Cloud Fleet Routing GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Healthcare API GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud HSM GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Intrusion Detection System GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Key Management Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Load Balancing GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Logging GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Mobile App Unsupported Alternatives: No alternatives available Cloud Monitoring GA Console (federated): No known limitations Google Cloud API: No known limitations Other: The legacy Cloud Monitoring agent doesn't support sending metrics with identity federation.

### All interactive notebooks \_|\_ Cloud TPU \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/colabs](https://docs.cloud.google.com/tpu/docs/colabs)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PyTorch Kaggle notebooks PyTorch/XLA 2.0 on Kaggle Use PyTorch/XLA 2.0 on the Kaggle TPU VM accelerator to run a Stable Diffusion image example.
- Distributed PyTorch/XLA Basics Perform distributed operations on a TPU VM using PyTorch/XLA with the PJRT runtime.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### TPU software versions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/supported-tpu-versions](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TPU version TPU software version Trillium (v6e) v2-alpha-tpuv6e v5p v2-alpha-tpuv5 v5e v2-alpha-tpuv5-lite v4 and older tpu-ubuntu2204-base For more information about installation and getting started with PyTorch or JAX, see Run a calculation on a Cloud TPU VM using PyTorch and Run a calculation on a Cloud TPU VM using JAX .
- PyTorch and JAX Use the following common TPU software versions for PyTorch and JAX, then install the framework you want to use.
- The following table shows the supported TensorFlow versions and associated libtpu versions: TensorFlow version libtpu.so version 2.18.0 1.12.0 2.17.1 1.11.1 2.17.0 1.11.0 2.16.2 1.10.1 2.16.1 1.10.1 2.15.1 1.9.0 2.15.0 1.9.0 2.14.1 1.8.1 2.14.0 1.8.0 2.13.1 1.7.1 2.13.0 1.7.0 2.12.1 1.6.1 2.12.0 1.6.0 2.11.1 1.5.1 2.11.0 1.5.0 2.10.1 1.4.1 2.10.0 1.4.0 2.9.3 1.3.2 2.9.1 1.3.0 2.8.3 1.2.3 2.8.0 1.2.0 2.7.3 1.1.2 For more information about TensorFlow patch versions, see Supported TensorFlow patch versions .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

