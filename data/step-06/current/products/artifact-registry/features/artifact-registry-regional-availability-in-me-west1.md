---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.491Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry regional availability in me-west1"
feature_slug: "artifact-registry-regional-availability-in-me-west1"
latest_feature_date: "2022-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/access-control"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/authentication"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/manage-images"
keywords:
  - "west1"
  - "availability"
  - "regional"
  - "available"
  - "region"
---

# Artifact Registry regional availability in me-west1

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry is available in the me-west1 region (Tel Aviv, Israel).

## Extended Definition

Artifact Registry is available in the me-west1 region (Tel Aviv, Israel).

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/manage-images](https://docs.cloud.google.com/artifact-registry/docs/docker/manage-images)

## Supporting Pages

### "Configure authentication to Artifact Registry for Docker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- Source ID: `site-docs-root-2`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, to add the regions us-west1 and asia-northeast1 , run the command: docker-credential-gcr configure-docker --registries=us-west1-docker.pkg.dev,asia-northeast1-docker.pkg.dev The specified hostnames are added to the credential helper configuration.
- For example, to add the regions us-west1 and asia-northeast1 , run the command: gcloud auth configure-docker us-west1-docker.pkg.dev,asia-northeast1-docker.pkg.dev The specified hostnames are added to the credential helper configuration.
- Run the following command, replacing ACCOUNT with your service account email address and LOCATION with the regional or multi-regional location of the repository.
- LOCATION is the regional or multi-regional location of the repository where the image is stored.

### Access control with IAM \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the project with your cluster, create an imagePullSecret secret called artifact-registry with the service account key. kubectl create secret docker-registry artifact-registry \ --docker-server = https:// LOCATION -docker.pkg.dev \ --docker-email = SERVICE-ACCOUNT-EMAIL \ --docker-username = json key \ --docker-password = " $( cat KEY-FILE ) " Replace the following: LOCATION is the regional or multi-regional location of the repository.
- LOCATION is the regional or multi-regional location of the repository.
- LOCATION is the regional or multi-regional location of the repository.
- For example, to remove a policy binding for the role roles/artifactregistry.writer for the user write@gmail.com with the repository my-repo in the location --us-west1 , run: gcloud artifacts repositories remove-iam-policy-binding my-repo \ --location = us-west1 \ --member = user:write@gmail.com \ --role = roles/artifactregistry.writer To revoke public access to my-repo in the location --us-west1 , run: gcloud artifacts repositories remove-iam-policy-binding my-repo \ --location = us-west1 \ --member = allUsers \ --role = roles/artifactregistry.reader Granting conditional access with tags Project administrators can create tags for resources across Google Cloud and manage them in Resource Manager .

### Manage images \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/manage-images](https://docs.cloud.google.com/artifact-registry/docs/docker/manage-images)
- Source ID: `site-docs-root-2`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To list all files in the default project, repository, and location when the default values are configured : gcloud artifacts files list To list files in a specified project, repository, and location, run the command: gcloud artifacts files list \ --project = PROJECT \ --repository = REPOSITORY \ --location = LOCATION To list files for all versions of a specific container image: gcloud artifacts files list \ --project = PROJECT \ --repository = REPOSITORY \ --location = LOCATION \ --package = PACKAGE To list files for a specific container image version: gcloud artifacts files list \ --project = PROJECT \ --repository = REPOSITORY \ --location = LOCATION \ --package = PACKAGE \ --version = VERSION To list files for a specific tag: gcloud artifacts files list \ --project = PROJECT \ --repository = REPOSITORY \ --location = LOCATION \ --package = PACKAGE \ --tag = TAG Replace the following values: LOCATION : the regional or multi-regional location of the repository.
- Click an image to see its versions. gcloud To list all images in the default project, repository, and location when the default values are configured : gcloud artifacts docker images list To list images in a repository in a specific location, run the command: gcloud artifacts docker images list LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY To list all digests and tags for a specific image, run the command: gcloud artifacts docker images list LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE \ --include-tags Replace the following values: LOCATION is the regional or multi-regional location of the repository.
- In the confirmation dialog, click DELETE . gcloud To delete an image and all its tags, run the command: gcloud artifacts docker images delete LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE --delete-tags To delete a specific image version, use one of the following commands. gcloud artifacts docker images delete LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE : TAG [ --delete-tags ] or gcloud artifacts docker images delete LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE @ IMAGE-DIGEST [ --delete-tags ] Where LOCATION is the regional or multi-regional location of the repository.
- Delete the tag and then click SAVE . gcloud To delete a tag and remove it from the image, run the following command: gcloud artifacts docker tags delete LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE : TAG Replace the following: LOCATION is the regional or multi-regional location of the repository.

