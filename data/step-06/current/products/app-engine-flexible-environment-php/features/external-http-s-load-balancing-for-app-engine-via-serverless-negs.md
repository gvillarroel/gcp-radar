---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:58.718Z"
product_name: "App Engine flexible environment PHP"
product_slug: "app-engine-flexible-environment-php"
feature_name: "External HTTP(S) Load Balancing for App Engine via Serverless NEGs"
feature_slug: "external-http-s-load-balancing-for-app-engine-via-serverless-negs"
latest_feature_date: "2020-07-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed"
keywords:
  - "App Engine backend for HTTPS load balancer"
  - "Serverless Network Endpoint Groups"
  - "external HTTP(S) load balancing"
  - "external HTTPS LB"
  - "App Engine serverless NEG"
  - "Serverless NEG"
  - "Cloud CDN with App Engine"
  - "NEG"
---

# External HTTP(S) Load Balancing for App Engine via Serverless NEGs

Product: App Engine flexible environment PHP
Coverage: LOW

## Step 02 Summary

App Engine now supports external HTTP(S) load balancing through Serverless Network Endpoint Groups, enabling Cloud CDN integration.

## Extended Definition

App Engine now supports external HTTP(S) load balancing through Serverless Network Endpoint Groups, enabling Cloud CDN integration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)

## Supporting Pages

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Targeted routing fails when the Serverless NEG doesn't specify service, version, or a tag, and routing relies on the rules you specify in the dispatch.yaml file.
- If the Serverless NEG specifies a service, version, or a tag, the load balancer doesn't interfere or interact with routing rules in your dispatch.yaml file.
- The dispatch.yaml rules are not evaluated until a serverless NEG directs traffic to App Engine.

