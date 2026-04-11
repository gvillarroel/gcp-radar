---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.226Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos status --name flag"
feature_slug: "nomos-status-name-flag"
latest_feature_date: "2023-05-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
keywords:
  - "RepoSync name filter"
  - "RootSync name filter"
  - "nomos status by name"
  - "nomos status --name"
  - "status --name"
  - "--name"
  - "nomos status command"
---

# nomos status --name flag

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

The `nomos status` command added a `--name` flag to filter status output by RootSync or RepoSync name.

## Extended Definition

The `nomos status` command added a `--name` flag to filter status output by RootSync or RepoSync name.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)

## Supporting Pages

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use "" for no contexts. -h or --help Help for the nomos status command. --name Accepts a string.
- The following example shows you some of the different conditions that the nomos status command might report: nomos status Example output: MANAGED CLUSTER 1 -------------------- <root> git@github.com:foo-corp/acme@main SYNCED f52a11e4 Managed resources: NAMESPACE NAME STATUS k8snoexternalservices.constraints.gatekeeper.sh/no-internet-services Current namespace/hello Current MANAGED CLUSTER 2 -------------------- <root> git@github.com:foo-corp/acme@main PENDING 9edf8444 MANAGED CLUSTER 3 -------------------- <root> git@github.com:foo-corp/acme@main ERROR f52a11e4 Error: KNV1021: No CustomResourceDefinition is defined for the resource in the cluster.
- For example: kubectl get clusterroles CLUSTER ROLE NAME -o yaml Replace CLUSTER ROLE NAME with the name of the cluster role you want to query. apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : annotations : configmanagement.gke.io/token : ed95b50dd918cf65d8908f7561cb8d8d1f179c2f nomos status flags To customize the nomos status command, add the following flags: Flag Description --contexts Accepts a comma-separated list of contexts to use in multi-cluster commands.
- For example: nomos vet --path= PATH TO SOURCE --source-format unstructured Check Config Sync status You can monitor the status of Config Sync on all enrolled clusters by using the nomos status command.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- 1.15.2 Fixed Fixed a formatting issue in nomos status --name .
- 1.9.0 Breaking In nomos versions earlier than 1.9.0, the nomos status command reports an incorrect status for clusters using an Anthos Config Management version of 1.9.0 or later.
- 1.10.0 Fixed Fixed the issue causing nomos vet --namespace to fail because it incorrectly defaults --source-format to hierarchy .
- 1.15.0 Feature Added a --name flag to nomos status to support filtering status by RootSync or RepoSync names.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't use an HTTPS proxy, create the Secret with the following command: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace=config-management-system \ --from-file=cookie file= /path/to/COOKIEFILE If you need to use an HTTPS proxy, add it to the Secret together with cookiefile by running the following command: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace=config-management-system \ --from-file=cookie file= /path/to/COOKIEFILE \ --from-literal=https proxy= HTTPS PROXY URL Replace the following: /path/to/COOKIEFILE : the appropriate path and filename HTTPS PROXY URL : the URL for the HTTPS proxy that you use when communicating with the Git repository Note: We don't recommend using an HTTP proxy for security reasons.
- To propagate the cluster name to both RootSync and RepoSync reconcilers, restart the reconciler-manager deployment: kubectl rollout restart deployment/reconciler-manager -n config-management-system Verify the sync status of the root repository You can use the nomos status command to inspect the sync status of the root repository: nomos status You should see output similar to the following example: my managed cluster-1 -------------------- <root> git@github.com:foo-corp/acme/admin@main SYNCED f52a11e4 Verify the RootSync installation When you create a RootSync object, Config Sync creates a reconciler with the root-reconciler prefix.
- GitLab Add the private key to a new Secret in the cluster: kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace=config-management-system \ --from-file=ssh= /path/to/KEYPAIR PRIVATE KEY FILENAME Replace /path/to/KEYPAIR PRIVATE KEY FILENAME with the name of the private key (the one without the .pub suffix). (Recommended) To configure known hosts checking using SSH authentication, you can add the known hosts key to the data.known hosts field in the git creds secret.
- Add the GitHub App configuration to a new Secret in the cluster: Using Client ID kubectl create ns config-management-system && \ kubectl create secret generic git-creds \ --namespace=config-management-system \ --from-literal=github-app-client-id= CLIENT ID \ --from-literal=github-app-installation-id= INSTALLATION ID \ --from-file=github-app-private-key= /path/to/GITHUB PRIVATE KEY \ --from-literal=github-app-base-url= BASE URL Replace CLIENT ID with the client ID for the GitHub App.

