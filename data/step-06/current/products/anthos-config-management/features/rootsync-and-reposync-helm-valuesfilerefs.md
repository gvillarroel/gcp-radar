---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.287Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync and RepoSync Helm valuesFileRefs"
feature_slug: "rootsync-and-reposync-helm-valuesfilerefs"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
keywords:
  - "rootsync"
  - "reposync"
  - "helm"
  - "valuesfilerefs"
  - "add"
  - "spec"
  - "field"
  - "use"
---

# RootSync and RepoSync Helm valuesFileRefs

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

RootSync and RepoSync add the spec.helm.valuesFileRefs field to use Helm values files stored in ConfigMaps.

## Extended Definition

RootSync and RepoSync add the spec.helm.valuesFileRefs field to use Helm values files stored in ConfigMaps.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)

## Supporting Pages

### Champs RootSync et RepoSync | Config Sync | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- Source ID: `feature-recovery-direct-http`
- Final score: 531
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Champs RootSync et RepoSync Les objets de ressources RootSync et RepoSync ont les mêmes champs, à l'exception des champs RootSync suivants : spec.helm.namespace spec.helm.deployNamespace spec.override.roleRefs Configuration du format source Clé Description spec.sourceFormat Spécifie le format de la source de vérité.
- Obligatoire. spec.helm.gcpServiceAccountEmail Compte de service Google Cloud utilisé pour annoter le compte de service Kubernetes du contrôleur RootSync ou RepoSync .
- Champs root-sync non gérés Les champs suivants de RootSync nommé root-sync ne sont pas gérés par le service de parc (hub) et peuvent être modifiés avec n'importe quel client Kubernetes : Clé Description spec.helm Tous les champs de configuration du dépôt Helm. spec.override Tous les champs permettant de remplacer les configurations par défaut. spec.git.noSSLVerify Spécifie s'il faut activer ou désactiver la validation du certificat SSL pour Git.
- Vous pouvez utiliser spec.override pour augmenter la demande de processeur pour le conteneur helm-sync, comme dans l'exemple suivant : spec : override : resources : - containerName : helm-sync cpuRequest : "200m" spec.helm.period Durée pendant laquelle Config Sync attend avant d'extraire à nouveau le graphique.

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- View errors RootSync and RepoSync objects use the status field to track errors encountered when syncing the configs from the source of truth to a cluster.
- View synced commits You can check which commit is synced to the cluster by checking the .status.sync field in the RootSync or RepoSync object.
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.

### Configure Config Sync with kubectl commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key Description spec.helm All fields for Helm repository configuration. spec.override All fields for overriding default configurations. spec.git.noSSLVerify Specifies whether to enable or disable SSL certificate verification for Git.
- If you manually created a RootSync object named root-sync using an alternate installation method, you can edit all of the fields listed in RootSync and RepoSync fields .
- If you want to create and then update RootSync or RepoSync objects directly using kubectl commands, see RootSync and RepoSync fields .
- What's next Learn more about the RootSync and RepoSync fields .

