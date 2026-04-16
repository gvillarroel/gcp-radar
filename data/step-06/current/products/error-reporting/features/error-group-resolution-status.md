---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.691Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Error group resolution status"
feature_slug: "error-group-resolution-status"
latest_feature_date: "2017-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/managing-errors"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroup.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroup"
keywords:
  - "error"
  - "group"
  - "resolution"
  - "status"
  - "users"
  - "can"
  - "assign"
  - "groups"
---

# Error group resolution status

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

Users can assign a resolution status to error groups to help triage errors.

## Extended Definition

Users can assign a resolution status to error groups to help triage errors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/managing-errors](https://docs.cloud.google.com/error-reporting/docs/managing-errors)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroup.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroup.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroup](https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroup)

## Supporting Pages

### Manage error groups \_|\_ Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/managing-errors](https://docs.cloud.google.com/error-reporting/docs/managing-errors)
- Source ID: `site-docs-reference-required-1`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Change resolution status To record the status of your investigation into an error group, do the following: In the Google Cloud console, go to the Error Reporting page: Go to Error Reporting You can also find this page by using the search bar.
- If you subscribe to notifications for the Google Cloud project and delete error events for an error group that has a status of Resolved , then the error group resolution status changes back to Open .
- Add links to error groups You can link error groups to pages such as issue trackers or documentation with resolution steps.
- If an error group marked as Resolved later reoccurs, then Error Reporting changes the resolution status back to Open .

### "Class ErrorGroup.Builder (0.209.0-beta) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroup.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroup.Builder)
- Source ID: `site-java-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An unspecified resolution status will be interpreted as OPEN .google.devtools.clouderrorreporting.v1beta1.ResolutionStatus resolution status = 5; Returns Type Description ResolutionStatus The resolutionStatus. getResolutionStatusValue() public int getResolutionStatusValue () Error group's resolution status.
- For a list of supported locations, see Supported Regions . global is the default when unspecified. string name = 1; Returns Type Description ByteString The bytes for name. getResolutionStatus() public ResolutionStatus getResolutionStatus () Error group's resolution status.
- An unspecified resolution status will be interpreted as OPEN .google.devtools.clouderrorreporting.v1beta1.ResolutionStatus resolution status = 5; Returns Type Description ErrorGroup.Builder This builder for chaining. clearTrackingIssues() public ErrorGroup .
- For a list of supported locations, see Supported Regions . global is the default when unspecified. string name = 1; Returns Type Description ErrorGroup.Builder This builder for chaining. clearResolutionStatus() public ErrorGroup .

### "Class ErrorGroup (0.209.0-beta) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroup](https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1.ErrorGroup)
- Source ID: `site-java-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf type google.devtools.clouderrorreporting.v1beta1.ErrorGroup Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > ErrorGroup Implements ErrorGroupOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields GROUP ID FIELD NUMBER public static final int GROUP ID FIELD NUMBER Field Value Type Description int NAME FIELD NUMBER public static final int NAME FIELD NUMBER Field Value Type Description int RESOLUTION STATUS FIELD NUMBER public static final int RESOLUTION STATUS FIELD NUMBER Field Value Type Description int TRACKING ISSUES FIELD NUMBER public static final int TRACKING ISSUES FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static ErrorGroup getDefaultInstance () Returns Type Description ErrorGroup getDescriptor() public static final Descriptors .
- For a list of supported locations, see Supported Regions . global is the default when unspecified. string name = 1; Returns Type Description ByteString The bytes for name. getParserForType() public Parser<ErrorGroup> getParserForType () Returns Type Description Parser < ErrorGroup > Overrides GeneratedMessage.getParserForType() getResolutionStatus() public ResolutionStatus getResolutionStatus () Error group's resolution status.
- An unspecified resolution status will be interpreted as OPEN .google.devtools.clouderrorreporting.v1beta1.ResolutionStatus resolution status = 5; Returns Type Description ResolutionStatus The resolutionStatus. getResolutionStatusValue() public int getResolutionStatusValue () Error group's resolution status.
- An unspecified resolution status will be interpreted as OPEN .google.devtools.clouderrorreporting.v1beta1.ResolutionStatus resolution status = 5; Returns Type Description int The enum numeric value on the wire for resolutionStatus. getSerializedSize() public int getSerializedSize () Returns Type Description int Overrides GeneratedMessage.getSerializedSize() getTrackingIssues(int index) public TrackingIssue getTrackingIssues ( int index ) Associated tracking issues. repeated .google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking issues = 3; Parameter Name Description index int Returns Type Description TrackingIssue getTrackingIssuesCount() public int getTrackingIssuesCount () Associated tracking issues. repeated .google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking issues = 3; Returns Type Description int getTrackingIssuesList() public List<TrackingIssue> getTrackingIssuesList () Associated tracking issues. repeated .google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking issues = 3; Returns Type Description List < TrackingIssue > getTrackingIssuesOrBuilder(int index) public TrackingIssueOrBuilder getTrackingIssuesOrBuilder ( int index ) Associated tracking issues. repeated .google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking issues = 3; Parameter Name Description index int Returns Type Description TrackingIssueOrBuilder getTrackingIssuesOrBuilderList() public List < ? extends TrackingIssueOrBuilder > getTrackingIssuesOrBuilderList () Associated tracking issues. repeated .google.devtools.clouderrorreporting.v1beta1.TrackingIssue tracking issues = 3; Returns Type Description List < ? extends com.google.devtools.clouderrorreporting.v1beta1.TrackingIssueOrBuilder > hashCode() public int hashCode () Returns Type Description int Overrides AbstractMessage.hashCode() internalGetFieldAccessorTable() protected GeneratedMessage .

