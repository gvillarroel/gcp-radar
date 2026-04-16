---
title: "DICOM \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/concepts/dicom
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs/how-tos/fhir-search
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/concepts/dicom
  title: "DICOM \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation"
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
DICOM
Stay organized with collections
Save and categorize content based on your preferences.
Digital Imaging and Communications in Medicine (DICOM) is an international
standard used for medical images such as X-rays, MRIs, ultrasounds, and other
medical imaging modalities.
The Cloud Healthcare API provides operations for reading DICOM instances,
studies, and series that are consistent with the DICOMweb standard, and
supports the DICOM DIMSE C-STORE operation using an open source adapter .
See the DICOM documentation
for more details on DICOM.
DICOM stores
A DICOM store is a data store in the Cloud Healthcare API that holds all
of your DICOM instances. DICOM stores exist inside datasets.
The DicomStore
resource provides a representation of a DICOM store's
attributes. For each of your DICOM stores, you can choose whether to publish changes to the DICOM store (such as the ingestion of a new instance into the store) to a Pub/Sub topic.
DICOMweb conformance
See the DICOM conformance statement for information
on the DICOMweb implementation in the Cloud Healthcare API.
The DICOMweb implementation in the Cloud Healthcare API only
supports REST, not RPC.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
