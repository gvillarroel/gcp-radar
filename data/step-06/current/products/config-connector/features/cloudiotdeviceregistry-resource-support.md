---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.051Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "CloudIOTDeviceRegistry resource support"
feature_slug: "cloudiotdeviceregistry-resource-support"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/managing-conflicts"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids"
keywords:
  - "cloudiotdeviceregistry"
  - "resources"
  - "managing"
  - "resource"
  - "supports"
---

# CloudIOTDeviceRegistry resource support

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports managing CloudIOTDeviceRegistry resources.

## Extended Definition

Config Connector supports managing CloudIOTDeviceRegistry resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/managing-conflicts](https://docs.cloud.google.com/config-connector/docs/concepts/managing-conflicts)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)

## Supporting Pages

### "Managing and deleting resources \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- Source ID: `site-docs-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Managing and deleting resources This page explains how Config Connector manages an existing resource and handles deleting resources .
- To learn about how to use the resourceID field, see Managing resources with the resourceID field .
- To learn more, see Managing resources with the resourceID field .
- The following Config Connector resources correspond to Google Cloud resources which have a service-generated resource ID: AccessContextManagerAccessPolicy ApigeeOrganization BillingBudgetsBudget CloudIdentityGroup CloudIdentityMembership ComputeFirewallPolicy DataCatalogPolicyTag DataCatalogTaxonomy DLPDeidentifyTemplate DLPInspectTemplate DLPJobTrigger DLPStoredInfoType EssentialContactsContact Folder IAPBrand IAPIdentityAwareProxyClient IdentityPlatformTenant MonitoringAlertPolicy MonitoringGroup MonitoringNotificationChannel MonitoringUptimeCheckConfig RecaptchaEnterpriseKey ResourceManagerLien SQLSSLCert SecretManagerSecretVersion StorageNotification StorageTransferJob TagsTagBinding TagsTagKey TagsTagValue VertexAIDataset VertexAIIndex Note: Folder is a special case.

### "Managing conflicts with multiple Config Connector resources \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/managing-conflicts](https://docs.cloud.google.com/config-connector/docs/concepts/managing-conflicts)
- Source ID: `site-docs-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- If you are Managing resources with the resourceID field you can create multiple resources with the same Google Cloud resource name, created under the same namespace.
- Managing conflicts with multiple Config Connector resources This page describes how Config Connector handles conflicts.
- In the following example, a manifest for the default ComputeNetwork uses a management policy of none , which means that conflicts are not prevented: apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeNetwork metadata : annotations : cnrm.cloud.google.com/management-conflict-prevention-policy : "none" cnrm.cloud.google.com/project-id : " PROJECT-ID " cnrm.cloud.google.com/deletion-policy : "abandon" name : default spec : description : Default network for the project Limitations Conflict prevention has the following limitations: Conflict prevention does not work for resources that don't support labels.
- Config Connector manages or acquires resources by mapping the combination of Kubernetes resource name, container annotation, and if applicable, region or location.

### "Managing resources with the resourceID field \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- Source ID: `site-docs-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Managing resources with the resourceID field This page explains how to manage resources with the resourceID field.
- What's next Review the Resource reference to learn about the resources Config Connector supports.
- Copy the following contents into a file named bigquery-dataset.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydataset-sample-for-creation spec : resourceID : bigquerydataset sample with resourceid defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample with the ResourceID Field" friendlyName : bigquerydataset-sample-with-resourceid location : US Apply the YAML file to your cluster. kubectl apply --namespace CC NAMESPACE -f bigquery-dataset.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- Using the resourceID field in your Config Connector resources, you can define multiple Config Connector resources of the same kind with the same Google Cloud resource name under different projects, folders, organizations or parent resources within the same namespace.

