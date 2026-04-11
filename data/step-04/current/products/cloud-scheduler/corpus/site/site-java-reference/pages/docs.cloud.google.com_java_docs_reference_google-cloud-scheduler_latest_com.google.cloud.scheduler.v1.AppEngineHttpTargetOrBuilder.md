---
title: "Interface AppEngineHttpTargetOrBuilder (2.88.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder
  title: "Interface AppEngineHttpTargetOrBuilder (2.88.0) \_|\_ Java client libraries\
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
Interface AppEngineHttpTargetOrBuilder (2.88.0)
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
2.3.13
2.2.0
2.1.23
public interface AppEngineHttpTargetOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
containsHeaders(String key)
public abstract boolean containsHeaders ( String key )
HTTP request headers.
This map contains the header field names and values. Headers can be set
when the job is created.
Cloud Scheduler sets some headers to default values:
User-Agent : By default, this header is
"AppEngine-Google; (+ http://code.google.com/appengine )" .
This header can be modified, but Cloud Scheduler will append
"AppEngine-Google; (+ http://code.google.com/appengine )" to the
modified User-Agent .
X-CloudScheduler : This header will be set to true.
X-CloudScheduler-JobName : This header will contain the job name.
X-CloudScheduler-ScheduleTime : For Cloud Scheduler jobs specified in
the unix-cron format, this header will contain the job schedule as an
offset of UTC parsed according to RFC3339.
If the job has a body
and the following headers are not set by the user, Cloud Scheduler sets
default values:
Content-Type : This will be set to "application/octet-stream" . You
can override this default by explicitly setting Content-Type to a
particular media type when creating the job. For example, you can set
Content-Type to "application/json" .
The headers below are output only. They cannot be set or overridden:
Content-Length : This is computed by Cloud Scheduler.
X-Google-* : For Google internal use only.
X-AppEngine-* : For Google internal use only.
In addition, some App Engine headers, which contain
job-specific information, are also be sent to the job handler.
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
App Engine Routing setting for the job.
.google.cloud.scheduler.v1.AppEngineRouting app_engine_routing = 2;
Returns
Type
Description
AppEngineRouting
The appEngineRouting.
getAppEngineRoutingOrBuilder()
public abstract AppEngineRoutingOrBuilder getAppEngineRoutingOrBuilder ()
App Engine Routing setting for the job.
.google.cloud.scheduler.v1.AppEngineRouting app_engine_routing = 2;
Returns
Type
Description
AppEngineRoutingOrBuilder
getBody()
public abstract ByteString getBody ()
Body.
HTTP request body. A request body is allowed only if the HTTP method is
POST or PUT. It will result in invalid argument error to set a body on a
job with an incompatible
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
This map contains the header field names and values. Headers can be set
when the job is created.
Cloud Scheduler sets some headers to default values:
User-Agent : By default, this header is
"AppEngine-Google; (+ http://code.google.com/appengine )" .
This header can be modified, but Cloud Scheduler will append
"AppEngine-Google; (+ http://code.google.com/appengine )" to the
modified User-Agent .
X-CloudScheduler : This header will be set to true.
X-CloudScheduler-JobName : This header will contain the job name.
X-CloudScheduler-ScheduleTime : For Cloud Scheduler jobs specified in
the unix-cron format, this header will contain the job schedule as an
offset of UTC parsed according to RFC3339.
If the job has a body
and the following headers are not set by the user, Cloud Scheduler sets
default values:
Content-Type : This will be set to "application/octet-stream" . You
can override this default by explicitly setting Content-Type to a
particular media type when creating the job. For example, you can set
Content-Type to "application/json" .
The headers below are output only. They cannot be set or overridden:
Content-Length : This is computed by Cloud Scheduler.
X-Google-* : For Google internal use only.
X-AppEngine-* : For Google internal use only.
In addition, some App Engine headers, which contain
job-specific information, are also be sent to the job handler.
map<string, string> headers = 4;
Returns
Type
Description
int
getHeadersMap()
public abstract Map<String , String > getHeadersMap ()
HTTP request headers.
This map contains the header field names and values. Headers can be set
when the job is created.
Cloud Scheduler sets some headers to default values:
User-Agent : By default, this header is
"AppEngine-Google; (+ http://code.google.com/appengine )" .
This header can be modified, but Cloud Scheduler will append
"AppEngine-Google; (+ http://code.google.com/appengine )" to the
modified User-Agent .
X-CloudScheduler : This header will be set to true.
X-CloudScheduler-JobName : This header will contain the job name.
X-CloudScheduler-ScheduleTime : For Cloud Scheduler jobs specified in
the unix-cron format, this header will contain the job schedule as an
offset of UTC parsed according to RFC3339.
If the job has a body
and the following headers are not set by the user, Cloud Scheduler sets
default values:
Content-Type : This will be set to "application/octet-stream" . You
can override this default by explicitly setting Content-Type to a
particular media type when creating the job. For example, you can set
Content-Type to "application/json" .
The headers below are output only. They cannot be set or overridden:
Content-Length : This is computed by Cloud Scheduler.
X-Google-* : For Google internal use only.
X-AppEngine-* : For Google internal use only.
In addition, some App Engine headers, which contain
job-specific information, are also be sent to the job handler.
map<string, string> headers = 4;
Returns
Type
Description
Map < String , String >
getHeadersOrDefault(String key, String defaultValue)
public abstract String getHeadersOrDefault ( String key , String defaultValue )
HTTP request headers.
This map contains the header field names and values. Headers can be set
when the job is created.
Cloud Scheduler sets some headers to default values:
User-Agent : By default, this header is
"AppEngine-Google; (+ http://code.google.com/appengine )" .
This header can be modified, but Cloud Scheduler will append
"AppEngine-Google; (+ http://code.google.com/appengine )" to the
modified User-Agent .
X-CloudScheduler : This header will be set to true.
X-CloudScheduler-JobName : This header will contain the job name.
X-CloudScheduler-ScheduleTime : For Cloud Scheduler jobs specified in
the unix-cron format, this header will contain the job schedule as an
offset of UTC parsed according to RFC3339.
If the job has a body
and the following headers are not set by the user, Cloud Scheduler sets
default values:
Content-Type : This will be set to "application/octet-stream" . You
can override this default by explicitly setting Content-Type to a
particular media type when creating the job. For example, you can set
Content-Type to "application/json" .
The headers below are output only. They cannot be set or overridden:
Content-Length : This is computed by Cloud Scheduler.
X-Google-* : For Google internal use only.
X-AppEngine-* : For Google internal use only.
In addition, some App Engine headers, which contain
job-specific information, are also be sent to the job handler.
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
This map contains the header field names and values. Headers can be set
when the job is created.
Cloud Scheduler sets some headers to default values:
User-Agent : By default, this header is
"AppEngine-Google; (+ http://code.google.com/appengine )" .
This header can be modified, but Cloud Scheduler will append
"AppEngine-Google; (+ http://code.google.com/appengine )" to the
modified User-Agent .
X-CloudScheduler : This header will be set to true.
X-CloudScheduler-JobName : This header will contain the job name.
X-CloudScheduler-ScheduleTime : For Cloud Scheduler jobs specified in
the unix-cron format, this header will contain the job schedule as an
offset of UTC parsed according to RFC3339.
If the job has a body
and the following headers are not set by the user, Cloud Scheduler sets
default values:
Content-Type : This will be set to "application/octet-stream" . You
can override this default by explicitly setting Content-Type to a
particular media type when creating the job. For example, you can set
Content-Type to "application/json" .
The headers below are output only. They cannot be set or overridden:
Content-Length : This is computed by Cloud Scheduler.
X-Google-* : For Google internal use only.
X-AppEngine-* : For Google internal use only.
In addition, some App Engine headers, which contain
job-specific information, are also be sent to the job handler.
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
The HTTP method to use for the request. PATCH and OPTIONS are not
permitted.
.google.cloud.scheduler.v1.HttpMethod http_method = 1;
Returns
Type
Description
HttpMethod
The httpMethod.
getHttpMethodValue()
public abstract int getHttpMethodValue ()
The HTTP method to use for the request. PATCH and OPTIONS are not
permitted.
.google.cloud.scheduler.v1.HttpMethod http_method = 1;
Returns
Type
Description
int
The enum numeric value on the wire for httpMethod.
getRelativeUri()
public abstract String getRelativeUri ()
The relative URI.
The relative URL must begin with "/" and must be a valid HTTP relative URL.
It can contain a path, query string arguments, and # fragments.
If the relative URL is empty, then the root path "/" will be used.
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
The relative URL must begin with "/" and must be a valid HTTP relative URL.
It can contain a path, query string arguments, and # fragments.
If the relative URL is empty, then the root path "/" will be used.
No spaces are allowed, and the maximum length allowed is 2083 characters.
string relative_uri = 3;
Returns
Type
Description
ByteString
The bytes for relativeUri.
hasAppEngineRouting()
public abstract boolean hasAppEngineRouting ()
App Engine Routing setting for the job.
.google.cloud.scheduler.v1.AppEngineRouting app_engine_routing = 2;
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
