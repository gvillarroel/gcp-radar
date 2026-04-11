---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.902Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry attachments"
feature_slug: "artifact-registry-attachments"
latest_feature_date: "2025-04-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/analysis"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers"
keywords:
  - "all"
  - "attachments"
  - "introduced"
  - "across"
  - "preview"
  - "registry"
  - "artifact"
  - "for"
---

# Artifact Registry attachments

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry introduced preview support for attachments across all repository formats to store metadata related to artifacts.

## Extended Definition

Artifact Registry introduced preview support for attachments across all repository formats to store metadata related to artifacts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)

## Supporting Pages

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- April 15, 2025 v1 Feature Artifact Registry attachments are available in Preview for all repository formats.
- For more information, view the returnPartialSuccess parameter for the following requests: v1.projects.locations.notes.list v1.projects.locations.occurrences.getVulnerabilitySummary v1.projects.locations.occurrences.list v1.projects.notes.list v1.projects.occurrences.getVulnerabilitySummary v1.projects.occurrences.list v1beta1.projects.locations.notes.list v1beta1.projects.locations.occurrences.getVulnerabilitySummary v1beta1.projects.locations.occurrences.list v1beta1.projects.notes.list v1beta1.projects.occurrences.getVulnerabilitySummary v1beta1.projects.occurrences.list June 25, 2025 v1 Announcement Artifact Registry generic repositories are now generally available .
- October 21, 2024 v1 Feature Artifact Analysis now supports manual scans for vulnerabilities in the following types of packages: AlmaLinux OS Chainguard .NET Google Distroless NPM PHP Python Ruby Rust Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi You can use the On-Demand Scanning API to manually scan container images locally on your computer or in your registry.
- For more information, see the following topics: Get started with Ruby gems Store Ruby gems in Artifact Registry (Quickstart) September 23, 2025 v1 Feature Layer-based scanning for Artifact Analysis is in Preview .

### "Artifact analysis and vulnerability scanning \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Security Command Center aggregates vulnerability findings from Artifact Registry scans, allowing you to view container image vulnerabilities within your running workloads, across all projects alongside your other security risks in Security Command Center.
- Its detection points are built into a number of Google Cloud products such as Artifact Registry and Google Kubernetes Engine (GKE) for quick enablement.
- Automatic scanning in Artifact Registry The scanning process is triggered automatically every time you push a new image to Artifact Registry.
- You can scan images stored locally, without having to push them to Artifact Registry or GKE runtimes first.

### "Migrate container images from a third-party registry \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Keep track of new image pulls by running the following query in the BigQuery console: SELECT FORMAT TIMESTAMP ( "%D %R" , timestamp ) as timeOfImagePull , REGEXP EXTRACT ( jsonPayload . message , r '"(. ?)"' ) AS imageName , COUNT ( ) AS numberOfPulls FROM image pull logs . events ` GROUP BY timeOfImagePull , imageName ORDER BY timeOfImagePull DESC , numberOfPulls DESC All new image pulls should be from Artifact Registry and contain the string docker.pkg.dev .
- The following example shows manifest referencing a third-party registry: apiVersion : apps/v1 kind : Deployment metadata : name : nginx-deployment spec : selector : matchLabels : app : nginx replicas : 2 template : metadata : labels : app : nginx spec : containers : - name : nginx image : nginx:1.14.2 ports : - containerPort : 80 This updated version of the manifest points to an image on us-docker.pkg.dev . apiVersion : apps/v1 kind : Deployment metadata : name : nginx-deployment spec : selector : matchLabels : app : nginx replicas : 2 template : metadata : labels : app : nginx spec : containers : - name : nginx image : us-docker.pkg.dev/<AR PROJECT>/nginx:1.14.2 ports : - containerPort : 80 For a large number of manifests, use sed or another tool that can handle updates across many text files.
- Costs This guide uses the following billable components of Google Cloud: GKE Artifact Registry BigQuery Logging Identify images to migrate Search the files you use to build and deploy your container images for references to third-party registries, then check how often you pull the images.
- Learn how to grant roles . gcloud services enable artifactregistry.googleapis.com If you don't have a Artifact Registry repository, then create a repository and configure authentication for third-party clients that require access to the repository.

