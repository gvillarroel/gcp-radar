---
title: "Class ErrorContext (0.209.0-beta) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorContext
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorContext
  title: "Class ErrorContext (0.209.0-beta) \_|\_ Java client libraries \_|\_ Google\
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
Class ErrorContext (0.209.0-beta)
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
public final class ErrorContext extends GeneratedMessage implements ErrorContextOrBuilder
A description of the context in which an error occurred.
This data should be provided by the application when reporting an error,
unless the
error report has been generated automatically from Google App Engine logs.
Protobuf type google.devtools.clouderrorreporting.v1beta1.ErrorContext
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
ErrorContext
Implements
ErrorContextOrBuilder
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
HTTP_REQUEST_FIELD_NUMBER
public static final int HTTP_REQUEST_FIELD_NUMBER
Field Value
Type
Description
int
REPORT_LOCATION_FIELD_NUMBER
public static final int REPORT_LOCATION_FIELD_NUMBER
Field Value
Type
Description
int
USER_FIELD_NUMBER
public static final int USER_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static ErrorContext getDefaultInstance ()
Returns
Type
Description
ErrorContext
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static ErrorContext . Builder newBuilder ()
Returns
Type
Description
ErrorContext.Builder
newBuilder(ErrorContext prototype)
public static ErrorContext . Builder newBuilder ( ErrorContext prototype )
Parameter
Name
Description
prototype
ErrorContext
Returns
Type
Description
ErrorContext.Builder
parseDelimitedFrom(InputStream input)
public static ErrorContext parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
ErrorContext
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static ErrorContext parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
ErrorContext
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static ErrorContext parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
ErrorContext
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static ErrorContext parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
ErrorContext
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static ErrorContext parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
ErrorContext
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static ErrorContext parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
ErrorContext
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static ErrorContext parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
ErrorContext
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static ErrorContext parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
ErrorContext
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static ErrorContext parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
ErrorContext
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static ErrorContext parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
ErrorContext
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static ErrorContext parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
ErrorContext
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static ErrorContext parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
ErrorContext
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<ErrorContext> parser ()
Returns
Type
Description
Parser < ErrorContext >
Methods
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
getDefaultInstanceForType()
public ErrorContext getDefaultInstanceForType ()
Returns
Type
Description
ErrorContext
getHttpRequest()
public HttpRequestContext getHttpRequest ()
The HTTP request which was processed when the error was
triggered.
.google.devtools.clouderrorreporting.v1beta1.HttpRequestContext http_request = 1;
Returns
Type
Description
HttpRequestContext
The httpRequest.
getHttpRequestOrBuilder()
public HttpRequestContextOrBuilder getHttpRequestOrBuilder ()
The HTTP request which was processed when the error was
triggered.
.google.devtools.clouderrorreporting.v1beta1.HttpRequestContext http_request = 1;
Returns
Type
Description
HttpRequestContextOrBuilder
getParserForType()
public Parser<ErrorContext> getParserForType ()
Returns
Type
Description
Parser < ErrorContext >
Overrides
GeneratedMessage.getParserForType()
getReportLocation()
public SourceLocation getReportLocation ()
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
public SourceLocationOrBuilder getReportLocationOrBuilder ()
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
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
getUser()
public String getUser ()
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
public ByteString getUserBytes ()
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
public boolean hasHttpRequest ()
The HTTP request which was processed when the error was
triggered.
.google.devtools.clouderrorreporting.v1beta1.HttpRequestContext http_request = 1;
Returns
Type
Description
boolean
Whether the httpRequest field is set.
hasReportLocation()
public boolean hasReportLocation ()
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
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.isInitialized()
newBuilderForType()
public ErrorContext . Builder newBuilderForType ()
Returns
Type
Description
ErrorContext.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected ErrorContext . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
ErrorContext.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public ErrorContext . Builder toBuilder ()
Returns
Type
Description
ErrorContext.Builder
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
