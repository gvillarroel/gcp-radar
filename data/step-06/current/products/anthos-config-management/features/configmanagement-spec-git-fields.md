---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.291Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "ConfigManagement spec.git fields"
feature_slug: "configmanagement-spec-git-fields"
latest_feature_date: "2023-05-05"
deprecation_date: "2024-05-15"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync"
keywords:
  - "configmanagement"
  - "spec"
  - "git"
  - "fields"
  - "object"
  - "provide"
  - "based"
  - "sync"
---

# ConfigManagement spec.git fields

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The ConfigManagement object's spec.git fields provide Git-based sync configuration that is being replaced by the RootSync API; deprecated on 2024-05-15.

## Extended Definition

The ConfigManagement object's spec.git fields provide Git-based sync configuration that is being replaced by the RootSync API; deprecated on 2024-05-15.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)

## Supporting Pages

### "Migrate your ConfigManagement object \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo)
- Source ID: `site-docs-root`
- Final score: 358
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Your ConfigManagement object should resemble the following: config-management.yaml apiVersion : configmanagement.gke.io/v1 kind : ConfigManagement metadata : name : config-management spec : enableMultiRepo : true Apply the changes: kubectl apply -f config-management.yaml Legacy fields are now disabled without affecting the RootSync object generated from the spec.git fields of your ConfigManagement object.
- ConfigManagement field RootSync field spec.git.gcpServiceAccountEmail spec.git.gcpServiceAccountEmail spec.git.syncRepo spec.git.repo spec.git.syncBranch spec.git.branch spec.git.policyDir spec.git.dir spec.git.syncWait spec.git.period spec.git.syncRev spec.git.revision spec.git.secretType spec.git.auth git-creds (this is a fixed value in ConfigManagement objects) spec.git.secretRef.name spec.sourceFormat spec.sourceFormat spec.git.proxy.httpProxy or spec.git.proxy.httpsProxy spec.git.proxy What's next Configure syncing from multiple repositories Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Migrate to RootSync If your ConfigManagement object is using spec.git but spec.enableMultiRepo is set to false, follow this guide to enable the RootSync and RepoSync APIs.
- If your ConfigManagement object is using spec.git but spec.enableMultiRepo is set to false, follow the instructions to Migrate to RootSync .

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Secret's name must match the spec.git.secretRef name you defined in repo-sync.yaml .
- The Secret's name must match the spec.git.secretRef name you defined in repo-sync.yaml .
- The Secret's name must match the spec.git.secretRef name you defined in root-sync.yaml .
- To learn more about how to configure the Secret object for the CA certificate, see Configure Certificate Authority For an explanation of the fields and a complete list of fields that you can add to the spec field, see RootSync fields .

### Safe rollouts with Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For non-production clusters, create the RootSync or RepoSync object with the spec.git.branch field set to staging .
- For production clusters, create the RootSync or RepoSync object with the spec.git.branch parameter set to main .
- You implement this method by specifying the commit, tag, or hash in the spec.git.revision field of the RootSync or RepoSync custom resource .
- If you need to roll back a change, change the spec.git.revision field back to its former value.

