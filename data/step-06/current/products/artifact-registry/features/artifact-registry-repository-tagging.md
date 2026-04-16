---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.494Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry repository tagging"
feature_slug: "artifact-registry-repository-tagging"
latest_feature_date: "2022-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/artifact-registry/docs/access-control"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/names"
keywords:
  - "attaching"
  - "tagging"
  - "tags"
  - "repository"
  - "supports"
---

# Artifact Registry repository tagging

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry now supports attaching tags to repositories for grouping repositories and other resources across Google Cloud.

## Extended Definition

Artifact Registry now supports attaching tags to repositories for grouping repositories and other resources across Google Cloud.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/names](https://docs.cloud.google.com/artifact-registry/docs/docker/names)

## Supporting Pages

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- For example, given a repository containing the following artifacts: IMAGE: us-west1-docker.pkg.dev/my-project/release-xyz-v1 DIGEST: sha256:1b0a26bd07a3d17473d8d8468bea84015e27f87124b2831234581bce13f61370 TAGS: CREATE TIME: 2023 -06-19T18:59:09 UPDATE TIME: 2023 -06-19T18:59:10 IMAGE: us-west1-docker.pkg.dev/my-project/release-xyz-v2 DIGEST: sha256:6e494387c901caf429c1bf77bd92fb82b33a68c0e19f123456a3ac8d27a7049d TAGS: latest CREATE TIME: 2023 -06-19T18:59:09 UPDATE TIME: 2023 -06-19T18:59:09 IMAGE: us-west1-docker.pkg.dev/my-project/release-v2 DIGEST: sha256:6e494387c901caf429c1bf77bd92fb82b33a68c0e19f123456a3ac8d27a7049d TAGS: latest CREATE TIME: 2023 -06-19T18:59:09 UPDATE TIME: 2023 -06-19T18:59:09 If your Keep most recent versions policy is set to keep 3 versions of packages matching the Package prefixes : {release-xyz} , only release-xyz-v1 , and release-xyz-v2 are kept.
- To create and apply cleanup policies to your repository, see Configure cleanup policies . gcr.io domain support Artifact Registry supports hosting of images on the gcr.io domain.
- Restricting repository locations If you need to comply with regulations or policies that require you to store data in specific regions, you can include a resource locations constraint in your Google Cloud organization policy that only allows repository creation in compliant regions.
- For example, if you developers team in Australia need to download artifacts from Artifact Registry to their local workstations, a repository in an Australian region will reduce latency and incur lower egress charges than a repository located on another continent.

### Repository and image names \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/names](https://docs.cloud.google.com/artifact-registry/docs/docker/names)
- Source ID: `site-docs-root-2`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If an Artifact Registry repository is configured for immutable image tags, the following actions are not permitted: Delete a tagged image.
- In Artifact Registry, you can configure a Docker repository to allow mutable image tags or enforce immutable image tags.
- For example, consider an image with the following characteristics: Repository location: us-west1 Repository name: my-repo Project ID: my-project Image name: test Tag: staging Digest: sha256:4d11e24ba8a615cc85a535daa17b47d3c0219f7eeb2b8208896704ad7f88ae2d To identify the image with the tag, append :staging to the image name: us-west1-docker.pkg.dev/my-project/my-repo/test:staging To identify it with the digest, append @ to the image name, followed by the digest: us-west1 - docker . pkg . dev / my - project / my - repo / test @sha256 : 4 d11e24ba8a615cc85a535daa17b47d3c0219f7eeb2b8208896704ad7f88ae2d If your project ID contains a colon ( : ), see Domain-scoped projects .
- For example, consider an image with the following characteristics: Repository location: us-west1 Repository format: docker Repository name: my-repo Project ID: my-project The repository is specified as: us-west1-docker.pkg.dev/my-project/my-repo Container image names The full name for a container image is one of the following formats: LOCATION -docker.pkg.dev/ PROJECT-ID / REPOSITORY / IMAGE or LOCATION -docker.pkg.dev/ PROJECT-ID / REPOSITORY / IMAGE : TAG or LOCATION -docker.pkg.dev/ PROJECT-ID / REPOSITORY / IMAGE @ IMAGE-DIGEST where: LOCATION is the regional or multi-regional location of the repository.

### Access control with IAM \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Developers attaching tags to repositories Tagging repositories Integrating with Google Cloud services For most Google Cloud service accounts, configuring access to a registry only requires granting the appropriate IAM roles.
- For example, to remove a policy binding for the role roles/artifactregistry.writer for the user write@gmail.com with the repository my-repo in the location --us-west1 , run: gcloud artifacts repositories remove-iam-policy-binding my-repo \ --location = us-west1 \ --member = user:write@gmail.com \ --role = roles/artifactregistry.writer To revoke public access to my-repo in the location --us-west1 , run: gcloud artifacts repositories remove-iam-policy-binding my-repo \ --location = us-west1 \ --member = allUsers \ --role = roles/artifactregistry.reader Granting conditional access with tags Project administrators can create tags for resources across Google Cloud and manage them in Resource Manager .
- If you're new to using Terraform for Google Cloud, see the Get Started - Google Cloud page on the HashiCorp website. provider "google" { project = " PROJECT-ID " } resource "google artifact registry repository" "my-repo" { provider = google-beta location = " LOCATION " repository id = " REPOSITORY " description = " DESCRIPTION " format = " FORMAT " } resource "google service account" "repo-account" { provider = google-beta account id = " ACCOUNT-ID " display name = "Repository Service Account" } resource "google artifact registry repository iam member" "repo-iam" { provider = google-beta location = google artifact registry repository.my-repo.location repository = google artifact registry repository.my-repo.name role = "roles/artifactregistry.reader" member = "serviceAccount:${google service account.repo-account.email}" } ACCOUNT-ID is the ID of the service account.
- For example, to add an IAM policy binding for the role roles/artifactregistry.writer for the user write@gmail.com with the repository my-repo in the location --us-west1 , run: gcloud artifacts repositories add-iam-policy-binding my-repo \ --location = us-west1 --member = user:write@gmail.com --role = roles/artifactregistry.writer To grant roles using a policy file, use the procedure described in Grant or revoke multiple roles programmatically with the gcloud artifacts repositories get-iam-policy and gcloud artifacts repositories set-iam-policy commands.

