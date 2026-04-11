---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.542Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Allen Coral Atlas Geomorphic Zonation and Benthic Habitat v2.0"
feature_slug: "allen-coral-atlas-geomorphic-zonation-and-benthic-habitat-v2-0"
latest_feature_date: "2023-02-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/ACA_reef_habitat_v2_0"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/oceans"
keywords:
  - "allen"
  - "coral"
  - "atlas"
  - "geomorphic"
  - "zonation"
  - "and"
  - "benthic"
  - "habitat"
---

# Allen Coral Atlas Geomorphic Zonation and Benthic Habitat v2.0

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

This dataset provides Allen Coral Atlas coral reef geomorphic zonation and benthic habitat classification at v2.0.

## Extended Definition

This dataset provides Allen Coral Atlas coral reef geomorphic zonation and benthic habitat classification at v2.0.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/ACA_reef_habitat_v2_0](https://developers.google.com/earth-engine/datasets/catalog/ACA_reef_habitat_v2_0)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/oceans](https://developers.google.com/earth-engine/datasets/tags/oceans)

## Supporting Pages

### "Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/ACA_reef_habitat_v2_0](https://developers.google.com/earth-engine/datasets/catalog/ACA_reef_habitat_v2_0)
- Source ID: `site-docs-root-2`
- Final score: 288
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Map . setCenter ( - 149.56194 , - 17.00872 , 13 ); Map . setOptions ( 'SATELLITE' ); // The visualizations are baked into the image properties. // Example mask application. var reefExtent = dataset . select ( 'reef mask' ). selfMask (); Map . addLayer ( reefExtent , {}, 'Global reef extent' ); // Geomorphic zonation classification. var geomorphicZonation = dataset . select ( 'geomorphic' ). selfMask (); Map . addLayer ( geomorphicZonation , {}, 'Geomorphic zonation' ); // Benthic habitat classification. var benthicHabitat = dataset . select ( 'benthic' ). selfMask (); Map . addLayer ( benthicHabitat , {}, 'Benthic habitat' ); Open in Code Editor Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0 The Allen Coral Atlas dataset maps the geomorphic zonation and benthic habitat for the world's shallow coral reefs at 5 m pixel resolution.
- Dataset Availability 2018-01-01T00:00:00Z–2021-01-01T00:00:00Z Dataset Producer Allen Coral Atlas Partnership (ACA) University of Queensland (UQ) Arizona State University Center for Global Discovery and Conservation Science (ASU GDCS) Coral Reef Alliance (CORAL) Planet Vulcan Inc. (Vulcan) Earth Engine Snippet ee.Image("ACA/reef habitat/v2 0") open in new Tags ocean oceans sentinel2-derived coral planet-derived reef seagrass Description The Allen Coral Atlas dataset maps the geomorphic zonation and benthic habitat for the world's shallow coral reefs at 5 m pixel resolution.
- Home Earth Engine Data Catalog All Datasets Send feedback Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0 Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The Allen Coral Atlas dataset provides maps of the geomorphic zonation and benthic habitat for the world's shallow coral reefs at 5 m pixel resolution.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The AET band (named 'ETa') contains the average daily value from the CMRSET model for all cloud-free Landsat observations in that month (indicated with value 3 in the AET Data … agriculture australia csiro evaporation evapotranspiration landsat-derived Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0 The Allen Coral Atlas dataset maps the geomorphic zonation and benthic habitat for the world's shallow coral reefs at 5 m pixel resolution.
- The OpenET SSEBop implementation uses … evapotranspiration gridmet-derived landsat-derived monthly openet publisher-dataset OpenET eeMETRIC Monthly Evapotranspiration v2.0 Google Earth Engine implementation of the Mapping Evapotranspiration at high Resolution with Internalized Calibration model (eeMETRIC). eeMETRIC applies the advanced METRIC algorithms and process of Allen et al. (2007; 2015) and Allen et al. (2013b), where a singular relationship between the near surface air temperature … evapotranspiration gridmet-derived landsat-derived monthly openet publisher-dataset OpenET eeMETRIC Monthly Evapotranspiration v2.1 Google Earth Engine implementation of the Mapping Evapotranspiration at high Resolution with Internalized Calibration model (eeMETRIC). eeMETRIC applies the advanced METRIC algorithms and process of Allen et al. (2007; 2015) and Allen et al. (2013b), where a singular relationship between the near surface air temperature … evapotranspiration gridmet-derived landsat-derived monthly openet publisher-dataset OpenET geeSEBAL Monthly Evapotranspiration v2.0 Implementation of geeSEBAL was completed within the OpenET framework.
- For more information, please see the Spain orthophotos documentation orthophotos rgb Species Distribution, Australia Mammals These species distribution model outputs, developed by Google in collaboration with QCIF and EcoCommons, represent estimates of species’ relative occurrence likelihoods (i.e., higher values indicate a higher likelihood that the species would be detected at a location, for a given survey methodology and given survey … biodiversity conservation ecosystems nature-trace pre-review publisher-dataset TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (8-Daily 1km) This gap-filled Tasseled Cap Brightness (TCB) dataset was created by applying the tasseled-cap equations defined in Lobser and Cohen (2007) to MODIS BRDF-corrected imagery (MCD43B4).
- This dataset may be used for studying the biology and hydrology of coastal zones, changes in the diversity and geographical distribution of coastal marine habitats, biogeochemical fluxes and … biology chlorophyll nasa ocean oceandata oceans Open Buildings Temporal V1 The Open Buildings 2.5D Temporal Dataset contains data about building presence, fractional building counts, and building heights at an effective1 spatial resolution of 4m (rasters are provided at 0.5m resolution) at an annual cadence from 2016-2023.

### "Datasets tagged oceans in Earth Engine \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/tags/oceans](https://developers.google.com/earth-engine/datasets/tags/oceans)
- Source ID: `site-docs-root-3`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0 The Allen Coral Atlas dataset maps the geomorphic zonation and benthic habitat for the world's shallow coral reefs at 5 m pixel resolution.
- Page Summary outlined flag The Allen Coral Atlas dataset provides high-resolution maps of shallow coral reef habitats and geomorphic zonation globally.
- This dataset may be used for studying the biology and hydrology of coastal zones, changes in the diversity and geographical distribution of coastal marine habitats, biogeochemical fluxes and … biology chlorophyll nasa ocean oceandata oceans WDKBA: World Database of Key Biodiversity Areas (KBAs) - September 2025 If you are interested in accessing the KBA dataset please complete the KBA data request form which will allow access directly in GEE once approved.
- This dataset may be used for studying the biology and hydrology of coastal zones, changes in the diversity and geographical distribution of coastal marine habitats, biogeochemical fluxes and … biology chlorophyll modis nasa ocean oceandata Ocean Color SMI: Standard Mapped Image MODIS Terra Data This level 3 product includes ocean color and satellite ocean biology data produced or collected under EOSDIS.

