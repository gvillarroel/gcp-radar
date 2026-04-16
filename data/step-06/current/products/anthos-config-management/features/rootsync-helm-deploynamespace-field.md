---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.291Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync Helm deployNamespace field"
feature_slug: "rootsync-helm-deploynamespace-field"
latest_feature_date: "2023-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture"
keywords:
  - "rootsync"
  - "helm"
  - "deploynamespace"
  - "field"
  - "adds"
  - "spec"
  - "specify"
  - "namespace"
---

# RootSync Helm deployNamespace field

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The RootSync API adds the spec.helm.deployNamespace field to specify the namespace where a rendered Helm chart is deployed.

## Extended Definition

The RootSync API adds the spec.helm.deployNamespace field to specify the namespace where a rendered Helm chart is deployed.

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
- Final score: 503
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Champs RootSync et RepoSync Les objets de ressources RootSync et RepoSync ont les mêmes champs, à l'exception des champs RootSync suivants : spec.helm.namespace spec.helm.deployNamespace spec.override.roleRefs Configuration du format source Clé Description spec.sourceFormat Spécifie le format de la source de vérité.
- Champs root-sync non gérés Les champs suivants de RootSync nommé root-sync ne sont pas gérés par le service de parc (hub) et peuvent être modifiés avec n'importe quel client Kubernetes : Clé Description spec.helm Tous les champs de configuration du dépôt Helm. spec.override Tous les champs permettant de remplacer les configurations par défaut. spec.git.noSSLVerify Spécifie s'il faut activer ou désactiver la validation du certificat SSL pour Git.
- Obligatoire. spec.helm.gcpServiceAccountEmail Compte de service Google Cloud utilisé pour annoter le compte de service Kubernetes du contrôleur RootSync ou RepoSync .
- Vous pouvez utiliser spec.override pour augmenter la demande de processeur pour le conteneur helm-sync, comme dans l'exemple suivant : spec : override : resources : - containerName : helm-sync cpuRequest : "200m" spec.helm.period Durée pendant laquelle Config Sync attend avant d'extraire à nouveau le graphique.

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.
- For example, the following output shows that a Deployment named nginx-deployment is ready: resourceStatuses: - group: apps kind: Deployment name: nginx-deployment namespace: default status: Current View logs For each RootSync and RepoSync object you create, Config Sync creates a reconciler Deployment to perform syncing.
- View errors RootSync and RepoSync objects use the status field to track errors encountered when syncing the configs from the source of truth to a cluster.

### Config Sync architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RootSync and RepoSync objects RootSync objects configure Config Sync to create a root reconciler that watches the specified source of truth and apply objects from that source to the cluster.
- ResourceGroup Controller and ResourceGroup objects The root and namespace reconcilers create a ResourceGroup inventory object for each RootSync and RepoSync object you set up.
- Creating RootSync and RepoSync objects adds the following components: For each RootSync object, a reconciler Deployment named root-reconciler- ROOTSYNC NAME .
- The Reconciler Manager creates a root reconciler for every RootSync object and a namespace reconciler for every RepoSync object.

