---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.586Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Dynamic-only instance labeling in App Engine automatic scaling"
feature_slug: "dynamic-only-instance-labeling-in-app-engine-automatic-scaling"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search"
keywords:
  - "dynamic"
  - "only"
  - "instance"
  - "labeling"
  - "app"
  - "engine"
  - "automatic"
  - "scaling"
---

# Dynamic-only instance labeling in App Engine automatic scaling

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Automatic scaling now labels instances as Dynamic only, removing resident instance labeling while preserving equivalent scheduling behavior.

## Extended Definition

Automatic scaling now labels instances as Dynamic only, removing resident instance labeling while preserving equivalent scheduling behavior.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search](https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.
- One of the benefits App Engine standard environment's "pay for only what you need" platform as described earlier in Scaling Down is that the system autoscales the number of instances down to zero when there is no traffic.
- Scaling types App Engine supports the following scaling types , which controls how and when instances are created: Automatic (default) Basic Manual You specify the scaling type in your app's app.yaml .
- Note: For new projects you create after March 2025, App Engine sets the automatic scaling maximum instances default for standard environment deployments to 20.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- You can configure startup instructions by adding entrypoint to app.yaml. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.
- You can also change the number of concurrent requests an instance can handle by setting the max concurrent requests element in your app.yaml file , or appengine-web.xml file file if using the App Engine legacy bundled services.

### "Faceted search \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search](https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search)
- Source ID: `site-docs-reference-required-5`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Query ( "name:x86" , return facets = [ "type" , "ram size gb" ]) results = index . search ( query ) for facet in results . facets : print ( "facet {} " . format ( facet . name )) for value in facet . values : print ( " {} : count= {} , refinement token= {} " . format ( value . label , value . count , value . refinement token ) ) When you retrieve facets by name, by default only the 10 most often occurring values for a facet will be returned.
- Query ( "name:x86" , enable facet discovery = True ) results = index . search ( query ) for facet in results . facets : print ( "facet {} ." . format ( facet . name )) for value in facet . values : print ( " {} : count= {} , refinement token= {} " . format ( value . label , value . count , value . refinement token ) ) When you retrieve facets by discovery, by default only the 10 most often occurring values for a facet will be returned.
- Selecting facets by name and value To retrieve information only about particular values of a facet, add a return facets parameter that includes a FacetRequest object with a values list: def facet by name and value ( index ): Create the query and specify to return the "type" facet with values "computer" and "printer" and the "ram size gb" facet with value in the ranges [0,4), [4, 8), and [8, max]. query = search .
- Selecting facets by name To retrieve information about a facet by its name only, add a return facets parameter to your query, including the facet name in the list: def facet by name ( index ): Create the query and specify to only return the "type" and "ram size gb" facets. query = search .

