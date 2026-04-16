---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.059Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "HealthcareFHIRStore delete notification previous resource"
feature_slug: "healthcarefhirstore-delete-notification-previous-resource"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/getting-started"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall"
keywords:
  - "previous"
  - "healthcarefhirstore"
  - "notification"
  - "delete"
  - "resource"
  - "supports"
---

# HealthcareFHIRStore delete notification previous resource

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports sending the previous resource on delete notifications from HealthcareFHIRStore resources.

## Extended Definition

Config Connector supports sending the previous resource on delete notifications from HealthcareFHIRStore resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall)

## Supporting Pages

### Getting started with Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started)
- Source ID: `site-docs-reference`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to delete the PubSubTopic you created earlier, run kubectl delete with your pubsub-topic.yaml file: kubectl delete -f pubsub-topic.yaml You receive confirmation that the resource was deleted: pubsubtopic.pubsub.cnrm.cloud.google.com " TOPIC NAME " deleted By default, Config Connector deletes the PubSubTopic resource.
- Deleting a resource Use kubectl delete to delete resources.
- To change the label on the Pub/Sub topic you created in the previous section, complete the following steps: Modify the metadata section of your pubsub-topic.yaml file to change the label: apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : annotations : cnrm.cloud.google.com/project-id : PROJECT ID labels : NEW LABEL VALUE name : TOPIC NAME Replace the following: PROJECT ID : your Google Cloud project ID.
- Discovering available Google Cloud resources To see what kinds of Google Cloud resources you can create with Config Connector, run: kubectl get crds --selector cnrm.cloud.google.com/managed-by-kcc=true The output is a list of all the resources your version of Config Connector can create and manage.

### "Managing and deleting resources \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- The following Config Connector resources correspond to Google Cloud resources which have a service-generated resource ID: AccessContextManagerAccessPolicy ApigeeOrganization BillingBudgetsBudget CloudIdentityGroup CloudIdentityMembership ComputeFirewallPolicy DataCatalogPolicyTag DataCatalogTaxonomy DLPDeidentifyTemplate DLPInspectTemplate DLPJobTrigger DLPStoredInfoType EssentialContactsContact Folder IAPBrand IAPIdentityAwareProxyClient IdentityPlatformTenant MonitoringAlertPolicy MonitoringGroup MonitoringNotificationChannel MonitoringUptimeCheckConfig RecaptchaEnterpriseKey ResourceManagerLien SQLSSLCert SecretManagerSecretVersion StorageNotification StorageTransferJob TagsTagBinding TagsTagKey TagsTagValue VertexAIDataset VertexAIIndex Note: Folder is a special case.
- You can delete the bigquerydataset-sample dataset with kubectl delete . kubectl delete --namespace CC NAMESPACE -f bq-sample.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- Deleting the dataset By default, after Config Connector acquires and manages a resource, deleting the object from your cluster will delete the resource.
- Keeping resources after deletion Warning: When deleting a Config Connector resource the associated Google Cloud resource is deleted by default.

### "Installing with the GKE add-on \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- To uninstall Config Connector, complete the following steps: Use kubectl delete to remove the Config Connector CRDs along with controller components: kubectl delete ConfigConnector configconnector.core.cnrm.cloud.google.com --wait = true Disable the Config Connector add-on in your cluster using the gcloud CLI or the Google Cloud console: gcloud To disable the Config Connector add-on with gcloud , run the following command: gcloud container clusters update CLUSTER NAME --update-addons ConfigConnector = DISABLED Replace CLUSTER NAME with the name of the cluster that has Config Connector add-on installed.
- Create an IAM policy binding between the IAM service account and the predefined Kubernetes service account that Config Connector runs: gcloud iam service-accounts add-iam-policy-binding \ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --member = "serviceAccount: PROJECT ID .svc.id.goog[cnrm-system/cnrm-controller-manager]" \ --role = "roles/iam.workloadIdentityUser" Configuring Config Connector Note: When you enable the Config Connector add-on, it automatically creates a ConfigConnector CustomResource that is configured in namespaced-mode.
- To configure the operator as cluster mode, complete the following steps: Copy the following YAML file into a file named configconnector.yaml : configconnector.yaml apiVersion : core.cnrm.cloud.google.com/v1beta1 kind : ConfigConnector metadata : the name is restricted to ensure that there is only one ConfigConnector resource installed in your cluster name : configconnector.core.cnrm.cloud.google.com spec : mode : cluster googleServiceAccount : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" Setting stateIntoSpec to Absent is recommended.
- If you've previously manually installed Config Connector , uninstall it before installing the Config Connector add-on: Uninstalling cluster mode Uninstalling namespaced mode Installing the Config Connector add-on You use the Config Connector add-on by creating a new GKE cluster, or enabling it on an existing cluster.

