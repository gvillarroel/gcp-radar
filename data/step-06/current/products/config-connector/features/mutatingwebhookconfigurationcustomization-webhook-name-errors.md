---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.042Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "MutatingWebhookConfigurationCustomization webhook name errors"
feature_slug: "mutatingwebhookconfigurationcustomization-webhook-name-errors"
latest_feature_date: "2023-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/install-namespaced"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/advanced-install"
keywords:
  - "mutatingwebhookconfigurationcustomization"
  - "errors"
  - "reports"
  - "webhook"
  - "name"
---

# MutatingWebhookConfigurationCustomization webhook name errors

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector now reports invalid webhook name errors in the status of MutatingWebhookConfigurationCustomization resources.

## Extended Definition

Config Connector now reports invalid webhook name errors in the status of MutatingWebhookConfigurationCustomization resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- [https://docs.cloud.google.com/config-connector/docs/how-to/install-namespaced](https://docs.cloud.google.com/config-connector/docs/how-to/install-namespaced)
- [https://docs.cloud.google.com/config-connector/docs/how-to/advanced-install](https://docs.cloud.google.com/config-connector/docs/how-to/advanced-install)

## Supporting Pages

### Configure webhook timeout \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a file named configure-mutating-webhook-timeout.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : MutatingWebhookConfigurationCustomization metadata : name : mutating-webhook spec : webhooks : - name : container-annotation-handler timeoutSeconds : 20 Note: when specifying the name of webhook configuration and the names of webhooks in the YAML file, don't include the .cnrm.cloud.google.com suffix.
- Use kubectl apply to apply the webhook timeout customization to your cluster: kubectl apply -f configure-mutating-webhook-timeout.yaml Verify the successful configuration by running the following command: kubectl get mutatingwebhookconfigurationcustomizations mutating-webhook -o jsonpath='{.status.healthy}{"\n"}' It should display status.healthy field set to true .
- Create a file named configure-validating-webhook-timeout.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ValidatingWebhookConfigurationCustomization metadata : name : validating-webhook spec : webhooks : - name : deny-immutable-field-updates timeoutSeconds : 12 - name : deny-unknown-fields timeoutSeconds : 15 Note: when specifying the name of webhook configuration and the names of webhooks in the YAML file, don't include the .cnrm.cloud.google.com suffix.
- Verify that the new custom timeout has been applied to the target webhooks: kubectl get validatingwebhookconfigurations validating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="deny-immutable-field-updates.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' kubectl get validatingwebhookconfigurations validating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="deny-unknown-fields.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' Applying the customization could take a few minutes.

### Install Config Connector manually \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/install-namespaced](https://docs.cloud.google.com/config-connector/docs/how-to/install-namespaced)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following commands to remove Config Connector system non-CRD components: kubectl delete sts,deploy,po,svc,roles,clusterroles,clusterrolebindings --all-namespaces -l cnrm.cloud.google.com/system = true --wait = true kubectl delete validatingwebhookconfiguration abandon-on-uninstall.cnrm.cloud.google.com --ignore-not-found --wait = true kubectl delete validatingwebhookconfiguration validating-webhook.cnrm.cloud.google.com --ignore-not-found --wait = true kubectl delete mutatingwebhookconfiguration mutating-webhook.cnrm.cloud.google.com --ignore-not-found --wait = true Install Config Connector with the GKE add-on , or the operator .
- To create a ConfigConnectorContext , complete the following steps: Create a manifest named configconnectorcontext.yaml with the following content: apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnectorContext metadata : you need one ConfigConnectorContext per namespace name : configconnectorcontext.core.cnrm.cloud.google.com namespace : NAMESPACE spec : googleServiceAccount : " NAMESPACE GSA @ HOST PROJECT ID .iam.gserviceaccount.com" stateIntoSpec : Absent Apply the manifest to your cluster: kubectl apply -f configconnectorcontext.yaml Verify that the Config Connector operator created a Kubernetes service account for your namespace by running the following command: kubectl get serviceaccount/cnrm-controller-manager- NAMESPACE -n cnrm-system Verify that the Config Connector controller Pod is running for your namespace: kubectl wait -n cnrm-system \ --for = condition = Ready pod \ -l cnrm.cloud.google.com/component = cnrm-controller-manager \ -l cnrm.cloud.google.com/scoped-namespace = NAMESPACE If the Config Connector controller is running, the output is similar to: cnrm-controller-manager-abcdefghijk-0 condition met.
- Extract the tar file: tar zxvf release-bundle.tar.gz Install the Config Connector operator on your cluster: Autopilot kubectl apply -f operator-system/autopilot-configconnector-operator.yaml Standard kubectl apply -f operator-system/configconnector-operator.yaml To configure the Config Connector operator to run in namespaced mode, complete the following steps: Create a manifest named configconnector.yaml with the following content: apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnector metadata : the name is restricted to ensure that there is only ConfigConnector resource installed in your cluster name : configconnector.core.cnrm.cloud.google.com spec : mode : namespaced stateIntoSpec : Absent Apply the manifest to your cluster: kubectl apply -f configconnector.yaml Install Config Connector in namespaced mode Note: You must perform these steps for every namespace that you want Config Connector to create resources from.
- Create an IAM policy binding between the IAM service account and the Config Connector Kubernetes service account: gcloud iam service-accounts add-iam-policy-binding \ NAMESPACE GSA @ HOST PROJECT ID .iam.gserviceaccount.com \ --member = "serviceAccount: HOST PROJECT ID .svc.id.goog[cnrm-system/cnrm-controller-manager- NAMESPACE ]" \ --role = "roles/iam.workloadIdentityUser" Give the IAM service account permissions to publish Prometheus metrics to Google Cloud Observability on your host project: gcloud projects add-iam-policy-binding HOST PROJECT ID \ --member = "serviceAccount: NAMESPACE GSA @ HOST PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" Create a ConfigConnectorContext To create Google Cloud resources, configure Config Connector to watch your namespace by adding a ConfigConnectorContext object in that namespace.

### Install Config Connector manually \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/advanced-install](https://docs.cloud.google.com/config-connector/docs/how-to/advanced-install)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following commands to remove Config Connector system non-CRD components: kubectl delete sts,deploy,po,svc,roles,clusterroles,clusterrolebindings --all-namespaces -l cnrm.cloud.google.com/system = true --wait = true kubectl delete validatingwebhookconfiguration abandon-on-uninstall.cnrm.cloud.google.com --ignore-not-found --wait = true kubectl delete validatingwebhookconfiguration validating-webhook.cnrm.cloud.google.com --ignore-not-found --wait = true kubectl delete mutatingwebhookconfiguration mutating-webhook.cnrm.cloud.google.com --ignore-not-found --wait = true Install Config Connector with the GKE add-on , or the operator .
- To create a ConfigConnectorContext , complete the following steps: Create a manifest named configconnectorcontext.yaml with the following content: apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnectorContext metadata : you need one ConfigConnectorContext per namespace name : configconnectorcontext.core.cnrm.cloud.google.com namespace : NAMESPACE spec : googleServiceAccount : " NAMESPACE GSA @ HOST PROJECT ID .iam.gserviceaccount.com" stateIntoSpec : Absent Apply the manifest to your cluster: kubectl apply -f configconnectorcontext.yaml Verify that the Config Connector operator created a Kubernetes service account for your namespace by running the following command: kubectl get serviceaccount/cnrm-controller-manager- NAMESPACE -n cnrm-system Verify that the Config Connector controller Pod is running for your namespace: kubectl wait -n cnrm-system \ --for = condition = Ready pod \ -l cnrm.cloud.google.com/component = cnrm-controller-manager \ -l cnrm.cloud.google.com/scoped-namespace = NAMESPACE If the Config Connector controller is running, the output is similar to: cnrm-controller-manager-abcdefghijk-0 condition met.
- Extract the tar file: tar zxvf release-bundle.tar.gz Install the Config Connector operator on your cluster: Autopilot kubectl apply -f operator-system/autopilot-configconnector-operator.yaml Standard kubectl apply -f operator-system/configconnector-operator.yaml To configure the Config Connector operator to run in namespaced mode, complete the following steps: Create a manifest named configconnector.yaml with the following content: apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnector metadata : the name is restricted to ensure that there is only ConfigConnector resource installed in your cluster name : configconnector.core.cnrm.cloud.google.com spec : mode : namespaced stateIntoSpec : Absent Apply the manifest to your cluster: kubectl apply -f configconnector.yaml Install Config Connector in namespaced mode Note: You must perform these steps for every namespace that you want Config Connector to create resources from.
- Create an IAM policy binding between the IAM service account and the Config Connector Kubernetes service account: gcloud iam service-accounts add-iam-policy-binding \ NAMESPACE GSA @ HOST PROJECT ID .iam.gserviceaccount.com \ --member = "serviceAccount: HOST PROJECT ID .svc.id.goog[cnrm-system/cnrm-controller-manager- NAMESPACE ]" \ --role = "roles/iam.workloadIdentityUser" Give the IAM service account permissions to publish Prometheus metrics to Google Cloud Observability on your host project: gcloud projects add-iam-policy-binding HOST PROJECT ID \ --member = "serviceAccount: NAMESPACE GSA @ HOST PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" Create a ConfigConnectorContext To create Google Cloud resources, configure Config Connector to watch your namespace by adding a ConfigConnectorContext object in that namespace.

