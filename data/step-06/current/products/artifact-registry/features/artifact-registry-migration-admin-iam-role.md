---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.906Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Migration Admin IAM role"
feature_slug: "artifact-registry-migration-admin-iam-role"
latest_feature_date: "2024-11-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/access-control"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers"
  - "https://docs.cloud.google.com/artifact-registry/docs/generic/store-generic"
keywords:
  - "migration"
  - "admin"
  - "role"
  - "iam"
  - "introduces"
  - "registry"
  - "artifact"
  - "the"
---

# Artifact Registry Migration Admin IAM role

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry introduces the Container Registry to Artifact Registry Migration Admin role to simplify IAM permissions for migration.

## Extended Definition

Artifact Registry introduces the Container Registry to Artifact Registry Migration Admin role to simplify IAM permissions for migration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- [https://docs.cloud.google.com/artifact-registry/docs/generic/store-generic](https://docs.cloud.google.com/artifact-registry/docs/generic/store-generic)

## Supporting Pages

### Access control with IAM \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, to remove a policy binding for the role roles/artifactregistry.writer for the user write@gmail.com with the repository my-repo in the location --us-west1 , run: gcloud artifacts repositories remove-iam-policy-binding my-repo \ --location = us-west1 \ --member = user:write@gmail.com \ --role = roles/artifactregistry.writer To revoke public access to my-repo in the location --us-west1 , run: gcloud artifacts repositories remove-iam-policy-binding my-repo \ --location = us-west1 \ --member = allUsers \ --role = roles/artifactregistry.reader Granting conditional access with tags Project administrators can create tags for resources across Google Cloud and manage them in Resource Manager .
- If you're new to using Terraform for Google Cloud, see the Get Started - Google Cloud page on the HashiCorp website. provider "google" { project = " PROJECT-ID " } resource "google artifact registry repository" "my-repo" { provider = google-beta location = " LOCATION " repository id = " REPOSITORY " description = " DESCRIPTION " format = " FORMAT " } resource "google service account" "repo-account" { provider = google-beta account id = " ACCOUNT-ID " display name = "Repository Service Account" } resource "google artifact registry repository iam member" "repo-iam" { provider = google-beta location = google artifact registry repository.my-repo.location repository = google artifact registry repository.my-repo.name role = "roles/artifactregistry.reader" member = "serviceAccount:${google service account.repo-account.email}" } ACCOUNT-ID is the ID of the service account.
- For example, to add an IAM policy binding for the role roles/artifactregistry.writer for the user write@gmail.com with the repository my-repo in the location --us-west1 , run: gcloud artifacts repositories add-iam-policy-binding my-repo \ --location = us-west1 --member = user:write@gmail.com --role = roles/artifactregistry.writer To grant roles using a policy file, use the procedure described in Grant or revoke multiple roles programmatically with the gcloud artifacts repositories get-iam-policy and gcloud artifacts repositories set-iam-policy commands.
- For example, configure the repository my-repo in the location --us-west1 as public, run: gcloud artifacts repositories add-iam-policy-binding my-repo \ --location = us-west1 --member = allUsers --role = roles/artifactregistry.reader Set a per-user limit on Artifact Registry API requests to prevent misuse by unauthenticated users.

### "Migrate container images from a third-party registry \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Enable the Artifact Registry API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Enable the Artifact Registry API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- You must have the Owner or Editor IAM role on the projects where you are migrating images to Artifact Registry.
- Learn how to grant roles . gcloud services enable artifactregistry.googleapis.com If you don't have a Artifact Registry repository, then create a repository and configure authentication for third-party clients that require access to the repository.

### "Quickstart: Store other formats in Artifact Registry \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/generic/store-generic](https://docs.cloud.google.com/artifact-registry/docs/generic/store-generic)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable the API Required roles To get the permissions that you need to create and manage Artifact Registry package repositories, ask your administrator to grant you the Artifact Registry Administrator ( roles/artifactregistry.admin ) IAM role on your project.
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Store other formats in Artifact Registry Learn how to set up an Artifact Registry generic format repository and upload a YAML file.

