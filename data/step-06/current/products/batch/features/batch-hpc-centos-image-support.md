---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:52:59.652Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch HPC CentOS image support"
feature_slug: "batch-hpc-centos-image-support"
latest_feature_date: "2024-08-13"
deprecation_date: "2024-06-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/batch/docs/create-run-basic-job"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk.Builder"
keywords:
  - "development"
  - "reached"
  - "centos"
  - "family"
  - "image"
---

# Batch HPC CentOS image support

Product: Batch
Coverage: MEDIUM

## Step 02 Summary

The Batch HPC CentOS (batch-hpc-centos) image family reached end of development and is deprecated; deprecated on 2024-06-30.

## Extended Definition

The Batch HPC CentOS (batch-hpc-centos) image family reached end of development and is deprecated; deprecated on 2024-06-30.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk](https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk.Builder)

## Supporting Pages

### Create and run a basic job \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . #include "google/cloud/batch/v1/batch client.h" []( std :: string const & project id , std :: string const & location id , std :: string const & job id ) { // Initialize the request; start with the fields that depend on the sample // input. google :: cloud :: batch :: v1 :: CreateJobRequest request ; request . set parent ( "projects/" + project id + "/locations/" + location id ); request . set job id ( job id ); // Most of the job description is fixed in this example; use a string to // initialize it. auto constexpr kText = R " pb( task groups { task count: 4 task spec { compute resource { cpu milli: 500 memory mib: 16 } max retry count: 2 max run duration { seconds: 3600 } runnables { container { image uri: "gcr.io/google-containers/busybox" entrypoint: "/bin/sh" commands: "-c" commands: "echo Hello world!
- For more information, see Set up authentication for a local development environment . #include "google/cloud/batch/v1/batch client.h" []( std :: string const & project id , std :: string const & location id , std :: string const & job id ) { // Initialize the request; start with the fields that depend on the sample // input. google :: cloud :: batch :: v1 :: CreateJobRequest request ; request . set parent ( "projects/" + project id + "/locations/" + location id ); request . set job id ( job id ); // Most of the job description is fixed in this example; use a string to // initialize it. auto constexpr kText = R " pb( task groups { task count: 4 task spec { compute resource { cpu milli: 500 memory mib: 16 } max retry count: 2 max run duration { seconds: 3600 } runnables { script { text: "echo Hello world!
- For example, to create a job that runs tasks using the busybox Docker container image , use the following request: POST h tt ps : //batch.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/jobs?job id=example-container-job { "taskGroups" : [ { "taskSpec" : { "runnables" : [ { "container" : { "imageUri" : "gcr.io/google-containers/busybox" , "entrypoint" : "/bin/sh" , "commands" : [ "-c" , "echo Hello world!
- For example, to create a job that runs tasks using the busybox Docker container image : Create a JSON file in the current directory named hello-world-container.json with the following contents: { "taskGroups" : [ { "taskSpec" : { "runnables" : [ { "container" : { "imageUri" : "gcr.io/google-containers/busybox" , "entrypoint" : "/bin/sh" , "commands" : [ "-c" , "echo Hello world!

### "Class AllocationPolicy.Disk (0.88.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk](https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk)
- Source ID: `site-java-reference`
- Final score: 60
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following are all valid URLs: Specify the image by its family name: projects/{project}/global/images/family/{image family} Specify the image version: projects/{project}/global/images/{image version} You can also use Batch customized image in short names.
- For example, the following are all valid URLs: Specify the image by its family name: projects/{project}/global/images/family/{image family} Specify the image version: projects/{project}/global/images/{image version} You can also use Batch customized image in short names.
- For example, the following are all valid URLs: Specify the image by its family name: projects/{project}/global/images/family/{image family} Specify the image version: projects/{project}/global/images/{image version} You can also use Batch customized image in short names.
- Protobuf type google.cloud.batch.v1.AllocationPolicy.Disk Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > AllocationPolicy.Disk Implements AllocationPolicy.DiskOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields DISK INTERFACE FIELD NUMBER public static final int DISK INTERFACE FIELD NUMBER Field Value Type Description int IMAGE FIELD NUMBER public static final int IMAGE FIELD NUMBER Field Value Type Description int SIZE GB FIELD NUMBER public static final int SIZE GB FIELD NUMBER Field Value Type Description int SNAPSHOT FIELD NUMBER public static final int SNAPSHOT FIELD NUMBER Field Value Type Description int TYPE FIELD NUMBER public static final int TYPE FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static AllocationPolicy .

### "Class AllocationPolicy.Disk.Builder (0.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk.Builder)
- Source ID: `site-java-reference`
- Final score: 60
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following are all valid URLs: Specify the image by its family name: projects/{project}/global/images/family/{image family} Specify the image version: projects/{project}/global/images/{image version} You can also use Batch customized image in short names.
- For example, the following are all valid URLs: Specify the image by its family name: projects/{project}/global/images/family/{image family} Specify the image version: projects/{project}/global/images/{image version} You can also use Batch customized image in short names.
- For example, the following are all valid URLs: Specify the image by its family name: projects/{project}/global/images/family/{image family} Specify the image version: projects/{project}/global/images/{image version} You can also use Batch customized image in short names.
- For example, the following are all valid URLs: Specify the image by its family name: projects/{project}/global/images/family/{image family} Specify the image version: projects/{project}/global/images/{image version} You can also use Batch customized image in short names.

