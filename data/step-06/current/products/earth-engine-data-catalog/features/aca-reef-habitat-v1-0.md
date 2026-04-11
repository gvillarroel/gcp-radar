---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.648Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "ACA Reef Habitat v1.0"
feature_slug: "aca-reef-habitat-v1-0"
latest_feature_date: "2021-11-02"
deprecation_date: "2021-11-02"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/ACA_reef_habitat_v2_0"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/geophysical"
keywords:
  - "aca"
  - "reef"
  - "habitat"
  - "v1"
  - "provides"
  - "the"
  - "dataset"
  - "deprecated"
---

# ACA Reef Habitat v1.0

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Provides the ACA reef habitat v1.0 dataset; deprecated on 2021-11-02.

## Extended Definition

Provides the ACA reef habitat v1.0 dataset; deprecated on 2021-11-02.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/ACA_reef_habitat_v2_0](https://developers.google.com/earth-engine/datasets/catalog/ACA_reef_habitat_v2_0)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/geophysical](https://developers.google.com/earth-engine/datasets/tags/geophysical)

## Supporting Pages

### "Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/ACA_reef_habitat_v2_0](https://developers.google.com/earth-engine/datasets/catalog/ACA_reef_habitat_v2_0)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The underlying satellite … ACA/reef habitat/v2 0, ocean,oceans,sentinel2-derived 2018-01-01T00:00:00Z/2021-01-01T00:00:00Z -33 -180 33 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5281/zenodo.3833242 https://doi.org/10.5281/zenodo.3833242 https://doi.org/10.5281/zenodo.3833242 https://doi.org/10.5281/zenodo.3833242 https://doi.org/10.5281/zenodo.3833242 https://doi.org/10.5281/zenodo.3833242 https://doi.org/10.5281/zenodo.3833242 https://doi.org/10.5281/zenodo.3833242 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Map . setCenter ( - 149.56194 , - 17.00872 , 13 ); Map . setOptions ( 'SATELLITE' ); // The visualizations are baked into the image properties. // Example mask application. var reefExtent = dataset . select ( 'reef mask' ). selfMask (); Map . addLayer ( reefExtent , {}, 'Global reef extent' ); // Geomorphic zonation classification. var geomorphicZonation = dataset . select ( 'geomorphic' ). selfMask (); Map . addLayer ( geomorphicZonation , {}, 'Geomorphic zonation' ); // Benthic habitat classification. var benthicHabitat = dataset . select ( 'benthic' ). selfMask (); Map . addLayer ( benthicHabitat , {}, 'Benthic habitat' ); Open in Code Editor Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0 The Allen Coral Atlas dataset maps the geomorphic zonation and benthic habitat for the world's shallow coral reefs at 5 m pixel resolution.
- Dataset Availability 2018-01-01T00:00:00Z–2021-01-01T00:00:00Z Dataset Producer Allen Coral Atlas Partnership (ACA) University of Queensland (UQ) Arizona State University Center for Global Discovery and Conservation Science (ASU GDCS) Coral Reef Alliance (CORAL) Planet Vulcan Inc. (Vulcan) Earth Engine Snippet ee.Image("ACA/reef habitat/v2 0") open in new Tags ocean oceans sentinel2-derived coral planet-derived reef seagrass Description The Allen Coral Atlas dataset maps the geomorphic zonation and benthic habitat for the world's shallow coral reefs at 5 m pixel resolution.
- Page Summary outlined flag The Allen Coral Atlas dataset provides maps of the geomorphic zonation and benthic habitat for the world's shallow coral reefs at 5 m pixel resolution.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- The AET band (named 'ETa') contains the average daily value from the CMRSET model for all cloud-free Landsat observations in that month (indicated with value 3 in the AET Data … agriculture australia csiro evaporation evapotranspiration landsat-derived Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0 The Allen Coral Atlas dataset maps the geomorphic zonation and benthic habitat for the world's shallow coral reefs at 5 m pixel resolution.
- The input river flow data for the new maps are produced by means of the open-source hydrological model … flood monitoring surface-ground-water wri JRC Global Surface Water Mapping Layers, v1.2 [deprecated] This dataset contains maps of the location and temporal distribution of surface water from 1984 to 2019 and provides statistics on the extent and change of those water surfaces.
- Total emissions for the survey … atmosphere climate edf emissions ghg methane MethaneAIR L4 Point Sources V1.1.0 This dataset provides data for high-emitting methane point source detections (kg/hr) over 13 oil and gas or coal extraction areas from Colorado, New Mexico, and Texas in the west to Pennsylvania, Ohio, and West Virginia in the east, plus three urban areas (New York City, … atmosphere climate edf edf-methanesat-ee emissions ghg MethaneAIR L4 Point Sources v1 This dataset provides data for high-emitting methane point source detections (kg/hr) over 13 oil and gas or coal extraction areas from Colorado, New Mexico, and Texas in the west to Pennsylvania, Ohio, and West Virginia in the east, plus three urban areas (New York City, … atmosphere climate edf emissions ghg methane MethaneSAT L3 Concentration Public Preview V1.0.0 This early "Public Preview" dataset provides geospatial data for the column-averaged dry-air mole fraction of methane in the atmosphere, "XCH4", retrieved from measurements by the MethaneSAT imaging spectrometer.
- The Multivariate Adaptive Constructed Analogs (MACA) method is a statistical downscaling method which utilizes a training dataset (i.e. a meteorological observation dataset) to remove historical biases and match spatial patterns … climate conus geophysical idaho maca monthly MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer (MODIS) Land Cover Climate Modeling Grid (CMG) (MCD12C1) Version 6.1 data product provides a spatially aggregated and reprojected version of the tiled MCD12Q1 Version 6.1 data product.

### "Datasets tagged geophysical in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/geophysical](https://developers.google.com/earth-engine/datasets/tags/geophysical)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Reference composite imagery represents … forest forest-biomass geophysical landsat-derived umd JRC Global Surface Water Mapping Layers, v1.2 [deprecated] This dataset contains maps of the location and temporal distribution of surface water from 1984 to 2019 and provides statistics on the extent and change of those water surfaces.
- For more information see the associated journal article: High-resolution mapping of global surface water and its … geophysical google jrc landsat-derived surface surface-ground-water JRC Global Surface Water Mapping Layers, v1.4 This dataset contains maps of the location and temporal distribution of surface water from 1984 to 2021 and provides statistics on the extent and change of those water surfaces.
- For more information see the associated journal article: High-resolution mapping of global surface water and its … change-detection geophysical google jrc landsat-derived surface JRC Global Surface Water Metadata, v1.4 This dataset contains maps of the location and temporal distribution of surface water from 1984 to 2021 and provides statistics on the extent and change of those water surfaces.
- For more information see the associated journal article: High-resolution mapping of global surface water and its … geophysical google history jrc landsat-derived monthly JRC Yearly Water Classification History, v1.4 This dataset contains maps of the location and temporal distribution of surface water from 1984 to 2021 and provides statistics on the extent and change of those water surfaces.

