---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.884Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "osonly24 runtime"
feature_slug: "osonly24-runtime"
latest_feature_date: "2026-02-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "osonly24"
  - "runtime"
  - "run"
  - "supports"
  - "the"
  - "for"
  - "deploying"
  - "binaries"
---

# osonly24 runtime

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports the osonly24 runtime for deploying binaries and OS-only workloads; Cloud Run supports the osonly24 runtime for deploying binaries and OS-only workloads.

## Extended Definition

Cloud Run supports the osonly24 runtime for deploying binaries and OS-only workloads; Cloud Run supports the osonly24 runtime for deploying binaries and OS-only workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- This execution environment provides better performance and the ability to use network file systems. (Available in public preview.) Feature Cloud Run now supports network file systems such as NFS, NDB, 9P, CIFS/Samba, and Ceph , as well as Cloud Filestore and Cloud Storage FUSE . (Available in public preview.) September 28, 2021 Feature Binary Authorization for Cloud Run is now at generally availability (GA).
- November 11, 2025 Feature You can set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (GA) November 06, 2025 Feature Use dual-stack subnets with IPv6 to let your Cloud Run resources send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress, and send external IPv6 traffic to the public internet. (GA) October 31, 2025 Feature Support for Java 25 runtime is in Preview .
- March 16, 2020 Feature Cloud Run (fully managed) now supports deploying container images from Cloud Artifact Registry February 12, 2020 Feature Cloud Run (fully managed) now supports rollbacks, gradual rollouts (blue/green deployments), and other traffic migration manipulations between revisions.
- April 02, 2025 Feature Deploying multiple containers (sidecars) to a Cloud Run job is now generally available. (GA) March 28, 2025 Feature The ability to disable the Invoker IAM check for Cloud Run services is now at general availability (GA).

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.
- One alternative is to execute these binaries as the root user and then use the su command to switch to another user at runtime.
- Cloud Run specifically supports the Linux x86 64 ABI format.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.
- One alternative is to execute these binaries as the root user and then use the su command to switch to another user at runtime.
- Cloud Run specifically supports the Linux x86 64 ABI format.

