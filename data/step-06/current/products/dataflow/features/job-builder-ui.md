---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.762Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Job builder UI"
feature_slug: "job-builder-ui"
latest_feature_date: "2024-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder"
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.CreateJobFromTemplateRequest.Builder"
keywords:
  - "job"
  - "builder"
  - "ui"
  - "dataflow"
  - "lets"
  - "users"
  - "create"
  - "run"
---

# Job builder UI

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

The Dataflow job builder UI lets users create and run Dataflow pipelines in the Google Cloud console without writing code.

## Extended Definition

The Dataflow job builder UI lets users create and run Dataflow pipelines in the Google Cloud console without writing code.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder](https://docs.cloud.google.com/dataflow/docs/guides/job-builder)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.CreateJobFromTemplateRequest.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.CreateJobFromTemplateRequest.Builder)

## Supporting Pages

### Job builder UI overview \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-builder](https://docs.cloud.google.com/dataflow/docs/guides/job-builder)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The job builder creates a Dataflow job and then navigates to the job graph .
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Job builder UI overview Stay organized with collections Save and categorize content based on your preferences.
- The job builder is a visual UI for building and running Dataflow pipelines in the Google Cloud console, without writing code.
- Create a custom job in the job builder.

### "Create a custom job with the job builder \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job)
- Source ID: `site-docs-reference-required-3`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The job builder lets you create custom batch and streaming Dataflow jobs.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Create a custom job with the job builder Stay organized with collections Save and categorize content based on your preferences.
- Run the following command in your shell or terminal: gcloud dataflow yaml run my-job-builder-job --yaml-pipeline-file = YAML FILE PATH Replace YAML FILE PATH with the path of your YAML file, either locally or in Cloud Storage.
- Create a new pipeline To create a new pipeline in the job builder, follow these steps: Go to the Jobs page in the Google Cloud console.

### "Class CreateJobFromTemplateRequest.Builder (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.CreateJobFromTemplateRequest.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.CreateJobFromTemplateRequest.Builder)
- Source ID: `site-java-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Protobuf type google.dataflow.v1beta3.CreateJobFromTemplateRequest Inheritance java.lang.Object > AbstractMessageLite.Builder<MessageType,BuilderType> > AbstractMessage.Builder<BuilderType> > GeneratedMessage.Builder > CreateJobFromTemplateRequest.Builder Implements CreateJobFromTemplateRequestOrBuilder Inherited Members AbstractMessage.Builder.findInitializationErrors() AbstractMessage.Builder.getInitializationErrorString() AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite) AbstractMessage.Builder.mergeFrom(byte[]) AbstractMessage.Builder.mergeFrom(byte[],ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(byte[],int,int) AbstractMessage.Builder.mergeFrom(byte[],int,int,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(ByteString) AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(CodedInputStream) AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(Message) AbstractMessage.Builder.mergeFrom(InputStream) AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite) AbstractMessage.Builder.newUninitializedMessageException(Message) AbstractMessage.Builder.toString() AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>) AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.Builder.internalMergeFrom(MessageType) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite) AbstractMessageLite.Builder.mergeFrom(MessageLite) AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite) GeneratedMessage.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.clear() GeneratedMessage.Builder.clearField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.clearOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.clone() GeneratedMessage.Builder.getAllFields() GeneratedMessage.Builder.getDescriptorForType() GeneratedMessage.Builder.getField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getFieldBuilder(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.Builder.getParentForChildren() GeneratedMessage.Builder.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor) com.google.protobuf.GeneratedMessage.Builder.getUnknownFieldSetBuilder() GeneratedMessage.Builder.getUnknownFields() GeneratedMessage.Builder.hasField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.internalGetFieldAccessorTable() GeneratedMessage.Builder.internalGetMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int) GeneratedMessage.Builder.internalGetMutableMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int) GeneratedMessage.Builder.isClean() GeneratedMessage.Builder.isInitialized() GeneratedMessage.Builder.markClean() GeneratedMessage.Builder.mergeUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownVarintField(int,int) GeneratedMessage.Builder.newBuilderForField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.onBuilt() GeneratedMessage.Builder.onChanged() com.google.protobuf.GeneratedMessage.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.Builder.setField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder) GeneratedMessage.Builder.setUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldsProto3(com.google.protobuf.UnknownFieldSet) Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods getDescriptor() public static final Descriptors .
- Builder setEnvironment ( RuntimeEnvironment value ) The runtime environment for the job. .google.dataflow.v1beta3.RuntimeEnvironment environment = 5; Parameter Name Description value RuntimeEnvironment Returns Type Description CreateJobFromTemplateRequest.Builder setEnvironment(RuntimeEnvironment.Builder builderForValue) public CreateJobFromTemplateRequest .
- Builder mergeEnvironment ( RuntimeEnvironment value ) The runtime environment for the job. .google.dataflow.v1beta3.RuntimeEnvironment environment = 5; Parameter Name Description value RuntimeEnvironment Returns Type Description CreateJobFromTemplateRequest.Builder mergeFrom(CreateJobFromTemplateRequest other) public CreateJobFromTemplateRequest .
- Builder builderForValue ) The runtime environment for the job. .google.dataflow.v1beta3.RuntimeEnvironment environment = 5; Parameter Name Description builderForValue RuntimeEnvironment.Builder Returns Type Description CreateJobFromTemplateRequest.Builder setGcsPath(String value) public CreateJobFromTemplateRequest .

