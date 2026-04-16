---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.325Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync and RepoSync Git SSL verification override"
feature_slug: "rootsync-and-reposync-git-ssl-verification-override"
latest_feature_date: "2021-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
keywords:
  - "rootsync"
  - "reposync"
  - "git"
  - "ssl"
  - "verification"
  - "override"
  - "spec"
  - "nosslverify"
---

# RootSync and RepoSync Git SSL verification override

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The spec.git.noSSLVerify field lets users disable Git SSL certificate verification.

## Extended Definition

The spec.git.noSSLVerify field lets users disable Git SSL certificate verification.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)

## Supporting Pages

### "Migrate your ConfigManagement object \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Migrate to RootSync If your ConfigManagement object is using spec.git but spec.enableMultiRepo is set to false, follow this guide to enable the RootSync and RepoSync APIs.
- ConfigManagement field RootSync field spec.git.gcpServiceAccountEmail spec.git.gcpServiceAccountEmail spec.git.syncRepo spec.git.repo spec.git.syncBranch spec.git.branch spec.git.policyDir spec.git.dir spec.git.syncWait spec.git.period spec.git.syncRev spec.git.revision spec.git.secretType spec.git.auth git-creds (this is a fixed value in ConfigManagement objects) spec.git.secretRef.name spec.sourceFormat spec.sourceFormat spec.git.proxy.httpProxy or spec.git.proxy.httpsProxy spec.git.proxy What's next Configure syncing from multiple repositories Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Your ConfigManagement object should resemble the following: config-management.yaml apiVersion : configmanagement.gke.io/v1 kind : ConfigManagement metadata : name : config-management spec : enableMultiRepo : true Apply the changes: kubectl apply -f config-management.yaml Legacy fields are now disabled without affecting the RootSync object generated from the spec.git fields of your ConfigManagement object.
- If your ConfigManagement object is using spec.git but spec.enableMultiRepo is set to false, follow the instructions to Migrate to RootSync .

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Kubernetes API method If you used the Control namespace-scoped sources of truth with the Kubernetes API method, application operators can use the following steps to remove a namespace-scoped source of truth: Decide if you'd like to delete or keep the resources that are managed through your RootSync and RepoSync objects.
- Central control method If you used the Control sources of truth in a root source of truth method, a central administrator can follow the following two steps to remove a source of truth: Decide if you'd like to delete or keep the resources that are managed through your RootSync and RepoSync objects.
- You should see output similar to the following example: NAME READY UP-TO-DATE AVAILABLE AGE root-reconciler 1/1 1 1 3h42m For further ways to explore the status of your RootSync object, see Monitoring RootSync and RepoSync objects .
- Delete the RootSync or RepoSync object by running the following command: kubectl delete -f FILE NAME Replace FILE NAME with the name of your RootSync or RepoSync configuration file.

### Configure Config Sync with kubectl commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key Description spec.helm All fields for Helm repository configuration. spec.override All fields for overriding default configurations. spec.git.noSSLVerify Specifies whether to enable or disable SSL certificate verification for Git.
- If you manually created a RootSync object named root-sync using an alternate installation method, you can edit all of the fields listed in RootSync and RepoSync fields .
- If you want to create and then update RootSync or RepoSync objects directly using kubectl commands, see RootSync and RepoSync fields .
- Deleting a RootSync or RepoSync object does not clean up Config Sync annotations and labels.

