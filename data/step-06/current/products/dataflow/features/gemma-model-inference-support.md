---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.805Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Gemma model inference support"
feature_slug: "gemma-model-inference-support"
latest_feature_date: "2024-02-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration"
  - "https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk"
  - "https://docs.cloud.google.com/dataflow/docs/machine-learning"
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
Coverage: LOW

## Step 02 Summary

Dataflow Apache Beam inference pipelines can use Gemma models.

## Extended Definition

Dataflow Apache Beam inference pipelines can use Gemma models.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration](https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration)
- [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning)
- [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)

## Supporting Pages

### "Migrate from App Engine MapReduce to Apache Beam and Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration](https://docs.cloud.google.com/dataflow/docs/guides/gae-mapreduce-migration)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Write ( s , "wordcounts.txt" , formatted ) Additional Apache Beam and Dataflow benefits If you choose to migrate your App Engine MapReduce jobs to Apache Beam pipelines, you will benefit from several features that Apache Beam and Dataflow have to offer.
- Converting App Engine MapReduce jobs to Apache Beam pipelines The following table presents the Apache Beam equivalents of the map , shuffle , and reduce steps of the App Engine MapReduce model.
- Use Apache Beam to create complex pipelines for both batch and streaming and run them on Dataflow.
- Go App Engine MapReduce Apache Beam equivalent Map beam.ParDo Shuffle beam.GroupByKey Reduce beam.Combine The following sample code demonstrates how to implement the App Engine MapReduce model in Apache Beam: Java Taken from MinimalWordCount.java : p . apply ( TextIO . read (). from ( "gs://apache-beam-samples/shakespeare/ " )) // Apply a ParDo that returns a PCollection , where each element is an // individual word in Shakespeare's texts. . apply ( "ExtractWords" , ParDo . of ( new DoFn String , String > () { @ProcessElement public void processElement ( ProcessContext c ) { for ( String word : c . element (). split ( ExampleUtils .

### Install the Apache Beam SDK \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk](https://docs.cloud.google.com/dataflow/docs/guides/installing-beam-sdk)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- You define these pipelines with an Apache Beam program and can choose a runner, such as Dataflow, to execute your pipeline.
- This page shows you how to install the Apache Beam SDK so that you can run your pipelines on the Dataflow service.
- To upgrade an existing installation of apache-beam, use the --upgrade flag: pip install --upgrade 'apache-beam[gcp]' As of October 7, 2020, Dataflow no longer supports Python 2 pipelines.
- Install SDK releases The Apache Beam SDK is an open source programming model for data pipelines.

### Dataflow ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Prediction and inference with hub models I want to do sentiment analysis and summarization You can use Gemma models in your inference pipelines to gauge the sentiment of a conversation, summarize that conversation's content, and draft a reply for a difficult conversation.
- I want to use Dataflow with TFX TensorFlow Extended (TFX) lets you deploy complete ML pipelines by using an orchestration framework that has a built-in integration with Apache Beam and the Dataflow runner.
- Enable right fitting Enrich streaming pipelines with feature store data Apache Beam simplifies the data enrichment workflow by providing a turnkey enrichment transform that you can add to your pipeline.
- About Dataflow ML Prediction and inference Whether you want to classify images in real-time, run remote inference calls, or build a custom model handler, you can find complete Dataflow ML examples.

### SDK version support status \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Python SDK version Status Supported components Details 2.72.0 Supported Core Python SDK library under module apache beam: submodules coders, dataframe, metrics, ml.inference (excluding PytorchModelHandlerKeyedTensor and SklearnModelHandlerPandas), options, portability, runners.dataflow, runners.direct, transforms, typehints, sql, yaml File-based sources and sinks and related modules under module apache beam.io: textio, avroio, parquetio, tfrecordio, gcsfilesystem, localfilesystem, filesystems, fileio Google Cloud I/O connectors under module apache beam.io.gcp: bigquery, datastore, pubsub The connectors under apache beam.io.jdbc: ReadFromJdbc, WriteToJdbc.
- 2.64.0 Deprecated Core Python SDK library under module apache beam: submodules coders, dataframe, metrics, ml.inference (excluding PytorchModelHandlerKeyedTensor and SklearnModelHandlerPandas), options, portability, runners.dataflow, runners.direct, transforms, typehints, sql, yaml File-based sources and sinks and related modules under module apache beam.io: textio, avroio, parquetio, tfrecordio, gcsfilesystem, localfilesystem, filesystems, fileio Google Cloud I/O connectors under module apache beam.io.gcp: bigquery, datastore, pubsub The connectors under apache beam.io.jdbc: ReadFromJdbc, WriteToJdbc.
- 2.63.0 Deprecated Core Python SDK library under module apache beam: submodules coders, dataframe, metrics, ml.inference (excluding PytorchModelHandlerKeyedTensor and SklearnModelHandlerPandas), options, portability, runners.dataflow, runners.direct, transforms, typehints, sql, yaml File-based sources and sinks and related modules under module apache beam.io: textio, avroio, parquetio, tfrecordio, gcsfilesystem, localfilesystem, filesystems, fileio Google Cloud I/O connectors under module apache beam.io.gcp: bigquery, datastore, pubsub The connectors under apache beam.io.jdbc: ReadFromJdbc, WriteToJdbc.
- 2.62.0 Deprecated Core Python SDK library under module apache beam: submodules coders, dataframe, metrics, ml.inference (excluding PytorchModelHandlerKeyedTensor and SklearnModelHandlerPandas), options, portability, runners.dataflow, runners.direct, transforms, typehints, sql, yaml File-based sources and sinks and related modules under module apache beam.io: textio, avroio, parquetio, tfrecordio, gcsfilesystem, localfilesystem, filesystems, fileio Google Cloud I/O connectors under module apache beam.io.gcp: bigquery, datastore, pubsub The connectors under apache beam.io.jdbc: ReadFromJdbc, WriteToJdbc.

