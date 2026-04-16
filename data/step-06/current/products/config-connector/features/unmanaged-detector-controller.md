---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.150Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "unmanaged-detector controller"
feature_slug: "unmanaged-detector-controller"
latest_feature_date: "2022-10-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/installation-types"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources"
keywords:
  - "mark"
  - "unmanaged"
  - "detector"
  - "controller"
  - "includes"
  - "resources"
---

# unmanaged-detector controller

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector includes the unmanaged-detector controller to mark resources as Unmanaged when no controller exists for their namespace.

## Extended Definition

Config Connector includes the unmanaged-detector controller to mark resources as Unmanaged when no controller exists for their namespace.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/concepts/installation-types](https://docs.cloud.google.com/config-connector/docs/concepts/installation-types)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)

## Supporting Pages

### "Configure container resources and replicas \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure the following controllers: cnrm-webhook-manager cnrm-controller-manager cnrm-deletiondefender cnrm-resource-stats-recorder cnrm-unmanaged-detector (Config Connector version 1.108 and later) There are two types of custom resources used for configuration: ControllerResource and NamespacedControllerResource .
- The following components are always cluster-scoped, even when Config Connector is installed in namespaced mode: cnrm-webhook-manager cnrm-deletiondefender cnrm-resource-stats-recorder cnrm-unmanaged-detector The cnrm-controller-manager is also cluster-scoped when Config Connector is installed in cluster mode.
- Create a file named configure-webhook-manager.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : replicas : 3 containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use kubectl apply to apply the modified configuration to your cluster: kubectl apply -f configure-webhook-manager.yaml Verify the successful configuration by running the following command. kubectl get controllerresource cnrm-webhook-manager -o jsonpath='{.status.healthy}' It should display status.healthy field set to true .
- For example, to configure the memory request and limit of the webhook container of the cnrm-webhook-manager controller, create and apply the following YAML file: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use NamespacedControllerResource for the namespaced controller manager Use the NamespacedControllerResource custom resource only to configure resources for the cnrm-controller-manager when Config Connector is running in namespaced mode.

### "Choosing an installation type \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/installation-types](https://docs.cloud.google.com/config-connector/docs/concepts/installation-types)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table outlines some high-level considerations: Installation methods Advantages Disadvantages Config Controller • No installation required. • Automatic version upgrades. • Includes Config Sync . • Managed and supported by Google Cloud. • Restriction on custom workloads.
- You can install Config Connector in one of three ways: Config Controller : Config Controller is a hosted service that includes Config Connector.
- Config Controller is a centralized and designated control plane which provides a more secure way to manage Google Cloud resources.
- For more information, see Quickstart: Manage resources with Config Controller or Set up Config Controller .

### "Managing and deleting resources \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- The following Config Connector resources correspond to Google Cloud resources which have a service-generated resource ID: AccessContextManagerAccessPolicy ApigeeOrganization BillingBudgetsBudget CloudIdentityGroup CloudIdentityMembership ComputeFirewallPolicy DataCatalogPolicyTag DataCatalogTaxonomy DLPDeidentifyTemplate DLPInspectTemplate DLPJobTrigger DLPStoredInfoType EssentialContactsContact Folder IAPBrand IAPIdentityAwareProxyClient IdentityPlatformTenant MonitoringAlertPolicy MonitoringGroup MonitoringNotificationChannel MonitoringUptimeCheckConfig RecaptchaEnterpriseKey ResourceManagerLien SQLSSLCert SecretManagerSecretVersion StorageNotification StorageTransferJob TagsTagBinding TagsTagKey TagsTagValue VertexAIDataset VertexAIIndex Note: Folder is a special case.
- Create a BigQuery dataset named bigquerydatasetsample with bq . bq --location=US mk \ --dataset \ --default table expiration 3600 \ --description description \ PROJECT ID :bigquerydatasetsample Copy the following contents into a file named bq-sample.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydatasetsample spec : defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample" friendlyName : bigquerydataset-sample location : US Apply the yaml to your cluster. kubectl apply --namespace CC NAMESPACE -f bq-sample.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- For example, the YAML for the BigQuery dataset described earlier including the abandon deletion policy is below: apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydatasetsample annotations : cnrm.cloud.google.com/deletion-policy : abandon spec : defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample" friendlyName : bigquerydataset-sample location : US Resources with restrictions around acquisition Some resources can't be acquired following the instructions in the preceding section.
- Resources that cannot be acquired The following Config Connector resources do not have support for acquiring existing Google Cloud resources: DataflowFlexTemplateJob FirestoreIndex IAMServiceAccountKey What's next Learn about how Config Connector models Google Cloud resources with Kubernetes constructs .

