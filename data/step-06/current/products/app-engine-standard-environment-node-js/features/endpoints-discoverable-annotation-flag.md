---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.599Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Endpoints discoverable annotation flag"
feature_slug: "endpoints-discoverable-annotation-flag"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "endpoints"
  - "discoverable"
  - "annotation"
  - "flag"
  - "boolean"
  - "parameter"
  - "was"
  - "added"
---

# Endpoints discoverable annotation flag

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

An discoverable boolean parameter was added to the @Api annotation to disable API discovery for Endpoints users.

## Extended Definition

An discoverable boolean parameter was added to the @Api annotation to disable API discovery for Endpoints users.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy with the org-policies set-policy command and the spec flag: gcloud org-policies set-policy POLICY PATH --update-mask = spec Replace POLICY PATH with the full path to your organization policy YAML file.
- To enforce the organization policy in dry-run mode , run the following command with the dryRunSpec flag: gcloud org-policies set-policy POLICY PATH --update-mask = dryRunSpec Replace POLICY PATH with the full path to your organization policy YAML file.
- For more information about the required and optional flags for creating firewall rules, refer to the documentation for gcloud compute firewall-rules create .

