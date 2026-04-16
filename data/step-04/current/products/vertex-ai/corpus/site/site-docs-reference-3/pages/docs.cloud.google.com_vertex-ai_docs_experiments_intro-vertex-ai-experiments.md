---
title: "Introduction to Vertex AI Experiments \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments
  title: "Introduction to Vertex AI Experiments \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Send feedback
Introduction to Vertex AI Experiments
Stay organized with collections
Save and categorize content based on your preferences.
To see an example of getting started with Vertex AI Experiments,
run the "Get started with Vertex AI Experiments" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
Vertex AI Experiments is a tool that helps you track and analyze different
model architectures, hyperparameters, and training environments,
letting you track the steps, inputs, and outputs of
an experiment run. Vertex AI Experiments can also evaluate how your model
performed in aggregate,
against test datasets, and during the training run. You can then use this
information to select the best model for your particular use case.
Experiment runs don't incur additional charges. You're only charged for
resources that you use during your experiment as described in
Vertex AI pricing .
What do you want to do?
Check out notebook sample
track metrics and parameters
Compare models
track experiment lineage
Model training
track pipeline runs
Compare pipeline runs
Track steps, inputs, and outputs
Vertex AI Experiments lets you track:
steps of an experiment run ,
for example, preprocessing, training,
inputs, for example, algorithm, parameters, datasets,
outputs of those steps, for example, models, checkpoints, metrics.
You can then figure out what worked and what didn't, and identify further
avenues for experimentation.
For user journey examples, check out:
Model training
Compare models
Analyze model performance
Vertex AI Experiments lets you track and evaluate how
the model performed in aggregate, against test datasets, and during
the training run. This ability helps to understand the performance
characteristics of the models -- how well a particular model works overall,
where it fails, and where the model excels.
For user journey examples, check out:
Compare pipeline runs
Compare models
Compare model performance
Vertex AI Experiments lets you group and compare multiple models
across
experiment runs .
Each model has its own specified parameters, modeling techniques, architectures,
and input. This approach helps select the best model.
For user journey examples, check out:
Compare pipeline runs
Compare models
Search experiments
The Google Cloud console provides a centralized view of experiments,
a cross-sectional view of the experiment runs, and the details for each run.
The Vertex AI SDK for Python provides APIs to consume experiments, experiment runs,
experiment run parameters, metrics, and artifacts.
Vertex AI Experiments, along with
Vertex ML Metadata , provides a way
to find the artifacts tracked in an experiment. This lets you quickly view the
artifact's lineage and the artifacts consumed and produced by steps in a run.
Scope of support
Vertex AI Experiments supports development of models using
Vertex AI custom training, Vertex AI Workbench
notebooks, Notebooks, and all Python ML Frameworks across most ML Frameworks.
For some ML frameworks, such as TensorFlow, Vertex AI Experiments
provides deep integrations into the framework that makes the user experience
automagical. For other ML frameworks, Vertex AI Experiments provides
a framework neutral Vertex AI SDK for Python that you can use.
(see: Prebuilt containers for
TensorFlow, scikit-learn, PyTorch, XGBoost).
Data models and concepts
Vertex AI Experiments is a context
in Vertex ML Metadata where an experiment
can contain n experiment runs in addition to n pipeline runs. An experiment
run consists of parameters, summary metrics, time series metrics, and
PipelineJob , Artifact ,
and Execution Vertex AI resources.
Vertex AI TensorBoard , a
managed version of open source TensorBoard, is used for time-series metrics
storage. Executions and artifacts of a pipeline run are viewable
in the Google Cloud console .
Vertex AI Experiments terms
Experiment, experiment run, and pipeline run
experiment
An experiment is a context that can contain a set of n experiment runs in addition to pipeline runs where a user can investigate, as a group, different configurations such as input artifacts or hyperparameters.
See Create an experiment .
experiment run
A specific, trackable execution within a Vertex AI Experiment, which logs inputs (like algorithm, parameters, and datasets) and outputs (like models, checkpoints, and metrics) to monitor and compare ML development iterations. For more information, see Create and manage experiment runs .
See Create and manage experiment runs .
pipeline run
One or more Vertex PipelineJobs can be associated with an experiment where each PipelineJob is represented as a single run. In this context, the parameters of the run are inferred by the parameters of the PipelineJob. The metrics are inferred from the system.Metric artifacts produced by that PipelineJob. The artifacts of the run are inferred from artifacts produced by that PipelineJob.
One or more Vertex AI PipelineJob resource
can be associated with an ExperimentRun resource.
In this context, the parameters, metrics, and artifacts are not inferred.
See Associate a pipeline with an experiment .
Parameters and metrics
See Log parameters .
summary metrics
Summary metrics are a single value for each metric key in an experiment run. For example, the test accuracy of an experiment is the accuracy calculated against a test dataset at the end of training that can be captured as a single value summary metric.
See Log summary metrics .
time series metrics
Time series metrics are longitudinal metric values where each value represents a step in the training routine portion of a run. Time series metrics are stored in Vertex AI TensorBoard. Vertex AI Experiments stores a reference to the Vertex TensorBoard resource.
See Log time series metrics .
Resource types
pipeline job
A pipeline job or a pipeline run corresponds to the PipelineJob resource in the Vertex AI API. It's an execution instance of your ML pipeline definition, which is defined as a set of ML tasks interconnected by input-output dependencies.
artifact
An artifact is a discrete entity or piece of data produced and consumed by a machine learning workflow. Examples of artifacts include datasets, models, input files, and training logs.
Vertex AI Experiments lets you use a schema to define the type of
artifact. For example, supported schema types include system.Dataset ,
system.Model , and system.Artifact . For more information, see
System schemas .
Notebook tutorial
Get started with Vertex AI Experiments
What's next
Set up to get started with Vertex AI Experiments
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
