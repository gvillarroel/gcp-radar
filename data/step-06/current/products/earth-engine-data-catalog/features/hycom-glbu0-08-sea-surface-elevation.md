---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.182Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "HYCOM/GLBu0_08/sea_surface_elevation"
feature_slug: "hycom-glbu0-08-sea-surface-elevation"
latest_feature_date: "2017-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/HYCOM_GLBu0_08_sea_surface_elevation"
  - "https://developers.google.com/earth-engine/datasets/tags/elevation"
  - "https://developers.google.com/earth-engine/datasets/tags/oceans"
keywords:
  - "hycom"
  - "glbu0"
  - "08"
  - "sea"
  - "surface"
  - "elevation"
  - "dataset"
  - "grid"
---

# HYCOM/GLBu0_08/sea_surface_elevation

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A HYCOM sea surface elevation dataset for the GLBu0.08 grid.

## Extended Definition

A HYCOM sea surface elevation dataset for the GLBu0.08 grid.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/HYCOM_GLBu0_08_sea_surface_elevation](https://developers.google.com/earth-engine/datasets/catalog/HYCOM_GLBu0_08_sea_surface_elevation)
- [https://developers.google.com/earth-engine/datasets/tags/elevation](https://developers.google.com/earth-engine/datasets/tags/elevation)
- [https://developers.google.com/earth-engine/datasets/tags/oceans](https://developers.google.com/earth-engine/datasets/tags/oceans)

## Supporting Pages

### HYCOM: Hybrid Coordinate Ocean Model, Sea Surface Elevation [deprecated] | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/HYCOM_GLBu0_08_sea_surface_elevation](https://developers.google.com/earth-engine/datasets/catalog/HYCOM_GLBu0_08_sea_surface_elevation)
- Source ID: `feature-recovery-direct-http`
- Final score: 343
- Re-rank relevance: N/A

Evidence snippets:
- La salinidad, la temperatura y… HYCOM/GLBu0_08/sea_surface_elevation, elevation,hycom,nopp,ocean,oceans,water 1992-10-02T00:00:00Z/2018-12-09T12:00:00Z -80.48 -180 80.48 180 Google Earth Engine https://developers.google.com/earth-engine/datasets ¿Quieres brindar más información? [[["Fácil de comprender","easyToUnderstand","thumb-up"],["Resolvió mi problema","solvedMyProblem","thumb-up"],["Otro","otherUp","thumb-up"]],[["Falta la información que necesito","missingTheInformationINeed","thumb-down"],["Muy complicado o demasiados pasos","tooComplicatedTooManySteps","thumb-down"],["Desactualizado","outOfDate","thumb-down"],["Problema de traducción","translationIssue","thumb-down"],["Problema con las muestras o los códigos","samplesCodeIssue","thumb-down"],["Otro","otherDown","thumb-down"]],[],[],["This dataset, now superseded by HYCOM/sea_surface_elevation, provides oceanographic data from 1992 to 2018.
- Disponibilidad del conjunto de datos 1992-10-02T00:00:00Z–2018-12-09T12:00:00Z Proveedor del conjunto de datos NOPP Fragmento de Earth Engine ee.ImageCollection("HYCOM/GLBu0_08/sea_surface_elevation") open_in_new Cadencia 1 día Etiquetas desnivel hycom nopp un océano océanos ssh agua Descripción El Hybrid Coordinate Ocean Model (HYCOM) es un modelo oceánico híbrido de coordenadas isopicnas-sigma-presión (generalizado) que asimila datos.
- ImageCollection ( 'HYCOM/GLBu0_08/sea_surface_elevation' ) . filter ( ee .
- Filter . date ( '2018-08-01' , '2018-08-15' )); var surfaceElevation = dataset . select ( 'surface_elevation' ); var surfaceElevationVis = { min : - 2000.0 , max : 2000.0 , palette : [ 'blue' , 'cyan' , 'yellow' , 'red' ], }; Map . setCenter ( - 28.1 , 28.3 , 1 ); Map . addLayer ( surfaceElevation , surfaceElevationVis , 'Surface Elevation' ); Abrir en el editor de código HYCOM: Hybrid Coordinate Ocean Model, Sea Surface Elevation [obsoleto] El Hybrid Coordinate Ocean Model (HYCOM) es un modelo oceánico híbrido de coordenadas isopicnas-sigma-presión (generalizadas) que asimila datos.

### "Datasets tagged elevation in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/elevation](https://developers.google.com/earth-engine/datasets/tags/elevation)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- They have been interpolated to a uniform 0.08 degree lat/long grid between 80.48°S and … elevation hycom nopp ocean oceans water MERIT DEM: Multi-Error-Removed Improved-Terrain DEM MERIT DEM a high accuracy global DEM at 3 arc second resolution ( 90 m at the equator) produced by eliminating major error components from existing DEMs (NASA SRTM3 DEM, JAXA AW3D DEM, Viewfinder Panoramas DEM).
- The primary source dataset for GMTED2010 is NGA''s SRTM Digital Terrain Elevation Data (DTED®, … dem elevation elevation-topography geophysical srtm topography GTOPO30: Global 30 Arc-Second Elevation GTOPO30 is a global digital elevation model (DEM) with a horizontal grid spacing of 30 arc seconds (approximately 1 kilometer).
- This version of the SRTM digital elevation data has been processed to fill data voids, and to facilitate its ease of use. dem elevation elevation-topography geophysical srtm topography US Lithology The Lithology dataset provides classes of the general types of parent material of soil on the surface.
- AHN4 Dataset contains the Netherlands AHN 0.5m DSM … ahn dem elevation elevation-topography geophysical lidar ALOS DSM: Global 30m v4.1 ALOS World 3D - 30m (AW3D30) is a global digital surface model (DSM) dataset with a horizontal resolution of approximately 30 meters (1 arcsec mesh).

### "Datasets tagged oceans in Earth Engine \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/tags/oceans](https://developers.google.com/earth-engine/datasets/tags/oceans)
- Source ID: `site-docs-root-3`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- They have been interpolated to a uniform 0.08 degree lat/long grid between 80.48°S and … elevation hycom nopp ocean oceans water HYCOM: Hybrid Coordinate Ocean Model, Water Temperature and Salinity The Hybrid Coordinate Ocean Model (HYCOM) is a data-assimilative hybrid isopycnal-sigma-pressure (generalized) coordinate ocean model.
- They have been interpolated to a uniform 0.08 degree lat/long grid between 80.48°S and … hycom nopp ocean oceans velocity water IPCC AR6 Sea Level Projections Regional (Medium Confidence) The dataset provided by the IPCC features comprehensive global and regional sea level projections from the IPCC 6th Assessment Report (AR6).
- MFWAM uses the computing code … bathymetry copernicus marine oceans HYCOM: Hybrid Coordinate Ocean Model, Sea Surface Elevation The Hybrid Coordinate Ocean Model (HYCOM) is a data-assimilative hybrid isopycnal-sigma-pressure (generalized) coordinate ocean model.
- The dataset spans from 2020 to 2150 and includes projections for various … ipcc ocean oceans Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.

