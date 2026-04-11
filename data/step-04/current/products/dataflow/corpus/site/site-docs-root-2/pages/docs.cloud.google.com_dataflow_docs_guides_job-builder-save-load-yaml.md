---
title: "Save and load YAML job definitions with the job builder \_|\_ Cloud Dataflow\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/job-builder-save-load-yaml
  title: "Save and load YAML job definitions with the job builder \_|\_ Cloud Dataflow\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Save and load YAML job definitions with the job builder
Stay organized with collections
Save and categorize content based on your preferences.
You can save job builder jobs as Apache Beam YAML files that encapsulate the job's configuration. These YAML files can be loaded back into the job builder for reuse and further editing.
Save a pipeline
To save a pipeline to Beam YAML:
Use the job builder to create a pipeline .
Click Save YAML to open the Save YAML window.
Perform one of the following actions:
To copy the YAML to the clipboard, click
content_copy Copy .
To save to Cloud Storage, enter a Cloud Storage path and
click Save .
To download a local file, click Download .
Load a pipeline
After you save a pipeline to Beam YAML, you can load it back into job
builder. You can then use the job builder to modify or run the pipeline.
You can load Beam YAML from Cloud Storage or from text.
Load a pipeline from Cloud Storage
To load a pipeline from Cloud Storage:
Go to the Jobs page in the Google Cloud console.
Go to Jobs
Click add_box Create job from
builder .
Click Load YAML .
Click Load from Cloud Storage .
In the YAML file location box, enter the Cloud Storage location
of the YAML file, or click Browse to select the file.
Click Load .
Load a pipeline from text
To load a pipeline from text:
Go to the Jobs page in the Google Cloud console.
Go to Jobs
Click add_box Create job from
builder .
Click Load YAML .
Click Load from text .
Paste the YAML into the window.
Click Load .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
