---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.321Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync Kustomize and Helm rendering in multi-repo mode"
feature_slug: "config-sync-kustomize-and-helm-rendering-in-multi-repo-mode"
latest_feature_date: "2021-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/multiple-environments-config-sync"
keywords:
  - "config"
  - "sync"
  - "kustomize"
  - "helm"
  - "rendering"
  - "multi"
  - "repo"
  - "mode"
---

# Config Sync Kustomize and Helm rendering in multi-repo mode

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync can render Kustomize configurations and Helm charts in multi-repo mode.

## Extended Definition

Config Sync can render Kustomize configurations and Helm charts in multi-repo mode.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/multiple-environments-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/multiple-environments-config-sync)

## Supporting Pages

### Champs RootSync et RepoSync | Config Sync | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- Source ID: `feature-recovery-direct-http`
- Final score: 270
- Re-rank relevance: N/A

Evidence snippets:
- Il est possible que toutes les erreurs rencontrées ne soient pas incluses, car Config Sync tronque les erreurs s'il y en a trop. status.rendering.errorSummary.totalCount Nombre entier indiquant le nombre total d'erreurs rencontrées lors du rendu des configurations à partir de la source de vérité. status.rendering.errorSummary.truncated Valeur booléenne indiquant si le champ status.rendering.errors inclut toutes les erreurs rencontrées lors du rendu des configurations à partir de la source de vérité. status.rendering.errorSummary.errorCountAfterTruncation Nombre entier indiquant le nombre d'erreurs dans le champ status.rendering.errors . status.sync.gitStatus.repo URL du dépôt Git en cours de synchronisation. status.sync.gitStatus.revision Révision Git (tag, commit ou hachage) en cours de synchronisation. status.sync.gitStatus.branch Branche du dépôt Git en cours de synchronisation. status.sync.gitStatus.dir Chemin d'accès absolu du dépôt Git vers le répertoire racine contenant la configuration vers laquelle vous effectuez la synchronisation. status.sync.ociStatus.image URL de l'image OCI en cours de synchronisation. status.sync.ociStatus.dir Chemin d'accès absolu de l'image OCI vers le répertoire racine contenant la configuration vers laquelle vous effectuez la synchronisation. status.sync.helmStatus.repo URL du dépôt Helm en cours de synchronisation. status.sync.helmStatus.version Version du chart Helm en cours de synchronisation. status.sync.helmStatus.chart Nom du graphique Helm en cours de synchronisation. status.sync.commit Hachage du commit ou du condensé le plus récent qui a été synchronisé avec le cluster.
- Il est possible que toutes les erreurs rencontrées ne soient pas incluses, car Config Sync les tronque s'il y en a trop. status.source.errorSummary.totalCount Entier indiquant le nombre total d'erreurs rencontrées lors de la lecture et de l'analyse des configurations à partir de la source de vérité. status.source.errorSummary.truncated Valeur booléenne indiquant si le champ status.source.errors inclut toutes les erreurs rencontrées lors de la lecture et de l'analyse des configurations à partir de la source de vérité. status.source.errorSummary.errorCountAfterTruncation Nombre entier indiquant le nombre d'erreurs dans le champ status.source.errors . status.rendering.gitStatus.repo URL du dépôt Git en cours de rendu. status.rendering.gitStatus.revision Révision Git (tag, commit ou hachage) en cours de rendu. status.rendering.gitStatus.branch Branche du dépôt Git en cours de rendu. status.rendering.gitStatus.dir Chemin d'accès absolu du dépôt Git vers le répertoire racine contenant la configuration vers laquelle vous effectuez le rendu. status.rendering.ociStatus.image URL de l'image OCI affichée. status.rendering.ociStatus.dir Chemin absolu de l'image OCI vers le répertoire racine contenant la configuration du rendu. status.rendering.helmStatus.repo URL du dépôt Helm en cours de rendu. status.rendering.helmStatus.version Version du chart Helm en cours de rendu. status.rendering.helmStatus.chart Nom du graphique Helm en cours de rendu. status.rendering.commit Hachage du commit ou du condensé le plus récent affiché.
- Champs RootSync et RepoSync | Config Sync | Google Cloud Documentation Passer au contenu principal Domaines technologiques close IA et ML Développement d'applications Hébergement d'applications Calcul Analyses de données et pipelines Bases de données Solutions distribuées, hybrides et multicloud Solutions par secteur d'activité Migration Mise en réseau Observabilité et surveillance Sécurité Storage Outils de produits croisés close Gestion des accès et des ressources Gestion des coûts et de l'utilisation Infrastructure as Code SDK, langages, frameworks et outils / Console English Deutsch Español – América Latina Français Indonesia Italiano Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Connexion Google Kubernetes Engine (GKE) Config Sync Commencer l'essai gratuit Aperçu Guides Référence Ressources Domaines technologiques Plus Aperçu Guides Référence Ressources Outils de produits croisés Plus Console Config Sync Toutes les documentations de référence Comportement des champs de configuration gcloud Champs spécifiques de la commande d'application de gcloud Documentation gcloud ConfigManagement Champs ConfigManagement Contenu du rapport de bug nomos Champs RootSync et RepoSync Libellés et annotations Informations de référence sur les erreurs Autorisations API ConfigDelivery (package de parc) Documentation de référence de l'API REST Résumé Ressources REST projects.locations Aperçu get list projects.locations.fleetPackages Aperçu create delete get list patch projects.locations.fleetPackages.rollouts Aperçu abort get list resume suspendre projects.locations.operations Aperçu annuler delete get list projects.locations.resourceBundles Aperçu create delete get list patch projects.locations.resourceBundles.releases Aperçu create delete get list patch projects.locations.resourceBundles.releases.variants Aperçu create delete get list patch Types DeletionPropagationPolicy RolloutStrategy IA et ML Développement d'applications Hébergement d'applications Calcul Analyses de données et pipelines Bases de données Solutions distribuées, hybrides et multicloud Solutions par secteur d'activité Migration Mise en réseau Observabilité et surveillance Sécurité Storage Gestion des accès et des ressources Gestion des coûts et de l'utilisation Infrastructure as Code SDK, langages, frameworks et outils Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Référence Envoyer des commentaires Champs RootSync et RepoSync Restez organisé à l'aide des collections Enregistrez et classez les contenus selon vos préférences.
- Cette valeur peut être comparée à metadata.generation, qui est un entier, et mise à jour lors de la mutation de spécifications par le serveur d'API. status.reconciler Nom du processus de rapprochement correspondant à la ressource de synchronisation. status.source.gitStatus.repo URL du dépôt Git en cours de récupération. status.source.gitStatus.revision Révision Git (tag, commit ou hachage) en cours de récupération. status.source.gitStatus.branch Branche du dépôt Git en cours de récupération. status.source.gitStatus.dir Chemin d'accès absolu du dépôt Git vers le répertoire racine contenant la configuration vers laquelle vous effectuez la synchronisation. status.source.ociStatus.image URL de l'image OCI en cours de récupération. status.source.ociStatus.dir Chemin d'accès absolu de l'image OCI vers le répertoire racine contenant la configuration vers laquelle vous effectuez la synchronisation. status.source.helmStatus.repo URL du dépôt Helm en cours de récupération. status.source.helmStatus.version Version du chart Helm récupérée. status.source.helmStatus.chart Nom du chart Helm récupéré. status.source.commit Hachage du commit ou du condensé le plus récent récupéré à partir de l'URL source. status.source.errors Erreurs rencontrées lors de la lecture et de l'analyse des configurations à partir de la source de vérité.

### Use Config Sync with Kustomize and Helm | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm)
- Source ID: `feature-recovery-direct-http`
- Final score: 247
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Google Kubernetes Engine (GKE) Config Sync Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Discover Config Sync overview GKE documentation Get started Quickstart: Sync configs from Git Prepare your cluster Authenticate Grant access to Git Grant access to OCI and Helm Install Config Sync Install Config Sync with default settings Customize your Config Sync installation Install Config Sync as a fleet default Install Config Sync manually Create a source of truth About sources of truth GitOps best practices Organize configuration files Use a hierarchical repo Safely roll out changes across multiple environments Connect Configure syncing from more than one source of truth Sync OCI artifacts from Artifact Registry Sync Helm charts from Artifact Registry Deploy across a fleet About fleet packages Quickstart: Deploy resources across a fleet Deploy fleet packages Monitor fleet packages with audit logs Use Config Sync with Kustomize About Kustomize Use Config Sync with Kustomize and Helm Use Config Sync in multiple environments with automated rendering Use Config Sync with Terraform Provision Config Sync resources with Terraform Manage team resources with Terraform Configure Configure clusters and cluster-scoped objects Configure namespace-scoped objects Manage packages Declare dependency between objects Maintain Upgrade Config Sync Prevent config drift Custom node placement Use the nomos command-line tool Validate configs with Cloud Build Configure Config Sync with kubectl commands Update Config Sync using a private registry Stop and resume syncing Uninstall Config Sync Migrate Manage existing cluster objects Breaking up a repository Migrate your ConfigManagement object Disable Hierarchy Controller Monitor Use the Config Sync dashboard Config Sync metrics Monitor Config Sync with Prometheus Monitor Config Sync with Cloud Monitoring Monitor RootSync and RepoSync objects Use Config Sync SLIs Query logs Troubleshoot Introduction to troubleshooting Config Sync architecture Error messages Known issues Troubleshoot by issue type Connecting to the source of truth Syncing configs Controller fights Permission issues with a Google service account Admission webhook AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Use Config Sync with Kustomize and Helm Stay organized with collections Save and categorize content based on your preferences.
- Without automated rendering, you have to maintain one Git repository with the original Kustomize configurations and Helm charts and another Git repository with the output generated by the external hydration.
- In this tutorial, you add Kustomize configurations that reference Helm charts to your repository and then use Config Sync to sync your cluster to your repository.
- When you use Config Sync, the Kustomize configurations and Helm charts you place in your Git repository are automatically rendered.

### "Using Config Sync in multiple environments with automated rendering \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/multiple-environments-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/multiple-environments-config-sync)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clone the sample repository: git clone https://github.com/GoogleCloudPlatform/anthos-config-management-samples.git Navigate to the folder that contains the resources that you need for this tutorial: cd anthos-config-management-samples/multi-environments-kustomize/ To run the scripts used in this tutorial, set the following variables: export DEV PROJECT = " DEV PROJECT ID " export PROD PROJECT = " PROD PROJECT ID " export DEV CLUSTER ZONE = " DEV CLUSTER ZONE " export PROD CLUSTER ZONE = " PROD CLUSTER ZONE " export CM CONFIG DIR = "config-sync-rendering" Replace the following: DEV PROJECT ID : the project ID from the Google Cloud project that you want you use as your dev project PROD PROJECT ID : the project ID from the Google Cloud project that you want you use as your prod project DEV CLUSTER ZONE : the Compute Engine zone that you want to create your dev cluster in.
- Verify your configuration In this section you check to make sure that your clusters are syncing to the configs in your repository: To check the state of your Config Sync installation, run the nomos status command : nomos status You should see that both your dev and prod clusters are now synced to their respective repos: gke DEV PROJECT ID us-central1-c dev -------------------- <root> https://github.com/GoogleCloudPlatform/anthos-config-management-samples/multi-environments-kustomize/config-source/overlays/dev@main SYNCED 8f2e196f Managed resources: NAMESPACE NAME STATUS clusterrole.rbac.authorization.k8s.io/pod-creator Current namespace/default Current namespace/foo Current default rolebinding.rbac.authorization.k8s.io/pod-creators Current foo serviceaccount/foo-ksa-dev Current gke PROD PROJECT ID us-central1-c prod -------------------- <root> https://github.com/GoogleCloudPlatform/anthos-config-management-samples/multi-environments-kustomize/config-source/overlays/prod@main SYNCED c91502ee Managed resources: NAMESPACE NAME STATUS clusterrole.rbac.authorization.k8s.io/pod-creator Current namespace/default Current namespace/foo Current default rolebinding.rbac.authorization.k8s.io/pod-creators Current foo serviceaccount/foo-ksa-prod Current ``` Use kubectl to switch to the dev cluster: kubectl config use-context "gke ${ DEV PROJECT } ${ DEV CLUSTER ZONE } dev" To verify that the resources are synced, get namespaces.
- Install or upgrade the nomos command Create and register your clusters To let you focus on the workflow that you need to use when you configure Config Sync for multiple environments, the multi-environments-kustomize directory contains scripts that you can use to automate the configuration of Config Sync.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Using Config Sync in multiple environments with automated rendering Stay organized with collections Save and categorize content based on your preferences.

