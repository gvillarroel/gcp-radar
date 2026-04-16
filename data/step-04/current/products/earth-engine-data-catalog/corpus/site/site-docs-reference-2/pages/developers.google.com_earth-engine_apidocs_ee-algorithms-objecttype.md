---
title: "ee.Algorithms.ObjectType \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-objecttype
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs/ee-data-computefeatures
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-objecttype
  title: "ee.Algorithms.ObjectType \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
ee.Algorithms.ObjectType
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The ee.Algorithms.ObjectType() function returns a string representing the type of a given object.
This function can be used to determine the type of various Earth Engine objects including numbers, strings, lists, and even properties of features.
The function takes a single argument, value , which is the object whose type is to be determined.
Examples demonstrate its usage in both JavaScript and Python.
Returns a string representing the type of the given object.
Usage Returns ee.Algorithms.ObjectType( value ) String Argument Type Details value Object, default: null The object to get the type of.
Examples
Code Editor (JavaScript)
print ( ee . Algorithms . ObjectType ( 1 )); // The string "Integer"
print ( ee . Algorithms . ObjectType ( ee . Number ( 1 ))); // The string "Integer"
print ( ee . Algorithms . ObjectType ( ee . String ( 'a string' ))); // The string "String"
print ( ee . Algorithms . ObjectType ( ee . List ([ 1 , 'a string' ]))); // The string "List"
// ee.Algorithms.ObjectType can be used to get the type of properties
// of ee.Image or ee.Feature objects.
var feature = ee . Feature (
null , // No need for geometry in this example.
{
'int' : 42 ,
'int8' : ee . Number ( - 3 ). int8 (),
});
// The string "Integer"
print ( 'int:' , ee . Algorithms . ObjectType ( feature . get ( 'int' )));
// The string "Long"
print ( 'int8:' , ee . Algorithms . ObjectType ( feature . get ( 'int8' )));
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
display ( ee . Algorithms . ObjectType ( ee . Number ( 1 ))) # The string "Integer"
display ( ee . Algorithms . ObjectType ( ee . String ( 'a string' ))) # The string "String"
display ( ee . Algorithms . ObjectType ( ee . List ([ 1 , 'a string' ]))) # The string "List"
# ee.Algorithms.ObjectType can be used to get the type of properties
# of ee.Image or ee.Feature objects.
feature = ee . Feature (
None , # No need for geometry in this example.
{
'int' : 42 ,
'int8' : ee . Number ( - 3 ) . int8 (),
}
)
# The string "Integer"
display ( 'int:' , ee . Algorithms . ObjectType ( feature . get ( 'int' )))
# The string "Long"
display ( 'int8:' , ee . Algorithms . ObjectType ( feature . get ( 'int8' )))
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2023-10-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],["`ee.Algorithms.ObjectType(value)` determines the data type of an object, returning it as a string. The function accepts an object as input (`value`). It can identify types like \"Integer,\" \"String,\" and \"List.\" It's also applicable to properties within `ee.Image` or `ee.Feature` objects, such as retrieving the type of a feature's integer attribute, which is \"Integer\" or retrieving the type of a feature's `int8` attribute which is \"Long\".\n"]]
