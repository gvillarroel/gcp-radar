---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.470Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Cloud Pub/Sub trigger service account config variables"
feature_slug: "cloud-pub-sub-trigger-service-account-config-variables"
latest_feature_date: "2024-04-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email"
  - "https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing"
keywords:
  - "account"
  - "config"
  - "configuration"
  - "variables"
  - "pub"
  - "sub"
  - "trigger"
  - "now"
---

# Cloud Pub/Sub trigger service account config variables

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Cloud Pub/Sub trigger configuration now supports a config variable for the service account.

## Extended Definition

Cloud Pub/Sub trigger configuration now supports a config variable for the service account.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email](https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email)
- [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)

## Supporting Pages

### "Listen to Cloud Pub/Sub topic and send an email \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email](https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Cloud Pub/Sub trigger configuration pane will automatically populate the Trigger Output field with a variable to hold the Pub/Sub message.
- Configure a Cloud Pub/Sub trigger Click the Cloud Pub/Sub trigger element in the integration editor to view the trigger configuration pane.
- Before you begin Assign the following Identity and Access Management (IAM) roles to the Application Integration Service Agent ( service- PROJECT NUMBER @gcp-sa-integrations.iam.gserviceaccount.com ) in your Google Cloud project: Pub/Sub Editor Application Integration Invoker For more information about assigning IAM roles, see IAM roles and permissions .
- Add an edge connection from the Cloud Pub/Sub trigger element to the Data Mapping element by hovering over a control point on the Cloud Pub/Sub trigger element, then clicking and dragging a line to a control point on the Data Mapping task element.

### "Invoke a sub-integration using a For Each Loop task \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Connect the elements in the sub-integration Now that you have added and configured the required tasks and triggers in the sub-integration, add a connection (edge) between the elements.
- Test and publish the sub-integration To test this sub-integration, click Test in the integration editor toolbar and then click Test integration in the Test Integration dialog.
- To add and configure the API trigger, perform the following steps: In the integration editor, click Triggers to view the list of available triggers.
- Add an API trigger in the sub-integration Triggers are required to start the sequence of tasks that make up an integration.

### "Automate Salesforce case routing assignments \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Click + Add new variable and create the following input variables: Create the following mapping: Input Output "{}" .TO JSON() .SET PROPERTY( connectorOutputPayload.Description (Fetch Salesforce Data), "description" ) .SET PROPERTY( connectorOutputPayload.Subject (Fetch Salesforce Data), "short description" ) connectorInputPayload (Create incident in ServiceNow) Once your mapping is complete, close the pane.
- Select the Salesforce trigger element on the designer canvas to open the Salesforce trigger configuration pane.
- Click + Add new variable and create the following variables: Variable name Data type Default value jira project-id STRING JIRA PROJECT ID Replace JIRA PROJECT ID with your Jira project ID. jira issue type id STRING JIRA ISSUE TYPE ID Replace JIRA ISSUE TYPE ID with any of the following issue type ID: 1000 - for Epic 1001 - for Story 1002 - for Task 1003 - for Sub-task 1004 - for Bug Create the following mapping: Input Output "{ "IssueTypeId": jira issue type id, "ProjectId": jira project id }" .TO JSON() .SET PROPERTY( connectorOutputPayload.Description (Fetch Salesforce Data), "Description" ) .SET PROPERTY( connectorOutputPayload.Subject (Fetch Salesforce Data), "Summary" ) connectorInputPayload (Create issue in Jira) Once your mapping is complete, close the pane.
- Connect to the Salesforce account Perform the following steps to add and configure a Connectors task to retrieve the case details using the Salesforce connection: In the integration editor, click Tasks to display a list of available tasks.

