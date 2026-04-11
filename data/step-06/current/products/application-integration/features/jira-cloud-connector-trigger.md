---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.477Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Jira Cloud connector trigger"
feature_slug: "jira-cloud-connector-trigger"
latest_feature_date: "2023-07-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
  - "https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing"
keywords:
  - "jira"
  - "became"
  - "connector"
  - "available"
  - "event"
  - "trigger"
  - "preview"
  - "in"
---

# Jira Cloud connector trigger

Product: Application Integration
Coverage: LOW

## Step 02 Summary

A Jira Cloud connector event trigger became available in preview in Application Integration.

## Extended Definition

A Jira Cloud connector event trigger became available in preview in Application Integration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)

## Supporting Pages

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Supported tasks and triggers Gemini can assist you to add the following tasks and triggers: Triggers Tasks API trigger Cloud Pub/Sub trigger Salesforce trigger Jira Cloud ServiceNow Zendesk Cloud Scheduler trigger Data mapper task Approval task Suspend task Javascript task Cloud Run functions Timer task Return task Send email task Connectors task Call REST endpoint task Doc AI - Process task Gemini also assists you to create the following control flow tasks but can't generate sub-integrations: For Each Loop task For Each Parallel task While Loop task Call Integration task Create an integration Gemini assists you to create and build integrations using your natural language statements (or prompts ) as input.
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Configure JavaScript tasks Preview — BigQuery Connector This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Note: Gemini suggests one or more integration flows that qualifies your prompt: If you have enabled API Hub and Integration Connectors and met all prerequisites , then recommendations will contain Call REST Endpoint and Connectors tasks.

### "Invoke an integration for a Salesforce Change Data Capture (CDC) event \_\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event](https://docs.cloud.google.com/application-integration/docs/invoke-integration-salesforce-cdc-event)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Configure a Connectors task with a Cloud SQL for MySQL connection Perform the following steps to configure a Connectors task to insert records into an existing Cloud SQL table using the Cloud SQL for MySQL connection : Select +Add a task/trigger > Tasks in the integration designer to display the list of available tasks.
- Configure a Connectors task with a Cloud Pub/Sub connection Perform the following steps to configure a Connectors task to publish a Pub/Sub message using the Cloud Pub/Sub connection : Select +Add a task/trigger > Tasks in the integration designer to display the list of available tasks.
- Click + Add new variable and create the following output variables: Output variable name Data type OpportunityIsClosed Boolean OpportunityId String PubSubMessage String Create the following mapping between the SalesforceTriggerCdcPayload variable and the Connector input payload variables as shown in the following table: Input Output SalesforceTriggerCdcPayload.GET PROPERTY("IsClosed").TO BOOLEAN() OpportunityIsClosed SalesforceTriggerCdcPayload.GET PROPERTY("Id").TO STRING() OpportunityId OpportunityId.TO DOUBLE() connectorInputPayload.ID(Insert row to Cloud SQL) SalesforceTriggerCdcPayload.GET PROPERTY("Name").TO STRING() connectorInputPayload.NAME(Insert row to Cloud SQL) SalesforceTriggerCdcSnapshot.GET PROPERTY("Amount").TO DOUBLE() connectorInputPayload.AMOUNT(Insert row to Cloud SQL) SalesforceTriggerCdcSnapshot.GET PROPERTY("CloseDate").TO STRING() connectorInputPayload.DT CLOSE(Insert row to Cloud SQL) OpportunityId.CONCAT(" is still open") PubSubMessage PubSubMessage connectorInputPayload.message(Publish to cloud pub/sub) Once your mapping is complete, close the pane.
- Add an edge connection from the Data Mapping element to the Insert row to Cloud SQL Connector element with the following edge condition: $OpportunityIsClosed$ = TRUE Add another edge connection from the Data Mapping element to the Cloud Pub/Sub Connector element with the following edge condition: $OpportunityIsClosed$ = FALSE Test the integration To test the new integration: Click Test in the integration designer toolbar, and then select the Salesforce Trigger .

### "Automate Salesforce case routing assignments \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Connect to Jira project Perform the following steps to configure a Connectors task that creates a new issue in your Jira project: In the integration editor, click Tasks to display a list of available tasks.
- Click + Add new variable and create the following variables: Variable name Data type Default value jira project-id STRING JIRA PROJECT ID Replace JIRA PROJECT ID with your Jira project ID. jira issue type id STRING JIRA ISSUE TYPE ID Replace JIRA ISSUE TYPE ID with any of the following issue type ID: 1000 - for Epic 1001 - for Story 1002 - for Task 1003 - for Sub-task 1004 - for Bug Create the following mapping: Input Output "{ "IssueTypeId": jira issue type id, "ProjectId": jira project id }" .TO JSON() .SET PROPERTY( connectorOutputPayload.Description (Fetch Salesforce Data), "Description" ) .SET PROPERTY( connectorOutputPayload.Subject (Fetch Salesforce Data), "Summary" ) connectorInputPayload (Create issue in Jira) Once your mapping is complete, close the pane.
- Connect to the Salesforce account Perform the following steps to add and configure a Connectors task to retrieve the case details using the Salesforce connection: In the integration editor, click Tasks to display a list of available tasks.
- Connect to ServiceNow Perform the following steps to configure a Connectors task that create a new incident to your ServiceNow instance: In the integration editor, click Tasks to display a list of available tasks.

