---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.771Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Resource conditions in Apigee IAM policies"
feature_slug: "resource-conditions-in-apigee-iam-policies"
latest_feature_date: "2022-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "conditions"
  - "policies"
  - "granular"
  - "resource"
  - "provide"
---

# Resource conditions in Apigee IAM policies

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee IAM policies now support resource conditions to provide granular control over Apigee resources.

## Extended Definition

Apigee IAM policies now support resource conditions to provide granular control over Apigee resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions](https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- The following sections provide suggested user prompts to include in the API requests to test for the following conditions included in your Model Armor template: Responsible AI (RAI) match Malicious URL detection Prompt injection detection Each example includes the expected response if the Model Armor policies are working as intended.
- Policy caught the offending text. filter matched: RAIMatchesFound: false, SDPMatchesFound: false, PIMatchesFound: true , CSAMMatchesFound: false, URIMatchesFound: false" , "detail" : { "errorcode" : "steps.sanitize.user.prompt.FilterMatched" } } } Working with Model Armor policies The following sections provide examples of common configurations for Model Armor policies.
- This section is not exhaustive but does provide a few examples of how the Model Armor policies can be customized for your needs.
- Create a service account to deploy the API proxy Before creating the API proxy, create a service account with the permissions required to deploy an API proxy that has Model Armor related policies: Create the service account: gcloud iam service-accounts create SERVICE ACCOUNT NAME \ --description = " DESCRIPTION " \ --display-name = " SERVICE ACCOUNT DISPLAY NAME " Where: SERVICE ACCOUNT NAME is the name of the service account.

### Add IAM conditions \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions](https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Identity and Access Management (IAM) Conditions lets you to define and enforce conditional access control for Google Cloud resources, including API hub resources.
- Examples of using IAM conditions for API hub Example 1: Access control for all API resources starting with a prefix or based on a Tag .
- Example 2: Access control for multiple APIs with IAM conditions based on resource type.
- Default role-based non-conditional access to other API hub resources. ( resource.service == "apihub.googleapis.com" && resource.type == "apihub.googleapis.com/Api" && resource.name.startsWith("projects/ PROJECT ID /locations/ LOCATION /apis/ API1 ID PREFIX ") ) ( resource.service == "apihub.googleapis.com" && resource.type == "apihub.googleapis.com/Version" && resource.name == "projects/ PROJECT ID /locations/ LOCATION /apis/ API2 ID /versions/ API2 VERSION ID " ) ( resource.service == "apihub.googleapis.com" && resource.type == "apihub.googleapis.com/Spec" && resource.name == "projects/ PROJECT ID /locations/ LOCATION /apis/ API3 ID /versions/ API3 VERSION ID /specs/ API3 SPEC ID " ) ( resource.type != "apihub.googleapis.com/Api" && resource.type != "apihub.googleapis.com/Version" && resource.type != "apihub.googleapis.com/Spec" && resource.type != "apihub.googleapis.com/ApiOperation" && resource.type != "apihub.googleapis.com/Definition" ) Replace the following: PROJECT ID : The ID of your Google Cloud project.

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference-2`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview The semantic caching policies help Apigee users with LLM models to intelligently serve identical or semantically similar prompts efficiently, minimizing backend API calls and reducing resource consumption.
- If you wish, you can provide a variable in this element to hold the value of the URL, as shown in the following example: <URL>https://{URL VARIABLE}</URL> Configure the semantic caching policies View the XML configuration of each policy by clicking on the policy name in the Detail view of the API proxy's Develop tab.
- Test the semantic caching policies To test the semantic caching policies: Send a request to the proxy using the following command: curl https:// $RUNTIME HOSTNAME / PROXY NAME -H 'Content-Type: application/json' --data '{ "contents": [ { "role": "user", "parts": [ { "text": "Why is the sky blue?" } ] } ] }' Replace PROXY NAME with the basepath of the API proxy you deployed in the previous step.
- Required roles To get the permissions that you need to create and use the semantic caching policies, ask your administrator to grant you the AI Platform User ( roles/aiplatform.user ) IAM role on the service account you use to deploy Apigee proxies.

