---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.205Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Connector log collection"
feature_slug: "connector-log-collection"
latest_feature_date: "2024-08-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/acumatica/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure"
keywords:
  - "connector"
  - "log"
  - "collection"
  - "connectors"
  - "can"
  - "collect"
  - "logs"
  - "at"
---

# Connector log collection

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Connectors can collect logs at Error, Info, and Debug severity levels.

## Extended Definition

Connectors can collect logs at Error, Info, and Debug severity levels.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/acumatica/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/acumatica/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure)

## Supporting Pages

### Acumatica \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/acumatica/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/acumatica/configure)
- Source ID: `site-docs-root-2`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Integration Connectors Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- REST connection type Field name Details Location europe-west1 Connector Acumatica Connector version 1 Connection Name acumatica Enable Cloud Logging False Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Verbosity Level 5 Minimum number of nodes 2 Maximum number of nodes 50 Host https://examplepetstore.com Username USERNAME Password PASSWORD Secret version 1 OData connection type Field name Details Location europe-west1 Connector Acumatica Connector version 1 Connection Name acumatica Enable Cloud Logging False Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Company Example Organization Endpoint Version 22.200.001 Inquiry Table PX Objects AP APInvoice Schema OData Verbosity Level 5 Minimum number of nodes 2 Maximum number of nodes 50 Host https://examplepetstore.com Username USERNAME Password PASSWORD Secret version 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "ActionName" : "PrintSalesOrder" , "TopLevelEntity" : "SalesOrder" "EntityRecord" : "{ " Type ": { " value ": " IN " }, " OrderNbr ": { " value ": " 000007 " }, " Cus t omerID ": { " value ": " CANDYY " }, " Loca t io n ID ": { " value ": " MAIN " }}}" If the action is successful, the ExecuteAction task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Status" : "Success" , "AffectedRecords" : "1" }] Entity operation examples This section shows how to perform some of the entity operations in this connector.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Description": "go again", "BatchNbr": "000008", "CurrencyID": "INR", "Module": "GL" } If the integration is successful, your connector task's connectorOutputPayload field will have a value similar to the following: [{ "BatchNbr": "000016", "Module": "GL" }] Example - Create a customer In the Configure connector task dialog, click Entities .

### Azure AD (Entra ID) \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure)
- Source ID: `site-docs-root-2`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "RoleTemplateId" : "f023fd81-a637-4b56-95fd-791ac0226033" } If the action is successful, the ActivateDirectoryRole task's connectorOutputPayload response parameter has a value similar to the following: [{ "id" : "c865d9cb-57da-416c-97a3-753e733da678" , "roleTemplateId" : "f023fd81-a637-4b56-95fd-791ac0226033" , "displayName" : "Service Support Administrator" , "description" : "Can read service health information and manage support tickets." }] Example - VerifyDomain In the Configure connector task dialog, click Actions .
- Home Documentation Application development Integration Connectors Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "UserEmailAddress" : "taleprajyot97@gmail.com" , "RedirectURL" : "https://www.example.com" } This action returns confirmation message of the InviteExternalUser If the action is successful, the InviteExternalUser task's connectorOutputPayload response parameter has a value similar to the following: [{ "Success" : "True" , "Id" : "70905aef-361f-4cb1-8d04-41f9e377ebd3" , "ReedemURL" : "https://login.microsoftonline.com/redeem?rd=https%3a%2f%2finvitations.microsoft.com%2fredeem%2f%3ftenant%3d9b25e811-f983-4982-82e4-263c1ca48112%26user%3d70905aef-361f-4cb1-8d04-41f9e377ebd3%26ticket%3dx5aOZc%25252bE9XslKcOdb101qLnoe2V%25252b8%25252beeFlNhYA5WvTg%25253d%26ver%3d2.0" , "InvitedUserId" : "d5eeb199-a544-4985-b726-e3073751050c" }] Example - AddPhoneAuthenticationMethod In the Configure connector task dialog, click Actions .
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "PrincipalId" : "8cbe82b6-0dd5-4f10-bf67-82bf88ac6cb8" , "RoleDefinitionId" : "729827e3-9c14-49f7-bb1b-9608f156bbb8" , "Justification" : "Add Privileged Role" , "ScheduleInfo" : "{\n\"StartDateTime\" : \"2022-09-09T21:31:27.91Z\",\n\"Expiration\" : {\n\"Type\" : \"Eligible\"}\n}" } If the action is successful, the AddPrivilegedRole task's connectorOutputPayload response parameter has a value similar to the following:ç [{ "Success" : "True" }] Example - RemovePrivilegedRole In the Configure connector task dialog, click Actions .

### Couchbase \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- Source ID: `site-docs-root-2`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { } If the action is successful, the ListIndices task's connectorOutputPayload response parameter will have a value similar to the following: [{ "id" : "3d8a78cd2e302ac2" , "datastore id" : "http://127.0.0.1:8091" , "namespace id" : "default" , "bucket id" : null , "scope id" : null , "keyspace id" : "CouchbaseTestBucket" , "index key" : "" , "condition" : null , "is primary" : "false" , "name" : "test" , "state" : "online" , "using" : "gsi" }, { "id" : "d6ce8c103b97a00d" , "datastore id" : "http://127.0.0.1:8091" , "namespace id" : "default" , "bucket id" : "CouchbaseTestBucket" , "scope id" : "TestScope" , "keyspace id" : "CouchBaseDatatypes" , "index key" : "" , "condition" : null , "is primary" : "true" , "name" : "#primary" , "state" : "online" , "using" : "gsi" }, { "id" : "58c25aef49dd32b3" , "datastore id" : "http://127.0.0.1:8091" , "namespace id" : "default" , "bucket id" : "CouchbaseTestBucket" , "scope id" : "TestScope" , "keyspace id" : "TestCollection" , "index key" : "" , "condition" : null , "is primary" : "false" , "name" : "SearchIndexTest 1" , "state" : "online" , "using" : "fts" }] Example - Manage indices This example deletes an index in the specified bucket.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Document" : "{\"ID\":10,\"Name\":\"TestDoc\"}" , "BucketName" : "CouchbaseTestBucket" , "ID" : "Test" } If the action is successful, the AddDocument task's connectorOutputPayload response parameter will have a value similar to the following: [{ "RowsAffected" : "1" }] Example - Create a collection This example creates a collection.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "bucket" : "CouchbaseTestBucket" , "scope" : "TestScope" , "name" : "CollectionFromGoogleCloud" } This example creates a collection under the TestScope .
- Home Documentation Application development Integration Connectors Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Dataverse \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure)
- Source ID: `site-docs-root-2`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Integration Connectors Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Entity: An entity can be thought of as an object, or a collection of properties, in the connected application or service.
- Note: You can view the entities, operations, and actions of a connector in the Connectors task .
- You can use the connection in an integration through the Connectors task.

