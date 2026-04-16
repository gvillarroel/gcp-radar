---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.152Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee Spaces"
feature_slug: "apigee-spaces"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/publish/create-api-products"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
keywords:
  - "isolation"
  - "spaces"
  - "team"
  - "identity"
  - "provides"
  - "level"
  - "based"
---

# Apigee Spaces

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee Spaces provides identity-based isolation, team-level grouping, and granular IAM control for API resources within an Apigee organization.

## Extended Definition

Apigee Spaces provides identity-based isolation, team-level grouping, and granular IAM control for API resources within an Apigee organization.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/publish/create-api-products](https://docs.cloud.google.com/apigee/docs/api-platform/publish/create-api-products)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)

## Supporting Pages

### Managing API products \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/create-api-products](https://docs.cloud.google.com/apigee/docs/api-platform/publish/create-api-products)
- Source ID: `site-docs-reference-required-3`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configuring resource paths Note the following rules for resource paths: / : Indicates that the base path and all subpaths of the base path are supported. / : Indicates that all subpaths of the base path are supported (but not the base path). / : Indicates that only URIs one level down from the base path are supported.
- The parts of the product configuration page include the following: Product details : Basic information about the API product such as its name, access level (private, public, or internal), and OAuth scopes.
- Home Documentation Application development Apigee Guides Send feedback Managing API products Stay organized with collections Save and categorize content based on your preferences.
- Just like for REST-based API proxies, you can define quota limits on each operation. gRPC Operations : Specify gRPC API proxies and gRPC methods supported by this API product.

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- If not, then the inbound request is forwarded to http://api.mycompany.com/v2 . <RouteRule name="MyRoute"> <Condition>request.header.routeTo = "TargetEndpoint1"</Condition> <TargetEndpoint>TargetEndpoint1</TargetEndpoint> </RouteRule> <RouteRule name="default"> <URL>http://api.mycompany.com/v2</URL> </RouteRule> Note: More dynamic routing The Apigee community article specifying proxy endpoint shows dynamic routing to different world regions based on variables extracted from the request URI.
- By defining conditional flows, you gain the ability to apply processing steps in an API proxy based on: Request URI HTTP verb ( GET / PUT / POST / DELETE ) Value of a query param, header, and form param Many other types of conditions For example, the following conditional flow specifies that it is executed only when the request resource path is /accesstoken .
- A fault rule specifies two items: A Condition that specifies the fault to be handled based on the pre-defined category, subcategory, or name of the fault One or more policies that define the behavior of the fault rule for the corresponding Condition See Handling faults .
- A fault rule specifies two items: A Condition that specifies the fault to be handled based on the pre-defined category, subcategory, or name of the fault One or more policies that define the behavior of the fault rule for the corresponding Condition See Handling faults .

### DataCapture policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Optional Type Complex Parent Element <Collect> Child Elements <Namespaces> <XPath> The following table provides a high-level description of the child elements of <XMLPayload> .
- Child elements of <Collect> The following table provides a high-level description of the child elements of <Collect> : Caution: The child elements of <Collect> listed below behave differently than the corresponding elements of the ExtractVariables policy, which have the same names.
- Then the resulting entry sent to Analytics would be { "dc data collector": "1120" } <Capture> The <Capture> element specifies the means of capturing the data. <Capture /> The following table provides a high-level description of the child elements of <Capture> .
- The following table provides a high-level description of the child elements of <DataCapture> .

