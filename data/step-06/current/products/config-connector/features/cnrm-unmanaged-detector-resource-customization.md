---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.065Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "cnrm-unmanaged-detector resource customization"
feature_slug: "cnrm-unmanaged-detector-resource-customization"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource"
keywords:
  - "unmanaged"
  - "detector"
  - "customization"
  - "cnrm"
  - "resource"
  - "supports"
---

# cnrm-unmanaged-detector resource customization

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports customizing cnrm-unmanaged-detector pod resource requests and limits.

## Extended Definition

Config Connector supports customizing cnrm-unmanaged-detector pod resource requests and limits.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource)

## Supporting Pages

### "Configure container resources and replicas \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- You can configure the following controllers: cnrm-webhook-manager cnrm-controller-manager cnrm-deletiondefender cnrm-resource-stats-recorder cnrm-unmanaged-detector (Config Connector version 1.108 and later) There are two types of custom resources used for configuration: ControllerResource and NamespacedControllerResource .
- The following components are always cluster-scoped, even when Config Connector is installed in namespaced mode: cnrm-webhook-manager cnrm-deletiondefender cnrm-resource-stats-recorder cnrm-unmanaged-detector The cnrm-controller-manager is also cluster-scoped when Config Connector is installed in cluster mode.
- Create a file named configure-webhook-manager.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : replicas : 3 containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use kubectl apply to apply the modified configuration to your cluster: kubectl apply -f configure-webhook-manager.yaml Verify the successful configuration by running the following command. kubectl get controllerresource cnrm-webhook-manager -o jsonpath='{.status.healthy}' It should display status.healthy field set to true .
- For example, to configure the memory request and limit of the webhook container of the cnrm-webhook-manager controller, create and apply the following YAML file: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use NamespacedControllerResource for the namespaced controller manager Use the NamespacedControllerResource custom resource only to configure resources for the cnrm-controller-manager when Config Connector is running in namespaced mode.

### Configure webhook timeout \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- Source ID: `site-docs-reference`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- Configure timeout for validating webhooks You can configure the following validating webhooks: deny-immutable-field-updates.cnrm.cloud.google.com deny-unknown-fields.cnrm.cloud.google.com iam-validation.cnrm.cloud.google.com resource-validation.cnrm.cloud.google.com abandon-on-uninstall.cnrm.cloud.google.com For example, you can configure the timeout of validating webhooks deny-immutable-field-updates.cnrm.cloud.google.com and deny-unknown-fields.cnrm.cloud.google.com by creating and applying the following example YAML file.
- Create a file named configure-validating-webhook-timeout.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ValidatingWebhookConfigurationCustomization metadata : name : validating-webhook spec : webhooks : - name : deny-immutable-field-updates timeoutSeconds : 12 - name : deny-unknown-fields timeoutSeconds : 15 Note: when specifying the name of webhook configuration and the names of webhooks in the YAML file, don't include the .cnrm.cloud.google.com suffix.
- Verify that the new custom timeout has been applied to the target webhooks: kubectl get validatingwebhookconfigurations validating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="deny-immutable-field-updates.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' kubectl get validatingwebhookconfigurations validating-webhook.cnrm.cloud.google.com -o jsonpath='{.webhooks[?(@.name=="deny-unknown-fields.cnrm.cloud.google.com")].timeoutSeconds}{"\n"}' Applying the customization could take a few minutes.
- Create a file named configure-mutating-webhook-timeout.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : MutatingWebhookConfigurationCustomization metadata : name : mutating-webhook spec : webhooks : - name : container-annotation-handler timeoutSeconds : 20 Note: when specifying the name of webhook configuration and the names of webhooks in the YAML file, don't include the .cnrm.cloud.google.com suffix.

### "AccessContextManagerServicePerimeterResource \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- AccessContextManagerServicePerimeterResource Property Value Google Cloud Service Name AccessContextManager Google Cloud Service Documentation /vpc-service-controls/docs/ Google Cloud REST Resource Name accesscontextmanager.v1.accessPolicies.servicePerimeters Google Cloud REST Resource Documentation /access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters Config Connector Resource Short Names gcpaccesscontextmanagerserviceperimeterresource gcpaccesscontextmanagerserviceperimeterresources accesscontextmanagerserviceperimeterresource Config Connector Service Name accesscontextmanager.googleapis.com Config Connector Resource Fully Qualified Name accesscontextmanagerserviceperimeterresources.accesscontextmanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema perimeterNameRef : external : string name : string namespace : string resourceRef : external : string name : string namespace : string Fields perimeterNameRef Required object Only the external field is supported to configure the reference.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1 kind : AccessContextManagerServicePerimeterResource metadata : name : accesscontextmanagerserviceperimeterresource-sample spec : perimeterNameRef : Referencing a resource name leads to recursive reference and KCC does not support the feature for now.
- More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string observedGeneration : integer Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- Replace "${ACCESS POLICY NUMBER}" with the numeric ID for your Access Policy Replace "${PERIMETER SHORT NAME}" with the name for the Service Perimeter to add this resource to external : "accessPolicies/${ACCESS POLICY NUMBER}/servicePerimeters/${PERIMETER SHORT NAME}" resourceRef : Replace "${PROJECT NUMBER}" with the number for the project to be protected by the perimeter external : "projects/${PROJECT NUMBER}" Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .

