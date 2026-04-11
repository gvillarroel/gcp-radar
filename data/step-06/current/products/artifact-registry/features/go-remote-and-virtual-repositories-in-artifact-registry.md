---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.903Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Go remote and virtual repositories in Artifact Registry"
feature_slug: "go-remote-and-virtual-repositories-in-artifact-registry"
latest_feature_date: "2025-03-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images"
keywords:
  - "virtual"
  - "repositories"
  - "remote"
  - "go"
  - "registry"
  - "artifact"
  - "and"
  - "in"
---

# Go remote and virtual repositories in Artifact Registry

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Go remote repositories and virtual repositories in Artifact Registry reached general availability.

## Extended Definition

Go remote repositories and virtual repositories in Artifact Registry reached general availability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling](https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)

## Supporting Pages

### Push and pull images \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling](https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling)
- Source ID: `site-docs-root-2`
- Final score: 274
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To verify if the setting is enabled for the repository, run the command: gcloud artifacts repositories describe REPOSITORY \ --project = PROJECT-ID \ --location = LOCATION For the example image from the previous step, you would use the following command if the local image my-image is in the current directory: docker tag my-image us-west1-docker.pkg.dev/my-project/my-repo/test-image If you want to apply a specific tag, use the command: docker tag SOURCE-IMAGE LOCATION -docker.pkg.dev/ PROJECT-ID / REPOSITORY / IMAGE : TAG To use the tag staging with the example image, you add :staging to the command: docker tag my-image us-west1-docker.pkg.dev/my-project/my-repo/test-image:staging Push the tagged image to Artifact Registry Note: Artifact Registry does not support Docker chunked uploads .
- Use crictl to debug Kubernetes nodes Learn to use crictl to pull images from private Artifact Registry repositories Learn more about configuring crictl image registries Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Since they both have the same priority value, Artifact Registry can choose to serve an image from either repository if the version is available in both of them. test-repo has is lowest priority value and will serve a stored artifact if none of the other upstream repositories has it.
- Required roles To get the permissions that you need to push and pull images, ask your administrator to grant you the following IAM roles on the repository: Pull images: Artifact Registry Reader ( roles/artifactregistry.reader ) Tag and push images: Artifact Registry Writer ( roles/artifactregistry.writer ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Remote repository Remote repositories are read-only repositories that act as proxies to store artifacts from the following upstream sources: Standard Artifact Registry repositories.
- It can also simplify setup of virtual repositories since you only need to enable and manage a single instance of Artifact Registry.
- You can only use image streaming in GKE and Managed Service for Apache Spark if your container images are stored in Artifact Registry repositories in the same region as your workloads or a multi-region that corresponds to the region with your workloads.
- Artifact Registry enables you to store different artifact types, create multiple repositories in a single project, and associate a specific regional or multi-regional location with each repository.

### "Quickstart: Store Docker container images in Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The repository is added to the repository list. gcloud Run the following command to create a new Docker repository named quickstart-docker-repo in the location us-west1 with the description "docker repository". gcloud artifacts repositories create quickstart-docker-repo --repository-format = docker \ --location = us-west1 --description = "Docker repository" \ --project = PROJECT Where PROJECT is your Google Cloud project ID.
- For this sample image: us-docker.pkg.dev is the hostname for container images stored in Artifact Registry Docker repositories, which includes the location of the repository ( us ). google-samples is the project ID. containers is the repository ID. /gke/hello-app is the path to the image in the repository containers .
- Pull the image from Artifact Registry To pull the image from Artifact Registry onto your local machine, run the following command: docker pull us-west1-docker.pkg.dev/ PROJECT /quickstart-docker-repo/quickstart-image:tag1 Replace PROJECT with your Google Cloud project ID .
- Run the following command to verify that your repository was created. gcloud artifacts repositories list \ --project = PROJECT For more information about Artifact Registry commands, run the command gcloud artifacts .

