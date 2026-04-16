---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.226Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Cloud Storage connector SignURL action"
feature_slug: "cloud-storage-connector-signurl-action"
latest_feature_date: "2023-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure"
keywords:
  - "storage"
  - "connector"
  - "signurl"
  - "action"
  - "the"
  - "provides"
---

# Cloud Storage connector SignURL action

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The Cloud Storage connector provides a SignURL action.

## Extended Definition

The Cloud Storage connector provides a SignURL action.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure)

## Supporting Pages

### Cloud Storage \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure)
- Source ID: `site-docs-root-2`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Actions The Google Cloud Storage connection supports the following actions: DownloadObject UploadObject CopyObject MoveObject DeleteObject SignURL Note: The results of all the entity operations and actions will be available as a JSON response in the Connectors task's connectorOutputPayload response parameter after you run your integration.
- If the action is successful, you will get the signed URL in the response similar to the following: { "Success": "true", "SignURL": "https://storage.googleapis.com/example-bucket/cat.jpeg?X-Goog-Algorithm= GOOG4-RSA-SHA256&X-Goog-Credential=example%40example-project.iam.gserviceaccount.com %2F20181026%2Fus-central1%2Fstorage%2Fgoog4 request&X-Goog-Date=20181026T18 1309Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=247a2aa45f16 9edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa849 6def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dc c1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c2058 0e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a 66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823 a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b13344703 2ea7abedc098d2eb14a7" } Considerations A downloadable object can have a maximum size of 10 MB.
- System limitations The Google Cloud Storage connector can process a maximum of 10 transactions per second, per node , and throttles any transactions beyond this limit.
- Grant the following IAM roles to the service account that you want to use for the connector: roles/secretmanager.viewer roles/secretmanager.secretAccessor roles/storage.admin A service account is a special type of Google account intended to represent a non-human user that needs to authenticate and be authorized to access data in Google APIs.

### "Azure Data Lake Storage \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Shared Access Signature connection type Fieldname Details Location us-central1 Connector azuredatalakestorage Connector version 1 Connection Name adls-gen2-conn-public Enable Cloud Logging Yes Service Account account@my-project.iam.gserviceaccount.com Account google-cloud-dslgen3 Directory directory File System container Include Sub Directories No Minimum number of nodes 2 Maximum number of nodes 50 Shared Access Signature SHARED ACCESS SIGNATURE Secret Version 1 Account access key connection type Fieldname Details Location us-central1 Connector azuredatalakestorage Connector version 1 Connection Name azure-data-lake-conn Enable Cloud Logging Yes Service Account account@my-project.iam.gserviceaccount.com Account google-cloud-dslgen3 Directory north-america File System container Include Sub Directories No Minimum number of nodes 2 Maximum number of nodes 50 Account Access key ACCOUNT ACCESS KEY Secret Version 1 JWT authentication connection type Fieldname Details Location us-central1 Connector azuredatalakestorage Connector version 1 Connection Name adls-gen2-jwt-conn Enable Cloud Logging Yes Service Account account@my-project.iam.gserviceaccount.com Account your-adls-account-name Directory north-america File System data-lake-container Include Sub Directories Yes Minimum number of nodes 2 Maximum number of nodes 50 Authentication type JWT Authentication Client ID CLIENT ID Private Key PRIVATE KEY SECRET Private Key Password PRIVATE KEY PASSWORD SECRET Secret Version (for Private Key) 1 Secret Version (for Private Key Password) 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- System limitations The Azure Data Lake Storage connector can process 5 transactions per second, per node , and throttles any transactions beyond this limit.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Path" : "testdirectory1/test1.pdf" , "HasBytes" : true } If the action is successful, the DownloadFile task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Success" : "True" , "ContentBytes" : "UEsDBBQABgAIAAAAIQCj77sdZQEAAFIFAAATAAgCW0NvbnRlbnRfVHlwZXNdLnhtbCCiBAIooA" }] Example - Upload a file This example uploads content as a blob.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Path" : "testblob2" , "LeaseAction" : "Acquire" , "LeaseDuration" : 60.0 } If the action is successful, the LeaseBlob task's connectorOutputPayload response parameter will have a value similar to the following: [{ "LeaseId" : "7aae9ca2-f015-41b6-9bdf-5fd3401fc493" , "Success" : "true" }] Example - Rename a blob This example renames a blob.

### BigQuery \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/bigquery/configure)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Supported values are: AUTO, ALWAYS, NEVER, TUNNEL System limitations The BigQuery connector can process a maximum of 8 transactions per second, per node , and throttles any transactions beyond this limit.
- The results of all the entity operations and actions will be available as a JSON response in the Connectors task's connectorOutputPayload response parameter after you run your integration.
- You can use BigQuery connector to integrate data from multiple Google Cloud services or other third-party services, such as Cloud Storage or Amazon S3.
- When you configure the connector task , in the type of action you want to perform, select Actions .

### Confluence \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Actions The Confluence connector provides actions such as DownloadAttachment and UploadAttachment.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "SpaceId" : "12345" , "Status" : "Current" , "Title" : "FROM XYZ" , "Storage" : "XYZ1234" } Example - Upda te Pages This example upda tes a page record i n t he Pages e nt i t y.
- System limitations The Confluence connector can process 28 transaction per second, per node , and throttles any transactions beyond this limit.
- Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.

