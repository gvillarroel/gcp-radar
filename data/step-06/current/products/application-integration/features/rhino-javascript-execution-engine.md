---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.465Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Rhino JavaScript execution engine"
feature_slug: "rhino-javascript-execution-engine"
latest_feature_date: "2025-01-23"
deprecation_date: "2025-01-24"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-javascript-task"
  - "https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing"
  - "https://docs.cloud.google.com/application-integration/docs/cancel-executions"
keywords:
  - "deprecates"
  - "engine"
  - "moving"
  - "rhino"
  - "javascript"
  - "execution"
---

# Rhino JavaScript execution engine

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration deprecates Rhino as the JavaScript execution engine, moving new JavaScript tasks to V8 while existing published Rhino tasks remain until migrated; deprecated on 2025-01-24.

## Extended Definition

Application Integration deprecates Rhino as the JavaScript execution engine, moving new JavaScript tasks to V8 while existing published Rhino tasks remain until migrated; deprecated on 2025-01-24.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-javascript-task](https://docs.cloud.google.com/application-integration/docs/configure-javascript-task)
- [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions)

## Supporting Pages

### JavaScript task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-javascript-task](https://docs.cloud.google.com/application-integration/docs/configure-javascript-task)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To leverage the performance and security benefits of Google's open-source high-performance JavaScript engine, Rhino will be deprecated and all JavaScript executions will now utilize V8, Google's open-source high-performance JavaScript engine.
- Benefits of V8 The V8 JavaScript engine offers the following benefits: Performance: V8 is significantly faster than Rhino, leading to improved execution speeds for your JavaScript tasks .
- JavaScript execution engine Deprecated: Effective January 24, 2025, Application Integration will no longer support Rhino as the JavaScript execution engine.
- JavaScript task Deprecated: Effective January 24, 2025, Application Integration will no longer support Rhino as the JavaScript execution engine.

### Cancel executions \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions)
- Source ID: `site-docs-reference-2`
- Final score: 57
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- API Call the projects.locations.integrations.executions.cancel method and provide the ID of the execution that you want to cancel: curl -X POST https://integrations.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /integrations/ INTEGRATION NAME /executions/ EXECUTION ID :cancel -H "Authorization: Bearer $TOKEN" Limitations Cancel execution is subject to the following limitations: Canceling an execution that is triggered by a Schedule trigger isn't supported.
- You can cancel an integration execution if the integration is in one of the following execution states : Suspended On hold Retry on hold Cancel an execution To cancel an execution, select one of the following options: Console In Application Integration , go to the Logs page.
- You can't cancel an integration execution if the integration is in one of the following states: In process Succeeded Failed Canceled What's next Learn about logs in Application Integration .
- Cancel executions If you have an execution that is suspended due to an approval task or a technical issue, you can choose to cancel the execution.

### "Automate Salesforce case routing assignments \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing](https://docs.cloud.google.com/application-integration/docs/automate-salesforce-case-routing)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- The following edge condition controls the flow of the integration based on the type of the Salesforce case: Add an edge connection from the Get case type task to the Mapping for issue creation task with the following edge condition: $sf case type$ = "Engineering" Add another edge connection from the Get case type task to the Mapping for incident creation task with the following edge condition: $sf case type$ = "Sales" Sample integration flow The following figure shows a sample layout of the integration created using this tutorial.
- Create new Jira issue Once you have extracted the Salesforce case type, and if the case is of type: Engineering , then route it to Jira Cloud as a new issue.
- Upon successfully publishing your integration, you can view and inspect the execution logs of the published integration.
- After you finish these steps, you can delete the project, removing all resources associated with the project.

