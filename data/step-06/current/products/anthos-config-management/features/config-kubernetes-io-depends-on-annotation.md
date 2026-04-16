---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.313Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "config.kubernetes.io/depends-on annotation"
feature_slug: "config-kubernetes-io-depends-on-annotation"
latest_feature_date: "2022-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects"
keywords:
  - "config"
  - "kubernetes"
  - "io"
  - "depends"
  - "annotation"
  - "lets"
  - "users"
  - "specify"
---

# config.kubernetes.io/depends-on annotation

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

This annotation lets users specify apply and delete ordering between resource objects.

## Extended Definition

This annotation lets users specify apply and delete ordering between resource objects.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects)

## Supporting Pages

### Declare dependencies between resource objects | Config Sync | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency)
- Source ID: `feature-recovery-direct-http`
- Final score: 321
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add the depends-on annotation to an object To specify a dependency, add the config.kubernetes.io/depends-on annotation on the dependent object with a value that references the dependency objects.
- For the Wordpress example, the annotation in Wordpress Deployment resembles the following: # deployment.yaml apiVersion : apps/v1 kind : Deployment metadata : name : wordpress namespace : default labels : app : wordpress annotations : config.kubernetes.io/depends-on : apps/namespaces/default/StatefulSet/wordpress-mysql When Config Sync applies the objects, it first applies the dependency, the object wordpress-mysql StatefulSet.
- More details can be found in sigs.k8s.io/cli-utils With the depends-on annotation, Config Sync not only applies objects in the order that you want, it also verifies that the dependency object is reconciled before applying the dependent object.
- Declare dependencies between resource objects | Config Sync | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Google Kubernetes Engine (GKE) Config Sync Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Discover Config Sync overview GKE documentation Get started Quickstart: Sync configs from Git Prepare your cluster Authenticate Grant access to Git Grant access to OCI and Helm Install Config Sync Install Config Sync with default settings Customize your Config Sync installation Install Config Sync as a fleet default Install Config Sync manually Create a source of truth About sources of truth GitOps best practices Organize configuration files Use a hierarchical repo Safely roll out changes across multiple environments Connect Configure syncing from more than one source of truth Sync OCI artifacts from Artifact Registry Sync Helm charts from Artifact Registry Deploy across a fleet About fleet packages Quickstart: Deploy resources across a fleet Deploy fleet packages Monitor fleet packages with audit logs Use Config Sync with Kustomize About Kustomize Use Config Sync with Kustomize and Helm Use Config Sync in multiple environments with automated rendering Use Config Sync with Terraform Provision Config Sync resources with Terraform Manage team resources with Terraform Configure Configure clusters and cluster-scoped objects Configure namespace-scoped objects Manage packages Declare dependency between objects Maintain Upgrade Config Sync Prevent config drift Custom node placement Use the nomos command-line tool Validate configs with Cloud Build Configure Config Sync with kubectl commands Update Config Sync using a private registry Stop and resume syncing Uninstall Config Sync Migrate Manage existing cluster objects Breaking up a repository Migrate your ConfigManagement object Disable Hierarchy Controller Monitor Use the Config Sync dashboard Config Sync metrics Monitor Config Sync with Prometheus Monitor Config Sync with Cloud Monitoring Monitor RootSync and RepoSync objects Use Config Sync SLIs Query logs Troubleshoot Introduction to troubleshooting Config Sync architecture Error messages Known issues Troubleshoot by issue type Connecting to the source of truth Syncing configs Controller fights Permission issues with a Google service account Admission webhook AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Declare dependencies between resource objects Stay organized with collections Save and categorize content based on your preferences.

### Manage existing cluster objects \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For objects you want Config Sync to ignore, add the config.kubernetes.io/local-config: "true" annotation to the object.
- Name: myrole Labels: app.kubernetes.io/managed-by=configmanagement.gke.io configsync.gke.io/declared-version=v1 Annotations: config.k8s.io/owning-inventory: config-management-system root-sync configmanagement.gke.io/cluster-name: my-cluster configmanagement.gke.io/managed: enabled configmanagement.gke.io/source-path: config-sync-quickstart/multirepo/root/gamestore-myrole.yaml configmanagement.gke.io/token: 747b843a7ddbd945c0616034a935cf648b58e7b5 configsync.gke.io/declared-fields: {"f:rules":{}} configsync.gke.io/git-context: {"repo":"https://github.com/GoogleCloudPlatform/anthos-config-management-samples","branch":"main","rev":"HEAD"} configsync.gke.io/manager: :root configsync.gke.io/resource-id: rbac.authorization.k8s.io role gamestore myrole PolicyRule: Resources Non-Resource URLs Resource Names Verbs --------- ----------------- -------------- ----- pods [] [] [get list ] Stop managing a managed object This example shows how to stop managing an object that Config Sync is currently managing, such as the myrole Role in Start managing an existing object .
- In addition to the configmanagement.gke.io/managed: enabled annotation and the configsync.gke.io/resource-id annotation, Config Sync applies the label app.kubernetes.io/managed-by: configmanagement.gke.io to all objects it manages.
- If you attempt to apply the annotation manually (either using the kubectl command or the Kubernetes API), Config Sync overrides the manual automatically with the contents of your repo.

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- For example: kubectl get clusterroles CLUSTER ROLE NAME -o yaml Replace CLUSTER ROLE NAME with the name of the cluster role you want to query. apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : annotations : configmanagement.gke.io/token : ed95b50dd918cf65d8908f7561cb8d8d1f179c2f nomos status flags To customize the nomos status command, add the following flags: Flag Description --contexts Accepts a comma-separated list of contexts to use in multi-cluster commands.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Use the nomos command-line tool Stay organized with collections Save and categorize content based on your preferences.
- However, not every resource in the cluster is affected by each commit; to see the most recent commit for a specific resource, query the specific resource and look at metadata.annotations.configmanagement.gke.io/token .
- Because the nomos tool by default understands core Kubernetes types and Config Sync CRDs, it only tries to connect to the API Server if CRs don't have a corresponding declared CRD.

