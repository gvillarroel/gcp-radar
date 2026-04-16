---
title: "FHIR conformance statement \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/fhir
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/fhir
  title: "FHIR conformance statement \_|\_ Cloud Healthcare API \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Cloud Healthcare API
Reference
Send feedback
FHIR conformance statement
Stay organized with collections
Save and categorize content based on your preferences.
FHIR stores within the Cloud Healthcare API support multiple versions of
the Fast Healthcare Interoperability Resources
( FHIR )
specification published by Health Level 7 International
( HL7 ).
The v1 API supports the following versions:
R5 version 5.0.0 (Release 5)
R4 version 4.0.1
(Release 4)
STU3 version 3.0.1
(Release 3 - Standard for Trial Use)
DSTU2 version 1.0.2
(Draft Standard for Trial Use)
When you create a FHIR store, you specify the FHIR version as a parameter to
the fhirStores.create method. You can't change the FHIR version after the
store is created.
The API interface to each store conforms to the FHIR version of that store. For
example, the DSTU2 conformance interaction is different from the STU3
capabilities interaction but both share the /fhir/metadata REST path, so
that path returns different responses based on the FHIR version of the store.
Functionality added in later FHIR versions is available in stores using earlier
FHIR versions if it doesn't create incompatibility. For example, the patch
interaction is available on a DSTU2 store even though that interaction is only
defined from STU3 onwards.
Details of supported functionality in the v1 API by FHIR version
R5
The server's
capability statement
indicates the parts of the specification that are supported.
Storage and retrieval of all
R5 resources ,
including support for
extension elements .
The API accepts, stores, and returns extensions on any data element.
All the methods in the
RESTful API
that use the JSON content type are supported, except for:
The type-level and system-level
history
interactions that retrieve history across multiple resources aren't
supported. Resource history can only be retrieved for one resource at
a time.
The
batch/transaction
interaction doesn't support search operations inside the bundle.
Profile
validation and enforcement are supported.
User-defined search parameters, including searches on extension elements,
are supported in the v1beta1 API.
All the search
functionality is supported, except for:
The search parameters Group-characteristic-value , Location-near ,
Location-contains , DocumentReference-relationship ,
Bundle-composition , Bundle-message ,
Observation-component-value-canonical , Observation-value-canonical ,
QuestionnaireResponse-item-subject , and Composition-section-text
aren't supported.
Search parameters that perform phonetic matching aren't supported.
The search result parameters _contained , _containedType ,
_summary=count , and _summary=true aren't supported.
The special search parameter _content searches all fields of the
resource that search parameters refer to. It excludes fields that
aren't searchable. It doesn't support explicit AND (terms are
implicitly combined with AND ) or brackets.
The special search parameters Resource-query , Resource-filter ,
Resource-language , Resource-in and Resource-list aren't
supported.
The _sort parameter, when used on fields with repeated elements,
sorts by the first element; this differs from the specification.
_sort is supported for search parameters of type number , data ,
string , token , and quantity .
The token search modifier :of-type , :code-text , text-advanced ,
and :text and the reference search modifier :identifier , not-in ,
text-advanced , and :code-text aren't supported. The contains
modifier for uri searches is not supported.
Canonical reference searches are not supported. Canonical references
are treated as normal references. The above and below modifiers
are not supported.
When using the _type parameter, only the common (to all resources)
search parameters can be used and not the intersection of the specified
resource types.
The following subset of composite search parameters are supported:
Observation-code-value-concept
Observation-code-value-date
Observation-code-value-quantity
Observation-code-value-string
Observation-combo-code-value-concept
Observation-combo-code-value-quantity
Observation-component-code-value-concept
Observation-component-code-value-quantity
The remaining composite search parameters aren't supported.
Search using the POST method does not accept
application/x-www-form-urlencoded parameters in the request body.
Wildcard ( * ) is supported for _include but is not supported for
_revinclude .
Areas that aren't supported include:
The XML content type isn't supported.
The patch operation doesn't support XML Patch or FHIRPath Patch.
The HTTP HEAD requests aren't supported.
Certain aspects of the API deviated from the FHIR spec due to backwards compatibility in prior FHIR versions.
These have been fixed in R5:
When required field validation is enabled, null fields and empty fields (for example, {} ) are now rejected.
UpperCamelCase is no longer supported for resource fields in json.
urn:uuid references are not allowed in batch bundles, whether or not referential integrity is disabled. Batch bundles never rewrite references.
Transaction bundles are stricter in rewriting references than before, and errors on invalid FullUrls in entries, as defined by the spec: https://www.hl7.org/fhir/bundle.html#references.
References that look like resource references must have valid IDs.
Base profile validation is enabled for PATCH requests.
R4
The server's
capability statement
indicates the parts of the specification that are supported.
Storage and retrieval of all
R4 resources ,
including support for
extension elements .
The API accepts, stores, and returns extensions on any data element.
All the methods in the
RESTful API
that use the JSON content type are supported, except for:
The type-level and system-level
history
interactions that retrieve history across multiple resources aren't
supported. Resource history can only be retrieved for one resource at
a time.
The
batch/transaction
interaction doesn't support search operations inside the bundle.
Profile
validation and enforcement are supported.
User-defined search parameters, including searches on extension elements,
are supported in the v1beta1 API.
All the search
functionality is supported, except for:
The search parameters Group-characteristic-value , Location-near ,
Bundle-composition , and Bundle-message aren't supported.
Search parameters that perform phonetic matching aren't supported.
The search result parameters _contained , _containedType ,
_summary=count , and _summary=true aren't supported.
The special search parameter _content searches all fields of the
resource that search parameters refer to. It excludes fields that
aren't searchable. It doesn't support explicit AND (terms are
implicitly combined with AND ) or brackets.
The special search parameters _query , _filter , and _list aren't
supported.
The _sort parameter, when used on fields with repeated elements,
sorts by the first element; this differs from the specification.
_sort is supported for search parameters of type number , data ,
string , token , and quantity .
The token search modifier :of-type and the reference search modifier
:identifier aren't supported.
Canonical reference searches are not supported. Canonical references
are treated as normal references.
When using the _type parameter, only the common (to all resources) search parameters
can be used and not the intersection of the specified resource types.
The following subset of composite search parameters are supported:
DocumentReference-relationship
Observation-code-value-concept
Observation-code-value-date
Observation-code-value-quantity
Observation-code-value-string
Observation-combo-code-value-concept
Observation-combo-code-value-quantity
Observation-component-code-value-concept
Observation-component-code-value-quantity
The remaining composite search parameters aren't supported.
Search using the POST method does not accept
application/x-www-form-urlencoded parameters in the request body.
Wildcard ( * ) is supported for _include but is not supported for
_revinclude .
Areas that aren't supported include:
Most
extended operations
aren't implemented.
The XML content type isn't supported.
The patch operation doesn't support XML Patch or FHIRPath Patch.
The HTTP HEAD requests aren't supported.
Areas where the API deviates from the FHIR spec to allow for backwards compatibility:
null is accepted for required fields
An empty code is accepted for required fields
urn:uuid references are allowed in batch bundles when referential integrity is disabled.
STU3
The server's
capability statement
indicates the parts of the specification that are supported.
Storage and retrieval of all
STU3 resources
is supported, including support for
extension elements .
The API accepts, stores, and returns extensions on any data element.
All the methods in the
RESTful API
that use the JSON content type are supported, except for:
The type-level and system-level
history
interactions that retrieve history across multiple resources aren't
supported. Resource history can only be retrieved for one resource at
a time.
The
batch/transaction
interaction doesn't support search operations inside the bundle.
Profile
validation and enforcement are supported.
User-defined search parameters, including searches on extension elements,
are supported in the v1beta1 API.
All the search
functionality is supported, except for:
The search parameters Group-characteristic-value ,
Sequence-coordinate , Location-near , Location-near-distance ,
Bundle-composition , and Bundle-message aren't supported.
Search parameters that perform phonetic matching aren't supported.
The search result parameters _contained , _containedType ,
_summary=count , and _summary=true aren't supported.
The special search parameter _content searches all fields of the
resource that are referred to by search parameters. It excludes fields
that aren't searchable. It doesn't support explicit AND (terms are
implicitly combined with AND) or brackets.
The special search parameters _query , _filter , and _list aren't
supported.
The _sort parameter, when used on fields with repeated elements,
sorts by the first element; this differs from the specification.
_sort is supported for search parameters of type number , data ,
string , token , and quantity .
Search using the POST method does not accept
application/x-www-form-urlencoded parameters in the request body.
Wildcard ( * ) is supported for _include but is not supported for
_revinclude .
Areas that aren't supported include:
Most
extended operations
aren't implemented.
The XML content type isn't supported.
The patch operation doesn't support XML Patch or FHIRPath Patch.
Areas where the API deviates from the FHIR spec to allow for backwards compatibility:
null is accepted for required fields
An empty code is accepted for required fields
urn:uuid references are allowed in batch bundles when referential integrity is disabled.
DSTU2
The server's
conformance statement
indicates the parts of the specification that are supported.
Storage and retrieval of all
DSTU2 resources
is supported, including support for
extension elements .
The API accepts, stores, and returns extensions on any data element.
All the methods in the
RESTful API
that use the JSON content type are supported, except for:
The type-level and system-level
history
interactions that retrieve history across multiple resources aren't
supported. Resource history can only be retrieved for one resource at
a time.
The
batch/transaction
interaction doesn't support search operations inside the bundle.
Profile
validation and enforcement are supported.
All the
search
functionality is supported, except for:
The search parameters Group-characteristic-value , Location-near ,
Location-near-distance , Bundle-composition , Bundle-message ,
Coverage-dependent , and Coverage-sequence aren't supported.
Search parameters defined on extension elements aren't supported.
Search parameters that perform phonetic matching aren't supported.
The search result parameters _contained , _containedType ,
_summary=count , and _summary=true aren't supported.
The special search parameter _content searches all fields of the
resource that are referred to by search parameters. It excludes fields
that aren't searchable. It doesn't support explicit AND (terms are
implicitly combined with AND) or brackets.
The special search parameters _query , _filter , and _list aren't
supported.
The _sort parameter, when used on fields with repeated elements,
sorts by the first element; this differs from the specification.
_sort is supported for search parameters of type number , data ,
string , token , and quantity .
Search using the POST method does not accept
application/x-www-form-urlencoded parameters in the request body.
Wildcard ( * ) is supported for _include but is not supported for
_revinclude .
Areas that aren't supported include:
Most
extended operations
aren't implemented.
User-defined search parameters aren't supported for DSTU2.
The XML content type isn't supported.
Areas where the API deviates from the FHIR spec to allow for backwards compatibility:
null is accepted for required fields
An empty code is accepted for required fields
urn:uuid references are allowed in batch bundles when referential integrity is disabled.
Details of operations outside of the published specification
The FHIR store configuration includes an option to notify a user-specified
Pub/Sub topic for all changes to resources in the store. This
notification mechanism is common across all Cloud Healthcare API stores
and isn't intended to replace FHIR Subscription
( DSTU2 ,
STU3 ,
R4 ,
and R5 ))
functionality.
The FHIR store export operation to Cloud Storage destinations
offers only a bulk export of the entire store. It's not an implementation
of the
FHIR Bulk Data
draft specification.
The FHIR store import operation isn't defined in the specification.
The Resource-purge operation that removes historical versions of
resources isn't defined in the specification. This API could change in the
future if the standards process or other FHIR implementations
converge on a different API method for this use case.
The ExecuteBundle endpoint accepts history bundles in v1beta1 to create historical versions of resources.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
