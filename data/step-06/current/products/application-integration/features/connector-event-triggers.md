---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.481Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Connector Event triggers"
feature_slug: "connector-event-triggers"
latest_feature_date: "2023-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/known-issue"
  - "https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event"
  - "https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger"
keywords:
  - "were"
  - "introduced"
  - "invoked"
  - "integrations"
  - "triggers"
  - "connector"
  - "event"
---

# Connector Event triggers

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Connector Event triggers were introduced to let integrations be invoked from external business-application event subscriptions.

## Extended Definition

Connector Event triggers were introduced to let integrations be invoked from external business-application event subscriptions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/known-issue](https://docs.cloud.google.com/application-integration/docs/known-issue)
- [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)
- [https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger](https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger)

## Supporting Pages

### Application Integration known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/known-issue](https://docs.cloud.google.com/application-integration/docs/known-issue)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Event subscription error when an integration containing Connector Event triggers is uploaded Status OPEN Issue Upon uploading an integration JSON file containing Connector Event triggers, the event subscription status is in an Error state with the following error: "Subscription does not exist, you can recreate the subscription by re-configuring the trigger." Workaround To work around this issue, we recommend you to do the following steps: Go to the uploaded integration.
- Integration fails to publish when duplicate Connector Event triggers are configured Status OPEN Issue When two or more Connector Event triggers are configured in the same integration, the integration fails to publish and throws the following error: " Failed to publish integration.
- Please change trigger Id to make it unique." This issue is observed when the Connector Event triggers are configured with the same connection and event subscription type.
- You can also edit the Connector Event triggers such that they are not configured to the same connection and event subscription type.

### "Invoke an integration for a Salesforce Change Data Capture (CDC) event \_\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click + Add new variable and create the following output variables: Output variable name Data type OpportunityIsClosed Boolean OpportunityId String PubSubMessage String Create the following mapping between the SalesforceTriggerCdcPayload variable and the Connector input payload variables as shown in the following table: Input Output SalesforceTriggerCdcPayload.GET PROPERTY("IsClosed").TO BOOLEAN() OpportunityIsClosed SalesforceTriggerCdcPayload.GET PROPERTY("Id").TO STRING() OpportunityId OpportunityId.TO DOUBLE() connectorInputPayload.ID(Insert row to Cloud SQL) SalesforceTriggerCdcPayload.GET PROPERTY("Name").TO STRING() connectorInputPayload.NAME(Insert row to Cloud SQL) SalesforceTriggerCdcSnapshot.GET PROPERTY("Amount").TO DOUBLE() connectorInputPayload.AMOUNT(Insert row to Cloud SQL) SalesforceTriggerCdcSnapshot.GET PROPERTY("CloseDate").TO STRING() connectorInputPayload.DT CLOSE(Insert row to Cloud SQL) OpportunityId.CONCAT(" is still open") PubSubMessage PubSubMessage connectorInputPayload.message(Publish to cloud pub/sub) Once your mapping is complete, close the pane.
- Add an edge connection from the Data Mapping element to the Insert row to Cloud SQL Connector element with the following edge condition: $OpportunityIsClosed$ = TRUE Add another edge connection from the Data Mapping element to the Cloud Pub/Sub Connector element with the following edge condition: $OpportunityIsClosed$ = FALSE Test the integration To test the new integration: Click Test in the integration designer toolbar, and then select the Salesforce Trigger .
- Test the Cloud SQL task by logging in to the Salesforce instance and changing an opportunity status to "closed." Test the Pub/Sub task by logging in to the Salesforce instance and changing another detail about the opportunity, but leave the status of the opportunity "open." For more information about testing, see Test and publish integrations .
- Configure a Connectors task with a Cloud SQL for MySQL connection Perform the following steps to configure a Connectors task to insert records into an existing Cloud SQL table using the Cloud SQL for MySQL connection : Select +Add a task/trigger > Tasks in the integration designer to display the list of available tasks.

### Azure AD trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger](https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger)
- Source ID: `site-docs-root-2`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View event subscriptions To view and manage all the event subscriptions associated with a connection in Integration Connectors, do the following: Go to Integration Connectors > Connections page.
- Note that the Azure AD trigger is an Connector Event trigger , therefore you can only use an Azure AD connection with event subscription enabled to configure the trigger.
- The Azure AD trigger is a Connector Event trigger that lets you invoke an integration based on the Azure AD events that you've subscribed to in your Azure AD connection.
- Trigger output variable For each event, the Azure AD trigger generates a ConnectorEventPayload output variable which you can use in your downstream tasks.

