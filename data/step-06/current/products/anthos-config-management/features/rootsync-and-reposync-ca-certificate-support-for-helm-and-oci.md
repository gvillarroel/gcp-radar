---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.276Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync and RepoSync CA certificate support for Helm and OCI"
feature_slug: "rootsync-and-reposync-ca-certificate-support-for-helm-and-oci"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl"
keywords:
  - "rootsync"
  - "reposync"
  - "ca"
  - "certificate"
  - "helm"
  - "oci"
  - "specifying"
  - "certificates"
---

# RootSync and RepoSync CA certificate support for Helm and OCI

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

RootSync and RepoSync support specifying CA certificates for Helm and OCI source types with the caCertSecretRef field.

## Extended Definition

RootSync and RepoSync support specifying CA certificates for Helm and OCI source types with the caCertSecretRef field.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl)

## Supporting Pages

### Champs RootSync et RepoSync | Config Sync | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- Source ID: `feature-recovery-direct-http`
- Final score: 329
- Re-rank relevance: N/A

Evidence snippets:
- Champs RootSync et RepoSync Les objets de ressources RootSync et RepoSync ont les mêmes champs, à l'exception des champs RootSync suivants : spec.helm.namespace spec.helm.deployNamespace spec.override.roleRefs Configuration du format source Clé Description spec.sourceFormat Spécifie le format de la source de vérité.
- Obligatoire. spec.helm.gcpServiceAccountEmail Compte de service Google Cloud utilisé pour annoter le compte de service Kubernetes du contrôleur RootSync ou RepoSync .
- Champs RootSync et RepoSync | Config Sync | Google Cloud Documentation Passer au contenu principal Domaines technologiques close IA et ML Développement d'applications Hébergement d'applications Calcul Analyses de données et pipelines Bases de données Solutions distribuées, hybrides et multicloud Solutions par secteur d'activité Migration Mise en réseau Observabilité et surveillance Sécurité Storage Outils de produits croisés close Gestion des accès et des ressources Gestion des coûts et de l'utilisation Infrastructure as Code SDK, langages, frameworks et outils / Console English Deutsch Español – América Latina Français Indonesia Italiano Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Connexion Google Kubernetes Engine (GKE) Config Sync Commencer l'essai gratuit Aperçu Guides Référence Ressources Domaines technologiques Plus Aperçu Guides Référence Ressources Outils de produits croisés Plus Console Config Sync Toutes les documentations de référence Comportement des champs de configuration gcloud Champs spécifiques de la commande d'application de gcloud Documentation gcloud ConfigManagement Champs ConfigManagement Contenu du rapport de bug nomos Champs RootSync et RepoSync Libellés et annotations Informations de référence sur les erreurs Autorisations API ConfigDelivery (package de parc) Documentation de référence de l'API REST Résumé Ressources REST projects.locations Aperçu get list projects.locations.fleetPackages Aperçu create delete get list patch projects.locations.fleetPackages.rollouts Aperçu abort get list resume suspendre projects.locations.operations Aperçu annuler delete get list projects.locations.resourceBundles Aperçu create delete get list patch projects.locations.resourceBundles.releases Aperçu create delete get list patch projects.locations.resourceBundles.releases.variants Aperçu create delete get list patch Types DeletionPropagationPolicy RolloutStrategy IA et ML Développement d'applications Hébergement d'applications Calcul Analyses de données et pipelines Bases de données Solutions distribuées, hybrides et multicloud Solutions par secteur d'activité Migration Mise en réseau Observabilité et surveillance Sécurité Storage Gestion des accès et des ressources Gestion des coûts et de l'utilisation Infrastructure as Code SDK, langages, frameworks et outils Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Référence Envoyer des commentaires Champs RootSync et RepoSync Restez organisé à l'aide des collections Enregistrez et classez les contenus selon vos préférences.
- RS RootSync L'exemple suivant montre un objet RootSync . # root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : sourceType : git sourceFormat : unstructured git : repo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples branch : main dir : config-sync-quickstart/multirepo/root auth : none period : 30s RS RepoSync L'exemple suivant montre un objet RepoSync. # repo-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RepoSync metadata : name : repo-sync namespace : gamestore spec : sourceType : git sourceFormat : unstructured git : repo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples branch : main dir : config-sync-quickstart/multirepo/root auth : none period : 30s Étapes suivantes Découvrez comment surveiller vos objets RootSync et RepoSync .

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.
- For example, the following output shows that a Deployment named nginx-deployment is ready: resourceStatuses: - group: apps kind: Deployment name: nginx-deployment namespace: default status: Current View logs For each RootSync and RepoSync object you create, Config Sync creates a reconciler Deployment to perform syncing.
- To view the logs for the RootSync or RepoSync reconciler, run the following command: kubectl logs -n config-management-system deployment/ RECONCILER NAME CONTAINER NAME Replace the following: RECONCILER NAME : the reconciler name of the RootSync or RepoSync object.

### Configure Config Sync with kubectl commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- If you manually created a RootSync object named root-sync using an alternate installation method, you can edit all of the fields listed in RootSync and RepoSync fields .
- If you want to create and then update RootSync or RepoSync objects directly using kubectl commands, see RootSync and RepoSync fields .
- Deleting a RootSync or RepoSync object does not clean up Config Sync annotations and labels.
- What's next Learn more about the RootSync and RepoSync fields .

