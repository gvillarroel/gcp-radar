---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.118Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ServiceIdentity resource"
feature_slug: "serviceidentity-resource"
latest_feature_date: "2023-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/troubleshooting"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources"
keywords:
  - "identities"
  - "serviceidentity"
  - "managing"
  - "resource"
---

# ServiceIdentity resource

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

ServiceIdentity is a Config Connector resource for managing Google service identities.

## Extended Definition

ServiceIdentity is a Config Connector resource for managing Google service identities.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)

## Supporting Pages

### "Managing resources with the resourceID field \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Managing resources with the resourceID field This page explains how to manage resources with the resourceID field.
- Acquiring a folder To acquire a folder using Config Connector with the resourceID field, complete the following steps: Copy the following contents into a file named folder.yaml . apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Folder metadata : annotations : cnrm.cloud.google.com/organization-id : ORG ID Remove the deletion-policy annotation if it is safe to delete the folder when the resource is deleted from your cluster. cnrm.cloud.google.com/deletion-policy : "abandon" name : folder-sample-for-acquisition spec : resourceID : ACQUIRED FOLDER ID displayName : ACQUIRED FOLDER DISPLAY NAME Replace the following: ORG ID with the numeric ID for your organization.
- Copy the following contents into a file named bigquery-dataset.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydataset-sample-for-creation spec : resourceID : bigquerydataset sample with resourceid defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample with the ResourceID Field" friendlyName : bigquerydataset-sample-with-resourceid location : US Apply the YAML file to your cluster. kubectl apply --namespace CC NAMESPACE -f bigquery-dataset.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- The name of the Config Connector resource is pubsub-topic-sample and the name of the Pub/Sub topic is pubsub-topic-id . apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : pubsub-topic-sample spec : resourceID : pubsub-topic-id Creating a resource with the resourceID field Note: When you manage a Google Cloud resource with the resourceID field, if the resource has a service-generated resource ID, Config Connector assumes the resource already exists and tries to acquire the resource.

### Troubleshoot Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- ServiceIdentity resource fails with IAM SERVICE NOT CONFIGURED FOR IDENTITIES Symptom Your ServiceIdentity resource has an UpdateFailed status, with an error message similar to the following: Update call failed: error applying desired state: summary: Error creating Service Identity: googleapi: Error 400: com.google.api.tenant.error.TenantManagerException: IAM SERVICE NOT CONFIGURED FOR IDENTITIES: ...
- Resolution The ServiceIdentity resource can generate service identities only for supported services.
- Check that Config Connector is running To check that Config Connector is running, verify that all of its Pods are READY : kubectl get pod -n cnrm-system Example output: NAME READY STATUS RESTARTS AGE cnrm-controller-manager-0 1/1 Running 0 1h cnrm-deletiondefender-0 1/1 Running 0 1h cnrm-resource-stats-recorder-77dc8cc4b6-mgpgp 1/1 Running 0 1h cnrm-webhook-manager-58496b66f9-pqwhz 1/1 Running 0 1h cnrm-webhook-manager-58496b66f9-wdcn4 1/1 Running 0 1h If you have Config Connector installed in namespaced-mode , then you will have one controller ( cnrm-controller-manager ) Pod for each namespace that is responsible for managing the Config Connector resources in that namespace.
- Compute Engine metadata not defined Symptom Your Config Connector resource has an UpdateFailed status with a message stating that the Compute Engine metadata is not defined, similar to the following error: Update call failed: error fetching live state: error reading underlying resource: summary: Error when reading or editing SpannerInstance "my-project/my-spanner- instance": Get "https://spanner.googleapis.com/v1/projects/my-project/instances/my-spanner-instance?alt=json": metadata: Compute Engine metadata "instance/service-accounts/default/token? scopes=https%!A(MISSING)%!F(MISSING)%!F(MISSING)www.googleapis.com%!F(MISSING)auth%!F(MISSING)compute%!C(MISSING)https%!A(MISSING)%!F(MISSING)%!F(MISSING)www.googleapis.com%!F(MISSIN G)auth%!F(MISSING)cloud-platform%!C(MISSING)https%!A(MISSING)%!F(MISSING)%!F(MISSING)www.googleapis.com%!F(MISSING)auth%!F(MISSING)cloud-identity%!C(MISSING)https%!A(MISSING)%!F(MISS ING)%!F(MISSING)www.googleapis.com%!F(MISSING)auth%!F(MISSING)ndev.clouddns.readwrite%!C(MISSING)https%!A(MISSING)%!F(MISSING)%!F(MISSING)www.googleapis.com%!F(MISSING)auth%!F(MISSIN G)devstorage.full control%!C(MISSING)https%!A(MISSING)%!F(MISSING)%!F(MISSING)www.googleapis.com%!F(MISSING)auth%!F(MISSING)userinfo.email%!C(MISSING)https%!A(MISSING)%!F(MISSING)%!F (MISSING)www.googleapis.com%!F(MISSING)auth%!F(MISSING)drive.readonly" not defined, detail: Cause It is likely that the IAM service account used by Config Connector does not exist.

### "Managing and deleting resources \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Managing and deleting resources This page explains how Config Connector manages an existing resource and handles deleting resources .
- If a resource with the same name already exists, Config Connector acquires that resource and starts managing it.
- To learn about how to use the resourceID field, see Managing resources with the resourceID field .
- To learn more, see Managing resources with the resourceID field .

