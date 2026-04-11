---
title: "Class AgentAssistantRecord (4.94.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentAssistantRecord
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentAssistantRecord
  title: "Class AgentAssistantRecord (4.94.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AgentAssistantRecord (4.94.0)
Stay organized with collections
Save and categorize content based on your preferences.
4.94.0 (latest)
4.93.0
4.91.0
4.89.0
4.88.0
4.87.0
4.86.0
4.84.0
4.82.0
4.81.0
4.80.0
4.79.0
4.78.0
4.76.0
4.74.0
4.73.0
4.70.0
4.69.0
4.68.0
4.66.0
4.65.0
4.64.0
4.63.0
4.62.0
4.61.0
4.60.0
4.59.0
4.58.0
4.57.0
4.55.0
4.54.0
4.53.0
4.52.0
4.51.0
4.50.0
4.49.0
4.48.0
4.47.0
4.46.0
4.45.0
4.43.0
4.42.0
4.41.0
4.40.0
4.39.0
4.38.0
4.37.0
4.36.0
4.35.0
4.34.0
4.33.0
4.30.0
4.29.0
4.28.0
4.27.0
4.26.0
4.25.0
4.24.0
4.23.0
4.22.0
4.21.0
4.20.0
4.19.0
4.18.0
4.17.0
4.15.0
4.14.0
4.13.0
4.12.0
4.11.0
4.10.0
4.9.1
4.8.6
4.7.5
4.6.0
4.5.11
4.4.0
4.3.1
public final class AgentAssistantRecord extends GeneratedMessage implements AgentAssistantRecordOrBuilder
Represents a record of a human agent assist answer.
Protobuf type google.cloud.dialogflow.v2.AgentAssistantRecord
Inheritance
Object >
AbstractMessageLite<MessageType,BuilderType> >
AbstractMessage >
GeneratedMessage >
AgentAssistantRecord
Implements
AgentAssistantRecordOrBuilder
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
ARTICLE_SUGGESTION_ANSWER_FIELD_NUMBER
public static final int ARTICLE_SUGGESTION_ANSWER_FIELD_NUMBER
Field Value
Type
Description
int
DIALOGFLOW_ASSIST_ANSWER_FIELD_NUMBER
public static final int DIALOGFLOW_ASSIST_ANSWER_FIELD_NUMBER
Field Value
Type
Description
int
FAQ_ANSWER_FIELD_NUMBER
public static final int FAQ_ANSWER_FIELD_NUMBER
Field Value
Type
Description
int
GENERATOR_SUGGESTION_FIELD_NUMBER
public static final int GENERATOR_SUGGESTION_FIELD_NUMBER
Field Value
Type
Description
int
Static Methods
getDefaultInstance()
public static AgentAssistantRecord getDefaultInstance ()
Returns
Type
Description
AgentAssistantRecord
getDescriptor()
public static final Descriptors . Descriptor getDescriptor ()
Returns
Type
Description
Descriptor
newBuilder()
public static AgentAssistantRecord . Builder newBuilder ()
Returns
Type
Description
AgentAssistantRecord.Builder
newBuilder(AgentAssistantRecord prototype)
public static AgentAssistantRecord . Builder newBuilder ( AgentAssistantRecord prototype )
Parameter
Name
Description
prototype
AgentAssistantRecord
Returns
Type
Description
AgentAssistantRecord.Builder
parseDelimitedFrom(InputStream input)
public static AgentAssistantRecord parseDelimitedFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AgentAssistantRecord
Exceptions
Type
Description
IOException
parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AgentAssistantRecord parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AgentAssistantRecord
Exceptions
Type
Description
IOException
parseFrom(byte[] data)
public static AgentAssistantRecord parseFrom ( byte [] data )
Parameter
Name
Description
data
byte []
Returns
Type
Description
AgentAssistantRecord
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
public static AgentAssistantRecord parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry )
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
AgentAssistantRecord
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data)
public static AgentAssistantRecord parseFrom ( ByteString data )
Parameter
Name
Description
data
ByteString
Returns
Type
Description
AgentAssistantRecord
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
public static AgentAssistantRecord parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry )
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
AgentAssistantRecord
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(CodedInputStream input)
public static AgentAssistantRecord parseFrom ( CodedInputStream input )
Parameter
Name
Description
input
CodedInputStream
Returns
Type
Description
AgentAssistantRecord
Exceptions
Type
Description
IOException
parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public static AgentAssistantRecord parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AgentAssistantRecord
Exceptions
Type
Description
IOException
parseFrom(InputStream input)
public static AgentAssistantRecord parseFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
AgentAssistantRecord
Exceptions
Type
Description
IOException
parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
public static AgentAssistantRecord parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry )
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
AgentAssistantRecord
Exceptions
Type
Description
IOException
parseFrom(ByteBuffer data)
public static AgentAssistantRecord parseFrom ( ByteBuffer data )
Parameter
Name
Description
data
ByteBuffer
Returns
Type
Description
AgentAssistantRecord
Exceptions
Type
Description
InvalidProtocolBufferException
parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
public static AgentAssistantRecord parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry )
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
AgentAssistantRecord
Exceptions
Type
Description
InvalidProtocolBufferException
parser()
public static Parser<AgentAssistantRecord> parser ()
Returns
Type
Description
Parser < AgentAssistantRecord >
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
getAnswerCase()
public AgentAssistantRecord . AnswerCase getAnswerCase ()
Returns
Type
Description
AgentAssistantRecord.AnswerCase
getArticleSuggestionAnswer()
public ArticleAnswer getArticleSuggestionAnswer ()
Output only. The article suggestion answer.
.google.cloud.dialogflow.v2.ArticleAnswer article_suggestion_answer = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ArticleAnswer
The articleSuggestionAnswer.
getArticleSuggestionAnswerOrBuilder()
public ArticleAnswerOrBuilder getArticleSuggestionAnswerOrBuilder ()
Output only. The article suggestion answer.
.google.cloud.dialogflow.v2.ArticleAnswer article_suggestion_answer = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ArticleAnswerOrBuilder
getDefaultInstanceForType()
public AgentAssistantRecord getDefaultInstanceForType ()
Returns
Type
Description
AgentAssistantRecord
getDialogflowAssistAnswer()
public DialogflowAssistAnswer getDialogflowAssistAnswer ()
Output only. Dialogflow assist answer.
.google.cloud.dialogflow.v2.DialogflowAssistAnswer dialogflow_assist_answer = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
DialogflowAssistAnswer
The dialogflowAssistAnswer.
getDialogflowAssistAnswerOrBuilder()
public DialogflowAssistAnswerOrBuilder getDialogflowAssistAnswerOrBuilder ()
Output only. Dialogflow assist answer.
.google.cloud.dialogflow.v2.DialogflowAssistAnswer dialogflow_assist_answer = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
DialogflowAssistAnswerOrBuilder
getFaqAnswer()
public FaqAnswer getFaqAnswer ()
Output only. The FAQ answer.
.google.cloud.dialogflow.v2.FaqAnswer faq_answer = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
FaqAnswer
The faqAnswer.
getFaqAnswerOrBuilder()
public FaqAnswerOrBuilder getFaqAnswerOrBuilder ()
Output only. The FAQ answer.
.google.cloud.dialogflow.v2.FaqAnswer faq_answer = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
FaqAnswerOrBuilder
getGeneratorSuggestion()
public GeneratorSuggestion getGeneratorSuggestion ()
Output only. The generator suggestion.
.google.cloud.dialogflow.v2.GeneratorSuggestion generator_suggestion = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
GeneratorSuggestion
The generatorSuggestion.
getGeneratorSuggestionOrBuilder()
public GeneratorSuggestionOrBuilder getGeneratorSuggestionOrBuilder ()
Output only. The generator suggestion.
.google.cloud.dialogflow.v2.GeneratorSuggestion generator_suggestion = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
GeneratorSuggestionOrBuilder
getParserForType()
public Parser<AgentAssistantRecord> getParserForType ()
Returns
Type
Description
Parser < AgentAssistantRecord >
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
hasArticleSuggestionAnswer()
public boolean hasArticleSuggestionAnswer ()
Output only. The article suggestion answer.
.google.cloud.dialogflow.v2.ArticleAnswer article_suggestion_answer = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the articleSuggestionAnswer field is set.
hasDialogflowAssistAnswer()
public boolean hasDialogflowAssistAnswer ()
Output only. Dialogflow assist answer.
.google.cloud.dialogflow.v2.DialogflowAssistAnswer dialogflow_assist_answer = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the dialogflowAssistAnswer field is set.
hasFaqAnswer()
public boolean hasFaqAnswer ()
Output only. The FAQ answer.
.google.cloud.dialogflow.v2.FaqAnswer faq_answer = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the faqAnswer field is set.
hasGeneratorSuggestion()
public boolean hasGeneratorSuggestion ()
Output only. The generator suggestion.
.google.cloud.dialogflow.v2.GeneratorSuggestion generator_suggestion = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the generatorSuggestion field is set.
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
public AgentAssistantRecord . Builder newBuilderForType ()
Returns
Type
Description
AgentAssistantRecord.Builder
newBuilderForType(AbstractMessage.BuilderParent parent)
protected AgentAssistantRecord . Builder newBuilderForType ( AbstractMessage . BuilderParent parent )
Parameter
Name
Description
parent
BuilderParent
Returns
Type
Description
AgentAssistantRecord.Builder
Overrides
AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)
toBuilder()
public AgentAssistantRecord . Builder toBuilder ()
Returns
Type
Description
AgentAssistantRecord.Builder
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
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
