---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.326Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "BigQuery destination support"
feature_slug: "bigquery-destination-support"
latest_feature_date: "2023-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient"
  - "https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.SingleTargetDataset"
keywords:
  - "destination"
  - "datastream"
  - "supports"
  - "as"
  - "for"
  - "streamed"
---

# BigQuery destination support

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream supports BigQuery as a destination for streamed data; Datastream supports BigQuery as a destination for streamed data.

## Extended Definition

Datastream supports BigQuery as a destination for streamed data; Datastream supports BigQuery as a destination for streamed data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.SingleTargetDataset](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.SingleTargetDataset)

## Supporting Pages

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.ConnectionProfile A set of reusable connection configurations to be used as a source or destination for a stream. get location get location ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StopBackfillJobResponse Response for manually stop a backfill job for a specific stream object. stream object path stream object path ( project : str , location : str , stream : str , object : str ) - > str Returns a fully-qualified stream object string. stream path stream path ( project : str , location : str , stream : str ) - > str Returns a fully-qualified stream string. update connection profile update connection profile ( request : typing .
- CreateConnectionProfileRequest ( parent="parent value", connection profile id="connection profile id value", connection profile=connection profile, ) Make the request operation = client. create connection profile (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreateConnectionProfileRequest , dict]] The request object.
- CreatePrivateConnectionRequest ( parent="parent value", private connection id="private connection id value", private connection=private connection, ) Make the request operation = client. create private connection (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreatePrivateConnectionRequest , dict]] The request object.

### "Class DatastreamClient (1.18.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- Source ID: `site-python-reference`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.ConnectionProfile A set of reusable connection configurations to be used as a source or destination for a stream. get location get location ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StopBackfillJobResponse Response for manually stop a backfill job for a specific stream object. stream object path stream object path ( project : str , location : str , stream : str , object : str ) - > str Returns a fully-qualified stream object string. stream path stream path ( project : str , location : str , stream : str ) - > str Returns a fully-qualified stream string. update connection profile update connection profile ( request : typing .
- CreateConnectionProfileRequest ( parent="parent value", connection profile id="connection profile id value", connection profile=connection profile, ) Make the request operation = client. create connection profile (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.CreateConnectionProfileRequest , dict] The request object.
- CreatePrivateConnectionRequest ( parent="parent value", private connection id="private connection id value", private connection=private connection, ) Make the request operation = client. create private connection (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.CreatePrivateConnectionRequest , dict] The request object.

### Implement Datastream and Dataflow for analytics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure information about the source database for the stream In this section, you configure information about the source database for the stream by specifying the tables and schemas in the source database that Datastream: Can transfer into the destination.
- Datastream uses the information defined in the connection profiles to connect to both the source and the destination so that it can stream data from the source database into your destination bucket in Cloud Storage.
- You're also configuring the Pub/Sub notifications to only listen to the Datastream output path which you define in the Create a destination connection profile for Cloud Storage step.
- In the Connection profile path prefix field, provide a prefix for the path that you want to append to the bucket name when Datastream streams data to the destination.

### "Class BigQueryDestinationConfig.SingleTargetDataset (1.87.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.SingleTargetDataset](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.SingleTargetDataset)
- Source ID: `site-java-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf type google.cloud.datastream.v1.BigQueryDestinationConfig.SingleTargetDataset Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > BigQueryDestinationConfig.SingleTargetDataset Implements BigQueryDestinationConfig.SingleTargetDatasetOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields DATASET ID FIELD NUMBER public static final int DATASET ID FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static BigQueryDestinationConfig .
- BuilderParent parent ) Parameter Name Description parent BuilderParent Returns Type Description BigQueryDestinationConfig.SingleTargetDataset.Builder Overrides AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent) toBuilder() public BigQueryDestinationConfig .
- DatasetIds allowed characters: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#datasetreference . string dataset id = 1; Returns Type Description ByteString The bytes for datasetId. getDefaultInstanceForType() public BigQueryDestinationConfig .
- Builder newBuilderForType () Returns Type Description BigQueryDestinationConfig.SingleTargetDataset.Builder newBuilderForType(AbstractMessage.BuilderParent parent) protected BigQueryDestinationConfig .

