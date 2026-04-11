---
title: "Data de-identification \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/concepts/de-identification
  title: "Data de-identification \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation"
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
Data de-identification
Stay organized with collections
Save and categorize content based on your preferences.
De-identification is the process of removing identifying information from data.
The Cloud Healthcare API detects sensitive data in
DICOM instances
and FHIR resources , such as protected
health information (PHI), and then uses a de-identification transformation to
mask, delete, or otherwise obscure the data. De-identification has multiple
uses cases, including:
When sharing health information with non-privileged parties
When creating datasets from multiple sources and analyzing them
When anonymizing data so that it can be used in machine learning models
De-identification overview
De-identification works at the following levels:
At the dataset level. De-identification occurs on all data in DICOM
stores and FHIR stores in the dataset. If a dataset
contains both DICOM instances and FHIR resources, you can de-identify all of
the instances and resources at the same time. To de-identify sensitive data at the dataset level, call the Cloud Healthcare API
datasets.deidentify
method.
At the FHIR store level. De-identification occurs on all data in a
specific FHIR store in a dataset. To de-identify sensitive data at the FHIR store level, call the Cloud Healthcare API
fhirStores.deidentify
method.
At the DICOM store level. De-identification occurs on all data in a specific
DICOM store in a dataset. To de-identify sensitive data at the DICOM store level, call the Cloud Healthcare API
dicomStores.deidentify
method.
De-identification doesn't impact the original dataset, FHIR store, DICOM store,
or the original data. Depending on how you configure the de-identification, the
operation behaves as follows:
If you are de-identifying data at the dataset level, de-identified copies
of the original data are written to a new dataset called the destination dataset .
If you are de-identifying data at the DICOM or FHIR store level, de-identified
copies of the original data are written to an existing DICOM or FHIR
store in an existing dataset. The output DICOM store and FHIR store are called
the destination DICOM store and destination FHIR store , respectively.
The source dataset, FHIR store, or DICOM store and the destination
dataset, FHIR store, or DICOM store must reside in
the same Google Cloud location. De-identifying data across
multiple Google Cloud locations is not supported.
De-identification location
When the Cloud Healthcare API de-identifies data, the data might be processed in a location that is different from where the source and destination FHIR or DICOM store resides.
After de-identification finishes, the data is stored in the same Google Cloud location as the source FHIR store or DICOM store.
To ensure data is processed in the same location as the source FHIR or DICOM store, you can specify
the useRegionalDataProcessing option in
DeidentifyConfig .
De-identifying data in the Google Cloud console
You can de-identify data for a dataset, FHIR store, or DICOM store from within the Google Cloud console. For more information see De-identifying data in the Google Cloud console (DICOM)
and De-identifying data in the Google Cloud console (FHIR) .
DICOM de-identification
A DICOM instance contains a set of key-value metadata elements (known as
tags ), and one or more images. The deidentify operation can remove specific
tags that contain sensitive data. The operation can also use automated optical
character recognition (OCR) to redact burnt-in text on images contained in
DICOM instances.
For examples of how to de-identify DICOM data, see De-identifying DICOM data .
FHIR de-identification
Each FHIR resource is a JSON-like object that contains key-value elements.
Some elements are standardized, while others are free text. You can use the
deidentify operation to achieve one of the following results:
Remove specific values in the resource
Process the arbitrary text portions to remove only the sensitive portions,
leaving the rest of the data as is
For examples of how to de-identify FHIR data, see De-identifying FHIR data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
