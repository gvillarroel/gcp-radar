---
title: "Class DnsSettings (1.13.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.types.DnsSettings
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/domains/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.types.DnsSettings
  title: "Class DnsSettings (1.13.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class DnsSettings (1.13.0)
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
DnsSettings ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Defines the DNS configuration of a Registration , including name
servers, DNSSEC, and glue records.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
custom_dns
google.cloud.domains_v1.types.DnsSettings.CustomDns
An arbitrary DNS provider identified by its
name servers.
This field is a member of oneof _ dns_provider .
google_domains_dns
google.cloud.domains_v1.types.DnsSettings.GoogleDomainsDns
The free DNS zone provided by `Google
Domains
glue_records
MutableSequence[ google.cloud.domains_v1.types.DnsSettings.GlueRecord ]
The list of glue records for this Registration . Commonly
empty.
Classes
CustomDns
CustomDns ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Configuration for an arbitrary DNS provider.
DsRecord
DsRecord ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Defines a Delegation Signer (DS) record, which is needed to
enable DNSSEC for a domain. It contains a digest (hash) of a
DNSKEY record that must be present in the domain's DNS zone.
DsState
DsState ( value )
The publication state of DS records for a Registration .
GlueRecord
GlueRecord ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Defines a host on your domain that is a DNS name server for your
domain and/or other domains. Glue records are a way of making the IP
address of a name server known, even when it serves DNS queries for
its parent domain. For example, when ns.example.com is a name
server for example.com , the host ns.example.com must have a
glue record to break the circular DNS reference.
GoogleDomainsDns
GoogleDomainsDns ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Configuration for using the free DNS zone provided by Google Domains
as a Registration 's dns_provider . You cannot configure the
DNS zone itself using the API. To configure the DNS zone, go to
Google Domains <https://domains.google/> __.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
