---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.741Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Cloud IAM-based API access control (VerifyIAM)"
feature_slug: "cloud-iam-based-api-access-control-verifyiam"
latest_feature_date: "2024-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions"
keywords:
  - "verifyiam"
  - "authorization"
  - "authentication"
  - "control"
  - "introduced"
  - "access"
  - "based"
---

# Cloud IAM-based API access control (VerifyIAM)

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Introduced Cloud IAM-based authorization and authentication for Apigee API invocations using VerifyIAM policy requirements.

## Extended Definition

Introduced Cloud IAM-based authorization and authentication for Apigee API invocations using VerifyIAM policy requirements.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions](https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Create and deploy a Vector Search index To create and deploy a Vector Search index: Create a Vector Search index that allows streaming updates: ACCESS TOKEN = $( gcloud auth print-access-token ) && curl --location --request POST \ "https:// $REGION -aiplatform.googleapis.com/v1/projects/ $PROJECT ID /locations/ $REGION /indexes" \ --header "Authorization: Bearer $ACCESS TOKEN " \ --header 'Content-Type: application/json' \ --data-raw \ '{ "displayName": "semantic-cache-index", "description": "semantic-cache-index", "metadata": { "config": { "dimensions": "768", "approximateNeighborsCount": 150, "distanceMeasureType": "DOT PRODUCT DISTANCE", "featureNormType": "NONE", "algorithmConfig": { "treeAhConfig": { "leafNodeEmbeddingCount": "10000", "fractionLeafNodesToSearch": 0.05 } }, "shardSize": "SHARD SIZE MEDIUM" }, }, "indexUpdateMethod": "STREAM UPDATE" }' The $REGION defines the region where the Vector Search index deploys.
- Edit the XML to add the following configuration under <HTTPTargetConnection> : <Authentication> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scope> </Scopes> </GoogleAccessToken> </Authentication> Click Save .
- Home Documentation Application development Apigee Guides Send feedback Get started with semantic caching policies Stay organized with collections Save and categorize content based on your preferences.
- Add Google authentication to the API proxy You must also add Google authentication to the API proxy's target endpoint to enable proxy calls to the target.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Under the <Set> element, add the following child elements: <Set> <Authentication> <HeaderName>Authorization</HeaderName> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scope> </Scopes> </GoogleAccessToken> </Authentication> </Set> Click Save .
- The response appears similar to the following: { ... "headers" : { "Accept" : " / " , " Authorization" : "Bearer ya29.c.c0ASRK0Gbw03y9cfvxL11DxaRYBQUU18SmUP4Vu63OckHI5cX7wJ4DmGMG2vbDDS69HXJHqMj-lak4tcqOsJGmE65crn2gNuJLanXidwM8" , "First" : "1.0" , "Host" : "apigee-ext-proc-test.apigee.net" , "Second" : "1.0" , "Sum" : "2" , "User-Agent" : "curl/8.7.1" , "X-Api-Key" : "McYcHGR3PTSGLXExvKADwQ1JJeCjgPDUvAakCl0rJKCFaX0Y" , "X-Cloud-Trace-Context" : "0fd3dadc2a3c328fa968d5f5f1434c29/18300783092696918345" } , ... } The response shows the successful injection of the Google authentication token into the request header.
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $ORG NAME $REGION $INSTANCE $VPC NETWORK NAME $SUBNET Configure an authentication token To configure an authentication token, run the following command: export TOKEN = $( gcloud auth print-access-token ) echo $TOKEN Configure a load balancer for a backend service The following sections describe the steps to set up a global external Application Load Balancer for a backend service, using httpbin.org as an example: Create a global external Application Load Balancer .
- Add the AssignMessage policy for Google authentication If you want to use your Extension Processor to provide API management for a Google-authenticated service, you can inject a Google access token or Google ID token into requests sent to the backend service using the AssignMessage policy .

### Add IAM conditions \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions](https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples of using IAM conditions for API hub Example 1: Access control for all API resources starting with a prefix or based on a Tag .
- Example 2: Access control for multiple APIs with IAM conditions based on resource type.
- Default role-based non-conditional access to other API hub resources. ( resource.service == "apihub.googleapis.com" && resource.type == "apihub.googleapis.com/Api" && resource.name.startsWith("projects/ PROJECT ID /locations/ LOCATION /apis/ API1 ID PREFIX ") ) ( resource.service == "apihub.googleapis.com" && resource.type == "apihub.googleapis.com/Version" && resource.name == "projects/ PROJECT ID /locations/ LOCATION /apis/ API2 ID /versions/ API2 VERSION ID " ) ( resource.service == "apihub.googleapis.com" && resource.type == "apihub.googleapis.com/Spec" && resource.name == "projects/ PROJECT ID /locations/ LOCATION /apis/ API3 ID /versions/ API3 VERSION ID /specs/ API3 SPEC ID " ) ( resource.type != "apihub.googleapis.com/Api" && resource.type != "apihub.googleapis.com/Version" && resource.type != "apihub.googleapis.com/Spec" && resource.type != "apihub.googleapis.com/ApiOperation" && resource.type != "apihub.googleapis.com/Definition" ) Replace the following: PROJECT ID : The ID of your Google Cloud project.
- Default role-based non-conditional access to other API hub resources. ( resource.name.startsWith("projects/ PROJECT ID /locations/ LOCATION /apis/ API ID PREFIX ") resource.matchTagId("tagKeys/ TAG KEY ", "tagValues/ TAG VALUE ") ( resource.type != "apihub.googleapis.com/Api" && resource.type != "apihub.googleapis.com/Version" && resource.type != "apihub.googleapis.com/Spec" && resource.type != "apihub.googleapis.com/ApiOperation" && resource.type != "apihub.googleapis.com/Definition" ) ) Replace the following: PROJECT ID : The ID of your Google Cloud project.

