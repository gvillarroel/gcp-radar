---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.076Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "GPU Driver Version Selection Control"
feature_slug: "gpu-driver-version-selection-control"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging"
keywords:
  - "gpu"
  - "driver"
  - "version"
  - "selection"
  - "control"
  - "uses"
  - "versions"
  - "proto"
---

# GPU Driver Version Selection Control

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Uses the gpu_driver_versions proto file to control which GPU driver version is installed for each GPU type.

## Extended Definition

Uses the gpu_driver_versions proto file to control which GPU driver version is installed for each GPU type.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)

## Supporting Pages

### "Creating and configuring instances \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/create-configure-instance)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Time synchronization Before milestone 85 , Container-Optimized OS uses systemd 's systemd-timesyncd service to synchronize the local system clock with a remote Network Time Protocol (NTP) server via the SNTP protocol.
- Newer versions of Container-Optimized OS images are now being pushed only to the cos-cloud project; please update your development or production workflow to use the cos images in cos-cloud to get the latest releases.
- Starting from milestone 85, Container-Optimized OS uses chronyd service to synchronize the local system clock with a remote Network Time Protocol (NTP) server via the NTP protocol.
- These images are identical to the previous versions of Container-Optimized OS, which used the name prefix gci and were accessible through the google-containers project.

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- You may also check all the GPU driver versions supported by the GPU on your Container-Optimized OS VM instance by running the following command: sudo cos-extensions list Identify the required CUDA toolkit version If your applications use CUDA , install NVIDIA's CUDA toolkit in your containers.
- Identify GPU driver versions Each version of Container-Optimized OS image has a list of supported NVIDIA GPU driver versions for each GPU type, along with a default driver for each type.
- To check the minimum GPU driver version required for your version of CUDA, see CUDA Toolkit and Compatible Driver Versions .
- Some GPU driver versions won't qualify for Container-Optimized OS, and the qualification timeline is not guaranteed.

### Using Cloud Logging with Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging](https://docs.cloud.google.com/container-optimized-os/docs/how-to/logging)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Arm images of all versions and x86 images for Container-Optimized OS 109 and later, the logging agent is a built-in OS package called fluent-bit .
- The version of the containerized agent being run is defined in the Container-Optimized OS source app-admin/stackdriver directory .
- All versions of Arm-based Container-Optimized OS images ship the fluent-bit logging agent.
- Known Limitations Compatibility with gcplogs driver Starting with milestone 89 , if the logging agent included with Container-Optimized OS is enabled and Docker gcplogs logging driver is enabled for one or more containers, excessive warning logs may be output by the included logging agent.

