---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:45:54.278Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "External HTTPS Load Balancing via Serverless Network Endpoint Groups"
feature_slug: "external-https-load-balancing-via-serverless-network-endpoint-groups"
latest_feature_date: "2020-07-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed"
keywords:
  - "Serverless Network Endpoint Group"
  - "serverless NEG routing"
  - "external HTTPS load balancing"
  - "external HTTPS LB"
  - "Cloud CDN integration"
  - "App Engine with Cloud Load Balancer"
  - "Cloud Load Balancer + App Engine"
  - "serverless NEG"
---

# External HTTPS Load Balancing via Serverless Network Endpoint Groups

Product: App Engine flexible environment Python
Coverage: LOW

## Step 02 Summary

App Engine now supports external HTTPS load balancing through Serverless NEGs, enabling Cloud CDN integration.

## Extended Definition

App Engine now supports external HTTPS load balancing through Serverless NEGs, enabling Cloud CDN integration.

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

