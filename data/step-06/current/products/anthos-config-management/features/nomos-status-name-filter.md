---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.296Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos status name filter"
feature_slug: "nomos-status-name-filter"
latest_feature_date: "2023-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm"
keywords:
  - "nomos"
  - "status"
  - "name"
  - "filter"
  - "command"
  - "supports"
  - "flag"
  - "output"
---

# nomos status name filter

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The nomos status command supports a --name flag to filter status output by RootSync or RepoSync name.

## Extended Definition

The nomos status command supports a --name flag to filter status output by RootSync or RepoSync name.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm)

## Supporting Pages

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using RootSync and RepoSync objects nomos-status-reader.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configsync.gke.io" ] resources : [ "reposyncs" , "rootsyncs" ] verbs : [ "get" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Not using RootSync and RepoSync objects apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configmanagement.gke.io" ] resources : [ "configmanagements" , "repos" ] verbs : [ "get" , "list" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Apply the nomos-status-reader.yaml file: kubectl apply -f nomos-status-reader.yaml Check for errors in the source of truth Before you commit a config to the source of truth, use the nomos vet command to check the syntax and validity of the configs in your source of truth: nomos vet --source-format unstructured If syntax errors are found, the nomos vet command exits with a non-zero status and logs error messages to STDERR . nomos vet flags To customize the nomos vet command, add the following flags: Flag Description --api-server-timeout Accepts a duration string.
- The following example shows you some of the different conditions that the nomos status command might report: nomos status Example output: MANAGED CLUSTER 1 -------------------- <root> git@github.com:foo-corp/acme@main SYNCED f52a11e4 Managed resources: NAMESPACE NAME STATUS k8snoexternalservices.constraints.gatekeeper.sh/no-internet-services Current namespace/hello Current MANAGED CLUSTER 2 -------------------- <root> git@github.com:foo-corp/acme@main PENDING 9edf8444 MANAGED CLUSTER 3 -------------------- <root> git@github.com:foo-corp/acme@main ERROR f52a11e4 Error: KNV1021: No CustomResourceDefinition is defined for the resource in the cluster.
- For example: kubectl get clusterroles CLUSTER ROLE NAME -o yaml Replace CLUSTER ROLE NAME with the name of the cluster role you want to query. apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : annotations : configmanagement.gke.io/token : ed95b50dd918cf65d8908f7561cb8d8d1f179c2f nomos status flags To customize the nomos status command, add the following flags: Flag Description --contexts Accepts a comma-separated list of contexts to use in multi-cluster commands.
- For example, to query a RootSync object, run the following command: kubectl get rootsyncs.configsync.gke.io -n config-management-system root-sync -o yaml Example output: apiVersion : configsync.gke.io/v1beta1 kind : RootSync status : sync : commit : f1739af550912034139aca51e382dc50c4036ae0 lastUpdate : "2021-04-20T00:25:01Z" To query a RepoSync object, run the following command: kubectl get reposync.configsync.gke.io -n NAMESPACE repo-sync -o yaml Replace NAMESPACE with the namespace that you created your namespace source of truth in.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- To propagate the cluster name to both RootSync and RepoSync reconcilers, restart the reconciler-manager deployment: kubectl rollout restart deployment/reconciler-manager -n config-management-system Verify the sync status of the root repository You can use the nomos status command to inspect the sync status of the root repository: nomos status You should see output similar to the following example: my managed cluster-1 -------------------- <root> git@github.com:foo-corp/acme/admin@main SYNCED f52a11e4 Verify the RootSync installation When you create a RootSync object, Config Sync creates a reconciler with the root-reconciler prefix.
- You should see output similar to the following example: NAME READY UP-TO-DATE AVAILABLE AGE root-reconciler 1/1 1 1 3h42m For further ways to explore the status of your RootSync object, see Monitoring RootSync and RepoSync objects .
- This change ensures that the nomos command can always get the status of all enrolled clusters and can validate configs for them.
- This change ensures that the nomos command can always get the status of all enrolled clusters and can validate configs for them.

### Use Config Sync with Kustomize and Helm \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Verify that there no other errors by using nomos status : nomos status Example output: CLUSTER NAME -------------------- <root> https:/github.com/GoogleCloudPlatform/anthos-config-management-samples.git/helm-component/manifests@init SYNCED fd17dd5a Verify if the Helm component is successfully installed: kubectl get all -n cert-manager Example output: NAME READY STATUS RESTARTS AGE pod/my-cert-manager-54f5ccf74-wfzs4 1/1 Running 0 10m pod/my-cert-manager-cainjector-574bc8678c-rh7mq 1/1 Running 0 10m pod/my-cert-manager-webhook-7454f4c77d-rkct8 1/1 Running 0 10m NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE service/my-cert-manager ClusterIP 10.76.9.35 <none> 9402/TCP 10m service/my-cert-manager-webhook ClusterIP 10.76.11.205 <none> 443/TCP 10m NAME READY UP-TO-DATE AVAILABLE AGE deployment.apps/my-cert-manager 1/1 1 1 10m deployment.apps/my-cert-manager-cainjector 1/1 1 1 10m deployment.apps/my-cert-manager-webhook 1/1 1 1 10m NAME DESIRED CURRENT READY AGE replicaset.apps/my-cert-manager-54f5ccf74 1 1 1 10m replicaset.apps/my-cert-manager-cainjector-574bc8678c 1 1 1 10m replicaset.apps/my-cert-manager-webhook-7454f4c77d 1 1 1 10m Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Check the syntax and validity of your configs by running nomos vet with the following flags: nomos vet \ --source-format = unstructured \ --keep-output = true \ --output = OUTPUT DIRECTORY In this command: --source-format=unstructured lets nomos vet work on an unstructured repository. --keep-output=true saves the rendered configs. --output= OUTPUT DIRECTORY is the path to the rendered configs.
- Run the following nomos hydrate with the following flags: nomos hydrate \ --source-format = unstructured \ --output = OUTPUT DIRECTORY In this command: --source-format=unstructured lets nomos hydrate work on an unstructured repository.
- Delete the cert-manager namespace: git rm manifests/namespace-cert-manager.yaml \ && git commit -m "remove the cert-manager namespace" \ && git push origin BRANCH Verify that the cert-manager namespace does not exist: kubectl get namespace cert-namespace Example output: Error from server (NotFound): namespaces "cert-namespace" not found Delete the cluster To delete the cluster, complete the following commands: Console To delete a cluster using the Google Cloud console, complete the following tasks: In the Google Cloud console, go to the GKE page.

