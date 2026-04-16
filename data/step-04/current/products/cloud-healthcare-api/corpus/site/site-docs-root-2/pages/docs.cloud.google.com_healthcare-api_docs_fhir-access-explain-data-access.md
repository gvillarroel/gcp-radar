---
title: "Understand data access \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/fhir-access-explain-data-access
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/fhir-access-explain-data-access
  title: "Understand data access \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation"
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
Understand data access
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use the ExplainDataAccess method to understand which actors have
access to specific FHIR resources. Using this method, you can gain insights
into access permissions based on your access control policies, helping you
answer questions about data access permissions and the consents enforcing them.
Before you begin
Set up necessary FHIR store configurations and resources and enforce access
control. For more information, see
Control access to FHIR resources .
Overview
The
ExplainDataAccess
method lets you find out which actors have what access to which a given
resource based on the
enforced
policies and consents.
The
ExplainDataAccess
method can help you answer questions like these:
Who can access a given resource?
For what purpose can these actors access this resource?
What are the Consent resources enforcing the said access?
Understand data access
To use
ExplainDataAccess ,
pass in identifier of the resource of interest. The response provides a list of
consent scopes
(actor, purpose, environment) that are permitted or denied to access the
provided resource. The exceptions to a
consent scopes are
listed in the
ExplainDataAccessConsentScope.exceptions
field. An exceptions can happen when one policy permit actor to access
Observation/ob1 for any purpose, while there exist a deny policy that denies
actor from accessing this resource with research purpose. Each
consent scopes
contains information about which consent resource enforced such access through
ExplainDataAccessConsentScope.enforcing_consents ,
this helps you understand the details of the enforced and applicable consents on
this resource.
There is a
limit of
1000 permit consent directives and 1000 deny consent directives. This limit
constraints the number of consent scopes applied to a given resource. If the
number of consent scopes exceed the limit, the
ExplainDataAccessResponse.warning
field contains relevant message.
The following is an example request that explain data access for a given
resource:
curl -X GET \
-H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \
-H "Content-Type: application/json" \
"https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID :explainDataAccess?resource_id=Observation/7473784b-46a8-470c-b9a6-fe38a01025aa"
You should receive a JSON response similar to the following:
{
"consentScopes" : [
{
"decision" : "CONSENT_DECISION_TYPE_PERMIT" ,
"enforcingConsents" : [
{
"consentResource" : "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/Consent/73c54e8d-2789-403b-9dee-13085c5d5e34" ,
"type" : "CONSENT_POLICY_TYPE_PATIENT" ,
"enforcementTime" : "2024-02-09T02:48:02.721589Z" ,
"patientConsentOwner" : "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/Patient/3c6aa096-c054-4c22-b2b4-1e4a4d203de2" ,
"matchingAccessorScopes" : [
{
"actor" : "Practitioner/12942879-f89f-41ae-aa80-0b911b649833" ,
"purpose" : "v3/ETREAT" ,
"environment" : "*"
}
]
}
] ,
"accessorScope" : {
"actor" : "Practitioner/12942879-f89f-41ae-aa80-0b911b649833" ,
"purpose" : "v3/ETREAT" ,
"environment" : "*"
}
} ,
{
"decision" : "CONSENT_DECISION_TYPE_PERMIT" ,
"enforcingConsents" : [
{
"consentResource" : "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/Consent/10998b60-a252-405f-aa47-0702554ddc8e" ,
"type" : "CONSENT_POLICY_TYPE_PATIENT" ,
"enforcementTime" : "2024-02-09T02:48:02.721589Z" ,
"patientConsentOwner" : "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/Patient/3c6aa096-c054-4c22-b2b4-1e4a4d203de2" ,
"matchingAccessorScopes" : [
{
"actor" : "Practitioner/12942879-f89f-41ae-aa80-0b911b649833" ,
"purpose" : "*" ,
"environment" : "App/123"
}
]
}
] ,
"accessorScope" : {
"actor" : "Practitioner/12942879-f89f-41ae-aa80-0b911b649833" ,
"purpose" : "*" ,
"environment" : "App/123"
}
} ,
{
"decision" : "CONSENT_DECISION_TYPE_PERMIT" ,
"enforcingConsents" : [
{
"consentResource" : "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/Consent/5c8e3f8a-9fd5-480d-a08e-f29b89feccde" ,
"type" : "CONSENT_POLICY_TYPE_ADMIN" ,
"enforcementTime" : "2024-02-09T02:50:03.973252Z" ,
"matchingAccessorScopes" : [
{
"actor" : "Practitioner/12942879-f89f-41ae-aa80-0b911b649833" ,
"purpose" : "v3/BIORCH" ,
"environment" : "App/golden"
}
]
}
] ,
"accessorScope" : {
"actor" : "Practitioner/12942879-f89f-41ae-aa80-0b911b649833" ,
"purpose" : "v3/BIORCH" ,
"environment" : "App/golden"
}
}
]
}
In this example, The following access were permitted:
Practitioner/12942879-f89f-41ae-aa80-0b911b649833 with v3/ETREAT purpose
in all environments, granted by patient consent.
Practitioner/12942879-f89f-41ae-aa80-0b911b649833 with all purpose in
App/123 environment, granted by patient consent.
Practitioner/12942879-f89f-41ae-aa80-0b911b649833 with v3/BIORCH purpose
in App/golden environment, granted by admin consent.
Additional ExplainDataAccess Response Example
{
"consentScopes" :[
{
"decision" : "CONSENT_DECISION_TYPE_PERMIT" ,
"accessorScope" :{
"actor" : "Practitioner/doctor" ,
"purpose" : "*" ,
"environment" : "*"
},
"enforcingConsents" :[
{
"consentResource" : "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/Consent/pc1" ,
"type" : "CONSENT_POLICY_TYPE_PATIENT" ,
"enforcementTime" : "2024-01-02T14:10:55.271144Z" ,
"patientConsentOwner" : "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/Patient/p1" ,
"matchingAccessorScopes" :[
{
"actor" : "Practitioner/doctor" ,
"purpose" : "*" ,
"environment" : "*"
}
]
}
],
"exceptions" :[
{
"decision" : "CONSENT_DECISION_TYPE_DENY" ,
"accessorScope" :{
"actor" : "Practitioner/doctor" ,
"purpose" : "v3/TREAT" ,
"environment" : "*"
},
"enforcingConsents" :[
{
"consentResource" : "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/Consent/ac1" ,
"type" : "CONSENT_POLICY_TYPE_ADMIN" ,
"enforcementTime" : "2024-01-02T14:10:55.229196Z" ,
"matchingAccessorScopes" :[
{
"actor" : "Practitioner/doctor" ,
"purpose" : "v3/TREAT" ,
"environment" : "*"
}
]
},
{
"consentResource" : "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/Consent/ac1-dup" ,
"type" : "CONSENT_POLICY_TYPE_ADMIN" ,
"variants" :[ "CONSENT_VARIANT_CASCADE" ],
"enforcementTime" : "2024-01-02T14:10:55.229196Z" ,
"cascadeOrigins" :[
"projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/Patient/p1"
],
"matchingAccessorScopes" :[
{
"actor" : "Practitioner/doctor" ,
"purpose" : "v3/TREAT" ,
"environment" : "*"
}
]
}
]
}
]
},
{
"decision" : "CONSENT_DECISION_TYPE_DENY" ,
"accessorScope" :{
"actor" : "Practitioner/doctor" ,
"purpose" : "v3/TREAT" ,
"environment" : "*"
},
"enforcingConsents" :[
{
"consentResource" : "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/Consent/ac1" ,
"type" : "CONSENT_POLICY_TYPE_ADMIN" ,
"enforcementTime" : "2024-01-02T14:10:55.229196Z" ,
"matchingAccessorScopes" :[
{
"actor" : "Practitioner/doctor" ,
"purpose" : "v3/TREAT" ,
"environment" : "*"
}
]
},
{
"consentResource" : "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/Consent/ac1-dup" ,
"type" : "CONSENT_POLICY_TYPE_ADMIN" ,
"variants" :[ "CONSENT_VARIANT_CASCADE" ],
"enforcementTime" : "2024-01-02T14:10:55.229196Z" ,
"cascadeOrigins" :[
"projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID /fhir/Patient/p1"
],
"matchingAccessorScopes" :[
{
"actor" : "Practitioner/doctor" ,
"purpose" : "v3/TREAT" ,
"environment" : "*"
}
]
}
]
}
]
}
In this example, Practitioner/doctor is permitted to access the resource in
all environments and for all purposes except for v3/TREAT . The consent
enforcing policy is a patient consent Consent/pc1 , and the consent enforcing
policy are admin policies ( Consent/ac1 and Consent/ac1-dup ).
Consent/ac1-dup is an admin cascading policy that matched resource's owner
Patient/p1 .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
