---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.231Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "SPOT Panchromatic Imagery"
feature_slug: "spot-panchromatic-imagery"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
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
  - "brazil"
  - "2007"
  - "2009"
---

# SPOT Panchromatic Imagery

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Provides 5-10 m panchromatic imagery for Brazil from 2007 to 2009.

## Extended Definition

Provides 5-10 m panchromatic imagery for Brazil from 2007 to 2009.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1)
- [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1)
- [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1)

## Supporting Pages

### "SPOT Panchromatic Imagery 5-10m, Brazil \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1)
- Source ID: `site-docs-root-2`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The panchromatic sensor provides the highest native spatial resolution of the missions, capturing light across a broad visible spectrum (0.51-0.73 µm for SPOT 2, 0.61-0.68 µm for SPOT 4, and … AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PAN/V1, brazil,forest-code,google,imagery,satellite-imagery,spot 2007-01-01T00:00:00Z/2009-11-26T23:59:59Z -34 -74 6 -34 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Dataset Availability 2007-01-01T00:00:00Z–2009-11-26T23:59:59Z Dataset Producer Google/CNES Earth Engine Snippet ee.ImageCollection("AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PAN/V1") open in new Tags brazil forest-code google imagery satellite-imagery spot Description This collection contains the raw panchromatic (PAN) bands from the SPOT 2, 4, and 5 satellites for Brazil circa 2008.
- ImageCollection ( 'AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PAN/V1' ); var image = collection . first (); Map . centerObject ( image , 13 ); Map . addLayer ( image , { min : 0 , max : 200 }, 'Panchromatic' ); Open in Code Editor SPOT Panchromatic Imagery 5-10m, Brazil This collection contains the raw panchromatic (PAN) bands from the SPOT 2, 4, and 5 satellites for Brazil circa 2008.
- Possible values: 1A (radiometric only) product id STRING Scene identifier production date STRING Date of processing. satellite STRING Source satellite: "SPOT2", "SPOT4", or "SPOT5" satellite altitude DOUBLE Satellite orbit altitude sensor gain number DOUBLE Calibration coefficient for converting DNs to radiance for sensor sensor gain value DOUBLE Calibration coefficient for converting DNs to radiance for sensor software STRING Processing software source id STRING Dataset Sources/Source Information/SOURCE ID sun azimuth DOUBLE Sun azimuth sun elevation DOUBLE Sun elevation viewing angle DOUBLE Viewing angle P bias DOUBLE Calibration coefficient for converting DNs to radiance for panchromatic band P gain DOUBLE Calibration coefficient for converting DNs to radiance for panchromatic band P irradiance DOUBLE Per-band solar irradiance, essential for TOA reflectance calculations for panchromatic band Terms of Use Terms of Use Use of this dataset is subject to the Brazil Forest Imagery Dataset 2008 license agreement and requires the following attribution: “Google LLC, Brazil Forest Imagery Dataset 2008 created from circa 2008 SPOT images acquired by CNES's Spot World Heritage Programme.” Contains modified imagery from SPOT satellites made available by the CNES SPOT World Heritage Programme (https://regards.cnes.fr/html/swh/Home-swh3.html).

### "SPOT Pansharpened Pseudo Natural Color Imagery 5-10m, Brazil \_|\_ Earth\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1)
- Source ID: `site-docs-root-2`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataset Availability 2007-01-01T00:00:00Z–2009-11-26T23:59:59Z Dataset Producer Google/CNES Earth Engine Snippet ee.ImageCollection("AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PMS NC/V1") open in new Tags brazil forest-code google rgb satellite-imagery spot Description This collection provides high-resolution pansharpened pseudo-natural color SPOT imagery satellites 2, 4, and 5 for Brazil circa 2008.
- This raw … AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PMS NC/V1, brazil,forest-code,google,rgb,satellite-imagery,spot 2007-01-01T00:00:00Z/2009-11-26T23:59:59Z -34 -74 6 -34 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Filter . eq ( 'satellite' , 'SPOT5' )). first (); // Apply Google cloud mask band to the image. image = image . updateMask ( image . select ( 'cloud mask' )); Map . centerObject ( image , 12 ); Map . addLayer ( image , { bands : [ 'R' , 'G' , 'B' ], min : 0 , max : 200 }, 'Pansharpened RGB' ); Open in Code Editor SPOT Pansharpened Pseudo Natural Color Imagery 5-10m, Brazil This collection provides high-resolution pansharpened pseudo-natural color SPOT imagery satellites 2, 4, and 5 for Brazil circa 2008.
- ImageCollection ( 'AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PMS NC/V1' ); var image = collection . filter ( ee .

### "SPOT Multispectral Imagery 10-20m, Brazil \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1)
- Source ID: `site-docs-root-2`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataset Availability 2007-01-01T00:00:00Z–2009-11-26T23:59:59Z Dataset Producer Google/CNES Earth Engine Snippet ee.ImageCollection("AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS/V1") open in new Tags brazil forest-code google multispectral satellite-imagery spot Description This collection provides 2008-era raw multispectral imagery from the SPOT 2, 4, and 5 satellites over the country of Brazil.
- SPOT 2 and 4 utilized HRV and HRVIR "pushbroom" sensors with a 60 … AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS/V1, brazil,forest-code,google,multispectral,satellite-imagery,spot 2007-01-01T00:00:00Z/2009-11-26T23:59:59Z -34 -74 6 -34 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- ImageCollection ( 'AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS NC/V1' ); // Merge the mask band into the MS collection. var msWithMaskCol = msCol . linkCollection ( maskCol , [ 'cloud mask' ]); // Function to apply the mask and remove the mask band from the output var maskClouds = function ( img ) { var mask = img . select ( 'cloud mask' ); // Identify bands to keep (everything except the cloud mask itself). var bandsToKeep = img . bandNames (). removeAll ([ 'cloud mask' ]); return img . updateMask ( mask ). select ( bandsToKeep ); }; // Map the function over the collection. var maskedCol = msWithMaskCol . map ( maskClouds ); // Get the same image but with the cloud mask applied. var maskedImage = maskedCol . filter ( ee .
- Filter . eq ( 'system:index' , image . id ())). first (); Map . addLayer ( maskedImage , visParams , 'SPOT 5 Cloud Masked' ); Open in Code Editor SPOT Multispectral Imagery 10-20m, Brazil This collection provides 2008-era raw multispectral imagery from the SPOT 2, 4, and 5 satellites over the country of Brazil.

