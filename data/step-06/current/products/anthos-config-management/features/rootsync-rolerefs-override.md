---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.282Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync roleRefs override"
feature_slug: "rootsync-rolerefs-override"
latest_feature_date: "2023-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync"
keywords:
  - "rootsync"
  - "rolerefs"
  - "override"
  - "adds"
  - "spec"
  - "field"
  - "customize"
  - "root"
---

# RootSync roleRefs override

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The RootSync API adds the spec.override.roleRefs field to customize root reconciler permissions beyond cluster-admin.

## Extended Definition

The RootSync API adds the spec.override.roleRefs field to customize root reconciler permissions beyond cluster-admin.

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
- Final score: 511
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Champs RootSync et RepoSync Les objets de ressources RootSync et RepoSync ont les mêmes champs, à l'exception des champs RootSync suivants : spec.helm.namespace spec.helm.deployNamespace spec.override.roleRefs Configuration du format source Clé Description spec.sourceFormat Spécifie le format de la source de vérité.
- Configuration des liaisons RBAC (RootSync uniquement) Clé Description spec.override.roleRefs 1 roleRefs est une liste de rôles ou de ClusterRoles pour lesquels créer des liaisons.
- Champs root-sync non gérés Les champs suivants de RootSync nommé root-sync ne sont pas gérés par le service de parc (hub) et peuvent être modifiés avec n'importe quel client Kubernetes : Clé Description spec.helm Tous les champs de configuration du dépôt Helm. spec.override Tous les champs permettant de remplacer les configurations par défaut. spec.git.noSSLVerify Spécifie s'il faut activer ou désactiver la validation du certificat SSL pour Git.
- Configuration de la stratégie d'espace de noms (RootSync uniquement) Clé Description spec.override.namespaceStrategy 1 namespaceStrategy contrôle la façon dont le rapprocheur gère les configurations d'espace de noms manquantes des objets à l'échelle d'un espace de noms déclarés dans la source.

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- View errors RootSync and RepoSync objects use the status field to track errors encountered when syncing the configs from the source of truth to a cluster.
- View synced commits You can check which commit is synced to the cluster by checking the .status.sync field in the RootSync or RepoSync object.
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.

### Customize your Config Sync installation | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- Source ID: `feature-recovery-direct-http`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- If you need to override the resources for a root or namespace reconciler, you can use the spec.override.resources field in the RootSync or RepoSync object.
- You can then later use kubectl commands to create additional RootSync objects or RepoSyncs that you can fully manage using kubectl commands later. # apply-spec.yaml applySpecVersion : 1 spec : configSync : enabled : true # If you don't have a source of truth yet, omit the # following fields.
- Customize your Config Sync installation | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Google Kubernetes Engine (GKE) Config Sync Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Discover Config Sync overview GKE documentation Get started Quickstart: Sync configs from Git Prepare your cluster Authenticate Grant access to Git Grant access to OCI and Helm Install Config Sync Install Config Sync with default settings Customize your Config Sync installation Install Config Sync as a fleet default Install Config Sync manually Create a source of truth About sources of truth GitOps best practices Organize configuration files Use a hierarchical repo Safely roll out changes across multiple environments Connect Configure syncing from more than one source of truth Sync OCI artifacts from Artifact Registry Sync Helm charts from Artifact Registry Deploy across a fleet About fleet packages Quickstart: Deploy resources across a fleet Deploy fleet packages Monitor fleet packages with audit logs Use Config Sync with Kustomize About Kustomize Use Config Sync with Kustomize and Helm Use Config Sync in multiple environments with automated rendering Use Config Sync with Terraform Provision Config Sync resources with Terraform Manage team resources with Terraform Configure Configure clusters and cluster-scoped objects Configure namespace-scoped objects Manage packages Declare dependency between objects Maintain Upgrade Config Sync Prevent config drift Custom node placement Use the nomos command-line tool Validate configs with Cloud Build Configure Config Sync with kubectl commands Update Config Sync using a private registry Stop and resume syncing Uninstall Config Sync Migrate Manage existing cluster objects Breaking up a repository Migrate your ConfigManagement object Disable Hierarchy Controller Monitor Use the Config Sync dashboard Config Sync metrics Monitor Config Sync with Prometheus Monitor Config Sync with Cloud Monitoring Monitor RootSync and RepoSync objects Use Config Sync SLIs Query logs Troubleshoot Introduction to troubleshooting Config Sync architecture Error messages Known issues Troubleshoot by issue type Connecting to the source of truth Syncing configs Controller fights Permission issues with a Google service account Admission webhook AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Customize your Config Sync installation Stay organized with collections Save and categorize content based on your preferences.
- You can configure your RootSync or RepoSync object to sync from a Helm repository using the Kubernetes API , or declare it in another source of truth .

