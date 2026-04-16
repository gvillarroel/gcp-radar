---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.585Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Run With Profiler"
feature_slug: "run-with-profiler"
latest_feature_date: "2019-01-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/guides/computation_overview"
  - "https://developers.google.com/earth-engine/guides/debugging"
keywords:
  - "profiling"
  - "added"
  - "profiler"
  - "option"
  - "script"
---

# Run With Profiler

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The Code Editor added a Run With Profiler option for profiling script execution.

## Extended Definition

The Code Editor added a Run With Profiler option for profiling script execution.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/guides/computation_overview](https://developers.google.com/earth-engine/guides/computation_overview)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)

## Supporting Pages

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Saved script links Saved scripts have an option to share a link that will always load the most recent saved version and is only accessible by you and others with current access to the repository containing the script.
- Upon visiting the URL, the referenced file and its repo will be added to either the Reader or Writer directory on the Scripts tab , depending on your permission level for the shared repo.
- Interactive tools like the Layer Manager, Inspector tab, Console, and Profiler help with visualizing data, querying map layers, viewing output, and diagnosing script performance issues.
- Additionally, a dialog box will appear providing options to control the execution of the shared script, along with buttons to copy and visit the generated link.

### Computation Overview \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/computation_overview](https://developers.google.com/earth-engine/guides/computation_overview)
- Source ID: `site-docs-root-2`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Each row in the profiler output corresponds to an algorithm, computation, asset load or overhead operation as described in the 'Description' column.
- The columns in the profiler are: Description A textual description of the computation, algorithm, asset load or overhead operation being profiled.
- Python Include the following code in your Python script to enable the profiler: with ee . profilePrinting (): print ( ee .
- Profiler The profiler provides information about EECU-time and memory usage (per algorithm and asset) resulting from the computation performed while it's enabled.

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root-2`
- Final score: 83
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the second case, adding nonsense to the map, the cryptic g.eeObject.name is not a function error is displayed in the JavaScript Code Editor because the object being added to the map, nonsense , is a string, not an EE object (in Python a TypeError is thrown).
- For long-running or inefficient scripts, the entries at the top of the profiler provide clues about where to focus efforts to optimize the script.
- Important note: the profiler itself influences the performance of the script, so you should only run it when necessary.
- Code Editor (JavaScript) s2image = s2image . set ( 'myProperty' , 'OK' ); print ( s2image . get ( 'myProperty' )); // OK Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) s2image = s2image . set ( 'my property' , 'OK' ) display ( s2image . get ( 'my property' )) # OK Mapped functions Another context in which client and server functions don't mix is in mapped functions.

