---
title: "Feature \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference/rest/v1/Feature
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/reference/rest
source_metadata:
  url: https://developers.google.com/earth-engine/reference/rest/v1/Feature
  title: "Feature \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
Feature
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A GeoJSON feature object is defined by having "Feature" as its "type", a geometry field, and a properties field.
The GeoJSON feature object's geometry and properties are represented using the Value format, containing either a Struct or a NullValue.
The "type" field of a GeoJSON feature object is always the string "Feature".
A GeoJSON feature object (see RFC 7946) containing the string "Feature" in a field named "type", the geometry in a field named "geometry", and key/value properties in a field named "properties".
JSON representation
{
"type" : string ,
"geometry" : value ,
"properties" : value
}
Fields
type
string
This string is always present and equal to "Feature".
geometry
value ( Value format)
The geometry of the feature. This will contain a google.protobuf.Struct if geometry is present for this feature. Otherwise, it will hold a google.protobuf.NullValue .
properties
value ( Value format)
The properties of the feature. This will contain a google.protobuf.Struct if properties are present for this feature. Otherwise, it will hold a google.protobuf.NullValue .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-27 UTC."],[],["The core content describes a GeoJSON feature object structured with three fields: `type`, `geometry`, and `properties`. The `type` field always contains the string \"Feature\". The `geometry` field holds the feature's geometry data as a `google.protobuf.Struct` or `google.protobuf.NullValue`. The `properties` field stores key/value pairs as a `google.protobuf.Struct` or `google.protobuf.NullValue`. Both `geometry` and `properties` use the [Value](https://protobuf.dev/reference/protobuf/google.protobuf/#value) format.\n"]]
