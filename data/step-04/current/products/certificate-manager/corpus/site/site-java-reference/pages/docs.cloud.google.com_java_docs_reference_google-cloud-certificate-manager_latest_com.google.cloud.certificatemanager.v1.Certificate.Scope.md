---
title: "Enum Certificate.Scope (0.91.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1.Certificate.Scope
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-certificate-manager/latest/com.google.cloud.certificatemanager.v1.Certificate.Scope
  title: "Enum Certificate.Scope (0.91.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Enum Certificate.Scope (0.91.0)
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
public enum Certificate . Scope extends Enum<Certificate . Scope > implements ProtocolMessageEnum
Certificate scope.
Protobuf enum google.cloud.certificatemanager.v1.Certificate.Scope
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
ALL_REGIONS
Certificates with ALL_REGIONS scope are served from all Google Cloud
regions. See https://cloud.google.com/compute/docs/regions-zones .
ALL_REGIONS = 2;
ALL_REGIONS_VALUE
Certificates with ALL_REGIONS scope are served from all Google Cloud
regions. See https://cloud.google.com/compute/docs/regions-zones .
ALL_REGIONS = 2;
DEFAULT
Certificates with default scope are served from core Google data centers.
If unsure, choose this option.
DEFAULT = 0;
DEFAULT_VALUE
Certificates with default scope are served from core Google data centers.
If unsure, choose this option.
DEFAULT = 0;
EDGE_CACHE
Certificates with scope EDGE_CACHE are special-purposed certificates,
served from Edge Points of Presence.
See https://cloud.google.com/vpc/docs/edge-locations .
EDGE_CACHE = 1;
EDGE_CACHE_VALUE
Certificates with scope EDGE_CACHE are special-purposed certificates,
served from Edge Points of Presence.
See https://cloud.google.com/vpc/docs/edge-locations .
EDGE_CACHE = 1;
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
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
