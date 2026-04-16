---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.326Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Management on GKE"
feature_slug: "config-management-on-gke"
latest_feature_date: "2021-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
keywords:
  - "config"
  - "management"
  - "gke"
  - "available"
  - "including"
  - "policy"
  - "controller"
  - "sync"
---

# Config Management on GKE

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Management is available on GKE, including Policy Controller support and Config Sync installation through Cloud Console or gcloud.

## Extended Definition

Config Management is available on GKE, including Policy Controller support and Config Sync installation through Cloud Console or gcloud.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)

## Supporting Pages

### Safe rollouts with Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- The K8sRequiredLabels resource is applied to clusters of type prod , with an enforcementAction parameter set to dryrun : apiVersion : constraints . gatekeeper . sh / v1beta1 kind : K8sRequiredLabels metadata : name : ns - must - have - team annotations : configmanagement . gke . io / cluster - selector : prod Spec : enforcementAction : dryrun match : kinds : - apiGroups : [ "" ] kinds : [ "Namespace" ] parameters : labels : - key : "team" The K8sRequiredLabels resource is applied to clusters of type canary-prod , without the enforcementAction parameter, meaning that the policy is actually enforced: apiVersion : constraints . gatekeeper . sh / v1beta1 kind : K8sRequiredLabels metadata : name : ns - must - have - team annotations : configmanagement . gke . io / cluster - selector : canary - prod spec : match : kinds : - apiGroups : [ "" ] kinds : [ "Namespace" ] parameters : labels : - key : "team" The configmanagement.gke.io/cluster-selector annotation allows the team to enforce the policy only in clusters of type canary-prod , preventing any unintended side-effects from spreading to the whole production fleet.
- Following are two common types of errors: Errors that pose no problem to Config Sync itself, but prevent your workloads from working properly, such as an overly restrictive NetworkPolicy that prevents components of your workload from communicating.
- Errors that make it impossible for Config Sync to apply changes to a cluster, such as an invalid Kubernetes manifest, or an object rejected by an admission controller .
- This means that files in a source control management system represent the resources (Git files, in the case of Config Sync).

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.
- To view the logs for the RootSync or RepoSync reconciler, run the following command: kubectl logs -n config-management-system deployment/ RECONCILER NAME CONTAINER NAME Replace the following: RECONCILER NAME : the reconciler name of the RootSync or RepoSync object.
- To view the reconciliation status for the RootSync object, run the following command: kubectl get resourcegroup.kpt.dev ROOT SYNC NAME -n config-management-system -o yaml Replace the ROOT SYNC NAME with the name of the RootSync object.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- It must be disabled before migrating." echo "This can be done by unsetting the spec.hierarchyController field on ConfigManagement." exit 1 fi kubectl delete deployment -n config-management-system config-management-operator --ignore-not-found --cascade = foreground if kubectl get configmanagement config-management &> /dev/null ; then kubectl patch configmanagement config-management --type = "merge" -p '{"metadata":{"finalizers":[]}}' kubectl delete configmanagement config-management --cascade = orphan --ignore-not-found fi kubectl delete clusterrolebinding config-management-operator --ignore-not-found kubectl delete clusterrole config-management-operator --ignore-not-found kubectl delete serviceaccount -n config-management-system config-management-operator --ignore-not-found kubectl delete customresourcedefinition configmanagements.configmanagement.gke.io --ignore-not-found Install the new Config Sync version To upgrade Config Sync, complete the following steps for each enrolled cluster: Download the Config Sync manifest and nomos commands for the new version.
- This binding lets the Config Sync Kubernetes service account act as the Google service account: gcloud iam service-accounts add-iam-policy-binding \ GSA NAME @ PROJECT ID .iam.gserviceaccount.com \ --role = roles/iam.workloadIdentityUser \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" \ --project = PROJECT ID Replace the following: PROJECT ID : the organization's project ID.
- Grant project-wide permission if the same permissions apply to all repositories in the project. gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" Grant repository-specific permission when you want service accounts to have different levels of access for each repository in your project. gcloud artifacts repositories add-iam-policy-binding REPOSITORY \ --location = LOCATION \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" \ --project = PROJECT ID Replace the following: PROJECT ID : the organization's project ID.
- Grant project-wide permission if the same permissions apply to all repositories in the project. gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" Grant repository-specific permission when you want service accounts to have different levels of access for each repository in your project. gcloud artifacts repositories add-iam-policy-binding REPOSITORY \ --location = LOCATION \ --role = roles/artifactregistry.reader \ --member = "serviceAccount: FLEET HOST PROJECT ID .svc.id.goog[config-management-system/ KSA NAME ]" \ --project = PROJECT ID Replace the following: PROJECT ID : the organization's project ID.

