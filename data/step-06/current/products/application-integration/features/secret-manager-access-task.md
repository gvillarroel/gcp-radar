---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.490Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Secret Manager - Access task"
feature_slug: "secret-manager-access-task"
latest_feature_date: "2023-04-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order"
  - "https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing"
keywords:
  - "manager"
  - "secret"
  - "access"
  - "enables"
  - "integrations"
  - "task"
  - "the"
  - "to"
---

# Secret Manager - Access task

Product: Application Integration
Coverage: LOW

## Step 02 Summary

The Secret Manager - Access task enables integrations to retrieve secret versions from Cloud Secret Manager.

## Extended Definition

The Secret Manager - Access task enables integrations to retrieve secret versions from Cloud Secret Manager.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)

## Supporting Pages

### "Automate Salesforce opportunity to BigQuery order \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-opportunity-to-bigquery-order)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Grant the following roles to the service account: BigQuery Data Editor ( roles/bigquery.dataEditor ), BigQuery Read Session User ( roles/bigquery.readSessionUser ), Secret Manager Viewer ( roles/secretmanager.viewer ), Secret Manager Secret Accessor ( roles/secretmanager ) .
- Grant the following roles to the service account: BigQuery Data Editor ( roles/bigquery.dataEditor ), BigQuery Read Session User ( roles/bigquery.readSessionUser ), Secret Manager Viewer ( roles/secretmanager.viewer ), Secret Manager Secret Accessor ( roles/secretmanager ) .
- Costs In this tutorial, you use the following billable components of Google Cloud: Application Integration Integration Connectors BigQuery Secret Manager The instructions in this tutorial are designed to keep your resource usage within the limits of Google Cloud's Always Free tier .
- Note: All the other required Google Cloud APIs such as, the Application Integration API , the Secret manager API , and the Connectors API are enabled during the Application Integration setup.

### "Insert data into BigQuery using a For Each Parallel task \_|\_ Application\

- URL: [https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task](https://docs.cloud.google.com/application-integration/docs/insert-data-bigquery-for-each-parallel-task)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Do the following in your Google Cloud project: Grant the following roles to the service account that you want to use to create the connection: roles/bigquery.dataEditor roles/bigquery.readSessionUser roles/secretmanager.viewer roles/secretmanager.secretAccessor Enable the following services: secretmanager.googleapis.com (Secret Manager API) connectors.googleapis.com (Connectors API) If these services have not been enabled for your project previously, you are prompted to enable them when creating the connection in the Create Connection page.
- To select three random entries from the sample dataset and store them in a way that you can pass them to the integration, enter the following commands in your Cloud Shell terminal: AUTH=$(gcloud auth print-access-token) export SAMPLE DOCS=$(jq $(r=$((RANDOM % 1000)) ; echo ".[$r:$((r + 3))]") < bq-sample-dataset.json jq -Rs '.') generate post data() { cat <<EOF { "triggerId": "api trigger/process-records API 1", "inputParameters": { "records": { "jsonValue": $SAMPLE DOCS } } } EOF } To start the testing, enter the following command in your Cloud Shell terminal: curl -X POST \ https://integrations.googleapis.com/v1/projects/ project id /locations/ region /integrations/process-records:execute \ -H "Authorization: Bearer $AUTH" \ -H "Content-Type: application/json" \ -d "$(generate post data)" In this command, replace: project id with the project ID of your Google Cloud project. region with the region where you created your integration.
- In this tutorial, you'll complete the following tasks: Set up a BigQuery connection Set up a sub-integration Set up the main integration Test your integration Before you begin Ensure that you have access to Application Integration.
- Add a For Each Parallel task To add a For Each Parallel task in the integration, complete the following steps: Select +Add a task/trigger > Tasks in the integration editor to display the list of available tasks.

### "Automate Salesforce case routing assignments \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Grant the following roles to the service account: Secret Manager Viewer ( roles/secretmanager.viewer ), Secret Manager Secret Accessor ( roles/secretmanager ) .
- Grant the following roles to the service account: Secret Manager Viewer ( roles/secretmanager.viewer ), Secret Manager Secret Accessor ( roles/secretmanager ) .
- Costs In this tutorial, you use the following billable components of Google Cloud: Application Integration Integration Connectors Secret Manager The instructions in this tutorial are designed to keep your resource usage within the limits of Google Cloud's Always Free tier .
- Note: All the other required Google Cloud APIs such as, the Application Integration API , the Secret manager API , and the Connectors API are enabled during the Application Integration setup.

