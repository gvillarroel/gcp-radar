---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.435Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Proxy Editor Develop view search"
feature_slug: "proxy-editor-develop-view-search"
latest_feature_date: "2022-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec"
keywords:
  - "finding"
  - "develop"
  - "search"
  - "includes"
  - "editor"
  - "view"
  - "proxy"
---

# Proxy Editor Develop view search

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The new Proxy Editor Develop view includes a search bar for finding items within a proxy or sharedflow bundle.

## Extended Definition

The new Proxy Editor Develop view includes a search bar for finding items within a proxy or sharedflow bundle.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)

## Supporting Pages

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View message data The Debug view in the Apigee Proxy Editor lets you view headers, variables, objects, and other details such as response time in the API proxy request and response flow.
- To use the Debug view in the Apigee UI to see what happens when the SpikeArrest policy rate is exceeded: In the Google Cloud console, go to the Proxy development > API Proxies page.
- Home Documentation Application development Apigee Guides Send feedback View message data with the Debug view Stay organized with collections Save and categorize content based on your preferences.
- The Debug view also lets you see how a request or response changes as it is processed by an API proxy.

### "Creating an API proxy from an OpenAPI Specification \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback Creating an API proxy from an OpenAPI Specification Stay organized with collections Save and categorize content based on your preferences.
- Add an XML to JSON policy Next, you'll add the XML to JSON policy to the View XML Response conditional flow that was generated automatically when you created the API proxy from the OpenAPI Specification.
- Create the API proxy To create the API proxy from an OpenAPI Specification: In the Google Cloud console, go to the Apigee > Proxy development > API proxies page.
- In the left-hand pane, under Proxy Endpoints > default , click the View XML Response conditional flow.

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For this tutorial, set the Target (Existing API) to: REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /publishers/google/models/gemini-2.0-flash-001:generateContent Enter the following Semantic Cache URLs : Note: You can also add these URLs to the XML configuration in the Proxy editor on the Develop tab.
- If you wish, you can provide a variable in this element to hold the value of the URL, as shown in the following example: <URL>https://{URL VARIABLE}</URL> Configure the semantic caching policies View the XML configuration of each policy by clicking on the policy name in the Detail view of the API proxy's Develop tab.
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview The semantic caching policies help Apigee users with LLM models to intelligently serve identical or semantically similar prompts efficiently, minimizing backend API calls and reducing resource consumption.
- Edit the policy XML directly in the Code view of the Develop tab.

