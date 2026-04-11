---
title: "Interface BinaryAuthorizationOrBuilder (0.88.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BinaryAuthorizationOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BinaryAuthorizationOrBuilder
  title: "Interface BinaryAuthorizationOrBuilder (0.88.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Interface BinaryAuthorizationOrBuilder (0.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.88.0 (latest)
0.87.0
0.85.0
0.83.0
0.82.0
0.80.0
0.78.0
0.76.0
0.75.0
0.74.0
0.73.0
0.72.0
0.70.0
0.68.0
0.67.0
0.64.0
0.63.0
0.62.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.53.0
0.52.0
0.51.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.42.0
0.41.0
0.40.0
0.39.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.28.0
0.27.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
0.3.5
0.2.1
0.1.2
public interface BinaryAuthorizationOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getBinauthzMethodCase()
public abstract BinaryAuthorization . BinauthzMethodCase getBinauthzMethodCase ()
Returns
Type
Description
BinaryAuthorization.BinauthzMethodCase
getBreakglassJustification()
public abstract String getBreakglassJustification ()
Optional. If present, indicates to use Breakglass using this justification.
If use_default is False, then it must be empty.
For more information on breakglass, see
https://cloud.google.com/binary-authorization/docs/using-breakglass
string breakglass_justification = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The breakglassJustification.
getBreakglassJustificationBytes()
public abstract ByteString getBreakglassJustificationBytes ()
Optional. If present, indicates to use Breakglass using this justification.
If use_default is False, then it must be empty.
For more information on breakglass, see
https://cloud.google.com/binary-authorization/docs/using-breakglass
string breakglass_justification = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for breakglassJustification.
getPolicy()
public abstract String getPolicy ()
Optional. The path to a binary authorization policy.
Format: projects/{project}/platforms/cloudRun/{policy-name}
string policy = 3 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The policy.
getPolicyBytes()
public abstract ByteString getPolicyBytes ()
Optional. The path to a binary authorization policy.
Format: projects/{project}/platforms/cloudRun/{policy-name}
string policy = 3 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for policy.
getUseDefault()
public abstract boolean getUseDefault ()
Optional. If True, indicates to use the default project's binary
authorization policy. If False, binary authorization will be disabled.
bool use_default = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
The useDefault.
hasPolicy()
public abstract boolean hasPolicy ()
Optional. The path to a binary authorization policy.
Format: projects/{project}/platforms/cloudRun/{policy-name}
string policy = 3 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }
Returns
Type
Description
boolean
Whether the policy field is set.
hasUseDefault()
public abstract boolean hasUseDefault ()
Optional. If True, indicates to use the default project's binary
authorization policy. If False, binary authorization will be disabled.
bool use_default = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
Whether the useDefault field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
