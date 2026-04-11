---
title: "Class AppEngineHttpTarget (2.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget
  title: "Class AppEngineHttpTarget (2.88.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AppEngineHttpTarget (2.88.0)
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
public final class AppEngineHttpTarget extends GeneratedMessage implements AppEngineHttpTargetOrBuilder
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
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
AppEngineHttpTarget
Implements
AppEngineHttpTargetOrBuilder
Inherited Members
AbstractMessage.equals(Object)
AbstractMessage.findInitializationErrors()
AbstractMessage.getInitializationErrorString()
AbstractMessage.hashCode()
AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>)
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent)
AbstractMessage.toString()
AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>)
AbstractMessageLite.checkByteStringIsUtf8(ByteString)
AbstractMessageLite.toByteArray()
AbstractMessageLite.toByteString()
AbstractMessageLite.writeDelimitedTo(OutputStream)
AbstractMessageLite.writeTo(OutputStream)
com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message)
com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message)
com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT)
com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int)
GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream)
GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)
GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream)
GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite)
GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream)
GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)
com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>)
com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int)
com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int)
com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int)
com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int)
com.google.protobuf.GeneratedMessage.canUseUnsafe()
GeneratedMessage.computeStringSize(int,Object)
GeneratedMessage.computeStringSizeNoTag(Object)
com.google.protobuf.GeneratedMessage.emptyBooleanList()
com.google.protobuf.GeneratedMessage.emptyDoubleList()
com.google.protobuf.GeneratedMessage.emptyFloatList()
com.google.protobuf.GeneratedMessage.emptyIntList()
com.google.protobuf.GeneratedMessage.emptyLongList()
GeneratedMessage.getAllFields()
GeneratedMessage.getDescriptorForType()
GeneratedMessage.getField(Descriptors.FieldDescriptor)
GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor)
GeneratedMessage.getParserForType()
GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int)
GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor)
GeneratedMessage.getSerializedSize()
GeneratedMessage.getUnknownFields()
GeneratedMessage.hasField(Descriptors.FieldDescriptor)
GeneratedMessage.hasOneof(Descriptors.OneofDescriptor)
GeneratedMessage.internalGetFieldAccessorTable()
GeneratedMessage.internalGetMapField(int)
com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int)
GeneratedMessage.isInitialized()
com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object)
GeneratedMessage.makeExtensionsImmutable()
com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite)
com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter)
GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int)
com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int)
GeneratedMessage.writeReplace()
GeneratedMessage.writeString(CodedOutputStream,int,Object)
GeneratedMessage.writeStringNoTag(CodedOutputStream,Object)
GeneratedMessage.writeTo(CodedOutputStream)
Object.clone()
Object.finalize()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Fields
APP_ENGINE_ROUTING_FIELD_NUMBER
public static final int APP_ENGINE_ROUTING_FIELD_NUMBER
Field Value
Type
Description
int
BODY_FIELD_NUMBER
public static final int BODY_FIELD_NUMBER
Field Value
Type
Description
int
HEADERS_FIELD_NUMBER
public static final int HEADERS_FIELD_NUMBER
Field Value
Type
Description
int
HTTP_METHOD_FIELD_NUMBER
public static final int HTTP_METHOD_FIELD_NUMBER
Field Value
Type
Description
int
RELATIVE_URI_FIELD_NUMBER
public static final int RELATIVE_URI_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static AppEngineHttpTarget getDefaultInstance ()
Returns
Type
Description
AppEngineHttpTarget
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static AppEngineHttpTarget . Builder newBuilder ()
Returns
Type
Description
AppEngineHttpTarget.Builder
newBuilder(AppEngineHttpTarget prototype)
public static AppEngineHttpTarget . Builder newBuilder ( AppEngineHttpTarget prototype )
Parameter
Name
Description
prototype
AppEngineHttpTarget
Returns
Type
Description
AppEngineHttpTarget.Builder
parseDelimitedFrom(InputStream input)
public static AppEngineHttpTarget parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AppEngineHttpTarget
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AppEngineHttpTarget parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
input
InputStream
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
AppEngineHttpTarget
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static AppEngineHttpTarget parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
AppEngineHttpTarget
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static AppEngineHttpTarget parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
data
byte []
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
AppEngineHttpTarget
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static AppEngineHttpTarget parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
AppEngineHttpTarget
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static AppEngineHttpTarget parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
data
ByteString
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
AppEngineHttpTarget
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static AppEngineHttpTarget parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
AppEngineHttpTarget
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static AppEngineHttpTarget parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AppEngineHttpTarget
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static AppEngineHttpTarget parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AppEngineHttpTarget
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AppEngineHttpTarget parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
input
InputStream
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
AppEngineHttpTarget
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static AppEngineHttpTarget parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
AppEngineHttpTarget
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static AppEngineHttpTarget parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
Parameters
Name
Description
data
ByteBuffer
extensionRegistry
ExtensionRegistryLite
Returns
Type
Description
AppEngineHttpTarget
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<AppEngineHttpTarget> parser ()
Returns
Type
Description
Parser < AppEngineHttpTarget >
Methods
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
AbstractMessage.equals(Object other)
getAppEngineRouting()
public AppEngineRouting getAppEngineRouting ()
App Engine Routing setting for the job.
.google.cloud.scheduler.v1.AppEngineRouting app_engine_routing = 2;
Returns
Type
Description
AppEngineRouting
The appEngineRouting.
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
getParserForType()
public Parser<AppEngineHttpTarget> getParserForType ()
Returns
Type
Description
Parser < AppEngineHttpTarget >
Overrides
GeneratedMessage.getParserForType()
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
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
hasAppEngineRouting()
public boolean hasAppEngineRouting ()
App Engine Routing setting for the job.
.google.cloud.scheduler.v1.AppEngineRouting app_engine_routing = 2;
Returns
Type
Description
boolean
Whether the appEngineRouting field is set.
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
AbstractMessage.hashCode()
internalGetFieldAccessorTable()
protected GeneratedMessage . FieldAccessorTable internalGetFieldAccessorTable ()
Returns
Type
Description
FieldAccessorTable
Overrides
GeneratedMessage.internalGetFieldAccessorTable()
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
com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int)
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.isInitialized()
newBuilderForType()
public AppEngineHttpTarget . Builder newBuilderForType ()
Returns
Type
Description
AppEngineHttpTarget.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected AppEngineHttpTarget . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
AppEngineHttpTarget.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public AppEngineHttpTarget . Builder toBuilder ()
Returns
Type
Description
AppEngineHttpTarget.Builder
writeTo(CodedOutputStream output)
public void writeTo ( CodedOutputStream output )
Parameter
Name
Description
output
CodedOutputStream
Overrides
GeneratedMessage.writeTo(CodedOutputStream output)
Exceptions
Type
Description
IOException
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
