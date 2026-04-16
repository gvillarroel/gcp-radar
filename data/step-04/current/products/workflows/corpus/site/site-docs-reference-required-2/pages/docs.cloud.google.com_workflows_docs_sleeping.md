---
title: "Wait using polling \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/sleeping
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/syntax/expressions
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/sleeping
  title: "Wait using polling \_|\_ Workflows \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Guides
Send feedback
Wait using polling
Stay organized with collections
Save and categorize content based on your preferences.
The sys.sleep standard library function
suspends execution for the given number of seconds to a maximum of 31536000 (one
year).
Pause a workflow
You can pause the execution of a workflow by adding a sleep step to your
workflow's definition. This step includes a call to sys.sleep and specifies in
seconds how long you want to pause the workflow:
YAML
- STEP_NAME :
call : sys.sleep
args :
seconds : SLEEP_IN_SECONDS
JSON
[
{
" STEP_NAME " : {
"call" : "sys.sleep" ,
"args" : {
"seconds" : " SLEEP_IN_SECONDS "
}
}
}
]
Poll for data
You can also use sys.sleep to poll for data over a given interval. For example,
you might want to poll an API until a specific condition is met:
YAML
main :
params : [ jobId ]
steps :
- checkJob :
call : http.get
args :
url : ${"https://example.com/jobs/" + jobId}
auth :
type : OAuth2
result : jobStatus
- checkIfDone :
switch :
- condition : ${jobStatus.complete}
return : ${jobStatus}
- wait :
call : sys.sleep
args :
seconds : 60
next : checkJob
JSON
{
"main" : {
"params" : [
"jobId"
],
"steps" : [
{
"checkJob" : {
"call" : "http.get" ,
"args" : {
"url" : "${\"https://example.com/jobs/\" + jobId}" ,
"auth" : {
"type" : "OAuth2"
}
},
"result" : "jobStatus"
}
},
{
"checkIfDone" : {
"switch" : [
{
"condition" : "${jobStatus.complete}" ,
"return" : "${jobStatus}"
}
]
}
},
{
"wait" : {
"call" : "sys.sleep" ,
"args" : {
"seconds" : 60
},
"next" : "checkJob"
}
}
]
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
