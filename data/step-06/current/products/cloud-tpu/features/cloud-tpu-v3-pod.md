---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:07:58.654Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Cloud TPU v3 Pod"
feature_slug: "cloud-tpu-v3-pod"
latest_feature_date: "2019-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/release-notes"
  - "https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm"
  - "https://docs.cloud.google.com/tpu/docs/supported-tpu-versions"
keywords:
  - "tpu"
  - "v3"
  - "pod"
  - "provides"
  - "larger"
  - "and"
  - "faster"
  - "scalable"
---

# Cloud TPU v3 Pod

Product: Cloud TPU
Coverage: LOW

## Step 02 Summary

Cloud TPU v3 Pod provides larger and faster scalable TPU pod slices for large distributed TensorFlow 1.x training workloads; Cloud TPU v3 Pod provides larger and faster scalable TPU pod slices for large distributed training workloads.

## Extended Definition

Cloud TPU v3 Pod provides larger and faster scalable TPU pod slices for large distributed TensorFlow 1.x training workloads; Cloud TPU v3 Pod provides larger and faster scalable TPU pod slices for large distributed training workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- [https://docs.cloud.google.com/tpu/docs/supported-tpu-versions](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)

## Supporting Pages

### Cloud TPU release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud TPU v2 and v3 Pod advantages over a single v2 or v3 Cloud TPU device: Increased training speeds for fast iteration in R&D Increased human productivity by providing automatically scalable machine learning (ML) compute Ability to train much larger models Cloud TPU v3 Pod advantages over Cloud TPU v2 Pod: Faster processing and larger memory: v2 Pod: 11.5 petaflops and 4 TB on-chip memory (HBM) v3 Pod: 100 petaflops and 32 TB HBM, with liquid cooling Can train even larger models October 22, 2019 Change Cloud TPU now supports TensorFlow version 1.15 ( Release Notes , API Documentation ).
- Cloud TPU Pod (beta) advantages over a single v3 Cloud TPU device: Increased training speeds for fast iteration in R&D Increased human productivity by providing automatically scalable machine learning (ML) compute Ability to train much larger models Cloud TPU v3 Pod (beta) advantages over Cloud TPU v2 Pod (beta) : Faster processing and larger memory: v2 Pod: 11.5 petaflops and 4 TB on-chip memory (HBM) v3 Pod: 100 petaflops and 32 TB HBM, with liquid cooling Can train even larger models Feature Cloud TPU v2 Pod is available in Beta release.
- Cloud TPU Pod (alpha) advantages: Increased training speeds for fast iteration in R&D Increased human productivity by providing automatically scalable machine learning (ML) compute Ability to train much larger models than on a single ML accelerator October 10, 2018 Feature Cloud TPU v3 is available in Beta release.
- Cloud TPU Pod (beta) advantages over a single Cloud TPU v2 device: Increased training speeds for fast iteration in R&D Increased human productivity by providing automatically scalable machine learning (ML) compute Ability to train much larger models March 11, 2019 Change Cloud TPU now supports TensorFlow version 1.13 .

### TPU architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about the system architecture and supported configurations, see the following pages: TPU7x (Ironwood) TPU v6e TPU v5p TPU v5e TPU v4 TPU v3 TPU v2 Note: You can run the same code on different versions of TPUs as long as the TPUs have the same number of TensorCores or chips (for example, v3-128 and v4-128 ).
- For Cloud TPU v4, v5p, and TPU7x, ICI resiliency is enabled by default for slices that are one cube or larger, for example: v5p-128 when specifying accelerator type 4x4x4 when specifying accelerator config TPU versions The exact architecture of a TPU chip depends on the TPU version that you use.
- However, if you change to a TPU type with a larger or smaller number of TensorCores or chips, you will need to perform significant tuning and optimization.
- Cloud TPU ICI resiliency ICI resiliency helps improve fault tolerance of optical links and optical circuit switches (OCS) that connect TPUs between cubes . (ICI connections within a cube use copper links that are not impacted).

### TPU software versions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/supported-tpu-versions](https://docs.cloud.google.com/tpu/docs/supported-tpu-versions)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you're using TensorFlow 2.10.0 or earlier, use a v4-specific TPU software version: TensorFlow version TPU software version 2.10.0 tpu-vm-tf-2.10.0-v4 tpu-vm-tf-2.10.0-pod-v4 2.9.3 tpu-vm-tf-2.9.3-v4 tpu-vm-tf-2.9.3-pod-v4 2.9.2 tpu-vm-tf-2.9.2-v4 tpu-vm-tf-2.9.2-pod-v4 2.9.1 tpu-vm-tf-2.9.1-v4 tpu-vm-tf-2.9.1-pod-v4 TPU v2 and v3 If you are using TPU v2 or v3, use the TPU software version that matches the version of TensorFlow you are using.
- TPU software versions for TensorFlow follow a specific naming convention: tpu-vm-tf-x.y.z[-{pod}][-{device api}] x.y.z : Represents the major, minor, and patch versions of TensorFlow. -pod (optional): Indicates that you're using a multi-host TPU slice. -{device api} (optional): Specifies the device API, for example, -pjrt (if you're using the PJRT API ).
- You specify the TPU software version using the form: tpu-vm-tf-x.y.z-{pod}-pjrt where x is the major TensorFlow version, y is the minor version, and z is the TensorFlow patch version.
- TPU v4 If you're using TPU v4 and TensorFlow 2.10.1 or newer, follow the instructions for TPU v2 and v3 .

