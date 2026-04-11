---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.324Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "EC JRC Global Map of Forest Cover 2020"
feature_slug: "ec-jrc-global-map-of-forest-cover-2020"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global"
  - "https://developers.google.com/earth-engine/datasets/tags/forest-biomass"
  - "https://developers.google.com/earth-engine/datasets/tags/landcover"
keywords:
  - "ec"
  - "jrc"
  - "global"
  - "map"
  - "of"
  - "forest"
  - "cover"
  - "2020"
---

# EC JRC Global Map of Forest Cover 2020

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Provides a global map of forest cover for 2020.

## Extended Definition

Provides a global map of forest cover for 2020.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)
- [https://developers.google.com/earth-engine/datasets/tags/forest-biomass](https://developers.google.com/earth-engine/datasets/tags/forest-biomass)
- [https://developers.google.com/earth-engine/datasets/tags/landcover](https://developers.google.com/earth-engine/datasets/tags/landcover)

## Supporting Pages

### "Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 \_|\_ Earth\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Can be either fresh or salt-water bodies. forest type Class Table Value Color Description 0 #282828 Unknown 1 #666000 Evergreen needle leaf 2 #009900 Evergreen broad leaf 3 #70663e Deciduous needle leaf 4 #a0dc00 Deciduous broad leaf 5 #929900 Mix of forest types Image Properties Image Properties Name Type Description discrete classification class names STRING LIST Land cover class names discrete classification class palette STRING LIST Land cover class palette discrete classification class values INT LIST Value of the land cover classification. forest type class names STRING LIST forest cover class names forest type class palette STRING LIST forest cover class palette forest type class values INT LIST forest cover class values Terms of Use Terms of Use As official product of the global component of the Copernicus Land Service, access to this land cover dataset is fully free and open to all users.
- Map () m . set center ( - 88.6 , 26.4 , 1 ) m . add layer ( dataset , {}, 'Land Cover' ) m Open in Code Editor Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 The Copernicus Global Land Service (CGLS) is earmarked as a component of the Land service to operate a multi-purpose service component that provides a series of bio-geophysical products on the status and evolution of land surface at global scale.
- The Dynamic Land Cover map at 100 m resolution (CGLS-LC100) is … COPERNICUS/Landcover/100m/Proba-V-C3/Global, copernicus,eea,esa,eu,landcover,landuse-landcover,proba,probav,vito 2015-01-01T00:00:00Z/2019-12-31T23:59:59Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5281/zenodo.3939050 https://doi.org/10.5281/zenodo.3939050 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Copernicus Global Land Service provides global land cover maps (CGLS-LC100) at 100m resolution from 2015 to 2019, derived from PROBA-V 100m time-series data.
- Dataset Availability 2015-01-01T00:00:00Z–2019-12-31T23:59:59Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/Landcover/100m/Proba-V-C3/Global") open in new Tags copernicus eea esa eu landcover landuse-landcover proba probav vito Description The Copernicus Global Land Service (CGLS) is earmarked as a component of the Land service to operate a multi-purpose service component that provides a series of bio-geophysical products on the status and evolution of land surface at global scale.

### "Datasets tagged forest-biomass in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/forest-biomass](https://developers.google.com/earth-engine/datasets/tags/forest-biomass)
- Source ID: `site-docs-root-3`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- EC JRC global map of forest cover 2020, V3 The global map of forest cover provides a spatially explicit representation of forest presence and absence for the year 2020 at 10m spatial resolution.
- To facilitate national land use planning and balancing the goals of economic development and maintenance of ecosystem services, a primary humid tropical forest map was created … forest forest-biomass global landsat-derived umd SCANFI: the Spatialized CAnadian National Forest Inventory data product1.2 This data publication contains a set of 30m resolution raster files representing 2020 Canadian wall-to-wall maps of broad land cover type, forest canopy height, degree of crown closure and aboveground tree biomass, along with species composition of several major tree species.
- The year 2020 corresponds to the cut-off date of the Regulation from the European Union "on the making available on the … eudr forest forest-biomass jrc EC JRC global map of forest types 2020, V1 The global map of forest types provides a spatially explicit representation of primary forest, naturally regenerating forest and planted forest (including plantation forest) for the year 2020 at 10m spatial resolution.
- The data support generating Tier 1 estimates for Aboveground dry woody Biomass Density (AGBD) in natural forests in the 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse … aboveground biomass carbon classification forest forest-biomass Global 3-class PALSAR-2/PALSAR Forest/Non-Forest Map A newer version of this dataset with 4 classes for 2017-2020 can be found in JAXA/ALOS/PALSAR/YEARLY/FNF4 The global forest/non-forest map (FNF) is generated by classifying the SAR image (backscattering coefficient) in the global 25m resolution PALSAR-2/PALSAR SAR mosaic so that strong and low backscatter pixels … alos alos2 classification eroc forest forest-biomass Global 4-class PALSAR-2/PALSAR Forest/Non-Forest Map The global forest/non-forest map (FNF) is generated by classifying the SAR image (backscattering coefficient) in the global 25m resolution PALSAR-2/PALSAR SAR mosaic so that strong and low backscatter pixels are assigned as "forest" and "non-forest", respectively.

### "Datasets tagged landcover in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/landcover](https://developers.google.com/earth-engine/datasets/tags/landcover)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- The revisit frequency of Sentinel-2 is between 2-5 days … global google landcover landuse landuse-landcover nrt EC JRC global map of forest types 2020, V1 The global map of forest types provides a spatially explicit representation of primary forest, naturally regenerating forest and planted forest (including plantation forest) for the year 2020 at 10m spatial resolution.
- GPP values … global global-pasture-watch land landcover landuse plant-productivity GlobCover: Global Land Cover Map GlobCover 2009 is a global land cover map based on ENVISAT's Medium Resolution Imaging Spectrometer (MERIS) Level 1B data acquired in full resolution mode with a spatial resolution of approximately 300 meters. esa landcover landuse-landcover Global 3-class PALSAR-2/PALSAR Forest/Non-Forest Map A newer version of this dataset with 4 classes for 2017-2020 can be found in JAXA/ALOS/PALSAR/YEARLY/FNF4 The global forest/non-forest map (FNF) is generated by classifying the SAR image (backscattering coefficient) in the global 25m resolution PALSAR-2/PALSAR SAR mosaic so that strong and low backscatter pixels … alos alos2 classification eroc forest forest-biomass Global 4-class PALSAR-2/PALSAR Forest/Non-Forest Map The global forest/non-forest map (FNF) is generated by classifying the SAR image (backscattering coefficient) in the global 25m resolution PALSAR-2/PALSAR SAR mosaic so that strong and low backscatter pixels are assigned as "forest" and "non-forest", respectively.
- LUCAS collects information on land cover and … eu jrc landcover landuse landuse-landcover lucas Land Cover of North America at 30 meters, 2020 The 2020 North American Land Cover 30-meter dataset was produced as part of the North American Land Change Monitoring System (NALCMS), a trilateral effort between Natural Resources Canada, the United States Geological Survey, and three Mexican organizations including the National Institute of Statistics and Geography … landcover landsat landuse-landcover nlcd reflectance MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer (MODIS) Land Cover Climate Modeling Grid (CMG) (MCD12C1) Version 6.1 data product provides a spatially aggregated and reprojected version of the tiled MCD12Q1 Version 6.1 data product.
- The base layer for mapping these forest types is the extent of forest cover … eudr forest forest-biomass jrc landcover primary-forest ESA WorldCereal 10 m v100 The European Space Agency (ESA) WorldCereal 10 m 2021 product suite consists of global-scale annual and seasonal crop maps and their related confidence.

