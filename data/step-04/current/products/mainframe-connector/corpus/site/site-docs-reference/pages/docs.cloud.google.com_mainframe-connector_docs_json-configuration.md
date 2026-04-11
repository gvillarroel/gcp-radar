---
title: "JSON configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mainframe-connector/docs/json-configuration
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/mainframe-connector/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/mainframe-connector/docs/json-configuration
  title: "JSON configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Mainframe Connector
Reference
Send feedback
JSON configuration
Stay organized with collections
Save and categorize content based on your preferences.
You can configure the Mainframe Connector transcoder's JSON formatting by adding the required configuration in a JSON file,
and specifying this file using the --input-parameter json-dialect = DataPath
option with the qsam encode
or qsam decode commands.
You must define the JSON configuration as specified in section JsonConfiguration .
This page describes the various JSON parameters you can configure as input parameters for transcoding.
The JsonConfiguration object contains all JSON encoder and decoder configuration options.
JsonConfiguration
The JsonConfiguration object lets you configure the JSON decoder and encoder configuration.
JSON representation
{
"omit_null_fields" : boolean ,
"date_format" : string ,
"timestamp_format" : string ,
"encoding" : string }
Fields
omit_null_fields
boolean
Set to true if you want null fields to be omitted from the JSON output.
date_format
string
Specify the format for the date. The default format is yyyy-MM-dd .
timestamp_format
string
Specify the format for the timestamp. The default value is DateTimeFormatter.ISO_INSTANT .
encoding
string
Specify the character encoding to use for the JSON output.
The default is UTF-8 .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
