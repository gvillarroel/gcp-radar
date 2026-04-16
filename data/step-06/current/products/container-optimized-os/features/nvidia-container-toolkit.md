---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.104Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "NVIDIA Container Toolkit"
feature_slug: "nvidia-container-toolkit"
latest_feature_date: "2023-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring"
keywords:
  - "nvidia"
  - "container"
  - "toolkit"
  - "optimized"
  - "os"
  - "includes"
  - "version"
  - "13"
---

# NVIDIA Container Toolkit

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS includes nvidia-container-toolkit version 1.13.5.

## Extended Definition

Container-Optimized OS includes nvidia-container-toolkit version 1.13.5.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring](https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- You may also check all the GPU driver versions supported by the GPU on your Container-Optimized OS VM instance by running the following command: sudo cos-extensions list Identify the required CUDA toolkit version If your applications use CUDA , install NVIDIA's CUDA toolkit in your containers.
- For example, in the supported GPU driver version list for Container-Optimized OS version cos-105-17412-448-12 , the NVIDIA L4 has a Default GPU driver version of 535.183.01 , whereas the NVIDIA P100 has a Default GPU driver version of 470.256.02 .
- Restrictions Container-Optimized OS version restrictions Only Container-Optimized OS LTS release milestone 85 and later support the cos-extensions utility mentioned in the Installing NVIDIA GPU device drivers section.
- Identify GPU driver versions Each version of Container-Optimized OS image has a list of supported NVIDIA GPU driver versions for each GPU type, along with a default driver for each type.

### Versioning scheme \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table provides a summary of Container-Optimized OS releases available on Compute Engine: Active Milestones OS version Image project x86 image family Arm image family Built by End of support Release notes COS 133 DEV cos-cloud cos-dev cos-arm64-dev Google To Be Defined dev COS 129 BETA cos-cloud cos-beta cos-arm64-beta Google To Be Defined milestone 129 COS 125 LTS cos-cloud cos-125-lts cos-arm64-125-lts Google Sept 2027 milestone 125 COS 121 LTS cos-cloud cos-121-lts cos-arm64-121-lts Google March 2027 milestone 121 COS 117 LTS cos-cloud cos-117-lts cos-arm64-117-lts Google Sept 2026 milestone 117 COS 113 LTS cos-cloud cos-113-lts cos-arm64-113-lts Google March 2026 milestone 113 Deprecated Milestones OS version Image project x86 image family Arm image family Built by Deprecation date Release notes COS 109 LTS cos-cloud cos-109-lts cos-arm64-109-lts Google Sept 2025 milestone 109 COS 105 LTS cos-cloud cos-105-lts cos-arm64-105-lts Google March 2025 milestone 105 COS 101 LTS cos-cloud cos-101-lts N/A Google Oct 2024 milestone 101 COS 97 LTS cos-cloud cos-97-lts N/A Google April 2024 milestone 97 COS 93 LTS cos-cloud cos-93-lts N/A Google October 2023 milestone 93 COS 89 LTS cos-cloud cos-89-lts N/A Google March 2023 milestone 89 COS 85 LTS cos-cloud cos-85-lts N/A Google September 2022 milestone 85 COS 81 LTS cos-cloud cos-81-lts N/A Google September 2021 1 milestone 81 COS 77 LTS cos-cloud cos-77-lts N/A Google April 2021 1 milestone 77 COS 73 LTS cos-cloud cos-73-lts N/A Google June 2020 milestone 73 COS 69 LTS cos-cloud cos-69-lts N/A Google December 2019 milestone 69 COS 77 LTS and COS 81 LTS, when bundled with GKE, have slightly longer support durations.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Versioning scheme Stay organized with collections Save and categorize content based on your preferences.
- Choosing the right Container-Optimized OS version On Compute Engine, the image families for Container-Optimized OS can guide you in selecting the correct image for your intended purpose.
- A tiered testing setup like this should help to minimize issues when rolling out newer major versions of Container-Optimized OS images to your production environment.

### "Monitoring system health with Node Problem Detector \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring](https://docs.cloud.google.com/container-optimized-os/docs/how-to/monitoring)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable monitoring when creating an instance: gcloud compute instances create VM NAME \ --image= IMAGE \ --image-project=cos-cloud \ --metadata=google-monitoring-enabled=true Replace the following: VM NAME : name of the new VM IMAGE : a specific version of a public Container-Optimized OS image.
- Enabling health monitoring Note: Google Kubernetes Engine Container-Optimized OS nodes and Google Distributed Cloud cluster nodes from version 1.4.0+ have Node Problem Detector enabled by default.
- Using user-defined guest policies Container-Optimized OS includes OS Config agent , that uses OS system utilities to maintain the state for the VM that is specified in the guest policy.
- Starting with Milestone 77, Container-Optimized OS includes the Node Problem Detector agent.

