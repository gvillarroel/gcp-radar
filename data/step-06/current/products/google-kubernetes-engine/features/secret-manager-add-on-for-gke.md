---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.761Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Secret Manager add-on for GKE"
feature_slug: "secret-manager-add-on-for-gke"
latest_feature_date: "2024-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster"
keywords:
  - "secret"
  - "manager"
  - "add"
  - "gke"
  - "mounts"
  - "secrets"
  - "into"
  - "kubernetes"
---

# Secret Manager add-on for GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The Secret Manager add-on mounts secrets from Secret Manager into Kubernetes Pods.

## Extended Definition

The Secret Manager add-on mounts secrets from Secret Manager into Kubernetes Pods.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)

## Supporting Pages

### "Access secrets stored outside GKE clusters using client libraries \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a readonly-ns namespace and an admin-ns namespace: kubectl create namespace readonly-ns kubectl create namespace admin-ns Create a readonly-sa Kubernetes service account and an admin-sa Kubernetes service account: kubectl create serviceaccount readonly-sa --namespace = readonly-ns kubectl create serviceaccount admin-sa --namespace = admin-ns Create IAM allow policies Grant the readonly-sa service account read-only access to the secret: gcloud secrets add-iam-policy-binding bq-readonly-key \ --member = principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/subject/ns/readonly-ns/sa/readonly-sa \ --role = 'roles/secretmanager.secretAccessor' \ --condition = None Replace the following: PROJECT NUMBER : your numerical Google Cloud project number.
- Prepare the environment Clone the GitHub repository that contains the sample files for this tutorial: git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples cd /kubernetes-engine-samples/security/wi-secrets Create a secret in Secret Manager The following example shows the data you'll use to create a secret: key=my-api-key Create a secret to store the sample data: gcloud secrets create bq-readonly-key \ --data-file = manifests/bq-readonly-key \ --ttl = 3600s This command does the following: Creates a new Secret Manager secret with the sample key in the us-central1 Google Cloud region.
- Grant the admin-sa service account read-write access to the secret: gcloud secrets add-iam-policy-binding bq-readonly-key \ --member = principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/subject/ns/admin-ns/sa/admin-sa \ --role = 'roles/secretmanager.secretAccessor' \ --condition = None gcloud secrets add-iam-policy-binding bq-readonly-key \ --member = principal://iam.googleapis.com/projects/ PROJECT NUMBER /locations/global/workloadIdentityPools/ PROJECT ID .svc.id.goog/subject/ns/admin-ns/sa/admin-sa \ --role = 'roles/secretmanager.secretVersionAdder' \ --condition = None Verify secret access Deploy test Pods in each namespace to verify the read-only and read-write access.
- Try to write new data to the secret: printf "my-second-api-key" gcloud secrets versions add bq-readonly-key --data-file = - The output is similar to the following: ERROR: (gcloud.secrets.versions.add) PERMISSION DENIED: Permission 'secretmanager.versions.add' denied for resource 'projects/PROJECT ID/secrets/bq-readonly-key' (or it may not exist).

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- The issues are: CVE-2020-8563: Secret leaks in logs for vSphere Provider kube-controller-manager CVE-2020-8564: Docker config secrets leaked when file is malformed and loglevel >= 4 CVE-2020-8565: Incomplete fix for CVE-2019-11250 in Kubernetes allows for token leak in logs when logLevel >= 9.
- The issues are: CVE-2020-8563: Secret leaks in logs for vSphere Provider kube-controller-manager CVE-2020-8564: Docker config secrets leaked when file is malformed and loglevel >= 4 CVE-2020-8565: Incomplete fix for CVE-2019-11250 in Kubernetes allows for token leak in logs when logLevel >= 9.
- The issues are: CVE-2020-8563: Secret leaks in logs for vSphere Provider kube-controller-manager CVE-2020-8564: Docker config secrets leaked when file is malformed and loglevel >= 4 CVE-2020-8565: Incomplete fix for CVE-2019-11250 in Kubernetes allows for token leak in logs when logLevel >= 9.
- In both cases, the provider allows a Kubernetes Pod to access secrets stored in Google Cloud Secret Manager as files mounted to the Pod as a volume.

### Harden your cluster's security \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- Source ID: `site-docs-reference-2`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- We recommend the following methods, in order of preference, to store and access your sensitive data: Secret Manager client libraries : programmatically access secrets from your application code by using the Secret Manager API with Workload Identity Federation for GKE.
- Store secrets outside of your cluster Recommended : use an external secret manager like Secret Manager to store sensitive data, such as API keys, outside of your cluster.
- Kubernetes Pods use the identity provided by a ServiceAccount to perform various actions, such as accessing resources in other namespaces or reading data in Secrets.
- Use Kubernetes Secrets (not recommended) : if none of the preceding options is suitable for your use case, you can store the data as Kubernetes Secrets.

