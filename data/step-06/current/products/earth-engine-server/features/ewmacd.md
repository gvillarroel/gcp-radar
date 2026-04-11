---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.425Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "EWMACD"
feature_slug: "ewmacd"
latest_feature_date: "2018-06-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/guides/command_line"
keywords:
  - "ewmacd"
  - "performs"
  - "temporal"
  - "segmentation"
  - "using"
  - "an"
  - "exponentially"
  - "weighted"
---

# EWMACD

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Performs temporal segmentation using an exponentially weighted moving average change detection approach.

## Extended Definition

Performs temporal segmentation using an exponentially weighted moving average change detection approach.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Added LandTrendr, EWMACD, VerDET and VCT temporal segmentation algorithms.
- October 22, 2024 Earth Engine Data Catalog Feature Added IUCN/GlobalEcosystemTypology/current : IUCN Global Ecosystem Typology Level 3: 1.0 Added LARSE/GEDI/GRIDDEDVEG 002/COUNTS/V1/12KM : Gridded GEDI Vegetation Structure Metrics and Biomass Density with COUNTS metrics, 12KM pixel size Added LARSE/GEDI/GRIDDEDVEG 002/COUNTS/V1/1KM : Gridded GEDI Vegetation Structure Metrics and Biomass Density with COUNTS metrics, 1KM pixel size Added LARSE/GEDI/GRIDDEDVEG 002/COUNTS/V1/6KM : Gridded GEDI Vegetation Structure Metrics and Biomass Density with COUNTS metrics, 6KM pixel size October 15, 2024 Earth Engine Data Catalog Feature Added JRC/GHSL/P2023A/GHS SMOD V2-0 : GHSL: Degree of Urbanization 1975-2030 V2-0 (P2023A) October 08, 2024 Earth Engine Data Catalog Feature Added UK/NHM/BII/V1 (no longer available) September 24, 2024 Earth Engine Data Catalog Feature Added BNETD/land cover/v1 : Cote d'Ivoire BNETD 2020 Land Cover Map Added GOOGLE/Research/open-buildings-temporal/v1 : Open Buildings Temporal V1 Added JRC/CEMS GLOFAS/FloodHazard/v1 (no longer available) September 03, 2024 Earth Engine Data Catalog Feature Added EDF/MethaneSAT/MethaneAIR/L3concentration : MethaneAIR L3 Concentration v1 Added EDF/OGIM/current : OGIM: Oil and Gas Infrastructure Mapping Database v2.5.1 Added NASA/EMIT/L2A/RFL : EMIT L2A Estimated Surface Reflectance and Uncertainty and Masks 60 m Added WRI/SBTN/naturalLands/v1 (no longer available) Earth Engine Python Client Library 0.1.419 Fixed Fixed a bug where the quota project wasn't being set when authenticating using the notebook auth mode.
- Feature Added ee.Algorithm.TemporalSegmentation.StructuralChangeBreakpoints , modelled after R's wtrucchange.breakpoints .
- Earth Engine Server Breaking Changed the output bands produced by ee.Algorithms.TemporalSegmentation.Ccdc() .

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Landsat . simpleCloudScore ( cloudy scene ); // Create a mask from the cloud score and combine it with the image mask. var mask = scored . select ([ 'cloud' ]). lte ( 20 ); // Apply the mask to the image and display the result. var masked = cloudy scene . updateMask ( mask ); Map . addLayer ( masked , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.4 }, 'masked' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a cloudy Landsat scene and display it. cloudy scene = ee .
- Map . setCenter ( - 122.3578 , 37.7726 , 10 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'TOA composite' ); Map . addLayer ( customComposite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'Custom TOA composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a raw Landsat 5 ImageCollection for a single year. collection = ee .
- Landsat . simpleCloudScore ( mosaic ); Map . addLayer ( scored mosaic , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.4 }, 'TOA mosaic' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a Landsat 8 TOA collection, make 15-day mosaic, set SENSOR ID property. mosaic = ( ee .
- TOA ( raw ); Map . addLayer ( toa , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.2 }, 'toa reflectance' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a raw Landsat scene and display it. raw = ee .

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- This will control how Earth Engine generates the pyramid of lower-resolution versions of your image: earthengine upload image --asset id=projects/my-project/assets/asset id --pyramiding policy=sample gs://bucket/image.tif You can use the --last band alpha to indicate that the mask for the image should be taken from an alpha channel in the last band: earthengine upload image --asset id=projects/my-project/assets/asset id --last band alpha gs://bucket/image.tif You can specify a no-data value using the --nodata value flag.
- The cancel sub-command cancels one or more running tasks. upload Uploads images or tables from Google Cloud Storage to Earth Engine, or creates assets backed by external images. image To upload an image asset using default settings: earthengine upload image --asset id=projects/my-project/assets/asset id gs://bucket/image.tif If you specify multiple input image files they will be interpreted as tiles of a single image asset.
- Authenticate () Command execution To run command line utilities, like the Earth Engine CLI, you need to prepend command calls with an exclamation point. !earthengine -h Set a Cloud project Use the --project option to set a Cloud project for each individual earthengine command. !earthengine --project my-project <command> Alternatively, set a default project to be used by all earthengine calls using the set project command.
- Before using this command, be sure to set a project using set project . get To view a project configuration, use the get sub-command: earthengine alpha project config get If you have permission to view the project's batch task settings , the output contains: maxConcurrentExports : a number indicating the maximum number of batch tasks that can run in parallel across all users for the given project.

