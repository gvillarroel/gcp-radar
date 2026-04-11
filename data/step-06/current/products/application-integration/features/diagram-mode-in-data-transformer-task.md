---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.463Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Diagram mode in Data Transformer task"
feature_slug: "diagram-mode-in-data-transformer-task"
latest_feature_date: "2024-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop"
  - "https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
keywords:
  - "diagram"
  - "console"
  - "mode"
  - "adds"
  - "transformer"
  - "based"
  - "task"
  - "in"
---

# Diagram mode in Data Transformer task

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Diagram mode adds a console-based data transformation editor experience for selecting input/output variables and defining transformations.

## Extended Definition

Diagram mode adds a console-based data transformation editor experience for selecting input/output variables and defining transformations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)

## Supporting Pages

### "Invoke a sub-integration using a For Each Loop task \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Invoke a sub-integration using a For Each Loop task To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me --> This quickstart shows you how to create an integration that uses a For Each Loop task to invoke a sub-integration.
- In Default Value , enter the following JSON: [{ "orderId" : "1" , "customerName" : "Harry Ford" , "emailId" : " YOUR EMAIL ID " , "shippingAddress" : { "city" : "New York" , "country" : "USA" , "zipcode" : "103487" }, "items" : [{ "itemid" : "111-222-333" , "itemName" : "Smartphone" , "itemPrice" : 999.0 , "quantity" : 1.0 }, { "itemid" : "444-555-666" , "itemName" : "Mobile Cover" , "itemPrice" : 49.0 , "quantity" : "" }], "paymentDetails" : { "mode" : "COD" , "status" : "" }, "expectedDelivery" : "15 March 2023" }, { "orderId" : "2" , "customerName" : "Tim Harvey" , "emailId" : " YOUR EMAIL ID " , "shippingAddress" : { "city" : "Los Angeles" , "country" : "USA" , "zipcode" : "210738" }, "items" : [{ "itemid" : "222-333-444" , "itemName" : "Laptop" , "itemPrice" : 5999.0 , "quantity" : 1.0 }], "paymentDetails" : { "mode" : "Online Payment" , "status" : "Success" }, "expectedDelivery" : "21 Feb 2023" }] In this sample JSON object, replace both occurrences of YOUR EMAIL ID with the email ID that you want to use to test the integration. e.
- In Default Value , enter the following JSON. { "orderId" : "1" , "customerName" : "Harry Ford" , "emailId" : " YOUR EMAIL ID " , "shippingAddress" : { "city" : "New York" , "country" : "USA" , "zipcode" : "103487" }, "items" : [{ "itemid" : "111-222-333" , "itemName" : "Smartphone" , "itemPrice" : 999.0 , "quantity" : 1.0 }, { "itemid" : "444-555-666" , "itemName" : "Mobile Cover" , "itemPrice" : 49.0 , "quantity" : "" }], "paymentDetails" : { "mode" : "COD" , "status" : "" }, "expectedDelivery" : "15 March 2023" } In this sample JSON object, replace YOUR EMAIL ID with the email ID that you want to use to test the integration. e.
- Add and configure a Data Mapping task The Data Mapping task lets you perform variable assignments in your integration, get and set properties of json objects, and apply nested transform functions to values.

### "Insert data into BigQuery using a For Each Parallel task \_|\_ Application\

- URL: [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Test your integration To test your integration, complete the following steps: Download sample data to your Cloud Shell: To launch a Cloud Shell session from the Google Cloud console, click the Activate Cloud Shell icon in the Cloud console .
- In this tutorial, you'll complete the following tasks: Set up a BigQuery connection Set up a sub-integration Set up the main integration Test your integration Before you begin Ensure that you have access to Application Integration.
- Add a For Each Parallel task To add a For Each Parallel task in the integration, complete the following steps: Select +Add a task/trigger > Tasks in the integration editor to display the list of available tasks.
- Configure the For Each Parallel task To configure the For Each Parallel task, complete the following steps: In the integration editor, click the For Each Parallel task to view the task configuration pane.

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Configure Call REST API tasks If you have API Hub enabled in your project, then Gemini in Application Integration can assist you in providing contextually appropriate Call REST Endpoint task and task configuration recommendations based on the logical flow of your existing integration.
- After you have met all prerequisites , to replace or modify an existing task in your integration using Gemini, perform the following steps: In the Google Cloud console, go to the Application Integration page.
- Configure connector tasks Gemini can assist you to provide contextually appropriate connector configuration recommendations based on the logical flow of your existing integration.
- To configure a connector task in your integration using Gemini, perform the following steps: In the Google Cloud console, go to the Application Integration page.

