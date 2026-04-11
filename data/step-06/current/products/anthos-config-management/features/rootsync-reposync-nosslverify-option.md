---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.249Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync/RepoSync noSSLVerify option"
feature_slug: "rootsync-reposync-nosslverify-option"
latest_feature_date: "2021-08-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
keywords:
  - "skip SSL certificate check"
  - "SSL verify off"
  - "disable Git SSL verification"
  - "spec.git.noSSLVerify"
  - "RepoSync noSSLVerify"
  - "RootSync noSSLVerify"
  - "noSSLVerify"
---

# RootSync/RepoSync noSSLVerify option

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Adds a spec.git.noSSLVerify setting for RootSync and RepoSync to disable Git SSL certificate verification.

## Extended Definition

Adds a spec.git.noSSLVerify setting for RootSync and RepoSync to disable Git SSL certificate verification.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)

## Supporting Pages

### RootSync and RepoSync fields \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Unmanaged root-sync fields The following fields of the RootSync named root-sync are not managed by the Fleet (Hub) service and can be edited with any Kubernetes client: Key Description spec.helm All fields for Helm repository configuration. spec.override All fields for overriding default configurations. spec.git.noSSLVerify Specifies whether to enable or disable SSL certificate verification for Git.
- When using a hash, it must be a full hash, and not an abbreviated form. spec.git.secretRef.name The name of the Secret used to connect to the Git source of truth. spec.git.noSSLVerify 1 noSSLVerify specifies whether to enable or disable the SSL certificate verification.
- If noSSLVerify is set to true, it tells Git to skip the SSL certificate verification. spec.git.caCertSecretRef.name 1 The name of the Secret containing the certificate authority (CA) certificate.

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Use the manifest that corresponds to the source type for your configs: Git #ROOT SOURCE/namespaces/NAMESPACE/repo-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RepoSync metadata : name : REPO SYNC NAME namespace : NAMESPACE spec : sourceType : git sourceFormat : unstructured git : repo : NAMESPACE REPOSITORY revision : NAMESPACE REVISION branch : NAMESPACE BRANCH dir : " NAMESPACE DIRECTORY " auth : NAMESPACE AUTH TYPE gcpServiceAccountEmail : NAMESPACE EMAIL secretRef : name : NAMESPACE SECRET NAME noSSLVerify : NAMESPACE NO SSL VERIFY caCertSecretRef : name : NAMESPACE CA CERT SECRET NAME Replace the following: REPO SYNC NAME : add the name of your RepoSync object.
- Use the manifest that corresponds to the source type for your configs: Git #ROOT SOURCE/namespaces/NAMESPACE/repo-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RepoSync metadata : name : REPO SYNC NAME namespace : NAMESPACE spec : sourceType : git sourceFormat : unstructured git : repo : NAMESPACE REPOSITORY revision : NAMESPACE REVISION branch : NAMESPACE BRANCH dir : " NAMESPACE DIRECTORY " auth : NAMESPACE AUTH TYPE gcpServiceAccountEmail : NAMESPACE EMAIL secretRef : name : NAMESPACE SECRET NAME noSSLVerify : NAMESPACE NO SSL VERIFY caCertSecretRef : name : NAMESPACE CA CERT SECRET NAME Replace the following: REPO SYNC NAME : add the name of your RepoSync object.
- Declare a RepoSync configuration: Git #ROOT SOURCE/namespaces/NAMESPACE/repo-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RepoSync metadata : name : REPO SYNC NAME namespace : NAMESPACE spec : sourceType : git sourceFormat : unstructured git : repo : NAMESPACE REPOSITORY revision : NAMESPACE REVISION branch : NAMESPACE BRANCH dir : " NAMESPACE DIRECTORY " auth : NAMESPACE AUTH TYPE gcpServiceAccountEmail : NAMESPACE EMAIL secretRef : name : NAMESPACE SECRET NAME noSSLVerify : NAMESPACE NO SSL VERIFY caCertSecretRef : name : NAMESPACE CA CERT SECRET NAME Replace the following: REPO SYNC NAME : add the name of your RepoSync object.
- Git root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : ROOT SYNC NAME namespace : config-management-system spec : sourceType : git sourceFormat : unstructured git : repo : ROOT REPOSITORY revision : ROOT REVISION branch : ROOT BRANCH dir : ROOT DIRECTORY auth : ROOT AUTH TYPE gcpServiceAccountEmail : ROOT EMAIL secretRef : name : ROOT SECRET NAME noSSLVerify : ROOT NO SSL VERIFY caCertSecretRef : name : ROOT CA CERT SECRET NAME Replace the following: ROOT SYNC NAME : add the name of your RootSync object.

