---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.533Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "projects/sat-io/open-datasets/ORNL/LANDSCAN_GLOBAL"
feature_slug: "projects-sat-io-open-datasets-ornl-landscan-global"
latest_feature_date: "2023-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/projects_sat-io_open-datasets_ORNL_LANDSCAN_GLOBAL"
keywords:
  - "projects"
  - "sat"
  - "io"
  - "open"
  - "datasets"
  - "ornl"
  - "landscan"
  - "global"
---

# projects/sat-io/open-datasets/ORNL/LANDSCAN_GLOBAL

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

LandScan Global provides global population data at 1 kilometer resolution.

## Extended Definition

LandScan Global provides global population data at 1 kilometer resolution.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/projects_sat-io_open-datasets_ORNL_LANDSCAN_GLOBAL](https://developers.google.com/earth-engine/datasets/catalog/projects_sat-io_open-datasets_ORNL_LANDSCAN_GLOBAL)

## Supporting Pages

### LandScan Population Data Global 1km | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/projects_sat-io_open-datasets_ORNL_LANDSCAN_GLOBAL](https://developers.google.com/earth-engine/datasets/catalog/projects_sat-io_open-datasets_ORNL_LANDSCAN_GLOBAL)
- Source ID: `feature-recovery-direct-http`
- Final score: 485
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection ( 'projects/sat-io/open-datasets/ORNL/LANDSCAN_GLOBAL' ); var popcount_intervals = '<RasterSymbolizer>' + ' <ColorMap type="intervals" extended="false" >' + '<ColorMapEntry color="#CCCCCC" quantity="0" label="No Data"/>' + '<ColorMapEntry color="#FFFFBE" quantity="5" label="Population Count (Estimate)"/>' + '<ColorMapEntry color="#FEFF73" quantity="25" label="Population Count (Estimate)"/>' + '<ColorMapEntry color="#FEFF2C" quantity="50" label="Population Count (Estimate)"/>' + '<ColorMapEntry color="#FFAA27" quantity="100" label="Population Count (Estimate)"/>' + '<ColorMapEntry color="#FF6625" quantity="500" label="Population Count (Estimate)"/>' + '<ColorMapEntry color="#FF0023" quantity="2500" label="Population Count (Estimate)"/>' + '<ColorMapEntry color="#CC001A" quantity="5000" label="Population Count (Estimate)"/>' + '<ColorMapEntry color="#730009" quantity="185000" label="Population Count (Estimate)"/>' + '</ColorMap>' + '</RasterSymbolizer>' ; // Define a dictionary which will be used to make legend and visualize image on // map var dict = { 'names' : [ '0' , '1-5' , '6-25' , '26-50' , '51-100' , '101-500' , '501-2500' , '2501-5000' , '5001-185000' ], 'colors' : [ '#CCCCCC' , '#FFFFBE' , '#FEFF73' , '#FEFF2C' , '#FFAA27' , '#FF6625' , '#FF0023' , '#CC001A' , '#730009' ] }; // Create a panel to hold the legend widget var legend = ui .
- Leveraging state-of-the-art spatial modeling techniques and advanced geospatial data sources, LandScan provides detailed information on population counts and … projects/sat-io/open-datasets/ORNL/LANDSCAN_GLOBAL, community-dataset,demography,landscan,population,sat-io 2000-01-01T00:00:00Z/2023-12-31T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.48690/1529167 https://doi.org/10.48690/1529167 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The LandScan dataset, from Oak Ridge National Laboratory (ORNL), provides global population distribution data from 2000 to 2023.
- Catalog Owner Awesome GEE Community Catalog Dataset Availability 2000-01-01T00:00:00Z–2023-12-31T00:00:00Z Dataset Producer Oak Ridge National Laboratory Earth Engine Snippet ee.ImageCollection("projects/sat-io/open-datasets/ORNL/LANDSCAN_GLOBAL") open_in_new Tags community-dataset demography landscan population sat-io Description The LandScan dataset, provided by the Oak Ridge National Laboratory (ORNL), offers a comprehensive and high-resolution global population distribution dataset that serves as a valuable resource for a wide range of applications.
- Flow ( 'horizontal' ) }); }; // Get the list of palette colors and class names from the image. var palette = dict [ 'colors' ]; var names = dict [ 'names' ]; loading . style (). set ( 'shown' , false ); for ( var i = 0 ; i < names . length ; i ++ ) { panel . add ( makeRow ( palette [ i ], names [ i ])); } Map . add ( panel ); } addCategoricalLegend ( legend , dict , 'Population Count(estimate)' ); Map . addLayer ( landscan_global . sort ( 'system:time_start' ) . first () . sldStyle ( popcount_intervals ), {}, 'Population Count Estimate 2000' ); Map . addLayer ( landscan_global . sort ( 'system:time_start' , false ) . first () . sldStyle ( popcount_intervals ), {}, 'Population Count Estimate 2022' ); Open in Code Editor LandScan Population Data Global 1km The LandScan dataset, provided by the Oak Ridge National Laboratory (ORNL), offers a comprehensive and high-resolution global population distribution dataset that serves as a valuable resource for a wide range of applications.

### "Datasets tagged population in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/population](https://developers.google.com/earth-engine/datasets/tags/population)
- Source ID: `site-docs-root-3`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- In this way, the data capture the full potential activity space of people throughout the course … landscan population LandScan Population Data Global 1km The LandScan dataset, provided by the Oak Ridge National Laboratory (ORNL), offers a comprehensive and high-resolution global population distribution dataset that serves as a valuable resource for a wide range of applications.
- Each place record includes location coordinates, names, categories, contact information (websites, social media, emails, phones), brand information, addresses, and … global infrastructure-boundaries map population publisher-dataset urban Tree proximate people (TPP) 1.0 The "Tree Proximate People" (TPP) is one of the datasets contributing to the development of indicator #13, number of forest-dependent people in extreme poverty, of the Collaborative Partnership on Forests (CPF) Global Core Set of forest-related indicators (GCS).
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, 2010, 2015, and 2020 on … ciesin gpw nasa population GPWv411: Land Area (Gridded Population of the World Version 4.11) This dataset contains the estimate of the surface area of land in square kilometers per pixel, excluding permanent ice and water, within each pixel, and was used to calculate the GPW v4.11 population density datasets.
- The WorldPop project aims to meet these needs through the provision of detailed and open access population … demography population worldpop WorldPop Global Project Population Data: Estimated Age and Sex Structures of Residential Population per 100x100m Grid Square Global high-resolution, contemporary data on human population distributions are a prerequisite for the accurate measurement of the impacts of population growth, for monitoring changes, and for planning interventions.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- The dataset was created using the MODIS 8-day TERRA and AQUA land surface temperature (LST) products, the Landscan urban extent … climate uhi urban yale geoBoundaries: Political administrative boundaries at Country level (ADM0), v6.0.0 The geoBoundaries Global Database of Political Administrative Boundaries Database is an online, open license resource of boundaries (i.e., state, county) for every country in the world.
- In this way, the data capture the full potential activity space of people throughout the course … landscan population LandScan Population Data Global 1km The LandScan dataset, provided by the Oak Ridge National Laboratory (ORNL), offers a comprehensive and high-resolution global population distribution dataset that serves as a valuable resource for a wide range of applications.
- MERIT DEM separates absolute bias, stripe noise, speckle noise and … dem elevation elevation-topography merit topography MERIT Hydro: Global Hydrography Datasets MERIT Hydro is a new global flow direction map at 3 arc-second resolution ( 90 m at the equator) derived from the version 1.0.3 of the MERIT DEM elevation data and water body datasets (G1WBM, GSWO and OpenStreetMap).
- To access … envirometrix opengeohub openlandmap soil usda OpenLandMap Soil Water Content at 33kPa (Field Capacity) Soil water content (volumetric %) for 33kPa and 1500kPa suctions predicted at 6 standard depths (0, 10, 30, 60, 100 and 200 cm) at 250 m resolution Training points are based on a global compilation of soil profiles: USDA NCSS AfSPDB ISRIC WISE EGRPR SPADE … envirometrix opengeohub openlandmap soil OpenLandMap Soil pH in H2O Soil pH in H2O at 6 standard depths (0, 10, 30, 60, 100 and 200 cm) at 250 m resolution Processing steps are described in detail here.

