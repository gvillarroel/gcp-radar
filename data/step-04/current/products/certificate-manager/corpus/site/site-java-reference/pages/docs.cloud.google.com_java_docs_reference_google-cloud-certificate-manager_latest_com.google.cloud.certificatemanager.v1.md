---
title: "Package com.google.cloud.certificatemanager.v1 (0.91.0) \_|\_ Java client\
  \ libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1
  title: "Package com.google.cloud.certificatemanager.v1 (0.91.0) \_|\_ Java client\
    \ libraries \_|\_ Google Cloud Documentation"
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
Package com.google.cloud.certificatemanager.v1 (0.91.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.91.0 (latest)
0.90.0
0.88.0
0.86.0
0.85.0
0.84.0
0.83.0
0.81.0
0.79.0
0.78.0
0.77.0
0.76.0
0.75.0
0.73.0
0.71.0
0.70.0
0.67.0
0.66.0
0.65.0
0.63.0
0.62.0
0.61.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.52.0
0.51.0
0.50.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.42.0
0.40.0
0.39.0
0.38.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.27.0
0.26.0
0.25.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.2
0.4.0
0.3.1
0.2.0
0.1.1
GitHub Repository
Client Classes
Client classes are the main entry point to using a package.
They contain several variations of Java methods for each of the API's methods.
Client
Description
com. google. cloud. certificatemanager. v1. Certificate Manager Client
Service Description: API Overview
Certificates Manager API allows customers to see and manage all their TLS certificates.
Settings Classes
Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.
Settings
Description
com. google. cloud. certificatemanager. v1. Certificate Manager Settings
Settings class to configure an instance of CertificateManagerClient .
The default instance has everything set to sensible defaults:
Classes
Class
Description
com. google. cloud. certificatemanager. v1. Certificate
Defines TLS certificate.
com. google. cloud. certificatemanager. v1. Certificate. Builder
Defines TLS certificate.
com. google. cloud. certificatemanager. v1. Certificate. Managed Certificate
Configuration and state of a Managed Certificate.
Certificate Manager provisions and renews Managed Certificates
automatically, for as long as it's authorized to do so.
com. google. cloud. certificatemanager. v1. Certificate. Managed Certificate. Authorization Attempt Info
State of the latest attempt to authorize a domain for certificate
issuance.
com. google. cloud. certificatemanager. v1. Certificate. Managed Certificate. Authorization Attempt Info. Builder
State of the latest attempt to authorize a domain for certificate
issuance.
com. google. cloud. certificatemanager. v1. Certificate. Managed Certificate. Builder
Configuration and state of a Managed Certificate.
Certificate Manager provisions and renews Managed Certificates
automatically, for as long as it's authorized to do so.
com. google. cloud. certificatemanager. v1. Certificate. Managed Certificate. Provisioning Issue
Information about issues with provisioning a Managed Certificate.
com. google. cloud. certificatemanager. v1. Certificate. Managed Certificate. Provisioning Issue. Builder
Information about issues with provisioning a Managed Certificate.
com. google. cloud. certificatemanager. v1. Certificate. Self Managed Certificate
Certificate data for a SelfManaged Certificate.
SelfManaged Certificates are uploaded by the user. Updating such
certificates before they expire remains the user's responsibility.
com. google. cloud. certificatemanager. v1. Certificate. Self Managed Certificate. Builder
Certificate data for a SelfManaged Certificate.
SelfManaged Certificates are uploaded by the user. Updating such
certificates before they expire remains the user's responsibility.
com. google. cloud. certificatemanager. v1. Certificate Issuance Config
CertificateIssuanceConfig specifies how to issue and manage a certificate.
com. google. cloud. certificatemanager. v1. Certificate Issuance Config. Builder
CertificateIssuanceConfig specifies how to issue and manage a certificate.
com. google. cloud. certificatemanager. v1. Certificate Issuance Config. Certificate Authority Config
The CA that issues the workload certificate. It includes CA address, type,
authentication to CA service, etc.
com. google. cloud. certificatemanager. v1. Certificate Issuance Config. Certificate Authority Config. Builder
The CA that issues the workload certificate. It includes CA address, type,
authentication to CA service, etc.
com. google. cloud. certificatemanager. v1. Certificate Issuance Config. Certificate Authority Config. Certificate Authority Service Config
Contains information required to contact CA service.
com. google. cloud. certificatemanager. v1. Certificate Issuance Config. Certificate Authority Config. Certificate Authority Service Config. Builder
Contains information required to contact CA service.
com. google. cloud. certificatemanager. v1. Certificate Issuance Config Name
com. google. cloud. certificatemanager. v1. Certificate Issuance Config Name. Builder
Builder for
projects/{project}/locations/{location}/certificateIssuanceConfigs/{certificate_issuance_config}.
com. google. cloud. certificatemanager. v1. Certificate Issuance Config Proto
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Certificate Issuance Configs Fixed Size Collection
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Certificate Issuance Configs Page
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Certificate Issuance Configs Paged Response
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Certificate Map Entries Fixed Size Collection
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Certificate Map Entries Page
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Certificate Map Entries Paged Response
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Certificate Maps Fixed Size Collection
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Certificate Maps Page
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Certificate Maps Paged Response
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Certificates Fixed Size Collection
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Certificates Page
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Certificates Paged Response
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Dns Authorizations Fixed Size Collection
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Dns Authorizations Page
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Dns Authorizations Paged Response
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Locations Fixed Size Collection
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Locations Page
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Locations Paged Response
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Trust Configs Fixed Size Collection
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Trust Configs Page
com. google. cloud. certificatemanager. v1. Certificate Manager Client. List Trust Configs Paged Response
com. google. cloud. certificatemanager. v1. Certificate Manager Grpc
API Overview
Certificates Manager API allows customers to see and manage all their TLS
certificates.
com. google. cloud. certificatemanager. v1. Certificate Manager Grpc. Certificate Manager Impl Base
Base class for the server implementation of the service CertificateManager.
API Overview
com. google. cloud. certificatemanager. v1. Certificate Manager Proto
com. google. cloud. certificatemanager. v1. Certificate Manager Settings. Builder
Builder for CertificateManagerSettings.
com. google. cloud. certificatemanager. v1. Certificate Map
Defines a collection of certificate configurations.
com. google. cloud. certificatemanager. v1. Certificate Map. Builder
Defines a collection of certificate configurations.
com. google. cloud. certificatemanager. v1. Certificate Map. Gclb Target
Describes a Target Proxy that uses this Certificate Map.
com. google. cloud. certificatemanager. v1. Certificate Map. Gclb Target. Builder
Describes a Target Proxy that uses this Certificate Map.
com. google. cloud. certificatemanager. v1. Certificate Map. Gclb Target. Ip Config
Defines IP configuration where this Certificate Map is serving.
com. google. cloud. certificatemanager. v1. Certificate Map. Gclb Target. Ip Config. Builder
Defines IP configuration where this Certificate Map is serving.
com. google. cloud. certificatemanager. v1. Certificate Map Entry
Defines a certificate map entry.
com. google. cloud. certificatemanager. v1. Certificate Map Entry. Builder
Defines a certificate map entry.
com. google. cloud. certificatemanager. v1. Certificate Map Entry Name
com. google. cloud. certificatemanager. v1. Certificate Map Entry Name. Builder
Builder for
projects/{project}/locations/{location}/certificateMaps/{certificate_map}/certificateMapEntries/{certificate_map_entry}.
com. google. cloud. certificatemanager. v1. Certificate Map Name
com. google. cloud. certificatemanager. v1. Certificate Map Name. Builder
Builder for projects/{project}/locations/{location}/certificateMaps/{certificate_map}.
com. google. cloud. certificatemanager. v1. Certificate Name
com. google. cloud. certificatemanager. v1. Certificate Name. Builder
Builder for projects/{project}/locations/{location}/certificates/{certificate}.
com. google. cloud. certificatemanager. v1. Create Certificate Issuance Config Request
Request for the CreateCertificateIssuanceConfig method.
com. google. cloud. certificatemanager. v1. Create Certificate Issuance Config Request. Builder
Request for the CreateCertificateIssuanceConfig method.
com. google. cloud. certificatemanager. v1. Create Certificate Map Entry Request
Request for the CreateCertificateMapEntry method.
com. google. cloud. certificatemanager. v1. Create Certificate Map Entry Request. Builder
Request for the CreateCertificateMapEntry method.
com. google. cloud. certificatemanager. v1. Create Certificate Map Request
Request for the CreateCertificateMap method.
com. google. cloud. certificatemanager. v1. Create Certificate Map Request. Builder
Request for the CreateCertificateMap method.
com. google. cloud. certificatemanager. v1. Create Certificate Request
Request for the CreateCertificate method.
com. google. cloud. certificatemanager. v1. Create Certificate Request. Builder
Request for the CreateCertificate method.
com. google. cloud. certificatemanager. v1. Create Dns Authorization Request
Request for the CreateDnsAuthorization method.
com. google. cloud. certificatemanager. v1. Create Dns Authorization Request. Builder
Request for the CreateDnsAuthorization method.
com. google. cloud. certificatemanager. v1. Create Trust Config Request
Request for the CreateTrustConfig method.
com. google. cloud. certificatemanager. v1. Create Trust Config Request. Builder
Request for the CreateTrustConfig method.
com. google. cloud. certificatemanager. v1. Delete Certificate Issuance Config Request
Request for the DeleteCertificateIssuanceConfig method.
com. google. cloud. certificatemanager. v1. Delete Certificate Issuance Config Request. Builder
Request for the DeleteCertificateIssuanceConfig method.
com. google. cloud. certificatemanager. v1. Delete Certificate Map Entry Request
Request for the DeleteCertificateMapEntry method.
com. google. cloud. certificatemanager. v1. Delete Certificate Map Entry Request. Builder
Request for the DeleteCertificateMapEntry method.
com. google. cloud. certificatemanager. v1. Delete Certificate Map Request
Request for the DeleteCertificateMap method.
com. google. cloud. certificatemanager. v1. Delete Certificate Map Request. Builder
Request for the DeleteCertificateMap method.
com. google. cloud. certificatemanager. v1. Delete Certificate Request
Request for the DeleteCertificate method.
com. google. cloud. certificatemanager. v1. Delete Certificate Request. Builder
Request for the DeleteCertificate method.
com. google. cloud. certificatemanager. v1. Delete Dns Authorization Request
Request for the DeleteDnsAuthorization method.
com. google. cloud. certificatemanager. v1. Delete Dns Authorization Request. Builder
Request for the DeleteDnsAuthorization method.
com. google. cloud. certificatemanager. v1. Delete Trust Config Request
Request for the DeleteTrustConfig method.
com. google. cloud. certificatemanager. v1. Delete Trust Config Request. Builder
Request for the DeleteTrustConfig method.
com. google. cloud. certificatemanager. v1. Dns Authorization
A DnsAuthorization resource describes a way to perform domain authorization
for certificate issuance.
com. google. cloud. certificatemanager. v1. Dns Authorization. Builder
A DnsAuthorization resource describes a way to perform domain authorization
for certificate issuance.
com. google. cloud. certificatemanager. v1. Dns Authorization. Dns Resource Record
The structure describing the DNS Resource Record that needs to be added
to DNS configuration for the authorization to be usable by
certificate.
com. google. cloud. certificatemanager. v1. Dns Authorization. Dns Resource Record. Builder
The structure describing the DNS Resource Record that needs to be added
to DNS configuration for the authorization to be usable by
certificate.
com. google. cloud. certificatemanager. v1. Dns Authorization Name
com. google. cloud. certificatemanager. v1. Dns Authorization Name. Builder
Builder for projects/{project}/locations/{location}/dnsAuthorizations/{dns_authorization}.
com. google. cloud. certificatemanager. v1. Get Certificate Issuance Config Request
Request for the GetCertificateIssuanceConfig method.
com. google. cloud. certificatemanager. v1. Get Certificate Issuance Config Request. Builder
Request for the GetCertificateIssuanceConfig method.
com. google. cloud. certificatemanager. v1. Get Certificate Map Entry Request
Request for the GetCertificateMapEntry method.
com. google. cloud. certificatemanager. v1. Get Certificate Map Entry Request. Builder
Request for the GetCertificateMapEntry method.
com. google. cloud. certificatemanager. v1. Get Certificate Map Request
Request for the GetCertificateMap method.
com. google. cloud. certificatemanager. v1. Get Certificate Map Request. Builder
Request for the GetCertificateMap method.
com. google. cloud. certificatemanager. v1. Get Certificate Request
Request for the GetCertificate method.
com. google. cloud. certificatemanager. v1. Get Certificate Request. Builder
Request for the GetCertificate method.
com. google. cloud. certificatemanager. v1. Get Dns Authorization Request
Request for the GetDnsAuthorization method.
com. google. cloud. certificatemanager. v1. Get Dns Authorization Request. Builder
Request for the GetDnsAuthorization method.
com. google. cloud. certificatemanager. v1. Get Trust Config Request
Request for the GetTrustConfig method.
com. google. cloud. certificatemanager. v1. Get Trust Config Request. Builder
Request for the GetTrustConfig method.
com. google. cloud. certificatemanager. v1. List Certificate Issuance Configs Request
Request for the ListCertificateIssuanceConfigs method.
com. google. cloud. certificatemanager. v1. List Certificate Issuance Configs Request. Builder
Request for the ListCertificateIssuanceConfigs method.
com. google. cloud. certificatemanager. v1. List Certificate Issuance Configs Response
Response for the ListCertificateIssuanceConfigs method.
com. google. cloud. certificatemanager. v1. List Certificate Issuance Configs Response. Builder
Response for the ListCertificateIssuanceConfigs method.
com. google. cloud. certificatemanager. v1. List Certificate Map Entries Request
Request for the ListCertificateMapEntries method.
com. google. cloud. certificatemanager. v1. List Certificate Map Entries Request. Builder
Request for the ListCertificateMapEntries method.
com. google. cloud. certificatemanager. v1. List Certificate Map Entries Response
Response for the ListCertificateMapEntries method.
com. google. cloud. certificatemanager. v1. List Certificate Map Entries Response. Builder
Response for the ListCertificateMapEntries method.
com. google. cloud. certificatemanager. v1. List Certificate Maps Request
Request for the ListCertificateMaps method.
com. google. cloud. certificatemanager. v1. List Certificate Maps Request. Builder
Request for the ListCertificateMaps method.
com. google. cloud. certificatemanager. v1. List Certificate Maps Response
Response for the ListCertificateMaps method.
com. google. cloud. certificatemanager. v1. List Certificate Maps Response. Builder
Response for the ListCertificateMaps method.
com. google. cloud. certificatemanager. v1. List Certificates Request
Request for the ListCertificates method.
com. google. cloud. certificatemanager. v1. List Certificates Request. Builder
Request for the ListCertificates method.
com. google. cloud. certificatemanager. v1. List Certificates Response
Response for the ListCertificates method.
com. google. cloud. certificatemanager. v1. List Certificates Response. Builder
Response for the ListCertificates method.
com. google. cloud. certificatemanager. v1. List Dns Authorizations Request
Request for the ListDnsAuthorizations method.
com. google. cloud. certificatemanager. v1. List Dns Authorizations Request. Builder
Request for the ListDnsAuthorizations method.
com. google. cloud. certificatemanager. v1. List Dns Authorizations Response
Response for the ListDnsAuthorizations method.
com. google. cloud. certificatemanager. v1. List Dns Authorizations Response. Builder
Response for the ListDnsAuthorizations method.
com. google. cloud. certificatemanager. v1. List Trust Configs Request
Request for the ListTrustConfigs method.
com. google. cloud. certificatemanager. v1. List Trust Configs Request. Builder
Request for the ListTrustConfigs method.
com. google. cloud. certificatemanager. v1. List Trust Configs Response
Response for the ListTrustConfigs method.
com. google. cloud. certificatemanager. v1. List Trust Configs Response. Builder
Response for the ListTrustConfigs method.
com. google. cloud. certificatemanager. v1. Location Name
com. google. cloud. certificatemanager. v1. Location Name. Builder
Builder for projects/{project}/locations/{location}.
com. google. cloud. certificatemanager. v1. Operation Metadata
Represents the metadata of the long-running operation. Output only.
com. google. cloud. certificatemanager. v1. Operation Metadata. Builder
Represents the metadata of the long-running operation. Output only.
com. google. cloud. certificatemanager. v1. Trust Config
Defines a trust config.
com. google. cloud. certificatemanager. v1. Trust Config. Builder
Defines a trust config.
com. google. cloud. certificatemanager. v1. Trust Config. Intermediate
Defines an intermediate CA.
com. google. cloud. certificatemanager. v1. Trust Config. IntermediateCA. Builder
Defines an intermediate CA.
com. google. cloud. certificatemanager. v1. Trust Config. Trust Anchor
Defines a trust anchor.
com. google. cloud. certificatemanager. v1. Trust Config. Trust Anchor. Builder
Defines a trust anchor.
com. google. cloud. certificatemanager. v1. Trust Config. Trust Store
Defines a trust store.
com. google. cloud. certificatemanager. v1. Trust Config. Trust Store. Builder
Defines a trust store.
com. google. cloud. certificatemanager. v1. Trust Config Name
com. google. cloud. certificatemanager. v1. Trust Config Name. Builder
Builder for projects/{project}/locations/{location}/trustConfigs/{trust_config}.
com. google. cloud. certificatemanager. v1. Trust Conifg Proto
com. google. cloud. certificatemanager. v1. Update Certificate Map Entry Request
Request for the UpdateCertificateMapEntry method.
com. google. cloud. certificatemanager. v1. Update Certificate Map Entry Request. Builder
Request for the UpdateCertificateMapEntry method.
com. google. cloud. certificatemanager. v1. Update Certificate Map Request
Request for the UpdateCertificateMap method.
com. google. cloud. certificatemanager. v1. Update Certificate Map Request. Builder
Request for the UpdateCertificateMap method.
com. google. cloud. certificatemanager. v1. Update Certificate Request
Request for the UpdateCertificate method.
com. google. cloud. certificatemanager. v1. Update Certificate Request. Builder
Request for the UpdateCertificate method.
com. google. cloud. certificatemanager. v1. Update Dns Authorization Request
Request for the UpdateDnsAuthorization method.
com. google. cloud. certificatemanager. v1. Update Dns Authorization Request. Builder
Request for the UpdateDnsAuthorization method.
com. google. cloud. certificatemanager. v1. Update Trust Config Request
Request for the UpdateTrustConfig method.
com. google. cloud. certificatemanager. v1. Update Trust Config Request. Builder
Request for the UpdateTrustConfig method.
Interfaces
Interface
Description
com. google. cloud. certificatemanager. v1. Certificate. Managed Certificate. Authorization Attempt Info Or Builder
com. google. cloud. certificatemanager. v1. Certificate. Managed Certificate. Provisioning Issue Or Builder
com. google. cloud. certificatemanager. v1. Certificate. Managed Certificate Or Builder
com. google. cloud. certificatemanager. v1. Certificate. Self Managed Certificate Or Builder
com. google. cloud. certificatemanager. v1. Certificate Issuance Config. Certificate Authority Config. Certificate Authority Service Config Or Builder
com. google. cloud. certificatemanager. v1. Certificate Issuance Config. Certificate Authority Config Or Builder
com. google. cloud. certificatemanager. v1. Certificate Issuance Config Or Builder
com. google. cloud. certificatemanager. v1. Certificate Manager Grpc. Async Service
API Overview
Certificates Manager API allows customers to see and manage all their TLS
certificates.
com. google. cloud. certificatemanager. v1. Certificate Map. Gclb Target. Ip Config Or Builder
com. google. cloud. certificatemanager. v1. Certificate Map. Gclb Target Or Builder
com. google. cloud. certificatemanager. v1. Certificate Map Entry Or Builder
com. google. cloud. certificatemanager. v1. Certificate Map Or Builder
com. google. cloud. certificatemanager. v1. Certificate Or Builder
com. google. cloud. certificatemanager. v1. Create Certificate Issuance Config Request Or Builder
com. google. cloud. certificatemanager. v1. Create Certificate Map Entry Request Or Builder
com. google. cloud. certificatemanager. v1. Create Certificate Map Request Or Builder
com. google. cloud. certificatemanager. v1. Create Certificate Request Or Builder
com. google. cloud. certificatemanager. v1. Create Dns Authorization Request Or Builder
com. google. cloud. certificatemanager. v1. Create Trust Config Request Or Builder
com. google. cloud. certificatemanager. v1. Delete Certificate Issuance Config Request Or Builder
com. google. cloud. certificatemanager. v1. Delete Certificate Map Entry Request Or Builder
com. google. cloud. certificatemanager. v1. Delete Certificate Map Request Or Builder
com. google. cloud. certificatemanager. v1. Delete Certificate Request Or Builder
com. google. cloud. certificatemanager. v1. Delete Dns Authorization Request Or Builder
com. google. cloud. certificatemanager. v1. Delete Trust Config Request Or Builder
com. google. cloud. certificatemanager. v1. Dns Authorization. Dns Resource Record Or Builder
com. google. cloud. certificatemanager. v1. Dns Authorization Or Builder
com. google. cloud. certificatemanager. v1. Get Certificate Issuance Config Request Or Builder
com. google. cloud. certificatemanager. v1. Get Certificate Map Entry Request Or Builder
com. google. cloud. certificatemanager. v1. Get Certificate Map Request Or Builder
com. google. cloud. certificatemanager. v1. Get Certificate Request Or Builder
com. google. cloud. certificatemanager. v1. Get Dns Authorization Request Or Builder
com. google. cloud. certificatemanager. v1. Get Trust Config Request Or Builder
com. google. cloud. certificatemanager. v1. List Certificate Issuance Configs Request Or Builder
com. google. cloud. certificatemanager. v1. List Certificate Issuance Configs Response Or Builder
com. google. cloud. certificatemanager. v1. List Certificate Map Entries Request Or Builder
com. google. cloud. certificatemanager. v1. List Certificate Map Entries Response Or Builder
com. google. cloud. certificatemanager. v1. List Certificate Maps Request Or Builder
com. google. cloud. certificatemanager. v1. List Certificate Maps Response Or Builder
com. google. cloud. certificatemanager. v1. List Certificates Request Or Builder
com. google. cloud. certificatemanager. v1. List Certificates Response Or Builder
com. google. cloud. certificatemanager. v1. List Dns Authorizations Request Or Builder
com. google. cloud. certificatemanager. v1. List Dns Authorizations Response Or Builder
com. google. cloud. certificatemanager. v1. List Trust Configs Request Or Builder
com. google. cloud. certificatemanager. v1. List Trust Configs Response Or Builder
com. google. cloud. certificatemanager. v1. Operation Metadata Or Builder
com. google. cloud. certificatemanager. v1. Trust Config. IntermediateCA Or Builder
com. google. cloud. certificatemanager. v1. Trust Config. Trust Anchor Or Builder
com. google. cloud. certificatemanager. v1. Trust Config. Trust Store Or Builder
com. google. cloud. certificatemanager. v1. Trust Config Or Builder
com. google. cloud. certificatemanager. v1. Update Certificate Map Entry Request Or Builder
com. google. cloud. certificatemanager. v1. Update Certificate Map Request Or Builder
com. google. cloud. certificatemanager. v1. Update Certificate Request Or Builder
com. google. cloud. certificatemanager. v1. Update Dns Authorization Request Or Builder
com. google. cloud. certificatemanager. v1. Update Trust Config Request Or Builder
Enums
Enum
Description
com. google. cloud. certificatemanager. v1. Certificate. Managed Certificate. Authorization Attempt Info. Failure Reason
Reason for failure of the authorization attempt for the domain.
com. google. cloud. certificatemanager. v1. Certificate. Managed Certificate. Authorization Attempt Info. State
State of the domain for managed certificate issuance.
com. google. cloud. certificatemanager. v1. Certificate. Managed Certificate. Provisioning Issue. Reason
Reason for provisioning failures.
com. google. cloud. certificatemanager. v1. Certificate. Managed Certificate. State
State of the managed certificate resource.
com. google. cloud. certificatemanager. v1. Certificate. Scope
Certificate scope.
com. google. cloud. certificatemanager. v1. Certificate. Type Case
com. google. cloud. certificatemanager. v1. Certificate Issuance Config. Certificate Authority Config. Kind Case
com. google. cloud. certificatemanager. v1. Certificate Issuance Config. Key Algorithm
The type of keypair to generate.
com. google. cloud. certificatemanager. v1. Certificate Map. Gclb Target. Target Proxy Case
com. google. cloud. certificatemanager. v1. Certificate Map Entry. Match Case
com. google. cloud. certificatemanager. v1. Certificate Map Entry. Matcher
Defines predefined cases other than SNI-hostname match when this
configuration should be applied.
com. google. cloud. certificatemanager. v1. Dns Authorization. Type
DnsAuthorization type.
com. google. cloud. certificatemanager. v1. Serving State
Defines set of serving states associated with a resource.
com. google. cloud. certificatemanager. v1. Trust Config. IntermediateCA. Kind Case
com. google. cloud. certificatemanager. v1. Trust Config. Trust Anchor. Kind Case
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
