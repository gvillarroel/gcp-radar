---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.215Z"
product_name: "Integration Connectors"
product_slug: "integration-connectors"
feature_name: "Custom connectors"
feature_slug: "custom-connectors"
latest_feature_date: "2024-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure"
  - "https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure"
keywords:
  - "custom"
  - "connectors"
  - "based"
  - "on"
  - "openapi"
  - "let"
  - "you"
  - "define"
---

# Custom connectors

Product: Integration Connectors
Coverage: MEDIUM

## Step 02 Summary

Custom connectors based on OpenAPI let you define connectors outside the standard catalog and use them in integrations.

## Extended Definition

Custom connectors based on OpenAPI let you define connectors outside the standard catalog and use them in integrations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure)

## Supporting Pages

### "IAM roles and permissions for Integration Connectors \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)
- Source ID: `site-docs-root-2`
- Final score: 310
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table lists all the predefined IAM roles for Integration Connectors: Role Permissions Connector Admin ( roles/ connectors.admin ) Full access to all resources of Connectors Service. connectors.actions. connectors.actions.execute connectors.actions.list connectors.connections.create connectors.connections.delete connectors. connections. executeSqlQuery connectors. connections. generateOpenAPISpec connectors.connections.get connectors. connections. getConnectionSchemaMetadata connectors. connections. getIamPolicy connectors. connections. getRuntimeActionSchema connectors. connections. getRuntimeEntitySchema connectors.connections.list connectors. connections. setIamPolicy connectors.connections.update connectors.connectors. connectors.connectors.get connectors.connectors.list connectors. customConnectorVersions. connectors. customConnectorVersions. create connectors. customConnectorVersions. delete connectors. customConnectorVersions. get connectors. customConnectorVersions. getIamPolicy connectors. customConnectorVersions. list connectors. customConnectorVersions. setIamPolicy connectors. customConnectorVersions. update connectors.customConnectors. connectors. customConnectors. create connectors. customConnectors. delete connectors. customConnectors. get connectors. customConnectors. getIamPolicy connectors. customConnectors. list connectors. customConnectors. setIamPolicy connectors. customConnectors. update connectors. endpointAttachments. connectors. endpointAttachments. create connectors. endpointAttachments. delete connectors. endpointAttachments. get connectors. endpointAttachments. getIamPolicy connectors. endpointAttachments. list connectors. endpointAttachments. setIamPolicy connectors. endpointAttachments. update connectors.entities. connectors.entities.create connectors.entities.delete connectors. entities. deleteEntitiesWithConditions connectors.entities.get connectors.entities.list connectors.entities.update connectors. entities. updateEntitiesWithConditions connectors.entityTypes.list connectors. eventSubscriptions. connectors. eventSubscriptions. create connectors. eventSubscriptions. delete connectors. eventSubscriptions. get connectors. eventSubscriptions. list connectors. eventSubscriptions. update connectors.eventtypes. connectors.eventtypes.get connectors.eventtypes.list connectors.locations. connectors.locations.get connectors.locations.list connectors.managedZones. connectors.managedZones.create connectors.managedZones.delete connectors.managedZones.get connectors. managedZones. getIamPolicy connectors.managedZones.list connectors. managedZones. setIamPolicy connectors.managedZones.update connectors.operations. connectors.operations.cancel connectors.operations.delete connectors.operations.get connectors.operations.list connectors.providers. connectors.providers.get connectors.providers.list connectors.regionalSettings. connectors. regionalSettings. get connectors. regionalSettings. update connectors.runtimeconfig.get connectors. schemaMetadata. refresh connectors.settings. connectors.settings.get connectors.settings.update connectors.versions. connectors.versions.get connectors.versions.list resourcemanager.projects.get resourcemanager.projects.list secretmanager. secrets. getIamPolicy Connectors Viewer ( roles/ connectors.viewer ) Read-only access to Connectors all resources. connectors. connections. generateOpenAPISpec connectors.connections.get connectors. connections. getConnectionSchemaMetadata connectors. connections. getIamPolicy connectors. connections. getRuntimeActionSchema connectors. connections. getRuntimeEntitySchema connectors.connections.list connectors.connectors. connectors.connectors.get connectors.connectors.list connectors. customConnectorVersions. get connectors. customConnectorVersions. getIamPolicy connectors. customConnectorVersions. list connectors. customConnectors. get connectors. customConnectors. getIamPolicy connectors. customConnectors. list connectors. endpointAttachments. get connectors. endpointAttachments. getIamPolicy connectors. endpointAttachments. list connectors. eventSubscriptions. get connectors. eventSubscriptions. list connectors.eventtypes. connectors.eventtypes.get connectors.eventtypes.list connectors.locations. connectors.locations.get connectors.locations.list connectors.managedZones.get connectors. managedZones. getIamPolicy connectors.managedZones.list connectors.operations.get connectors.operations.list connectors.providers. connectors.providers.get connectors.providers.list connectors. regionalSettings. get connectors.runtimeconfig.get connectors.settings.get connectors.versions. connectors.versions.get connectors.versions.list resourcemanager.projects.get resourcemanager.projects.list Custom Connectors Admin ( roles/ connectors.customConnectorAdmin ) Custom Connector is a global resource which creates custom connector within the given target project.
- Role Permissions Connectors Platform Service Agent ( roles/ connectors.serviceAgent ) Grants Connectors Platform service account to manage customer resources Warning: Do not grant service agent roles to any principals except service agents . connectors.actions. connectors.actions.execute connectors.actions.list connectors.connections.get connectors. connections. getConnectionSchemaMetadata connectors.connections.list connectors.connectors. connectors.connectors.get connectors.connectors.list connectors. customConnectorVersions. get connectors. customConnectorVersions. list connectors. customConnectors. get connectors. customConnectors. list connectors. endpointAttachments. get connectors. endpointAttachments. list connectors.entities.get connectors.entityTypes.list connectors. eventSubscriptions. get connectors. eventSubscriptions. list connectors.eventtypes. connectors.eventtypes.get connectors.eventtypes.list connectors.locations. connectors.locations.get connectors.locations.list connectors.managedZones.get connectors.managedZones.list connectors.providers. connectors.providers.get connectors.providers.list connectors.runtimeconfig.get iam. serviceAccounts. getAccessToken iam. serviceAccounts. getOpenIdToken iam. serviceAccounts. implicitDelegation monitoring. metricDescriptors. create monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring.timeSeries.create For more information about predefined roles, see Roles and permissions .
- This role grants Admin access to Custom Connector resources connectors. customConnectorVersions. connectors. customConnectorVersions. create connectors. customConnectorVersions. delete connectors. customConnectorVersions. get connectors. customConnectorVersions. getIamPolicy connectors. customConnectorVersions. list connectors. customConnectorVersions. setIamPolicy connectors. customConnectorVersions. update connectors.customConnectors. connectors. customConnectors. create connectors. customConnectors. delete connectors. customConnectors. get connectors. customConnectors. getIamPolicy connectors. customConnectors. list connectors. customConnectors. setIamPolicy connectors. customConnectors. update connectors.locations. connectors.locations.get connectors.locations.list Custom Connector Viewer ( roles/ connectors.customConnectorViewer ) Custom Connector is a global resource which creates custom connector within the given target project.
- Home Documentation Application development Integration Connectors Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Azure DevOps \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure)
- Source ID: `site-docs-root-2`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Integration Connectors Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Task Input section of the Connectors task, you can set the filterClause as per the customer requirement.
- Note: The number of Integration Connectors nodes will autoscale dynamically based on your usage.
- If you are a subscription based customer, contact support .

### Confluence \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure)
- Source ID: `site-docs-root-2`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Integration Connectors Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Note: The number of Integration Connectors nodes will autoscale dynamically based on your usage.
- If you are a subscription based customer, contact support .
- Note: You can customize the connection node values only if you are a Pay-as-you-go customer. (Optional) In the Advanced settings section, select the Use proxy checkbox to configure a proxy server for the connection and configure the following values: Proxy Auth Scheme : Select the authentication type to authenticate with the proxy server.

### Airtable \_|\_ Integration Connectors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure)
- Source ID: `site-docs-root-2`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Integration Connectors Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- User Defined Views : Specify the filepath of the JSON configuration file that contains your custom views.
- Task Input section of the Connectors task, you can set the filterClause as per the customer requirement.
- Note: The number of Integration Connectors nodes will autoscale dynamically based on your usage.

