---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.464Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Integration test cases"
feature_slug: "integration-test-cases"
latest_feature_date: "2024-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing"
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
keywords:
  - "cases"
  - "case"
  - "complex"
  - "test"
  - "enables"
  - "integrations"
  - "integration"
  - "for"
---

# Integration test cases

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Test case support for complex integrations enables creating, configuring, managing, and running integration test cases.

## Extended Definition

Test case support for complex integrations enables creating, configuring, managing, and running integration test cases.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)

## Supporting Pages

### "Automate Salesforce case routing assignments \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Test case 2: To check if a ServiceNow incident is created for a sales case Test the integration by logging in to the Salesforce instance and creating a new case.
- Test case 1: To check if a Jira issue is created for an enginnering case Test the integration by logging in to the Salesforce instance and creating a new case.
- The following edge condition controls the flow of the integration based on the type of the Salesforce case: Add an edge connection from the Get case type task to the Mapping for issue creation task with the following edge condition: $sf case type$ = "Engineering" Add another edge connection from the Get case type task to the Mapping for incident creation task with the following edge condition: $sf case type$ = "Sales" Sample integration flow The following figure shows a sample layout of the integration created using this tutorial.
- Connect to the Salesforce account Perform the following steps to add and configure a Connectors task to retrieve the case details using the Salesforce connection: In the integration editor, click Tasks to display a list of available tasks.

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to do the following: Create test cases Configure test cases Manage test cases Run test cases Upload and download test cases Feature Local logging in async mode ( Generally available (GA) ) By default, local logging for new integrations is now enabled in async mode.
- Feature Test cases ( Preview ) You can now test if your integration is working as intended by creating and running test cases on your complex integrations.
- For information about test case, see Introduction to test cases .
- For more information, see Test and publish integrations .

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Supported tasks and triggers Gemini can assist you to add the following tasks and triggers: Triggers Tasks API trigger Cloud Pub/Sub trigger Salesforce trigger Jira Cloud ServiceNow Zendesk Cloud Scheduler trigger Data mapper task Approval task Suspend task Javascript task Cloud Run functions Timer task Return task Send email task Connectors task Call REST endpoint task Doc AI - Process task Gemini also assists you to create the following control flow tasks but can't generate sub-integrations: For Each Loop task For Each Parallel task While Loop task Call Integration task Create an integration Gemini assists you to create and build integrations using your natural language statements (or prompts ) as input.
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- The integration description summary is generated in plain language and can help you in understanding the overall integration use case, underlying orchestration, and business context which might be difficult to assess due to the structure or complexity of an integration.
- Note: Gemini provides connector- and API Hub-based recommendations or suggestions for your integrations using the configured connections in Integration Connectors and APIs in Apigee API Hub .

