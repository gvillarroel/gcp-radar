---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.228Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Connector logs in Cloud Logging"
feature_slug: "connector-logs-in-cloud-logging"
latest_feature_date: "2023-04-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/audit-logging"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure"
keywords:
  - "connector"
  - "logs"
  - "in"
  - "logging"
  - "integration"
  - "connectors"
  - "can"
  - "send"
---

# Connector logs in Cloud Logging

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Integration Connectors can send and view connector logs in Cloud Logging.

## Extended Definition

Integration Connectors can send and view connector logs in Cloud Logging.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/audit-logging](https://docs.cloud.google.com/integration-connectors/docs/audit-logging)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)

## Supporting Pages

### Integration Connectors audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/audit-logging](https://docs.cloud.google.com/integration-connectors/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 357
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ cloud.connectors.runtime.v2.ActionService.GetAction cloud.connectors.runtime.v2.ActionService.ListActions cloud.connectors.runtime.v2.EntityService.GetEntityType cloud.connectors.runtime.v2.EntityService.ListEntities cloud.connectors.runtime.v2.EntityService.ListEntityTypes google.cloud.connectors.v1.Connectors.GetConnection google.cloud.connectors.v1.Connectors.GetConnector google.cloud.connectors.v1.Connectors.GetConnectorVersion google.cloud.connectors.v1.Connectors.GetEndpointAttachment google.cloud.connectors.v1.Connectors.GetEventSubscription google.cloud.connectors.v1.Connectors.GetEventType google.cloud.connectors.v1.Connectors.GetGlobalSettings google.cloud.connectors.v1.Connectors.GetManagedZone google.cloud.connectors.v1.Connectors.GetProvider google.cloud.connectors.v1.Connectors.GetRegionalSettings google.cloud.connectors.v1.Connectors.GetRuntimeConfig google.cloud.connectors.v1.Connectors.ListConnections google.cloud.connectors.v1.Connectors.ListConnectorVersions google.cloud.connectors.v1.Connectors.ListConnectors google.cloud.connectors.v1.Connectors.ListEndpointAttachments google.cloud.connectors.v1.Connectors.ListEventSubscriptions google.cloud.connectors.v1.Connectors.ListEventTypes google.cloud.connectors.v1.Connectors.ListManagedZones google.cloud.connectors.v1.Connectors.ListProviders google.cloud.connectors.v1.Connectors.SearchConnections GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.connectors.v1.Connectors.CreateConnection (LRO) google.cloud.connectors.v1.Connectors.CreateEndpointAttachment (LRO) google.cloud.connectors.v1.Connectors.CreateEventSubscription (LRO) google.cloud.connectors.v1.Connectors.CreateManagedZone (LRO) google.cloud.connectors.v1.Connectors.DeleteConnection (LRO) google.cloud.connectors.v1.Connectors.DeleteEndpointAttachment (LRO) google.cloud.connectors.v1.Connectors.DeleteEventSubscription (LRO) google.cloud.connectors.v1.Connectors.DeleteManagedZone (LRO) google.cloud.connectors.v1.Connectors.RepairEventing (LRO) google.cloud.connectors.v1.Connectors.RetryEventSubscription (LRO) google.cloud.connectors.v1.Connectors.UpdateConnection (LRO) google.cloud.connectors.v1.Connectors.UpdateEndpointAttachment (LRO) google.cloud.connectors.v1.Connectors.UpdateEventSubscription (LRO) google.cloud.connectors.v1.Connectors.UpdateGlobalSettings (LRO) google.cloud.connectors.v1.Connectors.UpdateManagedZone (LRO) google.cloud.connectors.v1.Connectors.UpdateRegionalSettings (LRO) SetIamPolicy google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation DATA READ cloud.connectors.runtime.v2.EntityService.GetEntity google.cloud.connectors.v1.Connectors.GetAction (LRO) google.cloud.connectors.v1.Connectors.GetConnectionSchemaMetadata google.cloud.connectors.v1.Connectors.GetEntityType (LRO) google.cloud.connectors.v1.Connectors.ListActions google.cloud.connectors.v1.Connectors.ListEntityTypes google.cloud.connectors.v1.Connectors.ListRuntimeActionSchemas google.cloud.connectors.v1.Connectors.ListRuntimeEntitySchemas DATA WRITE cloud.connectors.runtime.v2.ActionService.ExecuteAction cloud.connectors.runtime.v2.EntityService.CreateEntity cloud.connectors.runtime.v2.EntityService.DeleteEntitiesWithConditions cloud.connectors.runtime.v2.EntityService.DeleteEntity cloud.connectors.runtime.v2.EntityService.UpdateEntitiesWithConditions cloud.connectors.runtime.v2.EntityService.UpdateEntity google.cloud.connectors.v1.Connectors.RefreshConnectionSchemaMetadata (LRO) API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Integration Connectors. cloud.connectors.runtime.v2.ActionService The following audit logs are associated with methods belonging to cloud.connectors.runtime.v2.ActionService .
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Integration Connectors audit logs use the service name connectors.googleapis.com .
- The following methods don't produce audit logs: cloud.connectors.runtime.v2.AdminService.CheckReadiness cloud.connectors.runtime.v2.AdminService.CheckStatus cloud.connectors.runtime.v2.AuthCodeFlowService.ExchangeAuthCode cloud.connectors.runtime.v2.AuthCodeFlowService.RefreshAccessToken google.cloud.connectors.v1.EventService.ListenEvent google.cloud.location.Locations.GetLocation google.cloud.location.Locations.ListLocations google.longrunning.Operations.WaitOperation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application development Integration Connectors Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Azure DevOps \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure)
- Source ID: `site-docs-root-2`
- Final score: 323
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Integration Connectors Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- You can use the connection in an integration through the Connectors task.
- Field name Information model Project model Repository model Analytics model All models AzureAD connection Location europe-west1 europe-west1 europe-west1 europe-west1 asia-east1 europe-west1 Connector Azure DevOps Azure DevOps Azure DevOps Azure DevOps Azure DevOps Azure DevOps Connector version 1 1 1 1 1 1 Connection Name azuredevops-informationmodel azuredevops-projectmodel azuredevops-repositorymodel azuredevops-analyticsmodel devops azuredevops-oauth Enable Cloud Logging Yes Yes Yes Yes Yes Yes Log Level Debug Debug Debug Debug Debug Debug Service Account Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Your Project Number@serviceaccount Azure Tenant Tenant Id Tenant Id Tenant Id Tenant Id Tenant Id Tenant Id Organization Organization Name Organization Name Organization Name Organization Name Organization Name Organization Name Schema Information Project Repository RepositoryId Analytics Project Catalog Devops Project ProjectId Project ProjectId Project ProjectId Project ProjectId Azure Dev Ops Edition AzureDevOps Online AzureDevOps Online AzureDevOps Online AzureDevOps Online AzureDevOps Online AzureDevOps Online Azure Dev Ops Service API 6.0 6.0 6.0 6.0 6.0 6.0 Include Custom Fields Yes Yes Yes Yes Yes Yes CustomizedDefaultCatalogName CustomizedDefaultCatalogName=Google CustomizedDefaultCatalogName=Google Minimum number of nodes 2 2 2 2 2 2 Maximum number of nodes 50 50 50 50 50 50 Authentication Yes Yes Yes Yes Yes Yes Basic Yes Yes Yes Yes Yes API Token Api Token provided by your app Api Token provided by your app Api Token provided by your app Api Token provided by your app Api Token provided by your app Secret version 1 1 1 1 1 1 AzureAD Yes Client ID Client Id Client Secret Value Client Secret Value Scopes user impersonation Authorization URL https://login.microsoftonline.com/c6f32d0e-6725-4007-81c2-951e853061a6/oauth2/authorize You can use the following connection properties to manage data fetched from Azure DevOps.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "RepositoryId": "89f79340-8659-4927-9d9f-e8836c19af55", "BranchRefName": "refs/heads/US Googlecloud Push1", "OldObjectId": "4d66aafb75efda2bbdda7a2b609b152b1b715b7e", "CommitComment": "Googlecloud PUSH Changes", "ChangesAggregate": "{\n \"changeType\": \"edit\",\n \"item\": {\n \"path\": \"/tasks.md\"\n },\n \"newContent\": {\n \"content\": \"# Tasks\\n\\n Item 1\\n Item 2\",\n \"contentType\": \"rawtext\"\n }\n }" } If the action is successful, the PushChanges task's connectorOutputPayload response parameter will have a value similar to the following: [ { "NewObjectId": "949e4710336bc5bdc779ca6b334e029c2f50a029", "CommitId": "949e4710336bc5bdc779ca6b334e029c2f50a029", "CommitTreeId": "7e7394dcfc5b4d4cf2c8c21d70a96fe34f8eaf3e", "AuthorName": "Charlie Cruz", "AuthorEmail": "baklavainthebalkans@gmail.onmicrosoft.com", "AuthoredDate": "2024-11-19 07:04:42.0", "CommitterName": "Charlie Cruz", "CommitterEmail": "baklavainthebalkans@gmail.onmicrosoft.com", "CommittedDate": "2024-11-19 07:04:42.0", "CommitUrl": "https://dev.azure.com/charliecruz/64058663-6419-4b11-8ef0-2ebf985949bc/ apis/git/repositories/89f79340-8659-4927-9d9f-e8836c19af55/commits/949e4710336bc5bdc779ca6b334e029c2f50a029", "RepositoryId": "89f79340-8659-4927-9d9f-e8836c19af55", "RepositoryName": "refs/heads/US Googlecloud Push1", "PushId": "193", "PushDate": "2024-11-19T07:04:42.5793751Z", "PushURL": "https://dev.azure.com/charliecruz/64058663-6419-4b11-8ef0-2ebf985949bc/ apis/git/repositories/89f79340-8659-4927-9d9f-e8836c19af55/pushes/193" } ] Example - Download the logs of a release In the Configure connector task dialog, click Actions .

### DocuSign \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure)
- Source ID: `site-docs-root-2`
- Final score: 323
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OAUTH 2.0 - Authorization Code connection type Field name Details Location us-central1 Connector DocuSign Connector version 1 Connection Name gcp-docusign-new-auth Enable Cloud Logging No UseSandbox Yes Service Account 123456789012-compute@developer.gserviceaccount.com Authentication OAuth 2.0 - Authorization code Client Id 67dxxxxx-xxxx-xxxx-xxxx-xxxxxxxcb79 Scopes signature Client secret CLIENT SECRET Secret Version 1 Authorization URL https://account-d.docusign.com/oauth/auth OAuth 2.0 - JWT Bearer connection type Field name Details Location us-central1 Connector DocuSign Connector version 1 Connection Name gcp-docusign-token Enable Cloud Logging No UseSandbox Yes Service Account 123456789012-compute@developer.gserviceaccount.com Authentication OAuth 2.0 - JWT Bearer Connected App Consumer Key 67dxxxxx-xxxx-xxxx-xxxx-xxxxxxxcb79 Username USER NAME Private Key PRIVATE KEY Secret Version 1 Entities, operations, and actions All the Integration Connectors provide a layer of abstraction for the objects of the connected application.
- Home Documentation Application development Integration Connectors Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- You can use the connection in an integration through the Connectors task.
- To create a connection, do the following: In the Cloud console , go to the Integration Connectors > Connections page and then select or create a Google Cloud project.

### Apache Cassandra \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- Source ID: `site-docs-root-2`
- Final score: 319
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Integration Connectors Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- You can use the connection in an integration through the Connectors task.
- Connection configuration samples Basic authentication connection type Fieldname Details Location us-central1 Connector apachecassandra Connector version 1 Connection Name apache-cassandra-vm-conn Enable Cloud Logging Yes Service Account SERVICE ACCOUNT NAME@PROJECT ID.iam.gserviceaccount.com Database test-google-cloud Browsable Schemas Minimum number of nodes 2 Maximum number of nodes 50 Enable SSL (SSL Configuration) No Destination Type Host address Host 192.0.2.0 Port PORT Username USERNAME Password PASSWORD Secret version 1 If SSL is disabled in the Cassandra instance, you cannot use basic authentication with username and password.
- In the Task Input section of the Connectors task, click connectorInputPayload and then enter a value similar to the following in the Default Value field: { "employeeCode" : "5100" , "startDate" : "2010-01-01 00:00:00.0" , "country" : "US" } If the integration is successful, the connector task's connectorOutputPayload field will have the response of the create operation.

