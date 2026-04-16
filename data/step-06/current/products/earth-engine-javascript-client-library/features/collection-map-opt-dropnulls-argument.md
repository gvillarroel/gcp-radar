---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.989Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "Collection.map() opt_dropNulls argument"
feature_slug: "collection-map-opt-dropnulls-argument"
latest_feature_date: "2015-06-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-collection"
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-date"
keywords:
  - "collection"
  - "map"
  - "opt"
  - "dropnulls"
  - "argument"
  - "can"
  - "drop"
  - "null"
---

# Collection.map() opt_dropNulls argument

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

Collection.map() can drop null results with an opt_dropNulls argument.

## Extended Definition

Collection.map() can drop null results with an opt_dropNulls argument.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-collection](https://developers.google.com/earth-engine/apidocs/ee-algorithms-collection)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-date](https://developers.google.com/earth-engine/apidocs/ee-algorithms-date)

## Supporting Pages

### ee.Algorithms.Collection \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-collection](https://developers.google.com/earth-engine/apidocs/ee-algorithms-collection)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Usage Returns ee.Algorithms.Collection(features) FeatureCollection Argument Type Details features List The features comprising the collection.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.Collection Stay organized with collections Save and categorize content based on your preferences.
- Returns a Collection containing the specified features.

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- You may specify --max items number (or -m for short) to limit the number of items from each folder or collection you list: earthengine ls -m 10 projects/my-project/assets/my large collection Running the ls command with no arguments will list the top-level folders that you own. model Tool with which to manipulate TensorFlow saved models. model prepare Prepare a saved model for serving in Earth Engine.
- They may or may not be necessary, depending on your shell and platform.) To delete a property, set it to null without a type: earthengine asset set -p name=null projects/my-project/assets/asset id Date properties are just numbers that represent a number of milliseconds since the Unix epoch ( i.e. midnight on January 1st, 1970) and may be specified directly as a number or in one of the following formats: YYYY-MM-DD YYYY-MM-DDThh:mm:ss YYYY-MM-DDThh:mm:ss.f The time zone is assumed to be UTC.
- Key actions include: authenticate to sign in; acl to manage asset access; asset to view/edit asset metadata; cp/mv to copy/move assets; create to make folders/collections; ls to list contents; model prepare for TensorFlow model transformation; project config to configure project settings; rm to delete assets; set project to set the default cloud project; task to manage long running tasks; and upload to add images or tables from Google Cloud Storage.\n"]]
- Example: earthengine create folder projects/my-project/assets/folder id earthengine create collection projects/my-project/assets/collection id Use the folder sub-command to create folders and the collection to create image collections.

### ee.Algorithms.Date \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-date](https://developers.google.com/earth-engine/apidocs/ee-algorithms-date)
- Source ID: `site-docs-reference`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Usage Returns ee.Algorithms.Date(value, timeZone ) Date Argument Type Details value Object A number (interpreted as milliseconds since 1970-01-01T00:00:00Z), or string such as '1996-01-01' or '1996-001' or '1996-01-01T08:00'. timeZone String, default: null The time zone (e.g., 'America/Los Angeles'); defaults to UTC.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.Date Stay organized with collections Save and categorize content based on your preferences.
- An optional timeZone argument (defaulting to UTC) specifies the time zone for the date, using names like 'America/Los Angeles'.

