---
title: "TerraformBlueprint \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/TerraformBlueprint
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest/v1/TerraformBlueprint
  title: "TerraformBlueprint \_|\_ Infrastructure Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Infrastructure Manager
Reference
Send feedback
TerraformBlueprint
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
GitSource
JSON representation
TerraformVariable
JSON representation
ExternalValueSource
JSON representation
DeploymentSource
JSON representation
TerraformBlueprint describes the source of a Terraform root module which describes the resources and configs to be deployed.
JSON representation
{
"inputValues" : {
string : {
object ( TerraformVariable )
} ,
...
} ,
"externalValues" : {
string : {
object ( ExternalValueSource )
} ,
...
} ,
// Union field source can be only one of the following:
"gcsSource" : string ,
"gitSource" : {
object ( GitSource )
}
// End of list of possible types for union field source .
}
Fields
inputValues
map (key: string, value: object ( TerraformVariable ))
Optional. Input variable values for the Terraform blueprint.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
externalValues
map (key: string, value: object ( ExternalValueSource ))
Optional. Map of input variable names in this blueprint to configurations for importing values from external sources.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Union field source . Location of the source configs. Required. source can be only one of the following:
gcsSource
string
URI of an object in Google Cloud Storage. Format: gs://{bucket}/{object}
URI may also specify an object version for zipped objects. Format: gs://{bucket}/{object}#{version}
gitSource
object ( GitSource )
URI of a public Git repo.
GitSource
A set of files in a Git repository.
JSON representation
{
"repo" : string ,
"directory" : string ,
"ref" : string
}
Fields
repo
string
Optional. Repository URL. Example: 'https://github.com/kubernetes/examples.git'
directory
string
Optional. Subdirectory inside the repository. Example: 'staging/my-package'
ref
string
Optional. Git reference (e.g. branch or tag).
TerraformVariable
A Terraform input variable.
JSON representation
{
"inputValue" : value
}
Fields
inputValue
value ( Value format)
Optional. Input variable value.
ExternalValueSource
Configuration for a source of an external value.
JSON representation
{
// Union field source can be only one of the following:
"deploymentSource" : {
object ( DeploymentSource )
}
// End of list of possible types for union field source .
}
Fields
Union field source . The source of the external value. source can be only one of the following:
deploymentSource
object ( DeploymentSource )
A source from a Deployment.
DeploymentSource
Configuration for a value sourced from a Deployment.
JSON representation
{
"deployment" : string ,
"outputName" : string
}
Fields
deployment
string
Required. The resource name of the source Deployment to import the output from. Format: projects/{project}/locations/{location}/deployments/{deployment} The source deployment must be in the same project and location.
outputName
string
Required. The name of the output variable in the source deployment's latest successfully applied revision.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
