---
title: "Interface AppEngineHttpRequestOrBuilder (2.88.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.AppEngineHttpRequestOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.AppEngineHttpRequestOrBuilder
  title: "Interface AppEngineHttpRequestOrBuilder (2.88.0) \_|\_ Java client libraries\
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
Interface AppEngineHttpRequestOrBuilder (2.88.0)
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
2.3.12
2.2.0
2.1.11
public interface AppEngineHttpRequestOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
containsHeaders(String key)
public abstract boolean containsHeaders ( String key )
HTTP request headers.
This map contains the header field names and values.
Headers can be set when the
task is created .
Repeated headers are not supported but a header value can contain commas.
Cloud Tasks sets some headers to default values:
User-Agent : By default, this header is
"AppEngine-Google; (+ http://code.google.com/appengine )" .
This header can be modified, but Cloud Tasks will append
"AppEngine-Google; (+ http://code.google.com/appengine )" to the
modified User-Agent .
If the task has a body ,
Cloud Tasks sets the following headers:
Content-Type : By default, the Content-Type header is set to
"application/octet-stream" . The default can be overridden by explicitly
setting Content-Type to a particular media type when the
task is created .
For example, Content-Type can be set to "application/json" .
Content-Length : This is computed by Cloud Tasks. This value is
output only. It cannot be changed.
The headers below cannot be set or overridden:
Host
X-Google-*
X-AppEngine-*
In addition, Cloud Tasks sets some headers when the task is dispatched,
such as headers containing information about the task; see
request
headers .
These headers are set only when the task is dispatched, so they are not
visible when the task is returned in a Cloud Tasks response.
Although there is no specific limit for the maximum number of headers or
the size, there is a limit on the maximum size of the
Task . For more information, see the
CreateTask documentation.
map<string, string> headers = 4;
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
getAppEngineRouting()
public abstract AppEngineRouting getAppEngineRouting ()
Task-level setting for App Engine routing.
If app_engine_routing_override is set on the
queue , this
value is used for all tasks in the queue, no matter what the setting is
for the task-level
app_engine_routing .
.google.cloud.tasks.v2.AppEngineRouting app_engine_routing = 2;
Returns
Type
Description
AppEngineRouting
The appEngineRouting.
getAppEngineRoutingOrBuilder()
public abstract AppEngineRoutingOrBuilder getAppEngineRoutingOrBuilder ()
Task-level setting for App Engine routing.
If app_engine_routing_override is set on the
queue , this
value is used for all tasks in the queue, no matter what the setting is
for the task-level
app_engine_routing .
.google.cloud.tasks.v2.AppEngineRouting app_engine_routing = 2;
Returns
Type
Description
AppEngineRoutingOrBuilder
getBody()
public abstract ByteString getBody ()
HTTP request body.
A request body is allowed only if the HTTP method is POST or PUT. It is
an error to set a body on a task with an incompatible
HttpMethod .
bytes body = 5;
Returns
Type
Description
ByteString
The body.
getHeaders() (deprecated)
public abstract Map<String , String > getHeaders ()
Use #getHeadersMap() instead.
Returns
Type
Description
Map < String , String >
getHeadersCount()
public abstract int getHeadersCount ()
HTTP request headers.
This map contains the header field names and values.
Headers can be set when the
task is created .
Repeated headers are not supported but a header value can contain commas.
Cloud Tasks sets some headers to default values:
User-Agent : By default, this header is
"AppEngine-Google; (+ http://code.google.com/appengine )" .
This header can be modified, but Cloud Tasks will append
"AppEngine-Google; (+ http://code.google.com/appengine )" to the
modified User-Agent .
If the task has a body ,
Cloud Tasks sets the following headers:
Content-Type : By default, the Content-Type header is set to
"application/octet-stream" . The default can be overridden by explicitly
setting Content-Type to a particular media type when the
task is created .
For example, Content-Type can be set to "application/json" .
Content-Length : This is computed by Cloud Tasks. This value is
output only. It cannot be changed.
The headers below cannot be set or overridden:
Host
X-Google-*
X-AppEngine-*
In addition, Cloud Tasks sets some headers when the task is dispatched,
such as headers containing information about the task; see
request
headers .
These headers are set only when the task is dispatched, so they are not
visible when the task is returned in a Cloud Tasks response.
Although there is no specific limit for the maximum number of headers or
the size, there is a limit on the maximum size of the
Task . For more information, see the
CreateTask documentation.
map<string, string> headers = 4;
Returns
Type
Description
int
getHeadersMap()
public abstract Map<String , String > getHeadersMap ()
HTTP request headers.
This map contains the header field names and values.
Headers can be set when the
task is created .
Repeated headers are not supported but a header value can contain commas.
Cloud Tasks sets some headers to default values:
User-Agent : By default, this header is
"AppEngine-Google; (+ http://code.google.com/appengine )" .
This header can be modified, but Cloud Tasks will append
"AppEngine-Google; (+ http://code.google.com/appengine )" to the
modified User-Agent .
If the task has a body ,
Cloud Tasks sets the following headers:
Content-Type : By default, the Content-Type header is set to
"application/octet-stream" . The default can be overridden by explicitly
setting Content-Type to a particular media type when the
task is created .
For example, Content-Type can be set to "application/json" .
Content-Length : This is computed by Cloud Tasks. This value is
output only. It cannot be changed.
The headers below cannot be set or overridden:
Host
X-Google-*
X-AppEngine-*
In addition, Cloud Tasks sets some headers when the task is dispatched,
such as headers containing information about the task; see
request
headers .
These headers are set only when the task is dispatched, so they are not
visible when the task is returned in a Cloud Tasks response.
Although there is no specific limit for the maximum number of headers or
the size, there is a limit on the maximum size of the
Task . For more information, see the
CreateTask documentation.
map<string, string> headers = 4;
Returns
Type
Description
Map < String , String >
getHeadersOrDefault(String key, String defaultValue)
public abstract String getHeadersOrDefault ( String key , String defaultValue )
HTTP request headers.
This map contains the header field names and values.
Headers can be set when the
task is created .
Repeated headers are not supported but a header value can contain commas.
Cloud Tasks sets some headers to default values:
User-Agent : By default, this header is
"AppEngine-Google; (+ http://code.google.com/appengine )" .
This header can be modified, but Cloud Tasks will append
"AppEngine-Google; (+ http://code.google.com/appengine )" to the
modified User-Agent .
If the task has a body ,
Cloud Tasks sets the following headers:
Content-Type : By default, the Content-Type header is set to
"application/octet-stream" . The default can be overridden by explicitly
setting Content-Type to a particular media type when the
task is created .
For example, Content-Type can be set to "application/json" .
Content-Length : This is computed by Cloud Tasks. This value is
output only. It cannot be changed.
The headers below cannot be set or overridden:
Host
X-Google-*
X-AppEngine-*
In addition, Cloud Tasks sets some headers when the task is dispatched,
such as headers containing information about the task; see
request
headers .
These headers are set only when the task is dispatched, so they are not
visible when the task is returned in a Cloud Tasks response.
Although there is no specific limit for the maximum number of headers or
the size, there is a limit on the maximum size of the
Task . For more information, see the
CreateTask documentation.
map<string, string> headers = 4;
Parameters
Name
Description
key
String
defaultValue
String
Returns
Type
Description
String
getHeadersOrThrow(String key)
public abstract String getHeadersOrThrow ( String key )
HTTP request headers.
This map contains the header field names and values.
Headers can be set when the
task is created .
Repeated headers are not supported but a header value can contain commas.
Cloud Tasks sets some headers to default values:
User-Agent : By default, this header is
"AppEngine-Google; (+ http://code.google.com/appengine )" .
This header can be modified, but Cloud Tasks will append
"AppEngine-Google; (+ http://code.google.com/appengine )" to the
modified User-Agent .
If the task has a body ,
Cloud Tasks sets the following headers:
Content-Type : By default, the Content-Type header is set to
"application/octet-stream" . The default can be overridden by explicitly
setting Content-Type to a particular media type when the
task is created .
For example, Content-Type can be set to "application/json" .
Content-Length : This is computed by Cloud Tasks. This value is
output only. It cannot be changed.
The headers below cannot be set or overridden:
Host
X-Google-*
X-AppEngine-*
In addition, Cloud Tasks sets some headers when the task is dispatched,
such as headers containing information about the task; see
request
headers .
These headers are set only when the task is dispatched, so they are not
visible when the task is returned in a Cloud Tasks response.
Although there is no specific limit for the maximum number of headers or
the size, there is a limit on the maximum size of the
Task . For more information, see the
CreateTask documentation.
map<string, string> headers = 4;
Parameter
Name
Description
key
String
Returns
Type
Description
String
getHttpMethod()
public abstract HttpMethod getHttpMethod ()
The HTTP method to use for the request. The default is POST.
The app's request handler for the task's target URL must be able to handle
HTTP requests with this http_method, otherwise the task attempt fails with
error code 405 (Method Not Allowed). See Writing a push task request
handler
and the App Engine documentation for your runtime on How Requests are
Handled .
.google.cloud.tasks.v2.HttpMethod http_method = 1;
Returns
Type
Description
HttpMethod
The httpMethod.
getHttpMethodValue()
public abstract int getHttpMethodValue ()
The HTTP method to use for the request. The default is POST.
The app's request handler for the task's target URL must be able to handle
HTTP requests with this http_method, otherwise the task attempt fails with
error code 405 (Method Not Allowed). See Writing a push task request
handler
and the App Engine documentation for your runtime on How Requests are
Handled .
.google.cloud.tasks.v2.HttpMethod http_method = 1;
Returns
Type
Description
int
The enum numeric value on the wire for httpMethod.
getRelativeUri()
public abstract String getRelativeUri ()
The relative URI.
The relative URI must begin with "/" and must be a valid HTTP relative URI.
It can contain a path and query string arguments.
If the relative URI is empty, then the root path "/" will be used.
No spaces are allowed, and the maximum length allowed is 2083 characters.
string relative_uri = 3;
Returns
Type
Description
String
The relativeUri.
getRelativeUriBytes()
public abstract ByteString getRelativeUriBytes ()
The relative URI.
The relative URI must begin with "/" and must be a valid HTTP relative URI.
It can contain a path and query string arguments.
If the relative URI is empty, then the root path "/" will be used.
No spaces are allowed, and the maximum length allowed is 2083 characters.
string relative_uri = 3;
Returns
Type
Description
ByteString
The bytes for relativeUri.
hasAppEngineRouting()
public abstract boolean hasAppEngineRouting ()
Task-level setting for App Engine routing.
If app_engine_routing_override is set on the
queue , this
value is used for all tasks in the queue, no matter what the setting is
for the task-level
app_engine_routing .
.google.cloud.tasks.v2.AppEngineRouting app_engine_routing = 2;
Returns
Type
Description
boolean
Whether the appEngineRouting field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
