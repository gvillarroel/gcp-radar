---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.463Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Cancel suspended executions"
feature_slug: "cancel-suspended-executions"
latest_feature_date: "2024-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/cancel-executions"
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
keywords:
  - "suspended"
  - "cancel"
  - "executions"
  - "users"
  - "allows"
  - "application"
  - "integration"
  - "now"
---

# Cancel suspended executions

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Application Integration now allows users to cancel executions that are suspended due to approvals or technical issues.

## Extended Definition

Application Integration now allows users to cancel executions that are suspended due to approvals or technical issues.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions)
- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)

## Supporting Pages

### Cancel executions \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions)
- Source ID: `site-iam-reference`
- Final score: 204
- Re-rank relevance: STRONG
- Re-rank rationale: It explicitly states cancellations are for executions suspended by approval tasks or technical issues and gives detailed console/API steps to cancel them.

Evidence snippets:
- You can cancel an integration execution if the integration is in one of the following execution states : Suspended On hold Retry on hold Cancel an execution To cancel an execution, select one of the following options: Console In Application Integration , go to the Logs page.
- API Call the projects.locations.integrations.executions.cancel method and provide the ID of the execution that you want to cancel: curl -X POST https://integrations.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /integrations/ INTEGRATION NAME /executions/ EXECUTION ID :cancel -H "Authorization: Bearer $TOKEN" Limitations Cancel execution is subject to the following limitations: Canceling an execution that is triggered by a Schedule trigger isn't supported.
- You can't cancel an integration execution if the integration is in one of the following states: In process Succeeded Failed Canceled What's next Learn about logs in Application Integration .
- Cancel executions If you have an execution that is suspended due to an approval task or a technical issue, you can choose to cancel the execution.

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Cancel execution ( Preview ) If you have executions that are suspended due to an approval task or a technical issue, you can now choose to cancel those executions.
- May 23, 2023 Feature New tasks for Google Cloud services The following new integration tasks are available in preview : AI Platform - Prediction Cloud KMS - encrypt Cloud KMS - decrypt Dataflow - Create Job Drive - List Doc AI - Batch Process Doc AI - Process Doc AI - Operation Firestore - Batch Get Firestore - Batch Write Firestore - Document Get Language - Annotate Text Language - Classify Text Sheets - Append Sheets - Batch Get Sheets - Get Translate - Document Translate - Text Workflows - Execute May 22, 2023 Feature Support for Google-managed encryption keys Application Integration now uses Google-managed encryption keys as the default method of data encryption for your provisioned regions.
- December 13, 2023 Announcement Application Integration is now available in the following regions: asia-east2 (Taiwan) asia-northeast2 (Osaka) asia-northeast3 (Seoul) asia-south2 (Delhi) asia-southeast2 (Jakarta) europe-central2 (Warsaw) europe-west10 (Berlin) europe-west12 (Turin) northamerica-northeast2 (Toronto) southamerica-west1 (Santiago) us-east5 (Columbus) us-west3 (Salt Lake City) us-west4 (Las Vegas) us-south1 (Dallas) For the list of all the supported regions, see Locations .
- February 19, 2025 Change Enhancements to Execution Logs Application Integration Execution Logs now provides the following enhancements: View detailed task execution information: The dedicated Task Execution pane displays comprehensive execution details, including start and end times, status, type, and variable payload information , enabling improved debugging.

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Supported tasks and triggers Gemini can assist you to add the following tasks and triggers: Triggers Tasks API trigger Cloud Pub/Sub trigger Salesforce trigger Jira Cloud ServiceNow Zendesk Cloud Scheduler trigger Data mapper task Approval task Suspend task Javascript task Cloud Run functions Timer task Return task Send email task Connectors task Call REST endpoint task Doc AI - Process task Gemini also assists you to create the following control flow tasks but can't generate sub-integrations: For Each Loop task For Each Parallel task While Loop task Call Integration task Create an integration Gemini assists you to create and build integrations using your natural language statements (or prompts ) as input.
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Configure Call REST API tasks If you have API Hub enabled in your project, then Gemini in Application Integration can assist you in providing contextually appropriate Call REST Endpoint task and task configuration recommendations based on the logical flow of your existing integration.
- If you plan to create an integration using Apigee API Hub APIs that are in a host project, ensure that you have provisioned the API Hub in your project and that the Application Integration service account has the required role to access the APIs in the other project.

