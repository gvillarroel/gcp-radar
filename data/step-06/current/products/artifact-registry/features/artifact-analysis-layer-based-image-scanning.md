---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.477Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Analysis layer-based image scanning"
feature_slug: "artifact-analysis-layer-based-image-scanning"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/analysis"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/copy-images"
keywords:
  - "layer"
  - "based"
  - "analysis"
  - "scanning"
  - "supports"
  - "image"
---

# Artifact Analysis layer-based image scanning

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Analysis now supports viewing vulnerability metadata for individual image layers of container images.

## Extended Definition

Artifact Analysis now supports viewing vulnerability metadata for individual image layers of container images.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/copy-images](https://docs.cloud.google.com/artifact-registry/docs/docker/copy-images)

## Supporting Pages

### "Artifact analysis and vulnerability scanning \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Registry scanning This section outlines Artifact Analysis vulnerability scanning features based in Artifact Registry, and lists related Google Cloud products where you can enable complementary capabilities to support your security posture.
- Home Documentation Application development Artifact Registry Guides Send feedback Artifact analysis and vulnerability scanning Stay organized with collections Save and categorize content based on your preferences.
- To learn about using Artifact Analysis for metadata management, and costs for the optional vulnerability scanning service, see the Artifact Analysis documentation .
- Automatic scanning in Artifact Registry The scanning process is triggered automatically every time you push a new image to Artifact Registry.

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Metadata storage and analysis with Artifact Analysis Scans for OS and language package vulnerabiities with on-demand scanning in images with a supported OS.
- Since registry hosts are only available in multi-regions, data transfer costs include deploying images to Google Cloud Artifact Registry has its own pricing , based on storage and network data transfer.
- Automatic scanning The Google Cloud CLI command gcloud artifacts docker images includes flags for viewing scan results, including vulnerabilities and other metadata.
- On-demand scanning The Google Cloud CLI command gcloud artifacts docker images scan scans for vulnerabilities in local images or images in the Container Registry.

### "Copy images between repositories \_|\_ Artifact Registry \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/copy-images](https://docs.cloud.google.com/artifact-registry/docs/docker/copy-images)
- Source ID: `site-docs-root-2`
- Final score: 89
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Artifact Registry Guides Send feedback Copy images between repositories Stay organized with collections Save and categorize content based on your preferences.
- Since the gcrane tool skips uploading image layers that are already uploaded, this limit is for new data that you are copying.
- For example, the gcr-cleaner tool helps you to find and remove old images based on different criteria.
- Skipping image layers that are already uploaded.

