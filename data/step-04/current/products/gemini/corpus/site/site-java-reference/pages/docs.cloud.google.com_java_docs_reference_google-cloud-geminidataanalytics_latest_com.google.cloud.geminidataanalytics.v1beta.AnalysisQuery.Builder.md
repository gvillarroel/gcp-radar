---
title: "Class AnalysisQuery.Builder (0.16.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AnalysisQuery.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-geminidataanalytics/latest/com.google.cloud.geminidataanalytics.v1beta.AnalysisQuery.Builder
  title: "Class AnalysisQuery.Builder (0.16.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AnalysisQuery.Builder (0.16.0)
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
public static final class AnalysisQuery . Builder extends GeneratedMessage . Builder<AnalysisQuery . Builder > implements AnalysisQueryOrBuilder
A query for performing an analysis.
Protobuf type google.cloud.geminidataanalytics.v1beta.AnalysisQuery
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AnalysisQuery.Builder
Implements
AnalysisQueryOrBuilder
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
addAllDataResultNames(Iterable<String> values)
public AnalysisQuery . Builder addAllDataResultNames ( Iterable<String> values )
Optional. The names of previously retrieved data results to analyze.
repeated string data_result_names = 2 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
values
Iterable < String > The dataResultNames to add.
Returns
Type
Description
AnalysisQuery.Builder
This builder for chaining.
addDataResultNames(String value)
public AnalysisQuery . Builder addDataResultNames ( String value )
Optional. The names of previously retrieved data results to analyze.
repeated string data_result_names = 2 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The dataResultNames to add.
Returns
Type
Description
AnalysisQuery.Builder
This builder for chaining.
addDataResultNamesBytes(ByteString value)
public AnalysisQuery . Builder addDataResultNamesBytes ( ByteString value )
Optional. The names of previously retrieved data results to analyze.
repeated string data_result_names = 2 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes of the dataResultNames to add.
Returns
Type
Description
AnalysisQuery.Builder
This builder for chaining.
build()
public AnalysisQuery build ()
Returns
Type
Description
AnalysisQuery
buildPartial()
public AnalysisQuery buildPartial ()
Returns
Type
Description
AnalysisQuery
clear()
public AnalysisQuery . Builder clear ()
Returns
Type
Description
AnalysisQuery.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearDataResultNames()
public AnalysisQuery . Builder clearDataResultNames ()
Optional. The names of previously retrieved data results to analyze.
repeated string data_result_names = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AnalysisQuery.Builder
This builder for chaining.
clearQuestion()
public AnalysisQuery . Builder clearQuestion ()
Optional. An analysis question to help answer the user's original question.
string question = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AnalysisQuery.Builder
This builder for chaining.
getDataResultNames(int index)
public String getDataResultNames ( int index )
Optional. The names of previously retrieved data results to analyze.
repeated string data_result_names = 2 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
String
The dataResultNames at the given index.
getDataResultNamesBytes(int index)
public ByteString getDataResultNamesBytes ( int index )
Optional. The names of previously retrieved data results to analyze.
repeated string data_result_names = 2 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
ByteString
The bytes of the dataResultNames at the given index.
getDataResultNamesCount()
public int getDataResultNamesCount ()
Optional. The names of previously retrieved data results to analyze.
repeated string data_result_names = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
The count of dataResultNames.
getDataResultNamesList()
public ProtocolStringList getDataResultNamesList ()
Optional. The names of previously retrieved data results to analyze.
repeated string data_result_names = 2 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ProtocolStringList
A list containing the dataResultNames.
getDefaultInstanceForType()
public AnalysisQuery getDefaultInstanceForType ()
Returns
Type
Description
AnalysisQuery
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getQuestion()
public String getQuestion ()
Optional. An analysis question to help answer the user's original question.
string question = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The question.
getQuestionBytes()
public ByteString getQuestionBytes ()
Optional. An analysis question to help answer the user's original question.
string question = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for question.
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
mergeFrom(AnalysisQuery other)
public AnalysisQuery . Builder mergeFrom ( AnalysisQuery other )
Parameter
Name
Description
other
AnalysisQuery
Returns
Type
Description
AnalysisQuery.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AnalysisQuery . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AnalysisQuery.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AnalysisQuery . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AnalysisQuery.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setDataResultNames(int index, String value)
public AnalysisQuery . Builder setDataResultNames ( int index , String value )
Optional. The names of previously retrieved data results to analyze.
repeated string data_result_names = 2 [(.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int The index to set the value at.
value
String The dataResultNames to set.
Returns
Type
Description
AnalysisQuery.Builder
This builder for chaining.
setQuestion(String value)
public AnalysisQuery . Builder setQuestion ( String value )
Optional. An analysis question to help answer the user's original question.
string question = 1 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The question to set.
Returns
Type
Description
AnalysisQuery.Builder
This builder for chaining.
setQuestionBytes(ByteString value)
public AnalysisQuery . Builder setQuestionBytes ( ByteString value )
Optional. An analysis question to help answer the user's original question.
string question = 1 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes for question to set.
Returns
Type
Description
AnalysisQuery.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
