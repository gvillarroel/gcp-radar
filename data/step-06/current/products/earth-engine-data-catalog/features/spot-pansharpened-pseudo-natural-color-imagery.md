---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.302Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "SPOT Pansharpened Pseudo Natural Color Imagery"
feature_slug: "spot-pansharpened-pseudo-natural-color-imagery"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1"
  - "https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_NC_V1"
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
keywords:
  - "spot"
  - "pansharpened"
  - "pseudo"
  - "natural"
  - "color"
  - "imagery"
  - "provides"
  - "10"
---

# SPOT Pansharpened Pseudo Natural Color Imagery

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Provides 5-10 m pansharpened pseudo natural color imagery for Brazil from 2007 to 2009.

## Extended Definition

Provides 5-10 m pansharpened pseudo natural color imagery for Brazil from 2007 to 2009.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1)
- [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_NC_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_NC_V1)
- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)

## Supporting Pages

### "SPOT Pansharpened Pseudo Natural Color Imagery 5-10m, Brazil \_|\_ Earth\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1)
- Source ID: `site-docs-root-2`
- Final score: 284
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Filter . eq ( 'satellite' , 'SPOT5' )). first (); // Apply Google cloud mask band to the image. image = image . updateMask ( image . select ( 'cloud mask' )); Map . centerObject ( image , 12 ); Map . addLayer ( image , { bands : [ 'R' , 'G' , 'B' ], min : 0 , max : 200 }, 'Pansharpened RGB' ); Open in Code Editor SPOT Pansharpened Pseudo Natural Color Imagery 5-10m, Brazil This collection provides high-resolution pansharpened pseudo-natural color SPOT imagery satellites 2, 4, and 5 for Brazil circa 2008.
- Dataset Availability 2007-01-01T00:00:00Z–2009-11-26T23:59:59Z Dataset Producer Google/CNES Earth Engine Snippet ee.ImageCollection("AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PMS NC/V1") open in new Tags brazil forest-code google rgb satellite-imagery spot Description This collection provides high-resolution pansharpened pseudo-natural color SPOT imagery satellites 2, 4, and 5 for Brazil circa 2008.
- Home Earth Engine Data Catalog All Datasets Send feedback SPOT Pansharpened Pseudo Natural Color Imagery 5-10m, Brazil Stay organized with collections Save and categorize content based on your preferences.
- Bands Bands Pixel size: 10 meters (all bands) Name Units Min Max Pixel Size Description R dn 0 255 10 meters Red reflectance G dn 0 255 10 meters Green reflectance B dn 0 255 10 meters Pansharpened blue reflectance, representing the synthetic blue channel of the pseudo-natural color product for SPOT 2, 4, and 5 cloud mask 0 1 10 meters Cloud mask: 0 = cloud/shadow, 1 = clear estimated min or max value Image Properties Image Properties Name Type Description cloud cover DOUBLE Scene-wide cloud cover estimate grid reference STRING The K-J grid reference identifies the nominal scene center, where K is the column and J is the row of the SPOT Grid Reference System (GRS). high quality STRING Set to TRUE for all images. incidence angle DOUBLE Incidence angle instrument STRING Imaging instrument job id STRING Provider-set field denoting unique identifier for processing job. nadir lat DOUBLE Nadir latitude nadir lon DOUBLE Nadir longitude pixel size meters DOUBLE Nominal scale processing level STRING Indicates the level of radiometric and geometric correction applied.

### "SPOT Multispectral Pseudo Natural Color Imagery 10-20m, Brazil \_|\_ Earth\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_NC_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_NC_V1)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Point ( - 45.2 , - 19.5 )); var image = collection . first (); // Apply Google cloud mask band to image. image = image . updateMask ( image . select ( 'cloud mask' )); Map . centerObject ( image , 12 ); Map . addLayer ( image , { bands : [ 'R' , 'G' , 'B' ], min : 0 , max : 255 }, 'RGB' ); Open in Code Editor SPOT Multispectral Pseudo Natural Color Imagery 10-20m, Brazil This collection contains 2008-era "pseudo natural color" RGB images derived from the native multispectral bands of SPOT 2, 4, and 5 for Brazil.
- Home Earth Engine Data Catalog All Datasets Send feedback SPOT Multispectral Pseudo Natural Color Imagery 10-20m, Brazil Stay organized with collections Save and categorize content based on your preferences.
- Dataset Availability 2007-01-01T00:00:00Z–2009-11-26T23:59:59Z Dataset Producer Google/CNES Earth Engine Snippet ee.ImageCollection("AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS NC/V1") open in new Tags brazil forest-code google rgb satellite-imagery spot Description This collection contains 2008-era "pseudo natural color" RGB images derived from the native multispectral bands of SPOT 2, 4, and 5 for Brazil.
- Bands Bands Pixel size: 20 meters (all bands) Name Units Min Max Pixel Size Description R dn 0 255 20 meters Red reflectance G dn 0 255 20 meters Green reflectance B dn 0 255 20 meters Blue reflectance, representing the synthetic blue channel of the pseudo-natural color product for SPOT 2, 4, and 5 cloud mask 0 1 20 meters Cloud mask: 0 = cloud/shadow, 1 = clear estimated min or max value Image Properties Image Properties Name Type Description cloud cover DOUBLE Scene-wide cloud cover estimate grid reference STRING The K-J grid reference identifies the nominal scene center, where K is the column and J is the row of the SPOT Grid Reference System (GRS). high quality STRING Set to TRUE for all images. incidence angle DOUBLE Incidence angle instrument STRING Imaging instrument job id STRING Provider-set field denoting unique identifier for processing job. nadir lat DOUBLE Nadir latitude nadir lon DOUBLE Nadir longitude pixel size meters DOUBLE Nominal scale processing level STRING Indicates the level of radiometric and geometric correction applied.

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- The panchromatic sensor provides the highest native spatial resolution of the missions, capturing light across a broad visible spectrum (0.51-0.73 µm for SPOT 2, 0.61-0.68 … brazil forest-code google imagery satellite-imagery spot SPOT Pansharpened Pseudo Natural Color Imagery 5-10m, Brazil This collection provides high-resolution pansharpened pseudo-natural color SPOT imagery satellites 2, 4, and 5 for Brazil circa 2008.
- SPOT 2 and 4 utilized HRV and HRVIR … brazil forest-code google multispectral satellite-imagery spot SPOT Multispectral Pseudo Natural Color Imagery 10-20m, Brazil This collection contains 2008-era "pseudo natural color" RGB images derived from the native multispectral bands of SPOT 2, 4, and 5 for Brazil.
- The data is available in both a 5-band Multispectral/Pan collection, and a … highres pansharpened planet rgb satellite-imagery skysat SPOT Multispectral Imagery 10-20m, Brazil This collection provides 2008-era raw multispectral imagery from the SPOT 2, 4, and 5 satellites over the country of Brazil.
- Each 10-meter pixel in this dataset is a 64-dimensional representation, or "embedding vector," that encodes temporal trajectories of surface conditions at and around that pixel as measured by various Earth observation … annual global google landsat-derived satellite-imagery sentinel1-derived Sentinel-1 SAR GRD: C-band Synthetic Aperture Radar Ground Range Detected, log scaling The Sentinel-1 mission provides data from a dual-polarization C-band Synthetic Aperture Radar (SAR) instrument at 5.405GHz (C band).

