---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.282Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ComputeSSLProxy resource"
feature_slug: "computesslproxy-resource"
latest_feature_date: "2019-11-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource"
keywords:
  - "computesslproxy"
  - "resource"
  - "supports"
---

# ComputeSSLProxy resource

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports the ComputeSSLProxy resource.

## Extended Definition

Config Connector supports the ComputeSSLProxy resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource)

## Supporting Pages

### "AccessContextManagerServicePerimeterResource \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource)
- Source ID: `site-docs-root`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- AccessContextManagerServicePerimeterResource Property Value Google Cloud Service Name AccessContextManager Google Cloud Service Documentation /vpc-service-controls/docs/ Google Cloud REST Resource Name accesscontextmanager.v1.accessPolicies.servicePerimeters Google Cloud REST Resource Documentation /access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters Config Connector Resource Short Names gcpaccesscontextmanagerserviceperimeterresource gcpaccesscontextmanagerserviceperimeterresources accesscontextmanagerserviceperimeterresource Config Connector Service Name accesscontextmanager.googleapis.com Config Connector Resource Fully Qualified Name accesscontextmanagerserviceperimeterresources.accesscontextmanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema perimeterNameRef : external : string name : string namespace : string resourceRef : external : string name : string namespace : string Fields perimeterNameRef Required object Only the external field is supported to configure the reference.
- More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string observedGeneration : integer Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- Replace "${ACCESS POLICY NUMBER}" with the numeric ID for your Access Policy Replace "${PERIMETER SHORT NAME}" with the name for the Service Perimeter to add this resource to external : "accessPolicies/${ACCESS POLICY NUMBER}/servicePerimeters/${PERIMETER SHORT NAME}" resourceRef : Replace "${PROJECT NUMBER}" with the number for the project to be protected by the perimeter external : "projects/${PROJECT NUMBER}" Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- See the License for the specific language governing permissions and limitations under the License. apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1 kind : AccessContextManagerServicePerimeterResource metadata : name : accesscontextmanagerserviceperimeterresource-sample spec : perimeterNameRef : Referencing a resource name leads to recursive reference and KCC does not support the feature for now.

### "Configure container resources and replicas \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- Source ID: `site-docs-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Create a file named configure-webhook-manager.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : replicas : 3 containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use kubectl apply to apply the modified configuration to your cluster: kubectl apply -f configure-webhook-manager.yaml Verify the successful configuration by running the following command. kubectl get controllerresource cnrm-webhook-manager -o jsonpath='{.status.healthy}' It should display status.healthy field set to true .
- For example, to configure the memory request and limit of the webhook container of the cnrm-webhook-manager controller, create and apply the following YAML file: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use NamespacedControllerResource for the namespaced controller manager Use the NamespacedControllerResource custom resource only to configure resources for the cnrm-controller-manager when Config Connector is running in namespaced mode.
- The following YAML file shows an example configuration: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : NamespacedControllerResource metadata : name : cnrm-controller-manager # name should not contain the namespace ID suffix namespace : NAMESPACE spec : containers : - name : manager resources : limits : cpu : 200m memory : 512Mi requests : cpu : 100m memory : 256Mi Replace NAMESPACE with the name of your namespace.
- After deletion, the Config Connector operator recreates the controllers with the default container resources and replicas. kubectl delete -f configure-webhook-manager.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Managing and deleting resources \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- Source ID: `site-docs-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- The following Config Connector resources correspond to Google Cloud resources which have a service-generated resource ID: AccessContextManagerAccessPolicy ApigeeOrganization BillingBudgetsBudget CloudIdentityGroup CloudIdentityMembership ComputeFirewallPolicy DataCatalogPolicyTag DataCatalogTaxonomy DLPDeidentifyTemplate DLPInspectTemplate DLPJobTrigger DLPStoredInfoType EssentialContactsContact Folder IAPBrand IAPIdentityAwareProxyClient IdentityPlatformTenant MonitoringAlertPolicy MonitoringGroup MonitoringNotificationChannel MonitoringUptimeCheckConfig RecaptchaEnterpriseKey ResourceManagerLien SQLSSLCert SecretManagerSecretVersion StorageNotification StorageTransferJob TagsTagBinding TagsTagKey TagsTagValue VertexAIDataset VertexAIIndex Note: Folder is a special case.
- Create a BigQuery dataset named bigquerydatasetsample with bq . bq --location=US mk \ --dataset \ --default table expiration 3600 \ --description description \ PROJECT ID :bigquerydatasetsample Copy the following contents into a file named bq-sample.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydatasetsample spec : defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample" friendlyName : bigquerydataset-sample location : US Apply the yaml to your cluster. kubectl apply --namespace CC NAMESPACE -f bq-sample.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- For example, the YAML for the BigQuery dataset described earlier including the abandon deletion policy is below: apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydatasetsample annotations : cnrm.cloud.google.com/deletion-policy : abandon spec : defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample" friendlyName : bigquerydataset-sample location : US Resources with restrictions around acquisition Some resources can't be acquired following the instructions in the preceding section.
- Resources that cannot be acquired The following Config Connector resources do not have support for acquiring existing Google Cloud resources: DataflowFlexTemplateJob FirestoreIndex IAMServiceAccountKey What's next Learn about how Config Connector models Google Cloud resources with Kubernetes constructs .

