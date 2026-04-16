---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.094Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "StorageTransferJob AWS S3 source path"
feature_slug: "storagetransferjob-aws-s3-source-path"
latest_feature_date: "2023-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export"
keywords:
  - "storagetransferjob"
  - "path"
  - "source"
  - "supports"
---

# StorageTransferJob AWS S3 source path

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports specifying the AWS S3 source path on StorageTransferJob resources.

## Extended Definition

Config Connector supports specifying the AWS S3 source path on StorageTransferJob resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export)

## Supporting Pages

### "Bulk importing and exporting existing Google Cloud resources \_|\_ Config\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- If the URI is a full path to a storage object, then the full path is used. config-connector bulk-export --storage-key gs:// BUCKET NAME Output The output from the config-connector bulk-export command is Config Connector resources in YAML format.
- Learn about the resources that Config Connector supports .
- For example, to output assets from the project my-project to the sample directory, run the following command: config-connector bulk-export --project my-project --on-error continue --output sample/ Command-line options The config-connector bulk-export command has the following options: config-connector bulk-export --input FILENAME \ --output FILENAME \ --storage-key gs://BUCKET NAME \ --project PROJECT ID \ --folder FOLDER NUMBER \ --organization ORGANIZATION ID \ --oauth2-token TOKEN \ --on-error [halt continue ignore] \ --iam-format [policy policymember none] \ --filter-deleted-iam-members [true false] \ --verbose --input : Cloud Asset Inventory input file. --output : An optional output file path that disables standard output.
- Save the topic asset's JSON structure into an environment variable: TOPIC ASSET = '{"name":"//pubsub.googleapis.com/' " ${ TOPIC RESOURCE NAME } " '","asset type":"pubsub.googleapis.com/Topic"}' Pass the asset into config-connector bulk-export by running the following command: echo ${ TOPIC ASSET } config-connector bulk-export The output is a Config Connector resource in YAML format. --- apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : annotations : cnrm.cloud.google.com/project-id : PROJECT ID name : sample-topic ...

### "Configure container resources and replicas \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Create a file named configure-webhook-manager.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : replicas : 3 containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use kubectl apply to apply the modified configuration to your cluster: kubectl apply -f configure-webhook-manager.yaml Verify the successful configuration by running the following command. kubectl get controllerresource cnrm-webhook-manager -o jsonpath='{.status.healthy}' It should display status.healthy field set to true .
- For example, to configure the memory request and limit of the webhook container of the cnrm-webhook-manager controller, create and apply the following YAML file: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use NamespacedControllerResource for the namespaced controller manager Use the NamespacedControllerResource custom resource only to configure resources for the cnrm-controller-manager when Config Connector is running in namespaced mode.
- The following YAML file shows an example configuration: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : NamespacedControllerResource metadata : name : cnrm-controller-manager # name should not contain the namespace ID suffix namespace : NAMESPACE spec : containers : - name : manager resources : limits : cpu : 200m memory : 512Mi requests : cpu : 100m memory : 256Mi Replace NAMESPACE with the name of your namespace.
- After deletion, the Config Connector operator recreates the controllers with the default container resources and replicas. kubectl delete -f configure-webhook-manager.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Managing and deleting resources \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- The following Config Connector resources correspond to Google Cloud resources which have a service-generated resource ID: AccessContextManagerAccessPolicy ApigeeOrganization BillingBudgetsBudget CloudIdentityGroup CloudIdentityMembership ComputeFirewallPolicy DataCatalogPolicyTag DataCatalogTaxonomy DLPDeidentifyTemplate DLPInspectTemplate DLPJobTrigger DLPStoredInfoType EssentialContactsContact Folder IAPBrand IAPIdentityAwareProxyClient IdentityPlatformTenant MonitoringAlertPolicy MonitoringGroup MonitoringNotificationChannel MonitoringUptimeCheckConfig RecaptchaEnterpriseKey ResourceManagerLien SQLSSLCert SecretManagerSecretVersion StorageNotification StorageTransferJob TagsTagBinding TagsTagKey TagsTagValue VertexAIDataset VertexAIIndex Note: Folder is a special case.
- Create a BigQuery dataset named bigquerydatasetsample with bq . bq --location=US mk \ --dataset \ --default table expiration 3600 \ --description description \ PROJECT ID :bigquerydatasetsample Copy the following contents into a file named bq-sample.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydatasetsample spec : defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample" friendlyName : bigquerydataset-sample location : US Apply the yaml to your cluster. kubectl apply --namespace CC NAMESPACE -f bq-sample.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- For example, the YAML for the BigQuery dataset described earlier including the abandon deletion policy is below: apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydatasetsample annotations : cnrm.cloud.google.com/deletion-policy : abandon spec : defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample" friendlyName : bigquerydataset-sample location : US Resources with restrictions around acquisition Some resources can't be acquired following the instructions in the preceding section.
- Resources that cannot be acquired The following Config Connector resources do not have support for acquiring existing Google Cloud resources: DataflowFlexTemplateJob FirestoreIndex IAMServiceAccountKey What's next Learn about how Config Connector models Google Cloud resources with Kubernetes constructs .

