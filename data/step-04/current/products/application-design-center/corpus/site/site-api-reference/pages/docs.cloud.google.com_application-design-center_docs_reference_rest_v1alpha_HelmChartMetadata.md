---
title: "HelmChartMetadata \_|\_ Application Design Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/HelmChartMetadata
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/HelmChartMetadata
  title: "HelmChartMetadata \_|\_ Application Design Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Reference
Send feedback
HelmChartMetadata
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
HelmChartInput
JSON representation
HelmChartOutput
JSON representation
Helm Chart metadata.
JSON representation
{
"helmInput" : [
{
object ( HelmChartInput )
}
] ,
"helmOutput" : [
{
object ( HelmChartOutput )
}
]
}
Fields
helmInput[]
object ( HelmChartInput )
Output only. Helm Chart inputs.
helmOutput[]
object ( HelmChartOutput )
Output only. Helm Chart outputs.
HelmChartInput
Helm Chart inputs. Documentation: https://helm.sh/docs/
JSON representation
{
"helmInputVariable" : string ,
"description" : string ,
"type" : string ,
"defaultValue" : value ,
"isRequired" : boolean ,
"nestedInputs" : {
string : {
object ( HelmChartInput )
} ,
...
}
}
Fields
helmInputVariable
string
Output only. Input variable name present in Helm Chart values.yaml
description
string
Output only. Input variable description.
type
string
Output only. Input data type.
defaultValue
value ( Value format)
Output only. The default value of the input variable.
isRequired
boolean
Output only. Indicates if input is required.
nestedInputs
map (key: string, value: object ( HelmChartInput ))
Output only. Contains details of nested inputs.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
HelmChartOutput
Helm Chart outputs.
JSON representation
{
"value" : value ,
"helmOutputVariable" : string ,
"description" : string
}
Fields
value
value ( Value format)
Output only. Type of output.
helmOutputVariable
string
Output only. Output variable name present.
description
string
Output only. Description of the variable.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-10 UTC."],[],[]]
