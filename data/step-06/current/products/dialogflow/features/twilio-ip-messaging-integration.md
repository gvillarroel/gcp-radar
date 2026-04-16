---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.492Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Twilio IP Messaging integration"
feature_slug: "twilio-ip-messaging-integration"
latest_feature_date: "2020-01-06"
deprecation_date: "2020-01-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/prebuilt"
keywords:
  - "twilio"
  - "ip"
  - "messaging"
  - "integration"
  - "built"
  - "deprecated"
  - "scheduled"
  - "shutdown"
---

# Twilio IP Messaging integration

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

The built-in Twilio IP Messaging integration is deprecated and scheduled for shutdown; deprecated on 2020-01-06.

## Extended Definition

The built-in Twilio IP Messaging integration is deprecated and scheduled for shutdown; deprecated on 2020-01-06.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder)
- [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/prebuilt](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/prebuilt)

## Supporting Pages

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- These integrations can provide a text agent that you can embed on your website, connect with other messaging platforms, or provide a telephony interface.
- Dialogflow CX API If none of the ready-to-use integrations are suitable, or you would like to customize the interface for your system, you can use the Dialogflow CX API directly .
- If you are still having difficulty with flow and page limits, it may be because you have too much business logic built into the agent itself.
- If you use an integration, you do not need to directly call the Dialogflow CX API, as integrations handle this for you.

### "Class Agent.Builder (4.94.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder)
- Source ID: `site-java-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf type google.cloud.dialogflow.v2.Agent Inheritance java.lang.Object > AbstractMessageLite.Builder<MessageType,BuilderType> > AbstractMessage.Builder<BuilderType> > GeneratedMessage.Builder > Agent.Builder Implements AgentOrBuilder Inherited Members AbstractMessage.Builder.findInitializationErrors() AbstractMessage.Builder.getInitializationErrorString() AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite) AbstractMessage.Builder.mergeFrom(byte[]) AbstractMessage.Builder.mergeFrom(byte[],ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(byte[],int,int) AbstractMessage.Builder.mergeFrom(byte[],int,int,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(ByteString) AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(CodedInputStream) AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(Message) AbstractMessage.Builder.mergeFrom(InputStream) AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite) AbstractMessage.Builder.newUninitializedMessageException(Message) AbstractMessage.Builder.toString() AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>) AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.Builder.internalMergeFrom(MessageType) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite) AbstractMessageLite.Builder.mergeFrom(MessageLite) AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite) GeneratedMessage.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.clear() GeneratedMessage.Builder.clearField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.clearOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.clone() GeneratedMessage.Builder.getAllFields() GeneratedMessage.Builder.getDescriptorForType() GeneratedMessage.Builder.getField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getFieldBuilder(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.Builder.getParentForChildren() GeneratedMessage.Builder.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor) com.google.protobuf.GeneratedMessage.Builder.getUnknownFieldSetBuilder() GeneratedMessage.Builder.getUnknownFields() GeneratedMessage.Builder.hasField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.internalGetFieldAccessorTable() GeneratedMessage.Builder.internalGetMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int) GeneratedMessage.Builder.internalGetMutableMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int) GeneratedMessage.Builder.isClean() GeneratedMessage.Builder.isInitialized() GeneratedMessage.Builder.markClean() GeneratedMessage.Builder.mergeUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownVarintField(int,int) GeneratedMessage.Builder.newBuilderForField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.onBuilt() GeneratedMessage.Builder.onChanged() com.google.protobuf.GeneratedMessage.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.Builder.setField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder) GeneratedMessage.Builder.setUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldsProto3(com.google.protobuf.UnknownFieldSet) Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods getDescriptor() public static final Descriptors .
- Determines how intents are detected from user queries. .google.cloud.dialogflow.v2.Agent.MatchMode match mode = 9 [deprecated = true, (.google.api.field behavior) = OPTIONAL]; Returns Type Description Agent.MatchMode The matchMode. getMatchModeValue() (deprecated) public int getMatchModeValue () Deprecated. google.cloud.dialogflow.v2.Agent.match mode is deprecated.
- Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration. string avatar uri = 7 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description ByteString The bytes for avatarUri. getClassificationThreshold() public float getClassificationThreshold () Optional.
- Determines how intents are detected from user queries. .google.cloud.dialogflow.v2.Agent.MatchMode match mode = 9 [deprecated = true, (.google.api.field behavior) = OPTIONAL]; Returns Type Description int The enum numeric value on the wire for matchMode. getParent() public String getParent () Required.

### Create a prebuilt agent \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/prebuilt](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/prebuilt)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Create a prebuilt agent Stay organized with collections Save and categorize content based on your preferences.
- Select the project where you would like to import the prebuilt agent or click Create Project to create a new project.
- Rather than building an agent from scratch, you will import a telecommunications prebuilt agent .
- To import a prebuilt agent to your project: Go to the Dialogflow CX console .

