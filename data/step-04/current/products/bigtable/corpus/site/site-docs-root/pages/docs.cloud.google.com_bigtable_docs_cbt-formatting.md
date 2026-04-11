---
title: "Format output from the cbt CLI \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/cbt-formatting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/cbt-formatting
  title: "Format output from the cbt CLI \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Format output from the
cbt CLI
This document describes how to format specific types of data stored in
Bigtable rows when displayed by the
cbt CLI
.
Examples of formatting
Starting with version 0.12.0, the
cbt CLI
can format
certain complex types of data stored in table rows.
When you use the cbt read or cbt lookup command, the
cbt CLI
can
"pretty print" values stored in the rows.
The following example shows data output from the
cbt CLI
without
formatting.
----------------------------------------
r1
fam1:col1 @ 2022/03/09-11:19:45.966000
"\n\x05Brave\x10\x02"
fam1:col2 @ 2022/03/14-11:17:20.014000
"{\"name\": \"Brave\", \"age\": 2}"
The following example shows data output from the
cbt CLI
with
formatting.
r1
fam1:col1 @ 2022/03/09-11:19:45.966000
name: "Brave"
age: 2
fam1:col2 @ 2022/03/14-11:17:20.014000
age: 2.00
name: "Brave"
Print rows with formatting
To format a column or column family, you must provide a YAML file that
specifies the formatting for that column. When you call cbt lookup or
cbt read , you pass in the path to the YAML file with the format-file
argument. The following snippet shows an example of calling cbt lookup with
the format-file argument supplied.
cbt lookup my-table r1 format-file=/path/to/formatting.yml
Define column data formats in YAML
The formatting YAML file must connect the column names or column family names
with the data types stored within them. The following snippet shows an example
of a YAML formatting file.
protocol_buffer_definitions :
- cat.proto
protocol_buffer_paths :
- testdata/
columns :
col1 :
encoding : ProtocolBuffer
type : Cat
col2 :
encoding : json
The following snippet shows the contents of 'cat.proto'.
syntax = "proto3" ;
package cats ;
option go_package = "github.com/protocolbuffers/protobuf/examples/go/tutorialpb" ;
message Cat {
string name = 1 ;
int32 age = 2 ;
}
Looking at the example:
The protocol_buffer_definitions field provides a list
of .proto files that can contain protocol buffer message types to use for
decoding protobuf data.
The protocol_buffer_paths field provides a list of local paths that
can contain .proto files for decoding protocol buffer types.
You do not need to specify the locations of standard protocol buffer
imports, such as messages in the google/protobuf package.
The columns field contains a list of column names with the corresponding
data types for each column:
The protobuf column has its encoding set to "ProtocolBuffer" and its
type is set to 'Cat'. The
cbt CLI
interprets and formats all values stored
in this column as a Cat proto message type. The type must correspond to
a message type defined in one of the .proto files provided for the
protocol_buffer_definition field.
The json column has its encoding field set to "json". The cbt
interprets and formats all values stored in this column as a JSON
structure.
Other fields that you can provide:
default_encoding : This field defines a default formatting for all
all columns in a table or all columns in a column family.
default_type : This field defines a default data type for protocol buffer,
big-endian, and little-endian encoded columns.
families : This field defines encodings and types for all columns within
a column family. You can provide a default_encoding and default_type
for a column family. You can also override these encodings at the column
level by providing a columns field that lists columns by name with the
appropriate encoding and data types, as shown in the following snippet:
families :
family1 :
default_encoding : BigEndian
default_type : INT64
columns :
address :
encoding : PROTO
type : tutorial . Person
Supported data types
The
cbt CLI
supports formatting for several complex data types. The following
table lists the supported data types and strings to provide in the YAML file
for each of the list types. String values are not case-sensitive.
Data type
Formatting value for YAML
Hexadecimal
Hex , H
Big-endian
BigEndian , B
Little-endian
LittleEndian , L
Protocol buffer
ProtocolBuffer , P , PROTO
JSON
JSON , J
Table 1. Data types supported for formatting in cbt output.
The hexadecimal encoding is type agnostic. Data are displayed as a raw
hexadecimal representation of the stored data.
The available types for the big-endian and little-endian encodings are
int8 , int16 , int32 , int64 , uint8 , uint16 , uint32 , uint64 ,
float32 , and float64 . Stored data length must be a multiple of the
type sized, in bytes. Data are displayed as scalars if the stored
length matches the type size, or as arrays otherwise. Types names are not
case-sensitive.
The types given for the protocol-buffer encoding
must match message types defined in provided
protocol-buffer definition files. The types are not case-sensitive.
If no type is specified, it
defaults to the column name for the column data being displayed.
The formatting values for YAML are not case-sensitive.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
