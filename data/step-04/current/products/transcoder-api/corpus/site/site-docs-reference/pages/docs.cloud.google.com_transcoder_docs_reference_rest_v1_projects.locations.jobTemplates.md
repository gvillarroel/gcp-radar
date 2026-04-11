---
title: "REST Resource: projects.locations.jobTemplates \_|\_ Transcoder API \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/projects.locations.jobTemplates
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/transcoder/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/projects.locations.jobTemplates
  title: "REST Resource: projects.locations.jobTemplates \_|\_ Transcoder API \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Transcoder API
Reference
Send feedback
REST Resource: projects.locations.jobTemplates
Stay organized with collections
Save and categorize content based on your preferences.
Resource: JobTemplate
JSON representation
Methods
Resource: JobTemplate
Transcoding job template resource.
JSON representation
{
"name" : string ,
"config" : {
object ( JobConfig )
} ,
"labels" : {
string : string ,
...
}
}
Fields
name
string
The resource name of the job template. Format: projects/{project_number}/locations/{location}/jobTemplates/{jobTemplate}
config
object ( JobConfig )
The configuration for this template.
labels
map (key: string, value: string)
The labels associated with this job template. You can use these to organize and group your job templates.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Methods
create
Creates a job template in the specified region.
delete
Deletes a job template.
get
Returns the job template data.
list
Lists job templates in the specified region.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
