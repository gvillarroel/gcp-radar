---
title: "Package types (1.13.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/domains/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.types
  title: "Package types (1.13.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Package types (1.13.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.13.0 (latest)
1.12.0
1.11.0
1.10.2
1.9.0
1.8.1
1.7.5
1.6.0
1.5.2
1.4.1
1.3.0
1.2.3
1.1.3
1.0.0
0.4.3
0.3.0
0.2.3
0.1.0
API documentation for domains_v1.types package.
Classes
AuthorizationCode
Defines an authorization code.
ConfigureContactSettingsRequest
Request for the ConfigureContactSettings method.
ConfigureDnsSettingsRequest
Request for the ConfigureDnsSettings method.
ConfigureManagementSettingsRequest
Request for the ConfigureManagementSettings method.
ContactNotice
Notices related to contact information.
ContactPrivacy
Defines a set of possible contact privacy settings for a
Registration .
ICANN <https://icann.org/> __ maintains the WHOIS database, a
publicly accessible mapping from domain name to contact information,
and requires that each domain name have an entry. Choose from these
options to control how much information in your ContactSettings
is published.
ContactSettings
Defines the contact information associated with a Registration .
ICANN <https://icann.org/> __ requires all domain names to have
associated contact information. The registrant_contact is
considered the domain's legal owner, and often the other contacts
are identical.
DeleteRegistrationRequest
Request for the DeleteRegistration method.
DnsSettings
Defines the DNS configuration of a Registration , including name
servers, DNSSEC, and glue records.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
DomainNotice
Notices about special properties of certain domains.
ExportRegistrationRequest
Request for the ExportRegistration method.
GetRegistrationRequest
Request for the GetRegistration method.
ListRegistrationsRequest
Request for the ListRegistrations method.
ListRegistrationsResponse
Response for the ListRegistrations method.
ManagementSettings
Defines renewal, billing, and transfer settings for a
Registration .
OperationMetadata
Represents the metadata of the long-running operation. Output
only.
RegisterDomainRequest
Request for the RegisterDomain method.
RegisterParameters
Parameters required to register a new domain.
Registration
The Registration resource facilitates managing and configuring
domain name registrations.
There are several ways to create a new Registration resource:
To create a new Registration resource, find a suitable domain
name by calling the SearchDomains method with a query to see
available domain name options. After choosing a name, call
RetrieveRegisterParameters to ensure availability and obtain
information like pricing, which is needed to build a call to
RegisterDomain .
Another way to create a new Registration is to transfer an
existing domain from another registrar. First, go to the current
registrar to unlock the domain for transfer and retrieve the
domain's transfer authorization code. Then call
RetrieveTransferParameters to confirm that the domain is
unlocked and to get values needed to build a call to
TransferDomain .
ResetAuthorizationCodeRequest
Request for the ResetAuthorizationCode method.
RetrieveAuthorizationCodeRequest
Request for the RetrieveAuthorizationCode method.
RetrieveRegisterParametersRequest
Request for the RetrieveRegisterParameters method.
RetrieveRegisterParametersResponse
Response for the RetrieveRegisterParameters method.
RetrieveTransferParametersRequest
Request for the RetrieveTransferParameters method.
RetrieveTransferParametersResponse
Response for the RetrieveTransferParameters method.
SearchDomainsRequest
Request for the SearchDomains method.
SearchDomainsResponse
Response for the SearchDomains method.
TransferDomainRequest
Request for the TransferDomain method.
TransferLockState
Possible states of a Registration 's transfer lock.
TransferParameters
Parameters required to transfer a domain from another
registrar.
UpdateRegistrationRequest
Request for the UpdateRegistration method.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
