---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.660Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "IGN RGE ALTI 1 m elevation model"
feature_slug: "ign-rge-alti-1-m-elevation-model"
latest_feature_date: "2022-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/elevation"
  - "https://developers.google.com/earth-engine/datasets/tags/elevation-topography"
  - "https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H"
keywords:
  - "ign"
  - "rge"
  - "alti"
  - "elevation"
  - "model"
  - "digital"
---

# IGN RGE ALTI 1 m elevation model

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A 1 m digital elevation model from IGN RGE ALTI.

## Extended Definition

A 1 m digital elevation model from IGN RGE ALTI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/elevation](https://developers.google.com/earth-engine/datasets/tags/elevation)
- [https://developers.google.com/earth-engine/datasets/tags/elevation-topography](https://developers.google.com/earth-engine/datasets/tags/elevation-topography)
- [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H)

## Supporting Pages

### "DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model \_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H)
- Source ID: `site-docs-root-2`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Image ( 'AU/GA/DEM 1SEC/v10/DEM-H' ); var elevation = dataset . select ( 'elevation' ); var elevationVis = { min : - 10.0 , max : 1300.0 , palette : [ '3ae237' , 'b5e22e' , 'd6e21f' , 'fff705' , 'ffd611' , 'ffb613' , 'ff8b13' , 'ff6e08' , 'ff500d' , 'ff0000' , 'de0101' , 'c21301' , '0602ff' , '235cb1' , '307ef3' , '269db1' , '30c8e2' , '32d3ef' , '3be285' , '3ff38f' , '86e26f' ], }; Map . setCenter ( 133.95 , - 24.69 , 5 ); Map . addLayer ( elevation , elevationVis , 'Elevation' ); Open in Code Editor DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model The Hydrologically Enforced Digital Elevation Model (DEM-H) was derived from the SRTM data acquired by NASA in February 2000.
- Dataset Availability 2010-02-01T00:00:00Z–2010-02-01T00:00:00Z Dataset Producer Geoscience Australia Earth Engine Snippet ee.Image("AU/GA/DEM 1SEC/v10/DEM-H") open in new Tags australia dem elevation elevation-topography ga geophysical geoscience-australia smoothed srtm Description The Hydrologically Enforced Digital Elevation Model (DEM-H) was derived from the SRTM data acquired by NASA in February 2000.
- The dataset was derived from the 1 second smoothed Digital Elevation Model (DEM-S; ANZCW0703014016) by enforcing hydrological connectivity with the ANUDEM software, using selected AusHydro V1.6 (February 2010) 1:250,000 scale watercourse lines (ANZCW0503900101) and lines derived from DEM-S to define the watercourses.
- Home Earth Engine Data Catalog All Datasets Send feedback DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model Stay organized with collections Save and categorize content based on your preferences.

### "Datasets tagged elevation in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/elevation](https://developers.google.com/earth-engine/datasets/tags/elevation)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- More details are … alos dem elevation elevation-topography geophysical jaxa Australian 5M DEM The Digital Elevation Model (DEM) 5 meter Grid of Australia derived from LiDAR model represents a National 5 meter (bare earth) DEM which has been derived from some 236 individual LiDAR surveys between 2001 and 2015 covering an area in excess of 245,000 square kilometers. … australia dem elevation elevation-topography ga geophysical Canadian Digital Elevation Model The Canadian Digital Elevation Model (CDEM) is part of Natural Resources Canada's (NRCan) altimetry system and stems from the existing Canadian Digital Elevation Data (CDED).
- Editing … copernicus dem elevation elevation-topography geophysical CryoSat-2 Antarctica 1km DEM This dataset is a digital elevation model (DEM) of the Antarctic ice sheet and ice shelves based on observations recorded by the CryoSat-2 satellite radar altimeter between July 2010 and July 2016.
- Documentation: User's Guide dem elevation elevation-topography geophysical nasa srtm RGE ALTI: IGN RGE ALTI Digital Elevation 1m The RGE ALTI dataset describes the digital elevation model (DEM) of France with the pixel size of 1m.
- The model contains 3 bands of terrain data: a Digital Terrain Model (DTM), a first return Digital Surface Model (DSM), … dem elevation elevation-topography lidar GEDI L2A Raster Canopy Top Height (Version 2) GEDI's Level 2A Geolocated Elevation and Height Metrics Product (GEDI02 A) is primarily composed of 100 Relative Height (RH) metrics, which collectively describe the waveform collected by GEDI.

### "Datasets tagged elevation-topography in Earth Engine \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/tags/elevation-topography](https://developers.google.com/earth-engine/datasets/tags/elevation-topography)
- Source ID: `site-docs-root-3`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- It includes vegetation, tree canopy, buildings, and … arctic dem elevation-topography geophysical pgc umn Australian 5M DEM The Digital Elevation Model (DEM) 5 meter Grid of Australia derived from LiDAR model represents a National 5 meter (bare earth) DEM which has been derived from some 236 individual LiDAR surveys between 2001 and 2015 covering an area in excess of 245,000 square kilometers. … australia dem elevation elevation-topography ga geophysical Canadian Digital Elevation Model The Canadian Digital Elevation Model (CDEM) is part of Natural Resources Canada's (NRCan) altimetry system and stems from the existing Canadian Digital Elevation Data (CDED).
- Strip DEM files correspond to the overlapping area of the input stereoscopic imagery pair strips as they are collected by DigitalGlobe's … dem elevation-topography geophysical pgc rema umn RGE ALTI: IGN RGE ALTI Digital Elevation 1m The RGE ALTI dataset describes the digital elevation model (DEM) of France with the pixel size of 1m.
- Editing … copernicus dem elevation elevation-topography geophysical CryoSat-2 Antarctica 1km DEM This dataset is a digital elevation model (DEM) of the Antarctic ice sheet and ice shelves based on observations recorded by the CryoSat-2 satellite radar altimeter between July 2010 and July 2016.
- It is based on the 30m … aspect csp elevation elevation-topography ergo geophysical Greenland DEM - Greenland Mapping Project (GIMP) This Digital Elevation Model (DEM) is constructed from a combination of ASTER and SPOT-5 DEM's for the ice sheet periphery and margin (i.e. below the equilbrium line elevation) south of approximately 82.5°N and AVHRR photoclinometry in the ice sheet interior and far north (Scambos and … arctic elevation-topography gimp greenland nasa polar MERIT DEM: Multi-Error-Removed Improved-Terrain DEM MERIT DEM a high accuracy global DEM at 3 arc second resolution ( 90 m at the equator) produced by eliminating major error components from existing DEMs (NASA SRTM3 DEM, JAXA AW3D DEM, Viewfinder Panoramas DEM).

