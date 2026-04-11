---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.943Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry beta launch"
feature_slug: "artifact-registry-beta-launch"
latest_feature_date: "2020-03-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/learn-about-your-container-images-with-gemini-assistance"
keywords:
  - "entered"
  - "launch"
  - "beta"
  - "container"
  - "as"
  - "registry"
  - "artifact"
  - "the"
---

# Artifact Registry beta launch

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry entered beta as the container-and-package registry successor with support for Docker, Maven, and npm package formats.

## Extended Definition

Artifact Registry entered beta as the container-and-package registry successor with support for Docker, Maven, and npm package formats.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/learn-about-your-container-images-with-gemini-assistance](https://docs.cloud.google.com/artifact-registry/docs/docker/learn-about-your-container-images-with-gemini-assistance)

## Supporting Pages

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Container scanning overview . v1 Feature Artifact Analysis now supports scanning for vulnerabilities in the following types of operating systems: AlmaLinux OS Chainguard Google Distroless Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi If the Container Scanning API is enabled, it scans container images pushed to Artifact Registry addressing these new operating systems, in addition to already supported operating system and language package vulnerabilities.
- October 21, 2024 v1 Feature Artifact Analysis now supports manual scans for vulnerabilities in the following types of packages: AlmaLinux OS Chainguard .NET Google Distroless NPM PHP Python Ruby Rust Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi You can use the On-Demand Scanning API to manually scan container images locally on your computer or in your registry.
- Artifact Registry creation time is set to the time the image was uploaded to Container Registry, and update time is set to the time the image is copied to Artifact Registry.
- The Container Analysis API stores metadata in the same region or multi-region as the Artifact Registry repository where your image is scanned.

### "Migrate container images from a third-party registry \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows manifest referencing a third-party registry: apiVersion : apps/v1 kind : Deployment metadata : name : nginx-deployment spec : selector : matchLabels : app : nginx replicas : 2 template : metadata : labels : app : nginx spec : containers : - name : nginx image : nginx:1.14.2 ports : - containerPort : 80 This updated version of the manifest points to an image on us-docker.pkg.dev . apiVersion : apps/v1 kind : Deployment metadata : name : nginx-deployment spec : selector : matchLabels : app : nginx replicas : 2 template : metadata : labels : app : nginx spec : containers : - name : nginx image : us-docker.pkg.dev/<AR PROJECT>/nginx:1.14.2 ports : - containerPort : 80 For a large number of manifests, use sed or another tool that can handle updates across many text files.
- Keep track of new image pulls by running the following query in the BigQuery console: SELECT FORMAT TIMESTAMP ( "%D %R" , timestamp ) as timeOfImagePull , REGEXP EXTRACT ( jsonPayload . message , r '"(. ?)"' ) AS imageName , COUNT ( ) AS numberOfPulls FROM image pull logs . events ` GROUP BY timeOfImagePull , imageName ORDER BY timeOfImagePull DESC , numberOfPulls DESC All new image pulls should be from Artifact Registry and contain the string docker.pkg.dev .
- GO111MODULE = on go get github.com/google/go-containerregistry/cmd/gcrane Create a script named copy images.sh to copy your list of files. #!/bin/bash images = $( cat images.txt ) if [ -z " ${ AR PROJECT } " ] then echo ERROR: AR PROJECT must be set before running this exit 1 fi for img in ${ images } do gcrane cp ${ img } LOCATION -docker.pkg.dev/ ${ AR PROJECT } / ${ img } done Replace LOCATION with the regional or multi-regional location of the repository.
- Costs This guide uses the following billable components of Google Cloud: GKE Artifact Registry BigQuery Logging Identify images to migrate Search the files you use to build and deploy your container images for references to third-party registries, then check how often you pull the images.

### "Learn about your container images with Gemini assistance \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/learn-about-your-container-images-with-gemini-assistance](https://docs.cloud.google.com/artifact-registry/docs/docker/learn-about-your-container-images-with-gemini-assistance)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to list repositories and container images in Artifact Registry, ask your administrator to grant you the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role on the project or repository.
- Home Documentation Application development Artifact Registry Guides Send feedback Learn about your container images with Gemini assistance Stay organized with collections Save and categorize content based on your preferences.
- Go to project selector If you don't have any container images stored in an Artifact Registry repository, then follow the instructions in Store Docker container images in Artifact Registry .
- This document describes how you can use Gemini Cloud Assist to list your Artifact Registry repositories and container images stored in Docker-format repositories.

