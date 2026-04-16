---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.287Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync and RepoSync Helm version range support"
feature_slug: "rootsync-and-reposync-helm-version-range-support"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture"
keywords:
  - "rootsync"
  - "reposync"
  - "helm"
  - "version"
  - "range"
  - "specifying"
  - "spec"
  - "so"
---

# RootSync and RepoSync Helm version range support

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

RootSync and RepoSync support specifying spec.helm.version as a range so Config Sync pulls the latest matching chart version.

## Extended Definition

RootSync and RepoSync support specifying spec.helm.version as a range so Config Sync pulls the latest matching chart version.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture)

## Supporting Pages

### Champs RootSync et RepoSync | Config Sync | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- Source ID: `feature-recovery-direct-http`
- Final score: 357
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Champs RootSync et RepoSync Les objets de ressources RootSync et RepoSync ont les mêmes champs, à l'exception des champs RootSync suivants : spec.helm.namespace spec.helm.deployNamespace spec.override.roleRefs Configuration du format source Clé Description spec.sourceFormat Spécifie le format de la source de vérité.
- RS RootSync L'exemple suivant montre un objet RootSync . # root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : sourceType : git sourceFormat : unstructured git : repo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples branch : main dir : config-sync-quickstart/multirepo/root auth : none period : 30s RS RepoSync L'exemple suivant montre un objet RepoSync. # repo-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RepoSync metadata : name : repo-sync namespace : gamestore spec : sourceType : git sourceFormat : unstructured git : repo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples branch : main dir : config-sync-quickstart/multirepo/root auth : none period : 30s Étapes suivantes Découvrez comment surveiller vos objets RootSync et RepoSync .
- Obligatoire. spec.helm.gcpServiceAccountEmail Compte de service Google Cloud utilisé pour annoter le compte de service Kubernetes du contrôleur RootSync ou RepoSync .
- Champs root-sync non gérés Les champs suivants de RootSync nommé root-sync ne sont pas gérés par le service de parc (hub) et peuvent être modifiés avec n'importe quel client Kubernetes : Clé Description spec.helm Tous les champs de configuration du dépôt Helm. spec.override Tous les champs permettant de remplacer les configurations par défaut. spec.git.noSSLVerify Spécifie s'il faut activer ou désactiver la validation du certificat SSL pour Git.

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.
- For example, the following output shows that a Deployment named nginx-deployment is ready: resourceStatuses: - group: apps kind: Deployment name: nginx-deployment namespace: default status: Current View logs For each RootSync and RepoSync object you create, Config Sync creates a reconciler Deployment to perform syncing.
- To view the logs for the RootSync or RepoSync reconciler, run the following command: kubectl logs -n config-management-system deployment/ RECONCILER NAME CONTAINER NAME Replace the following: RECONCILER NAME : the reconciler name of the RootSync or RepoSync object.

### Config Sync architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- RootSync and RepoSync objects RootSync objects configure Config Sync to create a root reconciler that watches the specified source of truth and apply objects from that source to the cluster.
- Deployment name CPU request (m) per replica Memory request (Mi) per replica config-management-operator 100 200 resource-group-controller-manager 110 300 admission-webhook 1 10 100 otel-collector 200 400 reconciler-manager 20 150 reconciler (one per RootSync and RepoSync) See reconciler resource requests for details.
- You can also use the initial root-sync object to manage additional RootSync or RepoSync objects with GitOps, by adding their YAML manifests to the source of truth that the root-sync is configured to sync from.
- ResourceGroup Controller and ResourceGroup objects The root and namespace reconcilers create a ResourceGroup inventory object for each RootSync and RepoSync object you set up.

