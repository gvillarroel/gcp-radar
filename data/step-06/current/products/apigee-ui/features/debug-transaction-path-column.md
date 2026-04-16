---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.159Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Debug transaction path column"
feature_slug: "debug-transaction-path-column"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development"
keywords:
  - "debug"
  - "transaction"
  - "path"
  - "column"
  - "transactions"
  - "table"
  - "includes"
  - "showing"
---

# Debug transaction path column

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The Debug transactions table includes a column showing the path used by each transaction to call the proxy.

## Extended Definition

The Debug transactions table includes a column showing the path used by each transaction to call the proxy.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)

## Supporting Pages

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The default is None (All transactions) , which includes all transactions in the debug data.
- In the dialog: Select the Environment in which you want to run the debug session. (Optional) From the Filter list, select a filter to apply to all transactions in the debug session you are creating.
- Call the API proxy using curl (or with the URL in a web browser) several times until you see at least one 200 response and one 429 response in the Transactions pane.
- Home Documentation Application development Apigee Guides Send feedback View message data with the Debug view Stay organized with collections Save and categorize content based on your preferences.

### Streaming server-sent events \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- Source ID: `site-docs-reference-required-14`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows the execution of EventFlow stanzas based on endpoint placement: ProxyEndpoint TargetEndpoint EventFlow used EventFlow in ProxyEndpoint EventFlow in TargetEndpoint EventFlow in TargetEndpoint No EventFlow EventFlow in TargetEndpoint EventFlow in TargetEndpoint EventFlow in ProxyEndpoint No EventFlow EventFlow in ProxyEndpoint Add policies to an EventFlow You can add up to a total of four policies to the Response element of the EventFlow .
- Note that the response includes a modelVersion": "gemini-2.5-flash" attribute. data: { "candidates": [ { "content": { "parts": [ { "text": "ara found the pen tucked away in a dusty antique shop, nestled amongst chipped tea" } ], "role": "model" } } ], "usageMetadata": { "promptTokenCount": 8, "totalTokenCount": 8 }, "modelVersion": "gemini-2.5-flash" } This is another sample response with the JavaScript policy applied.
- Call the deployed proxy: curl -X POST -H 'Content-Type: application/json' \ "https:// YOUR APIGEE ENVIRONMENT GROUP HOSTNAME / YOUR API PATH " \ -d '{ "contents":[{"parts":[{"text": "Write a story about a magic pen."}]}]}' Show a sample response Here's a sample of how the response might look without applying any filtering.
- Call the deployed proxy: curl -X POST -H 'Content-Type: application/json' \ "https:// YOUR APIGEE ENVIRONMENT GROUP HOSTNAME / YOUR API PATH " \ -d '{ "contents":[{"parts":[{"text": "Write a story about a magic pen."}]}]}' Show a sample response This is a sample response without any filtering applied.

### "Best practices for API proxy design and development with Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- Source ID: `site-docs-reference-required-14`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Build a ServiceCallout request message using the AssignMessage policy, and populate the request object in a message variable. (This includes setting the request payload, path, and method.) The URL that is configured within the policy requires the protocol specification, meaning the protocol portion of the URL, https:// for example, cannot be specified by a variable.
- For example, use the standard AssignMessage policy and ExtractVariables policy policies instead of JavaScript (when possible) to create payloads, extract information from payloads (XPath, JSONPath), and so on.
- For example, looking up a location (endpoint) from a routing table based on a key found in a request and dynamically applying a target endpoint or a custom/proprietary authentication method, etc.
- Always includes a default 'catch-all' fault handler so that system-generated faults can be mapped to customer-defined fault response formats.

