---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:07:05.645Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Appendable output streams"
feature_slug: "appendable-output-streams"
latest_feature_date: "2016-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/concepts/jobs/history-server"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-fileoutput-committer"
keywords:
  - "appendable"
  - "output"
  - "streams"
  - "let"
  - "ghfs"
  - "enable"
  - "writes"
  - "setting"
---

# Appendable output streams

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Appendable output streams let GHFS enable appendable writes by setting fs.gs.outputstream.type to SYNCABLE_COMPOSITE.

## Extended Definition

Appendable output streams let GHFS enable appendable writes by setting fs.gs.outputstream.type to SYNCABLE_COMPOSITE.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/concepts/jobs/history-server](https://docs.cloud.google.com/dataproc/docs/concepts/jobs/history-server)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-fileoutput-committer](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-fileoutput-committer)

## Supporting Pages

### Servidor de histórico persistente | Managed Service for Apache Spark | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/jobs/history-server](https://docs.cloud.google.com/dataproc/docs/concepts/jobs/history-server)
- Source ID: `feature-recovery-http`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Se as duas propriedades forem usadas, elas precisarão apontar para diretórios no mesmo bucket. --properties=mapred:mapreduce.jobhistory.done-dir=gs:// bucket-name / directory-name /mapreduce-job-history/done --properties=mapred:mapreduce.jobhistory.intermediate-done-dir=gs:// bucket-name / directory-name /mapreduce-job-history/intermediate-done spark:spark.history.fs.gs.outputstream.type : essa propriedade se aplica a 2.0 e 2.1 clusters de versão de imagem que usam a versão 2.0.x do conector do Cloud Storage (a versão padrão do conector para clusters de versão de imagem 2.0 e 2.1 ).
- Quando definido como FLUSHABLE_COMPOSITE , os dados são copiados para o Cloud Storage em intervalos regulares enquanto o job está em execução, conforme definido por spark:spark.history.fs.gs.outputstream.sync.min.interval.ms . --properties=spark:spark.history.fs.gs.outputstream.type=FLUSHABLE_COMPOSITE spark:spark.history.fs.gs.outputstream.sync.min.interval.ms : Essa propriedade se aplica a clusters de versão de imagem 2.0 e 2.1 que usam a versão 2.0.x do conector do Cloud Storage (a versão padrão do conector para clusters de versão de imagem 2.0 e 2.1 ).
- Ele controla a frequência em que os dados são transferidos para o Cloud Storage quando spark:spark.history.fs.gs.outputstream.type está definido como FLUSHABLE_COMPOSITE . --properties=spark:spark.history.fs.gs.outputstream.sync.min.interval= INTERVAL dataproc:yarn.atsv2.bigtable.instance : depois de configurar o Yarn Timeline Service v2 , adicione essa propriedade para gravar dados da linha do tempo do YARN na instância do Bigtable especificada para visualização nas interfaces da Web do YARN Application Timeline Service V2 e do Tez do cluster do PHS.
- Ele controla a frequência em milissegundos em que os dados são transferidos para o Cloud Storage quando spark:spark.history.fs.gs.outputstream.type está definido como FLUSHABLE_COMPOSITE .

### "Run Spark jobs with DataprocFileOutputCommitter \_|\_ Managed Service for\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-fileoutput-committer](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-fileoutput-committer)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It enables concurrent writes by Apache Spark jobs to an output location.
- Code example: sc.hadoopConfiguration.set("spark.hadoop.mapreduce.outputcommitter.factory.class","org.apache.hadoop.mapreduce.lib.output.DataprocFileOutputCommitterFactory") sc.hadoopConfiguration.set("spark.hadoop.mapreduce.fileoutputcommitter.marksuccessfuljobs","false") The Managed Service for Apache Spark file output committer must set spark.hadoop.mapreduce.fileoutputcommitter.marksuccessfuljobs=false to avoid conflicts between success marker files created during concurrent writes.
- Limitations The DataprocFileOutputCommitter feature supports Spark jobs run on Managed Service for Apache Spark Compute Engine clusters created with the following image versions: 2.1 image versions 2.1.10 and higher 2.0 image versions 2.0.62 and higher Use DataprocFileOutputCommitter To use this feature: Create a Managed Service for Apache Spark on Compute Engine cluster using image versions 2.1.10 or 2.0.62 or higher.
- Google Cloud CLI example: gcloud dataproc jobs submit spark \ --properties=spark.hadoop.mapreduce.outputcommitter.factory.class=org.apache.hadoop.mapreduce.lib.output.DataprocFileOutputCommitterFactory,spark.hadoop.mapreduce.fileoutputcommitter.marksuccessfuljobs=false \ --region= REGION \ other args ...

### "Class AutoscalingPolicy (4.85.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy)
- Source ID: `site-java-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf type google.cloud.dataproc.v1.AutoscalingPolicy Inheritance Object > AbstractMessageLite<MessageType,BuilderType> > AbstractMessage > GeneratedMessage > AutoscalingPolicy Implements AutoscalingPolicyOrBuilder Inherited Members AbstractMessage.equals(Object) AbstractMessage.findInitializationErrors() AbstractMessage.getInitializationErrorString() AbstractMessage.hashCode() AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>) AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent) AbstractMessage.toString() AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>) AbstractMessageLite.checkByteStringIsUtf8(ByteString) AbstractMessageLite.toByteArray() AbstractMessageLite.toByteString() AbstractMessageLite.writeDelimitedTo(OutputStream) AbstractMessageLite.writeTo(OutputStream) com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT) com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream) GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>) com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int) com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int) com.google.protobuf.GeneratedMessage.canUseUnsafe() GeneratedMessage.computeStringSize(int,Object) GeneratedMessage.computeStringSizeNoTag(Object) com.google.protobuf.GeneratedMessage.emptyBooleanList() com.google.protobuf.GeneratedMessage.emptyDoubleList() com.google.protobuf.GeneratedMessage.emptyFloatList() com.google.protobuf.GeneratedMessage.emptyIntList() com.google.protobuf.GeneratedMessage.emptyLongList() GeneratedMessage.getAllFields() GeneratedMessage.getDescriptorForType() GeneratedMessage.getField(Descriptors.FieldDescriptor) GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor) GeneratedMessage.getParserForType() GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int) GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor) GeneratedMessage.getSerializedSize() GeneratedMessage.getUnknownFields() GeneratedMessage.hasField(Descriptors.FieldDescriptor) GeneratedMessage.hasOneof(Descriptors.OneofDescriptor) GeneratedMessage.internalGetFieldAccessorTable() GeneratedMessage.internalGetMapField(int) com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int) GeneratedMessage.isInitialized() com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object) GeneratedMessage.makeExtensionsImmutable() com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite) com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter) GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int) com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int) GeneratedMessage.writeReplace() GeneratedMessage.writeString(CodedOutputStream,int,Object) GeneratedMessage.writeStringNoTag(CodedOutputStream,Object) GeneratedMessage.writeTo(CodedOutputStream) Object.clone() Object.finalize() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields BASIC ALGORITHM FIELD NUMBER public static final int BASIC ALGORITHM FIELD NUMBER Field Value Type Description int CLUSTER TYPE FIELD NUMBER public static final int CLUSTER TYPE FIELD NUMBER Field Value Type Description int ID FIELD NUMBER public static final int ID FIELD NUMBER Field Value Type Description int LABELS FIELD NUMBER public static final int LABELS FIELD NUMBER Field Value Type Description int NAME FIELD NUMBER public static final int NAME FIELD NUMBER Field Value Type Description int SECONDARY WORKER CONFIG FIELD NUMBER public static final int SECONDARY WORKER CONFIG FIELD NUMBER Field Value Type Description int WORKER CONFIG FIELD NUMBER public static final int WORKER CONFIG FIELD NUMBER Field Value Type Description int Static Methods getDefaultInstance() public static AutoscalingPolicy getDefaultInstance () Returns Type Description AutoscalingPolicy getDescriptor() public static final Descriptors .
- AlgorithmCase getAlgorithmCase () Returns Type Description AutoscalingPolicy.AlgorithmCase getBasicAlgorithm() public BasicAutoscalingAlgorithm getBasicAlgorithm () .google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic algorithm = 3 [(.google.api.field behavior) = REQUIRED]; Returns Type Description BasicAutoscalingAlgorithm The basicAlgorithm. getBasicAlgorithmOrBuilder() public BasicAutoscalingAlgorithmOrBuilder getBasicAlgorithmOrBuilder () .google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic algorithm = 3 [(.google.api.field behavior) = REQUIRED]; Returns Type Description BasicAutoscalingAlgorithmOrBuilder getClusterType() public AutoscalingPolicy .
- Describes how the autoscaler will operate for primary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker config = 4 [(.google.api.field behavior) = REQUIRED]; Returns Type Description InstanceGroupAutoscalingPolicyConfigOrBuilder hasBasicAlgorithm() public boolean hasBasicAlgorithm () .google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic algorithm = 3 [(.google.api.field behavior) = REQUIRED]; Returns Type Description boolean Whether the basicAlgorithm field is set. hasSecondaryWorkerConfig() public boolean hasSecondaryWorkerConfig () Optional.
- For projects.regions.autoscalingPolicies , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} For projects.locations.autoscalingPolicies , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} string name = 2 [(.google.api.field behavior) = OUTPUT ONLY]; Returns Type Description ByteString The bytes for name. getParserForType() public Parser<AutoscalingPolicy> getParserForType () Returns Type Description Parser < AutoscalingPolicy > Overrides GeneratedMessage.getParserForType() getSecondaryWorkerConfig() public InstanceGroupAutoscalingPolicyConfig getSecondaryWorkerConfig () Optional.

