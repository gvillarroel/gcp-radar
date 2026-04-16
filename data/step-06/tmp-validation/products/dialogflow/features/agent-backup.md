---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.755Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Agent backup"
feature_slug: "agent-backup"
latest_feature_date: "2021-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-backup"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentCoachingSuggestion.AgentActionSuggestion"
keywords:
  - "backup"
  - "supports"
  - "agent"
---

# Agent backup

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports agent backup.

## Extended Definition

Dialogflow CX supports agent backup.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-backup](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-backup)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices](https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentCoachingSuggestion.AgentActionSuggestion](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentCoachingSuggestion.AgentActionSuggestion)

## Supporting Pages

### Agent backup \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-backup](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-backup)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Agent backup Stay organized with collections Save and categorize content based on your preferences.
- Dialogflow CX periodically creates backups for all agents if any changes are made after previous backups.
- Agent backups are complete snapshots of the current states of agents.
- When restoring a backup, the whole agent will be overwritten.

### "Class AgentCoachingSuggestion.AgentActionSuggestion (4.94.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentCoachingSuggestion.AgentActionSuggestion](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentCoachingSuggestion.AgentActionSuggestion)
- Source ID: `site-java-reference`
- Final score: 75
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Protobuf type google.cloud.dialogflow.v2.AgentCoachingSuggestion.AgentActionSuggestion Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > AgentCoachingSuggestion.AgentActionSuggestion Implements AgentCoachingSuggestion.AgentActionSuggestionOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields AGENT ACTION FIELD NUMBER public static final int AGENT ACTION FIELD NUMBER Field Value Type Description int DUPLICATE CHECK RESULT FIELD NUMBER public static final int DUPLICATE CHECK RESULT FIELD NUMBER Field Value Type Description int SOURCES FIELD NUMBER public static final int SOURCES FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static AgentCoachingSuggestion .
- 4.94.0 (latest) 4.93.0 4.91.0 4.89.0 4.88.0 4.87.0 4.86.0 4.84.0 4.82.0 4.81.0 4.80.0 4.79.0 4.78.0 4.76.0 4.74.0 4.73.0 4.70.0 4.69.0 4.68.0 4.66.0 4.65.0 4.64.0 4.63.0 4.62.0 4.61.0 4.60.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.45.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.33.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.21.0 4.20.0 4.19.0 4.18.0 4.17.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.1 4.8.6 4.7.5 4.6.0 4.5.11 4.4.0 4.3.1 public static final class AgentCoachingSuggestion .
- Builder toBuilder () Returns Type Description AgentCoachingSuggestion.AgentActionSuggestion.Builder writeTo(CodedOutputStream output) public void writeTo ( CodedOutputStream output ) Parameter Name Description output CodedOutputStream Overrides GeneratedMessage.writeTo(CodedOutputStream output) Exceptions Type Description IOException Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Sources for the agent action suggestion. .google.cloud.dialogflow.v2.AgentCoachingSuggestion.Sources sources = 2 [(.google.api.field behavior) = OUTPUT ONLY]; Returns Type Description boolean Whether the sources field is set. hashCode() public int hashCode () Returns Type Description int Overrides AbstractMessage.hashCode() internalGetFieldAccessorTable() protected GeneratedMessage .

### Service use best practices \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices](https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Create agent backup Keep an up-to-date exported agent backup.
- Previous arrow back Call companion Next General agent design best practices arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Productionization Before running your agent in production, be sure to implement the following best practices: Use agent versions Reuse session clients Implement error handling with retries Agent versions You should always use agent versions for your production traffic.
- Understanding latency is important for designing responsive agents and setting realistic performance expectations, although these values are not part of the Dialogflow SLA.

