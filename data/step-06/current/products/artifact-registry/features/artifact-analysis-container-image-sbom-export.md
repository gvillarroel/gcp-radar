---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.487Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Analysis container image SBOM export"
feature_slug: "artifact-analysis-container-image-sbom-export"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/analysis"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker"
keywords:
  - "export"
  - "sbom"
  - "analysis"
  - "container"
  - "supports"
  - "image"
---

# Artifact Analysis container image SBOM export

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Analysis now supports exporting consolidated SBOMs for scanned Artifact Registry containers in SPDX format, with support for ingesting external SPDX or CycloneDX SBOMs.

## Extended Definition

Artifact Analysis now supports exporting consolidated SBOMs for scanned Artifact Registry containers in SPDX format, with support for ingesting external SPDX or CycloneDX SBOMs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- [https://docs.cloud.google.com/artifact-registry/docs/docker](https://docs.cloud.google.com/artifact-registry/docs/docker)

## Supporting Pages

### "Artifact analysis and vulnerability scanning \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Security Command Center aggregates vulnerability findings from Artifact Registry scans, allowing you to view container image vulnerabilities within your running workloads, across all projects alongside your other security risks in Security Command Center.
- As part of GKE security posture dashboard, workload vulnerability scanning provides detection of container image OS vulnerabilities.
- You can also export these findings to BigQuery for in-depth analysis and long-term storage.
- Artifact Analysis associates metadata with images through notes and occurrences .

### "Migrate container images from a third-party registry \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- Source ID: `site-docs-root-2`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows manifest referencing a third-party registry: apiVersion : apps/v1 kind : Deployment metadata : name : nginx-deployment spec : selector : matchLabels : app : nginx replicas : 2 template : metadata : labels : app : nginx spec : containers : - name : nginx image : nginx:1.14.2 ports : - containerPort : 80 This updated version of the manifest points to an image on us-docker.pkg.dev . apiVersion : apps/v1 kind : Deployment metadata : name : nginx-deployment spec : selector : matchLabels : app : nginx replicas : 2 template : metadata : labels : app : nginx spec : containers : - name : nginx image : us-docker.pkg.dev/<AR PROJECT>/nginx:1.14.2 ports : - containerPort : 80 For a large number of manifests, use sed or another tool that can handle updates across many text files.
- GO111MODULE = on go get github.com/google/go-containerregistry/cmd/gcrane Create a script named copy images.sh to copy your list of files. #!/bin/bash images = $( cat images.txt ) if [ -z " ${ AR PROJECT } " ] then echo ERROR: AR PROJECT must be set before running this exit 1 fi for img in ${ images } do gcrane cp ${ img } LOCATION -docker.pkg.dev/ ${ AR PROJECT } / ${ img } done Replace LOCATION with the regional or multi-regional location of the repository.
- Costs This guide uses the following billable components of Google Cloud: GKE Artifact Registry BigQuery Logging Identify images to migrate Search the files you use to build and deploy your container images for references to third-party registries, then check how often you pull the images.
- If you pull some container images directly from third-party registries to deploy to Google Cloud environments such as Google Kubernetes Engine or Cloud Run, then rate limits on image pulls or third-party outages can disrupt your builds and deployments.

### Work with container images \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker](https://docs.cloud.google.com/artifact-registry/docs/docker)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Metadata can be any relevant information you want to store that is related to a container image, including files you can scan or generate with Artifact Analysis : Software bill of materials (SBOM) Vulnerability scan results Other metadata such as build provenance Set up Pub/Sub notifications for changes to your repository.
- Home Documentation Application development Artifact Registry Guides Send feedback Work with container images Stay organized with collections Save and categorize content based on your preferences.
- To get familiar with container images in Artifact Registry, you can try the quickstart .
- Artifact Registry can store Docker and OCI container images in a Docker repository.

