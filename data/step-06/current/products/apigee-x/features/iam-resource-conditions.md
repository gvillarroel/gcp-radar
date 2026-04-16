---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.190Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "IAM resource conditions"
feature_slug: "iam-resource-conditions"
latest_feature_date: "2022-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
keywords:
  - "conditions"
  - "policies"
  - "granular"
  - "more"
  - "over"
  - "resource"
  - "control"
---

# IAM resource conditions

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

IAM policies support resource conditions for more granular control over Apigee resources.

## Extended Definition

IAM policies support resource conditions for more granular control over Apigee resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions](https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)

## Supporting Pages

### Add IAM conditions \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions](https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Identity and Access Management (IAM) Conditions lets you to define and enforce conditional access control for Google Cloud resources, including API hub resources.
- Examples of using IAM conditions for API hub Example 1: Access control for all API resources starting with a prefix or based on a Tag .
- Example 2: Access control for multiple APIs with IAM conditions based on resource type.
- For more information about IAM Conditions, see Overview of IAM Conditions .

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to create and use the Apigee Model Armor policies, ask your administrator to grant you the following IAM roles on the service account you use to deploy Apigee proxies: Model Armor User ( roles/modelarmor.user ) Model Armor Viewer ( roles/modelarmor.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT $LOCATION $RUNTIME HOSTNAME Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT Overview The following sections describe the steps required to create and configure the Model Armor policies: Enable Model Armor APIs.
- The following sections provide suggested user prompts to include in the API requests to test for the following conditions included in your Model Armor template: Responsible AI (RAI) match Malicious URL detection Prompt injection detection Each example includes the expected response if the Model Armor policies are working as intended.
- To learn more about the benefits of integrating with Model Armor, see Model Armor overview .

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- For example, in the following Flow configuration, any inbound request that does not include the path suffix /first or /second will cause the ThirdFlow to execute, enforcing the policy called Return404 . <Flows> <Flow name="FirstFlow"> <Condition>proxy.pathsuffix MatchesPath "/first"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> </Request> </Flow> <Flow name="SecondFlow"> <Condition>proxy.pathsuffix MatchesPath "/second"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> <Step><Name>SecondPolicy</Name></Step> </Request> </Flow> <Flow name="ThirdFlow"> <Request> <Step><Name>Return404</Name></Step> </Request> </Flow> </Flows> Resources "Resources" (resource files for use in API proxies) are scripts, code, and XSL transformations that can be attached to Flows using policies.
- By defining conditional flows, you gain the ability to apply processing steps in an API proxy based on: Request URI HTTP verb ( GET / PUT / POST / DELETE ) Value of a query param, header, and form param Many other types of conditions For example, the following conditional flow specifies that it is executed only when the request resource path is /accesstoken .
- A fault rule specifies two items: A Condition that specifies the fault to be handled based on the pre-defined category, subcategory, or name of the fault One or more policies that define the behavior of the fault rule for the corresponding Condition See Handling faults .
- A fault rule specifies two items: A Condition that specifies the fault to be handled based on the pre-defined category, subcategory, or name of the fault One or more policies that define the behavior of the fault rule for the corresponding Condition See Handling faults .

