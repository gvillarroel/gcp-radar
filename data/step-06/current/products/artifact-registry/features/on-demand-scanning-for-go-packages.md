---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.494Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "On-Demand Scanning for Go packages"
feature_slug: "on-demand-scanning-for-go-packages"
latest_feature_date: "2022-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1"
  - "https://docs.cloud.google.com/artifact-registry/docs/analysis"
keywords:
  - "packages"
  - "demand"
  - "generally"
  - "scanning"
  - "available"
---

# On-Demand Scanning for Go packages

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

On-Demand Scanning for Go packages in Artifact Registry is generally available for container images to identify Go package vulnerabilities.

## Extended Definition

On-Demand Scanning for Go packages in Artifact Registry is generally available for container images to identify Go package vulnerabilities.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1)
- [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)

## Supporting Pages

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- On-demand scanning The Google Cloud CLI command gcloud artifacts docker images scan scans for vulnerabilities in local images or images in the Container Registry.
- On-demand scanning The Google Cloud CLI command gcloud artifacts docker images scan scans for vulnerabilities in local images or images in the Artifact Registry.
- Metadata storage and analysis with Artifact Analysis Scans for OS and language package vulnerabiities with on-demand scanning in images with a supported OS.
- Scans for OS and lanaguage package vulnerabiities with both on-demand and automatic scanning.

### "Package com.google.devtools.artifactregistry.v1 (1.87.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1)
- Source ID: `site-java-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Vulnerability Scanning Config Config on whether to perform vulnerability scanning for resources in this repository, as well as output fields describing current state. com. google. devtools. artifactregistry. v1.
- Builder Config on whether to perform vulnerability scanning for resources in this repository, as well as output fields describing current state. com. google. devtools. artifactregistry. v1.
- Enablement State Describes the state of vulnerability scanning in this repository, including both repository enablement and API enablement. com. google. devtools. artifactregistry. v1.
- Public Repository Publicly available Apt repositories constructed from a common repository base and a custom repository path. com. google. devtools. artifactregistry. v1.

### "Artifact analysis and vulnerability scanning \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- On-Demand scanning This service is not continual; you must run a command to manually initiate the scan.
- To learn more, see on-demand scanning .
- GKE workload vulnerability scanning - advanced vulnerability insights Caution: Starting on June 16, 2025 Advanced Vulnerability Insights is deprecated and is scheduled for shutdown on June 16, 2026 as part of the deprecation of various GKE security posture dashboard features.
- Registry scanning This section outlines Artifact Analysis vulnerability scanning features based in Artifact Registry, and lists related Google Cloud products where you can enable complementary capabilities to support your security posture.

