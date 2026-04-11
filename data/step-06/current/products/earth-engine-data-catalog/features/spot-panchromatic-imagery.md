---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.301Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "SPOT Panchromatic Imagery"
feature_slug: "spot-panchromatic-imagery"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1"
  - "https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1"
  - "https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1"
keywords:
  - "spot"
  - "panchromatic"
  - "imagery"
  - "provides"
  - "10"
  - "for"
  - "brazil"
  - "from"
---

# SPOT Panchromatic Imagery

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Provides 5-10 m panchromatic imagery for Brazil from 2007 to 2009.

## Extended Definition

Provides 5-10 m panchromatic imagery for Brazil from 2007 to 2009.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1)
- [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1)
- [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1)

## Supporting Pages

### "SPOT Panchromatic Imagery 5-10m, Brazil \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1)
- Source ID: `site-docs-root-2`
- Final score: 266
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ImageCollection ( 'AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PAN/V1' ); var image = collection . first (); Map . centerObject ( image , 13 ); Map . addLayer ( image , { min : 0 , max : 200 }, 'Panchromatic' ); Open in Code Editor SPOT Panchromatic Imagery 5-10m, Brazil This collection contains the raw panchromatic (PAN) bands from the SPOT 2, 4, and 5 satellites for Brazil circa 2008.
- Possible values: 1A (radiometric only) product id STRING Scene identifier production date STRING Date of processing. satellite STRING Source satellite: "SPOT2", "SPOT4", or "SPOT5" satellite altitude DOUBLE Satellite orbit altitude sensor gain number DOUBLE Calibration coefficient for converting DNs to radiance for sensor sensor gain value DOUBLE Calibration coefficient for converting DNs to radiance for sensor software STRING Processing software source id STRING Dataset Sources/Source Information/SOURCE ID sun azimuth DOUBLE Sun azimuth sun elevation DOUBLE Sun elevation viewing angle DOUBLE Viewing angle P bias DOUBLE Calibration coefficient for converting DNs to radiance for panchromatic band P gain DOUBLE Calibration coefficient for converting DNs to radiance for panchromatic band P irradiance DOUBLE Per-band solar irradiance, essential for TOA reflectance calculations for panchromatic band Terms of Use Terms of Use Use of this dataset is subject to the Brazil Forest Imagery Dataset 2008 license agreement and requires the following attribution: “Google LLC, Brazil Forest Imagery Dataset 2008 created from circa 2008 SPOT images acquired by CNES's Spot World Heritage Programme.” Contains modified imagery from SPOT satellites made available by the CNES SPOT World Heritage Programme (https://regards.cnes.fr/html/swh/Home-swh3.html).
- The panchromatic sensor provides the highest native spatial resolution of the missions, capturing light across a broad visible spectrum (0.51-0.73 µm for SPOT 2, 0.61-0.68 µm for SPOT 4, and … AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PAN/V1, brazil,forest-code,google,imagery,satellite-imagery,spot 2007-01-01T00:00:00Z/2009-11-26T23:59:59Z -34 -74 6 -34 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Dataset Availability 2007-01-01T00:00:00Z–2009-11-26T23:59:59Z Dataset Producer Google/CNES Earth Engine Snippet ee.ImageCollection("AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PAN/V1") open in new Tags brazil forest-code google imagery satellite-imagery spot Description This collection contains the raw panchromatic (PAN) bands from the SPOT 2, 4, and 5 satellites for Brazil circa 2008.

### "SPOT Pansharpened Pseudo Natural Color Imagery 5-10m, Brazil \_|\_ Earth\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Filter . eq ( 'satellite' , 'SPOT5' )). first (); // Apply Google cloud mask band to the image. image = image . updateMask ( image . select ( 'cloud mask' )); Map . centerObject ( image , 12 ); Map . addLayer ( image , { bands : [ 'R' , 'G' , 'B' ], min : 0 , max : 200 }, 'Pansharpened RGB' ); Open in Code Editor SPOT Pansharpened Pseudo Natural Color Imagery 5-10m, Brazil This collection provides high-resolution pansharpened pseudo-natural color SPOT imagery satellites 2, 4, and 5 for Brazil circa 2008.
- Possible values: "accept", "reject for cloud", "reject for other", "not evaluated", or absent if QA has not been performed. percent valid pixels DOUBLE Google-added property denoting the percent of viable pixels after cloud and cloud shadow removal Terms of Use Terms of Use Use of this dataset is subject to the Brazil Forest Imagery Dataset 2008 license agreement and requires the following attribution: “Google LLC, Brazil Forest Imagery Dataset 2008 created from circa 2008 SPOT images acquired by CNES's Spot World Heritage Programme.” Contains modified imagery from SPOT satellites made available by the CNES SPOT World Heritage Programme (https://regards.cnes.fr/html/swh/Home-swh3.html).
- Dataset Availability 2007-01-01T00:00:00Z–2009-11-26T23:59:59Z Dataset Producer Google/CNES Earth Engine Snippet ee.ImageCollection("AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PMS NC/V1") open in new Tags brazil forest-code google rgb satellite-imagery spot Description This collection provides high-resolution pansharpened pseudo-natural color SPOT imagery satellites 2, 4, and 5 for Brazil circa 2008.
- This raw … AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PMS NC/V1, brazil,forest-code,google,rgb,satellite-imagery,spot 2007-01-01T00:00:00Z/2009-11-26T23:59:59Z -34 -74 6 -34 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]

### "SPOT Multispectral Imagery 10-20m, Brazil \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Dataset Availability 2007-01-01T00:00:00Z–2009-11-26T23:59:59Z Dataset Producer Google/CNES Earth Engine Snippet ee.ImageCollection("AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS/V1") open in new Tags brazil forest-code google multispectral satellite-imagery spot Description This collection provides 2008-era raw multispectral imagery from the SPOT 2, 4, and 5 satellites over the country of Brazil.
- Filter . eq ( 'system:index' , image . id ())). first (); Map . addLayer ( maskedImage , visParams , 'SPOT 5 Cloud Masked' ); Open in Code Editor SPOT Multispectral Imagery 10-20m, Brazil This collection provides 2008-era raw multispectral imagery from the SPOT 2, 4, and 5 satellites over the country of Brazil.
- Possible values: 1A (radiometric only) product id STRING Scene identifier production date STRING Date of processing. satellite STRING Source satellite: "SPOT2", "SPOT4", or "SPOT5" satellite altitude DOUBLE Satellite orbit altitude sensor gain number DOUBLE Calibration coefficient for converting DNs to radiance for sensor sensor gain value DOUBLE Calibration coefficient for converting DNs to radiance for sensor software STRING Processing software source id STRING Dataset Sources/Source Information/SOURCE ID sun azimuth DOUBLE Sun azimuth sun elevation DOUBLE Sun elevation viewing angle DOUBLE Viewing angle G bias DOUBLE Calibration coefficient for converting DNs to radiance for green band G gain DOUBLE Calibration coefficient for converting DNs to radiance for green band G irradiance DOUBLE Per-band solar irradiance, essential for TOA reflectance calculations for green band N bias DOUBLE Calibration coefficient for converting DNs to radiance for near-infrared band N gain DOUBLE Calibration coefficient for converting DNs to radiance for near-infrared band N irradiance DOUBLE Per-band solar irradiance, essential for TOA reflectance calculations for near-infrared band R bias DOUBLE Calibration coefficient for converting DNs to radiance for red band R gain DOUBLE Calibration coefficient for converting DNs to radiance for red band R irradiance DOUBLE Per-band solar irradiance, essential for TOA reflectance calculations for red band S bias DOUBLE Calibration coefficient for converting DNs to radiance for short-wave infrared band S gain DOUBLE Calibration coefficient for converting DNs to radiance for short-wave infrared band S irradiance DOUBLE Per-band solar irradiance, essential for TOA reflectance calculations for short-wave infrared band Terms of Use Terms of Use Use of this dataset is subject to the Brazil Forest Imagery Dataset 2008 license agreement and requires the following attribution: “Google LLC, Brazil Forest Imagery Dataset 2008 created from circa 2008 SPOT images acquired by CNES's Spot World Heritage Programme.” Contains modified imagery from SPOT satellites made available by the CNES SPOT World Heritage Programme (https://regards.cnes.fr/html/swh/Home-swh3.html).
- SPOT 2 and 4 utilized HRV and HRVIR "pushbroom" sensors with a 60 … AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS/V1, brazil,forest-code,google,multispectral,satellite-imagery,spot 2007-01-01T00:00:00Z/2009-11-26T23:59:59Z -34 -74 6 -34 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]

