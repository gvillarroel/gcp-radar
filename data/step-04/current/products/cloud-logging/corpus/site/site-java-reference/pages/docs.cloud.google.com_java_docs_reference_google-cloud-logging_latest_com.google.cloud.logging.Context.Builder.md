---
title: "Class Context.Builder (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Context.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Context.Builder
  title: "Class Context.Builder (3.29.0) \_|\_ Java client libraries \_|\_ Google\
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
Class Context.Builder (3.29.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.29.0 (latest)
3.28.0
3.26.0
3.24.0
3.23.10
3.22.6
3.21.4
3.20.7
3.19.0
3.18.0
3.17.2
3.16.2
3.15.17
3.14.9
3.13.7
3.12.1
3.11.10
3.10.7
3.9.0
3.8.0
3.7.6
3.6.4
3.5.3
public static final class Context . Builder
A builder for {@see Context} objects.
Inheritance
java.lang.Object >
Context.Builder
Inherited Members
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.toString()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Methods
build()
public Context build ()
Creates a {@see Context} object for this builder.
Returns
Type
Description
Context
loadCloudTraceContext(String cloudTrace)
public Context . Builder loadCloudTraceContext ( String cloudTrace )
Sets the trace id, span id and trace sampled flag values by parsing the string which
represents xCloud Trace Context. The Cloud Trace Context is passed as
x-cloud-trace-context header (can be in Pascal case format). The string format is
TRACE_ID/SPAN_ID;o=TRACE_TRUE .
See Also: Cloud Trace header format.
Parameter
Name
Description
cloudTrace
String
Returns
Type
Description
Context.Builder
loadOpenTelemetryContext()
public Context . Builder loadOpenTelemetryContext ()
Sets the trace id, span id and trace sampled flag values by parsing detected OpenTelemetry
span context.
See Also: OpenTelemetry SpanContext.
Returns
Type
Description
Context.Builder
loadW3CTraceParentContext(String traceParent)
public Context . Builder loadW3CTraceParentContext ( String traceParent )
Sets the trace id, span id and trace sampled flag values by parsing the string which
represents the standard W3C trace context propagation header. The context propagation header
is passed as traceparent header. The method currently supports ONLY version
"00" . The string format is 00-TRACE_ID-SPAN_ID-FLAGS . field of the
version-format value.
See Also: traceparent header value format
Parameter
Name
Description
traceParent
String
Returns
Type
Description
Context.Builder
setReferer(String referer)
public Context . Builder setReferer ( String referer )
Sets the referer URL of the request, as defined in HTTP/1.1 Header Field Definitions.
See Also: HTTP/1.1 Header Field Definitions
Parameter
Name
Description
referer
String
Returns
Type
Description
Context.Builder
setRemoteIp(String remoteIp)
public Context . Builder setRemoteIp ( String remoteIp )
Sets the IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples:
192.168.1.1 , FE80::0202:B3FF:FE1E:8329 .
Parameter
Name
Description
remoteIp
String
Returns
Type
Description
Context.Builder
setRequest(HttpRequest request)
public Context . Builder setRequest ( HttpRequest request )
Sets the HTTP request.
Parameter
Name
Description
request
HttpRequest
Returns
Type
Description
Context.Builder
setRequestMethod(HttpRequest.RequestMethod method)
public Context . Builder setRequestMethod ( HttpRequest . RequestMethod method )
Sets the HTTP request method.
Parameter
Name
Description
method
HttpRequest.RequestMethod
Returns
Type
Description
Context.Builder
setRequestUrl(String url)
public Context . Builder setRequestUrl ( String url )
Parameter
Name
Description
url
String
Returns
Type
Description
Context.Builder
setServerIp(String serverIp)
public Context . Builder setServerIp ( String serverIp )
Sets the IP address (IPv4 or IPv6) of the origin server that the request was sent to.
Examples: 192.168.1.1 , FE80::0202:B3FF:FE1E:8329 .
Parameter
Name
Description
serverIp
String
Returns
Type
Description
Context.Builder
setSpanId(String spanId)
public Context . Builder setSpanId ( String spanId )
Sets the string as a span id value.
Parameter
Name
Description
spanId
String
Returns
Type
Description
Context.Builder
setTraceId(String traceId)
public Context . Builder setTraceId ( String traceId )
Sets the string as a trace id value.
Parameter
Name
Description
traceId
String
Returns
Type
Description
Context.Builder
setTraceSampled(boolean traceSampled)
public Context . Builder setTraceSampled ( boolean traceSampled )
Sets the boolean as trace sampled flag.
Parameter
Name
Description
traceSampled
boolean
Returns
Type
Description
Context.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
