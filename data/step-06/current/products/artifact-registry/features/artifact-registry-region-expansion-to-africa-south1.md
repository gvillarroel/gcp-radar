---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.485Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry region expansion to africa-south1"
feature_slug: "artifact-registry-region-expansion-to-africa-south1"
latest_feature_date: "2024-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
  - "https://docs.cloud.google.com/artifact-registry/docs/custom-constraints"
keywords:
  - "johannesburg"
  - "expansion"
  - "africa"
  - "south1"
  - "available"
  - "region"
---

# Artifact Registry region expansion to africa-south1

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry is available in the Africa-South1 (Johannesburg) region.

## Extended Definition

Artifact Registry is available in the Africa-South1 (Johannesburg) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest](https://docs.cloud.google.com/artifact-registry/docs/reference/rest)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [https://docs.cloud.google.com/artifact-registry/docs/custom-constraints](https://docs.cloud.google.com/artifact-registry/docs/custom-constraints)

## Supporting Pages

### Artifact Registry API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest](https://docs.cloud.google.com/artifact-registry/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 71
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

### "Use custom organization policies \_|\_ Artifact Registry \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/custom-constraints](https://docs.cloud.google.com/artifact-registry/docs/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following command creates a remote repository named my-repo in the region us-east1 in the Google Cloud project my-project and can authenticate to the upstream repository using the username my-username and secret version projects/my-project/secrets/my-secret/versions/1 . gcloud artifacts repositories create my-repo \ --project = my-project \ --repository-format = python \ --location = us-east1 \ --description = "Remote Python repository" \ --mode = remote-repository \ --remote-repo-config-desc = "PyPI" \ --remote-username = my-username \ --remote-password-secret-version = projects/my-project/secrets/my-secret/versions/1 \ --remote-python-repo = PYPI The output is the following: Operation denied by custom org policies: ["customConstraints/custom.enableDockerRemotes": "All remote repositories must be Docker format."] Artifact Registry supported resources Artifact Registry supports custom constraints, on all fields except labels , for create and update operations on the repository resource.
- For information on available preset upstreams and supported user-defined upstreams, see Supported formats . --disable-vulnerability-scanning : is an optional flag that configures your repository to disable automatic vulnerability scanning. --allow-vulnerability-scanning : is an optional flag that configures your repository to permit automatic vulnerability scanning.
- See Supported resources for more information about the resources available to write conditions against—for example, (resource.mode == 'REMOTE' && resource.format == 'DOCKER') (resource.mode != 'REMOTE') .
- For Artifact Registry upstream repositories, format the repository path similar to the following: projects/ UPSTREAM PROJECT ID /locations/ REGION /repositories/ UPSTREAM REPOSITORY .

