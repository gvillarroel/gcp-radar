---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.798Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Faceted Search"
feature_slug: "faceted-search"
latest_feature_date: "2015-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref"
keywords:
  - "faceted"
  - "reached"
  - "search"
  - "availability"
---

# Faceted Search

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Faceted Search reached general availability in App Engine.

## Extended Definition

Faceted Search reached general availability in App Engine.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search](https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)

## Supporting Pages

### "Faceted search \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search](https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search)
- Source ID: `site-docs-reference-required-11`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use this parameter to override the default behavior of faceted search. options = FacetOptions(discover facet limit=5, discover facet value limit=10, depth=6000); Parameter Description Default discover facet limit Number of facets to discover if facet discovery is turned on.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Faceted search Stay organized with collections Save and categorize content based on your preferences.
- Retrieving facet results When you use faceted search parameters in a query, the aggregated facet information comes with the query result itself.
- Using a faceted search to retrieve facet information You can ask the search backend to discover the most frequently used facets for you.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- The Search API imposes these limits to ensure the reliability of the service: 100 aggregated minutes of query execution time per minute, within an app and an index .
- This limit may be increased to up to 200GB by submitting a request from the Google Cloud console App Engine Search page.
- Refer to the Java , Python , and Go documentation for a detailed description of each type of Search call.
- Google Cloud uses quotas to help ensure fairness and reduce spikes in resource use and availability.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Note that the scheduler might spawn a new instance before the actual maximum number of requests is reached. max pending latency The maximum amount of time that App Engine should allow a request to wait in the pending queue before starting additional instances to handle requests so that pending latency is reduced.
- The error code can be one of the following: over quota Indicates the app has exceeded a resource quota timeout Served if a deadline is reached before there is a response from your app.
- When this threshold is reached, it is a signal to scale up, and results in an increase in the number of instances.

