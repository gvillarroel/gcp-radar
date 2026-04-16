---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.139Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "DataprocCluster worker local SSD interface support"
feature_slug: "dataproccluster-worker-local-ssd-interface-support"
latest_feature_date: "2022-11-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall"
keywords:
  - "worker"
  - "dataproccluster"
  - "interface"
  - "local"
  - "supports"
---

# DataprocCluster worker local SSD interface support

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports the spec.config.workerConfig.diskConfig.localSsdInterface field for DataprocCluster resources.

## Extended Definition

Config Connector supports the spec.config.workerConfig.diskConfig.localSsdInterface field for DataprocCluster resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall)

## Supporting Pages

### Organizing your resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Depending on the resource type, the schema of the spec may contain at least one of the following fields: projectRef folderRef organizationRef Scope-defining annotation You can define a scope-defining annotation in the resource's configuration or in the Kubernetes namespace which contains the resource.
- There are three types of scope-defining annotations depending on the resource type: cnrm.cloud.google.com/project-id cnrm.cloud.google.com/folder-id cnrm.cloud.google.com/organization-id Most Config Connector resources support scope-defining fields.
- For resources that do not support scope-defining fields, you can either supply the scope-defining annotation in their configuration, or default the annotation for all resources in a particular namespace by annotating the namespace.
- Home Documentation Access and resource management Config Connector Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Configure container resources and replicas \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Create a file named configure-webhook-manager.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : replicas : 3 containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use kubectl apply to apply the modified configuration to your cluster: kubectl apply -f configure-webhook-manager.yaml Verify the successful configuration by running the following command. kubectl get controllerresource cnrm-webhook-manager -o jsonpath='{.status.healthy}' It should display status.healthy field set to true .
- For example, to configure the memory request and limit of the webhook container of the cnrm-webhook-manager controller, create and apply the following YAML file: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use NamespacedControllerResource for the namespaced controller manager Use the NamespacedControllerResource custom resource only to configure resources for the cnrm-controller-manager when Config Connector is running in namespaced mode.
- The following YAML file shows an example configuration: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : NamespacedControllerResource metadata : name : cnrm-controller-manager # name should not contain the namespace ID suffix namespace : NAMESPACE spec : containers : - name : manager resources : limits : cpu : 200m memory : 512Mi requests : cpu : 100m memory : 256Mi Replace NAMESPACE with the name of your namespace.
- After deletion, the Config Connector operator recreates the controllers with the default container resources and replicas. kubectl delete -f configure-webhook-manager.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Installing with the GKE add-on \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable Workload Identity Federation for GKE for a node pool, use the gcloud command-line tool: gcloud container node-pools update NODE POOL \ --workload-metadata = GKE METADATA \ --cluster CLUSTER NAME Replace the following: NODE POOL with your node pool's name CLUSTER NAME with your cluster's name Enabling the Config Connector add-on You can enable the Config Connector add-on in an existing GKE cluster with the Google Cloud CLI or the Google Cloud console. gcloud To enable the Config Connector add-on in an existing GKE cluster use the Google Cloud CLI: gcloud container clusters update CLUSTER NAME \ --update-addons ConfigConnector = ENABLED Replace CLUSTER NAME with the name of your GKE cluster.
- To uninstall Config Connector, complete the following steps: Use kubectl delete to remove the Config Connector CRDs along with controller components: kubectl delete ConfigConnector configconnector.core.cnrm.cloud.google.com --wait = true Disable the Config Connector add-on in your cluster using the gcloud CLI or the Google Cloud console: gcloud To disable the Config Connector add-on with gcloud , run the following command: gcloud container clusters update CLUSTER NAME --update-addons ConfigConnector = DISABLED Replace CLUSTER NAME with the name of the cluster that has Config Connector add-on installed.
- Create an IAM policy binding between the IAM service account and the predefined Kubernetes service account that Config Connector runs: gcloud iam service-accounts add-iam-policy-binding \ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --member = "serviceAccount: PROJECT ID .svc.id.goog[cnrm-system/cnrm-controller-manager]" \ --role = "roles/iam.workloadIdentityUser" Configuring Config Connector Note: When you enable the Config Connector add-on, it automatically creates a ConfigConnector CustomResource that is configured in namespaced-mode.
- To configure the operator as cluster mode, complete the following steps: Copy the following YAML file into a file named configconnector.yaml : configconnector.yaml apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnector metadata : the name is restricted to ensure that there is only one ConfigConnector resource installed in your cluster name : configconnector.core.cnrm.cloud.google.com spec : mode : cluster googleServiceAccount : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" Setting stateIntoSpec to Absent is recommended.

