---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.193Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Transform HL7 to XML action"
feature_slug: "transform-hl7-to-xml-action"
latest_feature_date: "2025-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/RuntimeActionSchema"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/activedirectory/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure"
keywords:
  - "transform"
  - "hl7"
  - "to"
  - "xml"
  - "action"
  - "the"
  - "converts"
  - "standard"
---

# Transform HL7 to XML action

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The action converts a standard HL7 message into XML.

## Extended Definition

The action converts a standard HL7 message into XML.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/RuntimeActionSchema](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/RuntimeActionSchema)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/activedirectory/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/activedirectory/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure)

## Supporting Pages

### RuntimeActionSchema \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/RuntimeActionSchema](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/RuntimeActionSchema)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "parameter" : string , "description" : string , "dataType" : enum ( DataType ) , "nullable" : boolean , "defaultValue" : value , "jsonSchema" : { object ( JsonSchema ) } } Fields parameter string Name of the Parameter. description string A brief description of the Parameter. dataType enum ( DataType ) The data type of the Parameter. nullable boolean Specifies whether a null value is allowed. defaultValue value ( Value format) The following field specifies the default value of the Parameter provided by the external system if a value is not provided. jsonSchema object ( JsonSchema ) JsonSchema representation of this action's parameter ResultMetadata Metadata of result field.
- JSON representation { "field" : string , "description" : string , "dataType" : enum ( DataType ) , "jsonSchema" : { object ( JsonSchema ) } , "nullable" : boolean , "defaultValue" : value } Fields field string Name of the result field. description string A brief description of the field. dataType enum ( DataType ) The data type of the field. jsonSchema object ( JsonSchema ) JsonSchema representation of this action's result nullable boolean Specifies whether a null value is allowed. defaultValue value ( Value format) The following field specifies the default value of the Parameter provided by the external system if a value is not provided.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
- Home Documentation Application development Integration Connectors Reference Send feedback RuntimeActionSchema Stay organized with collections Save and categorize content based on your preferences.

### "Azure Data Lake Storage \_|\_ Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Shared Access Signature connection type Fieldname Details Location us-central1 Connector azuredatalakestorage Connector version 1 Connection Name adls-gen2-conn-public Enable Cloud Logging Yes Service Account account@my-project.iam.gserviceaccount.com Account google-cloud-dslgen3 Directory directory File System container Include Sub Directories No Minimum number of nodes 2 Maximum number of nodes 50 Shared Access Signature SHARED ACCESS SIGNATURE Secret Version 1 Account access key connection type Fieldname Details Location us-central1 Connector azuredatalakestorage Connector version 1 Connection Name azure-data-lake-conn Enable Cloud Logging Yes Service Account account@my-project.iam.gserviceaccount.com Account google-cloud-dslgen3 Directory north-america File System container Include Sub Directories No Minimum number of nodes 2 Maximum number of nodes 50 Account Access key ACCOUNT ACCESS KEY Secret Version 1 JWT authentication connection type Fieldname Details Location us-central1 Connector azuredatalakestorage Connector version 1 Connection Name adls-gen2-jwt-conn Enable Cloud Logging Yes Service Account account@my-project.iam.gserviceaccount.com Account your-adls-account-name Directory north-america File System data-lake-container Include Sub Directories Yes Minimum number of nodes 2 Maximum number of nodes 50 Authentication type JWT Authentication Client ID CLIENT ID Private Key PRIVATE KEY SECRET Private Key Password PRIVATE KEY PASSWORD SECRET Secret Version (for Private Key) 1 Secret Version (for Private Key Password) 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Path" : "testdirectory1/test1.pdf" , "HasBytes" : true } If the action is successful, the DownloadFile task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Success" : "True" , "ContentBytes" : "UEsDBBQABgAIAAAAIQCj77sdZQEAAFIFAAATAAgCW0NvbnRlbnRfVHlwZXNdLnhtbCCiBAIooA" }] Example - Upload a file This example uploads content as a blob.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Path" : "testblob2" , "LeaseAction" : "Acquire" , "LeaseDuration" : 60.0 } If the action is successful, the LeaseBlob task's connectorOutputPayload response parameter will have a value similar to the following: [{ "LeaseId" : "7aae9ca2-f015-41b6-9bdf-5fd3401fc493" , "Success" : "true" }] Example - Rename a blob This example renames a blob.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Path" : "testblob" , "RenameTo" : "testblob6" } If the action is successful, the RenameObject task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Success" : true }] Entity operation examples This section shows how to perform some of the entity operations in this connector.

### Active Directory \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/activedirectory/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/activedirectory/configure)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Username password connection type Field name Details Location us-central1 Connector Active Directory Connector version 1 Connection Name active-directory-google-cloud-vm-users-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Base DN BASE DN Auth Mechanism SIMPLE LDAP Version 3 Scope WHOLESUBTREE Verbosity level 5 Minimum number of nodes 2 Maximum number of nodes 50 Destination Type(Server) Host address Host address 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 SSL connection type Field name Details Location us-central1 Connector Active Directory Connector version 1 Connection Name active-directory-google-cloud-vm-ssl-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Base DN BASE DN Auth Mechanism SIMPLE LDAP Version 3 Scope WHOLESUBTREE Verbosity level 5 Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL Yes Trust store Private Connection Yes Destination Type(Server) Host address Host address 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 2 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "DN": "CN=admin,CN=Users,DC=test-ldap,DC=com" } If the action is successful, the GetAttributes task's connectorOutputPayload response parameter will have a value similar to the following: [{ "AttributeName": " op", "AttributeValue": "ldapadoGetAttributes" }, { "AttributeName": "msds-supportedencryptiontypes", "AttributeValue": "24" }, { "AttributeName": "usncreated", "AttributeValue": "12775" }, { "AttributeName": "objectclass", "AttributeValue": "organizationalPerson" }, { "AttributeName": "objectclass", "AttributeValue": "user" }, { "AttributeName": "accountexpires", "AttributeValue": "9223372036854775807" }, { "AttributeName": "name", "AttributeValue": "admin" }, { "AttributeName": "objectcategory", "AttributeValue": "CN=Person,CN=Schema,CN=Configuration,DC=test-ldap,DC=com" }, { "AttributeName": null, "AttributeValue": null }] Example - Add members to a group In the Configure connector task dialog, click Actions .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "AdminPassword": "XXXX=", "User": "CN=GCP Admin,CN=Users,DC=gcpad,DC=local", "NewPassword": "XXXX", "AdminUser": "CN=admin,CN=Users,DC=gcpad,DC=local" } If the action is successful, the ResetPassword task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Success": "true", "result": "[ok]", "rss:title": "Password modified successfully", "resultcode": "0" }] Example - Change password In the Configure connector task dialog, click Actions .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "NewParentDN": "CN=Users,DC=gcpad,DC=local", "DN": "CN=GoogleAdmin,CN=Computers,DC=gcpad,DC=local" } If the action is successful, the MoveToDN task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Success": null, "result": "[ok]", "modified": "true", "rss:title": "The movement was successful.", "resultcode": "0" }] Example - Get attributes of a DN In the Configure connector task dialog, click Actions .

### Cloud Storage \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- If the action is successful, you will get the signed URL in the response similar to the following: { "Success": "true", "SignURL": "https://storage.googleapis.com/example-bucket/cat.jpeg?X-Goog-Algorithm= GOOG4-RSA-SHA256&X-Goog-Credential=example%40example-project.iam.gserviceaccount.com %2F20181026%2Fus-central1%2Fstorage%2Fgoog4 request&X-Goog-Date=20181026T18 1309Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=247a2aa45f16 9edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa849 6def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dc c1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c2058 0e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a 66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823 a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b13344703 2ea7abedc098d2eb14a7" } Considerations A downloadable object can have a maximum size of 10 MB.
- Actions The Google Cloud Storage connection supports the following actions: DownloadObject UploadObject CopyObject MoveObject DeleteObject SignURL Note: The results of all the entity operations and actions will be available as a JSON response in the Connectors task's connectorOutputPayload response parameter after you run your integration.
- If the copy is successful, the output in the connectorOutputPayload field will be similar to the following: { "Success" : "true" } Create a signed URL for an object In the Configure connector task dialog, click Actions .
- If the copy is successful, the output in the connectorOutputPayload field will be similar to the following: { "Success" : "true" } Delete an object In the Configure connector task dialog, click Actions .

