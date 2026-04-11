---
title: "Class Attribution (1.48.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/com.google.cloud.vertexai.api.Attribution
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/com.google.cloud.vertexai.api.Attribution
  title: "Class Attribution (1.48.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class Attribution (1.48.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.48.0 (latest)
1.47.0
1.45.0
1.43.0
1.42.0
1.40.0
1.38.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.30.0
1.28.0
1.27.0
1.24.0
1.23.0
1.22.0
1.20.1
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.0
1.1.0
1.0.0
0.8.0
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
public final class Attribution extends GeneratedMessage implements AttributionOrBuilder
Attribution that explains a particular prediction output.
Protobuf type google.cloud.vertexai.v1.Attribution
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
Attribution
Implements
AttributionOrBuilder
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
APPROXIMATION_ERROR_FIELD_NUMBER
public static final int APPROXIMATION_ERROR_FIELD_NUMBER
Field Value
Type
Description
int
BASELINE_OUTPUT_VALUE_FIELD_NUMBER
public static final int BASELINE_OUTPUT_VALUE_FIELD_NUMBER
Field Value
Type
Description
int
FEATURE_ATTRIBUTIONS_FIELD_NUMBER
public static final int FEATURE_ATTRIBUTIONS_FIELD_NUMBER
Field Value
Type
Description
int
INSTANCE_OUTPUT_VALUE_FIELD_NUMBER
public static final int INSTANCE_OUTPUT_VALUE_FIELD_NUMBER
Field Value
Type
Description
int
OUTPUT_DISPLAY_NAME_FIELD_NUMBER
public static final int OUTPUT_DISPLAY_NAME_FIELD_NUMBER
Field Value
Type
Description
int
OUTPUT_INDEX_FIELD_NUMBER
public static final int OUTPUT_INDEX_FIELD_NUMBER
Field Value
Type
Description
int
OUTPUT_NAME_FIELD_NUMBER
public static final int OUTPUT_NAME_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static Attribution getDefaultInstance ()
Returns
Type
Description
Attribution
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static Attribution . Builder newBuilder ()
Returns
Type
Description
Attribution.Builder
newBuilder(Attribution prototype)
public static Attribution . Builder newBuilder ( Attribution prototype )
Parameter
Name
Description
prototype
Attribution
Returns
Type
Description
Attribution.Builder
parseDelimitedFrom(InputStream input)
public static Attribution parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
Attribution
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static Attribution parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
Attribution
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static Attribution parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
Attribution
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static Attribution parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
Attribution
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static Attribution parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
Attribution
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static Attribution parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
Attribution
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static Attribution parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
Attribution
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static Attribution parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
Attribution
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static Attribution parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
Attribution
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static Attribution parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
Attribution
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static Attribution parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
Attribution
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static Attribution parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
Attribution
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<Attribution> parser ()
Returns
Type
Description
Parser < Attribution >
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
getApproximationError()
public double getApproximationError ()
Output only. Error of
feature_attributions
caused by approximation used in the explanation method. Lower value means
more precise attributions.
For Sampled Shapley
attribution ,
increasing
path_count
might reduce the error.
For Integrated Gradients
attribution ,
increasing
step_count
might reduce the error.
For XRAI
attribution ,
increasing
step_count might
reduce the error.
See this introduction
for more information.
double approximation_error = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
double
The approximationError.
getBaselineOutputValue()
public double getBaselineOutputValue ()
Output only. Model predicted output if the input instance is constructed
from the baselines of all the features defined in
ExplanationMetadata.inputs .
The field name of the output is determined by the key in
ExplanationMetadata.outputs .
If the Model's predicted output has multiple dimensions (rank > 1), this is
the value in the output located by
output_index .
If there are multiple baselines, their output values are averaged.
double baseline_output_value = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
double
The baselineOutputValue.
getDefaultInstanceForType()
public Attribution getDefaultInstanceForType ()
Returns
Type
Description
Attribution
getFeatureAttributions()
public Value getFeatureAttributions ()
Output only. Attributions of each explained feature. Features are extracted
from the prediction
instances according
to explanation metadata for
inputs .
The value is a struct, whose keys are the name of the feature. The values
are how much the feature in the
instance contributed
to the predicted result.
The format of the value is determined by the feature's input format:
If the feature is a scalar value, the attribution value is a
floating number .
If the feature is an array of scalar values, the attribution value is
an array .
If the feature is a struct, the attribution value is a
struct . The keys in the
attribution value struct are the same as the keys in the feature
struct. The formats of the values in the attribution struct are
determined by the formats of the values in the feature struct.
The
ExplanationMetadata.feature_attributions_schema_uri
field, pointed to by the
ExplanationSpec field of the
Endpoint.deployed_models
object, points to the schema file that describes the features and their
attribution values (if it is populated).
.google.protobuf.Value feature_attributions = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Value
The featureAttributions.
getFeatureAttributionsOrBuilder()
public ValueOrBuilder getFeatureAttributionsOrBuilder ()
Output only. Attributions of each explained feature. Features are extracted
from the prediction
instances according
to explanation metadata for
inputs .
The value is a struct, whose keys are the name of the feature. The values
are how much the feature in the
instance contributed
to the predicted result.
The format of the value is determined by the feature's input format:
If the feature is a scalar value, the attribution value is a
floating number .
If the feature is an array of scalar values, the attribution value is
an array .
If the feature is a struct, the attribution value is a
struct . The keys in the
attribution value struct are the same as the keys in the feature
struct. The formats of the values in the attribution struct are
determined by the formats of the values in the feature struct.
The
ExplanationMetadata.feature_attributions_schema_uri
field, pointed to by the
ExplanationSpec field of the
Endpoint.deployed_models
object, points to the schema file that describes the features and their
attribution values (if it is populated).
.google.protobuf.Value feature_attributions = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ValueOrBuilder
getInstanceOutputValue()
public double getInstanceOutputValue ()
Output only. Model predicted output on the corresponding explanation
instance . The field name of the output is
determined by the key in
ExplanationMetadata.outputs .
If the Model predicted output has multiple dimensions, this is the value in
the output located by
output_index .
double instance_output_value = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
double
The instanceOutputValue.
getOutputDisplayName()
public String getOutputDisplayName ()
Output only. The display name of the output identified by
output_index . For
example, the predicted class name by a multi-classification Model.
This field is only populated iff the Model predicts display names as a
separate field along with the explained output. The predicted display name
must has the same shape of the explained output, and can be located using
output_index.
string output_display_name = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The outputDisplayName.
getOutputDisplayNameBytes()
public ByteString getOutputDisplayNameBytes ()
Output only. The display name of the output identified by
output_index . For
example, the predicted class name by a multi-classification Model.
This field is only populated iff the Model predicts display names as a
separate field along with the explained output. The predicted display name
must has the same shape of the explained output, and can be located using
output_index.
string output_display_name = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for outputDisplayName.
getOutputIndex(int index)
public int getOutputIndex ( int index )
Output only. The index that locates the explained prediction output.
If the prediction output is a scalar value, output_index is not populated.
If the prediction output has multiple dimensions, the length of the
output_index list is the same as the number of dimensions of the output.
The i-th element in output_index is the element index of the i-th dimension
of the output vector. Indices start from 0.
repeated int32 output_index = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
int
The outputIndex at the given index.
getOutputIndexCount()
public int getOutputIndexCount ()
Output only. The index that locates the explained prediction output.
If the prediction output is a scalar value, output_index is not populated.
If the prediction output has multiple dimensions, the length of the
output_index list is the same as the number of dimensions of the output.
The i-th element in output_index is the element index of the i-th dimension
of the output vector. Indices start from 0.
repeated int32 output_index = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
int
The count of outputIndex.
getOutputIndexList()
public List<Integer> getOutputIndexList ()
Output only. The index that locates the explained prediction output.
If the prediction output is a scalar value, output_index is not populated.
If the prediction output has multiple dimensions, the length of the
output_index list is the same as the number of dimensions of the output.
The i-th element in output_index is the element index of the i-th dimension
of the output vector. Indices start from 0.
repeated int32 output_index = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
List < Integer >
A list containing the outputIndex.
getOutputName()
public String getOutputName ()
Output only. Name of the explain output. Specified as the key in
ExplanationMetadata.outputs .
string output_name = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The outputName.
getOutputNameBytes()
public ByteString getOutputNameBytes ()
Output only. Name of the explain output. Specified as the key in
ExplanationMetadata.outputs .
string output_name = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for outputName.
getParserForType()
public Parser<Attribution> getParserForType ()
Returns
Type
Description
Parser < Attribution >
Overrides
GeneratedMessage.getParserForType()
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
hasFeatureAttributions()
public boolean hasFeatureAttributions ()
Output only. Attributions of each explained feature. Features are extracted
from the prediction
instances according
to explanation metadata for
inputs .
The value is a struct, whose keys are the name of the feature. The values
are how much the feature in the
instance contributed
to the predicted result.
The format of the value is determined by the feature's input format:
If the feature is a scalar value, the attribution value is a
floating number .
If the feature is an array of scalar values, the attribution value is
an array .
If the feature is a struct, the attribution value is a
struct . The keys in the
attribution value struct are the same as the keys in the feature
struct. The formats of the values in the attribution struct are
determined by the formats of the values in the feature struct.
The
ExplanationMetadata.feature_attributions_schema_uri
field, pointed to by the
ExplanationSpec field of the
Endpoint.deployed_models
object, points to the schema file that describes the features and their
attribution values (if it is populated).
.google.protobuf.Value feature_attributions = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the featureAttributions field is set.
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
public Attribution . Builder newBuilderForType ()
Returns
Type
Description
Attribution.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected Attribution . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
Attribution.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public Attribution . Builder toBuilder ()
Returns
Type
Description
Attribution.Builder
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
