---
title: "Class AllocationPolicy.Disk (0.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk
  title: "Class AllocationPolicy.Disk (0.88.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AllocationPolicy.Disk (0.88.0)
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
0.10.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
0.3.2
0.2.2
0.1.1
public static final class AllocationPolicy . Disk extends GeneratedMessage implements AllocationPolicy . DiskOrBuilder
A new persistent disk or a local ssd.
A VM can only have one local SSD setting but multiple local SSD partitions.
See https://cloud.google.com/compute/docs/disks#pdspecs and
https://cloud.google.com/compute/docs/disks#localssds .
Protobuf type google.cloud.batch.v1.AllocationPolicy.Disk
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
AllocationPolicy.Disk
Implements
AllocationPolicy.DiskOrBuilder
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
DISK_INTERFACE_FIELD_NUMBER
public static final int DISK_INTERFACE_FIELD_NUMBER
Field Value
Type
Description
int
IMAGE_FIELD_NUMBER
public static final int IMAGE_FIELD_NUMBER
Field Value
Type
Description
int
SIZE_GB_FIELD_NUMBER
public static final int SIZE_GB_FIELD_NUMBER
Field Value
Type
Description
int
SNAPSHOT_FIELD_NUMBER
public static final int SNAPSHOT_FIELD_NUMBER
Field Value
Type
Description
int
TYPE_FIELD_NUMBER
public static final int TYPE_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static AllocationPolicy . Disk getDefaultInstance ()
Returns
Type
Description
AllocationPolicy.Disk
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static AllocationPolicy . Disk . Builder newBuilder ()
Returns
Type
Description
AllocationPolicy.Disk.Builder
newBuilder(AllocationPolicy.Disk prototype)
public static AllocationPolicy . Disk . Builder newBuilder ( AllocationPolicy . Disk prototype )
Parameter
Name
Description
prototype
AllocationPolicy.Disk
Returns
Type
Description
AllocationPolicy.Disk.Builder
parseDelimitedFrom(InputStream input)
public static AllocationPolicy . Disk parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AllocationPolicy.Disk
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy . Disk parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy.Disk
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static AllocationPolicy . Disk parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
AllocationPolicy.Disk
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy . Disk parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy.Disk
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static AllocationPolicy . Disk parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
AllocationPolicy.Disk
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy . Disk parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy.Disk
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static AllocationPolicy . Disk parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
AllocationPolicy.Disk
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy . Disk parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy.Disk
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static AllocationPolicy . Disk parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AllocationPolicy.Disk
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy . Disk parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy.Disk
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static AllocationPolicy . Disk parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
AllocationPolicy.Disk
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy . Disk parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy.Disk
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<AllocationPolicy . Disk > parser ()
Returns
Type
Description
Parser < Disk >
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
getDataSourceCase()
public AllocationPolicy . Disk . DataSourceCase getDataSourceCase ()
Returns
Type
Description
AllocationPolicy.Disk.DataSourceCase
getDefaultInstanceForType()
public AllocationPolicy . Disk getDefaultInstanceForType ()
Returns
Type
Description
AllocationPolicy.Disk
getDiskInterface()
public String getDiskInterface ()
Local SSDs are available through both "SCSI" and "NVMe" interfaces.
If not indicated, "NVMe" will be the default one for local ssds.
This field is ignored for persistent disks as the interface is chosen
automatically. See
https://cloud.google.com/compute/docs/disks/persistent-disks#choose_an_interface .
string disk_interface = 6;
Returns
Type
Description
String
The diskInterface.
getDiskInterfaceBytes()
public ByteString getDiskInterfaceBytes ()
Local SSDs are available through both "SCSI" and "NVMe" interfaces.
If not indicated, "NVMe" will be the default one for local ssds.
This field is ignored for persistent disks as the interface is chosen
automatically. See
https://cloud.google.com/compute/docs/disks/persistent-disks#choose_an_interface .
string disk_interface = 6;
Returns
Type
Description
ByteString
The bytes for diskInterface.
getImage()
public String getImage ()
URL for a VM image to use as the data source for this disk.
For example, the following are all valid URLs:
Specify the image by its family name:
projects/{project}/global/images/family/{image_family}
Specify the image version:
projects/{project}/global/images/{image_version}
You can also use Batch customized image in short names.
The following image values are supported for a boot disk:
batch-debian : use Batch Debian images.
batch-cos : use Batch Container-Optimized images.
batch-hpc-rocky : use Batch HPC Rocky Linux images.
string image = 4;
Returns
Type
Description
String
The image.
getImageBytes()
public ByteString getImageBytes ()
URL for a VM image to use as the data source for this disk.
For example, the following are all valid URLs:
Specify the image by its family name:
projects/{project}/global/images/family/{image_family}
Specify the image version:
projects/{project}/global/images/{image_version}
You can also use Batch customized image in short names.
The following image values are supported for a boot disk:
batch-debian : use Batch Debian images.
batch-cos : use Batch Container-Optimized images.
batch-hpc-rocky : use Batch HPC Rocky Linux images.
string image = 4;
Returns
Type
Description
ByteString
The bytes for image.
getParserForType()
public Parser<AllocationPolicy . Disk > getParserForType ()
Returns
Type
Description
Parser < Disk >
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
getSizeGb()
public long getSizeGb ()
Disk size in GB.
Non-Boot Disk :
If the type specifies a persistent disk, this field
is ignored if data_source is set as image or snapshot .
If the type specifies a local SSD, this field should be a multiple of
375 GB, otherwise, the final size will be the next greater multiple of
375 GB.
Boot Disk :
Batch will calculate the boot disk size based on source
image and task requirements if you do not speicify the size.
If both this field and the boot_disk_mib field in task spec's
compute_resource are defined, Batch will only honor this field.
Also, this field should be no smaller than the source disk's
size when the data_source is set as snapshot or image .
For example, if you set an image as the data_source field and the
image's default disk size 30 GB, you can only use this field to make the
disk larger or equal to 30 GB.
int64 size_gb = 2;
Returns
Type
Description
long
The sizeGb.
getSnapshot()
public String getSnapshot ()
Name of a snapshot used as the data source.
Snapshot is not supported as boot disk now.
string snapshot = 5;
Returns
Type
Description
String
The snapshot.
getSnapshotBytes()
public ByteString getSnapshotBytes ()
Name of a snapshot used as the data source.
Snapshot is not supported as boot disk now.
string snapshot = 5;
Returns
Type
Description
ByteString
The bytes for snapshot.
getType()
public String getType ()
Disk type as shown in gcloud compute disk-types list .
For example, local SSD uses type "local-ssd".
Persistent disks and boot disks use "pd-balanced", "pd-extreme", "pd-ssd"
or "pd-standard". If not specified, "pd-standard" will be used as the
default type for non-boot disks, "pd-balanced" will be used as the
default type for boot disks.
string type = 1;
Returns
Type
Description
String
The type.
getTypeBytes()
public ByteString getTypeBytes ()
Disk type as shown in gcloud compute disk-types list .
For example, local SSD uses type "local-ssd".
Persistent disks and boot disks use "pd-balanced", "pd-extreme", "pd-ssd"
or "pd-standard". If not specified, "pd-standard" will be used as the
default type for non-boot disks, "pd-balanced" will be used as the
default type for boot disks.
string type = 1;
Returns
Type
Description
ByteString
The bytes for type.
hasImage()
public boolean hasImage ()
URL for a VM image to use as the data source for this disk.
For example, the following are all valid URLs:
Specify the image by its family name:
projects/{project}/global/images/family/{image_family}
Specify the image version:
projects/{project}/global/images/{image_version}
You can also use Batch customized image in short names.
The following image values are supported for a boot disk:
batch-debian : use Batch Debian images.
batch-cos : use Batch Container-Optimized images.
batch-hpc-rocky : use Batch HPC Rocky Linux images.
string image = 4;
Returns
Type
Description
boolean
Whether the image field is set.
hasSnapshot()
public boolean hasSnapshot ()
Name of a snapshot used as the data source.
Snapshot is not supported as boot disk now.
string snapshot = 5;
Returns
Type
Description
boolean
Whether the snapshot field is set.
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
public AllocationPolicy . Disk . Builder newBuilderForType ()
Returns
Type
Description
AllocationPolicy.Disk.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected AllocationPolicy . Disk . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
AllocationPolicy.Disk.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public AllocationPolicy . Disk . Builder toBuilder ()
Returns
Type
Description
AllocationPolicy.Disk.Builder
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
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
