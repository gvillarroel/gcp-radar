---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.259Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "DataflowJob acquisition by name"
feature_slug: "dataflowjob-acquisition-by-name"
latest_feature_date: "2020-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources"
  - "https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects"
keywords:
  - "acquired"
  - "acquisition"
  - "dataflowjob"
  - "name"
---

# DataflowJob acquisition by name

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

DataflowJob can be acquired by name.

## Extended Definition

DataflowJob can be acquired by name.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects)

## Supporting Pages

### "Managing resources with the resourceID field \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids](https://docs.cloud.google.com/config-connector/docs/how-to/managing-resources-with-resource-ids)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Acquiring a folder To acquire a folder using Config Connector with the resourceID field, complete the following steps: Copy the following contents into a file named folder.yaml . apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1 kind : Folder metadata : annotations : cnrm.cloud.google.com/organization-id : ORG ID Remove the deletion-policy annotation if it is safe to delete the folder when the resource is deleted from your cluster. cnrm.cloud.google.com/deletion-policy : "abandon" name : folder-sample-for-acquisition spec : resourceID : ACQUIRED FOLDER ID displayName : ACQUIRED FOLDER DISPLAY NAME Replace the following: ORG ID with the numeric ID for your organization.
- Use kubectl describe to see details on the folder. kubectl describe --namespace CC NAMESPACE folder folder-sample-for-acquisition Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- ACQUIRED FOLDER DISPLAY NAME with the display name for the folder to be acquired.
- Copy the following contents into a file named bigquery-dataset.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydataset-sample-for-creation spec : resourceID : bigquerydataset sample with resourceid defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample with the ResourceID Field" friendlyName : bigquerydataset-sample-with-resourceid location : US Apply the YAML file to your cluster. kubectl apply --namespace CC NAMESPACE -f bigquery-dataset.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.

### "Managing and deleting resources \_|\_ Config Connector \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- For example, the YAML for the BigQuery dataset described earlier including the abandon deletion policy is below: apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydatasetsample annotations : cnrm.cloud.google.com/deletion-policy : abandon spec : defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample" friendlyName : bigquerydataset-sample location : US Resources with restrictions around acquisition Some resources can't be acquired following the instructions in the preceding section.
- Create a BigQuery dataset named bigquerydatasetsample with bq . bq --location=US mk \ --dataset \ --default table expiration 3600 \ --description description \ PROJECT ID :bigquerydatasetsample Copy the following contents into a file named bq-sample.yaml . apiVersion : bigquery.cnrm.cloud.google.com/v1beta1 kind : BigQueryDataset metadata : name : bigquerydatasetsample spec : defaultTableExpirationMs : 3600000 description : "BigQuery Dataset Sample" friendlyName : bigquerydataset-sample location : US Apply the yaml to your cluster. kubectl apply --namespace CC NAMESPACE -f bq-sample.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- Resources that cannot be acquired The following Config Connector resources do not have support for acquiring existing Google Cloud resources: DataflowFlexTemplateJob FirestoreIndex IAMServiceAccountKey What's next Learn about how Config Connector models Google Cloud resources with Kubernetes constructs .
- Use kubectl describe to see details on the dataset. kubectl describe --namespace CC NAMESPACE bigquerydataset bigquerydatasetsample Replace CC NAMESPACE with the namespace Config Connector manages resources from.

### "Namespaces and Google Cloud projects \_|\_ Config Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Organizing resources with projects and folders For example, if you want to create a Cloud SQL Instance with a name of mySQL in your project with a project ID of myProject , then run this command to annotate your namespace: kubectl annotate namespace \ NAMESPACE NAME cnrm.cloud.google.com/project-id="myProject" Replace NAMESPACE NAME with your Namespace name.
- How Config Connector uses Namespaces Config Connector can use the annotations on the resource's Namespace to determine what project, folder, or organization to create the resources in.
- Using Namespaces with projects, folders, and organizations Google Cloud supports organizing resources at the Project, Folder, and Organization levels.
- Config Connector creates a corresponding Cloud SQL instance in your specified Google Cloud project, based on the configured namespace annotation.

