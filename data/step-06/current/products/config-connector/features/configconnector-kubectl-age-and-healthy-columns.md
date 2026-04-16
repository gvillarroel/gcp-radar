---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.219Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ConfigConnector kubectl Age and Healthy columns"
feature_slug: "configconnector-kubectl-age-and-healthy-columns"
latest_feature_date: "2021-09-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/advanced-install"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/install-manually"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/install-namespaced"
keywords:
  - "kubectl"
  - "healthy"
  - "columns"
  - "tabular"
  - "configconnector"
  - "configconnectorcontext"
  - "output"
---

# ConfigConnector kubectl Age and Healthy columns

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Kubectl tabular output for ConfigConnector and ConfigConnectorContext resources includes Age and Healthy columns.

## Extended Definition

Kubectl tabular output for ConfigConnector and ConfigConnectorContext resources includes Age and Healthy columns.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/advanced-install](https://docs.cloud.google.com/config-connector/docs/how-to/advanced-install)
- [https://docs.cloud.google.com/config-connector/docs/how-to/install-manually](https://docs.cloud.google.com/config-connector/docs/how-to/install-manually)
- [https://docs.cloud.google.com/config-connector/docs/how-to/install-namespaced](https://docs.cloud.google.com/config-connector/docs/how-to/install-namespaced)

## Supporting Pages

### Install Config Connector manually \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/install-manually](https://docs.cloud.google.com/config-connector/docs/how-to/install-manually)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a ConfigConnectorContext , complete the following steps: Create a manifest named configconnectorcontext.yaml with the following content: apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnectorContext metadata : you need one ConfigConnectorContext per namespace name : configconnectorcontext.core.cnrm.cloud.google.com namespace : NAMESPACE spec : googleServiceAccount : " NAMESPACE GSA @ HOST PROJECT ID .iam.gserviceaccount.com" stateIntoSpec : Absent Apply the manifest to your cluster: kubectl apply -f configconnectorcontext.yaml Verify that the Config Connector operator created a Kubernetes service account for your namespace by running the following command: kubectl get serviceaccount/cnrm-controller-manager- NAMESPACE -n cnrm-system Verify that the Config Connector controller Pod is running for your namespace: kubectl wait -n cnrm-system \ --for = condition = Ready pod \ -l cnrm.cloud.google.com/component = cnrm-controller-manager \ -l cnrm.cloud.google.com/scoped-namespace = NAMESPACE If the Config Connector controller is running, the output is similar to: cnrm-controller-manager-abcdefghijk-0 condition met.
- Uninstall Config Connector To uninstall Config Connector, complete the following steps: To remove the Config Connector CRDs and controller components, run the following command: kubectl delete ConfigConnectorContext --all -A –wait = false kubectl delete ConfigConnector configconnector.core.cnrm.cloud.google.com \ --wait = true To uninstall the Config Connector operator, run the following command: kubectl delete -f operator-system/configconnector-operator.yaml --wait = true Install in cluster mode You might prefer to install and manage Config Connector in cluster mode if you want to manage resources within a single project and don't require the permission separation that namespaced mode provides.
- Delete the ConfigConnectorContext object in your namespace. kubectl delete -n NAMESPACE ConfigConnectorContext configconnectorcontext.core.cnrm.cloud.google.com Important: Don't delete the ConfigConnectorContext object until all Config Connector-managed resources are deleted.
- Extract the tar file: tar zxvf release-bundle.tar.gz Install the Config Connector operator on your cluster: Autopilot kubectl apply -f operator-system/autopilot-configconnector-operator.yaml Standard kubectl apply -f operator-system/configconnector-operator.yaml To configure the Config Connector operator to run in namespaced mode, complete the following steps: Create a manifest named configconnector.yaml with the following content: apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnector metadata : the name is restricted to ensure that there is only ConfigConnector resource installed in your cluster name : configconnector.core.cnrm.cloud.google.com spec : mode : namespaced stateIntoSpec : Absent Apply the manifest to your cluster: kubectl apply -f configconnector.yaml Install Config Connector in namespaced mode Note: You must perform these steps for every namespace that you want Config Connector to create resources from.

### Install Config Connector manually \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/advanced-install](https://docs.cloud.google.com/config-connector/docs/how-to/advanced-install)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a ConfigConnectorContext , complete the following steps: Create a manifest named configconnectorcontext.yaml with the following content: apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnectorContext metadata : you need one ConfigConnectorContext per namespace name : configconnectorcontext.core.cnrm.cloud.google.com namespace : NAMESPACE spec : googleServiceAccount : " NAMESPACE GSA @ HOST PROJECT ID .iam.gserviceaccount.com" stateIntoSpec : Absent Apply the manifest to your cluster: kubectl apply -f configconnectorcontext.yaml Verify that the Config Connector operator created a Kubernetes service account for your namespace by running the following command: kubectl get serviceaccount/cnrm-controller-manager- NAMESPACE -n cnrm-system Verify that the Config Connector controller Pod is running for your namespace: kubectl wait -n cnrm-system \ --for = condition = Ready pod \ -l cnrm.cloud.google.com/component = cnrm-controller-manager \ -l cnrm.cloud.google.com/scoped-namespace = NAMESPACE If the Config Connector controller is running, the output is similar to: cnrm-controller-manager-abcdefghijk-0 condition met.
- Uninstall Config Connector To uninstall Config Connector, complete the following steps: To remove the Config Connector CRDs and controller components, run the following command: kubectl delete ConfigConnectorContext --all -A –wait = false kubectl delete ConfigConnector configconnector.core.cnrm.cloud.google.com \ --wait = true To uninstall the Config Connector operator, run the following command: kubectl delete -f operator-system/configconnector-operator.yaml --wait = true Install in cluster mode You might prefer to install and manage Config Connector in cluster mode if you want to manage resources within a single project and don't require the permission separation that namespaced mode provides.
- Delete the ConfigConnectorContext object in your namespace. kubectl delete -n NAMESPACE ConfigConnectorContext configconnectorcontext.core.cnrm.cloud.google.com Important: Don't delete the ConfigConnectorContext object until all Config Connector-managed resources are deleted.
- Extract the tar file: tar zxvf release-bundle.tar.gz Install the Config Connector operator on your cluster: Autopilot kubectl apply -f operator-system/autopilot-configconnector-operator.yaml Standard kubectl apply -f operator-system/configconnector-operator.yaml To configure the Config Connector operator to run in namespaced mode, complete the following steps: Create a manifest named configconnector.yaml with the following content: apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnector metadata : the name is restricted to ensure that there is only ConfigConnector resource installed in your cluster name : configconnector.core.cnrm.cloud.google.com spec : mode : namespaced stateIntoSpec : Absent Apply the manifest to your cluster: kubectl apply -f configconnector.yaml Install Config Connector in namespaced mode Note: You must perform these steps for every namespace that you want Config Connector to create resources from.

### Install Config Connector manually \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/install-namespaced](https://docs.cloud.google.com/config-connector/docs/how-to/install-namespaced)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a ConfigConnectorContext , complete the following steps: Create a manifest named configconnectorcontext.yaml with the following content: apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnectorContext metadata : you need one ConfigConnectorContext per namespace name : configconnectorcontext.core.cnrm.cloud.google.com namespace : NAMESPACE spec : googleServiceAccount : " NAMESPACE GSA @ HOST PROJECT ID .iam.gserviceaccount.com" stateIntoSpec : Absent Apply the manifest to your cluster: kubectl apply -f configconnectorcontext.yaml Verify that the Config Connector operator created a Kubernetes service account for your namespace by running the following command: kubectl get serviceaccount/cnrm-controller-manager- NAMESPACE -n cnrm-system Verify that the Config Connector controller Pod is running for your namespace: kubectl wait -n cnrm-system \ --for = condition = Ready pod \ -l cnrm.cloud.google.com/component = cnrm-controller-manager \ -l cnrm.cloud.google.com/scoped-namespace = NAMESPACE If the Config Connector controller is running, the output is similar to: cnrm-controller-manager-abcdefghijk-0 condition met.
- Uninstall Config Connector To uninstall Config Connector, complete the following steps: To remove the Config Connector CRDs and controller components, run the following command: kubectl delete ConfigConnectorContext --all -A –wait = false kubectl delete ConfigConnector configconnector.core.cnrm.cloud.google.com \ --wait = true To uninstall the Config Connector operator, run the following command: kubectl delete -f operator-system/configconnector-operator.yaml --wait = true Install in cluster mode You might prefer to install and manage Config Connector in cluster mode if you want to manage resources within a single project and don't require the permission separation that namespaced mode provides.
- Delete the ConfigConnectorContext object in your namespace. kubectl delete -n NAMESPACE ConfigConnectorContext configconnectorcontext.core.cnrm.cloud.google.com Important: Don't delete the ConfigConnectorContext object until all Config Connector-managed resources are deleted.
- Extract the tar file: tar zxvf release-bundle.tar.gz Install the Config Connector operator on your cluster: Autopilot kubectl apply -f operator-system/autopilot-configconnector-operator.yaml Standard kubectl apply -f operator-system/configconnector-operator.yaml To configure the Config Connector operator to run in namespaced mode, complete the following steps: Create a manifest named configconnector.yaml with the following content: apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnector metadata : the name is restricted to ensure that there is only ConfigConnector resource installed in your cluster name : configconnector.core.cnrm.cloud.google.com spec : mode : namespaced stateIntoSpec : Absent Apply the manifest to your cluster: kubectl apply -f configconnector.yaml Install Config Connector in namespaced mode Note: You must perform these steps for every namespace that you want Config Connector to create resources from.

