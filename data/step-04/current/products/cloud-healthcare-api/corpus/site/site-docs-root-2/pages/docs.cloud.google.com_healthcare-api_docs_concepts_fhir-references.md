---
title: "FHIR resource references \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-references
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/concepts/fhir-references
  title: "FHIR resource references \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation"
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
FHIR resource references
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how the Cloud Healthcare API supports
FHIR resource references .
Overview
FHIR resource references are directional links from a source resource to a
target resource. FHIR resource references can be used to connect resources. For
example, the FHIR resource type Observation has a subject field of
Reference type, which
can be used to link to a Patient resource as the subject of the observation.
FHIR resource references can also be circular. For example, the FHIR resource
type CarePlan has a replaces field that can point to another CarePlan .
The most important element in the FHIR reference structure is
reference .
The other elements, such as display and identifier are persisted as they are
in the Cloud Healthcare API.
The supported formats of Reference.reference in the Cloud Healthcare API
include:
Local resource reference
URI beginning with urn:uuid or urn:oid
Full external URL
Fragment reference
Local resource reference
Resource references are defined as
RESOURCE_TYPE / RESOURCE_ID .
The Cloud Healthcare API also supports prepending the full FHIR store name
in front of RESOURCE_TYPE / RESOURCE_ID . For
example,
FHIR_STORE_NAME / RESOURCE_TYPE / RESOURCE_ID .
If you use this format, the store name must match the FHIR store of the request.
Otherwise, the request is rejected due to non-local references.
The store configuration option
FhirStore.disableReferentialIntegrity
controls the referential integrity check for local reference validation, which
is enabled by default. For more information on the referential integrity check,
see
FHIR referential integrity .
Versioned references
Cloud Healthcare API supports references to a specific version of the target
resource. To link to a specific version of the target resource, use the format
after the RESOURCE_ID /_history/ VERSION_ID ] in
the local reference.
When the referential integrity check is enabled, the server verifies that the
historical version exists in the FHIR store. The
Resource-purge
method removes historical versions regardless of whether they are referenced.
Conditional references
As an alternative to explicitly specifying the target resource ID,
executeBundle
accepts a conditional reference
search query for the target resource that resolves to the target resource ID at
request time. For example, Patient?identifier=abc .
If the search query does not resolve to a target resource or resolves to more
than one target resource, the server rejects the request regardless of whether
referential integrity checking is enabled.
URI beginning with urn:uuid or urn:oid
When using the
executeBundle
method with a transaction bundle, universally unique identifier (UUID) or object
identifier(OID) references can be used to resolve references to other resources
being created or updated in the same bundle. For more information, see the
Managing FHIR bundles guide .
Full external URL
Full external URLs such as http://www.example.com/abc are stored unmodified
in the reference field. The Cloud Healthcare API does not resolve the URL or
try to verify its validity.
When the full external URL matches the full URL of the FHIR store of the
request, the reference is treated as a local resource reference.
Fragment reference
A fragment reference points to a
contained resource
inlined in a resource. For example, if an Observation record mentions a
general practitioner but there is no controlled practitioner directory, a full
Practitioner resource can't be created. The general practitioner is a contained
resource in the Observation record. The Reference fields on a resource can point
to the inlined resources using the form of #[INLINE_RESOURCE_ID] .
In the following FHIR R4 sample, p1 and p2 are inline resource IDs that are
referenced as #p1 and #p2 :
{
"resourceType" : "Observation" ,
"contained" : [
{
"resourceType" : "Patient" ,
"id" : "p1" ,
"generalPractitioner" : { "reference" : "#p2" }
},
{
"resourceType" : "Practitioner" ,
"id" : "p2"
}
],
"status" : "final" ,
"subject" : { "reference" : "#p1" },
"performer" : [{ "reference" : "#p2" }]
}
The [INLINE_RESOURCE_ID] must exist as a contained resource inside the
resource, otherwise the server rejects the request. The contained resource can
only be referenced by its container or other contained resources inside the same
container.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
