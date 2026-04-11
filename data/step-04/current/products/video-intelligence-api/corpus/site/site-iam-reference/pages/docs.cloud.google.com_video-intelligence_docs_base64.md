---
title: "Base64 Encoding \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/base64
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs/streaming/docker-kubernetes
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/base64
  title: "Base64 Encoding \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Video Intelligence API
Guides
Send feedback
Base64 Encoding
Stay organized with collections
Save and categorize content based on your preferences.
When passing video to the Video Intelligence API, you can either pass a
Cloud Storage URI, or you can embed video data directly within the request's
content field, which must be base64 encoded.
Using the command line
Within a gRPC request, you can simply write binary data out directly;
however, JSON is used when making a REST request. JSON
is a text format that does not directly support binary data, so you will need to
convert such binary data into text using
Base64 encoding.
Most development environments contain a native base64 utility to
encode a binary into ASCII text data. To encode a file:
Linux
Encode the file using the base64 command line tool, making sure to
prevent line-wrapping by using the -w 0 flag:
base64 INPUT_FILE -w 0 > OUTPUT_FILE
macOS
Encode the file using the base64 command line tool:
base64 -i INPUT_FILE -o OUTPUT_FILE
Windows
Encode the file using the Base64.exe tool:
certutil -encodehex SOURCE_VIDEO_FILE > DEST_TEXT_FILE 0x40000001
PowerShell
Encode the file using the Convert.ToBase64String method:
[Convert]::ToBase64String([IO.File]::ReadAllBytes("./ INPUT_FILE ")) > OUTPUT_FILE
Create a JSON request file, inlining the base64-encoded data:
JSON
{
"requests" :[
{
"image" :{
"content" : "ZkxhQwAAACIQABAAAAUJABtAA+gA8AB+W8FZndQvQAyjv..."
},
"features" : [
{
"type" : "LABEL_DETECTION" ,
"maxResults" : 1
}
]
}
]
}
Using client libraries
Embedding binary data into requests through text editors is neither
desirable or practical. In practice, you will be embedding base64 encoded files
within client code. All supported programming languages have built-in mechanisms
for base64 encoding content.
Python
In Python, base64 encode video files as follows:
# Import the base64 encoding library.
import base64
# Pass the video data to an encoding function.
def encode_video ( video ):
video_content = video . read ()
return base64 . b64encode ( video_content )
Node.js
In Node.js, base64 encode video files as follows:
// Read the file into memory.
var fs = require ( 'fs' );
var videoFile = fs . readFileSync ( '/path/to/file' );
// Convert the video data to a Buffer and base64 encode it.
var encoded = new Buffer ( videoFile ). toString ( 'base64' );
Java
In Java, you can base64 encode image files as follows:
// Import the Base64 encoding library.
import org.apache.commons.codec.binary.Base64 ;
// Encode the video.
byte [] videoData = Base64 . encodeBase64 ( videoFile . getBytes ());
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
