---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.036Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "DICOM tag size limit"
feature_slug: "dicom-tag-size-limit"
latest_feature_date: "2025-04-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb"
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics"
keywords:
  - "dicom"
  - "tag"
  - "size"
  - "limit"
  - "files"
  - "now"
  - "gb"
  - "per"
---

# DICOM tag size limit

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

DICOM files now support a 4 GB per-tag limit, except for values that use undefined length; DICOM files now support a 4 GB per-tag limit, except for values that use undefined length.

## Extended Definition

DICOM files now support a 4 GB per-tag limit, except for values that use undefined length; DICOM files now support a 4 GB per-tag limit, except for values that use undefined length.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)

## Supporting Pages

### "Using the DICOMweb standard \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Storing a single DICOM instance : dcmweb \ https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb \ store DCM FILE If the request is successful, the server returns a response similar to the following sample: TIMESTAMP -- DCM FILE .dcm uploaded as https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID TIMESTAMP -- INSTANCE UID TIMESTAMP -- Transferred SIZE in COUNT files Storing multiple files in parallel using wildcards : The following sample shows how to recursively store multiple DICOM files in parallel from the current working directory.
- There are more samples available in the DICOMweb CLI GitHub repository . dcmweb \ https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb \ retrieve If the request is successful, the server returns a response similar to the following and the DICOM files are written to your machine: TIMESTAMP -- Saving files into ./ TIMESTAMP -- Transferred SIZE in COUNT files Delete a study, series, or instance The Cloud Healthcare API implements a proprietary web service for deleting DICOM studies, series, and instances.
- TIMESTAMP -- Transferred SIZE in COUNT files Search for DICOM data You can search for studies, series, instances, and frames.
- To store the files in parallel, add the -m flag. dcmweb -m \ https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb \ store "./ .dcm" If the request is successful, the server returns a response similar to the following sample: TIMESTAMP -- DCM FILE 1 .dcm uploaded as https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID TIMESTAMP -- INSTANCE UID TIMESTAMP -- DCM FILE 2 .dcm uploaded as https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID TIMESTAMP -- INSTANCE UID TIMESTAMP -- DCM FILE 3 .dcm uploaded as https://healthcare.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY INSTANCE UID /series/ SERIES INSTANCE UID TIMESTAMP -- INSTANCE UID ...

### "DICOM conformance statement \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- DICOM part 10 binary files The following Content-Types are supported: multipart/related; type=application/dicom application/dicom No coercing or replacing of attributes is done by the server.
- The store transaction either accepts Part 10 DICOM binary files directly or it accepts splitting of a DICOM file into metadata (represented in JSON) and bulk data.
- See Create DICOM instances from JSON metadata and JPEG files for the associated how-to guide.
- DICOM study/series/instances The following Accept Headers are supported: multipart/related; type="application/dicom"; transfer-syntax= multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.1 (default) multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.1.99 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.50 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.51 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.57 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.70 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.80 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.81 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.90 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.91 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.110 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.111 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.112 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.201 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.202 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.4.203 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.5 multipart/related; type="application/dicom"; transfer-syntax=1.2.840.10008.1.2.8.1 Warning: The response's default transfer syntax is Little Endian Explicit.

### "View DICOM store, DICOM study, and DICOM series metrics \_|\_ Cloud Healthcare\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics](https://docs.cloud.google.com/healthcare-api/docs/dicom-store-metrics)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- You should receive a JSON response similar to the following: Response { "series": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY UID /series/ SERIES UID ", "structuredStorageSizeBytes": " STRUCTURED STORAGE BYTES ", "blobStorageSizeBytes": " BLOB STORAGE BYTES ", "instanceCount": " INSTANCE COUNT " } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID ", "studyCount": " STUDY COUNT ", "seriesCount": " SERIES COUNT ", "instanceCount": " INSTANCE COUNT ", "structuredStorageSizeBytes": " STRUCTURED STORAGE BYTES ", "blobStorageSizeBytes": " BLOB STORAGE BYTES ", } View DICOM studies metrics The following samples show how to view DICOM studies metrics.
- You should receive a JSON response similar to the following: Response { "study": "projects/ PROJECT ID /locations/ LOCATION /datasets/ DATASET ID /dicomStores/ DICOM STORE ID /dicomWeb/studies/ STUDY UID ", "seriesCount": " SERIES COUNT ", "instanceCount": " INSTANCE COUNT ", "structuredStorageSizeBytes": " STRUCTURED STORAGE BYTES ", "blobStorageSizeBytes": " BLOB STORAGE BYTES " } View DICOM series metrics The following samples show how to view DICOM series metrics.
- Storage types Several metrics show the size, in bytes, of the following data storage classes: Blob storage Unstructured DICOM data and DICOM data that uses blob bytes .

