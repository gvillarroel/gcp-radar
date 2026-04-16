---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:22.597Z"
product_name: "Confidential Space"
product_slug: "confidential-space"
feature_name: "Intel TDX support on C3 machines"
feature_slug: "intel-tdx-support-on-c3-machines"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview"
keywords:
  - "intel"
  - "tdx"
  - "c3"
  - "machines"
  - "confidential"
  - "space"
  - "supports"
  - "cpus"
---

# Intel TDX support on C3 machines

Product: Confidential Space
Coverage: LOW

## Step 02 Summary

Confidential Space supports Intel CPUs in the C3 machine family with Intel TDX.

## Extended Definition

Confidential Space supports Intel CPUs in the C3 machine family with Intel TDX.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs](https://docs.cloud.google.com/confidential-computing/confidential-space/docs)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview)

## Supporting Pages

### Confidential Space overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For the highest security, Confidential Space supports a trust model where data collaborators, workload authors, and workload operators are separate, mutually distrusting parties.
- Confidential Space roles The components in a Confidential Space system are managed by people with three distinct roles: Data collaborators : The people or organizations who own the protected resources being operated on by the workload.
- In general, setting up a Confidential Space might look similar to the following process: Multiple data collaborators store encrypted confidential data in their own isolated Google Cloud projects, often in different organizations.
- Alternatively, you could use it to offer end customers stronger data privacy, as the operator or owner of a Confidential Space environment can't access the data that is being processed.

### Confidential Space overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs](https://docs.cloud.google.com/confidential-computing/confidential-space/docs)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For the highest security, Confidential Space supports a trust model where data collaborators, workload authors, and workload operators are separate, mutually distrusting parties.
- Confidential Space roles The components in a Confidential Space system are managed by people with three distinct roles: Data collaborators : The people or organizations who own the protected resources being operated on by the workload.
- In general, setting up a Confidential Space might look similar to the following process: Multiple data collaborators store encrypted confidential data in their own isolated Google Cloud projects, often in different organizations.
- Alternatively, you could use it to offer end customers stronger data privacy, as the operator or owner of a Confidential Space environment can't access the data that is being processed.

### Attestation token claims \_|\_ Confidential Space \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/reference/token-claims)
- Source ID: `site-api-reference-required-1`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For the hwmodel claim "GCP INTEL TDX" on Confidential Space, the value is set to ["INTEL"] , indicating that the attestation root of trust originates from Intel-specific hardware technology. aud String The audience.
- This claim includes the container's entrypoint path and any additional command-line arguments. cmd override String array The CMD commands and parameters used in the workload image. env Object The environment variables and their values that have been explicitly passed to the container. env override Object The overwritten environment variables in the container. image digest String The image digest of the workload container. image id String The image ID of the workload container. image reference String The location of the workload container running in Confidential Space. image signatures Object array See Container image signature claims . restart policy String The restart policy of the container launcher when the workload stops.
- The value is a JSON number that represents the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the expiry time. google service accounts String array The validated service accounts that are running the Confidential Space workload. hwmodel String The unique identifier for the hardware token.
- Home Documentation Security Confidential Space Reference Send feedback Attestation token claims Stay organized with collections Save and categorize content based on your preferences.

