---
title: "Class ContactSettings (1.13.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.types.ContactSettings
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/domains/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.types.ContactSettings
  title: "Class ContactSettings (1.13.0) \_|\_ Python client libraries \_|\_ Google\
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
Class ContactSettings (1.13.0)
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
ContactSettings ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Defines the contact information associated with a Registration .
ICANN <https://icann.org/> __ requires all domain names to have
associated contact information. The registrant_contact is
considered the domain's legal owner, and often the other contacts
are identical.
Attributes
Name
Description
privacy
google.cloud.domains_v1.types.ContactPrivacy
Required. Privacy setting for the contacts associated with
the Registration .
registrant_contact
google.cloud.domains_v1.types.ContactSettings.Contact
Required. The registrant contact for the Registration .
*Caution: Anyone with access to this email address, phone
number, and/or postal address can take control of the
domain.*
*Warning: For new Registration \ s, the registrant
receives an email confirmation that they must complete
within 15 days to avoid domain suspension.*
admin_contact
google.cloud.domains_v1.types.ContactSettings.Contact
Required. The administrative contact for the
Registration .
technical_contact
google.cloud.domains_v1.types.ContactSettings.Contact
Required. The technical contact for the Registration .
Classes
Contact
Contact ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Details required for a contact associated with a Registration .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
