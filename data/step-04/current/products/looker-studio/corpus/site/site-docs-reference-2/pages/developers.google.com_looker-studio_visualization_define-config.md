---
title: "Defining the visualization config \_|\_ Community Visualizations \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/looker-studio/visualization/define-config
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/looker-studio/visualization
source_metadata:
  url: https://developers.google.com/looker-studio/visualization/define-config
  title: "Defining the visualization config \_|\_ Community Visualizations \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Visualizations
Defining the visualization config
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Community Visualization feature is currently in Developer Preview and utilizes a JSON config to define data and style options.
Data configuration specifies the dimensions and metrics the visualization can handle, allowing developers to control the input fields available to end-users.
Style configuration determines the appearance of the visualization by defining customizable style selectors within the property panel, offering flexibility in visual representation.
Interaction and features configurations allow developers to define optional behavior like filtering and enable or disable specific features of the visualization, enhancing its functionality and user experience.
To get started with creating a Community Visualization, you can refer to the provided documentation for guidance on writing the visualization and configuring the JSON file.
Note: The Community Visualization feature is in "Developer Preview". To learn
more about upcoming features and improvements during this period visit the
Developer Preview page.
Data and style options for a community visualization are defined in a config
JSON. The data configuration sets the number of dimensions and metrics the
visualization supports. The style configuration defines the style selectors
available in the property panel.
Data configuration
The data configuration defines the DIMENSION and METRIC elements that Looker
Studio renders in the property panel. Each element corresponds to dimension and
element fields that the end user provides as inputs to the visualization.
Sample data element:
{
"id" : "twoDimensionsPlease" ,
"label" : "Dimension Element Heading" ,
"type" : "DIMENSION" ,
"options" : {
"min" : 2 ,
"max" : 2 ,
}
}
The id you define in the data element is included in the information that
Looker Studio responds with. The label defines the text users see above the
data section, and the type defines whether it is a dimension or metric. The
options object defines the minimum and maximum number of fields a user can add
to the data element.
In a DIMENSION data element, the options object supports an optional
supportedTypes key. If defined, Looker Studio constrains the type of dimension
fields that can be added to the element. The value of supportedTypes is an
array that can contain any combination of "DEFAULT", "TIME", and "GEO".
A data section groups multiple data elements together. Looker Studio renders the
label as a heading for multiple data elements.
Sample data section:
{
"id" : "dimensionSection1" ,
"label" : "Dimension Section Heading" ,
"elements" : [
// array of data elements
]
}
This screenshot shows how Looker Studio renders the data section and data
element above:
Style configuration
The style configuration defines the style selectors that are rendered in the
property panel.
A sample style element:
{
"id" : "linkOpacity" ,
"label" : "Link opacity" ,
"type" : "OPACITY" ,
"defaultValue" : "0.2"
}
The label defines the text that users see as a tooltip, and the type defines
the kind of style selector that Looker Studio renders. Optionally,
defaultValue defines a default value for each style element.
Similarly to data elements, style elements are defined inside sections, which
provide headings and logical groupings. To see the full list of available
selectors, see the config reference .
A sample style section:
{
"id" : "styleGroup1" ,
"label" : "Header for style group" ,
"elements" : [
// insert Style Elements here
]
}
The following screenshot shows an example of a style panel with an opacity
selector, with the tooltip "Link Opacity" corresponding to the label in the
style element.
Interaction configuration
The interaction configuration defines how chart interactions work for a
community visualization. This is optional.
Example:
{
"id": "onClick",
"supportedActions": ["FILTER"]
}
Currently, only FILTER is supported. If you configure interactions, a checkbox
shows up in the property panel.
Features configuration
The features configuration can turn on or off various features in your
community visualization. This section is optional. A list of features can be
found in the config reference .
Example:
"features": {
"enableComparisonDateRange": true
}
Example
To see an example of a visualization config, see the sample config .
Next steps
Once you have defined your config, write the visualization .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
