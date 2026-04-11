---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.487Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Customer-managed encryption keys (CMEK) for Application Integration"
feature_slug: "customer-managed-encryption-keys-cmek-for-application-integration"
latest_feature_date: "2023-05-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/setup-application-integration"
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop"
keywords:
  - "customer"
  - "cmek"
  - "encryption"
  - "managed"
  - "keys"
  - "application"
  - "integration"
  - "for"
---

# Customer-managed encryption keys (CMEK) for Application Integration

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Application Integration supports optional use of customer-managed encryption keys (CMEK) for its encryption configuration.

## Extended Definition

Application Integration supports optional use of customer-managed encryption keys (CMEK) for its encryption configuration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration)
- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)

## Supporting Pages

### Set up Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The default configurations include enabling APIs ( Application Integration API , Secret manager API , and Connectors API ), creating a default service account , and using Google-owned and Google-managed encryption keys as the encryption method for the selected region.
- Cloud KMS API cloudkms.googleapis.com Enables the use of Customer-managed encryption keys (CMEK) for data encryption.
- For more information about CMEK, see Customer-managed encryption keys .
- For more information about CMEK, see Customer-managed encryption keys .

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- May 23, 2023 Feature New tasks for Google Cloud services The following new integration tasks are available in preview : AI Platform - Prediction Cloud KMS - encrypt Cloud KMS - decrypt Dataflow - Create Job Drive - List Doc AI - Batch Process Doc AI - Process Doc AI - Operation Firestore - Batch Get Firestore - Batch Write Firestore - Document Get Language - Annotate Text Language - Classify Text Sheets - Append Sheets - Batch Get Sheets - Get Translate - Document Translate - Text Workflows - Execute May 22, 2023 Feature Support for Google-managed encryption keys Application Integration now uses Google-managed encryption keys as the default method of data encryption for your provisioned regions.
- You can optionally modify your encryption method with customer-managed encryption keys (CMEK).
- December 13, 2023 Announcement Application Integration is now available in the following regions: asia-east2 (Taiwan) asia-northeast2 (Osaka) asia-northeast3 (Seoul) asia-south2 (Delhi) asia-southeast2 (Jakarta) europe-central2 (Warsaw) europe-west10 (Berlin) europe-west12 (Turin) northamerica-northeast2 (Toronto) southamerica-west1 (Santiago) us-east5 (Columbus) us-west3 (Salt Lake City) us-west4 (Las Vegas) us-south1 (Dallas) For the list of all the supported regions, see Locations .
- February 19, 2025 Change Enhancements to Execution Logs Application Integration Execution Logs now provides the following enhancements: View detailed task execution information: The dedicated Task Execution pane displays comprehensive execution details, including start and end times, status, type, and variable payload information , enabling improved debugging.

### "Invoke a sub-integration using a For Each Loop task \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- In Default Value , enter the following JSON: [{ "orderId" : "1" , "customerName" : "Harry Ford" , "emailId" : " YOUR EMAIL ID " , "shippingAddress" : { "city" : "New York" , "country" : "USA" , "zipcode" : "103487" }, "items" : [{ "itemid" : "111-222-333" , "itemName" : "Smartphone" , "itemPrice" : 999.0 , "quantity" : 1.0 }, { "itemid" : "444-555-666" , "itemName" : "Mobile Cover" , "itemPrice" : 49.0 , "quantity" : "" }], "paymentDetails" : { "mode" : "COD" , "status" : "" }, "expectedDelivery" : "15 March 2023" }, { "orderId" : "2" , "customerName" : "Tim Harvey" , "emailId" : " YOUR EMAIL ID " , "shippingAddress" : { "city" : "Los Angeles" , "country" : "USA" , "zipcode" : "210738" }, "items" : [{ "itemid" : "222-333-444" , "itemName" : "Laptop" , "itemPrice" : 5999.0 , "quantity" : 1.0 }], "paymentDetails" : { "mode" : "Online Payment" , "status" : "Success" }, "expectedDelivery" : "21 Feb 2023" }] In this sample JSON object, replace both occurrences of YOUR EMAIL ID with the email ID that you want to use to test the integration. e.
- In Default Value , enter the following JSON. { "orderId" : "1" , "customerName" : "Harry Ford" , "emailId" : " YOUR EMAIL ID " , "shippingAddress" : { "city" : "New York" , "country" : "USA" , "zipcode" : "103487" }, "items" : [{ "itemid" : "111-222-333" , "itemName" : "Smartphone" , "itemPrice" : 999.0 , "quantity" : 1.0 }, { "itemid" : "444-555-666" , "itemName" : "Mobile Cover" , "itemPrice" : 49.0 , "quantity" : "" }], "paymentDetails" : { "mode" : "COD" , "status" : "" }, "expectedDelivery" : "15 March 2023" } In this sample JSON object, replace YOUR EMAIL ID with the email ID that you want to use to test the integration. e.
- Invoke a sub-integration using a For Each Loop task To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me --> This quickstart shows you how to create an integration that uses a For Each Loop task to invoke a sub-integration.
- Add and configure a Data Mapping task The Data Mapping task lets you perform variable assignments in your integration, get and set properties of json objects, and apply nested transform functions to values.

