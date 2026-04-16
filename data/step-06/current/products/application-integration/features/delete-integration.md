---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.493Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Delete integration"
feature_slug: "delete-integration"
latest_feature_date: "2023-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/api-fulfilment"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order"
keywords:
  - "deleting"
  - "delete"
  - "entire"
  - "capability"
  - "versions"
  - "allows"
---

# Delete integration

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

The delete integration capability allows deleting an entire integration and all its versions in a single operation.

## Extended Definition

The delete integration capability allows deleting an entire integration and all its versions in a single operation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/api-fulfilment](https://docs.cloud.google.com/application-integration/docs/api-fulfilment)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)

## Supporting Pages

### "API request fulfilment \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/api-fulfilment](https://docs.cloud.google.com/application-integration/docs/api-fulfilment)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't have curl , you can download it from the curl releases and downloads page . curl -v -X POST -H "Content-Type: application/json" 'https://integrations.googleapis.com/v1/projects/connectors-ip-test/locations/us-central1/integrations/api-fulfillment-integration:execute' -H "Authorization: Bearer $(gcloud auth AUTH PROFILE )" -d '{ "triggerId": "api trigger/api-fulfillment-integration API 1", "inputParameters": { "customer id": {"string value": 1}, "location" : {"string value" : "US"}} }' The API returns the integration execution response containing all following JSON: { "CUSTOMER ID": 2, "CUSTOMER NAME": "Dana" "CUSTOMER EMAILID": "test-02@test.com " "CUSTOMER CITY": "Seattle" } Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, unpublish the integration and delete the connections created in Integration Connectors.
- When you finish the tasks that are described in this document, you can avoid continued billing by deleting the resources that you created.
- After you finish these steps, you can delete the project, removing all resources associated with the project.
- After you finish these steps, you can delete the project, removing all resources associated with the project.

### "Automate Salesforce case routing assignments \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, unpublish the integration and delete the connections created in Integration Connectors.
- When you finish the tasks that are described in this document, you can avoid continued billing by deleting the resources that you created.
- After you finish these steps, you can delete the project, removing all resources associated with the project.
- After you finish these steps, you can delete the project, removing all resources associated with the project.

### "Automate Salesforce opportunity to BigQuery order \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, unpublish the integration and delete the connections created in Integration Connectors.
- When you finish the tasks that are described in this document, you can avoid continued billing by deleting the resources that you created.
- After you finish these steps, you can delete the project, removing all resources associated with the project.
- After you finish these steps, you can delete the project, removing all resources associated with the project.

