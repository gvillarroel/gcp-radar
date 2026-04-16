---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:50.272Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Access Transparency logging"
feature_slug: "access-transparency-logging"
latest_feature_date: "2020-06-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vision/docs/audit-logging"
  - "https://docs.cloud.google.com/python/docs/reference/vision/latest"
  - "https://docs.cloud.google.com/vision/docs/setup"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AnnotateImageResponse.Builder"
keywords:
  - "access"
  - "transparency"
  - "logging"
  - "provides"
  - "logs"
  - "for"
  - "staff"
  - "actions"
---

# Access Transparency logging

Product: Cloud Vision
Coverage: MEDIUM

## Step 02 Summary

Access Transparency logging provides logs for Google staff actions on customer content.

## Extended Definition

Access Transparency logging provides logs for Google staff actions on customer content.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vision/docs/audit-logging](https://docs.cloud.google.com/vision/docs/audit-logging)
- [https://docs.cloud.google.com/python/docs/reference/vision/latest](https://docs.cloud.google.com/python/docs/reference/vision/latest)
- [https://docs.cloud.google.com/vision/docs/setup](https://docs.cloud.google.com/vision/docs/setup)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AnnotateImageResponse.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AnnotateImageResponse.Builder)

## Supporting Pages

### Vision API audit logging information \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/audit-logging](https://docs.cloud.google.com/vision/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about querying by using the Logs Explorer, see Build queries in the Logs Explorer . gcloud The Google Cloud CLI provides a command-line interface to the Logging API.
- The following are the audit log names, including variables for the resource identifiers: projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fdata access projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fpolicy folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Factivity folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fdata access folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fsystem event folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fpolicy billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Factivity billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fdata access billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fsystem event billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fpolicy organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Factivity organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fdata access organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fsystem event organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fpolicy Note: The part of the log name following /logs/ must be URL-encoded.
- Log name Cloud Audit Logs log names include resource identifiers indicating the Google Cloud project or other Google Cloud entity that owns the audit logs, and whether the log contains Admin Activity, Data Access, Policy Denied, or System Event audit logging data.
- When deciding which Logging-specific permissions and roles apply to your use case, consider the following: The Logs Viewer role ( roles/logging.viewer ) gives you read-only access to Admin Activity, Policy Denied, and System Event audit logs.

### "Python Client for Cloud Vision \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/vision/latest](https://docs.cloud.google.com/python/docs/reference/vision/latest)
- Source ID: `site-python-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Take care to restrict access to the logs if they are saved, whether it be on local storage or on Google Cloud Logging.
- Code-Based Examples Configuring a handler for all Google-based loggers import logging from google.cloud import library v1 base logger = logging.getLogger("google") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Configuring a handler for a specific Google module (for a client library called library v1 ): import logging from google.cloud import library v1 base logger = logging.getLogger("google.cloud.library v1") base logger.addHandler(logging.StreamHandler()) base logger.setLevel(logging.DEBUG) Logging details Regardless of which of the mechanisms above you use to configure logging for this library, by default logging events are not propagated up to the root logger from the google-level logger.
- The Google-specific logging configurations (default handlers for environment-based configuration; not propagating logging events to the root logger) get executed the first time any client library is instantiated in your application, and only if the affected loggers have not been previously configured. (This is the reason for 2.i. above.) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Environment-Based Examples Enabling the default handler for all Google-based loggers export GOOGLE SDK PYTHON LOGGING SCOPE=google Enabling the default handler for a specific Google module (for a client library called library v1 ): export GOOGLE SDK PYTHON LOGGING SCOPE=google.cloud.library v1 Advanced, code-based configuration You can also configure a valid logging scope using Python’s standard logging mechanism.

### "Cloud Vision setup and cleanup \_|\_ Cloud Vision API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vision/docs/setup](https://docs.cloud.google.com/vision/docs/setup)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This role provides access to call any API for the project.
- For more information, see: The service account overview Service account best practices Create and manage service accounts Access control with roles When a principal (user account, service account, and so on) calls an API, Google Cloud requires that the principal has the appropriate permissions.
- This includes: General tasks: Creating a Google Cloud project, enabling billing, installing the Google Cloud CLI, setting up authentication and access control, and performing cleanup after testing the product.
- The gcloud auth application-default login command logs you in to gcloud for application default credentials with your user account, which should be done before calling the API.

### "Class AnnotateImageResponse.Builder (3.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AnnotateImageResponse.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AnnotateImageResponse.Builder)
- Source ID: `site-java-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This annotation provides the structural hierarchy for the OCR detected text. .google.cloud.vision.v1.TextAnnotation full text annotation = 12; Returns Type Description boolean Whether the fullTextAnnotation field is set. hasImagePropertiesAnnotation() public boolean hasImagePropertiesAnnotation () If present, image properties were extracted successfully. .google.cloud.vision.v1.ImageProperties image properties annotation = 8; Returns Type Description boolean Whether the imagePropertiesAnnotation field is set. hasProductSearchResults() public boolean hasProductSearchResults () If present, product search has completed successfully. .google.cloud.vision.v1.ProductSearchResults product search results = 14; Returns Type Description boolean Whether the productSearchResults field is set. hasSafeSearchAnnotation() public boolean hasSafeSearchAnnotation () If present, safe-search annotation has completed successfully. .google.cloud.vision.v1.SafeSearchAnnotation safe search annotation = 6; Returns Type Description boolean Whether the safeSearchAnnotation field is set. hasWebDetection() public boolean hasWebDetection () If present, web detection has completed successfully. .google.cloud.vision.v1.WebDetection web detection = 13; Returns Type Description boolean Whether the webDetection field is set. internalGetFieldAccessorTable() protected GeneratedMessage .
- Protobuf type google.cloud.vision.v1.AnnotateImageResponse Inheritance java.lang.Object > AbstractMessageLite.Builder<MessageType,BuilderType> > AbstractMessage.Builder<BuilderType> > GeneratedMessage.Builder > AnnotateImageResponse.Builder Implements AnnotateImageResponseOrBuilder Inherited Members AbstractMessage.Builder.findInitializationErrors() AbstractMessage.Builder.getInitializationErrorString() AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite) AbstractMessage.Builder.mergeFrom(byte[]) AbstractMessage.Builder.mergeFrom(byte[],ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(byte[],int,int) AbstractMessage.Builder.mergeFrom(byte[],int,int,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(ByteString) AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(CodedInputStream) AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite) AbstractMessage.Builder.mergeFrom(Message) AbstractMessage.Builder.mergeFrom(InputStream) AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite) AbstractMessage.Builder.newUninitializedMessageException(Message) AbstractMessage.Builder.toString() AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>) AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.Builder.internalMergeFrom(MessageType) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream) AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite) AbstractMessageLite.Builder.mergeFrom(MessageLite) AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite) GeneratedMessage.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.clear() GeneratedMessage.Builder.clearField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.clearOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.clone() GeneratedMessage.Builder.getAllFields() GeneratedMessage.Builder.getDescriptorForType() GeneratedMessage.Builder.getField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getFieldBuilder(Descriptors.FieldDescriptor) GeneratedMessage.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.Builder.getParentForChildren() GeneratedMessage.Builder.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int) GeneratedMessage.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor) com.google.protobuf.GeneratedMessage.Builder.getUnknownFieldSetBuilder() GeneratedMessage.Builder.getUnknownFields() GeneratedMessage.Builder.hasField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.Builder.internalGetFieldAccessorTable() GeneratedMessage.Builder.internalGetMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int) GeneratedMessage.Builder.internalGetMutableMapField(int) com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int) GeneratedMessage.Builder.isClean() GeneratedMessage.Builder.isInitialized() GeneratedMessage.Builder.markClean() GeneratedMessage.Builder.mergeUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString) com.google.protobuf.GeneratedMessage.Builder.mergeUnknownVarintField(int,int) GeneratedMessage.Builder.newBuilderForField(Descriptors.FieldDescriptor) GeneratedMessage.Builder.onBuilt() GeneratedMessage.Builder.onChanged() com.google.protobuf.GeneratedMessage.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.Builder.setField(Descriptors.FieldDescriptor,Object) GeneratedMessage.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder) GeneratedMessage.Builder.setUnknownFields(UnknownFieldSet) com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldsProto3(com.google.protobuf.UnknownFieldSet) Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods getDescriptor() public static final Descriptors .
- This annotation provides the structural hierarchy for the OCR detected text. .google.cloud.vision.v1.TextAnnotation full text annotation = 12; Returns Type Description TextAnnotationOrBuilder getImagePropertiesAnnotation() public ImageProperties getImagePropertiesAnnotation () If present, image properties were extracted successfully. .google.cloud.vision.v1.ImageProperties image properties annotation = 8; Returns Type Description ImageProperties The imagePropertiesAnnotation. getImagePropertiesAnnotationBuilder() public ImageProperties .
- This annotation provides the structural hierarchy for the OCR detected text. .google.cloud.vision.v1.TextAnnotation full text annotation = 12; Returns Type Description TextAnnotation.Builder getFullTextAnnotationOrBuilder() public TextAnnotationOrBuilder getFullTextAnnotationOrBuilder () If present, text (OCR) detection or document (OCR) text detection has completed successfully.

