---
title: "Class ContactPrivacy (1.13.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.types.ContactPrivacy
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/domains/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.types.ContactPrivacy
  title: "Class ContactPrivacy (1.13.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class ContactPrivacy (1.13.0)
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
ContactPrivacy ( value )
Defines a set of possible contact privacy settings for a
Registration .
ICANN <https://icann.org/> __ maintains the WHOIS database, a
publicly accessible mapping from domain name to contact information,
and requires that each domain name have an entry. Choose from these
options to control how much information in your ContactSettings
is published.
Enums
Name
Description
CONTACT_PRIVACY_UNSPECIFIED
The contact privacy settings are undefined.
PUBLIC_CONTACT_DATA
All the data from `ContactSettings` is publicly available. When setting this option, you must also provide a `PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT` in the `contact_notices` field of the request.
PRIVATE_CONTACT_DATA
None of the data from `ContactSettings` is publicly available. Instead, proxy contact data is published for your domain. Email sent to the proxy email address is forwarded to the registrant's email address. Cloud Domains provides this privacy proxy service at no additional cost.
REDACTED_CONTACT_DATA
Some data from `ContactSettings` is publicly available. The actual information redacted depends on the domain. For details, see `the registration privacy article
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
