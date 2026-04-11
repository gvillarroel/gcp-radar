---
title: "Class Attribution.Builder (1.48.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/com.google.cloud.vertexai.api.Attribution.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vertexai/latest/com.google.cloud.vertexai.api.Attribution.Builder
  title: "Class Attribution.Builder (1.48.0) \_|\_ Java client libraries \_|\_ Google\
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
Class Attribution.Builder (1.48.0)
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
public static final class Attribution . Builder extends GeneratedMessage . Builder<Attribution . Builder > implements AttributionOrBuilder
Attribution that explains a particular prediction output.
Protobuf type google.cloud.vertexai.v1.Attribution
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
Attribution.Builder
Implements
AttributionOrBuilder
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
addAllOutputIndex(Iterable<? extends Integer> values)
public Attribution . Builder addAllOutputIndex ( Iterable < ? extends Integer > values )
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
values
Iterable < ? extends java.lang.Integer > The outputIndex to add.
Returns
Type
Description
Attribution.Builder
This builder for chaining.
addOutputIndex(int value)
public Attribution . Builder addOutputIndex ( int value )
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
value
int The outputIndex to add.
Returns
Type
Description
Attribution.Builder
This builder for chaining.
build()
public Attribution build ()
Returns
Type
Description
Attribution
buildPartial()
public Attribution buildPartial ()
Returns
Type
Description
Attribution
clear()
public Attribution . Builder clear ()
Returns
Type
Description
Attribution.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearApproximationError()
public Attribution . Builder clearApproximationError ()
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
Attribution.Builder
This builder for chaining.
clearBaselineOutputValue()
public Attribution . Builder clearBaselineOutputValue ()
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
Attribution.Builder
This builder for chaining.
clearFeatureAttributions()
public Attribution . Builder clearFeatureAttributions ()
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
Attribution.Builder
clearInstanceOutputValue()
public Attribution . Builder clearInstanceOutputValue ()
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
Attribution.Builder
This builder for chaining.
clearOutputDisplayName()
public Attribution . Builder clearOutputDisplayName ()
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
Attribution.Builder
This builder for chaining.
clearOutputIndex()
public Attribution . Builder clearOutputIndex ()
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
Attribution.Builder
This builder for chaining.
clearOutputName()
public Attribution . Builder clearOutputName ()
Output only. Name of the explain output. Specified as the key in
ExplanationMetadata.outputs .
string output_name = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Attribution.Builder
This builder for chaining.
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
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
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
getFeatureAttributionsBuilder()
public Value . Builder getFeatureAttributionsBuilder ()
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
Builder
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
mergeFeatureAttributions(Value value)
public Attribution . Builder mergeFeatureAttributions ( Value value )
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
Parameter
Name
Description
value
Value
Returns
Type
Description
Attribution.Builder
mergeFrom(Attribution other)
public Attribution . Builder mergeFrom ( Attribution other )
Parameter
Name
Description
other
Attribution
Returns
Type
Description
Attribution.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public Attribution . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
Attribution.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public Attribution . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
Attribution.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setApproximationError(double value)
public Attribution . Builder setApproximationError ( double value )
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
Parameter
Name
Description
value
double The approximationError to set.
Returns
Type
Description
Attribution.Builder
This builder for chaining.
setBaselineOutputValue(double value)
public Attribution . Builder setBaselineOutputValue ( double value )
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
Parameter
Name
Description
value
double The baselineOutputValue to set.
Returns
Type
Description
Attribution.Builder
This builder for chaining.
setFeatureAttributions(Value value)
public Attribution . Builder setFeatureAttributions ( Value value )
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
Parameter
Name
Description
value
Value
Returns
Type
Description
Attribution.Builder
setFeatureAttributions(Value.Builder builderForValue)
public Attribution . Builder setFeatureAttributions ( Value . Builder builderForValue )
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
Parameter
Name
Description
builderForValue
Builder
Returns
Type
Description
Attribution.Builder
setInstanceOutputValue(double value)
public Attribution . Builder setInstanceOutputValue ( double value )
Output only. Model predicted output on the corresponding explanation
instance . The field name of the output is
determined by the key in
ExplanationMetadata.outputs .
If the Model predicted output has multiple dimensions, this is the value in
the output located by
output_index .
double instance_output_value = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
double The instanceOutputValue to set.
Returns
Type
Description
Attribution.Builder
This builder for chaining.
setOutputDisplayName(String value)
public Attribution . Builder setOutputDisplayName ( String value )
Output only. The display name of the output identified by
output_index . For
example, the predicted class name by a multi-classification Model.
This field is only populated iff the Model predicts display names as a
separate field along with the explained output. The predicted display name
must has the same shape of the explained output, and can be located using
output_index.
string output_display_name = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
String The outputDisplayName to set.
Returns
Type
Description
Attribution.Builder
This builder for chaining.
setOutputDisplayNameBytes(ByteString value)
public Attribution . Builder setOutputDisplayNameBytes ( ByteString value )
Output only. The display name of the output identified by
output_index . For
example, the predicted class name by a multi-classification Model.
This field is only populated iff the Model predicts display names as a
separate field along with the explained output. The predicted display name
must has the same shape of the explained output, and can be located using
output_index.
string output_display_name = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ByteString The bytes for outputDisplayName to set.
Returns
Type
Description
Attribution.Builder
This builder for chaining.
setOutputIndex(int index, int value)
public Attribution . Builder setOutputIndex ( int index , int value )
Output only. The index that locates the explained prediction output.
If the prediction output is a scalar value, output_index is not populated.
If the prediction output has multiple dimensions, the length of the
output_index list is the same as the number of dimensions of the output.
The i-th element in output_index is the element index of the i-th dimension
of the output vector. Indices start from 0.
repeated int32 output_index = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameters
Name
Description
index
int The index to set the value at.
value
int The outputIndex to set.
Returns
Type
Description
Attribution.Builder
This builder for chaining.
setOutputName(String value)
public Attribution . Builder setOutputName ( String value )
Output only. Name of the explain output. Specified as the key in
ExplanationMetadata.outputs .
string output_name = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
String The outputName to set.
Returns
Type
Description
Attribution.Builder
This builder for chaining.
setOutputNameBytes(ByteString value)
public Attribution . Builder setOutputNameBytes ( ByteString value )
Output only. Name of the explain output. Specified as the key in
ExplanationMetadata.outputs .
string output_name = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ByteString The bytes for outputName to set.
Returns
Type
Description
Attribution.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
