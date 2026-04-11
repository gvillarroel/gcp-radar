---
title: "Enum ContactPrivacy (1.85.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/com.google.cloud.domains.v1.ContactPrivacy
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-domains/latest/com.google.cloud.domains.v1.ContactPrivacy
  title: "Enum ContactPrivacy (1.85.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Enum ContactPrivacy (1.85.0)
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
public enum ContactPrivacy extends Enum<ContactPrivacy> implements ProtocolMessageEnum
Defines a set of possible contact privacy settings for a Registration .
ICANN maintains the WHOIS database, a publicly
accessible mapping from domain name to contact information, and requires that
each domain name have an entry. Choose from these options to control how much
information in your ContactSettings is published.
Protobuf enum google.cloud.domains.v1.ContactPrivacy
Implements
ProtocolMessageEnum
Inherited Members
Enum.<T>valueOf(Class<T>,String)
Enum.clone()
Enum.compareTo(E)
Enum.equals(Object)
Enum.finalize()
Enum.getDeclaringClass()
Enum.hashCode()
Enum.name()
Enum.ordinal()
Enum.toString()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Static Fields
Name
Description
CONTACT_PRIVACY_UNSPECIFIED
The contact privacy settings are undefined.
CONTACT_PRIVACY_UNSPECIFIED = 0;
CONTACT_PRIVACY_UNSPECIFIED_VALUE
The contact privacy settings are undefined.
CONTACT_PRIVACY_UNSPECIFIED = 0;
PRIVATE_CONTACT_DATA
None of the data from ContactSettings is publicly available. Instead,
proxy contact data is published for your domain. Email sent to the proxy
email address is forwarded to the registrant's email address. Cloud Domains
provides this privacy proxy service at no additional cost.
PRIVATE_CONTACT_DATA = 2;
PRIVATE_CONTACT_DATA_VALUE
None of the data from ContactSettings is publicly available. Instead,
proxy contact data is published for your domain. Email sent to the proxy
email address is forwarded to the registrant's email address. Cloud Domains
provides this privacy proxy service at no additional cost.
PRIVATE_CONTACT_DATA = 2;
PUBLIC_CONTACT_DATA
All the data from ContactSettings is publicly available. When setting
this option, you must also provide a
PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT in the contact_notices field of the
request.
PUBLIC_CONTACT_DATA = 1;
PUBLIC_CONTACT_DATA_VALUE
All the data from ContactSettings is publicly available. When setting
this option, you must also provide a
PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT in the contact_notices field of the
request.
PUBLIC_CONTACT_DATA = 1;
REDACTED_CONTACT_DATA
Some data from ContactSettings is publicly available. The actual
information redacted depends on the domain. For details, see the
registration privacy
article .
REDACTED_CONTACT_DATA = 3;
REDACTED_CONTACT_DATA_VALUE
Some data from ContactSettings is publicly available. The actual
information redacted depends on the domain. For details, see the
registration privacy
article .
REDACTED_CONTACT_DATA = 3;
UNRECOGNIZED
Static Methods
Name
Description
forNumber(int value)
getDescriptor()
internalGetValueMap()
valueOf(Descriptors.EnumValueDescriptor desc)
valueOf(int value)
Deprecated. Use #forNumber(int) instead.
valueOf(String name)
values()
Methods
Name
Description
getDescriptorForType()
getNumber()
getValueDescriptor()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
