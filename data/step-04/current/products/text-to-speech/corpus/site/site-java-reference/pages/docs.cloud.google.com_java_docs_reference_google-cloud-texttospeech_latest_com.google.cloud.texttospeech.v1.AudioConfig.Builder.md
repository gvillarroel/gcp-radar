---
title: "Class AudioConfig.Builder (2.89.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioConfig.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.AudioConfig.Builder
  title: "Class AudioConfig.Builder (2.89.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AudioConfig.Builder (2.89.0)
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
public static final class AudioConfig . Builder extends GeneratedMessage . Builder<AudioConfig . Builder > implements AudioConfigOrBuilder
Description of audio data to be synthesized.
Protobuf type google.cloud.texttospeech.v1.AudioConfig
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AudioConfig.Builder
Implements
AudioConfigOrBuilder
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
addAllEffectsProfileId(Iterable<String> values)
public AudioConfig . Builder addAllEffectsProfileId ( Iterable<String> values )
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
values
Iterable < String > The effectsProfileId to add.
Returns
Type
Description
AudioConfig.Builder
This builder for chaining.
addEffectsProfileId(String value)
public AudioConfig . Builder addEffectsProfileId ( String value )
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
value
String The effectsProfileId to add.
Returns
Type
Description
AudioConfig.Builder
This builder for chaining.
addEffectsProfileIdBytes(ByteString value)
public AudioConfig . Builder addEffectsProfileIdBytes ( ByteString value )
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
value
ByteString The bytes of the effectsProfileId to add.
Returns
Type
Description
AudioConfig.Builder
This builder for chaining.
build()
public AudioConfig build ()
Returns
Type
Description
AudioConfig
buildPartial()
public AudioConfig buildPartial ()
Returns
Type
Description
AudioConfig
clear()
public AudioConfig . Builder clear ()
Returns
Type
Description
AudioConfig.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearAudioEncoding()
public AudioConfig . Builder clearAudioEncoding ()
Required. The format of the audio byte stream.
.google.cloud.texttospeech.v1.AudioEncoding audio_encoding = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
AudioConfig.Builder
This builder for chaining.
clearEffectsProfileId()
public AudioConfig . Builder clearEffectsProfileId ()
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
AudioConfig.Builder
This builder for chaining.
clearPitch()
public AudioConfig . Builder clearPitch ()
Optional. Input only. Speaking pitch, in the range [-20.0, 20.0]. 20 means
increase 20 semitones from the original pitch. -20 means decrease 20
semitones from the original pitch.
double pitch = 3 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AudioConfig.Builder
This builder for chaining.
clearSampleRateHertz()
public AudioConfig . Builder clearSampleRateHertz ()
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
AudioConfig.Builder
This builder for chaining.
clearSpeakingRate()
public AudioConfig . Builder clearSpeakingRate ()
Optional. Input only. Speaking rate/speed, in the range [0.25, 2.0]. 1.0 is
the normal native speed supported by the specific voice. 2.0 is twice as
fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0
speed. Any other values < 0.25 or > 2.0 will return an error.
double speaking_rate = 2 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AudioConfig.Builder
This builder for chaining.
clearVolumeGainDb()
public AudioConfig . Builder clearVolumeGainDb ()
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
AudioConfig.Builder
This builder for chaining.
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
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
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
mergeFrom(AudioConfig other)
public AudioConfig . Builder mergeFrom ( AudioConfig other )
Parameter
Name
Description
other
AudioConfig
Returns
Type
Description
AudioConfig.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AudioConfig . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AudioConfig.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AudioConfig . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AudioConfig.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
setAudioEncoding(AudioEncoding value)
public AudioConfig . Builder setAudioEncoding ( AudioEncoding value )
Required. The format of the audio byte stream.
.google.cloud.texttospeech.v1.AudioEncoding audio_encoding = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
AudioEncoding The audioEncoding to set.
Returns
Type
Description
AudioConfig.Builder
This builder for chaining.
setAudioEncodingValue(int value)
public AudioConfig . Builder setAudioEncodingValue ( int value )
Required. The format of the audio byte stream.
.google.cloud.texttospeech.v1.AudioEncoding audio_encoding = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
int The enum numeric value on the wire for audioEncoding to set.
Returns
Type
Description
AudioConfig.Builder
This builder for chaining.
setEffectsProfileId(int index, String value)
public AudioConfig . Builder setEffectsProfileId ( int index , String value )
Optional. Input only. An identifier which selects 'audio effects' profiles
that are applied on (post synthesized) text to speech. Effects are applied
on top of each other in the order they are given. See
audio
profiles for
current supported profile ids.
repeated string effects_profile_id = 6 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
index
int The index to set the value at.
value
String The effectsProfileId to set.
Returns
Type
Description
AudioConfig.Builder
This builder for chaining.
setPitch(double value)
public AudioConfig . Builder setPitch ( double value )
Optional. Input only. Speaking pitch, in the range [-20.0, 20.0]. 20 means
increase 20 semitones from the original pitch. -20 means decrease 20
semitones from the original pitch.
double pitch = 3 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
double The pitch to set.
Returns
Type
Description
AudioConfig.Builder
This builder for chaining.
setSampleRateHertz(int value)
public AudioConfig . Builder setSampleRateHertz ( int value )
Optional. The synthesis sample rate (in hertz) for this audio. When this is
specified in SynthesizeSpeechRequest, if this is different from the voice's
natural sample rate, then the synthesizer will honor this request by
converting to the desired sample rate (which might result in worse audio
quality), unless the specified sample rate is not supported for the
encoding chosen, in which case it will fail the request and return
google.rpc.Code.INVALID_ARGUMENT .
int32 sample_rate_hertz = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
int The sampleRateHertz to set.
Returns
Type
Description
AudioConfig.Builder
This builder for chaining.
setSpeakingRate(double value)
public AudioConfig . Builder setSpeakingRate ( double value )
Optional. Input only. Speaking rate/speed, in the range [0.25, 2.0]. 1.0 is
the normal native speed supported by the specific voice. 2.0 is twice as
fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0
speed. Any other values < 0.25 or > 2.0 will return an error.
double speaking_rate = 2 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
double The speakingRate to set.
Returns
Type
Description
AudioConfig.Builder
This builder for chaining.
setVolumeGainDb(double value)
public AudioConfig . Builder setVolumeGainDb ( double value )
Optional. Input only. Volume gain (in dB) of the normal native volume
supported by the specific voice, in the range [-96.0, 16.0]. If unset, or
set to a value of 0.0 (dB), will play at normal native signal amplitude. A
value of -6.0 (dB) will play at approximately half the amplitude of the
normal native signal amplitude. A value of +6.0 (dB) will play at
approximately twice the amplitude of the normal native signal amplitude.
Strongly recommend not to exceed +10 (dB) as there's usually no effective
increase in loudness for any value greater than that.
double volume_gain_db = 4 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
double The volumeGainDb to set.
Returns
Type
Description
AudioConfig.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
