---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.153Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Environment-level client IP address resolution"
feature_slug: "environment-level-client-ip-address-resolution"
latest_feature_date: "2024-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference"
keywords:
  - "address"
  - "resolution"
  - "client"
  - "environment"
  - "level"
  - "lets"
---

# Environment-level client IP address resolution

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Environment-level client IP address resolution lets you configure how Apigee derives the client IP from X-Forwarded-For for security, analytics, and flow variables.

## Extended Definition

Environment-level client IP address resolution lets you configure how Apigee derives the client IP from X-Forwarded-For for security, analytics, and flow variables.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)

## Supporting Pages

### Client IP resolution \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution)
- Source ID: `site-docs-reference-required-3`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the environment-level client IP resolution is not configured, or if the configured header does not exist or does not contain an IP address at the specified index, the client IP address variables are populated using the default client IP address resolution behavior.
- Default client IP address resolution If client IP resolution is not configured at the environment level, the default value of the ax resolved client ip dimension is calculated as described in Analytics dimensions .
- When to set the client IP resolution for an environment Although it's not required to set client IP resolution, you might want to if the default client IP address resolution does not meet your needs and you want to override it to provide a specified client IP address resolution for Analytics, Advanced API Security, or performing any other function that requires consistent and reliable information on client IP addresses.
- Limitations These limitations apply to environment-level client IP resolution: Updates to client IP resolution configurations can take up to 5 minutes to be effective.

### Flow variables reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- This section provides reference information about the following common Apigee flow variables: apigee is request apiproduct loadbalancing response apiproxy message route client messageid servicecallout current mint system environment organization target error proxy variable fault publishmessage graphql ratelimit Each of these variables is described in the sections that follow.
- Proxy request proxy.client.ip String Read only The X-Forwarded-For address of the inbound call, which is the IP address Apigee received from the last external TCP handshake.
- This is either the value determined from a configured client IP resolution setting or from the default algorithm, if a client IP resolution setting is not specified.
- Proxy request client.email.address String Read only The email address in the TLS/SSL certificate presented by the client app.

### "Analytics metrics, dimensions, and filters reference \_|\_ Apigee \_|\_\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This is either derived using the default client IP address resolution (which only uses the X-Forwarded-For header) or the algorithm configured in configured client IP resolution (which can resolve the IP address from any header) .
- With the default behavior, the value of the ax resolved client ip dimension is calculated from the values in the x forwarded for ip dimension in the following manner: Set ax resolved client ip to the first non-local IP address in x forwarded for ip .
- Note that when using routing products such as Akamai to capture the true IP addresses of clients, the client IP is passed to Apigee in the HTTP header True-Client-IP , which is then used to set the ax true client ip dimension.
- Referred Client IP ax true client ip When using routing products such as Akamai to capture the true IP addresses of clients, the client IPs are passed to Apigee in the HTTP header True-Client-IP .

