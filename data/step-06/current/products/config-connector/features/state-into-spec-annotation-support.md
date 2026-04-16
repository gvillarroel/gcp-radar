---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.223Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "state-into-spec annotation support"
feature_slug: "state-into-spec-annotation-support"
latest_feature_date: "2021-08-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall"
  - "https://docs.cloud.google.com/config-connector/docs/resources"
keywords:
  - "annotation"
  - "state"
  - "into"
  - "cnrm"
  - "supports"
  - "spec"
---

# state-into-spec annotation support

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports the cnrm.cloud.google.com/state-into-spec annotation for merging or omitting resource state in spec, initially for BigQueryDataset.

## Extended Definition

Config Connector supports the cnrm.cloud.google.com/state-into-spec annotation for merging or omitting resource state in spec, initially for BigQueryDataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall)
- [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)

## Supporting Pages

### Resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- This skips populating unspecified fields into the Kubernetes resource spec: metadata : annotations : cnrm.cloud.google.com/state-into-spec : absent This annotation has a default value of merge if not specified, which means Config Connector populates all unspecified fields into spec.
- To further explain the difference introduced by this annotation, assume there is a spec with the following schema: foo1 : string foo2 : string bars : - bar : br1 : string br2 : string barz : bz1 : string bz2 : string Also assume you have specified the spec in your YAML as: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" Then by default, the populated spec in the created Kubernetes resource might be: spec : foo1 : "foo1" foo2 : "foo2" bars : - br1 : "1 br1" br2 : "1 br2" - br1 : "2 br1" br2 : "2 br2" barz : bz1 : "bz1" bz2 : "bz2" While if you set cnrm.cloud.google.com/state-into-spec: absent , the final spec in the created Kubernetes resource will be: spec : foo1 : "foo1" bars : - br1 : "1 br1" - br1 : "2 br1" barz : bz1 : "bz1" When to use cnrm.cloud.google.com/state-into-spec: absent In most cases, you'll want to set cnrm.cloud.google.com/state-into-spec: absent to get the Absent populating behavior for spec fields.
- Configure the cluster-level or namespace-level stateIntoSpec override When installing Config Connector, or updating the Config Connector installation, you can configure the cluster-level or namespace-level stateIntoSpec override to be Absent in the ConfigConnector CR or ConfigConnectorContext CR. spec : stateIntoSpec : Absent This makes Absent the default spec fields populating behavior for any new resources created in the cluster or in the namespace when you don't specify the cnrm.cloud.google.com/state-into-spec annotation in the new resource YAMLs.
- Config Connector will determine the spec fields populating behavior based on the value of the cnrm.cloud.google.com/state-into-spec annotation, and it follows the logic below to determine the value of the annotation: Use the value of the cnrm.cloud.google.com/state-into-spec annotation directly if it is specified and valid.

### "Installing with the GKE add-on \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- It means setting cnrm.cloud.google.com/state-into-spec annotation to absent for all Config Connector resources created in the cluster in the future.
- To configure the operator as cluster mode, complete the following steps: Copy the following YAML file into a file named configconnector.yaml : configconnector.yaml apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnector metadata : the name is restricted to ensure that there is only one ConfigConnector resource installed in your cluster name : configconnector.core.cnrm.cloud.google.com spec : mode : cluster googleServiceAccount : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" Setting stateIntoSpec to Absent is recommended.
- To uninstall Config Connector, complete the following steps: Use kubectl delete to remove the Config Connector CRDs along with controller components: kubectl delete ConfigConnector configconnector.core.cnrm.cloud.google.com --wait = true Disable the Config Connector add-on in your cluster using the gcloud CLI or the Google Cloud console: gcloud To disable the Config Connector add-on with gcloud , run the following command: gcloud container clusters update CLUSTER NAME --update-addons ConfigConnector = DISABLED Replace CLUSTER NAME with the name of the cluster that has Config Connector add-on installed.
- Organization To create resources in a certain organization , run the following command: kubectl annotate namespace \ NAMESPACE cnrm.cloud.google.com/organization-id = ORGANIZATION ID Replace the following: NAMESPACE with your namespace name.

