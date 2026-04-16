---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.475Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry regional availability"
feature_slug: "artifact-registry-regional-availability"
latest_feature_date: "2026-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/authentication"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
keywords:
  - "southeast3"
  - "asia"
  - "availability"
  - "regional"
  - "available"
---

# Artifact Registry regional availability

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry is now available in the asia-southeast3 (Bangkok) region; Artifact Registry is now available in the europe-north2 (Stockholm) region.

## Extended Definition

Artifact Registry is now available in the asia-southeast3 (Bangkok) region; Artifact Registry is now available in the europe-north2 (Stockholm) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest](https://docs.cloud.google.com/artifact-registry/docs/reference/rest)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)

## Supporting Pages

### "Configure authentication to Artifact Registry for Docker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- Source ID: `site-docs-root-2`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- For example, to add the regions us-west1 and asia-northeast1 , run the command: docker-credential-gcr configure-docker --registries=us-west1-docker.pkg.dev,asia-northeast1-docker.pkg.dev The specified hostnames are added to the credential helper configuration.
- For example, to add the regions us-west1 and asia-northeast1 , run the command: gcloud auth configure-docker us-west1-docker.pkg.dev,asia-northeast1-docker.pkg.dev The specified hostnames are added to the credential helper configuration.
- Choosing an authentication method The following authentication methods are available: gcloud CLI credential helper Configure your Artifact Registry credentials for use with Docker directly in gcloud CLI.
- Standalone credential helper The standalone Docker credential helper configures Docker to authenticate to Artifact Registry on a system where the gcloud CLI is not available.

### Artifact Registry API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest](https://docs.cloud.google.com/artifact-registry/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-west1 northamerica-northeast1 northamerica-northeast2 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 me-central2 us-east7 us eu https://artifactregistry.googleapis.com REST Resource: v1.projects Methods getProjectSettings GET /v1/{name=projects/ /projectSettings} Retrieves the Settings for the Project. updateProjectSettings PATCH /v1/{projectSettings.name=projects/ /projectSettings} Updates the Settings for the Project.
- A service that is available in multiple regions might have multiple regional endpoints.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://artifactregistry.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Artifact Registry enables you to store different artifact types, create multiple repositories in a single project, and associate a specific regional or multi-regional location with each repository.
- For the asia multi-region, egress to regions in Asia such as asia-northeast1 are not charged, but egress to regions in Australia are charged.
- Remote repositories reduce latency and improve availability for builds and deployments on Google Cloud.
- A good repository location balances latency, availability, and bandwidth costs for data consumers.

