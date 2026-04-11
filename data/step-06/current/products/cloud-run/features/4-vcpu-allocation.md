---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.926Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "4 vCPU allocation"
feature_slug: "4-vcpu-allocation"
latest_feature_date: "2020-10-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/release-notes"
keywords:
  - "vcpu"
  - "allocation"
  - "run"
  - "instances"
  - "can"
  - "allocate"
  - "up"
  - "to"
---

# 4 vCPU allocation

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run service instances can allocate up to 4 vCPUs.

## Extended Definition

Cloud Run service instances can allocate up to 4 vCPUs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- You cannot specify a size limit for this files system, so you can potentially use up all the memory allocated to your instance by writing to the in-memory file system, which will crash the instance.
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.
- For a Cloud Run service consisting of multi-container instances, you can specify the sequence in which the containers are started within the instance by configuring the container startup order .
- Instance metadata server Cloud Run instances expose a metadata server that you can use to retrieve details about your containers, such as the project ID, region, instance ID or service accounts.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- You cannot specify a size limit for this files system, so you can potentially use up all the memory allocated to your instance by writing to the in-memory file system, which will crash the instance.
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.
- For a Cloud Run service consisting of multi-container instances, you can specify the sequence in which the containers are started within the instance by configuring the container startup order .
- Instance metadata server Cloud Run instances expose a metadata server that you can use to retrieve details about your containers, such as the project ID, region, instance ID or service accounts.

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- October 12, 2020 Feature You can now allocate 4 vCPUs to container instances of Cloud Run services.
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.
- March 05, 2021 Feature You can now use VPC Service Controls with Cloud Run to set up a secure perimeter to guard against data exfiltration. (Available in public preview.) March 03, 2021 Feature Cloud Run reports a new Cloud Monitoring metric: Instance count , which counts the number of container instances that exist, broken down by state (active or idle).
- See Cloud Code for VS Code and Cloud Code for IntelliJ August 18, 2020 Feature You can now allocate up to 4GiB of memory to your Cloud Run (fully managed) services.

