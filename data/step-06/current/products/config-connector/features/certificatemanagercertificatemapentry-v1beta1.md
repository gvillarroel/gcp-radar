---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.046Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "CertificateManagerCertificateMapEntry v1beta1"
feature_slug: "certificatemanagercertificatemapentry-v1beta1"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource"
keywords:
  - "certificatemanagercertificatemapentry"
  - "promoted"
  - "v1alpha1"
  - "v1beta1"
  - "resource"
---

# CertificateManagerCertificateMapEntry v1beta1

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

The CertificateManagerCertificateMapEntry resource was promoted from v1alpha1 to v1beta1.

## Extended Definition

The CertificateManagerCertificateMapEntry resource was promoted from v1alpha1 to v1beta1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource)

## Supporting Pages

### "Managing resources with the resourceID field \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Acquiring a folder To acquire a folder using Config Connector with the resourceID field, complete the following steps: Copy the following contents into a file named folder.yaml . apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Folder metadata : annotations : cnrm.cloud.google.com/organization-id : ORG ID Remove the deletion-policy annotation if it is safe to delete the folder when the resource is deleted from your cluster. cnrm.cloud.google.com/deletion-policy : "abandon" name : folder-sample-for-acquisition spec : resourceID : ACQUIRED FOLDER ID displayName : ACQUIRED FOLDER DISPLAY NAME Replace the following: ORG ID with the numeric ID for your organization.
- Copy the following contents into a file named bigquery-dataset.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydataset-sample-for-creation spec : resourceID : bigquerydataset sample with resourceid defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample with the ResourceID Field" friendlyName : bigquerydataset-sample-with-resourceid location : US Apply the YAML file to your cluster. kubectl apply --namespace CC NAMESPACE -f bigquery-dataset.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- The name of the Config Connector resource is pubsub-topic-sample and the name of the Pub/Sub topic is pubsub-topic-id . apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : pubsub-topic-sample spec : resourceID : pubsub-topic-id Creating a resource with the resourceID field Note: When you manage a Google Cloud resource with the resourceID field, if the resource has a service-generated resource ID, Config Connector assumes the resource already exists and tries to acquire the resource.
- Config Connector lets you explicitly specify the resource ID of a Google Cloud resource using the immutable but optional resourceID field to create or acquire the resource. "Immutable, but optional" means that you can choose to specify or not specify the resourceID field, but you can't make any changes to the value of the resourceID field after applying the manifest to your cluster.

### Creating resource references \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Copy the following into a file named pubsub-topic.yaml : apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : TOPIC NAME Replace TOPIC NAME with your desired PubSubTopic name For example, to create a topic named myTopic you could use the following YAML file: apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : myTopic Create the PubSubTopic with kubectl apply . kubectl --namespace CC NAMESPACE apply -f pubsub-topic.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- For example, the IAMPolicyMember below references a Project with the project ID test-project . apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : test-iampolicymember spec : member : serviceAccount:test-serviceaccount@test-project. iam.gserviceaccount.com role : roles/storage.admin resourceRef : kind : Project external : projects/test-project Note: You must set values for kind when using external references with IAMPolicy , IAMPartialPolicy and IAMPolicyMember .
- For example, the YAML referencing the topic myTopic you created earlier is: apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubSubscription metadata : name : pubsubsubscription-referencing-topic spec : topicRef : name : myTopic Create the PubSubSubscription with kubectl apply . kubectl --namespace CC NAMESPACE apply -f pubsub-subscription.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- For example, the ComputeURLMap below references a BackendService named test-backendservice . apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeURLMap metadata : name : test-urlmap spec : location : global defaultService : backendServiceRef : external : https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/test-backendservice The format of values accepted by external depends on the resource.

### "AccessContextManagerServicePerimeterResource \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1 kind : AccessContextManagerServicePerimeterResource metadata : name : accesscontextmanagerserviceperimeterresource-sample spec : perimeterNameRef : Referencing a resource name leads to recursive reference and KCC does not support the feature for now.
- AccessContextManagerServicePerimeterResource Property Value Google Cloud Service Name AccessContextManager Google Cloud Service Documentation /vpc-service-controls/docs/ Google Cloud REST Resource Name accesscontextmanager.v1.accessPolicies.servicePerimeters Google Cloud REST Resource Documentation /access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters Config Connector Resource Short Names gcpaccesscontextmanagerserviceperimeterresource gcpaccesscontextmanagerserviceperimeterresources accesscontextmanagerserviceperimeterresource Config Connector Service Name accesscontextmanager.googleapis.com Config Connector Resource Fully Qualified Name accesscontextmanagerserviceperimeterresources.accesscontextmanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema perimeterNameRef : external : string name : string namespace : string resourceRef : external : string name : string namespace : string Fields perimeterNameRef Required object Only the external field is supported to configure the reference.
- More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string observedGeneration : integer Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- Replace "${ACCESS POLICY NUMBER}" with the numeric ID for your Access Policy Replace "${PERIMETER SHORT NAME}" with the name for the Service Perimeter to add this resource to external : "accessPolicies/${ACCESS POLICY NUMBER}/servicePerimeters/${PERIMETER SHORT NAME}" resourceRef : Replace "${PROJECT NUMBER}" with the number for the project to be protected by the perimeter external : "projects/${PROJECT NUMBER}" Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .

