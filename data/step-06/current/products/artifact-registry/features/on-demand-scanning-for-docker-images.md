---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.942Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "On-Demand Scanning for Docker images"
feature_slug: "on-demand-scanning-for-docker-images"
latest_feature_date: "2021-02-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/authentication"
keywords:
  - "demand"
  - "scanning"
  - "docker"
  - "images"
  - "on"
  - "registry"
  - "artifact"
  - "for"
---

# On-Demand Scanning for Docker images

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry makes On-Demand Scanning available in Preview for manual scanning of Docker container images.

## Extended Definition

Artifact Registry makes On-Demand Scanning available in Preview for manual scanning of Docker container images.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)

## Supporting Pages

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- On-demand scanning The Google Cloud CLI command gcloud artifacts docker images scan scans for vulnerabilities in local images or images in the Container Registry.
- On-demand scanning The Google Cloud CLI command gcloud artifacts docker images scan scans for vulnerabilities in local images or images in the Artifact Registry.
- Metadata storage and analysis with Artifact Analysis Scans for OS and language package vulnerabiities with on-demand scanning in images with a supported OS.
- Operation Container Registry Artifact Registry Create a repository Not applicable. gcloud artifacts repositories create Delete a repository Not applicable. gcloud artifacts repositories delete List images gcloud container images list gcloud artifacts docker images list List tags gcloud container images list-tags gcloud artifacts docker tags list Add a tag gcloud container images add-tag gcloud artifacts docker tags add Delete a tag gcloud container images untag gcloud artifacts docker tags delete Describe images gcloud container images describe gcloud artifacts docker images list --include-tags Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Quickstart: Store Docker container images in Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For this sample image: us-docker.pkg.dev is the hostname for container images stored in Artifact Registry Docker repositories, which includes the location of the repository ( us ). google-samples is the project ID. containers is the repository ID. /gke/hello-app is the path to the image in the repository containers .
- Store Docker container images in Artifact Registry Artifact Registry provides a single location for managing private packages and Docker container images.
- Configure authentication Before you can push or pull images, configure Docker to use the Google Cloud CLI to authenticate requests to Artifact Registry.
- This quickstart shows you how to: Create a private Docker repository in Artifact Registry Set up authentication Push an image to the repository Pull the image from the repository To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Sign in to your Google Cloud account.

### "Configure authentication to Artifact Registry for Docker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Linux: /.docker/config.json Windows: %USERPROFILE%\.docker\config.json There are separate sections in the file for different authentication methods: credHelpers If you use the Docker credential helper for authentication Artifact Registry stores the credential helper settings in the credHelpers section of the file. auths If you use Docker to sign in with a token or service account key as your password, Docker stores a base64-encoded version of your credentials in the auths section of the file. credStore If you configured a credential store to manage your credentials, the settings for the credential store are in the credStore section of the file.
- ARCH = amd64 # or "386" for 32-bit OSs curl -fsSL "https://github.com/GoogleCloudPlatform/docker-credential-gcr/releases/download/v ${ VERSION } /docker-credential-gcr ${ OS } ${ ARCH } - ${ VERSION } .tar.gz" \ tar xz docker-credential-gcr \ && chmod +x docker-credential-gcr && sudo mv docker-credential-gcr /usr/bin/ Configure Docker to use your Artifact Registry credentials when interacting with Artifact Registry (you are only required to do this once): docker-credential-gcr configure-docker --registries = HOSTNAME-LIST Where HOSTNAME-LIST is a comma-separated list of repository hostnames to add to the credential helper configuration.
- Home Documentation Application development Artifact Registry Guides Send feedback Configure authentication to Artifact Registry for Docker Stay organized with collections Save and categorize content based on your preferences.
- Choosing an authentication method The following authentication methods are available: gcloud CLI credential helper Configure your Artifact Registry credentials for use with Docker directly in gcloud CLI.

