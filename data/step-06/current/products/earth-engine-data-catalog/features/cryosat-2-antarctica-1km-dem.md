---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.822Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "CryoSat-2 Antarctica 1km DEM"
feature_slug: "cryosat-2-antarctica-1km-dem"
latest_feature_date: "2018-07-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/elevation-topography"
  - "https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H"
  - "https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S"
keywords:
  - "cryosat"
  - "antarctica"
  - "1km"
  - "dem"
  - "km"
  - "digital"
  - "elevation"
  - "model"
---

# CryoSat-2 Antarctica 1km DEM

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

A 1 km digital elevation model for Antarctica derived from CryoSat-2.

## Extended Definition

A 1 km digital elevation model for Antarctica derived from CryoSat-2.

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
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Editing … copernicus dem elevation elevation-topography geophysical CryoSat-2 Antarctica 1km DEM This dataset is a digital elevation model (DEM) of the Antarctic ice sheet and ice shelves based on observations recorded by the CryoSat-2 satellite radar altimeter between July 2010 and July 2016.
- NIDEM provides the first three-dimensional representation of Australia's intertidal sandy beaches and shores, tidal flats and rocky shores and reefs at 25 m … australia dem elevation-topography ga REMA Mosaic The Reference Elevation Model of Antarctica (REMA) is a high resolution, time-stamped Digital Surface Model (DSM) of Antarctica at 2-meter and 8-meter spatial resolutions.
- Mosaicked DEM files are compiled from multiple strips that have been co-registered, blended, and feathered to reduce edge-matching artifacts. dem elevation-topography geophysical pgc rema umn REMA Strips 2m The Reference Elevation Model of Antarctica (REMA) is a high resolution, time-stamped Digital Surface Model (DSM) of Antarctica at 2-meter and 8-meter spatial resolutions.
- Strip DEM files correspond to the overlapping area of the input stereoscopic imagery pair strips as they are collected by DigitalGlobe's … dem elevation-topography geophysical pgc rema umn REMA Strips 8m The Reference Elevation Model of Antarctica (REMA) is a high resolution, time-stamped Digital Surface Model (DSM) of Antarctica at 2-meter and 8-meter spatial resolutions.

### "DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model \_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image ( 'AU/GA/DEM 1SEC/v10/DEM-H' ); var elevation = dataset . select ( 'elevation' ); var elevationVis = { min : - 10.0 , max : 1300.0 , palette : [ '3ae237' , 'b5e22e' , 'd6e21f' , 'fff705' , 'ffd611' , 'ffb613' , 'ff8b13' , 'ff6e08' , 'ff500d' , 'ff0000' , 'de0101' , 'c21301' , '0602ff' , '235cb1' , '307ef3' , '269db1' , '30c8e2' , '32d3ef' , '3be285' , '3ff38f' , '86e26f' ], }; Map . setCenter ( 133.95 , - 24.69 , 5 ); Map . addLayer ( elevation , elevationVis , 'Elevation' ); Open in Code Editor DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model The Hydrologically Enforced Digital Elevation Model (DEM-H) was derived from the SRTM data acquired by NASA in February 2000.
- Dataset Availability 2010-02-01T00:00:00Z–2010-02-01T00:00:00Z Dataset Producer Geoscience Australia Earth Engine Snippet ee.Image("AU/GA/DEM 1SEC/v10/DEM-H") open in new Tags australia dem elevation elevation-topography ga geophysical geoscience-australia smoothed srtm Description The Hydrologically Enforced Digital Elevation Model (DEM-H) was derived from the SRTM data acquired by NASA in February 2000.
- The dataset was derived from the 1 second smoothed Digital Elevation Model (DEM-S; ANZCW0703014016) by enforcing hydrological connectivity with the ANUDEM software, using selected AusHydro V1.6 (February 2010) 1:250,000 scale watercourse lines (ANZCW0503900101) and lines derived from DEM-S to define the watercourses.
- Home Earth Engine Data Catalog All Datasets Send feedback DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model Stay organized with collections Save and categorize content based on your preferences.

### "DEM-S: Australian Smoothed Digital Elevation Model \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S](https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image ( 'AU/GA/DEM 1SEC/v10/DEM-S' ); var elevation = dataset . select ( 'elevation' ); var elevationVis = { min : - 10.0 , max : 1300.0 , palette : [ '3ae237' , 'b5e22e' , 'd6e21f' , 'fff705' , 'ffd611' , 'ffb613' , 'ff8b13' , 'ff6e08' , 'ff500d' , 'ff0000' , 'de0101' , 'c21301' , '0602ff' , '235cb1' , '307ef3' , '269db1' , '30c8e2' , '32d3ef' , '3be285' , '3ff38f' , '86e26f' ], }; Map . setCenter ( 133.95 , - 24.69 , 5 ); Map . addLayer ( elevation , elevationVis , 'Elevation' ); Open in Code Editor DEM-S: Australian Smoothed Digital Elevation Model The Smoothed Digital Elevation Model (DEM-S) was derived from the SRTM data acquired by NASA in February 2000.
- Dataset Availability 2010-02-01T00:00:00Z–2010-02-01T00:00:00Z Dataset Producer Geoscience Australia Earth Engine Snippet ee.Image("AU/GA/DEM 1SEC/v10/DEM-S") open in new Tags australia dem elevation elevation-topography ga geophysical geoscience-australia smoothed srtm Description The Smoothed Digital Elevation Model (DEM-S) was derived from the SRTM data acquired by NASA in February 2000.
- Home Earth Engine Data Catalog All Datasets Send feedback DEM-S: Australian Smoothed Digital Elevation Model Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The Smoothed Digital Elevation Model (DEM-S) is derived from SRTM data and represents ground surface topography, excluding vegetation.

