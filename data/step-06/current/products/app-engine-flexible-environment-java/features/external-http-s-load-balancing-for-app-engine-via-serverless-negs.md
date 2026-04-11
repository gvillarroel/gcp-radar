---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:43:43.850Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "External HTTP(S) load balancing for App Engine via serverless NEGs"
feature_slug: "external-http-s-load-balancing-for-app-engine-via-serverless-negs"
latest_feature_date: "2020-07-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed"
keywords:
  - "serverless network endpoint group"
  - "serverless NEG integration"
  - "external L7 load balancer"
  - "External HTTPS Load Balancing"
  - "Cloud CDN integration"
  - "load balancer with App Engine"
  - "serverless NEG"
  - "App Engine backend service"
---

# External HTTP(S) load balancing for App Engine via serverless NEGs

Product: App Engine flexible environment Java
Coverage: LOW

## Step 02 Summary

App Engine gained support for External HTTP(S) Load Balancing through serverless network endpoint groups, enabling Cloud CDN integration.

## Extended Definition

App Engine gained support for External HTTP(S) Load Balancing through serverless network endpoint groups, enabling Cloud CDN integration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)

## Supporting Pages

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Targeted routing fails when the Serverless NEG doesn't specify service, version, or a tag, and routing relies on the rules you specify in the dispatch.yaml file.
- If the Serverless NEG specifies a service, version, or a tag, the load balancer doesn't interfere or interact with routing rules in your dispatch.yaml file.
- The dispatch.yaml rules are not evaluated until a serverless NEG directs traffic to App Engine.

