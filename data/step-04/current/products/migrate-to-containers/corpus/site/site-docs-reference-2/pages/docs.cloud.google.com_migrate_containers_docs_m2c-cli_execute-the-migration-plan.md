---
title: "Execute the migration \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/execute-the-migration-plan
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/architecture
source_metadata:
  url: https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/execute-the-migration-plan
  title: "Execute the migration \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Containers
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Execute the migration
This page describes how to generate the migration artifacts which you can use
to deploy your workloads to the target cluster.
Generate migration artifacts
After you've customized your migration plan, to generate the artifacts, run the
following command:
./m2c generate -i ANALYSIS_PATH -o OUTPUT_ARTIFACTS_PATH
Replace the following:
ANALYSIS_PATH : the path where you saved the analysis
output
OUTPUT_ARTIFACTS_PATH : the path where you want
to save the generated artifacts
Generate migration artifacts for WebSphere workloads
To generate migration artifacts for WebSphere workloads, in addition to the
analysis output path and the path where you want to save the generated
artifacts, you also need to specify the path to the binaryAppScanner.jar file
that you had set up when you created the migration plan .
To generate migration artifacts, run the following command:
./m2c generate \
-i ANALYSIS_PATH \
-o OUTPUT_ARTIFACTS_PATH \
--volume PATH_TO_BINARYAPPSCANNER :/binaryAppScanner.jar
Replace PATH_TO_BINARYAPPSCANNER with the
path to the binaryAppScanner.jar file. For example, if you specified /tmp
as your target directory while setting up the binaryAppScanner.jar , then it is available
at /tmp/wamt/binaryAppScanner.jar .
Review the generated artifacts
The generated migration artifacts are available in the
specified output path. Depending on your plugin and migration plan, the
generated artifacts contain one or more Dockerfiles that are used to build
container images, and one or more Kubernetes deployment specs.
Additionally, Migrate to Containers CLI generates a Skaffold configuration that you can
use to build and deploy all of the generated images in a single step.
What's next
Learn more about the migration artifacts .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
