---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.414Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "NEON Digital Elevation Model"
feature_slug: "neon-digital-elevation-model"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/elevation-topography"
  - "https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H"
  - "https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S"
keywords:
  - "neon"
  - "digital"
  - "elevation"
  - "model"
  - "dataset"
---

# NEON Digital Elevation Model

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

A NEON digital elevation model dataset.

## Extended Definition

A NEON digital elevation model dataset.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/elevation-topography](https://developers.google.com/earth-engine/datasets/tags/elevation-topography)
- [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H)
- [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S)

## Supporting Pages

### "Datasets tagged elevation-topography in Earth Engine \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/tags/elevation-topography](https://developers.google.com/earth-engine/datasets/tags/elevation-topography)
- Source ID: `site-docs-root-3`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- The model contains 3 bands of terrain data: a Digital Terrain Model (DTM), a first return Digital Surface Model (DSM), … dem elevation elevation-topography lidar GMTED2010: Global Multi-resolution Terrain Elevation Data 2010 The Global Multi-resolution Terrain Elevation Data 2010 (GMTED2010) dataset contains elevation data for the globe collected from various sources at 7.5 arc-seconds resolution.
- This SRTM V3 product (SRTM Plus) is provided by NASA JPL at a resolution of 1 arc-second … dem elevation elevation-topography geophysical nasa srtm NASADEM: NASA 30m Digital Elevation Model NASADEM is a reprocessing of SRTM data, with improved accuracy by incorporating auxiliary data from ASTER GDEM, ICESat GLAS, and PRISM datasets.
- Strip DEM files correspond to the overlapping area of the input stereoscopic imagery pair strips as they are collected by DigitalGlobe's … dem elevation-topography geophysical pgc rema umn RGE ALTI: IGN RGE ALTI Digital Elevation 1m The RGE ALTI dataset describes the digital elevation model (DEM) of France with the pixel size of 1m.
- The primary source dataset for GMTED2010 is NGA''s SRTM Digital Terrain Elevation Data (DTED®, … dem elevation elevation-topography geophysical srtm topography GTOPO30: Global 30 Arc-Second Elevation GTOPO30 is a global digital elevation model (DEM) with a horizontal grid spacing of 30 arc seconds (approximately 1 kilometer).

### "DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model \_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 'AU/GA/DEM 1SEC/v10/DEM-H' ); var elevation = dataset . select ( 'elevation' ); var elevationVis = { min : - 10.0 , max : 1300.0 , palette : [ '3ae237' , 'b5e22e' , 'd6e21f' , 'fff705' , 'ffd611' , 'ffb613' , 'ff8b13' , 'ff6e08' , 'ff500d' , 'ff0000' , 'de0101' , 'c21301' , '0602ff' , '235cb1' , '307ef3' , '269db1' , '30c8e2' , '32d3ef' , '3be285' , '3ff38f' , '86e26f' ], }; Map . setCenter ( 133.95 , - 24.69 , 5 ); Map . addLayer ( elevation , elevationVis , 'Elevation' ); Open in Code Editor DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model The Hydrologically Enforced Digital Elevation Model (DEM-H) was derived from the SRTM data acquired by NASA in February 2000.
- Dataset Availability 2010-02-01T00:00:00Z–2010-02-01T00:00:00Z Dataset Producer Geoscience Australia Earth Engine Snippet ee.Image("AU/GA/DEM 1SEC/v10/DEM-H") open in new Tags australia dem elevation elevation-topography ga geophysical geoscience-australia smoothed srtm Description The Hydrologically Enforced Digital Elevation Model (DEM-H) was derived from the SRTM data acquired by NASA in February 2000.
- The dataset was derived from the 1 second smoothed Digital Elevation Model (DEM-S; ANZCW0703014016) by enforcing hydrological connectivity with the ANUDEM software, using selected AusHydro V1.6 (February 2010) 1:250,000 scale watercourse lines (ANZCW0503900101) and lines derived from DEM-S to define the watercourses.
- Home Earth Engine Data Catalog All Datasets Send feedback DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model Stay organized with collections Save and categorize content based on your preferences.

### "DEM-S: Australian Smoothed Digital Elevation Model \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 'AU/GA/DEM 1SEC/v10/DEM-S' ); var elevation = dataset . select ( 'elevation' ); var elevationVis = { min : - 10.0 , max : 1300.0 , palette : [ '3ae237' , 'b5e22e' , 'd6e21f' , 'fff705' , 'ffd611' , 'ffb613' , 'ff8b13' , 'ff6e08' , 'ff500d' , 'ff0000' , 'de0101' , 'c21301' , '0602ff' , '235cb1' , '307ef3' , '269db1' , '30c8e2' , '32d3ef' , '3be285' , '3ff38f' , '86e26f' ], }; Map . setCenter ( 133.95 , - 24.69 , 5 ); Map . addLayer ( elevation , elevationVis , 'Elevation' ); Open in Code Editor DEM-S: Australian Smoothed Digital Elevation Model The Smoothed Digital Elevation Model (DEM-S) was derived from the SRTM data acquired by NASA in February 2000.
- Dataset Availability 2010-02-01T00:00:00Z–2010-02-01T00:00:00Z Dataset Producer Geoscience Australia Earth Engine Snippet ee.Image("AU/GA/DEM 1SEC/v10/DEM-S") open in new Tags australia dem elevation elevation-topography ga geophysical geoscience-australia smoothed srtm Description The Smoothed Digital Elevation Model (DEM-S) was derived from the SRTM data acquired by NASA in February 2000.
- Home Earth Engine Data Catalog All Datasets Send feedback DEM-S: Australian Smoothed Digital Elevation Model Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The Smoothed Digital Elevation Model (DEM-S) is derived from SRTM data and represents ground surface topography, excluding vegetation.

