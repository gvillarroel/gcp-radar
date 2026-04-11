---
title: "Class BoundingPoly.Builder (2.92.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BoundingPoly.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BoundingPoly.Builder
  title: "Class BoundingPoly.Builder (2.92.0) \_|\_ Java client libraries \_|\_ Google\
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
Class BoundingPoly.Builder (2.92.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.92.0 (latest)
2.91.0
2.89.0
2.87.0
2.86.0
2.85.0
2.84.0
2.82.0
2.80.0
2.79.0
2.78.0
2.77.0
2.76.0
2.74.0
2.72.0
2.71.0
2.68.0
2.67.0
2.66.0
2.64.0
2.63.0
2.62.0
2.61.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.53.0
2.52.0
2.51.0
2.50.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.41.0
2.40.0
2.39.0
2.38.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.28.0
2.27.0
2.26.0
2.25.0
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
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.5
2.6.2
2.5.1
2.4.3
2.3.1
2.2.1
2.1.9
public static final class BoundingPoly . Builder extends GeneratedMessage . Builder<BoundingPoly . Builder > implements BoundingPolyOrBuilder
A bounding polygon for the detected image annotation.
Protobuf type google.cloud.documentai.v1.BoundingPoly
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
BoundingPoly.Builder
Implements
BoundingPolyOrBuilder
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
addAllNormalizedVertices(Iterable<? extends NormalizedVertex> values)
public BoundingPoly . Builder addAllNormalizedVertices ( Iterable < ? extends NormalizedVertex > values )
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Parameter
Name
Description
values
Iterable < ? extends com.google.cloud.documentai.v1.NormalizedVertex >
Returns
Type
Description
BoundingPoly.Builder
addAllVertices(Iterable<? extends Vertex> values)
public BoundingPoly . Builder addAllVertices ( Iterable < ? extends Vertex > values )
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Parameter
Name
Description
values
Iterable < ? extends com.google.cloud.documentai.v1.Vertex >
Returns
Type
Description
BoundingPoly.Builder
addNormalizedVertices(NormalizedVertex value)
public BoundingPoly . Builder addNormalizedVertices ( NormalizedVertex value )
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Parameter
Name
Description
value
NormalizedVertex
Returns
Type
Description
BoundingPoly.Builder
addNormalizedVertices(NormalizedVertex.Builder builderForValue)
public BoundingPoly . Builder addNormalizedVertices ( NormalizedVertex . Builder builderForValue )
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Parameter
Name
Description
builderForValue
NormalizedVertex.Builder
Returns
Type
Description
BoundingPoly.Builder
addNormalizedVertices(int index, NormalizedVertex value)
public BoundingPoly . Builder addNormalizedVertices ( int index , NormalizedVertex value )
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Parameters
Name
Description
index
int
value
NormalizedVertex
Returns
Type
Description
BoundingPoly.Builder
addNormalizedVertices(int index, NormalizedVertex.Builder builderForValue)
public BoundingPoly . Builder addNormalizedVertices ( int index , NormalizedVertex . Builder builderForValue )
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Parameters
Name
Description
index
int
builderForValue
NormalizedVertex.Builder
Returns
Type
Description
BoundingPoly.Builder
addNormalizedVerticesBuilder()
public NormalizedVertex . Builder addNormalizedVerticesBuilder ()
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Returns
Type
Description
NormalizedVertex.Builder
addNormalizedVerticesBuilder(int index)
public NormalizedVertex . Builder addNormalizedVerticesBuilder ( int index )
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
NormalizedVertex.Builder
addVertices(Vertex value)
public BoundingPoly . Builder addVertices ( Vertex value )
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Parameter
Name
Description
value
Vertex
Returns
Type
Description
BoundingPoly.Builder
addVertices(Vertex.Builder builderForValue)
public BoundingPoly . Builder addVertices ( Vertex . Builder builderForValue )
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Parameter
Name
Description
builderForValue
Vertex.Builder
Returns
Type
Description
BoundingPoly.Builder
addVertices(int index, Vertex value)
public BoundingPoly . Builder addVertices ( int index , Vertex value )
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Parameters
Name
Description
index
int
value
Vertex
Returns
Type
Description
BoundingPoly.Builder
addVertices(int index, Vertex.Builder builderForValue)
public BoundingPoly . Builder addVertices ( int index , Vertex . Builder builderForValue )
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Parameters
Name
Description
index
int
builderForValue
Vertex.Builder
Returns
Type
Description
BoundingPoly.Builder
addVerticesBuilder()
public Vertex . Builder addVerticesBuilder ()
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Returns
Type
Description
Vertex.Builder
addVerticesBuilder(int index)
public Vertex . Builder addVerticesBuilder ( int index )
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
Vertex.Builder
build()
public BoundingPoly build ()
Returns
Type
Description
BoundingPoly
buildPartial()
public BoundingPoly buildPartial ()
Returns
Type
Description
BoundingPoly
clear()
public BoundingPoly . Builder clear ()
Returns
Type
Description
BoundingPoly.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearNormalizedVertices()
public BoundingPoly . Builder clearNormalizedVertices ()
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Returns
Type
Description
BoundingPoly.Builder
clearVertices()
public BoundingPoly . Builder clearVertices ()
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Returns
Type
Description
BoundingPoly.Builder
getDefaultInstanceForType()
public BoundingPoly getDefaultInstanceForType ()
Returns
Type
Description
BoundingPoly
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getNormalizedVertices(int index)
public NormalizedVertex getNormalizedVertices ( int index )
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
NormalizedVertex
getNormalizedVerticesBuilder(int index)
public NormalizedVertex . Builder getNormalizedVerticesBuilder ( int index )
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
NormalizedVertex.Builder
getNormalizedVerticesBuilderList()
public List<NormalizedVertex . Builder > getNormalizedVerticesBuilderList ()
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Returns
Type
Description
List < Builder >
getNormalizedVerticesCount()
public int getNormalizedVerticesCount ()
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Returns
Type
Description
int
getNormalizedVerticesList()
public List<NormalizedVertex> getNormalizedVerticesList ()
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Returns
Type
Description
List < NormalizedVertex >
getNormalizedVerticesOrBuilder(int index)
public NormalizedVertexOrBuilder getNormalizedVerticesOrBuilder ( int index )
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
NormalizedVertexOrBuilder
getNormalizedVerticesOrBuilderList()
public List < ? extends NormalizedVertexOrBuilder > getNormalizedVerticesOrBuilderList ()
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Returns
Type
Description
List < ? extends com.google.cloud.documentai.v1.NormalizedVertexOrBuilder >
getVertices(int index)
public Vertex getVertices ( int index )
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
Vertex
getVerticesBuilder(int index)
public Vertex . Builder getVerticesBuilder ( int index )
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
Vertex.Builder
getVerticesBuilderList()
public List<Vertex . Builder > getVerticesBuilderList ()
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Returns
Type
Description
List < Builder >
getVerticesCount()
public int getVerticesCount ()
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Returns
Type
Description
int
getVerticesList()
public List<Vertex> getVerticesList ()
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Returns
Type
Description
List < Vertex >
getVerticesOrBuilder(int index)
public VertexOrBuilder getVerticesOrBuilder ( int index )
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
VertexOrBuilder
getVerticesOrBuilderList()
public List < ? extends VertexOrBuilder > getVerticesOrBuilderList ()
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Returns
Type
Description
List < ? extends com.google.cloud.documentai.v1.VertexOrBuilder >
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
mergeFrom(BoundingPoly other)
public BoundingPoly . Builder mergeFrom ( BoundingPoly other )
Parameter
Name
Description
other
BoundingPoly
Returns
Type
Description
BoundingPoly.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public BoundingPoly . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
BoundingPoly.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public BoundingPoly . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
BoundingPoly.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
removeNormalizedVertices(int index)
public BoundingPoly . Builder removeNormalizedVertices ( int index )
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
BoundingPoly.Builder
removeVertices(int index)
public BoundingPoly . Builder removeVertices ( int index )
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
BoundingPoly.Builder
setNormalizedVertices(int index, NormalizedVertex value)
public BoundingPoly . Builder setNormalizedVertices ( int index , NormalizedVertex value )
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Parameters
Name
Description
index
int
value
NormalizedVertex
Returns
Type
Description
BoundingPoly.Builder
setNormalizedVertices(int index, NormalizedVertex.Builder builderForValue)
public BoundingPoly . Builder setNormalizedVertices ( int index , NormalizedVertex . Builder builderForValue )
The bounding polygon normalized vertices.
repeated .google.cloud.documentai.v1.NormalizedVertex normalized_vertices = 2;
Parameters
Name
Description
index
int
builderForValue
NormalizedVertex.Builder
Returns
Type
Description
BoundingPoly.Builder
setVertices(int index, Vertex value)
public BoundingPoly . Builder setVertices ( int index , Vertex value )
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Parameters
Name
Description
index
int
value
Vertex
Returns
Type
Description
BoundingPoly.Builder
setVertices(int index, Vertex.Builder builderForValue)
public BoundingPoly . Builder setVertices ( int index , Vertex . Builder builderForValue )
The bounding polygon vertices.
repeated .google.cloud.documentai.v1.Vertex vertices = 1;
Parameters
Name
Description
index
int
builderForValue
Vertex.Builder
Returns
Type
Description
BoundingPoly.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
