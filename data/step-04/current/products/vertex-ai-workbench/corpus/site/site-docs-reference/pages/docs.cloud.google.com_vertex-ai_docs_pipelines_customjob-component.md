---
title: "CustomJob components \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/pipelines/customjob-component
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/reference
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/pipelines/customjob-component
  title: "CustomJob components \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Reference
Send feedback
CustomJob components
Stay organized with collections
Save and categorize content based on your preferences.
Custom training jobs let you run your custom machine
learning (ML) training code in Vertex AI.
CustomTrainingJobOp
The CustomTrainingJobOp component exposes the full functionalities of the CustomJob resource , to allow both single and distributed training using a ContainerSpec or PythonPackageSpec instance.
create_custom_training_job_from_component function
The create_custom_training_job_from_component utility
converts a given container or Python component to a component that runs a
custom job in Vertex AI. This simplifies the creation of custom training
jobs. All inputs and outputs of the supplied component will be copied over to
the constructed training job operator.
Note that this utility constructs a ClusterSpec , where the primary and all the
workers use the same specification, meaning all disk and machine
specification-related parameters will apply to all replicas. This is suitable
for use cases where, for example, you are training with
MultiWorkerMirroredStrategy or
MirroredStrategy .
This component does not support CustomJob Python package training, or
distributed training with different worker pool specs.
API reference
For component reference, see the
Google Cloud SDK reference for CustomJob components .
For Vertex AI API reference, see the CustomJob resource page.
Version history and release notes
To learn more about the version history and changes to the Google Cloud Pipeline Components SDK, see the Google Cloud Pipeline Components SDK Release Notes .
Technical support contacts
If you have any questions, reach out to
kubeflow-pipelines-components@google.com .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
