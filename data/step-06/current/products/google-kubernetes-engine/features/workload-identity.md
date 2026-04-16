---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.975Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Workload Identity"
feature_slug: "workload-identity"
latest_feature_date: "2020-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets"
keywords:
  - "workload"
  - "identity"
  - "lets"
  - "workloads"
  - "gke"
  - "access"
  - "recommended"
  - "approach"
---

# Workload Identity

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Workload Identity lets workloads in GKE access Google Cloud services and is the recommended approach for that use case.

## Extended Definition

Workload Identity lets workloads in GKE access Google Cloud services and is the recommended approach for that use case.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets)

## Supporting Pages

### "About Workload Identity Federation for GKE \_|\_ GKE security \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity)
- Source ID: `site-iam-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Workload Identity Federation for GKE lets you use IAM policies to grant Kubernetes workloads in your GKE cluster access to specific Google Cloud APIs without needing manual configuration or less secure methods like service account key files.
- In most cases, Workload Identity Federation for GKE is the recommended way to help secure and manage how your workloads that run on GKE access Google Cloud services.
- Credential flow When a workload sends a request to access a Google Cloud API, for example when using a Google Cloud client library, the following authentication steps occur: Figure 1: How a workload gets a federated access token with Workload Identity Federation for GKE.
- Create IAM allow policies on Google Cloud resources To provide access with Workload Identity Federation for GKE, you create an IAM allow policy that grants access on a specific Google Cloud resource to a principal that corresponds to your application's identity.

### "Authenticate to Google Cloud APIs from GKE workloads \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Autopilot Standard This page shows you how to more securely access Google Cloud APIs from your workloads that run in Google Kubernetes Engine (GKE) clusters by using Workload Identity Federation for GKE .
- For example, to revoke access to an Artifact Registry repository, run the following command: gcloud artifacts repositories remove-iam-policy-binding REPOSITORY NAME \ --location = REPOSITORY LOCATION \ --member = 'principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/subject/ns/ NAMESPACE /sa/ KSA NAME ' \ --role = 'roles/artifactregistry.reader' \ --all Disable Workload Identity Federation for GKE You can only disable Workload Identity Federation for GKE on Standard clusters. gcloud In the Google Cloud console, activate Cloud Shell.
- Create an IAM allow policy that gives the Kubernetes ServiceAccount access to impersonate the IAM service account: gcloud iam service-accounts add-iam-policy-binding IAM SA NAME @ IAM SA PROJECT ID .iam.gserviceaccount.com \ --role roles/iam.workloadIdentityUser \ --member "serviceAccount: PROJECT ID .svc.id.goog[ NAMESPACE / KSA NAME ]" The member name must include the namespace and Kubernetes ServiceAccount name.
- Use quota from a different project with Workload Identity Federation for GKE On clusters running GKE version 1.24 or later, you can optionally configure your Kubernetes service account to use quota from a different Google Cloud project when making calls to the GenerateAccessToken and the GenerateIdToken methods in the IAM Service Account Credentials API .

### "Access secrets stored outside GKE clusters using client libraries \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use Workload Identity Federation for GKE to access any Google Cloud APIs from GKE workloads without having to use less secure approaches like static service account key files.
- Using Workload Identity Federation for GKE to access the data lets you avoid the risks associated with managing long-lived service account keys, and lets you control access to your secrets using Identity and Access Management (IAM) instead of in-cluster RBAC rules.
- Create a readonly-ns namespace and an admin-ns namespace: kubectl create namespace readonly-ns kubectl create namespace admin-ns Create a readonly-sa Kubernetes service account and an admin-sa Kubernetes service account: kubectl create serviceaccount readonly-sa --namespace = readonly-ns kubectl create serviceaccount admin-sa --namespace = admin-ns Create IAM allow policies Grant the readonly-sa service account read-only access to the secret: gcloud secrets add-iam-policy-binding bq-readonly-key \ --member = principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/subject/ns/readonly-ns/sa/readonly-sa \ --role = 'roles/secretmanager.secretAccessor' \ --condition = None Replace the following: PROJECT NUMBER : your numerical Google Cloud project number.
- Grant the admin-sa service account read-write access to the secret: gcloud secrets add-iam-policy-binding bq-readonly-key \ --member = principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/subject/ns/admin-ns/sa/admin-sa \ --role = 'roles/secretmanager.secretAccessor' \ --condition = None gcloud secrets add-iam-policy-binding bq-readonly-key \ --member = principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/subject/ns/admin-ns/sa/admin-sa \ --role = 'roles/secretmanager.secretVersionAdder' \ --condition = None Verify secret access Deploy test Pods in each namespace to verify the read-only and read-write access.

