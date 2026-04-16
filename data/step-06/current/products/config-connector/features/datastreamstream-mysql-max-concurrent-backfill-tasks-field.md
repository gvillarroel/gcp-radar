---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.092Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "DatastreamStream MySQL max concurrent backfill tasks field"
feature_slug: "datastreamstream-mysql-max-concurrent-backfill-tasks-field"
latest_feature_date: "2023-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/resources"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources"
keywords:
  - "datastreamstream"
  - "concurrent"
  - "backfill"
  - "mysql"
  - "tasks"
  - "field"
---

# DatastreamStream MySQL max concurrent backfill tasks field

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector now supports the maxConcurrentBackfillTasks field in MySQL source configuration for the DatastreamStream resource.

## Extended Definition

Config Connector now supports the maxConcurrentBackfillTasks field in MySQL source configuration for the DatastreamStream resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)
- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources)

## Supporting Pages

### Resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Securing access to resources with IAM \_|\_ Config Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

### Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- To further explain the difference introduced by this annotation, assume there is a spec with the following schema: foo1 : string foo2 : string bars : - bar : br1 : string br2 : string barz : bz1 : string bz2 : string Also assume you have specified the spec in your YAML as: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" Then by default, the populated spec in the created Kubernetes resource might be: spec : foo1 : "foo1" foo2 : "foo2" bars : - br1 : "1 br1" br2 : "1 br2" - br1 : "2 br1" br2 : "2 br2" barz : bz1 : "bz1" bz2 : "bz2" While if you set cnrm.cloud.google.com/state-into-spec: absent , the final spec in the created Kubernetes resource will be: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" When to use cnrm.cloud.google.com/state-into-spec: absent In most cases, you'll want to set cnrm.cloud.google.com/state-into-spec: absent to get the Absent populating behavior for spec fields.
- Configure the cluster-level or namespace-level stateIntoSpec override When installing Config Connector, or updating the Config Connector installation, you can configure the cluster-level or namespace-level stateIntoSpec override to be Absent in the ConfigConnector CR or ConfigConnectorContext CR. spec : stateIntoSpec : Absent This makes Absent the default spec fields populating behavior for any new resources created in the cluster or in the namespace when you don't specify the cnrm.cloud.google.com/state-into-spec annotation in the new resource YAMLs.
- As an example, assume the CRD schema let you specify two fields named foo and bar in spec, while your applied YAML file has only foo specified: spec : foo : "foo" You'll notice another field named bar appears in the CR if the YAML is applied successfully and the resource is UpToDate : spec : foo : "foo" bar : "bar" Due to the complexity of interaction between Config Connector and Google Cloud APIs, you might want to change this default behavior and skip populating the Kubernetes resource spec with unspecified fields.
- Config Connector will determine the spec fields populating behavior based on the value of the cnrm.cloud.google.com/state-into-spec annotation, and it follows the logic below to determine the value of the annotation: Use the value of the cnrm.cloud.google.com/state-into-spec annotation directly if it is specified and valid.

