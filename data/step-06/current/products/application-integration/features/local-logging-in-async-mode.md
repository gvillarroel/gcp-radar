---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.464Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Local logging in async mode"
feature_slug: "local-logging-in-async-mode"
latest_feature_date: "2024-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop"
  - "https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event"
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
keywords:
  - "local"
  - "async"
  - "mode"
  - "logging"
  - "integrations"
  - "new"
  - "for"
  - "in"
---

# Local logging in async mode

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Local logging for new integrations is enabled by default in async mode, writing log data at fixed intervals or when execution completes.

## Extended Definition

Local logging for new integrations is enabled by default in async mode, writing log data at fixed intervals or when execution completes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)
- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)

## Supporting Pages

### "Invoke a sub-integration using a For Each Loop task \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- In Default Value , enter the following JSON: [{ "orderId" : "1" , "customerName" : "Harry Ford" , "emailId" : " YOUR EMAIL ID " , "shippingAddress" : { "city" : "New York" , "country" : "USA" , "zipcode" : "103487" }, "items" : [{ "itemid" : "111-222-333" , "itemName" : "Smartphone" , "itemPrice" : 999.0 , "quantity" : 1.0 }, { "itemid" : "444-555-666" , "itemName" : "Mobile Cover" , "itemPrice" : 49.0 , "quantity" : "" }], "paymentDetails" : { "mode" : "COD" , "status" : "" }, "expectedDelivery" : "15 March 2023" }, { "orderId" : "2" , "customerName" : "Tim Harvey" , "emailId" : " YOUR EMAIL ID " , "shippingAddress" : { "city" : "Los Angeles" , "country" : "USA" , "zipcode" : "210738" }, "items" : [{ "itemid" : "222-333-444" , "itemName" : "Laptop" , "itemPrice" : 5999.0 , "quantity" : 1.0 }], "paymentDetails" : { "mode" : "Online Payment" , "status" : "Success" }, "expectedDelivery" : "21 Feb 2023" }] In this sample JSON object, replace both occurrences of YOUR EMAIL ID with the email ID that you want to use to test the integration. e.
- In Default Value , enter the following JSON. { "orderId" : "1" , "customerName" : "Harry Ford" , "emailId" : " YOUR EMAIL ID " , "shippingAddress" : { "city" : "New York" , "country" : "USA" , "zipcode" : "103487" }, "items" : [{ "itemid" : "111-222-333" , "itemName" : "Smartphone" , "itemPrice" : 999.0 , "quantity" : 1.0 }, { "itemid" : "444-555-666" , "itemName" : "Mobile Cover" , "itemPrice" : 49.0 , "quantity" : "" }], "paymentDetails" : { "mode" : "COD" , "status" : "" }, "expectedDelivery" : "15 March 2023" } In this sample JSON object, replace YOUR EMAIL ID with the email ID that you want to use to test the integration. e.
- To create a new input variable, perform the following steps: Click last page (Toggle panel) in the designer navigation bar to bring up the Variables pane.
- See Enable new region for more information.

### "Invoke an integration for a Salesforce Change Data Capture (CDC) event \_\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Test the Cloud SQL task by logging in to the Salesforce instance and changing an opportunity status to "closed." Test the Pub/Sub task by logging in to the Salesforce instance and changing another detail about the opportunity, but leave the status of the opportunity "open." For more information about testing, see Test and publish integrations .
- Click + Add new variable and create the following output variables: Output variable name Data type OpportunityIsClosed Boolean OpportunityId String PubSubMessage String Create the following mapping between the SalesforceTriggerCdcPayload variable and the Connector input payload variables as shown in the following table: Input Output SalesforceTriggerCdcPayload.GET PROPERTY("IsClosed").TO BOOLEAN() OpportunityIsClosed SalesforceTriggerCdcPayload.GET PROPERTY("Id").TO STRING() OpportunityId OpportunityId.TO DOUBLE() connectorInputPayload.ID(Insert row to Cloud SQL) SalesforceTriggerCdcPayload.GET PROPERTY("Name").TO STRING() connectorInputPayload.NAME(Insert row to Cloud SQL) SalesforceTriggerCdcSnapshot.GET PROPERTY("Amount").TO DOUBLE() connectorInputPayload.AMOUNT(Insert row to Cloud SQL) SalesforceTriggerCdcSnapshot.GET PROPERTY("CloseDate").TO STRING() connectorInputPayload.DT CLOSE(Insert row to Cloud SQL) OpportunityId.CONCAT(" is still open") PubSubMessage PubSubMessage connectorInputPayload.message(Publish to cloud pub/sub) Once your mapping is complete, close the pane.
- Add an edge connection from the Data Mapping element to the Insert row to Cloud SQL Connector element with the following edge condition: $OpportunityIsClosed$ = TRUE Add another edge connection from the Data Mapping element to the Cloud Pub/Sub Connector element with the following edge condition: $OpportunityIsClosed$ = FALSE Test the integration To test the new integration: Click Test in the integration designer toolbar, and then select the Salesforce Trigger .
- Create a new integration To create a new integration, perform the following steps: In the Google Cloud console, go to the Application Integration page.

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to do the following: Create test cases Configure test cases Manage test cases Run test cases Upload and download test cases Feature Local logging in async mode ( Generally available (GA) ) By default, local logging for new integrations is now enabled in async mode.
- November 29, 2023 Change The Database persistence feature is now renamed to Local logging , which also supports logging in ASYNC mode.
- Change Control HTTP call access by region in Application Integration Application Integration now offers a new control within the Regions page to enable or disable HTTP calls for integrations on a per-region basis.
- For more information, see Local logging .

