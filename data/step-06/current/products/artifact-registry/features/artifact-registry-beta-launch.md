---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.500Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry beta launch"
feature_slug: "artifact-registry-beta-launch"
latest_feature_date: "2020-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
  - "https://docs.cloud.google.com/artifact-registry/docs/access-control"
keywords:
  - "successor"
  - "entered"
  - "launch"
  - "beta"
  - "package"
  - "container"
---

# Artifact Registry beta launch

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry entered beta as the container-and-package registry successor with support for Docker, Maven, and npm package formats.

## Extended Definition

Artifact Registry entered beta as the container-and-package registry successor with support for Docker, Maven, and npm package formats.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)

## Supporting Pages

### "Quickstart: Store Docker container images in Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
- Source ID: `site-docs-root-2`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Store Docker container images in Artifact Registry Artifact Registry provides a single location for managing private packages and Docker container images.
- Run the following command to tag the image as quickstart-image:tag1 : docker tag us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 \ us-west1-docker.pkg.dev/ PROJECT /quickstart-docker-repo/quickstart-image:tag1 Where: us-west1 is the repository location. us-west1-docker.pkg.dev is the hostname for the Docker repository you created.
- For this sample image: us-docker.pkg.dev is the hostname for container images stored in Artifact Registry Docker repositories, which includes the location of the repository ( us ). google-samples is the project ID. containers is the repository ID. /gke/hello-app is the path to the image in the repository containers .
- Click Delete . gcloud To delete the quickstart-docker-repo repository, run the following command: gcloud artifacts repositories delete quickstart-docker-repo --location = us-west1 What's next Learn more about working with container images .

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Feature Container Registry Artifact Registry Supported formats Container images only Multiple artifact formats , including container images, language packages, and OS packages.
- Scans return OS and language package vulnerability information for images in Container Registry with supported operating systems .
- Scanning for OS and language package vulnerabilities in containers.
- Operation Container Registry Artifact Registry Create a repository Not applicable. gcloud artifacts repositories create Delete a repository Not applicable. gcloud artifacts repositories delete List images gcloud container images list gcloud artifacts docker images list List tags gcloud container images list-tags gcloud artifacts docker tags list Add a tag gcloud container images add-tag gcloud artifacts docker tags add Delete a tag gcloud container images untag gcloud artifacts docker tags delete Describe images gcloud container images describe gcloud artifacts docker images list --include-tags Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Access control with IAM \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Container images: Docker , Helm Language packages: Java , Node.js , Python , Go OS packages: Debian , RPM Other: Kubeflow Pipeline templates GitLab on Google Cloud The GitLab on Google Cloud integration uses Workload Identity Federation for authorization and authentication for GitLab workloads on Google Cloud without the need for service accounts or service account keys.
- Container images: Docker , Helm Language packages: Java , Node.js , Python , Go OS packages: Debian , RPM Other: Kubeflow Pipeline templates Use a service account : Create a service account to act on behalf of your application, or choose an existing service account that use for your CI/CD automation.
- Container images: Docker , Helm Language packages: Java , Node.js , Python , Go OS packages: Debian , RPM You can also restrict artifact downloads with download rules .
- If you're new to using Terraform for Google Cloud, see the Get Started - Google Cloud page on the HashiCorp website. provider "google" { project = " PROJECT-ID " } resource "google artifact registry repository" "my-repo" { provider = google-beta location = " LOCATION " repository id = " REPOSITORY " description = " DESCRIPTION " format = " FORMAT " } resource "google service account" "repo-account" { provider = google-beta account id = " ACCOUNT-ID " display name = "Repository Service Account" } resource "google artifact registry repository iam member" "repo-iam" { provider = google-beta location = google artifact registry repository.my-repo.location repository = google artifact registry repository.my-repo.name role = "roles/artifactregistry.reader" member = "serviceAccount:${google service account.repo-account.email}" } ACCOUNT-ID is the ID of the service account.

