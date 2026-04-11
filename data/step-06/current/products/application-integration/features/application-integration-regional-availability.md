---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.489Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Application Integration regional availability"
feature_slug: "application-integration-regional-availability"
latest_feature_date: "2023-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
  - "https://docs.cloud.google.com/application-integration/docs/clone-integrations"
keywords:
  - "availability"
  - "regional"
  - "was"
  - "application"
  - "integration"
  - "new"
  - "added"
  - "in"
---

# Application Integration regional availability

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Application Integration was added in new Cloud locations, expanding availability to additional regions.

## Extended Definition

Application Integration was added in new Cloud locations, expanding availability to additional regions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- [https://docs.cloud.google.com/application-integration/docs/clone-integrations](https://docs.cloud.google.com/application-integration/docs/clone-integrations)

## Supporting Pages

### "Invoke a sub-integration using a For Each Loop task \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- In Default Value , enter the following JSON: [{ "orderId" : "1" , "customerName" : "Harry Ford" , "emailId" : " YOUR EMAIL ID " , "shippingAddress" : { "city" : "New York" , "country" : "USA" , "zipcode" : "103487" }, "items" : [{ "itemid" : "111-222-333" , "itemName" : "Smartphone" , "itemPrice" : 999.0 , "quantity" : 1.0 }, { "itemid" : "444-555-666" , "itemName" : "Mobile Cover" , "itemPrice" : 49.0 , "quantity" : "" }], "paymentDetails" : { "mode" : "COD" , "status" : "" }, "expectedDelivery" : "15 March 2023" }, { "orderId" : "2" , "customerName" : "Tim Harvey" , "emailId" : " YOUR EMAIL ID " , "shippingAddress" : { "city" : "Los Angeles" , "country" : "USA" , "zipcode" : "210738" }, "items" : [{ "itemid" : "222-333-444" , "itemName" : "Laptop" , "itemPrice" : 5999.0 , "quantity" : 1.0 }], "paymentDetails" : { "mode" : "Online Payment" , "status" : "Success" }, "expectedDelivery" : "21 Feb 2023" }] In this sample JSON object, replace both occurrences of YOUR EMAIL ID with the email ID that you want to use to test the integration. e.
- In Default Value , enter the following JSON. { "orderId" : "1" , "customerName" : "Harry Ford" , "emailId" : " YOUR EMAIL ID " , "shippingAddress" : { "city" : "New York" , "country" : "USA" , "zipcode" : "103487" }, "items" : [{ "itemid" : "111-222-333" , "itemName" : "Smartphone" , "itemPrice" : 999.0 , "quantity" : 1.0 }, { "itemid" : "444-555-666" , "itemName" : "Mobile Cover" , "itemPrice" : 49.0 , "quantity" : "" }], "paymentDetails" : { "mode" : "COD" , "status" : "" }, "expectedDelivery" : "15 March 2023" } In this sample JSON object, replace YOUR EMAIL ID with the email ID that you want to use to test the integration. e.
- Connect the elements in the sub-integration Now that you have added and configured the required tasks and triggers in the sub-integration, add a connection (edge) between the elements.
- Home Documentation Application development Application Integration Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-iam-reference`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- To add an edge condition or to append new tasks to your integration using Gemini, perform the following steps: In the Google Cloud, go to the Application Integration page.
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Configure Call REST API tasks If you have API Hub enabled in your project, then Gemini in Application Integration can assist you in providing contextually appropriate Call REST Endpoint task and task configuration recommendations based on the logical flow of your existing integration.
- If you plan to create an integration using Apigee API Hub APIs that are in a host project, ensure that you have provisioned the API Hub in your project and that the Application Integration service account has the required role to access the APIs in the other project.

### Clone integrations \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/clone-integrations](https://docs.cloud.google.com/application-integration/docs/clone-integrations)
- Source ID: `site-iam-reference`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clone as a new integration To create a new independent integration that is a full copy of the original integration version, perform the following steps: In the Google Cloud console, go to the Application Integration page.
- You can use cloning to create a new integration version within the same integration, or to create a completely new independent integration that is a full copy of the original integration version.
- Clone within the same integration To clone of an integration version within the same integration, perform the following steps: In the Google Cloud console, go to the Application Integration page.
- For information about creating authentication profiles, see Create authentication profiles in Application Integration You can't have two integrations with the same name in the same region.

