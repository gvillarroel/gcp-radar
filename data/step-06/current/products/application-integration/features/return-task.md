---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.488Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Return task"
feature_slug: "return-task"
latest_feature_date: "2023-05-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database"
  - "https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks"
keywords:
  - "customizing"
  - "mappings"
  - "message"
  - "return"
  - "error"
  - "allows"
  - "task"
  - "the"
---

# Return task

Product: Application Integration
Coverage: LOW

## Step 02 Summary

The Return task allows customizing error message mappings for HTTP response codes returned during integration execution failures.

## Extended Definition

The Return task allows customizing error message mappings for HTTP response codes returned during integration execution failures.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database](https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database)
- [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)

## Supporting Pages

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Feature Return task The Return task lets you customize the error messages corresponding to the HTTP response codes that are returned during an integration execution failure.
- October 28, 2024 Feature Add failure policy ( Generally available (GA) ) You can now configure more complicated retry strategies for tasks , such as retries based on the error codes or the variable values during the execution: Configure multiple ordered conditional failure policies for each task.
- Feature Error catcher trigger The Error Catcher trigger lets you invoke an error catcher that is defined or customized to handle the failure of an identified trigger, task, or edge condition in your integration.
- When you delete an integration, you permanently delete all the versions of that integration, including all the integration variables, configured triggers, tasks, and data mappings.

### "Perform CRUD operations on a MySQL database \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database](https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This should return an error for the specified entity ID.
- In Connector output payload , the following output is displayed: [ { "employee id": 1.0, "employee first name": "Peter", "employee last name": "Dilliard", "employee emailID": "test-01@test.com" }, { "employee id": 2.0, "employee first name": "Meaghan", "employee last name": "Webb", "employee emailID": "test-02@test.com" } ] Perform other operations on your MySQL database table When you configure a Connectors task in your integration, you can select any one of the following operations: List Get Create Update Delete You've already used the List operation to view all the rows in the employee table.
- To view this information in your MySQL table, execute the following command from your MySQL client: SELECT FROM employee WHERE employee id=2; The following table row is displayed: +-------------+---------------------+--------------------+------------------+ employee id employee first name employee last name employee emailID +-------------+---------------------+--------------------+------------------+ 2 Meaghan Webb test-02@test.com +-------------+---------------------+--------------------+------------------+ Add a row to a table The Create operation allows you to add a row in a table.
- Select the Google Cloud project and perform the following tasks: Grant the following roles to the service account that you want to use to create the connection: roles/secretmanager.viewer roles/secretmanager.secretAccessor Enable the following services: secretmanager.googleapis.com (Secret Manager API) connectors.googleapis.com (Connectors API) If these services have not been enabled for your project previously, you are prompted to enable them when creating the connection .

### "All triggers and tasks \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Triggers API trigger Private trigger Cloud Pub/Sub trigger Schedule trigger Salesforce trigger Cloud Scheduler trigger Error Catcher trigger Connector Event triggers Apache Kafka trigger HL7 trigger IBM MQ trigger Jira Cloud trigger Jira Server Data Center trigger HubSpot trigger Rabbit MQ trigger SAP Gateway trigger SAP ERP trigger ServiceNow trigger Solace trigger TIBCO EMS trigger Webhook trigger Zendesk trigger Tasks for Google Cloud services AI Platform - Prediction task Apps Script task Cloud Function task Cloud KMS - decrypt Cloud KMS - encrypt Dataflow - Create Job task Drive - List task Doc AI - Batch Process task Doc AI - Operation task Doc AI - Process task Firestore - Batch Get task Firestore - Batch Write task Firestore - Document Get task Language - Annotate Text task Language - Classify Text task Secret Manager - Access task Sheets - Append task Sheets - Batch Get task Sheets - Get task Translate - Document task Translate - Text task Vertex AI - Predict task Workflows - Execute task Integration tasks Data Mapping task Call Integration task For Each Parallel task For Each Loop task While Loop task Approval task Send Email task Suspend task Timer task JavaScript task Return task Connectors task Call REST Endpoint task Data transformer script task Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- All triggers and tasks This page introduces the various configurable triggers and tasks available in Application Integration.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- For details, see the Google Developers Site Policies .

