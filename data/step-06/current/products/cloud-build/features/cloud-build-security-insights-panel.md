---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.836Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Security Insights panel"
feature_slug: "cloud-build-security-insights-panel"
latest_feature_date: "2023-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/overview"
  - "https://docs.cloud.google.com/build/docs/building/build-go"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "showing"
  - "security"
  - "insights"
  - "levels"
  - "panel"
  - "introduced"
  - "slsa"
---

# Cloud Build Security Insights panel

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build introduced a Security Insights panel showing SLSA levels, vulnerabilities, and build detail metrics.

## Extended Definition

Cloud Build introduced a Security Insights panel showing SLSA levels, vulnerabilities, and build detail metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- [https://docs.cloud.google.com/build/docs/building/build-go](https://docs.cloud.google.com/build/docs/building/build-go)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### Overview of Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This panel displays the following information: Supply-chain Levels for Software Artifacts (SLSA) Level : Identifies the maturity level of your software build process in accordance with the SLSA specification .
- Security insights panel Cloud Build includes a Security insights panel in the Google Cloud console that displays a high-level overview of multiple security metrics.
- Cloud Build features meet the requirements of Supply chain Levels for Software Artifacts (SLSA) level 3.
- Build security Cloud Build provides several features to secure your builds including: Automated Builds An automated build or scripted build defines all build steps in build script or build configuration, including steps to retrieve source code and steps to build the code.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference-2`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- To perform these steps, you must have one of the following roles on the host project: Owner role ( roles/owner ) Compute Security Admin role ( roles/compute.securityAdmin ) Custom Identity and Access Management (IAM) role with the compute.firewalls.create permission enabled For a basic configuration, apply the rules to allow serverless resources in any service project connected to the Shared VPC network to send requests to any resource in the network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny connector traffic across your VPC network.
- You must have one of the following Identity and Access Management (IAM) roles: Compute Security Admin role Custom IAM role with the compute.firewalls.create permission enabled Deny egress traffic from your connector.

### Build and test Go applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-go](https://docs.cloud.google.com/build/docs/building/build-go)
- Source ID: `site-docs-root-2`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Enable provenance generation Cloud Build can generate verifiable Supply chain Levels for Software Artifacts (SLSA) build provenance metadata to help secure your continuous integration pipeline.
- In the Assign Service Account User Role panel, select your runtime service account and then click Grant Permission .

