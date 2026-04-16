---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:22.600Z"
product_name: "Confidential Space"
product_slug: "confidential-space"
feature_name: "tmpfs mount support"
feature_slug: "tmpfs-mount-support"
latest_feature_date: "2024-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/metadata-variables"
keywords:
  - "tmpfs"
  - "mount"
  - "confidential"
  - "space"
  - "workloads"
  - "mounts"
---

# tmpfs mount support

Product: Confidential Space
Coverage: MEDIUM

## Step 02 Summary

Confidential Space workloads support tmpfs mounts.

## Extended Definition

Confidential Space workloads support tmpfs mounts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/metadata-variables](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/metadata-variables)

## Supporting Pages

### Deploy workloads \_|\_ Confidential Space \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here's an example that creates a Confidential VM, and runs a Docker container called WORKLOAD CONTAINER NAME : CPU-based workloads gcloud compute instances create INSTANCE NAME \ --confidential-compute-type = CONFIDENTIAL COMPUTING TECHNOLOGY \ --machine-type = MACHINE TYPE NAME \ --maintenance-policy = MAINTENANCE POLICY \ --shielded-secure-boot \ --image-project = confidential-space-images \ --image-family = IMAGE FAMILY \ --metadata = "^ ^tee-image-reference=us-docker.pkg.dev/ WORKLOAD AUTHOR PROJECT ID / REPOSITORY NAME / WORKLOAD CONTAINER NAME :latest" \ --service-account = WORKLOAD SERVICE ACCOUNT NAME @ WORKLOAD OPERATOR PROJECT ID .iam.gserviceaccount.com \ --scopes = cloud-platform \ --zone = ZONE NAME \ --project = PROJECT ID Provide the following values: INSTANCE NAME : The name of the new VM instance.
- Example tee-signed-image-repos=us-docker.pkg.dev/projectA/repo/example,us-docker.pkg.dev/projectB/repo/example,us-docker.pkg.dev/projectC/repo/example Scaling For scaling and high availability of production Confidential Space workloads, see Managed Instance Groups .
- Choose one of the following: confidential-space for production workloads confidential-space-debug for debug workloads WORKLOAD AUTHOR PROJECT : The ID of the project that hosts the Artifact Registry repository that the workload container is stored in.
- Choose one of the following: confidential-space-preview-cgpu for production workloads confidential-space-debug-preview-cgpu for debug workloads WORKLOAD AUTHOR PROJECT : The project ID that the workload is being run in.

### "Create and customize workloads \_|\_ Confidential Space \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In-memory scratch mounts Confidential Space supports adding in-memory scratch spaces.
- Home Documentation Security Confidential Space Guides Send feedback Create and customize workloads Stay organized with collections Save and categorize content based on your preferences.
- You can use tee-mount to specify tmpfs mounts in the running container using semicolon-separated configurations.
- Namespaced cgroups The Confidential Space workload runs without a cgroup mount by default.

### "Workload metadata variables \_|\_ Confidential Space \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/metadata-variables](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/metadata-variables)
- Source ID: `site-api-reference-required-1`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A mount definition consists of a comma-separated list of key-value pairs, requiring type , source , and destination . destination must be an absolute path and type / source must be tmpfs .
- Home Documentation Security Confidential Space Reference Send feedback Workload metadata variables Stay organized with collections Save and categorize content based on your preferences.
- Workload operator You can change the Confidential Space workload VM behavior by passing variables into the --metadata option when you create the VM.
- Enumeration Outputs STDOUT and STDERR from the workload container to Cloud Logging or serial console, in the confidential-space-launcher field.

