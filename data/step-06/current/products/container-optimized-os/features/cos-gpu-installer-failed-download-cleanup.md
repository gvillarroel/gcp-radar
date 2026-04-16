---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.086Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "cos-gpu-installer failed download cleanup"
feature_slug: "cos-gpu-installer-failed-download-cleanup"
latest_feature_date: "2024-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems"
keywords:
  - "cos"
  - "gpu"
  - "installer"
  - "failed"
  - "download"
  - "cleanup"
  - "automatically"
  - "removes"
---

# cos-gpu-installer failed download cleanup

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Cos-gpu-installer automatically removes an empty target file when a Google Cloud Storage object download fails.

## Extended Definition

Cos-gpu-installer automatically removes an empty target file when a Google Cloud Storage object download fails.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems](https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- The following flags apply: -no-verify : Downloads and prepares the driver files but skips kernel module loading and installation verification. -target-gpu : Specifies the GPU device to ensure the correct driver is preloaded, preventing compatibility issues when the GPU device is later attached.
- To preload the GPU driver, run the following command: sudo cos-extensions install gpu -- -no-verify -target-gpu= GPU DEVICE This command is supported starting from cos-gpu-installer:v2.3.0 .
- For earlier Container-Optimized OS release milestones, use the cos-gpu-installer open source tool to manually install GPU drivers.
- If you have an established billing account, your project automatically receives GPU quota after you submit the quota request.

### Supported filesystems \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems](https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

### "Configuring and Checking CIS Compliance \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance](https://docs.cloud.google.com/container-optimized-os/docs/how-to/cis-compliance)
- Source ID: `site-docs-reference`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- If any of the CIS Level 1 or Level 2 scans fail, the textproto file will contain the list of all failing checks, such as in the following example: cat /var/lib/google/cis scanner scan result.textproto Output start time: { seconds: 1648241700 nanos: 763152171 } end time: { seconds: 1648241700 nanos: 812992527 } scanner version: "1.1.4.3" benchmark version: "1.0.0" status: { status: SUCCEEDED } non compliant benchmarks: { id: "etc-passwd-permissions" compliance occurrence: { non compliant files: { path: "/etc/passwd" reason: "File permission is 0664, expected the following bits to be set: 0444 and the following bits to be clear: 0133" } } } compliant benchmarks: { id: "etc-passwd-permissions" compliance occurrence: {} } To mitigate the failed checks, use the CIS Benchmark and follow the steps in the Remediation section for the failing check to make the instance compliant.
- In case configuring the instance fails, the cis-level2 service exits with the following error message: Job for cis-level2.service failed because the control process exited with error code.
- The journal logs will mention the recommendations which failed to apply on the instance and resulting into failure of cis-level2 systemd service.
- Accessing the Benchmark The Container-Optimized OS CIS Benchmark is available on the CIS website: Go to the CIS Benchmarks downloads page .

