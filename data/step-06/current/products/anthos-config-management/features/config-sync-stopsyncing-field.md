---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.274Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync stopSyncing field"
feature_slug: "config-sync-stopsyncing-field"
latest_feature_date: "2024-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
keywords:
  - "config"
  - "sync"
  - "stopsyncing"
  - "field"
  - "adds"
  - "spec"
  - "configsync"
  - "stop"
---

# Config Sync stopSyncing field

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync adds the spec.configSync.stopSyncing field to stop and resume syncing.

## Extended Definition

Config Sync adds the spec.configSync.stopSyncing field to stop and resume syncing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)

## Supporting Pages

### gcloud apply spec fields \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Config Sync always remediates drifts no matter the value of this field. spec.configSync.stopSyncing If true , stops syncing configurations for a single cluster.
- You can't use this field to override other fields in a Deployment, such as the number of replicas. applySpecVersion : 1 spec : configSync : enabled : true deploymentOverrides : - name : reconciler-manager namespace : config-management-system containers : - name : reconciler-manager cpuRequest : 50m cpuLimit : 100m memoryRequest : 256Mi memoryLimit : 512Mi Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example gcloud apply spec applySpecVersion : 1 spec : configSync : enabled : true sourceFormat : unstructured syncRepo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples syncBranch : main secretType : none policyDir : config-sync-quickstart/multirepo/root Example gcloud apply spec with deployment resource overrides If you want to customize Config Sync resource requests and limits, add the deploymentOverrides field in your apply spec.
- This field is only used when spec.configSync.secretType is gcpserviceaccount . spec.configSync.metricsGcpServiceAccountEmail Deprecated : If Workload Identity Federation for GKE is enabled, Google Cloud Service Account is not required for exporting Config Sync metrics.

### "gcloud configuration field behavior \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows a basic configuration: configSync : enabled : true sourceFormat : unstructured git : syncRepo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples syncBranch : main secretType : none policyDir : config-sync-quickstart/multirepo/root The following example shows a more complex configuration: configSync : enabled : true stopSyncing : true sourceFormat : unstructured git : syncRepo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples syncBranch : main secretType : none policyDir : config-sync-quickstart/multirepo/root deploymentOverrides : - deploymentName : reconciler-manager deploymentNamespace : config-management-system containers : - containerName : reconciler-manager cpuRequest : 50m cpuLimit : 100m memoryRequest : 256Mi memoryLimit : 512Mi Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Default field values Field Description configSync.enabled If the user specifies the configSync field, configSync.enabled defaults to true . version For the --config flag, the Config Sync version defaults to its existing value in the membership configuration, or if it's not configured, the version of Config Sync installed on the membership cluster.
- The configSync.deploymentOverrides[].deploymentName field is spec.configSync.deploymentOverrides[].name for the apply command.
- Unsupported fields The --config and --fleet-default-member-config flags on the update and enable commands error if any of the following legacy fields are set: configSync.metricsGcpServiceAccountEmail policyController hierarchyController binauthz management Example configuration files This section provides examples of configurations which can be passed to the --config and --fleet-default-member-config flags on the update and enable commands.

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- View errors RootSync and RepoSync objects use the status field to track errors encountered when syncing the configs from the source of truth to a cluster.
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.
- For example, the following output shows that a Deployment named nginx-deployment is ready: resourceStatuses: - group: apps kind: Deployment name: nginx-deployment namespace: default status: Current View logs For each RootSync and RepoSync object you create, Config Sync creates a reconciler Deployment to perform syncing.

