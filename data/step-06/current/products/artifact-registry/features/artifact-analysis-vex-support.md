---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.918Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Analysis VEX support"
feature_slug: "artifact-analysis-vex-support"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/analysis"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
keywords:
  - "exploitability"
  - "statements"
  - "exchange"
  - "vex"
  - "vulnerability"
  - "analysis"
  - "supports"
  - "artifact"
---

# Artifact Analysis VEX support

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Analysis supports Vulnerability Exploitability eXchange (VEX) statements for container images to help triage known vulnerabilities.

## Extended Definition

Artifact Analysis supports Vulnerability Exploitability eXchange (VEX) statements for container images to help triage known vulnerabilities.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)

## Supporting Pages

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- March 25, 2024 v1 Change Artifact Analysis support for Vulnerability Exploitability eXchange (VEX) statements now includes the capability to upload VEX statements for multiple versions of an image.
- To learn more about our SBOM capabilities, see SBOM overview . v1 Feature Artifact Analysis now offers support for Vulnerability Exploitability eXchange (VEX).
- For more information, see the following topics: Google Cloud Console : View layer metadata for Go images View layer metadata for Java images View layer metadata for Node.js images View layer metadata for Python images GCloud CLI View layer metadata for Go images View layer metadata for Java images View layer metadata for Node.js images View layer metadata for Python images August 29, 2025 v1 Change The Container Analysis API now supports the option of returning partial results during region-down failure conditions when listing notes, listing occurrences, or generating vulnerability summaries.
- For more information, see Container scanning overview . v1 Feature Artifact Analysis now supports scanning for vulnerabilities in the following types of operating systems: AlmaLinux OS Chainguard Google Distroless Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi If the Container Scanning API is enabled, it scans container images pushed to Artifact Registry addressing these new operating systems, in addition to already supported operating system and language package vulnerabilities.

### "Artifact analysis and vulnerability scanning \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Registry scanning This section outlines Artifact Analysis vulnerability scanning features based in Artifact Registry, and lists related Google Cloud products where you can enable complementary capabilities to support your security posture.
- Home Documentation Application development Artifact Registry Guides Send feedback Artifact analysis and vulnerability scanning Stay organized with collections Save and categorize content based on your preferences.
- To learn about using Artifact Analysis for metadata management, and costs for the optional vulnerability scanning service, see the Artifact Analysis documentation .
- Security Command Center aggregates vulnerability findings from Artifact Registry scans, allowing you to view container image vulnerabilities within your running workloads, across all projects alongside your other security risks in Security Command Center.

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Scans return OS vulnerability information for images in Artifact Registry with supported operating systems and language package vulnerability information for both supported and unsupported operating systems.
- Metadata storage and analysis with Artifact Analysis Scans for OS and language package vulnerabiities with on-demand scanning in images with a supported OS.
- Scans return OS and language package vulnerability information for images in Artifact Registry with supported operating systems .
- The Google Cloud CLI command gcloud artifacts docker images list-vulnerabilities returns vulnerability scanning results.

