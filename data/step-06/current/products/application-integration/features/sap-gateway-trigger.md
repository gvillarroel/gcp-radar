---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.468Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "SAP Gateway trigger"
feature_slug: "sap-gateway-trigger"
latest_feature_date: "2024-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/known-issue"
  - "https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event"
keywords:
  - "gateway"
  - "sap"
  - "generally"
  - "connector"
  - "event"
  - "trigger"
  - "is"
  - "the"
---

# SAP Gateway trigger

Product: Application Integration
Coverage: LOW

## Step 02 Summary

The SAP Gateway connector event trigger is generally available for Application Integration.

## Extended Definition

The SAP Gateway connector event trigger is generally available for Application Integration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/known-issue](https://docs.cloud.google.com/application-integration/docs/known-issue)
- [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)

## Supporting Pages

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- July 11, 2024 Feature The following Connector Event triggers are generally available : SAP ERP trigger SAP Gateway trigger May 26, 2024 Feature The TIBCO EMS trigger is now available in preview .
- November 21, 2023 Feature The following Connector Event triggers are available in preview : IBM MQ trigger Rabbit MQ trigger October 19, 2023 Announcement The maximum memory available for script evaluation in the Data Transformer Script task is 300 MB.
- July 20, 2023 Feature Connector Event triggers ( Preview ) Application Integration introduces Connector Event triggers ; specialized triggers that let you invoke an integration based on the event subscriptions created in various business applications using Integration Connectors .
- Issue Known issues Integration fails to publish when duplicate Connector Event triggers are configured Event subscription error when an integration containing Connector Event triggers is uploaded For more information, see Application Integration known issues .

### Application Integration known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/known-issue](https://docs.cloud.google.com/application-integration/docs/known-issue)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Event subscription error when an integration containing Connector Event triggers is uploaded Status OPEN Issue Upon uploading an integration JSON file containing Connector Event triggers, the event subscription status is in an Error state with the following error: "Subscription does not exist, you can recreate the subscription by re-configuring the trigger." Workaround To work around this issue, we recommend you to do the following steps: Go to the uploaded integration.
- Integration fails to publish when duplicate Connector Event triggers are configured Status OPEN Issue When two or more Connector Event triggers are configured in the same integration, the integration fails to publish and throws the following error: " Failed to publish integration.
- Please change trigger Id to make it unique." This issue is observed when the Connector Event triggers are configured with the same connection and event subscription type.
- Workaround To work around this issue, we recommend that you delete the duplicate Connector Event trigger(s) in your integration.

### "Invoke an integration for a Salesforce Change Data Capture (CDC) event \_\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Click + Add new variable and create the following output variables: Output variable name Data type OpportunityIsClosed Boolean OpportunityId String PubSubMessage String Create the following mapping between the SalesforceTriggerCdcPayload variable and the Connector input payload variables as shown in the following table: Input Output SalesforceTriggerCdcPayload.GET PROPERTY("IsClosed").TO BOOLEAN() OpportunityIsClosed SalesforceTriggerCdcPayload.GET PROPERTY("Id").TO STRING() OpportunityId OpportunityId.TO DOUBLE() connectorInputPayload.ID(Insert row to Cloud SQL) SalesforceTriggerCdcPayload.GET PROPERTY("Name").TO STRING() connectorInputPayload.NAME(Insert row to Cloud SQL) SalesforceTriggerCdcSnapshot.GET PROPERTY("Amount").TO DOUBLE() connectorInputPayload.AMOUNT(Insert row to Cloud SQL) SalesforceTriggerCdcSnapshot.GET PROPERTY("CloseDate").TO STRING() connectorInputPayload.DT CLOSE(Insert row to Cloud SQL) OpportunityId.CONCAT(" is still open") PubSubMessage PubSubMessage connectorInputPayload.message(Publish to cloud pub/sub) Once your mapping is complete, close the pane.
- Add an edge connection from the Data Mapping element to the Insert row to Cloud SQL Connector element with the following edge condition: $OpportunityIsClosed$ = TRUE Add another edge connection from the Data Mapping element to the Cloud Pub/Sub Connector element with the following edge condition: $OpportunityIsClosed$ = FALSE Test the integration To test the new integration: Click Test in the integration designer toolbar, and then select the Salesforce Trigger .
- Configure a Connectors task with a Cloud SQL for MySQL connection Perform the following steps to configure a Connectors task to insert records into an existing Cloud SQL table using the Cloud SQL for MySQL connection : Select +Add a task/trigger > Tasks in the integration designer to display the list of available tasks.
- Configure a Connectors task with a Cloud Pub/Sub connection Perform the following steps to configure a Connectors task to publish a Pub/Sub message using the Cloud Pub/Sub connection : Select +Add a task/trigger > Tasks in the integration designer to display the list of available tasks.

