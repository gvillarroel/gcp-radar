---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:56.812Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "opt_ keyword parameters"
feature_slug: "opt-keyword-parameters"
latest_feature_date: "2023-12-08"
deprecation_date: "2023-12-08"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/python_install"
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/app_engine_intro"
keywords:
  - "parameters"
  - "preserving"
  - "backwards"
  - "keyword"
  - "removes"
  - "prefix"
  - "while"
---

# opt_ keyword parameters

Product: Earth Engine Python Client Library
Coverage: MEDIUM

## Step 02 Summary

Removes the opt_ keyword prefix from parameters while preserving backwards compatibility for existing scripts; deprecated on 2023-12-08.

## Extended Definition

Removes the opt_ keyword prefix from parameters while preserving backwards compatibility for existing scripts; deprecated on 2023-12-08.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro)

## Supporting Pages

### Python Installation | Google Earth Engine | Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/python_install](https://developers.google.com/earth-engine/guides/python_install)
- Source ID: `site-docs-reference-required-5-http`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Not ( that ) Multi-line method chain var foo = my . really () . reallyLong () . methodChain (); foo = ( my . really () . reallyLong () . methodChain ()) Dictionary keys var dic = { 'key' : value }; var dic = { key : value }; dic = { 'key' : value } Dictionary object access var value = dic . key ; var value = dic [ 'key' ]; value = dic [ 'key' ] Function argument definition // Positional arguments. var foo = fun ( argX , argY , argZ ); // Keyword arguments object. var foo = fun ({ y : argY }); # Positional arguments. foo = fun ( arg_x , arg_y , arg_z ) # Keyword arguments dictionary. foo = fun ( ** { 'y' : arg_y }) # Keyword arguments. foo = fun ( x = arg_x , z = arg_z ) Boolean var t = true ; var f = false ; t = True f = False Null values var na = null ; na = None Comment // # Notes regarding Python API syntax: Anonymous function mapping is achieved via lambda functions, which accept only a single expression.
- Export . image . toDrive ( image = my_image , # an ee.Image object. region = my_geometry , # an ee.Geometry object. description = 'mock_export' , folder = 'gdrive_folder' , fileNamePrefix = 'mock_export' , scale = 1000 , crs = 'EPSG:4326' ) Start an export task: task . start () Check export task status: task . status () The result of task.status() is a dictionary containing information such as the state of the task and its ID. { 'state' : 'READY' , 'description' : 'my_export_task' , 'creation_timestamp_ms' : 1647567508236 , 'update_timestamp_ms' : 1647567508236 , 'start_timestamp_ms' : 0 , 'task_type' : 'EXPORT_IMAGE' , 'id' : '56TVJIZABUMTD5CJ5YHTMYK4' , 'name' : 'projects/earthengine-legacy/operations/56TVJIZABUMTX5CJ5HHTMYK4' } You can monitor task progress using the state field.
- Function arguments provided as a keyword arguments dictionary must be specified as **kwargs ; i.e., prepend two asterisks to the function input dictionary: y = fun(**{'x': 0}) or y = fun(**arg_dict) .
- Libraries such as geemap , Folium , and ipyleaflet provide interactive map display, while charting can be done with Matplotlib , Altair , or seaborn , to name a few.

### Debugging guide | Google Earth Engine | Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-reference-required-6-http`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Each type of error is discussed in the following sections, following a brief aside about reduceRegion() , a commonly used function that is notorious for being able to cause every type of scaling error. reduceRegion() Although reduceRegion() greedily consumes enough pixels to trigger an exciting variety of errors, there are also parameters intended to control the computation, so you can overcome the errors.
- Number ( dictionary . get ( 'B5' )) . divide ( dictionary . get ( 'B4' ))} ) no_problem = some_features . filterBounds ( image . geometry ()) . map ( function_to_map ) display ( no_problem ) Profiler The profiler provides information about EECU-time and memory usage (per algorithm and asset) resulting from the computation performed while it's enabled.
- Avoid both for-loops and getInfo() while working in the Code Editor.
- See the reduceRegion() page for more details about these parameters.

### App Engine & Earth Engine Overview | Google Earth Engine | Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro)
- Source ID: `site-docs-root-2-http`
- Final score: 34
- Re-rank relevance: N/A

