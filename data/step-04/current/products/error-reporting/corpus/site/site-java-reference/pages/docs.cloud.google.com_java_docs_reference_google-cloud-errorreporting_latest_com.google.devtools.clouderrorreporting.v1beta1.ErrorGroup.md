---
title: "Class ErrorGroup (0.209.0-beta) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroup
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroup
  title: "Class ErrorGroup (0.209.0-beta) \_|\_ Java client libraries \_|\_ Google\
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
Class ErrorGroup (0.209.0-beta)
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
public final class ErrorGroup extends GeneratedMessage implements ErrorGroupOrBuilder
Description of a group of similar error events.
Protobuf type google.devtools.clouderrorreporting.v1beta1.ErrorGroup
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
ErrorGroup
Implements
ErrorGroupOrBuilder
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
GROUP_ID_FIELD_NUMBER
public static final int GROUP_ID_FIELD_NUMBER
Field Value
Type
Description
int
NAME_FIELD_NUMBER
public static final int NAME_FIELD_NUMBER
Field Value
Type
Description
int
RESOLUTION_STATUS_FIELD_NUMBER
public static final int RESOLUTION_STATUS_FIELD_NUMBER
Field Value
Type
Description
int
TRACKING_ISSUES_FIELD_NUMBER
public static final int TRACKING_ISSUES_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static ErrorGroup getDefaultInstance ()
Returns
Type
Description
ErrorGroup
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static ErrorGroup . Builder newBuilder ()
Returns
Type
Description
ErrorGroup.Builder
newBuilder(ErrorGroup prototype)
public static ErrorGroup . Builder newBuilder ( ErrorGroup prototype )
Parameter
Name
Description
prototype
ErrorGroup
Returns
Type
Description
ErrorGroup.Builder
parseDelimitedFrom(InputStream input)
public static ErrorGroup parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
ErrorGroup
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static ErrorGroup parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
ErrorGroup
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static ErrorGroup parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
ErrorGroup
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static ErrorGroup parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
ErrorGroup
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static ErrorGroup parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
ErrorGroup
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static ErrorGroup parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
ErrorGroup
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static ErrorGroup parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
ErrorGroup
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static ErrorGroup parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
ErrorGroup
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static ErrorGroup parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
ErrorGroup
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static ErrorGroup parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
ErrorGroup
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static ErrorGroup parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
ErrorGroup
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static ErrorGroup parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
ErrorGroup
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<ErrorGroup> parser ()
Returns
Type
Description
Parser < ErrorGroup >
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
public ErrorGroup getDefaultInstanceForType ()
Returns
Type
Description
ErrorGroup
getGroupId()
public String getGroupId ()
An opaque identifier of the group. This field is assigned by the Error
Reporting system and always populated.
In the group resource name, the group_id is a unique identifier for a
particular error group. The identifier is derived from key parts of the
error-log content and is treated as Service Data. For information about
how Service Data is handled, see Google Cloud Privacy
Notice .
string group_id = 2;
Returns
Type
Description
String
The groupId.
getGroupIdBytes()
public ByteString getGroupIdBytes ()
An opaque identifier of the group. This field is assigned by the Error
Reporting system and always populated.
In the group resource name, the group_id is a unique identifier for a
particular error group. The identifier is derived from key parts of the
error-log content and is treated as Service Data. For information about
how Service Data is handled, see Google Cloud Privacy
Notice .
string group_id = 2;
Returns
Type
Description
ByteString
The bytes for groupId.
getName()
public String getName ()
The group resource name.
Written as projects/{projectID}/groups/{group_id} or
projects/{projectID}/locations/{location}/groups/{group_id}
Examples: projects/my-project-123/groups/my-group ,
projects/my-project-123/locations/us-central1/groups/my-group
In the group resource name, the group_id is a unique identifier for a
particular error group. The identifier is derived from key parts of the
error-log content and is treated as Service Data. For information about
how Service Data is handled, see Google Cloud Privacy
Notice .
For a list of supported locations, see Supported
Regions . global is
the default when unspecified.
string name = 1;
Returns
Type
Description
String
The name.
getNameBytes()
public ByteString getNameBytes ()
The group resource name.
Written as projects/{projectID}/groups/{group_id} or
projects/{projectID}/locations/{location}/groups/{group_id}
Examples: projects/my-project-123/groups/my-group ,
projects/my-project-123/locations/us-central1/groups/my-group
In the group resource name, the group_id is a unique identifier for a
particular error group. The identifier is derived from key parts of the
error-log content and is treated as Service Data. For information about
how Service Data is handled, see Google Cloud Privacy
Notice .
For a list of supported locations, see Supported
Regions . global is
the default when unspecified.
string name = 1;
Returns
Type
Description
ByteString
The bytes for name.
getParserForType()
public Parser<ErrorGroup> getParserForType ()
Returns
Type
Description
Parser < ErrorGroup >
Overrides
GeneratedMessage.getParserForType()
getResolutionStatus()
public ResolutionStatus getResolutionStatus ()
Error group's resolution status.
An unspecified resolution status will be interpreted as OPEN
.google.devtools.clouderrorreporting.v1beta1.ResolutionStatus resolution_status = 5;
Returns
Type
Description
ResolutionStatus
The resolutionStatus.
getResolutionStatusValue()
public int getResolutionStatusValue ()
Error group's resolution status.
An unspecified resolution status will be interpreted as OPEN
.google.devtools.clouderrorreporting.v1beta1.ResolutionStatus resolution_status = 5;
Returns
Type
Description
int
The enum numeric value on the wire for resolutionStatus.
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
getTrackingIssues(int index)
public TrackingIssue getTrackingIssues ( int index )
Associated tracking issues.
repeated .google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking_issues = 3;
Parameter
Name
Description
index
int
Returns
Type
Description
TrackingIssue
getTrackingIssuesCount()
public int getTrackingIssuesCount ()
Associated tracking issues.
repeated .google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking_issues = 3;
Returns
Type
Description
int
getTrackingIssuesList()
public List<TrackingIssue> getTrackingIssuesList ()
Associated tracking issues.
repeated .google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking_issues = 3;
Returns
Type
Description
List < TrackingIssue >
getTrackingIssuesOrBuilder(int index)
public TrackingIssueOrBuilder getTrackingIssuesOrBuilder ( int index )
Associated tracking issues.
repeated .google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking_issues = 3;
Parameter
Name
Description
index
int
Returns
Type
Description
TrackingIssueOrBuilder
getTrackingIssuesOrBuilderList()
public List < ? extends TrackingIssueOrBuilder > getTrackingIssuesOrBuilderList ()
Associated tracking issues.
repeated .google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking_issues = 3;
Returns
Type
Description
List < ? extends com.google.devtools.clouderrorreporting.v1beta1.TrackingIssueOrBuilder >
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
public ErrorGroup . Builder newBuilderForType ()
Returns
Type
Description
ErrorGroup.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected ErrorGroup . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
ErrorGroup.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public ErrorGroup . Builder toBuilder ()
Returns
Type
Description
ErrorGroup.Builder
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
