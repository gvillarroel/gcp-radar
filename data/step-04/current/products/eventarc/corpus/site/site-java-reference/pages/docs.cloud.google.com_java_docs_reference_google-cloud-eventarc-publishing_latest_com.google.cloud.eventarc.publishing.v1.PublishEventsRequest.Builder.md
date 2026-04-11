---
title: "Class PublishEventsRequest.Builder (0.88.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1.PublishEventsRequest.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-eventarc-publishing/latest/com.google.cloud.eventarc.publishing.v1.PublishEventsRequest.Builder
  title: "Class PublishEventsRequest.Builder (0.88.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Class PublishEventsRequest.Builder (0.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.88.0 (latest)
0.87.0
0.85.0
0.83.0
0.82.0
0.81.0
0.80.0
0.78.0
0.76.0
0.75.0
0.74.0
0.73.0
0.72.0
0.70.0
0.68.0
0.67.0
0.64.0
0.63.0
0.62.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.53.0
0.52.0
0.51.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.42.0
0.41.0
0.40.0
0.39.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.28.0
0.27.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
public static final class PublishEventsRequest . Builder extends GeneratedMessage . Builder<PublishEventsRequest . Builder > implements PublishEventsRequestOrBuilder
The request message for the PublishEvents method.
Protobuf type google.cloud.eventarc.publishing.v1.PublishEventsRequest
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
PublishEventsRequest.Builder
Implements
PublishEventsRequestOrBuilder
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
addAllEvents(Iterable<? extends Any> values)
public PublishEventsRequest . Builder addAllEvents ( Iterable < ? extends Any > values )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameter
Name
Description
values
Iterable < ? extends com.google.protobuf.Any >
Returns
Type
Description
PublishEventsRequest.Builder
addAllTextEvents(Iterable<String> values)
public PublishEventsRequest . Builder addAllTextEvents ( Iterable<String> values )
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Parameter
Name
Description
values
Iterable < String > The textEvents to add.
Returns
Type
Description
PublishEventsRequest.Builder
This builder for chaining.
addEvents(Any value)
public PublishEventsRequest . Builder addEvents ( Any value )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameter
Name
Description
value
Any
Returns
Type
Description
PublishEventsRequest.Builder
addEvents(Any.Builder builderForValue)
public PublishEventsRequest . Builder addEvents ( Any . Builder builderForValue )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameter
Name
Description
builderForValue
Builder
Returns
Type
Description
PublishEventsRequest.Builder
addEvents(int index, Any value)
public PublishEventsRequest . Builder addEvents ( int index , Any value )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameters
Name
Description
index
int
value
Any
Returns
Type
Description
PublishEventsRequest.Builder
addEvents(int index, Any.Builder builderForValue)
public PublishEventsRequest . Builder addEvents ( int index , Any . Builder builderForValue )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameters
Name
Description
index
int
builderForValue
Builder
Returns
Type
Description
PublishEventsRequest.Builder
addEventsBuilder()
public Any . Builder addEventsBuilder ()
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Returns
Type
Description
Builder
addEventsBuilder(int index)
public Any . Builder addEventsBuilder ( int index )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
Builder
addTextEvents(String value)
public PublishEventsRequest . Builder addTextEvents ( String value )
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Parameter
Name
Description
value
String The textEvents to add.
Returns
Type
Description
PublishEventsRequest.Builder
This builder for chaining.
addTextEventsBytes(ByteString value)
public PublishEventsRequest . Builder addTextEventsBytes ( ByteString value )
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Parameter
Name
Description
value
ByteString The bytes of the textEvents to add.
Returns
Type
Description
PublishEventsRequest.Builder
This builder for chaining.
build()
public PublishEventsRequest build ()
Returns
Type
Description
PublishEventsRequest
buildPartial()
public PublishEventsRequest buildPartial ()
Returns
Type
Description
PublishEventsRequest
clear()
public PublishEventsRequest . Builder clear ()
Returns
Type
Description
PublishEventsRequest.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearChannel()
public PublishEventsRequest . Builder clearChannel ()
The full name of the channel to publish to. For example:
projects/{project}/locations/{location}/channels/{channel-id} .
string channel = 1;
Returns
Type
Description
PublishEventsRequest.Builder
This builder for chaining.
clearEvents()
public PublishEventsRequest . Builder clearEvents ()
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Returns
Type
Description
PublishEventsRequest.Builder
clearTextEvents()
public PublishEventsRequest . Builder clearTextEvents ()
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Returns
Type
Description
PublishEventsRequest.Builder
This builder for chaining.
getChannel()
public String getChannel ()
The full name of the channel to publish to. For example:
projects/{project}/locations/{location}/channels/{channel-id} .
string channel = 1;
Returns
Type
Description
String
The channel.
getChannelBytes()
public ByteString getChannelBytes ()
The full name of the channel to publish to. For example:
projects/{project}/locations/{location}/channels/{channel-id} .
string channel = 1;
Returns
Type
Description
ByteString
The bytes for channel.
getDefaultInstanceForType()
public PublishEventsRequest getDefaultInstanceForType ()
Returns
Type
Description
PublishEventsRequest
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getEvents(int index)
public Any getEvents ( int index )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
Any
getEventsBuilder(int index)
public Any . Builder getEventsBuilder ( int index )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
Builder
getEventsBuilderList()
public List<Any . Builder > getEventsBuilderList ()
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Returns
Type
Description
List < Builder >
getEventsCount()
public int getEventsCount ()
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Returns
Type
Description
int
getEventsList()
public List<Any> getEventsList ()
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Returns
Type
Description
List < Any >
getEventsOrBuilder(int index)
public AnyOrBuilder getEventsOrBuilder ( int index )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
AnyOrBuilder
getEventsOrBuilderList()
public List < ? extends AnyOrBuilder > getEventsOrBuilderList ()
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Returns
Type
Description
List < ? extends com.google.protobuf.AnyOrBuilder >
getTextEvents(int index)
public String getTextEvents ( int index )
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
String
The textEvents at the given index.
getTextEventsBytes(int index)
public ByteString getTextEventsBytes ( int index )
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
ByteString
The bytes of the textEvents at the given index.
getTextEventsCount()
public int getTextEventsCount ()
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Returns
Type
Description
int
The count of textEvents.
getTextEventsList()
public ProtocolStringList getTextEventsList ()
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Returns
Type
Description
ProtocolStringList
A list containing the textEvents.
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
mergeFrom(PublishEventsRequest other)
public PublishEventsRequest . Builder mergeFrom ( PublishEventsRequest other )
Parameter
Name
Description
other
PublishEventsRequest
Returns
Type
Description
PublishEventsRequest.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public PublishEventsRequest . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
PublishEventsRequest.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public PublishEventsRequest . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
PublishEventsRequest.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
removeEvents(int index)
public PublishEventsRequest . Builder removeEvents ( int index )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
PublishEventsRequest.Builder
setChannel(String value)
public PublishEventsRequest . Builder setChannel ( String value )
The full name of the channel to publish to. For example:
projects/{project}/locations/{location}/channels/{channel-id} .
string channel = 1;
Parameter
Name
Description
value
String The channel to set.
Returns
Type
Description
PublishEventsRequest.Builder
This builder for chaining.
setChannelBytes(ByteString value)
public PublishEventsRequest . Builder setChannelBytes ( ByteString value )
The full name of the channel to publish to. For example:
projects/{project}/locations/{location}/channels/{channel-id} .
string channel = 1;
Parameter
Name
Description
value
ByteString The bytes for channel to set.
Returns
Type
Description
PublishEventsRequest.Builder
This builder for chaining.
setEvents(int index, Any value)
public PublishEventsRequest . Builder setEvents ( int index , Any value )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameters
Name
Description
index
int
value
Any
Returns
Type
Description
PublishEventsRequest.Builder
setEvents(int index, Any.Builder builderForValue)
public PublishEventsRequest . Builder setEvents ( int index , Any . Builder builderForValue )
The CloudEvents v1.0 events to publish. No other types are allowed.
If this field is set, then the text_events fields must not be set.
repeated .google.protobuf.Any events = 2;
Parameters
Name
Description
index
int
builderForValue
Builder
Returns
Type
Description
PublishEventsRequest.Builder
setTextEvents(int index, String value)
public PublishEventsRequest . Builder setTextEvents ( int index , String value )
The text representation of events to publish.
CloudEvent v1.0 in JSON format is the only allowed type. Refer to
https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
for specification.
If this field is set, then the events fields must not be set.
repeated string text_events = 3;
Parameters
Name
Description
index
int The index to set the value at.
value
String The textEvents to set.
Returns
Type
Description
PublishEventsRequest.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
