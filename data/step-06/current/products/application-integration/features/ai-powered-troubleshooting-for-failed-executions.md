---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.460Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "AI-powered troubleshooting for failed executions"
feature_slug: "ai-powered-troubleshooting-for-failed-executions"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop"
  - "https://docs.cloud.google.com/application-integration/docs/cloud-logging"
keywords:
  - "troubleshooting"
  - "powered"
  - "executions"
  - "failed"
  - "application"
  - "integration"
  - "ai"
  - "for"
---

# AI-powered troubleshooting for failed executions

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Application Integration now provides Gemini-based analysis of failed execution logs to identify root causes and provide actionable remediation steps.

## Extended Definition

Application Integration now provides Gemini-based analysis of failed execution logs to identify root causes and provide actionable remediation steps.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging)

## Supporting Pages

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- May 09, 2023 Feature Cloud logs support for Connectors tasks You can now view the execution logs of a failed Connectors task in Application Integration.
- May 23, 2023 Feature New tasks for Google Cloud services The following new integration tasks are available in preview : AI Platform - Prediction Cloud KMS - encrypt Cloud KMS - decrypt Dataflow - Create Job Drive - List Doc AI - Batch Process Doc AI - Process Doc AI - Operation Firestore - Batch Get Firestore - Batch Write Firestore - Document Get Language - Annotate Text Language - Classify Text Sheets - Append Sheets - Batch Get Sheets - Get Translate - Document Translate - Text Workflows - Execute May 22, 2023 Feature Support for Google-managed encryption keys Application Integration now uses Google-managed encryption keys as the default method of data encryption for your provisioned regions.
- December 13, 2023 Announcement Application Integration is now available in the following regions: asia-east2 (Taiwan) asia-northeast2 (Osaka) asia-northeast3 (Seoul) asia-south2 (Delhi) asia-southeast2 (Jakarta) europe-central2 (Warsaw) europe-west10 (Berlin) europe-west12 (Turin) northamerica-northeast2 (Toronto) southamerica-west1 (Santiago) us-east5 (Columbus) us-west3 (Salt Lake City) us-west4 (Las Vegas) us-south1 (Dallas) For the list of all the supported regions, see Locations .
- February 19, 2025 Change Enhancements to Execution Logs Application Integration Execution Logs now provides the following enhancements: View detailed task execution information: The dedicated Task Execution pane displays comprehensive execution details, including start and end times, status, type, and variable payload information , enabling improved debugging.

### "Invoke a sub-integration using a For Each Loop task \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- In Default Value , enter the following JSON: [{ "orderId" : "1" , "customerName" : "Harry Ford" , "emailId" : " YOUR EMAIL ID " , "shippingAddress" : { "city" : "New York" , "country" : "USA" , "zipcode" : "103487" }, "items" : [{ "itemid" : "111-222-333" , "itemName" : "Smartphone" , "itemPrice" : 999.0 , "quantity" : 1.0 }, { "itemid" : "444-555-666" , "itemName" : "Mobile Cover" , "itemPrice" : 49.0 , "quantity" : "" }], "paymentDetails" : { "mode" : "COD" , "status" : "" }, "expectedDelivery" : "15 March 2023" }, { "orderId" : "2" , "customerName" : "Tim Harvey" , "emailId" : " YOUR EMAIL ID " , "shippingAddress" : { "city" : "Los Angeles" , "country" : "USA" , "zipcode" : "210738" }, "items" : [{ "itemid" : "222-333-444" , "itemName" : "Laptop" , "itemPrice" : 5999.0 , "quantity" : 1.0 }], "paymentDetails" : { "mode" : "Online Payment" , "status" : "Success" }, "expectedDelivery" : "21 Feb 2023" }] In this sample JSON object, replace both occurrences of YOUR EMAIL ID with the email ID that you want to use to test the integration. e.
- In Default Value , enter the following JSON. { "orderId" : "1" , "customerName" : "Harry Ford" , "emailId" : " YOUR EMAIL ID " , "shippingAddress" : { "city" : "New York" , "country" : "USA" , "zipcode" : "103487" }, "items" : [{ "itemid" : "111-222-333" , "itemName" : "Smartphone" , "itemPrice" : 999.0 , "quantity" : 1.0 }, { "itemid" : "444-555-666" , "itemName" : "Mobile Cover" , "itemPrice" : 49.0 , "quantity" : "" }], "paymentDetails" : { "mode" : "COD" , "status" : "" }, "expectedDelivery" : "15 March 2023" } In this sample JSON object, replace YOUR EMAIL ID with the email ID that you want to use to test the integration. e.
- Create an input variable in the main integration In the main integration, an input variable is used to store the data that is passed through the For Each Loop to the sub-integration.
- Create an input variable in the sub-integration The sub-integration uses a variable to store the details received in JSON format from the main integration.

### "View logs in Cloud Logging \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample queries You can use the following queries to view logs in Cloud Logging: To view all integration execution logs: resource.type="integrations.googleapis.com/IntegrationVersion" You can view integration execution logs for a specific execution ID: Searches only the parents executions with the given execution ID: resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.executionId=" EXECUTION ID " Searches for both parent and child executions launched from the given execution ID: resource.type="integrations.googleapis.com/IntegrationVersion" " EXECUTION ID " To view integration execution logs for a specific integration: resource.type="integrations.googleapis.com/IntegrationVersion" " INTEGRATION NAME " Or resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.integration=" INTEGRATION NAME " To view failed integration executions for a specific integration: resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.integrationExecutionDetails.integrationExecutionState="FAILED" jsonPayload.integration=" INTEGRATION NAME " To view logs with specific request param name.
- View logs in Cloud Logging In Cloud Logging, you can view the Integration execution logs containing integration details, such as status, performance, integration version, request and response parameters, and the trigger and task configurations.
- Logs are displayed for the last three hours for the following default query: resource.type=integrations.googleapis.com/IntegrationVersion To understand the log format of Application Integration logs , see the log entries payload .
- In the Log settings , click the Enable Cloud Logging toggle and then from the Severity list, select the severity type of the logs that you want to store in Cloud Logging: Info : Select this option to capture all execution statuses: SUCCEEDED , FAILED , PROCESSING , PENDING , SUSPENDED , RETRY ON HOLD , and CANCELLED .

