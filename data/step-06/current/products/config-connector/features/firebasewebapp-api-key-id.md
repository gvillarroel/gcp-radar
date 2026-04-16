---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.059Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "FirebaseWebApp API key ID"
feature_slug: "firebasewebapp-api-key-id"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally"
  - "https://docs.cloud.google.com/config-connector/docs/reference/annotations"
keywords:
  - "firebasewebapp"
  - "apikeyid"
  - "added"
  - "field"
---

# FirebaseWebApp API key ID

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector added the apiKeyId field to FirebaseWebApp.

## Extended Definition

Config Connector added the apiKeyId field to FirebaseWebApp.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally)
- [https://docs.cloud.google.com/config-connector/docs/reference/annotations](https://docs.cloud.google.com/config-connector/docs/reference/annotations)

## Supporting Pages

### Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Note that the only populating behavior CRDs added in version 1.114.0 and later follow is Absent regardless of the cnrm.cloud.google.com/state-into-spec annotation or the stateIntoSpec fields in the ConfigConnector CR or ConfigConnectorContext CR.
- Both config management tools and Config Connector treat list fields as atomic, thus the added spec.bars[0].br2 is treated as a drift by config management tools and will be removed to correct the drift .
- To further explain the difference introduced by this annotation, assume there is a spec with the following schema: foo1 : string foo2 : string bars : - bar : br1 : string br2 : string barz : bz1 : string bz2 : string Also assume you have specified the spec in your YAML as: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" Then by default, the populated spec in the created Kubernetes resource might be: spec : foo1 : "foo1" foo2 : "foo2" bars : - br1 : "1 br1" br2 : "1 br2" - br1 : "2 br1" br2 : "2 br2" barz : bz1 : "bz1" bz2 : "bz2" While if you set cnrm.cloud.google.com/state-into-spec: absent , the final spec in the created Kubernetes resource will be: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" When to use cnrm.cloud.google.com/state-into-spec: absent In most cases, you'll want to set cnrm.cloud.google.com/state-into-spec: absent to get the Absent populating behavior for spec fields.
- Configure the cluster-level or namespace-level stateIntoSpec override When installing Config Connector, or updating the Config Connector installation, you can configure the cluster-level or namespace-level stateIntoSpec override to be Absent in the ConfigConnector CR or ConfigConnectorContext CR. spec : stateIntoSpec : Absent This makes Absent the default spec fields populating behavior for any new resources created in the cluster or in the namespace when you don't specify the cnrm.cloud.google.com/state-into-spec annotation in the new resource YAMLs.

### Manage fields externally \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Manage fields externally Caution: For CRDs added in version 1.114.0 and later , externally managed fields are not populated by default.
- As an example: if the user applies a resource configuration without setting a value for bar in the spec: spec : foo : "foo" If the value of the bar field is baz in the Google Cloud API, the resource in the api-server is populated to that value: object in the api-server spec : foo : "foo" bar : "baz" # populated by first reconciliation If the Google Cloud resource is modified directly such that bar is now baz-2 , the Google Cloud API is corrected to the value that was initially populated in the resource spec: baz : object in the api-server spec : foo : "foo" bar : "baz" # still the originally populated value, and overrides the Google Cloud value Behavior for list fields in resource spec Due to technical limitation in Config Connector, list fields in your resource configuration cannot be managed externally by default.
- To see if your resource supports the annotation, check the corresponding resource reference page . metadata : annotations : cnrm.cloud.google.com/state-into-spec : absent By setting value of state-into-spec as absent , Config Connector ignores list fields if they are not specified in your resource configuration.
- Behavior without server-side apply If server-side apply is not enabled, unspecified fields in the resource spec are populated with the value read from the Google Cloud API, and Config Connector enforces those initially populated values.

### Annotations \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/annotations](https://docs.cloud.google.com/config-connector/docs/reference/annotations)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Annotation Description cnrm.cloud.google.com/mutable-but-unreadable-fields This annotation is added and managed by Config Connector for resources with mutable but unreadable fields (for example, "password" field in some resource spec). cnrm.cloud.google.com/observed-secret-versions This annotation is added and managed by Config Connector for resources with sensitive fields. cnrm.cloud.google.com/supports-ssa This annotation is added and managed by Config Connector for resources with server-side apply enabled . cnrm.cloud.google.com/blueprint This annotation is added for resources used in KRM blueprints .

