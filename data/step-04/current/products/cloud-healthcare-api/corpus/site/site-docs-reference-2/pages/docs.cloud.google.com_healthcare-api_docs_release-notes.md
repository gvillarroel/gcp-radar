---
title: "Cloud Healthcare API release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/release-notes
  title: "Cloud Healthcare API release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Cloud Healthcare API
Resources
Send feedback
Cloud Healthcare API release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Cloud Healthcare API. Check this page for
announcements about new or updated features, bug fixes, known issues, and
deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
February 08, 2026
v1 & v1beta1 & v1alpha2
Feature
General availability: The FHIR bulk-delete operation is available.
You can use this long-running operation to delete or purge multiple FHIR resources
based on filters like resource type and last updated time. This feature supports
deleting current versions, historical versions, or both. For more information, see
Bulk-deleting FHIR resources .
December 22, 2025
v1beta1 & v1alpha2 & v1
Feature
The Cloud Healthcare API now supports transcoding DICOM data with the
following transfer syntaxes:
1.2.840.10008.1.2.1.99 (Deflated Explicit VR Little Endian)
1.2.840.10008.1.2.4.51 (JPEG Extended)
1.2.840.10008.1.2.4.80 (JPEG-LS Lossless)
1.2.840.10008.1.2.4.81 (JPEG-LS Near-Lossless)
1.2.840.10008.1.2.4.110 (JPEG XL Lossless)
1.2.840.10008.1.2.4.111 (JPEG XL JPEG Recompression)
1.2.840.10008.1.2.4.112 (JPEG XL)
1.2.840.10008.1.2.4.201 (HTJ2K Lossless Only)
1.2.840.10008.1.2.4.202 (HTJ2K Lossless Only with RPCL Options)
1.2.840.10008.1.2.4.203 (HTJ2K)
1.2.840.10008.1.2.8.1 (Deflated Image Frame Compression)
December 17, 2025
v1beta1 & v1alpha2 & v1
Feature
The RetrieveRenderedFrames now supports multipart requests to retrieve multiple rendered frames in a single API call.
December 02, 2025
v1beta1 & v1alpha2
Feature
DICOM streaming to BigQuery using the new JSON schema now supports Change Data Capture
For more information on enabling change data capture, see the
BigQueryDestination
field.
v1beta1 & v1alpha2 & v1
Feature
DICOM exports to BigQuery now support a new JSON schema option
DICOM streaming to BigQuery now supports a new JSON schema option
The new JSON schema option contains fewer columns and works more gracefully with the
33,000 public tags defined in the DICOM standard. For more information on the new schema,
see the BigQueryDestination
field.
November 03, 2025
v1 & v1beta1 & v1alpha2
Feature
VersionedStorageSizeBytes was added to the output of
GetFhirStoreMetrics .
October 25, 2025
v1 & v1beta1
Feature
The Cloud Healthcare API is now available in the me-central1 (Qatar) and me-central2 (KSA) regions.
October 23, 2025
v1beta1 & v1alpha2 & v1
Feature
A new application has been added to the Cloud Console under "Healthcare",
called "DICOM Studio"
This new application provides a web interface for exploring DICOM Stores
in the Cloud Healthcare API similar to "FHIR Viewer".
Search and find studies, series, and instances in any DICOM Store using our DICOM Web API
View studies, series and instance metadata
Edit studies, series and instance metadata
Perform CRUD operations (Delete) on studies, series and instances
View studies, series and instance images via a transcoded image preview
September 12, 2025
v1beta1 & v1alpha2 & v1
Feature
Accept-Encoding compression headers on DICOM frame requests that contain
uncompressed pixel data (as defined by the DICOM transfer syntax) are now
supported and can return compressed results
Note : For very large downlinks and very large files where downlink vastly
outpaces compression speed, latency may slightly increase. Compression can be
disabled by not including the header in these cases.
August 26, 2025
v1beta1 & v1alpha2
Feature
Preview: Cloud Healthcare API has launched DICOM Updates and Patches. This
allows customers to update their DICOM data in-place. For more information, see
Update and patch DICOM studies, series, and instances .
May 27, 2025
v1beta1 & v1 & v1alpha2
Deprecated
The Healthcare Natural Language API is deprecated and will be shut down
on May 27, 2026. For more information, see
Deprecations .
May 08, 2025
v1beta1 & v1 & v1alpha2
Change
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
May 01, 2025
v1beta1 & v1 & v1alpha2
Change
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
April 21, 2025
v1beta1 & v1 & v1alpha2
Change
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
v1beta1 & v1 & v1alpha2
Feature
DICOM files have a limit of 4 GB per tag. This limit does not apply for values with undefined length. For more information, see Resource limits .
April 04, 2025
v1beta1 & v1 & v1alpha2
Change
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
March 26, 2025
v1beta1 & v1 & v1alpha2
Change
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
March 20, 2025
v1beta1 & v1 & v1alpha2
Change
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
March 05, 2025
v1beta1 & v1 & v1alpha2
Change
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
February 20, 2025
v1beta1 & v1 & v1alpha2
Announcement
A new release is available. This release may include some or all of the
following: general performance improvements, bug fixes, and updates to the
API reference documentation.
v1beta1 & v1 & v1alpha2
Feature
The DICOM "viewport" URL parameter is supported when rendering DICOM instances and frames.
For more information, see:
Pricing: Request volume pricing
Quota: Resource limits
February 19, 2025
v1beta1 & v1 & v1alpha2
Feature
The Cloud Healthcare API offers single-region support in the australia-southeast2 (Melbourne, Australia) region.
February 11, 2025
v1beta1 & v1 & v1alpha2
Announcement
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
February 03, 2025
v1beta1 & v1 & v1alpha2
Announcement
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
January 21, 2025
v1beta1 & v1 & v1alpha2
Announcement
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
December 11, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the
following: general performance improvements, bug fixes, and updates to the
API reference documentation.
November 28, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the
following: general performance improvements, bug fixes, and updates to the
API reference documentation.
November 13, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the
following: general performance improvements, bug fixes, and updates to the
API reference documentation.
October 25, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
October 17, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the
following: general performance improvements, bug fixes, and updates to the
API reference documentation.
October 04, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the
following: general performance improvements, bug fixes, and updates to the
API reference documentation.
September 23, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the
following: general performance improvements, bug fixes, and updates to the
API reference documentation.
v1beta1 & v1 & v1alpha2
Feature
The DICOMweb API supports floating point pixel data and DICOM images with a Bits Allocated value of 1. For more information, see the DICOM conformance statement .
September 05, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
August 20, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the
following: general performance improvements, bug fixes, and updates to the
API reference documentation.
v1beta1
Feature
Getting all FHIR Encounter resource details is available in Preview .
August 01, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the
following: general performance improvements, bug fixes, and updates to the
API reference documentation.
July 16, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
July 09, 2024
v1beta1 & v1
Feature
Using customer-managed encryption keys (CMEK) to encrypt Cloud Healthcare API datasets is generally available ( GA ) and available in Preview . For more information, see Enable customer-managed encryption keys (CMEK) for Cloud Healthcare API datasets .
July 02, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the
following: general performance improvements, bug fixes, and updates to the
API reference documentation.
June 19, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
June 11, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
May 16, 2024
v1alpha2 & v1beta1 & v1
Feature
The fhir_read_ops , fhir_write_ops , and fhir_search_ops quota metrics are generally available ( GA ) and have replaced the legacy fhir_ops quota metric. For more information, see FHIR quotas .
May 14, 2024
v1beta1
Feature
Importing and exporting FHIR resources, including their historical versions, as history bundles using Cloud Storage is available in Preview .
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
May 07, 2024
v1beta1 & v1
Feature
Using a filter when exporting HL7v2 messages to Cloud Storage is generally available ( GA ) and available in Preview .
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
April 26, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
April 04, 2024
v1alpha2 & v1beta1 & v1
Announcement
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
March 21, 2024
v1beta1 & v1alpha2 & v1
Announcement
A new release is available. This release may include some or all of the
following: general performance improvements, bug fixes, and updates to the
API reference documentation.
March 20, 2024
v1beta1
Feature
Explaining data access using FHIR is available in Preview .
v1beta1
Feature
The Healthcare Natural Language API supports the following entity mention types in Preview :
Oncology
Social determinants of health (SDOH)
Protected health information (PHI)
February 27, 2024
v1 & v1beta1 & v1alpha2
Announcement
A new release is available. This release may include some or all of the following: general performance improvements, bug fixes, and updates to the API reference documentation.
February 15, 2024
v1 & v1alpha2 & v1beta1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
February 07, 2024
v1 & v1beta1 & v1alpha2
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
February 01, 2024
v1
Feature
You can use the Google Cloud console to view HL7v2 store metrics .
v1
Feature
You can use the Google Cloud console to view DICOM store metrics .
January 24, 2024
v1beta1 & v1alpha2 & v1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
January 12, 2024
v1beta1 & v1alpha2 & v1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
January 10, 2024
v1
Feature
Recover FHIR resources with point-in-time recovery (PITR) is generally available (GA) .
January 08, 2024
v1
Feature
You can use the Google Cloud console to enable FHIR implementation guides .
December 20, 2023
v1beta1 & v1alpha2
Feature
DICOM RetrieveBulkdata endpoint is available in Preview . This allows RetrieveMetadata to return BulkDataURIs for bulkdata tags. For more information, see Retrieve bulkdata .
December 18, 2023
v1alpha2 & v1 & v1beta1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
December 08, 2023
v1beta1 & v1alpha2 & v1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
November 15, 2023
v1beta1 & v1 & v1alpha2
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
November 06, 2023
v1beta1
Feature
Configuring Blob storage settings is now available in Preview . With this feature you can do the following:
Specify a storage class to import DICOM objects
Specify a storage class to store DICOM instances
Change DICOM storage classes
November 03, 2023
v1beta1
Feature
Connecting to applications using SMART on FHIR in the Cloud Healthcare API is available in Preview .
November 02, 2023
v1beta1 & v1alpha2 & v1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
October 26, 2023
v1beta1
Feature
Recover FHIR resources with point-in-time recovery (PITR) is available in Preview .
October 23, 2023
v1beta1 & v1 & v1alpha2
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
October 10, 2023
v1beta1 & v1 & v1alpha2
Change
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
October 06, 2023
v1alpha2 & v1 & v1beta1
Feature
The Cloud Healthcare API offers multi-region support in the Europe (eu) region.
October 02, 2023
v1beta1 & v1 & v1alpha2
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
September 25, 2023
v1beta1
Feature
FHIR access control with admin cascading policy is available in Preview .
September 20, 2023
v1beta1 & v1 & v1alpha2
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
September 12, 2023
v1beta1 & v1 & v1alpha2
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
August 22, 2023
v1beta1 & v1 & v1alpha2
Change
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
August 18, 2023
v1
Feature
Pub/Sub notifications for DICOM store bulk import is generally available ( GA ).
August 14, 2023
v1
Feature
The following conditional FHIR methods are generally available ( GA ) using the FHIR identifier search parameter:
The fhir.create FHIR standard conditional create
fhir.conditionalDelete
fhir.conditionalPatch
fhir.conditionalUpdate
August 11, 2023
v1 & v1beta1 & v1alpha2
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
July 31, 2023
v1 & v1beta1
Feature
You can extract the Healthcare Natural Language API entities as a FHIR R4 bundle , as an additional output format, when using the nlp.analyzeEntities method.
July 27, 2023
v1 & v1alpha2 & v1beta1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
July 25, 2023
v1alpha2
Feature
FHIR admin consent for FHIR access control is available in Preview .
July 19, 2023
v1 & v1beta1 & v1alpha2
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
July 07, 2023
v1
Feature
Streaming DICOM metadata to BigQuery is generally available (GA) .
July 06, 2023
v1 & v1beta1 & v1alpha2
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
June 26, 2023
v1alpha2
Change
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
May 31, 2023
v1alpha2 & v1 & v1beta1
Announcement
A release was made. Updates may include general performance improvements,
bug fixes, and updates to the API reference documentation.
May 30, 2023
v1
Deprecated
Using the notificationConfig object on a FHIR store is deprecated. Use the notificationConfigs object instead.
v1
Announcement
Pub/Sub notifications containing FHIR data is generally available ( GA ).
May 25, 2023
v1
Announcement
Exporting and streaming FHIR data to partitioned tables in BigQuery is generally available ( GA ).
May 24, 2023
v1alpha2 & v1 & v1beta1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
May 16, 2023
v1alpha2 & v1 & v1beta1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
May 08, 2023
v1alpha2 & v1beta1 & v1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
April 27, 2023
v1alpha2 & v1beta1 & v1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
April 21, 2023
v1alpha2 & v1beta1 & v1
Feature
The Cloud Healthcare API offers single-region support in the northamerica-northeast2 (Toronto, Canada) region.
March 29, 2023
v1beta1 & v1alpha2 & v1
Change
FHIR search results are limited by the response size. For more information, see Pagination and sorting and Including additional resources in search results .
March 28, 2023
v1alpha2 & v1beta1 & v1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
March 27, 2023
v1beta1 & v1alpha2 & v1
Feature
The Cloud Healthcare API offers single-region support in the me-west1 (Tel Aviv, Israel) region.
March 21, 2023
v1
Announcement
Viewing FHIR store metrics is generally available (GA) .
March 16, 2023
v1beta1 & v1alpha2 & v1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
March 06, 2023
v1beta1 & v1 & v1alpha2
Announcement
A release was made. Updates may include general performance improvements,
bug fixes, and updates to the API reference documentation.
February 20, 2023
v1beta1 & v1alpha2 & v1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
February 13, 2023
v1beta1 & v1alpha2 & v1
Change
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
February 01, 2023
v1beta1 & v1 & v1alpha2
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
December 19, 2022
v1alpha2 & v1beta1 & v1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
December 08, 2022
v1alpha2 & v1beta1 & v1
Announcement
A release was made. Updates may include general performance improvements,
bug fixes, and updates to the API reference documentation.
November 08, 2022
v1alpha2 & v1beta1 & v1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
v1
Feature
The V3 HL7v2 store parser version is generally available ( GA ).
November 01, 2022
v1alpha2 & v1beta1 & v1
Announcement
A release was made. Updates may include general performance improvements,
bug fixes, and updates to the API reference documentation.
October 12, 2022
v1alpha2 & v1beta1 & v1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
September 30, 2022
v1 & v1alpha2 & v1beta1
Feature
The Cloud Healthcare API offers single-region support in the asia-east1 (Taiwan) and the asia-northeast2 (Osaka, Japan) regions.
September 29, 2022
v1 & v1alpha2 & v1beta1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
September 23, 2022
v1 & v1beta1
Feature
When you export DICOM metadata to BigQuery, the generated BigQuery table now contains two new columns, and contains metadata identifying if the DICOM instance in the DICOM store was deleted. For more information, see LastUpdated and Type columns .
September 08, 2022
v1
Announcement
A demo for the Healthcare Natural Language API is now available. For more information, see Try the Healthcare Natural Language API .
August 26, 2022
v1 & v1alpha2 & v1beta1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
August 19, 2022
v1 & v1beta1 & v1alpha2
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
v1alpha2
Feature
FHIR access control is available in Preview .
August 03, 2022
v1 & v1alpha2 & v1beta1
Announcement
A release was made. Updates may include general performance improvements,
bug fixes, and updates to the API reference documentation.
July 26, 2022
v1 & v1alpha2 & v1beta1
Announcement
A release was made. Updates may include general performance improvements,
bug fixes, and updates to the API reference documentation.
June 28, 2022
v1 & v1alpha2 & v1beta1
Feature
The Cloud Healthcare API offers single-region support in the asia-southeast2 (Jakarta, Indonesia) region.
June 27, 2022
v1 & v1alpha2 & v1beta1
Feature
Improved performance when searching for large FHIR resources in the FHIR viewer.
June 21, 2022
v1 & v1alpha2 & v1beta1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
June 15, 2022
v1 & v1alpha2 & v1beta1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
v1 & v1alpha2 & v1beta1
Feature
Added the complexDataTypeReferenceParsing field to the FHIR store resource, which lets you parse references within complex FHIR data types, such as FHIR extensions.
June 01, 2022
v1 & v1beta1
Change
De-identification operations are now billed progressively as the work
completes. An operation that does not complete might still incur billing for the
work that was completed successfully.
v1beta1 & v1alpha2
Feature
When a FHIR resource is modified, the full contents of the FHIR resource can be sent in a Pub/Sub notification. For more information, see FHIR notifications containing FHIR data .
May 31, 2022
v1 & v1alpha2 & v1beta1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
May 24, 2022
v1 & v1alpha2 & v1beta1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
May 16, 2022
v1 & v1alpha2 & v1beta1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
May 12, 2022
v1 & v1beta1
Change
The Healthcare Natural Language API is now available in the europe-west2 location.
May 11, 2022
v1beta1 & v1
Change
The following methods now look up references to resource versions and return them if they exist:
fhir.search with an _include parameter
fhir.Patient-everything
May 03, 2022
v1alpha2 & v1 & v1beta1
Change
The Healthcare Natural Language API is available in the following locations:
asia-south1
europe-west4
us-central1
April 29, 2022
v1 & v1beta1 & v1alpha2
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
April 22, 2022
v1 & v1alpha2 & v1beta1
Deprecated
Performing a FHIR search with the _content parameter and without specifying a FHIR resource type will be deprecated on May 23, 2022. You must specify a FHIR resource type when searching with the _content parameter. See Text search for more information.
April 14, 2022
v1 & v1beta1
Fixed
Fixed an issue with FHIR base profile validation when data is imported from Google Cloud Storage.
v1 & v1beta1
Announcement
A release was made. Updates may include general performance improvements,
bug fixes, and updates to the API reference documentation.
April 01, 2022
v1beta1
Feature
You can now specify PATCH requests in a FHIR bundle. This feature is available in Preview . See Executing a PATCH request in a FHIR bundle for more information.
March 31, 2022
v1
Feature
The Cloud Healthcare API offers single-region support in the us-west1 (Oregon) region.
v1
Feature
The Cloud Healthcare API offers single-region support in the us-east1 (South Carolina) region.
v1
Feature
The Cloud Healthcare API offers single-region support in the us-west3 (Salt Lake City) region.
March 28, 2022
v1 & v1alpha2 & v1beta1
Announcement
A release was made. Updates may include general performance improvements, bug fixes, and updates to the API reference documentation.
March 09, 2022
v1
Feature
The _type and _since parameters are available for the fhirStores.export method. You can use these parameters to filter resources from exporting. This increases the speed of the export process and eliminates unwanted export data.
February 22, 2022
v1beta1
Feature
You can now stream and export FHIR resources to BigQuery using the FHIR analytics schema with support for repeated extension columns and contained resources as JSON strings.
January 28, 2022
v1
Feature
The Healthcare Natural Language API now uses Vertex AI to extract medical insights from medical text. A new model is now used for healthcare-specific entity extraction.
January 12, 2022
v1
Feature
It is now possible to validate a FHIR resource for a specific
profile or for all profiles defined for a FHIR store to ensure that your FHIR resource conforms to one more profiles.
January 10, 2022
v1alpha2
Feature
It is now possible to connect multiple FHIR stores within a dataset using federation. FHIR stores within a federated dataset are separate stores with separate access control and configuration, but FHIR references can refer across store boundaries with all the functionality normally available for references within the same store
November 04, 2021
v1
Feature
It is now possible to determine the base resource validation level using the projects.locations.datasets.fhirStores.patch method.
October 06, 2021
v1
Announcement
Importing and exporting HL7v2 messages using Google Cloud Storage is generally available ( GA ).
September 08, 2021
v1
Announcement
The Healthcare Natural Language API is generally available ( GA ).
August 18, 2021
v1
Feature
An interactive version of the Cloud Healthcare API quickstart is now available in the Cloud Console.
July 27, 2021
v1beta1
Announcement
Creating custom FHIR searches is available in public preview .
July 06, 2021
v1
Feature
The Cloud Healthcare API offers single-region support in the europe-west3 (Frankfurt) region.
v1
Feature
The Cloud Healthcare API offers single-region support in the asia-south1 (Mumbai) region.
v1
Feature
The Cloud Healthcare API offers single-region support in the asia-northeast3 (Seoul) region.
May 04, 2021
v1
Change
The defaultSearchHandlingStrict field in the projects.locations.datasets.fhirStores.FhirStore resource is now available in the v1 version of the Cloud Healthcare API.
April 23, 2021
v1
Feature
The reference patterns document provides sample code and technical reference guides for common Cloud Healthcare API use cases.
April 20, 2021
v1
Change
Resource indexing will now complete before the service sends asynchronous notifications such as Pub/Sub notifications. This ensures that services receiving notifications through Pub/Sub can assume that the resource is searchable when the notification is received.
February 16, 2021
v1alpha2
Announcement
SMART (Substitutable Medical Applications, Reusable Technologies) on FHIR v1.1.0 data standard to access data in FHIR stores in the Cloud Healthcare API is available in Preview .
February 11, 2021
v1
Feature
It is now possible to view the details of in-process long-running operations (LRO) from within the Healthcare Browser in the Cloud Console.
February 09, 2021
v1
Feature
It is now possible set the value of the writeDisposition enum when exporting FHIR resources.
February 08, 2021
v1beta1
Feature
The Cloud Healthcare API now supports getting HL7v2 messages in bulk. See Retrieving HL7v2 messages in bulk .
February 04, 2021
v1
Feature
The Quickstart using curl or Windows PowerShell has been updated with additional information on storing and viewing DICOM, FHIR, and HL7v2 data.
January 29, 2021
v1
Feature
The Cloud Healthcare API offers single-region support in the us-east4 (North Virginia) region.
November 26, 2020
v1
Feature
It is now possible to convert Clinical Document Architecture (CDA) XML files to JSON using the new XmlToJson tool .
November 05, 2020
v1
Feature
The Cloud Healthcare API offers single-region support in the europe-west6 (Zurich, Switzerland) region.
October 12, 2020
v1beta1
Feature
You can use the WriteDisposition enum to determine whether to overwrite or append to an existing BigQuery table when calling the following methods:
projects.locations.datasets.dicomStores.export
projects.locations.datasets.fhirStores.export
projects.locations.datasets.annotationStores.export
projects.locations.datasets.annotationStores.evaluate
October 08, 2020
v1beta1
Feature
The Consent Management API is available in beta.
October 07, 2020
v1
Feature
The Cloud Healthcare API offers single-region support in the southamerica-east1 (Osasco (São Paulo), Brazil) region.
v1
Feature
The Cloud Healthcare API offers single-region support in the australia-southeast1 (Sydney, Australia) region.
September 17, 2020
v1beta1
Feature
You can now configure a ParserVersion in an HL7v2 store, which allows you to set the version of the unschematized parser. A new parser version, V2 , has been added, which allows parsedData to include every given non-empty message field. This version parses the MSH segment starting with the MSH-1 field and is in accordance with the HL7v2 standard.
September 08, 2020
v1
Feature
Two new permissions, healthcare.locations.get and healthcare.locations.list , have been added to the IAM permissions. These permissions are checked whenever the new GetLocation and ListLocations methods are called.
August 26, 2020
v1beta1
Breaking
The v1beta1 API has begun updating to a revised version. The update will occur over the next several weeks. View Updates to the v1beta1 API for a list of changes and how to update your client code.
August 03, 2020
v1beta1
Feature
The Cloud Healthcare API now supports importing HL7v2 messages from Cloud Storage. See Importing HL7v2 messages from Cloud Storage for more information.
June 08, 2020
v1
Feature
It is now possible to de-identify data from within the Healthcare Browser in the Cloud Console.
June 02, 2020
v1
Feature
It is now possible to import DICOM data to and export DICOM data from BigQuery using the Healthcare Browser in the Cloud Console. You can also import DICOM data from Cloud Storage using the Healthcare Browser.
May 29, 2020
v1
Feature
The Cloud Healthcare API offers single-region support in the asia-east2 (Hong Kong) region.
May 26, 2020
v1
Change
Search results for DICOM studies and series might take several seconds to update after deleting an instance using instances.delete .
April 23, 2020
v1
Feature
Code samples are available for the Cloud Healthcare API v1 in Go, Java, Node.js, and Python.
April 07, 2020
v1
Feature
It is now possible to export resource changes to BigQuery each time a FHIR resource is created, updated, patched, or deleted in a FHIR store, using the new field for a store, streamConfigs .
v1
Feature
You can now configure the HL7v2 store with multiple Pub/Sub topics
and use filters to send notifications to different Pub/Sub topics.
v1
Feature
General availability release Cloud Healthcare API is generally available with release version v1.
For information on the differences between the v1beta1 release and the v1 release, see Transitioning to the v1 API .
February 13, 2020
v1beta1
Change
The messages field returned by the projects.locations.datasets.hl7V2Stores.messages.list method is deprecated. The method returns hl7_v2_messages , an array of messages . The new view input parameter specifies the fields to return. After the deprecation period ends on March 2, 2020, the method will only return hl7_v2_messages .
February 10, 2020
v1beta1
Feature
Required permissions for the FHIR store have changed. You can now grant user access as follows:
* Access to APIs no longer includes read access to the FHIR store configuration.
* Access to the search API does not require get access.
* Access to executeBundle does not give create , update , delete , or get permission.
Logging has been added for executeBundle .
v1beta1
Feature
The Cloud Healthcare API supports all major release versions of the FHIR standard. You can specify DSTU2 , STU3 , or R4 when you create a FHIR store.
October 24, 2019
v1beta1
Feature
DICOM and FHIR de-identification at the individual store level is now available in beta. De-identification using filters is also now available in beta. See the de-identification documentation for DICOM and FHIR data for more information.
September 24, 2019
v1beta1
Change
Public access to the Cloud Healthcare API v1alpha2 version has been discontinued. Access to the v1alpha2 version is now restricted to Trusted Testers. To become a Trusted Tester, complete this form .
September 16, 2019
v1beta1
Feature
The Cloud Healthcare API offers single-region support in the asia-southeast1 (Singapore) and us-west2 (Los Angeles) regions.
September 12, 2019
v1beta1
Feature
Cloud Healthcare API gcloud tool commands are now available in gcloud beta .
August 13, 2019
v1beta1
Feature
DICOM de-identification supports an additional configuration option of not automatically regenerating unique identifiers (UIDs), such as StudyInstanceUID, SeriesInstanceUID, and SOPInstanceUID as part of the operation. See the documentation for more information on when you might want to enable this option.
July 26, 2019
v1beta1
Feature
The Cloud Healthcare API offers single-region support in the asia-northeast1 (Tokyo) region.
July 15, 2019
v1beta1
Feature
The Cloud Healthcare API offers single-region support in the europe-west4 (Netherlands) region.
July 10, 2019
v1beta1
Feature
The Cloud Healthcare API offers multi-region support in the us (United States) region.
June 19, 2019
v1beta1
Feature
DICOM de-identification has improved image output quality. There is now support for lossless image output for lossless image input formats.
April 04, 2019
v1beta1
Feature
The Google Cloud Console provides a user interface to the Cloud Healthcare API. The console allows you to:
Create and manage healthcare datasets
Create and manage FHIR stores , DICOM stores , and HL7v2 stores
Manage permissions
View the status of long-running operations
v1beta1
Feature
Public beta release The Cloud Healthcare API provides a managed solution for storing and accessing healthcare data in Google Cloud Platform.
v1beta1
Feature
An expanded set of configuration options are available for de-identification operations on DICOM and FHIR data. These options provide greater control over how resources (including pixel data) are processed. For details, see De-identifying sensitive data .
v1beta1
Feature
DICOMweb has improved performance.
v1beta1
Feature
User labels on DICOM, HL7v2, and FHIR stores make it possible to filter resources and view billing charges based on label values.
v1beta1
Feature
DICOM has these conformance enhancements:
The API supports QIDO-RS result pagination, fuzzy patient-name matching, and transcoding additional DICOM transfer syntaxes, including lossless JPEG.
To avoid managing multipart headers on the client side, the API supports single-part WADO-RS and STOW-RS requests. See the DICOM conformance statement for details.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
