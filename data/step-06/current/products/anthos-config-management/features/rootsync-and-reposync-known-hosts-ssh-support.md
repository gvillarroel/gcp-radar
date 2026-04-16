---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.281Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync and RepoSync known_hosts SSH support"
feature_slug: "rootsync-and-reposync-known-hosts-ssh-support"
latest_feature_date: "2023-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl"
keywords:
  - "rootsync"
  - "reposync"
  - "known"
  - "hosts"
  - "ssh"
  - "configuration"
  - "git"
  - "connections"
---

# RootSync and RepoSync known_hosts SSH support

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

RootSync and RepoSync support known_hosts configuration for Git connections over SSH.

## Extended Definition

RootSync and RepoSync support known_hosts configuration for Git connections over SSH.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl)

## Supporting Pages

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.
- For example, the following output shows that a Deployment named nginx-deployment is ready: resourceStatuses: - group: apps kind: Deployment name: nginx-deployment namespace: default status: Current View logs For each RootSync and RepoSync object you create, Config Sync creates a reconciler Deployment to perform syncing.
- To view the logs for the RootSync or RepoSync reconciler, run the following command: kubectl logs -n config-management-system deployment/ RECONCILER NAME CONTAINER NAME Replace the following: RECONCILER NAME : the reconciler name of the RootSync or RepoSync object.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Monitor RootSync and RepoSync objects Stay organized with collections Save and categorize content based on your preferences.

### Error reference \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- To resolve this issue, first, you can verify whether the caCertSecretRef field has been configured correctly in your RootSync or RepoSync object, and also check if the Secret object exists.
- If the RepoSync applies first, the RootSync overwrites the RepoSync's object and the RepoSync reports a KNV1060 status error when it sees the update.
- A RootSync object can manage other RootSync and RepoSync objects; A RepoSync object can manage other RepoSync objects, but they cannot self-manage .
- For example, when the same object is managed by a RootSync and a RepoSync, the RootSync wins.

### Configure Config Sync with kubectl commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- If you manually created a RootSync object named root-sync using an alternate installation method, you can edit all of the fields listed in RootSync and RepoSync fields .
- If you want to create and then update RootSync or RepoSync objects directly using kubectl commands, see RootSync and RepoSync fields .
- Deleting a RootSync or RepoSync object does not clean up Config Sync annotations and labels.
- What's next Learn more about the RootSync and RepoSync fields .

