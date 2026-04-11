---
title: "StackTrace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/reference/v2/rest/v2/StackTrace
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/reference/v2/rest/v2/StackTrace
  title: "StackTrace \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Reference
Send feedback
StackTrace
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
StackFrames
JSON representation
StackFrame
JSON representation
Module
JSON representation
A call stack appearing in a trace.
JSON representation
{
"stackFrames" : {
object ( StackFrames )
} ,
"stackTraceHashId" : string
}
Fields
stackFrames
object ( StackFrames )
Stack frames in this stack trace. A maximum of 128 frames are allowed.
stackTraceHashId
string ( int64 format)
The hash ID is used to conserve network bandwidth for duplicate stack traces within a single trace.
Often multiple spans will have identical stack traces. The first occurrence of a stack trace should contain both the stackFrame content and a value in stackTraceHashId .
Subsequent spans within the same request can refer to that stack trace by only setting stackTraceHashId .
StackFrames
A collection of stack frames, which can be truncated.
JSON representation
{
"frame" : [
{
object ( StackFrame )
}
] ,
"droppedFramesCount" : integer
}
Fields
frame[]
object ( StackFrame )
Stack frames in this call stack.
droppedFramesCount
integer
The number of stack frames that were dropped because there were too many stack frames. If this value is 0, then no stack frames were dropped.
StackFrame
Represents a single stack frame in a stack trace.
JSON representation
{
"functionName" : {
object ( TruncatableString )
} ,
"originalFunctionName" : {
object ( TruncatableString )
} ,
"fileName" : {
object ( TruncatableString )
} ,
"lineNumber" : string ,
"columnNumber" : string ,
"loadModule" : {
object ( Module )
} ,
"sourceVersion" : {
object ( TruncatableString )
}
}
Fields
functionName
object ( TruncatableString )
The fully-qualified name that uniquely identifies the function or method that is active in this frame (up to 1024 bytes).
originalFunctionName
object ( TruncatableString )
An un-mangled function name, if functionName is mangled. To get information about name mangling, run this search . The name can be fully-qualified (up to 1024 bytes).
fileName
object ( TruncatableString )
The name of the source file where the function call appears (up to 256 bytes).
lineNumber
string ( int64 format)
The line number in fileName where the function call appears.
columnNumber
string ( int64 format)
The column number where the function call appears, if available. This is important in JavaScript because of its anonymous functions.
loadModule
object ( Module )
The binary module from where the code was loaded.
sourceVersion
object ( TruncatableString )
The version of the deployed source code (up to 128 bytes).
Module
Binary module.
JSON representation
{
"module" : {
object ( TruncatableString )
} ,
"buildId" : {
object ( TruncatableString )
}
}
Fields
module
object ( TruncatableString )
For example: main binary, kernel modules, and dynamic libraries such as libc.so, sharedlib.so (up to 256 bytes).
buildId
object ( TruncatableString )
A unique identifier for the module, usually a hash of its contents (up to 128 bytes).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
