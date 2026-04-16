---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.319Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Bound service account token volumes"
feature_slug: "bound-service-account-token-volumes"
latest_feature_date: "2021-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts"
keywords:
  - "injected"
  - "limited"
  - "bound"
  - "token"
  - "account"
  - "volumes"
  - "time"
  - "auto"
---

# Bound service account token volumes

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Injected service account token volumes are time-limited, auto-refreshed, and invalidated when the pod is deleted; Service account token volumes are time-limited, auto-refreshed, and invalidated when the pod is deleted.

## Extended Definition

Injected service account token volumes are time-limited, auto-refreshed, and invalidated when the pod is deleted; Service account token volumes are time-limited, auto-refreshed, and invalidated when the pod is deleted.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Medium GKE on AWS Description Severity Note: This section applies to both the current and previous generation of GKE on AWS A vulnerability in the Google Secret Manager Provider for Secret Store CSI Driver allows an attacker with Pod and Secret creation permissions in a namespace to exfiltrate the CSI driver's Kubernetes service account token by mounting a malicious volume on a Pod.
- The researcher used Cloud Service Mesh's privileged Kubernetes service account token to escalate their initial compromised privileges by creating a new pod with cluster-admin privileges We have removed Fluent Bit's access to the service account tokens and have redesigned the functionality of Cloud Service Mesh to remove excess privileges.
- Medium GDC (bare metal) Description Severity A vulnerability in the Google Secret Manager Provider for Secret Store CSI Driver allows an attacker with Pod and Secret creation permissions in a namespace to exfiltrate the CSI driver's Kubernetes service account token by mounting a malicious volume on a Pod.
- Medium GDC (VMware) Description Severity A vulnerability in the Google Secret Manager Provider for Secret Store CSI Driver allows an attacker with Pod and Secret creation permissions in a namespace to exfiltrate the CSI driver's Kubernetes service account token by mounting a malicious volume on a Pod.

### GKE Autopilot security measures \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- Source ID: `site-iam-reference`
- Final score: 163
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Autopilot also rejects ValidatingAdmissionPolicy objects that specify one or more of the following resources, and any sub-resources of those resources. - group: "" resource: nodes - group: "" resource: persistentVolumes - group: certificates.k8s.io resource: certificatesigningrequests - group: authentication.k8s.io resource: tokenreviews You can't use the wildcard for resources or groups to bypass this restriction.
- Autopilot also rejects webhooks that specify one or more of the following resources, and any sub-resources of those resources. - group: "" resource: nodes - group: "" resource: persistentVolumes - group: certificates.k8s.io resource: certificatesigningrequests - group: authentication.k8s.io resource: tokenreviews You can't use the wildcard for resources or groups to bypass this restriction.
- Volume types Autopilot allows only the volume types in the Restricted policy with the following additions: HostPath volumes with read-only access to /var/log for debugging, gcePersistentDisk for Compute Engine persistent disks, and nfs for network file system volumes.
- Authenticate applications to Google Cloud APIs and services Autopilot clusters let you use Workload Identity Federation for GKE to securely authenticate your workloads to Google Cloud APIs by configuring Kubernetes service accounts to act as IAM service accounts.

### About service accounts in GKE \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts)
- Source ID: `site-docs-reference-2`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Compromised Kubernetes ServiceAccount credentials If a Kubernetes service account credential is compromised, use one of the following options to revoke the credentials: Recreate your Pods : The bearer token is bound to each unique Pod UID, so recreating the Pods invalidates the previous credentials.
- Recreate the Kubernetes service account : The bearer token is bound to the UID of the ServiceAccount object in the Kubernetes API.
- You must grant the service agents in your cluster project the following roles on the service account: Service Account Token Creator ( roles/iam.serviceAccountTokenCreator ) on the service account to the Compute Engine service agent in your cluster project.
- If your organization enforces the iam.automaticIamGrantsForDefaultServiceAccounts organization policy constraint , the default Compute Engine service account in your project might not automatically get the required permissions for GKE.

