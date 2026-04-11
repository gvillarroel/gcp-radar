---
title: "Class ContactSettings (1.85.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/com.google.cloud.domains.v1.ContactSettings
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/com.google.cloud.domains.v1.ContactSettings
  title: "Class ContactSettings (1.85.0) \_|\_ Java client libraries \_|\_ Google\
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
Class ContactSettings (1.85.0)
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
public final class ContactSettings extends GeneratedMessage implements ContactSettingsOrBuilder
Defines the contact information associated with a Registration .
ICANN requires all domain names to have associated
contact information. The registrant_contact is considered the
domain's legal owner, and often the other contacts are identical.
Protobuf type google.cloud.domains.v1.ContactSettings
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
ContactSettings
Implements
ContactSettingsOrBuilder
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
ADMIN_CONTACT_FIELD_NUMBER
public static final int ADMIN_CONTACT_FIELD_NUMBER
Field Value
Type
Description
int
PRIVACY_FIELD_NUMBER
public static final int PRIVACY_FIELD_NUMBER
Field Value
Type
Description
int
REGISTRANT_CONTACT_FIELD_NUMBER
public static final int REGISTRANT_CONTACT_FIELD_NUMBER
Field Value
Type
Description
int
TECHNICAL_CONTACT_FIELD_NUMBER
public static final int TECHNICAL_CONTACT_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static ContactSettings getDefaultInstance ()
Returns
Type
Description
ContactSettings
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static ContactSettings . Builder newBuilder ()
Returns
Type
Description
ContactSettings.Builder
newBuilder(ContactSettings prototype)
public static ContactSettings . Builder newBuilder ( ContactSettings prototype )
Parameter
Name
Description
prototype
ContactSettings
Returns
Type
Description
ContactSettings.Builder
parseDelimitedFrom(InputStream input)
public static ContactSettings parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
ContactSettings
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static ContactSettings parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
ContactSettings
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static ContactSettings parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
ContactSettings
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static ContactSettings parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
ContactSettings
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static ContactSettings parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
ContactSettings
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static ContactSettings parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
ContactSettings
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static ContactSettings parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
ContactSettings
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static ContactSettings parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
ContactSettings
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static ContactSettings parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
ContactSettings
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static ContactSettings parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
ContactSettings
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static ContactSettings parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
ContactSettings
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static ContactSettings parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
ContactSettings
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<ContactSettings> parser ()
Returns
Type
Description
Parser < ContactSettings >
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
getAdminContact()
public ContactSettings . Contact getAdminContact ()
Required. The administrative contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact admin_contact = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ContactSettings.Contact
The adminContact.
getAdminContactOrBuilder()
public ContactSettings . ContactOrBuilder getAdminContactOrBuilder ()
Required. The administrative contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact admin_contact = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ContactSettings.ContactOrBuilder
getDefaultInstanceForType()
public ContactSettings getDefaultInstanceForType ()
Returns
Type
Description
ContactSettings
getParserForType()
public Parser<ContactSettings> getParserForType ()
Returns
Type
Description
Parser < ContactSettings >
Overrides
GeneratedMessage.getParserForType()
getPrivacy()
public ContactPrivacy getPrivacy ()
Required. Privacy setting for the contacts associated with the Registration .
.google.cloud.domains.v1.ContactPrivacy privacy = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ContactPrivacy
The privacy.
getPrivacyValue()
public int getPrivacyValue ()
Required. Privacy setting for the contacts associated with the Registration .
.google.cloud.domains.v1.ContactPrivacy privacy = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
int
The enum numeric value on the wire for privacy.
getRegistrantContact()
public ContactSettings . Contact getRegistrantContact ()
Required. The registrant contact for the Registration .
Caution: Anyone with access to this email address, phone number,
and/or postal address can take control of the domain.
Warning: For new Registration s, the registrant receives an email
confirmation that they must complete within 15 days to avoid domain
suspension.
.google.cloud.domains.v1.ContactSettings.Contact registrant_contact = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ContactSettings.Contact
The registrantContact.
getRegistrantContactOrBuilder()
public ContactSettings . ContactOrBuilder getRegistrantContactOrBuilder ()
Required. The registrant contact for the Registration .
Caution: Anyone with access to this email address, phone number,
and/or postal address can take control of the domain.
Warning: For new Registration s, the registrant receives an email
confirmation that they must complete within 15 days to avoid domain
suspension.
.google.cloud.domains.v1.ContactSettings.Contact registrant_contact = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ContactSettings.ContactOrBuilder
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
getTechnicalContact()
public ContactSettings . Contact getTechnicalContact ()
Required. The technical contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact technical_contact = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ContactSettings.Contact
The technicalContact.
getTechnicalContactOrBuilder()
public ContactSettings . ContactOrBuilder getTechnicalContactOrBuilder ()
Required. The technical contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact technical_contact = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ContactSettings.ContactOrBuilder
hasAdminContact()
public boolean hasAdminContact ()
Required. The administrative contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact admin_contact = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the adminContact field is set.
hasRegistrantContact()
public boolean hasRegistrantContact ()
Required. The registrant contact for the Registration .
Caution: Anyone with access to this email address, phone number,
and/or postal address can take control of the domain.
Warning: For new Registration s, the registrant receives an email
confirmation that they must complete within 15 days to avoid domain
suspension.
.google.cloud.domains.v1.ContactSettings.Contact registrant_contact = 2 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the registrantContact field is set.
hasTechnicalContact()
public boolean hasTechnicalContact ()
Required. The technical contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact technical_contact = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
boolean
Whether the technicalContact field is set.
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
public ContactSettings . Builder newBuilderForType ()
Returns
Type
Description
ContactSettings.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected ContactSettings . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
ContactSettings.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public ContactSettings . Builder toBuilder ()
Returns
Type
Description
ContactSettings.Builder
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
