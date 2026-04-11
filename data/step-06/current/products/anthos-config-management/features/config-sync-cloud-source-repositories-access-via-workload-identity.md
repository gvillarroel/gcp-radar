---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.250Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync Cloud Source Repositories access via Workload Identity"
feature_slug: "config-sync-cloud-source-repositories-access-via-workload-identity"
latest_feature_date: "2021-07-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
keywords:
  - "GCP service account token"
  - "Config Sync source repo credentials"
  - "Google service account access"
  - "Workload Identity enabled clusters"
  - "Cloud Source Repositories auth"
  - "GSA for Config Sync"
  - "Config Sync Workload Identity"
  - "Workload Identity"
---

# Config Sync Cloud Source Repositories access via Workload Identity

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Config Sync now supports accessing Cloud Source Repositories through a Google service account when Workload Identity is enabled.

## Extended Definition

Config Sync now supports accessing Cloud Source Repositories through a Google service account when Workload Identity is enabled.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)

## Supporting Pages

### "Grant Config Sync access to your OCI image or Helm repository \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: The Google service account option is listed as the recommended method for Cloud Source Repositories and requires Workload Identity Federation, directly supporting this access pattern.

Evidence snippets:
- To use a Kubernetes service account to grant Config Sync read-only access to your Helm repository, grant the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role to the Kubernetes service account that includes the Workload Identity Federation for GKE pool: Grant project-wide permission if the same permissions apply to all repositories in the project. gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" Grant repository-specific permission when you want service accounts to have different levels of access for each repository in your project. gcloud artifacts repositories add-iam-policy-binding REPOSITORY \ --location = LOCATION \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" \ --project = PROJECT ID Replace the following: PROJECT ID : your project ID.
- Grant the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role to the Kubernetes service account that includes the Workload Identity Federation for GKE pool: Grant project-wide permission if the same permissions apply to all repositories in the project. gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" Grant repository-specific permission when you want service accounts to have different levels of access for each repository in your project. gcloud artifacts repositories add-iam-policy-binding REPOSITORY \ --location = LOCATION \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" \ --project = PROJECT ID Replace the following: PROJECT ID : your project ID.
- Use a Compute Engine default service account As an alternative to a Google service account, if you don't have Workload Identity Federation for GKE enabled, you can use a Compute Engine service account to authenticate.
- Use a Compute Engine default service account As an alternative to a Google service account, if you don't have Workload Identity Federation for GKE enabled, you can use a Compute Engine service account to authenticate.

### Prepare your cluster for Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- If you want to use fleet packages with Config Sync, Workload Identity Federation for GKE is required.
- Public clusters If you use public clusters, but have strict VPC Firewall requirements that block any unnecessary traffic, you must Create firewall rules to permit the following traffic: TCP : Allow ingress and egress on port 53 and 443 UDP : Allow egress on port 53 If you don't include these rules, Config Sync doesn't sync correctly and nomos status reports the following error: Error: KNV2004: unable to sync repo Error in the git-sync container Cloud Source Repositories with Compute Engine default service account authentication If you are using Config Sync to connect to Cloud Source Repositories and Workload Identity Federation for GKE is not enabled, you can use the Compute Engine default service account to authenticate.
- Workload Identity Federation for GKE Workload Identity Federation for GKE is the recommended way to securely connect to Google Cloud services.
- If you installed Config Sync on GKE attached clusters , you can't use Active Directory with Workload Identity Federation.

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you are using gcpserviceaccount as the auth type and don't have Workload Identity Federation for GKE enabled, you must create an IAM policy binding between the Kubernetes service account for each namespace and the Google service account.
- If you are using gcpserviceaccount as the auth type and don't have Workload Identity Federation for GKE enabled, you must create an IAM policy binding between the Kubernetes service account for each namespace and the Google service account.
- Only select this option if Workload Identity Federation for GKE is not enabled in your cluster. gcpserviceaccount : Use a Google service account to access an image.
- Only select this option if Workload Identity Federation for GKE is not enabled in your cluster. gcpserviceaccount : Use a Google service account to access an image.

