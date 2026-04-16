---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.575Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Task Manager output URLs"
feature_slug: "task-manager-output-urls"
latest_feature_date: "2021-11-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/getstarted"
  - "https://developers.google.com/earth-engine/guides/command_line"
keywords:
  - "exported"
  - "output"
  - "urls"
  - "list"
  - "includes"
  - "manager"
  - "task"
---

# Task Manager output URLs

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The Task Manager now includes an Output URLs list for exported tiled overlays and Maps JavaScript API use.

## Extended Definition

The Task Manager now includes an Output URLs list for exported tiled overlays and Maps JavaScript API use.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)

## Supporting Pages

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Code Editor includes essential elements such as a JavaScript editor, map display, API reference, Script Manager, Console output, Task Manager, interactive map query, search tool, and geometry drawing tools.
- The Code Editor has the following elements (illustrated in Figure 1): JavaScript code editor Map display for visualizing geospatial datasets API reference documentation (Docs tab) Git -based Script Manager (Scripts tab) Console output (Console tab) Task Manager (Tasks tab) to handle long-running queries Interactive map query (Inspector tab) Search of the data archive or saved scripts Geometry drawing tools Figure 1.
- Interactive tools like the Layer Manager, Inspector tab, Console, and Profiler help with visualizing data, querying map layers, viewing output, and diagnosing script performance issues.
- You can share scripts via unique URLs, view example scripts, manage your scripts with version history in the Script Manager, and create modular code using exports and require .

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The right panel has an inspector for querying the map, an output console, and a manager for long-running tasks.
- Map . centerObject ( image , 9 ); Map . addLayer ( image , vizParams , 'Landsat 8 false color' ); Observe that the visualization parameters are defined by an object literal, which includes a list of bands to display, a minimum and maximum reflectance value, and a gamma value. (Learn more about Landsat bands here .
- The lowercase image means that a variable named image refers to an instance of the ee.Image class. 'Hello world!' JavaScript Printing out information to the console is a basic task for getting information about an object, displaying the numeric result of a computation, displaying object metadata or helping with debugging.
- Point ( - 122.262 , 37.8719 )) . filterDate ( '2014-06-01' , '2014-10-01' ); // Map the function over the collection. var ndviCollection = collection . map ( addNDVI ); Another common task is adding a new property (or 'attribute' or 'field') to features in a FeatureCollection .

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key actions include: authenticate to sign in; acl to manage asset access; asset to view/edit asset metadata; cp/mv to copy/move assets; create to make folders/collections; ls to list contents; model prepare for TensorFlow model transformation; project config to configure project settings; rm to delete assets; set project to set the default cloud project; task to manage long running tasks; and upload to add images or tables from Google Cloud Storage.\n"]]
- The following settings can be configured: max concurrent exports , to control the project's maximum batch task parallelism requires the correct permissions For example, to configure a project to only ever allow 10 tasks to run in parallel for the given project: earthengine alpha project config set --max concurrent exports=10 The output displays the updated project configuration, identical to what get returns.
- Before using this command, be sure to set a project using set project . get To view a project configuration, use the get sub-command: earthengine alpha project config get If you have permission to view the project's batch task settings , the output contains: maxConcurrentExports : a number indicating the maximum number of batch tasks that can run in parallel across all users for the given project.
- Additionally, if you have permission to view the plan configuration , the output contains: planMaxConcurrentExports , a number indicating the maximum number of batch tasks that can run in parallel across all users and projects that use the billing account. set To update the project's configuration, use the set sub-command.

