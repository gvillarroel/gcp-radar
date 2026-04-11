---
title: "Class HttpRequest (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.HttpRequest
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.HttpRequest
  title: "Class HttpRequest (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class HttpRequest (3.29.0)
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
public final class HttpRequest implements Serializable
Objects of this class represent information about the (optional) HTTP request associated with a
log entry.
See Also: Http Request
Inheritance
Object >
HttpRequest
Implements
Serializable
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
Static Fields
EMPTY
public static final HttpRequest EMPTY
Field Value
Type
Description
HttpRequest
Static Methods
newBuilder()
public static HttpRequest . Builder newBuilder ()
Returns a builder for HttpRequest objects.
Returns
Type
Description
HttpRequest.Builder
Methods
cacheHit()
public boolean cacheHit ()
Returns whether or not an entity was served from cache (with or without validation). If not
set, this method returns false .
Returns
Type
Description
boolean
cacheLookup()
public boolean cacheLookup ()
Returns whether or not a cache lookup was attempted. If not set, this method returns
false .
Returns
Type
Description
boolean
cacheValidatedWithOriginServer()
public boolean cacheValidatedWithOriginServer ()
Returns whether or not the response was validated with the origin server before being served
from cache. If not set, this method returns false . This field is only meaningful if
#cacheHit() is set to true .
Returns
Type
Description
boolean
equals(Object obj)
public boolean equals ( Object obj )
Parameter
Name
Description
obj
Object
Returns
Type
Description
boolean
Overrides
Object.equals(Object)
getCacheFillBytes()
public Long getCacheFillBytes ()
Returns the number of HTTP response bytes inserted into cache. Set only when a cache fill was
attempted.
Returns
Type
Description
Long
getLatency()
public Duration getLatency ()
Obsolete
Use getLatencyDuration() instead
This feature is stable for usage in this major version, but may be deprecated in a future release.
This method is obsolete. Use #getLatencyDuration() instead.
Returns
Type
Description
org.threeten.bp.Duration
getLatencyDuration()
public Duration getLatencyDuration ()
Returns the processing latency on the server, from the time the request was received until the
response was sent.
Returns
Type
Description
Duration
the latency, for null if not populated.
getReferer()
public String getReferer ()
Returns the referer URL of the request, as defined in HTTP/1.1 Header Field Definitions.
See Also: HTTP/1.1 Header Field Definitions
Returns
Type
Description
String
getRemoteIp()
public String getRemoteIp ()
Returns the IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples:
192.168.1.1 , FE80::0202:B3FF:FE1E:8329 .
Returns
Type
Description
String
getRequestMethod()
public HttpRequest . RequestMethod getRequestMethod ()
Returns the HTTP request method.
Returns
Type
Description
HttpRequest.RequestMethod
getRequestSize()
public Long getRequestSize ()
Returns the size of the HTTP request message in bytes, including the request headers and the
request body.
Returns
Type
Description
Long
getRequestUrl()
public String getRequestUrl ()
Returns the requested URL. Request URL contains the scheme ( http , https ), the
host name, the path and the query portion of the URL that was requested. Example:
http://example.com/some/info?color=red .
Returns
Type
Description
String
getResponseSize()
public Long getResponseSize ()
Returns the size of the HTTP response message sent back to the client, in bytes, including the
response headers and the response body.
Returns
Type
Description
Long
getServerIp()
public String getServerIp ()
Returns the IP address (IPv4 or IPv6) of the origin server that the request was sent to.
Examples: 192.168.1.1 , FE80::0202:B3FF:FE1E:8329 .
Returns
Type
Description
String
getStatus()
public Integer getStatus ()
Returns the response code indicating the status of response.
Returns
Type
Description
Integer
getUserAgent()
public String getUserAgent ()
Returns the user agent sent by the client. Example: Mozilla/4.0 (compatible; MSIE 6.0;
Windows 98; Q312461; .NET CLR 1.0.3705) .
Returns
Type
Description
String
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
toBuilder()
public HttpRequest . Builder toBuilder ()
Returns a builder for this object.
Returns
Type
Description
HttpRequest.Builder
toString()
public String toString ()
Returns
Type
Description
String
Overrides
Object.toString()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
