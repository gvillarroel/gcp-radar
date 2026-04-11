---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.467Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Custom connector sharing across projects"
feature_slug: "custom-connector-sharing-across-projects"
latest_feature_date: "2024-07-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/api-fulfilment"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order"
keywords:
  - "projects"
  - "sharing"
  - "across"
  - "connectors"
  - "connector"
  - "custom"
  - "can"
  - "now"
---

# Custom connector sharing across projects

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Custom connectors can now be shared between Google Cloud projects by exporting and importing connector specifications.

## Extended Definition

Custom connectors can now be shared between Google Cloud projects by exporting and importing connector specifications.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/api-fulfilment](https://docs.cloud.google.com/application-integration/docs/api-fulfilment)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)

## Supporting Pages

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- July 15, 2024 Feature You can now share custom connectors between different Google Cloud projects by exporting and importing the connector specification .
- December 19, 2024 Feature You can now build and publish custom connectors for Google Cloud Marketplace .
- The canvas view offers the following benefits: Improved responsiveness of the canvas interaction Clearer view of your integration Minimap view Easier to build integrations August 18, 2024 Feature In the Application Integration editor, you can now search, browse, and select tasks and connectors in the Tasks list.
- Inline connection creation You can now use the Connectors task in Application Integration to directly create a new connection in the Integration Connectors platform.

### "API request fulfilment \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/api-fulfilment](https://docs.cloud.google.com/application-integration/docs/api-fulfilment)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't have curl , you can download it from the curl releases and downloads page . curl -v -X POST -H "Content-Type: application/json" 'https://integrations.googleapis.com/v1/projects/connectors-ip-test/locations/us-central1/integrations/api-fulfillment-integration:execute' -H "Authorization: Bearer $(gcloud auth AUTH PROFILE )" -d '{ "triggerId": "api trigger/api-fulfillment-integration API 1", "inputParameters": { "customer id": {"string value": 1}, "location" : {"string value" : "US"}} }' The API returns the integration execution response containing all following JSON: { "CUSTOMER ID": 2, "CUSTOMER NAME": "Dana" "CUSTOMER EMAILID": "test-02@test.com " "CUSTOMER CITY": "Seattle" } Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, unpublish the integration and delete the connections created in Integration Connectors.
- Test using a REST API call Now that the integration is published and running, you can invoke it using the following POST REST call: URL: https://integrations.googleapis.com/v1/projects/ project-name /locations/-/integrations/api fulfilment:execute Request body: {"trigger id":"api trigger/api fulfilment API 1"} Example: Make an API request with custom inputs Note: The following example uses curl , which typically comes pre-installed for Linux and macOS operating systems.
- Connect to the Oracle database Perform the following steps to add and configure a Connectors task to retrieve the customers details from the Oracle Customers table: In the integration editor, click Tasks to display a list of available tasks.
- Connect to the MySQL database Perform the following steps to add and configure a Connectors task to retrieve the customers details from the MySQL Customers table: In the integration editor, click Tasks to display a list of available tasks.

### "Automate Salesforce opportunity to BigQuery order \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- During validation, if the account information doesn't exist in BigQuery, the integration will automatically create a new entry in both the BigQuery table and the attached ServiceNow instance using Integration Connectors.
- Create a new ServiceNow account Perform the following steps to configure a Connectors task that adds a new account to your ServiceNow instance: In the integration editor, click Tasks to display a list of available tasks.
- Transform and map account details To transform the account details and map it to the BigQuery and ServiceNow connectors, do the following: In the integration editor, click Tasks to display a list of available tasks.
- ServiceNow connection Configure a ServiceNow connection in Integration Connectors using your instance URL to create and retrieve account details in ServiceNow.

