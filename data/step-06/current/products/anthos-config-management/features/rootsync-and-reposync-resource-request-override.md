---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.314Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync and RepoSync resource request override"
feature_slug: "rootsync-and-reposync-resource-request-override"
latest_feature_date: "2022-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
keywords:
  - "rootsync"
  - "reposync"
  - "resource"
  - "request"
  - "override"
  - "spec"
  - "resources"
  - "field"
---

# RootSync and RepoSync resource request override

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The spec.override.resources field lets users override default CPU and memory requests for reconciler containers.

## Extended Definition

The spec.override.resources field lets users override default CPU and memory requests for reconciler containers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)

## Supporting Pages

### Champs RootSync et RepoSync | Config Sync | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- Source ID: `feature-recovery-direct-http`
- Final score: 544
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Champs RootSync et RepoSync Les objets de ressources RootSync et RepoSync ont les mêmes champs, à l'exception des champs RootSync suivants : spec.helm.namespace spec.helm.deployNamespace spec.override.roleRefs Configuration du format source Clé Description spec.sourceFormat Spécifie le format de la source de vérité.
- Clé Description spec.override.resources 1 Liste des remplacements de requêtes et de limites de ressources du conteneur.
- Champs ResourceGroup Champs de spécification et d'état Clé Description spec.resources Liste des identifiants (groupe, genre, espace de noms, nom) pour les ressources appliquées au cluster à partir du dépôt Git spécifié dans un RS RepoSync ou un RS RootSync .
- Champs RootSync et RepoSync | Config Sync | Google Cloud Documentation Passer au contenu principal Domaines technologiques close IA et ML Développement d'applications Hébergement d'applications Calcul Analyses de données et pipelines Bases de données Solutions distribuées, hybrides et multicloud Solutions par secteur d'activité Migration Mise en réseau Observabilité et surveillance Sécurité Storage Outils de produits croisés close Gestion des accès et des ressources Gestion des coûts et de l'utilisation Infrastructure as Code SDK, langages, frameworks et outils / Console English Deutsch Español – América Latina Français Indonesia Italiano Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Connexion Google Kubernetes Engine (GKE) Config Sync Commencer l'essai gratuit Aperçu Guides Référence Ressources Domaines technologiques Plus Aperçu Guides Référence Ressources Outils de produits croisés Plus Console Config Sync Toutes les documentations de référence Comportement des champs de configuration gcloud Champs spécifiques de la commande d'application de gcloud Documentation gcloud ConfigManagement Champs ConfigManagement Contenu du rapport de bug nomos Champs RootSync et RepoSync Libellés et annotations Informations de référence sur les erreurs Autorisations API ConfigDelivery (package de parc) Documentation de référence de l'API REST Résumé Ressources REST projects.locations Aperçu get list projects.locations.fleetPackages Aperçu create delete get list patch projects.locations.fleetPackages.rollouts Aperçu abort get list resume suspendre projects.locations.operations Aperçu annuler delete get list projects.locations.resourceBundles Aperçu create delete get list patch projects.locations.resourceBundles.releases Aperçu create delete get list patch projects.locations.resourceBundles.releases.variants Aperçu create delete get list patch Types DeletionPropagationPolicy RolloutStrategy IA et ML Développement d'applications Hébergement d'applications Calcul Analyses de données et pipelines Bases de données Solutions distribuées, hybrides et multicloud Solutions par secteur d'activité Migration Mise en réseau Observabilité et surveillance Sécurité Storage Gestion des accès et des ressources Gestion des coûts et de l'utilisation Infrastructure as Code SDK, langages, frameworks et outils Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Référence Envoyer des commentaires Champs RootSync et RepoSync Restez organisé à l'aide des collections Enregistrez et classez les contenus selon vos préférences.

### Customize your Config Sync installation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need to override the resources for a root or namespace reconciler, you can use the spec.override.resources field in the RootSync or RepoSync object.
- You can then later use kubectl commands to create additional RootSync objects or RepoSyncs that you can fully manage using kubectl commands later. apply-spec.yaml applySpecVersion : 1 spec : configSync : enabled : true If you don't have a source of truth yet, omit the following fields.
- You can configure your RootSync or RepoSync object to sync from a Helm repository using the Kubernetes API , or declare it in another source of truth .
- In the Package details section, enter a Package name , which identifies the RootSync or RepoSync object.

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- For example, the following output shows that a Deployment named nginx-deployment is ready: resourceStatuses: - group: apps kind: Deployment name: nginx-deployment namespace: default status: Current View logs For each RootSync and RepoSync object you create, Config Sync creates a reconciler Deployment to perform syncing.
- For each RootSync or RepoSync object, a ResourceGroup is generated to capture the set of resources applied to the cluster and aggregate their statuses.
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.

