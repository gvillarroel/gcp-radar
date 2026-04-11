---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.800Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ST_GEOGFROMTEXT new make_valid and planar parameters"
feature_slug: "bigquery-st-geogfromtext-new-make-valid-and-planar-parameters"
latest_feature_date: "2020-10-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
keywords:
  - "imported WKT"
  - "WKT geometry"
  - "ST_GEOGFROMTEXT()"
  - "ST_GEOGFROMTEXT"
  - "ST_GeogFromText"
  - "planar"
  - "make_valid"
---

# BigQuery ST_GEOGFROMTEXT new make_valid and planar parameters

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The ST_GEOGFROMTEXT function now supports make_valid and planar parameters, with planar treating imported WKT geometries as planar when enabled.

## Extended Definition

The ST_GEOGFROMTEXT function now supports make_valid and planar parameters, with planar treating imported WKT geometries as planar when enabled.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)

## Supporting Pages

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following query produces the same results: SELECT ST GEOGFROMTEXT ( 'POINT EMPTY' ) AS a , ST GEOGFROMTEXT ( 'GEOMETRYCOLLECTION EMPTY' ) AS b / --------------------------+--------------------------+ a b +--------------------------+--------------------------+ GEOMETRYCOLLECTION EMPTY GEOMETRYCOLLECTION EMPTY +--------------------------+-------------------------- / The structure of compound geometry objects isn't preserved if a simpler type can be produced.
- SELECT ST GEOGFROMTEXT ( 'MULTIPOINT(1 1, 2 2)' ) AS a , ST GEOGFROMTEXT ( 'GEOMETRYCOLLECTION(POINT(1 1), POINT(2 2))' ) AS b / ----------------------+----------------------+ a b +----------------------+----------------------+ MULTIPOINT(1 1, 2 2) MULTIPOINT(1 1, 2 2) +----------------------+---------------------- / A geography is the result of, or an argument to, a Geography Function .
- 88 , 3 - 3 ) LINESTRING EMPTY Polygon A polygon, which is represented as a planar surface defined by 1 exterior boundary and 0 or more interior boundaries.

