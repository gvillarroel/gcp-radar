---
title: "ProjectSettings \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/ProjectSettings
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/ProjectSettings
  title: "ProjectSettings \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Reference
Send feedback
ProjectSettings
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
RedirectionState
The Artifact Registry settings that apply to a Project.
JSON representation
{
"name" : string ,
"legacyRedirectionState" : enum ( RedirectionState ) ,
"pullPercent" : integer
}
Fields
name
string
The name of the project's settings.
Always of the form: projects/{project-id}/projectSettings
In update request: never set In response: always set
legacyRedirectionState
enum ( RedirectionState )
The redirection state of the legacy repositories in this project.
pullPercent
integer
The percentage of pull traffic to redirect from GCR to AR when using partial redirection.
RedirectionState
The possible redirection states for legacy repositories.
Enums
REDIRECTION_STATE_UNSPECIFIED
No redirection status has been set.
REDIRECTION_FROM_GCR_IO_DISABLED
Redirection is disabled.
REDIRECTION_FROM_GCR_IO_ENABLED
Redirection is enabled.
REDIRECTION_FROM_GCR_IO_ENABLED_AND_COPYING
Redirection is enabled and missing images are copied from GCR
REDIRECTION_FROM_GCR_IO_PARTIAL_AND_COPYING
Redirection is partially enabled and missing images are copied from GCR
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
