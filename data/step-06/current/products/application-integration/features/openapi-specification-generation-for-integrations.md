---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.462Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "OpenAPI specification generation for integrations"
feature_slug: "openapi-specification-generation-for-integrations"
latest_feature_date: "2024-12-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/api-fulfilment"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
keywords:
  - "specification"
  - "generation"
  - "published"
  - "openapi"
  - "integrations"
  - "api"
  - "using"
  - "for"
---

# OpenAPI specification generation for integrations

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Published integrations using API triggers can now generate and display an OpenAPI Specification for easier understanding and analysis of API interactions.

## Extended Definition

Published integrations using API triggers can now generate and display an OpenAPI Specification for easier understanding and analysis of API interactions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/api-fulfilment](https://docs.cloud.google.com/application-integration/docs/api-fulfilment)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)

## Supporting Pages

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Feature Generate and view OpenAPI Specification ( Preview ) You can now generate and view the OpenAPI Specification for any published integration that uses API triggers.
- May 05, 2025 Change Cloud Function Task adds support for Cloud Functions v2 API The Cloud Function task in Application Integration now lets you create, link, and run the latest generation of serverless functions, called Cloud Run functions, using the Cloud Functions v2 API.
- For more information, see View OpenAPI Specification for your integration .
- Exact HR Openlegacy IBMi/AS/400 API Salesforce Commerce Cloud B2B December 13, 2024 Feature Integration templates ( Preview ) Save time and effort building integrations with integration templates.

### "API request fulfilment \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/api-fulfilment](https://docs.cloud.google.com/application-integration/docs/api-fulfilment)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Test using a REST API call Now that the integration is published and running, you can invoke it using the following POST REST call: URL: https://integrations.googleapis.com/v1/projects/ project-name /locations/-/integrations/api fulfilment:execute Request body: {"trigger id":"api trigger/api fulfilment API 1"} Example: Make an API request with custom inputs Note: The following example uses curl , which typically comes pre-installed for Linux and macOS operating systems.
- If you don't have curl , you can download it from the curl releases and downloads page . curl -v -X POST -H "Content-Type: application/json" 'https://integrations.googleapis.com/v1/projects/connectors-ip-test/locations/us-central1/integrations/api-fulfillment-integration:execute' -H "Authorization: Bearer $(gcloud auth AUTH PROFILE )" -d '{ "triggerId": "api trigger/api-fulfillment-integration API 1", "inputParameters": { "customer id": {"string value": 1}, "location" : {"string value" : "US"}} }' The API returns the integration execution response containing all following JSON: { "CUSTOMER ID": 2, "CUSTOMER NAME": "Dana" "CUSTOMER EMAILID": "test-02@test.com " "CUSTOMER CITY": "Seattle" } Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, unpublish the integration and delete the connections created in Integration Connectors.
- This tutorial uses a database that contains a SQL table named Customers with the following rows: +-------------+---------------+--------------------+------------------+ customer id customer name customer emailID customer city +-------------+---------------+--------------------+------------------+ 1 Amal test-01@test.com Delhi 2 Hao test-02@test.com Beijing +-------------+---------------+--------------------+------------------+ For information about creating and using a Oracle database, see the Oracle documentation .
- This tutorial uses a database that contains a table named Customers with the following rows: +-------------+---------------+--------------------+------------------+ customer id customer name customer emailID customer city +-------------+---------------+--------------------+------------------+ 1 Alex test-01@test.com New York 2 Dana test-02@test.com Seattle +-------------+---------------+--------------------+------------------+ For information about creating and using a MySQL database, see the MySQL documentation .

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Supported tasks and triggers Gemini can assist you to add the following tasks and triggers: Triggers Tasks API trigger Cloud Pub/Sub trigger Salesforce trigger Jira Cloud ServiceNow Zendesk Cloud Scheduler trigger Data mapper task Approval task Suspend task Javascript task Cloud Run functions Timer task Return task Send email task Connectors task Call REST endpoint task Doc AI - Process task Gemini also assists you to create the following control flow tasks but can't generate sub-integrations: For Each Loop task For Each Parallel task While Loop task Call Integration task Create an integration Gemini assists you to create and build integrations using your natural language statements (or prompts ) as input.
- Note: Gemini provides connector- and API Hub-based recommendations or suggestions for your integrations using the configured connections in Integration Connectors and APIs in Apigee API Hub .
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Only data in use and transit for generation using Gemini doesn't support data residency.

