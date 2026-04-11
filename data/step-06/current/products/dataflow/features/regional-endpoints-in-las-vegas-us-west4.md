---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.839Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Regional endpoints in Las Vegas (us-west4)"
feature_slug: "regional-endpoints-in-las-vegas-us-west4"
latest_feature_date: "2021-02-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java"
keywords:
  - "regional"
  - "endpoints"
  - "in"
  - "las"
  - "vegas"
  - "us"
  - "west4"
  - "this"
---

# Regional endpoints in Las Vegas (us-west4)

Product: Dataflow
Coverage: LOW

## Step 02 Summary

This feature provides Dataflow regional endpoints in Las Vegas us-west4.

## Extended Definition

This feature provides Dataflow regional endpoints in Las Vegas us-west4.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java)

## Supporting Pages

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- If you skip this step, the replicated objects will use the destination bucket's storage class by default.
- The following is a sample message from this topic, in the JSON format: { "ride id" : "19c41fc4-e362-4be5-9d06-435a7dc9ba8e" , "point idx" : 217 , "latitude" : 40 .75399, "longitude" : -73.96302, "timestamp" : "2021-03-08T02:29:09.66644-05:00" , "meter reading" : 6 .293821, "meter increment" : 0 .029003782, "ride status" : "enroute" , "passenger count" : 1 } For Temp location , enter the following: gs:// BUCKET NAME /temp/ Replace BUCKET NAME with the name of your Cloud Storage bucket.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: BigQuery User ( roles/bigquery.user ) Dataflow Admin ( roles/dataflow.admin ) Service Account User ( roles/iam.serviceAccountUser ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- February 03, 2021 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: asia-east2 Hong Kong asia-northeast2 - Japan (Osaka) asia-northeast3 - Seoul asia-southeast2 - Jakarta europe-north1 - Finland us-west3 - Salt Lake City us-west4 - Las Vegas January 29, 2021 Announcement Flex templates now support updating streaming jobs and Flexible Resource Scheduling (FlexRS).
- April 20, 2020 Feature Dataflow is now able to use workers in zones in the us-west4 region (Las Vegas).
- November 05, 2020 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: us-west2 (Los Angeles) southamerica-east1 (São Paulo) europe-west6 (Zurich) asia-south1 (Mumbai) Change Pub/Sub I/O metrics in the Dataflow and Cloud Monitoring UIs may be unavailable for Dataflow jobs using Streaming Engine .
- July 27, 2020 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: northamerica-northeast1 (Montréal) asia-southeast1 (Singapore) australia-southeast1 (Sydney) June 08, 2020 Feature Dataflow is now able to use workers in zones in the asia-southeast2 region (Jakarta).

### "Class AutoscalingSettings.Builder (0.92.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder clearMaxNumWorkers () The maximum number of workers to cap scaling at. int32 max num workers = 2; Returns Type Description AutoscalingSettings.Builder This builder for chaining. getAlgorithm() public AutoscalingAlgorithm getAlgorithm () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description AutoscalingAlgorithm The algorithm. getAlgorithmValue() public int getAlgorithmValue () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description int The enum numeric value on the wire for algorithm. getDefaultInstanceForType() public AutoscalingSettings getDefaultInstanceForType () Returns Type Description AutoscalingSettings getDescriptorForType() public Descriptors .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
- Builder clearAlgorithm () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description AutoscalingSettings.Builder This builder for chaining. clearMaxNumWorkers() public AutoscalingSettings .
- Protobuf type google.dataflow.v1beta3.AutoscalingSettings Inheritance java.lang.Object > AbstractMessageLite.Builder<MessageType,BuilderType> > AbstractMessage.Builder<BuilderType> > GeneratedMessage.Builder > AutoscalingSettings.Builder Implements AutoscalingSettingsOrBuilder Inherited Members AbstractMessage.Builder.findInitializationErrors() AbstractMessage.Builder.getInitializationErrorString() AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite) AbstractMessage.Builder.mergeFrom(byte[]) AbstractMessage.Builder.mergeFrom(byte[],ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(byte[],int,int) AbstractMessage.Builder.mergeFrom(byte[],int,int,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(ByteString) AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(CodedInputStream) AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(Message) AbstractMessage.Builder.mergeFrom(InputStream) AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite) AbstractMessage.Builder.newUninitializedMessageException(Message) AbstractMessage.Builder.toString() AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>) AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.Builder.internalMergeFrom(MessageType) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite) AbstractMessageLite.Builder.mergeFrom(MessageLite) AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite) GeneratedMessage.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.clear() GeneratedMessage.Builder.clearField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.clearOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.clone() GeneratedMessage.Builder.getAllFields() GeneratedMessage.Builder.getDescriptorForType() GeneratedMessage.Builder.getField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getFieldBuilder(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.Builder.getParentForChildren() GeneratedMessage.Builder.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor) com.google.protobuf.GeneratedMessage.Builder.getUnknownFieldSetBuilder() GeneratedMessage.Builder.getUnknownFields() GeneratedMessage.Builder.hasField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.internalGetFieldAccessorTable() GeneratedMessage.Builder.internalGetMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int) GeneratedMessage.Builder.internalGetMutableMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int) GeneratedMessage.Builder.isClean() GeneratedMessage.Builder.isInitialized() GeneratedMessage.Builder.markClean() GeneratedMessage.Builder.mergeUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownVarintField(int,int) GeneratedMessage.Builder.newBuilderForField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.onBuilt() GeneratedMessage.Builder.onChanged() com.google.protobuf.GeneratedMessage.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.Builder.setField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder) GeneratedMessage.Builder.setUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldsProto3(com.google.protobuf.UnknownFieldSet) Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods getDescriptor() public static final Descriptors .

### Create a Dataflow pipeline using Java \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Run the pipeline on the Dataflow service In your shell or terminal, build and run the WordCount pipeline on the Dataflow service from your word-count-beam directory: mvn -Pdataflow-runner compile exec:java \ -Dexec.mainClass=org.apache.beam.examples.WordCount \ -Dexec.args="--project= PROJECT ID \ --gcpTempLocation=gs:// BUCKET NAME /temp/ \ --output=gs:// BUCKET NAME /output \ --runner=DataflowRunner \ --region= REGION " Replace the following: PROJECT ID : your Google Cloud project ID BUCKET NAME : the name of your Cloud Storage bucket REGION : a Dataflow region , like us-central1 Note: To specify a user-managed worker service account , include the --serviceAccount pipeline option .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Don't include sensitive information in the bucket name because the bucket namespace is global and publicly visible. gcloud storage buckets create gs:// BUCKET NAME --default-storage-class STANDARD --location US Copy the following, as you need them in a later section: Your Cloud Storage bucket name.
- Create a Dataflow pipeline using Java This document shows you how to set up your Google Cloud project, create an example pipeline built with the Apache Beam SDK for Java, and run the example pipeline on the Dataflow service.

