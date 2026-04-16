---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.052Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Sentinel-5P Offline Cloud Properties"
feature_slug: "sentinel-5p-offline-cloud-properties"
latest_feature_date: "2019-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/sentinel1"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/atmosphere"
keywords:
  - "sentinel"
  - "5p"
  - "offline"
  - "properties"
---

# Sentinel-5P Offline Cloud Properties

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

An offline Sentinel-5P cloud properties product.

## Extended Definition

An offline Sentinel-5P cloud properties product.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/sentinel1](https://developers.google.com/earth-engine/guides/sentinel1)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/atmosphere](https://developers.google.com/earth-engine/datasets/tags/atmosphere)

## Supporting Pages

### Sentinel-1 Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/sentinel1](https://developers.google.com/earth-engine/guides/sentinel1)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following code filters the Sentinel-1 collection by transmitterReceiverPolarisation , instrumentMode , and orbitProperties pass properties, then calculates composites for several observation combinations that are displayed in the map to demonstrate how these characteristics affect the data.
- ImageCollection ( 'COPERNICUS/S1 GRD' ) . filterDate ( '2020-06-01' , '2020-10-01' ); // Filter the Sentinel-1 collection by metadata properties. var vvVhIw = sentinel1 // Filter to get images with VV and VH dual polarization. . filter ( ee .
- ImageCollection ( 'COPERNICUS/S1 GRD' ) . filterDate ( '2020-06-01' , '2020-10-01' ) Filter the Sentinel-1 collection by metadata properties. vv vh iw = ( sentinel 1 . filter ( Filter to get images with VV and VH dual polarization. ee .
- Metadata and Filtering To create a homogeneous subset of Sentinel-1 data, it will usually be necessary to filter the collection using metadata properties.

### "Datasets tagged atmosphere in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/atmosphere](https://developers.google.com/earth-engine/datasets/tags/atmosphere)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Roughly three-quarters of methane emissions are anthropogenic and as such, it is important to continue the record of … atmosphere climate copernicus esa eu knmi Sentinel-5P OFFL CLOUD: Offline Cloud Properties OFFL/L3 CLOUD This dataset provides offline high-resolution imagery of cloud parameters.
- It plays a role in chemistry on a local and global scale and its impact ranges from short-term … air-quality atmosphere bira copernicus dlr esa Sentinel-5P OFFL AER AI: Offline UV Aerosol Index OFFL/L3 AER AI This dataset provides offline high-resolution imagery of the UV Aerosol Index (UVAI), also called the Absorbing Aerosol Index (AAI).
- They enter the atmosphere as a result of anthropogenic activities (notably fossil fuel combustion … air-quality atmosphere copernicus esa eu knmi Sentinel-5P OFFL O3 TCL: Offline Tropospheric Ozone OFFL/L3 O3 TCL This dataset provides offline tropospheric high-resolution imagery of ozone concentrations between 20N and 20S.
- However, aerosols and clouds can be difficult to distinguish, and ALH is computed for all FRESCO effective … aerosol air-quality alh atmosphere copernicus esa Sentinel-5P NRTI CLOUD: Near Real-Time Cloud Properties NRTI/L3 CLOUD This dataset provides near real-time high-resolution imagery of cloud parameters.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Roughly three-quarters of methane emissions are anthropogenic and as such, it is important to continue the record of … atmosphere climate copernicus esa eu knmi Sentinel-5P OFFL CLOUD: Offline Cloud Properties OFFL/L3 CLOUD This dataset provides offline high-resolution imagery of cloud parameters.
- It plays a role in chemistry on a local and global scale and its impact ranges from short-term … air-quality atmosphere bira copernicus dlr esa Sentinel-5P OFFL AER AI: Offline UV Aerosol Index OFFL/L3 AER AI This dataset provides offline high-resolution imagery of the UV Aerosol Index (UVAI), also called the Absorbing Aerosol Index (AAI).
- They enter the atmosphere as a result of anthropogenic activities (notably fossil fuel combustion … air-quality atmosphere copernicus esa eu knmi Sentinel-5P OFFL O3 TCL: Offline Tropospheric Ozone OFFL/L3 O3 TCL This dataset provides offline tropospheric high-resolution imagery of ozone concentrations between 20N and 20S.
- However, aerosols and clouds can be difficult to distinguish, and ALH is computed for all FRESCO effective … aerosol air-quality alh atmosphere copernicus esa Sentinel-5P NRTI CLOUD: Near Real-Time Cloud Properties NRTI/L3 CLOUD This dataset provides near real-time high-resolution imagery of cloud parameters.

