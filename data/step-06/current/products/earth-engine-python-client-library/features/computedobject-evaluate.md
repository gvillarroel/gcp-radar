---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.817Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "ComputedObject.evaluate()"
feature_slug: "computedobject-evaluate"
latest_feature_date: "2016-06-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/client_server"
  - "https://developers.google.com/earth-engine/guides/charts_datatable"
keywords:
  - "computedobject"
  - "evaluate"
  - "evaluates"
  - "computed"
  - "object"
  - "client"
  - "side"
  - "and"
---

# ComputedObject.evaluate()

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Evaluates a computed object client-side and returns the result.

## Extended Definition

Evaluates a computed object client-side and returns the result.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/client_server](https://developers.google.com/earth-engine/guides/client_server)
- [https://developers.google.com/earth-engine/guides/charts_datatable](https://developers.google.com/earth-engine/guides/charts_datatable)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Earth Engine JavaScript Client Library 0.1.83 Feature Added computedObject.evaluate() .
- Earth Engine Python Client Library 0.1.83 Feature Added computedObject.evaluate() .
- February 09, 2021 Earth Engine Data Catalog Feature Added WorldPop/GP/100m/pop age sex : WorldPop Global Project Population Data: Estimated Age and Sex Structures of Residential Population per 100x100m Grid Square January 26, 2021 Earth Engine Data Catalog Feature Added NASA USDA/HSL/SMAP10KM soil moisture (no longer available) January 20, 2021 Earth Engine JavaScript Client Library 0.1.248 Change .evaluate() and other JavaScript functions that take callbacks will now report exceptions that occurred within callback functions to the console (or to the top level environment in Node.js).
- Breaking Rename ComputedObject.cast() to castInternal() to avoid conflict with the upcoming Image.cast() and ImageCollection.cast() .

### Client vs. Server \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/client_server](https://developers.google.com/earth-engine/guides/client_server)
- Source ID: `site-docs-root-2`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To start, consider a client-side string object (which is NOT a proxy object): Code Editor (JavaScript) var clientString = 'I am a String' ; print ( typeof clientString ); // string Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) client string = 'I am a String' print ( type ( client string )) # str Observe from the output that the client (the web browser or notebook) has interpreted this code and run it, determining that the variable is type string .
- ComputedObject ); // true Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) server string = ee .
- Page Summary outlined flag Earth Engine client libraries for Python and JavaScript translate complex geospatial analyses to Earth Engine requests, allowing code to contain a mix of client-side and server-side objects.
- To avoid client-side operations on server objects and synchronous calls to getInfo() , use server-side functions like map() for iteration and ee.Algorithms.If() for conditionals.

### DataTable Charts \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/charts_datatable](https://developers.google.com/earth-engine/guides/charts_datatable)
- Source ID: `site-docs-root-2`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data for the ui.Chart must be a client-side object, requiring the use of evaluate to transfer computed server-side objects to the client.
- A manually coded table will be inherently client-side, whereas a computed object will need to be transferred client-side using evaluate .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],["The ui.Chart function renders charts using a client-side JSON object, similar to Google Charts' DataTable.
- List ([[ { label : 'Day of year' , role : 'domain' }, { label : 'Median' , role : 'data' }, { label : 'p0' , role : 'interval' }, { label : 'p25' , role : 'interval' }, { label : 'p75' , role : 'interval' }, { label : 'p100' , role : 'interval' } ]]); // Concatenate the column header to the table. dataTableServer = columnHeader . cat ( dataTableServer ); // Use 'evaluate' to transfer the server-side table to the client, define the // chart and print it to the console. dataTableServer . evaluate ( function ( dataTableClient ) { var chart = ui .

