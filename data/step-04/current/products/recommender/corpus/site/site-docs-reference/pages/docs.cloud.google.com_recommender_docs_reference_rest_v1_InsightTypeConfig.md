---
title: "InsightTypeConfig \_|\_ Recommender \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recommender/docs/reference/rest/v1/InsightTypeConfig
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recommender/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/recommender/docs/reference/rest/v1/InsightTypeConfig
  title: "InsightTypeConfig \_|\_ Recommender \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Recommender
Reference
Send feedback
InsightTypeConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
InsightTypeGenerationConfig
JSON representation
Configuration for an InsightType.
JSON representation
{
"name" : string ,
"insightTypeGenerationConfig" : {
object ( InsightTypeGenerationConfig )
} ,
"etag" : string ,
"updateTime" : string ,
"revisionId" : string ,
"annotations" : {
string : string ,
...
} ,
"displayName" : string
}
Fields
name
string
Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config
insightTypeGenerationConfig
object ( InsightTypeGenerationConfig )
InsightTypeGenerationConfig which configures the generation of insights for this insight type.
etag
string
Fingerprint of the InsightTypeConfig. Provides optimistic locking when updating.
updateTime
string ( Timestamp format)
Last time when the config was updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
revisionId
string
Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string.
annotations
map (key: string, value: string)
Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
displayName
string
A user-settable field to provide a human-readable name to be used in user interfaces.
InsightTypeGenerationConfig
A configuration to customize the generation of insights. Eg, customizing the lookback period considered when generating a insight.
JSON representation
{
"params" : {
object
}
}
Fields
params
object ( Struct format)
Parameters for this InsightTypeGenerationConfig. These configs can be used by or are applied to all subtypes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
