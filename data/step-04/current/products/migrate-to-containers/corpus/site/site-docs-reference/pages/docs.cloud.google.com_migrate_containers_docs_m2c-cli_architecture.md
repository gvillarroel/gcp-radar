---
title: "Migrate to Containers CLI architecture \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/architecture
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/containers/docs/migrate-vm
source_metadata:
  url: https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/architecture
  title: "Migrate to Containers CLI architecture \_|\_ Google Cloud Documentation"
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
Migrate to Containers CLI architecture
This page provides a high-level description of how Migrate to Containers CLI
transforms your applications residing on virtual machine (VM) instances into
artifacts that you can use to deploy your application components from the
source environment to a target cluster on Google Kubernetes Engine (GKE)
or GKE Enterprise .
Migrate to Containers CLI components
Modernization using Migrate to Containers CLI spans across three steps: Transformation,
Workload deployment, and Maintenance.
Transformation -- Migrate to Containers CLI is used to transform a VM-based
application component into a container-based application component ready to
be deployed. This spans across five phases:
Copy -- Copy the file system of the target machine
to the local machine.
Analyze -- Analyze the file system to create a
migration plan.
Edit -- Edit the plan to modify the migration
outputs to fit your needs.
Generate -- Generate artifacts such as Docker files,
Docker contexts, Kubernetes deployment files and Skaffold configuration.
Migrate data -- Copy the data files into persistent volumes. This is
optional.
Workload deployment -- You can deploy Migrated container workloads on
any GKE or GKE Enterprise cluster meeting the minimum
requirements. The migration artifacts can include one or more Dockerfiles,
one or more Kubernetes deployment specs, and a Skaffold configuration file.
Maintenance -- After you migrate container workloads, you typically
perform optimization and maintenance operations. The extracted workload
content and the generated Dockerfile can be integrated in a CI/CD pipeline
for efficient image-based maintenance.
What's next
Learn about reviewing compatible OS, workloads, and Kubernetes versions .
Learn how to discover, collect, and assess VMware VMs for migration .
Learn how to migrate a VM .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
