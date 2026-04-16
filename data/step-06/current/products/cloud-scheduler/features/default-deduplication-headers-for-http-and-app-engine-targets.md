---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:01.656Z"
product_name: "Cloud Scheduler"
product_slug: "cloud-scheduler"
feature_name: "Default deduplication headers for HTTP and App Engine targets"
feature_slug: "default-deduplication-headers-for-http-and-app-engine-targets"
latest_feature_date: "2021-02-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder"
  - "https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineHttpTarget"
keywords:
  - "default"
  - "deduplication"
  - "headers"
  - "for"
  - "http"
  - "and"
  - "app"
  - "engine"
---

# Default deduplication headers for HTTP and App Engine targets

Product: Cloud Scheduler
Coverage: MEDIUM

## Step 02 Summary

Cloud Scheduler adds the X-CloudScheduler-JobName and X-CloudScheduler-ScheduleTime headers by default for AppEngineHttpTarget and HttpTarget requests.

## Extended Definition

Cloud Scheduler adds the X-CloudScheduler-JobName and X-CloudScheduler-ScheduleTime headers by default for AppEngineHttpTarget and HttpTarget requests.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder)
- [https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineHttpTarget](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineHttpTarget)

## Supporting Pages

### "Class AppEngineHttpTarget (2.88.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget)
- Source ID: `site-java-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf type google.cloud.scheduler.v1.AppEngineHttpTarget Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > AppEngineHttpTarget Implements AppEngineHttpTargetOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields APP ENGINE ROUTING FIELD NUMBER public static final int APP ENGINE ROUTING FIELD NUMBER Field Value Type Description int BODY FIELD NUMBER public static final int BODY FIELD NUMBER Field Value Type Description int HEADERS FIELD NUMBER public static final int HEADERS FIELD NUMBER Field Value Type Description int HTTP METHOD FIELD NUMBER public static final int HTTP METHOD FIELD NUMBER Field Value Type Description int RELATIVE URI FIELD NUMBER public static final int RELATIVE URI FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static AppEngineHttpTarget getDefaultInstance () Returns Type Description AppEngineHttpTarget getDescriptor() public static final Descriptors .
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Returns Type Description Map < String , String > getHeadersOrDefault(String key, String defaultValue) public String getHeadersOrDefault ( String key , String defaultValue ) HTTP request headers.
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Parameters Name Description key String defaultValue String Returns Type Description String getHeadersOrThrow(String key) public String getHeadersOrThrow ( String key ) HTTP request headers.
- It will result in invalid argument error to set a body on a job with an incompatible HttpMethod . bytes body = 5; Returns Type Description ByteString The body. getDefaultInstanceForType() public AppEngineHttpTarget getDefaultInstanceForType () Returns Type Description AppEngineHttpTarget getHeaders() (deprecated) public Map<String , String > getHeaders () Use #getHeadersMap() instead.

### "Class AppEngineHttpTarget.Builder (2.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder)
- Source ID: `site-java-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Returns Type Description Map < String , String > getHeadersOrDefault(String key, String defaultValue) public String getHeadersOrDefault ( String key , String defaultValue ) HTTP request headers.
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Parameters Name Description key String defaultValue String Returns Type Description String getHeadersOrThrow(String key) public String getHeadersOrThrow ( String key ) HTTP request headers.
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Parameter Name Description values Map < String , String > Returns Type Description AppEngineHttpTarget.Builder putHeaders(String key, String value) public AppEngineHttpTarget .
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Parameter Name Description key String Returns Type Description AppEngineHttpTarget.Builder setAppEngineRouting(AppEngineRouting value) public AppEngineHttpTarget .

### "Interface AppEngineHttpTargetOrBuilder (2.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder)
- Source ID: `site-java-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Returns Type Description Map < String , String > getHeadersOrDefault(String key, String defaultValue) public abstract String getHeadersOrDefault ( String key , String defaultValue ) HTTP request headers.
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Parameters Name Description key String defaultValue String Returns Type Description String getHeadersOrThrow(String key) public abstract String getHeadersOrThrow ( String key ) HTTP request headers.
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Parameter Name Description key String Returns Type Description String getHttpMethod() public abstract HttpMethod getHttpMethod () The HTTP method to use for the request.
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. map<string, string> headers = 4; Returns Type Description int getHeadersMap() public abstract Map<String , String > getHeadersMap () HTTP request headers.

### "Class AppEngineHttpTarget (2.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineHttpTarget](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineHttpTarget)
- Source ID: `site-python-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Scheduler sets some headers to default values: - User-Agent : By default, this header is "AppEngine-Google; (+http://code.google.com/appengine)" .
- In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler. body bytes Body.
- This header can be modified, but Cloud Scheduler will append "AppEngine-Google; (+http://code.google.com/appengine)" to the modified User-Agent . - X-CloudScheduler : This header will be set to true. - X-CloudScheduler-JobName : This header will contain the job name. - X-CloudScheduler-ScheduleTime : For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339.
- Home Documentation Developer tools Python Client libraries Send feedback Class AppEngineHttpTarget (2.19.0) Stay organized with collections Save and categorize content based on your preferences.

