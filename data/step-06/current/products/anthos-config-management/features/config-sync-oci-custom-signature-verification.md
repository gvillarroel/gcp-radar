---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.274Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync OCI custom signature verification"
feature_slug: "config-sync-oci-custom-signature-verification"
latest_feature_date: "2024-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
keywords:
  - "config"
  - "sync"
  - "oci"
  - "custom"
  - "signature"
  - "verification"
  - "supports"
  - "configurations"
---

# Config Sync OCI custom signature verification

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync supports custom signature verification for configurations stored in OCI repositories through an admission webhook integration.

## Extended Definition

Config Sync supports custom signature verification for configurations stored in OCI repositories through an admission webhook integration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)

## Supporting Pages

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- You can also store configurations of multiple RootSync objects in a root source of truth synced by another RootSync object, to manage multiple RootSync objects centrally in a GitOps fashion.
- OPERATOR ROLE : as the central administrator, you can set OPERATOR ROLE to enforce what kinds of configurations can be synced from the namespace-scoped source.
- Control namespace-scoped sources in a namespace-scoped source Config Sync supports syncing from more than one namespace-scoped source of truth per namespace.
- Because Config Sync manages the RootSync objects, this method prevents any local changes to RootSync configurations in the cluster.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- It must be disabled before migrating." echo "This can be done by unsetting the spec.hierarchyController field on ConfigManagement." exit 1 fi kubectl delete deployment -n config-management-system config-management-operator --ignore-not-found --cascade = foreground if kubectl get configmanagement config-management &> /dev/null ; then kubectl patch configmanagement config-management --type = "merge" -p '{"metadata":{"finalizers":[]}}' kubectl delete configmanagement config-management --cascade = orphan --ignore-not-found fi kubectl delete clusterrolebinding config-management-operator --ignore-not-found kubectl delete clusterrole config-management-operator --ignore-not-found kubectl delete serviceaccount -n config-management-system config-management-operator --ignore-not-found kubectl delete customresourcedefinition configmanagements.configmanagement.gke.io --ignore-not-found Install the new Config Sync version To upgrade Config Sync, complete the following steps for each enrolled cluster: Download the Config Sync manifest and nomos commands for the new version.
- Config Sync supports the following mechanisms for authentication: Kubernetes service account ( k8sserviceaccount ) Google service account ( gcpserviceaccount ) Compute Engine default service account ( gcenode ) Kubernetes service account You can use a Kubernetes service account as your authentication type if you store your OCI image in Artifact Registry and your cluster uses GKE Workload Identity Federation for GKE or fleet Workload Identity Federation for GKE .
- Config Sync supports the following mechanisms for authentication: Token ( token ) Kubernetes service account ( k8sserviceaccount ) Google service account ( gcpserviceaccount ) Compute Engine default service account ( gcenode ) Note: Config Sync doesn't support configuring helm as the source type using the Google Cloud console or the Google Cloud CLI.
- Config Sync supports the following mechanisms for authentication: SSH key pair ( ssh ) Cookiefile ( cookiefile ) Token ( token ) Google service account ( gcpserviceaccount ) Compute Engine default service account ( gcenode ) GitHub App ( githubapp ) The mechanism that you choose depends on what your repository supports.

### Error reference \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- If the Git repository contains Kustomize configurations, but no kustomization.yaml file exists in the Git sync directory, either add kustomization.yaml in the sync directory to trigger the rendering process, or remove kustomization.yaml from all sub directories to skip rendering.
- If you are using a custom monitoring solution , but forked the default otel-collector-googlecloud ConfigMap, check and rebase any difference. server certificate verification failed.
- You can restart the reconciler Pods by running the following commands: restart a root reconciler kubectl delete pod -n config-management-system -l configsync.gke.io/reconciler = root-reconciler restart a namespace reconciler kubectl delete pod -n config-management-system -l configsync.gke.io/reconciler = ns-reconciler-NAMESPACE KNV2016: Transient Error This error represents a transient issue that should automatically resolve at a later time.
- Common causes include: API discovery error Client-side or server-side request or response timeout Identity, authentication, or authorization error Network connectivity error Webhook denied the request Webhook unhealthy or unreachable by the API Server Config Sync retries after most API Server errors.

