---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:44:19.054Z"
product_name: "Cloud Healthcare API"
product_slug: "cloud-healthcare-api"
feature_name: "DICOM RetrieveBulkdata endpoint"
feature_slug: "dicom-retrievebulkdata-endpoint"
latest_feature_date: "2023-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb"
  - "https://docs.cloud.google.com/healthcare-api/docs/dicom"
  - "https://docs.cloud.google.com/healthcare-api/docs/reference/rest"
keywords:
  - "dicom"
  - "retrievebulkdata"
  - "endpoint"
  - "healthcare"
  - "adds"
  - "preview"
  - "enabling"
  - "retrievemetadata"
---

# DICOM RetrieveBulkdata endpoint

Product: Cloud Healthcare API
Coverage: MEDIUM

## Step 02 Summary

Cloud Healthcare API adds the DICOM RetrieveBulkdata endpoint in Preview, enabling RetrieveMetadata to return BulkDataURIs for bulkdata tags.

## Extended Definition

Cloud Healthcare API adds the DICOM RetrieveBulkdata endpoint in Preview, enabling RetrieveMetadata to return BulkDataURIs for bulkdata tags.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- [https://docs.cloud.google.com/healthcare-api/docs/reference/rest](https://docs.cloud.google.com/healthcare-api/docs/reference/rest)

## Supporting Pages

### "Using the DICOMweb standard \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb](https://docs.cloud.google.com/healthcare-api/docs/how-tos/dicomweb)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AuthorizedSession ( scoped credentials ) URL to the Cloud Healthcare API endpoint and version base url = "https://healthcare.googleapis.com/v1" TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the parent dataset's ID dicom store id = 'my-dicom-store' # replace with the DICOM store ID study uid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0' # replace with the study UID series uid = '2.24.52329571877967561426579904912379710633' # replace with the series UID instance uid = '1.3.6.2.4.2.14619.5.2.1.6280.6001.129311971280445372188125744148' # replace with the instance UID url = f " { base url } /projects/ { project id } /locations/ { location } " dicom store path = " {} /datasets/ {} /dicomStores/ {} " . format ( url , dataset id , dicom store id ) dicomweb path = " {} /dicomWeb/studies/ {} /series/ {} /instances/ {} " . format ( dicom store path , study uid , series uid , instance uid ) file name = "instance.dcm" Set the required Accept header on the request headers = { "Accept" : "application/dicom; transfer-syntax= " } response = session . get ( dicomweb path , headers = headers ) response . raise for status () with open ( file name , "wb" ) as f : f . write ( response . content ) print ( "Retrieved DICOM instance and saved to {} in current directory" . format ( file name ) ) return response Retrieve consumer image formats The following samples show how to retrieve a consumer imaging format like JPEG or PNG using the Cloud Healthcare API implementation of Rendered Resources .
- AuthorizedSession ( scoped credentials ) URL to the Cloud Healthcare API endpoint and version base url = "https://healthcare.googleapis.com/v1" TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the parent dataset's ID dicom store id = 'my-dicom-store' # replace with the DICOM store ID study uid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0' # replace with the study UID series uid = '2.24.52329571877967561426579904912379710633' # replace with the series UID instance uid = '1.3.6.2.4.2.14619.5.2.1.6280.6001.129311971280445372188125744148' # replace with the instance UID url = f " { base url } /projects/ { project id } /locations/ { location } " dicom store path = " {} /datasets/ {} /dicomStores/ {} " . format ( url , dataset id , dicom store id ) dicomweb path = " {} /dicomWeb/studies/ {} /series/ {} /instances/ {} /rendered" . format ( dicom store path , study uid , series uid , instance uid ) file name = "rendered image.png" Sets the required Accept header on the request for a PNG image headers = { "Accept" : "image/png" } response = session . get ( dicomweb path , headers = headers ) response . raise for status () with open ( file name , "wb" ) as f : f . write ( response . content ) print ( "Retrieved rendered image and saved to {} in current directory" . format ( file name ) ) return response Retrieve metadata You can retrieve the metadata for all instances in a studies or series.
- AuthorizedSession ( scoped credentials ) URL to the Cloud Healthcare API endpoint and version base url = "https://healthcare.googleapis.com/v1" TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the parent dataset's ID dicom store id = 'my-dicom-store' # replace with the DICOM store ID dcm file = 'dicom000 0001.dcm' # replace with a DICOM file url = f " { base url } /projects/ { project id } /locations/ { location } " dicomweb path = " {} /datasets/ {} /dicomStores/ {} /dicomWeb/studies" . format ( url , dataset id , dicom store id ) with open ( dcm file , "rb" ) as dcm : dcm content = dcm . read () Sets required "application/dicom" header on the request headers = { "Content-Type" : "application/dicom" } response = session . post ( dicomweb path , data = dcm content , headers = headers ) response . raise for status () print ( "Stored DICOM instance:" ) print ( response . text ) return response Store a DICOM study or series using a multipart message The following samples show how to store a DICOM study or series, consisting of multiple instances, using a multipart message.
- AuthorizedSession ( scoped credentials ) URL to the Cloud Healthcare API endpoint and version base url = "https://healthcare.googleapis.com/v1" TODO(developer): Uncomment these lines and replace with your values. project id = 'my-project' # replace with your GCP project ID location = 'us-central1' # replace with the parent dataset's location dataset id = 'my-dataset' # replace with the parent dataset's ID dicom store id = 'my-dicom-store' # replace with the DICOM store ID study uid = '1.3.6.1.4.1.5062.55.1.227' # replace with the study UID url = f " { base url } /projects/ { project id } /locations/ { location } " dicomweb path = " {} /datasets/ {} /dicomStores/ {} /dicomWeb/studies/ {} " . format ( url , dataset id , dicom store id , study uid ) When specifying the output file, use an extension like ".multipart." Then, parse the downloaded multipart file to get each individual DICOM file. file name = "study.multipart" response = session . get ( dicomweb path ) response . raise for status () with open ( file name , "wb" ) as f : f . write ( response . content ) print ( f "Retrieved study and saved to { file name } in current directory" ) return response Retrieve an instance The following samples show how to retrieve an instance.

### Cloud Healthcare API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/healthcare-api/docs/reference/rest](https://docs.cloud.google.com/healthcare-api/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.locations.datasets.dicomStores.studies Methods delete DELETE /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ } DeleteStudy deletes all instances within the given study using a long running operation. retrieveMetadata GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /metadata} RetrieveStudyMetadata returns instance associated with the given study presented as metadata. retrieveStudy GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ } RetrieveStudy returns all instances within the given study. searchForInstances GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /instances} SearchForInstances returns a list of matching instances. searchForSeries GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /series} SearchForSeries returns a list of matching series. storeInstances POST /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ } StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). updateInstances PUT /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ } UpdateInstances updates DICOM instances associated with study instance unique identifiers (SUID). updateMetadata PATCH /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ }/metadata UpdateStudyMetadata modifies the metadata of all instances in the given study.
- REST Resource: v1beta1.projects.locations.datasets.dicomStores.studies.series.instances Methods delete DELETE /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /series/ /instances/ } DeleteInstance deletes an instance associated with the given study, series, and SOP Instance UID. retrieveInstance GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /series/ /instances/ } RetrieveInstance returns instance associated with the given study, series, and SOP Instance UID. retrieveMetadata GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /series/ /instances/ /metadata} RetrieveInstanceMetadata returns instance associated with the given study, series, and SOP Instance UID presented as metadata. retrieveRendered GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /series/ /instances/ /rendered} RetrieveRenderedInstance returns instance associated with the given study, series, and SOP Instance UID in an acceptable Rendered Media Type. updateMetadata PATCH /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /series/ /instances/ }/metadata UpdateInstanceMetadata modifies the metadata of a single instance.
- REST Resource: v1.projects.locations.datasets.dicomStores.studies Methods delete DELETE /v1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ } DeleteStudy deletes all instances within the given study. retrieveMetadata GET /v1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /metadata} RetrieveStudyMetadata returns instance associated with the given study presented as metadata. retrieveStudy GET /v1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ } RetrieveStudy returns all instances within the given study. searchForInstances GET /v1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /instances} SearchForInstances returns a list of matching instances. searchForSeries GET /v1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /series} SearchForSeries returns a list of matching series. storeInstances POST /v1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ } StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID).
- REST Resource: v1beta1.projects.locations.datasets.dicomStores.studies.series Methods delete DELETE /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /series/ } DeleteSeries deletes all instances within the given study and series using a long running operation. retrieveMetadata GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /series/ /metadata} RetrieveSeriesMetadata returns instance associated with the given study and series, presented as metadata. retrieveSeries GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /series/ } RetrieveSeries returns all instances within the given study and series. searchForInstances GET /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /series/ /instances} SearchForInstances returns a list of matching instances. updateMetadata PATCH /v1beta1/{parent=projects/ /locations/ /datasets/ /dicomStores/ }/dicomWeb/{dicomWebPath=studies/ /series/ }/metadata UpdateSeriesMetadata modifies the metadata of all instances in the given series.

### "DICOM conformance statement \_|\_ Cloud Healthcare API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/healthcare-api/docs/dicom](https://docs.cloud.google.com/healthcare-api/docs/dicom)
- Source ID: `site-api-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Metadata resources The following Accept Headers are supported: application/dicom+json (default) multipart/related; type=application/dicom+xml Tags that are encoded as InlineBinary elements will be encoded using little-endian byte ordering, as the transfer syntax parameter is not supported on endpoints requesting metadata resources.
- Home Documentation Industry solutions Cloud Healthcare API Reference Send feedback DICOM conformance statement Stay organized with collections Save and categorize content based on your preferences.
- DICOM Dictionary Version The Cloud Healthcare API uses the DICOM 2025b dictionary for parsing tags of ingested instances and for generating column names when exporting to BigQuery.
- DICOM stores within the Cloud Healthcare API support a subset of the RESTful web services specified in the DICOM PS3.18 - Web Services standard (commonly referred to as DICOMweb).

