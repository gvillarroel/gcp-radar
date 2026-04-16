---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.038Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "AlloyDBBackup resource"
feature_slug: "alloydbbackup-resource"
latest_feature_date: "2023-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbbackup"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources"
keywords:
  - "alloydbbackup"
  - "v1beta1"
  - "managing"
  - "resource"
  - "added"
---

# AlloyDBBackup resource

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector added support for managing the AlloyDBBackup resource in v1beta1.

## Extended Definition

Config Connector added support for managing the AlloyDBBackup resource in v1beta1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbbackup](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbbackup)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)

## Supporting Pages

### AlloyDBBackup \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbbackup](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbbackup)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBBackup metadata : name : alloydbbackup-sample spec : clusterNameRef : external : "projects/${PROJECT ID?}/locations/us-central1/clusters/alloydbbackup-dep" location : us-central1 encryptionConfig : kmsKeyNameRef : external : "projects/${PROJECT ID?}/locations/us-central1/keyRings/alloydbbackup-dep/cryptoKeys/alloydbbackup-dep" projectRef : external : ${PROJECT ID?} --- apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBCluster metadata : name : alloydbbackup-dep spec : location : us-central1 networkConfig : networkRef : name : alloydbbackup-dep projectRef : external : ${PROJECT ID?} --- apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBInstance metadata : name : alloydbbackup-dep spec : clusterRef : name : alloydbbackup-dep instanceTypeRef : name : alloydbbackup-dep --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : alloydbbackup-dep spec : location : global addressType : INTERNAL networkRef : name : alloydbbackup-dep prefixLength : 16 purpose : VPC PEERING --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeNetwork metadata : name : alloydbbackup-dep --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPartialPolicy metadata : name : alloydbbackup-dep spec : resourceRef : apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSCryptoKey name : alloydbbackup-dep bindings : - role : roles/cloudkms.cryptoKeyEncrypterDecrypter members : - member : serviceAccount:service-${PROJECT NUMBER?}@gcp-sa-alloydb.iam.gserviceaccount.com --- apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSCryptoKey metadata : labels : source : kcc-alloydbbackup-sample name : alloydbbackup-dep spec : keyRingRef : name : alloydbbackup-dep --- apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSKeyRing metadata : name : alloydbbackup-dep spec : location : us-central1 --- apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1 kind : ServiceNetworkingConnection metadata : name : alloydbbackup-dep spec : networkRef : name : alloydbbackup-dep reservedPeeringRanges : - external : alloydbbackup-dep service : servicenetworking.googleapis.com Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- AlloyDBBackup Property Value Google Cloud Service Name AlloyDB for PostgreSQL Google Cloud Service Documentation /alloydb/docs/ Google Cloud REST Resource Name v1.projects.locations.backups Google Cloud REST Resource Documentation /alloydb/docs/reference/rest/v1/projects.locations.clusters Config Connector Resource Short Names gcpalloydbbackup gcpalloydbbackups alloydbbackup Config Connector Service Name alloydb.googleapis.com Config Connector Resource Fully Qualified Name alloydbbackups.alloydb.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema clusterNameRef : external : string name : string namespace : string description : string encryptionConfig : kmsKeyName : string location : string projectRef : external : string name : string namespace : string resourceID : string Fields clusterNameRef Required object The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}). clusterNameRef.external Optional string Allowed value: The name field of an AlloyDBCluster resource. clusterNameRef.name Optional string Name of the referent.
- Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string createTime : string encryptionInfo : - encryptionType : string kmsKeyVersions : - string etag : string name : string observedGeneration : integer reconciling : boolean state : string uid : string updateTime : string Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.
- The location where the alloydb backup should reside. projectRef Required object The project that this resource belongs to. projectRef.external Optional string Allowed value: The name field of a Project resource. projectRef.name Optional string Name of the referent.

### "Managing resources with the resourceID field \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Acquiring a folder To acquire a folder using Config Connector with the resourceID field, complete the following steps: Copy the following contents into a file named folder.yaml . apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Folder metadata : annotations : cnrm.cloud.google.com/organization-id : ORG ID Remove the deletion-policy annotation if it is safe to delete the folder when the resource is deleted from your cluster. cnrm.cloud.google.com/deletion-policy : "abandon" name : folder-sample-for-acquisition spec : resourceID : ACQUIRED FOLDER ID displayName : ACQUIRED FOLDER DISPLAY NAME Replace the following: ORG ID with the numeric ID for your organization.
- Copy the following contents into a file named bigquery-dataset.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydataset-sample-for-creation spec : resourceID : bigquerydataset sample with resourceid defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample with the ResourceID Field" friendlyName : bigquerydataset-sample-with-resourceid location : US Apply the YAML file to your cluster. kubectl apply --namespace CC NAMESPACE -f bigquery-dataset.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- The name of the Config Connector resource is pubsub-topic-sample and the name of the Pub/Sub topic is pubsub-topic-id . apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : pubsub-topic-sample spec : resourceID : pubsub-topic-id Creating a resource with the resourceID field Note: When you manage a Google Cloud resource with the resourceID field, if the resource has a service-generated resource ID, Config Connector assumes the resource already exists and tries to acquire the resource.
- Managing resources with the resourceID field This page explains how to manage resources with the resourceID field.

### "Managing and deleting resources \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a BigQuery dataset named bigquerydatasetsample with bq . bq --location=US mk \ --dataset \ --default table expiration 3600 \ --description description \ PROJECT ID :bigquerydatasetsample Copy the following contents into a file named bq-sample.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydatasetsample spec : defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample" friendlyName : bigquerydataset-sample location : US Apply the yaml to your cluster. kubectl apply --namespace CC NAMESPACE -f bq-sample.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- For example, the YAML for the BigQuery dataset described earlier including the abandon deletion policy is below: apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydatasetsample annotations : cnrm.cloud.google.com/deletion-policy : abandon spec : defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample" friendlyName : bigquerydataset-sample location : US Resources with restrictions around acquisition Some resources can't be acquired following the instructions in the preceding section.
- Managing and deleting resources This page explains how Config Connector manages an existing resource and handles deleting resources .
- If a resource with the same name already exists, Config Connector acquires that resource and starts managing it.

