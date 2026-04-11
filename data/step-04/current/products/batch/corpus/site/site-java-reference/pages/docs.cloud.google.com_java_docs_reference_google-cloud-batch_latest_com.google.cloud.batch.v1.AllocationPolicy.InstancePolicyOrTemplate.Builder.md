---
title: "Class AllocationPolicy.InstancePolicyOrTemplate.Builder (0.88.0) \_|\_ Java\
  \ client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate.Builder
  title: "Class AllocationPolicy.InstancePolicyOrTemplate.Builder (0.88.0) \_|\_ Java\
    \ client libraries \_|\_ Google Cloud Documentation"
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
Class AllocationPolicy.InstancePolicyOrTemplate.Builder (0.88.0)
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
public static final class AllocationPolicy . InstancePolicyOrTemplate . Builder extends GeneratedMessage . Builder<AllocationPolicy . InstancePolicyOrTemplate . Builder > implements AllocationPolicy . InstancePolicyOrTemplateOrBuilder
InstancePolicyOrTemplate lets you define the type of resources to use for
this job either with an InstancePolicy or an instance template.
If undefined, Batch picks the type of VM to use and doesn't include
optional VM resources such as GPUs and extra disks.
Protobuf type google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AllocationPolicy.InstancePolicyOrTemplate.Builder
Implements
AllocationPolicy.InstancePolicyOrTemplateOrBuilder
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
public AllocationPolicy . InstancePolicyOrTemplate build ()
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate
buildPartial()
public AllocationPolicy . InstancePolicyOrTemplate buildPartial ()
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate
clear()
public AllocationPolicy . InstancePolicyOrTemplate . Builder clear ()
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearBlockProjectSshKeys()
public AllocationPolicy . InstancePolicyOrTemplate . Builder clearBlockProjectSshKeys ()
Optional. Set this field to true if you want Batch to block
project-level SSH keys from accessing this job's VMs. Alternatively, you
can configure the job to specify a VM instance template that blocks
project-level SSH keys. In either case, Batch blocks project-level SSH
keys while creating the VMs for this job.
Batch allows project-level SSH keys for a job's VMs only if all
the following are true:
This field is undefined or set to false .
The job's VM instance template (if any) doesn't block project-level
SSH keys.
Notably, you can override this behavior by manually updating a VM to
block or allow project-level SSH keys. For more information about
blocking project-level SSH keys, see the Compute Engine documentation:
https://cloud.google.com/compute/docs/connect/restrict-ssh-keys#block-keys
bool block_project_ssh_keys = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
This builder for chaining.
clearInstallGpuDrivers()
public AllocationPolicy . InstancePolicyOrTemplate . Builder clearInstallGpuDrivers ()
Set this field true if you want Batch to help fetch drivers from a third
party location and install them for GPUs specified in
policy.accelerators or instance_template on your behalf. Default is
false.
For Container-Optimized Image cases, Batch will install the
accelerator driver following milestones of
https://cloud.google.com/container-optimized-os/docs/release-notes . For
non Container-Optimized Image cases, following
https://github.com/GoogleCloudPlatform/compute-gpu-installation/blob/main/linux/install_gpu_driver.py .
bool install_gpu_drivers = 3;
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
This builder for chaining.
clearInstallOpsAgent()
public AllocationPolicy . InstancePolicyOrTemplate . Builder clearInstallOpsAgent ()
Optional. Set this field true if you want Batch to install Ops Agent on
your behalf. Default is false.
bool install_ops_agent = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
This builder for chaining.
clearInstanceTemplate()
public AllocationPolicy . InstancePolicyOrTemplate . Builder clearInstanceTemplate ()
Name of an instance template used to create VMs.
Named the field as 'instance_template' instead of 'template' to avoid
C++ keyword conflict.
Batch only supports global instance templates from the same project as
the job.
You can specify the global instance template as a full or partial URL.
string instance_template = 2;
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
This builder for chaining.
clearPolicy()
public AllocationPolicy . InstancePolicyOrTemplate . Builder clearPolicy ()
InstancePolicy.
.google.cloud.batch.v1.AllocationPolicy.InstancePolicy policy = 1;
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
clearPolicyTemplate()
public AllocationPolicy . InstancePolicyOrTemplate . Builder clearPolicyTemplate ()
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
getBlockProjectSshKeys()
public boolean getBlockProjectSshKeys ()
Optional. Set this field to true if you want Batch to block
project-level SSH keys from accessing this job's VMs. Alternatively, you
can configure the job to specify a VM instance template that blocks
project-level SSH keys. In either case, Batch blocks project-level SSH
keys while creating the VMs for this job.
Batch allows project-level SSH keys for a job's VMs only if all
the following are true:
This field is undefined or set to false .
The job's VM instance template (if any) doesn't block project-level
SSH keys.
Notably, you can override this behavior by manually updating a VM to
block or allow project-level SSH keys. For more information about
blocking project-level SSH keys, see the Compute Engine documentation:
https://cloud.google.com/compute/docs/connect/restrict-ssh-keys#block-keys
bool block_project_ssh_keys = 5 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
The blockProjectSshKeys.
getDefaultInstanceForType()
public AllocationPolicy . InstancePolicyOrTemplate getDefaultInstanceForType ()
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getInstallGpuDrivers()
public boolean getInstallGpuDrivers ()
Set this field true if you want Batch to help fetch drivers from a third
party location and install them for GPUs specified in
policy.accelerators or instance_template on your behalf. Default is
false.
For Container-Optimized Image cases, Batch will install the
accelerator driver following milestones of
https://cloud.google.com/container-optimized-os/docs/release-notes . For
non Container-Optimized Image cases, following
https://github.com/GoogleCloudPlatform/compute-gpu-installation/blob/main/linux/install_gpu_driver.py .
bool install_gpu_drivers = 3;
Returns
Type
Description
boolean
The installGpuDrivers.
getInstallOpsAgent()
public boolean getInstallOpsAgent ()
Optional. Set this field true if you want Batch to install Ops Agent on
your behalf. Default is false.
bool install_ops_agent = 4 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
boolean
The installOpsAgent.
getInstanceTemplate()
public String getInstanceTemplate ()
Name of an instance template used to create VMs.
Named the field as 'instance_template' instead of 'template' to avoid
C++ keyword conflict.
Batch only supports global instance templates from the same project as
the job.
You can specify the global instance template as a full or partial URL.
string instance_template = 2;
Returns
Type
Description
String
The instanceTemplate.
getInstanceTemplateBytes()
public ByteString getInstanceTemplateBytes ()
Name of an instance template used to create VMs.
Named the field as 'instance_template' instead of 'template' to avoid
C++ keyword conflict.
Batch only supports global instance templates from the same project as
the job.
You can specify the global instance template as a full or partial URL.
string instance_template = 2;
Returns
Type
Description
ByteString
The bytes for instanceTemplate.
getPolicy()
public AllocationPolicy . InstancePolicy getPolicy ()
InstancePolicy.
.google.cloud.batch.v1.AllocationPolicy.InstancePolicy policy = 1;
Returns
Type
Description
AllocationPolicy.InstancePolicy
The policy.
getPolicyBuilder()
public AllocationPolicy . InstancePolicy . Builder getPolicyBuilder ()
InstancePolicy.
.google.cloud.batch.v1.AllocationPolicy.InstancePolicy policy = 1;
Returns
Type
Description
AllocationPolicy.InstancePolicy.Builder
getPolicyOrBuilder()
public AllocationPolicy . InstancePolicyOrBuilder getPolicyOrBuilder ()
InstancePolicy.
.google.cloud.batch.v1.AllocationPolicy.InstancePolicy policy = 1;
Returns
Type
Description
AllocationPolicy.InstancePolicyOrBuilder
getPolicyTemplateCase()
public AllocationPolicy . InstancePolicyOrTemplate . PolicyTemplateCase getPolicyTemplateCase ()
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.PolicyTemplateCase
hasInstanceTemplate()
public boolean hasInstanceTemplate ()
Name of an instance template used to create VMs.
Named the field as 'instance_template' instead of 'template' to avoid
C++ keyword conflict.
Batch only supports global instance templates from the same project as
the job.
You can specify the global instance template as a full or partial URL.
string instance_template = 2;
Returns
Type
Description
boolean
Whether the instanceTemplate field is set.
hasPolicy()
public boolean hasPolicy ()
InstancePolicy.
.google.cloud.batch.v1.AllocationPolicy.InstancePolicy policy = 1;
Returns
Type
Description
boolean
Whether the policy field is set.
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
mergeFrom(AllocationPolicy.InstancePolicyOrTemplate other)
public AllocationPolicy . InstancePolicyOrTemplate . Builder mergeFrom ( AllocationPolicy . InstancePolicyOrTemplate other )
Parameter
Name
Description
other
AllocationPolicy.InstancePolicyOrTemplate
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AllocationPolicy . InstancePolicyOrTemplate . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AllocationPolicy.InstancePolicyOrTemplate.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AllocationPolicy . InstancePolicyOrTemplate . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergePolicy(AllocationPolicy.InstancePolicy value)
public AllocationPolicy . InstancePolicyOrTemplate . Builder mergePolicy ( AllocationPolicy . InstancePolicy value )
InstancePolicy.
.google.cloud.batch.v1.AllocationPolicy.InstancePolicy policy = 1;
Parameter
Name
Description
value
AllocationPolicy.InstancePolicy
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
setBlockProjectSshKeys(boolean value)
public AllocationPolicy . InstancePolicyOrTemplate . Builder setBlockProjectSshKeys ( boolean value )
Optional. Set this field to true if you want Batch to block
project-level SSH keys from accessing this job's VMs. Alternatively, you
can configure the job to specify a VM instance template that blocks
project-level SSH keys. In either case, Batch blocks project-level SSH
keys while creating the VMs for this job.
Batch allows project-level SSH keys for a job's VMs only if all
the following are true:
This field is undefined or set to false .
The job's VM instance template (if any) doesn't block project-level
SSH keys.
Notably, you can override this behavior by manually updating a VM to
block or allow project-level SSH keys. For more information about
blocking project-level SSH keys, see the Compute Engine documentation:
https://cloud.google.com/compute/docs/connect/restrict-ssh-keys#block-keys
bool block_project_ssh_keys = 5 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
boolean The blockProjectSshKeys to set.
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
This builder for chaining.
setInstallGpuDrivers(boolean value)
public AllocationPolicy . InstancePolicyOrTemplate . Builder setInstallGpuDrivers ( boolean value )
Set this field true if you want Batch to help fetch drivers from a third
party location and install them for GPUs specified in
policy.accelerators or instance_template on your behalf. Default is
false.
For Container-Optimized Image cases, Batch will install the
accelerator driver following milestones of
https://cloud.google.com/container-optimized-os/docs/release-notes . For
non Container-Optimized Image cases, following
https://github.com/GoogleCloudPlatform/compute-gpu-installation/blob/main/linux/install_gpu_driver.py .
bool install_gpu_drivers = 3;
Parameter
Name
Description
value
boolean The installGpuDrivers to set.
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
This builder for chaining.
setInstallOpsAgent(boolean value)
public AllocationPolicy . InstancePolicyOrTemplate . Builder setInstallOpsAgent ( boolean value )
Optional. Set this field true if you want Batch to install Ops Agent on
your behalf. Default is false.
bool install_ops_agent = 4 [(.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
value
boolean The installOpsAgent to set.
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
This builder for chaining.
setInstanceTemplate(String value)
public AllocationPolicy . InstancePolicyOrTemplate . Builder setInstanceTemplate ( String value )
Name of an instance template used to create VMs.
Named the field as 'instance_template' instead of 'template' to avoid
C++ keyword conflict.
Batch only supports global instance templates from the same project as
the job.
You can specify the global instance template as a full or partial URL.
string instance_template = 2;
Parameter
Name
Description
value
String The instanceTemplate to set.
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
This builder for chaining.
setInstanceTemplateBytes(ByteString value)
public AllocationPolicy . InstancePolicyOrTemplate . Builder setInstanceTemplateBytes ( ByteString value )
Name of an instance template used to create VMs.
Named the field as 'instance_template' instead of 'template' to avoid
C++ keyword conflict.
Batch only supports global instance templates from the same project as
the job.
You can specify the global instance template as a full or partial URL.
string instance_template = 2;
Parameter
Name
Description
value
ByteString The bytes for instanceTemplate to set.
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
This builder for chaining.
setPolicy(AllocationPolicy.InstancePolicy value)
public AllocationPolicy . InstancePolicyOrTemplate . Builder setPolicy ( AllocationPolicy . InstancePolicy value )
InstancePolicy.
.google.cloud.batch.v1.AllocationPolicy.InstancePolicy policy = 1;
Parameter
Name
Description
value
AllocationPolicy.InstancePolicy
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
setPolicy(AllocationPolicy.InstancePolicy.Builder builderForValue)
public AllocationPolicy . InstancePolicyOrTemplate . Builder setPolicy ( AllocationPolicy . InstancePolicy . Builder builderForValue )
InstancePolicy.
.google.cloud.batch.v1.AllocationPolicy.InstancePolicy policy = 1;
Parameter
Name
Description
builderForValue
AllocationPolicy.InstancePolicy.Builder
Returns
Type
Description
AllocationPolicy.InstancePolicyOrTemplate.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
