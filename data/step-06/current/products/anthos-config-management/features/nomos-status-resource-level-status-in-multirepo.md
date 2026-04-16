---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.327Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos status resource-level status in MultiRepo"
feature_slug: "nomos-status-resource-level-status-in-multirepo"
latest_feature_date: "2021-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync"
keywords:
  - "nomos"
  - "status"
  - "resource"
  - "level"
  - "multirepo"
  - "command"
  - "shows"
  - "when"
---

# nomos status resource-level status in MultiRepo

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The nomos status command shows resource-level status when MultiRepo is enabled.

## Extended Definition

The nomos status command shows resource-level status when MultiRepo is enabled.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)

## Supporting Pages

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If true , nomos status shows the resource level status for your root or namespace source of truth when syncing from more than one source of truth.
- The following example shows you some of the different conditions that the nomos status command might report: nomos status Example output: MANAGED CLUSTER 1 -------------------- <root> git@github.com:foo-corp/acme@main SYNCED f52a11e4 Managed resources: NAMESPACE NAME STATUS k8snoexternalservices.constraints.gatekeeper.sh/no-internet-services Current namespace/hello Current MANAGED CLUSTER 2 -------------------- <root> git@github.com:foo-corp/acme@main PENDING 9edf8444 MANAGED CLUSTER 3 -------------------- <root> git@github.com:foo-corp/acme@main ERROR f52a11e4 Error: KNV1021: No CustomResourceDefinition is defined for the resource in the cluster.
- To turn off showing the resource level status, add --resources=false to the nomos status command.
- Using RootSync and RepoSync objects nomos-status-reader.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configsync.gke.io" ] resources : [ "reposyncs" , "rootsyncs" ] verbs : [ "get" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Not using RootSync and RepoSync objects apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configmanagement.gke.io" ] resources : [ "configmanagements" , "repos" ] verbs : [ "get" , "list" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Apply the nomos-status-reader.yaml file: kubectl apply -f nomos-status-reader.yaml Check for errors in the source of truth Before you commit a config to the source of truth, use the nomos vet command to check the syntax and validity of the configs in your source of truth: nomos vet --source-format unstructured If syntax errors are found, the nomos vet command exits with a non-zero status and logs error messages to STDERR . nomos vet flags To customize the nomos vet command, add the following flags: Flag Description --api-server-timeout Accepts a duration string.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To propagate the cluster name to both RootSync and RepoSync reconcilers, restart the reconciler-manager deployment: kubectl rollout restart deployment/reconciler-manager -n config-management-system Verify the sync status of the root repository You can use the nomos status command to inspect the sync status of the root repository: nomos status You should see output similar to the following example: my managed cluster-1 -------------------- <root> git@github.com:foo-corp/acme/admin@main SYNCED f52a11e4 Verify the RootSync installation When you create a RootSync object, Config Sync creates a reconciler with the root-reconciler prefix.
- It must be disabled before migrating." echo "This can be done by unsetting the spec.hierarchyController field on ConfigManagement." exit 1 fi kubectl delete deployment -n config-management-system config-management-operator --ignore-not-found --cascade = foreground if kubectl get configmanagement config-management &> /dev/null ; then kubectl patch configmanagement config-management --type = "merge" -p '{"metadata":{"finalizers":[]}}' kubectl delete configmanagement config-management --cascade = orphan --ignore-not-found fi kubectl delete clusterrolebinding config-management-operator --ignore-not-found kubectl delete clusterrole config-management-operator --ignore-not-found kubectl delete serviceaccount -n config-management-system config-management-operator --ignore-not-found kubectl delete customresourcedefinition configmanagements.configmanagement.gke.io --ignore-not-found Install the new Config Sync version To upgrade Config Sync, complete the following steps for each enrolled cluster: Download the Config Sync manifest and nomos commands for the new version.
- Grant project-wide permission if the same permissions apply to all repositories in the project. gcloud projects add-iam-policy-binding PROJECT ID \ --role = roles/source.reader \ --member = "serviceAccount: GSA NAME @ PROJECT ID .iam.gserviceaccount.com" Grant repository-specific permission when you want service accounts to have different levels of access for each repository in your project. gcloud source repos set-iam-policy REPOSITORY POLICY FILE --project = PROJECT ID Secure Source Manager Grant the Secure Source Manager Instance Accessor ( roles/securesourcemanager.instanceAccessor ) and Secure Source Manager Repo Reader ( roles/securesourcemanager.repoReader ) IAM roles to the Google service account.
- This change ensures that the nomos command can always get the status of all enrolled clusters and can validate configs for them.

### Customize your Config Sync installation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Verify the installation After you install and configure Config Sync, you can verify that the installation completed successfully. gcloud Run the following command: nomos status A successful installation shows a status of SYNCED or PENDING .
- For more details about the information supplied by nomos status , including reported errors, see Check Config Sync status in the nomos command-line tool documentation. console Complete the following steps: In the Google Cloud console, go to the Config page under the Features section.
- The following example shows how to use the deploymentOverrides field to set a new CPU request and limit and a new memory request and limit for the reconciler-manager container: applySpecVersion : 1 spec : configSync : enabled : true ... other fields... deploymentOverrides : - name : reconciler-manager namespace : config-management-system containers : - name : reconciler-manager cpuRequest : 50m cpuLimit : 100m memoryRequest : 256Mi memoryLimit : 512Mi After you have create your apply-spec.yaml file, apply it by running the following command: gcloud beta container fleet config-management apply \ --membership = MEMBERSHIP NAME \ --config = apply-spec.yaml \ --project = PROJECT ID For a complete list of the fields that you can override, see the gcloud apply spec fields reference documentation .
- If you are using an existing manifest, you should apply the file to the cluster that you want to configure with the settings that you fetched in the previous command: gcloud beta container fleet config-management apply \ --membership = MEMBERSHIP NAME \ --config = CONFIG YAML PATH \ --project = PROJECT ID Replace the following: MEMBERSHIP NAME : the fleet membership name that you chose when you registered your cluster.

