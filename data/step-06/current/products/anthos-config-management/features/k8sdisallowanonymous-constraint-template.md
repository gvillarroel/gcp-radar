---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.315Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "K8sDisallowAnonymous constraint template"
feature_slug: "k8sdisallowanonymous-constraint-template"
latest_feature_date: "2022-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize"
keywords:
  - "k8sdisallowanonymous"
  - "constraint"
  - "template"
  - "disallows"
  - "anonymous"
  - "access"
  - "configurations"
  - "kubernetes"
---

# K8sDisallowAnonymous constraint template

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

This constraint template disallows anonymous access configurations in Kubernetes resources.

## Extended Definition

This constraint template disallows anonymous access configurations in Kubernetes resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize)

## Supporting Pages

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Create, or make sure you have access to, a cluster that is on a Google Kubernetes Engine supported platform and version and meets the requirements for Config Sync .
- NAMESPACE AUTH TYPE : add one of the following authentication types: none : Use no authentication ssh : Use a SSH key pair cookiefile : Use a cookiefile token : Use a token gcpserviceaccount : Use a Google service account to access a repository in Cloud Source Repositories. gcenode : Use a Google service account to access a repository in Cloud Source Repositories.
- NAMESPACE AUTH TYPE : add one of the following authentication types: none : Use no authentication ssh : Use a SSH key pair cookiefile : Use a cookiefile token : Use a token gcpserviceaccount : Use a Google service account to access a repository in Cloud Source Repositories. gcenode : Use a Google service account to access a repository in Cloud Source Repositories.
- NAMESPACE AUTH TYPE : add one of the following authentication types: none : Use no authentication ssh : Use a SSH key pair cookiefile : Use a cookiefile token : Use a token gcpserviceaccount : Use a Google service account to access a repository in Cloud Source Repositories. gcenode : Use a Google service account to access a repository in Cloud Source Repositories.

### Grant Config Sync access to your Git repository \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Grant Config Sync access to your Git repository Stay organized with collections Save and categorize content based on your preferences.
- Config Sync requires read-only access to your source of truth so it can read your configurations, apply them to your clusters, and keep them in sync.
- Kubernetes service account OCI, Helm Uses IAM to grant Artifact Registry access directly to a Kubernetes service account.
- Grant the IAM role to the Google service account, depending on the repository type that you're using: Secure Source Manager Grant the Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor ) and Secure Source Manager Repo Reader ( roles/securesourcemanager.repoReader ) IAM roles to the Google service account: Grant project-wide permission if the same permissions apply to all repositories in the project: gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/securesourcemanager.instanceAccessor \ --member = "serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com" gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/securesourcemanager.repoReader \ --member = "serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com" Replace the following: PROJECT ID : your project ID.

### "Configure Kubernetes with Kustomize \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Kustomize is a Kubernetes configuration transformation tool that lets you customize untemplated YAML files, leaving the original files untouched.
- Ensure that your Kustomization configuration file ( kustomization.yaml , kustomization.yml , or Kustomization ) is located in the root of your directory and that all your configurations are stored in that file, not in separate files in your source of truth.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Configure Kubernetes with Kustomize Stay organized with collections Save and categorize content based on your preferences.
- Example architecture for Kustomize configurations This directory includes four overlays ( team-a , team-b , team-c , and external-team ) that reference the same base, and a file used by the ConfigMap generator.

