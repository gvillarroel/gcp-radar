---
title: "Class ErrorContext.Builder (0.209.0-beta) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorContext.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorContext.Builder
  title: "Class ErrorContext.Builder (0.209.0-beta) \_|\_ Java client libraries \_\
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
Class ErrorContext.Builder (0.209.0-beta)
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
public static final class ErrorContext . Builder extends GeneratedMessage . Builder<ErrorContext . Builder > implements ErrorContextOrBuilder
A description of the context in which an error occurred.
This data should be provided by the application when reporting an error,
unless the
error report has been generated automatically from Google App Engine logs.
Protobuf type google.devtools.clouderrorreporting.v1beta1.ErrorContext
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
ErrorContext.Builder
Implements
ErrorContextOrBuilder
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
public ErrorContext build ()
Returns
Type
Description
ErrorContext
buildPartial()
public ErrorContext buildPartial ()
Returns
Type
Description
ErrorContext
clear()
public ErrorContext . Builder clear ()
Returns
Type
Description
ErrorContext.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearHttpRequest()
public ErrorContext . Builder clearHttpRequest ()
The HTTP request which was processed when the error was
triggered.
.google.devtools.clouderrorreporting.v1beta1.HttpRequestContext http_request = 1;
Returns
Type
Description
ErrorContext.Builder
clearReportLocation()
public ErrorContext . Builder clearReportLocation ()
The location in the source code where the decision was made to
report the error, usually the place where it was logged.
For a logged exception this would be the source line where the
exception is logged, usually close to the place where it was
caught.
.google.devtools.clouderrorreporting.v1beta1.SourceLocation report_location = 3;
Returns
Type
Description
ErrorContext.Builder
clearUser()
public ErrorContext . Builder clearUser ()
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
ErrorContext.Builder
This builder for chaining.
getDefaultInstanceForType()
public ErrorContext getDefaultInstanceForType ()
Returns
Type
Description
ErrorContext
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
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
getHttpRequestBuilder()
public HttpRequestContext . Builder getHttpRequestBuilder ()
The HTTP request which was processed when the error was
triggered.
.google.devtools.clouderrorreporting.v1beta1.HttpRequestContext http_request = 1;
Returns
Type
Description
HttpRequestContext.Builder
getHttpRequestOrBuilder()
public HttpRequestContextOrBuilder getHttpRequestOrBuilder ()
The HTTP request which was processed when the error was
triggered.
.google.devtools.clouderrorreporting.v1beta1.HttpRequestContext http_request = 1;
Returns
Type
Description
HttpRequestContextOrBuilder
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
getReportLocationBuilder()
public SourceLocation . Builder getReportLocationBuilder ()
The location in the source code where the decision was made to
report the error, usually the place where it was logged.
For a logged exception this would be the source line where the
exception is logged, usually close to the place where it was
caught.
.google.devtools.clouderrorreporting.v1beta1.SourceLocation report_location = 3;
Returns
Type
Description
SourceLocation.Builder
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
internalGetFieldAccessorTable()
protected GeneratedMessage . FieldAccessorTable internalGetFieldAccessorTable ()
Returns
Type
Description
FieldAccessorTable
Overrides
GeneratedMessage.Builder<BuilderType>.internalGetFieldAccessorTable()
isInitialized()
public final boolean isInitialized ()
Returns
Type
Description
boolean
Overrides
GeneratedMessage.Builder<BuilderType>.isInitialized()
mergeFrom(ErrorContext other)
public ErrorContext . Builder mergeFrom ( ErrorContext other )
Parameter
Name
Description
other
ErrorContext
Returns
Type
Description
ErrorContext.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public ErrorContext . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
ErrorContext.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public ErrorContext . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
ErrorContext.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeHttpRequest(HttpRequestContext value)
public ErrorContext . Builder mergeHttpRequest ( HttpRequestContext value )
The HTTP request which was processed when the error was
triggered.
.google.devtools.clouderrorreporting.v1beta1.HttpRequestContext http_request = 1;
Parameter
Name
Description
value
HttpRequestContext
Returns
Type
Description
ErrorContext.Builder
mergeReportLocation(SourceLocation value)
public ErrorContext . Builder mergeReportLocation ( SourceLocation value )
The location in the source code where the decision was made to
report the error, usually the place where it was logged.
For a logged exception this would be the source line where the
exception is logged, usually close to the place where it was
caught.
.google.devtools.clouderrorreporting.v1beta1.SourceLocation report_location = 3;
Parameter
Name
Description
value
SourceLocation
Returns
Type
Description
ErrorContext.Builder
setHttpRequest(HttpRequestContext value)
public ErrorContext . Builder setHttpRequest ( HttpRequestContext value )
The HTTP request which was processed when the error was
triggered.
.google.devtools.clouderrorreporting.v1beta1.HttpRequestContext http_request = 1;
Parameter
Name
Description
value
HttpRequestContext
Returns
Type
Description
ErrorContext.Builder
setHttpRequest(HttpRequestContext.Builder builderForValue)
public ErrorContext . Builder setHttpRequest ( HttpRequestContext . Builder builderForValue )
The HTTP request which was processed when the error was
triggered.
.google.devtools.clouderrorreporting.v1beta1.HttpRequestContext http_request = 1;
Parameter
Name
Description
builderForValue
HttpRequestContext.Builder
Returns
Type
Description
ErrorContext.Builder
setReportLocation(SourceLocation value)
public ErrorContext . Builder setReportLocation ( SourceLocation value )
The location in the source code where the decision was made to
report the error, usually the place where it was logged.
For a logged exception this would be the source line where the
exception is logged, usually close to the place where it was
caught.
.google.devtools.clouderrorreporting.v1beta1.SourceLocation report_location = 3;
Parameter
Name
Description
value
SourceLocation
Returns
Type
Description
ErrorContext.Builder
setReportLocation(SourceLocation.Builder builderForValue)
public ErrorContext . Builder setReportLocation ( SourceLocation . Builder builderForValue )
The location in the source code where the decision was made to
report the error, usually the place where it was logged.
For a logged exception this would be the source line where the
exception is logged, usually close to the place where it was
caught.
.google.devtools.clouderrorreporting.v1beta1.SourceLocation report_location = 3;
Parameter
Name
Description
builderForValue
SourceLocation.Builder
Returns
Type
Description
ErrorContext.Builder
setUser(String value)
public ErrorContext . Builder setUser ( String value )
The user who caused or was affected by the crash.
This can be a user ID, an email address, or an arbitrary token that
uniquely identifies the user.
When sending an error report, leave this field empty if the user was not
logged in. In this case the
Error Reporting system will use other data, such as remote IP address, to
distinguish affected users. See affected_users_count in
ErrorGroupStats .
string user = 2;
Parameter
Name
Description
value
String The user to set.
Returns
Type
Description
ErrorContext.Builder
This builder for chaining.
setUserBytes(ByteString value)
public ErrorContext . Builder setUserBytes ( ByteString value )
The user who caused or was affected by the crash.
This can be a user ID, an email address, or an arbitrary token that
uniquely identifies the user.
When sending an error report, leave this field empty if the user was not
logged in. In this case the
Error Reporting system will use other data, such as remote IP address, to
distinguish affected users. See affected_users_count in
ErrorGroupStats .
string user = 2;
Parameter
Name
Description
value
ByteString The bytes for user to set.
Returns
Type
Description
ErrorContext.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
