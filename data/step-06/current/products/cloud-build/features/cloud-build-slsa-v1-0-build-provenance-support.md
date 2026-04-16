---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.822Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build SLSA v1.0 build provenance support"
feature_slug: "cloud-build-slsa-v1-0-build-provenance-support"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/overview"
  - "https://docs.cloud.google.com/build/docs/building/build-go"
  - "https://docs.cloud.google.com/build/docs/building/build-java"
keywords:
  - "verifiable"
  - "metadata"
  - "provenance"
  - "generate"
  - "slsa"
---

# Cloud Build SLSA v1.0 build provenance support

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build can generate verifiable build provenance metadata compliant with SLSA v1.0 for triggered builds using the requestedVerifyOption.

## Extended Definition

Cloud Build can generate verifiable build provenance metadata compliant with SLSA v1.0 for triggered builds using the requestedVerifyOption.

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
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Build can generate build provenance for container images that provide SLSA level 3 assurance.
- Provenance metadata includes details such as the digests of the built images, the input source locations, the build toolchain, and the build duration.
- Build provenance Build provenance is a collection of verifiable data about a build.
- This panel displays the following information: Supply-chain Levels for Software Artifacts (SLSA) Level : Identifies the maturity level of your software build process in accordance with the SLSA specification .

### Build and test Go applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-go](https://docs.cloud.google.com/build/docs/building/build-go)
- Source ID: `site-docs-root-2`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Enable provenance generation Cloud Build can generate verifiable Supply chain Levels for Software Artifacts (SLSA) build provenance metadata to help secure your continuous integration pipeline.
- This page explains how to use Cloud Build to build and test your Go applications, upload your artifacts to Artifact Registry, generate provenance information, and save your test logs in Cloud Storage.
- You can also view build provenance metadata and validate provenance .
- To enable provenance generation, add requestedVerifyOption: VERIFIED to the options section in your config file.

### Build and test Java applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-java](https://docs.cloud.google.com/build/docs/building/build-java)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Enable provenance generation Cloud Build can generate verifiable Supply chain Levels for Software Artifacts (SLSA) build provenance metadata to help secure your continuous integration pipeline.
- This page explains how to use Cloud Build to build and test Java-based applications, store built artifacts in a Maven repository in Artifact Registry, and generate build provenance information.
- You can also view build provenance metadata and validate provenance .
- To enable provenance generation, add requestedVerifyOption: VERIFIED to the options section in your config file.

