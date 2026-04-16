---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.479Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "IAM Conditions for Application Integration"
feature_slug: "iam-conditions-for-application-integration"
latest_feature_date: "2023-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/add-iam-conditions"
  - "https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task"
  - "https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini"
keywords:
  - "conditions"
  - "fine"
  - "grained"
  - "supports"
---

# IAM Conditions for Application Integration

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration now supports IAM Conditions for fine-grained, attribute-based access control.

## Extended Definition

Application Integration now supports IAM Conditions for fine-grained, attribute-based access control.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/add-iam-conditions](https://docs.cloud.google.com/application-integration/docs/add-iam-conditions)
- [https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task](https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task)
- [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)

## Supporting Pages

### Add IAM conditions \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/add-iam-conditions](https://docs.cloud.google.com/application-integration/docs/add-iam-conditions)
- Source ID: `site-docs-reference-2`
- Final score: 75
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add IAM conditions Identity and Access Management (IAM) Conditions lets you to define and enforce conditional, attribute-based access control for Google Cloud resources, including Application Integration resources.
- For more information about IAM Conditions, see Overview of IAM Conditions .

### "Build integrations with Gemini Code Assist \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini](https://docs.cloud.google.com/application-integration/docs/build-integrations-gemini)
- Source ID: `site-docs-reference-2`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- In Application Integration, Gemini Code Assist can assist you to do the following: Create integrations Configure connector tasks in an integration Configure Call REST API tasks in an integration Add edge conditions and append additional tasks to an integration Configure JavaScript tasks ( Preview ) Generate integration description For detailed information about Gemini for Google Cloud, see Gemini for Google Cloud overview .
- Add edge conditions and append additional tasks You can use Gemini to append new tasks and to add edge conditions to your existing integration flow.
- Gemini automatically inserts the qualified edge conditions and configures the additional tasks from the selected edge in your existing integration.
- You can use the prompt input to interact with Gemini and fine-tune or re-generated the suggested recommendations if desired.

### Cloud Function task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task](https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task)
- Source ID: `site-docs-root-2`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have an integration variable named EmployeeName that you want to use in your Cloud Function source file, define the following task parameters: Key : EmployeeKey Value : EmployeeName The following sample script shows the usage of set and get functions to access the defined integration variables. def run ( event ): Read the integration variable EmployeeName using the reference variable EmployeeKey value = event . get ( ' EmployeeKey ' ); Change the integration variable EmployeeName value using the reference variable EmployeeKey event . set ( ' EmployeeKey ' , ' XYZ ' ); The new value of the integration variable is retained throughout the Cloud Function task. return Error handling strategy An error handling strategy for a task specifies the action to take if the task fails due to a temporary error .
- The Cloud Function task supports the following versions of Cloud Run functions: Cloud Functions (1st gen) Cloud Run functions created using the Cloud Functions v2 API For detailed information about the differences between Cloud Run functions versions, see the Cloud Functions comparison guide.
- Because this dependency is external to Application Integration, all executions of active integrations that fail because of the failure in the Cloud Function task are excluded from the Application Integration Service Level Agreement (SLA) terms and conditions.
- Built on Cloud Run and Eventarc, it supports extended request timeouts (up to 60 minutes), offers increased concurrency, and uses both .cloudfunctions.net and .run.app endpoint formats.

