---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.491Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry automatic SBOM generation"
feature_slug: "artifact-registry-automatic-sbom-generation"
latest_feature_date: "2022-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
  - "https://docs.cloud.google.com/artifact-registry/docs/analysis"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker"
keywords:
  - "generation"
  - "automatic"
  - "sbom"
  - "scanning"
  - "container"
---

# Artifact Registry automatic SBOM generation

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry automatic container scanning now generates software bill of materials (SBOM) dependency metadata when images are pushed and the Container Scanning API is enabled.

## Extended Definition

Artifact Registry automatic container scanning now generates software bill of materials (SBOM) dependency metadata when images are pushed and the Container Scanning API is enabled.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- [https://docs.cloud.google.com/artifact-registry/docs/docker](https://docs.cloud.google.com/artifact-registry/docs/docker)

## Supporting Pages

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Automatic scanning The Google Cloud CLI command gcloud container images includes flags for viewing scan results, including vulnerabilities and other metadata.
- The initial setup includes automatic creation of Artifact Registry repositories for each Container Registry host in your project and redirection of gcr.io to the corresponding Artifact Registry repositories.
- Automatic scanning The Google Cloud CLI command gcloud artifacts docker images includes flags for viewing scan results, including vulnerabilities and other metadata.
- On-demand scanning The Google Cloud CLI command gcloud artifacts docker images scan scans for vulnerabilities in local images or images in the Container Registry.

### "Artifact analysis and vulnerability scanning \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- GKE workload vulnerability scanning - standard tier Caution: Starting on July 23, 2024, standard tier/container OS vulnerability scanning is deprecated and is scheduled for shutdown on July 31, 2025.
- In addition to basic container OS scanning, GKE users can upgrade to advanced vulnerability insights to take advantage of continual language package vulnerability detection.
- Automatic scanning in Artifact Registry The scanning process is triggered automatically every time you push a new image to Artifact Registry.
- As part of GKE security posture dashboard, workload vulnerability scanning provides detection of container image OS vulnerabilities.

### Work with container images \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker](https://docs.cloud.google.com/artifact-registry/docs/docker)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Metadata can be any relevant information you want to store that is related to a container image, including files you can scan or generate with Artifact Analysis : Software bill of materials (SBOM) Vulnerability scan results Other metadata such as build provenance Set up Pub/Sub notifications for changes to your repository.
- The Cloud Build default service account has permissions to push to and pull from Artifact Registry repositories in the same Google Cloud project unless you have disabled automatic role granting to default service accounts.
- The default service account for Compute Engine has permissions to pull from Artifact Registry repositories in the same Google Cloud project unless you have disabled automatic role granting to default service accounts .
- Home Documentation Application development Artifact Registry Guides Send feedback Work with container images Stay organized with collections Save and categorize content based on your preferences.

