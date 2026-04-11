---
title: "OutputConfig \_|\_ Vision API Product Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest/v1/OutputConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision/product-search/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest/v1/OutputConfig
  title: "OutputConfig \_|\_ Vision API Product Search \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Vision API Product Search
Reference
OutputConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
GcsDestination
JSON representation
The desired output location and metadata.
JSON representation
{
"gcsDestination" : {
object ( GcsDestination )
} ,
"batchSize" : number
}
Fields
gcsDestination
object ( GcsDestination )
The Google Cloud Storage location to write the output(s) to.
batchSize
number
The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20.
For example, for one pdf file with 100 pages, 100 response protos will be generated. If batchSize = 20, then 5 json files each containing 20 response protos will be written under the prefix gcsDestination . uri .
Currently, batchSize only applies to GcsDestination, with potential future support for other output configurations.
GcsDestination
The Google Cloud Storage location where the output will be written to.
JSON representation
{
"uri" : string
}
Fields
uri
string
Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a Google Cloud Storage file prefix or Google Cloud Storage directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard Google Cloud Storage search on the uri prefix you provide.
Examples:
File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix".
Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified.
If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
