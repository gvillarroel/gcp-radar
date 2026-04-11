---
title: "Class AgentAssistantRecord.Builder (4.94.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentAssistantRecord.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentAssistantRecord.Builder
  title: "Class AgentAssistantRecord.Builder (4.94.0) \_|\_ Java client libraries\
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
Class AgentAssistantRecord.Builder (4.94.0)
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
public static final class AgentAssistantRecord . Builder extends GeneratedMessage . Builder<AgentAssistantRecord . Builder > implements AgentAssistantRecordOrBuilder
Represents a record of a human agent assist answer.
Protobuf type google.cloud.dialogflow.v2.AgentAssistantRecord
Inheritance
java.lang.Object >
AbstractMessageLite.Builder<MessageType,BuilderType> >
AbstractMessage.Builder<BuilderType> >
GeneratedMessage.Builder >
AgentAssistantRecord.Builder
Implements
AgentAssistantRecordOrBuilder
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
public AgentAssistantRecord build ()
Returns
Type
Description
AgentAssistantRecord
buildPartial()
public AgentAssistantRecord buildPartial ()
Returns
Type
Description
AgentAssistantRecord
clear()
public AgentAssistantRecord . Builder clear ()
Returns
Type
Description
AgentAssistantRecord.Builder
Overrides
GeneratedMessage.Builder<BuilderType>.clear()
clearAnswer()
public AgentAssistantRecord . Builder clearAnswer ()
Returns
Type
Description
AgentAssistantRecord.Builder
clearArticleSuggestionAnswer()
public AgentAssistantRecord . Builder clearArticleSuggestionAnswer ()
Output only. The article suggestion answer.
.google.cloud.dialogflow.v2.ArticleAnswer article_suggestion_answer = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AgentAssistantRecord.Builder
clearDialogflowAssistAnswer()
public AgentAssistantRecord . Builder clearDialogflowAssistAnswer ()
Output only. Dialogflow assist answer.
.google.cloud.dialogflow.v2.DialogflowAssistAnswer dialogflow_assist_answer = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AgentAssistantRecord.Builder
clearFaqAnswer()
public AgentAssistantRecord . Builder clearFaqAnswer ()
Output only. The FAQ answer.
.google.cloud.dialogflow.v2.FaqAnswer faq_answer = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AgentAssistantRecord.Builder
clearGeneratorSuggestion()
public AgentAssistantRecord . Builder clearGeneratorSuggestion ()
Output only. The generator suggestion.
.google.cloud.dialogflow.v2.GeneratorSuggestion generator_suggestion = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
AgentAssistantRecord.Builder
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
getArticleSuggestionAnswerBuilder()
public ArticleAnswer . Builder getArticleSuggestionAnswerBuilder ()
Output only. The article suggestion answer.
.google.cloud.dialogflow.v2.ArticleAnswer article_suggestion_answer = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ArticleAnswer.Builder
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
getDescriptorForType()
public Descriptors . Descriptor getDescriptorForType ()
Returns
Type
Description
Descriptor
Overrides
GeneratedMessage.Builder<BuilderType>.getDescriptorForType()
getDialogflowAssistAnswer()
public DialogflowAssistAnswer getDialogflowAssistAnswer ()
Output only. Dialogflow assist answer.
.google.cloud.dialogflow.v2.DialogflowAssistAnswer dialogflow_assist_answer = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
DialogflowAssistAnswer
The dialogflowAssistAnswer.
getDialogflowAssistAnswerBuilder()
public DialogflowAssistAnswer . Builder getDialogflowAssistAnswerBuilder ()
Output only. Dialogflow assist answer.
.google.cloud.dialogflow.v2.DialogflowAssistAnswer dialogflow_assist_answer = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
DialogflowAssistAnswer.Builder
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
getFaqAnswerBuilder()
public FaqAnswer . Builder getFaqAnswerBuilder ()
Output only. The FAQ answer.
.google.cloud.dialogflow.v2.FaqAnswer faq_answer = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
FaqAnswer.Builder
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
getGeneratorSuggestionBuilder()
public GeneratorSuggestion . Builder getGeneratorSuggestionBuilder ()
Output only. The generator suggestion.
.google.cloud.dialogflow.v2.GeneratorSuggestion generator_suggestion = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
GeneratorSuggestion.Builder
getGeneratorSuggestionOrBuilder()
public GeneratorSuggestionOrBuilder getGeneratorSuggestionOrBuilder ()
Output only. The generator suggestion.
.google.cloud.dialogflow.v2.GeneratorSuggestion generator_suggestion = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
GeneratorSuggestionOrBuilder
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
mergeArticleSuggestionAnswer(ArticleAnswer value)
public AgentAssistantRecord . Builder mergeArticleSuggestionAnswer ( ArticleAnswer value )
Output only. The article suggestion answer.
.google.cloud.dialogflow.v2.ArticleAnswer article_suggestion_answer = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ArticleAnswer
Returns
Type
Description
AgentAssistantRecord.Builder
mergeDialogflowAssistAnswer(DialogflowAssistAnswer value)
public AgentAssistantRecord . Builder mergeDialogflowAssistAnswer ( DialogflowAssistAnswer value )
Output only. Dialogflow assist answer.
.google.cloud.dialogflow.v2.DialogflowAssistAnswer dialogflow_assist_answer = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
DialogflowAssistAnswer
Returns
Type
Description
AgentAssistantRecord.Builder
mergeFaqAnswer(FaqAnswer value)
public AgentAssistantRecord . Builder mergeFaqAnswer ( FaqAnswer value )
Output only. The FAQ answer.
.google.cloud.dialogflow.v2.FaqAnswer faq_answer = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
FaqAnswer
Returns
Type
Description
AgentAssistantRecord.Builder
mergeFrom(AgentAssistantRecord other)
public AgentAssistantRecord . Builder mergeFrom ( AgentAssistantRecord other )
Parameter
Name
Description
other
AgentAssistantRecord
Returns
Type
Description
AgentAssistantRecord.Builder
mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
public AgentAssistantRecord . Builder mergeFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry )
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
AgentAssistantRecord.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
Exceptions
Type
Description
IOException
mergeFrom(Message other)
public AgentAssistantRecord . Builder mergeFrom ( Message other )
Parameter
Name
Description
other
Message
Returns
Type
Description
AgentAssistantRecord.Builder
Overrides
AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)
mergeGeneratorSuggestion(GeneratorSuggestion value)
public AgentAssistantRecord . Builder mergeGeneratorSuggestion ( GeneratorSuggestion value )
Output only. The generator suggestion.
.google.cloud.dialogflow.v2.GeneratorSuggestion generator_suggestion = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
GeneratorSuggestion
Returns
Type
Description
AgentAssistantRecord.Builder
setArticleSuggestionAnswer(ArticleAnswer value)
public AgentAssistantRecord . Builder setArticleSuggestionAnswer ( ArticleAnswer value )
Output only. The article suggestion answer.
.google.cloud.dialogflow.v2.ArticleAnswer article_suggestion_answer = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
ArticleAnswer
Returns
Type
Description
AgentAssistantRecord.Builder
setArticleSuggestionAnswer(ArticleAnswer.Builder builderForValue)
public AgentAssistantRecord . Builder setArticleSuggestionAnswer ( ArticleAnswer . Builder builderForValue )
Output only. The article suggestion answer.
.google.cloud.dialogflow.v2.ArticleAnswer article_suggestion_answer = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
builderForValue
ArticleAnswer.Builder
Returns
Type
Description
AgentAssistantRecord.Builder
setDialogflowAssistAnswer(DialogflowAssistAnswer value)
public AgentAssistantRecord . Builder setDialogflowAssistAnswer ( DialogflowAssistAnswer value )
Output only. Dialogflow assist answer.
.google.cloud.dialogflow.v2.DialogflowAssistAnswer dialogflow_assist_answer = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
DialogflowAssistAnswer
Returns
Type
Description
AgentAssistantRecord.Builder
setDialogflowAssistAnswer(DialogflowAssistAnswer.Builder builderForValue)
public AgentAssistantRecord . Builder setDialogflowAssistAnswer ( DialogflowAssistAnswer . Builder builderForValue )
Output only. Dialogflow assist answer.
.google.cloud.dialogflow.v2.DialogflowAssistAnswer dialogflow_assist_answer = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
builderForValue
DialogflowAssistAnswer.Builder
Returns
Type
Description
AgentAssistantRecord.Builder
setFaqAnswer(FaqAnswer value)
public AgentAssistantRecord . Builder setFaqAnswer ( FaqAnswer value )
Output only. The FAQ answer.
.google.cloud.dialogflow.v2.FaqAnswer faq_answer = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
FaqAnswer
Returns
Type
Description
AgentAssistantRecord.Builder
setFaqAnswer(FaqAnswer.Builder builderForValue)
public AgentAssistantRecord . Builder setFaqAnswer ( FaqAnswer . Builder builderForValue )
Output only. The FAQ answer.
.google.cloud.dialogflow.v2.FaqAnswer faq_answer = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
builderForValue
FaqAnswer.Builder
Returns
Type
Description
AgentAssistantRecord.Builder
setGeneratorSuggestion(GeneratorSuggestion value)
public AgentAssistantRecord . Builder setGeneratorSuggestion ( GeneratorSuggestion value )
Output only. The generator suggestion.
.google.cloud.dialogflow.v2.GeneratorSuggestion generator_suggestion = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
value
GeneratorSuggestion
Returns
Type
Description
AgentAssistantRecord.Builder
setGeneratorSuggestion(GeneratorSuggestion.Builder builderForValue)
public AgentAssistantRecord . Builder setGeneratorSuggestion ( GeneratorSuggestion . Builder builderForValue )
Output only. The generator suggestion.
.google.cloud.dialogflow.v2.GeneratorSuggestion generator_suggestion = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Parameter
Name
Description
builderForValue
GeneratorSuggestion.Builder
Returns
Type
Description
AgentAssistantRecord.Builder
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
