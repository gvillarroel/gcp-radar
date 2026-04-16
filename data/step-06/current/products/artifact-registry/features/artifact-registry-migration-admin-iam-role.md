---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.479Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Migration Admin IAM role"
feature_slug: "artifact-registry-migration-admin-iam-role"
latest_feature_date: "2024-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers"
  - "https://docs.cloud.google.com/artifact-registry/docs/access-control"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images"
keywords:
  - "migration"
  - "admin"
  - "role"
  - "introduces"
  - "container"
---

# Artifact Registry Migration Admin IAM role

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry introduces the Container Registry to Artifact Registry Migration Admin role to simplify IAM permissions for migration.

## Extended Definition

Artifact Registry introduces the Container Registry to Artifact Registry Migration Admin role to simplify IAM permissions for migration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)

## Supporting Pages

### "Migrate container images from a third-party registry \_|\_ Artifact Registry\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
- Source ID: `site-docs-root-2`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable the Artifact Registry API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Enable the Artifact Registry API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Migration overview Migration of your container images includes the following steps: Set up prerequisites .
- The following example shows manifest referencing a third-party registry: apiVersion : apps/v1 kind : Deployment metadata : name : nginx-deployment spec : selector : matchLabels : app : nginx replicas : 2 template : metadata : labels : app : nginx spec : containers : - name : nginx image : nginx:1.14.2 ports : - containerPort : 80 This updated version of the manifest points to an image on us-docker.pkg.dev . apiVersion : apps/v1 kind : Deployment metadata : name : nginx-deployment spec : selector : matchLabels : app : nginx replicas : 2 template : metadata : labels : app : nginx spec : containers : - name : nginx image : us-docker.pkg.dev/<AR PROJECT>/nginx:1.14.2 ports : - containerPort : 80 For a large number of manifests, use sed or another tool that can handle updates across many text files.

### "Quickstart: Store Docker container images in Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
- Source ID: `site-docs-root-2`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Enable the API Make sure that you have the following role or roles on the project: Artifact Registry Administrator Check for the roles In the Google Cloud console, go to the IAM page.
- Enable the API Make sure that you have the following role or roles on the project: Artifact Registry Administrator Check for the roles In the Google Cloud console, go to the IAM page.

### Access control with IAM \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Role Description Container Registry -> Artifact Registry Migration Admin ( roles/artifactregistry.containerRegistryMigrationAdmin ) Includes all permissions required to run migration tooling Artifact Registry Create-on-push Writer ( roles/artifactregistry.createOnPushWriter ) Read and write artifacts.
- For example, to remove a policy binding for the role roles/artifactregistry.writer for the user write@gmail.com with the repository my-repo in the location --us-west1 , run: gcloud artifacts repositories remove-iam-policy-binding my-repo \ --location = us-west1 \ --member = user:write@gmail.com \ --role = roles/artifactregistry.writer To revoke public access to my-repo in the location --us-west1 , run: gcloud artifacts repositories remove-iam-policy-binding my-repo \ --location = us-west1 \ --member = allUsers \ --role = roles/artifactregistry.reader Granting conditional access with tags Project administrators can create tags for resources across Google Cloud and manage them in Resource Manager .
- Artifact Registry Create-on-push Repository Administrator ( roles/artifactregistry.createOnPushRepoAdmin ) Read, write, and delete artifacts.
- The following additional predefined roles contain permissions required to migrate from Container Registry to Artifact Registry .

