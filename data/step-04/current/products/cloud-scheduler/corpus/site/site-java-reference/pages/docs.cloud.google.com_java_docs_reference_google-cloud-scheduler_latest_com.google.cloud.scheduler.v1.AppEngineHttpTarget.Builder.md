---
title: "Class AppEngineHttpTarget.Builder (2.88.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder
  title: "Class AppEngineHttpTarget.Builder (2.88.0) \_|\_ Java client libraries \_\
    |\_ Google Cloud Documentation"
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
Class AppEngineHttpTarget.Builder (2.88.0)
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
public static final class AppEngineHttpTarget . Builder extends GeneratedMessage . Builder<AppEngineHttpTarget . Builder > implements AppEngineHttpTargetOrBuilder
App Engine target. The job will be pushed to a job handler by means
of an HTTP request via an
http_method such
as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an
HTTP response code in the range [200 - 299]. Error 503 is
considered an App Engine system error instead of an application
error. Requests returning error 503 will be retried regardless of
retry configuration and not counted against retry counts. Any other
response code, or a failure to receive a response before the
deadline, constitutes a failed attempt.
Protobuf type google.cloud.scheduler.v1.AppEngineHttpTarget
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AppEngineHttpTarget.Builder
Implements
AppEngineHttpTargetOrBuilder
Inherited Members
AbstractMessage.Builder.findInitializationErrors()
AbstractMessage.Builder.getInitializationErrorString()
AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite)
AbstractMessage.Builder.mergeFrom(byte[])
AbstractMessage.Builder.mergeFrom(byte[],ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(byte[],int,int)
AbstractMessage.Builder.mergeFrom(byte[],int,int,ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(ByteString)
AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(CodedInputStream)
AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite)
AbstractMessage.Builder.mergeFrom(Message)
AbstractMessage.Builder.mergeFrom(InputStream)
AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite)
AbstractMessage.Builder.newUninitializedMessageException(Message)
AbstractMessage.Builder.toString()
AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>)
AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>)
AbstractMessageLite.Builder.internalMergeFrom(MessageType)
AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream)
AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite)
AbstractMessageLite.Builder.mergeFrom(MessageLite)
AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite)
GeneratedMessage.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object)
GeneratedMessage.Builder.clear()
GeneratedMessage.Builder.clearField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.clearOneof(Descriptors.OneofDescriptor)
GeneratedMessage.Builder.clone()
GeneratedMessage.Builder.getAllFields()
GeneratedMessage.Builder.getDescriptorForType()
GeneratedMessage.Builder.getField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.getFieldBuilder(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor)
GeneratedMessage.Builder.getParentForChildren()
GeneratedMessage.Builder.getRepeatedField(Descriptors.FieldDescriptor,int)
GeneratedMessage.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int)
GeneratedMessage.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor)
com.google.protobuf.GeneratedMessage.Builder.getUnknownFieldSetBuilder()
GeneratedMessage.Builder.getUnknownFields()
GeneratedMessage.Builder.hasField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.hasOneof(Descriptors.OneofDescriptor)
GeneratedMessage.Builder.internalGetFieldAccessorTable()
GeneratedMessage.Builder.internalGetMapField(int)
com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int)
GeneratedMessage.Builder.internalGetMutableMapField(int)
com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int)
GeneratedMessage.Builder.isClean()
GeneratedMessage.Builder.isInitialized()
GeneratedMessage.Builder.markClean()
GeneratedMessage.Builder.mergeUnknownFields(UnknownFieldSet)
com.google.protobuf.GeneratedMessage.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString)
com.google.protobuf.GeneratedMessage.Builder.mergeUnknownVarintField(int,int)
GeneratedMessage.Builder.newBuilderForField(Descriptors.FieldDescriptor)
GeneratedMessage.Builder.onBuilt()
GeneratedMessage.Builder.onChanged()
com.google.protobuf.GeneratedMessage.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int)
GeneratedMessage.Builder.setField(Descriptors.FieldDescriptor,Object)
GeneratedMessage.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object)
com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder)
GeneratedMessage.Builder.setUnknownFields(UnknownFieldSet)
com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldsProto3(com.google.protobuf.UnknownFieldSet)
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Methods
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
Methods
build()
public AppEngineHttpTarget build ()
Returns
Type
Description
AppEngineHttpTarget
buildPartial()
public AppEngineHttpTarget buildPartial ()
Returns
Type
Description
AppEngineHttpTarget
clear()
public AppEngineHttpTarget . Builder clear ()
Returns
Type
Description
AppEngineHttpTarget.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearAppEngineRouting()
public AppEngineHttpTarget . Builder clearAppEngineRouting ()
App Engine Routing setting for the job.
.google.cloud.scheduler.v1.AppEngineRouting app_engine_routing = 2;
Returns
Type
Description
AppEngineHttpTarget.Builder
clearBody()
public AppEngineHttpTarget . Builder clearBody ()
Body.
HTTP request body. A request body is allowed only if the HTTP method is
POST or PUT. It will result in invalid argument error to set a body on a
job with an incompatible
HttpMethod .
bytes body = 5;
Returns
Type
Description
AppEngineHttpTarget.Builder
This builder for chaining.
clearHeaders()
public AppEngineHttpTarget . Builder clearHeaders ()
Returns
Type
Description
AppEngineHttpTarget.Builder
clearHttpMethod()
public AppEngineHttpTarget . Builder clearHttpMethod ()
The HTTP method to use for the request. PATCH and OPTIONS are not
permitted.
.google.cloud.scheduler.v1.HttpMethod http_method = 1;
Returns
Type
Description
AppEngineHttpTarget.Builder
This builder for chaining.
clearRelativeUri()
public AppEngineHttpTarget . Builder clearRelativeUri ()
The relative URI.
The relative URL must begin with "/" and must be a valid HTTP relative URL.
It can contain a path, query string arguments, and # fragments.
If the relative URL is empty, then the root path "/" will be used.
No spaces are allowed, and the maximum length allowed is 2083 characters.
string relative_uri = 3;
Returns
Type
Description
AppEngineHttpTarget.Builder
This builder for chaining.
containsHeaders(String key)
public boolean containsHeaders ( String key )
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
public AppEngineRouting getAppEngineRouting ()
App Engine Routing setting for the job.
.google.cloud.scheduler.v1.AppEngineRouting app_engine_routing = 2;
Returns
Type
Description
AppEngineRouting
The appEngineRouting.
getAppEngineRoutingBuilder()
public AppEngineRouting . Builder getAppEngineRoutingBuilder ()
App Engine Routing setting for the job.
.google.cloud.scheduler.v1.AppEngineRouting app_engine_routing = 2;
Returns
Type
Description
AppEngineRouting.Builder
getAppEngineRoutingOrBuilder()
public AppEngineRoutingOrBuilder getAppEngineRoutingOrBuilder ()
App Engine Routing setting for the job.
.google.cloud.scheduler.v1.AppEngineRouting app_engine_routing = 2;
Returns
Type
Description
AppEngineRoutingOrBuilder
getBody()
public ByteString getBody ()
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
getDefaultInstanceForType()
public AppEngineHttpTarget getDefaultInstanceForType ()
Returns
Type
Description
AppEngineHttpTarget
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getHeaders() (deprecated)
public Map<String , String > getHeaders ()
Use #getHeadersMap() instead.
Returns
Type
Description
Map < String , String >
getHeadersCount()
public int getHeadersCount ()
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
public Map<String , String > getHeadersMap ()
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
public String getHeadersOrDefault ( String key , String defaultValue )
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
public String getHeadersOrThrow ( String key )
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
public HttpMethod getHttpMethod ()
The HTTP method to use for the request. PATCH and OPTIONS are not
permitted.
.google.cloud.scheduler.v1.HttpMethod http_method = 1;
Returns
Type
Description
HttpMethod
The httpMethod.
getHttpMethodValue()
public int getHttpMethodValue ()
The HTTP method to use for the request. PATCH and OPTIONS are not
permitted.
.google.cloud.scheduler.v1.HttpMethod http_method = 1;
Returns
Type
Description
int
The enum numeric value on the wire for httpMethod.
getMutableHeaders() (deprecated)
public Map<String , String > getMutableHeaders ()
Use alternate mutation accessors instead.
Returns
Type
Description
Map < String , String >
getRelativeUri()
public String getRelativeUri ()
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
public ByteString getRelativeUriBytes ()
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
public boolean hasAppEngineRouting ()
App Engine Routing setting for the job.
.google.cloud.scheduler.v1.AppEngineRouting app_engine_routing = 2;
Returns
Type
Description
boolean
Whether the appEngineRouting field is set.
internalGetFieldAccessorTable()
protected GeneratedMessage . FieldAccessorTable internalGetFieldAccessorTable ()
Returns
Type
Description
FieldAccessorTable
Overrides
GeneratedMessage.Builder<BuilderType>.internalGetFieldAccessorTable()
internalGetMapFieldReflection(int number)
protected MapFieldReflectionAccessor internalGetMapFieldReflection ( int number )
Parameter
Name
Description
number
int
Returns
Type
Description
com.google.protobuf.MapFieldReflectionAccessor
Overrides
com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int)
internalGetMutableMapFieldReflection(int number)
protected MapFieldReflectionAccessor internalGetMutableMapFieldReflection ( int number )
Parameter
Name
Description
number
int
Returns
Type
Description
com.google.protobuf.MapFieldReflectionAccessor
Overrides
com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int)
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.Builder<BuilderType>.isInitialized()
mergeAppEngineRouting(AppEngineRouting value)
public AppEngineHttpTarget . Builder mergeAppEngineRouting ( AppEngineRouting value )
App Engine Routing setting for the job.
.google.cloud.scheduler.v1.AppEngineRouting app_engine_routing = 2;
Parameter
Name
Description
value
AppEngineRouting
Returns
Type
Description
AppEngineHttpTarget.Builder
mergeFrom(AppEngineHttpTarget other)
public AppEngineHttpTarget . Builder mergeFrom ( AppEngineHttpTarget other )
Parameter
Name
Description
other
AppEngineHttpTarget
Returns
Type
Description
AppEngineHttpTarget.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AppEngineHttpTarget . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
input
CodedInputStream
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
AppEngineHttpTarget.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AppEngineHttpTarget . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AppEngineHttpTarget.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
putAllHeaders(Map<String,String> values)
public AppEngineHttpTarget . Builder putAllHeaders ( Map<String , String > values )
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
values
Map < String , String >
Returns
Type
Description
AppEngineHttpTarget.Builder
putHeaders(String key, String value)
public AppEngineHttpTarget . Builder putHeaders ( String key , String value )
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
value
String
Returns
Type
Description
AppEngineHttpTarget.Builder
removeHeaders(String key)
public AppEngineHttpTarget . Builder removeHeaders ( String key )
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
AppEngineHttpTarget.Builder
setAppEngineRouting(AppEngineRouting value)
public AppEngineHttpTarget . Builder setAppEngineRouting ( AppEngineRouting value )
App Engine Routing setting for the job.
.google.cloud.scheduler.v1.AppEngineRouting app_engine_routing = 2;
Parameter
Name
Description
value
AppEngineRouting
Returns
Type
Description
AppEngineHttpTarget.Builder
setAppEngineRouting(AppEngineRouting.Builder builderForValue)
public AppEngineHttpTarget . Builder setAppEngineRouting ( AppEngineRouting . Builder builderForValue )
App Engine Routing setting for the job.
.google.cloud.scheduler.v1.AppEngineRouting app_engine_routing = 2;
Parameter
Name
Description
builderForValue
AppEngineRouting.Builder
Returns
Type
Description
AppEngineHttpTarget.Builder
setBody(ByteString value)
public AppEngineHttpTarget . Builder setBody ( ByteString value )
Body.
HTTP request body. A request body is allowed only if the HTTP method is
POST or PUT. It will result in invalid argument error to set a body on a
job with an incompatible
HttpMethod .
bytes body = 5;
Parameter
Name
Description
value
ByteString The body to set.
Returns
Type
Description
AppEngineHttpTarget.Builder
This builder for chaining.
setHttpMethod(HttpMethod value)
public AppEngineHttpTarget . Builder setHttpMethod ( HttpMethod value )
The HTTP method to use for the request. PATCH and OPTIONS are not
permitted.
.google.cloud.scheduler.v1.HttpMethod http_method = 1;
Parameter
Name
Description
value
HttpMethod The httpMethod to set.
Returns
Type
Description
AppEngineHttpTarget.Builder
This builder for chaining.
setHttpMethodValue(int value)
public AppEngineHttpTarget . Builder setHttpMethodValue ( int value )
The HTTP method to use for the request. PATCH and OPTIONS are not
permitted.
.google.cloud.scheduler.v1.HttpMethod http_method = 1;
Parameter
Name
Description
value
int The enum numeric value on the wire for httpMethod to set.
Returns
Type
Description
AppEngineHttpTarget.Builder
This builder for chaining.
setRelativeUri(String value)
public AppEngineHttpTarget . Builder setRelativeUri ( String value )
The relative URI.
The relative URL must begin with "/" and must be a valid HTTP relative URL.
It can contain a path, query string arguments, and # fragments.
If the relative URL is empty, then the root path "/" will be used.
No spaces are allowed, and the maximum length allowed is 2083 characters.
string relative_uri = 3;
Parameter
Name
Description
value
String The relativeUri to set.
Returns
Type
Description
AppEngineHttpTarget.Builder
This builder for chaining.
setRelativeUriBytes(ByteString value)
public AppEngineHttpTarget . Builder setRelativeUriBytes ( ByteString value )
The relative URI.
The relative URL must begin with "/" and must be a valid HTTP relative URL.
It can contain a path, query string arguments, and # fragments.
If the relative URL is empty, then the root path "/" will be used.
No spaces are allowed, and the maximum length allowed is 2083 characters.
string relative_uri = 3;
Parameter
Name
Description
value
ByteString The bytes for relativeUri to set.
Returns
Type
Description
AppEngineHttpTarget.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
