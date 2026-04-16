---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.204Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ConfigConnectorContext billing project override"
feature_slug: "configconnectorcontext-billing-project-override"
latest_feature_date: "2021-12-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus"
keywords:
  - "override"
  - "configconnectorcontext"
  - "billing"
  - "specifying"
  - "project"
  - "supports"
---

# ConfigConnectorContext billing project override

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports specifying a quota billing project in ConfigConnectorContext through the billgProject flag.

## Extended Definition

Config Connector supports specifying a quota billing project in ConfigConnectorContext through the billgProject flag.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects)
- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)

## Supporting Pages

### Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Configure the cluster-level or namespace-level stateIntoSpec override When installing Config Connector, or updating the Config Connector installation, you can configure the cluster-level or namespace-level stateIntoSpec override to be Absent in the ConfigConnector CR or ConfigConnectorContext CR. spec : stateIntoSpec : Absent This makes Absent the default spec fields populating behavior for any new resources created in the cluster or in the namespace when you don't specify the cnrm.cloud.google.com/state-into-spec annotation in the new resource YAMLs.
- If you have already created the resource, but want to change the spec fields populating behavior to Absent , you should: Ensure the cluster-level or namespace-level stateIntoSpec override to be Absent in the ConfigConnector CR or ConfigConnectorContext CR.
- Note that the only populating behavior CRDs added in version 1.114.0 and later follow is Absent regardless of the cnrm.cloud.google.com/state-into-spec annotation or the stateIntoSpec fields in the ConfigConnector CR or ConfigConnectorContext CR.
- If the ConfigConnectorContext CR doesn't exist or the stateIntoSpec field is unspecified, use the corresponding value of the stateIntoSpec field in the ConfigConnector CR.

### "Namespaces and Google Cloud projects \_|\_ Config Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using Namespaces with projects, folders, and organizations Google Cloud supports organizing resources at the Project, Folder, and Organization levels.
- For more information, see Organizing resources with projects and folders For example, if you want to create a Cloud SQL Instance with a name of mySQL in your project with a project ID of myProject , then run this command to annotate your namespace: kubectl annotate namespace \ NAMESPACE NAME cnrm.cloud.google.com/project-id="myProject" Replace NAMESPACE NAME with your Namespace name.
- How Config Connector uses Namespaces Config Connector can use the annotations on the resource's Namespace to determine what project, folder, or organization to create the resources in.
- Config Connector creates a corresponding Cloud SQL instance in your specified Google Cloud project, based on the configured namespace annotation.

### Monitoring Config Connector with Prometheus \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

