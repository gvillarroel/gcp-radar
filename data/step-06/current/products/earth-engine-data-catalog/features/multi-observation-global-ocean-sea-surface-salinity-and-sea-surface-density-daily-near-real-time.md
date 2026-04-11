---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.340Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Multi-Observation Global Ocean Sea Surface Salinity and Sea Surface Density - Daily Near Real Time"
feature_slug: "multi-observation-global-ocean-sea-surface-salinity-and-sea-surface-density-daily-near-real-time"
latest_feature_date: "2025-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY"
  - "https://developers.google.com/earth-engine/datasets/tags/oceans"
keywords:
  - "multi"
  - "observation"
  - "global"
  - "ocean"
  - "sea"
  - "surface"
  - "salinity"
  - "and"
---

# Multi-Observation Global Ocean Sea Surface Salinity and Sea Surface Density - Daily Near Real Time

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Daily near-real-time sea surface salinity and density from multiple observations.

## Extended Definition

Daily near-real-time sea surface salinity and density from multiple observations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY)
- [https://developers.google.com/earth-engine/datasets/tags/oceans](https://developers.google.com/earth-engine/datasets/tags/oceans)

## Supporting Pages

### "Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY)
- Source ID: `site-docs-root-2`
- Final score: 336
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Filter . date ( '2025-03-01' , '2025-06-01' )); var NRT = dataset . select ( 'dos' ); var NRTVis = { min : 1020.41 , max : 1027.596 , palette : [ "040613" , "121328" , "3F59A5" , "3E80C0" , "3EADCB" , "8CCBD6" , "EAFDFD" ], }; Map . setCenter ( 71 , 52 , 2 ); Map . addLayer ( NRT , NRTVis , 'DOS' ); Open in Code Editor Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Near Real Time Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.
- Highlights and key features of the licence are provided in this document License Citations Citations: Copernicus Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density: Global Ocean Satellite and In-Situ Observations, CNR (Rome, Italy) is providing daily Sea Surface Salinity and Sea Surface Density analyses. doi:10.48670/moi-00051 Explore with Earth Engine Important: Earth Engine is a platform for petabyte-scale scientific analysis and visualization of geospatial datasets, both for public benefit and for business and government users.
- Dataset Availability 2023-01-01T00:00:00Z–2026-04-04T12:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/MARINE/GLOBAL SEA SURFACE/NRT DAILY") open in new Cadence 1 Day Tags copernicus marine oceans Description Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.
- Home Earth Engine Data Catalog All Datasets Send feedback Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Near Real Time Stay organized with collections Save and categorize content based on your preferences.

### "Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY)
- Source ID: `site-docs-root-2`
- Final score: 336
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Filter . date ( '2023-12-16' , '2023-12-17' )); var SOS = dataset . select ( 'sos' ); var SOSVis = { min : 27.869 , max : 36.981 , palette : [ "040613" , "121328" , "3F59A5" , "3E80C0" , "3EADCB" , "8CCBD6" , "EAFDFD" ], }; Map . setCenter ( 71 , 52 , 2 ); Map . addLayer ( SOS , SOSVis , 'SOS' ); Open in Code Editor Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.
- Highlights and key features of the licence are provided in this document License Citations Citations: Copernicus Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density: Global Ocean Satellite and In-Situ Observations, CNR (Rome, Italy) is providing daily Sea Surface Salinity and Sea Surface Density analyses. doi:10.48670/moi-00051 Explore with Earth Engine Important: Earth Engine is a platform for petabyte-scale scientific analysis and visualization of geospatial datasets, both for public benefit and for business and government users.
- Dataset Availability 1993-01-01T00:00:00Z–2024-12-15T12:00:00Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/MARINE/GLOBAL SEA SURFACE/REP DAILY") open in new Cadence 1 Day Tags copernicus marine oceans Description Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.
- Home Earth Engine Data Catalog All Datasets Send feedback Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed Stay organized with collections Save and categorize content based on your preferences.

### "Datasets tagged oceans in Earth Engine \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/tags/oceans](https://developers.google.com/earth-engine/datasets/tags/oceans)
- Source ID: `site-docs-root-3`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- The dataset spans from 2020 to 2150 and includes projections for various … ipcc ocean oceans Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.
- This product is generated … copernicus marine oceans Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Near Real Time Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.
- GCOM-C conducts long-term and continuous global observation and data collection to elucidate the mechanism behind fluctuations in radiation budget and carbon cycle needed to make accurate projections regarding future … climate g-portal gcom gcom-c jaxa ocean GCOM-C/SGLI L3 Sea Surface Temperature (V3) This product is the temperature of sea surface.
- GCOM-C conducts long-term and continuous global observation and data collection to elucidate the mechanism behind fluctuations in radiation budget and carbon … climate g-portal gcom gcom-c jaxa ocean GCOM-C/SGLI L3 Sea Surface Temperature (V2) This product is the temperature of sea surface.

