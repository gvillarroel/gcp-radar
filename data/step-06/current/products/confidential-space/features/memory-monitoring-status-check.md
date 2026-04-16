---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:22.602Z"
product_name: "Confidential Space"
product_slug: "confidential-space"
feature_name: "Memory monitoring status check"
feature_slug: "memory-monitoring-status-check"
latest_feature_date: "2024-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/attestation-assertions"
keywords:
  - "memory"
  - "monitoring"
  - "status"
  - "check"
  - "collaborators"
  - "can"
  - "whether"
  - "enabled"
---

# Memory monitoring status check

Product: Confidential Space
Coverage: MEDIUM

## Step 02 Summary

Data collaborators can check whether memory monitoring is enabled on a Confidential VM running a Confidential Space workload.

## Extended Definition

Data collaborators can check whether memory monitoring is enabled on a Confidential VM running a Confidential Space workload.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/attestation-assertions](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/attestation-assertions)

## Supporting Pages

### "Create and grant access to confidential resources \_|\_ Confidential Space\

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The supported platforms are as follows: GCP AMD SEV INTEL TDX Example assertion.hwmodel == "GCP AMD SEV" assertion.submods.confidential space.monitoring enabled Interacts with: Workload author : The monitoring memory allow launch policy.
- Example assertion.submods.confidential space.monitoring enabled.memory == true assertion.submods.gce.instance id String Verifies the VM instance ID.
- Additionally, data collaborators need to choose where the results of the Confidential Space workload are stored, and whether those results are unique to each collaborator, or shared.
- Workload operator : The tee-monitoring-memory-enable metadata variable.

### Deploy workloads \_|\_ Confidential Space \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/deploy-workloads)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example tee-install-gpu-driver=true tee-monitoring-memory-enable Interacts with: Data collaborators : The instance memory monitoring enabled assertion.
- Example tee-monitoring-memory-enable=true tee-mount Interacts with: Workload author : The allow mount destinations launch policy.
- Workload author : The monitoring memory allow launch policy.
- When set to true , enables memory usage monitoring.

### Attestation assertions \_|\_ Confidential Space \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/attestation-assertions](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/attestation-assertions)
- Source ID: `site-api-reference-required-1`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The supported platforms are as follows: GCP AMD SEV INTEL TDX Example assertion.hwmodel == "GCP AMD SEV" assertion.submods.confidential space.monitoring enabled Interacts with: Workload author : The monitoring memory allow launch policy.
- Example assertion.submods.confidential space.monitoring enabled.memory == true assertion.submods.gce.instance id String Verifies the VM instance ID.
- Workload operator : The tee-monitoring-memory-enable metadata variable.
- The valid values are the following: enable : Check that the debug image is being used. disabled-since-boot : Check that the production image is being used.

