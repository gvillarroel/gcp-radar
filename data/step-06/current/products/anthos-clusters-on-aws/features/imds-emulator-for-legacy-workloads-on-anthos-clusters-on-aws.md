---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.376Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "IMDS emulator for legacy workloads on Anthos clusters on AWS"
feature_slug: "imds-emulator-for-legacy-workloads-on-anthos-clusters-on-aws"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes"
keywords:
  - "legacy workload metadata access"
  - "Workload Identity exclusion"
  - "metadata endpoint emulator"
  - "instance metadata service emulator"
  - "IMDS emulation"
  - "IMDS fallback"
  - "IMDS emulator"
---

# IMDS emulator for legacy workloads on Anthos clusters on AWS

Product: Anthos clusters on AWS
Coverage: HIGH

## Step 02 Summary

Legacy workloads that do not support Workload Identity can now access IMDS data using the IMDS emulator.

## Extended Definition

The IMDS emulator feature on Anthos clusters on AWS provides an instance metadata service (IMDS) emulator for workloads that cannot use Workload Identity directly, allowing those legacy workloads to access IMDS data. The official release notes indicate this capability was added and also document a startup-failure issue that was present (and fixed) on clusters at version 1.24.3-gke.2200. If support for Workload Identity is unavailable, this feature serves as a compatibility path via IMDS emulation.

## Evidence Summary

The release notes explicitly state the IMDS emulator is for legacy workloads lacking Workload Identity support and mention a version-specific startup failure fix for the emulator.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)

## Supporting Pages

### GKE on AWS release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Feature If you have legacy workloads that don't support Workload Identity directly, you can now use the IMDS emulator to access IMDS data.
- Fixed On clusters at version 1.24.3-gke.2200, the IMDS emulator fails to start.
- Add an instance metadata server (IMDS) emulator.
- To learn more, see Enable the IMDS emulator .

