---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.041Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ControllerResource v1beta1"
feature_slug: "controllerresource-v1beta1"
latest_feature_date: "2023-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
  - "https://docs.cloud.google.com/config-connector/docs/troubleshooting"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds"
keywords:
  - "controllerresource"
  - "graduated"
  - "v1beta1"
---

# ControllerResource v1beta1

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

The ControllerResource CRD graduated to v1beta1.

## Extended Definition

The ControllerResource CRD graduated to v1beta1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- [https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds](https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds)

## Supporting Pages

### "Configure container resources and replicas \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Create a file named configure-webhook-manager.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : replicas : 3 containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use kubectl apply to apply the modified configuration to your cluster: kubectl apply -f configure-webhook-manager.yaml Verify the successful configuration by running the following command. kubectl get controllerresource cnrm-webhook-manager -o jsonpath='{.status.healthy}' It should display status.healthy field set to true .
- For example, to configure the memory request and limit of the webhook container of the cnrm-webhook-manager controller, create and apply the following YAML file: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use NamespacedControllerResource for the namespaced controller manager Use the NamespacedControllerResource custom resource only to configure resources for the cnrm-controller-manager when Config Connector is running in namespaced mode.
- The following YAML file shows an example configuration: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : NamespacedControllerResource metadata : name : cnrm-controller-manager # name should not contain the namespace ID suffix namespace : NAMESPACE spec : containers : - name : manager resources : limits : cpu : 200m memory : 512Mi requests : cpu : 100m memory : 256Mi Replace NAMESPACE with the name of your namespace.
- You can configure the following controllers: cnrm-webhook-manager cnrm-controller-manager cnrm-deletiondefender cnrm-resource-stats-recorder cnrm-unmanaged-detector (Config Connector version 1.108 and later) There are two types of custom resources used for configuration: ControllerResource and NamespacedControllerResource .

### Installing Config Connector v1alpha1 CRDs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds](https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

### Troubleshoot Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Resolution To address this issue, you can use the ControllerResource custom resource to increase the memory request and the memory limit for the Pod.
- For example, if you want to look for the initial delete requests for a BigQueryDataset resource named foo in namespace bar , you would run a query like the following: resource . type = "k8s cluster" resource . labels . project id = "my-project-id" resource . labels . cluster name = "my-cluster-name" protoPayload . methodName = "com.google.cloud.cnrm.bigquery.v1beta1.bigquerydatasets.delete" protoPayload . resourceName = "bigquery.cnrm.cloud.google.com/v1beta1/namespaces/bar/bigquerydatasets/foo" Using this query, you would look for the first delete request and then check authenticationInfo.principalEmail of that delete log message to determine the cause of the deletion.
- Resolution If you'd like to give your resource a name that is not a valid Kubernetes name, but is a valid Google Cloud resource name, you can use the resourceID , field as shown in the following example: apiVersion : sql.cnrm.cloud.google.com/v1beta1 kind : SQLUser metadata : name : 'test' spec : instanceRef : name : sqlinstance-sample-postgresql host : "%" type : CLOUD IAM USER resourceID : test.example@example-project.iam This configuration causes Config Connector to use resourceID instead of metadata.name as the name of the resource.

