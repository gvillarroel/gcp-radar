---
title: "Class AllocationPolicy.InstancePolicy (0.88.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.InstancePolicy
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.InstancePolicy
  title: "Class AllocationPolicy.InstancePolicy (0.88.0) \_|\_ Java client libraries\
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
Class AllocationPolicy.InstancePolicy (0.88.0)
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
public static final class AllocationPolicy . InstancePolicy extends GeneratedMessage implements AllocationPolicy . InstancePolicyOrBuilder
InstancePolicy describes an instance type and resources attached to each VM
created by this InstancePolicy.
Protobuf type google.cloud.batch.v1.AllocationPolicy.InstancePolicy
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
AllocationPolicy.InstancePolicy
Implements
AllocationPolicy.InstancePolicyOrBuilder
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
ACCELERATORS_FIELD_NUMBER
public static final int ACCELERATORS_FIELD_NUMBER
Field Value
Type
Description
int
BOOT_DISK_FIELD_NUMBER
public static final int BOOT_DISK_FIELD_NUMBER
Field Value
Type
Description
int
DISKS_FIELD_NUMBER
public static final int DISKS_FIELD_NUMBER
Field Value
Type
Description
int
MACHINE_TYPE_FIELD_NUMBER
public static final int MACHINE_TYPE_FIELD_NUMBER
Field Value
Type
Description
int
MIN_CPU_PLATFORM_FIELD_NUMBER
public static final int MIN_CPU_PLATFORM_FIELD_NUMBER
Field Value
Type
Description
int
PROVISIONING_MODEL_FIELD_NUMBER
public static final int PROVISIONING_MODEL_FIELD_NUMBER
Field Value
Type
Description
int
RESERVATION_FIELD_NUMBER
public static final int RESERVATION_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static AllocationPolicy . InstancePolicy getDefaultInstance ()
Returns
Type
Description
AllocationPolicy.InstancePolicy
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static AllocationPolicy . InstancePolicy . Builder newBuilder ()
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
newBuilder(AllocationPolicy.InstancePolicy prototype)
public static AllocationPolicy . InstancePolicy . Builder newBuilder ( AllocationPolicy . InstancePolicy prototype )
Parameter
Name
Description
prototype
AllocationPolicy.InstancePolicy
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
parseDelimitedFrom(InputStream input)
public static AllocationPolicy . InstancePolicy parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AllocationPolicy.InstancePolicy
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy . InstancePolicy parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy.InstancePolicy
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static AllocationPolicy . InstancePolicy parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
AllocationPolicy.InstancePolicy
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy . InstancePolicy parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy.InstancePolicy
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static AllocationPolicy . InstancePolicy parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
AllocationPolicy.InstancePolicy
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy . InstancePolicy parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy.InstancePolicy
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static AllocationPolicy . InstancePolicy parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
AllocationPolicy.InstancePolicy
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy . InstancePolicy parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy.InstancePolicy
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static AllocationPolicy . InstancePolicy parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AllocationPolicy.InstancePolicy
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy . InstancePolicy parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy.InstancePolicy
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static AllocationPolicy . InstancePolicy parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
AllocationPolicy.InstancePolicy
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static AllocationPolicy . InstancePolicy parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy.InstancePolicy
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<AllocationPolicy . InstancePolicy > parser ()
Returns
Type
Description
Parser < InstancePolicy >
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
getAccelerators(int index)
public AllocationPolicy . Accelerator getAccelerators ( int index )
The accelerators attached to each VM instance.
repeated .google.cloud.batch.v1.AllocationPolicy.Accelerator accelerators = 5;
Parameter
Name
Description
index
int
Returns
Type
Description
AllocationPolicy.Accelerator
getAcceleratorsCount()
public int getAcceleratorsCount ()
The accelerators attached to each VM instance.
repeated .google.cloud.batch.v1.AllocationPolicy.Accelerator accelerators = 5;
Returns
Type
Description
int
getAcceleratorsList()
public List<AllocationPolicy . Accelerator > getAcceleratorsList ()
The accelerators attached to each VM instance.
repeated .google.cloud.batch.v1.AllocationPolicy.Accelerator accelerators = 5;
Returns
Type
Description
List < Accelerator >
getAcceleratorsOrBuilder(int index)
public AllocationPolicy . AcceleratorOrBuilder getAcceleratorsOrBuilder ( int index )
The accelerators attached to each VM instance.
repeated .google.cloud.batch.v1.AllocationPolicy.Accelerator accelerators = 5;
Parameter
Name
Description
index
int
Returns
Type
Description
AllocationPolicy.AcceleratorOrBuilder
getAcceleratorsOrBuilderList()
public List < ? extends AllocationPolicy . AcceleratorOrBuilder > getAcceleratorsOrBuilderList ()
The accelerators attached to each VM instance.
repeated .google.cloud.batch.v1.AllocationPolicy.Accelerator accelerators = 5;
Returns
Type
Description
List < ? extends com.google.cloud.batch.v1.AllocationPolicy.AcceleratorOrBuilder >
getBootDisk()
public AllocationPolicy . Disk getBootDisk ()
Boot disk to be created and attached to each VM by this InstancePolicy.
Boot disk will be deleted when the VM is deleted.
Batch API now only supports booting from image.
.google.cloud.batch.v1.AllocationPolicy.Disk boot_disk = 8;
Returns
Type
Description
AllocationPolicy.Disk
The bootDisk.
getBootDiskOrBuilder()
public AllocationPolicy . DiskOrBuilder getBootDiskOrBuilder ()
Boot disk to be created and attached to each VM by this InstancePolicy.
Boot disk will be deleted when the VM is deleted.
Batch API now only supports booting from image.
.google.cloud.batch.v1.AllocationPolicy.Disk boot_disk = 8;
Returns
Type
Description
AllocationPolicy.DiskOrBuilder
getDefaultInstanceForType()
public AllocationPolicy . InstancePolicy getDefaultInstanceForType ()
Returns
Type
Description
AllocationPolicy.InstancePolicy
getDisks(int index)
public AllocationPolicy . AttachedDisk getDisks ( int index )
Non-boot disks to be attached for each VM created by this InstancePolicy.
New disks will be deleted when the VM is deleted.
A non-boot disk is a disk that can be of a device with a
file system or a raw storage drive that is not ready for data
storage and accessing.
repeated .google.cloud.batch.v1.AllocationPolicy.AttachedDisk disks = 6;
Parameter
Name
Description
index
int
Returns
Type
Description
AllocationPolicy.AttachedDisk
getDisksCount()
public int getDisksCount ()
Non-boot disks to be attached for each VM created by this InstancePolicy.
New disks will be deleted when the VM is deleted.
A non-boot disk is a disk that can be of a device with a
file system or a raw storage drive that is not ready for data
storage and accessing.
repeated .google.cloud.batch.v1.AllocationPolicy.AttachedDisk disks = 6;
Returns
Type
Description
int
getDisksList()
public List<AllocationPolicy . AttachedDisk > getDisksList ()
Non-boot disks to be attached for each VM created by this InstancePolicy.
New disks will be deleted when the VM is deleted.
A non-boot disk is a disk that can be of a device with a
file system or a raw storage drive that is not ready for data
storage and accessing.
repeated .google.cloud.batch.v1.AllocationPolicy.AttachedDisk disks = 6;
Returns
Type
Description
List < AttachedDisk >
getDisksOrBuilder(int index)
public AllocationPolicy . AttachedDiskOrBuilder getDisksOrBuilder ( int index )
Non-boot disks to be attached for each VM created by this InstancePolicy.
New disks will be deleted when the VM is deleted.
A non-boot disk is a disk that can be of a device with a
file system or a raw storage drive that is not ready for data
storage and accessing.
repeated .google.cloud.batch.v1.AllocationPolicy.AttachedDisk disks = 6;
Parameter
Name
Description
index
int
Returns
Type
Description
AllocationPolicy.AttachedDiskOrBuilder
getDisksOrBuilderList()
public List < ? extends AllocationPolicy . AttachedDiskOrBuilder > getDisksOrBuilderList ()
Non-boot disks to be attached for each VM created by this InstancePolicy.
New disks will be deleted when the VM is deleted.
A non-boot disk is a disk that can be of a device with a
file system or a raw storage drive that is not ready for data
storage and accessing.
repeated .google.cloud.batch.v1.AllocationPolicy.AttachedDisk disks = 6;
Returns
Type
Description
List < ? extends com.google.cloud.batch.v1.AllocationPolicy.AttachedDiskOrBuilder >
getMachineType()
public String getMachineType ()
The Compute Engine machine type.
string machine_type = 2;
Returns
Type
Description
String
The machineType.
getMachineTypeBytes()
public ByteString getMachineTypeBytes ()
The Compute Engine machine type.
string machine_type = 2;
Returns
Type
Description
ByteString
The bytes for machineType.
getMinCpuPlatform()
public String getMinCpuPlatform ()
The minimum CPU platform.
See
https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform .
string min_cpu_platform = 3;
Returns
Type
Description
String
The minCpuPlatform.
getMinCpuPlatformBytes()
public ByteString getMinCpuPlatformBytes ()
The minimum CPU platform.
See
https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform .
string min_cpu_platform = 3;
Returns
Type
Description
ByteString
The bytes for minCpuPlatform.
getParserForType()
public Parser<AllocationPolicy . InstancePolicy > getParserForType ()
Returns
Type
Description
Parser < InstancePolicy >
Overrides
GeneratedMessage.getParserForType()
getProvisioningModel()
public AllocationPolicy . ProvisioningModel getProvisioningModel ()
The provisioning model.
.google.cloud.batch.v1.AllocationPolicy.ProvisioningModel provisioning_model = 4;
Returns
Type
Description
AllocationPolicy.ProvisioningModel
The provisioningModel.
getProvisioningModelValue()
public int getProvisioningModelValue ()
The provisioning model.
.google.cloud.batch.v1.AllocationPolicy.ProvisioningModel provisioning_model = 4;
Returns
Type
Description
int
The enum numeric value on the wire for provisioningModel.
getReservation()
public String getReservation ()
Optional. If not specified (default), VMs will consume any applicable
reservation. If "NO_RESERVATION" is specified, VMs will not consume any
reservation. Otherwise, if specified, VMs will consume only the specified
reservation.
string reservation = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The reservation.
getReservationBytes()
public ByteString getReservationBytes ()
Optional. If not specified (default), VMs will consume any applicable
reservation. If "NO_RESERVATION" is specified, VMs will not consume any
reservation. Otherwise, if specified, VMs will consume only the specified
reservation.
string reservation = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for reservation.
getSerializedSize()
public int getSerializedSize ()
Returns
Type
Description
int
Overrides
GeneratedMessage.getSerializedSize()
hasBootDisk()
public boolean hasBootDisk ()
Boot disk to be created and attached to each VM by this InstancePolicy.
Boot disk will be deleted when the VM is deleted.
Batch API now only supports booting from image.
.google.cloud.batch.v1.AllocationPolicy.Disk boot_disk = 8;
Returns
Type
Description
boolean
Whether the bootDisk field is set.
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
public AllocationPolicy . InstancePolicy . Builder newBuilderForType ()
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected AllocationPolicy . InstancePolicy . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public AllocationPolicy . InstancePolicy . Builder toBuilder ()
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
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
