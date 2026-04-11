---
title: "Class Barcode (2.92.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.Barcode
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.Barcode
  title: "Class Barcode (2.92.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Class Barcode (2.92.0)
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
public final class Barcode extends GeneratedMessage implements BarcodeOrBuilder
Encodes the detailed information of a barcode.
Protobuf type google.cloud.documentai.v1.Barcode
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
Barcode
Implements
BarcodeOrBuilder
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
FORMAT_FIELD_NUMBER
public static final int FORMAT_FIELD_NUMBER
Field Value
Type
Description
int
RAW_VALUE_FIELD_NUMBER
public static final int RAW_VALUE_FIELD_NUMBER
Field Value
Type
Description
int
VALUE_FORMAT_FIELD_NUMBER
public static final int VALUE_FORMAT_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static Barcode getDefaultInstance ()
Returns
Type
Description
Barcode
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static Barcode . Builder newBuilder ()
Returns
Type
Description
Barcode.Builder
newBuilder(Barcode prototype)
public static Barcode . Builder newBuilder ( Barcode prototype )
Parameter
Name
Description
prototype
Barcode
Returns
Type
Description
Barcode.Builder
parseDelimitedFrom(InputStream input)
public static Barcode parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
Barcode
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static Barcode parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
Barcode
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static Barcode parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
Barcode
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static Barcode parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
Barcode
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static Barcode parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
Barcode
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static Barcode parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
Barcode
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static Barcode parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
Barcode
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static Barcode parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
Barcode
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static Barcode parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
Barcode
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static Barcode parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
Barcode
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static Barcode parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
Barcode
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static Barcode parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
Barcode
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<Barcode> parser ()
Returns
Type
Description
Parser < Barcode >
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
getDefaultInstanceForType()
public Barcode getDefaultInstanceForType ()
Returns
Type
Description
Barcode
getFormat()
public String getFormat ()
Format of a barcode.
The supported formats are:
CODE_128 : Code 128 type.
CODE_39 : Code 39 type.
CODE_93 : Code 93 type.
CODABAR : Codabar type.
DATA_MATRIX : 2D Data Matrix type.
ITF : ITF type.
EAN_13 : EAN-13 type.
EAN_8 : EAN-8 type.
QR_CODE : 2D QR code type.
UPC_A : UPC-A type.
UPC_E : UPC-E type.
PDF417 : PDF417 type.
AZTEC : 2D Aztec code type.
DATABAR : GS1 DataBar code type.
string format = 1;
Returns
Type
Description
String
The format.
getFormatBytes()
public ByteString getFormatBytes ()
Format of a barcode.
The supported formats are:
CODE_128 : Code 128 type.
CODE_39 : Code 39 type.
CODE_93 : Code 93 type.
CODABAR : Codabar type.
DATA_MATRIX : 2D Data Matrix type.
ITF : ITF type.
EAN_13 : EAN-13 type.
EAN_8 : EAN-8 type.
QR_CODE : 2D QR code type.
UPC_A : UPC-A type.
UPC_E : UPC-E type.
PDF417 : PDF417 type.
AZTEC : 2D Aztec code type.
DATABAR : GS1 DataBar code type.
string format = 1;
Returns
Type
Description
ByteString
The bytes for format.
getParserForType()
public Parser<Barcode> getParserForType ()
Returns
Type
Description
Parser < Barcode >
Overrides
GeneratedMessage.getParserForType()
getRawValue()
public String getRawValue ()
Raw value encoded in the barcode.
For example: 'MEBKM:TITLE:Google;URL: https://www.google.com ;;' .
string raw_value = 3;
Returns
Type
Description
String
The rawValue.
getRawValueBytes()
public ByteString getRawValueBytes ()
Raw value encoded in the barcode.
For example: 'MEBKM:TITLE:Google;URL: https://www.google.com ;;' .
string raw_value = 3;
Returns
Type
Description
ByteString
The bytes for rawValue.
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
getValueFormat()
public String getValueFormat ()
Value format describes the format of the value that a barcode
encodes.
The supported formats are:
CONTACT_INFO : Contact information.
EMAIL : Email address.
ISBN : ISBN identifier.
PHONE : Phone number.
PRODUCT : Product.
SMS : SMS message.
TEXT : Text string.
URL : URL address.
WIFI : Wifi information.
GEO : Geo-localization.
CALENDAR_EVENT : Calendar event.
DRIVER_LICENSE : Driver's license.
string value_format = 2;
Returns
Type
Description
String
The valueFormat.
getValueFormatBytes()
public ByteString getValueFormatBytes ()
Value format describes the format of the value that a barcode
encodes.
The supported formats are:
CONTACT_INFO : Contact information.
EMAIL : Email address.
ISBN : ISBN identifier.
PHONE : Phone number.
PRODUCT : Product.
SMS : SMS message.
TEXT : Text string.
URL : URL address.
WIFI : Wifi information.
GEO : Geo-localization.
CALENDAR_EVENT : Calendar event.
DRIVER_LICENSE : Driver's license.
string value_format = 2;
Returns
Type
Description
ByteString
The bytes for valueFormat.
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
public Barcode . Builder newBuilderForType ()
Returns
Type
Description
Barcode.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected Barcode . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
Barcode.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public Barcode . Builder toBuilder ()
Returns
Type
Description
Barcode.Builder
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
