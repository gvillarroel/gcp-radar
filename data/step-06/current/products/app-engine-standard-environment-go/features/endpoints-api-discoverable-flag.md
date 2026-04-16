---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.759Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Endpoints API discoverable flag"
feature_slug: "endpoints-api-discoverable-flag"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/standard/apis"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project"
keywords:
  - "endpoints"
  - "discoverable"
  - "flag"
  - "boolean"
  - "parameter"
  - "was"
  - "added"
  - "annotation"
---

# Endpoints API discoverable flag

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

A discoverable boolean parameter was added to the Endpoints API @Api annotation to allow disabling API discovery for selected services.

## Extended Definition

A discoverable boolean parameter was added to the Endpoints API @Api annotation to allow disabling API discovery for selected services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- [https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project)

## Supporting Pages

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "APIs & Reference \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/go/shared-vpc-host-project)
- Source ID: `site-docs-reference-2`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Make the connector discoverable To see the connector, principals need certain viewing roles on both the host project and the service project.
- Learn more about the --member flag .
- Learn more about the --member flag .
- Learn more about the --member flag .

