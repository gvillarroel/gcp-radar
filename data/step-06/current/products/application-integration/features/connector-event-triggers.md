---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.477Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Connector Event triggers"
feature_slug: "connector-event-triggers"
latest_feature_date: "2023-07-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order"
  - "https://docs.cloud.google.com/application-integration/docs/known-issue"
keywords:
  - "were"
  - "let"
  - "introduced"
  - "integrations"
  - "triggers"
  - "connector"
  - "event"
  - "to"
---

# Connector Event triggers

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Connector Event triggers were introduced to let integrations be invoked from external business-application event subscriptions.

## Extended Definition

Connector Event triggers were introduced to let integrations be invoked from external business-application event subscriptions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- [https://docs.cloud.google.com/application-integration/docs/known-issue](https://docs.cloud.google.com/application-integration/docs/known-issue)

## Supporting Pages

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- July 20, 2023 Feature Connector Event triggers ( Preview ) Application Integration introduces Connector Event triggers ; specialized triggers that let you invoke an integration based on the event subscriptions created in various business applications using Integration Connectors .
- Issue Known issues Integration fails to publish when duplicate Connector Event triggers are configured Event subscription error when an integration containing Connector Event triggers is uploaded For more information, see Application Integration known issues .
- November 21, 2023 Feature The following Connector Event triggers are available in preview : IBM MQ trigger Rabbit MQ trigger October 19, 2023 Announcement The maximum memory available for script evaluation in the Data Transformer Script task is 300 MB.
- July 11, 2024 Feature The following Connector Event triggers are generally available : SAP ERP trigger SAP Gateway trigger May 26, 2024 Feature The TIBCO EMS trigger is now available in preview .

### "Automate Salesforce opportunity to BigQuery order \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Click + Add new variable and create the following variable: Variable name Data type order number STRING Create the following mapping to generate a new order number and map the order details to the BigQuery connector: Input Output GENERATE UUID() .SPLIT("-") .GET("0") new order number "{}" .TO JSON() .SET PROPERTY( connectorOutputPayload ( Fetch Salesforce Data) .GET PROPERTY("DeliveryInstallationStatus c") , "order status" ) .SET PROPERTY( connectorOutputPayload ( Fetch Salesforce Data) .GET PROPERTY("TrackingNumber c") , "tracking number" ) .SET PROPERTY( new order number , "order number" ) connectorInputPayload (Create Order in BigQuery) Once your mapping is complete, close the pane.
- Click + Add new variable and create the following output variables: Output variable name Data type sf account id STRING sf account name STRING account exists BOOLEAN Create the following mapping between the Salesforce connector payload variable and the local variable: Input Output connectorOutputPayload ( Fetch Salesforce Data) .GET PROPERTY("AccountId") sf account id connectorOutputPayload ( Fetch Salesforce Data) .GET PROPERTY("Name") sf account name connectorOutputPayload (Check account in BigQuery) .FILTER( obj1 -> obj1 .GET PROPERTY("account id") .TO STRING() .EQUALS(sf account id) ) .SIZE() .EQUALS("1") account exists Once your mapping is complete, close the pane.
- Click + Add new variable and create the following input variables: Input variable name Data type new BQaccount JSON new SNaccount JSON Create the following mapping to map the Salesforce account ID and name to the BigQuery table: Input Output new BQaccount .SET PROPERTY( sf account id, "account id" ) .SET PROPERTY( sf account name, "name" ) connectorInputPayload (Create account in BigQuery) new SNaccount .SET PROPERTY( sf account id, "sys id" ) .SET PROPERTY( sf account name, "first name" ) connectorInputPayload (Create account in ServiceNow) Once your mapping is complete, close the pane.
- Create the following mapping to update the Salesforce opportunity: Input Output "{}" .TO JSON() .SET PROPERTY( new order number , "OrderNumber c" ) connectorInputPayload (Update Salesforce) entityId ( Fetch Salesforce Data) entityId (Update Salesforce ) "'" .CONCAT(entityId ( Fetch Salesforce Data)) .CONCAT("'") filterClause (Update Salesforce ) Once your mapping is complete, close the pane.

### Application Integration known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/known-issue](https://docs.cloud.google.com/application-integration/docs/known-issue)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Event subscription error when an integration containing Connector Event triggers is uploaded Status OPEN Issue Upon uploading an integration JSON file containing Connector Event triggers, the event subscription status is in an Error state with the following error: "Subscription does not exist, you can recreate the subscription by re-configuring the trigger." Workaround To work around this issue, we recommend you to do the following steps: Go to the uploaded integration.
- Integration fails to publish when duplicate Connector Event triggers are configured Status OPEN Issue When two or more Connector Event triggers are configured in the same integration, the integration fails to publish and throws the following error: " Failed to publish integration.
- Please change trigger Id to make it unique." This issue is observed when the Connector Event triggers are configured with the same connection and event subscription type.
- You can also edit the Connector Event triggers such that they are not configured to the same connection and event subscription type.

