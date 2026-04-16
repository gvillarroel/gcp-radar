---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:01.652Z"
product_name: "Cloud Scheduler"
product_slug: "cloud-scheduler"
feature_name: "HTTP and App Engine target headers in Cloud Scheduler Console"
feature_slug: "http-and-app-engine-target-headers-in-cloud-scheduler-console"
latest_feature_date: "2021-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder"
  - "https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineHttpTarget"
keywords:
  - "http"
  - "and"
  - "app"
  - "engine"
  - "target"
  - "headers"
  - "in"
  - "scheduler"
---

# HTTP and App Engine target headers in Cloud Scheduler Console

Product: Cloud Scheduler
Coverage: MEDIUM

## Step 02 Summary

The Cloud Scheduler Console supports configuring headers for HTTP and App Engine targets.

## Extended Definition

The Cloud Scheduler Console supports configuring headers for HTTP and App Engine targets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder)
- [https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineHttpTarget](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineHttpTarget)

## Supporting Pages

### "Interface AppEngineHttpTargetOrBuilder (2.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder)
- Source ID: `site-java-reference`
- Final score: 388
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Parameter Name Description key String Returns Type Description boolean getAppEngineRouting() public abstract AppEngineRouting getAppEngineRouting () App Engine Routing setting for the job. .google.cloud.scheduler.v1.AppEngineRouting app engine routing = 2; Returns Type Description AppEngineRouting The appEngineRouting. getAppEngineRoutingOrBuilder() public abstract AppEngineRoutingOrBuilder getAppEngineRoutingOrBuilder () App Engine Routing setting for the job. .google.cloud.scheduler.v1.AppEngineRouting app engine routing = 2; Returns Type Description AppEngineRoutingOrBuilder getBody() public abstract ByteString getBody () Body.
- 2.88.0 (latest) 2.87.0 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.13 2.2.0 2.1.23 public interface AppEngineHttpTargetOrBuilder extends MessageOrBuilder Implements MessageOrBuilder Methods containsHeaders(String key) public abstract boolean containsHeaders ( String key ) HTTP request headers.
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Returns Type Description Map < String , String > getHeadersOrDefault(String key, String defaultValue) public abstract String getHeadersOrDefault ( String key , String defaultValue ) HTTP request headers.
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Parameters Name Description key String defaultValue String Returns Type Description String getHeadersOrThrow(String key) public abstract String getHeadersOrThrow ( String key ) HTTP request headers.

### "Class AppEngineHttpTarget (2.88.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget)
- Source ID: `site-java-reference`
- Final score: 386
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf type google.cloud.scheduler.v1.AppEngineHttpTarget Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > AppEngineHttpTarget Implements AppEngineHttpTargetOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields APP ENGINE ROUTING FIELD NUMBER public static final int APP ENGINE ROUTING FIELD NUMBER Field Value Type Description int BODY FIELD NUMBER public static final int BODY FIELD NUMBER Field Value Type Description int HEADERS FIELD NUMBER public static final int HEADERS FIELD NUMBER Field Value Type Description int HTTP METHOD FIELD NUMBER public static final int HTTP METHOD FIELD NUMBER Field Value Type Description int RELATIVE URI FIELD NUMBER public static final int RELATIVE URI FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static AppEngineHttpTarget getDefaultInstance () Returns Type Description AppEngineHttpTarget getDescriptor() public static final Descriptors .
- PATCH and OPTIONS are not permitted. .google.cloud.scheduler.v1.HttpMethod http method = 1; Returns Type Description int The enum numeric value on the wire for httpMethod. getParserForType() public Parser<AppEngineHttpTarget> getParserForType () Returns Type Description Parser < AppEngineHttpTarget > Overrides GeneratedMessage.getParserForType() getRelativeUri() public String getRelativeUri () The relative URI.
- Builder newBuilder ( AppEngineHttpTarget prototype ) Parameter Name Description prototype AppEngineHttpTarget Returns Type Description AppEngineHttpTarget.Builder parseDelimitedFrom(InputStream input) public static AppEngineHttpTarget parseDelimitedFrom ( InputStream input ) Parameter Name Description input InputStream Returns Type Description AppEngineHttpTarget Exceptions Type Description IOException parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry) public static AppEngineHttpTarget parseDelimitedFrom ( InputStream input , ExtensionRegistryLite extensionRegistry ) Parameters Name Description input InputStream extensionRegistry ExtensionRegistryLite Returns Type Description AppEngineHttpTarget Exceptions Type Description IOException parseFrom(byte[] data) public static AppEngineHttpTarget parseFrom ( byte [] data ) Parameter Name Description data byte [] Returns Type Description AppEngineHttpTarget Exceptions Type Description InvalidProtocolBufferException parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry) public static AppEngineHttpTarget parseFrom ( byte [] data , ExtensionRegistryLite extensionRegistry ) Parameters Name Description data byte [] extensionRegistry ExtensionRegistryLite Returns Type Description AppEngineHttpTarget Exceptions Type Description InvalidProtocolBufferException parseFrom(ByteString data) public static AppEngineHttpTarget parseFrom ( ByteString data ) Parameter Name Description data ByteString Returns Type Description AppEngineHttpTarget Exceptions Type Description InvalidProtocolBufferException parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry) public static AppEngineHttpTarget parseFrom ( ByteString data , ExtensionRegistryLite extensionRegistry ) Parameters Name Description data ByteString extensionRegistry ExtensionRegistryLite Returns Type Description AppEngineHttpTarget Exceptions Type Description InvalidProtocolBufferException parseFrom(CodedInputStream input) public static AppEngineHttpTarget parseFrom ( CodedInputStream input ) Parameter Name Description input CodedInputStream Returns Type Description AppEngineHttpTarget Exceptions Type Description IOException parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry) public static AppEngineHttpTarget parseFrom ( CodedInputStream input , ExtensionRegistryLite extensionRegistry ) Parameters Name Description input CodedInputStream extensionRegistry ExtensionRegistryLite Returns Type Description AppEngineHttpTarget Exceptions Type Description IOException parseFrom(InputStream input) public static AppEngineHttpTarget parseFrom ( InputStream input ) Parameter Name Description input InputStream Returns Type Description AppEngineHttpTarget Exceptions Type Description IOException parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry) public static AppEngineHttpTarget parseFrom ( InputStream input , ExtensionRegistryLite extensionRegistry ) Parameters Name Description input InputStream extensionRegistry ExtensionRegistryLite Returns Type Description AppEngineHttpTarget Exceptions Type Description IOException parseFrom(ByteBuffer data) public static AppEngineHttpTarget parseFrom ( ByteBuffer data ) Parameter Name Description data ByteBuffer Returns Type Description AppEngineHttpTarget Exceptions Type Description InvalidProtocolBufferException parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry) public static AppEngineHttpTarget parseFrom ( ByteBuffer data , ExtensionRegistryLite extensionRegistry ) Parameters Name Description data ByteBuffer extensionRegistry ExtensionRegistryLite Returns Type Description AppEngineHttpTarget Exceptions Type Description InvalidProtocolBufferException parser() public static Parser<AppEngineHttpTarget> parser () Returns Type Description Parser < AppEngineHttpTarget > Methods containsHeaders(String key) public boolean containsHeaders ( String key ) HTTP request headers.
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Parameter Name Description key String Returns Type Description boolean equals(Object obj) public boolean equals ( Object obj ) Parameter Name Description obj Object Returns Type Description boolean Overrides AbstractMessage.equals(Object other) getAppEngineRouting() public AppEngineRouting getAppEngineRouting () App Engine Routing setting for the job. .google.cloud.scheduler.v1.AppEngineRouting app engine routing = 2; Returns Type Description AppEngineRouting The appEngineRouting. getAppEngineRoutingOrBuilder() public AppEngineRoutingOrBuilder getAppEngineRoutingOrBuilder () App Engine Routing setting for the job. .google.cloud.scheduler.v1.AppEngineRouting app engine routing = 2; Returns Type Description AppEngineRoutingOrBuilder getBody() public ByteString getBody () Body.

### "Class AppEngineHttpTarget.Builder (2.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder)
- Source ID: `site-java-reference`
- Final score: 386
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Parameter Name Description values Map < String , String > Returns Type Description AppEngineHttpTarget.Builder putHeaders(String key, String value) public AppEngineHttpTarget .
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Parameter Name Description key String Returns Type Description AppEngineHttpTarget.Builder setAppEngineRouting(AppEngineRouting value) public AppEngineHttpTarget .
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Parameters Name Description key String value String Returns Type Description AppEngineHttpTarget.Builder removeHeaders(String key) public AppEngineHttpTarget .
- No spaces are allowed, and the maximum length allowed is 2083 characters. string relative uri = 3; Returns Type Description AppEngineHttpTarget.Builder This builder for chaining. containsHeaders(String key) public boolean containsHeaders ( String key ) HTTP request headers.

### "Class AppEngineHttpTarget (2.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineHttpTarget](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineHttpTarget)
- Source ID: `site-python-reference`
- Final score: 378
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class AppEngineHttpTarget (2.19.0) Stay organized with collections Save and categorize content based on your preferences.
- Cloud Scheduler sets some headers to default values: - User-Agent : By default, this header is "AppEngine-Google; (+http://code.google.com/appengine)" .
- This header can be modified, but Cloud Scheduler will append "AppEngine-Google; (+http://code.google.com/appengine)" to the modified User-Agent . - X-CloudScheduler : This header will be set to true. - X-CloudScheduler-JobName : This header will contain the job name. - X-CloudScheduler-ScheduleTime : For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339.
- 2.19.0 (latest) 2.18.0 2.17.0 2.16.0 2.15.1 2.14.1 2.13.5 2.12.0 2.11.3 2.10.0 2.9.1 2.8.0 2.7.3 2.6.4 2.5.1 2.4.0 2.3.4 2.2.0 2.1.1 2.0.0 1.3.2 1.2.1 AppEngineHttpTarget ( mapping = None , , ignore unknown fields = False , kwargs ) App Engine target.

