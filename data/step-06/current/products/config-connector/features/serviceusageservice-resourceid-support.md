---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.260Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ServiceUsageService resourceID support"
feature_slug: "serviceusageservice-resourceid-support"
latest_feature_date: "2020-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids"
  - "https://docs.cloud.google.com/config-connector/docs/troubleshooting"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally"
keywords:
  - "serviceusageservice"
  - "resourceid"
  - "supports"
  - "field"
---

# ServiceUsageService resourceID support

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

ServiceUsageService supports the resourceID field.

## Extended Definition

ServiceUsageService supports the resourceID field.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally)

## Supporting Pages

### "Managing resources with the resourceID field \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Acquiring a folder To acquire a folder using Config Connector with the resourceID field, complete the following steps: Copy the following contents into a file named folder.yaml . apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Folder metadata : annotations : cnrm.cloud.google.com/organization-id : ORG ID Remove the deletion-policy annotation if it is safe to delete the folder when the resource is deleted from your cluster. cnrm.cloud.google.com/deletion-policy : "abandon" name : folder-sample-for-acquisition spec : resourceID : ACQUIRED FOLDER ID displayName : ACQUIRED FOLDER DISPLAY NAME Replace the following: ORG ID with the numeric ID for your organization.
- Copy the following contents into a file named bigquery-dataset.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydataset-sample-for-creation spec : resourceID : bigquerydataset sample with resourceid defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample with the ResourceID Field" friendlyName : bigquerydataset-sample-with-resourceid location : US Apply the YAML file to your cluster. kubectl apply --namespace CC NAMESPACE -f bigquery-dataset.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- The name of the Config Connector resource is pubsub-topic-sample and the name of the Pub/Sub topic is pubsub-topic-id . apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : pubsub-topic-sample spec : resourceID : pubsub-topic-id Creating a resource with the resourceID field Note: When you manage a Google Cloud resource with the resourceID field, if the resource has a service-generated resource ID, Config Connector assumes the resource already exists and tries to acquire the resource.
- Config Connector lets you explicitly specify the resource ID of a Google Cloud resource using the immutable but optional resourceID field to create or acquire the resource. "Immutable, but optional" means that you can choose to specify or not specify the resourceID field, but you can't make any changes to the value of the resourceID field after applying the manifest to your cluster.

### Manage fields externally \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally](https://docs.cloud.google.com/config-connector/docs/concepts/managing-fields-externally)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- To see if your resource supports the annotation, check the corresponding resource reference page . metadata : annotations : cnrm.cloud.google.com/state-into-spec : absent By setting value of state-into-spec as absent , Config Connector ignores list fields if they are not specified in your resource configuration.
- As an example: if the user applies a resource configuration without setting a value for bar in the spec: spec : foo : "foo" If the value of the bar field is baz in the Google Cloud API, the resource in the api-server is populated to that value: object in the api-server spec : foo : "foo" bar : "baz" # populated by first reconciliation If the Google Cloud resource is modified directly such that bar is now baz-2 , the Google Cloud API is corrected to the value that was initially populated in the resource spec: baz : object in the api-server spec : foo : "foo" bar : "baz" # still the originally populated value, and overrides the Google Cloud value Behavior for list fields in resource spec Due to technical limitation in Config Connector, list fields in your resource configuration cannot be managed externally by default.
- Behavior without server-side apply If server-side apply is not enabled, unspecified fields in the resource spec are populated with the value read from the Google Cloud API, and Config Connector enforces those initially populated values.
- When Config Connector creates a resource on Google Cloud, fields left unspecified in the spec take on values from the API unless they are not readable (for example, are not available by using a GET HTTP request).

### Troubleshoot Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Resolution If you'd like to give your resource a name that is not a valid Kubernetes name, but is a valid Google Cloud resource name, you can use the resourceID , field as shown in the following example: apiVersion : sql.cnrm.cloud.google.com/v1beta1 kind : SQLUser metadata : name : 'test' spec : instanceRef : name : sqlinstance-sample-postgresql host : "%" type : CLOUD IAM USER resourceID : test.example@example-project.iam This configuration causes Config Connector to use resourceID instead of metadata.name as the name of the resource.
- Type of issue Common issues Reconciliation Resource keeps updating every 5-15 mins Resource has no status KNV2005: syncer excessively updating resource Resource deleted by Config Connector Controller Pod OOMKilled Deletion Deletions of namespaces stuck at Terminating Deletions of resources stuck at DeleteFailed after project was deleted Permissions Compute Engine Metadata not defined Error 403: Request had insufficient authentication scopes 403 Forbidden: The caller does not have permission Error 403: Caller is missing IAM permission Update error with IAMPolicy, IAMPartialPolicy and IAMPolicyMember Installation and upgrades Version not supported in Config Connector add-on installations failed calling webhook PodSecurityPolicy prevents upgrades Configuration Cannot make changes to immutable fields No matches for kind "Foo" Labels are not propagated to the Google Cloud resource Error due to special characters in resource name Unable to remove fields from resource spec Reconciliation The following section lists common issues related to reconciliation of resources by Config Connector.
- The following example shows the targetServiceAccounts field that we want to remove: spec : targetServiceAccounts : - external : "foo-bar@foo-project.iam.gserviceaccount.com" - external : "bar@foo-project.iam.gserviceaccount.com" To remove this field, set the value to empty: spec : targetServiceAccounts : [] For primitive type field, set the field to empty by using one of the following: Type Empty value string "" bool "false" integer 0 The following example shows the identityNamespace field that we want to remove: spec : workloadIdentityConfig : identityNamespace : "foo-project.svc.id.goog" To remove this field, set the value to empty: spec : workloadIdentityConfig : identityNamespace : "" For object type fields, you can try to set the subfields of the object type as empty or default following the guidance in the previous section and verify if it works.
- Error updating the immutable fields when there is no update You might see the following errors in the status of the Config Connector resource shortly after you create or acquire a Google Cloud resource using Config Connector: Update call failed: error applying desired state: infeasible update: ({true \<nil\>}) would require recreation ( example ) Update call failed: cannot make changes to immutable field(s) ( example ) This might not mean that you've actually updated the resource, but the reason might be that the Google Cloud API has made a change to an immutable field that was managed by you in the Config Connector resource.

