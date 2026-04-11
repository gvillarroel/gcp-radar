---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.922Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry gcr.io domain support"
feature_slug: "artifact-registry-gcr-io-domain-support"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
  - "https://docs.cloud.google.com/artifact-registry/docs/access-control"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
keywords:
  - "were"
  - "domain"
  - "gcr"
  - "io"
  - "repositories"
  - "with"
  - "registry"
  - "artifact"
---

# Artifact Registry gcr.io domain support

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry repositories with gcr.io domain support were introduced in general availability, enabling automatic redirection of gcr.io host requests.

## Extended Definition

Artifact Registry repositories with gcr.io domain support were introduced in general availability, enabling automatic redirection of gcr.io host requests.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)

## Supporting Pages

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Domain name gcr.io pkg.dev Artifact Registry can also store images for the gcr.io domain if you set up gcr.io repositories .
- Effective March 18, 2025, Container Registry is shut down and writing images to Container Registry is unavailable. gcr.io URLs hosted on Artifact Registry, including Google-owned images with gcr.io URLs, are not affected by the Container Registry shutdown.
- The initial setup includes automatic creation of Artifact Registry repositories for each Container Registry host in your project and redirection of gcr.io to the corresponding Artifact Registry repositories.
- Existing Container Registry images maintained by Google Most Google-owned images previously hosted on Container Registry are now hosted on Artifact Registry in gcr.io repositories.

### Access control with IAM \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/access-control](https://docs.cloud.google.com/artifact-registry/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, to remove a policy binding for the role roles/artifactregistry.writer for the user write@gmail.com with the repository my-repo in the location --us-west1 , run: gcloud artifacts repositories remove-iam-policy-binding my-repo \ --location = us-west1 \ --member = user:write@gmail.com \ --role = roles/artifactregistry.writer To revoke public access to my-repo in the location --us-west1 , run: gcloud artifacts repositories remove-iam-policy-binding my-repo \ --location = us-west1 \ --member = allUsers \ --role = roles/artifactregistry.reader Granting conditional access with tags Project administrators can create tags for resources across Google Cloud and manage them in Resource Manager .
- For example, to add an IAM policy binding for the role roles/artifactregistry.writer for the user write@gmail.com with the repository my-repo in the location --us-west1 , run: gcloud artifacts repositories add-iam-policy-binding my-repo \ --location = us-west1 --member = user:write@gmail.com --role = roles/artifactregistry.writer To grant roles using a policy file, use the procedure described in Grant or revoke multiple roles programmatically with the gcloud artifacts repositories get-iam-policy and gcloud artifacts repositories set-iam-policy commands.
- Granting access to Google Kubernetes Engine clusters GKE clusters and node pools can pull containers without any additional configuration if all the following requirements are met: GKE is in the same project as Artifact Registry Nodes are using the default service account, the Compute Engine default service account Nodes were created with read access to storage by: Using the Compute Engine default access scopes .
- Use the following predefined roles for repositories on the pkg.dev domain: Role Description Artifact Registry Reader ( roles/artifactregistry.reader ) View and get artifacts, view repository metadata.

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can only use image streaming in GKE and Managed Service for Apache Spark if your container images are stored in Artifact Registry repositories in the same region as your workloads or a multi-region that corresponds to the region with your workloads.
- Artifact Registry enables you to store different artifact types, create multiple repositories in a single project, and associate a specific regional or multi-regional location with each repository.
- For more information, see Transition to repositories with gcr.io domain support Project structure Your resource hierarchy is the way that you organize your resources across Google Cloud projects.
- If you are transitioning from Container Registry to Artifact Registry, you can set up gcr.io repositories Artifact Registry to minimize changes to your existing automation and workflows.

