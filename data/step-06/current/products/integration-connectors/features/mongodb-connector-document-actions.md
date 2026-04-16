---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.231Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "MongoDB connector document actions"
feature_slug: "mongodb-connector-document-actions"
latest_feature_date: "2023-03-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/reference/rest"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure"
keywords:
  - "mongodb"
  - "connector"
  - "document"
  - "actions"
  - "the"
  - "supports"
  - "insertdocument"
  - "updatedocument"
---

# MongoDB connector document actions

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

The MongoDB connector supports InsertDocument, UpdateDocument, DeleteDocument, and GetDocument actions.

## Extended Definition

The MongoDB connector supports InsertDocument, UpdateDocument, DeleteDocument, and GetDocument actions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure)

## Supporting Pages

### Couchbase \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/couchbase/configure)
- Source ID: `site-docs-root-2`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Actions This connector supports execution of the following actions: User-defined stored procedures and functions.
- SSL - Certificate connection type Field Name Details Region us-central1 Connector Couchbase Connector Version 1 Connector Name Couchbase-basic-auth-conn Service Account NAME-compute@developer.gserviceaccount.com Verbosity Level 5 Connection node settings: Min/Max number of nodes 2/50 SSL Configuration Enable SSL True Trust Store Private Custom Trust Store A full PEM Certificate (-----BEGIN CERTIFICATE----- MIIChTCCAe4CAQAwDQYJKoZIhv......Qw== -----END CERTIFICATE-----) Secret version 1 Host Address xx.1HOST NAME.cloud.couchbase.com:18xxx Authentication User Password Username username Password password versions 1 vConnection Mode Cloud DNS Server 192.0.2.0 OAuth scheme Basic Analytics Couchbase connection type Field Name Details Region us-central1 Connector Couchbase Connector Version 1 Connector Name Couchbase-basic-auth-Analytics-conn Service Account NAME-compute@developer.gserviceaccount.com Analytics Port 18095 Couchbase Service Analytics Verbosity Level 5 Connection node settings: Min/Max number of nodes 2/50 Host Address xx.1HOST NAME.cloud.couchbase.com:18095 Authentication User Password Username username Password password versions 1 vConnection Mode Cloud DNS Server 192.0.2.0 OAuth scheme Basic Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "Document" : "{\"ID\":10,\"Name\":\"TestDoc\"}" , "BucketName" : "CouchbaseTestBucket" , "ID" : "Test" } If the action is successful, the AddDocument task's connectorOutputPayload response parameter will have a value similar to the following: [{ "RowsAffected" : "1" }] Example - Create a collection This example creates a collection.
- If the integration is successful, your connector task's connectorOutputPayload field will have a value similar to the following: [{ "Document.Id" : "120" }] Example - Delete a record from an entity This example deletes the record with the specified ID in the TestCollection entity.

### Asana \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Actions The Asana connector supports actions, such as the following: AddDependenciesToTask, AddDependentsToTask, AddFollowers, AddProjectToTask, AddTagsToTask, AddTaskToSection, DownloadAttachment, DuplicateProject, DuplicateTask, RemoveDependenciesFromTask, RemoveDependentsFromTask, RemoveFollowers, RemoveProjectsFromTask, RemoveTagsFromTask, SetParentofTask, and UploadAttachment.
- Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- System limitations The Asana connector can process 90 transactions per minute , per node , and throttles any transactions beyond this limit.
- However, it is possible that a connector doesn't support any action, in which case the Actions list will be empty.

### Connectors API \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.connections REST Resource: v1.projects.locations.connections.connectionSchemaMetadata REST Resource: v1.projects.locations.connections.eventSubscriptions REST Resource: v1.projects.locations.connections.runtimeActionSchemas REST Resource: v1.projects.locations.connections.runtimeEntitySchemas REST Resource: v1.projects.locations.customConnectors REST Resource: v1.projects.locations.customConnectors.customConnectorVersions REST Resource: v1.projects.locations.endpointAttachments REST Resource: v1.projects.locations.global REST Resource: v1.projects.locations.global.customConnectors REST Resource: v1.projects.locations.global.customConnectors.customConnectorVersions REST Resource: v1.projects.locations.global.managedZones REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.providers REST Resource: v1.projects.locations.providers.connectors REST Resource: v1.projects.locations.providers.connectors.versions REST Resource: v1.projects.locations.providers.connectors.versions.eventtypes Service: connectors.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service provides the following discovery document: https://connectors.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1.projects.locations.global.customConnectors.customConnectorVersions Methods create POST /v1/{parent=projects/ /locations/global/customConnectors/ }/customConnectorVersions Creates a new CustomConnectorVersion in a given project and location. get GET /v1/{name=projects/ /locations/global/customConnectors/ /customConnectorVersions/ } Gets details of a single CustomConnectorVersion. list GET /v1/{parent=projects/ /locations/global/customConnectors/ }/customConnectorVersions List CustomConnectorVersions in a given project REST Resource: v1.projects.locations.global.managedZones Methods create POST /v1/{parent=projects/ /locations/global}/managedZones Creates a new ManagedZone in a given project and location. delete DELETE /v1/{name=projects/ /locations/global/managedZones/ } Deletes a single ManagedZone. get GET /v1/{name=projects/ /locations/global/managedZones/ } Gets details of a single ManagedZone. list GET /v1/{parent=projects/ /locations/global}/managedZones List ManagedZones in a given project patch PATCH /v1/{managedZone.name=projects/ /locations/global/managedZones/ } Updates the parameters of a single ManagedZone.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://connectors.googleapis.com REST Resource: v1.projects.locations Methods get GET /v1/{name=projects/ /locations/ } Gets information about a location. getRegionalSettings GET /v1/{name=projects/ /locations/ /regionalSettings} GetRegionalSettings gets settings of a region. getRuntimeConfig GET /v1/{name=projects/ /locations/ /runtimeConfig} Gets the runtimeConfig of a location. list GET /v1/{name=projects/ }/locations Lists information about the supported locations for this service. updateRegionalSettings PATCH /v1/{regionalSettings.name=projects/ /locations/ /regionalSettings} Update the settings of a region.

### DocuSign \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure)
- Source ID: `site-docs-root-2`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "EmailSubject": "Please Sign this Document", "FileName": "test.txt\ntest.pdf", "SignersEmail": "cloudysanfrancisco@gmail.com", "SignersRecipientId": "53386460", "CcRecipientId": "67173451", "CcEmail": "baklavainthebalkans@gmail.com", "DocumentId": "1", "Status": "sent", "CustomFieldAggregate": "CustomFieldName", "ContentBytes": "abcd ", "HasBytes": true, "SignersName": "\"test\"", "CcName": "\"test\"", "Content": "test content in file" } If the action is successful, the connector task's connectorOutputPayload response parameter will have a value similar to the following: [{ "Success":"true", "envelopeid":"542a77ff-b533-4b39-9d82-e397ef5a70c9", "uri":"/envelopes/542a77ff-b533-4b39-9d82-e397ef5a70c9", "statusdatetime":"2025-04-09T12:33:47.1130000Z", "status":"sent", "customfieldaggregate": "CustomFieldName" }] Entity operation examples This section shows how to perform some of the entity operations in this connector.
- OAUTH 2.0 - Authorization Code connection type Field name Details Location us-central1 Connector DocuSign Connector version 1 Connection Name gcp-docusign-new-auth Enable Cloud Logging No UseSandbox Yes Service Account 123456789012-compute@developer.gserviceaccount.com Authentication OAuth 2.0 - Authorization code Client Id 67dxxxxx-xxxx-xxxx-xxxx-xxxxxxxcb79 Scopes signature Client secret CLIENT SECRET Secret Version 1 Authorization URL https://account-d.docusign.com/oauth/auth OAuth 2.0 - JWT Bearer connection type Field name Details Location us-central1 Connector DocuSign Connector version 1 Connection Name gcp-docusign-token Enable Cloud Logging No UseSandbox Yes Service Account 123456789012-compute@developer.gserviceaccount.com Authentication OAuth 2.0 - JWT Bearer Connected App Consumer Key 67dxxxxx-xxxx-xxxx-xxxx-xxxxxxxcb79 Username USER NAME Private Key PRIVATE KEY Secret Version 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- System limitations The DocuSign connector can process 3 transactions per second, per node , and throttles any transactions beyond this limit.
- However, it is possible that a connector doesn't support any action, in which case the Actions list will be empty.

