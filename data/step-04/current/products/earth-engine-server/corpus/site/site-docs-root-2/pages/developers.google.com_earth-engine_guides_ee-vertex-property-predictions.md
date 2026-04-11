---
title: "Property Predictions \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/ee-vertex-property-predictions
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides
source_metadata:
  url: https://developers.google.com/earth-engine/guides/ee-vertex-property-predictions
  title: "Property Predictions \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
Property Predictions
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Use model.predictProperties() to make predictions on an ee.FeatureCollection , where each Feature is a data point and each property is a model input feature, with model outputs represented as new properties.
The inputProperties argument allows you to explicitly specify which properties to send to your hosted model.
The inputTypeOverride dictionary is used to provide explicit type and dimension information for specific input properties, which can be necessary for outputs from Earth Engine algorithms with dynamic types.
The outputProperties argument is a map used to define the expected output property names and their corresponding type and dimension information.
Use model.predictProperties() to make predictions on an
ee.FeatureCollection . Each Feature is a data point, and each property is a
model input feature The inputs and outputs can be scalar string values,
scalar boolean values, or numeric values of any shape, from scalars to
multidimensional arrays. The outputs of the model are represented as new
properties in the output table.
Input and Outputs
To control the inputs and outputs of the model use the following arguments:
inputProperties
Set input properties to the list of properties you explicitly want to send do
your hosted model.
inputTypeOverride
inputTypeOverride is a dictionary of property names with specific type and
dimension information provided. This might be necessary because many Earth
Engine algorithms create outputs with dynamic types that cannot be inferred
until runtime.
For example we may compute a value "slope" by mapping the ee.Terrain.slope
function over a collection we may need to specify the output type of "slope" in
our inference inputs like so:
inputTypeOverride = {
"slope" : {
"type" : "PixelType" ,
"precision" : "float" ,
"dimensions" : 0 ,
"min" : - 100.0 ,
"max" : 100.0
}
}
TIP: You may occasionally encounter the error message that a property "cannot be
converted to a tensor". The likely solution is to use a type override to force
the input to a given type.
outputProperties
A map from output property names to a dictionary of output property info. Valid
property info fields are 'type' and 'dimensions'. 'type' should be a
ee.PixelType describing the output property, and 'dimensions' is an optional
integer with the number of dimensions for that property if it is an array. For
example, given an 1D array property "p" specify the following output
property:
outputProperties = {
"p" : {
"type" : ee . PixelType . int8 (),
"dimensions" : 1
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-01 UTC."],[],[]]
