---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.224Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "ConfigManagement spec.git fields"
feature_slug: "configmanagement-spec-git-fields"
latest_feature_date: "2023-05-05"
deprecation_date: "2024-05-15"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields"
keywords:
  - "ConfigManagement object spec.git"
  - "ConfigManagement git config"
  - "ConfigManagement spec.git"
  - "spec.git shutdown"
  - "spec.git fields"
  - "spec.git deprecated"
  - "spec.git"
---

# ConfigManagement spec.git fields

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

The `spec.git` fields on the ConfigManagement object were deprecated and are scheduled for shutdown on or after May 15, 2024; deprecated on 2024-05-15.

## Extended Definition

The `spec.git` fields on the ConfigManagement object were deprecated and are scheduled for shutdown on or after May 15, 2024; deprecated on 2024-05-15.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)

## Supporting Pages

### "Migrate your ConfigManagement object \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Your ConfigManagement object should resemble the following: config-management.yaml apiVersion : configmanagement.gke.io/v1 kind : ConfigManagement metadata : name : config-management spec : enableMultiRepo : true Apply the changes: kubectl apply -f config-management.yaml Legacy fields are now disabled without affecting the RootSync object generated from the spec.git fields of your ConfigManagement object.
- If you are still using the spec.git fields, this page can be used to migrate your Git configuration to a RootSync .
- You can't create new configurations that use the spec.git fields to manage a Git repository.
- In the ConfigManagement object, remove the spec.enableLegacyFields and spec.git fields.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- May 05, 2023 1.15.0 Deprecated The spec.git fields of the ConfigManagement object are deprecated and are scheduled for shut down on or after May 15, 2024.
- 1.17.3 Fixed Fixed a regression introduced in 1.16.0 that limits the length of the Secret name referenced in the spec.git.secretRef.name field of the RootSync object.
- November 16, 2020 1.5.2 Issue A leading forward slash "/" in spec.git.policyDir will not match anything in Config Sync versions 1.5.2 and 1.6.0.
- January 08, 2021 1.6.0 Issue Config Sync unintentionally started using the absolute path in the file system with spec.git.policyDir .

### RootSync and RepoSync fields \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Unmanaged root-sync fields The following fields of the RootSync named root-sync are not managed by the Fleet (Hub) service and can be edited with any Kubernetes client: Key Description spec.helm All fields for Helm repository configuration. spec.override All fields for overriding default configurations. spec.git.noSSLVerify Specifies whether to enable or disable SSL certificate verification for Git.
- The default is false . spec.git.caCertSecretRef.name The name of the Secret containing the certificate authority (CA) certificate for a Git repository. spec.oci.caCertSecretRef.name The name of the Secret containing the certificate authority (CA) certificate for an OCI repository.
- When using a hash, it must be a full hash, and not an abbreviated form. spec.git.secretRef.name The name of the Secret used to connect to the Git source of truth. spec.git.noSSLVerify 1 noSSLVerify specifies whether to enable or disable the SSL certificate verification.
- If both fields are used, spec.git.revision field takes precedence over spec.git.branch . spec.git.dir The absolute path in the Git repository to the root directory that contains the configuration that you want to sync.

