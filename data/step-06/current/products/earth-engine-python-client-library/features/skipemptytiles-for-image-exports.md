---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.817Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "skipEmptyTiles for image exports"
feature_slug: "skipemptytiles-for-image-exports"
latest_feature_date: "2017-03-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions"
  - "https://developers.google.com/earth-engine/guides/playground"
keywords:
  - "skipemptytiles"
  - "for"
  - "image"
  - "exports"
  - "skips"
  - "generating"
  - "empty"
  - "tiles"
---

# skipEmptyTiles for image exports

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Skips generating empty image tiles during exports to Drive or Cloud Storage.

## Extended Definition

Skips generating empty image tiles during exports to Drive or Cloud Storage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- March 14, 2017 Earth Engine Data Catalog Feature Added MODIS/006/MOD13Q1 (no longer available) Added MODIS/006/MYD13Q1 (no longer available) March 07, 2017 Earth Engine Data Catalog Feature Added NOAA/CDR/AVHRR/AOT/V3 (no longer available) March 02, 2017 Earth Engine JavaScript Client Library 0.1.106 Feature Added a skipEmptyTiles option to Export.image.toDrive() and Export.image.toCloudStorage() to skip generating empty (i.e. fully-masked) image tiles.
- Earth Engine Python Client Library 0.1.106 Feature Added a skipEmptyTiles option to Export.image.toDrive() and Export.image.toCloudStorage() to skip generating empty (i.e. fully-masked) image tiles.
- July 10, 2024 Earth Engine Server Fixed Fixed a bug that caused GeoTIFF exports to ignore skipEmptyTiles if formatOptions.cloudOptimized was true.
- Earth Engine Server Fixed Clarified skipEmptyTiles parameter default values for Map exports in Python.

### Image Predictions \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)
- Source ID: `site-docs-root-2`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Input options for predictImage() include parameters to specify input bands/properties ( inputProperties , inputTypeOverride , inputShapes ) and control image tiling ( inputTileSize , inputOverlapSize , outputTileSize ). outputBands allows specifying the pixel type and dimensions of the output bands from the prediction.
- Note: Earth Engine will always forward each band in the input Image as a 3D (inputTileSize[0], inputTileSize[1], 1) shaped tensor, even if the band's values are scalar.
- Page Summary outlined flag Earth Engine's ee.Model connects to Vertex AI to send image or table data for online predictions, returning results as Earth Engine images or tables. model.predictImage() is used to perform inference on an ee.Image by sending image patches to a hosted model, with the output being an ee.Image .
- PixelType . float (), 'dimensions' : 1 } } Tile Sizes You control how the image is tiled using the following parameters: inputTileSize inputOverlapSize outputTileSize Input Tile Sizes To set input tile sizes use inputTileSize and inputOverlapSize .

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Click the button on the right of the tool (which performs a Custom stretch to the supplied min and max range by default) to linearly stretch the display to either percentiles or standard deviations of image values in the display window.
- Scripts you develop in the Code Editor are sent to Google for processing and the generated map tiles and/or messages are sent back for display in the Map and/or Console tab.
- Get link The "Get Link" button at the top of the Code Editor (Figure 4) provides an interface for generating script URLs and setting script behavior options.
- For exports, each call to an Export function in the Code Editor will populate an entry in the Unsubmitted tasks section of the Tasks tab.

