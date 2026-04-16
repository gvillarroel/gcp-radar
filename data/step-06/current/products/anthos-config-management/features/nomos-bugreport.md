---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.349Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos bugreport"
feature_slug: "nomos-bugreport"
latest_feature_date: "2020-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages"
keywords:
  - "nomos"
  - "bugreport"
  - "command"
  - "packages"
  - "anthos"
  - "config"
  - "management"
  - "logs"
---

# nomos bugreport

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The nomos bugreport command packages Anthos Config Management logs into a ZIP file for support cases.

## Extended Definition

The nomos bugreport command packages Anthos Config Management logs into a ZIP file for support cases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages)

## Supporting Pages

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Using RootSync and RepoSync objects nomos-status-reader.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configsync.gke.io" ] resources : [ "reposyncs" , "rootsyncs" ] verbs : [ "get" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Not using RootSync and RepoSync objects apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configmanagement.gke.io" ] resources : [ "configmanagements" , "repos" ] verbs : [ "get" , "list" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Apply the nomos-status-reader.yaml file: kubectl apply -f nomos-status-reader.yaml Check for errors in the source of truth Before you commit a config to the source of truth, use the nomos vet command to check the syntax and validity of the configs in your source of truth: nomos vet --source-format unstructured If syntax errors are found, the nomos vet command exits with a non-zero status and logs error messages to STDERR . nomos vet flags To customize the nomos vet command, add the following flags: Flag Description --api-server-timeout Accepts a duration string.
- The nomos tool provides you with the following commands: Command Usage nomos status Check Config Sync status nomos vet Check for errors in the source of truth nomos hydrate View all configs in the source of truth nomos bugreport Create a bug report nomos migrate Migrate from ConfigManagement object to RootSync nomos init Initialize a hierarchical source of truth Prerequisites Before you can use the nomos tool to interact with a cluster, Config Sync must already be installed on the target cluster.
- If the migration process is terminated, it can be recovered manually by running the following commands: kubectl apply -f /tmp/nomos-migrate/my managed cluster-1/cm-multi.yaml && \ kubectl wait --for condition=established crd rootsyncs.configsync.gke.io && \ kubectl apply -f /tmp/nomos-migrate/my managed cluster-1/root-sync.yaml. - Updating the ConfigManagement object .... - Waiting for the RootSync CRD to be established .... - The RootSync CRD has been established. - Creating the RootSync object .... - Waiting for the reconciler-manager Pod to be ready .... - Haven't detected running Pods with the label selector "app=reconciler-manager". - Haven't detected running Pods with the label selector "app=reconciler-manager". - Haven't detected running Pods with the label selector "app=reconciler-manager". - The reconciler-manager Pod is running. - Waiting for the root-reconciler Pod to be ready .... - Haven't detected running Pods with the label selector "configsync.gke.io/reconciler=root-reconciler". - Haven't detected running Pods with the label selector "configsync.gke.io/reconciler=root-reconciler". - Haven't detected running Pods with the label selector "configsync.gke.io/reconciler=root-reconciler". - The root-reconciler Pod is running. - The migration process is done.
- The following table includes the most common causes of large log files and how you can resolve them: Cause Recommended action Increased log verbosity Reduce log verbosity with log level overrides Very large objects Unmanage the large object or reduce their size Many objects Split your repository into multiple repositories Controller fights Resolve the fighting Migrate from a ConfigManagement object to a RootSync object You can run the nomos migrate command to migrate from your ConfigManagement object to a RootSync object to enable the RootSync and RepoSync APIs. nomos migrate supports dry-run for previewing the migration process. nomos migrate modifies your ConfigManagement object on the cluster directly.

### nomos bugreport contents \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The nomos bugreport output file structure looks like this: - raw/ - cluster/ - configmanagement/ - namespaces/ - config-management-monitoring/ - config-management-system/ - gatekeeper-system/ - resource-group-system/ - kube-system/ - processed/ - status.txt - version.txt The information you can get from nomos bugreport : Nomos version shows the Config Sync version, the output of nomos version .
- You can get similar information from your cluster by running kubectl get or kubectl logs , but the advantage of nomos bugreport is that it creates an archive of key information about the Config Sync system.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Reference Send feedback nomos bugreport contents Stay organized with collections Save and categorize content based on your preferences.
- The nomos command-line tool helps with common administrative tasks for Config Sync, for example producing a diagnostic archive.

### Deploy fleet packages \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable the Config Sync ( anthosconfigmanagement ) API and the ConfigDelivery API: gcloud services enable anthosconfigmanagement.googleapis.com configdelivery.googleapis.com Set a default location: gcloud config set config delivery/location us-central1 Note: the only available location for the ConfigDelivery API is us-central1 .
- Create or update your FleetPackage spec with the label selector: resourceBundleSelector : cloudBuildRepository : name : projects/ PROJECT ID /locations/us-central1/connections/ CONNECTION NAME /repositories/ REPOSITORY NAME tag : TAG serviceAccount : projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID . iam.gserviceaccount.com path : CONFIG FILE PATH target : fleet : project : projects/ PROJECT ID selector : matchLabels : KEY : " VALUE " rolloutStrategy : rolling : maxConcurrent : MAX CLUSTERS Create or update the fleet package: Create a fleet package gcloud container fleet packages create FLEET PACKAGE NAME \ --source = fleetpackage-spec.yaml Update a fleet package gcloud container fleet packages update FLEET PACKAGE NAME \ --source = fleetpackage-spec.yaml Deploy variant resources to clusters You can deploy unique configurations to different clusters (for example, dev versus prod ) by adding variant definitions to your fleet package.
- Create or update the fleet package: Create a fleet package gcloud container fleet packages create FLEET PACKAGE NAME \ --source = fleetpackage-spec.yaml Update a fleet package gcloud container fleet packages update FLEET PACKAGE NAME \ --source = fleetpackage-spec.yaml Delete a fleet package Deleting a fleet package also deletes the following resources: The Kubernetes resources deployed on your clusters The fleet package rollout history To delete a fleet package, run the following command: gcloud container fleet packages delete FLEET PACKAGE NAME --force Troubleshoot To find methods for diagnosing and resolving errors related to Cloud Build, see Troubleshooting build errors .
- In the Settings tab, after a few minutes, you should see Enabled in the Status column for the clusters in your fleet. gcloud Enable the ConfigManagement fleet feature: gcloud beta container fleet config-management enable To enable Config Sync, create a file named apply-spec.yaml with the following content: applySpecVersion : 1 spec : configSync : enabled : true Apply the apply-spec.yaml file: gcloud beta container fleet config-management apply \ --membership = MEMBERSHIP NAME \ --config = apply-spec.yaml Replace MEMBERSHIP NAME with the fleet membership name that you chose when you registered your cluster.

