---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.270Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Serverless VPC Access support for Shared VPC in App Engine standard environment"
feature_slug: "serverless-vpc-access-support-for-shared-vpc-in-app-engine-standard-environment"
latest_feature_date: "2021-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
  - "https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services"
keywords:
  - "serverless"
  - "vpc"
  - "access"
  - "shared"
  - "app"
  - "engine"
  - "standard"
  - "environment"
---

# Serverless VPC Access support for Shared VPC in App Engine standard environment

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Serverless VPC Access for App Engine standard environments now supports Shared VPC; App Engine standard environments gained beta support for Shared VPC via Serverless VPC Access.

## Extended Definition

Serverless VPC Access for App Engine standard environments now supports Shared VPC; App Engine standard environments gained beta support for Shared VPC via Serverless VPC Access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)

## Supporting Pages

### "Connecting to a Shared VPC network \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc)
- Source ID: `site-docs-reference-required-2`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your organization uses Shared VPC , you can connect App Engine standard environment services directly to your Shared VPC network by using Serverless VPC Access .
- This allows a standard environment service to access resources in your Shared VPC network, such as Compute Engine VM instances, Memorystore instances, and any other resources with an internal IP address.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Connecting to a Shared VPC network Stay organized with collections Save and categorize content based on your preferences.
- You can either set up connectors in each service project that has standard environment resources that need access to your network, or you can set up shared connectors in the host project.

### "Ingress settings \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- Source ID: `site-docs-reference-required-2`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Accessing internal services The following considerations apply: For requests from a Shared VPC, traffic is only considered internal if the App Engine app is deployed in the Shared VPC host project.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Ingress settings Stay organized with collections Save and categorize content based on your preferences.
- If you use Serverless VPC Access , you can specify the egress setting for your App Engine service.
- To configure the egress behavior of your App Engine service: Add the egress setting attribute to the vpc access connector field of your service's app.yaml file: vpc access connector : name : projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME egress setting : EGRESS SETTING Replace: PROJECT ID with your Google Cloud project ID REGION with the region your connector is in CONNECTOR NAME with the name of your connector EGRESS SETTING with one of the following: private-ranges-only Default.

### "Communicating between your services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)
- Source ID: `site-docs-reference-required-2`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the standard environment, attach each client version to a Serverless VPC Access connector on the Shared VPC network.
- Route the traffic over a Serverless VPC Access connector : For each App Engine version sending private traffic to other app endpoints, attach the version to a Serverless VPC Access connector belonging to one of the Google Cloud project's own networks, not a Shared VPC network.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Communicating between your services Stay organized with collections Save and categorize content based on your preferences.
- Additionally, services in the standard environment that reside within the same Google Cloud project can also use one of the App Engine APIs for the following tasks: Share a single memcache instance.

