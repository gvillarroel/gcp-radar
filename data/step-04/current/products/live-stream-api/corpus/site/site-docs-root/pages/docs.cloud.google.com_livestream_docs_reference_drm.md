---
title: "DRM protocol documentation \_|\_ Live Stream API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/livestream/docs/reference/drm
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/livestream/docs
source_metadata:
  url: https://docs.cloud.google.com/livestream/docs/reference/drm
  title: "DRM protocol documentation \_|\_ Live Stream API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Live Stream API
Reference
Send feedback
DRM protocol documentation
Stay organized with collections
Save and categorize content based on your preferences.
EncryptionConfig
Details required to encrypt a stream.
Field
Type
Label
Description
encryption_keys
EncryptionKey
repeated
List of encryption keys and associated information.
EncryptionKey
A single encryption key and associated information.
Field
Type
Label
Description
key_id
string
Unique identifier for the key, as identified by your DRM provider, represented as 32 hexadecimal digits in UUID 8-4-4-4-12 format (for example, d569cb35-bd05-48c7-a99d-92feb381df13) or plain 32 hexadecimal digits (for example, d569cb35bd0548c7a99d92feb381df13).
key_uri
string
URI of the key. This URI is inserted into the M3U8 header.
key
string
128-bit encryption key represented as 32 hexadecimal digits (for example, f828863735a2d93fd538f4b8e9b8bd80 ).
iv
string
128-bit encryption IV represented as 32 hexadecimal digits (for example, 217719cae3ffc905b62a248956c9321f ).
matchers
EncryptionKeyMatcher
repeated
A list of rules indicating which muxStream(s) in your channel should use this key. A muxStream will use the first matching key it finds. If this field is omitted, all muxStreams will treat the key as a match.
EncryptionKeyMatcher
A single rule indicating which muxStream(s) in your channel should use the
key.
Field
Type
Label
Description
mux_streams
string
repeated
A list of muxStream IDs which should use the key.
Scalar Value Types
.proto Type
Notes
C++
Java
Python
Go
C#
PHP
Ruby
double
double
double
float
float64
double
float
Float
float
float
float
float
float32
float
float
Float
int32
Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead.
int32
int
int
int32
int
integer
Bignum or Fixnum (as required)
int64
Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead.
int64
long
int/long
int64
long
integer/string
Bignum
uint32
Uses variable-length encoding.
uint32
int
int/long
uint32
uint
integer
Bignum or Fixnum (as required)
uint64
Uses variable-length encoding.
uint64
long
int/long
uint64
ulong
integer/string
Bignum or Fixnum (as required)
sint32
Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s.
int32
int
int
int32
int
integer
Bignum or Fixnum (as required)
sint64
Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s.
int64
long
int/long
int64
long
integer/string
Bignum
fixed32
Always four bytes. More efficient than uint32 if values are often greater than 2^28.
uint32
int
int
uint32
uint
integer
Bignum or Fixnum (as required)
fixed64
Always eight bytes. More efficient than uint64 if values are often greater than 2^56.
uint64
long
int/long
uint64
ulong
integer/string
Bignum
sfixed32
Always four bytes.
int32
int
int
int32
int
integer
Bignum or Fixnum (as required)
sfixed64
Always eight bytes.
int64
long
int/long
int64
long
integer/string
Bignum
bool
bool
boolean
boolean
bool
bool
boolean
TrueClass/FalseClass
string
A string must always contain UTF-8 encoded or 7-bit ASCII text.
string
String
str/unicode
string
string
string
String (UTF-8)
bytes
May contain any arbitrary sequence of bytes.
string
ByteString
str
[]byte
ByteString
string
String (ASCII-8BIT)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-19 UTC."],[],[]]
