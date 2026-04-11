---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.464Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Replay failed executions"
feature_slug: "replay-failed-executions"
latest_feature_date: "2024-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/cloud-logging"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
keywords:
  - "replay"
  - "executions"
  - "failed"
  - "execution"
  - "application"
  - "integration"
  - "using"
  - "can"
---

# Replay failed executions

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Application Integration can replay a failed integration execution using the same parameters as the original run.

## Extended Definition

Application Integration can replay a failed integration execution using the same parameters as the original run.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)

## Supporting Pages

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Change Enhancements to Replay Execution Application Integration Replay Execution now provides the following enhancements: Modify input parameters on replay: You can now modify the input parameters of an integration execution when initiating a replay.
- May 09, 2023 Feature Cloud logs support for Connectors tasks You can now view the execution logs of a failed Connectors task in Application Integration.
- Feature Replay execution ( Preview ) You can now rerun a failed integration with the same parameters as the previous execution.
- October 10, 2025 Feature Manage Application Integration resources using custom constraints You can now use custom constraints with Organization Policy to provide more granular control over specific fields for some Application Integration resources.

### "View logs in Cloud Logging \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample queries You can use the following queries to view logs in Cloud Logging: To view all integration execution logs: resource.type="integrations.googleapis.com/IntegrationVersion" You can view integration execution logs for a specific execution ID: Searches only the parents executions with the given execution ID: resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.executionId=" EXECUTION ID " Searches for both parent and child executions launched from the given execution ID: resource.type="integrations.googleapis.com/IntegrationVersion" " EXECUTION ID " To view integration execution logs for a specific integration: resource.type="integrations.googleapis.com/IntegrationVersion" " INTEGRATION NAME " Or resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.integration=" INTEGRATION NAME " To view failed integration executions for a specific integration: resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.integrationExecutionDetails.integrationExecutionState="FAILED" jsonPayload.integration=" INTEGRATION NAME " To view logs with specific request param name.
- In the Log settings , click the Enable Cloud Logging toggle and then from the Severity list, select the severity type of the logs that you want to store in Cloud Logging: Info : Select this option to capture all execution statuses: SUCCEEDED , FAILED , PROCESSING , PENDING , SUSPENDED , RETRY ON HOLD , and CANCELLED .
- View logs in Cloud Logging In Cloud Logging, you can view the Integration execution logs containing integration details, such as status, performance, integration version, request and response parameters, and the trigger and task configurations.
- Go to Application Integration To view the integration execution logs in Cloud Logging, use one of the following methods: In the navigation menu, click Logs , and then, click View Cloud Logs .

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Supported tasks and triggers Gemini can assist you to add the following tasks and triggers: Triggers Tasks API trigger Cloud Pub/Sub trigger Salesforce trigger Jira Cloud ServiceNow Zendesk Cloud Scheduler trigger Data mapper task Approval task Suspend task Javascript task Cloud Run functions Timer task Return task Send email task Connectors task Call REST endpoint task Doc AI - Process task Gemini also assists you to create the following control flow tasks but can't generate sub-integrations: For Each Loop task For Each Parallel task While Loop task Call Integration task Create an integration Gemini assists you to create and build integrations using your natural language statements (or prompts ) as input.
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Configure Call REST API tasks If you have API Hub enabled in your project, then Gemini in Application Integration can assist you in providing contextually appropriate Call REST Endpoint task and task configuration recommendations based on the logical flow of your existing integration.
- If you plan to create an integration using Apigee API Hub APIs that are in a host project, ensure that you have provisioned the API Hub in your project and that the Application Integration service account has the required role to access the APIs in the other project.

