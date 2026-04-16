---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.029Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Workload tag API"
feature_slug: "workload-tag-api"
latest_feature_date: "2022-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/cost_controls"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/playground"
keywords:
  - "workload"
  - "tag"
  - "labels"
  - "computations"
  - "exports"
  - "visible"
  - "console"
---

# Workload tag API

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

This API labels computations and exports with a workload tag that is visible in Google Cloud Console.

## Extended Definition

This API labels computations and exports with a workload tag that is visible in Google Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/cost_controls](https://developers.google.com/earth-engine/guides/cost_controls)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)

## Supporting Pages

### Cost controls \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/cost_controls](https://developers.google.com/earth-engine/guides/cost_controls)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Returned error messages After you set a daily limit, Earth Engine returns the following error message when you exceed it: Your usage exceeded the custom quota for 'earthengine.googleapis.com/daily eecu usage time', which is adjustable by your administrator in the Google Cloud console: https://console.cloud.google.com/quotas/?project= .
- Fine-grained monitoring and alerting If you need to control and monitor costs at a finer-grain than the daily limit , the following recipes require more set-up but enable alerting and cancelation at the workload tag and batch task level.
- Recipe: Chat notification for workload tag usage This example shows how to wire up a chat notification (e.g., a Google Chat message or a Slack message) if the Earth Engine compute usage for a given workload tag exceeds a threshold.
- Recipe: Get email alerts for total in-progress EECU-time Follow the recipe for chat notifications, but make two changes: Skip the step for adding a workload tag filter, so that you can see all values.

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Notice the end of the following two URLs, the first sets the debug variable as false and the second sets it as true ; visit both links and notice that the debug checkbox in the console is not checked in the first, and is checked in the second, changing the behavior of each script. https :// code . earthengine . google . com / 5695887aad76979388a723a85339fbf2 # debug = false ; https :// code . earthengine . google . com / 5695887aad76979388a723a85339fbf2 # debug = true ; This feature can be used to set map zoom and center, as well as other behaviors you might want to customize when sending links to particular people or groups.
- The Code Editor has the following elements (illustrated in Figure 1): JavaScript code editor Map display for visualizing geospatial datasets API reference documentation (Docs tab) Git -based Script Manager (Scripts tab) Console output (Console tab) Task Manager (Tasks tab) to handle long-running queries Interactive map query (Inspector tab) Search of the data archive or saved scripts Geometry drawing tools Figure 1.
- JavaScript editor The JavaScript editor will: Format and highlight code as you type Underline code with problems, offer fixes and other hints for correct syntax Autocomplete pairs of quotes, brackets and parentheses Offer code completion hints for Earth Engine functions Above the code editor are buttons for running the script, saving the script, resetting the output map and console, and getting a link to the script.
- It also contains a bar object representing the current date. @module Modules/FooModule / / Returns a greeting string. @param {ee.String} arg The name to which the greeting should be addressed @return {ee.String} The complete greeting. / exports . foo = function ( arg ) { return 'Hello, ' + arg + '!

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 'projects/google/Logistic regression stack 0b8023b0af6c1b0ac7b5be649b54db06' ); // Take a very small sample first, to debug. var testSample = exportedStack . addBands ( loss16 ). stratifiedSample ({ numPoints : 1 , classBand : 'loss16' , region : testRegion , scale : 30 , geometries : true }); print ( testSample ); // Check this in the console. // Take a large sample. var sample = exportedStack . addBands ( loss16 ). stratifiedSample ({ numPoints : 10000 , classBand : 'loss16' , region : geometry , scale : 30 , }); // Export the large sample...
- FeatureCollection ( 'projects/google/demo landcover labels' ); // Increase the data a little bit, possibly introducing noise. labels = labels . map ( function ( f ) { return f . buffer ( 100 , 10 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var data = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); // Add a column of uniform random numbers called 'random'. data = data . randomColumn (); // Partition into training and testing. var training = data . filter ( ee .
- Don't do this: labels = labels . map ( function ( f ) { return f . buffer ( 100000 , 1000 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var training = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); var classifier = ee .
- This is because the timeouts are longer and the allowable memory footprint is larger when running in the batch system (where exports run). (There are other approaches you may want to try first as detailed in the debugging doc ).

