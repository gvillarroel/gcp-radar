---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.265Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ConfigConnectorContext spec.requestProjectPolicy field"
feature_slug: "configconnectorcontext-spec-requestprojectpolicy-field"
latest_feature_date: "2020-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
  - "https://docs.cloud.google.com/config-connector/docs/troubleshooting"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally"
keywords:
  - "requestprojectpolicy"
  - "configconnectorcontext"
  - "supports"
  - "field"
  - "spec"
---

# ConfigConnectorContext spec.requestProjectPolicy field

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

ConfigConnectorContext supports the spec.requestProjectPolicy field.

## Extended Definition

ConfigConnectorContext supports the spec.requestProjectPolicy field.

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
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Configure the cluster-level or namespace-level stateIntoSpec override When installing Config Connector, or updating the Config Connector installation, you can configure the cluster-level or namespace-level stateIntoSpec override to be Absent in the ConfigConnector CR or ConfigConnectorContext CR. spec : stateIntoSpec : Absent This makes Absent the default spec fields populating behavior for any new resources created in the cluster or in the namespace when you don't specify the cnrm.cloud.google.com/state-into-spec annotation in the new resource YAMLs.
- If you have already created the resource, but want to change the spec fields populating behavior to Absent , you should: Ensure the cluster-level or namespace-level stateIntoSpec override to be Absent in the ConfigConnector CR or ConfigConnectorContext CR.
- Note that the only populating behavior CRDs added in version 1.114.0 and later follow is Absent regardless of the cnrm.cloud.google.com/state-into-spec annotation or the stateIntoSpec fields in the ConfigConnector CR or ConfigConnectorContext CR.
- If the ConfigConnectorContext CR doesn't exist or the stateIntoSpec field is unspecified, use the corresponding value of the stateIntoSpec field in the ConfigConnector CR.

### Troubleshoot Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Cause This issue can happen if you have Config Connector installed in namespaced-mode and if the namespace's ConfigConnectorContext was deleted before all Config Connector resources in that namespace are deleted.
- When a namespace's ConfigConnectorContext is deleted, Config Connector is disabled for that namespace, which prevents any remaining Config Connector resources in that namespace from getting deleted.
- To mitigate this issue in the future, only delete the ConfigConnectorContext after all Config Connector resources in its namespace have been deleted from Kubernetes.
- Avoid deleting entire namespaces before all Config Connector resources in that namespace have been deleted since the ConfigConnectorContext might get deleted first.

### Manage fields externally \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- To see if your resource supports the annotation, check the corresponding resource reference page . metadata : annotations : cnrm.cloud.google.com/state-into-spec : absent By setting value of state-into-spec as absent , Config Connector ignores list fields if they are not specified in your resource configuration.
- As an example: if the user applies a resource configuration without setting a value for bar in the spec: spec : foo : "foo" If the value of the bar field is baz in the Google Cloud API, the resource in the api-server is populated to that value: object in the api-server spec : foo : "foo" bar : "baz" # populated by first reconciliation If the Google Cloud resource is modified directly such that bar is now baz-2 , the Google Cloud API is corrected to the value that was initially populated in the resource spec: baz : object in the api-server spec : foo : "foo" bar : "baz" # still the originally populated value, and overrides the Google Cloud value Behavior for list fields in resource spec Due to technical limitation in Config Connector, list fields in your resource configuration cannot be managed externally by default.
- Behavior without server-side apply If server-side apply is not enabled, unspecified fields in the resource spec are populated with the value read from the Google Cloud API, and Config Connector enforces those initially populated values.
- When Config Connector creates a resource on Google Cloud, fields left unspecified in the spec take on values from the API unless they are not readable (for example, are not available by using a GET HTTP request).

