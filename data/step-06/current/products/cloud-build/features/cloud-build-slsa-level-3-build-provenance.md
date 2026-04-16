---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.837Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build SLSA Level 3 build provenance"
feature_slug: "cloud-build-slsa-level-3-build-provenance"
latest_feature_date: "2023-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/overview"
  - "https://docs.cloud.google.com/build/docs/building/build-go"
  - "https://docs.cloud.google.com/build/docs/building/build-java"
keywords:
  - "provenance"
  - "generate"
  - "level"
  - "slsa"
---

# Cloud Build SLSA Level 3 build provenance

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build can generate build provenance at SLSA Level 3.

## Extended Definition

Cloud Build can generate build provenance at SLSA Level 3.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- [https://docs.cloud.google.com/build/docs/building/build-go](https://docs.cloud.google.com/build/docs/building/build-go)
- [https://docs.cloud.google.com/build/docs/building/build-java](https://docs.cloud.google.com/build/docs/building/build-java)

## Supporting Pages

### Overview of Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Build can generate build provenance for container images that provide SLSA level 3 assurance.
- This panel displays the following information: Supply-chain Levels for Software Artifacts (SLSA) Level : Identifies the maturity level of your software build process in accordance with the SLSA specification .
- In the requirements for the SLSA framework, automated builds are a requirement for SLSA level 1, and using a build service instead of developer environments for builds is a requirement for SLSA level 2.
- Cloud Build features meet the requirements of Supply chain Levels for Software Artifacts (SLSA) level 3.

### Build and test Go applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-go](https://docs.cloud.google.com/build/docs/building/build-go)
- Source ID: `site-docs-root-2`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Enable provenance generation Cloud Build can generate verifiable Supply chain Levels for Software Artifacts (SLSA) build provenance metadata to help secure your continuous integration pipeline.
- This page explains how to use Cloud Build to build and test your Go applications, upload your artifacts to Artifact Registry, generate provenance information, and save your test logs in Cloud Storage.
- To enable provenance generation, add requestedVerifyOption: VERIFIED to the options section in your config file.
- You can also view build provenance metadata and validate provenance .

### Build and test Java applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-java](https://docs.cloud.google.com/build/docs/building/build-java)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Enable provenance generation Cloud Build can generate verifiable Supply chain Levels for Software Artifacts (SLSA) build provenance metadata to help secure your continuous integration pipeline.
- This page explains how to use Cloud Build to build and test Java-based applications, store built artifacts in a Maven repository in Artifact Registry, and generate build provenance information.
- To enable provenance generation, add requestedVerifyOption: VERIFIED to the options section in your config file.
- You can also view build provenance metadata and validate provenance .

