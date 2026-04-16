---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:22.605Z"
product_name: "Confidential Space"
product_slug: "confidential-space"
feature_name: "VPC Service Controls support"
feature_slug: "vpc-service-controls-support"
latest_feature_date: "2023-11-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/vpc-service-controls"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs"
  - "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview"
keywords:
  - "vpc"
  - "controls"
  - "confidential"
  - "space"
  - "can"
  - "protected"
  - "perimeters"
---

# VPC Service Controls support

Product: Confidential Space
Coverage: MEDIUM

## Step 02 Summary

Confidential Space can be protected with VPC Service Controls perimeters.

## Extended Definition

Confidential Space can be protected with VPC Service Controls perimeters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/vpc-service-controls](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/vpc-service-controls)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs](https://docs.cloud.google.com/confidential-computing/confidential-space/docs)
- [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview)

## Supporting Pages

### VPC Service Controls \_|\_ Confidential Space \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/vpc-service-controls](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/vpc-service-controls)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Confidential Space Guides Send feedback VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- If these buckets reside outside your perimeter, you must configure the following egress rule: - egressTo : operations : - serviceName : storage.googleapis.com methodSelectors : - method : google.storage.objects.get resources : - projects/870449385679 - projects/180376494128 egressFrom : identityType : ANY IDENTITY The following table lists the projects containing the necessary certificates: Project ID Project number Description cloud-shielded-ca-prod 870449385679 Project containing attestation certificates cloud-shielded-ca-prod-root 180376494128 Project containing root certificates If the Compute Engine API is restricted by your service perimeter, you must create the following egress rule: - egressTo : operations : - serviceName : compute.googleapis.com methodSelectors : - method : InstancesService.Insert resources : - projects/30229352718 egressFrom : identityType : ANY IDENTITY The following table lists the project necessary to fetch Confidential Space VM images: Project ID Project number Description confidential-space-images 30229352718 Project containing Confidential Space VM images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To validate its attestation token, Confidential Space needs to download certificates from Cloud Storage buckets.

### Confidential Space overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview](https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Confidential Space roles The components in a Confidential Space system are managed by people with three distinct roles: Data collaborators : The people or organizations who own the protected resources being operated on by the workload.
- Confidential Space components A Confidential Space system has three core components: A workload : A containerized image containing code that processes the protected resources.
- In general, setting up a Confidential Space might look similar to the following process: Multiple data collaborators store encrypted confidential data in their own isolated Google Cloud projects, often in different organizations.
- Alternatively, you could use it to offer end customers stronger data privacy, as the operator or owner of a Confidential Space environment can't access the data that is being processed.

### Confidential Space overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-space/docs](https://docs.cloud.google.com/confidential-computing/confidential-space/docs)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Confidential Space roles The components in a Confidential Space system are managed by people with three distinct roles: Data collaborators : The people or organizations who own the protected resources being operated on by the workload.
- Confidential Space components A Confidential Space system has three core components: A workload : A containerized image containing code that processes the protected resources.
- In general, setting up a Confidential Space might look similar to the following process: Multiple data collaborators store encrypted confidential data in their own isolated Google Cloud projects, often in different organizations.
- Alternatively, you could use it to offer end customers stronger data privacy, as the operator or owner of a Confidential Space environment can't access the data that is being processed.

