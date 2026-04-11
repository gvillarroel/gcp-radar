---
title: "Class AllocationPolicy.InstancePolicy.Builder (0.88.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.InstancePolicy.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.InstancePolicy.Builder
  title: "Class AllocationPolicy.InstancePolicy.Builder (0.88.0) \_|\_ Java client\
    \ libraries \_|\_ Google Cloud Documentation"
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
Class AllocationPolicy.InstancePolicy.Builder (0.88.0)
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
public static final class AllocationPolicy . InstancePolicy . Builder extends GeneratedMessage . Builder<AllocationPolicy . InstancePolicy . Builder > implements AllocationPolicy . InstancePolicyOrBuilder
InstancePolicy describes an instance type and resources attached to each VM
created by this InstancePolicy.
Protobuf type google.cloud.batch.v1.AllocationPolicy.InstancePolicy
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AllocationPolicy.InstancePolicy.Builder
Implements
AllocationPolicy.InstancePolicyOrBuilder
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
addAccelerators(AllocationPolicy.Accelerator value)
public AllocationPolicy . InstancePolicy . Builder addAccelerators ( AllocationPolicy . Accelerator value )
The accelerators attached to each VM instance.
repeated .google.cloud.batch.v1.AllocationPolicy.Accelerator accelerators = 5;
Parameter
Name
Description
value
AllocationPolicy.Accelerator
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
addAccelerators(AllocationPolicy.Accelerator.Builder builderForValue)
public AllocationPolicy . InstancePolicy . Builder addAccelerators ( AllocationPolicy . Accelerator . Builder builderForValue )
The accelerators attached to each VM instance.
repeated .google.cloud.batch.v1.AllocationPolicy.Accelerator accelerators = 5;
Parameter
Name
Description
builderForValue
AllocationPolicy.Accelerator.Builder
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
addAccelerators(int index, AllocationPolicy.Accelerator value)
public AllocationPolicy . InstancePolicy . Builder addAccelerators ( int index , AllocationPolicy . Accelerator value )
The accelerators attached to each VM instance.
repeated .google.cloud.batch.v1.AllocationPolicy.Accelerator accelerators = 5;
Parameters
Name
Description
index
int
value
AllocationPolicy.Accelerator
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
addAccelerators(int index, AllocationPolicy.Accelerator.Builder builderForValue)
public AllocationPolicy . InstancePolicy . Builder addAccelerators ( int index , AllocationPolicy . Accelerator . Builder builderForValue )
The accelerators attached to each VM instance.
repeated .google.cloud.batch.v1.AllocationPolicy.Accelerator accelerators = 5;
Parameters
Name
Description
index
int
builderForValue
AllocationPolicy.Accelerator.Builder
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
addAcceleratorsBuilder()
public AllocationPolicy . Accelerator . Builder addAcceleratorsBuilder ()
The accelerators attached to each VM instance.
repeated .google.cloud.batch.v1.AllocationPolicy.Accelerator accelerators = 5;
Returns
Type
Description
AllocationPolicy.Accelerator.Builder
addAcceleratorsBuilder(int index)
public AllocationPolicy . Accelerator . Builder addAcceleratorsBuilder ( int index )
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
AllocationPolicy.Accelerator.Builder
addAllAccelerators(Iterable<? extends AllocationPolicy.Accelerator> values)
public AllocationPolicy . InstancePolicy . Builder addAllAccelerators ( Iterable < ? extends AllocationPolicy . Accelerator > values )
The accelerators attached to each VM instance.
repeated .google.cloud.batch.v1.AllocationPolicy.Accelerator accelerators = 5;
Parameter
Name
Description
values
Iterable < ? extends com.google.cloud.batch.v1.AllocationPolicy.Accelerator >
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
addAllDisks(Iterable<? extends AllocationPolicy.AttachedDisk> values)
public AllocationPolicy . InstancePolicy . Builder addAllDisks ( Iterable < ? extends AllocationPolicy . AttachedDisk > values )
Non-boot disks to be attached for each VM created by this InstancePolicy.
New disks will be deleted when the VM is deleted.
A non-boot disk is a disk that can be of a device with a
file system or a raw storage drive that is not ready for data
storage and accessing.
repeated .google.cloud.batch.v1.AllocationPolicy.AttachedDisk disks = 6;
Parameter
Name
Description
values
Iterable < ? extends com.google.cloud.batch.v1.AllocationPolicy.AttachedDisk >
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
addDisks(AllocationPolicy.AttachedDisk value)
public AllocationPolicy . InstancePolicy . Builder addDisks ( AllocationPolicy . AttachedDisk value )
Non-boot disks to be attached for each VM created by this InstancePolicy.
New disks will be deleted when the VM is deleted.
A non-boot disk is a disk that can be of a device with a
file system or a raw storage drive that is not ready for data
storage and accessing.
repeated .google.cloud.batch.v1.AllocationPolicy.AttachedDisk disks = 6;
Parameter
Name
Description
value
AllocationPolicy.AttachedDisk
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
addDisks(AllocationPolicy.AttachedDisk.Builder builderForValue)
public AllocationPolicy . InstancePolicy . Builder addDisks ( AllocationPolicy . AttachedDisk . Builder builderForValue )
Non-boot disks to be attached for each VM created by this InstancePolicy.
New disks will be deleted when the VM is deleted.
A non-boot disk is a disk that can be of a device with a
file system or a raw storage drive that is not ready for data
storage and accessing.
repeated .google.cloud.batch.v1.AllocationPolicy.AttachedDisk disks = 6;
Parameter
Name
Description
builderForValue
AllocationPolicy.AttachedDisk.Builder
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
addDisks(int index, AllocationPolicy.AttachedDisk value)
public AllocationPolicy . InstancePolicy . Builder addDisks ( int index , AllocationPolicy . AttachedDisk value )
Non-boot disks to be attached for each VM created by this InstancePolicy.
New disks will be deleted when the VM is deleted.
A non-boot disk is a disk that can be of a device with a
file system or a raw storage drive that is not ready for data
storage and accessing.
repeated .google.cloud.batch.v1.AllocationPolicy.AttachedDisk disks = 6;
Parameters
Name
Description
index
int
value
AllocationPolicy.AttachedDisk
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
addDisks(int index, AllocationPolicy.AttachedDisk.Builder builderForValue)
public AllocationPolicy . InstancePolicy . Builder addDisks ( int index , AllocationPolicy . AttachedDisk . Builder builderForValue )
Non-boot disks to be attached for each VM created by this InstancePolicy.
New disks will be deleted when the VM is deleted.
A non-boot disk is a disk that can be of a device with a
file system or a raw storage drive that is not ready for data
storage and accessing.
repeated .google.cloud.batch.v1.AllocationPolicy.AttachedDisk disks = 6;
Parameters
Name
Description
index
int
builderForValue
AllocationPolicy.AttachedDisk.Builder
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
addDisksBuilder()
public AllocationPolicy . AttachedDisk . Builder addDisksBuilder ()
Non-boot disks to be attached for each VM created by this InstancePolicy.
New disks will be deleted when the VM is deleted.
A non-boot disk is a disk that can be of a device with a
file system or a raw storage drive that is not ready for data
storage and accessing.
repeated .google.cloud.batch.v1.AllocationPolicy.AttachedDisk disks = 6;
Returns
Type
Description
AllocationPolicy.AttachedDisk.Builder
addDisksBuilder(int index)
public AllocationPolicy . AttachedDisk . Builder addDisksBuilder ( int index )
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
AllocationPolicy.AttachedDisk.Builder
build()
public AllocationPolicy . InstancePolicy build ()
Returns
Type
Description
AllocationPolicy.InstancePolicy
buildPartial()
public AllocationPolicy . InstancePolicy buildPartial ()
Returns
Type
Description
AllocationPolicy.InstancePolicy
clear()
public AllocationPolicy . InstancePolicy . Builder clear ()
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearAccelerators()
public AllocationPolicy . InstancePolicy . Builder clearAccelerators ()
The accelerators attached to each VM instance.
repeated .google.cloud.batch.v1.AllocationPolicy.Accelerator accelerators = 5;
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
clearBootDisk()
public AllocationPolicy . InstancePolicy . Builder clearBootDisk ()
Boot disk to be created and attached to each VM by this InstancePolicy.
Boot disk will be deleted when the VM is deleted.
Batch API now only supports booting from image.
.google.cloud.batch.v1.AllocationPolicy.Disk boot_disk = 8;
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
clearDisks()
public AllocationPolicy . InstancePolicy . Builder clearDisks ()
Non-boot disks to be attached for each VM created by this InstancePolicy.
New disks will be deleted when the VM is deleted.
A non-boot disk is a disk that can be of a device with a
file system or a raw storage drive that is not ready for data
storage and accessing.
repeated .google.cloud.batch.v1.AllocationPolicy.AttachedDisk disks = 6;
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
clearMachineType()
public AllocationPolicy . InstancePolicy . Builder clearMachineType ()
The Compute Engine machine type.
string machine_type = 2;
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
This builder for chaining.
clearMinCpuPlatform()
public AllocationPolicy . InstancePolicy . Builder clearMinCpuPlatform ()
The minimum CPU platform.
See
https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform .
string min_cpu_platform = 3;
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
This builder for chaining.
clearProvisioningModel()
public AllocationPolicy . InstancePolicy . Builder clearProvisioningModel ()
The provisioning model.
.google.cloud.batch.v1.AllocationPolicy.ProvisioningModel provisioning_model = 4;
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
This builder for chaining.
clearReservation()
public AllocationPolicy . InstancePolicy . Builder clearReservation ()
Optional. If not specified (default), VMs will consume any applicable
reservation. If "NO_RESERVATION" is specified, VMs will not consume any
reservation. Otherwise, if specified, VMs will consume only the specified
reservation.
string reservation = 7 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
This builder for chaining.
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
getAcceleratorsBuilder(int index)
public AllocationPolicy . Accelerator . Builder getAcceleratorsBuilder ( int index )
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
AllocationPolicy.Accelerator.Builder
getAcceleratorsBuilderList()
public List<AllocationPolicy . Accelerator . Builder > getAcceleratorsBuilderList ()
The accelerators attached to each VM instance.
repeated .google.cloud.batch.v1.AllocationPolicy.Accelerator accelerators = 5;
Returns
Type
Description
List < Builder >
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
getBootDiskBuilder()
public AllocationPolicy . Disk . Builder getBootDiskBuilder ()
Boot disk to be created and attached to each VM by this InstancePolicy.
Boot disk will be deleted when the VM is deleted.
Batch API now only supports booting from image.
.google.cloud.batch.v1.AllocationPolicy.Disk boot_disk = 8;
Returns
Type
Description
AllocationPolicy.Disk.Builder
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
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
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
getDisksBuilder(int index)
public AllocationPolicy . AttachedDisk . Builder getDisksBuilder ( int index )
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
AllocationPolicy.AttachedDisk.Builder
getDisksBuilderList()
public List<AllocationPolicy . AttachedDisk . Builder > getDisksBuilderList ()
Non-boot disks to be attached for each VM created by this InstancePolicy.
New disks will be deleted when the VM is deleted.
A non-boot disk is a disk that can be of a device with a
file system or a raw storage drive that is not ready for data
storage and accessing.
repeated .google.cloud.batch.v1.AllocationPolicy.AttachedDisk disks = 6;
Returns
Type
Description
List < Builder >
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
mergeBootDisk(AllocationPolicy.Disk value)
public AllocationPolicy . InstancePolicy . Builder mergeBootDisk ( AllocationPolicy . Disk value )
Boot disk to be created and attached to each VM by this InstancePolicy.
Boot disk will be deleted when the VM is deleted.
Batch API now only supports booting from image.
.google.cloud.batch.v1.AllocationPolicy.Disk boot_disk = 8;
Parameter
Name
Description
value
AllocationPolicy.Disk
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
mergeFrom(AllocationPolicy.InstancePolicy other)
public AllocationPolicy . InstancePolicy . Builder mergeFrom ( AllocationPolicy . InstancePolicy other )
Parameter
Name
Description
other
AllocationPolicy.InstancePolicy
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AllocationPolicy . InstancePolicy . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy.InstancePolicy.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AllocationPolicy . InstancePolicy . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
removeAccelerators(int index)
public AllocationPolicy . InstancePolicy . Builder removeAccelerators ( int index )
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
AllocationPolicy.InstancePolicy.Builder
removeDisks(int index)
public AllocationPolicy . InstancePolicy . Builder removeDisks ( int index )
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
AllocationPolicy.InstancePolicy.Builder
setAccelerators(int index, AllocationPolicy.Accelerator value)
public AllocationPolicy . InstancePolicy . Builder setAccelerators ( int index , AllocationPolicy . Accelerator value )
The accelerators attached to each VM instance.
repeated .google.cloud.batch.v1.AllocationPolicy.Accelerator accelerators = 5;
Parameters
Name
Description
index
int
value
AllocationPolicy.Accelerator
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
setAccelerators(int index, AllocationPolicy.Accelerator.Builder builderForValue)
public AllocationPolicy . InstancePolicy . Builder setAccelerators ( int index , AllocationPolicy . Accelerator . Builder builderForValue )
The accelerators attached to each VM instance.
repeated .google.cloud.batch.v1.AllocationPolicy.Accelerator accelerators = 5;
Parameters
Name
Description
index
int
builderForValue
AllocationPolicy.Accelerator.Builder
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
setBootDisk(AllocationPolicy.Disk value)
public AllocationPolicy . InstancePolicy . Builder setBootDisk ( AllocationPolicy . Disk value )
Boot disk to be created and attached to each VM by this InstancePolicy.
Boot disk will be deleted when the VM is deleted.
Batch API now only supports booting from image.
.google.cloud.batch.v1.AllocationPolicy.Disk boot_disk = 8;
Parameter
Name
Description
value
AllocationPolicy.Disk
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
setBootDisk(AllocationPolicy.Disk.Builder builderForValue)
public AllocationPolicy . InstancePolicy . Builder setBootDisk ( AllocationPolicy . Disk . Builder builderForValue )
Boot disk to be created and attached to each VM by this InstancePolicy.
Boot disk will be deleted when the VM is deleted.
Batch API now only supports booting from image.
.google.cloud.batch.v1.AllocationPolicy.Disk boot_disk = 8;
Parameter
Name
Description
builderForValue
AllocationPolicy.Disk.Builder
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
setDisks(int index, AllocationPolicy.AttachedDisk value)
public AllocationPolicy . InstancePolicy . Builder setDisks ( int index , AllocationPolicy . AttachedDisk value )
Non-boot disks to be attached for each VM created by this InstancePolicy.
New disks will be deleted when the VM is deleted.
A non-boot disk is a disk that can be of a device with a
file system or a raw storage drive that is not ready for data
storage and accessing.
repeated .google.cloud.batch.v1.AllocationPolicy.AttachedDisk disks = 6;
Parameters
Name
Description
index
int
value
AllocationPolicy.AttachedDisk
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
setDisks(int index, AllocationPolicy.AttachedDisk.Builder builderForValue)
public AllocationPolicy . InstancePolicy . Builder setDisks ( int index , AllocationPolicy . AttachedDisk . Builder builderForValue )
Non-boot disks to be attached for each VM created by this InstancePolicy.
New disks will be deleted when the VM is deleted.
A non-boot disk is a disk that can be of a device with a
file system or a raw storage drive that is not ready for data
storage and accessing.
repeated .google.cloud.batch.v1.AllocationPolicy.AttachedDisk disks = 6;
Parameters
Name
Description
index
int
builderForValue
AllocationPolicy.AttachedDisk.Builder
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
setMachineType(String value)
public AllocationPolicy . InstancePolicy . Builder setMachineType ( String value )
The Compute Engine machine type.
string machine_type = 2;
Parameter
Name
Description
value
String The machineType to set.
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
This builder for chaining.
setMachineTypeBytes(ByteString value)
public AllocationPolicy . InstancePolicy . Builder setMachineTypeBytes ( ByteString value )
The Compute Engine machine type.
string machine_type = 2;
Parameter
Name
Description
value
ByteString The bytes for machineType to set.
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
This builder for chaining.
setMinCpuPlatform(String value)
public AllocationPolicy . InstancePolicy . Builder setMinCpuPlatform ( String value )
The minimum CPU platform.
See
https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform .
string min_cpu_platform = 3;
Parameter
Name
Description
value
String The minCpuPlatform to set.
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
This builder for chaining.
setMinCpuPlatformBytes(ByteString value)
public AllocationPolicy . InstancePolicy . Builder setMinCpuPlatformBytes ( ByteString value )
The minimum CPU platform.
See
https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform .
string min_cpu_platform = 3;
Parameter
Name
Description
value
ByteString The bytes for minCpuPlatform to set.
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
This builder for chaining.
setProvisioningModel(AllocationPolicy.ProvisioningModel value)
public AllocationPolicy . InstancePolicy . Builder setProvisioningModel ( AllocationPolicy . ProvisioningModel value )
The provisioning model.
.google.cloud.batch.v1.AllocationPolicy.ProvisioningModel provisioning_model = 4;
Parameter
Name
Description
value
AllocationPolicy.ProvisioningModel The provisioningModel to set.
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
This builder for chaining.
setProvisioningModelValue(int value)
public AllocationPolicy . InstancePolicy . Builder setProvisioningModelValue ( int value )
The provisioning model.
.google.cloud.batch.v1.AllocationPolicy.ProvisioningModel provisioning_model = 4;
Parameter
Name
Description
value
int The enum numeric value on the wire for provisioningModel to set.
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
This builder for chaining.
setReservation(String value)
public AllocationPolicy . InstancePolicy . Builder setReservation ( String value )
Optional. If not specified (default), VMs will consume any applicable
reservation. If "NO_RESERVATION" is specified, VMs will not consume any
reservation. Otherwise, if specified, VMs will consume only the specified
reservation.
string reservation = 7 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
String The reservation to set.
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
This builder for chaining.
setReservationBytes(ByteString value)
public AllocationPolicy . InstancePolicy . Builder setReservationBytes ( ByteString value )
Optional. If not specified (default), VMs will consume any applicable
reservation. If "NO_RESERVATION" is specified, VMs will not consume any
reservation. Otherwise, if specified, VMs will consume only the specified
reservation.
string reservation = 7 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
ByteString The bytes for reservation to set.
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
This builder for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
