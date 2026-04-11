---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:05:29.887Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Environment-level client IP address resolution"
feature_slug: "environment-level-client-ip-address-resolution"
latest_feature_date: "2024-12-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-reports-api"
keywords:
  - "flow variable client IP"
  - "environment-level client IP resolution"
  - "analytics resolved client IP"
  - "security actions from resolved IP"
  - "resolved IP in analytics"
  - "client IP derivation"
  - "resolved client IP"
  - "XFF client IP"
---

# Environment-level client IP address resolution

Product: Apigee Advanced API Security
Coverage: LOW

## Step 02 Summary

Apigee Advanced API Security adds environment-specific configuration for deriving client IP from X-Forwarded-For so security actions can use resolved client IP and expose it in analytics and flow variables.

## Extended Definition

Apigee Advanced API Security supports including `ax resolved client ip` as a report/query dimension in security reports, so report results can be generated with analytics segmented by resolved client IP. The security reports endpoint is explicitly environment-scoped (`/organizations/{ORG}/environments/{ENV}/securityReports/...`), indicating this resolved-client-IP analytics behavior is available at environment context. The provided evidence does not directly confirm flow-variable or policy-level resolution configuration behavior.

## Evidence Summary

The page provides examples of security report query templates and results showing the `ax resolved client ip` dimension, plus an environment-scoped API path for fetching report data.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/security-reports-api](https://docs.cloud.google.com/apigee/docs/api-security/security-reports-api)

## Supporting Pages

### Manage security reports using the API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-reports-api](https://docs.cloud.google.com/apigee/docs/api-security/security-reports-api)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- In this example, the status is "completed" , so you can view the report's results. { "self": "/organizations/sense-staging-test/environments/local/securityReports/bd2f4fe0-a906-44c2-8dcb-2c618e4b565d", "state": "completed", "created": "2022-06-27T13:00:25-07:00", "updated": "2022-06-27T13:01:08-07:00", "result": { "self": "/organizations/sense-staging-test/environments/local/securityReports/bd2f4fe0-a906-44c2-8dcb-2c618e4b565d/result", "expires": "2022-07-04T13:01:08-07:00" }, "resultRows": "848", "resultFileSize": "5.10 KB", "executionTime": "43 seconds", "queryParams": { "metrics": [ "name:bot,func:count distinct,alias:count distinct bot,op:,val:", "name:bot traffic,func:sum,alias:sum bot traffic,op:,val:" ], "dimensions": [ "ax resolved client ip" ], "startTimestamp": "2022-06-20T20:00:25.098237292Z", "endTimestamp": "2022-06-27T20:00:25.098237292Z", "mimeType": "json", "timeUnit": "minute" }, "displayName": "Sample Query Bot" } Get the report To download the security report, send a request like the following: curl "https://apigee.googleapis.com/v1/organizations/ ORG /environments/ ENV /securityReports/ REPORT ID /result" \ -X GET -O -J \ -H "Authorization: Bearer $TOKEN" where REPORT ID is the report ID.
- An example of a query template is shown below. { "dimensions": [ "ax resolved client ip", ], "metrics": [ { "aggregation function": "count distinct", "name": "bot" }, { "aggregation function": "sum", "name": "bot traffic" }, ], "groupByTimeUnit": "minute", "timeRange": "last7days" } The query has the following parameters: Metrics: bot .
- Dimension: ax resolved client ip .

