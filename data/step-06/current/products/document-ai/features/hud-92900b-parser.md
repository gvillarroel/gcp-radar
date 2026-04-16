---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:32.024Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "HUD-92900B Parser"
feature_slug: "hud-92900b-parser"
latest_feature_date: "2021-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk"
  - "https://docs.cloud.google.com/document-ai/docs/form-parser"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BatchDocumentsInputConfig"
  - "https://docs.cloud.google.com/document-ai/docs/label-documents"
keywords:
  - "hud"
  - "92900b"
  - "parser"
  - "extracts"
  - "structured"
  - "from"
  - "documents"
---

# HUD-92900B Parser

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Extracts structured data from HUD-92900B documents; Extracts structured data from HUD-92900B documents.

## Extended Definition

Extracts structured data from HUD-92900B documents; Extracts structured data from HUD-92900B documents.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk)
- [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BatchDocumentsInputConfig](https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BatchDocumentsInputConfig)
- [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)

## Supporting Pages

### "Process documents with Gemini layout parser \_|\_ Document AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk)
- Source ID: `site-docs-root-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Process documents with Gemini layout parser The Document AI layout parser is an advanced text parsing and document understanding service that converts unstructured content from complex files into highly structured, precise and machine-readable information.
- Structured Data Ingestion: It can parse complex documents (like 10-K filings or reports) and index structured content (like parsed tables or image descriptions) into databases, as demonstrated with BigQuery .
- How it Works Gemini layout parser processes documents in a multi-stage pipeline designed to preserve semantic meaning: Parse and Structure: The document is ingested.
- Primary use cases Document OCR: It can parse text and layout elements like heading, header, footer, table structure and figures from PDF documents.

### Form Parser \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/form-parser](https://docs.cloud.google.com/document-ai/docs/form-parser)
- Source ID: `site-docs-root-2`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Form Parser can be considered over the other parsers when the use case involves: Dealing with structured forms: It excels at extracting KVPs from well-defined forms that look like conventional forms with labeled blanks to fill in, such as name: .
- Create a Form Parser processor, which can identify and extract text, key-value pairs, tables, and generic entities from many types of documents.
- Flexible table extraction is needed: Form Parser extracts from simple (no cells that span rows or columns) tables that look like tables.
- Checkboxes: A high-quality selection mark detector, which extracts checkboxes from images and PDF output as KVP, using the text nearest the checkbox, with a valueType indicating whether it is filled or unfilled.

### "Class BatchDocumentsInputConfig (2.92.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BatchDocumentsInputConfig](https://docs.cloud.google.com/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1.BatchDocumentsInputConfig)
- Source ID: `site-java-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Builder newBuilder ( BatchDocumentsInputConfig prototype ) Parameter Name Description prototype BatchDocumentsInputConfig Returns Type Description BatchDocumentsInputConfig.Builder parseDelimitedFrom(InputStream input) public static BatchDocumentsInputConfig parseDelimitedFrom ( InputStream input ) Parameter Name Description input InputStream Returns Type Description BatchDocumentsInputConfig Exceptions Type Description IOException parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry) public static BatchDocumentsInputConfig parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry ) Parameters Name Description input InputStream extensionRegistry ExtensionRegistryLite Returns Type Description BatchDocumentsInputConfig Exceptions Type Description IOException parseFrom(byte[] data) public static BatchDocumentsInputConfig parseFrom ( byte [] data ) Parameter Name Description data byte [] Returns Type Description BatchDocumentsInputConfig Exceptions Type Description InvalidProtocolBufferException parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry) public static BatchDocumentsInputConfig parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry ) Parameters Name Description data byte [] extensionRegistry ExtensionRegistryLite Returns Type Description BatchDocumentsInputConfig Exceptions Type Description InvalidProtocolBufferException parseFrom(ByteString data) public static BatchDocumentsInputConfig parseFrom ( ByteString data ) Parameter Name Description data ByteString Returns Type Description BatchDocumentsInputConfig Exceptions Type Description InvalidProtocolBufferException parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry) public static BatchDocumentsInputConfig parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry ) Parameters Name Description data ByteString extensionRegistry ExtensionRegistryLite Returns Type Description BatchDocumentsInputConfig Exceptions Type Description InvalidProtocolBufferException parseFrom(CodedInputStream input) public static BatchDocumentsInputConfig parseFrom ( CodedInputStream input ) Parameter Name Description input CodedInputStream Returns Type Description BatchDocumentsInputConfig Exceptions Type Description IOException parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry) public static BatchDocumentsInputConfig parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry ) Parameters Name Description input CodedInputStream extensionRegistry ExtensionRegistryLite Returns Type Description BatchDocumentsInputConfig Exceptions Type Description IOException parseFrom(InputStream input) public static BatchDocumentsInputConfig parseFrom ( InputStream input ) Parameter Name Description input InputStream Returns Type Description BatchDocumentsInputConfig Exceptions Type Description IOException parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry) public static BatchDocumentsInputConfig parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry ) Parameters Name Description input InputStream extensionRegistry ExtensionRegistryLite Returns Type Description BatchDocumentsInputConfig Exceptions Type Description IOException parseFrom(ByteBuffer data) public static BatchDocumentsInputConfig parseFrom ( ByteBuffer data ) Parameter Name Description data ByteBuffer Returns Type Description BatchDocumentsInputConfig Exceptions Type Description InvalidProtocolBufferException parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry) public static BatchDocumentsInputConfig parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry ) Parameters Name Description data ByteBuffer extensionRegistry ExtensionRegistryLite Returns Type Description BatchDocumentsInputConfig Exceptions Type Description InvalidProtocolBufferException parser() public static Parser<BatchDocumentsInputConfig> parser () Returns Type Description Parser < BatchDocumentsInputConfig > Methods equals(Object obj) public boolean equals ( Object obj ) Parameter Name Description obj Object Returns Type Description boolean Overrides AbstractMessage.equals(Object other) getDefaultInstanceForType() public BatchDocumentsInputConfig getDefaultInstanceForType () Returns Type Description BatchDocumentsInputConfig getGcsDocuments() public GcsDocuments getGcsDocuments () The set of documents individually specified on Cloud Storage. .google.cloud.documentai.v1.GcsDocuments gcs documents = 2; Returns Type Description GcsDocuments The gcsDocuments. getGcsDocumentsOrBuilder() public GcsDocumentsOrBuilder getGcsDocumentsOrBuilder () The set of documents individually specified on Cloud Storage. .google.cloud.documentai.v1.GcsDocuments gcs documents = 2; Returns Type Description GcsDocumentsOrBuilder getGcsPrefix() public GcsPrefix getGcsPrefix () The set of documents that match the specified Cloud Storage gcs prefix . .google.cloud.documentai.v1.GcsPrefix gcs prefix = 1; Returns Type Description GcsPrefix The gcsPrefix. getGcsPrefixOrBuilder() public GcsPrefixOrBuilder getGcsPrefixOrBuilder () The set of documents that match the specified Cloud Storage gcs prefix . .google.cloud.documentai.v1.GcsPrefix gcs prefix = 1; Returns Type Description GcsPrefixOrBuilder getParserForType() public Parser<BatchDocumentsInputConfig> getParserForType () Returns Type Description Parser < BatchDocumentsInputConfig > Overrides GeneratedMessage.getParserForType() getSerializedSize() public int getSerializedSize () Returns Type Description int Overrides GeneratedMessage.getSerializedSize() getSourceCase() public BatchDocumentsInputConfig .
- Protobuf type google.cloud.documentai.v1.BatchDocumentsInputConfig Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > BatchDocumentsInputConfig Implements BatchDocumentsInputConfigOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields GCS DOCUMENTS FIELD NUMBER public static final int GCS DOCUMENTS FIELD NUMBER Field Value Type Description int GCS PREFIX FIELD NUMBER public static final int GCS PREFIX FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static BatchDocumentsInputConfig getDefaultInstance () Returns Type Description BatchDocumentsInputConfig getDescriptor() public static final Descriptors .
- SourceCase getSourceCase () Returns Type Description BatchDocumentsInputConfig.SourceCase hasGcsDocuments() public boolean hasGcsDocuments () The set of documents individually specified on Cloud Storage. .google.cloud.documentai.v1.GcsDocuments gcs documents = 2; Returns Type Description boolean Whether the gcsDocuments field is set. hasGcsPrefix() public boolean hasGcsPrefix () The set of documents that match the specified Cloud Storage gcs prefix . .google.cloud.documentai.v1.GcsPrefix gcs prefix = 1; Returns Type Description boolean Whether the gcsPrefix field is set. hashCode() public int hashCode () Returns Type Description int Overrides AbstractMessage.hashCode() internalGetFieldAccessorTable() protected GeneratedMessage .
- 2.92.0 (latest) 2.91.0 2.89.0 2.87.0 2.86.0 2.85.0 2.84.0 2.82.0 2.80.0 2.79.0 2.78.0 2.77.0 2.76.0 2.74.0 2.72.0 2.71.0 2.68.0 2.67.0 2.66.0 2.64.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.53.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.5 2.6.2 2.5.1 2.4.3 2.3.1 2.2.1 2.1.9 public final class BatchDocumentsInputConfig extends GeneratedMessage implements BatchDocumentsInputConfigOrBuilder The common config to specify a set of documents used as input.

### Label documents \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/label-documents](https://docs.cloud.google.com/document-ai/docs/label-documents)
- Source ID: `site-docs-root-2`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Use the import toolkit to convert existing labels from another system, for example, CSV format label to JSON documents.
- Each time selective labeling is performed, the most diverse (up to 30) documents from the dataset is selected.
- Migrate dataset Import and export lets you move all the documents in a dataset from one processor to another.
- This page describes how to apply labels from your processor schema to imported documents in your dataset.

