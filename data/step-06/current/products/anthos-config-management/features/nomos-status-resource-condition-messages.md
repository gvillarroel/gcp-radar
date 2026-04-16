---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.320Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos status resource condition messages"
feature_slug: "nomos-status-resource-condition-messages"
latest_feature_date: "2021-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/iam/docs/conditions-resource-attributes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors"
keywords:
  - "nomos"
  - "status"
  - "resource"
  - "condition"
  - "messages"
  - "command"
  - "surfaces"
  - "conditions"
---

# nomos status resource condition messages

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The nomos status command surfaces messages from resource conditions when managed resources are not ready or healthy.

## Extended Definition

The nomos status command surfaces messages from resource conditions when managed resources are not ready or healthy.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)

## Supporting Pages

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows you some of the different conditions that the nomos status command might report: nomos status Example output: MANAGED CLUSTER 1 -------------------- <root> git@github.com:foo-corp/acme@main SYNCED f52a11e4 Managed resources: NAMESPACE NAME STATUS k8snoexternalservices.constraints.gatekeeper.sh/no-internet-services Current namespace/hello Current MANAGED CLUSTER 2 -------------------- <root> git@github.com:foo-corp/acme@main PENDING 9edf8444 MANAGED CLUSTER 3 -------------------- <root> git@github.com:foo-corp/acme@main ERROR f52a11e4 Error: KNV1021: No CustomResourceDefinition is defined for the resource in the cluster.
- Using RootSync and RepoSync objects nomos-status-reader.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configsync.gke.io" ] resources : [ "reposyncs" , "rootsyncs" ] verbs : [ "get" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Not using RootSync and RepoSync objects apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configmanagement.gke.io" ] resources : [ "configmanagements" , "repos" ] verbs : [ "get" , "list" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Apply the nomos-status-reader.yaml file: kubectl apply -f nomos-status-reader.yaml Check for errors in the source of truth Before you commit a config to the source of truth, use the nomos vet command to check the syntax and validity of the configs in your source of truth: nomos vet --source-format unstructured If syntax errors are found, the nomos vet command exits with a non-zero status and logs error messages to STDERR . nomos vet flags To customize the nomos vet command, add the following flags: Flag Description --api-server-timeout Accepts a duration string.
- To turn off showing the resource level status, add --resources=false to the nomos status command.
- If the migration process is terminated, it can be recovered manually by running the following commands: kubectl apply -f /tmp/nomos-migrate/my managed cluster-1/cm-multi.yaml && \ kubectl wait --for condition=established crd rootsyncs.configsync.gke.io && \ kubectl apply -f /tmp/nomos-migrate/my managed cluster-1/root-sync.yaml. - Updating the ConfigManagement object .... - Waiting for the RootSync CRD to be established .... - The RootSync CRD has been established. - Creating the RootSync object .... - Waiting for the reconciler-manager Pod to be ready .... - Haven't detected running Pods with the label selector "app=reconciler-manager". - Haven't detected running Pods with the label selector "app=reconciler-manager". - Haven't detected running Pods with the label selector "app=reconciler-manager". - The reconciler-manager Pod is running. - Waiting for the root-reconciler Pod to be ready .... - Haven't detected running Pods with the label selector "configsync.gke.io/reconciler=root-reconciler". - Haven't detected running Pods with the label selector "configsync.gke.io/reconciler=root-reconciler". - Haven't detected running Pods with the label selector "configsync.gke.io/reconciler=root-reconciler". - The root-reconciler Pod is running. - The migration process is done.

### "Resource attributes for IAM Conditions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about Identity and Access Management (IAM) Conditions, see the following: Conditions overview Managing conditional role bindings Resource service values The following table lists the values that the resource service attribute can contain.
- Home Documentation Security IAM Reference Send feedback Resource attributes for IAM Conditions Stay organized with collections Save and categorize content based on your preferences.
- When a role contains permissions that apply to different kinds of resources, a condition can grant a subset of the role's permissions based on the resource service, resource type, and resource name.
- This topic contains a list of values that can be used for resource attributes in a condition, including string values for resource service, resource type, and the format for resource name strings.

### Error reference \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Change the metadata.name to satisfy the following conditions: Be shorter than 254 characters Consist of lower case alphanumeric characters, '-', or '.' Start and end with an alphanumeric character If metadata.name is invalid, and the original resource supports it, consider using the spec.resourceID field instead so that you're not restricted by these limitations.
- Wait for a sync and then confirm that the corresponding resources are still available on the cluster, but not in nomos status .
- If these errors are not transient (persisting multiple minutes), it might indicate a serious issue and nomos status reports controller fights .
- To fix it, run the following steps: Disable Config Sync , and wait until all resources are cleaned or in a stable status.

