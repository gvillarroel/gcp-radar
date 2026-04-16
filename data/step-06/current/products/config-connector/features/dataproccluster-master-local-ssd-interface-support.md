---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.135Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "DataprocCluster master local SSD interface support"
feature_slug: "dataproccluster-master-local-ssd-interface-support"
latest_feature_date: "2022-11-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources"
keywords:
  - "master"
  - "dataproccluster"
  - "interface"
  - "local"
  - "supports"
---

# DataprocCluster master local SSD interface support

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports the spec.config.masterConfig.diskConfig.localSsdInterface field for DataprocCluster resources.

## Extended Definition

Config Connector supports the spec.config.masterConfig.diskConfig.localSsdInterface field for DataprocCluster resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)

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

### "Managing and deleting resources \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- The following Config Connector resources correspond to Google Cloud resources which have a service-generated resource ID: AccessContextManagerAccessPolicy ApigeeOrganization BillingBudgetsBudget CloudIdentityGroup CloudIdentityMembership ComputeFirewallPolicy DataCatalogPolicyTag DataCatalogTaxonomy DLPDeidentifyTemplate DLPInspectTemplate DLPJobTrigger DLPStoredInfoType EssentialContactsContact Folder IAPBrand IAPIdentityAwareProxyClient IdentityPlatformTenant MonitoringAlertPolicy MonitoringGroup MonitoringNotificationChannel MonitoringUptimeCheckConfig RecaptchaEnterpriseKey ResourceManagerLien SQLSSLCert SecretManagerSecretVersion StorageNotification StorageTransferJob TagsTagBinding TagsTagKey TagsTagValue VertexAIDataset VertexAIIndex Note: Folder is a special case.
- Create a BigQuery dataset named bigquerydatasetsample with bq . bq --location=US mk \ --dataset \ --default table expiration 3600 \ --description description \ PROJECT ID :bigquerydatasetsample Copy the following contents into a file named bq-sample.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydatasetsample spec : defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample" friendlyName : bigquerydataset-sample location : US Apply the yaml to your cluster. kubectl apply --namespace CC NAMESPACE -f bq-sample.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- Resources that cannot be acquired The following Config Connector resources do not have support for acquiring existing Google Cloud resources: DataflowFlexTemplateJob FirestoreIndex IAMServiceAccountKey What's next Learn about how Config Connector models Google Cloud resources with Kubernetes constructs .
- Use kubectl describe to see details on the dataset. kubectl describe --namespace CC NAMESPACE bigquerydataset bigquerydatasetsample Replace CC NAMESPACE with the namespace Config Connector manages resources from.

