---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.917Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Analysis container image SBOM export"
feature_slug: "artifact-analysis-container-image-sbom-export"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/analysis"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images"
keywords:
  - "export"
  - "sbom"
  - "analysis"
  - "container"
  - "supports"
  - "image"
  - "artifact"
  - "now"
---

# Artifact Analysis container image SBOM export

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Analysis now supports exporting consolidated SBOMs for scanned Artifact Registry containers in SPDX format, with support for ingesting external SPDX or CycloneDX SBOMs.

## Extended Definition

Artifact Analysis now supports exporting consolidated SBOMs for scanned Artifact Registry containers in SPDX format, with support for ingesting external SPDX or CycloneDX SBOMs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)

## Supporting Pages

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Container scanning overview . v1 Feature Artifact Analysis now supports scanning for vulnerabilities in the following types of operating systems: AlmaLinux OS Chainguard Google Distroless Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi If the Container Scanning API is enabled, it scans container images pushed to Artifact Registry addressing these new operating systems, in addition to already supported operating system and language package vulnerabilities.
- October 21, 2024 v1 Feature Artifact Analysis now supports manual scans for vulnerabilities in the following types of packages: AlmaLinux OS Chainguard .NET Google Distroless NPM PHP Python Ruby Rust Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi You can use the On-Demand Scanning API to manually scan container images locally on your computer or in your registry.
- For more information, see the Types of scanning in the Container Analysis documentation October 11, 2022 v1 Feature When users enable the Container Scanning API and push container images to Artifact Registry, automatic container scanning now generates metadata including a software bill of materials (SBOM) dependency list.
- For more information, see Python overview and Node.js overview . v1 Feature Artifact Analysis now offers the ability to export a consolidated software bill of materials (SBOM) for scanned containers in Artifact Registry.

### "Artifact analysis and vulnerability scanning \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Security Command Center aggregates vulnerability findings from Artifact Registry scans, allowing you to view container image vulnerabilities within your running workloads, across all projects alongside your other security risks in Security Command Center.
- Artifact Analysis associates metadata with images through notes and occurrences .
- This service was formerly known as Container Analysis.
- Registry scanning This section outlines Artifact Analysis vulnerability scanning features based in Artifact Registry, and lists related Google Cloud products where you can enable complementary capabilities to support your security posture.

### "Quickstart: Store Docker container images in Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- For this sample image: us-docker.pkg.dev is the hostname for container images stored in Artifact Registry Docker repositories, which includes the location of the repository ( us ). google-samples is the project ID. containers is the repository ID. /gke/hello-app is the path to the image in the repository containers .
- Click Delete . gcloud To delete the quickstart-docker-repo repository, run the following command: gcloud artifacts repositories delete quickstart-docker-repo --location = us-west1 What's next Learn more about working with container images .
- Run the following command to pull version 1.0 of the image. docker pull us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 Image paths in Artifact Registry include multiple parts.
- Store Docker container images in Artifact Registry Artifact Registry provides a single location for managing private packages and Docker container images.

