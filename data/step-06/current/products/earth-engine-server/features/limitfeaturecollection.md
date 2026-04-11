---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.459Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "LimitFeatureCollection"
feature_slug: "limitfeaturecollection"
latest_feature_date: "2013-01-31"
deprecation_date: "2013-01-31"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/command_line"
keywords:
  - "limitfeaturecollection"
  - "renamed"
  - "to"
  - "collection"
  - "limit"
  - "for"
  - "limiting"
  - "collections"
---

# LimitFeatureCollection

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Renamed to Collection.limit for limiting feature collections; deprecated on 2013-01-31.

## Extended Definition

Renamed to Collection.limit for limiting feature collections; deprecated on 2013-01-31.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Note that some parameters needed to be renamed after removing opt since they conflict with Python keywords: ee.Collection.limit() : opt property was converted to prop ee.Image.expression() : opt map was converted to map ee.Filter() : opt filter which was converted to filter Feature Added Export.classifier.toAsset and ee.Classifier.load for exporting and loading saved ee.Classifier.smileCart and ee.Classifier.smileRandomForest classifiers.
- Deprecated Renamed LimitFeatureCollection() to Collection.limit() .
- November 24, 2015 Earth Engine Data Catalog Feature Added NOAA/PERSIANN-CDR : PERSIANN-CDR: Precipitation Estimation From Remotely Sensed Information Using Artificial Neural Networks-Climate Data Record November 19, 2015 Earth Engine Code Editor Feature Added support for creating and sharing ImageCollection assets, and for adding and removing Image assets to and from those collections.
- April 15, 2014 Earth Engine Data Catalog Feature Added NASA/NLDAS/FORA0125 H002 : NLDAS-2: North American Land Data Assimilation System Forcing Fields April 14, 2014 Earth Engine Server Feature Added collection.flatten() to flatten collections of collections.

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Filter . eq ( 'BIOME NAME' , 'Tropical & Subtropical Moist Broadleaf Forests' )); Map . addLayer ( complexCollection , {}, 'complexCollection' ); var clippedTheRightWay = image . select ( 'AVE' ) . clipToCollection ( complexCollection ); Map . addLayer ( clippedTheRightWay , {}, 'clippedTheRightWay' , false ); Do NOT use featureCollection.geometry() or featureCollection.union() on large and/or complex collections, which can be more memory intensive.
- Use filter() or limit() instead of converting collections to lists unnecessarily, as this can cause errors.
- Polygon ( [[[ - 48.86726050085349 , - 3.0475996402515717 ], [ - 48.86726050085349 , - 3.9248707849303295 ], [ - 47.46101050085349 , - 3.9248707849303295 ], [ - 47.46101050085349 , - 3.0475996402515717 ]]], null , false ); // Forest loss in 2016, to stratify a sample. var loss = image . select ( 'lossyear' ); var loss16 = loss . eq ( 16 ). rename ( 'loss16' ); // Scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . updateMask ( qaMask ); } var collection = ee .
- FeatureCollection ( 'projects/google/demo landcover labels' ); // Increase the data a little bit, possibly introducing noise. labels = labels . map ( function ( f ) { return f . buffer ( 100 , 10 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var data = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); // Add a column of uniform random numbers called 'random'. data = data . randomColumn (); // Partition into training and testing. var training = data . filter ( ee .

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key actions include: authenticate to sign in; acl to manage asset access; asset to view/edit asset metadata; cp/mv to copy/move assets; create to make folders/collections; ls to list contents; model prepare for TensorFlow model transformation; project config to configure project settings; rm to delete assets; set project to set the default cloud project; task to manage long running tasks; and upload to add images or tables from Google Cloud Storage.\n"]]
- You may specify --max items number (or -m for short) to limit the number of items from each folder or collection you list: earthengine ls -m 10 projects/my-project/assets/my large collection Running the ls command with no arguments will list the top-level folders that you own. model Tool with which to manipulate TensorFlow saved models. model prepare Prepare a saved model for serving in Earth Engine.
- Example: earthengine create folder projects/my-project/assets/folder id earthengine create collection projects/my-project/assets/collection id Use the folder sub-command to create folders and the collection to create image collections.
- Home Products Google Earth Engine Reference Send feedback Command Line Tool Stay organized with collections Save and categorize content based on your preferences.

