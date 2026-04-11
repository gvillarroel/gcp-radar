---
title: "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1
  title: "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Package com.google.cloud.dataplex.v1 (1.86.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.86.0 (latest)
1.85.0
1.83.0
1.81.0
1.80.0
1.79.0
1.78.0
1.76.0
1.74.0
1.73.0
1.72.0
1.71.0
1.70.0
1.68.0
1.66.0
1.65.0
1.62.0
1.61.0
1.60.0
1.58.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.50.0
1.49.0
1.47.0
1.46.0
1.45.0
1.44.0
1.43.0
1.42.0
1.41.0
1.40.0
1.39.0
1.38.0
1.37.0
1.35.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.27.0
1.26.0
1.25.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
1.9.0
1.7.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.0
1.1.2
1.0.1
0.2.2
GitHub Repository
RPC Documentation
REST Documentation
Client Classes
Client classes are the main entry point to using a package.
They contain several variations of Java methods for each of the API's methods.
Client
Description
com. google. cloud. dataplex. v1. Business Glossary Service Client
Service Description: BusinessGlossaryService provides APIs for managing business glossary
resources for enterprise customers. The resources currently supported in Business Glossary are:
Glossary 2. GlossaryCategory 3. GlossaryTerm
com. google. cloud. dataplex. v1. Catalog Service Client
Service Description: The primary resources offered by this service are EntryGroups, EntryTypes,
AspectTypes, Entries and EntryLinks. They collectively let data administrators organize, manage,
secure, and catalog data located across cloud projects in their organization in a variety of
storage systems, including Cloud Storage and BigQuery.
com. google. cloud. dataplex. v1. Cmek Service Client
Service Description: Dataplex Universal Catalog Customer Managed Encryption Keys (CMEK) Service
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
com. google. cloud. dataplex. v1. Data Product Service Client
Service Description: DataProductService provides APIs for managing data products and the
underlying data assets.
This class provides the ability to make remote calls to the backing service through method
com. google. cloud. dataplex. v1. Data Scan Service Client
Service Description: DataScanService manages DataScan resources which can be configured to run
various types of data scanning workload and generate enriched metadata (e.g. Data Profile, Data
Quality) for the data source.
com. google. cloud. dataplex. v1. Data Taxonomy Service Client
Deprecated. This class is deprecated and will be removed in the next major version update.
Service Description: DataTaxonomyService enables attribute-based governance. The resources
com. google. cloud. dataplex. v1. Dataplex Service Client
Service Description: Dataplex service provides data lakes as a service. The primary resources
offered by this service are Lakes, Zones and Assets which collectively allow a data administrator
to organize, manage, secure and catalog data across their organization located across cloud
projects in a variety of storage systems including Cloud Storage and BigQuery.
com. google. cloud. dataplex. v1. Metadata Service Client
Service Description: Metadata service manages metadata resources such as tables, filesets and
partitions.
This class provides the ability to make remote calls to the backing service through method
Settings Classes
Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.
Settings
Description
com. google. cloud. dataplex. v1. Business Glossary Service Settings
Settings class to configure an instance of BusinessGlossaryServiceClient .
The default instance has everything set to sensible defaults:
com. google. cloud. dataplex. v1. Catalog Service Settings
Settings class to configure an instance of CatalogServiceClient .
The default instance has everything set to sensible defaults:
com. google. cloud. dataplex. v1. Cmek Service Settings
Settings class to configure an instance of CmekServiceClient .
The default instance has everything set to sensible defaults:
com. google. cloud. dataplex. v1. Data Product Service Settings
Settings class to configure an instance of DataProductServiceClient .
The default instance has everything set to sensible defaults:
com. google. cloud. dataplex. v1. Data Scan Service Settings
Settings class to configure an instance of DataScanServiceClient .
The default instance has everything set to sensible defaults:
com. google. cloud. dataplex. v1. Data Taxonomy Service Settings
Deprecated. This class is deprecated and will be removed in the next major version update.
Settings class to configure an instance of DataTaxonomyServiceClient .
com. google. cloud. dataplex. v1. Dataplex Service Settings
Settings class to configure an instance of DataplexServiceClient .
The default instance has everything set to sensible defaults:
com. google. cloud. dataplex. v1. Metadata Service Settings
Settings class to configure an instance of MetadataServiceClient .
The default instance has everything set to sensible defaults:
Classes
Class
Description
com. google. cloud. dataplex. v1. Action
Action represents an issue requiring administrator action for resolution.
com. google. cloud. dataplex. v1. Action. Builder
Action represents an issue requiring administrator action for resolution.
com. google. cloud. dataplex. v1. Action. Failed Security Policy Apply
Failed to apply security policy to the managed resource(s) under a
lake, zone or an asset. For a lake or zone resource, one or more underlying
assets has a failure applying security policy to the associated managed
com. google. cloud. dataplex. v1. Action. Failed Security Policy Apply. Builder
Failed to apply security policy to the managed resource(s) under a
lake, zone or an asset. For a lake or zone resource, one or more underlying
assets has a failure applying security policy to the associated managed
com. google. cloud. dataplex. v1. Action. Incompatible Data Schema
Action details for incompatible schemas detected by discovery.
com. google. cloud. dataplex. v1. Action. Incompatible Data Schema. Builder
Action details for incompatible schemas detected by discovery.
com. google. cloud. dataplex. v1. Action. Invalid Data Format
Action details for invalid or unsupported data files detected by discovery.
com. google. cloud. dataplex. v1. Action. Invalid Data Format. Builder
Action details for invalid or unsupported data files detected by discovery.
com. google. cloud. dataplex. v1. Action. Invalid Data Organization
Action details for invalid data arrangement.
com. google. cloud. dataplex. v1. Action. Invalid Data Organization. Builder
Action details for invalid data arrangement.
com. google. cloud. dataplex. v1. Action. Invalid Data Partition
Action details for invalid or unsupported partitions detected by discovery.
com. google. cloud. dataplex. v1. Action. Invalid Data Partition. Builder
Action details for invalid or unsupported partitions detected by discovery.
com. google. cloud. dataplex. v1. Action. Missing Data
Action details for absence of data detected by discovery.
com. google. cloud. dataplex. v1. Action. Missing Data. Builder
Action details for absence of data detected by discovery.
com. google. cloud. dataplex. v1. Action. Missing Resource
Action details for resource references in assets that cannot be located.
com. google. cloud. dataplex. v1. Action. Missing Resource. Builder
Action details for resource references in assets that cannot be located.
com. google. cloud. dataplex. v1. Action. Unauthorized Resource
Action details for unauthorized resource issues raised to indicate that the
service account associated with the lake instance is not authorized to
access or manage the resource associated with an asset.
com. google. cloud. dataplex. v1. Action. Unauthorized Resource. Builder
Action details for unauthorized resource issues raised to indicate that the
service account associated with the lake instance is not authorized to
access or manage the resource associated with an asset.
com. google. cloud. dataplex. v1. Analyze Proto
com. google. cloud. dataplex. v1. Aspect
An aspect is a single piece of metadata describing an entry.
com. google. cloud. dataplex. v1. Aspect. Builder
An aspect is a single piece of metadata describing an entry.
com. google. cloud. dataplex. v1. Aspect Source
Information related to the source system of the aspect.
com. google. cloud. dataplex. v1. Aspect Source. Builder
Information related to the source system of the aspect.
com. google. cloud. dataplex. v1. Aspect Type
AspectType is a template for creating Aspects, and represents the
JSON-schema for a given Entry, for example, BigQuery Table Schema.
com. google. cloud. dataplex. v1. Aspect Type. Authorization
Authorization for an AspectType.
com. google. cloud. dataplex. v1. Aspect Type. Authorization. Builder
Authorization for an AspectType.
com. google. cloud. dataplex. v1. Aspect Type. Builder
AspectType is a template for creating Aspects, and represents the
JSON-schema for a given Entry, for example, BigQuery Table Schema.
com. google. cloud. dataplex. v1. Aspect Type. Metadata Template
MetadataTemplate definition for an AspectType.
com. google. cloud. dataplex. v1. Aspect Type. Metadata Template. Annotations
Definition of the annotations of a field.
com. google. cloud. dataplex. v1. Aspect Type. Metadata Template. Annotations. Builder
Definition of the annotations of a field.
com. google. cloud. dataplex. v1. Aspect Type. Metadata Template. Builder
MetadataTemplate definition for an AspectType.
com. google. cloud. dataplex. v1. Aspect Type. Metadata Template. Constraints
Definition of the constraints of a field.
com. google. cloud. dataplex. v1. Aspect Type. Metadata Template. Constraints. Builder
Definition of the constraints of a field.
com. google. cloud. dataplex. v1. Aspect Type. Metadata Template. Enum Value
Definition of Enumvalue, to be used for enum fields.
com. google. cloud. dataplex. v1. Aspect Type. Metadata Template. Enum Value. Builder
Definition of Enumvalue, to be used for enum fields.
com. google. cloud. dataplex. v1. Aspect Type Name
com. google. cloud. dataplex. v1. Aspect Type Name. Builder
Builder for projects/{project}/locations/{location}/aspectTypes/{aspect_type}.
com. google. cloud. dataplex. v1. Asset
An asset represents a cloud resource that is being managed within a lake as a
member of a zone.
com. google. cloud. dataplex. v1. Asset. Builder
An asset represents a cloud resource that is being managed within a lake as a
member of a zone.
com. google. cloud. dataplex. v1. Asset. Discovery Spec
Settings to manage the metadata discovery and publishing for an asset.
com. google. cloud. dataplex. v1. Asset. Discovery Spec. Builder
Settings to manage the metadata discovery and publishing for an asset.
com. google. cloud. dataplex. v1. Asset. Discovery Spec. Csv Options
Describe CSV and similar semi-structured data formats.
com. google. cloud. dataplex. v1. Asset. Discovery Spec. Csv Options. Builder
Describe CSV and similar semi-structured data formats.
com. google. cloud. dataplex. v1. Asset. Discovery Spec. Json Options
Describe JSON data format.
com. google. cloud. dataplex. v1. Asset. Discovery Spec. Json Options. Builder
Describe JSON data format.
com. google. cloud. dataplex. v1. Asset. Discovery Status
Status of discovery for an asset.
com. google. cloud. dataplex. v1. Asset. Discovery Status. Builder
Status of discovery for an asset.
com. google. cloud. dataplex. v1. Asset. Discovery Status. Stats
The aggregated data statistics for the asset reported by discovery.
com. google. cloud. dataplex. v1. Asset. Discovery Status. Stats. Builder
The aggregated data statistics for the asset reported by discovery.
com. google. cloud. dataplex. v1. Asset. Resource Spec
Identifies the cloud resource that is referenced by this asset.
com. google. cloud. dataplex. v1. Asset. Resource Spec. Builder
Identifies the cloud resource that is referenced by this asset.
com. google. cloud. dataplex. v1. Asset. Resource Status
Status of the resource referenced by an asset.
com. google. cloud. dataplex. v1. Asset. Resource Status. Builder
Status of the resource referenced by an asset.
com. google. cloud. dataplex. v1. Asset. Security Status
Security policy status of the asset. Data security policy, i.e., readers,
writers & owners, should be specified in the lake/zone/asset IAM policy.
com. google. cloud. dataplex. v1. Asset. Security Status. Builder
Security policy status of the asset. Data security policy, i.e., readers,
writers & owners, should be specified in the lake/zone/asset IAM policy.
com. google. cloud. dataplex. v1. Asset Name
com. google. cloud. dataplex. v1. Asset Name. Builder
Builder for projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/assets/{asset}.
com. google. cloud. dataplex. v1. Asset Status
Aggregated status of the underlying assets of a lake or zone.
com. google. cloud. dataplex. v1. Asset Status. Builder
Aggregated status of the underlying assets of a lake or zone.
com. google. cloud. dataplex. v1. Business Glossary Event
Payload associated with Business Glossary related log events.
com. google. cloud. dataplex. v1. Business Glossary Event. Builder
Payload associated with Business Glossary related log events.
com. google. cloud. dataplex. v1. Business Glossary Proto
com. google. cloud. dataplex. v1. Business Glossary Service Client. List Glossaries Fixed Size Collection
com. google. cloud. dataplex. v1. Business Glossary Service Client. List Glossaries Page
com. google. cloud. dataplex. v1. Business Glossary Service Client. List Glossaries Paged Response
com. google. cloud. dataplex. v1. Business Glossary Service Client. List Glossary Categories Fixed Size Collection
com. google. cloud. dataplex. v1. Business Glossary Service Client. List Glossary Categories Page
com. google. cloud. dataplex. v1. Business Glossary Service Client. List Glossary Categories Paged Response
com. google. cloud. dataplex. v1. Business Glossary Service Client. List Glossary Terms Fixed Size Collection
com. google. cloud. dataplex. v1. Business Glossary Service Client. List Glossary Terms Page
com. google. cloud. dataplex. v1. Business Glossary Service Client. List Glossary Terms Paged Response
com. google. cloud. dataplex. v1. Business Glossary Service Client. List Locations Fixed Size Collection
com. google. cloud. dataplex. v1. Business Glossary Service Client. List Locations Page
com. google. cloud. dataplex. v1. Business Glossary Service Client. List Locations Paged Response
com. google. cloud. dataplex. v1. Business Glossary Service Grpc
BusinessGlossaryService provides APIs for managing business glossary
resources for enterprise customers.
The resources currently supported in Business Glossary are:
com. google. cloud. dataplex. v1. Business Glossary Service Grpc. Business Glossary Service Impl Base
Base class for the server implementation of the service BusinessGlossaryService.
BusinessGlossaryService provides APIs for managing business glossary
com. google. cloud. dataplex. v1. Business Glossary Service Settings. Builder
Builder for BusinessGlossaryServiceSettings.
com. google. cloud. dataplex. v1. Cancel Job Request
Cancel task jobs.
com. google. cloud. dataplex. v1. Cancel Job Request. Builder
Cancel task jobs.
com. google. cloud. dataplex. v1. Cancel Metadata Job Request
Cancel metadata job request.
com. google. cloud. dataplex. v1. Cancel Metadata Job Request. Builder
Cancel metadata job request.
com. google. cloud. dataplex. v1. Catalog Proto
com. google. cloud. dataplex. v1. Catalog Service Client. List Aspect Types Fixed Size Collection
com. google. cloud. dataplex. v1. Catalog Service Client. List Aspect Types Page
com. google. cloud. dataplex. v1. Catalog Service Client. List Aspect Types Paged Response
com. google. cloud. dataplex. v1. Catalog Service Client. List Entries Fixed Size Collection
com. google. cloud. dataplex. v1. Catalog Service Client. List Entries Page
com. google. cloud. dataplex. v1. Catalog Service Client. List Entries Paged Response
com. google. cloud. dataplex. v1. Catalog Service Client. List Entry Groups Fixed Size Collection
com. google. cloud. dataplex. v1. Catalog Service Client. List Entry Groups Page
com. google. cloud. dataplex. v1. Catalog Service Client. List Entry Groups Paged Response
com. google. cloud. dataplex. v1. Catalog Service Client. List Entry Types Fixed Size Collection
com. google. cloud. dataplex. v1. Catalog Service Client. List Entry Types Page
com. google. cloud. dataplex. v1. Catalog Service Client. List Entry Types Paged Response
com. google. cloud. dataplex. v1. Catalog Service Client. List Locations Fixed Size Collection
com. google. cloud. dataplex. v1. Catalog Service Client. List Locations Page
com. google. cloud. dataplex. v1. Catalog Service Client. List Locations Paged Response
com. google. cloud. dataplex. v1. Catalog Service Client. List Metadata Feeds Fixed Size Collection
com. google. cloud. dataplex. v1. Catalog Service Client. List Metadata Feeds Page
com. google. cloud. dataplex. v1. Catalog Service Client. List Metadata Feeds Paged Response
com. google. cloud. dataplex. v1. Catalog Service Client. List Metadata Jobs Fixed Size Collection
com. google. cloud. dataplex. v1. Catalog Service Client. List Metadata Jobs Page
com. google. cloud. dataplex. v1. Catalog Service Client. List Metadata Jobs Paged Response
com. google. cloud. dataplex. v1. Catalog Service Client. Lookup Entry Links Fixed Size Collection
com. google. cloud. dataplex. v1. Catalog Service Client. Lookup Entry Links Page
com. google. cloud. dataplex. v1. Catalog Service Client. Lookup Entry Links Paged Response
com. google. cloud. dataplex. v1. Catalog Service Client. Search Entries Fixed Size Collection
com. google. cloud. dataplex. v1. Catalog Service Client. Search Entries Page
com. google. cloud. dataplex. v1. Catalog Service Client. Search Entries Paged Response
com. google. cloud. dataplex. v1. Catalog Service Grpc
The primary resources offered by this service are EntryGroups, EntryTypes,
AspectTypes, Entries and EntryLinks. They collectively let data
administrators organize, manage, secure, and catalog data located across
com. google. cloud. dataplex. v1. Catalog Service Grpc. Catalog Service Impl Base
Base class for the server implementation of the service CatalogService.
The primary resources offered by this service are EntryGroups, EntryTypes,
com. google. cloud. dataplex. v1. Catalog Service Settings. Builder
Builder for CatalogServiceSettings.
com. google. cloud. dataplex. v1. Cmek Proto
com. google. cloud. dataplex. v1. Cmek Service Client. List Encryption Configs Fixed Size Collection
com. google. cloud. dataplex. v1. Cmek Service Client. List Encryption Configs Page
com. google. cloud. dataplex. v1. Cmek Service Client. List Encryption Configs Paged Response
com. google. cloud. dataplex. v1. Cmek Service Client. List Locations Fixed Size Collection
com. google. cloud. dataplex. v1. Cmek Service Client. List Locations Page
com. google. cloud. dataplex. v1. Cmek Service Client. List Locations Paged Response
com. google. cloud. dataplex. v1. Cmek Service Grpc
Dataplex Universal Catalog Customer Managed Encryption Keys (CMEK) Service
com. google. cloud. dataplex. v1. Cmek Service Grpc. Cmek Service Impl Base
Base class for the server implementation of the service CmekService.
Dataplex Universal Catalog Customer Managed Encryption Keys (CMEK) Service
com. google. cloud. dataplex. v1. Cmek Service Settings. Builder
Builder for CmekServiceSettings.
com. google. cloud. dataplex. v1. Content
Content represents a user-visible notebook or a sql script
com. google. cloud. dataplex. v1. Content. Builder
Content represents a user-visible notebook or a sql script
com. google. cloud. dataplex. v1. Content. Notebook
Configuration for Notebook content.
com. google. cloud. dataplex. v1. Content. Notebook. Builder
Configuration for Notebook content.
com. google. cloud. dataplex. v1. Content. Sql Script
Configuration for the Sql Script content.
com. google. cloud. dataplex. v1. Content. Sql Script. Builder
Configuration for the Sql Script content.
com. google. cloud. dataplex. v1. Content Proto
com. google. cloud. dataplex. v1. Content Service Grpc
ContentService manages Notebook and SQL Scripts for Dataplex Universal
Catalog.
com. google. cloud. dataplex. v1. Content Service Grpc. Content Service Impl Base
Base class for the server implementation of the service ContentService.
ContentService manages Notebook and SQL Scripts for Dataplex Universal
com. google. cloud. dataplex. v1. Create Aspect Type Request
Create AspectType Request.
com. google. cloud. dataplex. v1. Create Aspect Type Request. Builder
Create AspectType Request.
com. google. cloud. dataplex. v1. Create Asset Request
Create asset request.
com. google. cloud. dataplex. v1. Create Asset Request. Builder
Create asset request.
com. google. cloud. dataplex. v1. Create Data Asset Request
Request message for creating a data asset.
com. google. cloud. dataplex. v1. Create Data Asset Request. Builder
Request message for creating a data asset.
com. google. cloud. dataplex. v1. Create Data Attribute Binding Request
Create DataAttributeBinding request.
com. google. cloud. dataplex. v1. Create Data Attribute Binding Request. Builder
Create DataAttributeBinding request.
com. google. cloud. dataplex. v1. Create Data Attribute Request
Create DataAttribute request.
com. google. cloud. dataplex. v1. Create Data Attribute Request. Builder
Create DataAttribute request.
com. google. cloud. dataplex. v1. Create Data Product Request
Request message for creating a data product.
com. google. cloud. dataplex. v1. Create Data Product Request. Builder
Request message for creating a data product.
com. google. cloud. dataplex. v1. Create Data Scan Request
Create dataScan request.
com. google. cloud. dataplex. v1. Create Data Scan Request. Builder
Create dataScan request.
com. google. cloud. dataplex. v1. Create Data Taxonomy Request
Create DataTaxonomy request.
com. google. cloud. dataplex. v1. Create Data Taxonomy Request. Builder
Create DataTaxonomy request.
com. google. cloud. dataplex. v1. Create Encryption Config Request
Create EncryptionConfig Request
com. google. cloud. dataplex. v1. Create Encryption Config Request. Builder
Create EncryptionConfig Request
com. google. cloud. dataplex. v1. Create Entity Request
Create a metadata entity request.
com. google. cloud. dataplex. v1. Create Entity Request. Builder
Create a metadata entity request.
com. google. cloud. dataplex. v1. Create Entry Group Request
Create EntryGroup Request.
com. google. cloud. dataplex. v1. Create Entry Group Request. Builder
Create EntryGroup Request.
com. google. cloud. dataplex. v1. Create Entry Link Request
Request message for CreateEntryLink.
com. google. cloud. dataplex. v1. Create Entry Link Request. Builder
Request message for CreateEntryLink.
com. google. cloud. dataplex. v1. Create Entry Request
Create Entry request.
com. google. cloud. dataplex. v1. Create Entry Request. Builder
Create Entry request.
com. google. cloud. dataplex. v1. Create Entry Type Request
Create EntryType Request.
com. google. cloud. dataplex. v1. Create Entry Type Request. Builder
Create EntryType Request.
com. google. cloud. dataplex. v1. Create Glossary Category Request
Creates a new GlossaryCategory under the specified Glossary.
com. google. cloud. dataplex. v1. Create Glossary Category Request. Builder
Creates a new GlossaryCategory under the specified Glossary.
com. google. cloud. dataplex. v1. Create Glossary Request
Create Glossary Request
com. google. cloud. dataplex. v1. Create Glossary Request. Builder
Create Glossary Request
com. google. cloud. dataplex. v1. Create Glossary Term Request
Creates a new GlossaryTerm under the specified Glossary.
com. google. cloud. dataplex. v1. Create Glossary Term Request. Builder
Creates a new GlossaryTerm under the specified Glossary.
com. google. cloud. dataplex. v1. Create Lake Request
Create lake request.
com. google. cloud. dataplex. v1. Create Lake Request. Builder
Create lake request.
com. google. cloud. dataplex. v1. Create Metadata Feed Request
Request message for CreateMetadataFeed.
com. google. cloud. dataplex. v1. Create Metadata Feed Request. Builder
Request message for CreateMetadataFeed.
com. google. cloud. dataplex. v1. Create Metadata Job Request
Create metadata job request.
com. google. cloud. dataplex. v1. Create Metadata Job Request. Builder
Create metadata job request.
com. google. cloud. dataplex. v1. Create Partition Request
Create metadata partition request.
com. google. cloud. dataplex. v1. Create Partition Request. Builder
Create metadata partition request.
com. google. cloud. dataplex. v1. Create Task Request
Create task request.
com. google. cloud. dataplex. v1. Create Task Request. Builder
Create task request.
com. google. cloud. dataplex. v1. Create Zone Request
Create zone request.
com. google. cloud. dataplex. v1. Create Zone Request. Builder
Create zone request.
com. google. cloud. dataplex. v1. Data Access Spec
DataAccessSpec holds the access control configuration to be enforced on data
stored within resources (eg: rows, columns in BigQuery Tables). When
associated with data, the data is only accessible to
com. google. cloud. dataplex. v1. Data Access Spec. Builder
DataAccessSpec holds the access control configuration to be enforced on data
stored within resources (eg: rows, columns in BigQuery Tables). When
associated with data, the data is only accessible to
com. google. cloud. dataplex. v1. Data Asset
Represents a data asset resource that can be packaged and shared via a data
product.
com. google. cloud. dataplex. v1. Data Asset. Access Group Config
Configuration for access group inherited from the parent data product.
com. google. cloud. dataplex. v1. Data Asset. Access Group Config. Builder
Configuration for access group inherited from the parent data product.
com. google. cloud. dataplex. v1. Data Asset. Builder
Represents a data asset resource that can be packaged and shared via a data
product.
com. google. cloud. dataplex. v1. Data Asset Name
com. google. cloud. dataplex. v1. Data Asset Name. Builder
Builder for
projects/{project}/locations/{location}/dataProducts/{data_product}/dataAssets/{data_asset}.
com. google. cloud. dataplex. v1. Data Attribute
Denotes one dataAttribute in a dataTaxonomy, for example, PII.
DataAttribute resources can be defined in a hierarchy.
A single dataAttribute resource can contain specs of multiple types
com. google. cloud. dataplex. v1. Data Attribute. Builder
Denotes one dataAttribute in a dataTaxonomy, for example, PII.
DataAttribute resources can be defined in a hierarchy.
A single dataAttribute resource can contain specs of multiple types
com. google. cloud. dataplex. v1. Data Attribute Binding
DataAttributeBinding represents binding of attributes to resources. Eg: Bind
'CustomerInfo' entity with 'PII' attribute.
com. google. cloud. dataplex. v1. Data Attribute Binding. Builder
DataAttributeBinding represents binding of attributes to resources. Eg: Bind
'CustomerInfo' entity with 'PII' attribute.
com. google. cloud. dataplex. v1. Data Attribute Binding. Path
Represents a subresource of the given resource, and associated bindings
with it. Currently supported subresources are column and partition schema
fields within a table.
com. google. cloud. dataplex. v1. Data Attribute Binding. Path. Builder
Represents a subresource of the given resource, and associated bindings
with it. Currently supported subresources are column and partition schema
fields within a table.
com. google. cloud. dataplex. v1. Data Attribute Binding Name
com. google. cloud. dataplex. v1. Data Attribute Binding Name. Builder
Builder for
projects/{project}/locations/{location}/dataAttributeBindings/{data_attribute_binding_id}.
com. google. cloud. dataplex. v1. Data Attribute Name
com. google. cloud. dataplex. v1. Data Attribute Name. Builder
Builder for
projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}.
com. google. cloud. dataplex. v1. Data Discovery Proto
com. google. cloud. dataplex. v1. Data Discovery Result
The output of a data discovery scan.
com. google. cloud. dataplex. v1. Data Discovery Result. Big Query Publishing
Describes BigQuery publishing configurations.
com. google. cloud. dataplex. v1. Data Discovery Result. Big Query Publishing. Builder
Describes BigQuery publishing configurations.
com. google. cloud. dataplex. v1. Data Discovery Result. Builder
The output of a data discovery scan.
com. google. cloud. dataplex. v1. Data Discovery Result. Scan Statistics
Describes result statistics of a data scan discovery job.
com. google. cloud. dataplex. v1. Data Discovery Result. Scan Statistics. Builder
Describes result statistics of a data scan discovery job.
com. google. cloud. dataplex. v1. Data Discovery Spec
Spec for a data discovery scan.
com. google. cloud. dataplex. v1. Data Discovery Spec. Big Query Publishing Config
Describes BigQuery publishing configurations.
com. google. cloud. dataplex. v1. Data Discovery Spec. Big Query Publishing Config. Builder
Describes BigQuery publishing configurations.
com. google. cloud. dataplex. v1. Data Discovery Spec. Builder
Spec for a data discovery scan.
com. google. cloud. dataplex. v1. Data Discovery Spec. Storage Config
Configurations related to Cloud Storage as the data source.
com. google. cloud. dataplex. v1. Data Discovery Spec. Storage Config. Builder
Configurations related to Cloud Storage as the data source.
com. google. cloud. dataplex. v1. Data Discovery Spec. Storage Config. Csv Options
Describes CSV and similar semi-structured data formats.
com. google. cloud. dataplex. v1. Data Discovery Spec. Storage Config. Csv Options. Builder
Describes CSV and similar semi-structured data formats.
com. google. cloud. dataplex. v1. Data Discovery Spec. Storage Config. Json Options
Describes JSON data format.
com. google. cloud. dataplex. v1. Data Discovery Spec. Storage Config. Json Options. Builder
Describes JSON data format.
com. google. cloud. dataplex. v1. Data Documentation Proto
com. google. cloud. dataplex. v1. Data Documentation Result
The output of a DataDocumentation scan.
com. google. cloud. dataplex. v1. Data Documentation Result. Builder
The output of a DataDocumentation scan.
com. google. cloud. dataplex. v1. Data Documentation Result. Field
Column of a table with generated metadata and nested fields.
com. google. cloud. dataplex. v1. Data Documentation Result. Field. Builder
Column of a table with generated metadata and nested fields.
com. google. cloud. dataplex. v1. Data Documentation Result. Query
A sample SQL query in data documentation.
com. google. cloud. dataplex. v1. Data Documentation Result. Query. Builder
A sample SQL query in data documentation.
com. google. cloud. dataplex. v1. Data Documentation Result. Schema
Schema of the table with generated metadata of columns.
com. google. cloud. dataplex. v1. Data Documentation Result. Schema. Builder
Schema of the table with generated metadata of columns.
com. google. cloud. dataplex. v1. Data Documentation Result. Table Result
Generated metadata about the table.
com. google. cloud. dataplex. v1. Data Documentation Result. Table Result. Builder
Generated metadata about the table.
com. google. cloud. dataplex. v1. Data Documentation Spec
DataDocumentation scan related spec.
com. google. cloud. dataplex. v1. Data Documentation Spec. Builder
DataDocumentation scan related spec.
com. google. cloud. dataplex. v1. Data Product
A data product is a curated collection of data assets, packaged to address
specific use cases. It's a way to manage and share data in a more organized,
product-like manner.
com. google. cloud. dataplex. v1. Data Product. Access Group
Custom user defined access groups at the data product level. These are used
for granting different levels of access (IAM roles) on the individual data
product's data assets.
com. google. cloud. dataplex. v1. Data Product. Access Group. Builder
Custom user defined access groups at the data product level. These are used
for granting different levels of access (IAM roles) on the individual data
product's data assets.
com. google. cloud. dataplex. v1. Data Product. Builder
A data product is a curated collection of data assets, packaged to address
specific use cases. It's a way to manage and share data in a more organized,
product-like manner.
com. google. cloud. dataplex. v1. Data Product. Principal
Represents the principal entity associated with an access group, as per
https://cloud.google.com/iam/docs/principals-overview .
com. google. cloud. dataplex. v1. Data Product. Principal. Builder
Represents the principal entity associated with an access group, as per
https://cloud.google.com/iam/docs/principals-overview .
com. google. cloud. dataplex. v1. Data Product Name
com. google. cloud. dataplex. v1. Data Product Name. Builder
Builder for projects/{project}/locations/{location}/dataProducts/{data_product}.
com. google. cloud. dataplex. v1. Data Product Service Client. List Data Assets Fixed Size Collection
com. google. cloud. dataplex. v1. Data Product Service Client. List Data Assets Page
com. google. cloud. dataplex. v1. Data Product Service Client. List Data Assets Paged Response
com. google. cloud. dataplex. v1. Data Product Service Client. List Data Products Fixed Size Collection
com. google. cloud. dataplex. v1. Data Product Service Client. List Data Products Page
com. google. cloud. dataplex. v1. Data Product Service Client. List Data Products Paged Response
com. google. cloud. dataplex. v1. Data Product Service Client. List Locations Fixed Size Collection
com. google. cloud. dataplex. v1. Data Product Service Client. List Locations Page
com. google. cloud. dataplex. v1. Data Product Service Client. List Locations Paged Response
com. google. cloud. dataplex. v1. Data Product Service Grpc
DataProductService provides APIs for managing data products and
the underlying data assets.
com. google. cloud. dataplex. v1. Data Product Service Grpc. Data Product Service Impl Base
Base class for the server implementation of the service DataProductService.
DataProductService provides APIs for managing data products and
com. google. cloud. dataplex. v1. Data Product Service Settings. Builder
Builder for DataProductServiceSettings.
com. google. cloud. dataplex. v1. Data Products Proto
com. google. cloud. dataplex. v1. Data Profile Proto
com. google. cloud. dataplex. v1. Data Profile Result
DataProfileResult defines the output of DataProfileScan. Each field of the
table will have field type specific profile result.
com. google. cloud. dataplex. v1. Data Profile Result. Builder
DataProfileResult defines the output of DataProfileScan. Each field of the
table will have field type specific profile result.
com. google. cloud. dataplex. v1. Data Profile Result. Post Scan Actions Result
The result of post scan actions of DataProfileScan job.
com. google. cloud. dataplex. v1. Data Profile Result. Post Scan Actions Result. Big Query Export Result
The result of BigQuery export post scan action.
com. google. cloud. dataplex. v1. Data Profile Result. Post Scan Actions Result. Big Query Export Result. Builder
The result of BigQuery export post scan action.
com. google. cloud. dataplex. v1. Data Profile Result. Post Scan Actions Result. Builder
The result of post scan actions of DataProfileScan job.
com. google. cloud. dataplex. v1. Data Profile Result. Profile
Contains name, type, mode and field type specific profile information.
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Builder
Contains name, type, mode and field type specific profile information.
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field
A field within a table.
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Builder
A field within a table.
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info
The profile information for each field type.
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info. Builder
The profile information for each field type.
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info. Double Field Info
The profile information for a double type field.
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info. Double Field Info. Builder
The profile information for a double type field.
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info. Integer Field Info
The profile information for an integer type field.
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info. Integer Field Info. Builder
The profile information for an integer type field.
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info. String Field Info
The profile information for a string type field.
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info. String Field Info. Builder
The profile information for a string type field.
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info. TopN Value
Top N non-null values in the scanned data.
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info. TopN Value. Builder
Top N non-null values in the scanned data.
com. google. cloud. dataplex. v1. Data Profile Spec
DataProfileScan related setting.
com. google. cloud. dataplex. v1. Data Profile Spec. Builder
DataProfileScan related setting.
com. google. cloud. dataplex. v1. Data Profile Spec. Post Scan Actions
The configuration of post scan actions of DataProfileScan job.
com. google. cloud. dataplex. v1. Data Profile Spec. Post Scan Actions. Big Query Export
The configuration of BigQuery export post scan action.
com. google. cloud. dataplex. v1. Data Profile Spec. Post Scan Actions. Big Query Export. Builder
The configuration of BigQuery export post scan action.
com. google. cloud. dataplex. v1. Data Profile Spec. Post Scan Actions. Builder
The configuration of post scan actions of DataProfileScan job.
com. google. cloud. dataplex. v1. Data Profile Spec. Selected Fields
The specification for fields to include or exclude in data profile scan.
com. google. cloud. dataplex. v1. Data Profile Spec. Selected Fields. Builder
The specification for fields to include or exclude in data profile scan.
com. google. cloud. dataplex. v1. Data Quality Column Result
DataQualityColumnResult provides a more detailed, per-column view of
the results.
com. google. cloud. dataplex. v1. Data Quality Column Result. Builder
DataQualityColumnResult provides a more detailed, per-column view of
the results.
com. google. cloud. dataplex. v1. Data Quality Dimension
A dimension captures data quality intent about a defined subset of the rules
specified.
com. google. cloud. dataplex. v1. Data Quality Dimension. Builder
A dimension captures data quality intent about a defined subset of the rules
specified.
com. google. cloud. dataplex. v1. Data Quality Dimension Result
DataQualityDimensionResult provides a more detailed, per-dimension view of
the results.
com. google. cloud. dataplex. v1. Data Quality Dimension Result. Builder
DataQualityDimensionResult provides a more detailed, per-dimension view of
the results.
com. google. cloud. dataplex. v1. Data Quality Proto
com. google. cloud. dataplex. v1. Data Quality Result
The output of a DataQualityScan.
com. google. cloud. dataplex. v1. Data Quality Result. Anomaly Detection Generated Assets
The assets generated by Anomaly Detection Data Scan.
com. google. cloud. dataplex. v1. Data Quality Result. Anomaly Detection Generated Assets. Builder
The assets generated by Anomaly Detection Data Scan.
com. google. cloud. dataplex. v1. Data Quality Result. Builder
The output of a DataQualityScan.
com. google. cloud. dataplex. v1. Data Quality Result. Post Scan Actions Result
The result of post scan actions of DataQualityScan job.
com. google. cloud. dataplex. v1. Data Quality Result. Post Scan Actions Result. Big Query Export Result
The result of BigQuery export post scan action.
com. google. cloud. dataplex. v1. Data Quality Result. Post Scan Actions Result. Big Query Export Result. Builder
The result of BigQuery export post scan action.
com. google. cloud. dataplex. v1. Data Quality Result. Post Scan Actions Result. Builder
The result of post scan actions of DataQualityScan job.
com. google. cloud. dataplex. v1. Data Quality Rule
A rule captures data quality intent about a data source.
com. google. cloud. dataplex. v1. Data Quality Rule. Builder
A rule captures data quality intent about a data source.
com. google. cloud. dataplex. v1. Data Quality Rule. Debug Query
Specifies a SQL statement that is evaluated to return up to 10 scalar
values that are used to debug rules. If the rule fails, the values can help
diagnose the cause of the failure.
com. google. cloud. dataplex. v1. Data Quality Rule. Debug Query. Builder
Specifies a SQL statement that is evaluated to return up to 10 scalar
values that are used to debug rules. If the rule fails, the values can help
diagnose the cause of the failure.
com. google. cloud. dataplex. v1. Data Quality Rule. Non Null Expectation
Evaluates whether each column value is null.
com. google. cloud. dataplex. v1. Data Quality Rule. Non Null Expectation. Builder
Evaluates whether each column value is null.
com. google. cloud. dataplex. v1. Data Quality Rule. Range Expectation
Evaluates whether each column value lies between a specified range.
com. google. cloud. dataplex. v1. Data Quality Rule. Range Expectation. Builder
Evaluates whether each column value lies between a specified range.
com. google. cloud. dataplex. v1. Data Quality Rule. Regex Expectation
Evaluates whether each column value matches a specified regex.
com. google. cloud. dataplex. v1. Data Quality Rule. Regex Expectation. Builder
Evaluates whether each column value matches a specified regex.
com. google. cloud. dataplex. v1. Data Quality Rule. Row Condition Expectation
Evaluates whether each row passes the specified condition.
The SQL expression needs to use GoogleSQL
com. google. cloud. dataplex. v1. Data Quality Rule. Row Condition Expectation. Builder
Evaluates whether each row passes the specified condition.
The SQL expression needs to use GoogleSQL
com. google. cloud. dataplex. v1. Data Quality Rule. Set Expectation
Evaluates whether each column value is contained by a specified set.
com. google. cloud. dataplex. v1. Data Quality Rule. Set Expectation. Builder
Evaluates whether each column value is contained by a specified set.
com. google. cloud. dataplex. v1. Data Quality Rule. Sql Assertion
A SQL statement that is evaluated to return rows that match an invalid
state. If any rows are are returned, this rule fails.
com. google. cloud. dataplex. v1. Data Quality Rule. Sql Assertion. Builder
A SQL statement that is evaluated to return rows that match an invalid
state. If any rows are are returned, this rule fails.
com. google. cloud. dataplex. v1. Data Quality Rule. Statistic Range Expectation
Evaluates whether the column aggregate statistic lies between a specified
range.
com. google. cloud. dataplex. v1. Data Quality Rule. Statistic Range Expectation. Builder
Evaluates whether the column aggregate statistic lies between a specified
range.
com. google. cloud. dataplex. v1. Data Quality Rule. Table Condition Expectation
Evaluates whether the provided expression is true.
The SQL expression needs to use GoogleSQL
com. google. cloud. dataplex. v1. Data Quality Rule. Table Condition Expectation. Builder
Evaluates whether the provided expression is true.
The SQL expression needs to use GoogleSQL
com. google. cloud. dataplex. v1. Data Quality Rule. Uniqueness Expectation
Evaluates whether the column has duplicates.
com. google. cloud. dataplex. v1. Data Quality Rule. Uniqueness Expectation. Builder
Evaluates whether the column has duplicates.
com. google. cloud. dataplex. v1. Data Quality Rule Result
DataQualityRuleResult provides a more detailed, per-rule view of the results.
com. google. cloud. dataplex. v1. Data Quality Rule Result. Builder
DataQualityRuleResult provides a more detailed, per-rule view of the results.
com. google. cloud. dataplex. v1. Data Quality Rule Result. Debug Query Result
Contains a single result from the debug query.
com. google. cloud. dataplex. v1. Data Quality Rule Result. Debug Query Result. Builder
Contains a single result from the debug query.
com. google. cloud. dataplex. v1. Data Quality Rule Result. Debug Query Result Set
Contains all results from a debug query.
com. google. cloud. dataplex. v1. Data Quality Rule Result. Debug Query Result Set. Builder
Contains all results from a debug query.
com. google. cloud. dataplex. v1. Data Quality Scan Rule Result
Information about the result of a data quality rule for data quality scan.
The monitored resource is 'DataScan'.
com. google. cloud. dataplex. v1. Data Quality Scan Rule Result. Builder
Information about the result of a data quality rule for data quality scan.
The monitored resource is 'DataScan'.
com. google. cloud. dataplex. v1. Data Quality Spec
DataQualityScan related setting.
com. google. cloud. dataplex. v1. Data Quality Spec. Builder
DataQualityScan related setting.
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions
The configuration of post scan actions of DataQualityScan.
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Big Query Export
The configuration of BigQuery export post scan action.
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Big Query Export. Builder
The configuration of BigQuery export post scan action.
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Builder
The configuration of post scan actions of DataQualityScan.
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Job End Trigger
This trigger is triggered whenever a scan job run ends, regardless
of the result.
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Job End Trigger. Builder
This trigger is triggered whenever a scan job run ends, regardless
of the result.
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Job Failure Trigger
This trigger is triggered when the scan job itself fails, regardless of
the result.
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Job Failure Trigger. Builder
This trigger is triggered when the scan job itself fails, regardless of
the result.
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Notification Report
The configuration of notification report post scan action.
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Notification Report. Builder
The configuration of notification report post scan action.
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Recipients
The individuals or groups who are designated to receive notifications
upon triggers.
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Recipients. Builder
The individuals or groups who are designated to receive notifications
upon triggers.
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Score Threshold Trigger
This trigger is triggered when the DQ score in the job result is less
than a specified input score.
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Score Threshold Trigger. Builder
This trigger is triggered when the DQ score in the job result is less
than a specified input score.
com. google. cloud. dataplex. v1. Data Scan
Represents a user-visible job which provides the insights for the related
data source.
com. google. cloud. dataplex. v1. Data Scan. Builder
Represents a user-visible job which provides the insights for the related
data source.
com. google. cloud. dataplex. v1. Data Scan. Execution Spec
DataScan execution settings.
com. google. cloud. dataplex. v1. Data Scan. Execution Spec. Builder
DataScan execution settings.
com. google. cloud. dataplex. v1. Data Scan. Execution Status
Status of the data scan execution.
com. google. cloud. dataplex. v1. Data Scan. Execution Status. Builder
Status of the data scan execution.
com. google. cloud. dataplex. v1. Data Scan Catalog Publishing Status
The status of publishing the data scan result as Dataplex Universal Catalog
metadata. Multiple DataScan log events may exist, each with different
publishing information depending on the type of publishing triggered.
com. google. cloud. dataplex. v1. Data Scan Catalog Publishing Status. Builder
The status of publishing the data scan result as Dataplex Universal Catalog
metadata. Multiple DataScan log events may exist, each with different
publishing information depending on the type of publishing triggered.
com. google. cloud. dataplex. v1. Data Scan Event
These messages contain information about the execution of a datascan.
The monitored resource is 'DataScan'
com. google. cloud. dataplex. v1. Data Scan Event. Builder
These messages contain information about the execution of a datascan.
The monitored resource is 'DataScan'
com. google. cloud. dataplex. v1. Data Scan Event. Data Profile Applied Configs
Applied configs for data profile type data scan job.
com. google. cloud. dataplex. v1. Data Scan Event. Data Profile Applied Configs. Builder
Applied configs for data profile type data scan job.
com. google. cloud. dataplex. v1. Data Scan Event. Data Profile Result
Data profile result for data scan job.
com. google. cloud. dataplex. v1. Data Scan Event. Data Profile Result. Builder
Data profile result for data scan job.
com. google. cloud. dataplex. v1. Data Scan Event. Data Quality Applied Configs
Applied configs for data quality type data scan job.
com. google. cloud. dataplex. v1. Data Scan Event. Data Quality Applied Configs. Builder
Applied configs for data quality type data scan job.
com. google. cloud. dataplex. v1. Data Scan Event. Data Quality Result
Data quality result for data scan job.
com. google. cloud. dataplex. v1. Data Scan Event. Data Quality Result. Builder
Data quality result for data scan job.
com. google. cloud. dataplex. v1. Data Scan Event. Post Scan Actions Result
Post scan actions result for data scan job.
com. google. cloud. dataplex. v1. Data Scan Event. Post Scan Actions Result. Big Query Export Result
The result of BigQuery export post scan action.
com. google. cloud. dataplex. v1. Data Scan Event. Post Scan Actions Result. Big Query Export Result. Builder
The result of BigQuery export post scan action.
com. google. cloud. dataplex. v1. Data Scan Event. Post Scan Actions Result. Builder
Post scan actions result for data scan job.
com. google. cloud. dataplex. v1. Data Scan Job
A DataScanJob represents an instance of DataScan execution.
com. google. cloud. dataplex. v1. Data Scan Job. Builder
A DataScanJob represents an instance of DataScan execution.
com. google. cloud. dataplex. v1. Data Scan Job Name
com. google. cloud. dataplex. v1. Data Scan Job Name. Builder
Builder for projects/{project}/locations/{location}/dataScans/{dataScan}/jobs/{job}.
com. google. cloud. dataplex. v1. Data Scan Name
com. google. cloud. dataplex. v1. Data Scan Name. Builder
Builder for projects/{project}/locations/{location}/dataScans/{dataScan}.
com. google. cloud. dataplex. v1. Data Scan Service Client. List Data Scan Jobs Fixed Size Collection
com. google. cloud. dataplex. v1. Data Scan Service Client. List Data Scan Jobs Page
com. google. cloud. dataplex. v1. Data Scan Service Client. List Data Scan Jobs Paged Response
com. google. cloud. dataplex. v1. Data Scan Service Client. List Data Scans Fixed Size Collection
com. google. cloud. dataplex. v1. Data Scan Service Client. List Data Scans Page
com. google. cloud. dataplex. v1. Data Scan Service Client. List Data Scans Paged Response
com. google. cloud. dataplex. v1. Data Scan Service Client. List Locations Fixed Size Collection
com. google. cloud. dataplex. v1. Data Scan Service Client. List Locations Page
com. google. cloud. dataplex. v1. Data Scan Service Client. List Locations Paged Response
com. google. cloud. dataplex. v1. Data Scan Service Grpc
DataScanService manages DataScan resources which can be configured to run
various types of data scanning workload and generate enriched metadata (e.g.
Data Profile, Data Quality) for the data source.
com. google. cloud. dataplex. v1. Data Scan Service Grpc. Data Scan Service Impl Base
Base class for the server implementation of the service DataScanService.
DataScanService manages DataScan resources which can be configured to run
com. google. cloud. dataplex. v1. Data Scan Service Settings. Builder
Builder for DataScanServiceSettings.
com. google. cloud. dataplex. v1. Data Scans Common Proto
com. google. cloud. dataplex. v1. Data Scans Proto
com. google. cloud. dataplex. v1. Data Source
The data source for DataScan.
com. google. cloud. dataplex. v1. Data Source. Builder
The data source for DataScan.
com. google. cloud. dataplex. v1. Data Taxonomy
DataTaxonomy represents a set of hierarchical DataAttributes resources,
grouped with a common theme Eg: 'SensitiveDataTaxonomy' can have attributes
to manage PII data. It is defined at project level.
com. google. cloud. dataplex. v1. Data Taxonomy. Builder
DataTaxonomy represents a set of hierarchical DataAttributes resources,
grouped with a common theme Eg: 'SensitiveDataTaxonomy' can have attributes
to manage PII data. It is defined at project level.
com. google. cloud. dataplex. v1. Data Taxonomy Name
com. google. cloud. dataplex. v1. Data Taxonomy Name. Builder
Builder for projects/{project}/locations/{location}/dataTaxonomies/{data_taxonomy_id}.
com. google. cloud. dataplex. v1. Data Taxonomy Proto
com. google. cloud. dataplex. v1. Data Taxonomy Service Client. List Data Attribute Bindings Fixed Size Collection
com. google. cloud. dataplex. v1. Data Taxonomy Service Client. List Data Attribute Bindings Page
com. google. cloud. dataplex. v1. Data Taxonomy Service Client. List Data Attribute Bindings Paged Response
com. google. cloud. dataplex. v1. Data Taxonomy Service Client. List Data Attributes Fixed Size Collection
com. google. cloud. dataplex. v1. Data Taxonomy Service Client. List Data Attributes Page
com. google. cloud. dataplex. v1. Data Taxonomy Service Client. List Data Attributes Paged Response
com. google. cloud. dataplex. v1. Data Taxonomy Service Client. List Data Taxonomies Fixed Size Collection
com. google. cloud. dataplex. v1. Data Taxonomy Service Client. List Data Taxonomies Page
com. google. cloud. dataplex. v1. Data Taxonomy Service Client. List Data Taxonomies Paged Response
com. google. cloud. dataplex. v1. Data Taxonomy Service Client. List Locations Fixed Size Collection
com. google. cloud. dataplex. v1. Data Taxonomy Service Client. List Locations Page
com. google. cloud. dataplex. v1. Data Taxonomy Service Client. List Locations Paged Response
com. google. cloud. dataplex. v1. Data Taxonomy Service Grpc
DataTaxonomyService enables attribute-based governance. The resources
currently offered include DataTaxonomy and DataAttribute.
com. google. cloud. dataplex. v1. Data Taxonomy Service Grpc. Data Taxonomy Service Impl Base
Base class for the server implementation of the service DataTaxonomyService.
DataTaxonomyService enables attribute-based governance. The resources
com. google. cloud. dataplex. v1. Data Taxonomy Service Settings. Builder
Builder for DataTaxonomyServiceSettings.
com. google. cloud. dataplex. v1. Dataplex Service Client. List Asset Actions Fixed Size Collection
com. google. cloud. dataplex. v1. Dataplex Service Client. List Asset Actions Page
com. google. cloud. dataplex. v1. Dataplex Service Client. List Asset Actions Paged Response
com. google. cloud. dataplex. v1. Dataplex Service Client. List Assets Fixed Size Collection
com. google. cloud. dataplex. v1. Dataplex Service Client. List Assets Page
com. google. cloud. dataplex. v1. Dataplex Service Client. List Assets Paged Response
com. google. cloud. dataplex. v1. Dataplex Service Client. List Jobs Fixed Size Collection
com. google. cloud. dataplex. v1. Dataplex Service Client. List Jobs Page
com. google. cloud. dataplex. v1. Dataplex Service Client. List Jobs Paged Response
com. google. cloud. dataplex. v1. Dataplex Service Client. List Lake Actions Fixed Size Collection
com. google. cloud. dataplex. v1. Dataplex Service Client. List Lake Actions Page
com. google. cloud. dataplex. v1. Dataplex Service Client. List Lake Actions Paged Response
com. google. cloud. dataplex. v1. Dataplex Service Client. List Lakes Fixed Size Collection
com. google. cloud. dataplex. v1. Dataplex Service Client. List Lakes Page
com. google. cloud. dataplex. v1. Dataplex Service Client. List Lakes Paged Response
com. google. cloud. dataplex. v1. Dataplex Service Client. List Locations Fixed Size Collection
com. google. cloud. dataplex. v1. Dataplex Service Client. List Locations Page
com. google. cloud. dataplex. v1. Dataplex Service Client. List Locations Paged Response
com. google. cloud. dataplex. v1. Dataplex Service Client. List Tasks Fixed Size Collection
com. google. cloud. dataplex. v1. Dataplex Service Client. List Tasks Page
com. google. cloud. dataplex. v1. Dataplex Service Client. List Tasks Paged Response
com. google. cloud. dataplex. v1. Dataplex Service Client. List Zone Actions Fixed Size Collection
com. google. cloud. dataplex. v1. Dataplex Service Client. List Zone Actions Page
com. google. cloud. dataplex. v1. Dataplex Service Client. List Zone Actions Paged Response
com. google. cloud. dataplex. v1. Dataplex Service Client. List Zones Fixed Size Collection
com. google. cloud. dataplex. v1. Dataplex Service Client. List Zones Page
com. google. cloud. dataplex. v1. Dataplex Service Client. List Zones Paged Response
com. google. cloud. dataplex. v1. Dataplex Service Grpc
Dataplex service provides data lakes as a service. The primary resources
offered by this service are Lakes, Zones and Assets which collectively allow
a data administrator to organize, manage, secure and catalog data across
com. google. cloud. dataplex. v1. Dataplex Service Grpc. Dataplex Service Impl Base
Base class for the server implementation of the service DataplexService.
Dataplex service provides data lakes as a service. The primary resources
com. google. cloud. dataplex. v1. Dataplex Service Settings. Builder
Builder for DataplexServiceSettings.
com. google. cloud. dataplex. v1. Delete Aspect Type Request
Delete AspectType Request.
com. google. cloud. dataplex. v1. Delete Aspect Type Request. Builder
Delete AspectType Request.
com. google. cloud. dataplex. v1. Delete Asset Request
Delete asset request.
com. google. cloud. dataplex. v1. Delete Asset Request. Builder
Delete asset request.
com. google. cloud. dataplex. v1. Delete Data Asset Request
Request message for deleting a data asset.
com. google. cloud. dataplex. v1. Delete Data Asset Request. Builder
Request message for deleting a data asset.
com. google. cloud. dataplex. v1. Delete Data Attribute Binding Request
Delete DataAttributeBinding request.
com. google. cloud. dataplex. v1. Delete Data Attribute Binding Request. Builder
Delete DataAttributeBinding request.
com. google. cloud. dataplex. v1. Delete Data Attribute Request
Delete DataAttribute request.
com. google. cloud. dataplex. v1. Delete Data Attribute Request. Builder
Delete DataAttribute request.
com. google. cloud. dataplex. v1. Delete Data Product Request
Request message for deleting a data product.
com. google. cloud. dataplex. v1. Delete Data Product Request. Builder
Request message for deleting a data product.
com. google. cloud. dataplex. v1. Delete Data Scan Request
Delete dataScan request.
com. google. cloud. dataplex. v1. Delete Data Scan Request. Builder
Delete dataScan request.
com. google. cloud. dataplex. v1. Delete Data Taxonomy Request
Delete DataTaxonomy request.
com. google. cloud. dataplex. v1. Delete Data Taxonomy Request. Builder
Delete DataTaxonomy request.
com. google. cloud. dataplex. v1. Delete Encryption Config Request
Delete EncryptionConfig Request
com. google. cloud. dataplex. v1. Delete Encryption Config Request. Builder
Delete EncryptionConfig Request
com. google. cloud. dataplex. v1. Delete Entity Request
Delete a metadata entity request.
com. google. cloud. dataplex. v1. Delete Entity Request. Builder
Delete a metadata entity request.
com. google. cloud. dataplex. v1. Delete Entry Group Request
Delete EntryGroup Request.
com. google. cloud. dataplex. v1. Delete Entry Group Request. Builder
Delete EntryGroup Request.
com. google. cloud. dataplex. v1. Delete Entry Link Request
Request message for DeleteEntryLink.
com. google. cloud. dataplex. v1. Delete Entry Link Request. Builder
Request message for DeleteEntryLink.
com. google. cloud. dataplex. v1. Delete Entry Request
Delete Entry request.
com. google. cloud. dataplex. v1. Delete Entry Request. Builder
Delete Entry request.
com. google. cloud. dataplex. v1. Delete Entry Type Request
Delete EntryType Request.
com. google. cloud. dataplex. v1. Delete Entry Type Request. Builder
Delete EntryType Request.
com. google. cloud. dataplex. v1. Delete Glossary Category Request
Delete GlossaryCategory Request
com. google. cloud. dataplex. v1. Delete Glossary Category Request. Builder
Delete GlossaryCategory Request
com. google. cloud. dataplex. v1. Delete Glossary Request
Delete Glossary Request
com. google. cloud. dataplex. v1. Delete Glossary Request. Builder
Delete Glossary Request
com. google. cloud. dataplex. v1. Delete Glossary Term Request
Delete GlossaryTerm Request
com. google. cloud. dataplex. v1. Delete Glossary Term Request. Builder
Delete GlossaryTerm Request
com. google. cloud. dataplex. v1. Delete Lake Request
Delete lake request.
com. google. cloud. dataplex. v1. Delete Lake Request. Builder
Delete lake request.
com. google. cloud. dataplex. v1. Delete Metadata Feed Request
Request message for DeleteMetadataFeed.
com. google. cloud. dataplex. v1. Delete Metadata Feed Request. Builder
Request message for DeleteMetadataFeed.
com. google. cloud. dataplex. v1. Delete Partition Request
Delete metadata partition request.
com. google. cloud. dataplex. v1. Delete Partition Request. Builder
Delete metadata partition request.
com. google. cloud. dataplex. v1. Delete Task Request
Delete task request.
com. google. cloud. dataplex. v1. Delete Task Request. Builder
Delete task request.
com. google. cloud. dataplex. v1. Delete Zone Request
Delete zone request.
com. google. cloud. dataplex. v1. Delete Zone Request. Builder
Delete zone request.
com. google. cloud. dataplex. v1. Discovery Event
The payload associated with Discovery data processing.
com. google. cloud. dataplex. v1. Discovery Event. Action Details
Details about the action.
com. google. cloud. dataplex. v1. Discovery Event. Action Details. Builder
Details about the action.
com. google. cloud. dataplex. v1. Discovery Event. Builder
The payload associated with Discovery data processing.
com. google. cloud. dataplex. v1. Discovery Event. Config Details
Details about configuration events.
com. google. cloud. dataplex. v1. Discovery Event. Config Details. Builder
Details about configuration events.
com. google. cloud. dataplex. v1. Discovery Event. Entity Details
Details about the entity.
com. google. cloud. dataplex. v1. Discovery Event. Entity Details. Builder
Details about the entity.
com. google. cloud. dataplex. v1. Discovery Event. Partition Details
Details about the partition.
com. google. cloud. dataplex. v1. Discovery Event. Partition Details. Builder
Details about the partition.
com. google. cloud. dataplex. v1. Discovery Event. Table Details
Details about the published table.
com. google. cloud. dataplex. v1. Discovery Event. Table Details. Builder
Details about the published table.
com. google. cloud. dataplex. v1. Encryption Config
A Resource designed to manage encryption configurations for customers to
support Customer Managed Encryption Keys (CMEK).
com. google. cloud. dataplex. v1. Encryption Config. Builder
A Resource designed to manage encryption configurations for customers to
support Customer Managed Encryption Keys (CMEK).
com. google. cloud. dataplex. v1. Encryption Config. Failure Details
Details of the failure if anything related to Cmek db fails.
com. google. cloud. dataplex. v1. Encryption Config. Failure Details. Builder
Details of the failure if anything related to Cmek db fails.
com. google. cloud. dataplex. v1. Encryption Config Name
com. google. cloud. dataplex. v1. Encryption Config Name. Builder
Builder for
organizations/{organization}/locations/{location}/encryptionConfigs/{encryption_config}.
com. google. cloud. dataplex. v1. Entity
Represents tables and fileset metadata contained within a zone.
com. google. cloud. dataplex. v1. Entity. Builder
Represents tables and fileset metadata contained within a zone.
com. google. cloud. dataplex. v1. Entity. Compatibility Status
Provides compatibility information for various metadata stores.
com. google. cloud. dataplex. v1. Entity. Compatibility Status. Builder
Provides compatibility information for various metadata stores.
com. google. cloud. dataplex. v1. Entity. Compatibility Status. Compatibility
Provides compatibility information for a specific metadata store.
com. google. cloud. dataplex. v1. Entity. Compatibility Status. Compatibility. Builder
Provides compatibility information for a specific metadata store.
com. google. cloud. dataplex. v1. Entity Name
com. google. cloud. dataplex. v1. Entity Name. Builder
Builder for
projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity}.
com. google. cloud. dataplex. v1. Entry
An entry is a representation of a data resource that can be described by
various metadata.
com. google. cloud. dataplex. v1. Entry. Builder
An entry is a representation of a data resource that can be described by
various metadata.
com. google. cloud. dataplex. v1. Entry Group
An Entry Group represents a logical grouping of one or more Entries.
com. google. cloud. dataplex. v1. Entry Group. Builder
An Entry Group represents a logical grouping of one or more Entries.
com. google. cloud. dataplex. v1. Entry Group Name
com. google. cloud. dataplex. v1. Entry Group Name. Builder
Builder for projects/{project}/locations/{location}/entryGroups/{entry_group}.
com. google. cloud. dataplex. v1. Entry Link
EntryLink represents a link between two Entries.
com. google. cloud. dataplex. v1. Entry Link. Builder
EntryLink represents a link between two Entries.
com. google. cloud. dataplex. v1. Entry Link. Entry Reference
Reference to the Entry that is linked through the Entry Link.
com. google. cloud. dataplex. v1. Entry Link. Entry Reference. Builder
Reference to the Entry that is linked through the Entry Link.
com. google. cloud. dataplex. v1. Entry Link Event
Payload associated with Entry related log events.
com. google. cloud. dataplex. v1. Entry Link Event. Builder
Payload associated with Entry related log events.
com. google. cloud. dataplex. v1. Entry Link Name
com. google. cloud. dataplex. v1. Entry Link Name. Builder
Builder for
projects/{project}/locations/{location}/entryGroups/{entry_group}/entryLinks/{entry_link}.
com. google. cloud. dataplex. v1. Entry Name
com. google. cloud. dataplex. v1. Entry Name. Builder
Builder for projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}.
com. google. cloud. dataplex. v1. Entry Source
Information related to the source system of the data resource that is
represented by the entry.
com. google. cloud. dataplex. v1. Entry Source. Ancestor
Information about individual items in the hierarchy that is associated with
the data resource.
com. google. cloud. dataplex. v1. Entry Source. Ancestor. Builder
Information about individual items in the hierarchy that is associated with
the data resource.
com. google. cloud. dataplex. v1. Entry Source. Builder
Information related to the source system of the data resource that is
represented by the entry.
com. google. cloud. dataplex. v1. Entry Type
Entry Type is a template for creating Entries.
com. google. cloud. dataplex. v1. Entry Type. Aspect Info
Protobuf type google.cloud.dataplex.v1.EntryType.AspectInfo
com. google. cloud. dataplex. v1. Entry Type. Aspect Info. Builder
Protobuf type google.cloud.dataplex.v1.EntryType.AspectInfo
com. google. cloud. dataplex. v1. Entry Type. Authorization
Authorization for an Entry Type.
com. google. cloud. dataplex. v1. Entry Type. Authorization. Builder
Authorization for an Entry Type.
com. google. cloud. dataplex. v1. Entry Type. Builder
Entry Type is a template for creating Entries.
com. google. cloud. dataplex. v1. Entry Type Name
com. google. cloud. dataplex. v1. Entry Type Name. Builder
Builder for projects/{project}/locations/{location}/entryTypes/{entry_type}.
com. google. cloud. dataplex. v1. Environment
Environment represents a user-visible compute infrastructure for analytics
within a lake.
com. google. cloud. dataplex. v1. Environment. Builder
Environment represents a user-visible compute infrastructure for analytics
within a lake.
com. google. cloud. dataplex. v1. Environment. Endpoints
URI Endpoints to access sessions associated with the Environment.
com. google. cloud. dataplex. v1. Environment. Endpoints. Builder
URI Endpoints to access sessions associated with the Environment.
com. google. cloud. dataplex. v1. Environment. Infrastructure Spec
Configuration for the underlying infrastructure used to run workloads.
com. google. cloud. dataplex. v1. Environment. Infrastructure Spec. Builder
Configuration for the underlying infrastructure used to run workloads.
com. google. cloud. dataplex. v1. Environment. Infrastructure Spec. Compute Resources
Compute resources associated with the analyze interactive workloads.
com. google. cloud. dataplex. v1. Environment. Infrastructure Spec. Compute Resources. Builder
Compute resources associated with the analyze interactive workloads.
com. google. cloud. dataplex. v1. Environment. Infrastructure Spec. Os Image Runtime
Software Runtime Configuration to run Analyze.
com. google. cloud. dataplex. v1. Environment. Infrastructure Spec. Os Image Runtime. Builder
Software Runtime Configuration to run Analyze.
com. google. cloud. dataplex. v1. Environment. Session Spec
Configuration for sessions created for this environment.
com. google. cloud. dataplex. v1. Environment. Session Spec. Builder
Configuration for sessions created for this environment.
com. google. cloud. dataplex. v1. Environment. Session Status
Status of sessions created for this environment.
com. google. cloud. dataplex. v1. Environment. Session Status. Builder
Status of sessions created for this environment.
com. google. cloud. dataplex. v1. Generate Data Quality Rules Request
Request details for generating data quality rule recommendations.
com. google. cloud. dataplex. v1. Generate Data Quality Rules Request. Builder
Request details for generating data quality rule recommendations.
com. google. cloud. dataplex. v1. Generate Data Quality Rules Response
Response details for data quality rule recommendations.
com. google. cloud. dataplex. v1. Generate Data Quality Rules Response. Builder
Response details for data quality rule recommendations.
com. google. cloud. dataplex. v1. Get Aspect Type Request
Get AspectType request.
com. google. cloud. dataplex. v1. Get Aspect Type Request. Builder
Get AspectType request.
com. google. cloud. dataplex. v1. Get Asset Request
Get asset request.
com. google. cloud. dataplex. v1. Get Asset Request. Builder
Get asset request.
com. google. cloud. dataplex. v1. Get Data Asset Request
Request message for getting a data asset.
com. google. cloud. dataplex. v1. Get Data Asset Request. Builder
Request message for getting a data asset.
com. google. cloud. dataplex. v1. Get Data Attribute Binding Request
Get DataAttributeBinding request.
com. google. cloud. dataplex. v1. Get Data Attribute Binding Request. Builder
Get DataAttributeBinding request.
com. google. cloud. dataplex. v1. Get Data Attribute Request
Get DataAttribute request.
com. google. cloud. dataplex. v1. Get Data Attribute Request. Builder
Get DataAttribute request.
com. google. cloud. dataplex. v1. Get Data Product Request
Request message for getting a data product.
com. google. cloud. dataplex. v1. Get Data Product Request. Builder
Request message for getting a data product.
com. google. cloud. dataplex. v1. Get Data Scan Job Request
Get DataScanJob request.
com. google. cloud. dataplex. v1. Get Data Scan Job Request. Builder
Get DataScanJob request.
com. google. cloud. dataplex. v1. Get Data Scan Request
Get dataScan request.
com. google. cloud. dataplex. v1. Get Data Scan Request. Builder
Get dataScan request.
com. google. cloud. dataplex. v1. Get Data Taxonomy Request
Get DataTaxonomy request.
com. google. cloud. dataplex. v1. Get Data Taxonomy Request. Builder
Get DataTaxonomy request.
com. google. cloud. dataplex. v1. Get Encryption Config Request
Get EncryptionConfig Request
com. google. cloud. dataplex. v1. Get Encryption Config Request. Builder
Get EncryptionConfig Request
com. google. cloud. dataplex. v1. Get Entity Request
Get metadata entity request.
com. google. cloud. dataplex. v1. Get Entity Request. Builder
Get metadata entity request.
com. google. cloud. dataplex. v1. Get Entry Group Request
Get EntryGroup request.
com. google. cloud. dataplex. v1. Get Entry Group Request. Builder
Get EntryGroup request.
com. google. cloud. dataplex. v1. Get Entry Link Request
Request message for GetEntryLink.
com. google. cloud. dataplex. v1. Get Entry Link Request. Builder
Request message for GetEntryLink.
com. google. cloud. dataplex. v1. Get Entry Request
Get Entry request.
com. google. cloud. dataplex. v1. Get Entry Request. Builder
Get Entry request.
com. google. cloud. dataplex. v1. Get Entry Type Request
Get EntryType request.
com. google. cloud. dataplex. v1. Get Entry Type Request. Builder
Get EntryType request.
com. google. cloud. dataplex. v1. Get Glossary Category Request
Get GlossaryCategory Request
com. google. cloud. dataplex. v1. Get Glossary Category Request. Builder
Get GlossaryCategory Request
com. google. cloud. dataplex. v1. Get Glossary Request
Get Glossary Request
com. google. cloud. dataplex. v1. Get Glossary Request. Builder
Get Glossary Request
com. google. cloud. dataplex. v1. Get Glossary Term Request
Get GlossaryTerm Request
com. google. cloud. dataplex. v1. Get Glossary Term Request. Builder
Get GlossaryTerm Request
com. google. cloud. dataplex. v1. Get Job Request
Get job request.
com. google. cloud. dataplex. v1. Get Job Request. Builder
Get job request.
com. google. cloud. dataplex. v1. Get Lake Request
Get lake request.
com. google. cloud. dataplex. v1. Get Lake Request. Builder
Get lake request.
com. google. cloud. dataplex. v1. Get Metadata Feed Request
Request message for GetMetadataFeed.
com. google. cloud. dataplex. v1. Get Metadata Feed Request. Builder
Request message for GetMetadataFeed.
com. google. cloud. dataplex. v1. Get Metadata Job Request
Get metadata job request.
com. google. cloud. dataplex. v1. Get Metadata Job Request. Builder
Get metadata job request.
com. google. cloud. dataplex. v1. Get Partition Request
Get metadata partition request.
com. google. cloud. dataplex. v1. Get Partition Request. Builder
Get metadata partition request.
com. google. cloud. dataplex. v1. Get Task Request
Get task request.
com. google. cloud. dataplex. v1. Get Task Request. Builder
Get task request.
com. google. cloud. dataplex. v1. Get Zone Request
Get zone request.
com. google. cloud. dataplex. v1. Get Zone Request. Builder
Get zone request.
com. google. cloud. dataplex. v1. Glossary
A Glossary represents a collection of GlossaryCategories and GlossaryTerms
defined by the user. Glossary is a top level resource and is the Google Cloud
parent resource of all the GlossaryCategories and GlossaryTerms within it.
com. google. cloud. dataplex. v1. Glossary. Builder
A Glossary represents a collection of GlossaryCategories and GlossaryTerms
defined by the user. Glossary is a top level resource and is the Google Cloud
parent resource of all the GlossaryCategories and GlossaryTerms within it.
com. google. cloud. dataplex. v1. Glossary Category
A GlossaryCategory represents a collection of GlossaryCategories and
GlossaryTerms within a Glossary that are related to each other.
com. google. cloud. dataplex. v1. Glossary Category. Builder
A GlossaryCategory represents a collection of GlossaryCategories and
GlossaryTerms within a Glossary that are related to each other.
com. google. cloud. dataplex. v1. Glossary Category Name
com. google. cloud. dataplex. v1. Glossary Category Name. Builder
Builder for
projects/{project}/locations/{location}/glossaries/{glossary}/categories/{glossary_category}.
com. google. cloud. dataplex. v1. Glossary Name
com. google. cloud. dataplex. v1. Glossary Name. Builder
Builder for projects/{project}/locations/{location}/glossaries/{glossary}.
com. google. cloud. dataplex. v1. Glossary Term
GlossaryTerms are the core of Glossary.
A GlossaryTerm holds a rich text description that can be attached to Entries
or specific columns to enrich them.
com. google. cloud. dataplex. v1. Glossary Term. Builder
GlossaryTerms are the core of Glossary.
A GlossaryTerm holds a rich text description that can be attached to Entries
or specific columns to enrich them.
com. google. cloud. dataplex. v1. Glossary Term Name
com. google. cloud. dataplex. v1. Glossary Term Name. Builder
Builder for
projects/{project}/locations/{location}/glossaries/{glossary}/terms/{glossary_term}.
com. google. cloud. dataplex. v1. Governance Event
Payload associated with Governance related log events.
com. google. cloud. dataplex. v1. Governance Event. Builder
Payload associated with Governance related log events.
com. google. cloud. dataplex. v1. Governance Event. Entity
Information about Entity resource that the log event is associated with.
com. google. cloud. dataplex. v1. Governance Event. Entity. Builder
Information about Entity resource that the log event is associated with.
com. google. cloud. dataplex. v1. Import Item
An object that describes the values that you want to set for an entry and its
attached aspects when you import metadata. Used when you run a metadata
import job. See
com. google. cloud. dataplex. v1. Import Item. Builder
An object that describes the values that you want to set for an entry and its
attached aspects when you import metadata. Used when you run a metadata
import job. See
com. google. cloud. dataplex. v1. Job
A job represents an instance of a task.
com. google. cloud. dataplex. v1. Job. Builder
A job represents an instance of a task.
com. google. cloud. dataplex. v1. Job Event
The payload associated with Job logs that contains events describing jobs
that have run within a Lake.
com. google. cloud. dataplex. v1. Job Event. Builder
The payload associated with Job logs that contains events describing jobs
that have run within a Lake.
com. google. cloud. dataplex. v1. Job Name
com. google. cloud. dataplex. v1. Job Name. Builder
Builder for projects/{project}/locations/{location}/lakes/{lake}/tasks/{task}/jobs/{job}.
com. google. cloud. dataplex. v1. Lake
A lake is a centralized repository for managing enterprise data across the
organization distributed across many cloud projects, and stored in a variety
of storage services such as Google Cloud Storage and BigQuery. The resources
com. google. cloud. dataplex. v1. Lake. Builder
A lake is a centralized repository for managing enterprise data across the
organization distributed across many cloud projects, and stored in a variety
of storage services such as Google Cloud Storage and BigQuery. The resources
com. google. cloud. dataplex. v1. Lake. Metastore
Settings to manage association of Dataproc Metastore with a lake.
com. google. cloud. dataplex. v1. Lake. Metastore. Builder
Settings to manage association of Dataproc Metastore with a lake.
com. google. cloud. dataplex. v1. Lake. Metastore Status
Status of Lake and Dataproc Metastore service instance association.
com. google. cloud. dataplex. v1. Lake. Metastore Status. Builder
Status of Lake and Dataproc Metastore service instance association.
com. google. cloud. dataplex. v1. Lake Name
com. google. cloud. dataplex. v1. Lake Name. Builder
Builder for projects/{project}/locations/{location}/lakes/{lake}.
com. google. cloud. dataplex. v1. List Actions Response
List actions response.
com. google. cloud. dataplex. v1. List Actions Response. Builder
List actions response.
com. google. cloud. dataplex. v1. List Aspect Types Request
List AspectTypes request.
com. google. cloud. dataplex. v1. List Aspect Types Request. Builder
List AspectTypes request.
com. google. cloud. dataplex. v1. List Aspect Types Response
List AspectTypes response.
com. google. cloud. dataplex. v1. List Aspect Types Response. Builder
List AspectTypes response.
com. google. cloud. dataplex. v1. List Asset Actions Request
List asset actions request.
com. google. cloud. dataplex. v1. List Asset Actions Request. Builder
List asset actions request.
com. google. cloud. dataplex. v1. List Assets Request
List assets request.
com. google. cloud. dataplex. v1. List Assets Request. Builder
List assets request.
com. google. cloud. dataplex. v1. List Assets Response
List assets response.
com. google. cloud. dataplex. v1. List Assets Response. Builder
List assets response.
com. google. cloud. dataplex. v1. List Data Assets Request
Request message for listing data assets.
com. google. cloud. dataplex. v1. List Data Assets Request. Builder
Request message for listing data assets.
com. google. cloud. dataplex. v1. List Data Assets Response
Response message for listing data assets.
com. google. cloud. dataplex. v1. List Data Assets Response. Builder
Response message for listing data assets.
com. google. cloud. dataplex. v1. List Data Attribute Bindings Request
List DataAttributeBindings request.
com. google. cloud. dataplex. v1. List Data Attribute Bindings Request. Builder
List DataAttributeBindings request.
com. google. cloud. dataplex. v1. List Data Attribute Bindings Response
List DataAttributeBindings response.
com. google. cloud. dataplex. v1. List Data Attribute Bindings Response. Builder
List DataAttributeBindings response.
com. google. cloud. dataplex. v1. List Data Attributes Request
List DataAttributes request.
com. google. cloud. dataplex. v1. List Data Attributes Request. Builder
List DataAttributes request.
com. google. cloud. dataplex. v1. List Data Attributes Response
List DataAttributes response.
com. google. cloud. dataplex. v1. List Data Attributes Response. Builder
List DataAttributes response.
com. google. cloud. dataplex. v1. List Data Products Request
Request message for listing data products.
com. google. cloud. dataplex. v1. List Data Products Request. Builder
Request message for listing data products.
com. google. cloud. dataplex. v1. List Data Products Response
Response message for listing data products.
com. google. cloud. dataplex. v1. List Data Products Response. Builder
Response message for listing data products.
com. google. cloud. dataplex. v1. List Data Scan Jobs Request
List DataScanJobs request.
com. google. cloud. dataplex. v1. List Data Scan Jobs Request. Builder
List DataScanJobs request.
com. google. cloud. dataplex. v1. List Data Scan Jobs Response
List DataScanJobs response.
com. google. cloud. dataplex. v1. List Data Scan Jobs Response. Builder
List DataScanJobs response.
com. google. cloud. dataplex. v1. List Data Scans Request
List dataScans request.
com. google. cloud. dataplex. v1. List Data Scans Request. Builder
List dataScans request.
com. google. cloud. dataplex. v1. List Data Scans Response
List dataScans response.
com. google. cloud. dataplex. v1. List Data Scans Response. Builder
List dataScans response.
com. google. cloud. dataplex. v1. List Data Taxonomies Request
List DataTaxonomies request.
com. google. cloud. dataplex. v1. List Data Taxonomies Request. Builder
List DataTaxonomies request.
com. google. cloud. dataplex. v1. List Data Taxonomies Response
List DataTaxonomies response.
com. google. cloud. dataplex. v1. List Data Taxonomies Response. Builder
List DataTaxonomies response.
com. google. cloud. dataplex. v1. List Encryption Configs Request
List EncryptionConfigs Request
com. google. cloud. dataplex. v1. List Encryption Configs Request. Builder
List EncryptionConfigs Request
com. google. cloud. dataplex. v1. List Encryption Configs Response
List EncryptionConfigs Response
com. google. cloud. dataplex. v1. List Encryption Configs Response. Builder
List EncryptionConfigs Response
com. google. cloud. dataplex. v1. List Entities Request
List metadata entities request.
com. google. cloud. dataplex. v1. List Entities Request. Builder
List metadata entities request.
com. google. cloud. dataplex. v1. List Entities Response
List metadata entities response.
com. google. cloud. dataplex. v1. List Entities Response. Builder
List metadata entities response.
com. google. cloud. dataplex. v1. List Entries Request
List Entries request.
com. google. cloud. dataplex. v1. List Entries Request. Builder
List Entries request.
com. google. cloud. dataplex. v1. List Entries Response
List Entries response.
com. google. cloud. dataplex. v1. List Entries Response. Builder
List Entries response.
com. google. cloud. dataplex. v1. List Entry Groups Request
List entryGroups request.
com. google. cloud. dataplex. v1. List Entry Groups Request. Builder
List entryGroups request.
com. google. cloud. dataplex. v1. List Entry Groups Response
List entry groups response.
com. google. cloud. dataplex. v1. List Entry Groups Response. Builder
List entry groups response.
com. google. cloud. dataplex. v1. List Entry Types Request
List EntryTypes request
com. google. cloud. dataplex. v1. List Entry Types Request. Builder
List EntryTypes request
com. google. cloud. dataplex. v1. List Entry Types Response
List EntryTypes response.
com. google. cloud. dataplex. v1. List Entry Types Response. Builder
List EntryTypes response.
com. google. cloud. dataplex. v1. List Glossaries Request
List Glossaries Request
com. google. cloud. dataplex. v1. List Glossaries Request. Builder
List Glossaries Request
com. google. cloud. dataplex. v1. List Glossaries Response
List Glossaries Response
com. google. cloud. dataplex. v1. List Glossaries Response. Builder
List Glossaries Response
com. google. cloud. dataplex. v1. List Glossary Categories Request
List GlossaryCategories Request
com. google. cloud. dataplex. v1. List Glossary Categories Request. Builder
List GlossaryCategories Request
com. google. cloud. dataplex. v1. List Glossary Categories Response
List GlossaryCategories Response
com. google. cloud. dataplex. v1. List Glossary Categories Response. Builder
List GlossaryCategories Response
com. google. cloud. dataplex. v1. List Glossary Terms Request
List GlossaryTerms Request
com. google. cloud. dataplex. v1. List Glossary Terms Request. Builder
List GlossaryTerms Request
com. google. cloud. dataplex. v1. List Glossary Terms Response
List GlossaryTerms Response
com. google. cloud. dataplex. v1. List Glossary Terms Response. Builder
List GlossaryTerms Response
com. google. cloud. dataplex. v1. List Jobs Request
List jobs request.
com. google. cloud. dataplex. v1. List Jobs Request. Builder
List jobs request.
com. google. cloud. dataplex. v1. List Jobs Response
List jobs response.
com. google. cloud. dataplex. v1. List Jobs Response. Builder
List jobs response.
com. google. cloud. dataplex. v1. List Lake Actions Request
List lake actions request.
com. google. cloud. dataplex. v1. List Lake Actions Request. Builder
List lake actions request.
com. google. cloud. dataplex. v1. List Lakes Request
List lakes request.
com. google. cloud. dataplex. v1. List Lakes Request. Builder
List lakes request.
com. google. cloud. dataplex. v1. List Lakes Response
List lakes response.
com. google. cloud. dataplex. v1. List Lakes Response. Builder
List lakes response.
com. google. cloud. dataplex. v1. List Metadata Feeds Request
Request message for ListMetadataFeedsRequest.
com. google. cloud. dataplex. v1. List Metadata Feeds Request. Builder
Request message for ListMetadataFeedsRequest.
com. google. cloud. dataplex. v1. List Metadata Feeds Response
Response message for ListMetadataFeeds.
com. google. cloud. dataplex. v1. List Metadata Feeds Response. Builder
Response message for ListMetadataFeeds.
com. google. cloud. dataplex. v1. List Metadata Jobs Request
List metadata jobs request.
com. google. cloud. dataplex. v1. List Metadata Jobs Request. Builder
List metadata jobs request.
com. google. cloud. dataplex. v1. List Metadata Jobs Response
List metadata jobs response.
com. google. cloud. dataplex. v1. List Metadata Jobs Response. Builder
List metadata jobs response.
com. google. cloud. dataplex. v1. List Partitions Request
List metadata partitions request.
com. google. cloud. dataplex. v1. List Partitions Request. Builder
List metadata partitions request.
com. google. cloud. dataplex. v1. List Partitions Response
List metadata partitions response.
com. google. cloud. dataplex. v1. List Partitions Response. Builder
List metadata partitions response.
com. google. cloud. dataplex. v1. List Tasks Request
List tasks request.
com. google. cloud. dataplex. v1. List Tasks Request. Builder
List tasks request.
com. google. cloud. dataplex. v1. List Tasks Response
List tasks response.
com. google. cloud. dataplex. v1. List Tasks Response. Builder
List tasks response.
com. google. cloud. dataplex. v1. List Zone Actions Request
List zone actions request.
com. google. cloud. dataplex. v1. List Zone Actions Request. Builder
List zone actions request.
com. google. cloud. dataplex. v1. List Zones Request
List zones request.
com. google. cloud. dataplex. v1. List Zones Request. Builder
List zones request.
com. google. cloud. dataplex. v1. List Zones Response
List zones response.
com. google. cloud. dataplex. v1. List Zones Response. Builder
List zones response.
com. google. cloud. dataplex. v1. Location Name
com. google. cloud. dataplex. v1. Location Name. Builder
Builder for projects/{project}/locations/{location}.
com. google. cloud. dataplex. v1. Logs Proto
com. google. cloud. dataplex. v1. Lookup Context Request
Lookup Context using permissions in the source system.
com. google. cloud. dataplex. v1. Lookup Context Request. Builder
Lookup Context using permissions in the source system.
com. google. cloud. dataplex. v1. Lookup Context Response
Lookup Context response.
com. google. cloud. dataplex. v1. Lookup Context Response. Builder
Lookup Context response.
com. google. cloud. dataplex. v1. Lookup Entry Links Request
Request message for LookupEntryLinks.
com. google. cloud. dataplex. v1. Lookup Entry Links Request. Builder
Request message for LookupEntryLinks.
com. google. cloud. dataplex. v1. Lookup Entry Links Response
Response message for LookupEntryLinks.
com. google. cloud. dataplex. v1. Lookup Entry Links Response. Builder
Response message for LookupEntryLinks.
com. google. cloud. dataplex. v1. Lookup Entry Request
Lookup Entry request using permissions in the source system.
com. google. cloud. dataplex. v1. Lookup Entry Request. Builder
Lookup Entry request using permissions in the source system.
com. google. cloud. dataplex. v1. Metadata Feed
MetadataFeed contains information related to the metadata feed.
com. google. cloud. dataplex. v1. Metadata Feed. Builder
MetadataFeed contains information related to the metadata feed.
com. google. cloud. dataplex. v1. Metadata Feed. Filters
Filters defines the type of changes that you want to listen to.
You can have multiple entry type filters and multiple aspect type filters.
All of the entry type filters are OR'ed together.
com. google. cloud. dataplex. v1. Metadata Feed. Filters. Builder
Filters defines the type of changes that you want to listen to.
You can have multiple entry type filters and multiple aspect type filters.
All of the entry type filters are OR'ed together.
com. google. cloud. dataplex. v1. Metadata Feed. Scope
Scope defines the scope of the metadata feed.
Scopes are exclusive. Only one of the scopes can be specified.
com. google. cloud. dataplex. v1. Metadata Feed. Scope. Builder
Scope defines the scope of the metadata feed.
Scopes are exclusive. Only one of the scopes can be specified.
com. google. cloud. dataplex. v1. Metadata Feed Name
com. google. cloud. dataplex. v1. Metadata Feed Name. Builder
Builder for projects/{project}/locations/{location}/metadataFeeds/{metadata_feed}.
com. google. cloud. dataplex. v1. Metadata Job
A metadata job resource.
com. google. cloud. dataplex. v1. Metadata Job. Builder
A metadata job resource.
com. google. cloud. dataplex. v1. Metadata Job. Export Job Result
Summary results from a metadata export job. The results are a snapshot of
the metadata at the time when the job was created. The exported entries are
saved to a Cloud Storage bucket.
com. google. cloud. dataplex. v1. Metadata Job. Export Job Result. Builder
Summary results from a metadata export job. The results are a snapshot of
the metadata at the time when the job was created. The exported entries are
saved to a Cloud Storage bucket.
com. google. cloud. dataplex. v1. Metadata Job. Export Job Spec
Job specification for a metadata export job.
com. google. cloud. dataplex. v1. Metadata Job. Export Job Spec. Builder
Job specification for a metadata export job.
com. google. cloud. dataplex. v1. Metadata Job. Export Job Spec. Export Job Scope
The scope of the export job.
com. google. cloud. dataplex. v1. Metadata Job. Export Job Spec. Export Job Scope. Builder
The scope of the export job.
com. google. cloud. dataplex. v1. Metadata Job. Import Job Result
Results from a metadata import job.
com. google. cloud. dataplex. v1. Metadata Job. Import Job Result. Builder
Results from a metadata import job.
com. google. cloud. dataplex. v1. Metadata Job. Import Job Spec
Job specification for a metadata import job.
You can run the following kinds of metadata import jobs:
com. google. cloud. dataplex. v1. Metadata Job. Import Job Spec. Builder
Job specification for a metadata import job.
You can run the following kinds of metadata import jobs:
com. google. cloud. dataplex. v1. Metadata Job. Import Job Spec. Import Job Scope
A boundary on the scope of impact that the metadata import job can have.
com. google. cloud. dataplex. v1. Metadata Job. Import Job Spec. Import Job Scope. Builder
A boundary on the scope of impact that the metadata import job can have.
com. google. cloud. dataplex. v1. Metadata Job. Status
Metadata job status.
com. google. cloud. dataplex. v1. Metadata Job. Status. Builder
Metadata job status.
com. google. cloud. dataplex. v1. Metadata Job Name
com. google. cloud. dataplex. v1. Metadata Job Name. Builder
Builder for projects/{project}/locations/{location}/metadataJobs/{metadataJob}.
com. google. cloud. dataplex. v1. Metadata Proto
com. google. cloud. dataplex. v1. Metadata Service Client. List Entities Fixed Size Collection
com. google. cloud. dataplex. v1. Metadata Service Client. List Entities Page
com. google. cloud. dataplex. v1. Metadata Service Client. List Entities Paged Response
com. google. cloud. dataplex. v1. Metadata Service Client. List Locations Fixed Size Collection
com. google. cloud. dataplex. v1. Metadata Service Client. List Locations Page
com. google. cloud. dataplex. v1. Metadata Service Client. List Locations Paged Response
com. google. cloud. dataplex. v1. Metadata Service Client. List Partitions Fixed Size Collection
com. google. cloud. dataplex. v1. Metadata Service Client. List Partitions Page
com. google. cloud. dataplex. v1. Metadata Service Client. List Partitions Paged Response
com. google. cloud. dataplex. v1. Metadata Service Grpc
Metadata service manages metadata resources such as tables, filesets and
partitions.
com. google. cloud. dataplex. v1. Metadata Service Grpc. Metadata Service Impl Base
Base class for the server implementation of the service MetadataService.
Metadata service manages metadata resources such as tables, filesets and
com. google. cloud. dataplex. v1. Metadata Service Settings. Builder
Builder for MetadataServiceSettings.
com. google. cloud. dataplex. v1. Operation Metadata
Represents the metadata of a long-running operation.
com. google. cloud. dataplex. v1. Operation Metadata. Builder
Represents the metadata of a long-running operation.
com. google. cloud. dataplex. v1. Organization Location Name
com. google. cloud. dataplex. v1. Organization Location Name. Builder
Builder for organizations/{organization}/locations/{location}.
com. google. cloud. dataplex. v1. Partition
Represents partition metadata contained within entity instances.
com. google. cloud. dataplex. v1. Partition. Builder
Represents partition metadata contained within entity instances.
com. google. cloud. dataplex. v1. Partition Name
com. google. cloud. dataplex. v1. Partition Name. Builder
Builder for
projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity}/partitions/{partition}.
com. google. cloud. dataplex. v1. Processing Proto
com. google. cloud. dataplex. v1. Resource Access Spec
ResourceAccessSpec holds the access control configuration to be enforced
on the resources, for example, Cloud Storage bucket, BigQuery dataset,
BigQuery table.
com. google. cloud. dataplex. v1. Resource Access Spec. Builder
ResourceAccessSpec holds the access control configuration to be enforced
on the resources, for example, Cloud Storage bucket, BigQuery dataset,
BigQuery table.
com. google. cloud. dataplex. v1. Resources Proto
com. google. cloud. dataplex. v1. Run Data Scan Request
Run DataScan Request
com. google. cloud. dataplex. v1. Run Data Scan Request. Builder
Run DataScan Request
com. google. cloud. dataplex. v1. Run Data Scan Response
Run DataScan Response.
com. google. cloud. dataplex. v1. Run Data Scan Response. Builder
Run DataScan Response.
com. google. cloud. dataplex. v1. Run Task Request
Protobuf type google.cloud.dataplex.v1.RunTaskRequest
com. google. cloud. dataplex. v1. Run Task Request. Builder
Protobuf type google.cloud.dataplex.v1.RunTaskRequest
com. google. cloud. dataplex. v1. Run Task Response
Protobuf type google.cloud.dataplex.v1.RunTaskResponse
com. google. cloud. dataplex. v1. Run Task Response. Builder
Protobuf type google.cloud.dataplex.v1.RunTaskResponse
com. google. cloud. dataplex. v1. Scanned Data
The data scanned during processing (e.g. in incremental DataScan)
com. google. cloud. dataplex. v1. Scanned Data. Builder
The data scanned during processing (e.g. in incremental DataScan)
com. google. cloud. dataplex. v1. Scanned Data. Incremental Field
A data range denoted by a pair of start/end values of a field.
com. google. cloud. dataplex. v1. Scanned Data. Incremental Field. Builder
A data range denoted by a pair of start/end values of a field.
com. google. cloud. dataplex. v1. Schema
Schema information describing the structure and layout of the data.
com. google. cloud. dataplex. v1. Schema. Builder
Schema information describing the structure and layout of the data.
com. google. cloud. dataplex. v1. Schema. Partition Field
Represents a key field within the entity's partition structure. You could
have up to 20 partition fields, but only the first 10 partitions have the
filtering ability due to performance consideration. Note:
com. google. cloud. dataplex. v1. Schema. Partition Field. Builder
Represents a key field within the entity's partition structure. You could
have up to 20 partition fields, but only the first 10 partitions have the
filtering ability due to performance consideration. Note:
com. google. cloud. dataplex. v1. Schema. Schema Field
Represents a column field within a table schema.
com. google. cloud. dataplex. v1. Schema. Schema Field. Builder
Represents a column field within a table schema.
com. google. cloud. dataplex. v1. Search Entries Request
Protobuf type google.cloud.dataplex.v1.SearchEntriesRequest
com. google. cloud. dataplex. v1. Search Entries Request. Builder
Protobuf type google.cloud.dataplex.v1.SearchEntriesRequest
com. google. cloud. dataplex. v1. Search Entries Response
Protobuf type google.cloud.dataplex.v1.SearchEntriesResponse
com. google. cloud. dataplex. v1. Search Entries Response. Builder
Protobuf type google.cloud.dataplex.v1.SearchEntriesResponse
com. google. cloud. dataplex. v1. Search Entries Result
A single result of a SearchEntries request.
com. google. cloud. dataplex. v1. Search Entries Result. Builder
A single result of a SearchEntries request.
com. google. cloud. dataplex. v1. Search Entries Result. Snippets
Snippets for the entry, contains HTML-style highlighting for
matched tokens, will be used in UI.
com. google. cloud. dataplex. v1. Search Entries Result. Snippets. Builder
Snippets for the entry, contains HTML-style highlighting for
matched tokens, will be used in UI.
com. google. cloud. dataplex. v1. Security Proto
com. google. cloud. dataplex. v1. Service Proto
com. google. cloud. dataplex. v1. Session
Represents an active analyze session running for a user.
com. google. cloud. dataplex. v1. Session. Builder
Represents an active analyze session running for a user.
com. google. cloud. dataplex. v1. Session Event
These messages contain information about sessions within an environment.
The monitored resource is 'Environment'.
com. google. cloud. dataplex. v1. Session Event. Builder
These messages contain information about sessions within an environment.
The monitored resource is 'Environment'.
com. google. cloud. dataplex. v1. Session Event. Query Detail
Execution details of the query.
com. google. cloud. dataplex. v1. Session Event. Query Detail. Builder
Execution details of the query.
com. google. cloud. dataplex. v1. Storage Access
Describes the access mechanism of the data within its storage location.
com. google. cloud. dataplex. v1. Storage Access. Builder
Describes the access mechanism of the data within its storage location.
com. google. cloud. dataplex. v1. Storage Format
Describes the format of the data within its storage location.
com. google. cloud. dataplex. v1. Storage Format. Builder
Describes the format of the data within its storage location.
com. google. cloud. dataplex. v1. Storage Format. Csv Options
Describes CSV and similar semi-structured data formats.
com. google. cloud. dataplex. v1. Storage Format. Csv Options. Builder
Describes CSV and similar semi-structured data formats.
com. google. cloud. dataplex. v1. Storage Format. Iceberg Options
Describes Iceberg data format.
com. google. cloud. dataplex. v1. Storage Format. Iceberg Options. Builder
Describes Iceberg data format.
com. google. cloud. dataplex. v1. Storage Format. Json Options
Describes JSON data format.
com. google. cloud. dataplex. v1. Storage Format. Json Options. Builder
Describes JSON data format.
com. google. cloud. dataplex. v1. Task
A task represents a user-visible job.
com. google. cloud. dataplex. v1. Task. Builder
A task represents a user-visible job.
com. google. cloud. dataplex. v1. Task. Execution Spec
Execution related settings, like retry and service_account.
com. google. cloud. dataplex. v1. Task. Execution Spec. Builder
Execution related settings, like retry and service_account.
com. google. cloud. dataplex. v1. Task. Execution Status
Status of the task execution (e.g. Jobs).
com. google. cloud. dataplex. v1. Task. Execution Status. Builder
Status of the task execution (e.g. Jobs).
com. google. cloud. dataplex. v1. Task. Infrastructure Spec
Configuration for the underlying infrastructure used to run workloads.
com. google. cloud. dataplex. v1. Task. Infrastructure Spec. Batch Compute Resources
Batch compute resources associated with the task.
com. google. cloud. dataplex. v1. Task. Infrastructure Spec. Batch Compute Resources. Builder
Batch compute resources associated with the task.
com. google. cloud. dataplex. v1. Task. Infrastructure Spec. Builder
Configuration for the underlying infrastructure used to run workloads.
com. google. cloud. dataplex. v1. Task. Infrastructure Spec. Container Image Runtime
Container Image Runtime Configuration used with Batch execution.
com. google. cloud. dataplex. v1. Task. Infrastructure Spec. Container Image Runtime. Builder
Container Image Runtime Configuration used with Batch execution.
com. google. cloud. dataplex. v1. Task. Infrastructure Spec. Vpc Network
Cloud VPC Network used to run the infrastructure.
com. google. cloud. dataplex. v1. Task. Infrastructure Spec. Vpc Network. Builder
Cloud VPC Network used to run the infrastructure.
com. google. cloud. dataplex. v1. Task. Notebook Task Config
Config for running scheduled notebooks.
com. google. cloud. dataplex. v1. Task. Notebook Task Config. Builder
Config for running scheduled notebooks.
com. google. cloud. dataplex. v1. Task. Spark Task Config
User-specified config for running a Spark task.
com. google. cloud. dataplex. v1. Task. Spark Task Config. Builder
User-specified config for running a Spark task.
com. google. cloud. dataplex. v1. Task. Trigger Spec
Task scheduling and trigger settings.
com. google. cloud. dataplex. v1. Task. Trigger Spec. Builder
Task scheduling and trigger settings.
com. google. cloud. dataplex. v1. Task Name
com. google. cloud. dataplex. v1. Task Name. Builder
Builder for projects/{project}/locations/{location}/lakes/{lake}/tasks/{task}.
com. google. cloud. dataplex. v1. Tasks Proto
com. google. cloud. dataplex. v1. Trigger
DataScan scheduling and trigger settings.
com. google. cloud. dataplex. v1. Trigger. Builder
DataScan scheduling and trigger settings.
com. google. cloud. dataplex. v1. Trigger. On Demand
The scan runs once via RunDataScan API.
com. google. cloud. dataplex. v1. Trigger. On Demand. Builder
The scan runs once via RunDataScan API.
com. google. cloud. dataplex. v1. Trigger. One Time
The scan runs once using create API.
com. google. cloud. dataplex. v1. Trigger. One Time. Builder
The scan runs once using create API.
com. google. cloud. dataplex. v1. Trigger. Schedule
The scan is scheduled to run periodically.
com. google. cloud. dataplex. v1. Trigger. Schedule. Builder
The scan is scheduled to run periodically.
com. google. cloud. dataplex. v1. Update Aspect Type Request
Update AspectType Request
com. google. cloud. dataplex. v1. Update Aspect Type Request. Builder
Update AspectType Request
com. google. cloud. dataplex. v1. Update Asset Request
Update asset request.
com. google. cloud. dataplex. v1. Update Asset Request. Builder
Update asset request.
com. google. cloud. dataplex. v1. Update Data Asset Request
Request message for updating a data asset.
com. google. cloud. dataplex. v1. Update Data Asset Request. Builder
Request message for updating a data asset.
com. google. cloud. dataplex. v1. Update Data Attribute Binding Request
Update DataAttributeBinding request.
com. google. cloud. dataplex. v1. Update Data Attribute Binding Request. Builder
Update DataAttributeBinding request.
com. google. cloud. dataplex. v1. Update Data Attribute Request
Update DataAttribute request.
com. google. cloud. dataplex. v1. Update Data Attribute Request. Builder
Update DataAttribute request.
com. google. cloud. dataplex. v1. Update Data Product Request
Request message for updating a data product.
com. google. cloud. dataplex. v1. Update Data Product Request. Builder
Request message for updating a data product.
com. google. cloud. dataplex. v1. Update Data Scan Request
Update dataScan request.
com. google. cloud. dataplex. v1. Update Data Scan Request. Builder
Update dataScan request.
com. google. cloud. dataplex. v1. Update Data Taxonomy Request
Update DataTaxonomy request.
com. google. cloud. dataplex. v1. Update Data Taxonomy Request. Builder
Update DataTaxonomy request.
com. google. cloud. dataplex. v1. Update Encryption Config Request
Update EncryptionConfig Request
com. google. cloud. dataplex. v1. Update Encryption Config Request. Builder
Update EncryptionConfig Request
com. google. cloud. dataplex. v1. Update Entity Request
Update a metadata entity request.
The exiting entity will be fully replaced by the entity in the request.
The entity ID is mutable. To modify the ID, use the current entity ID in the
com. google. cloud. dataplex. v1. Update Entity Request. Builder
Update a metadata entity request.
The exiting entity will be fully replaced by the entity in the request.
The entity ID is mutable. To modify the ID, use the current entity ID in the
com. google. cloud. dataplex. v1. Update Entry Group Request
Update EntryGroup Request.
com. google. cloud. dataplex. v1. Update Entry Group Request. Builder
Update EntryGroup Request.
com. google. cloud. dataplex. v1. Update Entry Link Request
Request message for UpdateEntryLink method.
com. google. cloud. dataplex. v1. Update Entry Link Request. Builder
Request message for UpdateEntryLink method.
com. google. cloud. dataplex. v1. Update Entry Request
Update Entry request.
com. google. cloud. dataplex. v1. Update Entry Request. Builder
Update Entry request.
com. google. cloud. dataplex. v1. Update Entry Type Request
Update EntryType Request.
com. google. cloud. dataplex. v1. Update Entry Type Request. Builder
Update EntryType Request.
com. google. cloud. dataplex. v1. Update Glossary Category Request
Update GlossaryCategory Request
com. google. cloud. dataplex. v1. Update Glossary Category Request. Builder
Update GlossaryCategory Request
com. google. cloud. dataplex. v1. Update Glossary Request
Update Glossary Request
com. google. cloud. dataplex. v1. Update Glossary Request. Builder
Update Glossary Request
com. google. cloud. dataplex. v1. Update Glossary Term Request
Update GlossaryTerm Request
com. google. cloud. dataplex. v1. Update Glossary Term Request. Builder
Update GlossaryTerm Request
com. google. cloud. dataplex. v1. Update Lake Request
Update lake request.
com. google. cloud. dataplex. v1. Update Lake Request. Builder
Update lake request.
com. google. cloud. dataplex. v1. Update Metadata Feed Request
Request message for UpdateMetadataFeed.
com. google. cloud. dataplex. v1. Update Metadata Feed Request. Builder
Request message for UpdateMetadataFeed.
com. google. cloud. dataplex. v1. Update Task Request
Update task request.
com. google. cloud. dataplex. v1. Update Task Request. Builder
Update task request.
com. google. cloud. dataplex. v1. Update Zone Request
Update zone request.
com. google. cloud. dataplex. v1. Update Zone Request. Builder
Update zone request.
com. google. cloud. dataplex. v1. Zone
A zone represents a logical group of related assets within a lake. A zone can
be used to map to organizational structure or represent stages of data
readiness from raw to curated. It provides managing behavior that is shared
com. google. cloud. dataplex. v1. Zone. Builder
A zone represents a logical group of related assets within a lake. A zone can
be used to map to organizational structure or represent stages of data
readiness from raw to curated. It provides managing behavior that is shared
com. google. cloud. dataplex. v1. Zone. Discovery Spec
Settings to manage the metadata discovery and publishing in a zone.
com. google. cloud. dataplex. v1. Zone. Discovery Spec. Builder
Settings to manage the metadata discovery and publishing in a zone.
com. google. cloud. dataplex. v1. Zone. Discovery Spec. Csv Options
Describe CSV and similar semi-structured data formats.
com. google. cloud. dataplex. v1. Zone. Discovery Spec. Csv Options. Builder
Describe CSV and similar semi-structured data formats.
com. google. cloud. dataplex. v1. Zone. Discovery Spec. Json Options
Describe JSON data format.
com. google. cloud. dataplex. v1. Zone. Discovery Spec. Json Options. Builder
Describe JSON data format.
com. google. cloud. dataplex. v1. Zone. Resource Spec
Settings for resources attached as assets within a zone.
com. google. cloud. dataplex. v1. Zone. Resource Spec. Builder
Settings for resources attached as assets within a zone.
com. google. cloud. dataplex. v1. Zone Name
com. google. cloud. dataplex. v1. Zone Name. Builder
Builder for projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}.
Interfaces
Interface
Description
com. google. cloud. dataplex. v1. Action. Failed Security Policy Apply Or Builder
com. google. cloud. dataplex. v1. Action. Incompatible Data Schema Or Builder
com. google. cloud. dataplex. v1. Action. Invalid Data Format Or Builder
com. google. cloud. dataplex. v1. Action. Invalid Data Organization Or Builder
com. google. cloud. dataplex. v1. Action. Invalid Data Partition Or Builder
com. google. cloud. dataplex. v1. Action. Missing Data Or Builder
com. google. cloud. dataplex. v1. Action. Missing Resource Or Builder
com. google. cloud. dataplex. v1. Action. Unauthorized Resource Or Builder
com. google. cloud. dataplex. v1. Action Or Builder
com. google. cloud. dataplex. v1. Aspect Or Builder
com. google. cloud. dataplex. v1. Aspect Source Or Builder
com. google. cloud. dataplex. v1. Aspect Type. Authorization Or Builder
com. google. cloud. dataplex. v1. Aspect Type. Metadata Template. Annotations Or Builder
com. google. cloud. dataplex. v1. Aspect Type. Metadata Template. Constraints Or Builder
com. google. cloud. dataplex. v1. Aspect Type. Metadata Template. Enum Value Or Builder
com. google. cloud. dataplex. v1. Aspect Type. Metadata Template Or Builder
com. google. cloud. dataplex. v1. Aspect Type Or Builder
com. google. cloud. dataplex. v1. Asset. Discovery Spec. Csv Options Or Builder
com. google. cloud. dataplex. v1. Asset. Discovery Spec. Json Options Or Builder
com. google. cloud. dataplex. v1. Asset. Discovery Spec Or Builder
com. google. cloud. dataplex. v1. Asset. Discovery Status. Stats Or Builder
com. google. cloud. dataplex. v1. Asset. Discovery Status Or Builder
com. google. cloud. dataplex. v1. Asset. Resource Spec Or Builder
com. google. cloud. dataplex. v1. Asset. Resource Status Or Builder
com. google. cloud. dataplex. v1. Asset. Security Status Or Builder
com. google. cloud. dataplex. v1. Asset Or Builder
com. google. cloud. dataplex. v1. Asset Status Or Builder
com. google. cloud. dataplex. v1. Business Glossary Event Or Builder
com. google. cloud. dataplex. v1. Business Glossary Service Grpc. Async Service
BusinessGlossaryService provides APIs for managing business glossary
resources for enterprise customers.
The resources currently supported in Business Glossary are:
com. google. cloud. dataplex. v1. Cancel Job Request Or Builder
com. google. cloud. dataplex. v1. Cancel Metadata Job Request Or Builder
com. google. cloud. dataplex. v1. Catalog Service Grpc. Async Service
The primary resources offered by this service are EntryGroups, EntryTypes,
AspectTypes, Entries and EntryLinks. They collectively let data
administrators organize, manage, secure, and catalog data located across
com. google. cloud. dataplex. v1. Cmek Service Grpc. Async Service
Dataplex Universal Catalog Customer Managed Encryption Keys (CMEK) Service
com. google. cloud. dataplex. v1. Content. Notebook Or Builder
com. google. cloud. dataplex. v1. Content. Sql Script Or Builder
com. google. cloud. dataplex. v1. Content Or Builder
com. google. cloud. dataplex. v1. Content Service Grpc. Async Service
ContentService manages Notebook and SQL Scripts for Dataplex Universal
Catalog.
com. google. cloud. dataplex. v1. Create Aspect Type Request Or Builder
com. google. cloud. dataplex. v1. Create Asset Request Or Builder
com. google. cloud. dataplex. v1. Create Data Asset Request Or Builder
com. google. cloud. dataplex. v1. Create Data Attribute Binding Request Or Builder
com. google. cloud. dataplex. v1. Create Data Attribute Request Or Builder
com. google. cloud. dataplex. v1. Create Data Product Request Or Builder
com. google. cloud. dataplex. v1. Create Data Scan Request Or Builder
com. google. cloud. dataplex. v1. Create Data Taxonomy Request Or Builder
com. google. cloud. dataplex. v1. Create Encryption Config Request Or Builder
com. google. cloud. dataplex. v1. Create Entity Request Or Builder
com. google. cloud. dataplex. v1. Create Entry Group Request Or Builder
com. google. cloud. dataplex. v1. Create Entry Link Request Or Builder
com. google. cloud. dataplex. v1. Create Entry Request Or Builder
com. google. cloud. dataplex. v1. Create Entry Type Request Or Builder
com. google. cloud. dataplex. v1. Create Glossary Category Request Or Builder
com. google. cloud. dataplex. v1. Create Glossary Request Or Builder
com. google. cloud. dataplex. v1. Create Glossary Term Request Or Builder
com. google. cloud. dataplex. v1. Create Lake Request Or Builder
com. google. cloud. dataplex. v1. Create Metadata Feed Request Or Builder
com. google. cloud. dataplex. v1. Create Metadata Job Request Or Builder
com. google. cloud. dataplex. v1. Create Partition Request Or Builder
com. google. cloud. dataplex. v1. Create Task Request Or Builder
com. google. cloud. dataplex. v1. Create Zone Request Or Builder
com. google. cloud. dataplex. v1. Data Access Spec Or Builder
com. google. cloud. dataplex. v1. Data Asset. Access Group Config Or Builder
com. google. cloud. dataplex. v1. Data Asset Or Builder
com. google. cloud. dataplex. v1. Data Attribute Binding. Path Or Builder
com. google. cloud. dataplex. v1. Data Attribute Binding Or Builder
com. google. cloud. dataplex. v1. Data Attribute Or Builder
com. google. cloud. dataplex. v1. Data Discovery Result. Big Query Publishing Or Builder
com. google. cloud. dataplex. v1. Data Discovery Result. Scan Statistics Or Builder
com. google. cloud. dataplex. v1. Data Discovery Result Or Builder
com. google. cloud. dataplex. v1. Data Discovery Spec. Big Query Publishing Config Or Builder
com. google. cloud. dataplex. v1. Data Discovery Spec. Storage Config. Csv Options Or Builder
com. google. cloud. dataplex. v1. Data Discovery Spec. Storage Config. Json Options Or Builder
com. google. cloud. dataplex. v1. Data Discovery Spec. Storage Config Or Builder
com. google. cloud. dataplex. v1. Data Discovery Spec Or Builder
com. google. cloud. dataplex. v1. Data Documentation Result. Field Or Builder
com. google. cloud. dataplex. v1. Data Documentation Result. Query Or Builder
com. google. cloud. dataplex. v1. Data Documentation Result. Schema Or Builder
com. google. cloud. dataplex. v1. Data Documentation Result. Table Result Or Builder
com. google. cloud. dataplex. v1. Data Documentation Result Or Builder
com. google. cloud. dataplex. v1. Data Documentation Spec Or Builder
com. google. cloud. dataplex. v1. Data Product. Access Group Or Builder
com. google. cloud. dataplex. v1. Data Product. Principal Or Builder
com. google. cloud. dataplex. v1. Data Product Or Builder
com. google. cloud. dataplex. v1. Data Product Service Grpc. Async Service
DataProductService provides APIs for managing data products and
the underlying data assets.
com. google. cloud. dataplex. v1. Data Profile Result. Post Scan Actions Result. Big Query Export Result Or Builder
com. google. cloud. dataplex. v1. Data Profile Result. Post Scan Actions Result Or Builder
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info. Double Field Info Or Builder
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info. Integer Field Info Or Builder
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info. String Field Info Or Builder
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info. TopN Value Or Builder
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info Or Builder
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field Or Builder
com. google. cloud. dataplex. v1. Data Profile Result. Profile Or Builder
com. google. cloud. dataplex. v1. Data Profile Result Or Builder
com. google. cloud. dataplex. v1. Data Profile Spec. Post Scan Actions. Big Query Export Or Builder
com. google. cloud. dataplex. v1. Data Profile Spec. Post Scan Actions Or Builder
com. google. cloud. dataplex. v1. Data Profile Spec. Selected Fields Or Builder
com. google. cloud. dataplex. v1. Data Profile Spec Or Builder
com. google. cloud. dataplex. v1. Data Quality Column Result Or Builder
com. google. cloud. dataplex. v1. Data Quality Dimension Or Builder
com. google. cloud. dataplex. v1. Data Quality Dimension Result Or Builder
com. google. cloud. dataplex. v1. Data Quality Result. Anomaly Detection Generated Assets Or Builder
com. google. cloud. dataplex. v1. Data Quality Result. Post Scan Actions Result. Big Query Export Result Or Builder
com. google. cloud. dataplex. v1. Data Quality Result. Post Scan Actions Result Or Builder
com. google. cloud. dataplex. v1. Data Quality Result Or Builder
com. google. cloud. dataplex. v1. Data Quality Rule. Debug Query Or Builder
com. google. cloud. dataplex. v1. Data Quality Rule. Non Null Expectation Or Builder
com. google. cloud. dataplex. v1. Data Quality Rule. Range Expectation Or Builder
com. google. cloud. dataplex. v1. Data Quality Rule. Regex Expectation Or Builder
com. google. cloud. dataplex. v1. Data Quality Rule. Row Condition Expectation Or Builder
com. google. cloud. dataplex. v1. Data Quality Rule. Set Expectation Or Builder
com. google. cloud. dataplex. v1. Data Quality Rule. Sql Assertion Or Builder
com. google. cloud. dataplex. v1. Data Quality Rule. Statistic Range Expectation Or Builder
com. google. cloud. dataplex. v1. Data Quality Rule. Table Condition Expectation Or Builder
com. google. cloud. dataplex. v1. Data Quality Rule. Uniqueness Expectation Or Builder
com. google. cloud. dataplex. v1. Data Quality Rule Or Builder
com. google. cloud. dataplex. v1. Data Quality Rule Result. Debug Query Result Or Builder
com. google. cloud. dataplex. v1. Data Quality Rule Result. Debug Query Result Set Or Builder
com. google. cloud. dataplex. v1. Data Quality Rule Result Or Builder
com. google. cloud. dataplex. v1. Data Quality Scan Rule Result Or Builder
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Big Query Export Or Builder
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Job End Trigger Or Builder
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Job Failure Trigger Or Builder
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Notification Report Or Builder
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Recipients Or Builder
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions. Score Threshold Trigger Or Builder
com. google. cloud. dataplex. v1. Data Quality Spec. Post Scan Actions Or Builder
com. google. cloud. dataplex. v1. Data Quality Spec Or Builder
com. google. cloud. dataplex. v1. Data Scan. Execution Spec Or Builder
com. google. cloud. dataplex. v1. Data Scan. Execution Status Or Builder
com. google. cloud. dataplex. v1. Data Scan Catalog Publishing Status Or Builder
com. google. cloud. dataplex. v1. Data Scan Event. Data Profile Applied Configs Or Builder
com. google. cloud. dataplex. v1. Data Scan Event. Data Profile Result Or Builder
com. google. cloud. dataplex. v1. Data Scan Event. Data Quality Applied Configs Or Builder
com. google. cloud. dataplex. v1. Data Scan Event. Data Quality Result Or Builder
com. google. cloud. dataplex. v1. Data Scan Event. Post Scan Actions Result. Big Query Export Result Or Builder
com. google. cloud. dataplex. v1. Data Scan Event. Post Scan Actions Result Or Builder
com. google. cloud. dataplex. v1. Data Scan Event Or Builder
com. google. cloud. dataplex. v1. Data Scan Job Or Builder
com. google. cloud. dataplex. v1. Data Scan Or Builder
com. google. cloud. dataplex. v1. Data Scan Service Grpc. Async Service
DataScanService manages DataScan resources which can be configured to run
various types of data scanning workload and generate enriched metadata (e.g.
Data Profile, Data Quality) for the data source.
com. google. cloud. dataplex. v1. Data Source Or Builder
com. google. cloud. dataplex. v1. Data Taxonomy Or Builder
com. google. cloud. dataplex. v1. Data Taxonomy Service Grpc. Async Service
DataTaxonomyService enables attribute-based governance. The resources
currently offered include DataTaxonomy and DataAttribute.
com. google. cloud. dataplex. v1. Dataplex Service Grpc. Async Service
Dataplex service provides data lakes as a service. The primary resources
offered by this service are Lakes, Zones and Assets which collectively allow
a data administrator to organize, manage, secure and catalog data across
com. google. cloud. dataplex. v1. Delete Aspect Type Request Or Builder
com. google. cloud. dataplex. v1. Delete Asset Request Or Builder
com. google. cloud. dataplex. v1. Delete Data Asset Request Or Builder
com. google. cloud. dataplex. v1. Delete Data Attribute Binding Request Or Builder
com. google. cloud. dataplex. v1. Delete Data Attribute Request Or Builder
com. google. cloud. dataplex. v1. Delete Data Product Request Or Builder
com. google. cloud. dataplex. v1. Delete Data Scan Request Or Builder
com. google. cloud. dataplex. v1. Delete Data Taxonomy Request Or Builder
com. google. cloud. dataplex. v1. Delete Encryption Config Request Or Builder
com. google. cloud. dataplex. v1. Delete Entity Request Or Builder
com. google. cloud. dataplex. v1. Delete Entry Group Request Or Builder
com. google. cloud. dataplex. v1. Delete Entry Link Request Or Builder
com. google. cloud. dataplex. v1. Delete Entry Request Or Builder
com. google. cloud. dataplex. v1. Delete Entry Type Request Or Builder
com. google. cloud. dataplex. v1. Delete Glossary Category Request Or Builder
com. google. cloud. dataplex. v1. Delete Glossary Request Or Builder
com. google. cloud. dataplex. v1. Delete Glossary Term Request Or Builder
com. google. cloud. dataplex. v1. Delete Lake Request Or Builder
com. google. cloud. dataplex. v1. Delete Metadata Feed Request Or Builder
com. google. cloud. dataplex. v1. Delete Partition Request Or Builder
com. google. cloud. dataplex. v1. Delete Task Request Or Builder
com. google. cloud. dataplex. v1. Delete Zone Request Or Builder
com. google. cloud. dataplex. v1. Discovery Event. Action Details Or Builder
com. google. cloud. dataplex. v1. Discovery Event. Config Details Or Builder
com. google. cloud. dataplex. v1. Discovery Event. Entity Details Or Builder
com. google. cloud. dataplex. v1. Discovery Event. Partition Details Or Builder
com. google. cloud. dataplex. v1. Discovery Event. Table Details Or Builder
com. google. cloud. dataplex. v1. Discovery Event Or Builder
com. google. cloud. dataplex. v1. Encryption Config. Failure Details Or Builder
com. google. cloud. dataplex. v1. Encryption Config Or Builder
com. google. cloud. dataplex. v1. Entity. Compatibility Status. Compatibility Or Builder
com. google. cloud. dataplex. v1. Entity. Compatibility Status Or Builder
com. google. cloud. dataplex. v1. Entity Or Builder
com. google. cloud. dataplex. v1. Entry Group Or Builder
com. google. cloud. dataplex. v1. Entry Link. Entry Reference Or Builder
com. google. cloud. dataplex. v1. Entry Link Event Or Builder
com. google. cloud. dataplex. v1. Entry Link Or Builder
com. google. cloud. dataplex. v1. Entry Or Builder
com. google. cloud. dataplex. v1. Entry Source. Ancestor Or Builder
com. google. cloud. dataplex. v1. Entry Source Or Builder
com. google. cloud. dataplex. v1. Entry Type. Aspect Info Or Builder
com. google. cloud. dataplex. v1. Entry Type. Authorization Or Builder
com. google. cloud. dataplex. v1. Entry Type Or Builder
com. google. cloud. dataplex. v1. Environment. Endpoints Or Builder
com. google. cloud. dataplex. v1. Environment. Infrastructure Spec. Compute Resources Or Builder
com. google. cloud. dataplex. v1. Environment. Infrastructure Spec. Os Image Runtime Or Builder
com. google. cloud. dataplex. v1. Environment. Infrastructure Spec Or Builder
com. google. cloud. dataplex. v1. Environment. Session Spec Or Builder
com. google. cloud. dataplex. v1. Environment. Session Status Or Builder
com. google. cloud. dataplex. v1. Environment Or Builder
com. google. cloud. dataplex. v1. Generate Data Quality Rules Request Or Builder
com. google. cloud. dataplex. v1. Generate Data Quality Rules Response Or Builder
com. google. cloud. dataplex. v1. Get Aspect Type Request Or Builder
com. google. cloud. dataplex. v1. Get Asset Request Or Builder
com. google. cloud. dataplex. v1. Get Data Asset Request Or Builder
com. google. cloud. dataplex. v1. Get Data Attribute Binding Request Or Builder
com. google. cloud. dataplex. v1. Get Data Attribute Request Or Builder
com. google. cloud. dataplex. v1. Get Data Product Request Or Builder
com. google. cloud. dataplex. v1. Get Data Scan Job Request Or Builder
com. google. cloud. dataplex. v1. Get Data Scan Request Or Builder
com. google. cloud. dataplex. v1. Get Data Taxonomy Request Or Builder
com. google. cloud. dataplex. v1. Get Encryption Config Request Or Builder
com. google. cloud. dataplex. v1. Get Entity Request Or Builder
com. google. cloud. dataplex. v1. Get Entry Group Request Or Builder
com. google. cloud. dataplex. v1. Get Entry Link Request Or Builder
com. google. cloud. dataplex. v1. Get Entry Request Or Builder
com. google. cloud. dataplex. v1. Get Entry Type Request Or Builder
com. google. cloud. dataplex. v1. Get Glossary Category Request Or Builder
com. google. cloud. dataplex. v1. Get Glossary Request Or Builder
com. google. cloud. dataplex. v1. Get Glossary Term Request Or Builder
com. google. cloud. dataplex. v1. Get Job Request Or Builder
com. google. cloud. dataplex. v1. Get Lake Request Or Builder
com. google. cloud. dataplex. v1. Get Metadata Feed Request Or Builder
com. google. cloud. dataplex. v1. Get Metadata Job Request Or Builder
com. google. cloud. dataplex. v1. Get Partition Request Or Builder
com. google. cloud. dataplex. v1. Get Task Request Or Builder
com. google. cloud. dataplex. v1. Get Zone Request Or Builder
com. google. cloud. dataplex. v1. Glossary Category Or Builder
com. google. cloud. dataplex. v1. Glossary Or Builder
com. google. cloud. dataplex. v1. Glossary Term Or Builder
com. google. cloud. dataplex. v1. Governance Event. Entity Or Builder
com. google. cloud. dataplex. v1. Governance Event Or Builder
com. google. cloud. dataplex. v1. Import Item Or Builder
com. google. cloud. dataplex. v1. Job Event Or Builder
com. google. cloud. dataplex. v1. Job Or Builder
com. google. cloud. dataplex. v1. Lake. Metastore Or Builder
com. google. cloud. dataplex. v1. Lake. Metastore Status Or Builder
com. google. cloud. dataplex. v1. Lake Or Builder
com. google. cloud. dataplex. v1. List Actions Response Or Builder
com. google. cloud. dataplex. v1. List Aspect Types Request Or Builder
com. google. cloud. dataplex. v1. List Aspect Types Response Or Builder
com. google. cloud. dataplex. v1. List Asset Actions Request Or Builder
com. google. cloud. dataplex. v1. List Assets Request Or Builder
com. google. cloud. dataplex. v1. List Assets Response Or Builder
com. google. cloud. dataplex. v1. List Data Assets Request Or Builder
com. google. cloud. dataplex. v1. List Data Assets Response Or Builder
com. google. cloud. dataplex. v1. List Data Attribute Bindings Request Or Builder
com. google. cloud. dataplex. v1. List Data Attribute Bindings Response Or Builder
com. google. cloud. dataplex. v1. List Data Attributes Request Or Builder
com. google. cloud. dataplex. v1. List Data Attributes Response Or Builder
com. google. cloud. dataplex. v1. List Data Products Request Or Builder
com. google. cloud. dataplex. v1. List Data Products Response Or Builder
com. google. cloud. dataplex. v1. List Data Scan Jobs Request Or Builder
com. google. cloud. dataplex. v1. List Data Scan Jobs Response Or Builder
com. google. cloud. dataplex. v1. List Data Scans Request Or Builder
com. google. cloud. dataplex. v1. List Data Scans Response Or Builder
com. google. cloud. dataplex. v1. List Data Taxonomies Request Or Builder
com. google. cloud. dataplex. v1. List Data Taxonomies Response Or Builder
com. google. cloud. dataplex. v1. List Encryption Configs Request Or Builder
com. google. cloud. dataplex. v1. List Encryption Configs Response Or Builder
com. google. cloud. dataplex. v1. List Entities Request Or Builder
com. google. cloud. dataplex. v1. List Entities Response Or Builder
com. google. cloud. dataplex. v1. List Entries Request Or Builder
com. google. cloud. dataplex. v1. List Entries Response Or Builder
com. google. cloud. dataplex. v1. List Entry Groups Request Or Builder
com. google. cloud. dataplex. v1. List Entry Groups Response Or Builder
com. google. cloud. dataplex. v1. List Entry Types Request Or Builder
com. google. cloud. dataplex. v1. List Entry Types Response Or Builder
com. google. cloud. dataplex. v1. List Glossaries Request Or Builder
com. google. cloud. dataplex. v1. List Glossaries Response Or Builder
com. google. cloud. dataplex. v1. List Glossary Categories Request Or Builder
com. google. cloud. dataplex. v1. List Glossary Categories Response Or Builder
com. google. cloud. dataplex. v1. List Glossary Terms Request Or Builder
com. google. cloud. dataplex. v1. List Glossary Terms Response Or Builder
com. google. cloud. dataplex. v1. List Jobs Request Or Builder
com. google. cloud. dataplex. v1. List Jobs Response Or Builder
com. google. cloud. dataplex. v1. List Lake Actions Request Or Builder
com. google. cloud. dataplex. v1. List Lakes Request Or Builder
com. google. cloud. dataplex. v1. List Lakes Response Or Builder
com. google. cloud. dataplex. v1. List Metadata Feeds Request Or Builder
com. google. cloud. dataplex. v1. List Metadata Feeds Response Or Builder
com. google. cloud. dataplex. v1. List Metadata Jobs Request Or Builder
com. google. cloud. dataplex. v1. List Metadata Jobs Response Or Builder
com. google. cloud. dataplex. v1. List Partitions Request Or Builder
com. google. cloud. dataplex. v1. List Partitions Response Or Builder
com. google. cloud. dataplex. v1. List Tasks Request Or Builder
com. google. cloud. dataplex. v1. List Tasks Response Or Builder
com. google. cloud. dataplex. v1. List Zone Actions Request Or Builder
com. google. cloud. dataplex. v1. List Zones Request Or Builder
com. google. cloud. dataplex. v1. List Zones Response Or Builder
com. google. cloud. dataplex. v1. Lookup Context Request Or Builder
com. google. cloud. dataplex. v1. Lookup Context Response Or Builder
com. google. cloud. dataplex. v1. Lookup Entry Links Request Or Builder
com. google. cloud. dataplex. v1. Lookup Entry Links Response Or Builder
com. google. cloud. dataplex. v1. Lookup Entry Request Or Builder
com. google. cloud. dataplex. v1. Metadata Feed. Filters Or Builder
com. google. cloud. dataplex. v1. Metadata Feed. Scope Or Builder
com. google. cloud. dataplex. v1. Metadata Feed Or Builder
com. google. cloud. dataplex. v1. Metadata Job. Export Job Result Or Builder
com. google. cloud. dataplex. v1. Metadata Job. Export Job Spec. Export Job Scope Or Builder
com. google. cloud. dataplex. v1. Metadata Job. Export Job Spec Or Builder
com. google. cloud. dataplex. v1. Metadata Job. Import Job Result Or Builder
com. google. cloud. dataplex. v1. Metadata Job. Import Job Spec. Import Job Scope Or Builder
com. google. cloud. dataplex. v1. Metadata Job. Import Job Spec Or Builder
com. google. cloud. dataplex. v1. Metadata Job. Status Or Builder
com. google. cloud. dataplex. v1. Metadata Job Or Builder
com. google. cloud. dataplex. v1. Metadata Service Grpc. Async Service
Metadata service manages metadata resources such as tables, filesets and
partitions.
com. google. cloud. dataplex. v1. Operation Metadata Or Builder
com. google. cloud. dataplex. v1. Partition Or Builder
com. google. cloud. dataplex. v1. Resource Access Spec Or Builder
com. google. cloud. dataplex. v1. Run Data Scan Request Or Builder
com. google. cloud. dataplex. v1. Run Data Scan Response Or Builder
com. google. cloud. dataplex. v1. Run Task Request Or Builder
com. google. cloud. dataplex. v1. Run Task Response Or Builder
com. google. cloud. dataplex. v1. Scanned Data. Incremental Field Or Builder
com. google. cloud. dataplex. v1. Scanned Data Or Builder
com. google. cloud. dataplex. v1. Schema. Partition Field Or Builder
com. google. cloud. dataplex. v1. Schema. Schema Field Or Builder
com. google. cloud. dataplex. v1. Schema Or Builder
com. google. cloud. dataplex. v1. Search Entries Request Or Builder
com. google. cloud. dataplex. v1. Search Entries Response Or Builder
com. google. cloud. dataplex. v1. Search Entries Result. Snippets Or Builder
com. google. cloud. dataplex. v1. Search Entries Result Or Builder
com. google. cloud. dataplex. v1. Session Event. Query Detail Or Builder
com. google. cloud. dataplex. v1. Session Event Or Builder
com. google. cloud. dataplex. v1. Session Or Builder
com. google. cloud. dataplex. v1. Storage Access Or Builder
com. google. cloud. dataplex. v1. Storage Format. Csv Options Or Builder
com. google. cloud. dataplex. v1. Storage Format. Iceberg Options Or Builder
com. google. cloud. dataplex. v1. Storage Format. Json Options Or Builder
com. google. cloud. dataplex. v1. Storage Format Or Builder
com. google. cloud. dataplex. v1. Task. Execution Spec Or Builder
com. google. cloud. dataplex. v1. Task. Execution Status Or Builder
com. google. cloud. dataplex. v1. Task. Infrastructure Spec. Batch Compute Resources Or Builder
com. google. cloud. dataplex. v1. Task. Infrastructure Spec. Container Image Runtime Or Builder
com. google. cloud. dataplex. v1. Task. Infrastructure Spec. Vpc Network Or Builder
com. google. cloud. dataplex. v1. Task. Infrastructure Spec Or Builder
com. google. cloud. dataplex. v1. Task. Notebook Task Config Or Builder
com. google. cloud. dataplex. v1. Task. Spark Task Config Or Builder
com. google. cloud. dataplex. v1. Task. Trigger Spec Or Builder
com. google. cloud. dataplex. v1. Task Or Builder
com. google. cloud. dataplex. v1. Trigger. On Demand Or Builder
com. google. cloud. dataplex. v1. Trigger. One Time Or Builder
com. google. cloud. dataplex. v1. Trigger. Schedule Or Builder
com. google. cloud. dataplex. v1. Trigger Or Builder
com. google. cloud. dataplex. v1. Update Aspect Type Request Or Builder
com. google. cloud. dataplex. v1. Update Asset Request Or Builder
com. google. cloud. dataplex. v1. Update Data Asset Request Or Builder
com. google. cloud. dataplex. v1. Update Data Attribute Binding Request Or Builder
com. google. cloud. dataplex. v1. Update Data Attribute Request Or Builder
com. google. cloud. dataplex. v1. Update Data Product Request Or Builder
com. google. cloud. dataplex. v1. Update Data Scan Request Or Builder
com. google. cloud. dataplex. v1. Update Data Taxonomy Request Or Builder
com. google. cloud. dataplex. v1. Update Encryption Config Request Or Builder
com. google. cloud. dataplex. v1. Update Entity Request Or Builder
com. google. cloud. dataplex. v1. Update Entry Group Request Or Builder
com. google. cloud. dataplex. v1. Update Entry Link Request Or Builder
com. google. cloud. dataplex. v1. Update Entry Request Or Builder
com. google. cloud. dataplex. v1. Update Entry Type Request Or Builder
com. google. cloud. dataplex. v1. Update Glossary Category Request Or Builder
com. google. cloud. dataplex. v1. Update Glossary Request Or Builder
com. google. cloud. dataplex. v1. Update Glossary Term Request Or Builder
com. google. cloud. dataplex. v1. Update Lake Request Or Builder
com. google. cloud. dataplex. v1. Update Metadata Feed Request Or Builder
com. google. cloud. dataplex. v1. Update Task Request Or Builder
com. google. cloud. dataplex. v1. Update Zone Request Or Builder
com. google. cloud. dataplex. v1. Zone. Discovery Spec. Csv Options Or Builder
com. google. cloud. dataplex. v1. Zone. Discovery Spec. Json Options Or Builder
com. google. cloud. dataplex. v1. Zone. Discovery Spec Or Builder
com. google. cloud. dataplex. v1. Zone. Resource Spec Or Builder
com. google. cloud. dataplex. v1. Zone Or Builder
Enums
Enum
Description
com. google. cloud. dataplex. v1. Action. Category
The category of issues.
com. google. cloud. dataplex. v1. Action. Details Case
com. google. cloud. dataplex. v1. Action. Incompatible Data Schema. Schema Change
Whether the action relates to a schema that is incompatible or modified.
com. google. cloud. dataplex. v1. Action. Invalid Data Partition. Partition Structure
The expected partition structure.
com. google. cloud. dataplex. v1. Aspect Type. Data Classification
Classifies the data stored by the aspect.
com. google. cloud. dataplex. v1. Asset. Discovery Spec. Trigger Case
com. google. cloud. dataplex. v1. Asset. Discovery Status. State
Current state of discovery.
com. google. cloud. dataplex. v1. Asset. Resource Spec. Access Mode
Access Mode determines how data stored within the resource is read. This
is only applicable to storage bucket assets.
com. google. cloud. dataplex. v1. Asset. Resource Spec. Type
Type of resource.
com. google. cloud. dataplex. v1. Asset. Resource Status. State
The state of a resource.
com. google. cloud. dataplex. v1. Asset. Security Status. State
The state of the security policy.
com. google. cloud. dataplex. v1. Business Glossary Event. Event Type
Type of glossary log event.
com. google. cloud. dataplex. v1. Content. Content Case
com. google. cloud. dataplex. v1. Content. Data Case
com. google. cloud. dataplex. v1. Content. Notebook. Kernel Type
Kernel Type of the Jupyter notebook.
com. google. cloud. dataplex. v1. Content. Sql Script. Query Engine
Query Engine Type of the SQL Script.
com. google. cloud. dataplex. v1. Data Attribute Binding. Resource Reference Case
com. google. cloud. dataplex. v1. Data Discovery Spec. Big Query Publishing Config. Table Type
Determines how discovered tables are published.
com. google. cloud. dataplex. v1. Data Discovery Spec. Resource Config Case
com. google. cloud. dataplex. v1. Data Documentation Result. Result Case
com. google. cloud. dataplex. v1. Data Documentation Spec. Generation Scope
The data documentation generation scope. This field contains the possible
components of a data documentation scan which can be selectively generated.
com. google. cloud. dataplex. v1. Data Product. Principal. Type Case
com. google. cloud. dataplex. v1. Data Profile Result. Post Scan Actions Result. Big Query Export Result. State
Execution state for the exporting.
com. google. cloud. dataplex. v1. Data Profile Result. Profile. Field. Profile Info. Field Info Case
com. google. cloud. dataplex. v1. Data Quality Result. Post Scan Actions Result. Big Query Export Result. State
Execution state for the exporting.
com. google. cloud. dataplex. v1. Data Quality Rule. Rule Type Case
com. google. cloud. dataplex. v1. Data Quality Rule. Statistic Range Expectation. Column Statistic
The list of aggregate metrics a rule can be evaluated against.
com. google. cloud. dataplex. v1. Data Quality Scan Rule Result. Evaluation Type
The evaluation type of the data quality rule.
com. google. cloud. dataplex. v1. Data Quality Scan Rule Result. Result
Whether the data quality rule passed or failed.
com. google. cloud. dataplex. v1. Data Quality Scan Rule Result. Rule Type
The type of the data quality rule.
com. google. cloud. dataplex. v1. Data Scan. Execution Spec. Incremental Case
com. google. cloud. dataplex. v1. Data Scan. Result Case
com. google. cloud. dataplex. v1. Data Scan. Spec Case
com. google. cloud. dataplex. v1. Data Scan Catalog Publishing Status. State
Execution state for the publishing.
com. google. cloud. dataplex. v1. Data Scan Event. Applied Configs Case
com. google. cloud. dataplex. v1. Data Scan Event. Post Scan Actions Result. Big Query Export Result. State
Execution state for the exporting.
com. google. cloud. dataplex. v1. Data Scan Event. Result Case
com. google. cloud. dataplex. v1. Data Scan Event. Scan Type
The type of the data scan.
com. google. cloud. dataplex. v1. Data Scan Event. Scope
The scope of job for the data scan.
com. google. cloud. dataplex. v1. Data Scan Event. State
The job state of the data scan.
com. google. cloud. dataplex. v1. Data Scan Event. Trigger
The trigger type for the data scan.
com. google. cloud. dataplex. v1. Data Scan Job. Result Case
com. google. cloud. dataplex. v1. Data Scan Job. Spec Case
com. google. cloud. dataplex. v1. Data Scan Job. State
Execution state for the DataScanJob.
com. google. cloud. dataplex. v1. Data Scan Type
The type of data scan.
com. google. cloud. dataplex. v1. Data Source. Source Case
com. google. cloud. dataplex. v1. Discovery Event. Details Case
com. google. cloud. dataplex. v1. Discovery Event. Entity Type
The type of the entity.
com. google. cloud. dataplex. v1. Discovery Event. Event Type
The type of the event.
com. google. cloud. dataplex. v1. Discovery Event. Table Type
The type of the published table.
com. google. cloud. dataplex. v1. Encryption Config. Encryption State
State of encryption of the databases when EncryptionConfig is created or
updated.
com. google. cloud. dataplex. v1. Encryption Config. Failure Details. Error Code
Error code for the failure if anything related to Cmek db fails.
com. google. cloud. dataplex. v1. Entity. Type
The type of entity.
com. google. cloud. dataplex. v1. Entry Link. Entry Reference. Type
Reference type of the Entry.
com. google. cloud. dataplex. v1. Entry Link Event. Event Type
Type of entry link log event.
com. google. cloud. dataplex. v1. Entry View
View for controlling which parts of an entry are to be returned.
com. google. cloud. dataplex. v1. Environment. Infrastructure Spec. Resources Case
com. google. cloud. dataplex. v1. Environment. Infrastructure Spec. Runtime Case
com. google. cloud. dataplex. v1. Get Data Scan Job Request. Data Scan Job View
DataScanJob view options.
com. google. cloud. dataplex. v1. Get Data Scan Request. Data Scan View
DataScan view options.
com. google. cloud. dataplex. v1. Get Entity Request. Entity View
Entity views for get entity partial result.
com. google. cloud. dataplex. v1. Governance Event. Entity. Entity Type
Type of entity.
com. google. cloud. dataplex. v1. Governance Event. Event Type
Type of governance log event.
com. google. cloud. dataplex. v1. Job. Service
Protobuf enum google.cloud.dataplex.v1.Job.Service
com. google. cloud. dataplex. v1. Job. State
Protobuf enum google.cloud.dataplex.v1.Job.State
com. google. cloud. dataplex. v1. Job. Trigger
Job execution trigger.
com. google. cloud. dataplex. v1. Job Event. Execution Trigger
Job Execution trigger.
com. google. cloud. dataplex. v1. Job Event. Service
The service used to execute the job.
com. google. cloud. dataplex. v1. Job Event. State
The completion status of the job.
com. google. cloud. dataplex. v1. Job Event. Type
The type of the job.
com. google. cloud. dataplex. v1. Lake. Metastore Status. State
Current state of association.
com. google. cloud. dataplex. v1. List Entities Request. Entity View
Entity views.
com. google. cloud. dataplex. v1. Lookup Entry Links Request. Entry Mode
Mode of entry reference.
com. google. cloud. dataplex. v1. Metadata Feed. Endpoint Case
com. google. cloud. dataplex. v1. Metadata Feed. Filters. Change Type
The type of change that you want to listen to.
com. google. cloud. dataplex. v1. Metadata Job. Import Job Spec. Log Level
The level of logs to write to Cloud Logging for this job.
com. google. cloud. dataplex. v1. Metadata Job. Import Job Spec. Sync Mode
Specifies how the entries and aspects in a metadata import job are
updated. For more information, see Sync
mode .
com. google. cloud. dataplex. v1. Metadata Job. Result Case
com. google. cloud. dataplex. v1. Metadata Job. Spec Case
com. google. cloud. dataplex. v1. Metadata Job. Status. State
State of a metadata job.
com. google. cloud. dataplex. v1. Metadata Job. Type
Metadata job type.
com. google. cloud. dataplex. v1. Scanned Data. Data Range Case
com. google. cloud. dataplex. v1. Schema. Mode
Additional qualifiers to define field semantics.
com. google. cloud. dataplex. v1. Schema. Partition Style
The structure of paths within the entity, which represent partitions.
com. google. cloud. dataplex. v1. Schema. Type
Type information for fields in schemas and partition schemas.
com. google. cloud. dataplex. v1. Session Event. Detail Case
com. google. cloud. dataplex. v1. Session Event. Event Type
The type of the event.
com. google. cloud. dataplex. v1. Session Event. Query Detail. Engine
Query Execution engine.
com. google. cloud. dataplex. v1. State
State of a resource.
com. google. cloud. dataplex. v1. Storage Access. Access Mode
Access Mode determines how data stored within the Entity is read.
com. google. cloud. dataplex. v1. Storage Format. Compression Format
The specific compressed file format of the data.
com. google. cloud. dataplex. v1. Storage Format. Format
The specific file format of the data.
com. google. cloud. dataplex. v1. Storage Format. Options Case
com. google. cloud. dataplex. v1. Storage System
Identifies the cloud system that manages the data storage.
com. google. cloud. dataplex. v1. Task. Config Case
com. google. cloud. dataplex. v1. Task. Infrastructure Spec. Network Case
com. google. cloud. dataplex. v1. Task. Infrastructure Spec. Resources Case
com. google. cloud. dataplex. v1. Task. Infrastructure Spec. Runtime Case
com. google. cloud. dataplex. v1. Task. Infrastructure Spec. Vpc Network. Network Name Case
com. google. cloud. dataplex. v1. Task. Spark Task Config. Driver Case
com. google. cloud. dataplex. v1. Task. Trigger Spec. Trigger Case
com. google. cloud. dataplex. v1. Task. Trigger Spec. Type
Determines how often and when the job will run.
com. google. cloud. dataplex. v1. Transfer Status
Denotes the transfer status of a resource. It is unspecified for resources
created from Dataplex API.
com. google. cloud. dataplex. v1. Trigger. Mode Case
com. google. cloud. dataplex. v1. Zone. Discovery Spec. Trigger Case
com. google. cloud. dataplex. v1. Zone. Resource Spec. Location Type
Location type of the resources attached to a zone.
com. google. cloud. dataplex. v1. Zone. Type
Type of zone.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
