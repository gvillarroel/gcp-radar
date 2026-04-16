---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.166Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Proxy Editor Develop tab"
feature_slug: "proxy-editor-develop-tab"
latest_feature_date: "2022-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/resource-files"
keywords:
  - "proxy"
  - "editor"
  - "develop"
  - "tab"
  - "includes"
  - "editing"
  - "managing"
  - "configuration"
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

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/resource-files](https://docs.cloud.google.com/apigee/docs/api-platform/develop/resource-files)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-docs-reference-required-14`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Apigee Reference Send feedback API proxy configuration reference Stay organized with collections Save and categorize content based on your preferences.
- For example, in the following Flow configuration, any inbound request that does not include the path suffix /first or /second will cause the ThirdFlow to execute, enforcing the policy called Return404 . <Flows> <Flow name="FirstFlow"> <Condition>proxy.pathsuffix MatchesPath "/first"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> </Request> </Flow> <Flow name="SecondFlow"> <Condition>proxy.pathsuffix MatchesPath "/second"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> <Step><Name>SecondPolicy</Name></Step> </Request> </Flow> <Flow name="ThirdFlow"> <Request> <Step><Name>Return404</Name></Step> </Request> </Flow> </Flows> Resources "Resources" (resource files for use in API proxies) are scripts, code, and XSL transformations that can be attached to Flows using policies.
- The following is a sample ProxyEndpoint configuration: <ProxyEndpoint name="default"> <Description/> <FaultRules/> <PreFlow name="PreFlow"> <Request> <Step> <Name>my-set-integration-request-policy</Name> </Step> </Request> </PreFlow> <Flows/> <PostFlow name="PostFlow"/> <HTTPProxyConnection> <BasePath>/integration-endpoint-test</BasePath> <Properties/> </HTTPProxyConnection> <RouteRule name="default"> <IntegrationEndpoint>my-int-endpoint</IntegrationEndpoint> </RouteRule> </ProxyEndpoint> In the sample ProxyEndpoint configuration, Apigee performs the following tasks: In the PreFlow, executes the policy named my-set-integration-request-policy , which sets the integration request object and integration flow variables.
- The API proxy processing pipeline executes Flows in the following sequence: Request Pipeline: Proxy Request PreFlow Proxy Request Conditional Flows (Optional) Proxy Request PostFlow Target Request PreFlow Target Request Conditional Flows (Optional) Target Request PostFlow Response Pipeline: Target Response PreFlow Target Response Conditional Flows (Optional) Target Response PostFlow Proxy Response PreFlow Proxy Response Conditional Flows (Optional) Proxy Response PostFlow PostClientFlow Response (Optional) Only those Flows with policy attachments need to be configured in ProxyEndpoint or TargetEndpoint configurations.

### "Best practices for API proxy design and development with Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- Source ID: `site-docs-reference-required-14`
- Final score: 159
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Development standards Comments and Documentation Provide inline comments in the ProxyEndpoint and TargetEndpoint configurations.
- For more information on using response.payload.parse.limit or the request.payload.parse.limit properties to configure a maximum payload size up to 30MB for request or response flows, see the API proxy configuration reference .
- Home Documentation Application development Apigee Guides Send feedback Best practices for API proxy design and development with Apigee Stay organized with collections Save and categorize content based on your preferences.
- Users who require large payload processing can configure a higher limit using the <Properties> element in the ProxyEndpoint or TargetEndpoint configurations of their API proxies.

### Managing resources \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/resource-files](https://docs.cloud.google.com/apigee/docs/api-platform/develop/resource-files)
- Source ID: `site-docs-reference-required-14`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Upload the bundle using one of the following APIs: Create API proxy Update API proxy revision Create resources scoped to an environment using the API Create resources that are scoped to an environment using the API by issuing a POST request to the following resource: /organizations/ $ORG /environments/ $ENV /resourcefiles Pass the following information with your request: Set the name query parameter to the name of the resource Set the type query parameter to the required resource type Pass the contents of the resource file as application/octet-stream or multipart/form-data ) Note: When importing a resource file using the API, you might need to chmod the file's permissions so that your development tool (such as curl ) can upload it.
- With hybrid, to delete a resource that is scoped to an API proxy using the API: Download the API proxy configuration bundle using the Get API proxy revision API with the following options: Set the format query parameter to bundle Set the Accept header to application/zip Delete the resource file from the API proxy configuration bundle .
- To update a resource that is scoped to an API proxy revision using the API: Download the API proxy configuration bundle using the Get API proxy revision API with the following options: Set the format query parameter to bundle Set the Accept header to application/zip Update the resource file in the API proxy configuration bundle .
- See also: Java best practices: Best practices for API proxy design and development Java cookbook example: XSL Transform policy Manage proxy-level resources using the UI Manage resources scoped to an API proxy revision using the UI, as described in the following sections.

