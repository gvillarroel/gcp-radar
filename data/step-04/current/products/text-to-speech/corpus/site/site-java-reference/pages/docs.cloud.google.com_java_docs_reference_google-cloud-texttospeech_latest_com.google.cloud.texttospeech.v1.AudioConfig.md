---
title: "Class AudioConfig (2.89.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioConfig
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioConfig
  title: "Class AudioConfig (2.89.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class AudioConfig (2.89.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.89.0 (latest)
2.88.0
2.86.0
2.84.0
2.83.0
2.81.0
2.79.0
2.77.0
2.76.0
2.75.0
2.74.0
2.73.0
2.71.0
2.69.0
2.68.0
2.65.0
2.64.0
2.63.0
2.61.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.50.0
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
2.38.0
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
2.14.0
2.13.0
2.12.0
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.9
2.3.0
2.2.1
2.1.5
public final class AudioConfig extends GeneratedMessage implements AudioConfigOrBuilder
Description of audio data to be synthesized.
Protobuf type google.cloud.texttospeech.v1.AudioConfig
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
AudioConfig
Implements
AudioConfigOrBuilder
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
AUDIO_ENCODING_FIELD_NUMBER
public static final int AUDIO_ENCODING_FIELD_NUMBER
Field Value
Type
Description
int
EFFECTS_PROFILE_ID_FIELD_NUMBER
public static final int EFFECTS_PROFILE_ID_FIELD_NUMBER
Field Value
Type
Description
int
PITCH_FIELD_NUMBER
public static final int PITCH_FIELD_NUMBER
Field Value
Type
Description
int
SAMPLE_RATE_HERTZ_FIELD_NUMBER
public static final int SAMPLE_RATE_HERTZ_FIELD_NUMBER
Field Value
Type
Description
int
SPEAKING_RATE_FIELD_NUMBER
public static final int SPEAKING_RATE_FIELD_NUMBER
Field Value
Type
Description
int
VOLUME_GAIN_DB_FIELD_NUMBER
public static final int VOLUME_GAIN_DB_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static AudioConfig getDefaultInstance ()
Returns
Type
Description
AudioConfig
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static AudioConfig . Builder newBuilder ()
Returns
Type
Description
AudioConfig.Builder
newBuilder(AudioConfig prototype)
public static AudioConfig . Builder newBuilder ( AudioConfig prototype )
Parameter
Name
Description
prototype
AudioConfig
Returns
Type
Description
AudioConfig.Builder
parseDelimitedFrom(InputStream input)
public static AudioConfig parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AudioConfig
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AudioConfig parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AudioConfig
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static AudioConfig parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
AudioConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static AudioConfig parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
AudioConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static AudioConfig parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
AudioConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static AudioConfig parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
AudioConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static AudioConfig parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
AudioConfig
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static AudioConfig parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AudioConfig
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static AudioConfig parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AudioConfig
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AudioConfig parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AudioConfig
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static AudioConfig parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
AudioConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static AudioConfig parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
AudioConfig
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<AudioConfig> parser ()
Returns
Type
Description
Parser < AudioConfig >
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
getAudioEncoding()
public AudioEncoding getAudioEncoding ()
Required. The format of the audio byte stream.
.google.cloud.texttospeech.v1.AudioEncoding audio_encoding = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AudioEncoding
The audioEncoding.
getAudioEncodingValue()
public int getAudioEncodingValue ()
Required. The format of the audio byte stream.
.google.cloud.texttospeech.v1.AudioEncoding audio_encoding = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
int
The enum numeric value on the wire for audioEncoding.
getDefaultInstanceForType()
public AudioConfig getDefaultInstanceForType ()
Returns
Type
Description
AudioConfig
getEffectsProfileId(int index)
public String getEffectsProfileId ( int index )
Optional. Input only. An identifier which selects 'audio effects' profiles
that are applied on (post synthesized) text to speech. Effects are applied
on top of each other in the order they are given. See
audio
profiles for
current supported profile ids.
repeated string effects_profile_id = 6 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
String
The effectsProfileId at the given index.
getEffectsProfileIdBytes(int index)
public ByteString getEffectsProfileIdBytes ( int index )
Optional. Input only. An identifier which selects 'audio effects' profiles
that are applied on (post synthesized) text to speech. Effects are applied
on top of each other in the order they are given. See
audio
profiles for
current supported profile ids.
repeated string effects_profile_id = 6 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
ByteString
The bytes of the effectsProfileId at the given index.
getEffectsProfileIdCount()
public int getEffectsProfileIdCount ()
Optional. Input only. An identifier which selects 'audio effects' profiles
that are applied on (post synthesized) text to speech. Effects are applied
on top of each other in the order they are given. See
audio
profiles for
current supported profile ids.
repeated string effects_profile_id = 6 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
The count of effectsProfileId.
getEffectsProfileIdList()
public ProtocolStringList getEffectsProfileIdList ()
Optional. Input only. An identifier which selects 'audio effects' profiles
that are applied on (post synthesized) text to speech. Effects are applied
on top of each other in the order they are given. See
audio
profiles for
current supported profile ids.
repeated string effects_profile_id = 6 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ProtocolStringList
A list containing the effectsProfileId.
getParserForType()
public Parser<AudioConfig> getParserForType ()
Returns
Type
Description
Parser < AudioConfig >
Overrides
GeneratedMessage.getParserForType()
getPitch()
public double getPitch ()
Optional. Input only. Speaking pitch, in the range [-20.0, 20.0]. 20 means
increase 20 semitones from the original pitch. -20 means decrease 20
semitones from the original pitch.
double pitch = 3 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
double
The pitch.
getSampleRateHertz()
public int getSampleRateHertz ()
Optional. The synthesis sample rate (in hertz) for this audio. When this is
specified in SynthesizeSpeechRequest, if this is different from the voice's
natural sample rate, then the synthesizer will honor this request by
converting to the desired sample rate (which might result in worse audio
quality), unless the specified sample rate is not supported for the
encoding chosen, in which case it will fail the request and return
google.rpc.Code.INVALID_ARGUMENT .
int32 sample_rate_hertz = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
The sampleRateHertz.
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
getSpeakingRate()
public double getSpeakingRate ()
Optional. Input only. Speaking rate/speed, in the range [0.25, 2.0]. 1.0 is
the normal native speed supported by the specific voice. 2.0 is twice as
fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0
speed. Any other values < 0.25 or > 2.0 will return an error.
double speaking_rate = 2 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
double
The speakingRate.
getVolumeGainDb()
public double getVolumeGainDb ()
Optional. Input only. Volume gain (in dB) of the normal native volume
supported by the specific voice, in the range [-96.0, 16.0]. If unset, or
set to a value of 0.0 (dB), will play at normal native signal amplitude. A
value of -6.0 (dB) will play at approximately half the amplitude of the
normal native signal amplitude. A value of +6.0 (dB) will play at
approximately twice the amplitude of the normal native signal amplitude.
Strongly recommend not to exceed +10 (dB) as there's usually no effective
increase in loudness for any value greater than that.
double volume_gain_db = 4 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
double
The volumeGainDb.
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
public AudioConfig . Builder newBuilderForType ()
Returns
Type
Description
AudioConfig.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected AudioConfig . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
AudioConfig.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public AudioConfig . Builder toBuilder ()
Returns
Type
Description
AudioConfig.Builder
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
