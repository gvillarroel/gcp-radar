---
title: "Class ConfigureContactSettingsRequest (1.85.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/com.google.cloud.domains.v1.ConfigureContactSettingsRequest
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/com.google.cloud.domains.v1.ConfigureContactSettingsRequest
  title: "Class ConfigureContactSettingsRequest (1.85.0) \_|\_ Java client libraries\
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
Class ConfigureContactSettingsRequest (1.85.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.85.0 (latest)
1.84.0
1.82.0
1.80.0
1.79.0
1.78.0
1.77.0
1.75.0
1.73.0
1.72.0
1.71.0
1.70.0
1.69.0
1.67.0
1.65.0
1.64.0
1.61.0
1.60.0
1.59.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.50.0
1.49.0
1.48.0
1.46.0
1.45.0
1.44.0
1.43.0
1.42.0
1.41.0
1.40.0
1.39.0
1.38.0
1.37.0
1.36.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.27.0
1.26.0
1.25.0
1.24.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
1.9.0
1.8.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.0
1.1.0
1.0.6
0.7.0
0.6.1
0.5.4
public final class ConfigureContactSettingsRequest extends GeneratedMessage implements ConfigureContactSettingsRequestOrBuilder
Request for the ConfigureContactSettings method.
Protobuf type google.cloud.domains.v1.ConfigureContactSettingsRequest
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
ConfigureContactSettingsRequest
Implements
ConfigureContactSettingsRequestOrBuilder
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
CONTACT_NOTICES_FIELD_NUMBER
public static final int CONTACT_NOTICES_FIELD_NUMBER
Field Value
Type
Description
int
CONTACT_SETTINGS_FIELD_NUMBER
public static final int CONTACT_SETTINGS_FIELD_NUMBER
Field Value
Type
Description
int
REGISTRATION_FIELD_NUMBER
public static final int REGISTRATION_FIELD_NUMBER
Field Value
Type
Description
int
UPDATE_MASK_FIELD_NUMBER
public static final int UPDATE_MASK_FIELD_NUMBER
Field Value
Type
Description
int
VALIDATE_ONLY_FIELD_NUMBER
public static final int VALIDATE_ONLY_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static ConfigureContactSettingsRequest getDefaultInstance ()
Returns
Type
Description
ConfigureContactSettingsRequest
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static ConfigureContactSettingsRequest . Builder newBuilder ()
Returns
Type
Description
ConfigureContactSettingsRequest.Builder
newBuilder(ConfigureContactSettingsRequest prototype)
public static ConfigureContactSettingsRequest . Builder newBuilder ( ConfigureContactSettingsRequest prototype )
Parameter
Name
Description
prototype
ConfigureContactSettingsRequest
Returns
Type
Description
ConfigureContactSettingsRequest.Builder
parseDelimitedFrom(InputStream input)
public static ConfigureContactSettingsRequest parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
ConfigureContactSettingsRequest
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static ConfigureContactSettingsRequest parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
ConfigureContactSettingsRequest
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static ConfigureContactSettingsRequest parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
ConfigureContactSettingsRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static ConfigureContactSettingsRequest parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
ConfigureContactSettingsRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static ConfigureContactSettingsRequest parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
ConfigureContactSettingsRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static ConfigureContactSettingsRequest parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
ConfigureContactSettingsRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static ConfigureContactSettingsRequest parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
ConfigureContactSettingsRequest
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static ConfigureContactSettingsRequest parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
ConfigureContactSettingsRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static ConfigureContactSettingsRequest parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
ConfigureContactSettingsRequest
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static ConfigureContactSettingsRequest parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
ConfigureContactSettingsRequest
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static ConfigureContactSettingsRequest parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
ConfigureContactSettingsRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static ConfigureContactSettingsRequest parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
ConfigureContactSettingsRequest
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<ConfigureContactSettingsRequest> parser ()
Returns
Type
Description
Parser < ConfigureContactSettingsRequest >
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
getContactNotices(int index)
public ContactNotice getContactNotices ( int index )
The list of contact notices that the caller acknowledges. The notices
needed here depend on the values specified in contact_settings .
repeated .google.cloud.domains.v1.ContactNotice contact_notices = 4;
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
ContactNotice
The contactNotices at the given index.
getContactNoticesCount()
public int getContactNoticesCount ()
The list of contact notices that the caller acknowledges. The notices
needed here depend on the values specified in contact_settings .
repeated .google.cloud.domains.v1.ContactNotice contact_notices = 4;
Returns
Type
Description
int
The count of contactNotices.
getContactNoticesList()
public List<ContactNotice> getContactNoticesList ()
The list of contact notices that the caller acknowledges. The notices
needed here depend on the values specified in contact_settings .
repeated .google.cloud.domains.v1.ContactNotice contact_notices = 4;
Returns
Type
Description
List < ContactNotice >
A list containing the contactNotices.
getContactNoticesValue(int index)
public int getContactNoticesValue ( int index )
The list of contact notices that the caller acknowledges. The notices
needed here depend on the values specified in contact_settings .
repeated .google.cloud.domains.v1.ContactNotice contact_notices = 4;
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
int
The enum numeric value on the wire of contactNotices at the given index.
getContactNoticesValueList()
public List<Integer> getContactNoticesValueList ()
The list of contact notices that the caller acknowledges. The notices
needed here depend on the values specified in contact_settings .
repeated .google.cloud.domains.v1.ContactNotice contact_notices = 4;
Returns
Type
Description
List < Integer >
A list containing the enum numeric values on the wire for contactNotices.
getContactSettings()
public ContactSettings getContactSettings ()
Fields of the ContactSettings to update.
.google.cloud.domains.v1.ContactSettings contact_settings = 2;
Returns
Type
Description
ContactSettings
The contactSettings.
getContactSettingsOrBuilder()
public ContactSettingsOrBuilder getContactSettingsOrBuilder ()
Fields of the ContactSettings to update.
.google.cloud.domains.v1.ContactSettings contact_settings = 2;
Returns
Type
Description
ContactSettingsOrBuilder
getDefaultInstanceForType()
public ConfigureContactSettingsRequest getDefaultInstanceForType ()
Returns
Type
Description
ConfigureContactSettingsRequest
getParserForType()
public Parser<ConfigureContactSettingsRequest> getParserForType ()
Returns
Type
Description
Parser < ConfigureContactSettingsRequest >
Overrides
GeneratedMessage.getParserForType()
getRegistration()
public String getRegistration ()
Required. The name of the Registration whose contact settings are being updated,
in the format projects/*/locations/*/registrations/* .
string registration = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The registration.
getRegistrationBytes()
public ByteString getRegistrationBytes ()
Required. The name of the Registration whose contact settings are being updated,
in the format projects/*/locations/*/registrations/* .
string registration = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for registration.
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
getUpdateMask()
public FieldMask getUpdateMask ()
Required. The field mask describing which fields to update as a comma-separated list.
For example, if only the registrant contact is being updated, the
update_mask is "registrant_contact" .
.google.protobuf.FieldMask update_mask = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
FieldMask
The updateMask.
getUpdateMaskOrBuilder()
public FieldMaskOrBuilder getUpdateMaskOrBuilder ()
Required. The field mask describing which fields to update as a comma-separated list.
For example, if only the registrant contact is being updated, the
update_mask is "registrant_contact" .
.google.protobuf.FieldMask update_mask = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
FieldMaskOrBuilder
getValidateOnly()
public boolean getValidateOnly ()
Validate the request without actually updating the contact settings.
bool validate_only = 5;
Returns
Type
Description
boolean
The validateOnly.
hasContactSettings()
public boolean hasContactSettings ()
Fields of the ContactSettings to update.
.google.cloud.domains.v1.ContactSettings contact_settings = 2;
Returns
Type
Description
boolean
Whether the contactSettings field is set.
hasUpdateMask()
public boolean hasUpdateMask ()
Required. The field mask describing which fields to update as a comma-separated list.
For example, if only the registrant contact is being updated, the
update_mask is "registrant_contact" .
.google.protobuf.FieldMask update_mask = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the updateMask field is set.
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
public ConfigureContactSettingsRequest . Builder newBuilderForType ()
Returns
Type
Description
ConfigureContactSettingsRequest.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected ConfigureContactSettingsRequest . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
ConfigureContactSettingsRequest.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public ConfigureContactSettingsRequest . Builder toBuilder ()
Returns
Type
Description
ConfigureContactSettingsRequest.Builder
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
