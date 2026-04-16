---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.451Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Agent backup"
feature_slug: "agent-backup"
latest_feature_date: "2021-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-backup"
  - "https://docs.cloud.google.com/dialogflow/es/docs/best-practices"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentCoachingSuggestion.AgentActionSuggestion"
keywords:
  - "agent"
  - "backup"
  - "dialogflow"
  - "cx"
  - "supports"
---

# Agent backup

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports agent backup.

## Extended Definition

Dialogflow CX supports agent backup.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-backup](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-backup)
- [https://docs.cloud.google.com/dialogflow/es/docs/best-practices](https://docs.cloud.google.com/dialogflow/es/docs/best-practices)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentCoachingSuggestion.AgentActionSuggestion](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentCoachingSuggestion.AgentActionSuggestion)

## Supporting Pages

### Agent backup \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-backup](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-backup)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Agent backup Stay organized with collections Save and categorize content based on your preferences.
- Dialogflow CX periodically creates backups for all agents if any changes are made after previous backups.
- Delete backups To delete a single backup: Open the Dialogflow CX console .
- Agent backups are complete snapshots of the current states of agents.

### "Class AgentCoachingSuggestion.AgentActionSuggestion (4.94.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentCoachingSuggestion.AgentActionSuggestion](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentCoachingSuggestion.AgentActionSuggestion)
- Source ID: `site-java-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf type google.cloud.dialogflow.v2.AgentCoachingSuggestion.AgentActionSuggestion Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > AgentCoachingSuggestion.AgentActionSuggestion Implements AgentCoachingSuggestion.AgentActionSuggestionOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields AGENT ACTION FIELD NUMBER public static final int AGENT ACTION FIELD NUMBER Field Value Type Description int DUPLICATE CHECK RESULT FIELD NUMBER public static final int DUPLICATE CHECK RESULT FIELD NUMBER Field Value Type Description int SOURCES FIELD NUMBER public static final int SOURCES FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static AgentCoachingSuggestion .
- Sources for the agent action suggestion. .google.cloud.dialogflow.v2.AgentCoachingSuggestion.Sources sources = 2 [(.google.api.field behavior) = OUTPUT ONLY]; Returns Type Description boolean Whether the sources field is set. hashCode() public int hashCode () Returns Type Description int Overrides AbstractMessage.hashCode() internalGetFieldAccessorTable() protected GeneratedMessage .
- Duplicate check result for the agent action suggestion. .google.cloud.dialogflow.v2.AgentCoachingSuggestion.DuplicateCheckResult duplicate check result = 3 [(.google.api.field behavior) = OUTPUT ONLY]; Returns Type Description AgentCoachingSuggestion.DuplicateCheckResult The duplicateCheckResult. getDuplicateCheckResultOrBuilder() public AgentCoachingSuggestion .
- Duplicate check result for the agent action suggestion. .google.cloud.dialogflow.v2.AgentCoachingSuggestion.DuplicateCheckResult duplicate check result = 3 [(.google.api.field behavior) = OUTPUT ONLY]; Returns Type Description AgentCoachingSuggestion.DuplicateCheckResultOrBuilder getParserForType() public Parser<AgentCoachingSuggestion .

### Service use best practices \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/best-practices](https://docs.cloud.google.com/dialogflow/es/docs/best-practices)
- Source ID: `site-iam-reference`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Productionization Before running your agent in production, be sure to implement the following best practices: Use agent versions Reuse session clients Implement error handling with retries Enable audit logs Enable Data Access audit logs for Dialogflow API in your project.
- Understanding latency is important for designing responsive agents and setting realistic performance expectations, although these values are not part of the Dialogflow SLA.
- This can help you track design-time changes in the Dialogflow agents linked to this project.
- Create agent backup Keep an up-to-date exported agent backup.

