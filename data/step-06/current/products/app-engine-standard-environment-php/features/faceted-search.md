---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.576Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Faceted Search"
feature_slug: "faceted-search"
latest_feature_date: "2015-09-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search"
keywords:
  - "faceted"
  - "search"
  - "reached"
  - "availability"
  - "general"
---

# Faceted Search

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

Faceted Search reached General Availability.

## Extended Definition

Faceted Search reached General Availability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search)

## Supporting Pages

### "Package google.golang.org/appengine/v2/search (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example code: // A and B are renamed to a and b. // A, C and I are facets. // D's tag is equivalent to having no tag at all (E). // F and G are ignored entirely by the search package. // I has tag information for both the search and json packages. type TaggedStruct struct { A float64 search:"a,facet" B float64 search:"b" C float64 search:",facet" D float64 search:"" E float64 F float64 search:"-" G float64 search:"-,facet" I float64 search:",facet" json:"i" } The FieldLoadSaver Interface A document's contents can also be represented by any type that implements the FieldLoadSaver interface.
- Passing this cursor in a future call to Search will cause those results to commence with the first document after the current document. func ( Iterator) Facets func ( t Iterator ) Facets () ([][] FacetResult , error ) Facets returns the facets found within the search results, if any facets were requested in the SearchOptions. func ( Iterator) Next func ( t Iterator ) Next ( dst interface {}) ( string , error ) Next returns the ID of the next result.
- FacetSearchOption type FacetSearchOption interface { // contains filtered or unexported methods } FacetSearchOption controls what facet information is returned in search results. func AutoFacetDiscovery func AutoFacetDiscovery ( facetLimit , valueLimit int ) FacetSearchOption AutoFacetDiscovery returns a FacetSearchOption which enables automatic facet discovery for the search.
- Name string // Value is the facet value. // // When being used in documents (for example, in // DocumentMetadata.Facets), the valid types are: // - search.Atom, // - float64. // // When being used in SearchOptions.Refinements or being returned // in FacetResult, the valid types are: // - search.Atom, // - search.Range.

