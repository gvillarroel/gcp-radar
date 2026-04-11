---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.491Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Cloud Scheduler trigger"
feature_slug: "cloud-scheduler-trigger"
latest_feature_date: "2023-01-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
  - "https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop"
keywords:
  - "scheduler"
  - "scheduled"
  - "executions"
  - "enables"
  - "integration"
  - "using"
  - "trigger"
  - "the"
---

# Cloud Scheduler trigger

Product: Application Integration
Coverage: LOW

## Step 02 Summary

The Cloud Scheduler trigger enables scheduled integration executions using time periods or intervals across multiple regions.

## Extended Definition

The Cloud Scheduler trigger enables scheduled integration executions using time periods or intervals across multiple regions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)

## Supporting Pages

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- January 10, 2023 Feature Cloud Scheduler trigger The Cloud Scheduler trigger lets you schedule your integration executions for defined time periods or regular intervals across multiple regions.
- July 20, 2023 Feature Connector Event triggers ( Preview ) Application Integration introduces Connector Event triggers ; specialized triggers that let you invoke an integration based on the event subscriptions created in various business applications using Integration Connectors .
- Cloud Scheduler triggers leverage the Cloud Scheduler services to provide a fully managed enterprise-grade cron job scheduler within Application Integration.
- May 05, 2025 Change Cloud Function Task adds support for Cloud Functions v2 API The Cloud Function task in Application Integration now lets you create, link, and run the latest generation of serverless functions, called Cloud Run functions, using the Cloud Functions v2 API.

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Supported tasks and triggers Gemini can assist you to add the following tasks and triggers: Triggers Tasks API trigger Cloud Pub/Sub trigger Salesforce trigger Jira Cloud ServiceNow Zendesk Cloud Scheduler trigger Data mapper task Approval task Suspend task Javascript task Cloud Run functions Timer task Return task Send email task Connectors task Call REST endpoint task Doc AI - Process task Gemini also assists you to create the following control flow tasks but can't generate sub-integrations: For Each Loop task For Each Parallel task While Loop task Call Integration task Create an integration Gemini assists you to create and build integrations using your natural language statements (or prompts ) as input.
- If you plan to create an integration using Apigee API Hub APIs that are in a host project, ensure that you have provisioned the API Hub in your project and that the Application Integration service account has the required role to access the APIs in the other project.
- After you have met all prerequisites , to replace or modify an existing task in your integration using Gemini, perform the following steps: In the Google Cloud console, go to the Application Integration page.
- Note: Gemini provides connector- and API Hub-based recommendations or suggestions for your integrations using the configured connections in Integration Connectors and APIs in Apigee API Hub .

### "Invoke a sub-integration using a For Each Loop task \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop](https://docs.cloud.google.com/application-integration/docs/invoke-sub-int-for-each-loop)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Invoke a sub-integration using a For Each Loop task To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me --> This quickstart shows you how to create an integration that uses a For Each Loop task to invoke a sub-integration.
- Connect the elements in the sub-integration Now that you have added and configured the required tasks and triggers in the sub-integration, add a connection (edge) between the elements.
- To add and configure the API trigger, perform the following steps: In the integration editor, click Triggers to view the list of available triggers.
- Add an API trigger in the main integration In the integration editor, click Triggers to view the list of available tasks and triggers.

