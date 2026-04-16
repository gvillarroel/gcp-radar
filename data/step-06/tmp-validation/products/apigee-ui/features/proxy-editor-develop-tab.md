---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.436Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Proxy Editor Develop tab"
feature_slug: "proxy-editor-develop-tab"
latest_feature_date: "2022-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
keywords:
  - "configuration"
  - "editing"
  - "managing"
  - "develop"
  - "includes"
  - "editor"
  - "proxy"
---

# Proxy Editor Develop tab

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The Proxy Editor includes a new Develop tab for editing and managing proxy configuration.

## Extended Definition

The Proxy Editor includes a new Develop tab for editing and managing proxy configuration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)

## Supporting Pages

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create API proxies in Apigee To get started, you'll first need to register the following sample API proxies in your Apigee project: API proxy name Configuration details Base config Revision config Orders API Proxy template: Reverse proxy Target: https://mocktarget.apigee.net Change target endpoint to: https://mocktarget.apigee.net/xml Products API Users API Note: Ensure that each proxy has at least one revision deployed to an environment, and the environment must be part of an environment group.
- This API allows for the creation, retrieval, update, and deletion of product records.", "deploymentType": { "enumValues": { "values": [ { "id": "apigee" } ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/system-deployment-type" }, "resourceUri": "organizations/api-hub-demo-5/apis/Products-API/revisions/1/environments/test-env", "endpoints": [ "https://googleapis.com/products-api" ], "attributes": { "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment": { "stringValues": { "values": [ "test-env" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment" }, "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization": { "stringValues": { "values": [ "api-hub-demo-5" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization" } } }, "originalId": "apis/Products-API/revisions/1/environments/test-env", "originalCreateTime": "2025-07-07T05:23:51.617Z", "originalUpdateTime": "2025-07-07T05:23:51.617Z" } ], "originalId": "apis/Products-API/revisions/1", "originalCreateTime": "2025-07-07T05:23:47.982Z", "originalUpdateTime": "2025-07-07T05:23:47.982Z" } ], "originalId": "apis/Products-API", "originalUpdateTime": "2025-07-07T05:23:47.982Z" } ] } } Sample Output You should see the following test output: { "apiMetadataList": { "apiMetadata": [ { "api": { "name": "projects/api-hub-demo-5/locations/us-central1/apis/api-hub-demo-5-Products-API", "displayName": "Products-API", "fingerprint": "products-api" }, "versions": [ { "version": { "name": "projects/api-hub-demo-5/locations/us-central1/apis/api-hub-demo-5-Products-API/versions/version-1", "displayName": "version-1" }, "deployments": [ { "deployment": { "displayName": "Products-API", "description": "API for managing product inventory.
- Sample test input Use the following sample input: { "apiMetadataList": { "apiMetadata": [ { "api": { "name": "projects/api-hub-demo-5/locations/us-central1/apis/api-hub-demo-5-Products-API", "displayName": "Products-API", "fingerprint": "products-api" }, "versions": [ { "version": { "name": "projects/api-hub-demo-5/locations/us-central1/apis/api-hub-demo-5-Products-API/versions/version-1", "displayName": "version-1" }, "deployments": [ { "deployment": { "displayName": "Products-API", "description": "API for managing product inventory.
- A new version of the integration is created as shown in the following image: Configure connector task in the integration After uploading the integration, the next step is to configure the Connectors task to connect to your Cloud Storage bucket: Click the Connectors task named Fetch spec from GCS to view the connector configuration pane.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can view the XML configuration of each policy by clicking on the policy name in the Detail view of the API proxy's Develop tab.
- The proxy editor displays a flow diagram showing the policy attachments, and the corresponding XML configuration.
- The proxy editor displays a flow diagram showing the policy attachments, and the corresponding XML configuration.
- The proxy details and XML configuration can be viewed in the Develop tab.

### Secure an API with OAuth 2.0 \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the API proxy editor, click the Develop tab.
- In the API proxy editor, click the Develop tab.
- In this case it is important to NOT include the "client credentials" type because it allows a client to get access to a token with no user authentication -- > < GrantType>client credentials < / GrantType > < / SupportedGrantTypes > < GrantType>request . queryparam . grant type < / GrantType > < GenerateResponse / > < / OAuthV2 > The configuration includes the following: The <Operation> , which can be one of several predefined values, defines what the policy is going to do.
- The text editor displays the XML code for the AccessTokenClientCredential conditional flow: <Flow name="AccessTokenClientCredential"> <Description/> <Request> <Step> <Name> GenerateAccessTokenClient </Name> </Step> </Request> <Response/> <Condition>(proxy.pathsuffix MatchesPath "/accesstoken") and (request.verb = "POST")</Condition> </Flow> A flow is a processing step in an API proxy.

