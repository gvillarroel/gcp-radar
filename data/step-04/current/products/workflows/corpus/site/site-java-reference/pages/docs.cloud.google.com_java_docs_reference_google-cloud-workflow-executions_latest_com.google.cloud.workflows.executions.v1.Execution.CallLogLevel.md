---
title: "Enum Execution.CallLogLevel (2.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1.Execution.CallLogLevel
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-workflow-executions/latest/com.google.cloud.workflows.executions.v1.Execution.CallLogLevel
  title: "Enum Execution.CallLogLevel (2.88.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Enum Execution.CallLogLevel (2.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.88.0 (latest)
2.87.0
2.85.0
2.83.0
2.82.0
2.80.0
2.78.0
2.76.0
2.75.0
2.74.0
2.73.0
2.72.0
2.70.0
2.68.0
2.67.0
2.64.0
2.63.0
2.62.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.51.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.39.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.27.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.6
2.2.1
2.1.7
public enum Execution . CallLogLevel extends Enum<Execution . CallLogLevel > implements ProtocolMessageEnum
Describes the level of platform logging to apply to calls and call
responses during workflow executions.
Protobuf enum google.cloud.workflows.executions.v1.Execution.CallLogLevel
Implements
ProtocolMessageEnum
Inherited Members
Enum.<T>valueOf(Class<T>,String)
Enum.clone()
Enum.compareTo(E)
Enum.equals(Object)
Enum.finalize()
Enum.getDeclaringClass()
Enum.hashCode()
Enum.name()
Enum.ordinal()
Enum.toString()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Fields
Name
Description
CALL_LOG_LEVEL_UNSPECIFIED
No call logging level specified.
CALL_LOG_LEVEL_UNSPECIFIED = 0;
CALL_LOG_LEVEL_UNSPECIFIED_VALUE
No call logging level specified.
CALL_LOG_LEVEL_UNSPECIFIED = 0;
LOG_ALL_CALLS
Log all call steps within workflows, all call returns, and all exceptions
raised.
LOG_ALL_CALLS = 1;
LOG_ALL_CALLS_VALUE
Log all call steps within workflows, all call returns, and all exceptions
raised.
LOG_ALL_CALLS = 1;
LOG_ERRORS_ONLY
Log only exceptions that are raised from call steps within workflows.
LOG_ERRORS_ONLY = 2;
LOG_ERRORS_ONLY_VALUE
Log only exceptions that are raised from call steps within workflows.
LOG_ERRORS_ONLY = 2;
LOG_NONE
Explicitly log nothing.
LOG_NONE = 3;
LOG_NONE_VALUE
Explicitly log nothing.
LOG_NONE = 3;
UNRECOGNIZED
Static Methods
Name
Description
forNumber(int value)
getDescriptor()
internalGetValueMap()
valueOf(Descriptors.EnumValueDescriptor desc)
valueOf(int value)
Deprecated. Use #forNumber(int) instead.
valueOf(String name)
values()
Methods
Name
Description
getDescriptorForType()
getNumber()
getValueDescriptor()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
