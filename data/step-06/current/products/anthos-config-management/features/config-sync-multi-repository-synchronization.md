---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.254Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync multi-repository synchronization"
feature_slug: "config-sync-multi-repository-synchronization"
latest_feature_date: "2021-04-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo"
keywords:
  - "multi-repo mode"
  - "sync from multiple repos"
  - "multiple source repos"
  - "multi-repo"
  - "Config Sync MultiRepo"
  - "multi-repository synchronization"
  - "MultiRepo"
  - "multiple Git repositories"
---

# Config Sync multi-repository synchronization

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

The ability to sync Config Sync data from multiple Git repositories reached general availability.

## Extended Definition

The ability to sync Config Sync data from multiple Git repositories reached general availability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you are using kubectl to install and manage Config Sync, you can enable multi-repo mode by setting spec.enableMultiRepo: true in your ConfigManagement object.
- 1.7.0 Issue Config Sync multi-repo mode can't update the reconciler deployment image version when upgrading from 1.6.2 or later because of a new label removed from the immutable label selector.
- 1.6.2 Issue Config Sync multi-repo mode can't update the reconciler deployment image version in the upgrade process because of a new label added to the immutable label selector.
- If you use Config Sync in multi-repo mode in private GKE clusters, you no longer need to add a firewall rule to open port 8676.

### "Quickstart: Sync configs from a Git repository \_|\_ Config Sync \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-multi-repo)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a Config Sync quickstart specifically for syncing configs from Git repositories (with a multi-repo tutorial URL), so it directly demonstrates how multi-repository synchronization is configured and used.

Evidence snippets:
- The package details page provides an overview of all synced resources, including the resource type and which namespace the resource is synced to. (Optional) Explore the sample repository The configurations applied to your cluster are defined in the /config-sync-quickstart/multirepo/ repository.
- This sample demonstrates a multi-repository setup where cluster-admin-level configurations, represented by the root repository, are separated from namespace-level configurations, represented by the namespaces repository.
- In this example, the RepoSync object points to the config-sync-quickstart/multirepo/ namespaces/gamestore directory within the same repository, but in a real-world scenario, you could point to a different Git repository.
- Connecting namespace repositories: the key file in this multi-repository setup is the reposync-gamestore.yaml file.

### "Migrate your ConfigManagement object \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the ConfigManagement object, set the spec.enableMultiRepo field to true : config-management.yaml apiVersion : configmanagement.gke.io/v1 kind : ConfigManagement metadata : name : config-management spec : enableMultiRepo : true Apply the changes: kubectl apply -f config-management.yaml Wait for the RootSync CRD to be created. kubectl wait --for = condition = established crd rootsyncs.configsync.gke.io Using the values you copied from the ConfigManagement object, create the RootSync object.
- Your ConfigManagement object should resemble the following: config-management.yaml apiVersion : configmanagement.gke.io/v1 kind : ConfigManagement metadata : name : config-management spec : enableMultiRepo : true Apply the changes: kubectl apply -f config-management.yaml Legacy fields are now disabled without affecting the RootSync object generated from the spec.git fields of your ConfigManagement object.
- Migrate to RootSync If your ConfigManagement object is using spec.git but spec.enableMultiRepo is set to false, follow this guide to enable the RootSync and RepoSync APIs.
- You need to set spec.enableMultiRepo to true in your ConfigManagement object and create a RootSync object that syncs your root repository to the cluster.

