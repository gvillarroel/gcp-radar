---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:40.073Z"
product_name: "Apigee Integration"
product_slug: "apigee-integration"
feature_name: "Parse XML data transformer function"
feature_slug: "parse-xml-data-transformer-function"
latest_feature_date: "2023-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec"
keywords:
  - "JSON object output"
  - "XML parsing"
  - "XML parser"
  - "Parse XML"
  - "parseXml"
  - "XML to JSON"
  - "data transformer"
---

# Parse XML data transformer function

Product: Apigee Integration
Coverage: MEDIUM

## Step 02 Summary

Introduces a data transformer function that parses an XML string into a JSON object.

## Extended Definition

Apigee API proxy design supports an **XML to JSON policy** that can be added as a policy step in a proxy flow (for example, the View XML Response conditional flow in an OpenAPI-derived proxy). This policy is explicitly applied to the response path, indicating it performs transformation of XML content into JSON-formatted output during proxy execution. The available evidence does not explicitly label this as a generic "Parse XML" function or provide full details of the parser behavior beyond this XML-to-JSON policy usage.

## Evidence Summary

The cited Apigee tutorial provides direct evidence that an "XML to JSON" policy can be added and applied in response flows of API proxies, supporting XML parsing-to-JSON transformation functionality but not deeper implementation details.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)

## Supporting Pages

### "Creating an API proxy from an OpenAPI Specification \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Add an XML to JSON policy Next, you'll add the XML to JSON policy to the View XML Response conditional flow that was generated automatically when you created the API proxy from the OpenAPI Specification.
- In the Add Policy Step dialog, click in the Select existing policy field and select XML to JSON-1 .
- Add the XML to JSON policy to the View XML Response conditional flow in the API proxy.
- The XML to JSON policy is applied to the response.

