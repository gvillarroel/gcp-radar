---
title: "ExecutionSpec \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/reference/rest/v1/ExecutionSpec
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/run/docs/reference/rest/v1/ExecutionSpec
  title: "ExecutionSpec \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Reference
Send feedback
ExecutionSpec
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
TaskTemplateSpec
JSON representation
ExecutionSpec describes how the execution will look.
JSON representation
{
"parallelism" : integer ,
"taskCount" : integer ,
"template" : {
object ( TaskTemplateSpec )
}
}
Fields
parallelism
integer
Optional. Specifies the maximum desired number of tasks the execution should run at given time. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed, i.e. when the work left to do is less than max parallelism.
taskCount
integer
Optional. Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. Defaults to 1.
template
object ( TaskTemplateSpec )
Optional. The template used to create tasks for this execution.
TaskTemplateSpec
TaskTemplateSpec describes the data a task should have when created from a template.
JSON representation
{
"spec" : {
object ( TaskSpec )
}
}
Fields
spec
object ( TaskSpec )
Optional. Specification of the desired behavior of the task.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
