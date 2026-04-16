---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.049Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "containerd v2 shim shutdown reliability"
feature_slug: "containerd-v2-shim-shutdown-reliability"
latest_feature_date: "2025-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source"
keywords:
  - "containerd"
  - "v2"
  - "shim"
  - "shutdown"
  - "reliability"
  - "fixes"
  - "issue"
  - "prevented"
---

# containerd v2 shim shutdown reliability

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Fixes a containerd issue that prevented some v2 shims from shutting down properly.

## Extended Definition

Fixes a containerd issue that prevented some v2 shims from shutting down properly.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy](https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source](https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source)

## Supporting Pages

### Support policy \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy](https://docs.cloud.google.com/container-optimized-os/docs/resources/support-policy)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It is actively patched with security updates (CVEs) and bug-fixes to address issues that impact Google Cloud users.
- The milestone is actively scanned for security vulnerabilities, and security fixes are applied on regular basis.
- To continue having access to bug fixes and security patches, upgrade to one of the newer active milestones.
- New releases containing medium and low priority bug and security fixes are released every 3 months.

### Versioning scheme \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning](https://docs.cloud.google.com/container-optimized-os/docs/concepts/versioning)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Once promoted to the LTS family, the LTS milestone provides the following benefits: A support duration of 2 years Security fixes for the entire support duration Fixes for any production issues A dedicated release notes page listing every change going into the image.
- Production 2 years Active maintenance of milestone by addressing production issues and security fixes with priority.
- A tiered testing setup like this should help to minimize issues when rolling out newer major versions of Container-Optimized OS images to your production environment.
- Users should take extra care when rolling out these releases, because medium and low priority bug and security fixes might introduce regressions.

### Building Container-Optimized OS from source \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source](https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

