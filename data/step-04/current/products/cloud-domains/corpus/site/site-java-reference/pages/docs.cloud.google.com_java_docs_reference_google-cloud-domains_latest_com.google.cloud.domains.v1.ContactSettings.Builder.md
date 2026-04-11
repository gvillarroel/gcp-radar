---
title: "Class ContactSettings.Builder (1.85.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/com.google.cloud.domains.v1.ContactSettings.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/com.google.cloud.domains.v1.ContactSettings.Builder
  title: "Class ContactSettings.Builder (1.85.0) \_|\_ Java client libraries \_|\_\
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
Class ContactSettings.Builder (1.85.0)
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
public static final class ContactSettings . Builder extends GeneratedMessage . Builder<ContactSettings . Builder > implements ContactSettingsOrBuilder
Defines the contact information associated with a Registration .
ICANN requires all domain names to have associated
contact information. The registrant_contact is considered the
domain's legal owner, and often the other contacts are identical.
Protobuf type google.cloud.domains.v1.ContactSettings
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
ContactSettings.Builder
Implements
ContactSettingsOrBuilder
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
public ContactSettings build ()
Returns
Type
Description
ContactSettings
buildPartial()
public ContactSettings buildPartial ()
Returns
Type
Description
ContactSettings
clear()
public ContactSettings . Builder clear ()
Returns
Type
Description
ContactSettings.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearAdminContact()
public ContactSettings . Builder clearAdminContact ()
Required. The administrative contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact admin_contact = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ContactSettings.Builder
clearPrivacy()
public ContactSettings . Builder clearPrivacy ()
Required. Privacy setting for the contacts associated with the Registration .
.google.cloud.domains.v1.ContactPrivacy privacy = 1 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ContactSettings.Builder
This builder for chaining.
clearRegistrantContact()
public ContactSettings . Builder clearRegistrantContact ()
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
ContactSettings.Builder
clearTechnicalContact()
public ContactSettings . Builder clearTechnicalContact ()
Required. The technical contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact technical_contact = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ContactSettings.Builder
getAdminContact()
public ContactSettings . Contact getAdminContact ()
Required. The administrative contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact admin_contact = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ContactSettings.Contact
The adminContact.
getAdminContactBuilder()
public ContactSettings . Contact . Builder getAdminContactBuilder ()
Required. The administrative contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact admin_contact = 3 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ContactSettings.Contact.Builder
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
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
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
getRegistrantContactBuilder()
public ContactSettings . Contact . Builder getRegistrantContactBuilder ()
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
ContactSettings.Contact.Builder
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
getTechnicalContact()
public ContactSettings . Contact getTechnicalContact ()
Required. The technical contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact technical_contact = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ContactSettings.Contact
The technicalContact.
getTechnicalContactBuilder()
public ContactSettings . Contact . Builder getTechnicalContactBuilder ()
Required. The technical contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact technical_contact = 4 [(.google.api.field_behavior) = REQUIRED];
Returns
Type
Description
ContactSettings.Contact.Builder
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
mergeAdminContact(ContactSettings.Contact value)
public ContactSettings . Builder mergeAdminContact ( ContactSettings . Contact value )
Required. The administrative contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact admin_contact = 3 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ContactSettings.Contact
Returns
Type
Description
ContactSettings.Builder
mergeFrom(ContactSettings other)
public ContactSettings . Builder mergeFrom ( ContactSettings other )
Parameter
Name
Description
other
ContactSettings
Returns
Type
Description
ContactSettings.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public ContactSettings . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
ContactSettings.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public ContactSettings . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
ContactSettings.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeRegistrantContact(ContactSettings.Contact value)
public ContactSettings . Builder mergeRegistrantContact ( ContactSettings . Contact value )
Required. The registrant contact for the Registration .
Caution: Anyone with access to this email address, phone number,
and/or postal address can take control of the domain.
Warning: For new Registration s, the registrant receives an email
confirmation that they must complete within 15 days to avoid domain
suspension.
.google.cloud.domains.v1.ContactSettings.Contact registrant_contact = 2 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ContactSettings.Contact
Returns
Type
Description
ContactSettings.Builder
mergeTechnicalContact(ContactSettings.Contact value)
public ContactSettings . Builder mergeTechnicalContact ( ContactSettings . Contact value )
Required. The technical contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact technical_contact = 4 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ContactSettings.Contact
Returns
Type
Description
ContactSettings.Builder
setAdminContact(ContactSettings.Contact value)
public ContactSettings . Builder setAdminContact ( ContactSettings . Contact value )
Required. The administrative contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact admin_contact = 3 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ContactSettings.Contact
Returns
Type
Description
ContactSettings.Builder
setAdminContact(ContactSettings.Contact.Builder builderForValue)
public ContactSettings . Builder setAdminContact ( ContactSettings . Contact . Builder builderForValue )
Required. The administrative contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact admin_contact = 3 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
builderForValue
ContactSettings.Contact.Builder
Returns
Type
Description
ContactSettings.Builder
setPrivacy(ContactPrivacy value)
public ContactSettings . Builder setPrivacy ( ContactPrivacy value )
Required. Privacy setting for the contacts associated with the Registration .
.google.cloud.domains.v1.ContactPrivacy privacy = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ContactPrivacy The privacy to set.
Returns
Type
Description
ContactSettings.Builder
This builder for chaining.
setPrivacyValue(int value)
public ContactSettings . Builder setPrivacyValue ( int value )
Required. Privacy setting for the contacts associated with the Registration .
.google.cloud.domains.v1.ContactPrivacy privacy = 1 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
int The enum numeric value on the wire for privacy to set.
Returns
Type
Description
ContactSettings.Builder
This builder for chaining.
setRegistrantContact(ContactSettings.Contact value)
public ContactSettings . Builder setRegistrantContact ( ContactSettings . Contact value )
Required. The registrant contact for the Registration .
Caution: Anyone with access to this email address, phone number,
and/or postal address can take control of the domain.
Warning: For new Registration s, the registrant receives an email
confirmation that they must complete within 15 days to avoid domain
suspension.
.google.cloud.domains.v1.ContactSettings.Contact registrant_contact = 2 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ContactSettings.Contact
Returns
Type
Description
ContactSettings.Builder
setRegistrantContact(ContactSettings.Contact.Builder builderForValue)
public ContactSettings . Builder setRegistrantContact ( ContactSettings . Contact . Builder builderForValue )
Required. The registrant contact for the Registration .
Caution: Anyone with access to this email address, phone number,
and/or postal address can take control of the domain.
Warning: For new Registration s, the registrant receives an email
confirmation that they must complete within 15 days to avoid domain
suspension.
.google.cloud.domains.v1.ContactSettings.Contact registrant_contact = 2 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
builderForValue
ContactSettings.Contact.Builder
Returns
Type
Description
ContactSettings.Builder
setTechnicalContact(ContactSettings.Contact value)
public ContactSettings . Builder setTechnicalContact ( ContactSettings . Contact value )
Required. The technical contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact technical_contact = 4 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
value
ContactSettings.Contact
Returns
Type
Description
ContactSettings.Builder
setTechnicalContact(ContactSettings.Contact.Builder builderForValue)
public ContactSettings . Builder setTechnicalContact ( ContactSettings . Contact . Builder builderForValue )
Required. The technical contact for the Registration .
.google.cloud.domains.v1.ContactSettings.Contact technical_contact = 4 [(.google.api.field_behavior) = REQUIRED];
Parameter
Name
Description
builderForValue
ContactSettings.Contact.Builder
Returns
Type
Description
ContactSettings.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
