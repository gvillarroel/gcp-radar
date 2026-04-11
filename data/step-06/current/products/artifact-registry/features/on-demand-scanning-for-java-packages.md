---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.937Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "On-Demand Scanning for Java packages"
feature_slug: "on-demand-scanning-for-java-packages"
latest_feature_date: "2021-07-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/java"
keywords:
  - "packages"
  - "java"
  - "demand"
  - "scanning"
  - "on"
  - "registry"
  - "artifact"
  - "for"
---

# On-Demand Scanning for Java packages

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry enables generally available On-Demand Scanning for Java packages to identify vulnerabilities in container images.

## Extended Definition

Artifact Registry enables generally available On-Demand Scanning for Java packages to identify vulnerabilities in container images.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/java](https://docs.cloud.google.com/artifact-registry/docs/java)

## Supporting Pages

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- On-demand scanning The Google Cloud CLI command gcloud artifacts docker images scan scans for vulnerabilities in local images or images in the Container Registry.
- On-demand scanning The Google Cloud CLI command gcloud artifacts docker images scan scans for vulnerabilities in local images or images in the Artifact Registry.
- Feature Container Registry Artifact Registry Supported formats Container images only Multiple artifact formats , including container images, language packages, and OS packages.
- Metadata storage and analysis with Artifact Analysis Scans for OS and language package vulnerabiities with on-demand scanning in images with a supported OS.

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- October 21, 2024 v1 Feature Artifact Analysis now supports manual scans for vulnerabilities in the following types of packages: AlmaLinux OS Chainguard .NET Google Distroless NPM PHP Python Ruby Rust Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi You can use the On-Demand Scanning API to manually scan container images locally on your computer or in your registry.
- If the Container Scanning API is enabled, it scans container images pushed to Artifact Registry for Java and Go vulnerabilities, in addition to operating system vulnerabilities.
- If the Container Scanning API is enabled, it scans container images pushed to Artifact Registry for Java and Go vulnerabilities, in addition to operating system vulnerabilities.
- July 13, 2021 v1beta2 Feature On-Demand Scanning for Java packages is now generally available .

### Manage Java packages \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/java](https://docs.cloud.google.com/artifact-registry/docs/java)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Artifact Registry Guides Send feedback Manage Java packages Stay organized with collections Save and categorize content based on your preferences.
- To list all snapshot dependencies, you can filter the dependency tree with the command: mvn dependency:tree -Dincludes = ::: -SNAPSHOT Artifact Registry version policy When you create a Maven repository in Artifact Registry, you can specify a Maven version policy: None - Stores both snapshot and release packages.
- Service accounts for common integrations with Artifact Registry have default permissions for repositories in the same project.
- When you are ready to learn more, read the following information: Create a Java package repository for your packages.

