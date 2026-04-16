---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.717Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Deletion protection"
feature_slug: "deletion-protection"
latest_feature_date: "2024-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/cmek"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc"
keywords:
  - "deletion"
  - "protection"
  - "helps"
  - "prevent"
  - "accidental"
  - "removal"
  - "of"
  - "new"
---

# Deletion protection

Product: Dataproc Metastore
Coverage: MEDIUM

## Step 02 Summary

Deletion protection helps prevent accidental removal of new or existing Dataproc Metastore services.

## Extended Definition

Deletion protection helps prevent accidental removal of new or existing Dataproc Metastore services.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster)
- [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)
- [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc)

## Supporting Pages

### Deploy a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster](https://docs.cloud.google.com/dataproc-metastore/docs/create-service-cluster)
- Source ID: `site-api-reference`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service helps you manage the metadata of your data lakes and provides interoperability between the various data processing tools you're using.
- Linux cluster-1-m 3.16.0-0.bpo.4-amd64 ... ... example-cluster@cluster-1-m: $ To start Hive and create a database and table, run the following commands in the SSH session: Start Hive. hive Create a database called myDatabase . create database myDatabase; Show the database you created. show databases; Use the database you created. use myDatabase; Create a table called myTable . create table myTable(id int,name string); List the tables under myDatabase . show tables; Describe the schema of the table you created. desc MyTable; Running these commands show an output similar to the following: $hive hive> show databases; OK default hive> create database myDatabase; OK hive> use myDatabase; OK hive> create table myTable(id int,name string); OK hive> show tables; OK myTable hive> desc myTable; OK id int name string Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.
- Enable the APIs Required Roles To get the permissions that you need to create a Dataproc Metastore and a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: To grant full access to all Dataproc Metastore resources, including setting IAM permissions: ( roles/metastore.admin ) on the user account or service account To grant full control of Dataproc Metastore resources: Dataproc Metastore Editor ( roles/metastore.editor ) on the user account or service account To create a Managed Service for Apache Spark cluster: ( roles/dataproc.worker ) on the service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- For more information, see Cluster creation fails due to insufficient roles . gcloud CLI To create a cluster using the provided default settings, run the following gcloud dataproc clusters create command: gcloud dataproc clusters create example-cluster \ --dataproc-metastore=projects/ PROJECT ID /locations/us-central1/services/example-service \ --region=us-central1 Replace PROJECT ID with the project ID of the project that you created your Dataproc Metastore service in.

### "Encrypt data with customer-managed encryption keys \_|\_ Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Under the Configuration tab, verify that the details show CMEK is enabled. gcloud To create a single-region service with CMEK encryption, run the Google Cloud gcloud metastore services create command: gcloud metastore services create SERVICE \ --encryption-kms-key= KMS KEY Replace the following: SERVICE : the name of the new service.
- To create a key To create a key that's stored inside your key ring, run the following gcloud kms keys create command. gcloud kms keys create KEY NAME \ --project= PROJECT ID \ --location= LOCATION \ --keyring= KEY RING \ --purpose=encryption Replace the following: KEY NAME : the name of the key.
- What's next Import metadata into a service Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Verify the service's encryption configuration: In the Google Cloud console, go to the Dataproc Metastore page: Go to Google Cloud console On the Dataproc Metastore page, click the name of the service you'd like to view.

### Dataproc Metastore administrator interface \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows a sample command that moves a table called test-table2 to a new Cloud Storage bucket. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -X POST -d '{"resource name": "databases/testdb1/tables/test-table2", "location uri":"gs://gcs-bucket-dpms1-9425bd83-b794-4f1c-9e79-2d833f758cc1/empty"}' https://metastore.googleapis.com/projects/dpms/locations/us-central1/services/dpms1:alterLocation Alter table properties This operation lets you alter the properties of a table, such as a custom key-value pair that you're using to store data.
- This command doesn't transfer any existing data to the new location. gcloud CLI To alter the resource location of metadata, run the following gcloud metastore services alter-metadata-resource-location command: gcloud metastore services alter-metadata-resource-location SERVICE \ --location= LOCATION \ --resource name= RESOURCE NAME \ --location uri= LOCATION URI Replace the following: SERVICE : the name of your Dataproc Metastore service.
- DESTINATION DB NAME : the name of the new database that you want to move the table to.
- DESTINATION DB NAME : the name of the new database that you want to move the table to.

### Dataproc Metastore API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UpdateService Updates the parameters of a single service. google.cloud.metastore.v1alpha.DataprocMetastoreFederation Methods CreateFederation Creates a metastore federation in a project and location.
- UpdateService Updates the parameters of a single service. google.cloud.metastore.v1beta.DataprocMetastoreFederation Methods CreateFederation Creates a metastore federation in a project and location.
- UpdateService Updates the parameters of a single service. google.cloud.metastore.v1.DataprocMetastoreFederation Methods CreateFederation Creates a metastore federation in a project and location.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

