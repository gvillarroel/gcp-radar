---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.488Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry availability in europe-west10 region"
feature_slug: "artifact-registry-availability-in-europe-west10-region"
latest_feature_date: "2023-08-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
keywords:
  - "west10"
  - "became"
  - "availability"
  - "europe"
  - "available"
  - "region"
---

# Artifact Registry availability in europe-west10 region

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry became available in the europe-west10 (Berlin) region.

## Extended Definition

Artifact Registry became available in the europe-west10 (Berlin) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest](https://docs.cloud.google.com/artifact-registry/docs/reference/rest)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)

## Supporting Pages

### Artifact Registry API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest](https://docs.cloud.google.com/artifact-registry/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-west1 northamerica-northeast1 northamerica-northeast2 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 me-central2 us-east7 us eu https://artifactregistry.googleapis.com REST Resource: v1.projects Methods getProjectSettings GET /v1/{name=projects/ /projectSettings} Retrieves the Settings for the Project. updateProjectSettings PATCH /v1/{projectSettings.name=projects/ /projectSettings} Updates the Settings for the Project.
- A service that is available in multiple regions might have multiple regional endpoints.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://artifactregistry.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Since registry hosts are only available in multi-regions, data transfer costs include deploying images to Google Cloud Artifact Registry has its own pricing , based on storage and network data transfer.
- Registry location Only four multi-regional registry hosts are available in a Google Cloud project.
- Effective March 18, 2025, Container Registry is shut down and writing images to Container Registry is unavailable. gcr.io URLs hosted on Artifact Registry, including Google-owned images with gcr.io URLs, are not affected by the Container Registry shutdown.
- Cloud Run source deployment Unavailable Source deployment lets you use a single gcloud CLI command to build a container image from your source code, store the image in Artifact Registry, and deploy it to Cloud Run.

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Restricting repository locations If you need to comply with regulations or policies that require you to store data in specific regions, you can include a resource locations constraint in your Google Cloud organization policy that only allows repository creation in compliant regions.
- For example, if you developers team in Australia need to download artifacts from Artifact Registry to their local workstations, a repository in an Australian region will reduce latency and incur lower egress charges than a repository located on another continent.
- You can only use image streaming in GKE and Managed Service for Apache Spark if your container images are stored in Artifact Registry repositories in the same region as your workloads or a multi-region that corresponds to the region with your workloads.
- You can reduce latency and network egress costs by creating repositories in the same region where you run GKE, Cloud Run, Cloud Build, and other Google Cloud services that interact with the repository.

