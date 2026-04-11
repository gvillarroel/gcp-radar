---
title: "Interface ErrorContextOrBuilder (0.209.0-beta) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorContextOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorContextOrBuilder
  title: "Interface ErrorContextOrBuilder (0.209.0-beta) \_|\_ Java client libraries\
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
Interface ErrorContextOrBuilder (0.209.0-beta)
Stay organized with collections
Save and categorize content based on your preferences.
0.209.0-beta (latest)
0.208.0-beta
0.206.0-beta
0.204.0-beta
0.203.0-beta
0.202.0-beta
0.201.0-beta
0.199.0-beta
0.197.0-beta
0.196.0-beta
0.195.0-beta
0.194.0-beta
0.193.0-beta
0.191.0-beta
0.189.0-beta
0.188.0-beta
0.185.0-beta
0.184.0-beta
0.183.0-beta
0.181.0-beta
0.180.0-beta
0.179.0-beta
0.178.0-beta
0.177.0-beta
0.176.0-beta
0.175.0-beta
0.174.0-beta
0.173.0-beta
0.172.0-beta
0.170.0-beta
0.169.0-beta
0.168.0-beta
0.167.0-beta
0.166.0-beta
0.165.0-beta
0.164.0-beta
0.163.0-beta
0.162.0-beta
0.161.0-beta
0.160.0-beta
0.158.0-beta
0.157.0-beta
0.156.0-beta
0.155.0-beta
0.154.0-beta
0.153.0-beta
0.152.0-beta
0.151.0-beta
0.150.0-beta
0.149.0-beta
0.148.0-beta
0.145.0-beta
0.144.0-beta
0.143.0-beta
0.142.0-beta
0.141.0-beta
0.140.0-beta
0.139.0-beta
0.138.0-beta
0.137.0-beta
0.136.0-beta
0.135.0-beta
0.134.0-beta
0.133.0-beta
0.132.0-beta
0.130.0-beta
0.129.0-beta
0.128.0-beta
0.127.0-beta
0.126.0-beta
0.125.0-beta
0.124.15-beta
0.123.4-beta
0.122.23-beta
public interface ErrorContextOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getHttpRequest()
public abstract HttpRequestContext getHttpRequest ()
The HTTP request which was processed when the error was
triggered.
.google.devtools.clouderrorreporting.v1beta1.HttpRequestContext http_request = 1;
Returns
Type
Description
HttpRequestContext
The httpRequest.
getHttpRequestOrBuilder()
public abstract HttpRequestContextOrBuilder getHttpRequestOrBuilder ()
The HTTP request which was processed when the error was
triggered.
.google.devtools.clouderrorreporting.v1beta1.HttpRequestContext http_request = 1;
Returns
Type
Description
HttpRequestContextOrBuilder
getReportLocation()
public abstract SourceLocation getReportLocation ()
The location in the source code where the decision was made to
report the error, usually the place where it was logged.
For a logged exception this would be the source line where the
exception is logged, usually close to the place where it was
caught.
.google.devtools.clouderrorreporting.v1beta1.SourceLocation report_location = 3;
Returns
Type
Description
SourceLocation
The reportLocation.
getReportLocationOrBuilder()
public abstract SourceLocationOrBuilder getReportLocationOrBuilder ()
The location in the source code where the decision was made to
report the error, usually the place where it was logged.
For a logged exception this would be the source line where the
exception is logged, usually close to the place where it was
caught.
.google.devtools.clouderrorreporting.v1beta1.SourceLocation report_location = 3;
Returns
Type
Description
SourceLocationOrBuilder
getUser()
public abstract String getUser ()
The user who caused or was affected by the crash.
This can be a user ID, an email address, or an arbitrary token that
uniquely identifies the user.
When sending an error report, leave this field empty if the user was not
logged in. In this case the
Error Reporting system will use other data, such as remote IP address, to
distinguish affected users. See affected_users_count in
ErrorGroupStats .
string user = 2;
Returns
Type
Description
String
The user.
getUserBytes()
public abstract ByteString getUserBytes ()
The user who caused or was affected by the crash.
This can be a user ID, an email address, or an arbitrary token that
uniquely identifies the user.
When sending an error report, leave this field empty if the user was not
logged in. In this case the
Error Reporting system will use other data, such as remote IP address, to
distinguish affected users. See affected_users_count in
ErrorGroupStats .
string user = 2;
Returns
Type
Description
ByteString
The bytes for user.
hasHttpRequest()
public abstract boolean hasHttpRequest ()
The HTTP request which was processed when the error was
triggered.
.google.devtools.clouderrorreporting.v1beta1.HttpRequestContext http_request = 1;
Returns
Type
Description
boolean
Whether the httpRequest field is set.
hasReportLocation()
public abstract boolean hasReportLocation ()
The location in the source code where the decision was made to
report the error, usually the place where it was logged.
For a logged exception this would be the source line where the
exception is logged, usually close to the place where it was
caught.
.google.devtools.clouderrorreporting.v1beta1.SourceLocation report_location = 3;
Returns
Type
Description
boolean
Whether the reportLocation field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
