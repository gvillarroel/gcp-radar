---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.941Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Container image audit logs in Cloud Audit Logs"
feature_slug: "container-image-audit-logs-in-cloud-audit-logs"
latest_feature_date: "2021-05-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/learn-about-your-container-images-with-gemini-assistance"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images"
keywords:
  - "audit"
  - "logs"
  - "container"
  - "image"
  - "registry"
  - "artifact"
  - "adds"
  - "in"
---

# Container image audit logs in Cloud Audit Logs

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry adds Cloud Audit Logs support for container image operations.

## Extended Definition

Artifact Registry adds Cloud Audit Logs support for container image operations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/learn-about-your-container-images-with-gemini-assistance](https://docs.cloud.google.com/artifact-registry/docs/docker/learn-about-your-container-images-with-gemini-assistance)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)

## Supporting Pages

### "Migrate container images from a third-party registry \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Keep track of new image pulls by running the following query in the BigQuery console: SELECT FORMAT TIMESTAMP ( "%D %R" , timestamp ) as timeOfImagePull , REGEXP EXTRACT ( jsonPayload . message , r '"(. ?)"' ) AS imageName , COUNT ( ) AS numberOfPulls FROM image pull logs . events ` GROUP BY timeOfImagePull , imageName ORDER BY timeOfImagePull DESC , numberOfPulls DESC All new image pulls should be from Artifact Registry and contain the string docker.pkg.dev .
- Costs This guide uses the following billable components of Google Cloud: GKE Artifact Registry BigQuery Logging Identify images to migrate Search the files you use to build and deploy your container images for references to third-party registries, then check how often you pull the images.
- Home Documentation Application development Artifact Registry Guides Send feedback Migrate container images from a third-party registry Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to identify and copy those images to Artifact Registry for consolidated, consistent container image management.

### "Learn about your container images with Gemini assistance \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/learn-about-your-container-images-with-gemini-assistance](https://docs.cloud.google.com/artifact-registry/docs/docker/learn-about-your-container-images-with-gemini-assistance)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to list repositories and container images in Artifact Registry, ask your administrator to grant you the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role on the project or repository.
- Home Documentation Application development Artifact Registry Guides Send feedback Learn about your container images with Gemini assistance Stay organized with collections Save and categorize content based on your preferences.
- Go to project selector If you don't have any container images stored in an Artifact Registry repository, then follow the instructions in Store Docker container images in Artifact Registry .
- This document describes how you can use Gemini Cloud Assist to list your Artifact Registry repositories and container images stored in Docker-format repositories.

### "Quickstart: Store Docker container images in Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For this sample image: us-docker.pkg.dev is the hostname for container images stored in Artifact Registry Docker repositories, which includes the location of the repository ( us ). google-samples is the project ID. containers is the repository ID. /gke/hello-app is the path to the image in the repository containers .
- Run the following command to pull version 1.0 of the image. docker pull us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 Image paths in Artifact Registry include multiple parts.
- Store Docker container images in Artifact Registry Artifact Registry provides a single location for managing private packages and Docker container images.
- This quickstart shows you how to: Create a private Docker repository in Artifact Registry Set up authentication Push an image to the repository Pull the image from the repository To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Sign in to your Google Cloud account.

