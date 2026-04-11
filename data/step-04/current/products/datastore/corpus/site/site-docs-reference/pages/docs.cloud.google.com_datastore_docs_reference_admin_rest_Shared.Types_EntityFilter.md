---
title: "EntityFilter \_|\_ Datastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/reference/admin/rest/Shared.Types/EntityFilter
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/reference/admin/rest/Shared.Types/EntityFilter
  title: "EntityFilter \_|\_ Datastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Datastore
Reference
Send feedback
EntityFilter
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage:
Entire project: kinds=[], namespaceIds=[]
Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespaceIds=[]
Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespaceIds=['']
Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespaceIds=['', 'Baz']
The entire Baz namespace: kinds=[], namespaceIds=['Baz']
JSON representation
{
"kinds" : [
string
] ,
"namespaceIds" : [
string
]
}
Fields
kinds[]
string
If empty, then this represents all kinds.
namespaceIds[]
string
An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces.
An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-30 UTC."],[],[]]
