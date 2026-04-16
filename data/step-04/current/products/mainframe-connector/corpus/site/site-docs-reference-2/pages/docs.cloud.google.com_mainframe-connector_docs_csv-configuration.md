---
title: "CSV configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mainframe-connector/docs/csv-configuration
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/mainframe-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/mainframe-connector/docs/csv-configuration
  title: "CSV configuration \_|\_ Mainframe Connector \_|\_ Google Cloud Documentation"
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
CSV configuration
Stay organized with collections
Save and categorize content based on your preferences.
You can configure the Mainframe Connector transcoder's CSV formatting by adding the required configuration in a JSON file,
and specifying this file using the --input-parameter csv-dialect = DataPath
option with the qsam encode
or qsam decode commands.
You must define the CSV configuration as specified in section CsvConfiguration .
This page describes the various CSV parameters you can configure as input parameters for transcoding.
The CsvConfiguration object contains all CSV encoder and decoder configuration options.
CsvConfiguration
The CsvConfiguration object lets you configure the CSV decode and encoder configuration.
JSON representation
{
"null_representation" : string ,
"header" : enum ( WriteHeaderMode ) ,
"quote_escaping" : string ,
"quote" : string ,
"delimiter" : string ,
"line_terminator" : string ,
"support_list" : boolean ,
"list_start_delimiter" : string ,
"list_end_delimiter" : string ,
"support_struct" : boolean ,
"struct_start_delimiter" : string ,
"struct_end_delimiter" : string ,
"binary_data_encoding" : enum ( BinaryDataEncoding ) ,
"date_format" : string ,
"timestamp_format" : string ,
"quote_mode" : enum ( QuoteMode ) }
Fields
null_representation
string
Specify the string that represents a null character.
header
enum ( WriteHeaderMode )
Set this to true if you want the first row to contain column names instead of actual data.
quote_escaping
string
Specify the escape character.
quote
string
Specify the quote character.
delimiter
string
Specify the character to use to separate fields.
line_terminator
string
Specify the character to use to separate lines.
support_list
boolean
Set to true if you want Mainframe Connector to support lists in CSV.
list_start_delimiter
string
If support_list is set to true, this value represents the start character delimiter for lists.
list_end_delimiter
string
If support_list is set to true, this value represents the end character delimiter for lists.
support_struct
boolean
Set to true if you want Mainframe Connector to support structs in CSV.
struct_start_delimiter
string
If support_struct is set to true, this value represents the start character delimiter for structs.
struct_end_delimiter
string
If support_struct is set to true, this value represents the end character delimiter for structs.
binary_data_encoding
enum ( BinaryDataEncoding )
Specify the way in which Mainframe Connector encodes or decodes binary data. Valid values are hexadecimal, base64, or hex. The default value is base64.
date_format
string
Specify the format for the date. The default format is yyyy-mm-dd .
timestamp_format
string
Specify the format for the timestamp. The default value is DateTimeFormatter.ISO_INSTANT .
quote_mode
enum ( QuoteMode )
Specify the quoting behavior. The default value is MINIMAL .
WriteHeaderMode
Defines the behavior of writing the CSV header.
Enums
NO
Doesn't write the CSV header.
YES
Writes the CSV header only if data is present.
ALWAYS
Always write the CSV header.
BinaryDataEncoding
Specify the way in which Mainframe Connector encodes or decodes binary data. Valid values are hexadecimal, base64, or hex. The default value is base64.
Enums
BASE64
Encodes binary data into an ASCII string.
HEX
Encodes binary data into hex (\x format) or escaped octal.
HEXADECIMAL
Encodes binary data into the hexadecimal (0x format) or raw binary.
QuoteMode
Defines quoting behavior.
Enums
MINIMAL
Quotes fields which contain special characters such as a the field delimiter, and quotes character or any of the characters in the line separator string.
ALL_NON_NULL
Quotes all non-null fields.
ALL
Quotes all fields.
NON_NUMERIC
Quotes all non-numeric fields.
NONE
Never quotes fields. When a delimiter occurs in the data, the printer prefixes it with the escape character.
If the escape character is not set, format validation throws an exception.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
