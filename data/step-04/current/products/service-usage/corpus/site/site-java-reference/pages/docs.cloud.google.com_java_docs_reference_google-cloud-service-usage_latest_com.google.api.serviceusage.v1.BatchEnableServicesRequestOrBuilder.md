---
title: "Interface BatchEnableServicesRequestOrBuilder (2.88.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-service-usage/latest/com.google.api.serviceusage.v1.BatchEnableServicesRequestOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-service-usage/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-service-usage/latest/com.google.api.serviceusage.v1.BatchEnableServicesRequestOrBuilder
  title: "Interface BatchEnableServicesRequestOrBuilder (2.88.0) \_|\_ Java client\
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
Interface BatchEnableServicesRequestOrBuilder (2.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.88.0 (latest)
2.87.0
2.85.0
2.83.0
2.82.0
2.80.0
2.78.0
2.76.0
2.75.0
2.74.0
2.73.0
2.72.0
2.70.0
2.68.0
2.67.0
2.64.0
2.63.0
2.62.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.51.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.39.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.27.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.7
2.2.8
public interface BatchEnableServicesRequestOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getParent()
public abstract String getParent ()
Parent to enable services on.
An example name would be:
projects/123 where 123 is the project number.
The BatchEnableServices method currently only supports projects.
string parent = 1;
Returns
Type
Description
String
The parent.
getParentBytes()
public abstract ByteString getParentBytes ()
Parent to enable services on.
An example name would be:
projects/123 where 123 is the project number.
The BatchEnableServices method currently only supports projects.
string parent = 1;
Returns
Type
Description
ByteString
The bytes for parent.
getServiceIds(int index)
public abstract String getServiceIds ( int index )
The identifiers of the services to enable on the project.
A valid identifier would be:
serviceusage.googleapis.com
Enabling services requires that each service is public or is shared with
the user enabling the service.
A single request can enable a maximum of 20 services at a time. If more
than 20 services are specified, the request will fail, and no state changes
will occur.
repeated string service_ids = 2;
Parameter
Name
Description
index
int The index of the element to return.
Returns
Type
Description
String
The serviceIds at the given index.
getServiceIdsBytes(int index)
public abstract ByteString getServiceIdsBytes ( int index )
The identifiers of the services to enable on the project.
A valid identifier would be:
serviceusage.googleapis.com
Enabling services requires that each service is public or is shared with
the user enabling the service.
A single request can enable a maximum of 20 services at a time. If more
than 20 services are specified, the request will fail, and no state changes
will occur.
repeated string service_ids = 2;
Parameter
Name
Description
index
int The index of the value to return.
Returns
Type
Description
ByteString
The bytes of the serviceIds at the given index.
getServiceIdsCount()
public abstract int getServiceIdsCount ()
The identifiers of the services to enable on the project.
A valid identifier would be:
serviceusage.googleapis.com
Enabling services requires that each service is public or is shared with
the user enabling the service.
A single request can enable a maximum of 20 services at a time. If more
than 20 services are specified, the request will fail, and no state changes
will occur.
repeated string service_ids = 2;
Returns
Type
Description
int
The count of serviceIds.
getServiceIdsList()
public abstract List<String> getServiceIdsList ()
The identifiers of the services to enable on the project.
A valid identifier would be:
serviceusage.googleapis.com
Enabling services requires that each service is public or is shared with
the user enabling the service.
A single request can enable a maximum of 20 services at a time. If more
than 20 services are specified, the request will fail, and no state changes
will occur.
repeated string service_ids = 2;
Returns
Type
Description
List < String >
A list containing the serviceIds.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
