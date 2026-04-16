---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.155Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "state-into-spec absent value support"
feature_slug: "state-into-spec-absent-value-support"
latest_feature_date: "2022-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/advanced-install"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/install-manually"
keywords:
  - "absent"
  - "value"
  - "extends"
  - "state"
  - "into"
  - "spec"
---

# state-into-spec absent value support

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector extends support for absent values in the state-into-spec annotation to most resources.

## Extended Definition

Config Connector extends support for absent values in the state-into-spec annotation to most resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/how-to/advanced-install](https://docs.cloud.google.com/config-connector/docs/how-to/advanced-install)
- [https://docs.cloud.google.com/config-connector/docs/how-to/install-manually](https://docs.cloud.google.com/config-connector/docs/how-to/install-manually)

## Supporting Pages

### Ignore unspecified fields \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This skips populating unspecified fields into the Kubernetes resource spec: metadata : annotations : cnrm.cloud.google.com/state-into-spec : absent This annotation has a default value of merge if not specified, which means Config Connector populates all unspecified fields into spec.
- Observed State If you need to set cnrm.cloud.google.com/state-into-spec: absent , but your solution depends on the populated values from unspecified fields, check if these fields exist under status.observedState in the CRD schema.
- If they're represented under status.observedState , then you can set cnrm.cloud.google.com/state-into-spec: absent and still access the values of the unspecified fields after a successful reconciliation.
- Specify the resource-level cnrm.cloud.google.com/state-into-spec annotation When creating your YAML file, you can specify the value of the cnrm.cloud.google.com/state-into-spec annotation as absent .

### Install Config Connector manually \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/install-manually](https://docs.cloud.google.com/config-connector/docs/how-to/install-manually)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a ConfigConnectorContext , complete the following steps: Create a manifest named configconnectorcontext.yaml with the following content: apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnectorContext metadata : you need one ConfigConnectorContext per namespace name : configconnectorcontext.core.cnrm.cloud.google.com namespace : NAMESPACE spec : googleServiceAccount : " NAMESPACE GSA @ HOST PROJECT ID .iam.gserviceaccount.com" stateIntoSpec : Absent Apply the manifest to your cluster: kubectl apply -f configconnectorcontext.yaml Verify that the Config Connector operator created a Kubernetes service account for your namespace by running the following command: kubectl get serviceaccount/cnrm-controller-manager- NAMESPACE -n cnrm-system Verify that the Config Connector controller Pod is running for your namespace: kubectl wait -n cnrm-system \ --for = condition = Ready pod \ -l cnrm.cloud.google.com/component = cnrm-controller-manager \ -l cnrm.cloud.google.com/scoped-namespace = NAMESPACE If the Config Connector controller is running, the output is similar to: cnrm-controller-manager-abcdefghijk-0 condition met.
- Extract the tar file: tar zxvf release-bundle.tar.gz Install the Config Connector operator on your cluster: Autopilot kubectl apply -f operator-system/autopilot-configconnector-operator.yaml Standard kubectl apply -f operator-system/configconnector-operator.yaml To configure the Config Connector operator to run in namespaced mode, complete the following steps: Create a manifest named configconnector.yaml with the following content: apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnector metadata : the name is restricted to ensure that there is only ConfigConnector resource installed in your cluster name : configconnector.core.cnrm.cloud.google.com spec : mode : namespaced stateIntoSpec : Absent Apply the manifest to your cluster: kubectl apply -f configconnector.yaml Install Config Connector in namespaced mode Note: You must perform these steps for every namespace that you want Config Connector to create resources from.
- To configure the operator as cluster mode, complete the following steps: Copy the following YAML file into a file named configconnector.yaml : configconnector.yaml apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnector metadata : the name is restricted to ensure that there is only one ConfigConnector resource installed in your cluster name : configconnector.core.cnrm.cloud.google.com spec : mode : cluster googleServiceAccount : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" Setting stateIntoSpec to Absent is recommended.
- It prevents Config Connector from populating unspecified fields into the spec. stateIntoSpec : Absent Replace the following: SERVICE ACCOUNT NAME with your service account's name.

### Install Config Connector manually \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/advanced-install](https://docs.cloud.google.com/config-connector/docs/how-to/advanced-install)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a ConfigConnectorContext , complete the following steps: Create a manifest named configconnectorcontext.yaml with the following content: apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnectorContext metadata : you need one ConfigConnectorContext per namespace name : configconnectorcontext.core.cnrm.cloud.google.com namespace : NAMESPACE spec : googleServiceAccount : " NAMESPACE GSA @ HOST PROJECT ID .iam.gserviceaccount.com" stateIntoSpec : Absent Apply the manifest to your cluster: kubectl apply -f configconnectorcontext.yaml Verify that the Config Connector operator created a Kubernetes service account for your namespace by running the following command: kubectl get serviceaccount/cnrm-controller-manager- NAMESPACE -n cnrm-system Verify that the Config Connector controller Pod is running for your namespace: kubectl wait -n cnrm-system \ --for = condition = Ready pod \ -l cnrm.cloud.google.com/component = cnrm-controller-manager \ -l cnrm.cloud.google.com/scoped-namespace = NAMESPACE If the Config Connector controller is running, the output is similar to: cnrm-controller-manager-abcdefghijk-0 condition met.
- Extract the tar file: tar zxvf release-bundle.tar.gz Install the Config Connector operator on your cluster: Autopilot kubectl apply -f operator-system/autopilot-configconnector-operator.yaml Standard kubectl apply -f operator-system/configconnector-operator.yaml To configure the Config Connector operator to run in namespaced mode, complete the following steps: Create a manifest named configconnector.yaml with the following content: apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnector metadata : the name is restricted to ensure that there is only ConfigConnector resource installed in your cluster name : configconnector.core.cnrm.cloud.google.com spec : mode : namespaced stateIntoSpec : Absent Apply the manifest to your cluster: kubectl apply -f configconnector.yaml Install Config Connector in namespaced mode Note: You must perform these steps for every namespace that you want Config Connector to create resources from.
- To configure the operator as cluster mode, complete the following steps: Copy the following YAML file into a file named configconnector.yaml : configconnector.yaml apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnector metadata : the name is restricted to ensure that there is only one ConfigConnector resource installed in your cluster name : configconnector.core.cnrm.cloud.google.com spec : mode : cluster googleServiceAccount : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" Setting stateIntoSpec to Absent is recommended.
- It prevents Config Connector from populating unspecified fields into the spec. stateIntoSpec : Absent Replace the following: SERVICE ACCOUNT NAME with your service account's name.

