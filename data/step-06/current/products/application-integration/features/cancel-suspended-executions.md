---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.469Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Cancel suspended executions"
feature_slug: "cancel-suspended-executions"
latest_feature_date: "2024-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/cancel-executions"
  - "https://docs.cloud.google.com/application-integration/docs/cloud-logging"
  - "https://docs.cloud.google.com/application-integration/docs/configure-approval-task"
keywords:
  - "suspended"
  - "cancel"
  - "executions"
  - "users"
  - "allows"
---

# Cancel suspended executions

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration now allows users to cancel executions that are suspended due to approvals or technical issues.

## Extended Definition

Application Integration now allows users to cancel executions that are suspended due to approvals or technical issues.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions)
- [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging)
- [https://docs.cloud.google.com/application-integration/docs/configure-approval-task](https://docs.cloud.google.com/application-integration/docs/configure-approval-task)

## Supporting Pages

### Cancel executions \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions)
- Source ID: `site-docs-reference-2`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cancel executions If you have an execution that is suspended due to an approval task or a technical issue, you can choose to cancel the execution.
- API Call the projects.locations.integrations.executions.cancel method and provide the ID of the execution that you want to cancel: curl -X POST https://integrations.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /integrations/ INTEGRATION NAME /executions/ EXECUTION ID :cancel -H "Authorization: Bearer $TOKEN" Limitations Cancel execution is subject to the following limitations: Canceling an execution that is triggered by a Schedule trigger isn't supported.
- You can cancel an integration execution if the integration is in one of the following execution states : Suspended On hold Retry on hold Cancel an execution To cancel an execution, select one of the following options: Console In Application Integration , go to the Logs page.
- You can't cancel an integration execution if the integration is in one of the following states: In process Succeeded Failed Canceled What's next Learn about logs in Application Integration .

### "View logs in Cloud Logging \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging)
- Source ID: `site-docs-reference-2`
- Final score: 65
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Log settings , click the Enable Cloud Logging toggle and then from the Severity list, select the severity type of the logs that you want to store in Cloud Logging: Info : Select this option to capture all execution statuses: SUCCEEDED , FAILED , PROCESSING , PENDING , SUSPENDED , RETRY ON HOLD , and CANCELLED .
- Sample queries You can use the following queries to view logs in Cloud Logging: To view all integration execution logs: resource.type="integrations.googleapis.com/IntegrationVersion" You can view integration execution logs for a specific execution ID: Searches only the parents executions with the given execution ID: resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.executionId=" EXECUTION ID " Searches for both parent and child executions launched from the given execution ID: resource.type="integrations.googleapis.com/IntegrationVersion" " EXECUTION ID " To view integration execution logs for a specific integration: resource.type="integrations.googleapis.com/IntegrationVersion" " INTEGRATION NAME " Or resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.integration=" INTEGRATION NAME " To view failed integration executions for a specific integration: resource.type="integrations.googleapis.com/IntegrationVersion" jsonPayload.integrationExecutionDetails.integrationExecutionState="FAILED" jsonPayload.integration=" INTEGRATION NAME " To view logs with specific request param name.
- Note: Currently, both Error and Warning severity levels capture FAILED and CANCELLED execution states.
- Warning : Select this option to capture the following execution statuses: FAILED and CANCELLED .

### Approval Task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-approval-task](https://docs.cloud.google.com/application-integration/docs/configure-approval-task)
- Source ID: `site-docs-root-2`
- Final score: 65
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Users don't receive any notification when an integration pauses (suspended).
- Users don't receive any notification when an integration pauses (suspended).
- Users receive notification when an integration pauses (suspended).
- During an integration execution, when the control reaches the Approval task, execution is halted, and all tasks after the Approval task are suspended.

