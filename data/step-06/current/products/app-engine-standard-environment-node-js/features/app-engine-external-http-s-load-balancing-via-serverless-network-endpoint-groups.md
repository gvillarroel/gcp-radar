---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.071Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "App Engine External HTTP(S) Load Balancing via Serverless network endpoint groups"
feature_slug: "app-engine-external-http-s-load-balancing-via-serverless-network-endpoint-groups"
latest_feature_date: "2020-07-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
keywords:
  - "Cloud CDN integration with App Engine"
  - "External HTTP(S) Load Balancing"
  - "serverless network endpoint groups"
  - "external HTTPS LB"
  - "serverless network endpoint group"
  - "App Engine external load balancer"
  - "serverless NEG"
  - "Serverless NEG"
---

# App Engine External HTTP(S) Load Balancing via Serverless network endpoint groups

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

App Engine can use External HTTP(S) Load Balancing through Serverless network endpoint groups, enabling Cloud CDN integration for App Engine services.

## Extended Definition

App Engine can use External HTTP(S) Load Balancing through Serverless network endpoint groups, enabling Cloud CDN integration for App Engine services.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/nodejs/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)

## Supporting Pages

### "App Engine standard environment for Node.js release notes \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- July 08, 2020 Feature External HTTP(S) Load Balancing is now supported for App Engine via Serverless network endpoint groups .

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/nodejs/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- When routing requests that are mapped to an App Engine serverless NEG, the load balancer only consults dispatch rules if the serverless NEG doesn't specify a service or version.
- The load balancer ignores dispatch rules when the service or version is configured in the serverless NEG.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- When routing requests that are mapped to an App Engine serverless NEG, the load balancer only consults dispatch rules if the serverless NEG doesn't specify a service or version.
- The load balancer ignores dispatch rules when the service or version is configured in the serverless NEG.

