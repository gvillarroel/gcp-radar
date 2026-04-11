---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:02.748Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "External HTTP(S) Load Balancing support via Serverless NEGs"
feature_slug: "external-http-s-load-balancing-support-via-serverless-negs"
latest_feature_date: "2020-07-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed"
keywords:
  - "App Engine integration with external HTTPS load balancer"
  - "Serverless Network Endpoint Groups"
  - "external HTTP(S) Load Balancing"
  - "Cloud Load Balancing App Engine backend"
  - "external HTTPS LB"
  - "App Engine and Serverless NEG"
  - "Serverless NEGs"
  - "Serverless NEG"
---

# External HTTP(S) Load Balancing support via Serverless NEGs

Product: App Engine flexible environment .NET
Coverage: LOW

## Step 02 Summary

App Engine now supports external HTTP(S) Load Balancing through Serverless Network Endpoint Groups.

## Extended Definition

App Engine now supports external HTTP(S) Load Balancing through Serverless Network Endpoint Groups.

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

