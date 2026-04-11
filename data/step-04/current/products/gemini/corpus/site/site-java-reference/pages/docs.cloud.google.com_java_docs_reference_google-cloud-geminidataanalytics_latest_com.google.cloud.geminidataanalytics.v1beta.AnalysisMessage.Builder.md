---
title: "Class AnalysisMessage.Builder (0.16.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AnalysisMessage.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AnalysisMessage.Builder
  title: "Class AnalysisMessage.Builder (0.16.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class AnalysisMessage.Builder (0.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.16.0 (latest)
0.15.0
0.13.0
0.11.0
0.10.0
0.9.0
0.8.0
0.6.0
0.4.0
0.3.0
0.2.0
0.1.0
public static final class AnalysisMessage . Builder extends GeneratedMessage . Builder<AnalysisMessage . Builder > implements AnalysisMessageOrBuilder
A message produced during analysis.
Protobuf type google.cloud.geminidataanalytics.v1beta.AnalysisMessage
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AnalysisMessage.Builder
Implements
AnalysisMessageOrBuilder
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
public AnalysisMessage build ()
Returns
Type
Description
AnalysisMessage
buildPartial()
public AnalysisMessage buildPartial ()
Returns
Type
Description
AnalysisMessage
clear()
public AnalysisMessage . Builder clear ()
Returns
Type
Description
AnalysisMessage.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearKind()
public AnalysisMessage . Builder clearKind ()
Returns
Type
Description
AnalysisMessage.Builder
clearProgressEvent()
public AnalysisMessage . Builder clearProgressEvent ()
An event indicating the progress of the analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisEvent progress_event = 2;
Returns
Type
Description
AnalysisMessage.Builder
clearQuery()
public AnalysisMessage . Builder clearQuery ()
An analysis query.
.google.cloud.geminidataanalytics.v1beta.AnalysisQuery query = 1;
Returns
Type
Description
AnalysisMessage.Builder
getDefaultInstanceForType()
public AnalysisMessage getDefaultInstanceForType ()
Returns
Type
Description
AnalysisMessage
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getKindCase()
public AnalysisMessage . KindCase getKindCase ()
Returns
Type
Description
AnalysisMessage.KindCase
getProgressEvent()
public AnalysisEvent getProgressEvent ()
An event indicating the progress of the analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisEvent progress_event = 2;
Returns
Type
Description
AnalysisEvent
The progressEvent.
getProgressEventBuilder()
public AnalysisEvent . Builder getProgressEventBuilder ()
An event indicating the progress of the analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisEvent progress_event = 2;
Returns
Type
Description
AnalysisEvent.Builder
getProgressEventOrBuilder()
public AnalysisEventOrBuilder getProgressEventOrBuilder ()
An event indicating the progress of the analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisEvent progress_event = 2;
Returns
Type
Description
AnalysisEventOrBuilder
getQuery()
public AnalysisQuery getQuery ()
An analysis query.
.google.cloud.geminidataanalytics.v1beta.AnalysisQuery query = 1;
Returns
Type
Description
AnalysisQuery
The query.
getQueryBuilder()
public AnalysisQuery . Builder getQueryBuilder ()
An analysis query.
.google.cloud.geminidataanalytics.v1beta.AnalysisQuery query = 1;
Returns
Type
Description
AnalysisQuery.Builder
getQueryOrBuilder()
public AnalysisQueryOrBuilder getQueryOrBuilder ()
An analysis query.
.google.cloud.geminidataanalytics.v1beta.AnalysisQuery query = 1;
Returns
Type
Description
AnalysisQueryOrBuilder
hasProgressEvent()
public boolean hasProgressEvent ()
An event indicating the progress of the analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisEvent progress_event = 2;
Returns
Type
Description
boolean
Whether the progressEvent field is set.
hasQuery()
public boolean hasQuery ()
An analysis query.
.google.cloud.geminidataanalytics.v1beta.AnalysisQuery query = 1;
Returns
Type
Description
boolean
Whether the query field is set.
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
mergeFrom(AnalysisMessage other)
public AnalysisMessage . Builder mergeFrom ( AnalysisMessage other )
Parameter
Name
Description
other
AnalysisMessage
Returns
Type
Description
AnalysisMessage.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AnalysisMessage . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AnalysisMessage.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AnalysisMessage . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AnalysisMessage.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeProgressEvent(AnalysisEvent value)
public AnalysisMessage . Builder mergeProgressEvent ( AnalysisEvent value )
An event indicating the progress of the analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisEvent progress_event = 2;
Parameter
Name
Description
value
AnalysisEvent
Returns
Type
Description
AnalysisMessage.Builder
mergeQuery(AnalysisQuery value)
public AnalysisMessage . Builder mergeQuery ( AnalysisQuery value )
An analysis query.
.google.cloud.geminidataanalytics.v1beta.AnalysisQuery query = 1;
Parameter
Name
Description
value
AnalysisQuery
Returns
Type
Description
AnalysisMessage.Builder
setProgressEvent(AnalysisEvent value)
public AnalysisMessage . Builder setProgressEvent ( AnalysisEvent value )
An event indicating the progress of the analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisEvent progress_event = 2;
Parameter
Name
Description
value
AnalysisEvent
Returns
Type
Description
AnalysisMessage.Builder
setProgressEvent(AnalysisEvent.Builder builderForValue)
public AnalysisMessage . Builder setProgressEvent ( AnalysisEvent . Builder builderForValue )
An event indicating the progress of the analysis.
.google.cloud.geminidataanalytics.v1beta.AnalysisEvent progress_event = 2;
Parameter
Name
Description
builderForValue
AnalysisEvent.Builder
Returns
Type
Description
AnalysisMessage.Builder
setQuery(AnalysisQuery value)
public AnalysisMessage . Builder setQuery ( AnalysisQuery value )
An analysis query.
.google.cloud.geminidataanalytics.v1beta.AnalysisQuery query = 1;
Parameter
Name
Description
value
AnalysisQuery
Returns
Type
Description
AnalysisMessage.Builder
setQuery(AnalysisQuery.Builder builderForValue)
public AnalysisMessage . Builder setQuery ( AnalysisQuery . Builder builderForValue )
An analysis query.
.google.cloud.geminidataanalytics.v1beta.AnalysisQuery query = 1;
Parameter
Name
Description
builderForValue
AnalysisQuery.Builder
Returns
Type
Description
AnalysisMessage.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
