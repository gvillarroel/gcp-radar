---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.479Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Cloud Monitoring integration for Application Integration"
feature_slug: "cloud-monitoring-integration-for-application-integration"
latest_feature_date: "2023-06-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing"
  - "https://docs.cloud.google.com/application-integration/docs/build-cicd"
keywords:
  - "monitoring"
  - "integrates"
  - "usage"
  - "application"
  - "integration"
  - "with"
  - "now"
  - "for"
---

# Cloud Monitoring integration for Application Integration

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Application Integration now integrates with Cloud Monitoring for usage, performance, alerts, and health visibility of integration resources.

## Extended Definition

Application Integration now integrates with Cloud Monitoring for usage, performance, alerts, and health visibility of integration resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- [https://docs.cloud.google.com/application-integration/docs/build-cicd](https://docs.cloud.google.com/application-integration/docs/build-cicd)

## Supporting Pages

### "Automate Salesforce opportunity to BigQuery order \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Costs In this tutorial, you use the following billable components of Google Cloud: Application Integration Integration Connectors BigQuery Secret Manager The instructions in this tutorial are designed to keep your resource usage within the limits of Google Cloud's Always Free tier .
- Home Documentation Application development Application Integration Guides Send feedback Automate Salesforce opportunity to BigQuery order Stay organized with collections Save and categorize content based on your preferences.
- The following edge condition controls the flow of the integration based on the validation of the account information: Add an edge connection from the Check account task to the Mapping for Account Creation task with the following edge condition: $account exists$ = False Add another edge connection from the Check account task to the Mapping for Order Creation task with the following edge condition: $account exists$ = True Sample integration flow The following figure shows a sample layout of the integration created using this tutorial.
- During validation, if the account information doesn't exist in BigQuery, the integration will automatically create a new entry in both the BigQuery table and the attached ServiceNow instance using Integration Connectors.

### "Automate Salesforce case routing assignments \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Costs In this tutorial, you use the following billable components of Google Cloud: Application Integration Integration Connectors Secret Manager The instructions in this tutorial are designed to keep your resource usage within the limits of Google Cloud's Always Free tier .
- Home Documentation Application development Application Integration Guides Send feedback Automate Salesforce case routing assignments Stay organized with collections Save and categorize content based on your preferences.
- The following edge condition controls the flow of the integration based on the type of the Salesforce case: Add an edge connection from the Get case type task to the Mapping for issue creation task with the following edge condition: $sf case type$ = "Engineering" Add another edge connection from the Get case type task to the Mapping for incident creation task with the following edge condition: $sf case type$ = "Sales" Sample integration flow The following figure shows a sample layout of the integration created using this tutorial.
- Connect to ServiceNow Perform the following steps to configure a Connectors task that create a new incident to your ServiceNow instance: In the integration editor, click Tasks to display a list of available tasks.

### "Build CICD for your integration \_|\_ Application Integration \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-cicd](https://docs.cloud.google.com/application-integration/docs/build-cicd)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Costs In this tutorial, you use the following billable components of Google Cloud: Application Integration Integration Connectors The instructions in this tutorial are designed to keep your resource usage within the limits of Google Cloud Free cloud features and trial offer .
- Home Documentation Application development Application Integration Guides Send feedback Build CICD for your integration Stay organized with collections Save and categorize content based on your preferences.
- Promote integration across environments To promote your integration across environments, you can use the integrationcli tool, which is an open-source tool that lets you interact with Application Integration APIs and Integration Connectors APIs .
- Tip: To learn how to store integration and connector assets to a source code repository, promote changes across environments, and how such deployments can be automated, see the CICD for Application Integration blog.

