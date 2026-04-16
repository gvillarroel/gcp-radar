---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.016Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "FirestoreDatabase delete protection state"
feature_slug: "firestoredatabase-delete-protection-state"
latest_feature_date: "2025-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
  - "https://docs.cloud.google.com/config-connector/docs/troubleshooting"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally"
keywords:
  - "firestoredatabase"
  - "protection"
  - "delete"
  - "state"
  - "added"
  - "field"
---

# FirestoreDatabase delete protection state

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector added a FirestoreDatabase field for delete protection state.

## Extended Definition

Config Connector added a FirestoreDatabase field for delete protection state.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally)

## Supporting Pages

### Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Note that the only populating behavior CRDs added in version 1.114.0 and later follow is Absent regardless of the cnrm.cloud.google.com/state-into-spec annotation or the stateIntoSpec fields in the ConfigConnector CR or ConfigConnectorContext CR.
- To further explain the difference introduced by this annotation, assume there is a spec with the following schema: foo1 : string foo2 : string bars : - bar : br1 : string br2 : string barz : bz1 : string bz2 : string Also assume you have specified the spec in your YAML as: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" Then by default, the populated spec in the created Kubernetes resource might be: spec : foo1 : "foo1" foo2 : "foo2" bars : - br1 : "1 br1" br2 : "1 br2" - br1 : "2 br1" br2 : "2 br2" barz : bz1 : "bz1" bz2 : "bz2" While if you set cnrm.cloud.google.com/state-into-spec: absent , the final spec in the created Kubernetes resource will be: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" When to use cnrm.cloud.google.com/state-into-spec: absent In most cases, you'll want to set cnrm.cloud.google.com/state-into-spec: absent to get the Absent populating behavior for spec fields.
- Configure the cluster-level or namespace-level stateIntoSpec override When installing Config Connector, or updating the Config Connector installation, you can configure the cluster-level or namespace-level stateIntoSpec override to be Absent in the ConfigConnector CR or ConfigConnectorContext CR. spec : stateIntoSpec : Absent This makes Absent the default spec fields populating behavior for any new resources created in the cluster or in the namespace when you don't specify the cnrm.cloud.google.com/state-into-spec annotation in the new resource YAMLs.
- Config Connector will determine the spec fields populating behavior based on the value of the cnrm.cloud.google.com/state-into-spec annotation, and it follows the logic below to determine the value of the annotation: Use the value of the cnrm.cloud.google.com/state-into-spec annotation directly if it is specified and valid.

### Troubleshoot Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Type of issue Common issues Reconciliation Resource keeps updating every 5-15 mins Resource has no status KNV2005: syncer excessively updating resource Resource deleted by Config Connector Controller Pod OOMKilled Deletion Deletions of namespaces stuck at Terminating Deletions of resources stuck at DeleteFailed after project was deleted Permissions Compute Engine Metadata not defined Error 403: Request had insufficient authentication scopes 403 Forbidden: The caller does not have permission Error 403: Caller is missing IAM permission Update error with IAMPolicy, IAMPartialPolicy and IAMPolicyMember Installation and upgrades Version not supported in Config Connector add-on installations failed calling webhook PodSecurityPolicy prevents upgrades Configuration Cannot make changes to immutable fields No matches for kind "Foo" Labels are not propagated to the Google Cloud resource Error due to special characters in resource name Unable to remove fields from resource spec Reconciliation The following section lists common issues related to reconciliation of resources by Config Connector.
- Error updating the immutable fields when there is no update You might see the following errors in the status of the Config Connector resource shortly after you create or acquire a Google Cloud resource using Config Connector: Update call failed: error applying desired state: infeasible update: ({true \<nil\>}) would require recreation ( example ) Update call failed: cannot make changes to immutable field(s) ( example ) This might not mean that you've actually updated the resource, but the reason might be that the Google Cloud API has made a change to an immutable field that was managed by you in the Config Connector resource.
- You can delete a resource's finalizers by editing the resource using kubectl edit , deleting the metadata.finalizers field, and then saving the file to preserve your changes to the Kubernetes API Server.
- For example, in some cases, Google Cloud changes the formatting (for example, capitalization) of field values which leads to a diff between your resource's desired state and actual state.

### Manage fields externally \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- To see if your resource supports the annotation, check the corresponding resource reference page . metadata : annotations : cnrm.cloud.google.com/state-into-spec : absent By setting value of state-into-spec as absent , Config Connector ignores list fields if they are not specified in your resource configuration.
- At the time when a resource spec is applied, Config Connector reads the value of list fields from the Google Cloud API and treats this initial value as source of truth and desired state.
- Manage fields externally Caution: For CRDs added in version 1.114.0 and later , externally managed fields are not populated by default.
- To bypass this limitation and let list fields be managed externally, use the cnrm.cloud.google.com/state-into-spec annotation.

