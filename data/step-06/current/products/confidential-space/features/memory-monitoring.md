---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:22.603Z"
product_name: "Confidential Space"
product_slug: "confidential-space"
feature_name: "Memory monitoring"
feature_slug: "memory-monitoring"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/metadata-variables"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads"
keywords:
  - "memory"
  - "monitoring"
  - "workload"
  - "operator"
  - "can"
  - "enable"
  - "confidential"
  - "vm"
---

# Memory monitoring

Product: Confidential Space
Coverage: MEDIUM

## Step 02 Summary

A workload operator can enable memory monitoring on the Confidential VM running the workload.

## Extended Definition

A workload operator can enable memory monitoring on the Confidential VM running the workload.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/metadata-variables](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/metadata-variables)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)

## Supporting Pages

### Deploy workloads \_|\_ Confidential Space \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example tee-monitoring-memory-enable=true tee-mount Interacts with: Workload author : The allow mount destinations launch policy.
- Create an instance template: gcloud beta compute instance-templates create INSTANCE TEMPLATE NAME \ --provisioning-model = FLEX START \ --confidential-compute-type = TDX \ --machine-type = a3-highgpu-1g \ --maintenance-policy = TERMINATE \ --shielded-secure-boot \ --image-project = confidential-space-images \ --image-family = IMAGE FAMILY NAME \ --metadata = "^ ^tee-image-reference=us-docker.pkg.dev/ WORKLOAD AUTHOR PROJECT ID / REPOSITORY NAME / WORKLOAD CONTAINER NAME :latest tee-install-gpu-driver=true" \ --service-account = WORKLOAD SERVICE ACCOUNT NAME @ WORKLOAD OPERATOR PROJECT ID .iam.gserviceaccount.com \ --scopes = cloud-platform \ --boot-disk-size = 30G \ --reservation-affinity = none \ --max-run-duration = RUN DURATION \ --instance-termination-action = DELETE \ --project = PROJECT ID Provide the following values: INSTANCE TEMPLATE NAME : The name of the new VM instance template.
- Here's an example that creates a Confidential VM, and runs a Docker container called WORKLOAD CONTAINER NAME : CPU-based workloads gcloud compute instances create INSTANCE NAME \ --confidential-compute-type = CONFIDENTIAL COMPUTING TECHNOLOGY \ --machine-type = MACHINE TYPE NAME \ --maintenance-policy = MAINTENANCE POLICY \ --shielded-secure-boot \ --image-project = confidential-space-images \ --image-family = IMAGE FAMILY \ --metadata = "^ ^tee-image-reference=us-docker.pkg.dev/ WORKLOAD AUTHOR PROJECT ID / REPOSITORY NAME / WORKLOAD CONTAINER NAME :latest" \ --service-account = WORKLOAD SERVICE ACCOUNT NAME @ WORKLOAD OPERATOR PROJECT ID .iam.gserviceaccount.com \ --scopes = cloud-platform \ --zone = ZONE NAME \ --project = PROJECT ID Provide the following values: INSTANCE NAME : The name of the new VM instance.
- Spot To use the spot provisioning model, create an accelerator-optimized VM instance. gcloud compute instances create INSTANCE NAME \ --provisioning-model = SPOT \ --confidential-compute-type = TDX \ --machine-type = a3-highgpu-1g \ --maintenance-policy = TERMINATE \ --shielded-secure-boot \ --image-project = confidential-space-images \ --image-family = IMAGE FAMILY NAME \ --metadata = "^ ^tee-image-reference=us-docker.pkg.dev/ WORKLOAD AUTHOR PROJECT ID / REPOSITORY NAME / WORKLOAD CONTAINER NAME :latest tee-install-gpu-driver=true" \ --service-account = WORKLOAD SERVICE ACCOUNT NAME @ WORKLOAD OPERATOR PROJECT ID .iam.gserviceaccount.com \ --scopes = cloud-platform \ --boot-disk-size = 30G \ --zone = ZONE NAME \ --project = PROJECT ID Provide the following values: INSTANCE NAME : The name of the new VM instance.

### "Workload metadata variables \_|\_ Confidential Space \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/metadata-variables](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/metadata-variables)
- Source ID: `site-api-reference-required-1`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example tee-monitoring-memory-enable=true tee-mount Interacts with: Workload author : The allow mount destinations launch policy.
- Example tee-install-gpu-driver=true tee-monitoring-memory-enable Interacts with: Data collaborators : The instance memory monitoring enabled assertion.
- Workload operator You can change the Confidential Space workload VM behavior by passing variables into the --metadata option when you create the VM.
- Workload author : The monitoring memory allow launch policy.

### "Create and customize workloads \_|\_ Confidential Space \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Defined string Determines how workload memory usage monitoring works if tee-monitoring-memory-enable is set to true by a workload operator.
- Workload operator : The tee-monitoring-memory-enable metadata variable.
- Caution : If you allow memory usage monitoring, the workload operator can see workload memory usage metrics in Cloud Logging and Metrics Explorer .
- When building your Docker image, take the following things into account: Additional Linux capabilities Disk and memory limits Expired OIDC tokens Resources not managed by Google Cloud IAM Inbound ports Launch policies Multiple workload runs Namespaced cgroups Reproducible container images Signed container images Additional Linux capabilities The Confidential Space workload runs in a Linux container using containerd.

