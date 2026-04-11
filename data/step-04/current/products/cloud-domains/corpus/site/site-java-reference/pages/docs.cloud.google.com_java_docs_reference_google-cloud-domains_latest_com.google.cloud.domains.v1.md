---
title: "Package com.google.cloud.domains.v1 (1.85.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/com.google.cloud.domains.v1
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/com.google.cloud.domains.v1
  title: "Package com.google.cloud.domains.v1 (1.85.0) \_|\_ Java client libraries\
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
Package com.google.cloud.domains.v1 (1.85.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.85.0 (latest)
1.84.0
1.82.0
1.80.0
1.79.0
1.78.0
1.77.0
1.75.0
1.73.0
1.72.0
1.71.0
1.70.0
1.69.0
1.67.0
1.65.0
1.64.0
1.61.0
1.60.0
1.59.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.50.0
1.49.0
1.48.0
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
1.36.0
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
1.24.0
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
1.8.0
1.6.0
1.5.0
1.4.0
1.3.0
1.2.0
1.1.0
1.0.6
0.7.0
0.6.1
0.5.4
GitHub Repository
Client Classes
Client classes are the main entry point to using a package.
They contain several variations of Java methods for each of the API's methods.
Client
Description
com. google. cloud. domains. v1. Domains Client
Service Description: The Cloud Domains API enables management and configuration of domain names.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
Settings Classes
Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.
Settings
Description
com. google. cloud. domains. v1. Contact Settings
Defines the contact information associated with a Registration .
ICANN requires all domain names to have associated
com. google. cloud. domains. v1. Dns Settings
Defines the DNS configuration of a Registration , including name servers,
DNSSEC, and glue records.
com. google. cloud. domains. v1. Domains Settings
Settings class to configure an instance of DomainsClient .
The default instance has everything set to sensible defaults:
com. google. cloud. domains. v1. Management Settings
Defines renewal, billing, and transfer settings for a Registration .
Classes
Class
Description
com. google. cloud. domains. v1. Authorization Code
Defines an authorization code.
com. google. cloud. domains. v1. Authorization Code. Builder
Defines an authorization code.
com. google. cloud. domains. v1. Configure Contact Settings Request
Request for the ConfigureContactSettings method.
com. google. cloud. domains. v1. Configure Contact Settings Request. Builder
Request for the ConfigureContactSettings method.
com. google. cloud. domains. v1. Configure Dns Settings Request
Request for the ConfigureDnsSettings method.
com. google. cloud. domains. v1. Configure Dns Settings Request. Builder
Request for the ConfigureDnsSettings method.
com. google. cloud. domains. v1. Configure Management Settings Request
Request for the ConfigureManagementSettings method.
com. google. cloud. domains. v1. Configure Management Settings Request. Builder
Request for the ConfigureManagementSettings method.
com. google. cloud. domains. v1. Contact Settings. Builder
Defines the contact information associated with a Registration .
ICANN requires all domain names to have associated
com. google. cloud. domains. v1. Contact Settings. Contact
Details required for a contact associated with a Registration .
com. google. cloud. domains. v1. Contact Settings. Contact. Builder
Details required for a contact associated with a Registration .
com. google. cloud. domains. v1. Delete Registration Request
Request for the DeleteRegistration method.
com. google. cloud. domains. v1. Delete Registration Request. Builder
Request for the DeleteRegistration method.
com. google. cloud. domains. v1. Dns Settings. Builder
Defines the DNS configuration of a Registration , including name servers,
DNSSEC, and glue records.
com. google. cloud. domains. v1. Dns Settings. Custom Dns
Configuration for an arbitrary DNS provider.
com. google. cloud. domains. v1. Dns Settings. Custom Dns. Builder
Configuration for an arbitrary DNS provider.
com. google. cloud. domains. v1. Dns Settings. Ds Record
Defines a Delegation Signer (DS) record, which is needed to enable DNSSEC
for a domain. It contains a digest (hash) of a DNSKEY record that must be
present in the domain's DNS zone.
com. google. cloud. domains. v1. Dns Settings. Ds Record. Builder
Defines a Delegation Signer (DS) record, which is needed to enable DNSSEC
for a domain. It contains a digest (hash) of a DNSKEY record that must be
present in the domain's DNS zone.
com. google. cloud. domains. v1. Dns Settings. Glue Record
Defines a host on your domain that is a DNS name server for your domain
and/or other domains. Glue records are a way of making the IP address of a
name server known, even when it serves DNS queries for its parent domain.
com. google. cloud. domains. v1. Dns Settings. Glue Record. Builder
Defines a host on your domain that is a DNS name server for your domain
and/or other domains. Glue records are a way of making the IP address of a
name server known, even when it serves DNS queries for its parent domain.
com. google. cloud. domains. v1. Dns Settings. Google Domains Dns
Configuration for using the free DNS zone provided by Google Domains as a
Registration 's dns_provider . You cannot configure the DNS zone itself
using the API. To configure the DNS zone, go to
com. google. cloud. domains. v1. Dns Settings. Google Domains Dns. Builder
Configuration for using the free DNS zone provided by Google Domains as a
Registration 's dns_provider . You cannot configure the DNS zone itself
using the API. To configure the DNS zone, go to
com. google. cloud. domains. v1. Domains Client. List Registrations Fixed Size Collection
com. google. cloud. domains. v1. Domains Client. List Registrations Page
com. google. cloud. domains. v1. Domains Client. List Registrations Paged Response
com. google. cloud. domains. v1. Domains Grpc
The Cloud Domains API enables management and configuration of domain names.
com. google. cloud. domains. v1. Domains Grpc. Domains Impl Base
Base class for the server implementation of the service Domains.
The Cloud Domains API enables management and configuration of domain names.
com. google. cloud. domains. v1. Domains Proto
com. google. cloud. domains. v1. Domains Settings. Builder
Builder for DomainsSettings.
com. google. cloud. domains. v1. Export Registration Request
Request for the ExportRegistration method.
com. google. cloud. domains. v1. Export Registration Request. Builder
Request for the ExportRegistration method.
com. google. cloud. domains. v1. Get Registration Request
Request for the GetRegistration method.
com. google. cloud. domains. v1. Get Registration Request. Builder
Request for the GetRegistration method.
com. google. cloud. domains. v1. List Registrations Request
Request for the ListRegistrations method.
com. google. cloud. domains. v1. List Registrations Request. Builder
Request for the ListRegistrations method.
com. google. cloud. domains. v1. List Registrations Response
Response for the ListRegistrations method.
com. google. cloud. domains. v1. List Registrations Response. Builder
Response for the ListRegistrations method.
com. google. cloud. domains. v1. Location Name
com. google. cloud. domains. v1. Location Name. Builder
Builder for projects/{project}/locations/{location}.
com. google. cloud. domains. v1. Management Settings. Builder
Defines renewal, billing, and transfer settings for a Registration .
com. google. cloud. domains. v1. Operation Metadata
Represents the metadata of the long-running operation. Output only.
com. google. cloud. domains. v1. Operation Metadata. Builder
Represents the metadata of the long-running operation. Output only.
com. google. cloud. domains. v1. Register Domain Request
Request for the RegisterDomain method.
com. google. cloud. domains. v1. Register Domain Request. Builder
Request for the RegisterDomain method.
com. google. cloud. domains. v1. Register Parameters
Parameters required to register a new domain.
com. google. cloud. domains. v1. Register Parameters. Builder
Parameters required to register a new domain.
com. google. cloud. domains. v1. Registration
The Registration resource facilitates managing and configuring domain name
registrations.
com. google. cloud. domains. v1. Registration. Builder
The Registration resource facilitates managing and configuring domain name
registrations.
com. google. cloud. domains. v1. Registration Name
com. google. cloud. domains. v1. Registration Name. Builder
Builder for projects/{project}/locations/{location}/registrations/{registration}.
com. google. cloud. domains. v1. Reset Authorization Code Request
Request for the ResetAuthorizationCode method.
com. google. cloud. domains. v1. Reset Authorization Code Request. Builder
Request for the ResetAuthorizationCode method.
com. google. cloud. domains. v1. Retrieve Authorization Code Request
Request for the RetrieveAuthorizationCode method.
com. google. cloud. domains. v1. Retrieve Authorization Code Request. Builder
Request for the RetrieveAuthorizationCode method.
com. google. cloud. domains. v1. Retrieve Register Parameters Request
Request for the RetrieveRegisterParameters method.
com. google. cloud. domains. v1. Retrieve Register Parameters Request. Builder
Request for the RetrieveRegisterParameters method.
com. google. cloud. domains. v1. Retrieve Register Parameters Response
Response for the RetrieveRegisterParameters method.
com. google. cloud. domains. v1. Retrieve Register Parameters Response. Builder
Response for the RetrieveRegisterParameters method.
com. google. cloud. domains. v1. Retrieve Transfer Parameters Request
Request for the RetrieveTransferParameters method.
com. google. cloud. domains. v1. Retrieve Transfer Parameters Request. Builder
Request for the RetrieveTransferParameters method.
com. google. cloud. domains. v1. Retrieve Transfer Parameters Response
Response for the RetrieveTransferParameters method.
com. google. cloud. domains. v1. Retrieve Transfer Parameters Response. Builder
Response for the RetrieveTransferParameters method.
com. google. cloud. domains. v1. Search Domains Request
Request for the SearchDomains method.
com. google. cloud. domains. v1. Search Domains Request. Builder
Request for the SearchDomains method.
com. google. cloud. domains. v1. Search Domains Response
Response for the SearchDomains method.
com. google. cloud. domains. v1. Search Domains Response. Builder
Response for the SearchDomains method.
com. google. cloud. domains. v1. Transfer Domain Request
Request for the TransferDomain method.
com. google. cloud. domains. v1. Transfer Domain Request. Builder
Request for the TransferDomain method.
com. google. cloud. domains. v1. Transfer Parameters
Parameters required to transfer a domain from another registrar.
com. google. cloud. domains. v1. Transfer Parameters. Builder
Parameters required to transfer a domain from another registrar.
com. google. cloud. domains. v1. Update Registration Request
Request for the UpdateRegistration method.
com. google. cloud. domains. v1. Update Registration Request. Builder
Request for the UpdateRegistration method.
Interfaces
Interface
Description
com. google. cloud. domains. v1. Authorization Code Or Builder
com. google. cloud. domains. v1. Configure Contact Settings Request Or Builder
com. google. cloud. domains. v1. Configure Dns Settings Request Or Builder
com. google. cloud. domains. v1. Configure Management Settings Request Or Builder
com. google. cloud. domains. v1. Contact Settings. Contact Or Builder
com. google. cloud. domains. v1. Contact Settings Or Builder
com. google. cloud. domains. v1. Delete Registration Request Or Builder
com. google. cloud. domains. v1. Dns Settings. Custom Dns Or Builder
com. google. cloud. domains. v1. Dns Settings. Ds Record Or Builder
com. google. cloud. domains. v1. Dns Settings. Glue Record Or Builder
com. google. cloud. domains. v1. Dns Settings. Google Domains Dns Or Builder
com. google. cloud. domains. v1. Dns Settings Or Builder
com. google. cloud. domains. v1. Domains Grpc. Async Service
The Cloud Domains API enables management and configuration of domain names.
com. google. cloud. domains. v1. Export Registration Request Or Builder
com. google. cloud. domains. v1. Get Registration Request Or Builder
com. google. cloud. domains. v1. List Registrations Request Or Builder
com. google. cloud. domains. v1. List Registrations Response Or Builder
com. google. cloud. domains. v1. Management Settings Or Builder
com. google. cloud. domains. v1. Operation Metadata Or Builder
com. google. cloud. domains. v1. Register Domain Request Or Builder
com. google. cloud. domains. v1. Register Parameters Or Builder
com. google. cloud. domains. v1. Registration Or Builder
com. google. cloud. domains. v1. Reset Authorization Code Request Or Builder
com. google. cloud. domains. v1. Retrieve Authorization Code Request Or Builder
com. google. cloud. domains. v1. Retrieve Register Parameters Request Or Builder
com. google. cloud. domains. v1. Retrieve Register Parameters Response Or Builder
com. google. cloud. domains. v1. Retrieve Transfer Parameters Request Or Builder
com. google. cloud. domains. v1. Retrieve Transfer Parameters Response Or Builder
com. google. cloud. domains. v1. Search Domains Request Or Builder
com. google. cloud. domains. v1. Search Domains Response Or Builder
com. google. cloud. domains. v1. Transfer Domain Request Or Builder
com. google. cloud. domains. v1. Transfer Parameters Or Builder
com. google. cloud. domains. v1. Update Registration Request Or Builder
Enums
Enum
Description
com. google. cloud. domains. v1. Contact Notice
Notices related to contact information.
com. google. cloud. domains. v1. Contact Privacy
Defines a set of possible contact privacy settings for a Registration .
ICANN maintains the WHOIS database, a publicly
com. google. cloud. domains. v1. Dns Settings. Dns Provider Case
com. google. cloud. domains. v1. Dns Settings. Ds Record. Algorithm
List of algorithms used to create a DNSKEY. Certain
algorithms are not supported for particular domains.
com. google. cloud. domains. v1. Dns Settings. Ds Record. Digest Type
List of hash functions that may have been used to generate a digest of a
DNSKEY.
com. google. cloud. domains. v1. Dns Settings. Ds State
The publication state of DS records for a Registration .
com. google. cloud. domains. v1. Domain Notice
Notices about special properties of certain domains.
com. google. cloud. domains. v1. Management Settings. Renewal Method
Defines how the Registration is renewed.
com. google. cloud. domains. v1. Register Parameters. Availability
Possible availability states of a domain name.
com. google. cloud. domains. v1. Registration. Issue
Possible issues with a Registration that require attention.
com. google. cloud. domains. v1. Registration. State
Possible states of a Registration .
com. google. cloud. domains. v1. Transfer Lock State
Possible states of a Registration 's transfer lock.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
