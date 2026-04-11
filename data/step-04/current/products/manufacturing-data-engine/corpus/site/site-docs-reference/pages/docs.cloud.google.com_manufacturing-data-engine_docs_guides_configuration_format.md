---
title: "Format \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/format
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts
source_metadata:
  url: https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/configuration/format
  title: "Format \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Manufacturing Data Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Format
This page describes the content of configuration package on
Manufacturing Data Engine (MDE)'s directories.
Starting on v1.5.0, Manufacturing Data Engine (MDE) offers a consolidated way to
apply configurations by uploading a file-based specifications contained in a
directory. This enables an atomic way to apply the MDE
configuration for a specific use-case, and it enables the author of the
configuration to look at MDE configuration holistically by
editing and checking the configuration in full in an editor like VS Code. It
also enables GitOps scenarios where the MDE configurations can
be checked-in Git and tracked for changes.
The following shows a sample configuration package structure. The package
contains an optional folder with a predefined name for each type of
configuration entity the user needs to configure:
./test-configuration-package
├── manifest.json
├── buckets
│ ├── default-record-bucket.json
│ ├── default-tag-bucket.json
│ └── second-tag-bucket.json
├── ingestion-specifications
│ └── csv-full-ingestion-specs.json
├── message-classes
│ └── message-class.json
├── metadata-instances
│ ├── cloud-natural-key.json
│ └── machine-natural-key.json
├── parsers
│ └── parser.json
├── schemas
│ ├── cdm-schema.json
│ └── generic-schema.json
├── scripts
│ └── parser-script.wstl
└── types
└── type.json
For example, to add buckets to MDE, you need to create a
subfolder called buckets , which contains the specifications of the buckets
that need to be created. If you don't want to create buckets, then there is no
need to create the subfolder.
The package has to include a special file called manifest.json that
contains the fields which determine the name of the package and its provider.
MDE uses the details in the manifest file to create the package,
and that gives you the flexibility to name the configuration package directory
with any name.
{
"name": "test-configuration-package",
"provider": "google"
}
Warning: Ensure that file and folder names within the configuration package use
only lowercase characters, numbers, hyphens (-), and underscores (_). Otherwise,
the package will return a validation error.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
