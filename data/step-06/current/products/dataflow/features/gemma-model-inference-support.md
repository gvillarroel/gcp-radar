---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.769Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Gemma model inference support"
feature_slug: "gemma-model-inference-support"
latest_feature_date: "2024-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/machine-learning"
  - "https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration"
  - "https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status"
keywords:
  - "gemma"
  - "model"
  - "inference"
  - "dataflow"
  - "apache"
  - "beam"
  - "pipelines"
  - "can"
---

# Gemma model inference support

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow Apache Beam inference pipelines can use Gemma models.

## Extended Definition

Dataflow Apache Beam inference pipelines can use Gemma models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning)
- [https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration](https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration)
- [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)

## Supporting Pages

### Dataflow ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning)
- Source ID: `site-docs-reference-required-4`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Prediction and inference with hub models I want to do sentiment analysis and summarization You can use Gemma models in your inference pipelines to gauge the sentiment of a conversation, summarize that conversation's content, and draft a reply for a difficult conversation.
- I want to use Dataflow with TFX TensorFlow Extended (TFX) lets you deploy complete ML pipelines by using an orchestration framework that has a built-in integration with Apache Beam and the Dataflow runner.
- Learn more Model maintenance and evaluation Automatic model refresh RunInference lets you perform automatic model updates without stopping your Apache Beam pipeline.
- Enable right fitting Enrich streaming pipelines with feature store data Apache Beam simplifies the data enrichment workflow by providing a turnkey enrichment transform that you can add to your pipeline.

### "Migrate from App Engine MapReduce to Apache Beam and Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration](https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration)
- Source ID: `site-docs-reference-required-3`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Write ( s , "wordcounts.txt" , formatted ) Additional Apache Beam and Dataflow benefits If you choose to migrate your App Engine MapReduce jobs to Apache Beam pipelines, you will benefit from several features that Apache Beam and Dataflow have to offer.
- Converting App Engine MapReduce jobs to Apache Beam pipelines The following table presents the Apache Beam equivalents of the map , shuffle , and reduce steps of the App Engine MapReduce model.
- Use Apache Beam to create complex pipelines for both batch and streaming and run them on Dataflow.
- Go App Engine MapReduce Apache Beam equivalent Map beam.ParDo Shuffle beam.GroupByKey Reduce beam.Combine The following sample code demonstrates how to implement the App Engine MapReduce model in Apache Beam: Java Taken from MinimalWordCount.java : p . apply ( TextIO . read (). from ( "gs://apache-beam-samples/shakespeare/ " )) // Apply a ParDo that returns a PCollection , where each element is an // individual word in Shakespeare's texts. . apply ( "ExtractWords" , ParDo . of ( new DoFn String , String > () { @ProcessElement public void processElement ( ProcessContext c ) { for ( String word : c . element (). split ( ExampleUtils .

### SDK version support status \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Python SDK version Status Supported components Details 2.72.0 Supported Core Python SDK library under module apache beam: submodules coders, dataframe, metrics, ml.inference (excluding PytorchModelHandlerKeyedTensor and SklearnModelHandlerPandas), options, portability, runners.dataflow, runners.direct, transforms, typehints, sql, yaml File-based sources and sinks and related modules under module apache beam.io: textio, avroio, parquetio, tfrecordio, gcsfilesystem, localfilesystem, filesystems, fileio Google Cloud I/O connectors under module apache beam.io.gcp: bigquery, datastore, pubsub The connectors under apache beam.io.jdbc: ReadFromJdbc, WriteToJdbc.
- 2.64.0 Deprecated Core Python SDK library under module apache beam: submodules coders, dataframe, metrics, ml.inference (excluding PytorchModelHandlerKeyedTensor and SklearnModelHandlerPandas), options, portability, runners.dataflow, runners.direct, transforms, typehints, sql, yaml File-based sources and sinks and related modules under module apache beam.io: textio, avroio, parquetio, tfrecordio, gcsfilesystem, localfilesystem, filesystems, fileio Google Cloud I/O connectors under module apache beam.io.gcp: bigquery, datastore, pubsub The connectors under apache beam.io.jdbc: ReadFromJdbc, WriteToJdbc.
- 2.63.0 Deprecated Core Python SDK library under module apache beam: submodules coders, dataframe, metrics, ml.inference (excluding PytorchModelHandlerKeyedTensor and SklearnModelHandlerPandas), options, portability, runners.dataflow, runners.direct, transforms, typehints, sql, yaml File-based sources and sinks and related modules under module apache beam.io: textio, avroio, parquetio, tfrecordio, gcsfilesystem, localfilesystem, filesystems, fileio Google Cloud I/O connectors under module apache beam.io.gcp: bigquery, datastore, pubsub The connectors under apache beam.io.jdbc: ReadFromJdbc, WriteToJdbc.
- 2.62.0 Deprecated Core Python SDK library under module apache beam: submodules coders, dataframe, metrics, ml.inference (excluding PytorchModelHandlerKeyedTensor and SklearnModelHandlerPandas), options, portability, runners.dataflow, runners.direct, transforms, typehints, sql, yaml File-based sources and sinks and related modules under module apache beam.io: textio, avroio, parquetio, tfrecordio, gcsfilesystem, localfilesystem, filesystems, fileio Google Cloud I/O connectors under module apache beam.io.gcp: bigquery, datastore, pubsub The connectors under apache beam.io.jdbc: ReadFromJdbc, WriteToJdbc.

