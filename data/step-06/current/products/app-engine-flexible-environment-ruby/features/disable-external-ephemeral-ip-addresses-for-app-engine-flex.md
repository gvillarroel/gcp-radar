---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.500Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Disable external ephemeral IP addresses for App Engine Flex"
feature_slug: "disable-external-ephemeral-ip-addresses-for-app-engine-flex"
latest_feature_date: "2022-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/known-issues"
keywords:
  - "disable"
  - "external"
  - "ephemeral"
  - "ip"
  - "addresses"
  - "app"
  - "engine"
  - "flex"
---

# Disable external ephemeral IP addresses for App Engine Flex

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine Flex services can now disable external ephemeral IP addresses.

## Extended Definition

App Engine Flex services can now disable external ephemeral IP addresses.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/known-issues](https://docs.cloud.google.com/appengine/docs/flexible/known-issues)

## Supporting Pages

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations Disabling ephemeral external IP addresses has the following limitations: Services with custom domains: To send requests to App Engine services with custom domains you must configure Cloud NAT .
- Legacy networks: Legacy networks cannot use Private Google Access, and thus cannot disable ephemeral external IP addresses.
- Before you begin To deploy flexible environment apps without external IP addresses, you must enable Private Google Access on the target subnetwork.
- The ephemeral external IP address allows your service to send requests to App Engine services with custom domains, and resources on the internet.

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/ruby/disable-external-ip)
- Source ID: `site-docs-reference-2`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations Disabling ephemeral external IP addresses has the following limitations: Services with custom domains: To send requests to App Engine services with custom domains you must configure Cloud NAT .
- Legacy networks: Legacy networks cannot use Private Google Access, and thus cannot disable ephemeral external IP addresses.
- Before you begin To deploy flexible environment apps without external IP addresses, you must enable Private Google Access on the target subnetwork.
- The ephemeral external IP address allows your service to send requests to App Engine services with custom domains, and resources on the internet.

### Known issues in the App Engine flexible environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/known-issues](https://docs.cloud.google.com/appengine/docs/flexible/known-issues)
- Source ID: `site-docs-reference-2`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If there is an organization policy on your project that restricts access to external IPs, you won't be able to deploy an App Engine flexible environment app with external IP addresses.
- The global external Application Load Balancer sends requests to a service in the App Engine flexible environment regardless of the health of individual instances.
- Some events that may affect App Engine flexible environment minimum number of instances are: Rolling out updates to flexible environment instances Zonal failure (Stockout issues, such as when your region is at capacity for your selected CPU, etc.) App Engine flexible environment uses 3 zones to distribute your instances and in such a configuration, we recommend provisioning 50% more instances than required.
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Known issues in the App Engine flexible environment Stay organized with collections Save and categorize content based on your preferences.

