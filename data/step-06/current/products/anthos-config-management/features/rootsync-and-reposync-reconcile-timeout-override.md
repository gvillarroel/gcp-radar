---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.312Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync and RepoSync reconcile timeout override"
feature_slug: "rootsync-and-reposync-reconcile-timeout-override"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync"
keywords:
  - "rootsync"
  - "reposync"
  - "reconcile"
  - "timeout"
  - "override"
  - "configuring"
  - "apply"
  - "group"
---

# RootSync and RepoSync reconcile timeout override

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

RootSync and RepoSync support configuring apply-group reconciliation timeout with spec.override.reconcileTimeout.

## Extended Definition

RootSync and RepoSync support configuring apply-group reconciliation timeout with spec.override.reconcileTimeout.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)

## Supporting Pages

### Champs RootSync et RepoSync | Config Sync | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- Source ID: `feature-recovery-direct-http`
- Final score: 486
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Champs RootSync et RepoSync Les objets de ressources RootSync et RepoSync ont les mêmes champs, à l'exception des champs RootSync suivants : spec.helm.namespace spec.helm.deployNamespace spec.override.roleRefs Configuration du format source Clé Description spec.sourceFormat Spécifie le format de la source de vérité.
- Champs root-sync non gérés Les champs suivants de RootSync nommé root-sync ne sont pas gérés par le service de parc (hub) et peuvent être modifiés avec n'importe quel client Kubernetes : Clé Description spec.helm Tous les champs de configuration du dépôt Helm. spec.override Tous les champs permettant de remplacer les configurations par défaut. spec.git.noSSLVerify Spécifie s'il faut activer ou désactiver la validation du certificat SSL pour Git.
- Configuration de la stratégie d'espace de noms (RootSync uniquement) Clé Description spec.override.namespaceStrategy 1 namespaceStrategy contrôle la façon dont le rapprocheur gère les configurations d'espace de noms manquantes des objets à l'échelle d'un espace de noms déclarés dans la source.
- Configuration des liaisons RBAC (RootSync uniquement) Clé Description spec.override.roleRefs 1 roleRefs est une liste de rôles ou de ClusterRoles pour lesquels créer des liaisons.

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- For example, the following output shows that a Deployment named nginx-deployment is ready: resourceStatuses: - group: apps kind: Deployment name: nginx-deployment namespace: default status: Current View logs For each RootSync and RepoSync object you create, Config Sync creates a reconciler Deployment to perform syncing.
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.
- To view the logs for the RootSync or RepoSync reconciler, run the following command: kubectl logs -n config-management-system deployment/ RECONCILER NAME CONTAINER NAME Replace the following: RECONCILER NAME : the reconciler name of the RootSync or RepoSync object.

### Customize your Config Sync installation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- If you need to override the resources for a root or namespace reconciler, you can use the spec.override.resources field in the RootSync or RepoSync object.
- You can then later use kubectl commands to create additional RootSync objects or RepoSyncs that you can fully manage using kubectl commands later. apply-spec.yaml applySpecVersion : 1 spec : configSync : enabled : true If you don't have a source of truth yet, omit the following fields.
- You can configure your RootSync or RepoSync object to sync from a Helm repository using the Kubernetes API , or declare it in another source of truth .
- In the Package details section, enter a Package name , which identifies the RootSync or RepoSync object.

