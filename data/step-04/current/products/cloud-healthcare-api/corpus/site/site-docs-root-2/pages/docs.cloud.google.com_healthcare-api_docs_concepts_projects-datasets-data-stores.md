---
title: "Projects, datasets, and data stores \_|\_ Cloud Healthcare API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/concepts/projects-datasets-data-stores
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/concepts/projects-datasets-data-stores
  title: "Projects, datasets, and data stores \_|\_ Cloud Healthcare API \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Cloud Healthcare API
Guides
Send feedback
Projects, datasets, and data stores
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the relationship between Google Cloud
projects and Cloud Healthcare API datasets and data stores.
Projects
All Cloud Healthcare API usage occurs within the context of a Google Cloud
project. A project organizes all your Google Cloud resources.
A project consists of a set of users; a set of APIs; and billing,
authentication, and monitoring settings for those APIs. So, for example,
all of your Cloud Healthcare API data and resources, along with user
permissions for accessing them, reside in a project. You can have one project,
or you can create multiple projects and use them to organize your Google Cloud
resources, including your Cloud Healthcare API data, into logical groups.
Each project that you use to develop Cloud Healthcare API solutions must
have the Cloud Healthcare API enabled .
To learn more about Google Cloud projects in general,
see Projects in the Google Cloud Overview.
Datasets and data stores
A dataset is a container in your Google Cloud project that holds
modality-specific healthcare data. Datasets contain other data stores, such
as FHIR stores, DICOM stores, and HL7v2 stores, which in turn hold their own
types of healthcare data.
A single dataset can contain one or many data stores, and those stores can
all service the same modality or different modalities as application needs
dictate. Using multiple stores in the same dataset might be appropriate in
various situations, such as:
If an application processes different types of data, such as a DICOM store used for CT scans and a FHIR store for patient data related to the CT scans.
To separate data according to its source hospital, clinic, department, and so forth.
An application can access as many datasets or stores as its requirements
dictate with no performance penalty. You can design your overall dataset
and store architecture to meet your goals for locality, partitioning,
access control, and so forth.
The following diagram shows a single Google Cloud project containing
two datasets. Each dataset contains multiple data stores, and each data store
contains healthcare data:
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
